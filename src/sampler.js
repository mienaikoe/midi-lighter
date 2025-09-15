const Tone = require('tone');

class Sampler {
    constructor({ samplesToNotes, keysToNotes } = {}) {
        console.log("Instantiating Sampler");
        this.samplesToNotes = samplesToNotes || {};
        this.keysToNotes = keysToNotes || {};
    }

    loadSamples() {
        console.log("Loading samples...");
        this.sampler = new Tone.Sampler({
            urls: this.samplesToNotes,
            baseUrl: "samples/"
        }).toDestination();

        this.sampler.onload = () => {
            console.log("Sampler loaded successfully");
        };
    }

    triggerSample(key) {
        const note = this.keysToNotes[key.toLowerCase()];
        if (note) {
            this.sampler.triggerAttack(note);
        }
    }
}

module.exports = Sampler;