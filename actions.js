function bereken () {
    const a = parseFloat(document.getElementById("input-a").value) || 0;
    const b = parseFloat(document.getElementById("input-b").value) || 0;
    let c = parseFloat(document.getElementById("input-c").value) || 0;

    if (c >= a) {
        c = '';
        document.getElementById("input-c").value = c;
        alert("Incomplete container kan niet groter of gelijk zijn aan een volle container!");
    }

    if (c < 0) {
        alert("Waarden kunnen niet kleiner zijn dan 0")
        c = 0;
        document.getElementById('input-c').value = c;
    }

    const resultaat = (a * b) + c;

    document.getElementById("resultaat").textContent = resultaat;
}

function refreshPage() {
    location.reload();
}



    document.getElementById("input-a").addEventListener("input", bereken);
    document.getElementById("input-b").addEventListener("input", bereken);
    document.getElementById("input-c").addEventListener("input", bereken);

