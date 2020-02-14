<?php
/**
 * Load all files recursive from inc dir
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

function batchAutoload() {
    $iteratorObject = new RecursiveIteratorIterator(new RecursiveDirectoryIterator(__DIR__ . '/../inc/'));
    $files = new RegexIterator($iteratorObject, '/^.+\.php$/i', RecursiveRegexIterator::GET_MATCH);
    
    foreach($files as $file) {
        $fileName = reset($file);
        
        include $fileName;
    }
}

if ( !defined( 'WP_CLI' ) || !WP_CLI ) {
    batchAutoload();
}
