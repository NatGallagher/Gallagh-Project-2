function page_load() {
    console.log("giphy: page_load");
}

function searchBtn() {
    console.log("giphy: searchBtn");

    const divDisplayInfo = document.getElementById("div-display-info");
    const userInput = document.getElementById("user-input");

    //divDisplayInfo.innerText = userInput.value;

    const searchText = "transformers";
    const giphyApiKey = "jOxDlf3Mt8SbKWzrI7MJEUrWmhYljT5C";
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchText}&limit=25&rating=g`;

    fetch(giphyUrl) 
    .then(response => {
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        const giphyImage = `<img class='image-round' width='200' height='150' src='${data.data[0].images.original.url}'>`
        divDisplayInfo.innerHTML = giphyImage;

        /*const giphapi_image = `<img width='200' height='150' src='${data.data[0].images.original.url}'>`

        divDisplayInfo.innerHTML = giphapi_image
        */
    })
    .catch(error => {
        console.error('## There was a problem with the fetch operation:', error);
        divDisplayInfo.innerText = error;
      });
  
}

function clearBtn() {
    console.log("giphy: clearBtn");

    const divDisplayInfo = document.getElementById("div-display-info");
    const userInput = document.getElementById("user-input");

    divDisplayInfo.innerText = "";
    userInput.value = "";
}