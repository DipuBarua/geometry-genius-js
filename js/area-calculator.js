// 1.triangle 
function calculateTriangleArea() {
    //get triangle base
    const baseField = document.getElementById('triangle-base');
    const baseFieldString = baseField.value;
    const base = parseFloat(baseFieldString);

    //get triangle height
    const heightField = document.getElementById('triangle-height');
    const heightFieldString = heightField.value;
    const height = parseFloat(heightFieldString);

    // triangel area calculation
    const areaCalculation = 0.5 * base * height;

    // set triangle area 
    const areaField = document.getElementById('triangleArea');
    areaField.innerText = areaCalculation;
}

// 2.rectangle 
function calculateRectangleArea() {
    //get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthFieldString = widthField.value;
    const width = parseFloat(widthFieldString);

    //get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldString = lengthField.value;
    const length = parseFloat(lengthFieldString);

    // rectangle area calculation
    const areaCalculation = width * length;

    // set rectangle area 
    const areaField = document.getElementById('rectangleArea');
    areaField.innerText = areaCalculation;
}






// ///////////////////////////////////////////////////////////////////////////////

// Reuseable Function --->> reduce duplicate code******

// a) reuseable get input value in number 
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}
// b) reuseable set area value.
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// c) add to Calculation-Entry
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-2');

    p.innerHTML = `${count + 1}. ${areaType} ${area} cm <sup>2</sup> <button class="btn btn-sm btn-success">convert to m<sup>2</sup></button>`;

    calculationEntry.appendChild(p);

}



// 3.parallelogram
function calculateparallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    if (isNaN(base) || isNaN(height)) {
        alert('please enter the number value');
        return;
    }
    const areaCalculation = base * height;
    setElementInnerText('parallelogramArea', areaCalculation)

    //add area to Calculation-Entry
    addToCalculationEntry('parallelogram', areaCalculation);
}

// 4.rhombus
function calculateRhombusArea() {
    const base = getInputValue('rhombus-base');
    const height = getInputValue('rhombus-height');

    if (isNaN(base) || isNaN(height)) {
        alert('please enter the number value');
        return;
    }

    const areaCalculation = base * height;
    setElementInnerText('rhombusArea', areaCalculation);

    addToCalculationEntry('Rhombus', areaCalculation);
}


/**
 * validation way:
 * >> set the proper type of input field. ex: text, number, email, password
 * >> or, check type using typeof 
 * >> or, isNaN(); [Nan: not a number]
 */