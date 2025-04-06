const generatebtn=document.getElementById("Generate");
const image=document.getElementById("image");
const download=document.getElementById("download");
const link= document.getElementById("link");
async function getData() {
    const url ="https://dog.ceo/api/breeds/image/random";
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        image.src= json.message;
       link.href = image.src;
        //console.log(json);
    }
    catch (error){
console.error(error.message);
    }
    
    
}

generatebtn.addEventListener("click",getData);
