const fs = require('fs');
let unclaim = [];
let unclaimCord = [];
let claimLooting = [];

// Fetch the updated claim data from the community dynmap page
function download() {
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
}
download();

// compares the claims and puts output into unclaim and unclaimCord array
function compareClaims() {
    
    try {
        const previousdata = fs.readFileSync('previousclaims.json');
        let data1 = previousdata;
        const previousClaims = JSON.parse(data1);

        const newdata = fs.readFileSync('claims.json');
        const claims = JSON.parse(newdata);

        let counter = 0;
        while (Object.keys(previousClaims).length > counter) {
            const previousClaimKey = Object.keys(previousClaims)[counter];
            if (previousClaimKey in claims) {
            //console.log(`The claim named ${Object.keys(previousClaims)[counter]} was found`);
            } 
            else {
                console.log(`The claim named ${Object.keys(previousClaims)[counter]} was NOT found`);
                unclaim.push(Object.keys(previousClaims)[counter]);
                unclaimCord.push(previousClaims[Object.keys(previousClaims)[counter]].chunks[0]);
                
            }
            counter++;
        }

  

    } catch (error) {
        console.log('There is an error during the parsing!!')
    }
}

compareClaims();

console.log("\n\n\n");
console.log(`______________________________`);
counter = 0;
console.log(`Claims that were deleted:`);

claimLooting.push(` There are a total of ${unclaim.length} total claims\n\n`);
// loop statment, displays output and pushes to listofclaim array
while (unclaim.length > counter){
console.log(`${unclaim[counter]} at ${unclaimCord[counter]}`);
claimLooting.push(` ${unclaim[counter]} | ${unclaimCord[counter]} \n`);
counter++;
}
// Creates a download with claim list in json
var listofclaims = claimLooting.toString();

// Remove the first character of every sentence
var modifiedList = listofclaims.replace(/^(.)(.*)$/gm, '$2');

fs.writeFile('claimList.txt', modifiedList, (err) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Claim list file created successfully.');
    }
});

fs.writeFile('claimList.txt', modifiedList, (err) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Claim list file created successfully.');
    }
});