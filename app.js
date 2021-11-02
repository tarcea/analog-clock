const currentDate = () => {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getUTCHours();
   // console.log(date)
    
    let hands = [
    {name: 'sec',
    angle: seconds * 6
    },
    {name: 'min',
    angle: minutes * 6
    },
    {name: 'hour',
    angle: (hours * 30) + (minutes / 2)
    }
    ];
    
   hands.forEach((hand, index) =>{
  let secHand = document.querySelector(".sec");
  let minHand = document.querySelector(".min");
  let hrHand = document.querySelector(".hr");
   if (hand.name === 'sec') {
    secHand.style.transform = `rotateZ(${hand.angle}deg)`;}
    if (hand.name === 'min') {
       
    minHand.style.transform = `rotateZ(${hand.angle}deg)`;}
    if (hand.name === 'hour') {
       
    hrHand.style.transform = `rotateZ(${hand.angle}deg)`;}
    
   })

}
let seta = setInterval(currentDate, 0);