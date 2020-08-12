var scr = 0;
function check(){
    var right1 = document.getElementById('q1-a2');
    if(right1.checked == true){
        scr++
        alert('Question one answer is right')
    }else{
        alert('Question one answer is wrong')
    }

    var right2 = document.getElementById('q2-a3')
    if(right2.checked == true){
        scr++
        alert('Question two answer is right')
    }else{
        alert('Question two answer is wrong')
    }

    var right3 = document.getElementById('q3-a2')
    if(right3.checked == true){
        scr++
        alert('Question three answer is right')
    }else{
        alert('Question three answer is wrong')
    }
    alert('Your score is' + ' ' +scr)
}