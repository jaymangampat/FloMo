const centimeter = document.getElementById('centi')
const body = document.getElementById('bod')
/*let late = parseInt(latest)*/

function updateWatLev(){
    
    let watlev = late
    var total = 600
    var conSize = 300
 
    if(watlev == 0){
       centimeter.style.visibility ='hidden'
       centimeter.style.height = 0
       
    } else {
     centimeter.style.visibility = 'visible'
     centimeter.style.height = `${watlev/total*conSize}px`
    
     centimeter.innerText = `${Math.round((late/100)*100)/100}m`
       
    }

}
function Realtimeload(){
   
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','includes/dbh.php',true);
    xhttp.onreadystatechange = function(){
        
        console.log(late)
       
    }
    xhttp.onload = function(){
         var readings = JSON.parse(xhttp.responseText)
         let lastElement = readings[readings.length - 1]
         late = lastElement
         
    }
    xhttp.send()
  
}

setInterval(function(){
      Realtimeload()
      updateWatLev() 
      
}, 1000)

