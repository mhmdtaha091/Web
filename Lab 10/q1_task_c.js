const fs = require('fs');

const content = 'This file was created using Node.js';

fs.writeFile('output.txt', content, (err) => {
    if (err) throw err;
    console.log('output.txt has been created!');
});
