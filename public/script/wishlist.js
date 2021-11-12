function getid(id){
    return document.getElementById(id);
}
function create(el){
    return document.createElement(el);
}

let favdata= JSON.parse(localStorage.getItem('wishlistproducts'));
append(favdata)

console.log('favdata:', favdata)
//getid("userdetails").innerHTML=`<p> Name: ${user.name}</p><p>Email: ${user.email}<p>Mobile: ${user.mobile}</p>`;
getid("wishhead").innerText= "Wishlist " + "(" + favdata.length +")";




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
        let desc_div = create("div");
        let brand = create("h4");
        brand.innerHTML = el.Product_Brand;
        let title = create("p");
        title.innerHTML = el.Product_Title;
        let price = create("p");
        let btn= create("button");
        btn.innerHTML = `<p>Move to bag</p>`
        btn.onclick= () =>{
            addtoBag(el);
        }
        if (+el.Product_Discount > 0) {
            price.innerHTML = `₹  ${el.Product_Price} MRP <strike> ₹ ${el.Product_MRP}</strike> (${el.Product_Discount} %OFF)`
        } else price.innerHTML = "₹ " + el.Product_Price;
        desc_div.append(brand, title, price);
        div.append( img, desc_div,btn);
        container.append(div)
})
}


function addtoBag(el) {
    if (localStorage.getItem("cartproducts") === null) {
        localStorage.setItem("cartproducts", JSON.stringify([]));
    }
    let cartproduct = JSON.parse(localStorage.getItem("cartproducts"));
    cartproduct.push(el);
    localStorage.setItem("cartproducts", JSON.stringify(cartproduct));
}
