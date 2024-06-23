var association = [
	"Bardo",
	"Druido",
	"Guerriero",
	"Ladro",
	"Mago"
	]
	
var quest = [
	{//domanda 1
		request : "Qual è il tuo piatto preferito?",
		answer : [
			"Pasta e fagioli",
			"Insalatona",
			"Formaggio e miele",
			"Pizza",
			"Panino"
		],
		combination : [
			2, //Guerriero
			1, //Druido
			4, //Mago
			0, //Bardo
			3 //Ladro
		]
	},
	{//domanda 2
		request : "Apri una cassa piena di oggetti strani: quale prendi?",
		answer : [
			"Un pugnale dal manico di testa di falco",
			"Un vecchio libro dalla copertina in pelle",
			"Una ricetta di un qualche rimedio naturale",
			"Un sacco pieno zeppo di monete sconosciute",
			"Una pergamena dove è stata scritta una poesia"
		],
		combination : [
			2,
			4,
			1,
			3,
			0
		]
	},
	{//domanda 3
		request : "Quale delle segue è la caratteristica che più ti si addice?",
		answer : [
			"Sono molto sociale",
			"Sono una persona a cui tiene all'ambiente",
			"Sono silenzioso/a",
			"Sono sportivo/a",
			"Sono molto intelligente"
		],
		combination : [
			0, //Bardo
			1, //Druido
			3, //Ladro		
			2, //Guerriero
			4 //Mago
		]
	},
	{//domanda 4
		request : "Qual è il tuo animale preferito?",
		answer : [
			"Mi piacciono tutti gli animali",
			"Un animale grande e feroce, come un leone",
			"Un animale domestico come il cane o il gatto",
			"Un piccolo animale come un criceto",
			"Un animale insolito, come un pavone o un pappagallo"
		],
		combination : [
			1, //Druido		
			2, //Guerriero
			3, //Ladro
			4, //Mago
			0 //Bardo
		]
	},	
	{//domanda 5
		request : "Il tuo tempo libero, lo dedichi:",
		answer : [
			"allo sport",
			"ad imparare cose nuove",
			"a migliorare le mie competenze artistiche",
			"attività all'aperto",
			"altro "
		],
		combination : [	
			2, //Guerriero
			4, //Mago
			0, //Bardo
			1, //Druido	
			3 //Ladro
		]
	}
]