<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header();

get_partial( 'layout/loader' );
get_partial( 'layout/navigation' );

?>

<div id="error-404" class="o-page o-page--error">
    <div class="o-page__inner">
        <div class="o-header-wrapper o-header-wrapper--error-page">
            <header class="c-header c-header--error-page">

                <div class="o-container">
                    <h1>
                        error 404
                    </h1>
                    <p>
                        Return back to the homepage
                    </p>

                    <a href="<?= get_home_url() ?>" class="c-button c-button--bordered">
                        <span>
                            Back
                        </span>
                    </a>
                </div>
            </header>
        </div>

		<?php
		get_partial('layout/footer', [
			"back_to_top" => false,
		]);
		?>

    </div>
</div>

<?php get_footer(); ?>
