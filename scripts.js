const dots = document.querySelector('.dots');
const circleTl = new TimelineMax({ repeat: -1 });

function dotsLoading() {
    if (dots.innerHTML !== '...') {
        dots.innerHTML += '.'
    } else {
        dots.innerHTML = '.'
    }

    console.log(dots.innerHtml);
}

circleTl.fromTo(".circle", .15, { drawSVG: "0%" }, { drawSVG: "100%", immediateRender: false, ease: Power1.easeInOut, rotation: 360, transformOrigin: "50% 50%", stroke: "#29B6F6" })
    .call(dotsLoading)
    .fromTo(".circle", .3, { drawSVG: "100%" }, { drawSVG: "0%", immediateRender: false, ease: Power1.easeInOut, rotation: -720, transformOrigin: "50% 50%", stroke: "#FF4081" })
    .call(dotsLoading)
    .fromTo(".circle", .3, { drawSVG: "0%" }, { drawSVG: "100%", immediateRender: false, ease: Power1.easeInOut, rotation: 360, transformOrigin: "50% 50%", stroke: "#40ffbe" })
    .call(dotsLoading)
    .fromTo(".circle", .3, { drawSVG: "100%" }, { drawSVG: "0%", immediateRender: false, ease: Power1.easeInOut, rotation: -720, transformOrigin: "50% 50%", stroke: "#81ff40" })
    .call(dotsLoading)
    .fromTo(".circle", .15, { drawSVG: "0%" }, { drawSVG: "100%", immediateRender: false, ease: Power1.easeInOut, rotation: 360, transformOrigin: "50% 50%", stroke: "#29B6F6" })
    .call(dotsLoading)



