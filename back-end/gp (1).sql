-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2024 at 03:37 AM
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
(14, 'maya', 'maya@email.com', '$2a$12$YoKpMrA5AkLfcwL1NHRpjOIzPEdYjt2/Wt/vEZYDlKb0nF3PtnFNO', 'company8', 1, 'cus_Q1hBS7onPzyQpb'),
(15, 'zyad', 'zyad@gmail.com', '$2a$12$xxY9EnRPrXJRdcVBG/kkwOymajCxDPzTuRRplNjm3oT2/ZcGbuFf.', 'REease', 1, 'cus_Q7QejoiSQTYhkC'),
(16, 'ali mohamed', 'ali@gmail.com', '$2a$12$nBLapbd25FnC9dooF6FlWerpqPdcNxc2eEGeUjmUt/YH7DWfoKhKO', 'pheniox', 1, NULL),
(17, 'maya', 'maya@email.com', '$2a$12$jOpAqFH0vNtrpImm9j62U.bIewx7t/Mp3QA42iRtZJ49ckMiIDmmq', 'company8', 1, NULL),
(18, 'mohsen', 'm@gmail.com', '$2a$12$meZYQTwqi0kk7QrAmSUhyusfVCzfcBkbmdfg22D2uQQGMXO4KvzXO', 'google', 1, NULL),
(19, 'mahmoud mohamed', 'mahmoud@gmail.com', '$2a$12$RW1O2eVJmal/LefGgZ5aOOBFPkALIucKFeWBWt1xDIUy27VWYXOD.', 'company5555', 1, NULL),
(20, 'omar ahmed', 'omar@gmail.com', '$2a$12$bCBQvyHW0qANUtuFwZQJce.jX9WVg3DDBXX4PhGO3GFimbxeRVbFS', 'company99999999', 1, NULL),
(21, 'kaya', 'kaya@email.com', '$2a$12$2vMyGZNsW04uBnEHweOD4.62NbSmfLNFLbPX/K7ipbH2CnXxfD3K.', 'company555', 1, NULL),
(22, 'ayman', 'ayman@gmail.com', '$2a$12$RtDh5mRAuNqCKqkQmL67tukQkTBaegKbRj2a.tr1xsvANNkLNhavy', 'company55555', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `attendance_in`
--

CREATE TABLE `attendance_in` (
  `id` int(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `time` text NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `attendance_out`
--

CREATE TABLE `attendance_out` (
  `id` int(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `time` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `id` int(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `leave_type` varchar(255) DEFAULT NULL,
  `start_date` text DEFAULT NULL,
  `end_date` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leaves`
--

INSERT INTO `leaves` (`id`, `name`, `leave_type`, `start_date`, `end_date`, `description`, `status`) VALUES
(1, 'mahdy', 'medical leave', '1-6-2024', '3-6-2024', 'iam very sick and i cant come to work', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `re`
--

CREATE TABLE `re` (
  `id` int(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `size` int(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `assigned_to` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `re`
--

INSERT INTO `re` (`id`, `owner`, `type`, `address`, `size`, `status`, `price`, `assigned_to`, `company_name`) VALUES
(2, 'khaled', 'appartment', 'giza', 200, 'for sale', 150000, 'khaled', 'REease'),
(3, 'zyad', 'appartment', 'giza', 150, 'for sale', 150000, 'mohamed', 'REease');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(255) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `position` varchar(200) NOT NULL,
  `salary` int(200) NOT NULL,
  `is_admin` int(200) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `company_name`, `position`, `salary`, `is_admin`) VALUES
(3, 'mohamed', 'mohamed@gmail.com', 'Aa1234567', 'REease', 'backend developer', 15000, 0),
(7, 'mahdy', 'mahdy@gmail.com', 'Aa1234567', 'REease', 'frontend developer', 15000, 0),
(9, 'zien', 'zien@gmail.com', 'Aa1234567', 'REease', 'frontend developer', 15000, 0),
(10, 'ahmed', 'ahmed11@gmail.com', 'Aa1234567', 'REease', 'frontend developer', 15000, 0),
(11, 'maya', 'maya11@gmailcom', 'Aa1234567', 'REease', 'frontend developer', 20000, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance_in`
--
ALTER TABLE `attendance_in`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance_out`
--
ALTER TABLE `attendance_out`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `re`
--
ALTER TABLE `re`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `attendance_in`
--
ALTER TABLE `attendance_in`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `attendance_out`
--
ALTER TABLE `attendance_out`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `re`
--
ALTER TABLE `re`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
