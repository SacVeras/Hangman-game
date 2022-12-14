const wordsLists = 
{
    'english':
    {

        'categoriesList' : ['animals', 'fruits','country'],

        'categoriesWords' : {

            'animals':
            ["Akbash","Akita","Albatross","Aldabra Giant Tortoise","Alligator","Alpine Dachsbracke","American Bulldog",
            "American Cocker Spaniel","American Coonhound","American Eskimo Dog","Angelfish","Ant","Anteater","Antelope",
            "Appenzeller Dog","Arctic Fox","Arctic Hare","Arctic Wolf","Armadillo","Asian Elephant","Asian Giant Hornet",
            "Asian Palm Civet","Asiatic Black Bear","Australian Cattle Dog","Australian Kelpie Dog","Australian Mist",
            "Avocet","Axolotl","Aye Aye","Baboon","Bactrian Camel","Badger","Balinese","Bandicoot","Barb","Barn Owl",
            "Barnacle","Barracuda","Basenji Dog","Basking Shark","Basset Hound","Bat","Beagle","Bear","Bearded Collie",
            "Bearded Dragon","Beaver","Beetle","Bengal Tiger","Bichon Frise","Binturong","Bird","Birds Of Paradise",
            "Birman","Bison","Black Bear","Black Rhinoceros","Black Russian Terrier","Black Widow Spider","Bloodhound",
            "Blue Lacy Dog","Blue Whale","Bobcat","Bolognese Dog","Bombay","Bongo","Bonobo","Booby","Border Collie",
            "Border Terrier","Bornean Orang-utan","Borneo Elephant","Boston Terrier","Bottle Nosed Dolphin","Boxer Dog",
            "Boykin Spaniel","Brown Bear","Budgerigar","Buffalo","Bull Mastiff","Bull Shark","Bull Terrier","Bullfrog",
            "Bumble Bee","Burmese","Burrowing Frog","Butterfly","Butterfly Fish","Caiman Lizard","Camel","Capybara",
            "Caracal","Cassowary","Cat","Caterpillar","Chicken","Chimpanzee","Chinchilla","Chinook","Chipmunk","Cichlid",
            "Clouded Leopard","Clown Fish","Clumber Spaniel","Coati","Cockroach","Collared Peccary","Collie","Coral","Cow",
            "Coyote","Crab","Crab-Eating Macaque","Crane","Crested Penguin","Crocodile","Cuscus","Cuttlefish","Deer","Dingo",
            "Discus","Dodo","Dog","Dolphin","Donkey","Dormouse","Dragonfly","Drever","Duck","Dugong","Dunker","Dusky Dolphin",
            "Dwarf Crocodile","Eagle","Earwig","Echidna","Elephant","Elephant Seal","Elephant Shrew","Emperor Penguin",
            "Emperor Tamarin","Emu","English Shepherd","English Springer Spaniel","Falcon","Fin Whale","Finnish Spitz","Fish",
            "Fishing Cat","Flamingo","Flounder","Fly","Flying Squirrel","Fossa","Fox","Frigatebird","Frilled Lizard","Frog",
            "Fur Seal","Gar","Gecko","Gerbil","Gharial","Giant Clam","Gibbon","Gila Monster","Giraffe","Glass Lizard",
            "Glow Worm","Goat","Golden Oriole","Goose","Gopher","Gorilla","Grasshopper","Grey Mouse Lemur","Grey Reef Shark",
            "Grey Seal","Greyhound","Grizzly Bear","Grouse","Hamster","Hare","Harrier","Havanese","Hermit Crab","Heron",
            "Hippopotamus","Honey Bee","Horn Shark","Horned Frog","Horse","Howler Monkey","Hummingbird","Humpback Whale","Hyena",
            "Ibis","Ibizan Hound","Iguana","Impala","Indian Elephant","Indri","Insect","Irish Setter","Jackal","Jaguar","Jellyfish",
            "Kakapo","Kangaroo","King Penguin","Kingfisher","Kiwi","Koala","Komodo Dragon","Kudu","Lemming","Lemur","Leopard",
            "Liger","Lion","Lionfish","Lizard","Mandrill","Marine Toad","Marsh Frog","Mastiff","Mayfly","Meerkat","Mole","Molly",
            "Mongoose","Mongrel","Monkey","Moorhen","Moose","Moray Eel","Moth","Mouse","Mule","Numbat","Octopus","Okapi",
            "Orang-utan","Ostrich","Otter","Oyster","Quetzal","Rabbit","Raccoon","Ragdoll","Rat","Rattlesnake","Red Panda",
            "Red Wolf","Red-handed Tamarin","Reindeer","Rhinoceros","River Dolphin","River Turtle","Robin","Salamander","Sand Lizard",
            "Saola","Scorpion","Sea Lion","Sea Turtle","Seahorse","Seal","Serval","Sheep","Shrimp","Siamese","Silver Dollar","Skunk",
            "Sloth","Slow Worm","Snail","Snake","Snapping Turtle","Sun Bear","Swan","Tasmanian Devil","Tawny Owl","Termite","Tetra",
            "Tiger","Tiger Shark","Tortoise","Toucan","Tree Frog","Tropicbird","Walrus","Wasp","Whippet","White Rhinoceros",
            "White Tiger","Wild Boar","Wolf","Wombat","Woodlouse","Woodpecker","zebra"],
    
            'fruits':
            ["Apple","Apricot","Avocado","Banana","Blackberry","Blueberry","Cherry",
            "Coconut","Cucumber","Durian","Dragonfruit","Fig","Gooseberry","Grape","Guava",
            "Jackfruit","Plum","Kiwifruit","Kumquat","Lemon","Lime","Mango","Watermelon",
            "Mulberry","Orange","Papaya","Passionfruit","Peach","Pear","Persimmon","Pineapple",
            "Pineberry","Quince","Raspberry","Soursop","Star fruit","Strawberry","Tamarind","Yuzu"],

            'country':
            ["Afghanistan","South Africa","Albania","Germany","Andorra","Angola","Saudi Arabia","Algeria","Argentina",
            "Armenia","Australia","Austria","Azerbaijan","Bahamas","Bangladesh","Barbados","Belgium","Belize","Benin","Belarus",
            "Bolivia","Bosnia and Herzegovina;","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Bhutan","Cape Verde",
            "Cameroon","Cambodia","Canada","Kazakhstan","Chad","Chile","China","Cyprus","Colombia","Comoros","Congo","North Korea",
            "South Korea","Ivory Coast","Costa Rica","Croatia","Cuba","Denmark","Dominica","Egypt","El Salvador","United Arab Emirates",
            "Ecuador","Scotland","Slovakia","Slovenia","Spain","United States of America;","Estonia","Ethiopia","Fiji","Philippines","Finland",
            "France","Gabon","Gambia","Ghana","Georgia","Granada","Greece","Guatemala","Guyana","Guinea","Guinea-Bissau","Gabon", "Gambia","Ghana",
            "Georgia","Granada","Greece","Guatemala","Guyana","Guinea","Guinea-Bissau","Yemen","India","Indonesia","England","Iran", "Iraq","Northern Ireland",
            "Ireland","Iceland","Israel","Italy","Jamaica","Japan","Jordan","Kosovo","Kuwait","Laos","Lesotho", "Latvia",
            "Lebanon","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malaysia","Maldives","Mali","Malta","Morocco","Mauritius",
            "Mauritania","Mexico","Myanmar","Micronesia","Mozambique","Moldova","Monaco","Mongolia","Montenegro","Namibia","Nauru","Nepal","Nicaragua",
            "Nigeria","Norway","New Zealand","Oman","Wales","Netherlands","Palestine","Panama","Papua New Guinea","Pakistan","Paraguay" ,
            "Peru","Poland","Portugal","Qatar","Kenya","Kyrgyzstan","United Kingdom","Dominican Republic","Czech Republic","Romania","Rwanda","Russia" ,
            "Senegal","Sierra Leone","Serbia","Singapore","Syria","Somalia","Sri Lanka","Sudan","Sweden","Switzerland","Suriname","Thailand", "Taiwan","Tanzania",
            "East Timor","Togo","Trinidad and Tobago","Tunisia","Turkmenistan","Turkey","Tuvalu","Ukraine","Uganda","Uruguay","Uzbekistan","Vatican ",
            "Venezuela","Vietnam","Zambia","Zimbabwe"]
        }
    },
    
    'portuguese': 
    {
        'categoriesList' : ['animais', 'frutas', 'pa??s'],

        'categoriesWords' : {

            'animais':
            ["abelha","abutre","??caro","??guia","albatroz","alce","alpaca","anaconda","anchova;","andorinha","anta",
            "ant??lope","aranha","arara","asno","atum","avestruz","babu??no","bacalhau","bacuri","bagre","baiacu","baleia",
            "barata","barbo","barracuda","beija-flor","besouro","bem-te-vi","bezerro","bicho-da-seda","bisonte","bode",
            "boi","borboleta","boto","b??falo","burro","cabra","cachalote","cachorro","c??gado","camale??o","camar??o","camelo",
            "camundongo","can??rio","canguru","capivara","caracol","caranguejo","carneiro","carrapato","cascavel","castor",
            "cavalo","cavalo-marinho","cegonha","centopeia","chimpanz??","chinchila","chita","cigarra","cisne","coala","cobra",
            "codorna","coelho","coiote","coruja","corvo","crocodilo","cupim","cutia", "degu","diabo-da-tasm??nia","dingo",
            "dinossauro","dod??","doninha","dourado","drag??o-de-komodo","dromed??rio","dugongo","??gua","elefante","elefante-marinho",
            "ema","enchova","enferrujado","enguia","enho","escaravelho","escorpi??o","esmerilh??o","espadarte","esponja","esquilo",
            "estrela-do-mar","esturj??o","fais??o","falc??o","flamingo","foca","formiga","fossa","frango-d'??gua","freirinha","fuinha",
            "fur??o","gafanhoto","gaivota","galinha","galo","gamb??","gamo","ganso","gar??a","gato","gavi??o","gazela","geco","gib??o",
            "girafa","girino","gnu","golfinho","gorila","gralha","grifo","grilo","guar??","guaxinim","hadoque","hamster","harpia",
            "hiena","hipop??tamo","h??rax","iaque","??bex","??bis","iguana","impala","indri","inhala","inhambu","irapu??","irara",
            "iratim","itapema","jabiru","jabuti","ja??an??","jacar??","jacu","jacupar??","jaguar","jamanta","jararaca","javali",
            "jegue","jiboia","joaninha","jo??o-de-barro","jumento", "krill", "kiwi","lacraia","lagarta","lagartixa","lagarto",
            "lagosta","lampreia","le??o","le??o-marinho","lebre","l??mure","leopardo","lesma","lhama","lib??lula","lince","linguado",
            "lobo","lombriga","lontra","lula","macaco","mamute","mandril","mangang??","maracan??","marimbondo","mariposa","marisco",
            "marmota","marreco","medusa","melro","mergulh??o","merluza","mexilh??o","mico","milhafre","mineirinho","minhoca","mocho",
            "mono","morcego","moreia","morsa","mosca","mosquito","mu??urana","mula","naja","narval","n??utilo","neon","niala","numbat",
            "n??tria","ocapi","olho-de-boi","on??a","orangotango","orca","??rix","ornitorrinco","ostra","ouri??o","ouri??o-do-mar","ovelha",
            "panda","pantera","papagaio","pardal","p??ssaro","pato","pav??o","peixe","peixe-boi","pelicano","percevejo","perereca",
            "periquito","pernilongo","peru","pescada","pica-pau","pinguim","piolho","piranha","pirarucu","polvo","pombo","p??nei",
            "porco","porco-espinho","porquinho-da-??ndia","pre??","pregui??a","pulga","quati","quatimirim","quebra-nozes","queixada",
            "quero-quero","quetzal","quiriquiri","r??","raia","raposa","ratazana","rato","r??mora","rena","rendeira","rinoceronte",
            "robalo","rouxinol","sabi??","sagui","salamandra","salm??o","sanguessuga","sapo","sard??o","sardinha","sa??va","seriema",
            "serpente","siri","su??uarana","sucuri","suricate","surubi","surucucu","tainha","tamandu??","tamboril","tapir","tar??ntula",
            "tartaruga","tatu","tentilh??o","tetra","texugo","tico-tico","tigre","til??pia","tordo","toror??","toupeira","touro",
            "trit??o","truta","tubar??o","tucano","unic??rnio","urso","urubu","urutu","vaca","vaca-marinha","vaga-lume","veado",
            "verdilh??o","vespa","v??bora","vieira","vira-bosta","vison","vi??va-negra","wombat","xex??u","zang??o","zebra"],

            'frutas':
            ["Abacate","Amora","Ameixa","Acerola","Abacaxi","A??a??","Abric??","Atemoya","Bacuri","Banana","Baru","Buriti",
            "Cacau","Caj??-Manga","Caqui","Cereja","Caj??","Cupua??u","Caju","Carambola","Coco","Damasco","Dend??","Feijoa",
            "Figo","Framboesa","Goiaba","Graviola","Groselha","Guamirim","Guaran??","ing??","Jabuticaba","Jaci","Jaca","Jambo",
            "Jamel??o","Jatob??","Jenipapo","Ju??","Jujuba","Kiwi","Laranja","Lichia","Lim??o","Longan","Ma????","Mam??o","Mamey",
            "Manga","Mangaba","Mangost??o","Maracuj??","Marmelo","Melancia","Mel??o","Mexerica","Mirtilo","Morango","Murici",
            "Nectarina","oiti","Pequi","Pera","P??ssego","Pinda??ba","Pinha","Pistache","Pitanga","Pitaya","Pitomba","Pomelo",
            "Pu????","Rambut??o","Rom??","Sapoti","T??mara","Tamarindo","Tangerina","Tarum??","Toranja","Umbu","Um??","Uva"],

            'pa??s':
            ["Afeganist??o","??frica do Sul","Alb??nia","Alemanha","Andorra","Angola","Ar??bia Saudita","Arg??lia","Argentina",
            "Arm??nia","Austr??lia","??ustria","Azerbaij??o","Bahamas","Bangladesh","Barbados","B??lgica","Belize","Benim","Bielorr??ssia",
            "Bol??via","B??snia e Herzegovina;","Botswana","Brasil","Brunei","Bulg??ria","Burkina Faso","Burundi","But??o","Cabo Verde",
            "Camar??es","Camboja","Canad??","Cazaquist??o","Chade","Chile","China","Chipre","Col??mbia","Comores","Congo","Coreia do Norte",
            "Coreia do Sul","Costa do Marfim","Costa Rica","Cro??cia","Cuba","Dinamarca","Dominica","Egito","El Salvador","Emirados ??rabes Unidos",
            "Equador","Esc??cia","Eslov??quia","Eslov??nia","Espanha","Estados Unidos da Am??rica;","Est??nia","Eti??pia","Fiji","Filipinas","Finl??ndia",
            "Fran??a","Gab??o","G??mbia","Gana","Ge??rgia","Granada","Gr??cia","Guatemala","Guiana","Guin??","Guin??-Bissau","Gab??o","G??mbia","Gana",
            "Ge??rgia","Granada","Gr??cia","Guatemala","Guiana","Guin??","Guin??-Bissau","I??men","??ndia","Indon??sia","Inglaterra","Ir??","Iraque",
            "Irlanda do Norte","Irlanda","Isl??ndia","Israel","It??lia","Jamaica","Jap??o","Jord??nia","Kosovo","Kuwait","Laos","Lesoto","Let??nia",
            "L??bano","Lib??ria","L??bia","Liechtenstein","Litu??nia","Luxemburgo","Madagascar","Mal??sia","Maldivas","Mali","Malta","Marrocos","Maur??cia",
            "Maurit??nia","M??xico","Mianmar","Micron??sia","Mo??ambique","Mold??via","M??naco","Mong??lia","Montenegro","Nam??bia","Nauru","Nepal","Nicar??gua",
            "Nig??ria","Noruega","Nova Zel??ndia","Om??","Pa??s de Gales","Pa??ses Baixos","Palestina","Panam??","Papua-Nova Guin??","Paquist??o","Paraguai",
            "Peru","Pol??nia","Portugal","Qatar","Qu??nia","Quirguist??o","Reino Unido","Rep??blica Dominicana","Rep??blica Tcheca","Rom??nia","Ruanda","R??ssia",
            "Senegal","Serra Leoa","S??rvia","Singapura","S??ria","Som??lia","Sri Lanka","Sud??o","Su??cia","Su????a","Suriname","Tail??ndia","Taiwan","Tanz??nia",
            "Timor-Leste","Togo","Trinidad e Tobago","Tun??sia","Turcomenist??o","Turquia","Tuvalu","Ucr??nia","Uganda","Uruguai","Uzbequist??o","Vaticano",
            "Venezuela","Vietn??","Z??mbia","Zimb??bue"]
        }
    }
}