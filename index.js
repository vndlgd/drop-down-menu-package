const dropBtn = document.querySelectorAll('.dropbtn');

// open/close drop down menu on btn clicked
dropBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // if element we click on is already visible, we close it
    /* allows us to close menu on button click
     while still displaying one menu at a time */
    if (e.target.nextElementSibling.classList.contains('visible')) {
      e.target.nextElementSibling.classList.remove('visible');
    } else {
      // close other menus and display one at a time
      dropBtn.forEach((btn) => {
        btn.nextElementSibling.classList.remove('visible');
      });

      // open close menu upon click
      btn.nextElementSibling.classList.toggle('visible');

      // prevents window event listener from being called
      e.stopPropagation();
    }
  });
});

// close drop down menu when clicking else where
window.addEventListener('click', (e) => {
  if (e.target !== dropBtn) {
    dropBtn.forEach((btn) => {
      if (btn.nextElementSibling.classList.contains('visible')) {
        btn.nextElementSibling.classList.remove('visible');
      }
    });
  }
});
