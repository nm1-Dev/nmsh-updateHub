window.addEventListener("message", (event) => {
    const data = event.data;
    console.log(data);
    if (data.type === "open") {
        document.getElementById('main').style.display = '';
        Start();
    }
});

document.onkeyup = function (event) {
    const charCode = event.key;
    if (charCode == "Escape") {
        $.post(`https://nmsh-updateHub/close`)
        document.getElementById('main').style.display = 'none';
    }
};


const update = [
    {
        title: 'New Inventory Script !',
        description: 'We have a new inventory script that will make it easier for you to manage your inventory, you can find it in the inventory tab in the navbar.',
        image: 'https://cdn.discordapp.com/attachments/1201017646007713873/1201017646473289809/image.png'
    },
    {
        title: 'New Script !',
        description: 'Description',
        image: 'https://media.discordapp.net/attachments/1198023155130830869/1198023155575435486/Screenshot_2024-01-19_125222.png'
    },
    {
        title: 'New Script !',
        description: 'Description',
        image: 'https://media.discordapp.net/attachments/1187229210104832090/1187229211145031771/4908b2-1.png'
    }
];

function Start() {
    // get the image element
    var image = document.getElementById('image');
    // check if the image element is not null
    if (image !== null) {
        // set the image src to the first image in the array
        image.src = update[0].image;
        // set the image alt to the first image in the array
        image.alt = update[0].title;
        // set the title to the first image in the array
        document.getElementById('title').textContent = update[0].title;
        // set the description to the first image in the array
        document.getElementById('desc').textContent = update[0].description;
    }
}


function NextImage() {
    // play an sound when the button is clicked
    var audio = new Audio('press.mp3');
    audio.play();
    var image = document.getElementById('image');
    if (image !== null) {
        var index = update.findIndex(item => item.image === image.src);
        if (index === update.length - 1) {
            index = 0;
        } else {
            index++;
        }
        image.src = update[index].image;
        document.getElementById('title').textContent = update[index].title;
        document.getElementById('desc').textContent = update[index].description;
    }
}

function PreviousImage() {
    var audio = new Audio('press.mp3');
    audio.play();
    var image = document.getElementById('image');
    if (image !== null) {
        var index = update.findIndex(item => item.image === image.src);
        if (index === 0) {
            index = update.length - 1;
        } else {
            index--;
        }
        image.src = update[index].image;
        document.getElementById('title').textContent = update[index].title;
        document.getElementById('desc').textContent = update[index].description;
        image.src = update[index].image;
        image.alt = update[index].title;
    }
}