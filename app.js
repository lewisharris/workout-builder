//WGER API


//navigate through pages
const instructions = document.getElementById('instructions')
const newExerciseMenu = document.getElementById('new-exercise-menu')
const workoutPage = document.getElementById('custom-workout')
const welcomePage = document.getElementById('welcome-text');


//show the current display
function pageToggle(page){
    page.classList.toggle('hide');
}

function hideWelcome(){
    welcomePage.style.display = 'none';
    pageToggle(instructions);
}


document.getElementById('go-train').addEventListener('click',() => {
    setTimeout(hideWelcome,0)
})

document.getElementById('start-now').addEventListener('click', () => {
    pageToggle(instructions);
    pageToggle(newExerciseMenu);
})

document.getElementById('go-to-workout').addEventListener('click', () => {
    pageToggle(newExerciseMenu)
    pageToggle(workoutPage);
})

document.getElementById('help').addEventListener('click', () =>{
    pageToggle(instructions);
    pageToggle(workoutPage);
})

document.getElementById('add-exercise').addEventListener('click',()=>{
    pageToggle(workoutPage)
    pageToggle(newExerciseMenu)
})





//reusable code to be used in slider
function changeValue(input,output){
    document.getElementById(output).innerHTML = document.getElementById(input).value
}

//change value on slider drag
document.getElementById('sets').addEventListener('input', () => {
    changeValue('sets','sets-value');
    }
);

//change value of reps slider
document.getElementById('reps').addEventListener('input', () => {
    changeValue('reps','reps-value')
    }
);

//change value of setsslider
document.getElementById('addExercise').addEventListener('click',()=>{
    event.preventDefault();
    createNewExercise('exercise-text','sets','reps');
});



var workout = [];

//create new exercise object and push object to workout array.
function createNewExercise(exercise,sets,reps){
    if(document.getElementById('exercise-text').value == ''){
        document.getElementById('exercise-text').placeholder = 'Please enter an exercise';
        document.getElementById('exercise-text').focus();
        return
    }
    else{
    
    workout.push(
        {
            'exercise': document.getElementById(exercise).value,
            'sets': document.getElementById(sets).value,
            'reps':document.getElementById(reps).value
        }
    );
    workoutList = workout.map( item => {
        return `
                <li class="exercise">
                    <span>${item.exercise}</span>
                    <span>${item.sets} sets</span>
                    <span>${item.reps} reps</span>
                    <button class="delete-exercise">&#10005;</button>
                </li>`;
    }).join('');
    renderExercise();
    removeExercise();
    completeExercise();
    }
};


//remove exercise from list
function removeExercise(){
    deleteIcons = [...document.getElementsByClassName('delete-exercise')];
    deleteIcons.forEach(item => {
        item.addEventListener('click',() =>{
            item.parentNode.remove();
        })
    })
};

//render exercise to workout
function renderExercise(){
    document.getElementById('workoutList').innerHTML = workoutList;
    document.getElementById('exercise-text').value = '';
}

//check exercises as completed
function completeExercise(){
    [...document.getElementsByClassName('exercise')].forEach(item => {
        item.addEventListener('click',() =>{
            item.classList.toggle('completed')
        })
    })
}


//clearWorkout function
function clearWorkout(){
    workout = [];
    workoutList = [];
    renderExercise();
}

//clearWorkout
document.getElementById('clear-workout').addEventListener('click', () => {clearWorkout()})












