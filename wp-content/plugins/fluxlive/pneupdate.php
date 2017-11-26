<?php   


function FluxDBpage() {
add_menu_page('Simply Symphony', 'Simply Symphony' , 'administrator' , __FILE__, 'create_pnepage_menu');
}


add_action('admin_menu', 'FluxDBpage');

function create_pnepage_menu() {





if (is_admin() && current_user_can( 'administrator')) {
if (isset($_POST['ThemeorFluxCSSupdate']) && isset( $_POST['pneupdateopt']) && wp_verify_nonce( $_POST['pneupdateopt'], 'noncepne' )  ){


if (isset($_POST['ThemeorFluxCSS']) && $_POST['ThemeorFluxCSS'] == "checked"  ){
update_option( 'ThemeorFluxCSS', 'checked' );
} else {
update_option( 'ThemeorFluxCSS', '' );
}

if (isset($_POST['FluxParseCanvas']) && $_POST['FluxParseCanvas'] == "checked"  ){
update_option( 'FluxParseCanvas', 'checked' );
} else {
update_option( 'FluxParseCanvas', '' );
}

if (isset($_POST['FluxRemoveHTML']) && $_POST['FluxRemoveHTML'] == "checked"  ){
update_option( 'FluxRemoveHTML', 'checked' );
} else {
update_option( 'FluxRemoveHTML', '' );
}

if (isset($_POST['CKEditortoFlux']) && $_POST['CKEditortoFlux'] == "checked"  ){
update_option( 'CKEditortoFlux', 'checked' );
} else {
update_option( 'CKEditortoFlux', '' );
}
if (isset($_POST['JSColortoFlux']) && $_POST['JSColortoFlux'] == "checked"  ){
update_option( 'JSColortoFlux', 'checked' );
} else {
update_option( 'JSColortoFlux', '' );
}


}
?>
<div style="padding:40px">
<div> 

<div style="background-color:#FFDDEE;font-size:16px;padding:20px;margin:0px">
<p>
<b>Free Version:</b> We included a full package in the free version without limitations, you have all the tools needed to build a website.
</p><p>
<b>Support Us: </b> Please <a href="https://wordpress.org/support/view/plugin-reviews/fluxlive">rate plugin</a> to support us. This plugin currently has 15,600 man hours in the production of the core drag and drop feature, please help us continue to develop drag and drop features for the future.
</p><p></p><p>
<b>Forums: </b> Brand new forums for <a href="http://simplysymphony.com/forums/">Support.</a>
</p><p>
<b>Help: </b>  <a href="http://plugnedit.com/Fluxvideohelp/fluxhelp/vd.html"> How To Videos.</a>
</p><p></p><p>
<b>
Premium Version: </b> The extended version has 600+ web fonts, CSS transitions, video page backgrounds, image backgrounds, blank templates, HTML parsing to remove extended editor HTML, and support.  <a href="http://plugneditflux.binpress.com/product/simply-symphony-html-5-full-drag-drop-editor/3360">Simply Symphony Extended.</a>
</p>

</p><p>
</div><br>


<img src="<?php echo plugin_dir_url(__FILE__);?>assets/howto.png">
<h4>How To Load Editor:</h4>
<p>
On the top admin menu bar click the Simply Symphony drop down, Select New Page/ New Post to build a new page.<br>
To load a Simply Symphony visit either the page on the front end or WordPress editor edit post/page, You will see Load Simply Symphony Page in the drop down menu.
</p>


<p>
The editor uses exact positioning of objects on your page in a click and move format, which allows for 3D editing, height, width and depth.
</p><p>
This format causes problems with changing of themes due to changes in the CSS ( Cascading Style Sheet ) in the new theme, we do not recommend use of Simply Symphony if you change themes.

</p>

</div>
<form name="updatecss" method="post" action="#">
<br>
<span style="font-size:16px">General Settings</span><br><br>

All settings only effect pages built with the editor and will not make changes to your site.
<br><br>
Do not check theme CSS unless you are a developer, You should check all aspects of your page and @media CSS for proper display if checked.<br>
Use your personal themes CSS :   <input type="checkbox" name="ThemeorFluxCSS" value="checked" <?php echo get_option( 'ThemeorFluxCSS' ); ?>> <br><br>

Simply Symphony can connect to CKEditor for inline custom formmating of your pages.<br>

Load CKEditor :   <input type="checkbox" name="CKEditortoFlux" value="checked" <?php echo get_option( 'CKEditortoFlux' ); ?>> <br><br>
Simply Symphony can connect to JSColor for IE color picker.<br>
Load JSColor :   <input type="checkbox" name="JSColortoFlux" value="checked" <?php echo get_option( 'JSColortoFlux' ); ?>> <br><br>

 <br><br>
 
<span style="font-size:16px">Parsing & Errors</span><br><br>


Parse HTML Canvas :   <input type="checkbox" name="FluxParseCanvas" value="checked" <?php echo get_option( 'FluxParseCanvas' ); ?>> <br><br>

Parse the page to remove all editor HTML : 
<input type="checkbox" name="FluxRemoveHTML" value="checked" <?php echo get_option( 'FluxRemoveHTML' ); ?>> <br><br>
<input type="hidden" name="ThemeorFluxCSSupdate" value="true" >

<br><br>

<textarea id="FluxStylesNav" name="FluxStylesNav" style="width:500px;height:300px;display:none">

</textarea>
<?php
wp_nonce_field( 'noncepne', 'pneupdateopt' )
?>
<input type="submit" value="Update Options" name="  Update Options  ">




</form>
</div>

<?php
}}
?>
