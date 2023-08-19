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
    const rectangelAreaCalculation = width * length;

    // set rectangle area 
    const areaField = document.getElementById('rectangleArea');
    areaField.innerText = rectangelAreaCalculation;
}