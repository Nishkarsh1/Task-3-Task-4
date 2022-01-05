const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.querySelector(".login");

const emailRegex = /^[a-zA-z0-9\.-_]+@[a-zA-z0-9\.-_]+\.[a-zA-Z]{2,5}$/;
const passwordRegex = /(@?[A-Z]+@?)+(@?[\w]+@?)+(@?[0-9]+@?)+@?/gm;
login.addEventListener("click", (e) => {
    e.preventDefault();

    if (email.value === "") return alert("please enter email");
    if (!emailRegex.test(email.value)) return alert("Please enter valid email");
    if (passwordRegex.test(password.value)) {
        if (password.value === "SmartServTest@123") {
            console.log(window.location);
            const dashboard = `${window.location.origin}/Task-3-Task-4/dashboard.html`;
            window.location = `${dashboard}`;
        }
    } else {
        return alert("Invalid password");
    }
});
