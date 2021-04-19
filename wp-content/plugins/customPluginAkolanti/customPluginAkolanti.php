<?php 

/**
 * @package customPluginAkolanti 
 * 
 */

 /*
 Plugin Name: customPluginAkolanti Plugin
 Plugin URI: http://localhost/plugin
 Description: This is a custom plugin 
Version: 1.0.0
Author: aaron
Author URI: http://localhost:8080/
License: MIT
Text Domain: customPluginAkolanti
 */

if(! defined ('ABSPATH')){
    die;
}

class customPluginAkolanti{

    function __construct()
    {
        add_action('init',array($this,'custom_post_type'));
    }

    function activate(){
        /**$this->custom_post_type(); */
        flush_rewrite_rules();
    }
    function deactivate(){
        flush_rewrite_rules();
    }
    function uninstall(){

    }

    function register(){
        add_action('admin_enqueue_scripts',array($this,'enqueue'));
    }

    function enqueue(){
        wp_enqueue_style('mystyle',plugins_url('/assets/mystle.css',__FILE__),array(''),false,'all');
    }

    function custom_post_type(){
        register_post_type('post',['public'=>true, 'label'=>'Fashion Updates']);
    }

}
if(class_exists('customPluginAkolanti')){
    $akolantiPlugin=new customPluginAkolanti();
    $akolantiPlugin->register();

}

register_activation_hook(__FILE__,array($akolantiPlugin,'activate'));

register_deactivation_hook(__FILE__,array($akolantiPlugin,'deactivate'));




