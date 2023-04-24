// Api where I extract the data
const urlApi = "https://simplemaps.com/data/es-cities";

const string = `city	lat	Ing	country	iso2	admin_name	capital	population	population_proper
Madrid	40.4167	-3.7167	Spain	ES	Madrid	primary	6026000	3266126
Barcelona	41.3825	2.1769	Spain	ES	Catalonia	admin	4588000	1620343
Sevilla	37.3900	-5.9900	Spain	ES	Andalusia	admin	1107000	1107000
Málaga	36.7194	-4.4200	Spain	ES	Andalusia	minor	967250	578460
Valencia	39.4700	-0.3764	Spain	ES	Valencia	admin	800215	800215
Zaragoza	41.6483	-0.8830	Spain	ES	Aragon	admin	649404	448507
Palma	39.5667	2.6500	Spain	ES	Balearic Islands	admin	550000	422587
Murcia	37.9861	-1.1303	Spain	ES	Murcia	admin	502000	459403
Las Palmas	28.1272	-15.4314	Spain	ES	Canary Islands	admin	381223	381223
A Coruña	43.3713	-8.4188	Spain	ES	Galicia	minor	370610	242619
Bilbao	43.2569	-2.9236	Spain	ES	Basque Country	minor	350184	350184
Alicante	38.3453	-0.4831	Spain	ES	Valencia	minor	337482	337482
Córdoba	37.8845	-4.7796	Spain	ES	Andalusia	minor	321376	279648
Valladolid	41.6528	-4.7236	Spain	ES	Castille-Leon	admin	299265	299265
Vigo	42.2314	-8.7124	Spain	ES	Galicia		296692	296692
Gijón	43.5333	-5.7000	Spain	ES	Asturias		271780	271717
Vitoria-Gasteiz	42.8500	-2.6833	Spain	ES	Basque Country	admin	253996	253996
Elche	38.2669	-0.6983	Spain	ES	Valencia		234765	234765
Granada	37.1781	-3.6008	Spain	ES	Andalusia	minor	233648	233648
Tarrasa	41.5611	2.0081	Spain	ES	Catalonia		223627	223627
Badalona	41.4333	2.2333	Spain	ES	Catalonia		223166	223166
Oviedo	43.3600	-5.8450	Spain	ES	Asturias	admin	219910	219910
Petrel	38.4789	-0.7967	Spain	ES	Valencia		218843	34241
Sabadell	41.5483	2.1075	Spain	ES	Catalonia		216520	216520
Cartagena	37.6000	-0.9819	Spain	ES	Murcia		216108	216108`;


// In an example to convert
const exampleResult = [
  {
    city: "Madrid",
    Ing: "40.4167",
    lat: "3.7167",
    country: "Spain",
    iso2: "ES",
    admin_name: "Madrid",
    capital: "primary",
    population: "6026000",
    population_proper: "3266126",
  },
  "...",
];

//Async function
const stringToJson = async (string) => {
  const cells = string.split("\n").map((item, index) => {
    return item.split("\t");
  });
  const headings = cells.shift();

  return cells.map((item, index) => {
    let result = {};
    item.map((item, index) => {
      result[headings[index]] = item;
    });
    return result;
  });
};

//How to call 
stringToJson(string)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
