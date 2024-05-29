function beliDiamond() {
    // Mendapatkan nilai pilihan game dan jumlah diamond
    var gameIdff = document.getElementById("gameIdff").value;
    var gameServerff = document.getElementById("gameServerff").value;
    var diamondAmountff = document.getElementById("diamondAmountff").value;

    // Menambahkan validasi untuk ID game dan server game
    if (!gameIdff || !gameServerff) {
        alert("Mohon isi ID game dan server game.");
        return;
    }

    // Menetapkan harga berdasarkan game dan jumlah diamond
    var hargaDiamondff = 0;

    switch ("FreeFire") {
        case "FreeFire":
            switch (diamondAmountff) {
                case "100":
                    hargaDiamondff = 15000;
                    break;
                case "210":
                    hargaDiamondff = 29000;
                    break;
                case "425":
                    hargaDiamondff = 57500;
                    break;
                case "790":
                    hargaDiamondff = 106000;
                    break;
                case "1000":
                    hargaDiamondff = 135000;
                    break;
                default:
                    alert("Pilihan jumlah diamond tidak valid untuk Free Fire.");
                    return;
            }
            break;

        default:
            alert("Pilihan game tidak valid.");
            return;
    }

    // Menggunakan AJAX untuk mengirim data ke server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "insertff.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onerror = function() {
        alert("Terjadi kesalahan saat mengirim permintaan ke server.");
    };
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Tindakan yang perlu dilakukan setelah berhasil
            alert(xhr.responseText);
        }
    };
    xhr.send("gameIdff=" + gameIdff + "&gameServerff=" + gameServerff + "&diamondAmountff=" + diamondAmountff + "&hargaDiamondff=" + hargaDiamondff);
}
