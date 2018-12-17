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

    // Close modal when a user clicks the "X" button
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

function openEditReportsModal() {
    // Get the modal
    var modal = document.getElementById('edit-report-details-modal');

    // Get the buttons that open the modal
    // var btn_ = document.getElementsByClassName("edit-report-btn");

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-report-btn')) {
            modal.style.display = "block";
        }
    }, false);

    // Get the <span> element which closes the modal
    var span = document.getElementsByClassName("close")[1];
    var cancel_edit_report = document.getElementById("cancel-edit-report")
    var save_edit_report = document.getElementById("save-edit-report")

    // Close modal when a user clicks the "X" button
    span.onclick = function () {
        modal.style.display = "none";
    }

    cancel_edit_report.onclick = function () {
        modal.style.display = "none";
    }

    save_edit_report.onclick = function () {
        modal.style.display = "none";
    }

    //Close modal when a user clicks anywhere outside it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// function getUserGeoCordinates() {
    // var x = document.getElementById("geocoordinates-field");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by your current browser.";
        }
    }

    function showPosition(position) {
        // x.innerHTML = "Latitude: " + position.coords.latitude +
        //     "<br>Longitude: " + position.coords.longitude;

            document.getElementById('geocoordinates-field').innerHTML = position.coords.latitude + "," + position.coords.longitude;
    }
// }


function runAllJavaScript() {
    openViewReportsModal();
    openEditReportsModal();
} 