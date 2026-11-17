
// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
];

// A4 CREATURE COLLECTION
// Student JavaScript


// Select the collection and preference controls
const $collection = document.querySelector('#collection');
const $theme = document.querySelector('#theme');
const $layout = document.querySelector('#layout');
const $status = document.querySelector('#status');

// Assignment-specific Local Storage key
const storageKey = 'mtm6302-a4-creature-preferences';


// 1. GENERATE THE CREATURE COLLECTION


// Pseudocode: Loop through the creatures and create an entry.
function generateCreatures() {
  $collection.innerHTML = '';

  for (const creature of $creatures) {
    const $entry = document.createElement('li');
    $entry.classList.add('creature');

    const $image = document.createElement('img');
    $image.src = creature.image;
    $image.alt = creature.alt;

    const $info = document.createElement('div');
    $info.classList.add('creature-info');

    const $name = document.createElement('h3');
    $name.textContent = creature.name;

    const $description = document.createElement('p');
    $description.classList.add('creature-description');
    $description.textContent = creature.description;

    $info.appendChild($name);
    $info.appendChild($description);

    $entry.appendChild($image);
    $entry.appendChild($info);

    $collection.appendChild($entry);
  }
}


// 2. APPLY THE HABITAT THEME


// Pseudocode: Update the body theme to match the selection.
function applyTheme(theme) {
  document.body.dataset.theme = theme;
}


// 3. APPLY THE COLLECTION LAYOUT


// Pseudocode: Update the collection layout.
function applyLayout(layout) {
  $collection.dataset.layout = layout;
}


// 4. SAVE BOTH PREFERENCES


// Pseudocode: Store the selected theme and layout as JSON.
function savePreferences() {
  const preferences = {
    theme: $theme.value,
    layout: $layout.value
  };

  localStorage.setItem(
    storageKey,
    JSON.stringify(preferences)
  );

  $status.textContent = 'Your preferences have been saved!';
}


// 5. RESTORE SAVED PREFERENCES


// Pseudocode: Check storage and restore both choices.
function loadPreferences() {
  const savedData = localStorage.getItem(storageKey);

  if (savedData !== null) {
    const preferences = JSON.parse(savedData);

    $theme.value = preferences.theme;
    $layout.value = preferences.layout;

    applyTheme(preferences.theme);
    applyLayout(preferences.layout);

    $status.textContent =
      'Welcome back! Your preferences have been restored.';
  } else {
    
    $status.textContent =
      'No saved preferences yet. Choose your habitat and layout!';
  }
}


// 6. LISTEN FOR CONTROL CHANGES


// Pseudocode: Change the theme and save both preferences.
$theme.addEventListener('change', function () {
  applyTheme($theme.value);
  savePreferences();
});

// Pseudocode: Change the layout and save both preferences.
$layout.addEventListener('change', function () {
  applyLayout($layout.value);
  savePreferences();
});


// 7. INITIALIZE THE COLLECTION

// Generate the six creatures once.
generateCreatures();

// Restore saved preferences without saving defaults.
loadPreferences();
