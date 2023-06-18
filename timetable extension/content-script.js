console.log("side-panel script loaded");

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

//container
let container = document.createElement('div'); 
container.className = "cont";

//sidebutton
let logobtn = document.createElement('button'); 
logobtn.className = "logobtn";
logobtn.style.display = "none";

//img in sidebutton
let logoimg = document.createElement('img');
logoimg.className = "logoimg";
logoimg.src = chrome.runtime.getURL("/images/logo.png");;

logobtn.appendChild(logoimg);
container.appendChild(logobtn);


//sidebar
let sidepanel = document.createElement('iframe'); 
sidepanel.className = "sidepanel";
sidepanel.src = chrome.runtime.getURL("sidepanel.html")
container.appendChild(sidepanel);


document.body.appendChild(container);


logobtn.addEventListener('click', e => {toggleFrame();});

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    if(msg == "toggle icon"){
        console.log("message recieved")
        toggleBtn();
    }
})



function toggleFrame(){
    if(sidepanel.style.width == "0px"){
        sidepanel.style.width = "40vw";
        sidepanel.style.maxWidth = "450px"; 
        sidepanel.style.minWidth = "300px";
        logobtn.style.marginRight="-10px";
        document.querySelector('body').classList.add("body-shrink")
    }
    else{
        sidepanel.style.minWidth = "0px";
        sidepanel.style.width="0px";
        logobtn.style.right="0px";
        logobtn.style.marginRight="0px";
        document.querySelector('body').classList.remove("body-shrink")


    }
}

function toggleBtn(){
    if(logobtn.style.display == "none"){
        console.log("toggle on")
        logobtn.style.display= "block";
    }
    else{
        console.log("toggle off")
        logobtn.style.display ="none";

    }
}

