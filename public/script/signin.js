import {
    data
} from "../JSONDATA/database.js";

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
                alert("Welcome back " + `${(user_details[index].name)}`);
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
        for (let index = 0; index < userDetails.length; index++) {
            if ((userDetails[index].email == user_details.email)) {
                alert("account already exists");
                return;
            }
        }
        userDetails.push(user_details);
        localStorage.setItem("user_details", JSON.stringify(userDetails));
        console.log('user_details:', userDetails);
        alert("account created successfully")
        window.location.href = "index.html";

    }
    document.getElementById("searchform").addEventListener("submit", search)
    document.getElementById("media_searchform").addEventListener("submit", search);



    function search(e) {
        e.preventDefault()
        let searchvalue = document.getElementById("searchinput").value;
        searchvalue = searchvalue.toUpperCase();
        let searchdata = []
        for (var i = 0; i < data.length; i++) {
            if ((data[i].Product_Brand).toUpperCase() == searchvalue) {
                searchdata.push(data[i])
            }
            if ((data[i].Product_Title).toUpperCase() == searchvalue) {
                searchdata.push(data[i])
            }
            if ((data[i].Product_Color)?.toUpperCase() == searchvalue) {
                searchdata.push(data[i])
            }
            if ((data[i].Product_Category)?.toUpperCase() == searchvalue) {
                searchdata.push(data[i])
            }
            if ((data[i].Gender)?.toUpperCase() == searchvalue) {
                searchdata.push(data[i])
            }

            if ((data[i].Product_Type)?.toUpperCase() == searchvalue) {
                searchdata.push(data[i]);
            }
            if ((data[i].OCCASION)?.toUpperCase() == searchvalue) {
                searchdata.push(data[i])
            };
        }
        if(searchdata.length==0){
            alert("No result found")
        }
        else{
        if (localStorage.getItem("searched_items") != null) {
            localStorage.removeItem("searched_items");
        }

        if (localStorage.getItem("searched_items") === null) {
            localStorage.setItem("searched_items", JSON.stringify([]));
        }
        let searcheditems = JSON.parse(localStorage.getItem("searched_items"));
        searcheditems.push(searchdata);
        localStorage.setItem("searched_items", JSON.stringify(searcheditems));
    }
    }
}, 1500);