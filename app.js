const loadMoreBtn = document.getElementById('loadmore');
const hiddenCourses = document.querySelectorAll('.pg2');

loadMoreBtn.addEventListener('click', () => {
    if (loadMoreBtn.textContent === 'Load More') {
      hiddenCourses.forEach(course => course.style.display = 'block');
      loadMoreBtn.textContent = 'Ẩn bớt';
    } else {
      hiddenCourses.forEach(course => course.style.display = 'none');
      loadMoreBtn.textContent = 'Load More';
    }
  });

  function animateElements() {
    var button = document.querySelector('.circle-button');
    var heading = document.querySelector('.beforeH1');
    var sneaker = document.querySelector('.new2');
    var newHeading=document.querySelector('.afterH1');
    var secondHeading=document.querySelector('.afterH2');
    var reserveBtn=document.querySelector('.reserveBtn');
  
    button.classList.add('animate');
    heading.classList.add('animate');
    sneaker.classList.add('animate');
    newHeading.classList.add('animate');
    secondHeading.classList.add('animate');
    reserveBtn.classList.add('animate');

  

  }