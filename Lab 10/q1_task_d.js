const args = process.argv.slice(2);

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const operation = args[2];

if (isNaN(num1) || isNaN(num2)) {
    console.log('Please provide valid numbers.');
} else {
    switch (operation) {
        case 'add':
            console.log(`Result: ${num1 + num2}`);
            break;
        case 'subtract':
            console.log(`Result: ${num1 - num2}`);
            break;
        case 'multiply':
            console.log(`Result: ${num1 * num2}`);
            break;
        case 'divide':
            console.log(`Result: ${num1 / num2}`);
            break;
        default:
            console.log('Invalid operation. Use: add, subtract, multiply, or divide.');
    }
}
