const endpoint = "https://192.168.0.108";

function getEspLed(){
    fetch(endpoint + "/led1",{
        method:"GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON"){
            ledEsp.style.backgroundColor = "yellow";
        }else {
            ledEsp.style.backgroundColor = "white";
        }
});
}
function getEspLed2(){
    fetch(endpoint + "/led2",{
        method:"GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON"){
            ledEsp2.style.backgroundColor = "red";
        }else {
            ledEsp2.style.backgroundColor = "white";
        }
});
}
// function getEspLed3(){
//     fetch(endpoint + "/led3",{
//         method:"GET"
//     }).then(response => response.text()).then(result => {
//         if(result == "ON"){
//             ledEsp3.style.backgroundColor = "red";
//         }else {
//             ledEsp3.style.backgroundColor = "blue";
//         }

// });
// }
function setEspLed(){
    fetch(endpoint + "/led1",{
        method:"POST"
    }).then(response => response.text()).then(() => location.reload());
}
function setEspLed2(){
    fetch(endpoint + "/led2",{
        method:"POST"
    }).then(response => response.text()).then(() => location.reload());
}
// function setEspLed3(){
//     fetch(endpoint + "/led3",{
//         method:"POST"
//     }).then(response => response.text()).then(() => location.reload());
// }


getEspLed();
getEspLed2();
// getEspLed3();