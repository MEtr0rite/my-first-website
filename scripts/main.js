
// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }

// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/-klbw3Qrciq-y9nZaT3cSlc-sg.jpg') {
//       myImage.setAttribute('src', 'images/QQ图片20220429001916.jpg');
//     } else {
//       myImage.setAttribute('src', 'images/-klbw3Qrciq-y9nZaT3cSlc-sg.jpg');
//     }
// }
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
// myHeading.textContent = 'Hello world!';

function setUserName() {
    let myName = prompt('请输入你的名字。');

    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello, ' + myName;
    }
}

myButton.onclick = function() {
    setUserName();
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}
