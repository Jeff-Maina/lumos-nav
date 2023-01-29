console.log('active');
let indicator = document.getElementById('indicator');

function moveIndicator(value,x){
if(x === 1){
    indicator.style.left = `${value}em`
    setTimeout(()=>{
        document.getElementById(`icon${x}`).style.color = 'white'
    },250)
}else{
    document.getElementById(`icon1`).style.color = 'gray'
}
if(x === 2){
    indicator.style.left = `${value}em`
    setTimeout(()=>{
        document.getElementById(`icon${x}`).style.color = 'white'
    },250)
}
else{
    document.getElementById(`icon2`).style.color = 'gray'
}
if(x === 3){
    indicator.style.left = `${value}em`
    setTimeout(()=>{
        document.getElementById(`icon${x}`).style.color = 'white'
    },250)
}
else{
    document.getElementById(`icon3`).style.color = 'gray'
}
if(x === 4){
    indicator.style.left = `${value}em`
    setTimeout(()=>{
        document.getElementById(`icon${x}`).style.color = 'white'
    },250)
}
else{
    document.getElementById(`icon4`).style.color = 'gray'
}
if(x === 5){
    indicator.style.left = `${value}em`
    setTimeout(()=>{
        document.getElementById(`icon${x}`).style.color = 'white'
    },250)
}
else{
    document.getElementById(`icon5`).style.color = 'gray'
}
}