setTimeout(function(){!function(){"use strict";const s=(e,t=!1)=>(e=e.trim(),t?[...document.querySelectorAll(e)]:document.querySelector(e)),a=(e,t,i,o=!1)=>{let l=s(t,o);l&&(o?l.forEach(h=>h.addEventListener(e,i)):l.addEventListener(e,i))},r=(e,t)=>{e.addEventListener("scroll",t)};let b=s("#navbar .scrollto",!0);const f=()=>{let e=window.scrollY+200;b.forEach(t=>{if(!t.hash)return;let i=s(t.hash);!i||(e>=i.offsetTop&&e<=i.offsetTop+i.offsetHeight?t.classList.add("active"):t.classList.remove("active"))})};window.addEventListener("load",f),r(document,f);const u=e=>{let i=s("#header").offsetHeight,o=s(e).offsetTop;window.scrollTo({top:o-i,behavior:"smooth"})};let c=s("#header"),n=s("#topbar");if(c){const e=()=>{window.scrollY>100?(c.classList.add("header-scrolled"),n&&n.classList.add("topbar-scrolled")):(c.classList.remove("header-scrolled"),n&&n.classList.remove("topbar-scrolled"))};window.addEventListener("load",e),r(document,e)}let d=s(".back-to-top");if(d){const e=()=>{window.scrollY>100?d.classList.add("active"):d.classList.remove("active")};window.addEventListener("load",e),r(document,e)}a("click",".mobile-nav-toggle",function(e){s("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),a("click",".navbar .dropdown > a",function(e){s("#navbar").classList.contains("navbar-mobile")&&(e.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))},!0),a("click",".scrollto",function(e){if(s(this.hash)){e.preventDefault();let t=s("#navbar");if(t.classList.contains("navbar-mobile")){t.classList.remove("navbar-mobile");let i=s(".mobile-nav-toggle");i.classList.toggle("bi-list"),i.classList.toggle("bi-x")}u(this.hash)}},!0),window.addEventListener("load",()=>{window.location.hash&&s(window.location.hash)&&u(window.location.hash)}),window.addEventListener("load",()=>{let e=s(".menu-container");if(e){let t=new Isotope(e,{itemSelector:".menu-item",layoutMode:"fitRows"}),i=s("#menu-flters li",!0);a("click","#menu-flters li",function(o){o.preventDefault(),i.forEach(function(l){l.classList.remove("filter-active")}),this.classList.add("filter-active"),t.arrange({filter:this.getAttribute("data-filter")}),t.on("arrangeComplete",function(){AOS.refresh()})},!0)}}),GLightbox({selector:".glightbox"}),new Swiper(".events-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:3,spaceBetween:20}}}),GLightbox({selector:".gallery-lightbox"}),window.addEventListener("load",()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})})}()},100);