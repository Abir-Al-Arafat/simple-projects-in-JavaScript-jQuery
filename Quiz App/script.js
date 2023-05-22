function submitAnswers(){
    // event.preventDefault();
    // setting number of questions
    const totalQues = 5;
    // setting result
    let result = 0;

    // user input
    let q1 = document.forms['quizForm']['q1'].value;
    let q2 = document.forms['quizForm']['q2'].value;
    let q3 = document.forms['quizForm']['q3'].value;
    let q4 = document.forms['quizForm']['q4'].value;
    let q5 = document.forms['quizForm']['q5'].value;
    
    // validation
    for(let num=1; num <= totalQues; num++){
        if(eval('q'+num) === null || eval('q'+num) === ''){
            alert('You Missed Question ' + num)
            return false
        }
    }

    // correct answers
    const answers = ["b", "a", "d", "b", "d"]

    // checking
    for(let number = 1; number<=totalQues; number++){
        if(eval('q'+number) == answers[number-1]){
            result++;
        }
    }

    // alert(`Final Score: ${result} out of ${totalQues}`)

    // fetching div tag
    const showResult = document.getElementById('results')
    // showing result
    showResult.innerHTML = `<h3>Your result is ${result} out of ${totalQues}</h3>`

    return false
}

