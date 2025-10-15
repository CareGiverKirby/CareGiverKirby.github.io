// @ts-nocheck
/* This file contains charm definitions for the mood bracelet app */

/** @typedef {Object} Charm
 * @property {string} id - Unique identifier for the charm
 * @property {string} name - Display name of the charm
 * @property {string} meaning - Description of what the charm means
 * @property {string|string[]} image - Path to the charm's image or array of image paths for combined charms
 * @property {string} emoji - Fallback emoji character
 * @property {'needs'|'boundaries'|'mood'|'activity'|'physical'|'identity'} category - Category the charm belongs to
 */

/** @type {Object.<string, Charm>} */
const charms = {
    hungry: {
        id: 'hungry',
        name: 'Hungry',
        meaning: 'Feed me!',
        image: 'images/charms/openmoji-bowl.svg',
        emoji: '🍽️',
        category: 'needs'
    },
    flirty: {
        id: 'flirty',
        name: 'Flirty',
        meaning: 'Open to flirting!',
        image: ['images/charms/openmoji-wink.svg', 'images/charms/openmoji-hearts.svg'],
        emoji: '😘',
        category: 'mood'
    },
    sfw: {
        id: 'sfw',
        name: 'SFW Only',
        meaning: 'SFW Interactions Only!',
        image: 'images/charms/openmoji-necktie.svg',
        emoji: '👔',
        category: 'boundaries'
    },
    horny: {
        id: 'horny',
        name: 'Horny',
        meaning: 'Horny AF!',
        image: ['images/charms/openmoji-devil.svg', 'images/charms/openmoji-fire.svg'],
        emoji: '�',
        category: 'mood'
    },
    noTouch: {
        id: 'noTouch',
        name: 'No Touch',
        meaning: "Touch sensitive.",
        image: 'images/charms/openmoji-prohibited.svg',
        emoji: '🚫',
        category: 'boundaries'
    },
    noNoise: {
        id: 'noNoise',
        name: 'No Noise',
        meaning: "Noise sensitive.",
        image: 'images/charms/openmoji-prohibited.svg',
        emoji: '🚫',
        category: 'boundaries'
    },
    noTalk: {
        id: 'noTalk',
        name: 'No Talk',
        meaning: "I don't feel like talking.",
        image: 'images/charms/openmoji-shushing.svg',
        emoji: '🤫',
        category: 'boundaries'
    },
    snuggle: {
        id: 'snuggle',
        name: 'Snuggle',
        meaning: 'Snuggle and cuddle me!',
        image: ['images/charms/openmoji-hearts.svg', 'images/charms/openmoji-hugging.svg'],
        emoji: '🤗',
        category: 'needs'
    },
    takeCareOfMe: {
        id: 'takeCareOfMe',
        name: 'Care',
        meaning: 'Take care of me!',
        image: ['images/charms/openmoji-bandage.svg', 'images/charms/openmoji-hearts.svg'],
        emoji: '🥺',
        category: 'needs'
    },
    fightMe: {
        id: 'fightMe',
        name: 'Fight',
        meaning: 'Fight me!',
        image: 'images/charms/openmoji-boxing.svg',
        emoji: '👊',
        category: 'mood'
    },
    letMeCare: {
        id: 'letMeCare',
        name: 'Let Me Care',
        meaning: 'Let me take care of you!',
        image: ['images/charms/openmoji-nurse.svg', 'images/charms/openmoji-hearts.svg'],
        emoji: '💝',
        category: 'needs'
    },
    aloneTime: {
        id: 'aloneTime',
        name: 'Alone Time',
        meaning: 'I need alone time!',
        image: 'images/charms/openmoji-meditation.svg',
        emoji: '🧘‍♀️',
        category: 'needs'
    },
    active: {
        id: 'active',
        name: 'Active',
        meaning: "Let's get active",
        image: 'images/charms/openmoji-running.svg',
        emoji: '🏃‍♀️',
        category: 'activity'
    },
    cozy: {
        id: 'cozy',
        name: 'Cozy',
        meaning: "Let's get cozy",
        image: 'images/charms/openmoji-blanket.svg',
        emoji: '🛋️',
        category: 'activity'
    },
    together: {
        id: 'together',
        name: 'Together',
        meaning: "Let's do something together",
        image: ['images/charms/openmoji-holding-hands.svg', 'images/charms/openmoji-hearts.svg'],
        emoji: '👫',
        category: 'activity'
    },
    parallel: {
        id: 'parallel',
        name: 'Parallel Play',
        meaning: "Let's do parallel play",
        image: ['images/charms/openmoji-books.svg', 'images/charms/openmoji-video-game.svg'],
        emoji: '👥',
        category: 'activity'
    },
    depressed: {
        id: 'depressed',
        name: 'Depressed',
        meaning: 'Today sucked and I want to die',
        image: ['images/charms/openmoji-crying.svg', 'images/charms/openmoji-broken-heart.svg'],
        emoji: '💔',
        category: 'mood'
    },
/*     babyMe: {
        id: 'babyMe',
        name: 'Baby Me',
        meaning: 'Baby me!',
        image: ['images/charms/openmoji-baby.svg', 'images/charms/openmoji-sparkles.svg'],
        emoji: '👶',
        category: 'needs'
    }, */
    cold: {
        id: 'cold',
        name: 'Cold',
        meaning: "I'm so cold!",
        image: 'images/charms/openmoji-cold-face.svg',
        emoji: '🥶',
        category: 'physical'
    },
    hot: {
        id: 'hot',
        name: 'Hot',
        meaning: "I'm too hot!",
        image: 'images/charms/openmoji-hot-face.svg',
        emoji: '🥵',
        category: 'physical'
    },
    clean: {
        id: 'clean',
        name: 'Clean',
        meaning: "I feel gross, let's get clean!",
        image: 'images/charms/openmoji-shower.svg',
        emoji: '🚿',
        category: 'needs'
    },
    daddy: {
        id: 'daddy',
        name: 'Caregiver',
        meaning: "You're my caregiver!",
        image: ['images/charms/openmoji-man.svg', 'images/charms/openmoji-crown.svg'],
        emoji: '👨',
        category: 'identity'
    },
    littleGirl: {
        id: 'littleGirl',
        name: 'Little Girl',
        meaning: "I'm feeling little!",
        image: ['images/charms/openmoji-girl.svg', 'images/charms/openmoji-sparkles.svg'],
        emoji: '👧',
        category: 'identity'
    },
    bunny: {
        id: 'bunny',
        name: 'Bunny',
        meaning: "I'm your little pet!",
        image: ['images/charms/openmoji-hearts.svg', 'images/charms/openmoji-sparkles.svg'],
        emoji: '🐰',
        category: 'identity'
    },
    bigDog: {
        id: 'bigDog',
        name: 'Big Dog',
        meaning: "You're my big pet!",
        image: ['images/charms/openmoji-crown.svg', 'images/charms/openmoji-sparkling-heart.svg'],
        emoji: '🐕',
        category: 'identity'
    },
    pain: {
        id: 'pain',
        name: 'Pain',
        meaning: "I'm in pain!",
        image: 'images/charms/openmoji-face-with-bandage.svg',
        emoji: '🤕',
        category: 'physical'
    },
    dirtyTalk: {
        id: 'dirtyTalk',
        name: 'Dirty Talk',
        meaning: 'Talk/text dirty to me!',
        image: ['images/charms/openmoji-kiss.svg', 'images/charms/openmoji-speech.svg'],
        emoji: '👄',
        category: 'mood'
    },
/*     dirtyText: {
        id: 'dirtyText',
        name: 'Dirty Text',
        meaning: 'Text dirty to me!',
        image: ['images/charms/openmoji-phone.svg', 'images/charms/openmoji-wink.svg'],
        emoji: '📱',
        category: 'mood'
    }, */
    affirmations: {
        id: 'affirmations',
        name: 'Affirmations',
        meaning: 'Affirmations please!',
        image: ['images/charms/openmoji-sparkling-heart.svg', 'images/charms/openmoji-speech.svg'],
        emoji: '💕',
        category: 'needs'
    },
/*     holdMe: {
        id: 'holdMe',
        name: 'Hold Me',
        meaning: 'Just hold me.',
        image: 'images/charms/openmoji-hugging.svg',
        emoji: '🫂',
        category: 'needs'
    }, */
    vent: {
        id: 'vent',
        name: 'Vent',
        meaning: 'Let me vent.',
        image: ['images/charms/openmoji-steam.svg', 'images/charms/openmoji-speech.svg'],
        emoji: '💭',
        category: 'needs'
    },
    angry: {
        id: 'angry',
        name: 'Angry',
        meaning: "I'm angry!",
        image: 'images/charms/openmoji-angry.svg',
        emoji: '😠',
        category: 'mood'
    },
    sad: {
        id: 'sad',
        name: 'Sad',
        meaning: "I'm sad!",
        image: 'images/charms/openmoji-angry.svg',
        emoji: '😠',
        category: 'mood'
    },
    sick: {
        id: 'sick',
        name: 'Under Weather',
        meaning: 'I feel sick',
        image: 'images/charms/openmoji-sick.svg',
        emoji: '🤒',
        category: 'physical'
    },
    sleepy: {
        id: 'sleepy',
        name: 'Sleepy',
        meaning: 'I feel sleepy',
        image: 'images/charms/openmoji-sleeping.svg',
        emoji: '😴',
        category: 'physical'
    },
    silly: {
        id: 'silly',
        name: 'Be Silly',
        meaning: 'Be silly with me',
        image: ['images/charms/openmoji-silly.svg', 'images/charms/openmoji-sparkles.svg'],
        emoji: '😛',
        category: 'mood'
    },
/*     treat: {
        id: 'treat',
        name: 'Treat',
        meaning: 'Need a yummy treat please!',
        image: ['images/charms/openmoji-candy.svg', 'images/charms/openmoji-sparkles.svg'],
        emoji: '🍬',
        category: 'needs'
    }, */
    busy: {
        id: 'busy',
        name: 'Busy',
        meaning: 'Busy - focused on other things',
        image: ['images/charms/openmoji-laptop.svg', 'images/charms/openmoji-steam.svg'],
        emoji: '💻',
        category: 'boundaries'
    }
};

// Function to initialize the charm grid
function initializeCharmGrid() {
    const grid = document.getElementById('charmGrid');
    const categories = {};
    
    // Group charms by category
    Object.values(charms).forEach(charm => {
        if (!categories[charm.category]) {
            categories[charm.category] = [];
        }
        categories[charm.category].push(charm);
    });

    // Create sections for each category
    Object.entries(categories).forEach(([category, categoryCharms]) => {
        const section = document.createElement('div');
        section.className = 'category-section';
        section.setAttribute('data-category', category);
        
        const title = document.createElement('h3');
        title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        section.appendChild(title);

        const categoryGrid = document.createElement('div');
        categoryGrid.className = 'category-grid';

        categoryCharms.forEach(charm => {
            const charmElement = createCharmElement(charm);
            categoryGrid.appendChild(charmElement);
        });

        section.appendChild(categoryGrid);
        grid.appendChild(section);
    });
}

// Create a charm element
function createCharmElement(charm) {
    const container = document.createElement('div');
    container.className = 'tooltip';

    const div = document.createElement('div');
    div.className = 'charm';
    div.id = `charm-${charm.id}`;
    
    if (Array.isArray(charm.image)) {
        // Handle combined icons
        Promise.all(charm.image.map(img => loadImage(img)))
            .then(images => {
                div.classList.add('combined-charm');
                images.forEach((img, index) => {
                    const subDiv = document.createElement('div');
                    subDiv.className = `sub-charm sub-charm-${index + 1}`;
                    subDiv.style.backgroundImage = `url(${img.src})`;
                    div.appendChild(subDiv);
                });
            })
            .catch(() => {
                div.textContent = charm.emoji;
                div.classList.add('emoji-fallback');
            });
    } else {
        // Single icon handling
        const img = new Image();
        img.onload = () => {
            div.style.backgroundImage = `url(${charm.image})`;
            div.classList.remove('emoji-fallback');
        };
        img.onerror = () => {
            div.textContent = charm.emoji;
            div.classList.add('emoji-fallback');
        };
        img.src = charm.image;
    }

    div.onclick = () => toggleCharm(charm.id);

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip-text';
    tooltip.textContent = charm.meaning;

    container.appendChild(div);
    container.appendChild(tooltip);
    return container;
}

// Helper function to load images
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

// Export functions and data for use in bracelet.js
window.CharmSystem = {
    charms,
    initializeCharmGrid
};