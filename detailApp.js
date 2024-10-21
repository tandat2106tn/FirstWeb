document.querySelectorAll('.size-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      document.querySelectorAll('.size-btn').forEach(function(btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });