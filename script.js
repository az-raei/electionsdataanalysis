document.addEventListener("DOMContentLoaded", function () {
    function adjustLayout() {
        let charts = document.querySelectorAll(".chart img");
        
        if (window.innerWidth <= 768) {
            document.querySelector(".chart-grid").style.flexDirection = "column";
            charts.forEach(img => {
                img.style.width = "100%";
                img.style.maxWidth = "none";
            });
        } else {
            document.querySelector(".chart-grid").style.flexDirection = "row";
            charts.forEach(img => {
                img.style.width = "90%";
                img.style.maxWidth = "600px";
            });
        }
    }

    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});
