function calculate() {

    let n = Math.random();
    n = Math.floor(n * 100 + 1);

    if (document.getElementById('first').value == "" || document.getElementById('second').value == "") {
        document.getElementById('result').innerHTML = "Please enter the names!";
    } else {
        document.getElementById('result').innerHTML = "The Love Percentage is: " + n + "%";
    }



}