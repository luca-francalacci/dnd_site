//Permette di stampare a video
/**/function scriviMessaggio (nodo, messaggio) {
/**/	var nodoTesto = document.createTextNode(messaggio);
/**/	if (nodo.childNodes.length == 0) {
/**/		nodo.appendChild(nodoTesto);
/**/	} else {
/**/		nodo.replaceChild(nodoTesto, nodo.firstChild);
/**/	}
/**/}

//cerca il valore più alto
function findMax(){
	var max = 0;
	for(var i=1; i < affinity.length; i++){
		if(affinity[i] > affinity[max]) //--------------------------------------------------------------if(affinity[i] > max)
			max = i;
	}
	return max;
}

//crea l'affinità e lo stampa a video
function crAffinity(i){
	if(i == (numberQuest-1)){
		var s = findMax();
		scriviMessaggio (nodoResult,"Sei proprio un "+association[s]+"!");
		return;
	}
	affinity[quest[i].combination[answerDate[i]]] ++ ;
	crAffinity(i+1);
}


//aggiorna la domanda, quando si cambia domanda
function update(i){
	if ((currQuestion) == numberQuest){
			block = true;
			//-----------------------------------------------------------------------------------------affinity[0] ++;
			crAffinity(0);
		}
	if(currQuestion < numberQuest){
		scriviMessaggio(nodoQuestionNumber, 	"Domanda " + (i + 1) + " di " + numberQuest);
		scriviMessaggio(nodoQuestionText, quest[i].request);
		scriviMessaggio(nodoAnswerText0, quest[i].answer[0]);
		scriviMessaggio(nodoAnswerText1, quest[i].answer[1]);
		scriviMessaggio(nodoAnswerText2, quest[i].answer[2]);
		scriviMessaggio(nodoAnswerText3, quest[i].answer[3]);
		scriviMessaggio(nodoAnswerText4, quest[i].answer[4]);
	}
	nodoAnswer0.checked = false;
	nodoAnswer1.checked = false;	
	nodoAnswer2.checked = false;
	nodoAnswer3.checked = false;	
	nodoAnswer4.checked = false;	
}

//genera un nuovo test
function gestoreClickStart () {
	try {
		newQuest();
	} catch ( e ) {
		alert("gestoreClickStart " + e);
	}
}

//salva la risposta data
function gestoreClickNext () { 
	try {
		if(block)
			return;

		if(nodoAnswer0.checked == true)
			answerDate[currQuestion] = 0;
		
		else if(nodoAnswer1.checked == true)
			answerDate[currQuestion] = 1;
		
		else if(nodoAnswer2.checked == true)
			answerDate[currQuestion] = 2;
		
		
		else if(nodoAnswer3.checked == true)
			answerDate[currQuestion] = 3;
		
		else if(nodoAnswer4.checked == true)
			answerDate[currQuestion] = 4;
		
		
		else
			return;
		
		currQuestion++;
		update(currQuestion);
		
	} catch ( e ) {
		alert("gestoreClickNext " + e);
	}
}

//avvia un nuovo test
function newQuest () {
/**/	currQuestion = 0;
/**/	update(currQuestion);
/**/	scriviMessaggio(nodoResult, "");
/**/	answerDate = [];
	affinity = [0,0,0,0,0];
	block = false;
}

var nodoQuestionNumber;
var nodoQuestionText;
var nodoAnswer0;
var nodoAnswerText0;
var nodoAnswer1;
var nodoAnswerText1;
var nodoAnswer2;
var nodoAnswerText2;
var nodoAnswer3;
var nodoAnswerText3;
var nodoAnswer4;
var nodoAnswerText4;

var nodoNext;
var nodoResult;
var nodoStart;

var block;
var currQuestion;
var numberQuest;
var answerDate;
var affinity;

function gestoreLoad(){
	try{
		nodoQuestionNumber = document.getElementById("questionNumber");
		nodoQuestionText = document.getElementById("questionText");
		nodoAnswer0 = document.getElementById("answer0");
		nodoAnswerText0 = document.getElementById("answerText0");
		nodoAnswer1 = document.getElementById("answer1");
		nodoAnswerText1 = document.getElementById("answerText1");
		nodoAnswer2 = document.getElementById("answer2");
		nodoAnswerText2 = document.getElementById("answerText2");
		nodoAnswer3 = document.getElementById("answer3");
		nodoAnswerText3 = document.getElementById("answerText3");
		nodoAnswer4 = document.getElementById("answer4");
		nodoAnswerText4 = document.getElementById("answerText4");
		
		nodoNext = document.getElementById("next");
		nodoResult = document.getElementById("result");
		nodoStart = document.getElementById("start");
	
		nodoNext.onclick = gestoreClickNext;
		nodoStart.onclick = gestoreClickStart;
		numberQuest = quest.length;

		newQuest();

		
	}catch(e){
		alert("gestoreLoad " + e);
	}
}
window.onload = gestoreLoad;