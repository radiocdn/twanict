    // Function to check if the user has accepted cookies
    function checkCookiesAccepted() {
        return document.cookie.includes("cookieAccepted=true");
    }

    // Function to show the cookies banner if not already accepted
    function showCookiesBanner() {
        if (!checkCookiesAccepted()) {
            document.querySelector("#cookiesPopup").style.display = "block";
        }
    }

    // Show the cookies banner if not accepted
    showCookiesBanner();

    // Function to set the cookie and hide the banner
    function acceptCookies() {
        document.querySelector("#cookiesPopup").style.display = "none";
        // Set a cookie with an expiration of 1 year
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "cookieAccepted=true;" + expires + ";path=/;Secure;SameSite=Strict";
    }

    // Set the current year dynamically
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Bescherming tegen afbeeldingsdiefstal | TwanICT
    document.addEventListener('DOMContentLoaded', function () {
        // Selecteer alle afbeeldingen op de pagina
        const afbeeldingen = document.querySelectorAll('img');

        // Voorkom het standaard contextmenu en toon een aangepopt bericht | TwanICT
        function toonAangepoptBericht(event) {
            event.preventDefault();
            alert('U mag geen afbeeldingen van onze website stelen zonder toestemming!');
        }

        // Voeg een eventlistener toe aan elke afbeelding om met rechts klikken om te gaan | TwanICT
        afbeeldingen.forEach((img) => {
            img.addEventListener('contextmenu', toonAangepoptBericht);

            // Voorkom slepen en kopiëren van afbeeldingen | TwanICT
            img.setAttribute('draggable', 'false');
            img.addEventListener('dragstart', function (e) {
                e.preventDefault();
            });
        });
    });
