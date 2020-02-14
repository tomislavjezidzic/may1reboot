<?php

namespace may1reboot\bundles;

use bornfight\wpHelpers\AssetBundle;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class May1rebootAssets extends AssetBundle
{
//    public $asyncCss = true;

    public
    $js = [
        'may1rebootBundle' => [
            'path' => 'dist/bundle.js',
            'version' => 1.0
        ],
    ];

    public
    $css = [
        'may1rebootMainCSS' => [
            'path' => 'dist/bundle.css',
            'in_footer' => false,
            'version' => 1.0
        ],
    ];

}
