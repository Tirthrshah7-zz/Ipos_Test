
$(function () {
    function myFunction() {
        var x = window.matchMedia("(min-width: 992px)")
        if (x.matches) {
            $(window).on('resize', function () {
                function refreshPageUnlessFocusedOn(el) {
                    setInterval(function () {
                        if (el !== document.activeElement) {
                            document.location.reload();
                        }
                    }, 1000)
                }
                refreshPageUnlessFocusedOn();
            });

        }
    }


    myFunction();
    // x.addEventListener("resize", myFunction,false);
});