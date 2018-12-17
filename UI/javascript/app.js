function toggleMobileMenuVisibility() {
    var menu_ = document.getElementById("mobile-menu");
    if (menu_.style.display === "none") {
        menu_.style.display = "block";
    } else {
        menu_.style.display = "none";
    }
}

function toggleAccountMenuVisibility() {
    var menu_ = document.getElementById("account-menu");
    if (menu_.style.display === "none") {
        menu_.style.display = "block";
    } else {
        menu_.style.display = "none";
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

function confirmDelete() {
    var deleteMessage = confirm("Do you really want to delete this Item?");
    if (deleteMessage == true) {
        window.location.replace("my_reports.html");
        return true;
    }
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

function createNewReportsModal() {
    // Get the modal
    var modal = document.getElementById('create-new-report-modal');

    var create_new_report = document.getElementById('new-report-btn')

    create_new_report.addEventListener ('click', function (event) {
        modal.style.display = "block"
    });

    // document.addEventListener('click', function (event) {
    //     if (event.target.classList.contains('edit-report-btn')) {
    //         modal.style.display = "block";
    //     }
    // }, false);

    // Get the <span> element which closes the modal
    var span = document.getElementsByClassName("close")[2];
    var cancel_create_report = document.getElementById("cancel-create-report")
    var save_create_report = document.getElementById("save-create-report")

    // Close modal when a user clicks the "X" button
    span.onclick = function () {
        modal.style.display = "none";
    }

    cancel_create_report.onclick = function () {
        modal.style.display = "none";
    }

    save_create_report.onclick = function () {
        modal.style.display = "none";
    }

    //Close modal when a user clicks anywhere outside it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by your current browser.";
    }
}

function showPosition(position) {

    document.getElementById('geocoordinates-field').innerHTML = position.coords.latitude + "," + position.coords.longitude;
}


function runAllJavaScript() {
    openViewReportsModal();
    openEditReportsModal();
    createNewReportsModal();
} 