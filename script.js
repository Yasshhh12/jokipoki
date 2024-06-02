
const jokeContainer = document.getElementById('joke');

const button = document.getElementById('btn');

const emojiContainer = document.getElementById('emoji')
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

    const arr = ['&#128518','&#128570','&#129315','&#128516','&#128540','&#128541','&#129322','&#128513'];
    const randomEmoji = arr[Math.floor(Math.random()*arr.length)];


    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        jokeContainer.textContent = `${data.joke}`;
        emojiContainer.innerHTML = `${randomEmoji}`;
    })
    .catch((error)=>console.log("Error detected"));

}

button.addEventListener("click",getJoke);
getJoke();

