<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>8y>TwMYLL6bHPFO_*:,c{&+fS!&|v4SZ`UCE()H:-uA_C#N!zJ`3B6jnO{>%f+Y' );
define( 'SECURE_AUTH_KEY',  '8Wp7AT-uhTn0z?w)r}6A>31b`.:wODI87bzXxKuH;O6(!O6=H+S^OD4@43+ltcD2' );
define( 'LOGGED_IN_KEY',    'tuw0a9=RiBF*)Zy<FYW3[i-B&XXN}J#hv#mjBY8-2_~;yg2P&1r gLOOMZwxSa~ ' );
define( 'NONCE_KEY',        '?3kiXbzz$U[(RP#<Xr<bOe0z!S9qOZ+Do~tuGe78yrSzVDk3K$D`Q%GURr-[22jh' );
define( 'AUTH_SALT',        '>&sWkwNIM>|?sMw9o?MQ(3J%!@#giiw/=-T4A=&/3;hSqL,7F<C 2dp[918T .Ml' );
define( 'SECURE_AUTH_SALT', 'NR4<:}KaLejn?G=mB$p$lEN{6dm%YdS 3@ErspLf_,?R<nBT8P=&.moJIX!L0xti' );
define( 'LOGGED_IN_SALT',   'RZ/-Sw5:DWwBaQ/q8dIp3<Q]SzI3O% Uf/epV%nK8lB`.}v-1ecOD[Swu]Hx!%:S' );
define( 'NONCE_SALT',       'GF]bJi2:9VASDW[UdQi(:z$eZ-!gHe RM#VLf@kY!WN~!N,gPy`%SK;S2~=.&<87' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
