
btnStart = document.getElementById('startBtn')

btnStart.addEventListener('click', () => {
    console.log('\n\n\nBelow are the claims that were deleted');
    fetch('https://dynmapclaimcompare.onrender.com/download', {
        mode: 'cors' // Set the mode to 'cors'
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Add this line to console.log the data
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

