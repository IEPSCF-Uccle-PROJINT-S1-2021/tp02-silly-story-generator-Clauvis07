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
let storyText = "It was 94 Fahrenheit outside,"+
" so :insertx: went for a walk. When they got to :inserty:,"+
" they stared in horror for a few moments, then :insertz:. Bob saw the whole thing,"+
" but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

//alert(storyText.replace(/Bob/g,'clauvis'));

let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY =['the soup kitchen','Disneyland','the White House'];
let nsertZ = ['spontaneously combusted',
              'melted into a puddle on the sidewalk',
              'turned into a slug and crawled away'];

              randomize.addEventListener('click', result);

function result() {

  //initialisation
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(nsertZ);
  hide('erreur');


   if(customName.value.length === 0){
    $('erreur').innerHTML= "Veillez saisir le custom Name SVP!!!";
    show('erreur');
    return;
   }


  if(customName.value !== 'Bob' ) {
    let name = customName.value;
   // alert("coucou");
   newStory  = newStory.replaceAll('Bob',name);
   newStory  = newStory.replaceAll(':insertx:',xItem);
   newStory  = newStory.replace(':inserty:',yItem);
   newStory  = newStory.replace(':insertz:',zItem);

  }

  if(document.getElementById("uk").checked) {
    let weight        =  Math.round(300* 0.071429);
    let  temperature   =  Math.round((94-32)*(5/9));
    //alert(temperature);
      newStory   =  newStory.replace(/94 Fahrenheit/g,temperature+"°C");  //g ==> global
    //alert(newString2);
      newStory  =  newStory.replace(/300 pounds/g,weight+"g");
    story.textContent = newStory;
    story.style.visibility = 'visible';

  }
  else{
    story.textContent      = newStory ;
    story.style.visibility = 'visible';
  }

}













