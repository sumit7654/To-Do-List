const texttoadd = document.querySelector("#texttoadd");
const list = document.querySelector(".list");
const btn = document.querySelector("#btn");
const dark = document.querySelector(".dark");
const body= document.querySelector("body");
const container= document.querySelector(".container");
   function sumit(){
    let value = texttoadd.value;
    const newelement= document.createElement("p")
    newelement.classList.add("list");
    
    newelement.textContent=value;
   
    list.appendChild(newelement);
    texttoadd.value='';
}

btn.addEventListener("click", sumit);
texttoadd.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        sumit();
    }
})
dark.addEventListener("click",()=>{
    body.style.backgroundColor=(body.style.backgroundColor==="white")?"black":"white";
    body.style.color=(body.style.color==="black")?"white":"black";
    console.log("Sumit kumar")
    // container.style.borderColor=(container.style.borderColor==="white")?"black":"white";
})
