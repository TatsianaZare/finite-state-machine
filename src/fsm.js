class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.config = config;
        this.state = config['initial'];
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {

        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (this.config['states'][state] !== undefined) {
            this.state = state;
        } else {
            throw new Error();
        }
        
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        if (this.config['states'][this.state]['transitions'][event] !== undefined) {
            this.state = this.config['states'][this.state]['transitions'][event];
        } else {
            throw new Error();
        }
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
      this.state = this.config['initial'];       
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        if (this.config['states'][state][event] == null) {
            this.state = this.config['states'][state][event];
        }
        else {
            this.state = state;

            return this.config['states'] = [];
        }
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {
        this.config['states'][this.state]['transitions'] = false;
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
