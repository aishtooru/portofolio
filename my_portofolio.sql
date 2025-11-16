-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 15, 2025 at 07:19 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_portofolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `biodata`
--

CREATE TABLE `biodata` (
  `id_biodata` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `place_of_birth` varchar(100) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `biodata`
--

INSERT INTO `biodata` (`id_biodata`, `name`, `place_of_birth`, `birthdate`, `description`) VALUES
(1, 'Cindy Aulia Syahrizky', 'Balikpapan', '2005-09-13', 'Hi! I\'m Cindy. An undergraduate student \nwith a strong passion for backend development. \nI love building efficient systems and making things \nwork behind the scenes— though sometimes, I find \nmyself exploring the world of fullstack development too.');

-- --------------------------------------------------------

--
-- Table structure for table `certificate`
--

CREATE TABLE `certificate` (
  `id_certificate` int NOT NULL,
  `id_biodata` int DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `img_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `certificate`
--

INSERT INTO `certificate` (`id_certificate`, `id_biodata`, `title`, `img_path`) VALUES
(1, 1, 'Lecturer Assistant of Algebra Linear', '/images/certificates/sertifikat_asistensi.jpg'),
(2, 1, 'Presenter at SEMNASMU', '/images/certificates/sertifikat_semnasmu.jpg'),
(3, 1, 'Oracle Course', '/images/certificates/sertifikat_database.jpg'),
(4, 1, 'IDCamp Program', '/images/certificates/sertifikat_ai.jpg'),
(5, 1, 'Google Cloud Skill', '/images/certificates/1_gcloud.png'),
(6, 1, 'Google Cloud Skill', '/images/certificates/2_gcloud.png'),
(7, 1, 'Google Cloud Skill', '/images/certificates/3_gcloud.png'),
(8, 1, 'Google Cloud Skill', '/images/certificates/4_gcloud.png'),
(9, 1, 'Google Cloud Skill', '/images/certificates/5_gcloud.png'),
(10, 1, 'Google Cloud Skill', '/images/certificates/6_gcloud.png');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id_contact` int NOT NULL,
  `id_biodata` int DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id_contact`, `id_biodata`, `name`, `link`, `description`) VALUES
(1, 1, 'github', 'https://github.com/aishtooru', 'aishtooru'),
(2, 1, 'envelope', 'https://mail.google.com/mail/?view=cm&fs=1&to=ciaulsyhrz@gmail.com', 'ciaulsyhrz@gmail.com'),
(3, 1, 'linkedin', 'https://linkedin.com/in/cindy-aulia-syahrizky', 'Cindy Aulia Syahrizky'),
(4, 1, 'instagram', 'https://instagram.com/aucilia._', 'aucilia._');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id_education` int NOT NULL,
  `id_biodata` int DEFAULT NULL,
  `name` varchar(150) NOT NULL,
  `department` varchar(100) NOT NULL,
  `start_year` year NOT NULL,
  `end_year` year DEFAULT NULL,
  `score` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id_education`, `id_biodata`, `name`, `department`, `start_year`, `end_year`, `score`) VALUES
(1, 1, 'MAN 1 of Sukabumi City', 'Natural Science', 2020, 2023, '92.50'),
(2, 1, 'University of Muhammadiyah Sukabumi', 'Informatics Engineering', 2023, NULL, '3.90');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id_experience` int NOT NULL,
  `id_biodata` int NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `company_name` varchar(150) NOT NULL,
  `position` varchar(100) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `responsibilities` text,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id_experience`, `id_biodata`, `icon`, `company_name`, `position`, `start_date`, `end_date`, `responsibilities`, `description`) VALUES
(1, 1, '/images/logos/logo_kac_circle.png', 'Kawasan Agroeduwisata Cikundul', 'Fullstack Developer', '2024-06-06', '2024-12-31', 'Designed and slicing user interfaces (UI) based on project requirements into frontend components. Developed a secure admin login feature with input validation to prevent SQL Injection. Build a complete CRUD system for administrators to manage website content and data. Integrated frontend with backend systems to retrieve real-time data from temperature and ultrasonic sensors via database.', 'Collaborated with team to ensure the project meet the requirements. It\'s a contract-based project'),
(2, 1, '/images/logos/logo_ummi_circle.png', 'University of Muhammadiyah Sukabumi', 'Lecturer Assistant', '2025-04-24', NULL, 'Assisted the lecturer in preparing and delivering course materials. Guided 50+ first-year students through exercises during class sessions and provoded feedback on student assignments. Managed attendance records and assited with administrative tasks.', 'Taught several classes in the Informatics Engineering Department for Calculus and Linear Algebra.'),
(3, 1, '/images/logos/logo_ummi_circle.png', 'University of Muhammadiyah Sukabumi', 'Admin and Laboratory Staff Internship', '2025-10-18', NULL, 'Confirmed schedules and classroom usage for lecturers conducting non-regular classes. Ensured all electrical systems, lecturer PCs, and student PCs in the laboratory were turned on and checked before use. Assisted lecturers in resolving technical or equipment issues during laboratory sessions. Powered down all electrical equipment, air conditioning units, computers, and securely locked the laboratory after use.', 'Ensured the condition and mantain the laboratory components, as well as managed the classroom usage for non-regular class.');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id_project` int NOT NULL,
  `id_biodata` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `img_path` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id_project`, `id_biodata`, `title`, `img_path`, `description`, `link`) VALUES
(1, 1, 'Flashcard Learning App for Smarter Memorization called Cardify', '/images/web_porto_1.png', 'An Android app developed using Kotlin in Android Studio. It features deck and cards management, and interactive memory tests.', 'https://github.com/aishtooru/Cardify-Capstone-Project'),
(2, 1, 'Agrotourism Website — CodeIgniter 3', '/images/web_porto_2.png', 'A collaborative project built using CodeIgniter 3, designed to provide detailed information about the Agrotourism area and also integrating IoT-based environmental monitoring.', NULL),
(3, 1, 'Hotel Reservation Website — PHP Native', '/images/web_porto_3.png', 'A hotel reservation platform developed without frameworks, my role in this project as the project manager and backend developer.', 'https://github.com/aishtooru/1-Hotel-Reservation'),
(4, 1, 'Javascript Project: 1-Weather Web App', NULL, 'Implement the Weather API', NULL),
(5, 1, 'Javascript Project: 2-Quiz Web App', NULL, 'A lightweight quiz web application built to provide an engaging learning experience', 'https://github.com/aishtooru/2-Quiz-App'),
(6, 1, 'Stopwatch', NULL, 'A minimalist stopwatch web app equipped with start, pause, reset, and lap-time functionality.', 'https://github.com/aishtooru/3-Stopwatch'),
(7, 1, 'Javascript Project: 4-Calculator', NULL, 'A simple and intuitive calculator web app that performs basic arithmetic operations.', 'https://github.com/aishtooru/5-Calculator-JS');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id_role` int NOT NULL,
  `id_biodata` int DEFAULT NULL,
  `title` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id_role`, `id_biodata`, `title`) VALUES
(1, 1, 'Student'),
(2, 1, 'Backend Developer'),
(3, 1, 'Fullstack Developer');

-- --------------------------------------------------------

--
-- Table structure for table `tech_skill`
--

CREATE TABLE `tech_skill` (
  `id_tech_skill` int NOT NULL,
  `id_biodata` int DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `tech_skill`
--

INSERT INTO `tech_skill` (`id_tech_skill`, `id_biodata`, `name`, `img_path`, `type`) VALUES
(1, 1, 'Figma', '/images/logos/figma.png', 'UI/UX Design'),
(2, 1, 'Git', '/images/logos/git.svg', 'Project Manager'),
(3, 1, 'Javascript', '/images/logos/javascript.png', 'Programming Language'),
(4, 1, 'PHP', '/images/logos/php.svg', 'Programming Language'),
(5, 1, 'Python', '/images/logos/python.svg', 'Programming Language'),
(6, 1, 'Node JS', '/images/logos/node.png', 'Environment'),
(7, 1, 'React', '/images/logos/react.png', 'Library'),
(8, 1, 'GSAP', '/images/logos/gsap.png', 'Library'),
(9, 1, 'Three JS', '/images/logos/three.png', 'Library'),
(10, 1, 'Bootstrap', '/images/logos/bootstrap.png', 'Library and Framework'),
(11, 1, 'Tailwind CSS', '/images/logos/tailwind.svg', 'Library and Framework'),
(12, 1, 'Code Igniter', '/images/logos/codeigniter.png', 'Framework'),
(13, 1, 'Laravel', '/images/logos/laravel.png', 'Framework'),
(14, 1, 'Next JS', '/images/logos/nextjs2.png', 'Framework'),
(15, 1, 'MySQL', '/images/logos/mysql.png', 'Database'),
(16, 1, 'Oracle', '/images/logos/oracle.png', 'Database'),
(17, 1, 'Mongodb', '/images/logos/mongodb.png', 'Database');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `biodata`
--
ALTER TABLE `biodata`
  ADD PRIMARY KEY (`id_biodata`);

--
-- Indexes for table `certificate`
--
ALTER TABLE `certificate`
  ADD PRIMARY KEY (`id_certificate`),
  ADD KEY `id_biodata` (`id_biodata`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_contact`),
  ADD KEY `id_biodata` (`id_biodata`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id_education`),
  ADD KEY `id_biodata` (`id_biodata`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id_experience`),
  ADD KEY `id_biodata` (`id_biodata`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`),
  ADD KEY `id_biodata` (`id_biodata`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`),
  ADD KEY `id_biodata` (`id_biodata`);

--
-- Indexes for table `tech_skill`
--
ALTER TABLE `tech_skill`
  ADD PRIMARY KEY (`id_tech_skill`),
  ADD KEY `id_biodata` (`id_biodata`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `biodata`
--
ALTER TABLE `biodata`
  MODIFY `id_biodata` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `certificate`
--
ALTER TABLE `certificate`
  MODIFY `id_certificate` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id_contact` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id_education` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id_experience` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id_role` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tech_skill`
--
ALTER TABLE `tech_skill`
  MODIFY `id_tech_skill` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `certificate`
--
ALTER TABLE `certificate`
  ADD CONSTRAINT `certificate_ibfk_1` FOREIGN KEY (`id_biodata`) REFERENCES `biodata` (`id_biodata`);

--
-- Constraints for table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `contact_ibfk_1` FOREIGN KEY (`id_biodata`) REFERENCES `biodata` (`id_biodata`);

--
-- Constraints for table `education`
--
ALTER TABLE `education`
  ADD CONSTRAINT `education_ibfk_1` FOREIGN KEY (`id_biodata`) REFERENCES `biodata` (`id_biodata`);

--
-- Constraints for table `experience`
--
ALTER TABLE `experience`
  ADD CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`id_biodata`) REFERENCES `biodata` (`id_biodata`);

--
-- Constraints for table `project`
--
ALTER TABLE `project`
  ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`id_biodata`) REFERENCES `biodata` (`id_biodata`);

--
-- Constraints for table `role`
--
ALTER TABLE `role`
  ADD CONSTRAINT `role_ibfk_1` FOREIGN KEY (`id_biodata`) REFERENCES `biodata` (`id_biodata`);

--
-- Constraints for table `tech_skill`
--
ALTER TABLE `tech_skill`
  ADD CONSTRAINT `tech_skill_ibfk_1` FOREIGN KEY (`id_biodata`) REFERENCES `biodata` (`id_biodata`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
