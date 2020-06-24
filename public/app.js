function getnumber(num)
{
    var result = document.getElementById("result");
    result.value += num;
}

function clearnumber()
{
    var result = document.getElementById("result");
    result.value = "";
}


function getresult()
{
    var result = document.getElementById("result");   //reading
    result.value = eval(result.value);
}


function square()
{
    var result = document.getElementById("result");
    result.value = Number(result.value * result.value);
}

function sqroot()
{
    var result = document.getElementById("result");
    result.value = Number(Math.sqrt(result.value));
}

function sin()
{
    var result = document.getElementById("result");
    result.value = Number(Math.sin(result.value));
}

function cos()
{
    var result = document.getElementById("result");
    result.value = Number(Math.cos(result.value));
}
function tan()
{
    var result = document.getElementById("result");
    result.value = Number(Math.tan(result.value));
}

function cbroot()
{
    var result = document.getElementById("result");
    result.value = Number(Math.cbrt(result.value));
}