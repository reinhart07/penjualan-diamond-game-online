function beliDiamond() {
    // Mendapatkan nilai pilihan game dan jumlah diamond
    var gameIdml = document.getElementById("gameIdml").value;
    var gameServerml = document.getElementById("gameServerml").value;
    var diamondAmountml = document.getElementById("diamondAmountml").value;

    // Menambahkan validasi untuk ID game dan server game
    if (!gameIdml || !gameServerml) {
        alert("Mohon isi ID game dan server game.");
        return;
    }

    // Menetapkan harga berdasarkan game dan jumlah diamond
    var hargaDiamondml = 0;

    switch ("mobileLegends") {
        case "mobileLegends":
            switch (diamondAmountml) {
                case "86":
                    hargaDiamondml = 20000;
                    break;
                case "172":
                    hargaDiamondml = 40000;
                    break;
                case "257":
                    hargaDiamondml = 60000;
                    break;
                case "344":
                    hargaDiamondml = 80000;
                    break;
                case "429":
                    hargaDiamondml = 100000;
                    break;
                default:
                    alert("Pilihan jumlah diamond tidak valid untuk Mobile Legends.");
                    return;
            }
            break;

        default:
            alert("Pilihan game tidak valid.");
            return;
    }

    // Menggunakan AJAX untuk mengirim data ke server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "insertml.php", true);
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
    xhr.send("gameIdml=" + gameIdml + "&gameServerml=" + gameServerml + "&diamondAmountml=" + diamondAmountml + "&hargaDiamondml=" + hargaDiamondml);
}