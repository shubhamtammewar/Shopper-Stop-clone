import {
    data
} from "./database.js";



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
                if (localStorage.getItem("temp_user_details") != null) {
                    localStorage.removeItem("temp_user_details");
                }
                if (localStorage.getItem("temp_user_details") === null) {
                    localStorage.setItem("temp_user_details", JSON.stringify([]));
                }
                let x = JSON.parse(localStorage.getItem("temp_user_details"))
                x.push(user_details[index]);
                localStorage.setItem("temp_user_details", JSON.stringify(x))
                alert("Welcome back " + `${(user_details[index].name)}`);
                window.location.reload();
                return;
            }
        }
        alert("user name or password is incorrect");


    }
    if (localStorage.getItem("wishlistproducts") === null) {
        localStorage.setItem("wishlistproducts", JSON.stringify([]));
    }
    if (localStorage.getItem("cartproducts") === null) {
        localStorage.setItem("cartproducts", JSON.stringify([]));
    }
    let user_in = JSON.parse(localStorage.getItem("temp_user_details"));
    if (user_in) {
        getid("favitem").style.display = "none";
        getid("countfav").innerHTML = JSON.parse(localStorage.getItem("wishlistproducts")).length;

        getid("changesign").innerHTML = `<h3>Your account</h3>
        <hr> <h3 id="signoutbtn">Sign out</h3>`

        getid("countbag").innerHTML = JSON.parse(localStorage.getItem("cartproducts")).length;

        getid("countfav").addEventListener("click", function () {
            window.location.href = "wishlist.html"
        })
        getid("countbag").addEventListener("click", function () {
            window.location.href = "cart.html"
        })
    }

    function getid(id) {
        return document.getElementById(id)
    }
    getid("signoutbtn") ?.addEventListener("click", () => {
        signoutbtn();

    })

    function signoutbtn() {
        localStorage.removeItem("temp_user_details");
        window.location.reload()
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
        if (localStorage.getItem("temp_user_details") != null) {
            localStorage.removeItem("temp_user_details");
        }
        if (localStorage.getItem("temp_user_details") === null) {
            localStorage.setItem("temp_user_details", JSON.stringify([]));
        }
        let m = JSON.parse(localStorage.getItem("temp_user_details"))
        m.push(user_details);
        localStorage.setItem("temp_user_details", JSON.stringify(m))

        alert("account created successfully")
        window.location.href = "Home.html";

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
            if ((data[i].Product_Color) ?.toUpperCase() == searchvalue) {
                searchdata.push(data[i])
            }
            if ((data[i].Product_Category) ?.toUpperCase() == searchvalue) {
                searchdata.push(data[i])
            }
            if ((data[i].Gender) ?.toUpperCase() == searchvalue) {
                searchdata.push(data[i])
            }

            if ((data[i].Product_Type) ?.toUpperCase() == searchvalue) {
                searchdata.push(data[i]);
            }
            if ((data[i].OCCASION) ?.toUpperCase() == searchvalue) {
                searchdata.push(data[i])
            };
        }
        if (searchdata.length == 0) {
            alert("No result found")
        } else {
            if (localStorage.getItem("searched_items") != null) {
                localStorage.removeItem("searched_items");
            }

            if (localStorage.getItem("searched_items") === null) {
                localStorage.setItem("searched_items", JSON.stringify([]));
            }
            let searcheditems = JSON.parse(localStorage.getItem("searched_items"));
            searcheditems.push(searchdata);
            searcheditems.push(searchvalue);
            localStorage.setItem("searched_items", JSON.stringify(searcheditems));
            window.location.href = "search.html"
        }
    }
}, 1500);