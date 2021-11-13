var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 4000);
    }

    var slideIndex = 1;
    gotoSlides(slideIndex);

    function currentSlide(n) {
        gotoSlides((slideIndex = n));
    }

    function gotoSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }


    import {
       data
    } from '../script/database.js';

    function category(){
        let beautydata=[]
       for(let i=0;i<data.length; i++){
      
           if((data[i].category)=="beauty"){
            beautydata.push(data[i]);
          }
       }
        
    return beautydata;
    
    }
    
    var beautydata = category();
    append(beautydata)
    
    
    
    
    
    function getid(id) {
        return document.getElementById(id);
    }

    
 
    
    
    
    let options = document.querySelectorAll(".sortingbelow");
    options.forEach(element => {
        element.addEventListener("click", () => {
            add(element.id.toUpperCase())
        })
    })
    
    let pricingoptions = document.querySelectorAll(".pricerange");
    pricingoptions.forEach(element => {
        element.addEventListener("click", () => {
            pricerange(element.id)
        })
    })
    
    let clearbtn = document.querySelectorAll(".clear");
    clearbtn.forEach(element => {
        element.addEventListener("click", () => {
            Clearall();
        })
    })
    
    function Clearall() {
        let checkbox = document.querySelectorAll(".sh");
        checkbox.forEach(element => {
            element.checked = false;
        })
    }
    
    let colors = document.querySelectorAll(".colorselect");
    colors.forEach(element => {
        element.addEventListener("click", () => {
            sortcolor(element.id.toUpperCase())
        })
    })
    
    
    function sortcolor(id) {
        let getData = [];
       beautydata.forEach((el) => {
            if (el.Product_Color ?.toUpperCase() == id) {
                getData.push(el)
            }
        })
        append(getData)
    }
    
    let sizes = document.querySelectorAll(".sizesort");
    sizes.forEach(element => {
        element.addEventListener("click", () => {
            sortsize(element.id)
        })
    })
    
    function sortsize(el) {
        alert("Sorry, this size is not available")
    
    }
    let discount_sort = document.querySelectorAll(".discountsort");
    discount_sort.forEach(element => {
        element.addEventListener("click", () => {
            sortdiscount(element.id)
        })
    })
    
    function sortdiscount(id) {
    
        let getData = []
        if (+id < 100) {
           beautydata.forEach((el) => {
    
    
                if (+el.Product_Discount == id) {
    
                    getData.push(el)
                }
            })
    
            append(getData);
        } else {
           beautydata.forEach((el) => {
    
    
                if (+el.Product_Price == id) {
    
                    getData.push(el)
                }
            })
    
            append(getData);
    
        }
    }
    
    let brand_sort = document.querySelectorAll(".brand");
    brand_sort.forEach(element => {
        element.addEventListener("click", () => {
            sortbrand(element.id.toUpperCase())
        })
    })
    
    function sortbrand(id) {
    
    
        let getData = []
    
       beautydata.forEach((el) => {
    
    
            if (el.Product_Brand == id) {
    
                getData.push(el)
            }
        })
    
        append(getData);
    }
    let sub_sort = document.querySelectorAll(".subcatsort");
    sub_sort.forEach(element => {
        element.addEventListener("click", () => {
            sortsubcat(element.id.toUpperCase())
        })
    })
    function sortsubcat(element){
        let getData = []
    
       beautydata.forEach((el) => {
    
    
            if (el.Product_Category?.toUpperCase() == element) {
    
                getData.push(el)
            }
        })
    
        append(getData);
    
    }
    
    function pricerange(e) {
        let range = e.trim().split("-").map(Number);
        var [min, max] = range;
        let getData = [];
       beautydata.forEach((el) => {
    
    
            if (el.Product_Price >= min && el.Product_Price <= +max) {
    
                getData.push(el)
            }
        })
    
        append(getData);
    
    
    
    }
    
    function add(element) {
        let getData = [];
        for (var i = 0; i <beautydata.length; i++) {
            if ((data[i].OCCASION ?.toUpperCase()) == element) {
                getData.push(data[i])
            }
        }
    
        append(getData)
    
    
    }
    
    function create(el) {
        return document.createElement(el)
    }
    
    function append(data) {
        let container = getid("product_container")
        container.innerHTML = ""
       beautydata.forEach((el) => {
            let div = create("div");
            div.id = "maindiv";
            
            div.addEventListener("click", () => {
                gotoproduct(el);
            })
            let img = create("img");
            img.src = el.Product_Image[0];
            img.style.height = "430px";
            img.id="prodimg"
           img.style.width="100%";
            let fav_btn = create("button");
            fav_btn.innerHTML = "🧡";
            fav_btn.id = "fav_btn"
            fav_btn.onclick = function () {
                addtofav(el);
            }
    
            let desc_div = create("div");
            let brand = create("h4");
            brand.innerHTML = el.Product_Brand;
            let title = create("p");
            title.innerHTML = el.Product_Title;
            let price = create("p");
            if (+el.Product_Discount > 0) {
                price.innerHTML = `₹  ${el.Product_Price} MRP <strike> ₹ ${el.Product_MRP}</strike> (${el.Product_Discount} %OFF)`
            } else price.innerHTML = "₹ " + el.Product_Price;
            desc_div.append(brand, title, price);
            div.append(fav_btn, img, desc_div);
            container.append(div)
    
    
        })
    }
    
    getid("Popular").addEventListener("click", () => {
        popular();
    })
    getid("Discount").addEventListener("click", () => {
        discount();
    })
    getid("sortlow").addEventListener("click", () => {
        lowtohigh()
    })
    getid("sorthigh").addEventListener("click", () => {
        hightolow();
    })
    
    function popular() {
        let arr =beautydata.sort(function (a, b) {
            return a.Product_Rating - b.Product_Rating;
    
        });
        append(arr)
    }
    
    function discount() {
        let arr =beautydata.sort(function (b, a) {
            return a.Product_Discount - b.Product_Discount;
    
        });
        append(arr)
    }
    
    function lowtohigh() {
        let arr =beautydata.sort(function (a, b) {
            return a.Product_Price - b.Product_Price;
    
        });
        append(arr)
    }
    
    function hightolow() {
        let arr =beautydata.sort(function (b, a) {
            return a.Product_Price - b.Product_Price;
    
        });
        append(arr)
    }
    
    function gotoproduct(el) {
    
        if (localStorage.getItem("specificproduct") != null) {
            localStorage.removeItem("specificproduct");
        }
        localStorage.setItem("specificproduct", JSON.stringify([]));
        let specificproduct = JSON.parse(localStorage.getItem("specificproduct"));
        specificproduct.push(el);
        localStorage.setItem("specificproduct", JSON.stringify(specificproduct));
      
        window.location.href="./pro_description.html"
    
    }
    
    function addtofav(el) {
        if (localStorage.getItem("wishlistproducts") === null) {
            localStorage.setItem("wishlistproducts", JSON.stringify([]));
        }
        let wishlistproduct = JSON.parse(localStorage.getItem("wishlistproducts"));
        wishlistproduct.push(el);
        localStorage.setItem("wishlistproducts", JSON.stringify(wishlistproduct));
    }
    
    
    
    getid("refinesearch").addEventListener("click", function () {
        refineprice()
    })
    
    function refineprice() {
    
        let minprice = getid("minamount").value;
        let maxprice = getid("maxamount").value;
        if (+minprice > +maxprice) {
            alert("Please enter valid prices")
        } else {
            let getData = [];
           beautydata.forEach((el) => {
    
    
                if (el.Product_Price >= +minprice && el.Product_Price <= +maxprice) {
    
                    getData.push(el)
                }
            })
    
            append(getData);
        }
    }