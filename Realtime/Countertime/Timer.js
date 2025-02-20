const input=document.querySelectorAll("input");
const lastdate="21 Jan 2025 12:00"
document.getElementById("Count").innerHTML=lastdate

function timer(){
    const end=new Date(lastdate)
    console.log(end);
    const present=new Date
    console.log(present);
    const diff=((end-present)/1000)
    console.log(diff);
    if(diff<0) return;
        input[0].value = Math.floor(diff/3600/24)
        input[1].value =Math.floor(diff/3600)%24
        input[2].value=Math.floor(diff/60)%60
        input[3].value=Math.floor(diff)%60
}
setInterval(()=>{
    timer()
},1000)
