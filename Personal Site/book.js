document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('click', () => {
      const popupId = 'popup' + book.id.slice(-1);
      const popup = document.getElementById(popupId);
      popup.style.display = 'block';
  
      // Close popup when clicking outside of it
      window.addEventListener('click', e => {
        if (!popup.contains(e.target) && e.target !== book) {
          popup.style.display = 'none';
        }
      });
    });
  });
  