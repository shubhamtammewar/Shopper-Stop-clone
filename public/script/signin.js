
    setTimeout(() => {
        document.getElementById("searchbtn").onclick = function () {
            myFunction()
        };

        function myFunction() {
            document.getElementById("searchdiv").classList.toggle("show");
        }

        document.getElementById("signupform").addEventListener("submit", Signup);
        document.getElementById("signinform").addEventListener("submit", Login);

        function Signup(e) {
            e.preventDefault();
            let user_data = {
                name: document.getElementById("signupFullName").value,
                password: document.getElementById("signupPassword").value,
                email: document.getElementById("signupemail").value,
                mobile: document.getElementById("signupMobileNumber").value,


            };
            storeInLocal(user_data)


        }
      
        function Login(e) {
            e.preventDefault();
            let user_details = JSON.parse(localStorage.getItem("user_details"));
            let password = document.getElementById("signinPassword").value;
            let email = document.getElementById("signinemail").value;
            for (let index = 0; index < user_details.length; index++) {
                if ((user_details[index].email == email) && (user_details[index].password == password)) {
                    alert("Welcome back " + `${(user_details[index].name).toUpperCase()}`);
                    window.history.back();
                    return;
                }
            }
            alert("user name or password is incorrect");


        }
        if (localStorage.getItem("user_details") === null) {
            localStorage.setItem("user_details", JSON.stringify([]));
        }

        function storeInLocal(user_details) {

            let userDetails = JSON.parse(localStorage.getItem("user_details"));
            userDetails.push(user_details);

            localStorage.setItem("user_details", JSON.stringify(userDetails));
            console.log('user_details:', userDetails);
            alert("account created successfully")
            window.location.href = "index.html";
        }


    }, 1500);
