const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput,startButton,pauseButton,{
    onStart(){
        console.log('starteeeed');
    },

    onTick(){
        console.log('ticked');
    },
    onComplete(){
        console.log('done');
    }
});
