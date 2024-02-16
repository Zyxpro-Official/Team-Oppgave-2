
let feed = '';
let clean = '';
let play = '';
let health = '';
let hunger = 100;
let hungerBar = document.getElementById('hungryBar');
let cat = document.getElementById('cat');

const timeDown = setInterval(getWidthHungry,3000);
function hungerDown() {
    if (hunger == 0) {
        cat.style.display = 'none';
        alert("YOUR PET DIED!")
    } else if (hunger == 90)
    hunger -= 10 {

    }

}
function getWidthHungry() {
    if (hunger >=0) {
        return number + 'rem';
    }
}


  
function feed() {


    document.getElementById('health').style.display = "initial";

    
 
} 



let currentHealth = 100;
let increaseHealth = true;
const healthBar = document.getElementById("health");




function feed() {
    currentHealth = Math.min(100, currentHealth + 20);
}


function clean() {
    currentHealth = Math.min(100, currentHealth + 5)
}

function play() {
    currentHealth = Math.min(100, currentHealth + 15)
}



function decreaseHealth() {
    if (increaseHealth) { 
        currentHealth =Math.max(0, currentHealth - 1);
        updateHealthBar();
    }
}





function showNotifcation() {
    let Notification = document.createElement("div");
    Notification.textContent = "low health";
    Notification.style.position = "fixed"
    Notification.style.bottom ="20px"
    Notification.style.left = "20px"
    Notification.style.padding ="10px"
    Notification.style.backgroundColor ="white"
    




    

}






 




















