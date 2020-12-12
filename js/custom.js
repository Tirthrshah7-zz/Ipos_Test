
// $(function () {
//     function myFunction(x) {
//         if (x.matches) {
//             $(window).on('resize', function () {
//                 function refreshPageUnlessFocusedOn(el) {
//                     setInterval(function () {
//                         if (el !== document.activeElement) {
//                             document.location.reload();
//                         }
                        
//                     }, 1000)
//                 }
//                 refreshPageUnlessFocusedOn();
//             });

//         }
//     }

//     var x = window.matchMedia("(max-width: 992px)");
//     myFunction(x);
//     x.addEventListener("resize", myFunction);
//     // x.addEventListener("resize", myFunction,false);
// });


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

