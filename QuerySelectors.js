"use stric"

function completeTheList() {
    var elements = document.querySelectorAll('ul>li');
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i]);
        var currentElement = elements[i];
        currentElement.innerHTML = "Hello!";
    }
}

function amountLI() {
    var elements = document.querySelectorAll('ul>li');
    alert(elements.length);
}


function changeStyle (){
    var elems  = document.querySelectorAll("a");
    for (let i = 0; i < elems.length; i++) {
        let http = elems[i].matches( 'a[href *="http://"]');
        let ftp = elems[i].matches( 'a[href *="ftp://"]');

        if (http || ftp){
            elems[i].classList.add("external-red");
        }
    }
}

