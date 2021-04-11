/*function color() {
    document.getElementById("cnty").style.backgroundColor = "white";
}*/
function f1() {
    event.preventDefault();
    var name = document.getElementById("cnty").value;
    var dateA = document.getElementById("dateA").value;
    var dateB = document.getElementById("dateB").value;
    var cas = document.getElementById("cas");
    var acas = document.getElementById("cas");
    var dcas = document.getElementById("dcas");
    console.log(dateA);
    if (name == '' || dateA == '' || dateB == '')
        alert("enter the value");
    else {
        var api = "https://api.covid19api.com/country/" + name + "?from=" + dateA + "T00:00:00Z&to=" + dateB + "T00:00:00Z";
        fetch(api)
            .then((result) => result.json())
            .then((result) => {
                console.log(result);
                var length = result.length;
                var index = length - 1;

                var c = result[index].Confirmed;
                var a = result[index].Active;
                var d = result[index].Deaths;

                cas.innerHTML = c;
                acas.innerHTML = a;
                dcas.innerHTML = d;

                document.getElementById("result").style.display = "block";

            })

    }

}