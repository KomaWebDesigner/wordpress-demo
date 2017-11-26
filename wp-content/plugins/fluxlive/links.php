<?php


function PNEFluxlinks(){
$pneoutlinks='';
if ( current_user_can( 'unfiltered_html' ) ) {
$pages = get_pages(); 
foreach ( $pages as $page ) {
$select1='<option value="';
$select2='">';
$select3='</option>';
$selecttext=$page->post_title;

if ($selecttext==''){$selecttext="No Title Page ID ". $page->ID;}
$pneoutlinks=$pneoutlinks . $select1. get_page_link( $page->ID ).$select2.$selecttext.$select3;


  }

  
    $args = array( 	
    'numberposts' => 100,
    'orderby' => 'post_date',
    'order' => 'DESC',
    'post_type' => 'post',
    'post_status' => 'publish', );

	$recent_posts = wp_get_recent_posts($args);
  foreach( $recent_posts as $recent ){ 
  
  
if ($recent["post_title"]==''){$recent["post_title"]="No Title Page ID  ". $recent["ID"];}

$pneoutlinks = $pneoutlinks . $select1. get_permalink($recent["ID"]).$select2.$recent["post_title"].$select3;


  }
  
  

 
    
  echo $pneoutlinks;

// return  base64_encode($pneoutlinks);
 }
}



 PNEFluxlinks()


?>