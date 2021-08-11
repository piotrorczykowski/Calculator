function enteredValue(id)
{
    var value = document.getElementById(id).value;
    var result = document.getElementById('result');

    result.value += value;
}

function clearScreen()
{
    document.getElementById('result').value = ""
}