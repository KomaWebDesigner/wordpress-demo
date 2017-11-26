<?php
/*
Plugin Name: Simply Symphony  Adaptive Editor
Plugin URI: Http://plugnedit.com
Version: 0.3.1.1
Author: JavaScript Tech
Description:Simply Symphony <strong>Drag N Drop Visual Editor</strong> and web page builder for WordPress is a tool that allows specialized formatting of text on images, and other unique formatting for blog entries.
*/


function fluxdisable_linebreaks($content) {
        if (strpos($content,'PlugNeditFluxEditor') !== false) {
              remove_filter ('the_content','wpautop');
       
        }
        return $content;
    
}

if ( isset(  $_SERVER["HTTP_USER_AGENT"] ) && preg_match("/(kindle|ipad|silk)/i", $_SERVER["HTTP_USER_AGENT"]) ){
$GLOBALS['FluxDisplayFull'] = true;
} else {
$GLOBALS['FluxDisplayFull'] = false;
}


add_filter('the_content','fluxdisable_linebreaks',1);

function Flux_Change_shortcodes( $the_content ) {
if ( preg_match('/PlugNeditFluxEditor/i', $the_content)){
  $postFlux = get_post( get_the_ID(), $output = OBJECT, $filter = 'db'  ); 

if (!preg_match("/\[[^\]]*\]/",  $postFlux->post_content)){

   //  $the_content = $postFlux->post_content;
  
   }
   

if( isset($_GET['PNENoWPToolbars'])  ) {
if (preg_match("/\[[^\]]*\]/",  $postFlux->post_content)){
         $the_content = $postFlux->post_content;
         $the_content = str_replace("[", "*?|", $the_content);
         $the_content = str_replace("]", "?*|",  $the_content);
        }
}


  
    


if( !isset($_GET['PNENoWPToolbars'])  ) {
if (get_option( 'FluxRemoveHTML' ) == "checked" && !preg_match('/data-fluxnoparsehtml/i', $the_content)){
  

}

if (get_option( 'FluxParseCanvas' ) == "checked" && !preg_match('/data-fluxnoparsecanvas/i', $the_content)){
if(wp_is_mobile() && $GLOBALS['FluxDisplayFull'] == false){
$doc = new DOMDocument();
@$doc->loadHTML('<?xml encoding="UTF-8">' . $the_content);

foreach ($doc->childNodes as $item)
    if ($item->nodeType == XML_PI_NODE)
        $doc->removeChild($item);
$doc->encoding = 'UTF-8'; 

$doc->removeChild($doc->doctype);           
$doc->replaceChild($doc->firstChild->firstChild->firstChild, $doc->firstChild);

$element = $doc->getElementById('FluxFullCanvas');
$element2= $doc->getElementById('PNEFixedWidthI');
if(!empty($element) && !empty($element2) ){
$element->parentNode->removeChild($element);
$the_content  = $doc->saveHTML();
$doc = new DOMDocument();
@$doc->loadHTML('<?xml encoding="UTF-8">' . $the_content);
foreach ($doc->childNodes as $item)
    if ($item->nodeType == XML_PI_NODE)
        $doc->removeChild($item);
$doc->encoding = 'UTF-8'; 
$doc->removeChild($doc->doctype);           
$doc->replaceChild($doc->firstChild->firstChild->firstChild, $doc->firstChild);
$element = $doc->getElementById('PNEFixedWidthI');
$element->parentNode->removeChild($element);
$the_content  = $doc->saveHTML();
}
} else {
$doc = new DOMDocument();
@$doc->loadHTML('<?xml encoding="UTF-8">' . $the_content);

foreach ($doc->childNodes as $item)
    if ($item->nodeType == XML_PI_NODE)
        $doc->removeChild($item);
$doc->encoding = 'UTF-8'; 
$doc->removeChild($doc->doctype);           
$doc->replaceChild($doc->firstChild->firstChild->firstChild, $doc->firstChild);
$element = $doc->getElementById('FluxMobileCanvas');
if(!empty($element) ){
$element->parentNode->removeChild($element);
$the_content  = $doc->saveHTML();
}
}
}
}


}

   return $the_content;

}


add_filter( 'the_content', 'Flux_Change_shortcodes',20 ) ;


add_action( 'plugins_loaded', 'FluxMobileOveride' );

function FluxMobileOveride() {

if( isset($_GET['PNENoWPToolbars'])  || isset($_GET['fluxdisplaymobileversion']) ) {
$_SERVER['HTTP_USER_AGENT'] = "Mobile";
if ( wp_is_mobile() ) {

}
return;
if(isset($_GET['fluxdisplaymobileversion']) ) {
$PNECSSurlpreview = plugin_dir_url( __FILE__ ) . 'css/preview.css';

wp_enqueue_style( 'fluxpreviewcss', $PNECSSurlpreview);
}
}
}

function Fluxdisplaymobile (){

if (isset($_GET['fluxdisplaymobile']) ){


wp_enqueue_script('dynamic-jspreview', plugin_dir_url(__FILE__).'js/preview.js',false,'1.0',true);
wp_localize_script('dynamic-jspreview', 'SSpluginAddress', array( 'plugin_url' =>  plugin_dir_url( __FILE__ ) ));wp_enqueue_script( 'dynamic-jspreview' );
}


wp_enqueue_script('dynamic-jsSSlightbox', plugin_dir_url(__FILE__).'js/lightbox.js',false,'1.0',true);



}

add_action('wp_enqueue_scripts', 'Fluxdisplaymobile' );

add_option( 'JSColortoFlux', 'checked', '', 'yes' );
add_option( 'CKEditortoFlux', 'checked', '', 'yes' );
add_option( 'ThemeorFluxCSS', '', '', '' );
add_option( 'FluxParseCanvas', 'checked', '', 'yes' );
add_option( 'FluxRemoveHTML', 'checked', '', 'yes' );


/*
Loads mobile or fixed style.
*/

function fluxeditorStyle() {   
        
          wp_enqueue_style('dynamic-cssfontawsome', plugin_dir_url(__FILE__).'js/ckeditor/plugins/fontawesome/font-awesome/css/font-awesome.min.css');

        if(!isset($_GET['PNENoWPToolbars'])){
             
               if(wp_is_mobile() && $GLOBALS['FluxDisplayFull'] == false){
               global $post;
               if (have_posts() ){
               $pnecheckpost = $post->post_content;
                if ( preg_match('/IsFluxResponsive/i', $pnecheckpost)){
                
                if (get_option( 'FluxParseCanvas' ) == "checked" && !preg_match('/data-fluxnoparse/i', $pnecheckpost)){
                wp_enqueue_style('dynamic-cssfluxms', plugin_dir_url(__FILE__).'css/fluxmobilesingle.css');
                } else {
                
                 wp_enqueue_style('dynamic-cssfluxm', plugin_dir_url(__FILE__).'css/fluxmobile.css');
                 }
           } else {  
                wp_enqueue_style('dynamic-cssmobileflux', plugin_dir_url(__FILE__).'css/mobile.css');
                }}

               } else {
            wp_enqueue_style('dynamic-cssfluxfixed', plugin_dir_url(__FILE__).'css/fixed.css');}
            
}}
add_action( 'wp_enqueue_scripts', 'fluxeditorStyle' );






add_action('wp_head', 'fluxadjustviewport');


function fluxadjustviewport() {
global $post;
 if (have_posts() ){
 $pnecheckpost = $post->post_content;
if ( preg_match('/PlugNeditFluxEditor/i', $pnecheckpost)){
if ($GLOBALS['FluxDisplayFull'] == true ) {
echo '<meta name="viewport" content="width=968">';
} else {
echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
}
}
}
}

/*
Loads plugnedit styles
*/


add_action( 'wp_enqueue_scripts', 'pne_load_plugin_cssflux' );

function pne_load_plugin_cssflux() {
if(get_option('ThemeorFluxCSS') != 'checked'){
$PNECSSurl = plugin_dir_url( __FILE__ ) . 'css/fluxstyle.css';
wp_enqueue_style( 'pnestylesflux', $PNECSSurl);
}}

/*
template redirect for galleries and links.
*/
include 'plugneditmenu.php';
include 'pneupdate.php';
include  'pnedata.php';
include 'fluxgallery.php';


add_filter( 'template_include', 'Flux_Vidpost' );
 
function Flux_Vidpost( $original_template ) {
global $post;
 if (have_posts() ){
    $pnecheckpost = $post->post_content;
    
    if ( preg_match('/data-isvideobackground/i', $pnecheckpost) &&  preg_match('/data-isfluxtheme/i', $pnecheckpost)){
    return  plugin_dir_path( __FILE__ ) .'vdbackgroundfull.php';
  } 
    
   if ( preg_match('/data-isvideobackground/i', $pnecheckpost)){
    return  plugin_dir_path( __FILE__ ) .'vdbackground.php';
  } else if ( preg_match('/data-isthemeless/i', $pnecheckpost)) {
      return  plugin_dir_path( __FILE__ ) .'themelessbg.php';
      } else if ( preg_match('/data-isfluxtheme/i', $pnecheckpost)) {
    return  plugin_dir_path( __FILE__ ) .'fluxthemed.php';
  } else {
   return $original_template;
  }
  } else{
    return $original_template;
  }
}

function pneFlux_template_redirect() {



if ( isset($_GET['pneFluxNoTheme']) ) {
        if($_GET['pneFluxNoTheme']=='links'){
        include  'links.php';
        exit;
        }
      if($_GET['pneFluxNoTheme']=='gallery'){
        include  'gallery.php';
        exit;
        }
	}
}


add_action( 'template_redirect', 'pneFlux_template_redirect' );





?>
