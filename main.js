document.addEventListener('DOMContentLoaded', function() {
    const check = document.getElementById('check');
    const nav = document.querySelector('.nav');
    const container__icon = document.querySelector(".nav__checkbtn");

    check.addEventListener('change', function() {
      if (check.checked) {
        nav.classList.add('active');
        container__icon.innerHTML = `<i class="bi bi-x"></i>`;
        
      } else {
        nav.classList.remove('active');
        container__icon.innerHTML = `<i class="bi bi-list"></i>`;
      }
    });
  });
  