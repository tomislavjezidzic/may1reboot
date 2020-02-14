<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class TemplateAutoloader
{

    private function glob_recursive($pattern, $flags = 0)
    {
        $files = glob($pattern, $flags);
        foreach (glob(dirname($pattern) . '/*', GLOB_ONLYDIR | GLOB_NOSORT) as $dir) {
            $files = array_merge($files, $this->glob_recursive($dir . '/' . basename($pattern), $flags));
        }
        return $files;
    }

    public function getTemplates(array $folders, $recursive = true)
    {

        $globFunction = $this->getGlobFunction($recursive);

        $templates = array();

        foreach ($folders as $folder) {
            $files = $globFunction(get_stylesheet_directory() . DIRECTORY_SEPARATOR . trim($folder) . DIRECTORY_SEPARATOR . '*.php');
            foreach ( $files as $filename) {

                $templateData = get_file_data($filename, array('Template Name' => 'Template Name'));

                if ($templateData['Template Name']) {
                    $clearedFileName = preg_replace("." . get_stylesheet_directory() . DIRECTORY_SEPARATOR .".", "", $filename);
                    $templates[$clearedFileName] = $templateData['Template Name'];
                }
            }
        }

        return $templates;
    }

    private function getGlobFunction($recursive)
    {
        if ($recursive) {
            return function ($path) {
                return $this->glob_recursive($path);
            };
        } else {
            return function ($path) {
                return glob($path);
            };
        }
    }

}