function wrapFooter() {
    const footer = `
    <footer>
        <p>&copy; 2026 My Company</p>
    </footer>`;
    document.body.insertAdjacentHTML('beforeend', footer);
}

generateDynamicContent();  // Assuming this function is already defined in your script.js