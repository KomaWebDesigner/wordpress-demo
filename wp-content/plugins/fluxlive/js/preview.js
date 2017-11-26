var FluxPreview =
{
   SetWindow : function()
   {

      var iphoneoverlay=document.createElement("img");
      iphoneoverlay.setAttribute('style', 'width: 380px;left: 470px;')
      var iphoneoverlaydiv=document.createElement("div");
       iphoneoverlaydiv.setAttribute('style', 'position: fixed;top: 0px;margin: 0px;padding: 0px;left: 470px;');
      iphoneoverlay.src=SSpluginAddress.plugin_url+"assets/white-iphone-hi.png"
      var a, b = document.createElement("iframe"), c = document.createElement("div");
      c.id = "pnepreviewwrapper";
      c.setAttribute("style", "position:fixed;top:0px;left:500px;margin 0px auto;width:0px;height:0px;overflow:visible;z-index:1000000");

      document.createElement("img");
      b.id = "pnepreview";
      a = window.location.href;
      a = a.replace("fluxdisplaymobile", "fluxdisplaymobileversion");
      b.src = a;
      b.setAttribute("style", "width:337px;height:500px;max-width:337px;max-height:500px;border:1px solid black;overflow-x:hidden; overflow-y: auto;position:fixed;z-index:10;top:120px");
      creatediv2 = document.createElement("div");
      creatediv2.setAttribute("style", "position:fixed;top:0px;left:0px;width:100vw;height:100vh;overflow:visible;z-index:1000000;background-color: rgb(204, 204, 204);");
      creatediv2.id = "pnepreviewwrappercover";
      document.body.appendChild(creatediv2);
      creatediv2.appendChild(c);
      c.appendChild(b);
      iphoneoverlaydiv.appendChild(iphoneoverlay)
c.appendChild(iphoneoverlaydiv);
      a = document.createElement("div");
      a.setAttribute("onclick", 'document.getElementById("pnepreviewwrappercover").parentNode.removeChild(document.getElementById("pnepreviewwrappercover"))');
      a.setAttribute("style", "cursor:pointer;padding-top:75px;padding-left:20px;width:380px;overflow:visible");
      a.innerHTML = "This is a mobile preview version.<br><h3>View Full Size Version</h3><br><br>Mobile Layout is separate and fully editable by clicking the mobile icon in the tools menu.";
      creatediv2.appendChild(a)
   }
};FluxPreview.SetWindow()  