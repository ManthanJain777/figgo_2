(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

searchInput.addEventListener('input', e => renderRestaurants(e.target.value));

// Category filter buttons
document.querySelectorAll('.btn-outline-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.textContent.trim();
        document.querySelectorAll('.btn-outline-primary').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (category === "All") {
            renderRestaurants();
        } else {
            renderRestaurantsByCategory(category);
        }
    });
});

// Category-to-restaurant map
const categoryMap = {
    "Indian": ["Curry Corner", "Urban Tandoor", "Delhi Biryani", "Paneer Point", "Tandoori Town", "Masala Magic", "The Curry Leaf", "Biryani Bhavan"],
    "Chinese": ["Dragon's Delight", "Wok & Roll", "Noodle Nirvana", "Dumpling Den", "Chopstick Charm", "Zing Zing", "Momo Mafia"],
    "Italian": ["Pizza Paradiso", "Pasta Palace", "Ravioli Republic", "La Pizzeria", "Gusto Italiano", "Pasta Party", "Mama Mia"],
    "Mexican": ["Taco Fiesta", "Burrito Bros", "Salsa Spot", "Wrap World"],
    "Desserts": ["Crispy Cravings", "Gravy Garden", "Spicy Treat", "Cheesy Crust"]
};

// Render by category
function renderRestaurantsByCategory(category) {
    const names = categoryMap[category] || [];
    restaurantGrid.innerHTML = '';
    restaurantNames.forEach((name, i) => {
        if (names.includes(name)) {
            restaurantGrid.innerHTML += `
                <div class="col-lg-4 col-md-6">
                    <div class="card border-0 shadow-sm">
                        <img src="img/restaurant-${(i % 10) + 1}.jpg" class="card-img-top" alt="${name}">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">Enjoy the best of cuisine with our top-rated chefs.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="badge bg-success">${(Math.random() * (5 - 3.6) + 3.6).toFixed(1)} ★</span>
                                <a href="#" class="btn btn-sm btn-outline-primary rounded-pill">View Menu</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });
}


})(jQuery);

