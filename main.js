//initialisation
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//fonction random
function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
 // Déclaration
let storyText = "It was 94 fahrenheit outside,"+
" so :insertx: went for a walk. When they got to :inserty:,"+
" they stared in horror for a few moments, then :insertz:. Bob saw the whole thing,"+
" but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

//alert(storyText.replace(/Bob/g,'clauvis'));

let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY =['the soup kitchen','Disneyland','the White House'];
let nsertZ = ['spontaneously combusted',
              'melted into a puddle on the sidewalk',
              'turned into a slug and crawled away'];

    /*  Window.onload = function(){
                randomize.addEventListener('click', result);
              }*/

function result() {

  //initialisation
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(nsertZ);
  let newString1 = "";

  if(customName.value !== 'Bob' || customName.value !== 'bob') {
    let name = customName.value;
   // alert("coucou");
   newString1  = newStory.replaceAll('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    let weight        =  Math.round(300* 0.071429);
    let temperature   =  Math.round((94-32)*(5/9));
    //alert(temperature);
    let  newString2   =  newString1.replace(/94 Fahrenheit/g,temperature);  //g ==> global
    //alert(newString2);
   let  newString3  =  newString2.replace(/300 pounds/g,weight);
    story.textContent = newString3;
    story.style.visibility = 'visible';

  }
  else{
    story.textContent      = newString1 ;
    story.style.visibility = 'visible';
  }


}











