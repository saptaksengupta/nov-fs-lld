
//global scope

var starRatingApp = (function () {
    // local scope
    const stars = document.querySelectorAll('.star');
    const starContainer = document.querySelector('.star-rating-container');
    const count = document.querySelector('#count');
    var currentRating;
    function init() {
        attachEventListeners();
    }

    function attachEventListeners() {
        starContainer.addEventListener('click', function (e) {
            const rating = extractRating(e);

            if (!rating) {
                return;
            }

            currentRating = rating;
            fillStars(rating);
            renderCount(rating);
        });

        starContainer.addEventListener('mouseover', function (e) {
            const rating = extractRating(e);
            if (!rating) {
                return;
            }

            fillStars(rating);
        });

        starContainer.addEventListener('mouseleave', function () {
            resetStars();
            fillStars(currentRating);
        });
    }

    function fillStars(rating) {
        for (var i = 0; i < rating; i++) {
            stars[i].classList.add('yellow');
        }
    }

    function resetStars() {
        for (var i = 0; i < stars.length; i++) {
            stars[i].classList.remove('yellow');
        }
    }

    function extractRating(e) {
        let elem = e.target;
        let isStarClicked = elem.hasAttribute('rating');

        if (!isStarClicked) {
            return;
        }
        return elem.getAttribute('rating');
    }

    function renderCount(rating) {
        count.innerText = rating;
    }

    // public
    return {
        initialize: init
    }
})();

starRatingApp.initialize();