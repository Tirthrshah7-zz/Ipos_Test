$(function() {
	function e() {
		window.matchMedia("(min-width: 992px)").matches && $(function() {
			var e = new ScrollMagic.Controller;

			function r(e, r, a, n) {
				for (var t = 0, o = 0; o < a; o++) {
					var i = new Image;
					i.onload = (() => {
						++t >= a && n()
					}), i.src = r(o), e.push(i)
				}
			}

			function a(e, r, a, n) {
				! function(e, r, a, n) {
					a <= r && $(n).text(e.substring(0, a))
				}(e, r, Math.ceil(a.progress() * r), n)
			}
			$(function() {
				var a = new Array;
				var n = document.querySelector(".station_items_img");
				r(a, e => `ipos_images/images_sequenece/station/${e.toString().padStart(0,"0")}.png`, 25, function() {
					var r = {
							frame: 0
						},
						t = new TimelineMax;
					t.add(TweenMax.to(r, 1, {
						frame: a.length - 1,
						roundProps: "frame",
						immediateRender: !0,
						ease: Linear.easeNone,
						onUpdate: () => {
							$(".station-img").attr("src", a[r.frame].src)
						}
					})), new ScrollMagic.Scene({
						duration: "200%",
						triggerElement: n,
						triggerHook: .03
					}).setTween(t).setPin(n).addTo(e)
				})
			}), $(function() {
				var n = new Array;
				var t = document.querySelector(".face-scanner");
				r(n, e => `ipos_images/images_sequenece/face_id/${e.toString().padStart(0,"0")}.png`, 25, function() {
					var r = {
							frame: 0
						},
						o = " Secure login using Facial ID ";
					let i = o.length;
					var s = document.createElement("audio");
					s.setAttribute("src", "audio/notification.mp3");
					var c = new TimelineMax;
					c.add(TweenMax.to(r, 1, {
						frame: n.length - 1,
						roundProps: "frame",
						immediateRender: !0,
						ease: Linear.easeNone,
						onUpdate: () => {
							$("#myimg").attr("src", n[r.frame].src)
						}
					}));
					var m = new ScrollMagic.Scene({
						duration: "200%",
						triggerElement: t,
						triggerHook: .02
					});
					m.setTween(c).setPin(t).on("progress", function() {
						a(o, i, m, ".face-text")
					}).on("leave", function() {
						document.body.append(s), s.play()
					}).addTo(e)
				})
			}), $(function() {
				var n = new Array;
				var t = document.querySelector("#pass-id");
				r(n, e => `ipos_images/images_sequenece/App-Video-Frams/${e.toString().padStart(0,"0")}.png`, 24, function() {
					var r = {
							frame: 0
						},
						o = " A Simple Workflow that can be Used with minimal or no training.";
					let i = o.length;
					var s = (new TimelineMax).add(TweenMax.to(r, 1, {
							frame: n.length - 1,
							roundProps: "frame",
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".pass-img").attr("src", n[r.frame].src)
							}
						})),
						c = new ScrollMagic.Scene({
							duration: "200%",
							triggerElement: t,
							triggerHook: .05
						});
					c.setTween(s).setPin(t).setClassToggle(t, "modifier1").on("progress", function() {
						a(o, i, c, "#workflow")
					}).addTo(e)
				})
			}), $(function() {
				$(".sec_1").each(function() {
					var r = $(this).find(".opn"),
						a = $(this).find(".scale-new"),
						n = (new TimelineMax).add(TweenMax.fromTo(this, 1, {
							opacity: .4
						}, {
							opacity: 1,
							ease: Linear.easeNone
						})).add(TweenMax.fromTo(a, 1, {
							x: "+250%",
							opacity: .1
						}, {
							x: "0%",
							opacity: .8,
							ease: Linear.easeNone
						})).add(TweenMax.fromTo(a, 1, {
							scale: 3.1,
							opacity: .5
						}, {
							scale: 1,
							opacity: 1,
							ease: Linear.easeNone
						})).add(TweenMax.fromTo(r, 1, {
							y: "30%",
							opacity: .1
						}, {
							y: "0%",
							opacity: 1,
							ease: Power1.easeOut
						}));
					new ScrollMagic.Scene({
						triggerElement: this,
						triggerHook: .1,
						duration: "200%"
					}).setPin(this).setTween(n).addTo(e)
				})
			}), $(function() {
				var n = new Array;
				var t = document.querySelector(".kitchne-sec");
				r(n, e => `ipos_images/images_sequenece/kitchen_frame/${e.toString().padStart(0,"1")}.png`, 60, function() {
					var r = {
							frame: 0
						},
						o = " Our advanced Interactive systems will make the work flow a breeze";
					let i = o.length;
					var s = (new TimelineMax).to(r, 1, {
							frame: n.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".kds_proccess").attr("src", n[r.frame].src)
							}
						}),
						c = new ScrollMagic.Scene({
							duration: "200%",
							triggerElement: t,
							triggerHook: .01
						});
					c.setTween(s).setPin(t).on("progress", function() {
						a(o, i, c, ".k_break")
					}).setClassToggle(".kitchne-sec", "modifier1").addTo(e)
				})
			}), $(function() {
				var a = new Array;
				var n = document.querySelector(".part-1");
				r(a, e => `ipos_images/images_sequenece/Part-1/${e.toString().padStart(0,"0")}.png`, 13, function() {
					var r = {
							frame: 0
						},
						t = (new TimelineMax).to(r, 1, {
							frame: a.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".1p").attr("src", a[r.frame].src)
							}
						});
					new ScrollMagic.Scene({
						duration: "200%",
						triggerElement: n,
						triggerHook: .19
					}).setTween(t).setPin(n).addTo(e)
				})
			}), $(function() {
				var a = new Array;
				var n = document.querySelector(".part-2");
				r(a, e => `ipos_images/images_sequenece/Part-2/${e.toString().padStart(0,"0")}.png`, 33, function() {
					var r = {
							frame: 0
						},
						t = (new TimelineMax).add(TweenMax.to(r, 1, {
							frame: a.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".2p").attr("src", a[r.frame].src)
							}
						}));
					new ScrollMagic.Scene({
						duration: "300%",
						triggerElement: n,
						triggerHook: .2
					}).setTween(t).setPin(n).addTo(e)
				})
			}), $(function() {
				var a = new Array;
				var n = document.querySelector("#printer-1");
				r(a, e => `ipos_images/images_sequenece/printer_1/${e.toString().padStart(0,"0")}.png`, 31, function() {
					var r = {
							frame: 0
						},
						t = (new TimelineMax).add(TweenMax.to(r, 1, {
							frame: a.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".printer-1").attr("src", a[r.frame].src)
							}
						}));
					new ScrollMagic.Scene({
						duration: "250%",
						triggerElement: n,
						triggerHook: .05
					}).setTween(t).setPin(n).setClassToggle("#printer-1", "modifier1").addTo(e)
				})
			}), $(function() {
				var a = new Array;
				var n = document.querySelector("#printer-2");
				r(a, e => `ipos_images/images_sequenece/printer_2/${e.toString().padStart(0,"0")}.png`, 28, function() {
					var r = {
							frame: 0
						},
						t = (new TimelineMax).add(TweenMax.to(r, 1, {
							frame: a.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".printer-2").attr("src", a[r.frame].src)
							}
						}));
					new ScrollMagic.Scene({
						duration: 3e3,
						triggerElement: n,
						triggerHook: 0
					}).setTween(t).setPin(n).setClassToggle("#printer-2", "modifier1").addTo(e)
				})
			}), $(function() {
				var n = new Array;
				var t = document.querySelector("#eats-max");
				r(n, e => `ipos_images/images_sequenece/eats_max/${e.toString().padStart(0,"0")}.png`, 57, function() {
					var r = {
							frame: 0
						},
						o = " your valued clients which is truly free of fees";
					let i = o.length;
					var s = (new TimelineMax).add(TweenMax.to(r, 1, {
							frame: n.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".eats-max").attr("src", n[r.frame].src)
							}
						})).add(TweenMax.fromTo(".p5p", 1.5, {
							opacity: 1,
							y: "100px"
						}, {
							opacity: 1,
							y: "0",
							ease: Power4.easeNone
						}, "+1.3")),
						c = new ScrollMagic.Scene({
							duration: "300%",
							triggerElement: t,
							triggerHook: 0
						});
					c.on("progress", function() {
						a(o, i, c, ".eats_mob_text")
					}).setTween(s).setPin(t).setClassToggle(".p", "active").addTo(e)
				})
			}), $(function() {
				var n = new Array;
				var t = document.querySelector("#eats_Website");
				r(n, e => `ipos_images/images_sequenece/Eats Web/${e.toString().padStart(0,"0")}.png`, 35, function() {
					var r = {
							frame: 0
						},
						o = " The orders will come into your POS and will automatically fire to the kitchen printer or display.";
					let i = o.length;
					var s = (new TimelineMax).add(TweenMax.to(r, 1, {
							frame: n.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".eats_Website").attr("src", n[r.frame].src)
							}
						})),
						c = new ScrollMagic.Scene({
							duration: "300%",
							triggerElement: t,
							triggerHook: 0
						});
					c.on("progress", function() {
						a(o, i, c, ".eats_website")
					}).setTween(s).setPin(t).addTo(e)
				})
			}), $(function() {
				var n = new Array;
				var t = document.querySelector("#customer_display");
				r(n, e => `ipos_images/images_sequenece/customer_display/${e.toString().padStart(0,"0")}.png`, 35, function() {
					var r = "giving them a rewards program and capturing their valuable feedback";
					let o = r.length;
					var i = {
							frame: 0
						},
						s = (new TimelineMax).add(TweenMax.to(t, .4, {
							y: "-70px",
							ease: Power4.easeOut
						})).add(TweenMax.to(i, 1, {
							frame: n.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".customer_display").attr("src", n[i.frame].src)
							}
						})),
						c = new ScrollMagic.Scene({
							duration: "300%",
							triggerElement: t,
							triggerHook: .07
						});
					c.setTween(s).setPin(t).on("progress", function() {
						a(r, o, c, ".cut_display_text")
					}).addTo(e).setClassToggle("#customer_display", "modifier1")
				})
			}), $(function() {
				var a = new Array;
				var n = document.querySelector("#new_way_sec");
				r(a, e => `ipos_images/images_sequenece/new_way/${e.toString().padStart(0,"0")}.png`, 9, function() {
					var r = {
							frame: 0
						},
						t = (new TimelineMax).add(TweenMax.to(r, 1, {
							frame: a.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".new_way").attr("src", a[r.frame].src)
							}
						}));
					new ScrollMagic.Scene({
						duration: "150%",
						triggerElement: n,
						triggerHook: .09
					}).setTween(t).setPin(n).addTo(e).setClassToggle("#new_way", "modifier1")
				})
			}), $(function() {
				var a = new Array;
				var n = document.querySelector("#imenu");
				r(a, e => `ipos_images/images_sequenece/imenu_gallery/${e.toString().padStart(0,"0")}.png`, 183, function() {
					var r = {
							frame: 0
						},
						t = (new TimelineMax).add(TweenMax.to(r, 1, {
							frame: a.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".imenu").attr("src", a[r.frame].src)
							}
						}));
					new ScrollMagic.Scene({
						duration: "250%",
						triggerElement: n,
						triggerHook: 0
					}).setTween(t).setPin(n).addTo(e).setClassToggle("#imenu", "modifier1")
				})
			}), $(function() {
				var a = new Array;
				var n = document.querySelector("#mobile_payment_new");
				r(a, e => `ipos_images/images_sequenece/mobile_payment_new/${e.toString().padStart(0,"0")}.png`, 30, function() {
					var r = {
							frame: 0
						},
						t = new TimelineMax;
					t.to(r, 1, {
						frame: a.length - 1,
						roundProps: "frame",
						immediateRender: !0,
						ease: Linear.easeNone,
						onUpdate: () => {
							$(".mobile_payment_new").attr("src", a[r.frame].src)
						}
					}), window.matchMedia("(min-width: 1500px)").matches && t.to(".mobile_payment_new", 1, {
						y: "-5px"
					}, "-=3.8"), new ScrollMagic.Scene({
						duration: "300%",
						triggerElement: n,
						triggerHook: .01
					}).setTween(t).setPin(n).setClassToggle("#mobile_payment_new", "modifier1").addTo(e)
				})
			}), $(function() {
				var n = new Array;
				var t = document.querySelector("#qr_code");
				r(n, e => `ipos_images/images_sequenece/qr_code/${e.toString().padStart(0,"0")}.png`, 35, function() {
					var r = {
							frame: 0
						},
						o = " My iPos is the solution got you covered.";
					let i = o.length;
					var s = (new TimelineMax).add(TweenMax.to(r, 1, {
							frame: n.length - 1,
							roundProps: "frame",
							immediateRender: !0,
							ease: Linear.easeNone,
							onUpdate: () => {
								$(".qr_code").attr("src", n[r.frame].src)
							}
						})).add(TweenMax.fromTo(".QR-img", 1, {
							y: "-50px"
						}, {
							y: "-50px",
							ease: Power1.easeOut
						})),
						c = new ScrollMagic.Scene({
							duration: "200%",
							triggerElement: t,
							triggerHook: .05
						});
					c.on("progress", function() {
						a(o, i, c, ".qr_text")
					}).setTween(s).setPin(t).setClassToggle("#qr_code", "modifier1").addTo(e)
				})
			}), $(window).on("resize", function() {
				var e;
				setInterval(function() {
					e !== document.activeElement && document.location.reload()
				}, 1e3)
			})
		})
	}
	e(), window.addEventListener("resize", e, !1)
});