<?php
/** Template Name: Home Template */

$template_name = get_page_template_name();

get_header();
?>

<!-- PAGE WRAPPER -->
<div id="<?= $template_name ?>" class="o-page o-page--<?= $template_name ?>">

	<?php
	get_partial( 'layout/landing-layer');
	?>
</div>
<!-- //PAGE WRAPPER -->
<?php

get_footer();

?>
