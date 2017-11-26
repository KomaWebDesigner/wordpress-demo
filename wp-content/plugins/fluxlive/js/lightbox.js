// JavaScript Document


SimplySymphonyAddOns = {
LightBox : function (img){
LightBox=document.createElement('div');
LightBoxCaption = document.createElement('div');
LightBoxClose = document.createElement('img');

LightBoxForward = document.createElement('img');
LightBoxForward.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAB1CAYAAAC4aERqAAANfklEQVR42u2dB3DWZx3Hw2ilaq1abR0tom09xarVeCJCPSQhIYSwN2HvvSHsiEAYMnrsvSIblLBB9ghlFiFMGQHCCDPIDvD4+/zveeIr1wKB5Pl797y/u/c8W8+87+/7/PYKCfk/oYoVK75Zvnz5d0OC5D+VKFGigICRIKCslP8MD3LEXzC+KkDMqVSpkjIfAaVKkDM+UJkyZb5ToUKFvwogmbGxsSouLs4DRP77JfnnLeR/ki/IJUsUGRn5vkjCXgHgYZs2bdTOnTtVRkaG2rRpkwHltvz7oYULF341yK1cpujo6A+F4cnyedypUyd1/vx5FUirVq1StWrVApj7AsqQ0NDQLwe5lksUExMTJUAcRQrat2+vzpw5o56k+/fvqzVr1qgqVaogKfdFfS1EvQW5l8NUrly5UtgHwOjSpYu6ffu2ehqhxlq0aAEojwWUVREREW8FuZgDhB0QyWgqTE0HjIkTJ6pbt26p56HDhw9ngSKfDfL/8VGQoy9HeYSJXTHSgJGYmKgePHigskM3btxQrVu3Nsb+qNig0CBbX8x4f0PUVF/sQN26dT3JuHPnjnoROn78uOrXr58B5UTZsmVLBN3ibIIhkjFNGPioQYMGavfu3S8MhiFszoQJEzxQUH8CTD35U3mD3H4GFS9eHDD+BuNwX7ds2aJyigB1xIgRRlJuiaTUErf4lSDXnx5jbIBhHTp0UDt27FA5TTdv3lQLFy5UqEH5W/cE/HhRja8Huf8EhYWFvSnMOYJH1LZtW3Xp0iWVW/T48WO1fv16Vb16daTlgfzNT4II/JfykqUVMC4gGT169FDp6enKBhHVIyk6KZkYFRX1jvNowAQBIwXJ6NWrV65KxucRDkPTpk0B5aF8j9XYMNcj8LcFjK0A0qdPH3X69Gllm8iHNWvWzHhgKWLsPyAGchaUiIiID4URm2FIo0aN1Pbt262DkpaWFpjC/0wcjN87r76EEUuRFOob+/fvtw4Ktqt+/fpZKfyYmJjfOQ0IWVkxrlMpOiEpu3bteumA8EVo/Pjxqlq1aqivy6JSY50GRdTXV+Rl9qaeQWA4ffr0bOevXpbu3r2rxowZY5KS1wWYTq57Xl8SJvRGbVSuXFktWLDAY5JtGjdunCl24Rb/yeliF2l31IWpgUyePNm6+kIyN2zYYIpdt+WRTBAPzO0KpIBSTgC5CiiUbO/du2ddUo4cOWKieiRlZWRk5DedBkVeZYS80APodKqFn1e6zW3CFa9Xrx6S8lBASZLvVND5xKOojP280s6dOz+zhJvT9PDhQ3XlyhUv6UlZQID5F9/Jdbf4xwLKNtIcNDkkJyerzMxMq8BcvnxZde/e3dTq/ymSUtT5WEV3Kz4iiAMU23ThwgXPnulUS6qYuapOp1poIaWIJcA8wC3eu3ev9VgFFTZy5EjjgV13HhTtFg+UV/rvGjVqqFmzZnlMsknYMf4uj0IeyDUx9p2LFi36msuSkp+uFFQHL3Xo0KHW1Rc2bNGiRR4oZBfk+wzke7keqzQUtZGGoSW6tu2BkUUgm4BbTAVSJGV4VFTUt50FpGrVqvnE24kRQDJIClJ1xPDappSUFNW4cWPPLRZQFjvfwqqbJE7AkJYtW/oSQJKh1pKCXVkbFhb2tuvq6zcCyk7TA+yHpOzbt08NGDDA1FV2ykP5rdOgFClS5GvyOnfBEHJQfhS7rl+/rrp27WoCyNTSpUsXchoUVIUwYh6goELI2tomUi3x8fFGUi7L96ngtAdGVlYYMZpXSl1j6dKl1kG5du2aV+zCLaaU4HwFUtuVAdQzAGX16tW+FLumTp3qqU/K0+KBtXE6gNRl4TamAjls2DBvJtE20cJKVoG+YvkkOC8pAkp5YcQNdDpN134Uu2bOnKkkbvLsikjuQtcHUwkgqwgoZ2DI6NGjvX4s23To0CFFnKQ9sHmlSpX6nsug5BFj/zNhxiHTZW+7W/LRo0feuJ3OFGfiorsOCob+V8KMPbxSRt78iOp5CPxt7YF9xndy3ab8UDyev5tUC6rEJjEWce7cOW/cTquvg2XKlPmD06AQqwgjkgAFFbJt2zZPpdimvn37mrrKXXkkMSEuF7s0KKMElDswZdmyZdYrkEwLDx482ET1aSK9jUJcnoGkW5LuRIwsAdzatWutSwmNgBs3bjSg3BWbEu90qoUfL0zoTt4JpkyZMsVLfdj2wJKSkkwAecf5FlZt7GsKM9KxKYMGDbJuU57Y13JPPrPlsXzLdVBYdHMZ76dnz57Wy8KmW7J58+bGA1soEb7bLaxMUQkj9sIQvCA2QvhRFmZfC16gfJd/iAr7udOgiLF/D68Hm1K7dm2VmprqS10lYIlOCh2cToOC/pbXuRwPrEmTJurgwYPWQSHV0r9//6wlOnpfi7tusZ4W9iqQdJawTtA2YcfGjh0bGKtUcz2Dn1ckZbwJIOnFst3sza6wIUOGGFBuCiiVxdi7m8Kn2CWGtQ9GlgrkvHnzrEsK+1oWL16s6tSpY/a19BJQXnNaVESH18am8FIpOvlBrAbRLax4YPFOAyKezkempjJ8+HBfAKFkYIZSBZBPnQWDZTnChHO4oUxz2U6vBPZ96Y3eh0Vif+0iFnl0BH8WRtBz5UezxMWLF701uVpVpTgJhk48tjZj2nPnzvVFMlh/yz4xDUaSqM4fOCkZ8uPbkRLHiPrhWZHgPHDggJdw1Kuk1js5nq0Xcg4kFQ4YTEzZXmDAZBiBqEnJi6SOLVas2OsuqilmGaczm852VF6o7UoiRMwRsOIjwcmuR/nx7zDtiydFs3ZuLOR8nlRJwBKcK4zvhbhYaxev5Sfy473tqKz/I7HnB40aNcqsicoQyagT4uDy5zwRERHv0o4DGHgzp06dst4aRL6KhgddmErXmV33PCl5hZF6JM6bgLp69ap1qaC11QR8bIpwtk9LvKk/Ukc3yziJhG0TyzjN2lp2qTg5dcWVN8aqaVCrWbOmN+vuh2SwrjZgsc1KZ3t95cfHMaKA8WR+w/Y2CIjJLsrD2q2d7yQYuq4xDCYAxowZM6wDgQFft26dQjJ1XWOsk1JBlCtgTGHrAgHf8uXLrYNBUnLFihXmKMADAaNveHj4G86Bwci0MOBTdDXScfLkSe+l2iRmHBmrMy2jOsbI46K9+ClJORjRqlUrdezYMV/KrwGNClcFjAZO9u+KJ/ULAYMK3yNq0UTftltEASMhISFr8ZnEGEVCXGzliYmJKSkMSCN1TW+TH8SKD3OcTL7LYXkgxZw04PLDa4hqOEXAx+v0o6hEO2hAj+5GpNXJVIhIRkteJHUMenP9cGtZmskpDA3GBif3aOnhm27sQgQM5i1s1zEYKcCd1pKBWzu7bNmy33e1qDSZQAswNm/e7EtRiRUeusLHKo3hTg7d6JN7E2ACAR+Bl20ywzZ61PmmfJ+/kC9zMVv7I25IUW5lxPno0aMec2wSqzqIMUjFsK9ejHdz+WruxRjoZgFiO4aTOQo/1mUABkfNdLmV6zx1nHRrRT9/LJKxD28KyfCj3IorjUutPanDNNM5CQalTbNIhvozs962iYmq3r17m6H/i/Jx7xq1vrFe3nQRMi9BWsJ2jMEkVcOGDb0TFpz+w445BwY7ekVNtTV7r7gA/bwH73OSTpw44cUYOkm4kr0pLsYYBeTHt6WOwbaFOXPmWB9XZmIKydBd52yxXuKkW0sfq/z4T8jW0rhGpc0Pmj9/vukipL92hJMtndqbmo+uxscHDNtFJYgTfjrgw7WNQ326KBnvy0tchYro2LGjN8Zlm/DeGFvTW0WvyONo5aRUlCxZkoAvGfXQrl07X4b2aQliZbk23hlcjXNxcWVedribG+tE337scAcMtr1pME5I3FPcScnQY2PH0Ne0dJ49e9Y6GNTbqaFoMA7pCp+TjQiVMN4wgnSEH0SFL+DkxK5ChQoVcFIyWMFNUQlPiovNfhCnJthnovNSSfJ5z0Us8lPE4cAXr5IhFT/OdjOUo5uduZAzXsD4uotg5GVVhblg4MddQhrXGBsLOOw1ytmAT4jcVH8zOsZNQttgTJs2LWuZi3yXDvT9hjhOnL+baXaHsHzSRhc6tXZSIdp43xIwmoW4vC/3SdJH7W/SHJCYmJirYLBRmlkQnSRMZZlMiMsLwb4gtf6qAMJNwkxOOmDcc6vc2q1btywwoqOjPw5y/+nubxWRlnMYWe7Npqen52hLJ5NKOkF4wPlrz88pKfkkMi4lr9erCPKacwKUPXv2eJO1OsZY6/wyyeySvN6CwrgjMJBM74vms3AQOJ2nFxNTbk12/uDjS4DyS1FhW5EUVhKxXDi7te+tW7dmrcOTz6TQ0NA3gpx9CaI9lLq12Z2bHVCWLFnitXTqgcoxTl9Hy0mSYO0tUV+zSGvQ6cEY8bMCvkmTJpmA7xouddCtzWGid1eM/Z9pLoiNjfUmZ7/oJiEHv0hS6mbnxqKmXglyMHfUV36d+/L2V82ePft/engpt3IST7u1F8WTKh3kWu6DUoA0B0OTgb1Z7CKMi4szqZDjuM5BblkkibCjsQ8AMHDgwKxtCALGmfDw8IJBDtmnPDQdCCjHdRoEVbVOXOUPgqzxkRiiFCA2cco0MjLyu67y4T8jd75HD7ER3AAAAABJRU5ErkJggg==";

LightBoxClose.src = "data:image/png;base64,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";
LightBox.id="SymplySymphonyLightBox";


LightBox.setAttribute('style', 'background-color:black;width:100%;height:100%;position:fixed;top:0px;left:0px;color:white;z-index:4000;text-align:center');

LightBoxCaption.setAttribute('style', 'color:white;font-size:20px;font-weight:bolder;background-color:black;width:100%;height:30px;position:fixed;bottom:0px;left:0px;color:white;z-index:4001;padding:6px;opacity:.7');

LightBoxForward.setAttribute('style', 'max-width:7vh;max-height:7vh;position:fixed;top:50%;right:10px;z-index:4001;opacity:.9;cursor:pointer');

LightBoxClose.setAttribute('style', 'max-width:7vh;max-height:7vh;position:fixed;top:30px;right:10px;z-index:4001;opacity:.9;cursor:pointer');
LightBoxImage=document.createElement('img');
LightBoxImage.setAttribute('style', '/* width: 100%; *//* width: 100%; */margin: auto;position: absolute;top: -9999px;bottom: -9999px;left: -9999px;right: -9999px;');
LightBoxImage.id="SSlightboximage"
LightBoxImage.src=img.getAttribute('data-fullsizess');
LightBox.appendChild(LightBoxImage);
LightBoxBack = LightBoxForward.cloneNode()
LightBoxBack.id="LightBoxBackSS";
LightBoxForward.id="LightBoxForwardSS";
LightBoxClose.id="LightBoxCloseSS"
LightBox.id="LightBoxSS"
LightBoxBack.setAttribute('onclick','SimplySymphonyAddOns.Nav(-1)')
LightBoxForward.setAttribute('onclick','SimplySymphonyAddOns.Nav(1)')
LightBoxClose.setAttribute('onclick','SimplySymphonyAddOns.LightBoxClose()')
LightBoxBack.setAttribute('style', 'max-width:7vh;max-height:7vh;position:fixed;top:50%;left:10px;z-index:4001;opacity:.9;-ms-transform:rotate(180deg);-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg); -o-transform:rotate(180deg);cursor:pointer')
LightBoxCaption.id="LightBoxCaptionSS"

if(img.hasAttribute ? img.hasAttribute('alt') : img[alt] !== undefined){
LightBoxCaption.innerHTML=img.getAttribute('alt');
}

document.getElementsByTagName('body')[0].appendChild(LightBoxForward);
document.getElementsByTagName('body')[0].appendChild(LightBox);
document.getElementsByTagName('body')[0].appendChild(LightBoxCaption);
document.getElementsByTagName('body')[0].appendChild(LightBoxClose);
document.getElementsByTagName('body')[0].appendChild(LightBoxBack);
this.NavMenu(img);
this.SetOrient()
},

NavMenu : function (img) {

this.imagegalleryarray=[]; 
this.imagegCatption=[]; 


var  gallery = this.IsCanvasLayer(img);
var  galleryobjects = gallery.getElementsByTagName('img');
     this.position;
for (var i = 0; i < galleryobjects.length; ++i) {
 
    this.imagegalleryarray[i]=galleryobjects[i].getAttribute('data-fullsizess');
   
    if(galleryobjects[i].hasAttribute ? galleryobjects[i].hasAttribute('alt') : galleryobjects[i][alt] !== undefined){
 this.imagegCatption[i] = galleryobjects[i].getAttribute('alt');
     }
   

   
    if (galleryobjects[i]==img){

    this.position=i;
 } 
 }


this.Nav()
},

Nav : function (nav){

if (nav){
document.getElementById('SSlightboximage').src=""
document.getElementById('SSlightboximage').src=this.imagegalleryarray[this.position+nav];
if (this.imagegCatption[this.position+nav] != undefined){
document.getElementById('LightBoxCaptionSS').innerHTML=this.imagegCatption[this.position+nav];
} else{
document.getElementById('LightBoxCaptionSS').innerHTML='';
}
this.position=this.position+nav
}


    document.getElementById('LightBoxForwardSS').style.display = 'none';
    document.getElementById('LightBoxBackSS').style.display = 'none';

    if(this.position > 0){
    document.getElementById('LightBoxBackSS').style.display = '';
    } else {
    
    document.getElementById('LightBoxBackSS').style.display = 'none';
    }
    
  if(this.position == this.imagegalleryarray.length-1){
    document.getElementById('LightBoxForwardSS').style.display = 'none';
    } else {
    
    document.getElementById('LightBoxForwardSS').style.display = '';
    }

},

LightBoxClose : function (){

document.getElementById('SSlightboximage').parentNode.removeChild(document.getElementById('SSlightboximage'))
document.getElementById('LightBoxBackSS').parentNode.removeChild(document.getElementById('LightBoxBackSS'))
document.getElementById('LightBoxForwardSS').parentNode.removeChild(document.getElementById('LightBoxForwardSS'))
document.getElementById('LightBoxCloseSS').parentNode.removeChild(document.getElementById('LightBoxCloseSS'))
document.getElementById('LightBoxSS').parentNode.removeChild(document.getElementById('LightBoxSS'))
document.getElementById('LightBoxCaptionSS').parentNode.removeChild(document.getElementById('LightBoxCaptionSS'))


},

  IsCanvasLayer: function(TargetSrc) {
        // Check if current HTML object is inside a canvas layer.
     
            var FindTarget = TargetSrc,
                g = 1;
            while (FindTarget) {
                if (FindTarget.parentNode === null) {
                    break;
                }
                FindTarget = FindTarget.parentNode;
                g++;
                
                
                
                if (FindTarget.nodeType !== 1 || !FindTarget.hasAttribute('id')) {
                 
               
                   continue;
                }
                
                if(FindTarget.hasAttribute ? !FindTarget.hasAttribute('id') : FindTarget[id] == undefined){
                   continue;
                  }

                if (FindTarget.id.match('PNEdivCnvsI')) {
                TargetSrc = FindTarget;
                break;
                }
                
            }

        return TargetSrc;
    },



SetOrient : function() {
  if (window.innerWidth != currentWidth) {
  var  currentWidth = window.innerWidth;
   var currentHeight=window.innerHeight
    var orient = (currentWidth < 801 && currentWidth < currentHeight) ? "profile" : "landscape";
    document.body.setAttribute("orient", orient);
  }
}






}


