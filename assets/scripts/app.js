function typeAnimation() {
	Typed.new("#writing-text", {
		strings: [
			"am a Web Developer.", "am a College Student", /*"also teach programming to people.",*/ "am a problem solver."
		],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 1,
		contentType: 'text',
		callback: function() {
			// $("#writing-text").css({"color": "#fff", "background-color": "rgb(79, 219, 98)"});
		},
		preStringTyped: function() {},
		onStringTyped: function() {}
	});
}


typeAnimation();