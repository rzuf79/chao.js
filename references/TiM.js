/**
 * Turtle is Moving framework
 *
 */


var TiM = { 


getRandom: function(Max) { 
	Max -= 1;
	return Math.round(Max*Math.random()); 
},


onLoad: function() {

	TiM.mute	= false;


	document.getElementById(canvasId).addEventListener("mousedown", TiM.onMouseDown, true);
	document.getElementById(canvasId).addEventListener("mouseup", TiM.onMouseUp, true);
	document.body.addEventListener('touchmove', function(event) { event.preventDefault(); }, false);
	document.getElementById(canvasId).addEventListener("touchstart",function(event) { touchStart(event) }, false);
	document.getElementById(canvasId).addEventListener("touchmove",function(event) { event.preventDefault(); touchMove(event); }, false);
	document.getElementById(canvasId).addEventListener("touchend",function(event) { touchEnd(event) }, false);

	TiM.images	= new Array();
	TiM.keys	= new Array();
	TiM.sounds	= new Array();
	TiM.music	= new Array();
	
	TiM.soundChannels	= 6;

	TiM.mouseX			= 0;
	TiM.mouseY			= 0;
	TiM.mouseStatus		= 0;
	TiM.keyLastPressed	= -1;
	TiM.keyLastReleased	= -1;

	TiM.canvas		= document.getElementById(canvasId);
	TiM.context2D	= TiM.canvas.getContext("2d");

	TiM.backgroundColor	= "none";
	TiM.gameSpeed		= 1000/60;

	TiM.stepInterval	= setInterval("TiM.onUpdate()",TiM.gameSpeed);

	TiM.resetFont();

	onStart();

	
},

onDraw: function(){
	if (TiM.backgroundColor=="none") { 
		TiM.context2D.clearRect(0, 0, TiM.canvas.width, TiM.canvas.height); 
	}else{ 
		TiM.context2D.fillStyle	= TiM.backgroundColor; 
		TiM.context2D.fillRect(0, 0, TiM.canvas.width, TiM.canvas.height); 
	}
},

onUpdate: function(){
	TiM.onDraw();
	TiM.keyUpdate();
	TiM.mouseUpdate();
	
	onRun();
},


onMouseMove: function(e){
	if(e.pageX != undefined && e.pageY != undefined){ 
		TiM.mouseX = e.pageX; 
		TiM.mouseY = e.pageY; 
	}else{ 
		TiM.mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
		TiM.mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
	}
	TiM.mouseX -= TiM.canvas.offsetLeft; 
	TiM.mouseY -= TiM.canvas.offsetTop; 
	if(TiM.mouseX<0 || TiM.mouseX>TiM.canvas.width || TiM.mouseY<0 || TiM.mouseY>TiM.canvas.height){ 
		mouseStatus=-1; 
	} 
},

onMouseDown: function(){
	TiM.mouseStatus	= 2;
},

onMouseUp: function(){
	TiM.mouseStatus	= -1;
},

mouseUpdate: function(){
	if(TiM.mouseStatus==2){ 
		TiM.mouseStatus=1; 
	} 
	if(TiM.mouseStatus==-1){ 
		TiM.mouseStatus=0; 
	}
},


keyAdd: function(name, keycode) { 
	var i 			= TiM.keys.length; 
	TiM.keys[i] 		= new Object(); 
	TiM.keys[i].keycode	=keycode; 
	TiM.keys[i].status 	= 0; 
	TiM.keys[i].name 	= name; 
},

onKeyPress: function(key){ 
	var evtobj	= window.event ? event : key; 
	var unicode	= evtobj.charCode ? evtobj.charCode : evtobj.keyCode; 
	
	if(unicode>=33 && unicode<=40){
		//prevent scrolling with cursor keys, pg-updowns etc.
		evtobj.preventDefault();
	}
	
	var i=0; 
	while(i < TiM.keys.length) { 
		if(unicode==TiM.keys[i].keycode && TiM.keys[i].status<=0){ 
			TiM.keys[i].status=2; 
		} 
		i++; 
	} 
	TiM.keyLastPressed = unicode; 
},

onKeyUp: function(key){
	var evtobj	= window.event ? event : key; 
	var unicode=evtobj.charCode? evtobj.charCode : evtobj.keyCode; 
	var i=0; 
	while(i < TiM.keys.length){ 
		if(unicode==TiM.keys[i].keycode && TiM.keys[i].status>=1){ 
			TiM.keys[i].status=-1; 
		} 
		i++; 
	} 
	TiM.keyLastReleased=unicode; 
},

keyUpdate: function(){
	var i = 0; 
	while(i<TiM.keys.length){ 
		if(TiM.keys[i].status==-1){ 
			TiM.keys[i].status=0; 
		}else if(TiM.keys[i].status==2){ 
			TiM.keys[i].status=1; 
		} 
		i++; 
	}

},

keyGet: function(name){
	var i=0; 
	while(i<TiM.keys.length){ 
		if(TiM.keys[i].name==name){ 
			return TiM.keys[i].status; 
		} 
		i++; 
	} 
},


loadImage: function(name, url, frames){

	//console.log("Loading image: " + url);

	var i					= TiM.images.length; 

	var imgFrames	= 1;
	frames==undefined ? imgFrames=1 : imgFrames=frames;

	TiM.images[i]			= new Image(); 
	TiM.images[i].name		= name; 
	TiM.images[i].src		= url; 
	TiM.images[i].frames	= imgFrames;

	return  TiM.images[i];
},

getImage: function(name){ 
	var i=0; 
	while(i<TiM.images.length) { 
		if(TiM.images[i].name==name) { 
			return TiM.images[i]; 
			break; 
		} 
		i++; 
	}
},

drawImage: function(name, x, y, angle, scale, alpha, frame){

	var imgAngle	= 0;
	var imgScale	= 1;
	var imgAlpha	= 1.0;
	var imgFrame	= 0;

	angle==undefined ? imgAngle=0 : imgAngle=angle;
	scale==undefined ? imgScale=1 : imgScale=scale;
	alpha==undefined ? imgAlpha=1.0 : imgAlpha=alpha;
	frame==undefined ? imgFrame=0 : imgFrame=frame;

	var img				= TiM.getImage(name);
	var currentAlpha 	= TiM.context2D.globalAlpha;

	TiM.context2D.globalAlpha=imgAlpha;

	TiM.context2D.save();
	TiM.context2D.translate(x+((img.width/img.frames)*imgScale/2), y+(img.height*imgScale/2));
	TiM.context2D.rotate(-((imgAngle)/(180/Math.PI)) );
	TiM.context2D.translate(-(x+((img.width/img.frames)*imgScale/2)), -(y+(img.height*imgScale/2)));

	TiM.context2D.drawImage(img, imgFrame*(img.width/img.frames), 0, (img.width/img.frames), img.height, x, y, (img.width/img.frames)*imgScale, img.height*imgScale);
 
	TiM.context2D.restore();
	TiM.context2D.globalAlpha = currentAlpha;
},


getImageWidth: function(name){
	var img		= TiM.getImage(name);
	
	if(img == undefined){
		//console.log(name);
		return;
	}
	
	var width	= img.width / img.frames;

	return width;
},


getImageHeight: function(name){
	var img		= TiM.getImage(name);

	return img.height;
},


setColor: function(color, alpha){
	var imgAlpha	= alpha==undefined ? 1.0 : alpha; 

	TiM.context2D.globalAlpha	= imgAlpha;
	TiM.context2D.fillStyle		= color; 
	TiM.context2D.strokeStyle	= color;
},


drawLine: function(x1, y1, x2, y2){
	TiM.context2D.beginPath();
	TiM.context2D.moveTo(x1,y1); 
	TiM.context2D.lineTo(x2,y2); 
	TiM.context2D.closePath(); 
	TiM.context2D.stroke(); 
},

drawFillRectangle: function(x, y, width, height){
	TiM.context2D.fillRect(x, y, width, height);
},


resetFont: function(){
	TiM.context2D.fillStyle		= "white";
	TiM.context2D.textAlign		= "start"; 
	TiM.context2D.textBaseline	= "alphabetic"; 
	TiM.context2D.font			= "10px sans-serif";
},

setFont: function(fontFamily){
	TiM.context2D.font			= fontFamily;
},

drawFont: function(x, y, text){
	TiM.context2D.fillText(text, x, y);
},

getTextLength: function(text){
	return TiM.context2D.measureText(text).width;
},


loadSound: function(name, url){
	var itor	= TiM.sounds.length; 
	
	TiM.sounds[itor] 				= new Object();
	TiM.sounds[itor].name			= name;
	TiM.sounds[itor].channel		= new Array();
	for(var i=0; i<TiM.soundChannels; ++i){
		TiM.sounds[itor].channel[i] = new Audio(url);
		TiM.sounds[itor].channel[i].preload = false;
	}
	TiM.sounds[itor].currentChannel	= 0;
	
},

getSound: function(name){
	
	for(var i=0; i<TiM.sounds.length; ++i){
		if(TiM.sounds[i].name == name){
			return TiM.sounds[i];
		}
	}
},

playSound: function(name){

	if(TiM.mute){
		return;
	}
	
	var sfx = TiM.getSound(name);
	
	if(sfx == undefined) return;
	
	sfx.channel[sfx.currentChannel].currentTime = 0;
	sfx.channel[sfx.currentChannel].play();
	sfx.currentChannel ++;
	
	if(sfx.currentChannel >= TiM.soundChannels){
		sfx.currentChannel = 0;
	}

},

loadMusic: function(name, url){
	var itor = TiM.music.length;
	
	var fileName = url + ".ogg";

	TiM.music[itor]		= new Audio(fileName); 
	
	if( !(TiM.music[itor].canPlayType( 'audio/ogg; codecs="vorbis"' ))){
		fileName = url + ".m4a";
		TiM.music[itor] = new Audio(fileName);
	}
	
	//console.log("laduje audio... " + fileName);
	
	TiM.music[itor].name	= name; 
	TiM.music[itor].addEventListener('ended', function(){this.currentTime=0;}, false);
	TiM.music[itor].loop = true;
},

getMusic: function(name){
	var i=0; 
	while(i<TiM.music.length){ 
		if(TiM.music[i].name==name){ 
			return i;
		} 
		i++; 
	}
},

playMusic: function(name){

	if(TiM.mute){
		return;
	}

	TiM.stopMusic();
	TiM.music[TiM.getMusic(name)].play();
},

pauseMusic: function(name){
	TiM.music[TiM.getMusic(name)].pause();
},

getMusicPosition: function(name){
	return TiM.music[TiM.getMusic(name)].currentTime;
},

setMusicPosition: function(name, position){
	TiM.music[TiM.getMusic(name)].currentTime = position;
},

stopMusic: function(){
	for(var i=0; i<TiM.music.length; ++i){
		TiM.music[i].pause();
		TiM.music[i].currentTime = 0;
	}
},


/**
 * returns loading completion percentage
 */
getLoadingProgress: function(){
	var completion	= 0;
	var allData		= TiM.images.length + /*TiM.sounds.length +*/ TiM.music.length;
	var loadedData	= 0;

	for(var i=0; i<TiM.images.length; i++){
		if(TiM.images[i].complete==true){
			loadedData++;
		}
	}
	for(var i=0; i<TiM.sounds.length; i++){
		if(TiM.sounds[i].channel[0].readyState==4){
			loadedData++;
		}
	}
	for(var i=0; i<TiM.music.length; i++){
		if(TiM.music[i].readyState==4){
			loadedData++;
		}
	}

	completion	= (loadedData*100)/allData;

	return completion;
},


defaultFunction: function(){
	//
}


}; //end of TiM namespace


document.onkeydown = function(){
		//var evtobj	= window.event ? event : key; 
		if(window.event){
			var code = event.keyCode;
			//33,34,35,36,37,38,39,40);
			return !(code>=33 && code<=40);
		}
	}  


window.addEventListener("load", TiM.onLoad, false);
document.addEventListener("mousemove", TiM.onMouseMove, false);
document.addEventListener("keydown", TiM.onKeyPress, true);
document.addEventListener("keypress", TiM.onKeyPress, true);
document.addEventListener("keyup", TiM.onKeyUp, false);



