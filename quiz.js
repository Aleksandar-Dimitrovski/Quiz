function checkResult() {
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer33");
    let answer3 = document.getElementById("answer222");

    let points = 0;

    let questions = document.getElementsByClassName("questions");

    if(answer1.checked) {
        questions[0].style.background = "green";
        points++;
    }
    else {
        questions[0].style.background = "red";
    }
    if(answer2.checked) {
        questions[1].style.background = "green";
        points++;
    }
    else {
        questions[1].style.background = "red";
    } 
    if(answer3.checked) {
        questions[2].style.background = "green";
        points++; 
    }
    else {
        questions[2].style.background = "red";
    }
    if(points >= 2) {
        alert("Congratulation");
    } else {
        alert("Sorry");
    }
}