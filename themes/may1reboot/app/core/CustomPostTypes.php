<?php
/**
 *  Template function for adding custom post type. AutoLoader class should auto include this file.
 *
 *  Following code will add a new custom post type.
 *  Please check codex for more information on custom post types
 *  Custom post types: https://codex.wordpress.org/Post_Types#Custom_Post_Types
 *  Register post types: https://codex.wordpress.org/Function_Reference/register_post_type#Arguments
 */

namespace may1reboot\core;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class CustomPostTypes {

	const POST_TYPE_BLOG            = 'post';

	const TAXONOMY_BLOG_CATEGORY       = 'category';
	
	public function register(): void {
		$this->register_post_types();
		$this->register_theme_options();
	}
	
	private function register_post_types(): void {
		add_action(
			'init',
			function () {
//				register_post_type(
//					self::POST_TYPE_NEWS_PRESS,
//					array(
//						'labels'             => array(
//							'name'          => __( 'News & Press' ),
//							'singular_name' => __( 'News & Press' ),
//						),
//						'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
//						'public'             => true,
//						'publicly_queryable' => true,
//						'has_archive'        => true,
//						'hierarchical'       => false,
//						'show_in_rest'       => true,
//						'menu_icon'          => 'dashicons-admin-post',
//						'rewrite'            => array(
//							'slug'       => self::POST_TYPE_NEWS_PRESS,
//							'with_front' => false,
//						),
//					)
//				);

//				register_taxonomy(
//					self::TAXONOMY_NEWS_PRESS_CATEGORY,  // The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces).
//					self::POST_TYPE_NEWS_PRESS,        // post type name
//					array(
//						'hierarchical' => true,
//						'label'        => 'News & Press Category',  // Display name
//						'query_var'    => true,
//						'show_in_rest' => true,
//						'rewrite'      => array(
//							'slug'       => self::TAXONOMY_NEWS_PRESS_CATEGORY, // This controls the base slug that will display before each term
//							'with_front' => false, // Don't display the category base before
//						),
//					)
//				);
   
			}
		);

	}

	private function register_theme_options(): void {
		if ( function_exists( 'acf_add_options_page' ) ) {
			acf_add_options_page(
				array(
					'page_title'  => 'Theme options',
					'menu_title'  => 'Theme options',
					'menu_slug'   => 'theme-options',
					'capability'  => 'edit_posts',
					'parent_slug' => '',
					'position'    => false,
					'icon_url'    => false,
					'redirect'    => false,
				)
			);
		}
	}
}
