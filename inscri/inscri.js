


function inscri() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var email = document.getElementById("email").value


    if (username && password && email) {
      
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        localStorage.setItem("email", email)

        document.getElementById("error").innerHTML = "inscription successful"
        window.location.href = "file:///C:/Users/USER/Desktop/PAIRS/fsjs/full.html"
    } 
    else {
        document.getElementById("error").innerHTML = "Please fill in all username,password or mail."
    }
}

