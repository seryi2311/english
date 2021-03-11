let time = ["future", "present", "past"];
let condition = ["ask", "statement", "negation"];
let verbs = [
    "know(knew)","go(went)","see(saw)","come(came)","make(made)","write(wrote)",
    "want","clean","believe","find","hear"
            ];
let pronoun = ["I", "You", "He", "She", "We", "They"];
let oPronoun = ["me", "you", "him", "her", "us", "them"];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function randomNum(arr){
    length = arr.length;
    return getRandomIntInclusive(0, length -1);
}

function addPronoun(){
    let elemPronoun = document.querySelector('#pronoun');
    elemPronoun.innerHTML = pronoun[randomNum(pronoun)];
}

function addOpronoun(){
    let elemOpronoun = document.querySelector('#oPronoun');
    elemOpronoun.innerHTML = oPronoun[randomNum(oPronoun)];
}
function addVerbs(){
    let elemVerb = document.querySelector('#Verbs');
    elemVerb.innerHTML = verbs[randomNum(verbs)];
}

function addTimeAndCondition(){
    let button = document.querySelector('#english');
    let randomTime = getRandomIntInclusive(0,2);
    let randomCondition = getRandomIntInclusive(0,2);
    button.innerHTML = time[randomTime]+" " + condition[randomCondition];
}

function english(){
    addPronoun();
    addOpronoun();
    addVerbs();
    addTimeAndCondition();
}
