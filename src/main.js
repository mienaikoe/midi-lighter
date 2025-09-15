// src/main.js

const samples = require('./samples.js');
const Sampler = require('./sampler.js');

// Initialize the sampler
const sampler = new Sampler({
    keysToNotes: samples.KEYS_TO_NOTES,
    samplesToNotes: samples.SAMPLES_TO_NOTES,
});

// Set up event listeners for keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    sampler.triggerSample(key);
    if (samples.KEYS_TO_NOTES[key]) {
        const noteDiv = document.getElementById(`note-${key}`);
        if (noteDiv) {
            noteDiv.classList.add('active');
        }
    }
});

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();
    if (samples.KEYS_TO_NOTES[key]) {
        const noteDiv = document.getElementById(`note-${key}`);
        if (noteDiv) {
            noteDiv.classList.remove('active');
        }
    }
});

// Load samples when the page is loaded
window.addEventListener('load', () => {
    sampler.loadSamples();
});

const mappingDisplay = document.getElementById('mapping');

if (mappingDisplay) {
    mappingDisplay.innerHTML = Object.entries(samples.KEYS_TO_NOTES)
        .map(([key, note]) => `<div id="note-${key}"><strong>${key.toUpperCase()}</strong>: ${samples.
            SAMPLES_TO_NOTES[note]
            }</div>`)
        .join('');
}