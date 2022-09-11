function Redirect() {
    const params = new URLSearchParams(location.search);
    const userId = 903777579352326205;
    // Copy user to clipboard
    let TextArea = document.createElement("TextArea");
    TextArea.value = document.getElementById("UserId").textContent + document.getElementById("NumberId").textContent;
    document.body.appendChild(TextArea);
    TextArea.select();
    TextArea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(TextArea.value);
    TextArea.remove();
    // Redirect to discord
    if (isMobileDevice()) {
        window.location.href = "https://discord.com/users/" + userId;
    } else {
        window.location.href = "discord://-/users/" + userId;
        setTimeout(() => {
            if (document.hasFocus()) {
                window.location.href = 'https://discord.com/users/' + userId;
            }
        }, 25)
    }
}

async function getData() {
    const params = new URLSearchParams(location.search);
    const userId = 903777579352326205;
    // Get user data from no if userId is valid
    if (!isNaN(userId) && parseInt(userId)) {
        document.getElementById("DiscTitle").innerHTML += " · " + "L3m0n Cao";
        document.getElementById("UserId").innerHTML = "L3m0n Cao";
        document.getElementById("NumberId").innerHTML = "#" + "0001";
        document.getElementById("AccessBtn").innerHTML = "Add " + "L3m0n Cao";
        document.getElementById("UrlImage").style = "background-image: url(https://raw.githubusercontent.com/L3m0n-Cao/discordid/master/dist/5313bdfafe03354138c96079aeba0db0.webp);";
    } else { //i hate js now
        document.getElementById("Square").innerHTML =
            "<p>amongus</p>";
    }
}

function isMobileDevice() {
    // Check in client hints if device is mobile
    if (window.navigator.userAgentData) {
        return window.navigator.userAgentData.mobile;
    }
    // Fallback for devices that don't support client hints
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
