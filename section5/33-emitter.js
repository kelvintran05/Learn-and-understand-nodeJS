function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    // look for the event property
    this.events[type] = this.events[type] || [];
    // add the function to the array
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        // loop over all the functions (listeners) in the array of the event type
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;