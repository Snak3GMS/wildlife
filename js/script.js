const innerSlider = document.querySelectorAll('div[data-slider]'),
      slider = document.querySelector('.slider'),
      sliderArr = [...innerSlider],
      prevBtn = document.querySelector('.prev__btn'),
      nextBtn = document.querySelector('.next__btn');


function sliderNext() {
    let nextItem = sliderArr.shift();
    slider.append(nextItem);
    sliderArr.push(nextItem);
    
}
function sliderPrev() {
    let prevItem = sliderArr.pop();
    slider.prepend(prevItem);
    sliderArr.unshift(prevItem);
}

prevBtn.addEventListener('click', sliderPrev);
nextBtn.addEventListener('click', sliderNext);