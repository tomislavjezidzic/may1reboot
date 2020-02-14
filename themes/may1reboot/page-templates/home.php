<?php
/** Template Name: Home template */

$template_name = get_page_template_name();

get_header();

get_partial( 'layout/loader' );
get_partial( 'layout/navigation' );

?>

<!-- PAGE WRAPPER -->
<div id="<?= $template_name ?>" class="o-page o-page--<?= $template_name ?>">

	<?php
	get_partial( 'home/header', [
		"modifier_class" => $template_name

	] );
	?>

    <!-- PAGE CONTENT -->
    <div class="o-page__inner o-page__inner--<?= $template_name ?>">
		<?php
		get_partial( 'home/section', [
			"modifier_class" => "o-section--1",
		] );
		?>
    </div>
    <!-- //PAGE CONTENT -->
	<?php
	get_partial( 'styleguide', [
		"modifier_class" => "o-section--styleguide",
	] );
	get_partial( 'layout/footer', [

	] );
	?>

</div>
<!-- //PAGE WRAPPER -->
<?php

get_footer();

?>
