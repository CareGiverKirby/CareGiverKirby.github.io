// Selected charms state
let selectedCharms = new Set();

// Cookie management
function saveState() {
    const state = {
        charms: Array.from(selectedCharms),
        timestamp: new Date().getTime(),
        version: '1.0'
    };
    document.cookie = `moodBracelet=${JSON.stringify(state)};max-age=2592000;path=/`;
    
    // Trigger URL update
    updateUrlWithoutReload();
}

function loadState() {
    const cookie = document.cookie.split(';').find(c => c.trim().startsWith('moodBracelet='));
    if (cookie) {
        try {
            const state = JSON.parse(cookie.split('=')[1]);
            
            // Check if state is older than 24 hours
            const now = new Date().getTime();
            const yesterday = now - (24 * 60 * 60 * 1000);
            
            if (state.timestamp && state.timestamp > yesterday) {
                selectedCharms = new Set(state.charms);
                updateBraceletDisplay();
            } else {
                // Clear expired state
                document.cookie = 'moodBracelet=;max-age=0;path=/';
                selectedCharms = new Set();
            }
        } catch (e) {
            console.error('Failed to load state from cookie');
            selectedCharms = new Set();
        }
    }
}

function updateUrlWithoutReload() {
    const url = generateShareableUrl();
    window.history.replaceState({}, '', url);
}

// Toggle charm selection
function toggleCharm(charmId) {
    const charm = document.getElementById(`charm-${charmId}`);
    if (selectedCharms.has(charmId)) {
        selectedCharms.delete(charmId);
        charm.classList.remove('selected');
    } else {
        selectedCharms.add(charmId);
        charm.classList.add('selected');
    }
    updateBraceletDisplay();
    saveState();
}

// Update bracelet visualization
function updateBraceletDisplay() {
    const bracelet = document.getElementById('bracelet');
    bracelet.innerHTML = '';
    
    selectedCharms.forEach(charmId => {
        const charm = CharmSystem.charms[charmId];
        
        const container = document.createElement('div');
        container.className = 'tooltip';

        const charmElement = document.createElement('div');
        charmElement.className = 'charm';
        charmElement.setAttribute('data-charm-id', charmId);
        charmElement.setAttribute('data-category', charm.category);
        charmElement.onclick = () => toggleCharm(charmId);
        
        // Try to load the image
        if (Array.isArray(charm.image)) {
            // Handle combined icons
            Promise.all(charm.image.map(img => loadImage(img)))
                .then(images => {
                    charmElement.classList.add('combined-charm');

                    images.forEach((img, index) => {
                        const subDiv = document.createElement('div');
                        subDiv.className = `sub-charm sub-charm-${index + 1}`;
                        subDiv.style.backgroundImage = `url(${img.src})`;
                        charmElement.appendChild(subDiv);
                    });
                })
                .catch(() => {
                    charmElement.textContent = charm.emoji;
                    charmElement.classList.add('emoji-fallback');
                });
        } else {
            const img = new Image();
            img.onload = () => {
                charmElement.style.backgroundImage = `url(${charm.image})`;
                charmElement.classList.remove('emoji-fallback');
            };
            img.onerror = () => {
                charmElement.textContent = charm.emoji;
                charmElement.classList.add('emoji-fallback');
            };
            img.src = charm.image;
        }

        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip-text';
        tooltip.textContent = charm.meaning;

        container.appendChild(charmElement);
        container.appendChild(tooltip);
        bracelet.appendChild(container);
    });
}

// Generate shareable URL
function generateShareableUrl() {
    const state = Array.from(selectedCharms);
    const encoded = btoa(JSON.stringify(state));
    // Get the base path by removing the filename from the current path
    const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    return `${window.location.origin}${basePath}view.html?bracelet=${encoded}`;
}

// Share functionality
function setupSharing() {
    const shareButton = document.getElementById('shareButton');
    const shareLightbox = document.getElementById('shareLightbox');
    const shareUrlInput = document.getElementById('shareUrl');
    const copyButton = document.getElementById('copyButton');
    const copySuccess = document.getElementById('copySuccess');
    const closeLightbox = document.querySelector('.close-lightbox');

    // Open lightbox and setup share URL
    shareButton.onclick = () => {
        const url = generateShareableUrl();
        shareUrlInput.value = url;
        shareLightbox.classList.add('visible');
        shareUrlInput.select();
    };

    // Copy URL to clipboard
    copyButton.onclick = () => {
        shareUrlInput.select();
        navigator.clipboard.writeText(shareUrlInput.value).then(() => {
            copySuccess.style.display = 'block';
            setTimeout(() => {
                copySuccess.style.display = 'none';
            }, 2000);
        });
    };

    // Close lightbox when clicking close button
    closeLightbox.onclick = () => {
        shareLightbox.classList.remove('visible');
    };

    // Close lightbox when clicking outside
    shareLightbox.onclick = (e) => {
        if (e.target === shareLightbox) {
            shareLightbox.classList.remove('visible');
        }
    };

    // Handle 'Escape' key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && shareLightbox.classList.contains('visible')) {
            shareLightbox.classList.remove('visible');
        }
    });
}

// Helper function for clipboard operations
function copyToClipboard(text) {
    return navigator.clipboard.writeText(text);
}

// Load bracelet from URL if present
function loadFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const braceletParam = params.get('bracelet');
    if (braceletParam) {
        try {
            const state = JSON.parse(atob(braceletParam));
            selectedCharms = new Set(state);
            updateBraceletDisplay();
        } catch (e) {
            console.error('Failed to load bracelet from URL');
        }
    }
}

// Helper function for loading images
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

// Determine if we're in view-only mode
function isViewOnly() {
    return window.location.pathname.endsWith('view.html');
}

// Initialize everything
window.onload = () => {
    if (!isViewOnly()) {
        CharmSystem.initializeCharmGrid();
        setupSharing();
    }
    loadState();
    loadFromUrl();
};