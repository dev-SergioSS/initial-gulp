<?php

/**
 * ==========================================================================
 * * Сніпет: Підключення Google Fonts (Inter + Hebrew) для WordPress
 * ==========================================================================
 */

if (! function_exists('my_theme_add_font_preconnects')) {

	// Додаємо preconnect посилання в <head> для швидкості

	function my_theme_add_font_preconnects()
	{
		echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
		echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
	}
	add_action('wp_head', 'my_theme_add_font_preconnects', 1);
}

if (! function_exists('my_theme_enqueue_google_fonts')) {
	function my_theme_enqueue_google_fonts()
	{
		// URL шрифту з потрібними вагами та підтримкою івриту
		$font_url = 'https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&display=swap&subset=hebrew';

		// Реєструємо стиль
		wp_enqueue_style(
			'my-theme-google-fonts', // Унікальна назва (handle)
			$font_url,              // URL
			array(),                // Залежності (немає)
			null                    // Версія (не потрібна)
		);
	}
	add_action('wp_enqueue_scripts', 'my_theme_enqueue_google_fonts');
}
