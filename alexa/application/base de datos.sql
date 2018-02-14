
CREATE TABLE `per` (
  `per_key` int(10) NOT NULL,
  `per_nombre` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `per_valor` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `per_modulo` varchar(25) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



INSERT INTO `per` (`per_key`, `per_nombre`, `per_valor`, `per_modulo`) VALUES
(1, 'Acceso al Modulo Administracion', 'admin', 'admin'),
(2, 'Crear Rol', 'crear_rol', 'admin'),
(3, 'Modificar Rol', 'modificar_rol', 'admin'),
(4, 'Eliminar Rol', 'eliminar_rol', 'admin'),
(5, 'Asignar Permisos Al Rol', 'asignar_permisos', 'admin'),
(6, 'Revocar Permisos Del Rol', 'revocar_permisos', 'admin'),
(7, 'Ver Roles', 'ver_rol', 'admin'),
(8, 'Ver Usuarios', 'ver_usuario', 'admin'),
(9, 'Crear Usuarios', 'crear_usuario', 'admin'),
(10, 'Modificar Usuarios', 'modificar_usuario', 'admin'),
(11, 'Eliminar Usuarios', 'eliminar_usuario', 'admin'),
(12, 'Generar Nuevas Claves', 'cambiar_password', 'admin');





CREATE TABLE `rol` (
  `rol_key` int(10) NOT NULL,
  `rol_nombre` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `rol_estado` tinyint(4) NOT NULL
)
ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



INSERT INTO `rol` (`rol_key`, `rol_nombre`, `rol_estado`) VALUES
(1, 'Administrador', 1);


CREATE TABLE `pxr` (
  `pxr_key` int(10) NOT NULL,
  `per_key` int(10) NOT NULL,
  `rol_key` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=393 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



INSERT INTO `pxr` (`pxr_key`, `per_key`, `rol_key`) VALUES
(257, 1, 1),
(258, 2, 1),
(259, 3, 1),
(260, 4, 1),
(261, 5, 1),
(262, 6, 1),
(263, 7, 1),
(264, 8, 1),
(265, 9, 1),
(266, 10, 1),
(267, 11, 1),
(268, 12, 1);



CREATE TABLE `usu` (
  `usu_key` int(10) NOT NULL,
  `usu_id` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usu_nombre` varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  `usu_apellidos` varchar(75) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usu_login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `usu_password` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usu_num_documento` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `usu_fecha_expedicion` date DEFAULT NULL,
  `usu_lugar_expedicion` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usu_observaciones` varchar(5000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usu_foto` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usu_email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `usu_estado` tinyint(4) NOT NULL COMMENT '1 activo \n\n2 completar usuario (de que el usuario llenara el primer fomulario) \n\n3 verificar aprobacion (miramos si el credito esta o no esta)\n\n0 eliminado',
  `tdo_key` int(10) NOT NULL,
  `rol_key` int(10) NOT NULL,
  `usu_ref` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT 'lo tomaremos como calificacion de usuario',
  `ran_key` int(10) NOT NULL,
  `usu_creacion` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



INSERT INTO `usu` (`usu_key`, `usu_id`, `usu_nombre`, `usu_apellidos`, `usu_login`, `usu_password`, `usu_num_documento`, `usu_fecha_expedicion`, `usu_lugar_expedicion`, `usu_observaciones`, `usu_foto`, `usu_email`, `usu_estado`, `tdo_key`, `rol_key`, `usu_ref`, `ran_key`, `usu_creacion`) VALUES
(1, NULL, 'Admin', 'Admin', 'admin', '1ca132be30d0bae49c53016fafca891df576fcb7', '00000000', NULL, NULL, '', 'upl_534ea594e7c95.png', 'tahito197@gmail.com', 1, 2, 1, '0', 0, NULL);



ALTER TABLE `per`
  ADD PRIMARY KEY (`per_key`);

ALTER TABLE `pxr`
  ADD PRIMARY KEY (`pxr_key`),
  ADD KEY `FKpxr860940` (`per_key`),
  ADD KEY `FKpxr310702` (`rol_key`);


ALTER TABLE `rol`
  ADD PRIMARY KEY (`rol_key`);

ALTER TABLE `usu`
  ADD PRIMARY KEY (`usu_key`),
  ADD KEY `FKusu306049` (`rol_key`);

ALTER TABLE `per`
  MODIFY `per_key` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=54;

ALTER TABLE `pxr`
  MODIFY `pxr_key` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=393;

ALTER TABLE `rol`
  MODIFY `rol_key` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;

ALTER TABLE `usu`
  MODIFY `usu_key` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=89;
