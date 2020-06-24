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
