(function ($) {

	("use strict");
	// canvas menu activation

	$(".canvas_open").on("click", function () {
		$(".offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active");
	});

	$(".canvas_close,.off_canvars_overlay").on("click", function () {
	  $(".offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active");
	});

	// off canvas menu

	var $offcanvasNav = $(".offcanvas_main_menu"),
	  $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
	$offcanvasNavSubMenu
	.parent()
	.prepend(
		'<span class="menu-expand"><i class="fa-solid fa-angle-down"></i></span>'
	);

$offcanvasNavSubMenu.slideUp();

$offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
	var $this = $(this);
	if (
	  $this
		.parent()
		.attr("class")
		.match(/\b(menu-list-has-items| has-items | has-sub-menu)\b/) && 
	  ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
	) {
	  e.preventDefault();
	  if ($this.siblings("ul:visible").length) {
	    $this.siblings("ul").slideUp("slow");
	  } else { 
	  	$this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
	  	$this.siblings("ul").slideDown("slow");
	  }
    }

    if (
      $this.is("a") || 
      $this.is("span") || 
      $this.attr("class").match(/\b(menu-expand)\b/)
    ) {
      $this.parent().toggleClass("menu-open");
    } else if (
      $this.is("li") && 
      $this.attr("class").match(/\b('menu-list-has-items')\b/)
    ) {
      $this.toggleClass("menu-open");
    }   
  });

  //search box slide toggle ativation 

  $(".search_box > a").on("click", function () {
  	$(this).toggleClass("active");
  	$(".search_widget").slideToggle("medium");
  });

    // mini cart slide toggle ativation 

  $(".mini_cart_wrapper > a").on("click", function () {
  	if ($(window).width() < 990) {
  	  $(".mini_cart").slideToggle("medium");
  	}
  });

  	// sticky header

  $(window).on("scroll", function () {
  	var scroll = $(window).scrollTop();
  	if (scroll < 100) {
  	  $(".sticky-header").removeClass("sticky");
  	} else {
  	  $(".sticky-header").addClass("sticky");
  	}
  });

  function dataBackgroundImage() {
  	$("[data-bgimg]").each(function () {
  	  var bgImgUrl = $(this).data("bgimg");
  	  $(this).css( {
  	  	"background-image": "url(" + bgImgUrl + ")",
  	  });
  	});
  }

  $(window).on("load", function () {
  	dataBackgroundImage();
  });

  // slider activation 

  $(".slider_area").owlCarousel( {
  	animateOut: "fadeOut",
  	autoplay: true,
  	loop: true,
  	nav: true,
  	autoplay: true,
  	autoplayTimeout: 5000,
  	items: 1,
  	dots: false,
  	navText: [
  		'<i class="fa-solid fa-arrow-left"></i>',
  		'<i class="fa-solid fa-arrow-right"></i>',
  	],
  });


  // activation of product column of 4 

  $(".product_column4").on(
  	"changed.owl.carousel initialized.owl.carousel", 
  	function (event) {
  	  $(event.target)
  	    .find(".owl-item")
  	    .removeClass("last")
  	    .eq(event.item.index + event.page.size - 1)
  	    .addClass("last");
  	})

  	.owlCarousel({
  		autoplay: true,
  		loop: true,
  		nav: true,
  		autoplayTimeout: 5000,
  		items: 4,
  		dots: false,
  		navText: [
  		'<i class="fa-solid fa-arrow-left"></i>',
  		'<i class="fa-solid fa-arrow-right"></i>',
  	],
  		responsiveClass: true,
  		responsive: {
  			0: {
  				items : 1,
  			},
  			576: {
  				items : 2,
  			},
  			768: {
  				items : 3,
  			},
  			992: {
  				items : 4,
  			},
  		},
  	});

  	// tooltip activation 

  	$(".action_links ul li a,.add_to_cart a,.footer_social_link ul li a").tooltip(
  	{
  		animated: "fade",
  		placement: "top",
  		container: "body",
  	}
  );
})(jQuery);