//Permette di stampare a video
/**/function scriviMessaggio (nodo, messaggio) {
/**/	var nodoTesto = document.createTextNode(messaggio);
/**/	if (nodo.childNodes.length == 0) {
/**/		nodo.appendChild(nodoTesto);
/**/	} else {
/**/		nodo.replaceChild(nodoTesto, nodo.firstChild);
/**/	}
/**/}

//Salva in memoria l'indice di dove è salvata la classe selezionata
function gestoreClass(){
	try{
		var block = 0;
		var i = 0;
		while(!block && i<classes.length){
			if(nodoClass.value == classes[i].name){
				nodoImgClass.setAttribute("src",classes[i].img);
				scriviMessaggio (nodoExplanationClass, classes[i].explanation);
				pg[0] = i;
				
				block = 1;
			}
			i++;
		}
		if(!block){
			nodoImgClass.setAttribute("src","img/class/null.png");
		}		
	}catch(e){
		alert("gestoreClass" + e);
	}
}

//Salva in memoria l'indice di dove è salvata la razza selezionata
function gestoreRace(){
	try{
		var block = 0;
		var i = 0;
		while(!block && i<race.length){
			if(nodoRace.value == race[i].name){
				nodoImgRace.setAttribute("src",race[i].img);
				scriviMessaggio (nodoExplanationRace, race[i].explanation);
				pg[1] = i;
				
				block = 1;
			}
			i++;
		}
		if(!block){
			nodoImgRace.setAttribute("src","img/race/null.png");
		}		
	}catch(e){
		alert("gestoreRace" + e);
	}
}

//Salva in memoria l'indice di dove è salvata l'armatura selezionata
function gestoreArmor(){
	try{
		var block = 0;
		var i = 0;
		while(!block && i<armor.length){
			if(nodoArmor.value == armor[i].name){
				nodoImgArmor.setAttribute("src",armor[i].img);
				scriviMessaggio (nodoExplanationArmor, armor[i].explanation);
				pg[2] = i;
				
				block = 1;
			}
			i++;
		}
		if(!block){
			nodoImgArmor.setAttribute("src","img/armor/null.png");
		}		
	}catch(e){
		alert("gestoreArmor" + e);
	}
}

//Salva in memoria l'indice di dove è salvata l'arma selezionata
function gestoreWeapon(){
	try{
		var block = 0;
		var i = 0;
		while(!block && i<weapon.length){
			if(nodoWeapon.value == weapon[i].name){
				nodoImgWeapon.setAttribute("src",weapon[i].img);
				scriviMessaggio (nodoExplanationWeapon, weapon[i].explanation);
				pg[3] = i;
				
				block = 1;
			}
			i++;
		}
		if(!block){
			nodoImgWeapon.setAttribute("src","img/weapon/null.png");
		}		
	}catch(e){
		alert("gestoreWeapon" + e);
	}
}

//Ordina i tiri effettuati
function orderAllDice(){
	for(var i=0; i<7; i++){ 
		for(var j=i+1; j<8; j++){
			if(allDice[j]>allDice[i]){
				var cur = allDice[j];
				allDice[j] = allDice[i];
				allDice[i] = cur;
			}
		}
	}
}

//Richiamata da gestoreRoll. Gestisce un lancio dei 4 dadi
function oneRoll(){
		
		var dice = [];
		var min;
		
		dice[0] = Math.floor( Math.random()*6)+1;
		nodoDiceOne.setAttribute("src",imgDice[dice[0]-1]);
		min = 0;
		
		dice[1] = Math.floor( Math.random()*6)+1;
		nodoDiceTwo.setAttribute("src",imgDice[dice[1]-1]);
		if(dice[1] < dice[min]) 
			min = 1;
		
		dice[2] = Math.floor( Math.random()*6)+1;
		nodoDiceThree.setAttribute("src",imgDice[dice[2]-1]);
		if(dice[2] < dice[min]) 
			min = 2;
		
		var cur = Math.floor( Math.random()*6)+1;
		nodoDiceFour.setAttribute("src",imgDice[cur-1]);
		if(cur > dice[min])
			dice[min] = cur;
		
		allDice[currentRoll] = dice[0];
		for(var i=1; i < dice.length; i++){
			allDice[currentRoll] = allDice[currentRoll]+dice[i];
		}
}

//Gestisce i lanci dei dadi, qunado viene premuto il tasto
function gestoreRoll(){
	try{
		if (currentRoll > 7){
			return;
		}
		oneRoll();

		currentRoll++;
		scriviMessaggio(nodoResultDice, allDice);
		if(currentRoll == 8){
			orderAllDice();
			allDice.splice(6,2);
			scriviMessaggio(nodoValidRoll,allDice);
			nodoRoll.value = "8 tiri fatti!";
			
		}
		
	}catch(e){
		alert("gestoreRoll" + e);
	}
}

//Restituisce i tiri alle caratteristiche in base ad una priorità dovuta alla classe
function valueAssociation(){
		
	for(var i=0; i<allDice.length; i++){ 
		var j = 0; 
		
		while(j<classes[pg[0]].point.length && i != classes[pg[0]].point[j]){
			j++;
		}

		if(j == 0){
			scriviMessaggio(nodoStrength,allDice[i] + race[pg[1]].point[j]);
		}else if(j == 1){
			scriviMessaggio(nodoDexterity,allDice[i] + race[pg[1]].point[j]);
		}else if(j == 2){
			scriviMessaggio(nodoConstitution,allDice[i] + race[pg[1]].point[j]);
		}else if(j == 3){
			scriviMessaggio(nodoIntelligence,allDice[i] + race[pg[1]].point[j]);
		}else if(j == 4){
			scriviMessaggio(nodoWisdon,allDice[i] + race[pg[1]].point[j]);
		}else if(j == 5){
			scriviMessaggio(nodoCharisma,allDice[i] + race[pg[1]].point[j]);
		}else{
			return;
		}
	}
}

//Restituisce i valori scelti dall'utente, dopo aver cliccato il tasto Conferma
function gestoreConfirmation(){
	try{
		valueAssociation();
		scriviMessaggio (nodoClassPg, nodoClass.value);
		scriviMessaggio (nodoAlignPg, nodoAlign.value);
		scriviMessaggio (nodoRacePg, nodoRace.value);
		scriviMessaggio (nodoHpPg, classes[pg[0]].hp);
		scriviMessaggio (nodoCaPg, armor[pg[2]].point);
		scriviMessaggio (nodoWeaponPg, nodoWeapon.value  + " (danno: " + weapon[pg[3]].dice + ")");
		
	}catch(e){
		alert("gestoreConfirmation" + e);
	}
}


var nodoAlign;

var nodoClass;
var nodoImgClass;
var nodoExplanationClass

var nodoRace;
var nodoImgRace;
var nodoExplanationRace;

var nodoArmor;
var nodoImgArmor;
var nodoExplanationArmor;

var nodoWeapon;
var nodoImgWeapon;
var nodoExplanationWeapon;

//Lancio del dado
var nodoRoll;
var nodoDiceOne;
var nodoDiceTwo;
var nodoDiceThree;
var nodoDiceFour;
var nodoResultDice;
var nodoValidRoll;


var nodoRacePg;
var nodoClassPg;
var nodoAlignPg;
var nodoHpPg;
var nodoCaPg;
var nodoWeaponPg;

//Caratteristiche
var nodoStrength;
var nodoDexterity;
var nodoConstitution;
var nodoIntelligence;
var nodoWisdon;
var nodoCharisma;

var nodoConfirmation;
var allDice;
var currentRoll; 
var pg;


function gestoreLoad () {
	try {	
		nodoAlign = document.getElementById("align");
		
		nodoClass = document.getElementById("class");
		nodoImgClass = document.getElementById("imgClass");
		nodoExplanationClass = document.getElementById("explanationClass");
		
		nodoRace = document.getElementById("race");
		nodoImgRace = document.getElementById("imgRace");
		nodoExplanationRace = document.getElementById("explanationRace");
		
		nodoArmor = document.getElementById("armor");
		nodoImgArmor = document.getElementById("imgArmor");
		nodoExplanationArmor = document.getElementById("explanationArmor");
		
		nodoWeapon = document.getElementById("weapon");
		nodoImgWeapon = document.getElementById("imgWeapon");
		nodoExplanationWeapon = document.getElementById("explanationWeapon");
		
		
		nodoRoll = document.getElementById("roll");
		nodoDiceOne = document.getElementById("diceOne");
		nodoDiceTwo = document.getElementById("diceTwo");
		nodoDiceThree = document.getElementById("diceThree");
		nodoDiceFour = document.getElementById("diceFour");
		nodoResultDice = document.getElementById("resultDice");
		nodoValidRoll = document.getElementById("validRoll");

		nodoRacePg = document.getElementById("racePg");
		nodoClassPg = document.getElementById("classPg");
		nodoAlignPg = document.getElementById("alignPg");
		nodoHpPg = document.getElementById("hpPg");
		nodoCaPg = document.getElementById("caPg");
		
		nodoStrength = document.getElementById("strength");
		nodoDexterity = document.getElementById("dexterity");
		nodoConstitution = document.getElementById("constitution");
		nodoIntelligence = document.getElementById("intelligence");
		nodoWisdon = document.getElementById("wisdon");
		nodoCharisma = document.getElementById("charisma");
		
		nodoConfirmation = document.getElementById("confirmation");
		
		nodoWeaponPg = document.getElementById("weaponPg");
		
		pg = [0,0,0,0];//scelte fatte dall'utente
		allDice = [];
		currentRoll = 0;
		
		
		nodoClass.onchange = gestoreClass;
		nodoRace.onchange = gestoreRace;
		nodoArmor.onchange = gestoreArmor;
		nodoWeapon.onchange = gestoreWeapon;
		
		nodoRoll.onclick = gestoreRoll;
		nodoConfirmation.onclick = gestoreConfirmation;

	}catch(e){
		alert ("gestoreLoad: " + e);
	}
}
window.onload = gestoreLoad;

