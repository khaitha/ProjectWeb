document.addEventListener("DOMContentLoaded", function () {
    // Check if there's a saved profile image in localStorage
    const savedProfileImage = localStorage.getItem("profileImage");
    if (savedProfileImage) {
        document.getElementById("profile-image").src = savedProfileImage;
        // Also update the user logo if available on the current page
        const userLogoOnPage = document.querySelector(".user-logo");
        if (userLogoOnPage) {
            userLogoOnPage.src = savedProfileImage;
        }
    }
});

function loadProfilePicture(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            const imageData = e.target.result;
            document.getElementById("profile-image").src = imageData;
            // Update the user logo if available on the current page
            const userLogoOnPage = document.querySelector(".user-logo");
            if (userLogoOnPage) {
                userLogoOnPage.src = imageData;
            }

            // Save image data to localStorage
            localStorage.setItem("profileImage", imageData);
        };

        reader.readAsDataURL(file);
    }
}
