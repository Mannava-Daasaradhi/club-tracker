document.getElementById("loginButton").addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            // Change the entire screen to black
            document.body.style.backgroundColor = "black";  // Set the background to black

            // Show the loading screen
            document.getElementById("loadingScreen").style.display = "flex";

            let hackingText = document.getElementById("hackingText");
            hackingText.textContent = "";  // Clear any previous text

            let textLines = [
                "Initializing... Please Wait.",
                "Bypassing security protocols...",
                "Decrypting data...",
                "Accessing server...",
                "Loading confidential files...",
                "Breaching firewall...",
                "Root access granted.",
                "Connection established.",
                "Redirecting..."
            ];

            let i = 0;
            let speed = 7;

            function typeEffect() {
                if (i < textLines.length) {
                    let currentLine = textLines[i];
                    let charIndex = 0;

                    function typeLine() {
                        if (charIndex < currentLine.length) {
                            hackingText.textContent += currentLine.charAt(charIndex);
                            charIndex++;
                            setTimeout(typeLine, speed);
                        } else {
                            hackingText.textContent += '\n';
                            i++;
                            setTimeout(typeEffect, 0.001);  // Delay before typing the next line
                        }
                    }

                    typeLine();
                } else {
                    // Redirect after the hacking effect completes
                    setTimeout(function() {
                        window.location.href = "club-progress-tracker/Dashboard.html";  // Replace with your actual page
                    }, 1000);  // Wait for a moment before redirecting
                }
            }

            typeEffect();
        } else {
            showImposterPopUp();  // Show pop-up for wrong credentials
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});

// Function to show "Imposter Sus Behavior" pop-up
function showImposterPopUp() {
    const popup = document.createElement("div");
    popup.id = "imposterPopup";
    popup.innerHTML = `
        <div class="popup-content">
            <h1>Wrong Code<br>The System’s Watching.</h1>
            <button id="closePopup">OK</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Close button functionality
    document.getElementById("closePopup").addEventListener("click", () => {
        document.body.removeChild(popup);
    });
}
