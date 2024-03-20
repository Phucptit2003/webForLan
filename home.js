document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".image-gallery");
    const images = gallery.querySelectorAll("img");
    let index = 0;

    function nextImage() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
        gallery.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextImage, 100); 
});
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}

showSlides();

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button-group button');
    const reverseButtons = document.querySelectorAll('.reverse-btn');
    const selectedItemsDiv = document.getElementById('result');
    
    let currentIndex = 0;
    let selectedValues = [];

    function showNextButtons(startIndex) {
        for (let i = startIndex; i < startIndex + 2; i++) {
            if (buttons[i]) {
                buttons[i].style.display = 'inline-block';
            }
        }
    }

    function hideButtons() {
        buttons.forEach(button => {
            button.style.display = 'none';
        });
    }

    function showMessage() {
        selectedItemsDiv.textContent = selectedValues.join(', ');
    }

    function handleButtonClick() {
        const buttonIndex = parseInt(this.getAttribute('data-index'));
        currentIndex = buttonIndex + 2;
        hideButtons();
        selectedValues.push(this.textContent);
        showMessage();
        showNextButtons(currentIndex);
        if (selectedValues.length === buttons.length/2) {
            saveSelectionAndRedirect();
        }
    }
    function saveSelectionAndRedirect() {
        localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
        window.location.href = 'page2.html'; 
    }

    function handleReverseButtonClick() {
       
    }

    hideButtons();
    showNextButtons(currentIndex);

    buttons.forEach((button, index) => {
        button.setAttribute('data-index', index);
        button.addEventListener('click', handleButtonClick);
    });

    reverseButtons.forEach(button => {
        button.addEventListener('click', handleReverseButtonClick);
        button.disabled = true;
    });
});
