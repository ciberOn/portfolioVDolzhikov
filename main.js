const btn = document.getElementById("btn")
const array = ["-10kb","+10kb","5kiberone", "-5kiberone"]
const route = document.getElementById("route__fortune")
btn.addEventListener("click", ()=>{
    let rndNum = Math.floor(Math.random()*array.length)
    btn.innerText =  array[rndNum]
    route.classList.add("animation__style")
    setTimeout(()=>{
        route.classList.remove("animation__style")
    }, 4000);
})