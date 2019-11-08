var time;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var questions = [{
    question: "Which album sold more records?",
    answerList: ["Alanis Morissette's \"Jagged Little Pill\"", "Spice Girls' \"Spice\"", "Shania Twain's \"Come On Over\"", "Metallica's \"Metallica\""],
    answer: 0
},{
    question: "Who sang the \"Friends\" theme song?",
    answerList: ["Spin Doctors", "The Wallflowers", "Gin Blossoms", "The Rembrandts"],
    answer: 3
},{
     question: "What was the flavor of the soft drink Surge?",
    answerList: ["Lemon", "Lime", "Tropical", "Citrus"],
    answer: 3
},{
    question: "Which fruit contains the most protein per 100 calories?", 
    answerList: ["Guava", "Avocado", "Banana", "Blackberries" ],
		answer: 0
},{
    question: "The 1996 Summer Olympics where held in which U.S. city?",
    answerList: ["San Antonio", "Atlanta", "Denver", "Houston"],
    answer: 1
},{
    question: "What is the name of the high school in \"Boy Meets World\"?",
    answerList: ["John Adams High School", "John Henry High School", "John Hancock High School", "Johnny Appleseed High School"],
    answer: 0
},{
    question: "When the iBook was released in 1999 which was NOT one of the five colors available?",
    answerList: ["Tangerine", "Blueberry", "Key Lime", "Watermelon"],
    answer: 3
}];
$("#start").on("click", function() {

    $(this).hide();
    
    $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");

});
