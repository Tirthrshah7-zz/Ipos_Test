function sunny(){function e(){if(window.matchMedia("(min-width: 992px)").matches)$((function(){var e=new ScrollMagic.Controller;function n(e,n,r,a){for(var t=0,i=0;i<r;i++){var o=new Image;o.onload=()=>{++t>=r&&a()},o.src=n(i),e.push(o)}}function r(e,n,r,a){!function(e,n,r,a){r<=n&&$(a).text(e.substring(0,r))}(e,n,Math.ceil(r.progress()*n),a)}$((function(){var r=new Array;var a=document.querySelector(".station_items_img");n(r,(e=>`ipos_images/images_sequenece/station/${e.toString().padStart(0,"0")}.png`),25,(function(){var n={frame:0},t=new TimelineMax;t.add(TweenMax.to(n,1,{frame:r.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".station-img").attr("src",r[n.frame].src)}})),new ScrollMagic.Scene({duration:"200%",triggerElement:a,triggerHook:.03}).setTween(t).setPin(a).addTo(e)}))})),$((function(){var a=new Array;var t=document.querySelector(".face-scanner");n(a,(e=>`ipos_images/images_sequenece/face_id/${e.toString().padStart(0,"0")}.png`),25,(function(){var n={frame:0},i=" Secure login using Facial ID ";let o=i.length;document.querySelector("#sunny");var s=new TimelineMax;s.add(TweenMax.to(n,1,{frame:a.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$("#myimg").attr("src",a[n.frame].src)}}));var c=new ScrollMagic.Scene({duration:"200%",triggerElement:t,triggerHook:.02});c.setTween(s).setPin(t).on("progress",(function(){r(i,o,c,".face-text")})).on("leave",(function(){var e=$("#sunny")[0];$((function(){e.play()}))})).addTo(e)}))})),$((function(){var a=new Array;var t=document.querySelector("#pass-id");n(a,(e=>`ipos_images/images_sequenece/App-Video-Frams/${e.toString().padStart(0,"0")}.png`),24,(function(){var n={frame:0},i=" A Simple Workflow that can be Used with minimal or no training.";let o=i.length;var s=(new TimelineMax).add(TweenMax.to(n,1,{frame:a.length-1,roundProps:"frame",ease:Linear.easeNone,onUpdate:()=>{$(".pass-img").attr("src",a[n.frame].src)}})),c=new ScrollMagic.Scene({duration:"200%",triggerElement:t,triggerHook:.05});c.setTween(s).setPin(t).setClassToggle(t,"modifier1").on("progress",(function(){r(i,o,c,"#workflow")})).addTo(e)}))})),$((function(){$(".sec_1").each((function(){var n=$(this).find(".opn"),r=$(this).find(".scale-new"),a=(new TimelineMax).add(TweenMax.fromTo(this,1,{opacity:.4},{opacity:1,ease:Linear.easeNone})).add(TweenMax.fromTo(r,1,{x:"+250%",opacity:.1},{x:"0%",opacity:.8,ease:Linear.easeNone})).add(TweenMax.fromTo(r,1,{scale:3.1,opacity:.5},{scale:1,opacity:1,ease:Linear.easeNone})).add(TweenMax.fromTo(n,1,{y:"30%",opacity:.1},{y:"0%",opacity:1,ease:Power1.easeOut}));new ScrollMagic.Scene({triggerElement:this,triggerHook:.1,duration:"200%"}).setPin(this).setTween(a).addTo(e)}))})),$((function(){var a=new Array;var t=document.querySelector(".kitchne-sec");n(a,(e=>`ipos_images/images_sequenece/kitchen_frame/${e.toString().padStart(0,"1")}.png`),60,(function(){var n={frame:0},i=" Our advanced Interactive systems will make the work flow a breeze";let o=i.length;var s=(new TimelineMax).to(n,1,{frame:a.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".kds_proccess").attr("src",a[n.frame].src)}}),c=new ScrollMagic.Scene({duration:"200%",triggerElement:t,triggerHook:.01});c.setTween(s).setPin(t).on("progress",(function(){r(i,o,c,".k_break")})).setClassToggle(".kitchne-sec","modifier1").addTo(e)}))})),$((function(){var r=new Array;var a=document.querySelector(".part-1");n(r,(e=>`ipos_images/images_sequenece/Part-1/${e.toString().padStart(0,"0")}.png`),13,(function(){var n={frame:0},t=(new TimelineMax).to(n,1,{frame:r.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".1p").attr("src",r[n.frame].src)}});new ScrollMagic.Scene({duration:"200%",triggerElement:a,triggerHook:.19}).setTween(t).setPin(a).addTo(e)}))})),$((function(){var r=new Array;var a=document.querySelector(".part-2");n(r,(e=>`ipos_images/images_sequenece/kitchne_part-2/${e.toString().padStart(0,"0")}.png`),33,(function(){var n={frame:0},t=(new TimelineMax).add(TweenMax.to(n,1,{frame:r.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".2p").attr("src",r[n.frame].src)}}));new ScrollMagic.Scene({duration:"300%",triggerElement:a,triggerHook:.2}).setTween(t).setPin(a).addTo(e)}))})),$((function(){var r=new Array;var a=document.querySelector("#printer-1");n(r,(e=>`ipos_images/images_sequenece/printer_1/${e.toString().padStart(0,"0")}.png`),31,(function(){var n={frame:0},t=(new TimelineMax).add(TweenMax.to(n,1,{frame:r.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".printer-1").attr("src",r[n.frame].src)}}));new ScrollMagic.Scene({duration:"250%",triggerElement:a,triggerHook:.05}).setTween(t).setPin(a).setClassToggle("#printer-1","modifier1").addTo(e)}))})),$((function(){var r=new Array;var a=document.querySelector("#printer-2");n(r,(e=>`ipos_images/images_sequenece/printer_2/${e.toString().padStart(0,"0")}.png`),28,(function(){var n={frame:0},t=(new TimelineMax).add(TweenMax.to(n,1,{frame:r.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".printer-2").attr("src",r[n.frame].src)}}));new ScrollMagic.Scene({duration:3e3,triggerElement:a,triggerHook:0}).setTween(t).setPin(a).setClassToggle("#printer-2","modifier1").addTo(e)}))})),$((function(){var a=new Array;var t=document.querySelector("#eats-max");n(a,(e=>`ipos_images/images_sequenece/eats_max/${e.toString().padStart(0,"0")}.png`),57,(function(){var n={frame:0},i=" your valued clients which is truly free of fees";let o=i.length;var s=(new TimelineMax).add(TweenMax.to(n,1,{frame:a.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".eats-max").attr("src",a[n.frame].src)}})).add(TweenMax.fromTo(".p5p",1.5,{opacity:1,y:"100px"},{opacity:1,y:"0",ease:Power4.easeNone},"+1.3")),c=new ScrollMagic.Scene({duration:"300%",triggerElement:t,triggerHook:0});c.on("progress",(function(){r(i,o,c,".eats_mob_text")})).setTween(s).setPin(t).setClassToggle(t,"modifier1").addTo(e)}))})),$((function(){var a=new Array;var t=document.querySelector("#eats_Website");n(a,(e=>`ipos_images/images_sequenece/Eats Web/${e.toString().padStart(0,"0")}.png`),35,(function(){var n={frame:0},i=" The orders will come into your POS and will automatically fire to the kitchen printer or display.";let o=i.length;var s=(new TimelineMax).add(TweenMax.to(n,1,{frame:a.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".eats_Website").attr("src",a[n.frame].src)}})),c=new ScrollMagic.Scene({duration:"300%",triggerElement:t,triggerHook:0});c.on("progress",(function(){r(i,o,c,".eats_website")})).setTween(s).setPin(t).setClassToggle(t,"modifier1").addTo(e)}))})),$((function(){var a=new Array;var t=document.querySelector("#customer_display");n(a,(e=>`ipos_images/images_sequenece/customer_display/${e.toString().padStart(0,"0")}.png`),35,(function(){var n="giving them a rewards program and capturing their valuable feedback";let i=n.length;var o={frame:0},s=(new TimelineMax).add(TweenMax.to(o,1,{frame:a.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".customer_display").attr("src",a[o.frame].src)}})),c=new ScrollMagic.Scene({duration:"300%",triggerElement:t,triggerHook:.04});c.setTween(s).setPin(t).on("progress",(function(){r(n,i,c,".cut_display_text")})).addTo(e).setClassToggle("#customer_display","modifier1")}))})),$((function(){var r=new Array;var a=document.querySelector("#new_way_sec");n(r,(e=>`ipos_images/images_sequenece/new_way/${e.toString().padStart(0,"0")}.png`),9,(function(){var n={frame:0},t=(new TimelineMax).add(TweenMax.to(n,1,{frame:r.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".new_way").attr("src",r[n.frame].src)}}));new ScrollMagic.Scene({duration:"150%",triggerElement:a,triggerHook:.09}).setTween(t).setPin(a).addTo(e).setClassToggle("#new_way","modifier1")}))})),$((function(){var r=new Array;var a=document.querySelector("#imenu");n(r,(e=>`ipos_images/images_sequenece/imenu_gallery/${e.toString().padStart(0,"0")}.png`),183,(function(){var n={frame:0},t=(new TimelineMax).add(TweenMax.to(n,1,{frame:r.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".imenu").attr("src",r[n.frame].src)}}));new ScrollMagic.Scene({duration:"250%",triggerElement:a,triggerHook:0}).setTween(t).setPin(a).addTo(e).setClassToggle("#imenu","modifier1")}))})),$((function(){var r=new Array;var a=document.querySelector("#mobile_payment_new");n(r,(e=>`ipos_images/images_sequenece/mobile_payment_new/${e.toString().padStart(0,"0")}.png`),30,(function(){var n={frame:0},t=new TimelineMax;t.to(n,1,{frame:r.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".mobile_payment_new").attr("src",r[n.frame].src)}}),window.matchMedia("(min-width: 1500px)").matches&&t.to(".mobile_payment_new",1,{y:"-5px"},"-=3.8"),new ScrollMagic.Scene({duration:"300%",triggerElement:a,triggerHook:.01}).setTween(t).setPin(a).setClassToggle(a,"modifier1").addTo(e)}))})),$((function(){var a=new Array;var t=document.querySelector("#qr_code");n(a,(e=>`ipos_images/images_sequenece/qr_code/${e.toString().padStart(0,"0")}.png`),35,(function(){var n={frame:0},i=" My iPos is the solution got you covered.";let o=i.length;var s=(new TimelineMax).add(TweenMax.to(n,1,{frame:a.length-1,roundProps:"frame",immediateRender:!0,ease:Linear.easeNone,onUpdate:()=>{$(".qr_code").attr("src",a[n.frame].src)}})).add(TweenMax.fromTo(".QR-img",1,{y:"-50px"},{y:"-50px",ease:Power1.easeOut})),c=new ScrollMagic.Scene({duration:"200%",triggerElement:t,triggerHook:.05});c.on("progress",(function(){r(i,o,c,".qr_text")})).setTween(s).setPin(t).setClassToggle(t,"modifier1").addTo(e)}))})),$(window).on("resize",(function(){null==$(document).width()&&null==$(document).height()||location.reload(1)}))}));else{var e=$(window).width();$(window).on("resize",(function(){var n=$(window).width();e!==n&&location.reload(0)}))}}e(),window.addEventListener("resize",e,!1)}const classList=document.querySelector(".main-content"),classLength=classList.length;0!=classLength&&sunny();