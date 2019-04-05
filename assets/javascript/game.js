/*
var wordArray = ["first", "second", "third", "fourth"]
document.onkeyup = function(event)
    console.log(event.key);

    if (event.key === "a" || event.key === "b" || event.key === "c") {
        NOTE: find the appropriate words
        var selctedWords = [];
        for (var i = 0; i < wors.length; i++) {
            if (event.key === words[i].charAt(0)) {
                selectedWord.push(words[i])
            }
        }
        for (var j = 0; j < selectedWords.length; j++) {
            selectedWords
        }
    }

*/

//function getInfo 

/*
var userValues = {};
function inputObj(formNR, defaultValues) {
    var inputs = formNR.getElementsByTagName('input');
    for (var i = 0; i < inputs.length, i++;) {
        if (inputs[i].type === 'text') {
            formValues[inputs[i].name = defaultValues[i]];
        }
        inputs[i].value = defaultValues[i];
        inputs[i].addEventListener('keyup', function () {
            formValues[this.name] = this.value;
        }, false);
    };


    /*
    var user = prompt('Welcome to Wheel of Fortune!!! What is your name?');
    var myAge = prompt('How old are you?');
    
    function myAge(
        if {
        myAge(<= 10)
        };
    )


    if (age === '#choiceKids') {
        kidArray[''];
    } else {
        wordArray[''];
    }*/
//================Word Arrays
var firstName = document.getElementById("#user");
//var age = document.getElementById("#age")[0].value;

var kidArray = ['mommy', 'daddy', 'toy', 'car', 'school', 'house', 'bus', 'airplane'];
var wordArray = ['jon', 'book', 'class', 'phone', 'water', 'computer', 'laptop', 'blue', 'green', 'black', 'white', 'five', 'four', 'three', 'two', 'one', 'zero', 'hello', 'bye', 'see you soon'];
var allWords = kidArray.concat(wordArray);

var words = allWords[Math.floor(Math.random(wordArray) * wordArray.length) || kidArray[Math.floor(Math.random(kidArray) * kidArray.length)]];

/*var kids = {
    words: ['mommy', 'daddy', 'brother', 'sister', 'school', 'homework', 'toys', 'car', 'bus', 'airplane', 'house', 'shirt', 'pants', 'shorts', 'shoes', 'socks', 'hat', 'helmet', 'glasses', 'cereal'],
    age: myAge(),
    // get age from user input
};r
var jokes = {
    words: ['funny', '', '', '', '', '', '', '', '', '', '', '', '',],
    age: myAge(),
};*/
//================Splitting words() into letters
var splitWords = words.split('');

console.log(splitWords);
//Getting our splitWords on to the screen
var newWord = document.getElementById("trialTwo");
newWord.innerHTML = splitWords;

var newWordTwo = document.getElementsByTagName("h2");
for (var x = 0; x < newWordTwo.length; x++) {
    newWordTwo[x++].innerHTML = splitWords;
}
var row = document.getElementsByClassName("row1");
var tile = document.createElement("h2");
var node = document.createTextNode(newWordTwo);
tile(newWord[x++]).appendChild(node);

//var div = getElementById("#rowString");
//div.appendChild(row);

//wordsArray[];
function showUp() {
    var letter = "";
    var i;
    for (i = 0; i <= splitWords.length; i++) {
        letter += "" + i++ + "h2";
    }
    document.getElementById("rowString");

}
/*
//Connecting to letters to ids
var newWord = getElementById("")
var oneA = document.getElementById("one");
newWord

//pull word out of word array
//randomWord = wordsArray[Math.random].split();
/*
for (var i = 0; i < splitWords.length; i++) {
    var letterBox = document.createElement('div')
    var letterh2 = document.createTextNode('h2');
    letterBox.appendChild(letterh2);
    document.getElementById("row1").appendChild(splitWords[i]);
}
*/
/*
function newRound() {
    splitWords.toString();
    document.getElementsById("#row1").innerHTML = splitWords;
    document.getElementsByClassName("letterbox1").appendChild(letterBox);

}
*/

//letterH2.createElement(splitWords[i]);

//letterBox.appendChild(letterH2);

//row1.appendChild(row1);

//row1.className = 'row1';
//letterBox.className = 'letterbox1';

//if (i > 9) {
//    row2
//}


// ================
