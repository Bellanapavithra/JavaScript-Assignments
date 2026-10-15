
"use strict";

function rectangleArea(length = 5, width = 4) {
    return length * width;
}

const calculateArea = (length = 5, width = 4) => {
    return length * width;
};

console.log("Name: Pavithra");
console.log("Age: 19");

console.log(
    "Standard Function Area (Default 5x4):",
    rectangleArea()
);

console.log(
    "Arrow Function Area (Custom 10x3):",
    calculateArea(10, 3)
);

{
    let blockVar = 10;
    console.log("Inside block:", blockVar);
}

try {
    console.log(blockVar);
} catch (error) {
    console.log(
        "Scope Test Error: ReferenceError: blockVar is not defined"
    );
}
