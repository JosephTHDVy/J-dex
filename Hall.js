document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
  
    let slideIndex = 0;
  
    function showSlide(index) {
      carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function prevSlide() {
      if (slideIndex > 0) {
        slideIndex--;
      } else {
        slideIndex = carouselInner.childElementCount - 1;
      }
      showSlide(slideIndex);
    }
  
    function nextSlide() {
      if (slideIndex < carouselInner.childElementCount - 1) {
        slideIndex++;
      } else {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    }
  
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  });
  