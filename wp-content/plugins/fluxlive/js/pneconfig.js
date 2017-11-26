var PNETOOLS =
{
   PreInitEditor : function()
   {
      PlugNedit.PrepEnvironment();
      document.getElementById("EditorGrids").style.background = ""
   }
   , UnlockMobile : function()
   {
      this.FullToMobile = ! 1;
      PlugNedit.GetCanvasObject.MobileCanvas().setAttribute("data-FluxUnlocked", "true");
      parent.document.getElementById("StopEditing").style.display = "none";
      parent.document.getElementById("Information").style.display = "none"
   }
   , SwithToTemplateCanvas : function(a)
   {
      if("Mobile" == a)
      {
         this.FullToMobile && (parent.document.getElementById("StopEditing").style.display =
         "", parent.document.getElementById("Information").style.display = ""); PlugNedit.REI(this.DefaultMobile).style.display = "";
         PlugNedit.BuildMobilePage();
         PlugNedit.IsFullWidth && (PlugNedit.GetCanvasObject.FullWidthCanvas().style.display = "none", PlugNedit.GetCanvasObject.FullWidthMobileCanvas().style.display = "");
         PlugNedit.REI(this.DefaultCanvas).style.display = "none";
         var b = Math.round(document.body.clientWidth / 2 - 160);
         PlugNedit.CanvasWindow.getElementById("FluxVid") && (PlugNedit.CanvasWindow.getElementById("FluxVid").style.display =
         "none");
         document.getElementById("PNECANVASiframe").style.width = "100%";
         PlugNedit.CanvasWindow.getElementsByTagName("BODY")[0].style.width = "320px";
         PlugNedit.CanvasWindow.getElementsByTagName("HTML")[0].style.width = "320px";
         PlugNedit.CanvasWindow.getElementsByTagName("HTML")[0].style.margin = "0px auto";
        // PlugNedit.CanvasWindow.getElementsByTagName("HTML")[0].style.backgroundColor = "whitesmoke";
         document.getElementById("PNECANVASiframe").style.left = b + "px";
         PlugNedit.CanvasWindow.removeEventListener("mousemove",
         PlugNedit.MouseMove);
         PlugNedit.CurrentCanvas = this.DefaultMobile;
         window.scrollTo(0, 0)
      }
      "Full" == a && (PlugNedit.CanvasWindow.getElementById("FluxVid") && (PlugNedit.CanvasWindow.getElementById("FluxVid").style.display = ""), PlugNedit.IsFullWidth && (PlugNedit.GetCanvasObject.FullWidthCanvas().style.display = "", PlugNedit.GetCanvasObject.FullWidthMobileCanvas().style.display = "none"), PlugNedit.REI(this.DefaultCanvas).style.display = "", PlugNedit.REI(this.DefaultMobile).style.display = "none", parent.document.getElementById("Information").style.display =
      "none", parent.document.getElementById("StopEditing").style.display = "none", document.getElementById("PNECANVASiframe").style.width = "100%", document.getElementById("PNECANVASiframe").style.left = "0px", PlugNedit.CanvasWindow.getElementsByTagName("BODY")[0].style.width = "", PlugNedit.CanvasWindow.getElementsByTagName("HTML")[0].style.width = "", PlugNedit.AddEventListen(PlugNedit.CanvasWindow, "mousemove", PlugNedit.MouseMove), PlugNedit.CurrentCanvas = this.DefaultCanvas, document.getElementById("sharedspaceid").style.bottom =
      "42px");
      PlugNedit.ReleaseElements();
      PlugNedit.SetPageOffsets();
      PlugNedit.CleanWorkArea(void 0, void 0, ! 0, void 0);
      PlugNedit.SetPageOffsets()
   }
   , EditorReady : function()
   {
      "checked" == PlugNedit.CanvasWindow.getElementById("LoadCKEDITOR").value && moduleAdapter.LoadCKEditor();
      "checked" == PlugNedit.CanvasWindow.getElementById("LoadJSCOLOR").value && PNETOOLS.Loadjscolor && moduleAdapter.LoadJSColor();
      document.getElementById("pneimageframe").style.visibility = 'hidden';
      document.getElementById("pneimageframe").style.Zindex = '-500';
      document.getElementById("pneimageframe").style.display = '';
      
      document.getElementById("pneimageframe").src = PlugNedit.CanvasWindow.getElementById("PNEFluxGallerURL").value;
      parent.document.getElementById("SubmitHTML").action =
      PlugNedit.CanvasWindow.getElementById("PNEFluxAdminurl").value + "?PlugneditUpdate=1";
      parent.document.getElementById("pageid").value = PlugNedit.CanvasWindow.getElementById("PNEFluxID").value;
      PlugNedit.EditorReadyState = ! 0
   }
   , CloseEditor : function()
   {
      PlugNedit.CanvasWindow.onbeforeunload = ""; window.onbeforeunload = ""; parent.onbeforeunload = ""; PlugNedit.GetEditorObject.PageHTML().value = PlugNedit.CanvasHTML;
      parent.document.getElementById("PlugNeditPageContent").value = PlugNedit.CanvasHTML;
      parent.document.getElementById("SubmitHTML").submit()
   }
   ,
   PNEtoolbaroffset : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], EditorMinLeft : 25, EditorMinTop : 0, HighLightObjectsColor : "#FB8604", LowLightObjectsColor : "#5E7B7B", FullToMobile : ! 0, JSCorlor : ! 0, CKEditor : ! 0, CKEditorInstallPath : "js/ckeditor/ckeditor.js", JScolorInstallPath : "js/jscolor/jscolor.js", FullWidthObjects : ! 0, FontFramePath : "googlefonts.html", MarginHeight : 1E3, MarginWidth : 800, Rulers : ! 1, Debug : ! 0, MarginColor : "#FFB9FF", GuidesColor : "#b6e4ff", GuidesSnapColor : "#72d2c0", DisplayMenu : "none", NudgeDisplay : "none", DisplayMiniTools : "", EditorToolbarOffsetTop : 40,
   SaveContent : "editor", TypeMultiCanvas : ! 0, TypeMobile : ! 0, DefaultCanvas : "FluxFullCanvas", DefaultMobile : "FluxMobileCanvas", FixedCanvasWidth : "300", MobileCanvas :
   {
      FluxFullCanvas : 800, FluxMobileCanvas : 340
   }
   , CanvasObjects :
   {
      Frame1 : 800, Frame2 : 80
   }
   , EditorObjectsIDs :
   {
      TopMoveAll : "TopMoveAll", PlugNeditInsert : "PlugNeditInsert", RightSideButtons : "RightSideButtons", PlugNeditUpdate : "PlugNeditUpdate", SnapDisplay : "SnapDisplay", LayerOptionsDialogBox : "LayerOptionsDialogBox", ToolTip : "ToolTip", EditorMirrorCanvas : "EditorMirrorCanvas",
      LayerNamesInput : "LayerNamesInput", LayerNameDialogBox : "LayerNameDialogBox", LayerNumberUpdate : "LayerNumberUpdate", NewLayerName : "NewLayerName", OptionsImageSrc : "OptionsImageSrc", CustomUrl : "CustomUrl", OptionsLinkTarget : "OptionsLinkTarget", PageHTML : "PlugNeditPageContent", OverFlowVisible : "OverFlowVisible", LayersPallet : "LayersPallet", CrossHairs : "CrossHairs", MirrorCanvasContainer : "MirrorCanvasContainer", MirrorCanvasTools : "MirrorCanvasTools", OptionStylesSelect : "OptionStylesSelect", OptionMenuStylesSelect : "OptionMenuStylesSelect",
      SideBarButtons : "SideBarButtons", LeftSideButtons : "LeftSideButtons", MarginsWidthInput : "MarginsWidthInput", DisplayCanvasToggle : "DisplayCanvasToggle", Pencil : "Pencil", ResizeMove : "ResizeMove", Resize : "Resize", Menu : "Menu", ImageActual : "ImageActual", Constrain : "Constrain", WhiteSpace : "WhiteSpace", LoadEditor : "LoadEditor", Locked : "Locked", UnLocked : "UnLocked", MenuContainer : "MenuContainer", NudgeDisplay : "NudgeDisplay", GuidesLeft : "GuidesLeft", GuidesTop : "GuidesTop", GuidesBottom : "GuidesBottom", GuidesRight : "GuidesRight",
      GuidesCenterH : "GuidesCenterH", GuidesCenterV : "GuidesCenterV", ActualImageChords : "ActualImageChords", ImageHeightChord : "ImageHeightChord", ImageWidthChord : "ImageWidthChord", TopPositionChord : "TopPositionChord", LeftPostionChord : "LeftPostionChord", HeightChord : "HeightChord", WidthChord : "WidthChord", SwatchMenu : "SwatchMenu", EditableSource : "EditableSource", RulersLeft : "RulersLeft", RulersRight : "RulersRight", EditorGrids : "EditorGrids", RightClickMenu : "RightClickMenu", GuidesContainer : "GuidesContainer", EditorCanvasCover : "EditorCanvasCover",
      InputEmbedMenu : "InputEmbedMenu", ColoredCover : "ColoredCover", OptionsLayerName : "OptionsLayerName", OptionsURLsrc : "OptionsURLsrc", OptionsCustomURL : "OptionsCustomURL", OptionsHyperLinkSelect : "OptionsHyperLinkSelect", OptionsLinkTarget : "OptionsLinkTarget", OptionsOffsiteDiv : "OptionsOffsiteDiv", HTMLSubmitWindow : "HTMLSubmitWindow", EntryPageSelection : "EntryPageSelection", MiniToolbar : "MiniToolbar", MarginCenter : "MarginCenter", CanvasSelection : "CanvasSelection", MiniToolBarImage : "MiniToolBarImage", MiniToolBarHTML : "MiniToolBarHTML",
      FloatingToolsContainer : "FloatingToolsContainer"
   }
   , SavePage : function(a)
   {
      parent.document.getElementById("StopEditing").style.display = "";
      PlugNedit.SavePage(a)
   }
   , EditorOptions : function(a)
   {
      PlugNedit.EditorOptions(a)
   }
   , Swatches : function(a)
   {
      PlugNedit.Swatches(a)
   }
   , StyleEditorObject : function(a, b, c)
   {
      PlugNedit.StyleEditorObject(a, b, c)
   }
   , ReloadVideo : function(a)
   {
      PlugNedit.ReloadVideo(a)
   }
   , HideEditorMenus : function(a)
   {
      PlugNedit.HideEditorMenus(a)
   }
   , SubmitEmbed : function(a)
   {
      PlugNedit.SubmitEmbed(a)
   }
   , SideBar : function(a)
   {
      PlugNedit.SideBar(a)
   }
   ,
   NewHTMLLayer : function(a)
   {
      PlugNedit.NewHTMLLayer(a)
   }
   , EmbedHTML : function(a)
   {
      PlugNedit.EmbedHTML(a)
   }
   , ToolTip : function(a)
   {
      PlugNedit.ToolTip(a)
   }
   , PNEInt : function(a)
   {
      PlugNedit.initPlugNEdit(a)
   }
   , SortText : function(a)
   {
      PlugNedit.SortDivText(a, "1")
   }
   , SortDivText : function(a)
   {
      PlugNedit.SortDivText(a, "2")
   }
   , Onselct : function(a)
   {
      PlugNedit.Onselect(a)
   }
   , ONContextMenus : function(a)
   {
      PlugNedit.ONContextMenus(a)
   }
   , DLStylenew : function(a, b, c)
   {
      PlugNedit.DLStylenew(a, b, c)
   }
   , DLStyle : function(a, b, c)
   {
      PlugNedit.DLStylenew(a, b, c)
   }
   , LoadInlineEditor : function(a)
   {
      PlugNedit.LoadHTMLEditor(a)
   }
   ,
   FontSize : function(a)
   {
      PlugNedit.changeFontSize(a)
   }
   , TextAlign : function(a)
   {
      PlugNedit.TextAlign(a)
   }
   , FontSelect : function(a)
   {
      PlugNedit.FontSelect(a)
   }
   , FontWeight : function(a)
   {
      PlugNedit.FontWeight(a)
   }
   , FontStyle : function(a)
   {
      PlugNedit.FontStyle(a)
   }
   , LTRText : function(a)
   {
      PlugNedit.LTRText(a)
   }
   , RTLText : function(a)
   {
      PlugNedit.RTLText(a)
   }
   , StyleInlinediv : function(a, b, c)
   {
      PlugNedit.StyleInlinediv(a, b, c)
   }
   , Preview : function(a)
   {
      PlugNedit.Preview(a)
   }
   , WindowBar : function(a)
   {
      PlugNedit.WindowBar(a)
   }
   , UndoIt : function(a)
   {
      PlugNedit.UndoIt(a)
   }
   ,
   Guides : function(a)
   {
      PlugNedit.Guides(a)
   }
   , Qupdate : function(a, b, c, d, e)
   {
      PlugNedit.Qupdate(a, b, c, d, e)
   }
   , GetHTML : function(a)
   {
      PlugNedit.GetHTML(a)
   }
   , BGColor : function(a)
   {
      PlugNedit.BGColor(a)
   }
   , ResetMargins : function(a)
   {
      PlugNedit.ResetMargins(a)
   }
   , DeleteLayers : function(a)
   {
      PlugNedit.DeleteLayers(a)
   }
   , TransDiv : function(a)
   {
      PlugNedit.TransDiv(a)
   }
   , loadXMLDoc : function(a)
   {
      PlugNedit.loadXMLDoc(a)
   }
   , LayerAdjust : function(a, b, c)
   {
      PlugNedit.LayerAdjust(a, b, c)
   }
   , OFFSiteHBlur : function(a)
   {
      PlugNedit.OFFSiteHBlur()
   }
   , DisplayOptionsMenu : function(a)
   {
      PlugNedit.DisplayOptionsMenu()
   }
   ,
   OCCUL : function(a)
   {
      PlugNedit.OCCUL(a)
   }
   , AutoSaves : function(a)
   {
      PlugNedit.autosaveson(a)
   }
   , PlaceImage : function(a, b, c)
   {
      PlugNedit.SetBGimage ? (PlugNedit.SetBGimage.value = a, PlugNedit.SetBGimage.onkeyup, PlugNedit.SetBGimage.onchange, PlugNedit.SetBGimage.focus()) : PlugNedit.PlaceImage(a, void 0, void 0, b, c);
      PlugNedit.SetBGimage && PlugNedit.CurrentCanvasTarget && PlugNedit.CurrentCanvasTarget.setAttribute("data-fullsizess", b);
      PlugNedit.SetBGimage = ! 1
   }
   , CONTROLLayers : function(a)
   {
      PlugNedit.ControlLayers(a)
   }
   , SelectLayerStyle : function(a)
   {
      PlugNedit.SelectLayerStyle(a)
   }
   ,
   VHC : function(a, b)
   {
      PlugNedit.validateHColor(a, b)
   }
   , CheckEmbed : function(a)
   {
      PlugNedit.CheckEmbed(a)
   }
   , SubmitEmbed : function(a)
   {
      PlugNedit.SubmitEmbed(a)
   }
   , SetGradient : function(a, b)
   {
      PlugNedit.SetGradient(a, b)
   }
   , Grids : function(a)
   {
      PlugNedit.Grids(a)
   }
   , PadBottom : function(a)
   {
      PlugNedit.PadBottom(a)
   }
   , SingleHandle : function(a)
   {
      PlugNedit.SingleHandle(a)
   }
   , CloneLayers : function(a)
   {
      PlugNedit.CloneLayer(a)
   }
    , SetTextObjectsToolbars : function()
   {
     PlugNedit.GetEditorObject.TopMoveAll().style.display = "";
   PlugNedit.GetEditorObject.ResizeMove().style.display =     "";
    PlugNedit.GetEditorObject.Resize().style.display = "";
//      PlugNedit.GetEditorObject.Menu().style.display = "";
//      PlugNedit.GetEditorObject.WhiteSpace().style.display = "";
//      PlugNedit.GetEditorObject.LoadEditor().style.display = "";
//      PlugNedit.GetEditorObject.Pencil().style.display = "";
             PlugNedit.isLockedLayer() ? PlugNedit.GetEditorObject.Locked().style.display = "" :  PlugNedit.GetEditorObject.Locked().style.display = "none"
      
           if (!PlugNedit.CurrentLayerObject.Container.hasAttribute('data-fluxfullwidth') ){ 
          PlugNedit.RE('Resizetopmiddle').style.display="";
          PlugNedit.RE('Resizeleftmiddle').style.display="";
           PlugNedit.RE('Resizeleftbottom').style.display="";
            PlugNedit.RE('Resizerightmiddle').style.display="";
            PlugNedit.RE('Resizerighttop').style.display="";
            PlugNedit.RE('Resizebottommiddle').style.display="";
         
         }
   
           
       
        PlugNedit.RE('Resizelefttop').style.display="";
             
   }
   , SetImageObjectsToolbars : function()
   {
      PlugNedit.GetEditorObject.TopMoveAll().style.display = "";
      PlugNedit.GetEditorObject.ResizeMove().style.display =
      "";
      PlugNedit.GetEditorObject.Resize().style.display = "";
      
//   PlugNedit.GetEditorObject.Menu().style.display = "";
//PlugNedit.GetEditorObject.ImageActual().style.display = "";
//PlugNedit.GetEditorObject.Constrain().style.display = "";
//PlugNedit.GetEditorObject.Pencil().style.display = "";
    
    
      PlugNedit.RE('Resizerighttop').style.display="";
      PlugNedit.RE('Resizerightmiddle').style.display="none";
      PlugNedit.RE('Resizebottommiddle').style.display="none";
       PlugNedit.RE('Resizeleftbottom').style.display="";
       PlugNedit.RE('Resizeleftmiddle').style.display="none";
        PlugNedit.RE('Resizelefttop').style.display="";
        PlugNedit.RE('Resizetopmiddle').style.display="none";
      
      PlugNedit.isLockedLayer() ? PlugNedit.GetEditorObject.Locked().style.display = "" :  PlugNedit.GetEditorObject.Locked().style.display = "none"
   }
   , SetTextToolbarPosition : function(a)
   {
       
       
       
     
      a.hasAttribute("data-PNERotation") ? PlugNedit.Radian(a.getAttribute("data-PNERotation")) :
      (parseInt(a.style.top), parseInt(a.style.left));
      
      
      PlugNedit.GetEditorObject.EditorLayer(a.id).style.left = a.style.left;
      
     
      if(PlugNedit.isImage(a.id))
      {
         var b;
         b = 100 > parseInt(a.style.width) ? parseInt(a.style.left) + "px" : parseInt(a.style.left) + parseInt(a.style.width) + "px";
 
         var c = Math.max(20, parseInt(a.style.width) / 2) + parseInt(a.style.left), d = Math.max(0, parseInt(a.style.width)) + parseInt(a.style.left);
         
         
            var zz;
          
           if ( a.hasAttribute("data-PNEFullWidth")){
             zz=220;
            } else{
            zz = 50 > parseInt(a.style.width)? parseInt(a.style.left) + 50+20 : d+20;
            }
            
            
         PlugNedit.GetEditorObject.TopMoveAll().style.left = zz + 10+ "px";
         PlugNedit.GetEditorObject.TopMoveAll().style.top = parseInt(a.style.top)  + "px";
         PlugNedit.GetEditorObject.ResizeMove().style.left = zz-5 + "px";
         PlugNedit.GetEditorObject.Resize().style.left = d - 5 + "px";
         PlugNedit.GetEditorObject.Resize().style.top = parseInt(a.style.height) + parseInt(a.style.top) - 5 + "px";
      
         PlugNedit.GetEditorObject.ResizeMove().style.top = parseInt(a.style.height) + parseInt(a.style.top)  + "px";
      //   PlugNedit.GetEditorObject.TopMoveAll().style.left = d + 0 + "px";
         
              PlugNedit.RE('Resizerightmiddle').style.left = d -5 + "px";
            PlugNedit.RE('Resizerighttop').style.left = d -5 + "px";
            
                PlugNedit.RE('Resizetopmiddle').style.top= parseInt(a.style.top) -6 + "px";
                PlugNedit.RE('Resizetopmiddle').style.left = (d) - (parseInt(a.style.width) /2 ) - 5   + 0 + "px";
            
           PlugNedit.RE('Resizerightmiddle').style.top =
         ((parseInt(a.style.height) /2 )+ parseInt(a.style.top)) -5  + "px";
              PlugNedit.RE('Resizerighttop').style.top = parseInt(a.style.top) - 6 + "px";
              
              
                 PlugNedit.RE('Resizebottommiddle').style.left = (d) - (parseInt(a.style.width) /2 ) -6  + 0 + "px";
            
           PlugNedit.RE('Resizebottommiddle').style.top =
         ((parseInt(a.style.height) )+ parseInt(a.style.top)) - 6 + "px";
         
             PlugNedit.RE('Resizeleftbottom').style.left = parseInt(a.style.left)-6+'px'
       PlugNedit.RE('Resizeleftmiddle').style.left = parseInt(a.style.left)-6+'px'
        PlugNedit.RE('Resizelefttop').style.left = parseInt(a.style.left)-6+'px'
          
               PlugNedit.RE('Resizeleftbottom').style.top = ((parseInt(a.style.height) )+ parseInt(a.style.top))-6+'px'
       PlugNedit.RE('Resizeleftmiddle').style.top =((parseInt(a.style.height) /2 )+ parseInt(a.style.top))-6+'px'
        PlugNedit.RE('Resizelefttop').style.top =  parseInt(a.style.top) - 6 + "px";
              
         
         PlugNedit.GetEditorObject.ResizeMove().style.top = parseInt(a.style.height) + parseInt(a.style.top) - 15 + "px"
         
      }
      else
      {
         b = 200 > parseInt(a.style.width) ? parseInt(a.style.left) + 200 : parseInt(a.style.left) + parseInt(a.style.width);
         var e;
         a.hasAttribute("data-PNEFullWidth") ? (c = 250, b = d = 300) : (c = Math.max(50, parseInt(a.style.width) / 2) + parseInt(a.style.left), d = Math.max(0, parseInt(a.style.width)) + parseInt(a.style.left));
         e = parseInt(a.style.top);
         0 > e && (e = 0);
      
           PlugNedit.GetEditorObject.TopMoveAll().style.top = e  + "px";
           
           var zz;
          
           if ( a.hasAttribute("data-PNEFullWidth")){
             zz=220;
            } else{
            zz = 50 > parseInt(a.style.width)? parseInt(a.style.left) + 50+20 : d+20;
            }
            
            
           PlugNedit.GetEditorObject.TopMoveAll().style.left = zz  + 10
          + "px";
         PlugNedit.GetEditorObject.ResizeMove().style.left = zz-5 + "px";
        
        
         PlugNedit.GetEditorObject.Resize().style.left = d -5 + "px";
         PlugNedit.GetEditorObject.Resize().style.top =
         parseInt(a.style.height) + parseInt(a.style.top) -6 + "px";
        PlugNedit.RE('Resizerightmiddle').style.left = d -6 + "px";
            PlugNedit.RE('Resizerighttop').style.left = d - 5+ "px";
            
                PlugNedit.RE('Resizetopmiddle').style.top= (parseInt(a.style.top) -6) + "px";
                PlugNedit.RE('Resizetopmiddle').style.left =( (d) - (parseInt(a.style.width) /2 ) - 6 )  + 0 + "px";
            
           PlugNedit.RE('Resizerightmiddle').style.top =
         ((parseInt(a.style.height) /2 )+ parseInt(a.style.top)-5)  + "px";
              PlugNedit.RE('Resizerighttop').style.top = parseInt(a.style.top) - 6 + "px";
              
              
                 PlugNedit.RE('Resizebottommiddle').style.left = (d) - (parseInt(a.style.width) /2 ) -6  + 0 + "px";
            
           PlugNedit.RE('Resizebottommiddle').style.top =
         ((parseInt(a.style.height) )+ parseInt(a.style.top)) - 6 + "px";
         
             PlugNedit.RE('Resizeleftbottom').style.left = parseInt(a.style.left)-6+'px'
       PlugNedit.RE('Resizeleftmiddle').style.left = parseInt(a.style.left)-6+'px'
        PlugNedit.RE('Resizelefttop').style.left = parseInt(a.style.left)-6+'px'
          
               PlugNedit.RE('Resizeleftbottom').style.top = ((parseInt(a.style.height) )+ parseInt(a.style.top))-6+'px'
        PlugNedit.RE('Resizeleftmiddle').style.top =((parseInt(a.style.height) /2 )+ parseInt(a.style.top))-6+'px'
        PlugNedit.RE('Resizelefttop').style.top =  parseInt(a.style.top) - 6 + "px";
              
         
         PlugNedit.GetEditorObject.ResizeMove().style.top = parseInt(a.style.height) + parseInt(a.style.top) -15 + "px"
         
         
         
         
      }
      
     //   b = 0 < parseInt(a.style.top) - PNETOOLS.EditorToolbarOffsetTop ? + (parseInt(a.style.top)) : + (parseInt(a.style.top) );
     b = parseInt(a.style.top)
//      PlugNedit.GetEditorObject.WhiteSpace().style.left = parseInt(a.style.left) + 50 + "px";
//      PlugNedit.GetEditorObject.WhiteSpace().style.top = b + "px";
//      PlugNedit.GetEditorObject.LoadEditor().style.left =
//      parseInt(a.style.left) + 140 + "px";
//      PlugNedit.GetEditorObject.LoadEditor().style.top = b + "px";
//      PlugNedit.GetEditorObject.Menu().style.left = parseInt(a.style.left) + 80 + "px";
//      PlugNedit.GetEditorObject.Menu().style.top = b + "px";
//      PlugNedit.GetEditorObject.Pencil().style.left = parseInt(a.style.left) + 170 + "px";
//      PlugNedit.GetEditorObject.Pencil().style.top = b + "px";
//     PlugNedit.GetEditorObject.UnLocked().style.left = parseInt(a.style.left) + 110 + "px";
//    PlugNedit.GetEditorObject.UnLocked().style.top = b + "px";
       PlugNedit.GetEditorObject.Locked().style.left =    parseInt(a.style.left) + 0 + "px";
       PlugNedit.GetEditorObject.Locked().style.top = b + "px";
//      PlugNedit.GetEditorObject.Constrain().style.left = parseInt(a.style.left) + 140 + "px";
//      PlugNedit.GetEditorObject.Constrain().style.top = b + "px";
//      PlugNedit.GetEditorObject.ImageActual().style.left = parseInt(a.style.left) + 50 + "px";
//      PlugNedit.GetEditorObject.ImageActual().style.top = b + "px"
   }
   , HideEditorObjects : function()
   {
      PlugNedit.CurrentLayerObject.Editor && (PlugNedit.CurrentLayerObject.Editor.style.display = "none");
      PlugNedit.GetEditorObject.TopMoveAll().style.display =
      "none";
//      PlugNedit.GetEditorObject.Pencil().style.display = "none";
//      PlugNedit.GetEditorObject.WhiteSpace().style.display = "none";
//      PlugNedit.GetEditorObject.LoadEditor().style.display = "none";
      PlugNedit.GetEditorObject.Resize().style.display = "none";
      PlugNedit.GetEditorObject.CrossHairs().style.overflow = "hidden";
//      PlugNedit.GetEditorObject.Menu().style.display = "none";
//      PlugNedit.GetEditorObject.ImageActual().style.display = "none";
PlugNedit.GetEditorObject.ResizeMove().style.display = "none";
      PlugNedit.GetEditorObject.Locked().style.display =     "none";
//      PlugNedit.GetEditorObject.UnLocked().style.display = "none";
//      PlugNedit.GetEditorObject.Constrain().style.display = "none"
      PlugNedit.RE('Resizerighttop').style.display="none";
       PlugNedit.RE('Resizetopmiddle').style.display="none";
      PlugNedit.RE('Resizerightmiddle').style.display="none";
      PlugNedit.RE('Resizebottommiddle').style.display="none";
       PlugNedit.RE('Resizeleftbottom').style.display="none";
       PlugNedit.RE('Resizeleftmiddle').style.display="none";
        PlugNedit.RE('Resizelefttop').style.display="none";
   }
}
;
PNEloadstatus("Flux-config");