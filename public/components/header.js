function header() {


  return `
    
    <header>
        <div id="left-header">
             <img
            src="https://cdn-icons.flaticon.com/png/512/3222/premium/3222657.png?token=exp=1635850627~hmac=0c5658d53a1af0aaa99bba6de271f63f"
            height="25px" width="25px" />
          <span>
            <p>All stores</p>
          </span>
    
          <img src="https://cdn-icons-png.flaticon.com/512/1034/1034182.png" height="25px" width="25px" />
          <span>
            <p>Contact us</p>
          </span>
    
        </div>
        <div id="left-header-responsive">
          <img src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/iconmenu.svg" alt="">
        </div>
        <div id="right-header">
          <div id="main-img">
            <img src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/sslogo.svg" />
          </div>
          <form id="searchform">
            <input id="searchinput" type="text" name="search" placeholder="Search products and Brands" />
          </form>
          <div id="searchicon-media" class="top-dropdown">
            <button id="searchbtn"><img
                src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/iconsearch.png"
                alt=""></button>
          </div>
    
    
          <div id="wishlist" class="top-dropdown">
            <div class="top-dropbtn">
              <img src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/iconwishlist.png" />
            </div>
            <div class="top-dropdown-content" id="favitem">
              <h3 class="" id="">Your Saved Items Are Empty
    
              </h3>
              <hr />
              <h3 id="">Please LOGIN or REGISTER to add products</h3>
            </div>
            <p id="countfav"></p>
          </div>
          <div class="top-dropdown">
            <div class="top-dropbtn">
              <a href="cart.html"><img src="https://www.shoppersstop.com/_ui/responsive/common/assets/images/iconaddtobag.png" /></a>
            </div>
            <p id="countbag"></p>
          </div>
          
          <div class="top-dropdown">
            <div class="top-dropbtn">
              <img src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/iconuser.png" />
            </div>
            <div class="top-dropdown-content" id="changesign">
              <h3><label for="show" class="show-btn">SIGN IN</label></h3>
              <hr />
    
              <h3><label for="signupdiv" class="show-btn">SIGN UP</label></h3>
            </div>
          </div>
    
        </div>
    
      </header>
      <br>
    
    
    
      <hr>
      <div id="searchdiv" class="mediasearchdiv">
        <form id="media_searchform">
          <input id="mediasearchinput" type="text" name="search" placeholder="Search products and Brands" />
        </form>
      </div>
      <div class="navbar">
        <div class="dropdown">
          <button class="dropbtn">BARGAIN</button>
          <div class="dropdown-content" id="dd1">
            <ul>
              <div class="idropdown">
                <li class="idropbtn" id="bargain_women">Women</li>
                <div class="idropdown-content">
                  <div>
                    <ul>
                      <li><a>Westernwear - upto 70% off</a></li>
                      <li><a>Women Ethnicwear Upto 80% Off</a></li>
                      <li><a>Shoes - upto 80% off</a></li>
                      <li><a>Dresses - upto 70%</a></li>
                      <li><a>Women's Handbags- Flat 40% off</a></li>
                      <li><a>Women's footwear- upto 60% off</a></li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/ha9/h27/15070684053534/Puma_menu_Banner-2020.jpg"
                      alt="" />
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he3/h37/16262418661406/Arcelia-Menu-Banner.jpg"
                      alt="" />
                  </div>
                </div>
              </div>
              <div class="idropdown">
                <li class="idropbtn" id="bargain_men">Men</li>
                <div class="idropdown-content">
                  <div>
                    <ul>
                      <li><a>T-shirt - upto 50% off</a></li>
                      <li><a>Shirts - Upto 70% off</a></li>
                      <li><a>Jeans - upto 60%</a></li>
                      <li><a>Shoes - Upto 70%</a></li>
                      <li><a>Men's Footwear- Min 55% off</a></li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/ha9/h27/15070684053534/Puma_menu_Banner-2020.jpg"
                      alt="" />
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he3/h37/16262418661406/Arcelia-Menu-Banner.jpg"
                      alt="" />
                  </div>
                </div>
              </div>
              <div class="idropdown">
                <li class="idropbtn" id="bargain_kids">Kids</li>
                <div class="idropdown-content">
                  <div>
                    <ul>
                      <li><a> Dresses & Jumpsuits</a></li>
                      <li><a>Kids Ethnicwear - upto 30% off</a></li>
                      <li><a>Boys Bottomwear- upto 50% off</a></li>
                      <li><a>Toys - upto 30% off</a></li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/ha9/h27/15070684053534/Puma_menu_Banner-2020.jpg"
                      alt="" />
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he3/h37/16262418661406/Arcelia-Menu-Banner.jpg"
                      alt="" />
                  </div>
                </div>
              </div>
    
              <div class="idropdown">
                <li class="idropbtn" id="bargain_home_offers">Home offers</li>
                <div class="idropdown-content">
                  <div>
                    <ul>
                      <li><a>Bath Upto 50% off</a></li>
                      <li><a>Bed Upto 50% off</a></li>
                      <li><a>Living Upto 60% Off</a></li>
                      <li><a>Home Adornment Upto 80% off</a></li>
                      <li><a>Appliances Upto 25% Off</a></li>
                      <li><a>storage Upto 60% Off</a></li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/ha9/h27/15070684053534/Puma_menu_Banner-2020.jpg"
                      alt="" />
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he3/h37/16262418661406/Arcelia-Menu-Banner.jpg"
                      alt="" />
                  </div>
                </div>
              </div>
    
              <div class="idropdown">
                <li class="idropbtn" id="bargain_other_offers">Other offers</li>
                <div class="idropdown-content">
                  <div>
                    <ul>
                      <li><a>Puma-UPTO 50% OFF</a></li>
                      <li><a>Travel & Essential-UPTO 50% OFF</a></li>
                      <li><a>Skagen-Upto 50% Off</a></li>
                      <li><a>Fastrack-Upto 40% Off</a></li>
                      <li><a>Gio Sunglasses-Upto 60% Off</a></li>
    
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/ha9/h27/15070684053534/Puma_menu_Banner-2020.jpg"
                      alt="" />
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he3/h37/16262418661406/Arcelia-Menu-Banner.jpg"
                      alt="" />
                  </div>
                </div>
              </div>
              <div class="idropdown">
                <li class="idropbtn" id="bargain_beauty">Beauty</li>
                <div class="idropdown-content">
                  <div>
                    <ul>
                      <li><a>Make up - upto50% off</a></li>
                      <li><a>Skincare - upto 40% off</a></li>
                      <li><a>Womens Fragrances - upto 40% off</a></li>
                      <li><a>Men Fragrances - upto 50% off</a></li>
    
    
    
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/ha9/h27/15070684053534/Puma_menu_Banner-2020.jpg"
                      alt="" />
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he3/h37/16262418661406/Arcelia-Menu-Banner.jpg"
                      alt="" />
                  </div>
                </div>
              </div>
              <div class="idropdown">
                <li class="idropbtn" id="all_offer_products">All offers products</li>
                <div class="idropdown-content">
    
    
    
                  <div>
                    <ul>
                      <li><a>See All Offer Products</a></li>
    
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/ha9/h27/15070684053534/Puma_menu_Banner-2020.jpg"
                      alt="" />
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he3/h37/16262418661406/Arcelia-Menu-Banner.jpg"
                      alt="" />
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">WOMEN</button>
          <div class="dropdown-content">
            <ul>
              <div class="idropdown">
                <li id="women_Indian_wear" class="idropbtn">Indian wear</li>
                <div class="idropdown-content">
                  <div>
                    <ul>
                      <li><a><b>All Indian Wear</b></a></li>
                      <li><a><b>Kurtas, kurtis & tops</b></a></li>
                      <li><a>Kurtas</a></li>
                      <li><a>Kurtis & Tops</a></li>
                      <li><a><b> Bottom Wear</b></a></li>
                      <li><a>Leggings & Churidars</a></li>
                      <li><a>Palazzo & Salwars</a></li>
                      <li><a>Pants</a></li>
                      <li><a>Skirts</a></li>
                      <li><a><b>Indianwear Sets</b></a></li>
                      <li><a><b>Indianwear Dresses</b></a></li>
                      <li><a><b>Dress Material</b></a></li>
                    </ul>
                  </div>
                  <div>
                    <li><a><b>Sarees & Blouses</b></a></li>
                    <li><a>All Sarees & Blouses</a></li>
                    <li><a>Blouses</a></li>
                    <li><a>Saree</a></li>
    
                    <li><a><b>Dupattas</b></a></li>
                    <li><a><b>Scarf & Stoles</b></a></li>
                    <li><a><b>Mask & PPE kits</b></a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg"
                      alt="" />
                  </div>
                </div>
              </div>
              <div class="idropdown">
                <li id="women_Western_wear">Western wear</li>
                <div class="idropdown-content">
                  <div>
                    <ul>
                      <li><a><b>All Western Wear</b></a></li>
                      <li><a><b>Top Wear</b></a></li>
                      <li><a>All Top Wear</a></li>
                      <li><a>Shirts</a></li>
                      <li><a>T-Shirts</a></li>
    
                      <li><a><b>Dresses & Jumpsuits</b></a></li>
                      <li><a>All Dresses & Jumpsuits</a></li>
                      <li><a>Dresses</a></li>
                      <li><a>Jumpsuits</a></li>
    
                      <li><a><b>Jeans & Jeggings</b></a></li>
                      <li><a>All Jeans & Jeggings</a></li>
                      <li><a>Leggings</a></li>
    
                    </ul>
                  </div>
                  <div>
                    <li><a><b>Accessories</b></a></li><br>
                    <li><a>All Accessories</a></li>
                    <li><a>Belts</a></li>
                    <li><a>Socks</a></li>
                    <li><a>Caps</a></li>
                    <li><a>Masks</a></li>
    
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg"
                      alt="" />
                  </div>
                </div>
              </div>
              <div class="idropdown">
                <li class="idropbtn" id="women_Lingerie"> Lingerie & Night Wear</li>
                <div class="idropdown-content">
    
                  <div>
                    <li><a><b>All Lingerie & Night wear</b></a></li>
                    <li><a><b>Bras</a></b></li>
                    <li><a>Briefs</a></li>
                    <li><a><b> lingerie sets</b></a></li>
                    <li><a><b> Shapewear</b></a></li>
                    <li><a><b> Bodysuit</b></a></li>
                    <li><a> All Shapewear</a></li>
                    <li><a> Saree Shapewear</a></li>
                    <li><a> Thighs</a></li>
                    <li><a> Tummy</a></li>
                    <li><a><b> Swimwear</b></a></li>
                  </div>
                  <div>
                    <li><a><b>Nightwear</b></a></li>
                    <li><a>All Nightwear</a></li>
                    <li><a>Babydolls</a></li>
                    <li><a>Loungewear</a></li>
                    <li><a>Nightdresses</a></li>
                    <li><a>Pyjamas & Shorts</a></li>
                    <li><a>Robes</a></li>
                    <li><a>Slips & Camisoles</a></li>
    
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="women_Footwear">Footwear</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Footwear</a></li>
                    <li><a> Floaters & Flip Flops</a></li>
                    <li><a> Casual Shoes</a></li>
                    <li><a> Flats</a></li>
                    <li><a> Heels</a></li>
                    <li><a> Ballerinas</a></li>
                    <li><a> Sports Shoes & Sneakers</a></li>
                    <li><a> Boots</a></li>
                    <li><a> Sandals</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
                <li class="idropbtn" id="women_Fragrances">Women's Fragrances</li>
                <div class="idropdown-content">
                  <div>
                    <li><a> All Women's Fragrance</a></li>
                    <li><a>Perfumes</a></li>
                    <li><a>Mist & Deodrants</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
                <li class="idropbtn" id="bagandwallets">Bags & Wallets</li>
                <div class="idropdown-content">
                  <div>
    
                    <li><a><b>All Bags & Wallets</b></a></li>
                    <li><a><b>Backpacks</b></a></li>
                    <li><a><b>Handbags</b></a></li>
                    <li><a>All Handbags</a></li>
                    <li><a>Hobo</a></li>
                    <li><a>Tote</a></li>
                    <li><a>Satchel</a></li>
                    <li><a>Laptop Bag</a></li>
                    <li><a>Slings</a></li>
                    <li><a><b>Wallets & Clutches</b></a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
                <li class="idropbtn" id="women_Watches">Watches</li>
                <div class="idropdown-content">
                  <div>
                    <!-- *************** -->
                    <li><a>All Watches</a></li>
                    <li><a>Smartwatch & Fitness</a></li>
                    <li><a>Hybrid</a></li>
                    <li><a>Analog</a></li>
                    <li><a>Analog Digital</a></li>
                    <li><a>Digital</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="women_sunglasses">Sunglasses & Frames</li>
                <div class="idropdown-content">
                  <div>
    
                    <li><a><b>All Sunglasses & Frames</b></a></li>
                    <li><a> Shop by Shape</a></li>
                    <li><a> Aviators</a></li>
                    <li><a> Cat Eye</a></li>
                    <li><a> Oval</a></li>
                    <li><a> Wayfarers</a></li>
                    <li><a> Rectangle</a></li>
                    <li><a> Frames & Contact Lenses</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="women_Jewellery">Jewellery</li>
                <div class="idropdown-content">
                  <div>
    
                    <li><a><b>Fashion & Semi Precious Jewellery</b></a></li>
                    <li><a>All Jewellery</a></li>
                    <li><a>Chain & Necklace</a></li>
                    <li><a>Ear Rings</a></li>
                    <li><a>Bracelet & Bangle</a></li>
                    <li><a>Ring</a></li>
                    <li><a>Others</a></li>
                    <li><a>Pendant</a></li>
                    <li><a><b>Fashion Accessories</b></a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="women_Luggage">Luggage</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Travel & Luggage</a></li>
                    <li><a>Hard Luggage</a></li>
                    <li><a>Soft Luggage</a></li>
                    <li><a>Essentials</a></li>
    
    
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                </div>
              </div>
    
    
    
            </ul>
          </div>
        </div>
        <div class="dropdown">
          <a href="kidsproductpage.html"><button class="dropbtn">KIDS</button></a>
          <div class="dropdown-content" id="dd3">
            <ul>
              <div class="idropdown">
    
                <li class="idropbtn" id="kids_boys">Boys</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Boys</b></a></li>
                    <li><a><b>Topwear</b></a></li>
                    <li><a>Shirts</a></li>
                    <li><a>T-Shirts</a></li>
                    <li><a><b>Bottomwear</b></a></li>
                    <li><a>Jeans</a></li>
                    <li><a>Trousers</a></li>
                    <li><a>Shorts & Dungarees</a></li>
                    <li><a>Track Pants</a></li>
                    <li><a><b>Innerwear & Nightwear</b></a></li>
                    <li><a>Brief</a></li>
                    <li><a>Vest</a></li>
                    <li><a><b>Winterwear</b></a></li>
                    <li><a>Jackets</a></li>
                    <li><a>Pullovers</a></li>
                    <li><a>Sweatshirts</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hde/hb8/14520526143518/Menu_mothercare-20200225.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h0f/h8e/14803313623070/Menu_kidsmask_20190527.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="kids_girls">Girls</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Girls</b></a></li>
                    <li><a><b>Topwear</b></a></li>
                    <li><a>Tops</a></li>
                    <li><a>T-Shirts</a></li>
                    <li><a>Jackets & Shrugs</a></li>
                    <li><a><b>Bottomwear</b></a></li>
                    <li><a>Jeans & Jeggings</a></li>
                    <li><a>Trousers</a></li>
                    <li><a>Shorts</a></li>
                    <li><a>Skirts</a></li>
                    <li><a>Leggings</a></li>
                    <li><a>Trackpants</a></li>
                    <li><a>Dresses</a></li>
                  </div>
                  <div>
                    <li><a><b>Accessories</b></a></li>
                    <li><a>Caps</a></li>
                    <li><a>Hair Accessories</a></li>
                    <li><a>Jewellery</a></li>
                    <li><a>Mask</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hde/hb8/14520526143518/Menu_mothercare-20200225.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="kids_infants">Infants</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Infants</a></li>
                    <li><a>Topwear</a></li>
                    <li><a>Bottomwear</a></li>
                    <li><a>Dresses & Jumpsuits</a></li>
                    <li><a>Sleepsuits & Rompers</a></li>
                    <li><a>Innerwear & Nightwear</a></li>
                    <li><a>Winterwear</a></li>
                    <li><a>Indianwear</a></li>
                    <li><a>Combo sets</a></li>
                    <li><a>Feeding Time</a></li>
                    <li><a>Bathing & Changing</a></li>
                    <li><a>Bedtime</a></li>
                  </div>
                  <div>
                    <li><a> Accessories</a></li>
                    <li><a> Caps</a></li>
                    <li><a> Socks</a></li>
                    <li><a> Bibs</a></li>
                    <li><a> Mitten & Booties</a></li>
                    <li><a> Travel Time</a></li>
    
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h97/h3d/14873590431774/Menu_karrot_20190912.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="kids_toys">Toys</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Toys</a></li>
                    <li><a>Infant Toys</a></li>
                    <li><a>Dolls & Doll House</a></li>
                    <li><a>Vehicles ,Tracksets & Remote Toys</a></li>
                    <li><a>Action Figures & Gadgets</a></li>
                    <li><a>Soft Toys</a></li>
                    <li><a>Art & Creativity</a></li>
                    <li><a>Sports & Outdoor Activities</a></li>
                    <li><a>Musical Instruments</a></li>
                    <li><a>Board Games & Puzzles</a></li>
                    <li><a>Educational Games</a></li>
                    <li><a>Ride ons</a></li>
                    <li><a>Role & Pretend Play</a></li>
    
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h0f/h8e/14803313623070/Menu_kidsmask_20190527.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h97/h3d/14873590431774/Menu_karrot_20190912.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="kids_school">School Essentials</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All School Essentials</a></li>
                    <li><a>Bags</a></li>
                    <li><a>School accessories</a></li>
                    <li><a>Shop By Brand</a></li>
                    <li><a>Hamleys</a></li>
                    <li><a>Disney</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h0f/h8e/14803313623070/Menu_kidsmask_20190527.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h97/h3d/14873590431774/Menu_karrot_20190912.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="kids_acessories">Accessories</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>Sunglasses</a></li>
    
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h0f/h8e/14803313623070/Menu_kidsmask_20190527.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h97/h3d/14873590431774/Menu_karrot_20190912.jpg"
                      alt="">
                  </div>
                </div>
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="kids_watches">Watches</li>
                <div class="idropdown-content">
    
                  <div>
    
                    <li><a>All Watches</a></li>
                    <li><a>Girls</a></li>
                    <li><a>Boys</a></li>
    
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h0f/h8e/14803313623070/Menu_kidsmask_20190527.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h97/h3d/14873590431774/Menu_karrot_20190912.jpg"
                      alt="">
                  </div>
    
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div class="dropdown">
          <a href="beautiproduct.html"><button class="dropbtn">BEAUTY</button></a>
          <div class="dropdown-content" id="dd4">
            <ul>
              <div class="idropdown">
    
                <li class="idropbtn" id="beauty_make_up">Make up</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Make Up</b></a></li>
                    <li><a><b>Face</b></a></li>
                    <li><a>All Face</a></li>
                    <li><a>BB & CC Cream</a></li>
                    <li><a>Blush</a></li>
                    <li><a>Bronzer</a></li>
                    <li><a>Compact</a></li>
                    <li><a>Concealer</a></li>
                    <li><a>Foundations</a></li>
                    <li><a>Make Up Remover</a></li>
                    <li><a>Primers</a></li>
                    <li><a>Kits</a></li>
                  </div>
                  <div>
                    <li><a><b>Eyes</b></a></li>
                    <li><a>All Eyes</a></li>
                    <li><a>Eyebrows</a></li>
                    <li><a>Kohls & Kajal</a></li>
                    <li><a>Eye Shadow</a></li>
                    <li><a>Eyeliner</a></li>
                    <li><a>Mascara</a></li>
                    <li><a><b>Lips</b></a></li>
                    <li><a>All Lips</a></li>
                    <li><a>Lip Balm</a></li>
                    <li><a>Lip Gloss</a></li>
                    <li><a>Lip Liners</a></li>
                    <li><a>Lipstick</a></li>
                    <li><a>Liquid Lipstick</a></li>
    
    
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg"
                      alt="">
                  </div>
    
    
    
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="beauty_skin_care">Skin care</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Skincare</a></li>
                    <li><a> Creams & Moisturisers</a></li>
                    <li><a> Cleanser & Toners</a></li>
                    <li><a> Serums & Essence</a></li>
                    <li><a> Treatments</a></li>
                    <li><a> Scrubs</a></li>
                    <li><a> Mask</a></li>
                    <li><a> Eye Care</a></li>
                    <li><a> Lip Care</a></li>
                    <li><a> Sun care</a></li>
                    <li><a> Sanitizers & Wipes</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="beauty_bath">Bath</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Bath & Body</a></li>
                    <li><a>Shower Gels & Creams</a></li>
                    <li><a>Body Scrubs</a></li>
                    <li><a>Body Lotions</a></li>
                    <li><a>Essential Oils</a></li>
                    <li><a>Soaps</a></li>
                    <li><a>Hand & Foot care</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="beauty_nails">Nails</li>
                <div class="idropdown-content">
                  <div>
    
                    <li><a>All Nails</a></li>
                    <li><a>Nail Polish</a></li>
                    <li><a>Nail Care & Others</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="beauty_men_fragarancies">Men's fragances</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Men's Fragrances</a></li>
                    <li><a>Perfumes</a></li>
                    <li><a>Mist & Deodrants</a></li>
                    <li><a>Gift Sets</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="beauty_haircare">Hair care</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Haircare</a></li>
                    <li><a>Shampoos & Conditioners</a></li>
                    <li><a>Styling Products</a></li>
                    <li><a>Hair Colors</a></li>
                    <li><a>Hair Oils & Serums</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="beauty_toolsandaccessories">Tools and accessories</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Tools & Accessories</a></li>
                    <li><a> Makeup Tools</a></li>
                    <li><a> Combs & Brushes</a></li>
                    <li><a> Styling Appliances</a></li>
                    <li><a> Accessories</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="beauty_women_fragarancies">Women's fragances</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Women's Fragrance</a></li>
                    <li><a>Perfumes</a></li>
                    <li><a>Mist & Deodrants</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="beauty_men_grooming">Grooming For Men</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Grooming</a></li>
                    <li><a>Skincare</a></li>
                    <li><a>Shaving & Kits</a></li>
                    <li><a>Bath & Body</a></li>
                    <li><a>Haircare</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="beauty_personal_hygiene">Personal Hygiene</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>Sanitary Napkins</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
                </div>
    
              </div>
    
    
            </ul>
          </div>
        </div>
        <div class="dropdown">
         <a href="men.html"> <button class="dropbtn">MEN</button></a>
    
          <div class="dropdown-content" id="dd5">
            <ul>
              <div class="idropdown">
    
                <li class="idropbtn" id="men_Clothing">Clothing</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Clothing</b></a></li>
                    <li><a><b>T-Shirts & Polos</b></a></li>
                    <li><a><b>Shirts</b></a></li>
                    <li><a>All Shirts</a></li>
                    <li><a>Casual</a></li>
                    <li><a>Formal</a></li>
                    <li><a><b>Jeans</b></a></li>
                    <li><a>Trousers</a></li>
                    <li><a>All Trousers</a></li>
                    <li><a>Casual</a></li>
                    <li><a>Formal</a></li>
                    <li><a>Shorts</a></li>
                    <li><a><b>Sports & Activewear</b></a></li>
                    <li><a>All Sports & Activewear</a></li>
                    <li><a>Tshirts</a></li>
                    <li><a>Joggers & Track pants</a></li>
                  </div>
                  <div>
                    <li><a><b>Suits & Blazers</b></a></li>
                    <li><a>Casual Jackets</a></li>
                    <li><a>Ethnicwear</a></li>
                    <li><a>Kurtas</a></li>
                    <li><a>Kurta Sets</a></li>
                    <li><a>Nehru-Jackets</a></li>
                    <li><a>Mask</a></li>
                    <li><a><b>Personal Protection Equipment</b></a></li>
                    <li><a>Accessories</a></li>
                    <li><a>All Accessories</a></li>
                    <li><a>Ties Cufflinks & Pocket Squares</a></li>
                    <li><a>Caps & Hats</a></li>
                    <li><a>Socks</a></li>
                    <li><a>Handkerchiefs</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h2b/14316881903646/Allen-solly_menu_Banner-2020.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="men_Accessories">Accessories</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>Mask</a></li>
                    <li><a> Personal Protection Equipment</a></li>
                    <li><a> Wallets & Card Holders</a></li>
                    <li><a> Belts</a></li>
                    <li><a> Pens & Combos</a></li>
                    <li><a> Travel & Luggage</a></li>
                    <li><a> All Travel & Luggage</a></li>
                    <li><a> Backpacks</a></li>
                    <li><a> Soft Luggage</a></li>
                    <li><a> Essentials</a></li>
                    <li><a> Hard Luggage</a></li>
                    <li><a> Laptop Bag</a></li>
                    <li><a> Mobile & Tablet Accessories</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h2b/14316881903646/Allen-solly_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h5b/h78/14888177041438/promotionBanner_polot-shirt_20200316.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="men_Footwear">Footwear</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Footwear</b></a></li>
                    <li><a> Formal Shoes</a></li>
                    <li><a> Casual Shoes</a></li>
                    <li><a> Sandals & Floaters</a></li>
                    <li><a> Sports Shoes & Sneakers</a></li>
                    <li><a> Flip Flops</a></li>
                    <li><a> Boots</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h2b/14316881903646/Allen-solly_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h5b/h78/14888177041438/promotionBanner_polot-shirt_20200316.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="men_sunglasses">Sunglasses & Frames</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Sunglasses & Frames</b></a></li>
                    <li><a> Shop by Shape</a></li>
                    <li><a> Aviator</a></li>
                    <li><a> Wayfarers</a></li>
                    <li><a> Sporty</a></li>
                    <li><a> Frames & Contact Lenses</a></li>
                    <li><a> Rectangle</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h2b/14316881903646/Allen-solly_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h5b/h78/14888177041438/promotionBanner_polot-shirt_20200316.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="men_Watches">Watches</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Watches</a></li>
                    <li><a>Smartwatch & Fitness Bands</a></li>
                    <li><a>Hybrid</a></li>
                    <li><a>Analog</a></li>
                    <li><a>Analog Digital</a></li>
                    <li><a>Digital</a></li>
                    <li><a>Chronograph</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h2b/14316881903646/Allen-solly_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h5b/h78/14888177041438/promotionBanner_polot-shirt_20200316.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
    
              <div class="idropdown">
    
                <li class="idropbtn" id="men_fragarancies">Men's fragrances</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Men's Fragrances</b></a></li>
                    <li><a>Perfumes</a></li>
                    <li><a>Mist & Deodrants</a></li>
                    <li><a>Gift Sets</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h2b/14316881903646/Allen-solly_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h5b/h78/14888177041438/promotionBanner_polot-shirt_20200316.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="men_grooming">Grooming For Men</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Grooming</a></li>
                    <li><a> Skincare</a></li>
                    <li><a> Shaving & Kits</a></li>
                    <li><a> Bath & Body</a></li>
                    <li><a> Haircare</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h2b/14316881903646/Allen-solly_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h5b/h78/14888177041438/promotionBanner_polot-shirt_20200316.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="men_Jewellery">Jewellery</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Jewellery</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h2b/14316881903646/Allen-solly_menu_Banner-2020.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h5b/h78/14888177041438/promotionBanner_polot-shirt_20200316.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
    
    
            </ul>
          </div>
        </div>
    
        <div class="dropdown">
          <button class="dropbtn">HOMESTOP</button>
          <div class="dropdown-content" id="dd6">
            <ul>
              <div class="idropdown">
    
                <li class="idropbtn" id="homestop_kitchen">Kitchen & Dining</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Kitchen</b></a></li>
                    <li><a> Bar & Drinkware</a></li>
                    <li><a> Barware</a></li>
                    <li><a> Bar Games</a></li>
                    <li><a> Cookware & Bakeware</a></li>
                    <li><a> Cookeware Sets</a></li>
                    <li><a> Tawa</a></li>
                    <li><a> Pots & Pans</a></li>
                    <li><a> Kadai & Woks</a></li>
                    <li><a> Bakeware</a></li>
                    <li><a> Bakeware Accessories</a></li>
                    <li><a> Pressure cooker</a></li>
                    <li><a> Kitchen & Table Linen</a></li>
                    <li><a> Runners & Mat</a></li>
                    <li><a> Kitchen Towels</a></li>
                    <li><a> Table Covers</a></li>
    
                  </div>
                  <div>
    
                    <li><a> Serving</a></li>
                    <li><a> Bowls</a></li>
                    <li><a> Plates</a></li>
                    <li><a> Glasses & Jugs</a></li>
                    <li><a> Trays & Platters</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h27/h7e/14292469973022/Appliances_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
    
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="homestop_decor">Decor</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Decor</b></a></li>
                    <li><a> Figurines & Idols</a></li>
                    <li><a> Fountains</a></li>
                    <li><a> Garden</a></li>
                    <li><a> Artificial Plants & Flowers</a></li>
                    <li><a> Pots & Planters</a></li>
                    <li><a> Lightings</a></li>
                    <li><a> Showpieces & Vases</a></li>
                    <li><a> Vases</a></li>
                    <li><a> Showpieces</a></li>
                    <li><a> Wall Decor</a></li>
                    <li><a> Clocks</a></li>
                    <li><a> Photoframes</a></li>
                    <li><a> Mirrors & Wall Decor</a></li>
                    <li><a> Paintings</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h27/h7e/14292469973022/Appliances_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf0/h82/14292470202398/Kitchen-%26amp%3B-dining_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="homestop_furnishing">Home Furnishing</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Home Furnishing</a></li>
                    <li><a> Curtains</a></li>
                    <li><a> Window Curtain</a></li>
                    <li><a> Door Curtains</a></li>
                    <li><a> Cushion & Cushion Covers</a></li>
                    <li><a> Cushion Cover</a></li>
                    <li><a> Cushion Filling</a></li>
                    <li><a> Floor Covering</a></li>
                    <li><a> Rugs</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h27/h7e/14292469973022/Appliances_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf0/h82/14292470202398/Kitchen-%26amp%3B-dining_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="homestop_storage">Storage & Organization</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Storage & Organization</a></li>
                    <li><a> Storage Solutions</a></li>
                    <li><a> Organizers</a></li>
                    <li><a> Dustbins</a></li>
                    <li><a> Office Supplies / Stationary</a></li>
    
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h27/h7e/14292469973022/Appliances_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf0/h82/14292470202398/Kitchen-%26amp%3B-dining_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="homestop_smart">Smart Home and Appliances</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Appliances</a></li>
                    <li><a> Hair Care</a></li>
                    <li><a> Personal Care</a></li>
                    <li><a> Grooming for Men</a></li>
                    <li><a> Home Appliances</a></li>
                    <li><a> Kitchen Appliances</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h27/h7e/14292469973022/Appliances_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf0/h82/14292470202398/Kitchen-%26amp%3B-dining_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="homestop_bedding">Bedding</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Bed</b></a></li>
                    <li><a> Bed Sheets</a></li>
                    <li><a> Double Bedsheet</a></li>
                    <li><a> Single Bedsheet</a></li>
                    <li><a> Bed Spread</a></li>
                    <li><a> Comforters</a></li>
                    <li><a> Covers & Protectors</a></li>
                    <li><a> Duvet Covers</a></li>
                    <li><a> Pillow Covers</a></li>
                    <li><a> Mattress Protector</a></li>
                    <li><a> Pillow Protector</a></li>
                    <li><a> Dohar & Duvet</a></li>
                    <li><a> Fillers</a></li>
                    <li><a> Pillow Filler</a></li>
                    <li><a> Bolster Filler</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h27/h7e/14292469973022/Appliances_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf0/h82/14292470202398/Kitchen-%26amp%3B-dining_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="homestop_furniture">Furniture</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Furniture</a></li>
                    <li><a>Living Room
                    <li><a>Others</a></li>
                    <li><a>Storage</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h27/h7e/14292469973022/Appliances_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/hf0/h82/14292470202398/Kitchen-%26amp%3B-dining_menu_Banner.jpg.jpg"
                      alt="">
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
    
    
            </ul>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">WATCHES</button>
          <div class="dropdown-content" id="dd7">
            <ul>
              <div class="idropdown">
    
                <li class="idropbtn" id="watches_mens">Mens Watches</li>
                <div class="idropdown-content">
                  <div>
    
                    <li><a>All Watches</a></li>
                    <li><a>Smartwatch & Fitness Bands</a></li>
                    <li><a>Hybrid</a></li>
                    <li><a>Analog</a></li>
                    <li><a>Analog Digital</a></li>
                    <li><a>Digital</a></li>
                    <li><a>Chronograph</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="watches_women">Women Watches</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Watches</a></li>
                    <li><a>Smartwatch & Fitness Bands</a></li>
                    <li><a>Hybrid</a></li>
                    <li><a>Analog</a></li>
                    <li><a>Analog Digital</a></li>
                    <li><a>Digital</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="watches_kids">Kids Watches</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Watches</a></li>
                    <li><a>Girls</a></li>
                    <li><a>Boys</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
    
            </ul>
          </div>
        </div>
    
        <div class="dropdown">
          <button class="dropbtn">BRANDS</button>
          <div class="dropdown-content" id="dd8">
            <ul>
              <div class="idropdown">
    
                <li class="idropbtn" id="brands_shopper">Brands of Shoppers Stop</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>See All</a></li>
                    <li><a> Arcelia</a></li>
                    <li><a> Bandeya</a></li>
                    <li><a> Elliza Donatein</a></li>
                    <li><a> Fratini</a></li>
                    <li><a> Haute Curry</a></li>
                    <li><a> Infuse</a></li>
                    <li><a> Kashish</a></li>
                    <li><a> Stop</a></li>
                    <li><a> Lemon & Pepper</a></li>
                    <li><a> Life</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="brands_luxury">Luxury Brands</li>
                <div class="idropdown-content">
                  <div>
                    <li><a> Bobbi Brown</a></li>
                    <li><a> Bvlgari</a></li>
                    <li><a> Clarins</a></li>
                    <li><a> Clinique</a></li>
                    <li><a> Carolina Herrera</a></li>
                    <li><a> Clarks</a></li>
                    <li><a> Calvin Klein</a></li>
                    <li><a> Carlton</a></li>
                    <li><a> Dolce & Gabbana</a></li>
                    <li><a> Delsey</a></li>
                    <li><a> Estee Lauder</a></li>
                    <li><a> Ellementry</a></li>
                    <li><a> Emporio Armani</a></li>
                    <li><a> Fossil</a></li>
                  </div>
                  <div>
                    <li><a> Givenchy</a></li></a></li>
                    <li><a> Guess</a></li></a></li>
                    <li><a> Kompanero</a></li></a></li>
                    <li><a> Mac</a></li></a></li>
                    <li><a> Moschino</a></li></a></li>
                    <li><a> Michael Kors</a></li></a></li>
                    <li><a> Police</a></li></a></li>
                    <li><a> Smashbox</a></li></a></li>
                    <li><a> Swarovski</a></li></a></li>
                    <li><a> Skagen</a></li></a></li>
                    <li><a> Steve Madden</a></li></a></li>
                    <li><a> Samsonite</a></li></a></li>
                    <li><a> Tommy Hilfiger</a></li></a></li>
                    <li><a> Versace</a></li></a></li>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="brands_trending">Trending Brands</li>
                <div class="idropdown-content">
                  <div>
                    <li><a> Adidas</a></li>
                    <li><a> Allen Solly</a></li>
                    <li><a> American Tourister</a></li>
                    <li><a> Baggit</a></li>
                    <li><a> Casio</a></li>
                    <li><a> Catwalk</a></li>
                    <li><a> Calvin Klein</a></li>
                    <li><a> Caprese</a></li>
                    <li><a> Clarks</a></li>
                    <li><a> Clinique</a></li>
                    <li><a> Fcuk</a></li>
                    <li><a> Emporio Armani</a></li>
                    <li><a> Elliza Donatein</a></li>
                    <li><a> Fila</a></li>
                  </div>
                  <div>
                    <li><a> Giordano</a></li>
                    <li><a> Guess</a></li>
                    <li><a> Haute Curry</a></li>
                    <li><a> Hidesign</a></li>
                    <li><a> Inc 5</a></li>
                    <li><a> Idee</a></li>
                    <li><a> Lavie</a></li>
                    <li><a> Lemon & Pepper</a></li>
                    <li><a> Louis Philippe</a></li>
                    <li><a> Missoni</a></li>
                    <li><a> Michael Kors</a></li>
                    <li><a> Opium</a></li>
                    <li><a> Puma</a></li>
                    <li><a> Police</a></li>
                  </div>
                  <div>
                    <li><a> Reebok</a></li>
                    <li><a> Samsonite</a></li>
                    <li><a> Scott</a></li>
                    <li><a> Swarovski</a></li>
                    <li><a> Skagen</a></li>
                    <li><a> Skechers</a></li>
                    <li><a> Steve Madden</a></li>
                    <li><a> Tresmode</a></li>
                    <li><a> Tommy Hilfiger</a></li>
                    <li><a> Uspa</a></li>
                    <li><a> Ucb</a></li>
                    <li><a> Van Heusen</a></li>
                    <li><a> Yellow Chimes</a></li>
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="brands_celebs">Celeb Brands</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>AND</a></li>
                    <li><a>Being Human</a></li>
                    <li><a>Caprese</a></li>
                    <li><a>Imara</a></li>
                    <li><a>Indian Terrain</a></li>
                    <li><a>Jack And Jones</a></li>
                    <li><a>Lavie</a></li>
                    <li><a>Titan</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="brands_launched">Just Launched Brands</li>
                <div class="idropdown-content">
                  <div>
                    <li><a> Anne Klein</a></li>
                    <li><a> Bobbi Brown</a></li>
                    <li><a> Burberry</a></li>
                    <li><a> Clinique</a></li>
                    <li><a> Estee Lauder</a></li>
                    <li><a> Fossil</a></li>
                    <li><a> Flatheads</a></li>
                    <li><a> Flipside</a></li>
                    <li><a> IsaDora</a></li>
                    <li><a> Irus</a></li>
                    <li><a> Jack & Jones</a></li>
                    <li><a> Kompanero</a></li>
                    <li><a> Kendall Kylie</a></li>
                    <li><a> Lyn</a></li>
    
                  </div>
                  <div>
                    <li><a> Mac</a></li>
                    <li><a> Pure Sense</a></li>
                    <li><a> Police</a></li>
                    <li><a> Rheson</a></li>
                    <li><a> The Children's Place</a></li>
                    <li><a> Voylla</a></li>
                    <li><a> Von Wellx</a></li>
                    <li><a> Yellow Chimes</a></li>
                    <li><a> W</a></li>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="brands_all">All Brands</li>
                <div class="idropdown-content">
                  <div>
                    <li><a> See All Brands</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
    
            </ul>
          </div>
        </div>
    
        <div class="dropdown">
          <button class="dropbtn">GIFTS</button>
          <div class="dropdown-content" id="dd9">
            <ul>
              <div class="idropdown">
    
                <li class="idropbtn" id="gifts_her">Gifts For Her</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Gifts For Her</a></li>
                    <li><a>Watches</a></li>
                    <li><a>Jewellery</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h41/h0e/17589138358302/promotionBanner_Gifts_EGV_20170719.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="gifts_him">Gifts For Him</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>All Gifts For Him</a></li>
                    <li><a>Watches</a></li>
                    <li><a>Ties & Cufflinks</a></li>
                    <li><a>Pens & Combos</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h41/h0e/17589138358302/promotionBanner_Gifts_EGV_20170719.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="gifts_instant">Instant Gifting</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>See All Instant Gifting</a></li>
                    <li><a>Gift Cards</a></li>
                    <li><a>E-Gift Vouchers</a></li>
                    <li><a>Corporate Gifting</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h41/h0e/17589138358302/promotionBanner_Gifts_EGV_20170719.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="gifts_house">House Warming Gift</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>See All House Warming Gift</b></a></li>
                    <li><a>Diffusers</a></li>
                    <li><a>Aromatic Candles & Lamps</a></li>
                    <li><a>Decor</a></li>
                    <li><a>Bedsheets</a></li>
                    <li><a>Show pieces & Vases</a></li>
                    <li><a>Artificial Plants & Planters</a></li>
                    <li><a>Gifts Under 2999</a></li>
                    <li><a>Cookware Sets</a></li>
                    <li><a>Coffee Mugs</a></li>
                    <li><a>Appliances</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h41/h0e/17589138358302/promotionBanner_Gifts_EGV_20170719.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="gifts_wedding">Wedding Gifts</li>
                <div class="idropdown-content">
                  <div>
                    <li><a>See All Wedding Gifts</a></li>
                    <li><a>Couple Watches</a></li>
                    <li><a>Watches for Her</a></li>
                    <li><a>Watches for Him</a></li>
                  </div>
                  <div>
                    <img
                      src="https://sslimages.shoppersstop.com/sys-master/root/h41/h0e/17589138358302/promotionBanner_Gifts_EGV_20170719.jpg"
                      alt="">
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
    
    
            </ul>
          </div>
        </div>
    
        <div class="dropdown">
          <button class="dropbtn">LUXE</button>
    
          <div class="dropdown-content" id="dd10">
            <ul>
              <div class="idropdown">
    
                <li class="idropbtn" id="luxe_bath">Bath & Body</li>
                <div class="idropdown-content">
                  <div>
                    <b><li><a>All Bath & Body</a></li></b>
                    <li><a>Body Lotions</a></li>
                    <li><a> Body Scrubs</a></li>
                    <li><a> Essential Oils</a></li>
                    <li><a> Gift Sets</a></li>
                    <li><a> Hand & Foot care</a></li>
                    <li><a> Shower Gels & Creams</a></li>
                    <li><a> Soaps</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="luxe_fragarances">Fragrances for All</li>
                <div class="idropdown-content">
                  <div>
                    <b><li><a> All Fragrances</a></li></b>
                    <li><a> Gift Sets</a></li>
                    <li><a> Mist & Deodrants</a></li>
                    <li><a> Perfumes</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="luxe_haircare">Haircare</li>
                <div class="idropdown-content">
                  <div>
                    <b><li><a> All Haircare</a></li></b>
                    <li><a> Hair Colors</a></li>
                    <li><a> Hair Oils & Serums</a></li>
                    <li><a> Shampoos & Conditioners</a></li>
                    <li><a> Styling Appliances</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="luxe_makeup">Make Up</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Make Up</b></a></li>
                    <li><a> Eyes</a></li>
                    <li><a> Eye Color</a></li>
                    <li><a> Eye Pencils/Kajal</a></li>
                    <li><a> Eye Shadow</a></li>
                    <li><a> Eyebrow Enhancers & Others</a></li>
                    <li><a> Eyeliner</a></li>
                    <li><a> Kits</a></li>
                    <li><a> Mascara</a></li>
                    <li><a><b>All Eyes</b></a></li>
                  </div>
                  <div>
                    <li><a><b>Face</b></a></li>
                    <li><a> BB & CC Cream</a></li>
                    <li><a> Blush</a></li>
                    <li><a> Bronzer</a></li>
                    <li><a> Compact</a></li>
                    <li><a> Face Serum</a></li>
                    <li><a> Foundations</a></li>
                    <li><a> Kits</a></li>
                    <li><a> Make Up Remover</a></li>
                    <li><a> Primers</a></li>
                    <li><a><b>All Face</b></a></li>
    
                  </div>
                  <div>
                    <b><li><a> Gift Sets</a></li></b>
                    <li><a> Lips</a></li>
                    <li><a> Kits</a></li>
                    <li><a> Lip Balm</a></li>
                    <li><a> Lip Gloss</a></li>
                    <li><a> Lip Liners</a></li>
                    <li><a> Lip Mist</a></li>
                    <li><a> Lipstick</a></li>
                    <li><a> Liquid Lipstick</a></li>
                    <li><a><b>All Lips</b></a></li>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="luxe_grooming">Mens Grooming</li>
                <div class="idropdown-content">
                  <div>
                    <b><li><a> All Mens Grooming</a></li></b>
                    <li><a> Bath & Body</a></li>
                    <li><a> Gift Sets</a></li>
                    <li><a> Haircare</a></li>
                    <li><a> Shaving & Kits</a></li>
                    <li><a> Skincare</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
    
              <div class="idropdown">
    
                <li class="idropbtn" id="luxe_nails">Nails</li>
                <div class="idropdown-content">
                  <div>
                    <b><li><a> All Nails</a></li></b>
    
                    <li><a> Nail Care & Others</a></li>
                    <li><a> Nail Polish</a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
    
              <div class="idropdown">
    
                <li class="idropbtn" id="luxe_skin">Skincare</li>
                <div class="idropdown-content">
                  <div>
                    <li><a><b>All Skincare</b></a></li>
                    <li><a> Cleanser & Toners</a></li>
                    <li><a> Creams & Moisturisers</a></li>
                    <li><a> Eye Care</a></li>
                    <li><a> Lip Care</a></li>
                    <li><a> Mask</a></li>
                    <li><a> Sanitizer & Wipes</a></li>
                    <li><a> Scrubs</a></li>
                    <li><a> Serums & Essence</a></li>
                    <li><a> Sun care</a></li>
                    <li><a><b>Treatments</b></a></li>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
              <div class="idropdown">
    
                <li class="idropbtn" id="luxe_appliance">Tools & Accessories</li>
                <div class="idropdown-content">
                  <div>
                    <b>
                    <li><a> All Tools & Accessories</a></a></li>
                    <li><a> Accessories</a></a></li>
                    <li><a> Combs & Brushes</a></a></li>
                    <li><a> Makeup Tools</a></a></li>
                    <li><a> Styling Appliances</a></a></li>
                  </b>
                  </div>
                  <div>
    
                  </div>
                  <div>
    
                  </div>
    
    
                  <!-- ********* -->
                </div>
    
              </div>
    
    
            </ul>
          </div>
    
        </div>
      </div>
      <br>
      <div class="responsive-navbar">
        <ul>
          <div>
            <a href=""><img
                  src="https://img3.stockfresh.com/files/s/speedfighter/m/54/1863902_stock-photo-bargain-red-stamp.jpg"
                  alt="BARGAIN"></a>
              <p>Bargain</p>
            
    
          </div>
          <div>
            <a href=""><img
                  src="https://img.grouponcdn.com/seocms/9fUUb7zENJompRmqjY58kd/shopping_luxe_lyon-850x570"></a>
              <p>Women</p>
           
    
          </div>
          <div>
            <a href=""><img src="https://blogs.manageengine.com/wp-content/uploads/2014/04/Fotolia_63191560_S.jpg"
                  alt="KIDS"></a>
              <p>Kids</p>
           
          </div>
          <div>
            <a href=""><img
                  src="https://financialtribune.com/sites/default/files/field/image/october/04-ff-cosmetics_224-ab.jpg"
                  alt="beauty"></a>
              <p>Beauty</p>
           
          </div>
          <div>
            <a href=""><img
                  src="https://content.internetretailing.net/AcuCustom/Sitename/DAM/040/Men_male_power_shopping_Fotolia_178989483_Subscription_Monthly_M.jpg"
                  alt="men"></a>
              <p>Men</p>
           
    
          </div>
          <div>
            <a href=""><img src="https://images-na.ssl-images-amazon.com/images/I/615s8ThUJ0L._SX679_.jpg"
                  alt="HOMESTOP"></a>
              <p>Homestop</p>
           
    
          </div>
          <div>
            <a href=""><img src="https://wallup.net/wp-content/uploads/2017/11/17/230758-watch-luxury_watches.jpg"
                  alt="WATCHES"></a>
              <p>Watches </p>
           
    
          </div>
          <div>
            <a href=""><img src="https://i.pinimg.com/originals/3d/31/a6/3d31a6a9c150f7d062737c7b9c741047.jpg"
                  alt=" BRANDS"></a>
              <p>Brands </p>
           
    
          </div>
          <div>
           <a href=""><img src="https://www.christmasstockimages.com/free/toysgifts/christmas_gifts.jpg" alt=" GIFTS">
              </a>
              <p>Gifts </p>
           
    
          </div>
          <div>
           <a href=""><img
                  src="https://www.infinity-luxe-chauffeur.com/wp-content/uploads/2018/02/private-chauffeur-shopping-3-950x475.jpg"
                  alt="LUXE"></a>
              <p>Luxe </p>
           
    
          </div>
    
    
        </ul>
      </div>
      <!-- **************signin signup popups********* -->
      
      <div class="center">
        <input type="checkbox" id="show" />
    
        <div class="container">
          <label for="show" class="close-btn fas fa-times" title="close"></label>
          
          <h4>SIGN IN</h4>
          <h5 class="h5signin">Don't have an account? <a href="signup"><label for="signupdiv">Sign Up</label></a> </h5>
          <form id="signinform">
          <div class="sign-up-form">
    
            <div class="email">
              <input required="required" type="email" name="signinEmail" id="signinemail" title="Email address"
                placeholder="Email or Mobile Number" autocomplete="off" />
            </div>
    
            <div class="password">
              <input required="required" type="password" name="signinPassword" id="signinPassword" title="Password" placeholder="Password"
                autocomplete="off" maxlength="15" />
            </div>
            <p id="signinmessage"></p>
            <button class="signinbtn" id="signinbutton" style="cursor: pointer;">SIGN IN</button>

          </div>
          </form>
    
          <div>
            <p><a href="#">Sign in with OTP</a> <a href="#">Forgot Password?</a></p>
    
          </div>
          <div id="clearf"></div>
          <hr>
          <div class="loginsocial">Login with social media</div>
          <div class="social">
            <div class="facebook">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/facebook+logo+logo+website+icon-1320190502625926346.png" />
            </div>
            <div class="google">
              <img
                src="data:image/png;base64,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" />
            </div>
          </div>
          
          <!-- link to signup -->
          <div class="newaccount">Create a new account? <a href=""><label for="signupdiv">Sign Up</label></a></div>
    
        </div>
      </div>
      <div class="center">
        <input type="checkbox" id="signupdiv" />
        <div class="container">
         
          <label for="signupdiv" class="close-btn fas fa-times" title="close"></label>
          <h4>SIGN UP</h4>
          <h5>Create your account on Shoppers Stop:</h5>
          <form id="signupform">
          <div class="sign-up-form">
            <div class="fullname">
              <input required="required" type="text" name="signupFullName" id="signupFullName" maxlength="75"
                title="Please enter valid First Name &amp; Last Name*" placeholder="First Name &amp; Last Name*" />
            </div>
    
            <div class="email">
              <input required="required" type="email" name="signupEmail" id="signupemail" title="Email address" placeholder="Email*"
                autocomplete="off" />
            </div>
    
            <div class="mobileno">
              <input required="required" type="tel" name="signupMobileNumber" id="signupMobileNumber" title="Mobile Number (10 digits)"
                placeholder="   Mobile Number (10 digits)*" maxlength="10" />
            </div>
    
            <div class="password">
              <input required="required" type="password" name="signupPassword" id="signupPassword"
                title="Set a password (min 6 &amp; max 15 characters)"
                placeholder="Set a password (min 6 &amp; max 15 characters)*" autocomplete="off" maxlength="15" />
            </div>
    
            <div class="gender">
              <input type="radio" name="gender" id="women" value="FEMALE" />
              <label for="women">Female</label>
              <input type="radio" name="gender" id="men" value="MALE" />
              <label for="men">Male</label>
            </div>
            <p id="signupmessage"></p>
            <button class="continue" id="signupbutton" style="cursor: pointer">
              CONTINUE
            </button>
          </div>
          </form>
          <div style="margin-top: 50px"></div>
          <hr />
          <div class="loginsocial">Login with social media</div>
          <div class="social">
            <div class="facebook">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/facebook+logo+logo+website+icon-1320190502625926346.png" />
            </div>
            <div class="google">
              <img
                src="data:image/png;base64,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" />
            </div>
          </div>
         
          <div class="account">
            Already have an acount? <a href="signin"><label for="show">Sign in</label></a>
          </div>
          <p class="row">
            By signing up you agree our Term of service & Privacy Policy.
          </p>
        </div>
        
    
      
      
      </div>
    `
}




export default header;