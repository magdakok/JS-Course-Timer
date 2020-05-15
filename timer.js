class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick(); //first tick called manually
        this.intervalId = setInterval(this.tick, 1000); //other ticks called after 1s every 1s
                                                        // intervalId is a reference number of setInterval
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            if (this.onComplete) {
                this.onComplete();
            }
            this.pause();
        } else {
            //it comes from get timeRemaining so we don't have to put ()
            this.timeRemaining = this.timeRemaining - 1;  // setter   =    getter
            if (this.onTick) {
                this.onTick();
            }
        }
    }

    pause = () => {
        clearInterval(this.intervalId); 
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}