function beliDiamond() {
    // Mendapatkan nilai pilihan game dan jumlah diamond
    var selectedGame = document.getElementById("gameSelection").value;
    var gameId = document.getElementById("gameId").value;
    var gameServer = document.getElementById("gameServer").value;
    var diamondAmount = document.getElementById("diamondAmount").value;

    // Menambahkan validasi untuk ID game dan server game
    if (!gameId || !gameServer) {
        alert("Mohon isi ID game dan server game.");
        return;
    }

    // Menetapkan harga berdasarkan game dan jumlah diamond
    var hargaDiamond = 0;

    switch (selectedGame) {
        case "mobileLegends":
            switch (diamondAmount) {
                case "86":
                    hargaDiamond = 20000;
                    break;
                case "172":
                    hargaDiamond = 40000;
                    break;
                case "257":
                    hargaDiamond = 60000;
                    break;
                case "344":
                    hargaDiamond = 80000;
                    break;
                case "429":
                    hargaDiamond = 100000;
                    break;
                default:
                    alert("Pilihan jumlah diamond tidak valid untuk Mobile Legends.");
                    return;
            }
            break;

        case "freeFire":
            switch (diamondAmount) {
                case "70":
                    hargaDiamond = 10000;
                    break;
                case "100":
                    hargaDiamond = 13500;
                    break;
                case "140":
                    hargaDiamond = 18500;
                    break;
                case "355":
                    hargaDiamond = 47000;
                    break;
                case "510":
                    hargaDiamond = 66500;
                    break;
                default:
                    alert("Pilihan jumlah diamond tidak valid untuk Free Fire.");
                    return;
            }
            break;

        case "pubg":
            switch (diamondAmount) {
                case "263":
                    hargaDiamond = 50000;
                    break;
                case "525":
                    hargaDiamond = 93000;
                    break;
                case "631":
                    hargaDiamond = 108000;
                    break;
                case "788":
                    hargaDiamond = 139000;
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

    // Menampilkan informasi pembelian
    alert("Anda akan membeli " + diamondAmount + " diamond untuk " + selectedGame + " (ID Game: " + gameId + ", Server: " + gameServer + ") dengan harga Rp " + hargaDiamond);
}
