<?php

use may1reboot\core\CustomPostTypes;
use may1reboot\core\Menus;
use may1reboot\core\PartialFinder;
use may1reboot\core\RestApiCustomRoutes;
use may1reboot\core\RewriteRules;
use may1reboot\core\WordpressDefaults;


define('INCLUDE_PATH', get_template_directory() . '/inc/');
define('TEMPLATE_PATH', get_template_directory() . '/');
define('INCLUDE_URL', get_template_directory_uri());
define('FS_METHOD', 'direct');

if (!file_exists(__DIR__ . '/vendor/autoload.php')) {
    add_action('admin_notices', function () {
        ?>
        <div class="notice notice-error">
            <h2>Missing <i>vendor/autoloader.php</i></h2>
            <p>
                <strong>
                    You are missing composer autoload. Please run <i>composer install</i> in root of your project.
                </strong>
            </p>
        </div>
        <?php
    });
    return;
}
/**
 * If this command fails try to run "composer dump" in the theme root directory
 */
require_once __DIR__ . '/vendor/autoload.php';

if (class_exists('ThemeUpdateChecker')) {
    //Initialize the update checker.
    $example_update_checker = new ThemeUpdateChecker(
        'may1reboot',                                            //Theme folder name, AKA "slug".
        'http://deghq.com/bwp/current/service/?identifier=efbe1b28e841f7bd706a5d6cdf7c9dfa&type=manifest' //URL of the metadata file.
    );

    add_action('load-themes.php', function () use ($example_update_checker) {
        $example_update_checker->checkForUpdates();
    });
}

$custom_post_types = new CustomPostTypes();
$custom_post_types->register();

$rest_api_custom_routes = new RestApiCustomRoutes();
$rest_api_custom_routes->register();

$menus = new Menus();
$menus->register();

$wordpress_defaults = new WordpressDefaults();
$wordpress_defaults->init();

$rewrite_rules = new RewriteRules();
$rewrite_rules->register();


/**
 * Pretty dump
 *
 * @param $obj
 */
function dump($obj)
{
    echo "<pre class='debug'>";
    var_dump($obj);
    echo "</pre>";
}

/**
 * Base url convertion method.
 * @param $url
 * @return string
 */
function bu($url)
{
    $clean = trim($url);
    return INCLUDE_URL . "/static/" . $clean;
}

function au($url)
{
    $clean = trim($url);
    return get_template_directory() . "/static/" . $clean;
}

function get_partial($partial, $data = null, $return = false)
{
    return PartialFinder::get_instance()->get_partial($partial, $data, $return);
}

function get_page_template_name()
{
    return sanitize_html_class( str_replace( array( '.', '/' ), '-', basename( get_page_template(), '.php' ) ) );
}
