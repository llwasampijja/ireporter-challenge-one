function toggleMobileMenuVisibility() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleAccountMenuVisibility() {
    var x = document.getElementById("account-menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openSignupPage() {
    location.href = 'signup.html'
}

function openSigninPage() {
    location.href = 'login.html'
}

function openHomePage() {
    location.href = 'my_reports.html'
}