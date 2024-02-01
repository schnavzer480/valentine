document.addEventListener("DOMContentLoaded", function() {
    const footerImages = document.querySelectorAll(".footer img");

    footerImages.forEach(img => {
        img.addEventListener("click", function() {
            const imgAlt = this.getAttribute("alt");

            switch (imgAlt) {
                case "Brittish flag":
                    // Change background-image, title, h1, and button texts for British flag
                    document.body.style.backgroundImage = "url('bgimg/schnazi.webp')";
                    document.title = "British Flag";
                    document.querySelector("header h1").textContent = "Do you want to be my Valentine?";
                    document.querySelector("#nobounce").textContent = "Yes";
                    document.querySelector("#bouncing").textContent = "No";
                    break;
                case "French flag":
                    // Change background-image, title, h1, and button texts for French flag
                    document.body.style.backgroundImage = "url('bgimg/france.webp')";
                    document.title = "French Flag";
                    document.querySelector("header h1").textContent = "Veux-tu être ma Valentine?";
                    document.querySelector("#nobounce").textContent = "Ouais";
                    document.querySelector("#bouncing").textContent = "De clous";
                    break;
                case "Spanish flag":
                    // Change background-image, title, h1, and button texts for Spanish flag
                    document.body.style.backgroundImage = "url('bgimg/spain.webp')";
                    document.title = "Spanish Flag";
                    document.querySelector("header h1").textContent = "Quieres ser mi San Valentin?";
                    document.querySelector("#nobounce").textContent = "Sí";
                    document.querySelector("#bouncing").textContent = "No";
                    break;
                case "Thai flag":
                    // Change background-image, title, h1, and button texts for Thai flag
                    document.body.style.backgroundImage = "url('bgimg/pussies.webp')";
                    document.title = "Thai Flag";
                    document.querySelector("header h1").textContent = "วาเลนไทน์นี้ เรามาเป็นแฟนกันมั้ย";
                    document.querySelector("#nobounce").textContent = "ใช่";
                    document.querySelector("#bouncing").textContent = "ไม่ใช่";
                    break;
                case "Indonesian flag":
                    // Change background-image, title, h1, and button texts for Indonesian flag
                    document.body.style.backgroundImage = "url('bgimg/indonesia.webp')";
                    document.title = "Indonesian Flag";
                    document.querySelector("header h1").textContent = "Maukah kau menjadi cintaku?";
                    document.querySelector("#nobounce").textContent = "Ya";
                    document.querySelector("#bouncing").textContent = "Tidak";
                    break;
                // Add cases for other flags as needed
                default:
                    // Default case
                    break;
            }
        });
    });
});
