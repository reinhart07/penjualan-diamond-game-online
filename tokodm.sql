-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2024 at 02:35 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tokodm`
--

-- --------------------------------------------------------

--
-- Table structure for table `ff`
--

CREATE TABLE `ff` (
  `id_ff` varchar(30) NOT NULL,
  `server_ff` varchar(8) NOT NULL,
  `jumlah_ff` int(10) NOT NULL,
  `harga_ff` int(10) NOT NULL,
  `tanggal_ff` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ff`
--

INSERT INTO `ff` (`id_ff`, `server_ff`, `jumlah_ff`, `harga_ff`, `tanggal_ff`) VALUES
('1212', '2221233', 100, 15000, '2024-05-22'),
('838343432', '3432', 100, 15000, '2024-05-28');

-- --------------------------------------------------------

--
-- Table structure for table `ml`
--

CREATE TABLE `ml` (
  `id_ml` varchar(30) NOT NULL,
  `server_ml` varchar(8) NOT NULL,
  `jumlah_ml` int(10) NOT NULL,
  `harga_ml` int(10) NOT NULL,
  `tanggal_ml` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ml`
--

INSERT INTO `ml` (`id_ml`, `server_ml`, `jumlah_ml`, `harga_ml`, `tanggal_ml`) VALUES
('1212', '32321', 86, 20000, '2024-05-22'),
('21223', '23212', 257, 60000, '2024-05-22'),
('2424241', '12312312', 86, 20000, '2024-05-28'),
('373843', '3433', 86, 20000, '2024-05-28'),
('666567767', '4454', 86, 20000, '2024-05-28'),
('152013390', '2765', 429, 100000, '2024-05-28'),
('232434', '3432', 86, 20000, '2024-05-28');

-- --------------------------------------------------------

--
-- Table structure for table `pubg`
--

CREATE TABLE `pubg` (
  `id_pubg` varchar(30) NOT NULL,
  `server_pubg` varchar(10) NOT NULL,
  `jumlah_pubg` int(10) NOT NULL,
  `harga_pubg` int(10) NOT NULL,
  `tanggal_pubg` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pubg`
--

INSERT INTO `pubg` (`id_pubg`, `server_pubg`, `jumlah_pubg`, `harga_pubg`, `tanggal_pubg`) VALUES
('43434', '34343444', 630, 115000, '2024-05-22'),
('8282', '2828812', 263, 50000, '2024-05-22'),
('1212', '23233232', 263, 50000, '2024-05-22'),
('5454656', '5466', 263, 50000, '2024-05-28');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
