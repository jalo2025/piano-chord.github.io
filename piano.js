
var keynames = ["F", "F<sup>&sharp;</sup>",
                "G", "G<sup>&sharp;</sup>",
                "A", "A<sup>&sharp;</sup>",
                "B", "C", "C<sup>&sharp;</sup>",
                "D", "D<sup>&sharp;</sup>", "E"];
var keynamesF = ["F", "G<sup>&flat;</sup>", "G",
                 "A<sup>&flat;</sup>", "A",
                 "B<sup>&flat;</sup>", "B",
                 "C", "D<sup>&flat;</sup>",
                 "D", "E<sup>&flat;</sup>", "E"];
    
var flt = [0, 1, 3, 5, 7, 8, 10, 12, 13, 15, 17];
var keyOrder=[0, 7, 5, 2, 10, 9, 3, 4, 8, 11, 1, 6]; //C,G,F,D,Bb,A,Eb,E,Ab,B,Db,Gb
var keyID= ["F","Gb",
                "G","Ab",
                "A","Bb",
                "B","C","Db",
                "D","Eb","E"];
//display piano keys
$(document).ready(function() {
 
var allLi=$('#piano>li');
//allLi.get(3).innerHTML="<div class='fngr'></div>";
    var out=""
for (var key in keyOrder){
    // keyOrder=0,7,5,2 (C,G,F,D)
    // i= 7,14,12,9...
    var i=keyOrder[key]+7
    // ky=C, ky2 C/E , ky3 C/G , ky4 Cm/Eb
    var ky=i,ky2=i+4,ky3=i+7,ky4=i+3
    //repeat the keyname every 12 keys
    var i2=i
    if (i>=12) i2=i2-12
    
    var kI=i2%12
    var kii=(i2+2)%12
    var kiii=(i2+4)%12
    var kIV=(i2+5)%12
    var kV=(i2+7)%12
    var kvib=(i2+8)%12
    var kvi=(i2+9)%12
    var kviib=(i2+10)%12
    var kvii=(i2+11)%12
    var knI,knii,kniii,knIV,knV,knvi,knvii,knvib,knviib
    
    ky=ky%12
    ky2=ky2%12
    ky3=ky3%12
    ky4=ky4%12
    
    var kn,kn2,kn3,kn4 // keyname
    var kid=keyID[i2]
    if (flt.indexOf(i)>=0) 
    {   kn=keynamesF[ky]
        kn2=keynamesF[ky2]
        kn3=keynamesF[ky3]
        kn4=keynamesF[ky4]
     
        knI=keynamesF[kI]
        knii=keynamesF[kii]
        kniii=keynamesF[kiii]
        knIV=keynamesF[kIV]
        knV=keynamesF[kV]
        knvi=keynamesF[kvi]
        knvii=keynamesF[kvii]
        
    }
    else { 
        kn=keynames[ky] 
        kn2=keynames[ky2]
        kn3=keynames[ky3]
        kn4=keynames[ky4]
        
        knI=keynames[kI]
        knii=keynames[kii]
        kniii=keynames[kiii]
        knIV=keynames[kIV]
        knV=keynames[kV]
        knvi=keynames[kvi]
        knvii=keynames[kvii]
     }

        knvib=keynamesF[kvib]
        knviib=keynamesF[kviib]
function addChord1(){
    var out=""
    out=out+"<div class='cxrow'><div class='cx cxb'>I</div>"
    out=out+"<div class='cx cxb'  onclick='showS([["+kI+"],[0,4,7],[]])'>"+knI+" </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kI+"],[0,4,7,14],[24,26,28,31]])'>"+knI+"add9 </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kI+"],[0,4,7,11],[23,28,31]])'>"+knI+"maj7 </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kI+"],[0,4,7,11,14],[23,26,28,31]])'>"+knI+"maj9 </div>"
    out=out+"<div class='cx cxd' onclick='showS([["+kI+"],[0,2,7],[]])'>"+kn+"sus2 </div>"   
    out=out+"<div class='cx cxd' onclick='showS([["+kI+"],[0,2,4,7,9],[21,26,28,31]])'>"+knI+"6/9 </div>"     

    out=out+"<div class='cx cxd'  onclick='showS([["+kI+"],[0,4,7,11,14],[23,26,28,31,33]])'>"+knI+"maj13 </div>"    
    
    out=out+"</div>" //cxrow 1
    return out;    
}    
function addChord2(){
    var out=""
    out=out+"<div class='cxrow'><div class='cx cxb'>ii</div>"   
    out=out+"<div class='cx cxb'  onclick='showS([["+kii+"],[0,3,7],[]])'>"+knii+"m </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kii+"],[0,3,7,10],[22,27,31]])'>"+knii+"m7 </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kii+"],[0,3,7,10,14],[22,26,27,31]])'>"+knii+"m9 </div>"
    out=out+"<div class='cx cxd'  onclick='showS([["+kii+"],[0,3,7,14],[22,26,27,31]])'>"+knii+"m(add9) </div>" 
    out=out+"<div class='cx cxd'  onclick='showS([["+kii+"],[0,3,7,10,14,17],[22,26,27,31]])'>"+knii+"m11 </div>"

    out=out+"</div>" //cxrow 2
return out; 
    
}    
function addChord3(){ 
    var out=""
out=out+"<div class='cxrow'><div class='cx cxb'>iii</div>"   
    out=out+"<div class='cx cxb'  onclick='showS([["+kiii+"],[0,3,7],[]])'>"+kniii+"m </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kiii+"],[0,3,7,10],[22,27,31]])'>"+kniii+"m7 </div>"

    out=out+"</div>"//cxrow 3
return out; 

}    

function addChord4(){ 
    var out=""
out=out+"<div class='cxrow'><div class='cx cxb'>IV</div>"   
    out=out+"<div class='cx cxb'  onclick='showS([["+kIV+"],[0,4,7],[]])'>"+knIV+" </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kIV+"],[0,4,7,14],[24,26,28,31]])'>"+knIV+"add9 </div>"
    out=out+"<div class='cx cxc' onclick='showS([["+kIV+"],[0,4,7,11],[23,28,31]])'>"+knIV+"maj7 </div>"
out=out+"<div class='cx cxd' onclick='showS([["+kIV+"],[0,4,7,11,14],[23,26,28,31]])'>"+knIV+"maj9</div>" 

    out=out+"</div>"//cxrow 4

    return out; 
}        
function addChord5(){ 
    var out=""
       out=out+"<div class='cxrow'><div class='cx cxb'>V</div>"   
    out=out+"<div class='cx cxb'  onclick='showS([["+kV+"],[0,4,7],[]])'>"+knV+" </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kV+"],[0,4,7,10],[22,28,31]])'>"+knV+"7 </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kV+"],[0,4,7,10,14],[22,26,28,31]])'>"+knV+"add9 </div>"
    
out=out+"<div class='cx cxc' onclick='showS([["+kV+"],[0,2,7],[]])'>"+knV+"sus2 </div>"   
out=out+"<div class='cx cxc' onclick='showS([["+kV+"],[0,5,7],[]])'>"+knV+"sus4 </div>"   
out=out+"<div class='cx cxd' onclick='showS([["+kV+"],[0,4,7,10,14],[22,26,28,31]])'>"+knV+"9 </div>"
out=out+"<div class='cx cxd' onclick='showS([["+kV+"],[0,4,7,10,14,17],[22,26,28,31]])'>"+knV+"11 </div>"
out=out+"<div class='cx cxd' onclick='showS([["+kV+"],[0,4,7,10,14,17,21],[22,26,28,31]])'>"+knV+"13 </div>"    
    out=out+"</div>"//cxrow 5
    return out; 
}        
function addChord6(){ 
    var out=""
out=out+"<div class='cxrow'><div class='cx cxb'>vi</div>"   
    out=out+"<div class='cx cxb'  onclick='showS([["+kvi+"],[0,3,7],[]])'>"+knvi+"m </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kvi+"],[0,3,7,10],[22,27,31]])'>"+knvi+"m7 </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kvi+"],[0,3,7,14],[22,26,27,31]])'>"+knvi+"m(add9) </div>"
out=out+"<div class='cx cxc' onclick='showS([["+kvi+"],[0,3,7,10,14],[22,26,27,31]])'>"+knvi+"m9 </div>"
out=out+"<div class='cx cxd' onclick='showS([["+kvi+"],[0,3,7,10,14,17],[22,26,27,31]])'>"+knvi+"m11 </div>"    
    out=out+"</div>"//cxrow 6

    return out; 
}        
function addChord7(){ 
    var out=""
out=out+"<div class='cxrow'><div class='cx cxb'>vii&deg;</div>"   
    out=out+"<div class='cx cxb'  onclick='showS([["+kvii+"],[0,3,6],[]])'>"+knvii+"&deg; </div>"
    out=out+"<div class='cx cxc'  onclick='showS([["+kvii+"],[0,3,6,10],[22,27,30]])'>"+knvii+"m7(&flat;5) </div>"
      out=out+"</div>"//cxrow 7
    return out; 
}      

function addChord17(){
    var out=""
    out=out+"<div class='cxrow'><div class='cx cxb'>I7</div>"
    out=out+"<div class='cx cxb' onclick='showS([["+i2+"],[0,4,7,10],[22,28,31]])'>"+kn+"7 </div>"
out=out+"<div class='cx cxc' onclick='showS([["+i2+"],[0,4,7,10,13],[]])'>"+kn+"7(<sup>&flat;</sup>5)  </div>"

out=out+"<div class='cx cxc' onclick='showS([["+i2+"],[0,2,5,10],[22,26,29]])'>"+kn+"7sus </div>"

    out=out+"</div>" //cxrow 
    return out;    
}    
  
out=out+"<div id='"+kid+"' class='chartMaj'>"
out=out+"<u>"+knI+" major:</u><br/>"
//-----------------------------
//-----------------------------
//    SHOW ALL CHORD
//-----------------------------
//-----------------------------

out=out+"<b>ALL 7 chords</b><br/>"+addChord1()+addChord2()+addChord3()+addChord4()+addChord5()+addChord6()+addChord7()


out=out+"<br/><br/><div class='cxrow'>"
out=out+"<div class='cx' onclick='showS([["+i2+"],[0,2,4,5,7,9,11,12],[]])'>"+kn+" Major</div>"
out=out+"<div class='cx cxb' onclick='showS([["+i2+"],[4,7,12],[]])'>"+kn+" / "+kn2+" </div>"
out=out+"<div class='cx cxb' onclick='showS([["+i2+"],[7,12,16],[]])'>"+kn+" / "+kn3+" </div>"
out=out+"<div class='cx cxb' onclick='showS([["+i2+"],[0,4,7,10],[22,28,31]])'>"+kn+"7 </div>"
out=out+"<div class='cx cxc' onclick='showS([["+i2+"],[0,4,7,10,13],[]])'>"+kn+"7(<sup>&flat;</sup> 9)  </div>"
out=out+"<div class='cx cxc' onclick='showS([["+i2+"],[0,4,7,10,14],[22,26,28,31]])'>"+kn+"9 </div>"
out=out+"<div class='cx cxd' onclick='showS([["+i2+"],[0,2,5,10],[22,26,29]])'>"+kn+"7sus </div>"
out=out+"<div class='cx cxc' onclick='showS([["+i2+"],[0,4,7,11],[23,28,31]])'>"+kn+"maj7 </div>"
out=out+"<div class='cx cxc' onclick='showS([["+i2+"],[0,4,7,11,14],[23,26,28,31]])'>"+kn+"maj9</div>" 
out=out+"<div class='cx cxd' onclick='showS([["+i2+"],[0,4,8],[]])'>"+kn+"aug </div>"   

out=out+"<div class='cx cxc' onclick='showS([["+i2+"],[0,2,7],[]])'>"+kn+"sus2 </div>"   
out=out+"<div class='cx cxc' onclick='showS([["+i2+"],[0,5,7],[]])'>"+kn+"sus4 </div>"   
out=out+"<div class='cx cxd' onclick='showS([["+i2+"],[0,4,7,14],[24,26,28,31]])'>"+kn+"add9 </div>"   
out=out+"<div class='cx cxd' onclick='showS([["+i2+"],[0,2,4,7,9],[21,26,28,31]])'>"+kn+"6/9 </div>"        
out=out+"</div><div class='cxrow'>"    
out=out+"<div class='cx cx' onclick='showS([["+i2+"],[0,2,3,5,7,8,11,12],[]])'>"+kn+" Minor</div>"
out=out+"<div class='cx cxc' onclick='showS([["+i2+"],[0,3,7,9],[19,21,24,27]])'>"+kn+"m6 </div>"
out=out+"<div class='cx cxb' onclick='showS([["+i2+"],[0,3,7,10],[22,27,31]])'>"+kn+"m7 </div>"
out=out+"<div class='cx cxc' onclick='showS([["+i2+"],[0,3,7,10,14],[22,26,27,31]])'>"+kn+"m9 </div>"
out=out+"<div class='cx cxb' onclick='showS([["+i2+"],[3,7,12],[]])'>"+kn+"m / "+kn4+" </div>"
out=out+"<div class='cx cxb' onclick='showS([["+i2+"],[7,12,15],[]])'>"+kn+"m / "+kn3+" </div>"
        
out=out+"<div class='cx cxd' onclick='showS([["+i2+"],[0,3,6],[]])'>"+kn+"dim </div>"       
out=out+"<div class='cx cxd' onclick='showS([["+i2+"],[0,3,6,9],[]])'>"+kn+"dim7 </div>"  
out=out+"<div class='cx cxd'  onclick='showS([["+i2+"],[0,3,6,10],[22,27,30]])'>"+kn+"m7(&flat;5) </div>"    

out=out+"</div>" //cxrow
    
//-----------------------------
//-----------------------------
//    INTRO
//-----------------------------
//-----------------------------

out=out+"<br/><br/><br/><b>Intro</b><br/>"
out=out+"<i>1-4-1-5</i>"+addChord1()+addChord4()+  addChord1()+  addChord5()  
out=out+"<i>1-5-4-5</i>"+addChord1()+addChord5()+  addChord4()+  addChord5()   
out=out+"<i>1-6-2-5</i>"+addChord1()+addChord6()+  addChord2()+  addChord5()    
out=out+"<i>1-6-4-5</i>"+addChord1()+addChord6()+  addChord4()+  addChord5()    
out=out+"<i>1-3-4-5</i>"+addChord1()+addChord3()+  addChord4()+  addChord5()   

//-----------------------------
//-----------------------------
//    BRIDGE
//-----------------------------
//-----------------------------
    
    
out=out+"<b>Bridge</b><br/>"

out=out+"<i>4-5-3-6-2-5-1-I7</i>"+addChord4()+addChord5()+  addChord3()+  addChord6()  +  addChord2() +  addChord5() +  addChord1() +  addChord17() 
    
    
out=out+"<i>4-5-3-6-4-5-1-I7</i>"+addChord4()+addChord5()+  addChord3()+  addChord6()  +  addChord4() +  addChord5() +  addChord1() +  addChord17() 
    
out=out+"<i>1-5-6-1-4-1-2-5</i>"+addChord1()
//G/B
out=out+"<div class='cxrow'><div class='cx cxb'>V</div>"   
out=out+"<div class='cx cxb'onclick='showS([["+kV+"],[4,7,12],[]])'>"+knV+"/"+knvii+" </div>"
out=out+"</div>"//cxrow 5    
out=out+ addChord6() 
//C/G
out=out+"<div class='cxrow'><div class='cx cxb'>I</div>"   
out=out+"<div class='cx cxb'onclick='showS([["+kI+"],[7,12,16],[]])'>"+knI+"/"+knV+" </div>"
out=out+"</div>"//cxrow 5    
out=out+ addChord4() 
//C/E
    
out=out+"<div class='cxrow'><div class='cx cxb'>I</div>"   
out=out+"<div class='cx cxb'onclick='showS([["+kI+"],[4,7,12],[]])'>"+knI+"/"+kniii+" </div>"
out=out+"</div>"//cxrow 5      addChord1() +  addChord17() 
      
out=out+ addChord2() + addChord5() 
    
//Bridge5 
out=out+"<i> 6 &flat; - 7 &flat; -2 &deg; 7</i>"
    
out=out+"<div class='cxrow'><div class='cx cxb'>vi&flat;</div><div class='cx cxb'  onclick='showS([["+kvib+"],[0,4,7],[]])'>"+knvib+" </div></div>"
out=out+"<div class='cxrow'><div class='cx cxb'>vii&flat;</div><div class='cx cxb'  onclick='showS([["+kviib+"],[0,4,7],[]])'>"+knviib+" </div></div>"
out=out+"<div class='cxrow'><div class='cx cxb'>II7</div><div class='cx cxb'  onclick='showS([["+kii+"],[0,3,7,10]])'>"+knii+"7</div></div>"
    
out=out+"<br/><br/></div>"

   

out=out+"</div>" // charMaj
      

//$(document).click(function(event) {
$(".cx").click(function(event){
var text = $(event.target).html();
$('#showChord').html(text)
});        


}
    $('#allChords').html(out)
})    
    
    
function strikeKey(keycode) {
    
      var myAudio= new Audio 
      keycode=keycode+12
        switch (keycode) { 
case 0 : myAudio = new Audio('sound/1f.mp3');break;
case 1 : myAudio = new Audio('sound/1fs.mp3');break;
case 2 : myAudio = new Audio('sound/1g.mp3');break;
case 3 : myAudio = new Audio('sound/1gs.mp3');break;
case 4 : myAudio = new Audio('sound/1a.mp3');break;
case 5 : myAudio = new Audio('sound/1as.mp3');break;
case 6 : myAudio = new Audio('sound/1b.mp3');break;
case 7 : myAudio = new Audio('sound/2c.mp3');break;
case 8 : myAudio = new Audio('sound/2cs.mp3');break;
case 9 : myAudio = new Audio('sound/2d.mp3');break;
case 10 : myAudio = new Audio('sound/2ds.mp3');break;
case 11 : myAudio = new Audio('sound/2e.mp3');break;
case 12 : myAudio = new Audio('sound/2f.mp3');break;
case 13 : myAudio = new Audio('sound/2fs.mp3');break;
case 14 : myAudio = new Audio('sound/2g.mp3');break;
case 15 : myAudio = new Audio('sound/2gs.mp3');break;
case 16 : myAudio = new Audio('sound/2a.mp3');break;
case 17 : myAudio = new Audio('sound/2as.mp3');break;
case 18 : myAudio = new Audio('sound/2b.mp3');break;
case 19 : myAudio = new Audio('sound/3c.mp3');break;
case 20 : myAudio = new Audio('sound/3cs.mp3');break;
case 21 : myAudio = new Audio('sound/3d.mp3');break;
case 22 : myAudio = new Audio('sound/3ds.mp3');break;
case 23 : myAudio = new Audio('sound/3e.mp3');break;
case 24 : myAudio = new Audio('sound/3f.mp3');break;
case 25 : myAudio = new Audio('sound/3fs.mp3');break;
case 26 : myAudio = new Audio('sound/3g.mp3');break;
case 27 : myAudio = new Audio('sound/3gs.mp3');break;
case 28 : myAudio = new Audio('sound/3a.mp3');break;
case 29 : myAudio = new Audio('sound/3as.mp3');break;
case 30 : myAudio = new Audio('sound/3b.mp3');break;
case 31 : myAudio = new Audio('sound/4c.mp3');break;
case 32 : myAudio = new Audio('sound/4cs.mp3');break;
case 33 : myAudio = new Audio('sound/4d.mp3');break;
case 34 : myAudio = new Audio('sound/4ds.mp3');break;
case 35 : myAudio = new Audio('sound/4e.mp3');break;
case 36 : myAudio = new Audio('sound/4f.mp3');break;
case 37 : myAudio = new Audio('sound/4fs.mp3');break;
case 38 : myAudio = new Audio('sound/4g.mp3');break;
case 39 : myAudio = new Audio('sound/4gs.mp3');break;
case 40 : myAudio = new Audio('sound/4a.mp3');break;
case 41 : myAudio = new Audio('sound/4as.mp3');break;
case 42 : myAudio = new Audio('sound/4b.mp3');break;
case 43 : myAudio = new Audio('sound/5c.mp3');break;
case 44 : myAudio = new Audio('sound/5cs.mp3');break;
case 45 : myAudio = new Audio('sound/5d.mp3');break;
case 46 : myAudio = new Audio('sound/5ds.mp3');break;
case 47 : myAudio = new Audio('sound/5e.mp3');break;
case 48 : myAudio = new Audio('sound/5f.mp3');break;
    }     

    myAudio.volume = 0.1;
    myAudio.play();  
}// keyStrike
function showC(ttt)
{
    $("#showChord").innerHTML=ttt
    
}

function showS(sccc)
{

var ky=sccc[0]%12

$('li').removeClass("keyActive");
$('li').removeClass("keyActiveR");

    
var allLi=$('#piano>li');
$('#piano>li').html("")
var i,j,k,ky,kn  // key# and keyname
var out=""
var key=parseInt(sccc[0])

for (i=0;i<sccc[1].length;i++)  
    {   ky=(parseInt(sccc[1][i])+key)%12
        if (flt.indexOf(key)>=0 || sccc[1][i]==3 || sccc[1][i]==8) 
            {   kn=keynamesF[ky] }
        else {  kn=keynames[ky]
        }        
        allLi.get(parseInt(sccc[1][i])+key).innerHTML=kn;
        allLi.get(parseInt(sccc[1][i])+key).classList.add("keyActive");
        strikeKey(parseInt(sccc[1][i])+key)
     
    }//for left hand

if (sccc[2].length > 0)
{
for (i=0;i<sccc[2].length;i++) 
    {   ky=(parseInt(sccc[2][i])+key)%12
        if (flt.indexOf(key)>=0 || sccc[2][i]==3 || sccc[2][i]==8 || sccc[2][i]==15 || sccc[2][i]==20 ||   sccc[2][i]==27 || sccc[2][i]==32) 
            {   kn=keynamesF[ky]}
        else {  kn=keynames[ky]
        }        
        allLi.get(parseInt(sccc[2][i])+key).innerHTML=kn;
        allLi.get(parseInt(sccc[2][i])+key).classList.add("keyActiveR");
       // strikeKey(parseInt(sccc[2][i])+key)
      
    } 
}
}  // functino sccc  
    