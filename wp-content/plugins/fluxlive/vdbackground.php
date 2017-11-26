<!DOCTYPE html>
<!-- vidbackground -->
<?php 
global $post;

if (post_password_required($post)){

exit;

}

$pnecout=apply_filters( 'the_content', $post->post_content );
$pnecolor='background-color:white';
if (preg_match('/data-pnebgcolor=\"([^\"]*)\"/i', $pnecout, $matches)){
if ($matches[1] != ''){
$pnecolor='background-color:'.$matches[1];

}}

$pneimage='';
if (preg_match('/data-videoimagefallback=\"([^\"]*)\"/i', $pnecout, $matches)){
if ($matches[1] != ''){
$pneimage=$matches[1];

}}


?>
<html id="bodyfallback" >
<head>
<meta charset="UTF-8"/>
<title><?php echo get_the_title(); ?></title>

<script>
<?php 
if (!isset($_GET['PNENoWPToolbars']) ){
?>
isMobileInFlux=false;
<?php if (wp_is_mobile() ) {
echo "isMobileInFlux=true;";
}  ?>
<?php  
} else {
echo "isMobileInFlux=true;";
}
?>
</script>

<?php
wp_head();
?>

<script>
function setMenuToggle(){
if (document.getElementById('navfluxmenu').style.display!='block'){
document.getElementById('navfluxmenu').style.display='block'
} else {
document.getElementById('navfluxmenu').style.display='none';
}
}
</script>
<noscript>
<style>
#navfluxmenu {
display:block;
}
</style>
</noscript>


<style>

html{
    background-image:url('<?php echo $pneimage ?>');
    background-attachment:fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}


</style>

<?php if ($GLOBALS['FluxDisplayFull'] == true ) {
echo '<meta name="viewport" content="width=968">';
} else {
echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
}
?>
<?php 
if ( !isset($_GET['PNENoWPToolbars'])){
echo '<style> html { '.$pnecolor.' !important ;}</style>';
} else {
echo '<style> html { '.$pnecolor.';}</style>';
}
?>
</head>
<body style="background-color:transparent;max-width:100%" >


<div class="FluxContentWrapper" style="min-height:90vh">
<div class="FluxNormalContent">
<?php 
 echo $pnecout;
?>
</div>
</div>


<!-- Start PNE footer-->
<?php 
 wp_footer();

?>

<div class="FluxSSLink">

		<div >
			<a style="font-size:10px;vertical-align:top;" href="<?php echo esc_url( __( 'http://plugnedit.com/', 'Flux Live' ) ); ?>"><?php printf( __( 'Powered by %s', 'Flux Live!' ), 'Flux Live' ); ?></a>
		</div><!-- .site-info demoflux -->

</div>
</body>
</html>