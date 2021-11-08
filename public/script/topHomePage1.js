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
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 5000);
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
  
    var slideIndex2 = 0;
    showSlides2();

    function showSlides2() {
      var i;
      var slides = document.getElementsByClassName("mySlides2");
      var dots = document.getElementsByClassName("dot2");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex2++;
      if (slideIndex2 > slides.length) {
        slideIndex2 = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex2 - 1].style.display = "block";
      dots[slideIndex2 - 1].className += " active";
      setTimeout(showSlides2, 5000);
    }

    var slideIndex2 = 1;
    gotoSlides2(slideIndex2);

    function currentSlide2(n) {
      gotoSlides2((slideIndex2 = n));
    }

    function gotoSlides2(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides2");
      var dots = document.getElementsByClassName("dot2");
      if (n > slides.length) {
        slideIndex2 = 1;
      }
      if (n < 1) {
        slideIndex2 = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex2 - 1].style.display = "block";
      dots[slideIndex2 - 1].className += " active";
    }

    
    var slideIndex3 = 0;
    showSlides3();

    function showSlides3() {
      var i;
      var slides = document.getElementsByClassName("myslides3");
      var dots = document.getElementsByClassName("dot3");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex3++;
      if (slideIndex3 > slides.length) {
        slideIndex3 = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex3 - 1].style.display = "block";
      dots[slideIndex3 - 1].className += " active";
      setTimeout(showSlides3, 5000);
    }

    var slideIndex3 = 1;
    gotoSlides3(slideIndex3);

    function currentSlide3(n) {
      gotoSlides3((slideIndex3 = n));
    }

    function gotoSlides3(n) {
      var i;
      var slides = document.getElementsByClassName("myslides3");
      var dots = document.getElementsByClassName("dot3");
      if (n > slides.length) {
        slideIndex3 = 1;
      }
      if (n < 1) {
        slideIndex3 = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex3 - 1].style.display = "block";
      dots[slideIndex3 - 1].className += " active";
    }
  