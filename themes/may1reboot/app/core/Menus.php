<?php


namespace may1reboot\core;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Menus {

	const HEADER_MENU_LOCATION         = 'header-menu';
	const FOOTER_MENU_LOCATION         = 'footer-menu';

	public function register(): void {
		add_action( 'init', array( $this, 'menus' ) );
	}

	public function menus(): void {
		register_nav_menus(
			array(
				self::HEADER_MENU_LOCATION         => __( 'Header Menu' ),
				self::FOOTER_MENU_LOCATION         => __( 'Footer Menu' ),
			)
		);
	}

	public function get_nav_menu_items_by_location( $location, $args = array() ): ?array {

		$locations = get_nav_menu_locations();

		$object = wp_get_nav_menu_object( $locations[ $location ] );

		if ( $object === false ) {
			return array();
		}

		$menu_items = wp_get_nav_menu_items( $object->name, $args );

		if ( $menu_items === false ) {
			return array();
		}

		return $menu_items;
	}

	public function menu_hierarchy_create( $location ) {

		$menu_locations = get_nav_menu_locations();
		$menu           = wp_get_nav_menu_object( $menu_locations[ $location ] );

		$menu_items = wp_get_nav_menu_items( $menu->term_id );

		$new_menu_array = array();
		foreach ( (array) $menu_items as $key => $menu_item ) {
			$new_menu_array[ $menu_item->menu_item_parent ][] = $menu_item;
		}

		$new_menu_array1 = array();
		foreach ( (array) $menu_items as $key => $menu_item ) {
			if ( isset( $new_menu_array[ $menu_item->ID ] ) ) {
				$menu_item->sub = $new_menu_array[ $menu_item->ID ];
				if ( $menu_item->menu_item_parent == 0 ) {
					$new_menu_array1[] = $menu_item;
				}
			}
		}

		$menu_tree = array_splice( $new_menu_array[0], 0, 15, $new_menu_array1 );
		return $menu_tree;
	}

}
