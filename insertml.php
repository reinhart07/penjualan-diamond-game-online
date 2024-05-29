<?php
include 'connect.php';

// Mengambil nilai dari AJAX
$gameIdml = isset($_POST['gameIdml']) ? $_POST['gameIdml'] : '';
$gameServerml = isset($_POST['gameServerml']) ? $_POST['gameServerml'] : '';
$diamondAmountml = isset($_POST['diamondAmountml']) ? $_POST['diamondAmountml'] : '';
$hargaDiamondml = isset($_POST['hargaDiamondml']) ? $_POST['hargaDiamondml'] : '';

// Query untuk menyisipkan data ke dalam tabel ml
$sql = "INSERT INTO ml (id_ml, server_ml, jumlah_ml, harga_ml, tanggal_ml)
        VALUES ('$gameIdml', '$gameServerml', $diamondAmountml, $hargaDiamondml, CURRENT_DATE)";

if ($conn->query($sql) === TRUE) {
    echo "Data berhasil disimpan!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
