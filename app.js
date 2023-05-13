// I never fully got the top version working with pushing and recalling, when I created an answers array though it worked very well.
// {
//     console.log('Dr. Big D!')

//  const words = {
//      number: '',
//      adjective: '',
//      pluralNoun: '',
//      adverb: '', 
//      anotherAdjective: ''
//  };

//  console.log(words)   // varify set up

//  startMadLib = () => {

//      words.number.push = prompt( 'please pick a number.');
//      words.adjective.push = prompt('describe yourself in one word.');
//      words.pluralNoun.push = prompt('tell me the favorite place you have been.');
//      words.adverb.push = prompt('finish this sentand; I run _____!'); 
//      words.anotherAdjective.push = prompt('what is your favorite pizza topping?');

//  startMadLib();




//  }

//  alert(`Once upon a time a group of ${words[0]} General Assembly graduates
//  got together and made a startup called ${words[1]} Technologies.
// Their goal was to create smart ${words[2]}. They approached the 
//  challenge ${words[3]} which ultimately lead them ${words[4]} fame.`)


// console.log(`Once upon a time a group of ${words[0]} General Assembly graduates
//  got together and made a startup called ${words[1]} Technologies.
// Their goal was to create smart ${words[2]}. They approached the 
//  challenge ${words[3]} which ultimately lead them ${words[4]} fame.`)
// }

console.log('Dr. Big D!')  // Assisted but really worked hard on it to get it to work!!! 

// define the keys
const words = {
    number: '',
    adjective: '',
    pluralNoun: '',
    adverb: '', 
    anotherAdjective: ''
};
const answers = []; // create empty array for storing answers and mad:Lib recall

startMadLib = () => { // run the function and loop the process

    answers.push(prompt( 'please pick a number.'));

    answers.push(prompt('describe yourself in one word.'));

    answers.push(prompt( 'tell me the favorite place you have been.'));
    
    answers.push(prompt( 'finish this sentand; I run _____!')); 
    
    answers.push(prompt( 'what is your favorite pizza topping?'));
}
startMadLib();






alert((`Once upon a time a group of ${answers[0]} General Assembly graduates
got together and made a startup called ${answers[1]} Technologies.
Their goal was to create smart ${answers[2]}. They approached the 
challenge ${answers[3]} which ultimately lead them ${answers[4]} fame.`))




console.log(`Once upon a time a group of ${answers[0]} General Assembly graduates
got together and made a startup called ${answers[1]} Technologies.
Their goal was to create smart ${answers[2]}. They approached the 
challenge ${answers[3]} which ultimately lead them ${answers[4]} fame.`)

