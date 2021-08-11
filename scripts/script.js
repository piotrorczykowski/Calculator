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

function changeTheme()
{
    var currentTheme = document.getElementById('theme');

    if(currentTheme.getAttribute('href') === '/styles/light.css')
    {
        currentTheme.href = '/styles/dark.css'
        document.getElementById('changeTheme').value = 'Light Mode';
    }
    else
    {
        currentTheme.href = '/styles/light.css'
       document.getElementById('changeTheme').value = 'Dark Mode';
    }
}