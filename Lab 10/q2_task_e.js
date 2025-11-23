const os = require('os');
const readline = require('readline');

// i. Display OS Info
console.log('--- System Info ---');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());

// ii. User Input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('\nWhat is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});
