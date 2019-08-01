-- MySQL dump 10.16  Distrib 10.1.38-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: myment
-- ------------------------------------------------------
-- Server version	10.1.38-MariaDB-0+deb9u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `add_moments`
--

DROP TABLE IF EXISTS `add_moments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `add_moments` (
  `Id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `capital` varchar(255) DEFAULT NULL,
  `island` varchar(255) DEFAULT NULL,
  `municipality` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAT` varchar(255) DEFAULT NULL,
  `updatedAT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_moments`
--

LOCK TABLES `add_moments` WRITE;
/*!40000 ALTER TABLE `add_moments` DISABLE KEYS */;
INSERT INTO `add_moments` VALUES (1,'Floris Suite Hotel – Spa & Beach Club',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `add_moments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `add_moments_category`
--

DROP TABLE IF EXISTS `add_moments_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `add_moments_category` (
  `Id` int(11) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_moments_category`
--

LOCK TABLES `add_moments_category` WRITE;
/*!40000 ALTER TABLE `add_moments_category` DISABLE KEYS */;
INSERT INTO `add_moments_category` VALUES (1,'lodging'),(2,'leisure'),(3,'food');
/*!40000 ALTER TABLE `add_moments_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `add_moments_country`
--

DROP TABLE IF EXISTS `add_moments_country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `add_moments_country` (
  `Id` int(11) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `capital` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_moments_country`
--

LOCK TABLES `add_moments_country` WRITE;
/*!40000 ALTER TABLE `add_moments_country` DISABLE KEYS */;
INSERT INTO `add_moments_country` VALUES (1,'Afganistán','Kabul'),(2,'Albania','Tirana'),(3,'Alemania','Berlín'),(4,'Andorra','Andorra la Vieja'),(5,'Angola','Luanda'),(6,'Antigua y Barbuda','Saint John'),(7,'Arabia Saudita','Riad'),(8,'Argelia','Argel'),(9,'Argentina','Buenos Aires'),(10,'Armenia','Ereván'),(11,'Australia','Canberra'),(12,'Austria','Viena'),(13,'Azerbaiyán','Bakú'),(14,'Bahamas','Nasáu'),(15,'Bangladés','Daca'),(16,'Barbados','Bridgetown'),(17,'Baréin','Manama'),(18,'Bélgica','Bruselas'),(19,'Belice','Belmopán'),(20,'Benín','Porto-Novo'),(21,'Bielorrusia','Minsk'),(22,'Birmania','Naipyidó'),(23,'Bolivia','Sucre'),(24,'Bosnia-Herzegovina','Sarajevo'),(25,'Botsuana','Gaborone'),(26,'Brasil','Brasilia'),(27,'Brunéi','Bandar Seri Begawan'),(28,'Bulgaria','Sofía'),(29,'Burkina Faso','Uagadugú'),(30,'Burundi','Buyumbura'),(31,'Bután','Thimphu'),(32,'Cabo Verde','Praia'),(33,'Camboya','Nom Pen'),(34,'Camerún','Yaundé'),(35,'Canadá','Ottawa'),(36,'Catar','Doha'),(37,'Chad','Yamena'),(38,'Chile','Santiago'),(39,'China','Pekín'),(40,'Chipre','Nicosia'),(41,'Colombia','Bogotá'),(42,'Comoras','Moroni'),(43,'Congo','Brazzaville'),(44,'Corea del Norte','Pionyang'),(45,'Corea del Sur','Seúl'),(46,'Costa de Marfil','Yamusukro'),(47,'Costa Rica','San José'),(48,'Croacia','Zagreb'),(49,'Cuba','La Habana'),(50,'Dinamarca','Copenhague'),(51,'Dominica','Roseau'),(52,'Ecuador','Quito'),(53,'Egipto','El Cairo'),(54,'El Salvador','San Salvador'),(55,'Emiratos Árabes Unidos','Abu Dabi'),(56,'Eritrea','Asmara'),(57,'Eslovaquia','Bratislava'),(58,'Eslovenia','Liubliana'),(59,'España','Madrid'),(60,'Estados Unidos','Washington D. C.'),(61,'Estonia','Tallin'),(62,'Etiopía','Adís Abeba'),(63,'Filipinas','Manila'),(64,'Finlandia','Helsinki'),(65,'Fiyi','Suva'),(66,'Francia','París'),(67,'Gabón','Libreville'),(68,'Gambia','Banjul'),(69,'Georgia','Tiflis'),(70,'Ghana','Accra'),(71,'Granada','Saint George'),(72,'Grecia','Atenas'),(73,'Guatemala','Guatemala'),(74,'Guinea','Conakri'),(75,'Guinea Ecuatorial','Malabo'),(76,'Guinea-Bisáu','Bisáu'),(77,'Guyana','Georgetown'),(78,'Haití','Puerto Príncipe'),(79,'Honduras','Tegucigalpa'),(80,'Hungría','Budapest'),(81,'India','Nueva Delhi'),(82,'Indonesia','Yakarta'),(83,'Irak','Bagdad'),(84,'Irán','Teherán'),(85,'Irlanda','Dublín'),(86,'Islandia','Reikiavik'),(87,'Islas Marshall','Majuro'),(88,'Islas Salomón','Honiara'),(89,'Israel','Jerusalén'),(90,'Italia','Roma'),(91,'Jamaica','Kingston'),(92,'Japón','Tokio'),(93,'Jordania','Amán'),(94,'Kazajistán','Astaná'),(95,'Kenia','Nairobi'),(96,'Kirguistán','Biskek'),(97,'Kiribati','Tarawa'),(98,'Kosovo','Pristina'),(99,'Kuwait','Kuwait City'),(100,'Laos','Vientián'),(101,'Lesoto','Maseru'),(102,'Letonia','Riga'),(103,'Líbano','Beirut'),(104,'Liberia','Monrovia'),(105,'Libia','Trípoli'),(106,'Liechtenstein','Vaduz'),(107,'Lituania','Vilna'),(108,'Luxemburgo','Luxemburgo'),(109,'Macedonia','Skopie'),(110,'Madagascar','Antananarivo'),(111,'Malasia','Kuala Lumpur'),(112,'Malaui','Lilongüe'),(113,'Maldivas','Malé'),(114,'Malí','Bamako'),(115,'Malta','La Valeta'),(116,'Marruecos','Rabat'),(117,'Mauricio','Port Louis'),(118,'Mauritania','Nuakchot'),(119,'México','México'),(120,'Micronesia','Palikir'),(121,'Moldavia','Chisináu'),(122,'Mónaco','Mónaco'),(123,'Mongolia','Ulán Bator'),(124,'Montenegro','Podgorica'),(125,'Mozambique','Maputo'),(126,'Namibia','Windhoek'),(127,'Nauru','Yaren'),(128,'Nepal','Katmandú'),(129,'Nicaragua','Managua'),(130,'Níger','Niamey'),(131,'Nigeria','Abuya'),(132,'Noruega','Oslo'),(133,'Nueva Zelanda','Wellington'),(134,'Omán','Mascate'),(135,'Países Bajos','Ámsterdam'),(136,'Pakistán','Islamabad'),(137,'Palaos','Melekeok'),(138,'Palestina','Jerusalén Este'),(139,'Panamá','Panamá'),(140,'Papúa Nueva Guinea','Puerto Moresby'),(141,'Paraguay','Asunción'),(142,'Perú','Lima'),(143,'Polonia','Varsovia'),(144,'Portugal','Lisboa'),(145,'Reino Unido','Londres'),(146,'República Centroafricana','Bangui'),(147,'República Checa','Praga'),(148,'República Democrática del Congo','Kinsasa'),(149,'República Dominicana','Santo Domingo'),(150,'Ruanda','Kigali'),(151,'Rumania','Bucarest'),(152,'Rusia','Moscú'),(153,'Samoa','Apia'),(154,'San Cristóbal y Nieves','Basseterre'),(155,'San Marino','San Marino'),(156,'San Vicente y las Granadinas','Kingstown'),(157,'Santa Lucía','Castries'),(158,'Santo Tomé y Príncipe','Santo Tomé'),(159,'Senegal','Dakar'),(160,'Serbia','Belgrado'),(161,'Seychelles','Victoria'),(162,'Sierra Leona','Freetown'),(163,'Singapur','Singapur'),(164,'Siria','Damasco'),(165,'Somalia','Mogadiscio'),(166,'Sri Lanka','Sri Jayawardenapura Kotte'),(167,'Suazilandia','Mbabane'),(168,'Sudáfrica','Pretoria'),(169,'Sudán','Jartum'),(170,'Sudán del Sur','Yuba'),(171,'Suecia','Estocolmo'),(172,'Suiza','Berna'),(173,'Surinam','Paramaribo'),(174,'Tailandia','Bangkok'),(175,'Taiwán','Taipéi'),(176,'Tanzania','Dodoma'),(177,'Tayikistán','Dusambé'),(178,'Timor Oriental','Dili'),(179,'Togo','Lomé'),(180,'Tonga','Nukualofa'),(181,'Trinidad y Tobago','Puerto España'),(182,'Túnez','Túnez'),(183,'Turkmenistán','Asjabad'),(184,'Turquía','Ankara'),(185,'Tuvalu','Funafuti'),(186,'Ucrania','Kiev'),(187,'Uganda','Kampala'),(188,'Uruguay','Montevideo'),(189,'Uzbekistán','Taskent'),(190,'Vanuatu','Port Vila'),(191,'Vaticano','Vaticano'),(192,'Venezuela','Caracas'),(193,'Vietnam','Hanói'),(194,'Yemen','Saná'),(195,'Yibuti','Yibuti'),(196,'Zambia','Lusaka'),(197,'Zimbabue','Harare'),(198,'Yemen','Saná'),(199,'Yibuti','Yibuti'),(200,'Zambia','Lusaka'),(201,'Zimbabue','Harare');
/*!40000 ALTER TABLE `add_moments_country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `add_moments_island`
--

DROP TABLE IF EXISTS `add_moments_island`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `add_moments_island` (
  `Id` int(11) DEFAULT NULL,
  `island` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_moments_island`
--

LOCK TABLES `add_moments_island` WRITE;
/*!40000 ALTER TABLE `add_moments_island` DISABLE KEYS */;
INSERT INTO `add_moments_island` VALUES (1,'Ábaco Septentrional'),(2,'Abu Dhabi'),(3,'Adonara'),(4,'Afognak'),(5,'Alluttoq'),(7,'Amager'),(8,'Amami Oshima'),(9,'Ambrym'),(10,'Andros'),(11,'Andros'),(12,'Anglesey (Ynys Mon)'),(13,'Anjouan (Ndzuwani)'),(14,'Ap Lei Chau'),(15,'Aruba'),(16,'Askøy'),(17,'Austvågøya'),(18,'Bacan'),(19,'Bali'),(20,'Barbados'),(21,'Basilan'),(22,'Basse-Terre de Guadalupe'),(23,'Batam'),(24,'Belitung'),(25,'Bengkalis'),(26,'Biak'),(27,'Bintan'),(28,'Bioko'),(29,'Boavista'),(30,'Bohol'),(31,'Bømlo'),(32,'Borneo'),(35,'Bornholm'),(36,'Brač'),(37,'Bubiyan'),(38,'Buka'),(39,'Buru'),(40,'Bushrod'),(41,'Buton'),(42,'Cangsham'),(43,'Catanduanes'),(44,'Caviana'),(45,'Cefalonia'),(46,'Célebes'),(47,'Ceram'),(48,'Cerdeña22​'),(49,'Cheduba'),(50,'Chergui'),(51,'Cheung Chau'),(52,'Chios'),(53,'Chipre'),(54,'Choiseul'),(55,'Córcega'),(56,'Corfú'),(57,'Creta'),(58,'Cuba'),(59,'Curaçao'),(60,'Djerba'),(61,'Dominica'),(62,'Dordrecht'),(63,'Ebeye'),(64,'Edgeøya'),(65,'Efate'),(66,'Egina'),(67,'El Hierro'),(68,'Erromango'),(69,'Eubea'),(70,'Eysturoy'),(71,'Falster'),(72,'Fasta Åland'),(73,'Fehmarn'),(74,'Fionia (Funen)'),(75,'Flevopolder'),(76,'Formentera'),(77,'Fuerteventura'),(78,'Gallya (Isla Hall)'),(79,'Geojedo'),(80,'Georgia del Sur'),(82,'Gozo'),(83,'Gran Ábaco'),(84,'Gran Bahama'),(85,'Gran Bretaña'),(86,'Gran Canaria'),(87,'Gran Inagua'),(88,'Grande Comore (Njazidja)'),(89,'Grande-Terre'),(90,'Groenlandia'),(92,'Groote Eylandt'),(93,'Guadalcanal'),(94,'Guam'),(95,'Guernsey'),(96,'Guimarás'),(97,'Hainan'),(98,'Haizhu'),(99,'Halmahera'),(100,'Hareidlandet'),(101,'Hertsön'),(102,'Hiiumaa'),(103,'Hinnøya'),(104,'Hisingen'),(105,'Hitra'),(106,'Hokkaido'),(107,'Honshu'),(108,'Hvar'),(109,'Ibiza'),(110,'IJsselmonde'),(111,'Île de Ré'),(112,'Île-des-Sœurs o isla de Nuns'),(113,'Ilha Grande do Gurupá'),(114,'Irlanda'),(115,'Isla Adak'),(116,'Isla Adelaida'),(117,'Isla Admiralty'),(118,'Isla Air Force'),(119,'Isla Akimiski6​'),(120,'Isla Akpatok'),(121,'Isla Alejandro I'),(122,'Isla Alor'),(123,'Isla Als'),(124,'Isla Ambon'),(125,'Isla Amund Ringnes'),(126,'Isla Andamán del Medio'),(127,'Isla Andamán del Norte'),(128,'Isla Andamán del Sur'),(129,'Isla Andros, Bahamas'),(130,'Isla Ángel de la Guarda'),(131,'Isla Anping'),(132,'Isla Anvers'),(133,'Isla Aracena'),(134,'Isla Atka'),(135,'Isla Attu'),(136,'Isla Auckland'),(138,'Isla Awaji'),(139,'Isla Axel Heiberg'),(140,'Isla Ayon'),(141,'Isla Bangka'),(142,'Isla Banks6​'),(143,'Isla Banks'),(144,'Isla Baranof'),(145,'Isla Bathurst'),(146,'Isla Bear'),(147,'Isla Bely'),(148,'Isla Benjamín'),(149,'Isla Berkner'),(150,'Isla Bhola'),(151,'Isla Big (Kimmirut)'),(152,'Isla Bolchevique'),(154,'Isla Bolshoy Begichev'),(155,'Isla Bolshoy Shantar'),(156,'Isla Borden'),(157,'Isla Bougainville'),(158,'Isla Brabante'),(159,'Isla Bray'),(160,'Isla Brock'),(161,'Isla Byam Martin'),(162,'Isla Bylot'),(163,'Isla Cameron'),(164,'Isla Campana'),(165,'Isla Canvey'),(166,'Isla Carney'),(167,'Isla Charcot'),(168,'Isla Chatham'),(169,'Isla Chatham'),(170,'Isla Chengār'),(171,'Isla Chichagof'),(172,'Isla Chongming'),(173,'Isla Cijin'),(174,'Isla Clarence'),(175,'Isla Clavering'),(176,'Isla Coats'),(177,'Isla Contreras'),(178,'Isla Cornwall'),(179,'Isla Cornwallis'),(180,'Isla Dall'),(181,'Isla Dawson'),(182,'Isla de Ammassalik'),(183,'Isla de Anticosti'),(184,'Isla de Baffin'),(186,'Isla de Baréin'),(187,'Isla de Barents'),(188,'Isla de Bathurst'),(189,'Isla de Belkov'),(190,'Isla de Bering'),(191,'Isla de Cabo Bretón'),(192,'Isla de Capri'),(193,'Isla de Cebú'),(194,'Isla de Choggia'),(195,'Isla de Cozumel'),(196,'Isla de Daishan'),(197,'Isla de Elba'),(198,'Isla de Flores'),(199,'Isla de Gallipolli'),(200,'Isla de Gotland'),(201,'Isla de Hawái'),(202,'Isla de Hong Kong'),(203,'Isla de Icaria'),(204,'Isla de Isquia'),(205,'Isla de Kolgúyev'),(206,'Isla de Kotlin'),(207,'Isla de la Gonâve'),(208,'Isla de la Juventud'),(209,'Isla de Lagos'),(210,'Isla de Lesbos'),(211,'Isla de Leyte'),(212,'Isla de los Estados'),(213,'Isla de Mactán'),(214,'Isla de Malta'),(215,'Isla de Man'),(216,'Isla de Manhattan'),(217,'Isla de Margarita'),(218,'Isla de Mombasa'),(219,'Isla de Montreal'),(220,'Isla de Mozambique'),(221,'Isla de Muharraq'),(222,'Isla de Mull'),(223,'Isla de Naxos'),(224,'Isla de Nueva Siberia'),(225,'Isla de Nutka'),(226,'Isla de Oleron'),(227,'Isla de Oljón'),(228,'Isla de Pemba'),(229,'Isla de Penang'),(230,'Isla de Portsea'),(231,'Isla de Procida'),(232,'Isla de Ross'),(233,'Isla de Roti'),(234,'Isla de Sajalín'),(235,'Isla de Salamina'),(236,'Isla de Samar'),(237,'Isla de San Vicente (San Vicente y las Granadinas)'),(238,'Isla de Santa Isabel'),(239,'Isla de Santo Amaro (o Guarujá)'),(240,'Isla de Santo Antão'),(241,'Isla de São Jorge'),(242,'Isla de São Vicente'),(243,'Isla de Sheppey'),(244,'Isla de Sibutu'),(245,'Isla de Simeulue'),(246,'Isla de Simunul'),(247,'Isla de Skye'),(248,'Isla de Tanna'),(249,'Isla de Tawi-Tawi'),(250,'Isla de Vancouver'),(251,'Isla de Venecia'),(252,'Isla de Vitória'),(253,'Isla de Wight'),(254,'Isla de Wrangel'),(255,'Isla de Wrangell'),(256,'Isla de Zhongshan​'),(257,'Isla del Bananal​'),(258,'Isla del Carmen'),(259,'Isla del Gobernador'),(260,'Isla del Pico'),(261,'Isla del Príncipe de Gales'),(262,'Isla del Príncipe Eduardo'),(263,'Isla Desolación'),(264,'Isla Devon6'),(265,'Isla Dinagat'),(266,'Isla Dirk Hartog'),(267,'Isla Drygalski'),(268,'Isla Duque de York'),(269,'Isla Eglinton'),(270,'Isla Elefante'),(271,'Isla Ellef Ringnes'),(272,'Isla Ellesmere'),(273,'Isla Emerald'),(274,'Isla Esmeralda'),(275,'Isla Espíritu Santo'),(276,'Isla Etolin'),(277,'Isla Faial'),(278,'Isla Fergusson'),(279,'Isla Fernandina'),(280,'Isla Flaherty'),(281,'Isla Flinders'),(282,'Isla Foley'),(283,'Isla Fraser'),(284,'Isla Geographical Society'),(285,'Isla Goodenough'),(286,'Isla Gordon'),(287,'Isla Graham6​'),(288,'Isla Graham'),(289,'Isla Graham Bell'),(290,'Isla Gran Liajovski'),(291,'Isla Gran Malvina (Malvinas Oeste)'),(292,'Isla Gran Nicobar'),(293,'Isla Grande de Chiloé'),(294,'Isla Grande de Tierra del Fuego'),(296,'Isla Grande-Terre de Nueva Caledonia'),(297,'Isla Grant'),(298,'Isla Hanover'),(300,'Isla Hatia'),(301,'Isla Hayling'),(302,'Isla Hendrik'),(303,'Isla Hoste'),(304,'Isla Isabela'),(305,'Isla Iturup'),(306,'Isla Jackson'),(307,'Isla James Ross'),(308,'Isla Jens Munk'),(309,'Isla Jesús'),(310,'Isla Joinville'),(311,'Isla Jorge Montt'),(312,'Isla Kaien'),(313,'Isla Kangaroo'),(314,'Isla Karáguinski'),(315,'Isla Kent del Norte'),(316,'Isla King'),(317,'Isla King'),(318,'Isla King William'),(319,'Isla Kodiak'),(320,'Isla Komsomolets'),(321,'Isla Kuhn'),(322,'Isla Kuiu'),(323,'Isla Kupreanof'),(324,'Isla La Magdalena'),(325,'Isla Larga (o isla Long)'),(326,'Isla Latady'),(327,'Isla Laut'),(328,'Isla Lingga'),(329,'Isla Little Wellington'),(330,'Isla Livingston'),(331,'Isla Londonderry'),(332,'Isla Lougheed'),(333,'Isla Lulu (ciudad de Richmond)'),(334,'Isla Mackenzie King'),(335,'Isla MacKlintok'),(336,'Isla Madre de Dios'),(337,'Isla Madura'),(338,'Isla Magdalena'),(339,'Isla Maheshkhali'),(340,'Isla Mainland'),(341,'Isla Manitoulin'),(342,'Isla Mannar'),(343,'Isla Mansel'),(344,'Isla Manus'),(345,'Isla Margarita'),(346,'Isla Masbate'),(347,'Isla Masson'),(348,'Isla Meighen'),(349,'Isla Melchor'),(350,'Isla Melville'),(351,'Isla Melville'),(352,'Isla Mezhdusharskiy'),(353,'Isla Mill'),(354,'Isla Miscou'),(355,'Isla Misima'),(356,'Isla Mitkof'),(357,'Isla Montague'),(358,'Isla Montague'),(359,'Isla Moresby'),(360,'Isla Mornington'),(361,'Isla Mornington'),(362,'Isla Muna'),(363,'Isla Navarino'),(364,'Isla Nelson (Alaska)'),(365,'Isla Norte'),(366,'Isla Nottingham'),(367,'Isla Nunivak'),(368,'Isla Okinawa'),(369,'Isla Oleny'),(370,'Isla Padang'),(371,'Isla Patricio Lynch'),(372,'Isla Penghu'),(373,'Isla Pequeña Liajovski'),(374,'Isla Pequeño Andamán'),(375,'Isla Perrot'),(376,'Isla Pingtan (o isla Haitan)'),(377,'Isla Pioneer'),(378,'Isla Pitt'),(379,'Isla Polillo'),(380,'Isla Porcher'),(381,'Isla Portowa'),(382,'Isla Prat'),(383,'Isla Prince Charles'),(384,'Isla Prince Patrick'),(385,'Isla Princess Royal'),(386,'Isla Príncipe de Gales'),(387,'Isla Ramree'),(388,'Isla Rantau'),(389,'Isla Renaud'),(390,'Isla Rennell'),(391,'Isla Resolución'),(392,'Isla Revillagigedo'),(393,'Isla Revolución de Octubre'),(394,'Isla Rey Christian'),(395,'Isla Rey Jorge'),(396,'Isla Richards'),(397,'Isla Riesco'),(398,'Isla Roosevelt'),(399,'Isla Rowley'),(400,'Isla Royale'),(401,'Isla Russell'),(402,'Isla Sado'),(403,'Isla Salisbury'),(404,'Isla Salisbury'),(405,'Isla San Lorenzo'),(406,'Isla Sandwip'),(407,'Isla Sangir'),(408,'Isla Santa Catarina'),(409,'Isla Santa Cruz'),(410,'Isla Santa Inés'),(411,'Isla Santiago (o Slador o James)'),(412,'Isla São Luís'),(413,'Isla São Miguel'),(414,'Isla Selayar'),(415,'Isla Séverny'),(416,'Isla Shannon'),(417,'Isla Sherbro'),(418,'Isla Sherman'),(419,'Isla Shimo-shima'),(420,'Isla Sibiriakov'),(421,'Isla Siple'),(422,'Isla Smyley​'),(423,'Isla Soledad'),(424,'Isla Somerset​'),(425,'Isla Southampton'),(426,'Isla Spaatz'),(427,'Isla Stefansson​'),(428,'Isla Stewart (Rakiura)'),(429,'Isla Sur​'),(430,'Isla Tablas'),(431,'Isla Tanaga'),(432,'Isla Tarakan​'),(433,'Isla Terceira'),(434,'Isla Thurston​'),(435,'Isla Tiburón'),(436,'Isla Traiguén'),(437,'Isla Traill'),(438,'Isla Trinidad​'),(439,'Isla Tsushima'),(440,'Isla Umboi'),(441,'Isla Unalaska'),(442,'Isla Unimak'),(443,'Isla Upernivik'),(444,'Isla Utara (u Obi u Ubira)'),(445,'Isla Vanier'),(446,'Isla Vansittart'),(447,'Isla Vasilievsky'),(448,'Isla Vaygach'),(449,'Isla Victoria6​'),(450,'Isla Wales'),(451,'Isla Walney'),(452,'Isla Wellington'),(453,'Isla White'),(454,'Isla Woodlark'),(455,'Isla Ymer'),(456,'Isla Yos Sudarso'),(457,'Isla Yuzhny'),(458,'Islandia'),(459,'Islas Kotelny/Faddeyevsky'),(460,'Islay45​'),(461,'Islote de Lobos'),(462,'Islote Lamay (o Liouciou)'),(463,'Jamaica'),(464,'Java'),(465,'Jeju-do​'),(466,'Jeløy'),(467,'Jersey'),(468,'Jinshazhou'),(469,'Joló'),(470,'Kabaena'),(471,'Kai Besar'),(472,'Kálimnos'),(473,'Karakelong'),(474,'Karimun'),(475,'Karmøy'),(476,'Kauai'),(477,'Kerguelen'),(478,'Key West'),(479,'Kimito'),(480,'Kinmen (Gran Kinmen)'),(481,'Kiritimati'),(482,'Kobroor'),(483,'Kolombangara'),(484,'Komoran'),(485,'Korcula'),(486,'Kos'),(487,'Krk'),(488,'Kunashir'),(489,'Kungsholmen'),(490,'Kutubdia​'),(491,'Kvaløya (Finnmark)'),(492,'Kvaløya (Tromsø)'),(493,'Kvitøya'),(494,'Kyushu'),(495,'La Española'),(496,'La Gomera'),(497,'La Palma'),(498,'Labuan'),(499,'Langeland'),(500,'Langøya'),(501,'Lanzarote'),(502,'Lauttasaari (Helsinki)'),(503,'Lembata'),(504,'Lemnos'),(505,'Léucade'),(506,'Lewis y Harris'),(507,'Lidingö'),(508,'Lido de Venecia'),(509,'Lieyu (Pequeña Kinmen)'),(510,'Lifou'),(511,'Lipari'),(512,'Lolland'),(513,'Lombok'),(514,'Long Beach Barrier'),(515,'Long Island'),(516,'Luzón'),(517,'Ma Wan'),(518,'Madagascar'),(519,'Madeira'),(520,'Mahé'),(521,'Mainland'),(522,'Majuli (la mayor isla de agua dulce de Asia del Sur)'),(523,'Majuro'),(524,'Makira'),(525,'Malaita'),(526,'Malakula'),(527,'Malé'),(528,'Mallorca'),(529,'Mangole'),(530,'Marajó'),(531,'Maré'),(532,'Marinduque'),(533,'Martinica'),(534,'Masira'),(535,'Maui'),(536,'Mauricio'),(537,'Maya Karimata'),(538,'Mayotte'),(539,'Menorca'),(540,'Mikonos'),(541,'Milne Land'),(542,'Mindanao'),(543,'Mindoro'),(544,'Misool'),(545,'Molokai'),(546,'Morfil'),(547,'Morotai'),(548,'Mors'),(549,'Natuna Besar'),(550,'Negros'),(551,'Nías'),(552,'Nombre de la isla'),(553,'Nordaustlandet'),(554,'Normanby'),(555,'Nøtterøy'),(556,'Nueva Bretaña'),(557,'Nueva Georgia'),(558,'Nueva Guinea'),(559,'Nueva Hanover (Lavongai)'),(560,'Nueva Irlanda'),(561,'Nueva Providencia'),(562,'Oahu'),(563,'Oksenøya (o Uksenøya)'),(564,'Öland'),(565,'Ometepe'),(566,'Orust'),(567,'Pagai del Norte'),(568,'Pagai del Sur'),(569,'Palawan'),(570,'Panay'),(571,'Pantar'),(572,'Paramushir'),(573,'Paros'),(574,'Peleng'),(575,'Phu Quoc'),(576,'Phuket64​'),(577,'Prins Karls Forland'),(578,'Puerto Rico'),(579,'Pulau Ujong'),(580,'Qeqertarsuaq (Disko)'),(581,'Qeshm'),(582,'Rangsang'),(583,'René-Levasseur'),(584,'Réunion'),(585,'Ringvassøya'),(586,'Roatán'),(587,'Rodas'),(588,'Rolvsøy (Østfold)'),(589,'Rügen'),(590,'Rupat'),(591,'Sääminginsalo'),(592,'Saaremaa'),(593,'Salawati'),(594,'Salsete'),(595,'Samos'),(596,'Samosir'),(597,'San Cristóbal'),(598,'Sanana'),(599,'Sangmissoq'),(600,'Santa Lucía'),(601,'Santiago'),(602,'Santorini'),(603,'São Tomé'),(604,'Savaii'),(605,'Seiland'),(606,'Selandia'),(607,'Senja'),(608,'Shikoku'),(609,'Siberut'),(610,'Sicilia'),(611,'Singkep'),(612,'Sipura'),(613,'Siros'),(614,'Socotra'),(615,'Södermalm'),(616,'Soisalo'),(617,'Sørøya'),(618,'Sotra'),(619,'Spitsbergen'),(620,'Sri Lanka'),(621,'Sri Rangam'),(622,'Staten Island'),(623,'Stord'),(624,'Store Koldewey'),(625,'Streymoy'),(626,'Sumatra'),(627,'Sumba'),(628,'Sumbawa'),(629,'Supiori'),(630,'Sylt'),(631,'Tahití'),(632,'Taiwán'),(633,'Taliabu'),(634,'Tanahbesar (Wokam)'),(635,'Tasmania'),(636,'Tasos'),(637,'Tenerife'),(638,'Ternate'),(639,'Terranova'),(640,'Texel'),(641,'Tierra de Alexandra'),(642,'Tierra de Jorge'),(643,'Tierra de Nares'),(644,'Tierra de Wilczek'),(645,'Timor'),(646,'Tjörn'),(647,'Tobago'),(648,'Trangan'),(650,'Tsing Yi'),(651,'Tunøya'),(652,'Tupinambarana​'),(653,'Ukerewe'),(654,'Umnak'),(655,'Upolu'),(656,'Urup'),(657,'Usedom'),(658,'Vanatinai'),(659,'Vanua Levu'),(660,'Värmdö'),(661,'Vella Lavella'),(662,'Vendsyssel-Thy'),(663,'Vestvågøy'),(664,'Vieja ciudad de Lübeck'),(665,'Viti Levu'),(666,'Voorne-Putten'),(667,'Waigeo'),(668,'Wetar'),(669,'Wolin'),(670,'Wowoni'),(671,'Xiamen'),(672,'Yakushima'),(673,'Yamdena'),(674,'Yapen'),(675,'Yeongdo'),(676,'Yeouido'),(677,'Ytre Vikna'),(678,'Zakynthos'),(679,'Zanzíbar'),(680,'Zhoushan'),(681,'Voorne-Putten'),(682,'Waigeo'),(683,'Wetar'),(684,'Wolin'),(685,'Wowoni'),(686,'Xiamen'),(687,'Yakushima'),(688,'Yamdena'),(689,'Yapen'),(690,'Yeongdo'),(691,'Yeouido'),(692,'Ytre Vikna'),(693,'Zakynthos'),(694,'Zanzíbar'),(695,'Zhoushan');
/*!40000 ALTER TABLE `add_moments_island` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `add_moments_item`
--

DROP TABLE IF EXISTS `add_moments_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `add_moments_item` (
  `Id` int(11) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `createdAT` varchar(255) DEFAULT NULL,
  `upadatedAT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_moments_item`
--

LOCK TABLES `add_moments_item` WRITE;
/*!40000 ALTER TABLE `add_moments_item` DISABLE KEYS */;
INSERT INTO `add_moments_item` VALUES (1,'bar',NULL,NULL),(2,'cine',NULL,NULL),(3,'parque',NULL,NULL);
/*!40000 ALTER TABLE `add_moments_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `add_moments_tag`
--

DROP TABLE IF EXISTS `add_moments_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `add_moments_tag` (
  `Id` int(11) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `createdAT` varchar(255) DEFAULT NULL,
  `updatedAT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_moments_tag`
--

LOCK TABLES `add_moments_tag` WRITE;
/*!40000 ALTER TABLE `add_moments_tag` DISABLE KEYS */;
INSERT INTO `add_moments_tag` VALUES (1,'#love',NULL,NULL),(2,'#happy',NULL,NULL),(3,'#beautiful\r\n#self\r\n#girl\r\n#picoftheday\r\n#like4like\r\n#smile\r\n#friends\r\n#fun\r\n#like\r\n#fashion',NULL,NULL),(5,'#friends',NULL,NULL),(6,'#fun',NULL,NULL),(7,'#like',NULL,NULL),(8,'#summer',NULL,NULL),(9,'#food',NULL,NULL),(10,'#swag',NULL,NULL),(11,'#amazing',NULL,NULL),(12,'#style',NULL,NULL),(13,'#family',NULL,NULL),(14,'#pretty',NULL,NULL),(15,'#life',NULL,NULL),(16,'#sun',NULL,NULL),(17,'#hair',NULL,NULL),(18,'#self-awareness',NULL,NULL),(19,'#zen',NULL,NULL),(20,'#conciousness',NULL,NULL),(21,'#cool',NULL,NULL),(22,'#art',NULL,NULL),(23,'#bored',NULL,NULL),(24,'#funny',NULL,NULL),(25,'#party',NULL,NULL),(26,'#music',NULL,NULL),(27,'#eyes',NULL,NULL),(28,'#nature',NULL,NULL),(29,'#beauty',NULL,NULL),(30,'#night',NULL,NULL),(31,'#fitness',NULL,NULL),(32,'#beach',NULL,NULL),(33,'#look',NULL,NULL),(34,'#nice',NULL,NULL),(35,'#sky',NULL,NULL),(36,'#season',NULL,NULL),(37,'#cute',NULL,NULL),(38,'#me',NULL,NULL),(39,'#smile',NULL,NULL),(40,'#pets',NULL,NULL),(42,'#makeup',NULL,NULL),(43,'#sex',NULL,NULL),(44,'#cats',NULL,NULL),(45,'#dogs',NULL,NULL),(46,'#places',NULL,NULL),(47,'#parks',NULL,NULL),(48,'#cine',NULL,NULL),(49,'#movies',NULL,NULL),(50,' #hotel',NULL,NULL),(51,'#pool',NULL,NULL),(52,'#water',NULL,NULL),(53,'#green',NULL,NULL),(54,'#heat',NULL,NULL),(55,'#hot',NULL,NULL),(56,'#restaurant',NULL,NULL),(57,'#fresh-air',NULL,NULL),(58,'#sea',NULL,NULL),(59,'#sand',NULL,NULL),(60,'#breeze',NULL,NULL),(61,'#mexican',NULL,NULL),(62,'#japanese',NULL,NULL),(63,'#venezuelan',NULL,NULL),(64,'#canarian',NULL,NULL),(65,'#tenerife',NULL,NULL),(66,'#venezuela',NULL,NULL),(67,'#english',NULL,NULL),(68,'#sushi',NULL,NULL),(69,'#hungry',NULL,NULL),(70,'#thristy',NULL,NULL);
/*!40000 ALTER TABLE `add_moments_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log_in`
--

DROP TABLE IF EXISTS `log_in`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log_in` (
  `Id` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `islogged?` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log_in`
--

LOCK TABLES `log_in` WRITE;
/*!40000 ALTER TABLE `log_in` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_in` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `municipalities_of_tenerife`
--

DROP TABLE IF EXISTS `municipalities_of_tenerife`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `municipalities_of_tenerife` (
  `Id` int(11) DEFAULT NULL,
  `municipalities` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `municipalities_of_tenerife`
--

LOCK TABLES `municipalities_of_tenerife` WRITE;
/*!40000 ALTER TABLE `municipalities_of_tenerife` DISABLE KEYS */;
INSERT INTO `municipalities_of_tenerife` VALUES (1,'Adeje'),(2,'Arafo'),(3,'Arico'),(4,'Arona'),(5,'Buenavista del Norte'),(6,'Candelaria'),(7,'El Rosario'),(8,'El Sauzal'),(9,'El Tanque'),(10,'Fasnia'),(11,'Garachico'),(12,'Granadilla de Abona'),(13,'Guía de Isora'),(14,'Güímar'),(15,'Icod de los Vinos'),(16,'La Guancha'),(17,'La Matanza de Acentejo'),(18,'La Orotava'),(19,'La Victoria de Acentejo'),(20,'Los Realejos'),(21,'Los Silos'),(22,'Puerto de la Cruz'),(23,'San Cristóbal de La Laguna'),(24,'San Juan de la Rambla'),(25,'San Miguel de Abona'),(26,'Santa Cruz de Tenerife'),(27,'Santa Úrsula'),(28,'Santiago del Teide'),(29,'Tacoronte'),(30,'Tegueste'),(31,'Vilaflor de Chasna');
/*!40000 ALTER TABLE `municipalities_of_tenerife` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profile` (
  `Id` int(11) DEFAULT NULL,
  `profile_photo` varchar(255) DEFAULT NULL,
  `profile_info` varchar(255) DEFAULT NULL,
  `createdAT` varchar(255) DEFAULT NULL,
  `updatedAT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'myprofilephotoshouldbehere','myprofileinfoshouldbehere',NULL,NULL);
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ranking`
--

DROP TABLE IF EXISTS `ranking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ranking` (
  `Id` int(11) DEFAULT NULL,
  `points` varchar(255) DEFAULT NULL,
  `createdAT` varchar(255) DEFAULT NULL,
  `updatedAT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ranking`
--

LOCK TABLES `ranking` WRITE;
/*!40000 ALTER TABLE `ranking` DISABLE KEYS */;
INSERT INTO `ranking` VALUES (1,'10',NULL,NULL);
/*!40000 ALTER TABLE `ranking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sign_up`
--

DROP TABLE IF EXISTS `sign_up`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sign_up` (
  `Id` int(11) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAT` varchar(255) DEFAULT NULL,
  `updatedAT` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sign_up`
--

LOCK TABLES `sign_up` WRITE;
/*!40000 ALTER TABLE `sign_up` DISABLE KEYS */;
INSERT INTO `sign_up` VALUES (1,'Armando','de Canha','armandodc','010495a','armandodecanha@gmail.com',NULL,NULL);
/*!40000 ALTER TABLE `sign_up` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-01  1:14:40
