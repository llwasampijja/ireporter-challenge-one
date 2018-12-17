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


// #########################################
function openViewReportsModal() {
    // Get the modal
    var modal = document.getElementById('view-report-details-modal');

    // Get the buttons that open the modal
    var btn_ = document.getElementsByClassName("view-report-btn");

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('view-report-btn')) {
            modal.style.display = "block";
        }
    }, false);

    // Get the <span> element which closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Close modal whe a user clicks the "X" button
    span.onclick = function () {
        modal.style.display = "none";
    }

    //Close modal when a user clicks anywhere outside it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// ############################################