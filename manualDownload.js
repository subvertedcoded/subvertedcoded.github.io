const fs = require('fs');

fetch('https://raw.githubusercontent.com/microwavedram/microwavedram.github.io/main/src/claims.json')
    .then(response => response.text())
    .then(data => {
        const jsonData = JSON.parse(data);
        fs.writeFile('claims.json', data, (err) => {
            if (err) {
                console.error('Error:', err);
            } else {
                console.log('File downloaded successfully.');
            }
        });

        
    })
    .catch(error => {
        console.error('Error:', error);
    });
