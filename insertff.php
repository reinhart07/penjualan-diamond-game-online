<?php
include 'connect.php';

// Mengambil nilai dari AJAX
$gameIdff = isset($_POST['gameIdff']) ? $_POST['gameIdff'] : '';
$gameServerff = isset($_POST['gameServerff']) ? $_POST['gameServerff'] : '';
$diamondAmountff = isset($_POST['diamondAmountff']) ? $_POST['diamondAmountff'] : '';
$hargaDiamondff = isset($_POST['hargaDiamondff']) ? $_POST['hargaDiamondff'] : '';

// Query untuk menyisipkan data ke dalam tabel ml
$sql = "INSERT INTO ff (id_ff, server_ff, jumlah_ff, harga_ff, tanggal_ff)
        VALUES ('$gameIdff', '$gameServerff', $diamondAmountff, $hargaDiamondff, CURRENT_DATE)";

if ($conn->query($sql) === TRUE) {
    echo "Data berhasil disimpan!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
