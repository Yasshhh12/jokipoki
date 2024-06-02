
const jokeContainer = document.getElementById('joke');

const button = document.getElementById('btn');

const url = "https://v2.jokeapi.dev/joke/Any?type=single";

// let getJoke = async () =>{
//     try{
//         const response = await fetch(url);

//         const data = await response.json();

//         console.log(data);
//     }
//     catch(error){
//         console.log("Error detected");
//     };
// }

// getJoke();

let getJoke = () =>{

    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        jokeContainer.textContent = `${data.joke}`
    })
    .catch((error)=>console.log("Error detected"));

}

button.addEventListener("click",getJoke);
getJoke();

