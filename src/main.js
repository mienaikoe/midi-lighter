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
});

// Load samples when the page is loaded
window.addEventListener('load', () => {
    sampler.loadSamples();
});