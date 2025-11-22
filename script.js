const toggleBtn = document.getElementById("lists-list");
const dropdown = document.getElementById("dropdown");
const hl = document.getElementById("hl");
const cl = document.getElementById("cl");
const hardest = document.getElementById("hardest");
const classic = document.getElementById("classic");

classic.classList.add("hide");

toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");

    if (dropdown.classList.contains("show")) {
        toggleBtn.textContent = "Lists ▲";
    } else {
        toggleBtn.textContent = "Lists ▼";
    }
});

cl.addEventListener("click", () =>{
    classic.classList.remove("hide");
    hardest.classList.add("hide");
});
hl.addEventListener("click", () =>{
    hardest.classList.remove("hide");
    classic.classList.add("hide");
});
