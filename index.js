var btn = document.getElementById('signin_btn')
btn.addEventListener("click", change)

function change() {
    var email = document.getElementById("input").value
    var password = document.getElementById("inputpassword").value

    var input01 = "test@example.com"
    var input02 = '123'

    if (email === input01 && password === input02) {
        alert('Access granted')
    } else {
        alert('Access denied')
    }

}
