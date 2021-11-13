var data= JSON.parse(localStorage.getItem("searched_items"))


if(data){
    append(data[0]);
}



function getid(id) {
    return document.getElementById(id);
}
getid("category text").innerText=`Searched item: "${data[1]}"`


getid("Sort_GENDER").addEventListener("click", () => {
    dispay_sort("gendersort");
});
getid("Sort_FABRIC").addEventListener("click", () => {
    dispay_sort("fabricsort");
});
getid("Sort_LENGTH").addEventListener("click", () => {
    dispay_sort("lengthsort");
});
getid("Sort_OCCASION").addEventListener("click", () => {
    dispay_sort("occasionsort");
});
getid("Sort_CATEGORY").addEventListener("click", () => {
    dispay_sort("categorysort");
});


function dispay_sort(id) {

    let x = document.querySelectorAll(".topbelowsortoptions_dis");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    getid(id).style.display = "inline-block";

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
    data[0].forEach((el) => {
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
        data[0].forEach((el) => {


            if (+el.Product_Discount == id) {

                getData.push(el)
            }
        })

        append(getData);
    } else {
        data.forEach((el) => {


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

    data[0].forEach((el) => {


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

    data[0].forEach((el) => {


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
    data[0].forEach((el) => {


        if (el.Product_Price >= min && el.Product_Price <= +max) {

            getData.push(el)
        }
    })

    append(getData);



}

function add(element) {
    let getData = [];
    for (var i = 0; i < data.length; i++) {
        if ((data[0][i].OCCASION ?.toUpperCase()) == element) {
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
    data.forEach((el) => {
        let div = create("div");
        div.id = "maindiv"
        div.addEventListener("click", () => {
            gotoproduct(el)
        })
        let img = create("img");
        img.src = el.Product_Image[0];
        img.style.height = "430px";
        img.style.width="100%";
       

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
        div.append(img, desc_div);
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
    let arr = data[0].sort(function (a, b) {
        return a.Product_Rating - b.Product_Rating;

    });
    append(arr)
}

function discount() {
    let arr = data[0].sort(function (b, a) {
        return a.Product_Discount - b.Product_Discount;

    });
    append(arr)
}

function lowtohigh() {
    let arr = data[0].sort(function (a, b) {
        return a.Product_Price - b.Product_Price;

    });
    append(arr)
}

function hightolow() {
    let arr = data[0].sort(function (b, a) {
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
        data[0].forEach((el) => {


            if (el.Product_Price >= +minprice && el.Product_Price <= +maxprice) {

                getData.push(el)
            }
        })

        append(getData);
    }
}