/****************** create variables ******************/
/* -x create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let modelName = "XYZ";
let duration = 0;


/****************** helper function ******************/
/* create a function called recalculate() which will
    -x create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    -x check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    -x set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");

    if (modelName == "XYZ") {
        let totalCost = duration * 100;
        costLabel.innerHTML = totalCost;
    } else if (modelName == "CPRG") {
        let totalCost = duration * 213;
        costLabel.innerHTML = totalCost;
    }
}


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    -x create a variable to represent the model-text span element
    -x if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    -x if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    -x then, recalculate() the total cost.
-x finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

let switchModel = document.getElementById("model-button");

switchModel.addEventListener("click", changeModel);

function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName == "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    }

    else if (modelName == "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}


/****************** duration button logic ******************/
/*  -X first, create a variable to represent the "Change Duration" pseudo-button.
    -X then, create a function called changeDuration() that will
        -x create a variable to represent the duration-text span element
        -x prompt() the user for a new duration
        -x save the result of the prompt() to the duration variable
        -x change the innerHTML of the duration-text span element to this new value
        -x recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

let changeDurationButton = document.getElementById("duration-button");

changeDurationButton.addEventListener("click", changeDuration);

function changeDuration() {
    let durationText = document.getElementById("duration-text");

    duration = prompt("Enter the duration you would like to use");

    durationText.innerHTML = duration;

    recalculate();
}
