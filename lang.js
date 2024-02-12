document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the button with the class 'content' and not the ID 'bouncing'
    var otherButton = document.querySelector(".content button:not(#bouncing)");

    otherButton.addEventListener("click", function() {
        window.location.href = "https://www.picturehouses.com/"; // first url
    });

    // Event listener for the #nobounce button
    var nobounceButton = document.querySelector("#nobounce");

    nobounceButton.addEventListener("click", function() {
        // Dynamically change the URL based on the currently selected flag
        var currentFlag = document.querySelector(".footer img.selected").getAttribute("alt");
        var url;

        switch (currentFlag) {
            case "Brittish flag":
                url = "https://www.picturehouses.com/";
                break;
            case "Swedish flag":
                url = "https://www.filmstaden.se/";
                break;
                case "German flag":
                url = "https://www.cinestar.de/";
                break;
            case "French flag":
                url = "https://www.legrandrex.com/";
                break;
            case "Spanish flag":
                url = "https://www.cinesa.es//";
                break;
                case "Italian flag":
                url = "https://www.ucicinemas.it/";
                break;
                case "Ukrainian flag":
                url = "https://multiplex.ua/";
                break;
            case "Thai flag":
                url = "https://www.majorcineplex.com/home";
                break;
            case "Indonesian flag":
                url = "https://21cineplex.com/";
                break;
            // uk flag as else option
            default:
                url = "https://www.picturehouses.com/";
                break;
        }

        window.location.href = url; // Navigate to the dynamically determined URL
    });

    // Event listeners for the footer images
    const footerImages = document.querySelectorAll(".footer img");

    footerImages.forEach(img => {
        img.addEventListener("click", function() {
            // Remove the 'selected' class from all images
            footerImages.forEach(img => img.classList.remove("selected"));
            // Add the 'selected' class to the clicked image
            this.classList.add("selected");

            const imgAlt = this.getAttribute("alt");

            switch (imgAlt) {
                case "Brittish flag":
                    // Change background-image, title, h1, and button texts for British flag
                    document.body.style.backgroundImage = "url('bgimg/uk.webp')";
                    document.title = "Do you want to be my Valentine?";
                    document.querySelector("header h1").textContent = "Do you want to be my Valentine?";
                    document.querySelector("#nobounce").textContent = "Yes";
                    document.querySelector("#bouncing").textContent = "No";
                    break;
                case "Swedish flag":
                    // Change background-image, title, h1, and button texts for British flag
                    document.body.style.backgroundImage = "url('bgimg/schnazi.webp')";
                    document.title = "Vill du gå på Alla hjärtans dag-dejt med mig?";
                    document.querySelector("header h1").textContent = "Vill du gå på Alla hjärtans dag-dejt med mig?";
                    document.querySelector("#nobounce").textContent = "Ja";
                    document.querySelector("#bouncing").textContent = "Nej";
                    break;
                    case "German flag":
                    // Change background-image, title, h1, and button texts for British flag
                    document.body.style.backgroundImage = "url('bgimg/germany.webp')";
                    document.title = "Möchtest du mein Valentin sein?";
                    document.querySelector("header h1").textContent = "Möchtest du mein Valentin sein?";
                    document.querySelector("#nobounce").textContent = "Ja";
                    document.querySelector("#bouncing").textContent = "Nein";
                    break;
                case "French flag":
                    // Change background-image, title, h1, and button texts for French flag
                    document.body.style.backgroundImage = "url('bgimg/france.webp')";
                    document.title = "Veux-tu être ma Valentine?";
                    document.querySelector("header h1").textContent = "Veux-tu être ma Valentine?";
                    document.querySelector("#nobounce").textContent = "Ouais";
                    document.querySelector("#bouncing").textContent = "De clous";
                    break;
                case "Spanish flag":
                    // Change background-image, title, h1, and button texts for Spanish flag
                    document.body.style.backgroundImage = "url('bgimg/spain.webp')";
                    document.title = "Quieres ser mi San Valentin?";
                    document.querySelector("header h1").textContent = "Quieres ser mi San Valentin?";
                    document.querySelector("#nobounce").textContent = "Sí";
                    document.querySelector("#bouncing").textContent = "No";
                    break;
                    case "Italian flag":
                    // Change background-image, title, h1, and button texts for Spanish flag
                    document.body.style.backgroundImage = "url('bgimg/italy.webp')";
                    document.title = "Vuoi essere il mio valentino?";
                    document.querySelector("header h1").textContent = "Vuoi essere il mio valentino?";
                    document.querySelector("#nobounce").textContent = "Sì";
                    document.querySelector("#bouncing").textContent = "No";
                    break;
                    case "Ukrainian flag":
                    // Change background-image, title, h1, and button texts for Spanish flag
                    document.body.style.backgroundImage = "url('bgimg/ukraine.webp')";
                    document.title = "Чи хотіли б ви піти на побачення зі мною?";
                    document.querySelector("header h1").textContent = "Чи хотіли б ви піти на побачення зі мною?";
                    document.querySelector("#nobounce").textContent = "Так";
                    document.querySelector("#bouncing").textContent = "Немає";
                    break;
                case "Thai flag":
                    // Change background-image, title, h1, and button texts for Thai flag
                    document.body.style.backgroundImage = "url('bgimg/pussies.webp')";
                    document.title = "วาเลนไทน์นี้ เรามาเป็นแฟนกันมั้ย";
                    document.querySelector("header h1").textContent = "วาเลนไทน์นี้ เรามาเป็นแฟนกันมั้ย";
                    document.querySelector("#nobounce").textContent = "ใช่";
                    document.querySelector("#bouncing").textContent = "ไม่ใช่";
                    break;
                case "Indonesian flag":
                    // Change background-image, title, h1, and button texts for Indonesian flag
                    document.body.style.backgroundImage = "url('bgimg/indonesia.webp')";
                    document.title = "Maukah kau menjadi cintaku?";
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