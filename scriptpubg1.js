function beliDiamond() {
    // Mendapatkan nilai pilihan game dan jumlah diamond
    var gameIdpubg = document.getElementById("gameIdpubg").value;
    var gameServerpubg = document.getElementById("gameServerpubg").value;
    var diamondAmountpubg = document.getElementById("diamondAmountpubg").value;

    // Menambahkan validasi untuk ID game dan server game
    if (!gameIdpubg || !gameServerpubg) {
        alert("Mohon isi ID game dan server game.");
        return;
    }

    // Menetapkan harga berdasarkan game dan jumlah diamond
    var hargaDiamondpubg = 0;

    switch ("PUBG") {
        case "PUBG":
            switch (diamondAmountpubg) {
                case "263":
                    hargaDiamondpubg = 50000;
                    break;
                case "630":
                    hargaDiamondpubg = 115000;
                    break;
                case "1000":
                    hargaDiamondpubg = 185000;
                    break;
                case "1800":
                    hargaDiamondpubg = 325000;
                    break;
                case "2500":
                    hargaDiamondpubg = 445000;
                    break;
                default:
                    alert("Pilihan jumlah diamond tidak valid untuk PUBG.");
                    return;
            }
            break;

        default:
            alert("Pilihan game tidak valid.");
            return;
    }

    // Menggunakan AJAX untuk mengirim data ke server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "insertpubg.php", true);
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
    xhr.send("gameIdpubg=" + gameIdpubg + "&gameServerpubg=" + gameServerpubg + "&diamondAmountpubg=" + diamondAmountpubg + "&hargaDiamondpubg=" + hargaDiamondpubg);
}
