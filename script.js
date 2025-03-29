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
    
