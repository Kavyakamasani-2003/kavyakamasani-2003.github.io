document.addEventListener('DOMContentLoaded', () => {
    // Select elements that might exist on different pages
    const themeModalToggle = document.getElementById('theme-modal-toggle');
    const themeModal = document.getElementById('theme-modal');
    const lightThemeBtn = document.getElementById('light-theme');
    const darkThemeBtn = document.getElementById('dark-theme');
    const themeIcon = document.getElementById('theme-icon');

    // Function to apply theme
    function applyTheme(theme) {
        // Remove existing theme classes
        document.documentElement.classList.remove('light-mode', 'dark-mode');
        
        switch(theme) {
            case 'light':
                document.documentElement.classList.add('light-mode');
                if (themeIcon) themeIcon.innerHTML = '☀️';
                break;
            case 'dark':
                document.documentElement.classList.add('dark-mode');
                if (themeIcon) themeIcon.innerHTML = '🌙';
                break;
        }
        
        // Save theme preference
        localStorage.setItem('portfolio-theme', theme);
        
        // Close modal if it exists
        if (themeModal) {
            themeModal.classList.remove('show');
        }
    }

    // Toggle modal visibility if elements exist
    if (themeModalToggle && themeModal) {
        themeModalToggle.addEventListener('click', () => {
            themeModal.classList.toggle('show');
        });

        // Close modal when clicking outside
        document.addEventListener('click', (event) => {
            if (themeModal && !themeModal.contains(event.target) && event.target !== themeModalToggle) {
                themeModal.classList.remove('show');
            }
        });
    }

    // Theme selection buttons
    if (lightThemeBtn) {
        lightThemeBtn.addEventListener('click', () => applyTheme('light'));
    }

    if (darkThemeBtn) {
        darkThemeBtn.addEventListener('click', () => applyTheme('dark'));
    }

    // Initialize theme on page load
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    applyTheme(savedTheme);
});