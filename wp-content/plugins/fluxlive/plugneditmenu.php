<?php

/*
Loads menu bar and editor information.
*/



function create_plugneditbar_menu() {
global $post,$current_user;

if (current_user_can('unfiltered_html') && current_user_can('editor') || current_user_can('administrator') ){
global $wp_admin_bar;
$menu_id = 'Flux Editor';


$PNEpostnew =   wp_nonce_url(admin_url('admin.php?PlugNeditInsert=post'));
$PNEpagenew = wp_nonce_url(admin_url('admin.php?PlugNeditInsert=page'));
$Fluxthemeless =  wp_nonce_url(admin_url('admin.php?PlugNeditInsert=page&Fluxthemeless=true'));
$Fluxvideonew =  wp_nonce_url(admin_url('admin.php?PlugNeditInsert=page&FluxvideoNew=true'));
$Fluxthemenew =  wp_nonce_url(admin_url('admin.php?PlugNeditInsert=page&FluxthemeNew=true'));
$Fluxthemefull =  wp_nonce_url(admin_url('admin.php?PlugNeditInsert=page&FluxthemeFull=true'));
$wp_admin_bar->add_menu(array( 'class' =>  'ab-item', 'id' => $menu_id, 'title' => __('Simply Symphony'), ''));   
global $post;
  


if (have_posts() ){
$pnecheckpost = $post->post_content;

if ( is_singular($post)  &&  preg_match('/PlugNeditFluxEditor/i', $pnecheckpost)){
$PNEpageUpdate =  wp_nonce_url(admin_url('admin.php?page=plugnedit/pneupdate.php'));
$loadpne=plugin_dir_url(__FILE__).'editor.html?pnepageurl='.urlencode(get_permalink(get_the_ID()));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('<span style="color:red;font-weight:bolder"> Edit Simply Symphony Page </span>'), 'id' => 'Flux-Editor-load', 'href' =>  $loadpne, 'class' =>  'ab-item'));

echo '<script>window.addEventListener("load", function(){if(document.getElementById("PNE-editor")) {document.getElementById("PNE-editor").style.display="none"}}, false);</script>';

}

} else { 

if (isset($_GET['post']) && is_numeric($_GET['post']) &&  preg_match('/PlugNeditFluxEditor/i',get_post_field('post_content', $_GET['post']))){ 

add_filter( 'user_can_richedit' , '__return_false', 50 );

$loadpne=plugin_dir_url(__FILE__).'editor.html?pnepageurl='.urlencode(get_permalink($_GET['post']));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('<span style="color:red;font-weight:bolder"> Edit Simply Symphony Page </span>'), 'id' => 'Flux-Editor-load2', 'href' =>  $loadpne));

$fluxadminscript=plugin_dir_url(__FILE__).'js/adminscript.js';


echo '<script>window.fluxdirpath="'.plugin_dir_url(__FILE__).'";window.fluxloadpage="'.$loadpne.'";</script><script src='.$fluxadminscript.'></script>';


}
}

$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __(' '), 'id' => 'Flux-Editor-Blankedit'));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('<span style="color:yellow;font-weight:bolder">Create New Page</span>'), 'id' => 'Flux-Editor-Blank0'));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('New Simply Symphony Post'), 'id' => 'Flux-Editor-Post',  'href' =>  $PNEpostnew));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('New Simply Symphony Page'), 'id' => 'Flux-Editor-Page',  'href' =>  $PNEpagenew));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('Themeless Splash Page'), 'id' => 'Flux-Editor-themeless',  'href' =>  $Fluxthemeless));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __(' '), 'id' => 'Flux-Editor-Blank'));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('<span style="color:yellow;font-weight:bolder">Support</span>'), 'id' => 'Flux-Editor-BlankSupport'));

$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('Help : How To Videos'), 'id' => 'Flux-Editor-Page-HelpV' ,  'href' =>  'http://plugnedit.com/Fluxvideohelp/fluxhelp/vd.html'));

$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('Forum Support'), 'id' => 'Flux-Editor-Page-Forum' ,  'href' =>  'http://simplysymphony.com/forums/'));

$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('Contact'), 'id' => 'Flux-Editor-Page-Contact' ,  'href' =>  'http://simplysymphony.com/contact-us/'));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('Rate Plugin'), 'id' => 'Flux-Editor-Page-Rate' ,  'href' =>  'https://wordpress.org/support/view/plugin-reviews/fluxlive'));

$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __(' '), 'id' => 'Flux-Editor-Blank3'));

$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('<span style="color:yellow;font-weight:bolder">Full Version</span>'), 'id' => 'Flux-Editor-Page-Full'));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('Full Version Video Example Page'), 'id' => 'Flux-Editor-Page-example' ,  'href' =>  'http://simplysymphony.com'));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('<span style="color:grey;font-weight:bolder">Blank Page</span>'), 'id' => 'Flux-Editor-Page-blank-page'));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('<span style="color:grey;font-weight:bolder">Image / Video Background Page</span>'), 'id' => 'Flux-Editor-Page-Background'));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('<span style="color:grey;font-weight:bolder">Image / Video Background Page Full Width</span>'), 'id' => 'Flux-Editor-Page-Video'));
$wp_admin_bar->add_menu(array('parent' => $menu_id, 'title' => __('Purchase - 14 Day Money Back Guarantee'), 'id' => 'Flux-Editor-Page-purchase' ,  'href' =>  'http://plugneditflux.binpress.com/product/simply-symphony-wordpress-editor/3360'));

}
}

add_action('admin_bar_menu', 'create_plugneditbar_menu' , 200);
if( isset($_GET['PNENoWPToolbars'])  )  { show_admin_bar( false ); } 

add_action( 'wp_head', 'PNEFluxFooter_header' );

function PNEFluxFooter_header(){
add_option( 'FluxMinWidth', '968');
global $post;
if (have_posts() ){
$pnecheckpost = $post->post_content;

if ( preg_match('/PlugNeditFluxEditor/i', $pnecheckpost) && !isset($_GET['PNENoWPToolbars'])){
  if(!wp_is_mobile()){
echo '<style> body { min-width: '.get_option("FluxMinWidth").'px !important;}</style>';
} else{
echo '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">';
}

 }
}
}


function PNEFluxFooter_footer(){
global $post,$current_user;
if (current_user_can('unfiltered_html') && current_user_can('editor') || current_user_can('administrator') ){
$fluxpermit = "Permit.";
} else {
$fluxpermit = "Permit False.";
}

if (!have_posts() ){
have_posts();
 }
if (have_posts() ){
$pnecheckpost = $post->post_content;
echo '<!-- Flux Footer -->';
if (current_user_can('unfiltered_html') && current_user_can('editor') || current_user_can('administrator') ){

if ( preg_match('/PlugNeditFluxEditor/i', $pnecheckpost) && isset($_GET['PNENoWPToolbars']) ||  preg_match('/ICGDeepWrapper/i', $pnecheckpost)  && isset($_GET['PNENoWPToolbars'])){

echo '<input type="hidden" id="PNEFluxGallerURL" value="'.admin_url("admin.php?page=fluxlive/fluxgallery.php").'">';
echo '<input type="hidden" id="PNEFluxSiteurl" value="'. get_site_url().'">';
echo '<input type="hidden" id="PNEFluxAdminurl" value="'.get_edit_post_link().'">';
echo '<input type="hidden" id="PNEFluxupdateURL" value="'.admin_url("admin.php?page=fluxlive/pneupdate.php").'">';
echo '<input type="hidden" id="PNEFluxPluginDir" value="'.plugin_dir_url(__FILE__).'">';
echo '<input type="hidden" id="PNEFluxID" value="'.get_the_ID().'">';
echo '<input type="hidden" id="PNEFluxInlinePath" value="'.plugin_dir_url(__FILE__).'js/ckeditor/ckeditor.js">';
echo '<input type="hidden" id="PNEFluxInlineFullPath" value="'.plugin_dir_url(__FILE__).'js/ckeditorfull/ckeditor/ckeditor.js">';
echo '<input type="hidden" id="LoadCKEDITOR" value="'.get_option( 'CKEditortoFlux' ).'">';
echo '<input type="hidden" id="LoadJSCOLOR" value="'.get_option( 'JSColortoFlux' ).'">';



wp_nonce_field( 'pnedbEditorAction', 'pnedbEditorAction2' );


if( isset($PNEpageUpdate)  )  { 
echo '<input type="hidden" id="UpdateFluxURL" value="'.$PNEpageUpdate.'">';
echo '<input type="hidden" id="UpdateFluxValue" value="'.get_the_ID().'">';
 } } else {
echo '<input type="hidden" id="FluxErrorData" value="Check Post Failed! '.$fluxpermit.'">' ;
 }
 } else {
 echo '<input type="hidden" id="FluxErrorData" value="No Permissions! '.$fluxpermit.'">';
 } 
 } else {
echo '<input type="hidden" id="FluxErrorData" value="No Post Found! '.$fluxpermit.'">';
 } 

 }
  
 add_action( 'wp_footer', 'PNEFluxFooter_footer' );


?>
