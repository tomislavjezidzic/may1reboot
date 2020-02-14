<?php

namespace may1reboot\core;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

use infobip\api\ApiHelper;
use infobip\api\SmartRecruiters;
use infobip\filters\MultiFilter;
use infobip\filters\SingleFilter;
use infobip\forms\LinkForm;
use infobip\helpers\EventHelper;
use infobip\helpers\WebinarHelper;
class RestApiCustomRoutes {

	public function register(): void {
		$this->register_routes();
	}

	private function register_routes(): void {
		add_action(
			'rest_api_init',
			function () {
//				register_rest_route(
//					ApiHelper::BASE_PATH,
//					ApiHelper::FILTER_BLOG,
//					array(
//						'methods'  => array( 'GET' ),
//						'callback' => array( new SingleFilter(), 'filter_blog_posts' ),
//					)
//				);
			}
		);
	}
}
