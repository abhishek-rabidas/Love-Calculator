let count = 0;

function calculate() {

    let n = Math.random();
    n = Math.floor(n * 100 + 1);

    if (document.getElementById('first').value == "" || document.getElementById('second').value == "") {
        document.getElementById('result').innerHTML = "Please enter the names!";
    } else {
        if (count == 0) {
            document.getElementById('result').innerHTML = "The Love Percentage is: " + n + "%";
            count++;
        } else {
            document.getElementById('result').innerHTML = "Please enter new names!";
            document.querySelector('#try').style.display = "block";
        }
    }



}