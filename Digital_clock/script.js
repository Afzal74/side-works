function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const Meridiam = hours>=12? "am ": "pm" ;
    hours = hours % 12  || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${Meridiam}`
    document.getElementById("clock").textContent = timeString;
}

//to update every seconds


updateClock();

setInterval(updateClock,1000)
`   `