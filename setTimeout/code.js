const $btnHide = document.getElementById("btn-hide");
const $btnWarning = document.getElementById("btn-warning");
const $modal = document.getElementById("modal");
const $overlay = document.getElementById("overlay");
const $page = document.getElementById("page");
const $btnClose = document.getElementById("btn-close");

$btnHide.addEventListener("click", hideModal);

$btnWarning.addEventListener("click",hideModal);

$overlay.addEventListener("click", (e) => 
{
    if (e.target == $overlay)
    {
        hideModal();
    }
});

$btnClose.addEventListener("click", hideModal);

$page.addEventListener("click", showModal);

function hideModal()
{
    $overlay.style.transition = "1s ease-in"
    $modal.style.animation = "salida .8s forwards";
    $overlay.classList.remove("active");
}

function showModal()
{
    $overlay.style.transition = ".3s ease"
    $overlay.classList.add("active");
    $modal.style.animation = "entrada .8s .3s forwards";
    setTimeout(hideModal, 5000) // El modal se esconde despues de 5 segundos
}