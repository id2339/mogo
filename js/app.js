$( function() {

	let header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrolloffset = $(window).scrollTop();

	/*/ fixed header */
	checkScroll(scrolloffset);

	$(window).on("scroll", function() {

		scrolloffset = $(this).scrollTop();

		checkScroll(scrolloffset);

	});

	function checkScroll(scrolloffset) {

		if ( scrolloffset >= introH ) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed")
		}
	}

	/* smooth scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});


	/* menu nav toggle */
	$("#nav-toggle").on("click", function(event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	/* accordion */
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

		let $this = $(this),
			blockId = $this.data('collapse');

		$this.toggleClass("active");
		$(blockId).slideToggle();
	});
});