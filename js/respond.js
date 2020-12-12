
$(function () {
    function myFunction(x) {
        if (x.matches) {
            // $(function () {
            //     var script = document.createElement("script");
            //     script.setAttribute('id', 'scrollmagic');
            //     script.setAttribute('defer', '');
            //     script.type = "text/javascript";
            //     script.defer = true;
            //     script.src = "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js";
            //     script.integrity = "sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg=="
            //     script.crossOrigin = "anonymous"
            //     // use this for inline script
            //     document.body.append(script);
            //     console.log(script)
            // });
            // $(function () {
            //     var script = document.createElement("script");
            //     script.setAttribute('id', 'gsap');
            //     script.defer = true;
            //     script.type = "text/javascript";
            //     script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js";
            //     script.integrity = "sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==";
            //     script.crossOrigin = "anonymous"
            //     // use this for inline script
            //     document.body.append(script);
            //     console.log(script)
            // });
            // $(function () {
            //     var script = document.createElement("script");
            //     script.setAttribute('id', 'animation-gsap');
            //     script.defer = true;
            //     script.type = "text/javascript";
            //     script.src = "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js";
            //     script.integrity = "sha512-judXDFLnOTJsUwd55lhbrX3uSoSQSOZR6vNrsll+4ViUFv+XOIr/xaIK96soMj6s5jVszd7I97a0H+WhgFwTEg==";
            //     script.crossOrigin = "anonymous"
            //     // use this for inline script
            //     document.body.append(script);
            //     console.log(script)
            // });
            // $(function () {
            //     var script = document.createElement("script");
            //     script.setAttribute('id', 'jquery-scroll');
            //     script.defer = true;
            //     script.type = "text/javascript";
            //     script.src = "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/jquery.ScrollMagic.min.js";
            //     script.integrity = "sha512-RoCOXSeYXosX4PjvRhUz0X+pmdhOJJkbjYZzmZ9dS1Iy9E/WnkTqMy+LVkPX3BV0ZgSFB2AYQKfi6ZKdNdXJnQ==";
            //     script.crossOrigin = "anonymous"
            //     // use this for inline script
            //     document.body.append(script);
            //     console.log(script)
            // });
            // $(function () {
            //     var script = document.createElement("script");
            //     script.setAttribute('id', 'scrollmagic_main');
            //     script.defer = true;
            //     script.type = "text/javascript";
            //     script.src = "js/Scrollmagic_Final.js";
            //     // use this for inline script
            //     document.body.append(script);
            //     console.log(script)

            // });
        } else {
            // $("#scrollmagic_main").remove();
            // $("#scrollmagic, #gsap, #animation-gsap,#jquery-scroll,#scrollmagic_main").remove();
            $(window).on('resize', function () {
                function refreshPageUnlessFocusedOn(el) {
                    if (x.match){
                    setInterval(function () {
                        if (el !== document.activeElement) {
                            document.location.reload();
                        }
                    }, 2000)
                }
                }
                refreshPageUnlessFocusedOn();
            });
            // console.log("script remove")
        }
    }

    // var x = window.matchMedia("(min-width: 992px)")
    // myFunction(x) // Call listener function at run time
    // x.addEventListener("change", myFunction, false);
});