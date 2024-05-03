-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2024 at 01:35 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `is_admin` int(255) NOT NULL,
  `payment_id` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `company_name`, `is_admin`, `payment_id`) VALUES
(8, 'ahmed', 'aa@gmail.com', '$2a$12$HvhO8ij.F/ochQSvEuv5nOZmkrcsXCQ34lY1tZ3DbOLa2Xuuvp8I6', 'company1', 1, NULL),
(9, 'khaled', 'k@gmail.com', '$2a$12$0nKgCZNQjRfLnc.d2..NxO3OR441UbtBZpRTezgc6OAaVpvdmbGGW', '2', 1, NULL),
(10, 'ahmed', 'a@gmail.com', '$2a$12$.zlwNTFQTAXdI4MljFmNjOD/JbRragqqKlcP5RDDVLGlT2SpONaTy', 'real estate ease', 1, NULL),
(11, 'ahmed', 'aشa@gmail.com', '$2a$12$bD4Dn9ym8vyB8zkQwipo2uCOLznS.gD8GUNceTiFeTk9adfr1WWj2', 'companيy3', 1, NULL),
(12, 'ahmed', 'ahmed@example.com', '$2a$12$HDdNpL6JqVqXkjqLRqBT0OVBKETTlFdrQvULKuCpiwumYFPANYGGi', 'company6', 1, 'cus_Q1Wf33earZCx1i'),
(13, 'khaled', 'khaled@example.com', '$2a$12$0Z37.mHCTnY6IDKQws2FS.M9wzb/S1zL8bnId/vPtDKTwLmAxqj9G', 'company7', 1, NULL),
(14, 'maya', 'maya@email.com', '$2a$12$YoKpMrA5AkLfcwL1NHRpjOIzPEdYjt2/Wt/vEZYDlKb0nF3PtnFNO', 'company8', 1, 'cus_Q1hBS7onPzyQpb');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
