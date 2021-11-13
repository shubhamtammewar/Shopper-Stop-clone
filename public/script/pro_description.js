
var data = JSON.parse(localStorage.getItem("specificproduct"))[0];
var container = getid("smallimg")
getid("imgbox").src=data.Product_Image[0];
getid("brandname").textContent=data.Product_Brand;
getid("title").textContent=data.Product_Title;
getid("productdes").innerHTML=`<h3>Product Description:  </h3> <br>${data.Product_Description}`;
if(data.Product_Discount > 0){
    getid("price-box").innerHTML=`
    <div>
        <p class="price"><b>&#8377; ${data.Product_Price}</b></p>
    </div>
    <div>
        <strike>MRP &#8377;${data.Product_MRP} </strike>
    </div>
    <div style="color: rgb(253, 108, 11);">
        <span>(${data.Product_Discount}% Off)</span>
    </div>
    <div>
        <span style="color: gray;">Includes all taxes</span>
    </div>
    

    `
}
else{
    getid("price-box").innerHTML=`
    <div>
        <p class="price"><b>&#8377; ${data.Product_Price}</b></p>
    </div>

    <div>
        <span style="color: gray;">Includes all taxes</span>
    </div>`
  
}
if(data.Product_Image.length > 1) {
    for(let i=1;i<data.Product_Image.length;i++){
        let img= create("img");
        
        img.src=`${data.Product_Image[i]}`;
        img.addEventListener("click", ()=>{
            var fImg = document.getElementById("imgbox");
            fImg.src =data.Product_Image[i];
            

         
     
        })
       
        container.appendChild(img);
    }
        
}
function create(element){return document.createElement(element);}

function getid(id){return document.getElementById(id)};

function addtoBag() {
    if (localStorage.getItem("cartproducts") === null) {
        localStorage.setItem("cartproducts", JSON.stringify([]));
    }
    let cartproduct = JSON.parse(localStorage.getItem("cartproducts"));
    cartproduct.push(data);
    localStorage.setItem("cartproducts", JSON.stringify(cartproduct));
}
