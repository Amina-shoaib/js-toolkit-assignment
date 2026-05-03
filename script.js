// Function 1: Greeting
const createGreeting = (name) => {
    return `Hello ${name}, welcome to the modern JavaScript assignment!`;
};

// Function 2: Calculate sum
const calculateSum = (a, b) => {
    return a + b;
};

// Output to webpage
const outputDiv = document.getElementById('output');
const message1 = createGreeting("Student");
const message2 = `The sum of 10 and 25 is: ${calculateSum(10, 25)}`;

outputDiv.innerHTML = `<h3>${message1}</h3><p>${message2}</p>`;