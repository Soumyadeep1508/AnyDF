# AnyDF - File to PDF Converter

AnyDF is a lightweight, client-side web application that converts text and image files to PDF format directly in the browser. Built with HTML, CSS, and JavaScript, it uses the `pdf-lib.js` library to generate downloadable PDFs without requiring server-side processing. The site features a clean, responsive interface, making it easy to convert files on both desktop and mobile devices.

## Features

- **File Conversion**: Supports conversion of text (`.txt`) and image (`.jpg`, `.png`) files to PDF.
- **Automatic Download**: PDFs are automatically downloaded after conversion for a seamless user experience.
- **Responsive Design**: Modern, user-friendly interface optimized for all screen sizes.
- **Client-Side Processing**: Ensures fast conversions and maintains user privacy by avoiding server uploads.
- **Error Handling**: Provides clear feedback for unsupported file types or conversion errors.

## Technologies

- **HTML5**: Structures the web interface.
- **CSS3**: Delivers a polished and responsive design.
- **JavaScript**: Manages file processing and PDF generation.
- **pdf-lib.js**: Handles PDF creation and manipulation in the browser.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).
- A local web server (e.g., Python's `http.server`) to serve files, as file inputs may not work when opening `index.html` directly due to browser security restrictions.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/anydf.git
   ```
2. Navigate to the project directory:
   ```bash
   cd anydf
   ```
3. Serve the files using a local web server. For example, with Python:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and visit `http://localhost:8000`.

### Project Structure

```
anydf/
├── index.html       # Main HTML file
├── styles.css       # CSS for styling
├── script.js        # JavaScript for file conversion logic
└── README.md        # This file
```

## Usage

1. Open the AnyDF website in your browser.
2. Click the file input to select a `.txt`, `.jpg`, or `.png` file.
3. Click the "Convert to PDF" button.
4. The converted PDF will automatically download, or you can click the "Download PDF" link if prompted.
5. Check the status message for feedback on the conversion process.

## Limitations

- Currently supports only `.txt`, `.jpg`, and `.png` files. Other formats (e.g., `.docx`, `.pdf`) require server-side processing for conversion.
- Large files may slow down performance due to client-side processing.
- Browser security restrictions may prevent file inputs from working if the site is not served via a web server.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please open an issue to discuss major changes before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [pdf-lib.js](https://pdf-lib.js.org/) for enabling client-side PDF generation.
- Built as a simple, open-source tool for file-to-PDF conversion.

## Contact

For questions or suggestions, open an issue or reach out via GitHub.