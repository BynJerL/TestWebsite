var state = false;

function toggleState() {
    state = !state;

    if (state) {
        document.body.classList.add('dark-mode');
        document.querySelector('button').classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('button').classList.remove('dark-mode');
    }

    console.log("Current State: " + state);
}