<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage angelo
 */
// If there is no post, include home page

if ( ! have_posts() ) {
	$query = new WP_Query( array( "pagename" => "home" ) );
	if ( $query->have_posts() ) {
		$query->the_post();
	}
} else {
	the_post();
}

get_header();

get_partial( 'layout/loader' );
get_partial( 'layout/navigation' );
?>
<!-- PAGE WRAPPER -->
<div id="default" class="o-page o-page--default">

	<?php
	get_partial( 'default/header', [

	] );
	?>

    <!-- PAGE CONTENT -->
    <div class="o-page__inner o-page__inner--default">

		<?php
		// Include the page content template.
		the_content();
		?>
    </div>
    <!-- //PAGE CONTENT -->
	<?php
	get_partial( 'layout/footer', [

	] );
	?>

</div>
<!-- //PAGE WRAPPER -->

<?php get_footer(); ?>
