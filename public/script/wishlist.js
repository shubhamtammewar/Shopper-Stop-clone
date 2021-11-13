function getid(id){
    return document.getElementById(id);
}
function create(el){
    return document.createElement(el);
}

let favdata= JSON.parse(localStorage.getItem('wishlistproducts'));
append(favdata)

console.log('favdata:', favdata)
let user = JSON.parse(localStorage.getItem("temp_user_details"))[0];
console.log('user:', user)
getid("userdetails").innerHTML = `<p> Name: ${user.name}</p><p>Email: ${user.email}<p>Mobile: ${user.mobile}</p>`;
getid("wishhead").innerText = "Wishlist " + "(" + favdata.length + ")";

getid("logout").addEventListener("click", function(){
    logout();
})

function logout(){
    localStorage.removeItem("temp_user_details");
    window.location.href="../Home.html";}




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
        btn.innerHTML = `<p><b>Move to bag<b/></p>`
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
