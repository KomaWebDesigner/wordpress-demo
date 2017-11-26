<?php

function FluxDBpage2() {
add_submenu_page(null,'Simply Symphony', 'Simply Symphony2' , 'unfiltered_html' , __FILE__, 'create_pnepage_menu2');
}

add_action('admin_menu', 'FluxDBpage2');


function create_pnepage_menu2() {
if (current_user_can('unfiltered_html') && current_user_can('editor') || current_user_can('administrator') ) {
 wp_enqueue_media();
?>

<input type="button" value="Refresh / Open Gallery" name="Refresh / Open Gallery" onclick="location.reload();">

<style>
#adminmenumain {
visibility:hidden;
}

 body .media-modal-backdrop, body {
    background: transparent;
    color:white;
}


.media-menu-item {
    background:#e5e5e5;
    
    
}



#wpadminbar {visibility:hidden;}
#wpfooter {visibility:hidden;}


       .attachment-details [data-setting="title"],
        .attachment-details [data-setting="caption"],
        .attachment-details [data-setting="alt"],
        .attachment-details [data-setting="description"]
  
        {
            display:none !important
        }
     
.attachment-display-settings label
{
display:none !important
}

.attachment-display-settings label:last-child
{
 display:block !important
}




</style>



<script>



function checkfluxmedia(){
   var frame;
  if ( frame ) {
      frame.open();
      return;
    }
var insertImage = wp.media.controller.Library.extend({
    defaults :  _.defaults({
            id:        'insert-image',
            title:      'Insert Image',
            allowLocalEdits: true,
            displaySettings: true,
            displayUserSettings: true,
            multiple : false,
           
          
      }, wp.media.controller.Library.prototype.defaults


 )
});

var frame = wp.media({
    button : { text : 'Select' },
    state : 'insert-image',
    states : [
        new insertImage()
    ]
});

  frame.on( 'select', function() {
     var attachment = frame.state().get('selection').first().toJSON();
    
     var fullsize = attachment.url;
    // var Aalign = wp.media.string.props( attachment ).align 
   //  var Alinkurl = wp.media.string.props( attachment ).linkUrl
        var  postlink=attachment.link




     if (attachment.mime.match('image')){

     
      var  AttachSize=attachment.sizes[wp.media.string.props( attachment ).size] || attachment
    
 
 

      }
      
   //  wp.media.string.props( attachment ).size

      if (parent.PlugNedit.SetBGimage && parent.PlugNedit.SetBGimage.id.match('tempvideoinput3') && attachment.mime.match('video')) {
parent.PlugNedit.SetBGimage=parent.document.getElementById('tempvideoinput')
parent.PNETOOLS.PlaceImage(fullsize)



} else { 
if (!attachment.mime.match('image')){alert('Image only allowed.')} else {


var m="";
   
  h =  document.getElementsByTagName("select");
  r =  document.getElementsByTagName("input");
//for (var g = 0; g < h.length; g++) {
 

      //      if (h[g].hasAttribute("data-setting") && h[g].getAttribute("data-setting") == "link" && h[g].value != 'none' ) {
            
      //          for (var k = 0; k < r.length; k++) {
      //      if (r[k].hasAttribute("data-setting") && r[k].getAttribute("data-setting") == "linkUrl" ) {
            
      //     m=r[k].value 




   
             
          
    //        }
   //     }
         

    //     }
   //     }



parent.moduleAdapter.WPfullsize = fullsize
parent.moduleAdapter.WPpostlink = postlink 

parent.PNETOOLS.PlaceImage( AttachSize.url,fullsize,postlink)


       	setTimeout( function() {
					
		               
							
						if ( parent.document.getElementById("fluxCKlinks") ){
										
                                         parent.PlugNedit.AddOption("Link To Full Size Image",  parent.moduleAdapter.WPfullsize, parent.document.getElementById("fluxCKlinks") )
                                      
                                      
                                        }
                                        
                                        			if (parent.document.getElementById("fluxCKlinks") ){
										
                                         parent.PlugNedit.AddOption("Link To Post Page",  parent.moduleAdapter.WPpostlink, parent.document.getElementById("fluxCKlinks") )
                                      
                                      
                                        }
					
						
						}, 400 );

//parent.moduleAdapter.WPfullsize = false
//parent.moduleAdapter.WPpostlink = false
    






}
}
checkfluxmedia();
parent.document.getElementById('pneimageframe').style.visibility='hidden'
parent.document.getElementById('pneimageframe').style.zIndex='-100';
parent.document.getElementById('pneimageframewrap').style.zIndex='-100';
parent.document.getElementById('pneimageframewrap').style.visibility='hidden';
 });

    


  
frame.on('close',function() {
checkfluxmedia();
parent.document.getElementById('pneimageframe').style.visibility='hidden';
parent.document.getElementById('pneimageframe').style.zIndex='-100';
parent.document.getElementById('pneimageframewrap').style.visibility='hidden';
parent.document.getElementById('pneimageframewrap').style.zIndex='-100';


});


 frame.open();
}


document.addEventListener('DOMContentLoaded', function() {window.setTimeout(checkfluxmedia(),4000)}   );


</script>

<?php

}}

?>
