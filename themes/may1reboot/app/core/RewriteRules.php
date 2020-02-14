<?php


namespace may1reboot\core;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class RewriteRules {

	public function register(): void {
//		add_action( 'init', array( $this, 'add_custom_rewrite' ) );
//		add_filter( 'rewrite_rules_array', array( $this, 'filter_default_rewrites' ) );
	}

	public function add_custom_rewrite(): void {

//		add_filter(
//			'query_vars',
//			function( $vars ) {
//				$vars[] = 'page';
//				return $vars;
//			}
//		);

	}
}
