-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-31 17:04:51
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `jilu`
--

-- --------------------------------------------------------

--
-- 表的结构 `goodsdetails`
--

CREATE TABLE IF NOT EXISTS `goodsdetails` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `oprice` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `freight` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `surplus` varchar(255) CHARACTER SET utf8 DEFAULT '0',
  `choice` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `banner` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `class` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `content` varchar(3000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `goodsdetails`
--

INSERT INTO `goodsdetails` (`id`, `name`, `price`, `oprice`, `freight`, `surplus`, `choice`, `banner`, `class`, `content`) VALUES
(1, '【包邮】2-12岁儿童圣经点读笔（荣耀版）有声圣经8g升级版包邮', '590.00', '690', '免运费', '252', '', '/img/gjimg/book1.png /img/gjimg/book2.png /img/gjimg/book3.png', '', '<p><img src="/img/gjimg/con1.jpg"></p>\n<p>全国包邮（新疆、西藏发顺丰到付）</p><br/>\n<p>2017升级版智趣儿童圣经点读笔（8g内存）</p><br/>\n<p>谁需要这款产品？</p><br/>\n<p>0-12岁不懂英语，又想给孩子打好英语基础的父母</p><br/><p><img src="/img/gjimg/con1(2).jpg"></p><p><img src="/img/gjimg/con1(3).jpg"></p><p><img src="/img/gjimg/con1(4).jpg"></p><p><img src="/img/gjimg/con1(5).jpg"></p><p><img src="/img/gjimg/footer.jpg"></p>\n'),
(2, '【包邮】听妈妈讲那圣经里的故事：圣经史话修订版（圣经故事）', '98.00', '', '0.00-25.00', '63', '版本', '/img/gjimg/book1.png /img/gjimg/book2.png /img/gjimg/book3.png', '(荷)约翰·冯罗敦希尔', '<p><img src="/img/gjimg/con1.jpg"></p>\n<p>全国包邮（新疆、西藏发顺丰到付）</p><br/>\n<p>2017升级版智趣儿童圣经点读笔（8g内存）</p><br/>\n<p>谁需要这款产品？</p><br/>\n<p>0-12岁不懂英语，又想给孩子打好英语基础的父母</p><br/><p><img src="/img/gjimg/con1(2).jpg"></p><p><img src="/img/gjimg/con1(3).jpg"></p><p><img src="/img/gjimg/con1(4).jpg"></p><p><img src="/img/gjimg/con1(5).jpg"></p><p><img src="/img/gjimg/footer.jpg"></p>\n'),
(3, '时尚拉丝十字架戒指情侣对戒男女款灵语银戒指', '139.00', '', '5.00-30.00', '759', '尺寸', '/img/gjimg/book1.png /img/gjimg/book2.png /img/gjimg/book3.png', '男款24# 男款22# 男款20# 男款18# 女款16# 女款14# 女款12# 女款10#', '<p><img src="/img/gjimg/con1.jpg"></p>\n<p>全国包邮（新疆、西藏发顺丰到付）</p><br/>\n<p>2017升级版智趣儿童圣经点读笔（8g内存）</p><br/>\n<p>谁需要这款产品？</p><br/>\n<p>0-12岁不懂英语，又想给孩子打好英语基础的父母</p><br/><p><img src="/img/gjimg/con1(2).jpg"></p><p><img src="/img/gjimg/con1(3).jpg"></p><p><img src="/img/gjimg/con1(4).jpg"></p><p><img src="/img/gjimg/con1(5).jpg"></p><p><img src="/img/gjimg/footer.jpg"></p>\n');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
