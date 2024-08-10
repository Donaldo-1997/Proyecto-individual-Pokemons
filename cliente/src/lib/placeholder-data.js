import fs from 'fs'

export class Pokemons {
    constructor() {
        this.pokemons = [
            {id:"9b203039-500c-4a17-ada8-1a4b80ecd798",name:"charmeleon",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",hp:"58",attack:"64",defense:"58",speed:"80",height:"11",weight:"190",createdByUser:false,types:["fire"]},
            {id:"190f4c95-9099-4d7c-a033-e685f08e0ce0",name:"charizard",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",hp:"78",attack:"84",defense:"78",speed:"100",height:"17",weight:"905",createdByUser:false,types:["fire","flying"]},
            {id:"62c25b3d-336e-496a-862c-0ab92f3450dc",name:"squirtle",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",hp:"44",attack:"48",defense:"65",speed:"43",height:"5",weight:"90",createdByUser:false,types:["water"]},
            {id:"592d28e0-bda8-4900-b3e9-36d4976b28b9",name:"venusaur",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",hp:"80",attack:"82",defense:"83",speed:"80",height:"20",weight:"1000",createdByUser:false,types:["poison","grass"]},
            {id:"ecd323a8-a1d6-4a80-bb67-7717b130b869",name:"ivysaur",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",hp:"60",attack:"62",defense:"63",speed:"60",height:"10",weight:"130",createdByUser:false,types:["poison","grass"]},
            {id:"4438ed87-1148-40b6-8369-ff743905aebd",name:"blastoise",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",hp:"79",attack:"83",defense:"100",speed:"78",height:"16",weight:"855",createdByUser:false,types:["water"]},
            {id:"17dc68f3-1fc8-4c49-a996-4465b0a80c19",name:"metapod",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",hp:"50",attack:"20",defense:"55",speed:"30",height:"7",weight:"99",createdByUser:false,types:["bug"]},
            {id:"3d8bfbd9-2061-4407-802c-8b5dd46946b8",name:"wartortle",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",hp:"59",attack:"63",defense:"80",speed:"58",height:"10",weight:"225",createdByUser:false,types:["water"]},
            {id:"73897866-bfad-4189-81d4-b846114af6a3",name:"caterpie",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",hp:"45",attack:"30",defense:"35",speed:"45",height:"3",weight:"29",createdByUser:false,types:["bug"]},
            {id:"376af173-eb3f-492a-a84b-6643eb64081b",name:"bulbasaur",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",hp:"45",attack:"49",defense:"49",speed:"45",height:"7",weight:"69",createdByUser:false,types:["poison","grass"]},
            {id:"ffaf41a9-fb2f-4640-bb42-f7b67425470b",name:"beedrill",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",hp:"65",attack:"90",defense:"40",speed:"75",height:"10",weight:"295",createdByUser:false,types:["poison","bug"]},
            {id:"a53f41ab-c0d0-49f6-8a12-80cf45073277",name:"weedle",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",hp:"40",attack:"35",defense:"30",speed:"50",height:"3",weight:"32",createdByUser:false,types:["bug","poison"]},
            {id:"7fa46c56-2a94-4b75-88e7-6d125ce39379",name:"pidgey",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",hp:"40",attack:"45",defense:"40",speed:"56",height:"3",weight:"18",createdByUser:false,types:["flying","normal"]},
            {id:"e9652f2c-9dd5-4aa7-a4e4-ab51c0412a29",name:"pidgeotto",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",hp:"63",attack:"60",defense:"55",speed:"71",height:"11",weight:"300",createdByUser:false,types:["normal","flying"]},
            {id:"046b7796-04e5-4a27-9581-9426d263ce40",name:"pidgeot",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",hp:"83",attack:"80",defense:"75",speed:"101",height:"15",weight:"395",createdByUser:false,types:["normal","flying"]},
            {id:"e76a0b05-3215-4a87-93b4-0af770ad8549",name:"rattata",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",hp:"30",attack:"56",defense:"35",speed:"72",height:"3",weight:"35",createdByUser:false,types:["normal"]},
            {id:"db3331a4-5728-48bd-819b-a49cc5f7eb39",name:"raticate",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",hp:"55",attack:"81",defense:"60",speed:"97",height:"7",weight:"185",createdByUser:false,types:["normal"]},
            {id:"54418b11-635b-4081-b04a-9bd143537fc0",name:"butterfree",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",hp:"60",attack:"45",defense:"50",speed:"70",height:"11",weight:"320",createdByUser:false,types:["flying","bug"]},
            {id:"6485c573-de32-460a-bdff-3a46901dc0b1",name:"kakuna",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",hp:"45",attack:"25",defense:"50",speed:"35",height:"6",weight:"100",createdByUser:false,types:["poison","bug"]},
            {id:"016d3f21-c67d-4e50-9168-862b227ac289",name:"spearow",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg",hp:"40",attack:"60",defense:"30",speed:"70",height:"3",weight:"20",createdByUser:false,types:["normal","flying"]},
            {id:"eed466d3-6fbf-4aa1-9043-e1682aa7525d",name:"arbok",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",hp:"60",attack:"95",defense:"69",speed:"80",height:"35",weight:"650",createdByUser:false,types:["poison"]},
            {id:"f803d99c-f94e-4691-9944-5e14f221138e",name:"raichu",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",hp:"60",attack:"90",defense:"55",speed:"110",height:"8",weight:"300",createdByUser:false,types:["electric"]},
            {id:"e6453854-93b8-4d95-a426-7f5da1b819c4",name:"sandshrew",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",hp:"50",attack:"75",defense:"85",speed:"40",height:"6",weight:"120",createdByUser:false,types:["ground"]},
            {id:"7ee13329-cd0a-422a-aafc-18cbaac0be7c",name:"sandslash",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",hp:"75",attack:"100",defense:"110",speed:"65",height:"10",weight:"295",createdByUser:false,types:["ground"]},
            {id:"74b74260-da29-4ac6-b0ab-347bd463cd3f",name:"nidoran-f",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg",hp:"55",attack:"47",defense:"52",speed:"41",height:"4",weight:"70",createdByUser:false,types:["poison"]},
            {id:"e097526a-88cc-4c13-afe9-e9ccf89b7d6d",name:"nidorina",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg",hp:"70",attack:"62",defense:"67",speed:"56",height:"8",weight:"200",createdByUser:false,types:["poison"]},
            {id:"cbd87441-6e4f-402a-92cc-c9d0055b3ea9",name:"nidoqueen",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",hp:"90",attack:"92",defense:"87",speed:"76",height:"13",weight:"600",createdByUser:false,types:["poison","ground"]},
            {id:"c24e2df1-30dd-4f81-89d9-8e3c74c5fa39",name:"nidorino",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",hp:"61",attack:"72",defense:"57",speed:"65",height:"9",weight:"195",createdByUser:false,types:["poison"]},
            {id:"0c4e2aec-0a19-4a92-b757-cf343b9ea053",name:"clefairy",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",hp:"70",attack:"45",defense:"48",speed:"35",height:"6",weight:"75",createdByUser:false,types:["fairy"]},
            {id:"11c53494-7825-4647-8ba9-3943de11fb7b",name:"clefable",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",hp:"95",attack:"70",defense:"73",speed:"60",height:"13",weight:"400",createdByUser:false,types:["fairy"]},
            {id:"df73ab15-fcc6-40fc-83fa-5fac18dec016",name:"vulpix",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",hp:"38",attack:"41",defense:"40",speed:"65",height:"6",weight:"99",createdByUser:false,types:["fire"]},
            {id:"73a169a8-e55e-4029-b4d1-2793c86ff7a8",name:"ninetales",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",hp:"73",attack:"76",defense:"75",speed:"100",height:"11",weight:"199",createdByUser:false,types:["fire"]},
            {id:"84a20f7b-e268-41e5-a387-671430fc94e8",name:"jigglypuff",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",hp:"115",attack:"45",defense:"20",speed:"20",height:"5",weight:"55",createdByUser:false,types:["normal","fairy"]},
            {id:"ef852baa-f8b4-429e-8f08-3a2823cc69cd",name:"wigglytuff",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",hp:"140",attack:"70",defense:"45",speed:"45",height:"10",weight:"120",createdByUser:false,types:["normal","fairy"]},
            {id:"d4bbfd73-36e8-4377-bbe4-0d815ea62565",name:"zubat",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/41.svg",hp:"40",attack:"45",defense:"35",speed:"55",height:"8",weight:"75",createdByUser:false,types:["flying","poison"]},
            {id:"5db20c8a-22e8-4ec7-8dbf-5ba244f107a1",name:"fearow",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",hp:"65",attack:"90",defense:"65",speed:"100",height:"12",weight:"380",createdByUser:false,types:["normal","flying"]},
            {id:"f20949df-31d4-4da2-8763-4cc8463dd619",name:"pikachu",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",hp:"35",attack:"55",defense:"40",speed:"90",height:"4",weight:"60",createdByUser:false,types:["electric"]},
            {id:"c4d1e8a3-1730-40cd-8a55-1e3bcd830aaa",name:"golbat",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/42.svg",hp:"75",attack:"80",defense:"70",speed:"90",height:"16",weight:"550",createdByUser:false,types:["flying","poison"]},
            {id:"2673c1ff-c013-4bed-94ce-4411d8a391f5",name:"gloom",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/44.svg",hp:"60",attack:"65",defense:"70",speed:"40",height:"8",weight:"86",createdByUser:false,types:["grass","poison"]},
            {id:"ece65569-d518-4f10-9e6d-6b4fde5fcc9a",name:"oddish",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/43.svg",hp:"45",attack:"50",defense:"55",speed:"30",height:"5",weight:"54",createdByUser:false,types:["poison","grass"]},
            {id:"90a26a38-b28d-42fa-b48c-2dac81f51397",name:"vileplume",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",hp:"75",attack:"80",defense:"85",speed:"50",height:"12",weight:"186",createdByUser:false,types:["poison","grass"]},
            {id:"3c49a309-70bc-48ea-953c-63ae9c278645",name:"paras",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/46.svg",hp:"35",attack:"70",defense:"55",speed:"25",height:"3",weight:"54",createdByUser:false,types:["bug","grass"]},
            {id:"8bca1447-32e3-4c36-9797-4ba96f910072",name:"parasect",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg",hp:"60",attack:"95",defense:"80",speed:"30",height:"10",weight:"295",createdByUser:false,types:["bug","grass"]},
            {id:"f7ebcb94-c3a1-4ccf-9df4-018b16bc0989",name:"nidoking",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",hp:"81",attack:"102",defense:"77",speed:"85",height:"14",weight:"620",createdByUser:false,types:["ground","poison"]},
            {id:"2d054187-e57d-4671-8809-f9198bc56221",name:"ekans",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg",hp:"35",attack:"60",defense:"44",speed:"55",height:"20",weight:"69",createdByUser:false,types:["poison"]},
            {id:"6897e49b-43fa-4fea-aae2-6c0c4a467a79",name:"nidoran-m",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg",hp:"46",attack:"57",defense:"40",speed:"50",height:"5",weight:"90",createdByUser:false,types:["poison"]},
            {id:"b097c24e-442b-4ae9-a2d4-0b0e266b6876",name:"venonat",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/48.svg",hp:"60",attack:"55",defense:"50",speed:"45",height:"10",weight:"300",createdByUser:false,types:["bug","poison"]},
            {id:"f3065e6a-20c6-432e-a44f-83155ca50f8c",name:"venomoth",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",hp:"70",attack:"65",defense:"60",speed:"90",height:"15",weight:"125",createdByUser:false,types:["bug","poison"]},
            {id:"905e86ef-0e39-4ca9-8934-be1cdd8eac6a",name:"dugtrio",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg",hp:"35",attack:"100",defense:"50",speed:"120",height:"7",weight:"333",createdByUser:false,types:["ground"]},
            {id:"6bc21158-c163-4f2e-bfbe-c582eb251630",name:"meowth",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg",hp:"40",attack:"45",defense:"35",speed:"90",height:"4",weight:"42",createdByUser:false,types:["normal"]},
            {id:"501f30bf-db9e-4c97-b805-a61f1db81547",name:"persian",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/53.svg",hp:"65",attack:"70",defense:"60",speed:"115",height:"10",weight:"320",createdByUser:false,types:["normal"]},
            {id:"24286c4e-d87e-4e3f-b926-d5466d456102",name:"psyduck",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg",hp:"50",attack:"52",defense:"48",speed:"55",height:"8",weight:"196",createdByUser:false,types:["water"]},
            {id:"f45e9bc4-8b90-45c3-9426-6d37ddc9095f",name:"golduck",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/55.svg",hp:"80",attack:"82",defense:"78",speed:"85",height:"17",weight:"766",createdByUser:false,types:["water"]},
            {id:"a2f13171-489e-4904-b9d8-bd0ad6834869",name:"growlithe",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/58.svg",hp:"55",attack:"70",defense:"45",speed:"60",height:"7",weight:"190",createdByUser:false,types:["fire"]},
            {id:"9ce61854-b15d-452a-bc22-f5daf05739b2",name:"poliwag",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/60.svg",hp:"40",attack:"50",defense:"40",speed:"90",height:"6",weight:"124",createdByUser:false,types:["water"]},
            {id:"c204557b-df0c-46f8-bc75-b13bb3325f27",name:"poliwhirl",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/61.svg",hp:"65",attack:"65",defense:"65",speed:"90",height:"10",weight:"200",createdByUser:false,types:["water"]},
            {id:"a6e8e4fc-4a73-45e6-91fe-7d888fc89e29",name:"poliwrath",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/62.svg",hp:"90",attack:"95",defense:"95",speed:"70",height:"13",weight:"540",createdByUser:false,types:["fighting","water"]},
            {id:"5ca6e877-6672-4025-b44e-aac47af69d40",name:"abra",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/63.svg",hp:"25",attack:"20",defense:"15",speed:"90",height:"9",weight:"195",createdByUser:false,types:["psychic"]},
            {id:"7447a09b-207d-419f-88ca-54fdfa1116c0",name:"kadabra",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg",hp:"40",attack:"35",defense:"30",speed:"105",height:"13",weight:"565",createdByUser:false,types:["psychic"]},
            {id:"67b676b6-a34d-4b03-b007-bd429137ba3f",name:"alakazam",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/65.svg",hp:"55",attack:"50",defense:"45",speed:"120",height:"15",weight:"480",createdByUser:false,types:["psychic"]},
            {id:"01b06d11-1613-4cd3-967a-032d6a82565e",name:"diglett",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/50.svg",hp:"10",attack:"55",defense:"25",speed:"95",height:"2",weight:"8",createdByUser:false,types:["ground"]},
            {id:"2f9e875b-621f-4636-81ea-9bc968b1cc23",name:"mankey",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/56.svg",hp:"40",attack:"80",defense:"35",speed:"70",height:"5",weight:"280",createdByUser:false,types:["fighting"]},
            {id:"7eba1037-abde-4211-8b70-403eb5019b4b",name:"primeape",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg",hp:"65",attack:"105",defense:"60",speed:"95",height:"10",weight:"320",createdByUser:false,types:["fighting"]},
            {id:"6b100cc8-a1a3-48f8-9387-5610c6d439e3",name:"arcanine",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",hp:"90",attack:"110",defense:"80",speed:"95",height:"19",weight:"1550",createdByUser:false,types:["fire"]},
            {id:"5681c58d-5728-4afb-9697-4ad84f8eac07",name:"machop",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/66.svg",hp:"70",attack:"80",defense:"50",speed:"35",height:"8",weight:"195",createdByUser:false,types:["fighting"]},
            {id:"461ac1b9-d278-413f-a52e-e487922694fd",name:"bellsprout",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/69.svg",hp:"50",attack:"75",defense:"35",speed:"40",height:"7",weight:"40",createdByUser:false,types:["poison","grass"]},
            {id:"14eb540e-02a1-4c4c-989a-645a01e3a66c",name:"weepinbell",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/70.svg",hp:"65",attack:"90",defense:"50",speed:"55",height:"10",weight:"64",createdByUser:false,types:["poison","grass"]},
            {id:"e7041ceb-30d8-4bed-8a0d-6a15d74c4bc0",name:"victreebel",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg",hp:"80",attack:"105",defense:"65",speed:"70",height:"17",weight:"155",createdByUser:false,types:["poison","grass"]},
            {id:"5b067c46-fea8-4088-9635-261b12ec14a1",name:"tentacool",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/72.svg",hp:"40",attack:"40",defense:"35",speed:"70",height:"9",weight:"455",createdByUser:false,types:["poison","water"]},
            {id:"ab2d7c42-4c08-4abb-a71b-a9e46cd99473",name:"tentacruel",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/73.svg",hp:"80",attack:"70",defense:"65",speed:"100",height:"16",weight:"550",createdByUser:false,types:["poison","water"]},
            {id:"f1006868-0e8a-4d07-a26d-bcb71440e534",name:"graveler",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/75.svg",hp:"55",attack:"95",defense:"115",speed:"35",height:"10",weight:"1050",createdByUser:false,types:["ground","rock"]},
            {id:"da855866-d853-4f91-a20d-8ac16e6830b9",name:"geodude",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/74.svg",hp:"40",attack:"80",defense:"100",speed:"20",height:"4",weight:"200",createdByUser:false,types:["ground","rock"]},
            {id:"68fe4741-bd73-42c2-a43b-20939ce89732",name:"golem",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/76.svg",hp:"80",attack:"120",defense:"130",speed:"45",height:"14",weight:"3000",createdByUser:false,types:["ground","rock"]},
            {id:"6e353d0b-1a8f-4c04-b6f9-d821e888cef5",name:"rapidash",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/78.svg",hp:"65",attack:"100",defense:"70",speed:"105",height:"17",weight:"950",createdByUser:false,types:["fire"]},
            {id:"3155d295-3655-4c0d-b900-0cddb6373431",name:"slowpoke",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/79.svg",hp:"90",attack:"65",defense:"65",speed:"15",height:"12",weight:"360",createdByUser:false,types:["psychic","water"]},
            {id:"99169f70-1224-47bc-9e3b-13c031fce80f",name:"slowbro",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg",hp:"95",attack:"75",defense:"110",speed:"30",height:"16",weight:"785",createdByUser:false,types:["psychic","water"]},
            {id:"900c7a69-693e-40ab-bc42-71a922aec44a",name:"magneton",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/82.svg",hp:"50",attack:"60",defense:"95",speed:"70",height:"10",weight:"600",createdByUser:false,types:["steel","electric"]},
            {id:"0c138a05-5f2c-4d8b-b209-0e1377121e65",name:"farfetchd",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/83.svg",hp:"52",attack:"90",defense:"55",speed:"60",height:"8",weight:"150",createdByUser:false,types:["normal","flying"]},
            {id:"5db67aec-1b2f-4b53-a782-80a2fe72b4fc",name:"doduo",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/84.svg",hp:"35",attack:"85",defense:"45",speed:"75",height:"14",weight:"392",createdByUser:false,types:["normal","flying"]},
            {id:"f8b1dfee-70b4-4491-a8ac-5d1ea575bce1",name:"dodrio",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/85.svg",hp:"60",attack:"110",defense:"70",speed:"110",height:"18",weight:"852",createdByUser:false,types:["normal","flying"]},
            {id:"73d419ab-1e79-424a-b3e0-0335acbba627",name:"seel",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/86.svg",hp:"65",attack:"45",defense:"55",speed:"45",height:"11",weight:"900",createdByUser:false,types:["water"]},
            {id:"d1ce55cb-f882-4e8c-beb8-603f243f46de",name:"dewgong",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/87.svg",hp:"90",attack:"70",defense:"80",speed:"70",height:"17",weight:"1200",createdByUser:false,types:["water","ice"]},
            {id:"8c200097-07da-4fc9-9bb3-32dd6bf7ee52",name:"muk",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/89.svg",hp:"105",attack:"105",defense:"75",speed:"50",height:"12",weight:"300",createdByUser:false,types:["poison"]},
            {id:"22b4eeee-5ca0-4ee0-9187-6229088df602",name:"machoke",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/67.svg",hp:"80",attack:"100",defense:"70",speed:"45",height:"15",weight:"705",createdByUser:false,types:["fighting"]},
            {id:"e2a0bdc1-190c-448d-85e9-63cef95366ed",name:"machamp",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/68.svg",hp:"90",attack:"130",defense:"80",speed:"55",height:"16",weight:"1300",createdByUser:false,types:["fighting"]},
            {id:"f5ce6318-4cc5-4c5c-a751-8117f68b09a1",name:"magnemite",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/81.svg",hp:"25",attack:"35",defense:"70",speed:"45",height:"3",weight:"60",createdByUser:false,types:["steel","electric"]},
            {id:"b2c10375-73c9-4d25-8379-368fb8a6d642",name:"ponyta",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/77.svg",hp:"50",attack:"85",defense:"55",speed:"90",height:"10",weight:"300",createdByUser:false,types:["fire"]},
            {id:"091aa434-3a60-4317-acee-98904c22e975",name:"grimer",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/88.svg",hp:"80",attack:"80",defense:"50",speed:"25",height:"9",weight:"300",createdByUser:false,types:["poison"]},
            {id:"2b9aa154-e71d-4e28-be72-71d1c0950afc",name:"shellder",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/90.svg",hp:"30",attack:"65",defense:"100",speed:"40",height:"3",weight:"40",createdByUser:false,types:["water"]},
            {id:"fafff27b-d47f-4e14-84cd-8757274fffe5",name:"gastly",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg",hp:"30",attack:"35",defense:"30",speed:"80",height:"13",weight:"1",createdByUser:false,types:["poison","ghost"]},
            {id:"e78a28bb-6cd4-48b6-b4cd-67ce6da041bd",name:"haunter",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg",hp:"45",attack:"50",defense:"45",speed:"95",height:"16",weight:"1",createdByUser:false,types:["poison","ghost"]},
            {id:"75de8417-12e0-40a6-9f70-8a7915a41351",name:"drowzee",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/96.svg",hp:"60",attack:"48",defense:"45",speed:"42",height:"10",weight:"324",createdByUser:false,types:["psychic"]},
            {id:"9981391c-86c7-4a13-8f11-3faae6aae5c3",name:"voltorb",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg",hp:"40",attack:"30",defense:"50",speed:"100",height:"5",weight:"104",createdByUser:false,types:["electric"]},
            {id:"8948ea92-5bc7-421b-817c-d5687f04559e",name:"onix",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/95.svg",hp:"35",attack:"45",defense:"160",speed:"70",height:"88",weight:"2100",createdByUser:false,types:["ground","rock"]},
            {id:"2e1b6884-dfe5-4fa5-a28a-44cf0a8ec684",name:"cloyster",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/91.svg",hp:"50",attack:"95",defense:"180",speed:"70",height:"15",weight:"1325",createdByUser:false,types:["ice","water"]},
            {id:"5761977d-8112-4b90-9fc6-2038c64633c0",name:"hypno",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/97.svg",hp:"85",attack:"73",defense:"70",speed:"67",height:"16",weight:"756",createdByUser:false,types:["psychic"]},
            {id:"3b66c1b0-31ce-4620-bfe3-0e515499b46d",name:"gengar",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",hp:"60",attack:"65",defense:"60",speed:"110",height:"15",weight:"405",createdByUser:false,types:["ghost","poison"]},
            {id:"97f1663b-15de-4f7e-8389-1003fc33412b",name:"Pokemon",image:"https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png",hp:"50",attack:"50",defense:"50",speed:"50",height:"50",weight:"50",createdByUser:true,types:["bug"]},
            {id:"0a6fcc16-4497-4323-81fe-c8b61a788654",name:"krabby",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/98.svg",hp:"30",attack:"105",defense:"90",speed:"50",height:"4",weight:"65",createdByUser:false,types:["water"]},
            {id:"a8fd9b0d-bc0c-4042-b6b2-5495cbf5e50d",name:"kingler",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/99.svg",hp:"55",attack:"130",defense:"115",speed:"75",height:"13",weight:"600",createdByUser:false,types:["water"]},
            {id:"43a156d2-bc05-4558-8ff7-f66c23ca92e6",name:"Pokemon dos",image:"https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png",hp:"50",attack:"50",defense:"50",speed:"50",height:"50",weight:"50",createdByUser:true,types:["ground"]}
        ]
    }

    create(pokemon) {
        const newPokemon = {
            id: `${pokemon.name.replaceAll(' ', '')}${pokemon.hp}${pokemon.attack}`,
            createdByUser: true,
            ...pokemon
        }

        this.pokemons.push(newPokemon)

        return {
            data: 'Pokemon created succesfully!'
        }
    }

    update(id, data) {
        this.pokemons.forEach((pokemon, index) => {
            if(pokemon.id === id) {
                this.pokemons[index] = {...data, id: id}
            }
        })

        return {
            data: 'Pokemon updated succesfully!'
        }
    }

    delete(id) {
        this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id)

        return {
            data: 'Pokemon deleted successfully!'
        }
    }

    getAll() {
        return {
            data: this.pokemons
        }
    }

    getByName(name) {
        return {
            data: this.pokemons.filter(pokemon => pokemon.name.includes(name))
        }
    }
}

export function mockupsTypes() {
    return [
        {
            id: "8c6aa4f9-b7e5-4f9c-9d49-6a361eee8a85",
            name: "normal"
        },
        {
            id: "aeb789aa-5d83-4e63-895b-971bf857af52",
            name: "fighting"
        },
        {
            id: "5f164211-9bf6-4155-942d-a4e0b0455278",
            name: "flying"
        },
        {
            id: "38301717-0163-432f-978f-8ff6da208e0b",
            name: "poison"
        },
        {
            id: "aaa24961-c650-4aef-abd1-b56c0e1b801d",
            name: "ground"
        },
        {
            id: "418cb958-78b8-4e39-a2aa-7d4019d9186e",
            name: "rock"
        },
        {
            id: "42f7abe7-4002-481d-93ad-bc8db6817009",
            name: "bug"
        },
        {
            id: "0387f3b5-7d0e-469a-b971-f0513269b57a",
            name: "ghost"
        },
        {
            id: "e5abf902-2a63-49b0-a59a-c584318c0728",
            name: "steel"
        },
        {
            id: "8ebeb4c0-da27-47e7-8a7e-aacd680a13e7",
            name: "fire"
        },
        {
            id: "b19fab4b-daa3-41f0-ad5d-b11bb52b506a",
            name: "water"
        },
        {
            id: "9bdd4385-4600-4354-b576-33a16b793284",
            name: "grass"
        },
        {
            id: "2c9165c3-3927-4e03-8fb8-130a16cbc41e",
            name: "electric"
        },
        {
            id: "27f334ee-2824-4a85-a73b-a0726d98d006",
            name: "psychic"
        },
        {
            id: "c019c032-0245-4cf1-bb87-8602fe7305a4",
            name: "ice"
        },
        {
            id: "26db10d8-f3ce-4260-9a68-ad61df1e377a",
            name: "dragon"
        },
        {
            id: "ac78e3c5-6afd-4e52-9fe9-0d322131c6c4",
            name: "dark"
        },
        {
            id: "84668842-0e16-4d7d-8afe-ef6a8cf28421",
            name: "fairy"
        },
        {
            id: "f19bc432-df3d-42d5-81c4-b4736eca9a83",
            name: "stellar"
        },
        {
            id: "538d445b-4e99-439c-9a26-540c688cea04",
            name: "unknown"
        }
    ]
}

