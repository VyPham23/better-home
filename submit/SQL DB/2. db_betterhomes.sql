-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2023 at 09:10 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_betterhomes`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_12_08_110709_create_tbl_sliders', 1),
(6, '2022_12_08_220746_create_tbl_news', 1),
(7, '2022_12_10_061258_create_tbl_project', 1),
(8, '2022_12_12_145813_create_tbl_apartment_infor', 1),
(9, '2022_12_12_161127_create_tbl_further', 1),
(10, '2022_12_13_094119_create_tbl_features', 1),
(11, '2022_12_13_180208_create_tbl_images_description', 1),
(12, '2022_12_23_220643_add_views_to_tbl_news', 1),
(13, '2022_12_23_221717_add_views_to_tbl_apartment_infor', 1),
(14, '2022_12_30_184329_add_project_image_columns_to_tbl_project_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_apartment_infor`
--

CREATE TABLE `tbl_apartment_infor` (
  `id_apartment` int(10) UNSIGNED NOT NULL,
  `id_project` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `purpose` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apartment_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `available_from` date DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `view_count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_apartment_infor`
--

INSERT INTO `tbl_apartment_infor` (`id_apartment`, `id_project`, `purpose`, `apartment_code`, `price`, `address`, `image`, `description`, `status`, `available_from`, `note`, `created_at`, `updated_at`, `view_count`) VALUES
(1, 1, 'for_rent', 'AB.12.CD', 10000000, '201B, Baker ST, London, England', 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Noticable', '2222-02-22', 'Note here', '2023-01-01 02:52:06', '2023-01-03 07:37:47', 459),
(2, 2, 'for_rent', 'XY.34.GH', 20000000, '201B, Paker St, London, England', 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Noticable', '2222-02-22', 'Note here', '2023-01-02 20:55:06', '2023-01-03 07:37:16', 14);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_features`
--

CREATE TABLE `tbl_features` (
  `id_feature` int(10) UNSIGNED NOT NULL,
  `id_apartment` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `feature_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_features`
--

INSERT INTO `tbl_features` (`id_feature`, `id_apartment`, `feature_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Internet', '2023-01-01 02:52:15', '2023-01-01 02:52:15'),
(2, 1, 'Balcony', '2023-01-01 02:52:19', '2023-01-01 02:52:19'),
(10, 1, 'Parking', '2023-01-01 05:31:28', '2023-01-01 05:31:28'),
(11, 1, 'Cable Television', '2023-01-01 05:31:30', '2023-01-01 05:31:30'),
(12, 1, 'Swimming Pool', '2023-01-01 05:31:32', '2023-01-01 05:31:32'),
(13, 1, 'General Power', '2023-01-01 05:31:34', '2023-01-01 05:31:34'),
(14, 1, 'Air Condition', '2023-01-01 05:31:37', '2023-01-01 05:31:37'),
(15, 1, 'Store 24/24', '2023-01-01 05:31:40', '2023-01-01 05:31:40'),
(16, 1, 'Telephone', '2023-01-01 05:31:42', '2023-01-01 05:31:42'),
(17, 1, 'Fully Furnished', '2023-01-01 05:31:44', '2023-01-01 05:31:44'),
(18, 1, 'Security 24/24', '2023-01-01 05:31:46', '2023-01-01 05:31:46'),
(19, 1, 'Water Heater', '2023-01-01 05:31:48', '2023-01-01 05:31:48'),
(20, 1, 'Garden', '2023-01-01 05:31:50', '2023-01-01 05:31:50'),
(21, 1, 'Gym', '2023-01-01 05:31:53', '2023-01-01 05:31:53'),
(22, 1, 'Refrigerator', '2023-01-01 05:58:06', '2023-01-01 05:58:06'),
(23, 2, 'Internet', '2023-01-02 20:55:15', '2023-01-02 20:55:15'),
(24, 2, 'Balcony', '2023-01-02 20:55:18', '2023-01-02 20:55:18'),
(25, 2, 'Swimming Pool', '2023-01-02 20:55:19', '2023-01-02 20:55:19'),
(26, 2, 'Air Condition', '2023-01-02 20:55:22', '2023-01-02 20:55:22'),
(27, 2, 'Fully Furnished', '2023-01-02 20:55:24', '2023-01-02 20:55:24'),
(28, 2, 'Store 24/24', '2023-01-02 20:55:27', '2023-01-02 20:55:27'),
(29, 2, 'Telephone', '2023-01-02 20:55:29', '2023-01-02 20:55:29'),
(30, 2, 'Water Heater', '2023-01-02 20:55:32', '2023-01-02 20:55:32'),
(31, 2, 'General Power', '2023-01-02 20:55:34', '2023-01-02 20:55:34'),
(32, 2, 'Security 24/24', '2023-01-02 20:55:36', '2023-01-02 20:55:36');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_further`
--

CREATE TABLE `tbl_further` (
  `id_further` int(10) UNSIGNED NOT NULL,
  `id_apartment` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `num_beds` int(11) DEFAULT NULL,
  `num_baths` int(11) DEFAULT NULL,
  `sqft` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year_built` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parking` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `heating` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lot` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_further`
--

INSERT INTO `tbl_further` (`id_further`, `id_apartment`, `num_beds`, `num_baths`, `sqft`, `type`, `year_built`, `parking`, `heating`, `lot`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 2, 300, 'Single Family', '2022', '2 Spaces', 'Air Condition', '1.36 Acress', '2023-01-01 02:55:20', '2023-01-01 02:55:20'),
(2, 2, 3, 2, 250, 'Single Family', '2019', '1 Space', 'Air Condition', '1.5 Acress', '2023-01-02 20:57:01', '2023-01-02 20:57:01');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_images_description`
--

CREATE TABLE `tbl_images_description` (
  `id_image_description` int(10) UNSIGNED NOT NULL,
  `id_apartment` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `image_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_images_description`
--

INSERT INTO `tbl_images_description` (`id_image_description`, `id_apartment`, `image_description`, `created_at`, `updated_at`) VALUES
(1, 1, 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '2023-01-01 02:53:03', '2023-01-01 02:53:03'),
(2, 1, 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '2023-01-01 02:53:56', '2023-01-01 02:53:56'),
(3, 1, 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '2023-01-01 02:54:14', '2023-01-01 02:54:14'),
(4, 1, 'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '2023-01-01 02:54:27', '2023-01-01 02:54:27'),
(5, 2, 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '2023-01-02 20:56:01', '2023-01-02 20:56:01'),
(6, 2, 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '2023-01-02 20:56:15', '2023-01-02 20:56:15'),
(7, 2, 'https://images.pexels.com/photos/144632/pexels-photo-144632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '2023-01-02 20:56:23', '2023-01-02 20:56:23');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_news`
--

CREATE TABLE `tbl_news` (
  `id_news` int(10) UNSIGNED NOT NULL,
  `title_news` varchar(70) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_news` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro_news` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_news` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_news` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `view_count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_news`
--

INSERT INTO `tbl_news` (`id_news`, `title_news`, `image_news`, `intro_news`, `description_news`, `author_news`, `created_at`, `updated_at`, `view_count`) VALUES
(1, 'Căn hộ (Apartment) là gì?', 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Căn hộ ngày nay không còn quá xa lạ với người dân sinh sống ở các thành phố lớn.', '<h2>Căn hộ (Apartment) là gì?</h2><p><strong>Căn hộ</strong> là từ đồng nghĩa của <strong>chung cư</strong>, hiểu ngắn gọn là nhiều cư dân cùng sống chung trong một tòa nhà và cùng sử dụng chung cơ sở hạ tầng, thang máy, hành lang, hồ bơi, bãi xe, sân thượng và cả công viên nội khu. Căn hộ trong tiếng anh là Apartment, để chỉ những nơi (nhà cao tầng) được xây dựng nhằm giải quyết vấn đề về nơi ở tại những thành phố dân cư đông đúc.</p><p><img src=\"https://tch123.cdn.static123.com/images/thumbs/900x600/fit//2021/07/26/blog-thuecanho123-can-ho-la-gi_1627284646.jpg\" alt=\"Căn hộ là gì?\"></p><p>Hiện nay tại nước ta thì người Miền Nam thường gọi là căn hộ, còn người Miền Bắc lại hay dùng từ chung cư. Ở Việt Nam, các dự án căn hộ chung cư được du nhập và đầu tư mạnh mẽ từ những năm 90 của thế kỷ XX.</p><p>Theo giám đốc Savills - bà Đỗ Thu Hằng định nghĩa rõ hơn về thuật ngữ trên. Theo bà căn hộ là nơi sinh sống của một cá nhân, gia đình hay nhóm người, tại nơi đây có thiết kế đầy đủ như một căn nhà cần có gồm phòng khách, nhà bếp, phòng ngủ và các công trình phụ. Các <strong>căn hộ (Apartment)</strong> được thiết kế, xây dựng bên trong tòa nhà cao tầng - tập trung nhiều nhóm người tạo thành một quần thể dân cư trên một diện tích nhất định.</p><h2>Phân biệt căn hộ (chung cư) và nhà tập thể</h2><p>Tại những năm 50 của thế kỷ trước, có thể thấy những nhà tập thể đã xuất hiện và tồn tại ở nước ta từ rất lâu. Có thể đến nay nhiều khách hàng đang nhầm lẫn giữa căn hộ chung cư và nhà tập thể vì xét về mặt hình thức, đây là 2 hình thức khá tương đồng với nhau. Tuy nhiên, có rất nhiều điểm khác nhau giữa căn hộ chung cư và nhà tập thể, cụ thể.</p><p>Những nhà tập thể hiện nay thuộc quyền sở hữu của nhà nước và được phân chia cho các tổ chức xã hội - chính trị dùng là nơi bố trí sinh hoạt cho những người trong ngành hoặc theo diện chính sách ở. Những nhà tập thể khác với những căn hộ chung cư, nơi được xây dựng theo hình thức khép kín được trang bị hệ thống công trình hạ tầng sử dụng chung. Điểm đặc trưng nhất của nhà tập thể là không được xây khép kín trong một diện tích nhất định, thường sẽ có không gian mở để các gia đình tận dụng.</p><p><img src=\"https://tch123.cdn.static123.com/images/thumbs/900x600/fit//2021/07/26/khac-biet-nha-tap-the-va-chung-cu-cao-tang_1627284652.jpg\" alt=\"Phân biệt nhà tập thể và căn hộ chung cư cao tầng\"></p><p>Tại Sài Gòn, nhiều khu nhà tập thể đã không còn ai ở hoặc sửa sang để kinh doanh</p><p>Có thể nói các căn nhà tập thể là tiền thân của chung cư ngày nay. Trước đây nơi này được xây dựng để giải quyết những chỗ ở cho những người có thu nhập thấp. Theo dòng phát triển của thời đại, những nhu cầu nâng cao về chất lượng đời sống cũng nhiều hơn. Nên các chung cư ngày nay được “nâng cấp” về các điểm như: view mặt sông, không gian sống xanh, tiện ích nội khu phong phú, môi trường sống thân thiện. Các dự án căn hộ chung cư ra đời mang theo dáng dấp xưa kết hợp với những kiến thức hiện đại tạo nên những căn chung cư phục vụ cho đại đa số cư dân hiện nay. Có thể nói, những dự án căn hộ chung cư thay thế những nhà tập thể và đang dần phổ biến hơn ở những thành phố tập trung nhiều nguồn nhân lực.</p><h2>Các loại hình căn hộ chung cư phổ biến ở Việt Nam</h2><p>Các hình thức căn hộ hiện nay có nhiều loại mang đến nhiều lựa chọn cho nhiều nhóm người với mức tài chính cũng như nhu cầu sử dụng khác nhau. Những loại hình căn hộ này có những đặc điểm và chức năng riêng biệt được phân ra thành các hình thức sau:</p><h3>Căn hộ thông thường (Basic Apartment)</h3><p>Đây được xem là loại hình căn hộ phổ biến nhất trên thị trường cho thuê căn hộ. Mang tiện nghi đầy đủ như một căn nhà phục vụ được các nhu cầu sinh hoạt cơ bản, các khách hàng có nhu cầu mua hoặc thuê căn hộ thường lựa chọn loại căn hộ này.</p><p><img src=\"https://tch123.cdn.static123.com/images/thumbs/900x600/fit//2021/07/26/can-ho-thong-thuong-thuecanho123_1627284651.jpg\" alt=\"Loại hình căn hộ thông thường\"></p><p>Loại hình căn hộ thông thường với các gian phòng ngủ, bếp, wc và phòng khách.</p><p>Cấu trúc cơ bản thường có phòng khách thông với nhà bếp mang đến không gian mở, tạo không gian kết nối với các thành viên trong gia đình khi sinh sống tại đây. Trong căn hộ này, thông thường sẽ thiết kế từ 1 - 2 phòng ngủ hoặc 3 phòng ngủ tùy thuộc vào diện tích của căn hộ. Vì vậy, loại căn hộ này thường mang đến nhiều sự lựa chọn về giá cho thuê dựa trên nhiều tiêu chí khác nhau.</p><p>Những căn hộ cơ bản này bạn có thể tìm thấy ở bất kỳ dự án căn hộ chung cư nào trên thị trường hiện nay với nhiều mức giá. Một số dự án căn hộ chung cư được nhiều khách hàng ở Hồ Chí Minh lựa chọn như căn hộ ở Topaz Elite hay Central Garden mang đến cho quý khách hàng không gian thoải mái cùng tiện ích vô cùng phong phú.</p>', 'Tran Dinh Duy', '2023-01-02 21:28:22', '2023-01-03 07:49:02', 10);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project`
--

CREATE TABLE `tbl_project` (
  `id_project` int(10) UNSIGNED NOT NULL,
  `project_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_status` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_project`
--

INSERT INTO `tbl_project` (`id_project`, `project_name`, `project_image`, `project_status`, `created_at`, `updated_at`) VALUES
(1, 'Vinhome Golden River', 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Hot', '2023-01-01 02:49:21', '2023-01-01 02:49:21'),
(2, 'Estela', 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Hot', '2023-01-02 20:53:50', '2023-01-02 20:53:50');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sliders`
--

CREATE TABLE `tbl_sliders` (
  `id_slider` int(10) UNSIGNED NOT NULL,
  `image_slider` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `note_slider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status_slider` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_sliders`
--

INSERT INTO `tbl_sliders` (`id_slider`, `image_slider`, `note_slider`, `status_slider`, `created_at`, `updated_at`) VALUES
(1, 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', NULL, 'showing', '2023-01-02 21:10:48', '2023-01-02 21:10:48'),
(2, 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', NULL, 'showing', '2023-01-02 21:11:04', '2023-01-02 21:11:04');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'duy map', 'duymap@gmail.com', NULL, '$2y$10$E8MVH03jHNwcz8fVprkAZuF14wnQtuQTdG6uB0y8bIX5cyua2Hqby', NULL, '2023-01-01 02:48:33', '2023-01-01 02:48:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `tbl_apartment_infor`
--
ALTER TABLE `tbl_apartment_infor`
  ADD PRIMARY KEY (`id_apartment`),
  ADD KEY `tbl_apartment_infor_id_project_foreign` (`id_project`),
  ADD KEY `tbl_apartment_infor_id_apartment_index` (`id_apartment`);

--
-- Indexes for table `tbl_features`
--
ALTER TABLE `tbl_features`
  ADD PRIMARY KEY (`id_feature`),
  ADD KEY `tbl_features_id_apartment_foreign` (`id_apartment`),
  ADD KEY `tbl_features_id_feature_index` (`id_feature`);

--
-- Indexes for table `tbl_further`
--
ALTER TABLE `tbl_further`
  ADD PRIMARY KEY (`id_further`),
  ADD KEY `tbl_further_id_apartment_foreign` (`id_apartment`),
  ADD KEY `tbl_further_id_further_index` (`id_further`);

--
-- Indexes for table `tbl_images_description`
--
ALTER TABLE `tbl_images_description`
  ADD PRIMARY KEY (`id_image_description`),
  ADD KEY `tbl_images_description_id_apartment_foreign` (`id_apartment`),
  ADD KEY `tbl_images_description_id_image_description_index` (`id_image_description`);

--
-- Indexes for table `tbl_news`
--
ALTER TABLE `tbl_news`
  ADD PRIMARY KEY (`id_news`),
  ADD KEY `tbl_news_id_news_index` (`id_news`);

--
-- Indexes for table `tbl_project`
--
ALTER TABLE `tbl_project`
  ADD PRIMARY KEY (`id_project`),
  ADD KEY `tbl_project_id_project_index` (`id_project`);

--
-- Indexes for table `tbl_sliders`
--
ALTER TABLE `tbl_sliders`
  ADD PRIMARY KEY (`id_slider`),
  ADD KEY `tbl_sliders_id_slider_index` (`id_slider`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_apartment_infor`
--
ALTER TABLE `tbl_apartment_infor`
  MODIFY `id_apartment` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_features`
--
ALTER TABLE `tbl_features`
  MODIFY `id_feature` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tbl_further`
--
ALTER TABLE `tbl_further`
  MODIFY `id_further` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_images_description`
--
ALTER TABLE `tbl_images_description`
  MODIFY `id_image_description` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_news`
--
ALTER TABLE `tbl_news`
  MODIFY `id_news` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_project`
--
ALTER TABLE `tbl_project`
  MODIFY `id_project` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_sliders`
--
ALTER TABLE `tbl_sliders`
  MODIFY `id_slider` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_apartment_infor`
--
ALTER TABLE `tbl_apartment_infor`
  ADD CONSTRAINT `tbl_apartment_infor_id_project_foreign` FOREIGN KEY (`id_project`) REFERENCES `tbl_project` (`id_project`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_features`
--
ALTER TABLE `tbl_features`
  ADD CONSTRAINT `tbl_features_id_apartment_foreign` FOREIGN KEY (`id_apartment`) REFERENCES `tbl_apartment_infor` (`id_apartment`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_further`
--
ALTER TABLE `tbl_further`
  ADD CONSTRAINT `tbl_further_id_apartment_foreign` FOREIGN KEY (`id_apartment`) REFERENCES `tbl_apartment_infor` (`id_apartment`) ON DELETE CASCADE;

--
-- Constraints for table `tbl_images_description`
--
ALTER TABLE `tbl_images_description`
  ADD CONSTRAINT `tbl_images_description_id_apartment_foreign` FOREIGN KEY (`id_apartment`) REFERENCES `tbl_apartment_infor` (`id_apartment`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
