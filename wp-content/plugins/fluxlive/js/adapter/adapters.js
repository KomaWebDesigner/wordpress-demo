moduleAdapter = {
  RollBack: true,
  ObjElement: false,
  FluxProcess: true,

CKEselection : function (a){

   
    CKEDITOR.tools.callFunction(94);

   CKEDITOR.tools.callFunction(99,a,'fore'); 
    
    
},
   


  LoadCKEditor: function() {
    PlugNedit.AllowContentEditable = true;
    PlugNedit.Editablecontent = true;
    var ScriptElement = document.createElement("script");
    ScriptElement.async = true;
    var self = PlugNedit,
      editor = window,
      CanvasInline = window;
    ScriptElement.addEventListener("load", function(e) {
      CanvasInline.CKEDITOR.config.floatSpaceDockedOffsetY = 75;
      CanvasInline.CKEDITOR.config.floatSpacePinnedOffsetY = 75;
      CanvasInline.CKEDITOR.config.floatSpaceDockedOffsetX = 75;
      CanvasInline.CKEDITOR.config.floatSpacePinnedOffsetX = 75;
      CanvasInline.CKEDITOR.CKEDITORStatus = "Inline";
      CanvasInline.CKEDITOR.config.title = false;
      CanvasInline.CKEDITOR.config.removePlugins = "magicline";
      CanvasInline.CKEDITOR.config.tabindex = false;
      
    }, false);
    PNETOOLS.CKEditorInstallPath = PlugNedit.CanvasWindow.getElementById("PNEFluxInlinePath").value;
    ScriptElement.src = PNETOOLS.CKEditorInstallPath;
    ScriptElement.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(ScriptElement)
  },
  CKE: function(obj, scrollto) {
    var thiswindow = window;
    obj = window;
    if (!obj.CKEDITOR) {
      return;
    }
    obj.CKEDITOR.on("dialogDefinition", function(e) {
      var dialogName = e.data.name;
      var dialogDefinition = e.data.definition;
      if (dialogDefinition.dialog.parts.dialog) moduleAdapter.ObjElement = dialogDefinition.dialog.parts.dialog.$;
      moduleAdapter.FluxProcess = false;
   dialogDefinition.onHide = function() {
     moduleAdapter.FluxProcess = true
     PlugNedit.SetBGimage = false;
   PlugNedit.CurrentCanvasTarget = false;
     if (document.getElementById('fluxCKlinks')) {
    document.getElementById('fluxCKlinks').parentNode.removeChild(document.getElementById('fluxCKlinks'))
   }
     if (document.getElementById('fluxCKlinks')) {
      document.getElementById('fluxCKlinks').parentNode.removeChild(document.getElementById('fluxCKlinks'))
    }
  }
    })
  },


getckstatus: function(obj) {
    obj = window;
   
try {
   if (obj.CKEDITOR.dialog.getCurrent()) {
     return true;
console.log('ckonline')
} else {
return false;
}} catch (err) {}
},

  CKDestroy: function(obj) {
    obj = window;
    if (obj.CKEDITOR) try {
      if (obj.CKEDITOR.dialog.getCurrent()) obj.CKEDITOR.dialog.getCurrent().hide();
      for (var name in obj.CKEDITOR.instances) obj.window.CKEDITOR.instances[name].destroy(true);
      PlugNedit.CKEDITORStatus = "Destroyed"
    } catch (err) {}
    PlugNedit.SetContentEditable("false")
    PlugNedit.RE('sharedspaceid').style.display="none";
  },
  RenewInline: function(obj, element, divobj) {
    obj = window;
      PlugNedit.RE('sharedspaceid').style.display="block";
      
           PlugNedit.RE('sharedspaceid').style.zIndex=200000;
    if (PNETOOLS.CKEditor === false) return;
    if (obj.CKEDITOR) {
      obj.CKEDITOR.config.floatSpaceDockedOffsetY = 75;
      obj.CKEDITOR.config.floatSpacePinnedOffsetY = 75;
      obj.CKEDITOR.config.floatSpaceDockedOffsetX = 0;
      obj.CKEDITOR.config.floatSpacePinnedOffsetX = 0;
      obj.CKEDITOR.config.title = false;
      obj.CKEDITOR.config.removePlugins = "magicline";
      obj.CKEDITOR.config.tabindex = false;
      obj.CKEDITOR.config.tabindex = false;
      obj.CKEDITOR.inline(PlugNedit.CanvasWindow.getElementById(element))
      obj.CKEDITOR.dtd.$removeEmpty['span'] = false;
      divobj.setAttribute('data-fluxfocused', 'focused')
      moduleAdapter.CKE()
    }
  },
  LoadJSColor: function() {
    var ScriptElement = document.createElement("script");
    ScriptElement.src = PNETOOLS.JScolorInstallPath;
    ScriptElement.type = "text/javascript";
    ScriptElement.id = "jscolor";
    document.getElementsByTagName("head")[0].appendChild(ScriptElement)
  },
  SetPic: function(a, b) {
    if (!document.getElementById("IMGCKE")) {
      var input = document.createElement("IMG");
      input.id = "IMGCKE";
      input.src = PlugNedit.CanvasWindow.getElementById('PNEFluxPluginDir').value + "/assets/blue/gallery.png";
      input.setAttribute("style", "float:left;height:35px;cursor:point;padding-top:3px;cursor:pointer");
      input.setAttribute("title", "WordPress Image Gallery");




      var input2 = document.createElement("IMG");

      input2.id = "IMGCKE2";
      input2.src = PlugNedit.CanvasWindow.getElementById('PNEFluxPluginDir').value + "/assets/blue/shutterp.png";

      input2.setAttribute("style", "float:left;height:35px;cursor:point;padding-top:3px;padding-left:5px;cursor:pointer");
      input2.setAttribute("title", "Shutter Stock Proofing");

      var onc2 = "PlugNedit.SetBGimage=document.getElementById('" + a + "');PlugNedit.RE('shutterstockwrap').style.display='block';PlugNedit.RE('shutterstock').style.display='block';if (!PlugNedit.RE('shutterstock').src.match('shutterstock')){PlugNedit.RE('shutterstock').src='shutterstock.html'}";

      input2.setAttribute("onclick", onc2);
      var onchanges = "document.getElementById('" + b + "').src=document.getElementById('" + a + "').value";
      document.getElementById(a).setAttribute("onfocus", onchanges)
      document.getElementById(b).style.display = "";
      var onc = "PlugNedit.SetBGimage=document.getElementById('" + a + "');PlugNedit.RE('pneimageframewrap').style.zIndex='77777';PlugNedit.RE('pneimageframewrap').style.visibility='visible';PlugNedit.RE('pneimageframewrap').style.display='block';PlugNedit.RE('pneimageframe').style.zIndex='77777';PlugNedit.RE('pneimageframe').style.visibility='visible'";
      input.setAttribute("onclick", onc);
      var parent = document.getElementById(a).parentNode;
      parent.appendChild(input)
      parent.appendChild(input2)



				
					
						
			




    }
  },

                    setAttributeLinks : function(obj){
                           if (moduleAdapter.WPfullsize){
                            obj.setAttribute('data-fullsize', moduleAdapter.WPfullsize)
                            }
                            
                                         if (moduleAdapter.WPpostlink){
                            obj.setAttribute('data-postlink', moduleAdapter.WPpostlink )
                            }
                            
							

						},



  AppendLinks: function(a, b , element) {
    if (!document.getElementById("fluxCKlinks")) {
      var input = document.createElement("SELECT");
      input.id = "fluxCKlinks";
      input.innerHTML = PlugNedit.fluxHYPERlinks;
      input.setAttribute("style", "float:left;border:1px dashed red;font-weight:bolder");
      input.setAttribute("onchange", "document.getElementById('" + a + "').value=this.value;if (!document.getElementById('" + a + "').value.match(':')){document.getElementById('" + a + "').value='http://'+document.getElementById('" + a + "').value;};");
      var parent = document.getElementById(a).parentNode;
      parent.appendChild(input)
    }
    


						
						if (typeof element !== 'undefined' && element !== null  && element.hasAttribute('data-fullsize') && element.getAttribute('data-fullsize') !="" && document.getElementById("fluxCKlinks") ){
										
                                         PlugNedit.AddOption("Link To Full Size Image",  element.getAttribute('data-fullsize'), document.getElementById("fluxCKlinks") )
                                      
                                      
                                        }
                                        
                                        			if (typeof element !== 'undefined' && element !== null  && element.hasAttribute('data-postlink') && element.getAttribute('data-postlink') !="" && document.getElementById("fluxCKlinks") ){
										
                                         PlugNedit.AddOption("Link To Post Page",  element.getAttribute('data-postlink'), document.getElementById("fluxCKlinks") )
                                      
                                      
                                        }
  },



WPfullsizeA : function(a){

  if (moduleAdapter.WPfullsize){
                            a.setAttribute('data-fullsize', moduleAdapter.WPfullsize)
                            }
         },
                   
 WPpostlinkA : function (a) {

 if (moduleAdapter.WPpostlink){
                            a.setAttribute('data-postlink', moduleAdapter.WPpostlink )
                            }
}


};



             





PNEloadstatus("Adapters");
