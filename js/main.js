function page_load() {
    console.log("giphy: page_load");
}

function searchBtn() {
    const divDisplayInfo = document.getElementById("div-display-info");
    const userInput = document.getElementById("user-input");

    divDisplayInfo.innerText = userInput.value;

    console.log("giphy: searchBtn");
}

function clearBtn() {
    console.log("giphy: clearBtn");

    const divDisplayInfo = document.getElementById("div-display-info");
    const userInput = document.getElementById("user-input");

    divDisplayInfo.innerText = "";
    userInput.value = "";
}