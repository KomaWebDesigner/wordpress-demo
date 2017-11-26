<?php

/*
Internal image gallery for the editor.

*/


function PNEGallery(){
	$pnemfile='';
 if (current_user_can('unfiltered_html') && current_user_can('editor') || current_user_can('administrator') ){

    $args = array(
                        'post_type' => 'attachment',
                        'numberposts' => 600,
                        'post_status' => null,
                        'post_parent' => null,
						'post_mime_type' => 'image',
						'order' => 'DESC'
						
                        );
					
					

                    $attachments = get_posts( $args );
				
                   if ( $attachments ) {
                        foreach ( $attachments as $attachment ) {
                        
					    $meta = wp_get_attachment_metadata( $attachment->ID );
						$imgatt=wp_get_attachment_image_src( $attachment->ID,'full' );
						
						if(isset($imgatt[0]) && isset($meta['file'])  && isset($meta['width'])  && isset($meta['height']) ){
						$pnemfile = $pnemfile . $imgatt[0] .'|'. $meta['file'].'|'.$meta['width'].'|'.$meta['height'].';';
                        if ( isset($meta['sizes']['thumbnail'])){
						$imgatt=wp_get_attachment_image_src( $attachment->ID, 'thumbnail' ) ;
						$pnemfile = $pnemfile . $imgatt[0] .'|'. $meta['sizes']['thumbnail']['file'].'|'.$meta['sizes']['thumbnail']['width'].'|'.$meta['sizes']['thumbnail']['height'];						
						};
						$pnemfile = $pnemfile . ';'; 
						if ( isset($meta['sizes']['medium'])){
						$imgatt=wp_get_attachment_image_src( $attachment->ID, 'medium' ) ;
						$pnemfile = $pnemfile  . $imgatt[0] .'|'. $meta['sizes']['medium']['file'].'|'.$meta['sizes']['medium']['width'].'|'.$meta['sizes']['medium']['height'];		
						};
						$pnemfile = $pnemfile . ';';
						if ( isset($meta['sizes']['large'])){
						$imgatt=wp_get_attachment_image_src( $attachment->ID, 'large' );
						$pnemfile = $pnemfile . $imgatt[0] .'|'. $meta['sizes']['large']['file'].'|'.$meta['sizes']['large']['width'].'|'.$meta['sizes']['large']['height'];		
										
				         }
				         
				    $pnemfile =  $pnemfile.',' ;
				 }
  }						
 }
}
	
return rtrim($pnemfile, ',');

};
 ?>
 <div style="height:15px"></div>
<?php 
$TheGallery=PNEGallery();
if($TheGallery != ''){
$PNEFLUXPICS = explode(',', $TheGallery);

echo "<ul class='gallery'>";


$pnegallerycount = 0;
foreach($PNEFLUXPICS as $item) {
   $pnegallerycount++;
   $sizes = explode(';', $item);
 
 
    echo '<il>';
     if ( isset( $sizes[1])  &&  strlen($sizes[1]) > 10  ){
    $strings = explode('|', $sizes[1]);
    echo '<img src="'.$strings[0].'">';
    
    } else {
    
   $strings = explode('|', $sizes[0]);
   echo '<img src="'.$strings[0].'">';
    }
    echo '<br><select id="b'.$pnegallerycount.'">';
    if ( isset( $sizes[0]) &&  strlen($sizes[0]) > 10 ){
     $strings = explode('|', $sizes[0] );
     
     echo '<option value="'.$strings[0].'">'. $strings[2] .' X '. $strings[3].'</option>';
     }
    if ( isset( $sizes[1])   &&  strlen($sizes[1]) > 10 ){
       $strings = explode('|', $sizes[1]);
     echo '<option value="'.$strings[0].'">'. $strings[2] .' X '. $strings[3].'</option>';
     }
    if ( isset( $sizes[2])  &&  strlen($sizes[2]) > 10 ){ 
         $strings = explode('|', $sizes[2]);
     echo '<option value="'.$strings[0].'">'. $strings[2] .' X '. $strings[3].'</option>';
    }
    if ( isset( $sizes[3]) && strlen($sizes[3]) > 10 ){
         $strings = explode('|', $sizes[3]);
         echo 'string3 '.  $sizes[3];
     echo '<option value="'.$strings[0].'">'. $strings[2] .' X '. $strings[3].'</option>';
     }
    
     echo '</select><br>';
        if ( isset( $sizes[0]) &&  strlen($sizes[0]) > 10 ){
     $strings = explode('|', $sizes[0] );
     
     echo '<input type="hidden" id=l'.$pnegallerycount.' value="'.$strings[0].'"><br>';
     }
     echo '<input style="width:120px" class = "button2" type="button" name="  Insert  " value="  Insert  " onclick="setpic('.$pnegallerycount.')">';
     echo '</il>';
   foreach($sizes as $indypics) {
   $dimensions = explode('|', $indypics);
   foreach($dimensions as $objects) {
    }
  }
}

echo "</ul>";
}
?>


<style>
.gallery {
position:relative;
float:left;
padding : 3px;
}

.gallery img {

padding : 1px;
max-width:100%;
max-height: 150px;
}

.gallery il {
border: 2px solid blanchedalmond;
text-align:center;
position:relative;
float:left;
width:150px;
height:235px;
padding : 3px;
font-size:11px;
font-weight:bold;
}

.gallery select {
padding : 2px;
}

.gallery input {
padding : 2px;
}

.pnefloat {
padding : 2px;
position:fixed;
top:0px;
left:0px;
width:100%;
height:20px;
background-color:blanchedalmond;

}

.button2 {color:white;
background: grey;text-decoration:none;font-size:13px;font-weight:bolder;line-height:13px;padding:3px 8px;cursor:pointer;border-width:1px;border-style:solid;-webkit-border-radius:5px;border-radius:5px;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}


</style>
<script>

function setpic(a){
var fullsize=false;
var fullsizechecked=false;
if (document.getElementById('l'+a)){
fullsize=document.getElementById('l'+a).value

}

parent.PNETOOLS.PlaceImage(document.getElementById('b'+a).value,fullsize)
parent.document.getElementById('pneimageframe').style.display='none'

}

</script>
<div class="pnefloat">
<input class="button2" type="button" name="Close Window" value="Close Window" onclick="parent.document.getElementById('pneimageframe').style.display='none'">

</div>