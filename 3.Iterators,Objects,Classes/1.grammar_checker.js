//ITERATORS EXERCISE
let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

//Count the number of words in the string array using .forEach()
let count = 0;
storyWords.forEach((x) => (count += 1));

//Filter the array by removing the word 'literally
storyWords = storyWords.filter((x) => x != unnecessaryWord);

//Replace any mispelled words
storyWords = storyWords.map((x) =>
  x == misspelledWord ? (x = "beatiful") : x
);

//Find the bad word
let badWord_index = storyWords.findIndex((x) => x == badWord);
storyWords[badWord_index] = "really";

//Check if item is less than 10 characters
let lengthCheck = storyWords.every((x) => x.length < 10);
console.log(lengthCheck);

//Stores item that is more than 10 characters
let moreThan10 = storyWords.filter((x) => x.length > 10);
console.log(moreThan10);

//Replaces item that is more than 10 characters
storyWords = storyWords.map((x) => (x == "breathtaking" ? "dazzling" : x));

//Join the array again
storyWords = storyWords.join(" ");
console.log(storyWords);
