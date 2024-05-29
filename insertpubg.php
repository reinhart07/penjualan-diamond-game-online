<?php
include 'connect.php';

// Mengambil nilai dari AJAX
$gameIdpubg = isset($_POST['gameIdpubg']) ? $_POST['gameIdpubg'] : '';
$gameServerpubg = isset($_POST['gameServerpubg']) ? $_POST['gameServerpubg'] : '';
$diamondAmountpubg = isset($_POST['diamondAmountpubg']) ? $_POST['diamondAmountpubg'] : '';
$hargaDiamondpubg = isset($_POST['hargaDiamondpubg']) ? $_POST['hargaDiamondpubg'] : '';

// Query untuk menyisipkan data ke dalam tabel ml
$sql = "INSERT INTO pubg (id_pubg, server_pubg, jumlah_pubg, harga_pubg, tanggal_pubg)
        VALUES ('$gameIdpubg', '$gameServerpubg', $diamondAmountpubg, $hargaDiamondpubg, CURRENT_DATE)";

if ($conn->query($sql) === TRUE) {
    echo "Data berhasil disimpan!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
