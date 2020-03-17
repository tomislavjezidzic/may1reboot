<?php
/** Template Name: Home Template */

$template_name = get_page_template_name();

get_header();
?>

<script>
    window.modelPath = "<?= bu('models/main_model_2.glb'); ?>";
    window.presentPath = "<?= bu('models/present.glb'); ?>";
    window.sparkleGlow = "<?= bu('images/glow.png'); ?>";
</script>

<!-- PAGE WRAPPER -->
<div id="<?= $template_name ?>" class="o-page o-page--<?= $template_name ?>">

    <?php
    get_partial('layout/landing-layer');
    ?>
</div>
<!-- //PAGE WRAPPER -->
<?php

get_partial('layout/loading-layer');
get_footer();

?>
