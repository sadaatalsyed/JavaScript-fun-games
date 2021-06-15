//challange 1;
 console.log('hello');
 function AgeDays(){
 	var birthyear=prompt("Whats your birthyear Good Man!?");
 	var ageindays=(2020- birthyear)*365;
 	var h1= document.createElement('h1');
   
    var result=document.createTextNode(
    	'Your age in days is '+ageindays);
   h1.setAttribute('id','ageinDays');
   h1.appendChild(result);
   console.log(h1);
   document.getElementById('flex-box-result').appendChild(h1);
 /*   var f1=document.createElement('div');
    f1.setAttribute('id','flex-box-reslt');
    f1.appendChild(h1);
    document.getElementById('flex-box-container-1').appendChild(f1);
    */
 }
 function reset(){
 	document.getElementById('ageinDays').remove()
 }
 // Challange 2 : Cat Generator
 function GenerateCat(){
 var image=document.createElement('img');
 var div=document.getElementById('flex-cat-gen');
 //console.log(div)
 image.setAttribute('src','fl.jpg');
 image.width=200;image.height=200;
 div.appendChild(image);
 } 
 function changecolor(){
	 
	 document.getElementById("btn-1").style.background='green';
 }
 
 function ChangeButtonColor(selection){
	 console.log(selection.id);
	 var color=selection.id;
	 
	 document.getElementById("btn-g").style.background='selection.id';
 }

 // Challange 3: Rock Paper Scissors
 function rps(yourchoice){
  console.log(yourchoice.id);
 // console.log(yourchoice);
 var comchoice=botchoice();
 var humanchoice=yourchoice.id;
 //console.log(comchoice);
 var result=results(yourchoice.id,comchoice);
 console.log('This is the result  '+result);
 var [yourscore,botscore]=result;
 var message=WinnerMessage(yourscore,botscore);
 console.log(message);
 FrontEndMessage(humanchoice,comchoice,message);
 }
 //
 function botchoice(){
 	var int=randtoint();

 	return ['rock','paper','scissors'][int];
 }
 function randtoint(){
 	return Math.floor(Math.random()*3);
 }
//
function results(mychoice,comchoice){
 var rpsdb={'rock':{'rock':0.5,'paper':0,'scissors':1}, 
            'paper':{'rock':1,'paper':0.5,'scissors':0},
            'scissors':{'rock':0,'paper':1,'scissors':0.5}};
 var yourchoice1= rpsdb[mychoice][comchoice];
 var botchoice1=rpsdb[comchoice][mychoice];
 return [yourchoice1,botchoice1];
}
//
function WinnerMessage(yourscore, botscore){
	console.log("YourScore: "+ yourscore,'ComScore: '+botscore);
 if(yourscore==1)
 {
 	return {'message':'You Won', 'color':'green'};
 }
 else if(yourscore==0.5)
 {
 	return {'message': 'You Tied', 'color':'yellow'};
 }
 else
 {
 	return {'message': " You Lost", "color":"red"};
 }

}
function FrontEndMessage(humanimgChoice,botimgChoice,Message){
	var imgdb={
		'rock':document.getElementById('rock').src,
		'paper':document.getElementById('paper').src,
		'scissors':document.getElementById('scissors').src
	}
	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();
	var yourdiv=document.createElement('div');
    var comdiv=document.createElement('div');
    var msgdiv=document.createElement('div'); 
yourdiv.innerHTML="<img src='"+imgdb[humanimgChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px blue'>";
comdiv.innerHTML="<img src='"+imgdb[botimgChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px red'>";
msgdiv.innerHTML="<h1 style='color:"+Message['color']+ ";font-size:50px;padding:30px; '>"+Message['message']+"</h1 >";
var rpsflex=document.getElementById('rps');
rpsflex.appendChild(yourdiv);
rpsflex.appendChild(msgdiv);
rpsflex.appendChild(comdiv);

}
// Challange 4 : Change Button Color 

var allButtons=document.getElementsByTagName('button')
//var ab=document.getElementById('btn-2');
console.log(HTMLCollection[2]);
console.log(allButtons);
var CopyOfAllButtons=[];
for(let i=0; i<7; i++){

	//CopyOfAllButtons.push(allButtons[i].classList[1]);
	//console.log(CopyOfAllButtons);
	//console.log(CopyOfAllButtons);
}
console.log("what is the problem here?");
console.log(CopyOfAllButtons);
 








