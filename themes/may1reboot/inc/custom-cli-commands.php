<?php

use Dotenv\Dotenv;

/**
 * @when before_wp_load
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

function bwp_command( $args ) {
    $dotenv = new Dotenv(__DIR__ . '/%theme%/');
    $dotenv->load();

    executeCLICommand('config create', [
        'dbname' => getenv('APP_DB_NAME'),
        'dbuser' => getenv('APP_DB_USER'),
        'dbpass' => getenv('APP_DB_PASS'),
        'dbhost' => getenv('APP_DB_HOST'),
        'force'  => true
    ]);

    $contentDir = __DIR__ . '/../../wp-content/';
    executeCLICommand("config set WP_CONTENT_DIR $contentDir --add");

    executeCLICommand('db create');

    executeCLICommand('core install', [
        'url' => getenv('APP_SITE_URL'),
        'title' => getenv('APP_SITE_TITLE'),
        'admin_user' => getenv('APP_ADMIN_USER'),
        'admin_password' => getenv('APP_ADMIN_PASSWORD'),
        'admin_email' => getenv('APP_ADMIN_EMAIL'),
    ]);

    $themeName = getenv('APP_THEME');
    executeCLICommand("theme activate $themeName");

    executeCLICommand("rewrite structure '/%postname%/' --hard");


}

if ( defined( 'WP_CLI' ) && WP_CLI ) {
    WP_CLI::add_command( 'bwp', 'bwp_command' );
}

function executeCLICommand($command, $parameters = []) {
    foreach ($parameters as $parameter => $value) {
        $command .= sprintf(' --%s=%s', $parameter, $value);
    }

    $return = trim(WP_CLI::runcommand($command));
    WP_CLI::success( $return );
}