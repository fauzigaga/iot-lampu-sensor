const endpoint = "https://192.168.0.108";

async function getEspLed() {
    try {
      const response = await fetch(endpoint + "/led1", { method: "GET" });
      const result = await response.text();
      if (result === "ON") {
        ledEsp.style.backgroundColor = "yellow";
      } else {
        ledEsp.style.backgroundColor = "white";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async function getEspLed2() {
    try {
      const response = await fetch(endpoint + "/led2", { method: "GET" });
      const result = await response.text();
      if (result === "ON") {
        ledEsp2.style.backgroundColor = "red";
      } else {
        ledEsp2.style.backgroundColor = "white";
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
async function setEspLed() {
    try {
      await fetch(endpoint + "/led1", { method: "POST" });
      getEspLed(); // Update status LED
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async function setEspLed2() {
    try {
      await fetch(endpoint + "/led2", { method: "POST" });
      getEspLed2(); // Update status LED
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
// function setEspLed3(){
//     fetch(endpoint + "/led3",{
//         method:"POST"
//     }).then(response => response.text()).then(() => location.reload());
// }


getEspLed();
getEspLed2();
// getEspLed3();