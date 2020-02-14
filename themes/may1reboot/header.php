<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 *
 * NOTICE: Don't forget to add wp_head(); to the <head> element.
 *
 * @package WordPress
 * @subpackage angelo
 */

use may1reboot\bundles\May1rebootAssets;
use may1reboot\bundles\May1rebootProductionAssets;

if (defined('LOCAL') && LOCAL === true) {
    May1rebootAssets::register();
} else {
    May1rebootProductionAssets::register();
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <title>
        <?= wp_title('') ?>
    </title>

    <link rel="shortcut icon" href="<?php echo bu('static/ui/favicon.ico'); ?>" type="image/x-icon">
    <?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>


