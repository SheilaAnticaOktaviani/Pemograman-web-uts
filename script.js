// LOGIN FUNCTION WAJIB ADA
function loginUser() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    // contoh akun yang diizinkan login
    if (email === "admin@gmail.com" && pass === "12345") {
        window.location.href = "dashboard.html"; // ke halaman berikutnya
    } else {
        alert("Email atau password salah!");
    }
}

// MODAL FUNCTIONS
function showModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
