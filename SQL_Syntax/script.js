window.onscroll = function() {makeTocSticky()};

function makeTocSticky() {
    var toc = document.getElementById("toc");
    var offsetTop = toc.offsetTop;

    if (window.pageYOffset > offsetTop) {
        toc.classList.add("sticky");
    } else {
        toc.classList.remove("sticky");
    }
}
