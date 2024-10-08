// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
// document.querySelector("html").style.backgroundColor = "red";
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk.
 When they got to :inserty:, they stared in horror for a few moments, then :insertz:.
 Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`

const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"]
const insertY = ["the soup kitchen","Disneyland","the White House"]
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ); 

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

    let celsius = Math.round(ftoc(temperature));
    let stone = Math.round(ptos(weight));

    newStory = newStory.replace("94", celsius);
    newStory = newStory.replace("300", stone);
    newStory = newStory.replace("fahrenheit", " centrigrade");
    newStory = newStory.replace("pounds", " stone");
  }
    story.textContent = newStory;
  
}

function ftoc(f) {
   return (f -32)*5/9;
}

function ptos(p) {
    return p/14
}

