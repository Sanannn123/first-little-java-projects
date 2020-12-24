function validate() {
    var username = document.getElementById ("username").value;
    // regx - text'i anlamasi ucun istifade edirik //
    var regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//true da console da cixir
    if (regx.test(username)) {
        console.log("Valid Username")
    }
    // false de ise console ve ekranda invalid yazisi
    else{
        console.log ("Invalid Username");
        document.getElementById ("luser").style.visibility = "visible";
    }
}
