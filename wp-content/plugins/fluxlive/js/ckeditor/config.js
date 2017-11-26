/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config
   //     config.extraPlugins = 'videodetector';
        config.allowedContent = true;
   
    //     config.extraPlugins = 'sharedspace';
  
         config.extraPlugins = 'removeformat,font,sharedspace,justify,colordialog,lineutils,widget,glyphicons,simplebutton';
 
 disableAutoInline = true;
 removePlugins: 'floatingspace,maximize,resize'; 


config.contentsCss = 'js/ckeditor/plugins/fontawesome/font-awesome/css/font-awesome.min.css';

	
          

config.sharedSpaces = {
    top: 'sharedspaceid'
};
        
	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection'] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others',  },
		
		{ name: 'basicstyles',  groups: [ 'basicstyles', 'cleanup' ] },
// '/',
		{ name: 'paragraph',   groups: [ 'list', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },

		{ name: 'colors' },
		{ name: 'removeformat' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Cut,Copy,Paste,PasteText,PasteFromWord,indent';
    //    config.toolbar = [ { name: 'insert', items: [ 'FontAwesome', 'Source' ] } ];


      

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';



};
