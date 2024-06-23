var classes = [
	{
		name:"Nessuna", 
		point:[0,1,2,3,4,5],
		hp: 1,
		img:"img/class/null.png",
		explanation:"Nessuna"
	},
	{
		name:"Bardo", 
		point:[5,1,2,4,3,0],
		hp: 8,
		img:"img/class/bard.png",
		explanation:"Colui che si occupa delle interazioni sociali."
	},
	{
		name:"Druido", 
		point:[5,2,1,4,0,3],
		hp: 8,
		img:"img/class/druid.png",
		explanation:"Colui che deve il suo potere alle forze della natura."
	},
	{
		name:"Guerriero", 
		point:[0,2,1,5,3,4],
		hp: 10,
		img:"img/class/fighter.png",
		explanation:"Colui che in battaglia si trova in prima linea."
	},
	{
		name: "Ladro", 
		point:[5,2,1,4,0,3],
		hp: 8,
		img:"img/class/rogue.png",
		explanation:"Colui che si occupa delle azioni furtive."
	},
	{
		name: "Mago", 
		point:[5,1,2,0,3,4],
		hp: 6,
		img:"img/class/wizard.png",
		explanation:"Colui che deve il suo potere allo studio."
	}
]
var race = [
	{
		name:"Nessuna", 
		point:[0,0,0,0,0,0],
		img:"img/race/null.png",
		explanation:"Nessuna"
	},
	{
		name:"Elfo", 
		point:[0,0,0,2,1,0],
		img:"img/race/elf.png",
		explanation:"Intelligenti e saggi. Molti padroneggiano la magia."
	},
	{
		name:"Halfling", 
		point:[0,2,0,0,0,1],
		img:"img/race/halfling.png",
		explanation:"Agili e simpatici. Molti diventano abili bardi o ladri."
	},
	{
		name:"Nano", 
		point:[1,0,2,0,0,0],
		img:"img/race/dwarf.png",
		explanation:"Forti e robusti, sono degli ottimi combattenti."
	},
	{
		name: "Umano", 
		point:[1,1,1,1,1,1],
		img:"img/race/human.png",
		explanation:"Umani ne esistono quanti ne vuoi. Hanno l'abilità di adattarsi."
	}
]

var armor = [
	{
		name:"Nessuna armatura", 
		point:10,
		img:"img/armor/null.png",
		explanation:"Nessuna"
	},
	{
		name:"Cuoio", 
		point:12,
		img:"img/armor/leather.png",
		explanation:"Armatura leggera e poco protettiva."
	},
	{
		name:"Scaglie", 
		point:14,
		img:"img/armor/scale.png",
		explanation:"Armatura media. Copre i punti più vitali."
	},
	{
		name:"Cotta di Maglia", 
		point:16,
		img:"img/armor/chainMail.png",
		explanation:"Armatura pesante. Copre interamente il corpo."
	},
	{
		name: "Completa a Piastre", 
		point:18,
		img:"img/armor/complete.png",
		explanation:"Armatura pesante. Compre interamente il corpo ed è fornita di scudo."
	}
]

var weapon = [
	{
		name:"Pugno", 
		dice:"1d2",
		type:"0",
		img:"img/weapon/fist.png",
		explanation:"Pugni"
	},
	{
		name:"Bastone Ferrato", 
		dice:"1d6",
		type:"0",
		img:"img/weapon/quarterstaff.png",
		explanation:"Arma contundente usata a distanza ravvicinata."
	},
	{
		name:"Pugnale", 
		dice:"1d4",
		type:"2",
		img:"img/weapon/dagger.png",
		explanation:"Arma perforante che può esser lanciata."
	},
	{
		name:"Ascia", 
		dice:"1d8",
		type:"0",
		img:"img/weapon/axe.png",
		explanation:"Arma tagliente che può esser lanciata."
	},
	{
		name:"Spada", 
		dice:"1d10",
		type:"0",
		img:"img/weapon/sword.png",
		explanation:"Arma tagliente usata a distanza ravvicinata."
	},
	{
		name: "Arco", 
		dice:"1d8",
		type:"1",
		img:"img/weapon/bow.png",
		explanation:"Arma perforante usata a lunga distanza."
	}
]

var imgDice = [
	"img/dadi/one.png", 
	"img/dadi/two.png", 
	"img/dadi/three.png", 
	"img/dadi/four.png", 
	"img/dadi/five.png", 
	"img/dadi/six.png", 
];
