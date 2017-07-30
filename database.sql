
DROP TABLE IF EXISTS wtfnav;
CREATE TABLE wtfnav(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR (255),
  cid VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO wtfnav (title, cid) VALUES
('少儿读物','1'),
('灵命成长','1'),
('婚姻家庭','1'),
('基督教礼品-戒指','2'),
('基督教礼品-十字架','2'),
('传记见证','3'),
('亲子教育','3'),
('婚前预备','3'),
('职场生活','4'),
('福音小说','4'),
('注释解经类','4')


DROP TABLE IF EXISTS allbook;
CREATE TABLE allbook(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR (255),
  price VARCHAR (255),
  cid VARCHAR (255),
  title VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO allbook (img,price,cid,title) VALUES
('../../img/wtfbook1.png','590.00','1','【包邮】0-12岁儿童圣经点读笔（荣耀版）有声圣经8g升级版包邮'),
('../../img/wtfbook2.png','98.00','1','【包邮】听妈妈讲那圣经里的故事:圣经史话修订版（圣经故事）'),
('../../img/wtfbook3.png','45.00','1','【包邮】送给孩子们最棒的礼物:你很特别经典故事（3本套装）（赠送2017年读经伴侣）'),
('../../img/wtfbook4.png','151.20','1','【限时8折+包邮】送给4-10岁孩子最好的礼物:《塔木德故事绘本》犹太人的教育“圣...'),
('../../img/wtfbook5.png','248.00','1','【包邮】生命的果子（全八册）:英汉对照 专门为主日学设计的一套书，3-10岁孩子学信...'),
('../../img/wtfbook6.png','60.00','1','【包邮】大卫的故事（全四册）学汉字，学拼音，学英语，学信仰的好书，适合3-6岁的孩子...'),
('../../img/wtfbook21.png','125.00','2','【包邮】圣经百科辞典: 图文版 精装 词典 神学生牧者工具书基督教'),
('../../img/wtfbook22.png','26.00','2','标杆人生'),
('../../img/wtfbook23.png','36.00','2','【新书】《智慧的开端》: 《渴慕神》的作者陶恕巅峰之作，影响全球数代'),
('../../img/wtfbook24.png','38.00','2','【新书】《荣耀救赎—以赛亚书讲道文集》:》《基督教会史》作者伊少华...'),
('../../img/wtfbook25.png','25.00','2','一掷千金的上帝—生命陶造系列'),
('../../img/wtfbook26.png','29.90','2','谦卑:穆安德烈灵修经典（附《内在生活》）'),
('../../img/wtfbook31.png','38.00','3','【包邮】《婚姻的意义》—值得每个基督徒家庭拥有的一本书'),
('../../img/wtfbook32.png','25.00','3','【女性必备书籍】做个真女人'),
('../../img/wtfbook33.png','27.00','3','男人需要尊重，女人需要爱'),
('../../img/wtfbook34.png','29.00','3','寻找荣耀的帮助者'),
('../../img/wtfbook35.png','29.80','3','丈夫，天生需要帮助者'),
('../../img/wtfbook36.png','23.00','3','《家庭之约》'),
('../../img/wtfbook41.png','139.00','4','时尚拉丝十字架戒指情侣对戒男女款灵语银戒指'),
('../../img/wtfbook42.png','145.00','4','灵语纯银饰品合一戒指男女情侣对戒刻字原创意指环基督教徒礼'),
('../../img/wtfbook43.png','145.00','4','灵语银S925纯银戒指男女情侣对戒基督教 徒结婚礼品饰品刻字'),
('../../img/wtfbook44.png','79.00','4','灵语银十字架复古银戒指女士食指纯银耶稣指环吊坠基督教用礼品'),
('../../img/wtfbook45.png','79.00','4','灵语925纯银戒指女小指银尾戒女指环复古首饰定做基督教礼品'),
('../../img/wtfbook46.png','120.00','4','纯银男士十字架情侣戒指吊坠耶稣戒指定做刻字搭项链基督教'),
('../../img/wtfbook51.png','119.00','5','灵语银925基督教饰品十字架项链男女情侣纯银吊坠基督徒礼品'),
('../../img/wtfbook52.png','59.00','5','简洁十字架迷你时尚个性百搭925纯银十字架'),
('../../img/wtfbook53.png','49.00','5','灵语十字架项链女士925纯银珐琅吊坠主内礼品基督教 徒礼物'),
('../../img/wtfbook54.png','139.00','5','“不住祷告”珐琅十字架项链吊坠女基督徒礼品925纯银饰品锁骨链毛衣'),
('../../img/wtfbook55.png','99.00','5','灵语银项链女鱼吊坠925纯银饰品原创锁骨链毛衣链基督教礼品'),
('../../img/wtfbook56.png','138.00','5','基督教十字架女项链耶稣吊坠S925纯银镀24K黄金以马内利饰品'),
('../../img/wtfbook61.png','23.00','6','德朗修女传（在爱中行走最新修订版）'),
('../../img/wtfbook62.png','36.00','6','光与盐 第一卷'),
('../../img/wtfbook63.png','26.60','6','神奇小子林书豪'),
('../../img/wtfbook64.png','40.00','6','光与盐 第二卷'),
('../../img/wtfbook65.png','29.80','6','像雕塑一样活着'),
('../../img/wtfbook66.png','13.00','6','《浪子回头__一个归家的故事》'),
('../../img/wtfbook71.png','36.00','7','【新书热售+包邮】《不可叫小人看你年轻》约翰·派博，寇尔森，狄马等名牧联决推荐'),
('../../img/wtfbook72.png','168.00','7','全球首套3D立体儿童圣经绘本式礼品'),
('../../img/wtfbook73.png','23.00','7','优秀是怎样练出来的'),
('../../img/wtfbook74.png','17.00','7','从0岁开始 第一集'),
('../../img/wtfbook75.png','17.00','7','从0岁开始 第二集'),
('../../img/wtfbook76.png','34.00','7','为青少年立界线'),
('../../img/wtfbook81.png','20.00','8','但愿婚前我知道'),
('../../img/wtfbook82.png','27.00','8','为什么真爱需要等待'),
('../../img/wtfbook83.png','27.00','8','为约会立界线'),
('../../img/wtfbook84.png','28.80','8','预备成为帮助者'),
('../../img/wtfbook85.png','19.00','8','不再约会'),
('../../img/wtfbook86.png','25.00','8','当男孩遇见女孩'),
('../../img/wtfbook91.png','26.00','9','带领者十诫'),
('../../img/wtfbook92.png','24.00','9','CEO的信仰：职场中的侍奉'),
('../../img/wtfbook93.png','36.00','9','工作的意义—在职场中活出信仰'),
('../../img/wtfbook94.png','25.50','9','为谁辛苦为谁忙'),
('../../img/wtfbook95.png','29.80','9','为工作立界线'),
('../../img/wtfbook96.png','20.90','9','生命是一个奇迹 平装 查理·璟斯（作者），等（作者，译者），张玉娇（译者）'),
('../../img/wtfbook101.png','30.00','10','香草山'),
('../../img/wtfbook102.png','32.00','10','路易斯著作系列：裸颜'),
('../../img/wtfbook103.png','32.30','10','镜中的男人 平装 派特·摩利（作者）吴曼玲（译者）'),
('../../img/wtfbook104.png','30.00','10','稳行高处'),
('../../img/wtfbook105.png','15.00','10','《清晨的甘露》'),
('../../img/wtfbook106.png','30.50','10','天堂在召唤'),
('../../img/wtfbook111.png','25.00','11','马可福音—摩根解经从卷'),
('../../img/wtfbook112.png','35.00','11','希伯来圣经导论'),
('../../img/wtfbook113.png','29.00','11','马可福音—摩根解经丛卷'),
('../../img/wtfbook114.png','16.00','11','罗马书—摩根解经丛卷'),
('../../img/wtfbook115.png','43.00','11','罗马书注释（上下卷）—天道圣经注释系列'),
('../../img/wtfbook116.png','20.00','11','歌罗西书注释（天道圣经注释）')



DROP TABLE IF EXISTS goodscon;
CREATE TABLE `goodscon` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `content` varchar(3000) DEFAULT NULL,
  `cid` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;


INSERT INTO `goodscon` (`id`, `content`, `cid`) VALUES
(1, '<p><img src="/img/gjimg/con1.jpg"></p>\r\n<p>全国包邮（新疆、西藏发顺丰到付）</p><br/>\r\n<p>2017升级版智趣儿童圣经点读笔（8g内存）</p><br/>\r\n<p>谁需要这款产品？</p><br/>\r\n<p>0-12岁不懂英语，又想给孩子打好英语基础的父母</p><br/><p><img src="/img/gjimg/con1(2).jpg"></p><p><img src="/img/gjimg/con1(3).jpg"></p><p><img src="/img/gjimg/con1(4).jpg"></p><p><img src="/img/gjimg/con1(5).jpg"></p><p><img src="/img/gjimg/footer.jpg"></p>\r\n', '1'),
(2, '<p><img src="/img/gjimg/con1.jpg"></p>\r\n<p>全国包邮（新疆、西藏发顺丰到付）</p><br/>\r\n<p>2017升级版智趣儿童圣经点读笔（8g内存）</p><br/>\r\n<p>谁需要这款产品？</p><br/>\r\n<p>0-12岁不懂英语，又想给孩子打好英语基础的父母</p><br/><p><img src="/img/gjimg/con1(2).jpg"></p><p><img src="/img/gjimg/con1(3).jpg"></p><p><img src="/img/gjimg/con1(4).jpg"></p><p><img src="/img/gjimg/con1(5).jpg"></p><p><img src="/img/gjimg/footer.jpg"></p>', '2');

DROP TABLE IF EXISTS goodsdetails;
CREATE TABLE `goodsdetails` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `oprice` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `freight` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `surplus` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `choice` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `banner` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `class` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=4 ;
INSERT INTO `goodsdetails` (`id`, `name`, `price`, `oprice`, `freight`, `surplus`, `choice`, `content`, `banner`, `class`) VALUES
(1, '【包邮】2-12岁儿童圣经点读笔（荣耀版）有声圣经8g升级版包邮', '590.00', '690', '免运费', '252', '', NULL, '/img/gjimg/book1.png /img/gjimg/book2.png /img/gjimg/book3.png', ''),
(2, '【包邮】听妈妈讲那圣经里的故事：圣经史话修订版（圣经故事）', '98.00', '', '0.00-25.00', '63', '版本', NULL, '/img/gjimg/book1.png /img/gjimg/book2.png /img/gjimg/book3.png', '(荷)约翰·冯罗敦希尔'),
(3, '时尚拉丝十字架戒指情侣对戒男女款灵语银戒指', '139.00', '', '5.00-30.00', '759', '尺寸', NULL, '/img/gjimg/book1.png /img/gjimg/book2.png /img/gjimg/book3.png', '男款24# 男款22# 男款20# 男款18# 女款16# 女款14# 女款12# 女款10#');


DROP TABLE IF EXISTS user;
CREATE TABLE user(
  id INT (12) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (255),
  password VARCHAR (255),
  pic VARCHAR (255)
)DEFAULT CHARSET=utf8;
INSERT INTO user (name, password, pic) VALUES
('亲爱的一组宝宝','123456','')


-- 登录注册数据库
DROP TABLE IF EXISTS wtfuser;
CREATE TABLE wtfuser(
  id INT(12) PRIMARY KEY AUTO_INCREMENT,
  user VARCHAR (255),
  password VARCHAR (255)
)DEFAULT CHARSET = utf8;
INSERT INTO wtfuser (user,password) VALUES
('admin','e10adc3949ba59abbe56e057f20f883e');

