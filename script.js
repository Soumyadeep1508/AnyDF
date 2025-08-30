document.getElementById('convertBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    const status = document.getElementById('status');
    const downloadLink = document.getElementById('downloadLink');
    
    // Reset UI
    status.textContent = '';
    downloadLink.style.display = 'none';
    downloadLink.removeAttribute('href');
    downloadLink.removeAttribute('download');

    if (!fileInput.files.length) {
        status.textContent = 'Please select a file.';
        return;
    }

    const file = fileInput.files[0];
    status.textContent = 'Converting...';

    try {
        const { PDFDocument } = PDFLib;
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();

        if (file.type.startsWith('text/') || file.name.endsWith('.txt')) {
            const text = await file.text();
            const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
            page.drawText(text, { x: 50, y: page.getHeight() - 50, font, size: 12 });
        } else if (file.type.startsWith('image/')) {
            const imageBytes = await file.arrayBuffer();
            let image;
            if (file.type === 'image/jpeg') {
                image = await pdfDoc.embedJpg(imageBytes);
            } else if (file.type === 'image/png') {
                image = await pdfDoc.embedPng(imageBytes);
            } else {
                throw new Error('Unsupported image format. Use JPEG or PNG.');
            }
            const { width, height } = image.scale(0.5);
            page.drawImage(image, { x: 50, y: page.getHeight() - height - 50, width, height });
        } else {
            status.textContent = 'Unsupported file type. Try text (.txt) or image (.jpg, .png) files.';
            return;
        }

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        
        // Set up download link
        downloadLink.href = url;
        downloadLink.download = file.name.split('.')[0] + '.pdf';
        downloadLink.textContent = 'Download PDF';
        downloadLink.style.display = 'inline-block';
        status.textContent = 'Conversion successful!';

        // Automatically trigger download
        downloadLink.click();

        // Clean up Blob URL after a short delay
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 1000);
    } catch (error) {
        console.error('Error converting file:', error);
        status.textContent = `Error: ${error.message || 'Failed to convert file. Please try again.'}`;
    }
});