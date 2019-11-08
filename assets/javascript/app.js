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
	
    run();

    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );
	
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );
    
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

  
    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );

    
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );
    
    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
        + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
        + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
        + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );
 
    $("#question7").html("<h3>" + questions[6].question + "</h3>");
    $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
        + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
        + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );
	$("#submit").html("<button id='done' class='btn'>Done</button>");
	$("#done").on("click", function() {

        keepingScore();
 
        displayResults();
	});
    });
	
function run() {
 clearInterval(intervalId);
 intervalId = setInterval(decrement, 1000);
}
function decrement() {

    number--;
	
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");
	
	if (number === 0) {

         
        stop();

        keepingScore();
        displayResults();

    }
  
}

function stop() {

    clearInterval(intervalId);
}

function displayResults() {
 $("#time").hide();
 $("#question1").hide();
 $("#answer1").hide();
 $("#question2").hide();
 $("#answer2").hide();
 $("#question3").hide();
 $("#answer3").hide();
 $("#question4").hide();
 $("#answer4").hide();
 $("#question5").hide();
 $("#answer5").hide();
 $("#question6").hide();
 $("#answer6").hide();
 $("#question7").hide();
 $("#answer7").hide();
 $("#submit").hide();
 $("#resultsMessage").html("<h3>All Done!</h3>");
 $("#correct").html("Correct Answers: " + correctAnswers);
 $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
 $("#unanswered").html("Unanswered: " + unanswered);
}

function keepingScore() {

 
}
