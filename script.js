function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-bar nav ul');
    navMenu.classList.toggle('active');
  }

  function toggleSearch() {
    const navBar = document.querySelector('.nav-bar');
    const searchBar = document.querySelector('.search-bar');
  
    navBar.style.display = 'none';
    searchBar.style.display = 'flex';
  }
  function closeSearch() {
    document.querySelector('.search-bar').style.display = 'none';
    document.querySelector('.nav-bar').style.display = 'flex';
  }
    

//  set carousel
const allThumbnails = [
    ...document.querySelectorAll('#productThumbnails img'),
    ...document.querySelectorAll('#packagingThumbnails img')
  ];
  
  let currentIndex = 0;
  const mainImage = document.getElementById('mainProductImage');
  const dotContainer = document.getElementById('dotContainer');
  
  function updateMainImage(index) {
    const selectedImage = allThumbnails[index];
    mainImage.src = selectedImage.src;
    currentIndex = index;
    updateDots();
  }
  
  function showNextImage() {
    currentIndex = (currentIndex + 1) % allThumbnails.length;
    updateMainImage(currentIndex);
  }
  
  function showPreviousImage() {
    currentIndex = (currentIndex - 1 + allThumbnails.length) % allThumbnails.length;
    updateMainImage(currentIndex);
  }
  
  function updateDots() {
    dotContainer.innerHTML = '';
    allThumbnails.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => updateMainImage(i));
      dotContainer.appendChild(dot);
    });
  }
  
  allThumbnails.forEach((img, i) => {
    img.addEventListener('click', () => updateMainImage(i));
  });
  
  updateDots();

  //when added to cart pop up appears
  function showCartPopup() {
    const popup = document.getElementById('cart-popup');
    popup.classList.add('show');
    setTimeout(() => {
      popup.classList.remove('show');
    }, 2000);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', showCartPopup);
    }
  });
  
  
