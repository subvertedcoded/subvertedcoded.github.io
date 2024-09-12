
btnStart = document.getElementById('startBtn')
const container = document.getElementById('container');

btnStart.addEventListener('click', () => {
    container.innerHTML = '';  
    console.log('Attempting to download and display data');
    fetch('https://dynmapclaimcompare.onrender.com/download', {
        mode: 'cors'
    })
    .then(response => response.text())
    .then(data => {

        const dataArray = JSON.parse(data);
        for (let i = 0; i < dataArray.length; i++) {
            const ul = document.createElement('ul');
            ul.className = 'items';
            const li = document.createElement('li');
            li.style.listStyleType = 'none';
            li.innerHTML = `<a href="https://map.stoneworks.gg/?worldname=world&mapname=flat&zoom=3&x=${dataArray[i]["cord"][0]}&y=64&z=${dataArray[i]["cord"][1]}">${dataArray[i]["claim"]} - ${dataArray[i]["cord"][0]}, ${dataArray[i]["cord"][1]}</a>`;
            ul.appendChild(li);
            container.appendChild(ul);
        }
        

        
    })
    .catch(error => {
        console.error('Error:', error);

});

});