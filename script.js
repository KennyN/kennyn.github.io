function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

function showOverlay(certId) {
    const overlay = document.getElementById('overlay');
    const certImage = document.getElementById('cert-image');
    
    // Example: Set the source based on the certification ID
    if (certId === 'cert1') {
        certImage.src = 'assets/security.pdf'; // Replace with actual paths
    }
    
    overlay.classList.add('active');
}

function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    document.getElementById('cert-image').src = ""; // Clear the source to stop the loading of the iframe
}
