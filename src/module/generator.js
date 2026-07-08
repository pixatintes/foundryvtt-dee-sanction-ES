import { Logger } from "./logger.js";

const log = new Logger();

const mannerisms = {
	"Flemático": [
		"Actitud tranquila y despreocupada",
		"Obstinadamente terco en silencio",
		"No quiere causar problemas",
		"Evita los conflictos",
		"Abierto a todas las opciones",
		"Oyente pasivo (¡estoy escuchando!)",
		"¿No podemos llevarnos todos bien?",
		"Reparte el trabajo de forma desigual",
		"Observa a los demás",
		"Evita tomar decisiones",
		"Siempre busca las salidas",
		"Se divierte con facilidad"
	],
	"Melancólico": [
		"Reservado",
		"Generalmente parece triste o molesto",
		"Es más seguro no ir solo",
		"Orientado a los horarios y la planificación",
		"Percibe lo negativo",
		"Evita las críticas",
		"Increíblemente organizado",
		"Difícil de complacer",
		"Desconfiado",
		"Siempre con un toque teatral",
		"Siempre es mejor con música",
		"Ahorrador"
	],
	"Colérico": [
		"Deseoso de descubrir más",
		"Ambicioso hasta lo irracional",
		"Insistente (vamos, sigue, sigue...)",
		"Digno de confianza",
		"Cuanto más fuerte, mejor",
		"Siempre preparado",
		"Lo sabe todo",
		"Sin arrepentimiento",
		"Autosuficiente (pero no preparado)",
		"No está cansado (pero sí lo está)",
		"Lanza cosas solo para sobrellevar la situación",
		"Competitivo sin necesidad"
	],
	"Sanguíneo": [
		"Desorganizado",
		"Poca capacidad de atención",
		"Rico en amistades",
		"Cambios emocionales repentinos",
		"Da el mérito a quien corresponde",
		"Quiere complacer a los demás",
		"Olvidadizo sin intención",
		"Abierto a dejarse llevar por el mal camino",
		"Generalmente lleno de alegría",
		"Tengo chismes y los cuento",
		"Ligeramente inmaduro",
		"Siempre intenta recuperarse"
	]
}

const homes = [
    "London",
    "Norwich",
    "Cambridge",
    "Newcastle",
    "Coventry",
    "Exeter",
    "Salisbury",
    "Ipswich",
    "King's Lynn",
    "Canterbury",
    "Totnes",
    "Reading",
    "Colchester",
    "Lavenham",
    "Wisbech",
    "Bury St Edmunds",
    "Hull",
    "York",
    "Worcester",
    "Lincoln",
    "Hereford",
    "Gloucester",
    "Leicester",
    "Hadleigh",
    "Great Yarmouth",
    "Dover",
    "Oxford",
    "Southampton",
    "Bolton",
    "Bristol",
    "Wrexham",
    "Carmarthen",
    "Brecon",
    "Dublin",
    "Drogheda",
    "Waterford"
]

const christian = {
    male: [
        "John",
        "Thomas",
        "William",
        "Robert",
        "Richard",
        "Henry",
        "George",
        "Edward",
        "James",
        "Francis",
        "Nicholas",
        "Ralph",
        "Christopher",
        "Anthony",
        "Matthew",
        "Edmund",
        "Walter",
        "Hugh",
        "Andrew",
        "Humphrey",
        "Abraham",
        "Barnaby",
        "Valentine",
        "Leonard",
        "Martin",
        "Simon",
        "Peter",
        "Philip",
        "Stephen",
        "Lawrence",
        "Roger",
        "Daniel",
        "Michael",
        "Samuel",
        "Allen",
        "Charles",
        "Alexander",
        "Gregory",
        "Nathaniel",
        "David",
        "Luke",
        "Tobias",
        "Isaac",
        "Ambrose",
        "Griffin",
        "Squally",
    ],
    female: [
        "Elizabeth",
        "Joan",
        "Margaret",
        "Alice",
        "Anne",
        "Mary",
        "Jane",
        "Catherine",
        "Elinor",
        "Isabel",
        "Dorothy",
        "Margery",
        "Susanna",
        "Ellen",
        "Sarah",
        "Frances",
        "Joyce",
        "Ruth",
        "Constance",
        "Amphelisia",
        "Kynborow",
        "Clarice",
        "Christina",
        "Edith",
        "Emma",
        "Lucy",
        "Marion",
        "Cecily",
        "Grace",
        "Amy",
        "Rachel",
        "Charity",
        "Rose",
        "Fortune",
        "Judith",
        "Philippa",
        "Audrey",
        "Janet",
        "Sybil",
        "Beatrice",
        "Maria",
        "Blanche",
        "Lettice",
        "Faith",
        "CharityAgnes",
    ]
}

const surnames = [
    "Abell",
    "Abery",
    "Adams",
    "Alington",
    "Ashton",
    "Askew",
    "Aubrey",
    "Aylmer",
    "Bacon",
    "Bailey",
    "Ballard",
    "Bands",
    "Barfoot",
    "Barton",
    "Berry",
    "Bewley",
    "Boothe",
    "Borrow",
    "Bray",
    "Carter",
    "Cavell",
    "Cely",
    "Chase",
    "Chatwyn",
    "Cheddar",
    "Chester",
    "Child",
    "Clark",
    "Cole",
    "Conquest",
    "Daunce",
    "Dickinson",
    "Duff",
    "Egerton",
    "Estney",
    "Fitzlewis",
    "Fletcher",
    "Fox",
    "Froste",
    "Gage",
    "Geffray",
    "Godfrey",
    "Goldwell",
    "Gomfrey",
    "Goodryke",
    "Gorste",
    "Grimbald",
    "Haddock",
    "Harte",
    "Harwood",
    "Hatteclyff",
    "Hodgeson",
    "Hornebolt",
    "Hylderley",
    "Irving",
    "Killigrew",
    "Knoyll",
    "Lake",
    "Leeds",
    "Lloyd",
    "Lodyngton",
    "Lond",
    "Loveryk",
    "Lyon",
    "Lytton",
    "Mede",
    "Merstun",
    "Milner",
    "Molyngton",
    "Morecote",
    "Mugge",
    "Nash",
    "Oke",
    "Page",
    "Petley",
    "Pyn",
    "Roper",
    "Sandes",
    "Scrogs",
    "Shawe",
    "Shevington",
    "Snell",
    "Sparrow",
    "Stokerton",
    "Sumner",
    "Treningham",
    "Ufford",
    "Vawdrey",
    "Warde",
    "Winter",
    "Wyard",
    "Yaxley",
]

export function generator(type) {
    switch (type) {
        case "manner-roll":
            const humours = Object.keys(mannerisms);
            const humour = humours[Math.floor(Math.random() * humours.length)];
            const manner = mannerisms[humour][Math.floor((Math.random() * humour.length))];
            return {system:{mannerism: {humour:humour,detail:manner}}};
        case "home-roll":
            const home = homes[Math.floor(Math.random() * homes.length)];
            return {system:{home: home}};
        case "name-roll":
            const sex = (Math.random()>0.5) ? "male" : "female";
            const forename = christian[sex][Math.floor(Math.random() * christian[sex].length)];
            const surname = surnames[Math.floor(Math.random() * surnames.length)];
            return {name:`${forename} ${surname}`};
    }
}

export async function randomPossessions(actor, html) {
    const checks = html.currentTarget.querySelectorAll('input[name="possessions"]:checked');
    if (checks.length > 3) {
        ui.notifications.warn("¡Debes elegir tres como máximo!");
        return false;
    }
    const types = [];
    // checks.map(function() {
    //     types.push($(this).val());
    // });
    checks.forEach((c) => {
        const value = c.value;
        types.push(value);
    });
    const items = [];
    await Promise.all(types.map(async(type) => {
        return randomThing(actor, type);
    }));
}

async function RollTablefromFolder(folder, options={}) {
    const results = folder.contents.map((doc, i) => ({
      name: doc.name,
      type: "document",
      documentUuid: doc.uuid,
      img: doc.thumbnail || doc.img,
      weight: 1,
      range: [i+1, i+1],
      drawn: false
    }));
    options.renderSheet = options.renderSheet ?? true;
    return new RollTable({
      name: folder.name,
      description: `A random table created from the contents of the ${folder.name} Folder.`,
      results: results,
      formula: `1d${results.length}`
    }, options);
  }

export async function randomThing(actor, type) {
    const folder = game.folders.getName(type);
    const items = [];
    if (folder) {
        const rt = await RollTablefromFolder(folder,{temporary: true, renderSheet:false});
        const roll = await rt.roll({async:true});
        const res = roll.results[0].name;
        const item = game.items.getName(res);
        if (item) {
            items.push(item.toObject());
        }
    }
    if (items.length) {
        return await actor.createEmbeddedDocuments("Item",items);
    }
}

export async function randomFavourOrSight(actor) {
    const useSight = game.settings.get("dee", "use-sight");
    if (useSight) {
        log.debug('randomFavourOrSight() | Using The Sight Rules');
        const hasSight = Math.round(Math.random() * 11) + 1  >= 11;
        return (hasSight) ? randomThing(actor,  "Sights") : randomThing(actor,  "Favours");
    }
    return randomThing(actor,  "Favours"); 
}