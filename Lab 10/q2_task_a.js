const fs = require('fs');

// i. Append to output.txt
fs.appendFile('output.txt', '\nAppended content', (err) => {
    if (err) console.log('Error appending:', err.message);
    else console.log('Content appended to output.txt');
});

// ii. Rename file
fs.rename('oldname.txt', 'newname.txt', (err) => {
    if (err) console.log('Error renaming (file might not exist):', err.message);
    else console.log('Renamed oldname.txt to newname.txt');
});

// iii. Delete file
fs.unlink('unwanted.txt', (err) => {
    if (err) console.log('Error deleting (file might not exist):', err.message);
    else console.log('unwanted.txt deleted');
});

// iv. Create directory and v. List files
fs.mkdir('myFolder', { recursive: true }, (err) => {
    if (err) {
        console.log('Error creating directory:', err.message);
    } else {
        console.log('Directory myFolder created');
        
        fs.readdir('myFolder', (err, files) => {
            if (err) console.log(err);
            else console.log('Files in myFolder:', files);
        });
    }
});
