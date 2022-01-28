function n_zz2(lowerBound, upperBound, count) {
    let unsortedIntegerArray = [];
    let sortedIntegerArray = [];
    let randomNumber;
    let i = 0;

    if (!inputValid(lowerBound, upperBound, count)) {
        return;
    }

    for (i = 0; i < count; i++) {
        randomNumber = randomNumberGenerator(lowerBound, upperBound)
        if (isNumberUniqueInArray(unsortedIntegerArray, randomNumber)) {
            unsortedIntegerArray[i] = randomNumber;
        } else {
            i--           
        }
    }

    sortedIntegerArray = bubblesort(unsortedIntegerArray);
    document.getElementById("OutputRandomNumbers").innerHTML = sortedIntegerArray.join(", ").toString();
}

function inputValid(lowerBound, upperBound, count) {
    if (lowerBound >= upperBound) {
        document.getElementById("Error_td").style = "background-color: lightcoral;";
        document.getElementById("Errors").innerHTML = "untere Grenze kann nicht groeßer als obere sein."
        return false;
    }
    if (upperBound - lowerBound + 1 < count) {
        document.getElementById("Error_td").style = "background-color: lightcoral;";
        document.getElementById("Errors").innerHTML = "kann nicht mehr einzigartige Zahlen erstellen, als es gibt"
        return false;
    }

    return true;
}

function randomNumberGenerator(lowerBound, upperBound) {
    let random = Math.round(Math.random() * (upperBound - 1))
    return random + 1;
}

function isNumberUniqueInArray(integerArray, toBeCheckedNumber) {
    let arrayLength = integerArray.length;
    let numberUnique = true;
    
    if (arrayLength > 0) {
        for (i = 0; i < arrayLength && numberUnique; i++) {
            if (integerArray[i] == toBeCheckedNumber) {
                numberUnique = false;
            }
        }
    }
    return numberUnique;
}

function bubblesort(unsortedIntegerArray) {
    let i;
    let memory;
    let sorted = false;
    let sortedIntegerArray = unsortedIntegerArray;

    while (!sorted) {
        sorted = true;
        for (i = 0; i < sortedIntegerArray.length; i++) {
            if (sortedIntegerArray[i] > sortedIntegerArray[i + 1]) {
                sorted = false;
                memory = sortedIntegerArray[i];
                sortedIntegerArray[i] = unsortedIntegerArray[i + 1];
                sortedIntegerArray[i + 1] = memory;
            }
        }
    }
    return sortedIntegerArray;
}

function resetErrors() {
    document.getElementById("Errors").innerHTML = "";
    document.getElementById("Error_td").style = "background-color: aquamarine;";
}