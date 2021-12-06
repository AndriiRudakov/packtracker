let a = 0;
let b = +prompt(`Wrire todays goal: `);
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

function winner(){
    if(a >= b){
        return `thank you!` ;
    } else {
        return `` ;
    }
}

document.getElementById('currentDate').innerHTML = `${date}`;

document.getElementById("packButton").addEventListener("click", function() {
    a++;
    document.getElementById("total").innerHTML = `${a}`;
    document.getElementById("totalMeta").innerHTML = `${a}`;
    console.log(winner());
});

document.getElementById("packButtonMinus").addEventListener("click", function() {
    a--;
    document.getElementById("total").innerHTML = `${a}`;
    document.getElementById("totalMeta").innerHTML = `${a}`;
});

document.getElementById('meta').innerHTML = `${b}`;


function topScore(){
    return `Test succesfully completed, file is connected!`
}