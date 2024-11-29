




var arrOfQuotes =[
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde",
    },

    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa",

    },

    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein",
    },

    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch",
       
    },

    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West",
    },

    {
        quote: "“Be the change that you wish to see in the world.”",
        author: " Mahatma Gandhi",
    },

    {
        quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
        author: " Andre Gide, Autumn Leaves",
    },

    {
        quote: "“Without music, life would be a mistake.”",
        author: "― Friedrich Nietzsche, Twilight of the Idols",
    },

    {
        quote: "“We accept the love we think we deserve.”",
        author: "― Stephen Chbosky, The Perks of Being a Wallflower",
    }
   

 
];



   var prevRandomNumber;

function Quotes() {
  var randomNumber = Math.trunc(Math.random() * arrOfQuotes.length);

  if (randomNumber == prevRandomNumber) {
    randomNumber = (randomNumber + 1) % arrOfQuotes.length;
  }

  // while(randomNumber == prevRandomNumber){
  //   randomNumber = Math.trunc(Math.random() * arrOfQuotes.length)
  // }

  prevRandomNumber = randomNumber;

  document.getElementById("quote").innerHTML = arrOfQuotes[randomNumber].quote;
  document.getElementById("author").innerHTML =
    arrOfQuotes[randomNumber].author;
}