function tripleThreatDetector(inputs){
  var regimenList = inputs.rxcuis.split(",");
  var output = []
  var jsonoutput ={"condition_satisfied":false,"summary":"","detail":""}
  //JAVASCRIPT ARRAYS WITH RXNORM CODES - JUNE 10, 2018 - ALLEN FLYNN

  //OPIOID CODES

  var opioidArray = [1723206,1723208,1723209,1723210,106500,1864412,238129,1655032,246474,250426,1010600,1010604,351264,351265,351266,351267,388506,388507,388508,904870,904876,904880,1431076,1431102,1432969,1488634,1542390,1542997,1544851,1544854,1594650,1597568,1597573,1666338,1716057,1716065,1716069,1716073,1716077,1716081,1716086,1797650,1307056,1307061,1996184,1996192,886622,886627,886634,1728351,1728355,1302739,1596108,1812164,1234871,1234872,1234941,1234978,1234999,1235009,1235011,1236179,1236181,1236182,1236184,1236186,1236188,1236190,1236239,1653786,1719764,1666831,1115573,1115577,1237050,1237060,1053652,1053655,1053658,197696,198402,198403,245134,245135,245136,310295,310296,310297,668364,668365,706898,727759,858092,858095,1735003,1735006,1735007,1735008,1735013,1053647,668363,310292,1053664,310293,310294,313993,668367,858087,858101,1053661,313992,668366,858098,1233686,1233687,577057,1233685,1487611,1603495,1603498,1603501,1729320,1237057,1237064,1237068,1087459,857512,833036,856992,857005,857083,857118,857134,858798,860599,899125,1044427,1098906,1112220,1114334,856903,856908,856915,856940,856944,856962,856980,856987,856999,857002,857076,857099,857107,857111,857121,857128,857131,857383,857391,857501,857556,857734,857839,857851,858770,858778,858876,858939,858953,858967,858991,859003,859027,859097,859137,859146,859156,859162,859220,859247,859315,859327,859366,859383,859939,860151,860426,860579,860593,992656,992668,1356835,1357940,1358753,1366873,1372265,1535979,1651558,1860491,1244754,1294382,1313294,859181,859209,860600,1012727,860549,860596,859225,857510,1595730,1595740,1595746,1860493,1860495,1860497,1860499,1860501,1595752,1595758,1595764,1595770,1872271,897653,897657,897677,897687,897696,897702,897710,897730,897737,897745,897749,897753,897756,897757,897758,897771,898139,898612,902729,902736,902741,1433251,1724276,1724338,1724340,1724341,1724383,1724644,1306898,898004,898138,898624,1233700,1724352,197873,311300,860792,861447,861455,861459,861463,861467,861473,861476,861479,861482,861493,861494,861578,1665685,1665690,1665697,1665699,1665701,1655058,1655060,864706,864714,864718,864751,864761,864769,864794,864828,864984,991147,864978,894942,894970,895248,863848,863850,863852,891885,891888,892342,892345,892596,892603,892669,892672,892678,894801,895201,895221,895227,1871441,1872234,863845,863854,863856,891874,891883,891890,891893,892349,892352,892554,894814,895022,895247,895874,1871444,2003714,891878,891881,892297,892355,892494,892516,892531,892579,892582,892589,892625,892643,892646,894780,894807,894911,894912,894914,894918,894933,895014,895016,895185,895199,895202,895206,895208,895213,895215,895217,895219,895233,895238,895240,895861,895867,895869,895871,998212,998213,1442790,1728783,1728789,1728791,1728800,1728805,1728999,1729197,1731517,1731520,1731522,1731530,1731537,1731545,1731993,1731995,1731998,1732003,1732006,1732011,1732014,1732136,1732138,1733080,1190785,1232113,1871434,1303729,1303736,1303740,904415,904440,1866543,1866551,247626,247627,248307,1944541,1014599,1014615,1014632,1037259,1049214,1049221,1049225,1049233,1049251,1049260,1049267,1049270,1049502,1049589,1049621,1049635,1049651,1049658,1049683,1049691,1049696,1049717,1049727,1113314,1491832,1545910,1806701,1860157,1944529,1944538,1049543,1049557,1049563,1049574,1049580,1049584,1049593,1049599,1049604,1049611,1049615,1049618,1049686,1049719,1049720,1049721,1545903,1545907,1806710,1806716,1806722,1806728,1806734,1860127,1860129,1860137,1860148,1860151,1860154,637540,724614,848768,1790527,1791558,1791567,1791574,1791580,977874,977894,977902,977909,977915,977923,977929,977935,977939,977942,977971,977974,199789,250486,250877,312289,250485,312288,238133,1811473,827748,827751,828576,828581,828585,828594,849279,849303,849304,849293,849295,849306,849455,1729578,1729584,1729710,1809097,1809102,1809104,1148800,1148803,1148807,1148797,1148809,825409,825411,825413,1356315,1148478,1148485,1148489,833709,833711,833713,1946525,1946527,1946529,835603,836395,836408,836466,836485,849329,849331,849563,849564,849903,999729,1248115,1113998,1114003,1114026,1114110,1114878,199400,1042693,1113417,991486,995483,995868,995983,996512,996580,996640,996757,997008,997398,1357402,1541630,1661319,1792707,1294356,1308438,996655,994402,995441,1088951,1088963,1088968,1088975,1089021,1089025,1089028,1089055,1089058,1089061,1089070,1099711,993755,993763,993770,993781,993890,993924,993943,994043,994046,994049,994226,994237,994289,995041,995062,995065,995068,995071,995075,995079,995082,995086,995093,995108,995116,995120,995123,995128,995211,995214,995447,995450,995453,995476,996706,996710,996714,996718,996722,996725,996728,996979,996983,996991,996994,996998,997019,997160,997169,997280,997285,997301,1356797,1356800,1356804,1356807,1431286,1440003,1536459,1235862,2001623,995226,995438,996734,996736,996976,996978,996981,996982,996988,997164,997165,997170,997284,997287,997289,997296,997303,1424295,1536457,1424297,1652087,1664543,1190580,1297649,250879,250880,240374,240375,240376,1190568,1190572,250473,102492,311297,106505,251210,312104,312107,830196,248477,106507,199584,199585,199965,1723218,1723220,1723221,1723222,404414,205533,1010603,1010606,1010608,1010609,1307058,1307063,904874,904878,904882,1432971,1542999,1864414,1431083,1431104,1597570,1597575,1666385,1488639,1542396,1544853,1544856,1594655,1716063,1716067,1716071,1716075,1716079,1716083,1716090,1797655,1996189,1996193,1302741,1489991,1809204,1310927,1947138,1234976,1190201,1234990,1234957,1995536,1653792,1719766,1053651,1053654,1053657,1053660,1053663,1053666,1115575,1115579,1729322,261184,261185,261186,262071,583490,261106,261107,261108,261109,261110,262219,1735057,1735060,1735062,1735065,668622,668624,668626,668628,668630,1487616,1666837,1237055,1237059,1237062,1237066,1237070,1112224,1114338,857105,857113,857120,992675,1442445,1495472,1495474,1495476,1310202,1310212,1310270,860446,857370,1248039,857001,857004,857007,858976,859164,1366875,859005,857136,858838,992733,859141,857845,858878,858945,859029,859150,860239,857575,860138,860159,891172,857830,858969,1492671,1492673,1492675,1087463,1147395,856942,856984,856991,856996,859019,858772,858784,859099,859331,1535981,859943,859143,859222,859329,859368,859941,859376,1087389,1087427,856946,860530,858780,859317,1372873,1860492,1860494,1860496,1860498,1860500,1860502,1542981,1542988,1595736,1595742,1595748,1595754,1595760,1595766,1595772,1598284,1650982,1651564,1872265,1872269,1872272,1872752,897658,897698,897704,897712,897747,897755,1724354,1724356,1724358,1724359,902733,902738,902743,1306900,861517,861520,861522,861525,861529,861617,1665687,1665691,1665698,1665700,1665702,1242106,1242503,864737,864980,991149,864712,864708,864720,1990745,892473,892489,892496,892556,892560,892574,892598,892645,892648,892652,892658,892660,894803,894805,894813,894816,1731999,1303731,1303733,1303738,1303742,1086310,892299,892344,892351,892357,1190284,863847,863849,863851,863853,863855,863857,1728784,1728792,1728801,1728806,1745881,1745886,1745889,1745892,1871440,1871443,1871446,1944535,1944540,1944543,1113313,1113316,1049216,1049223,1049227,1487288,1049504,1049545,1049565,1049576,1049586,1049595,1049601,1050409,1049582,1049613,1049620,1049623,1050490,1049625,1049637,1049640,1049642,1049647,1049650,1049655,848772,848928,1491834,1537116,1537120,1537122,1546089,1664448,1664634,1790533,1791560,1791569,1791576,1791582,1806707,2045500,977876,977896,977904,977911,977917,977925,977931,977937,977940,977943,857237,1811475,211354,827750,1729581,1729586,1729712,1149367,1149370,1149373,1149376,1149378,854140,854142,854144,1356319,1148482,1148487,1148491,835605,845314,845315,845316,836397,833710,833712,833714,1086926,1114002,1114030,1145972,1547607,995936,995940,993926,995956,995993,994277,1433802,996481,996730,1113437,996484,994228,993837,993892,996650,1368072,994045,994048,994051,995440,996738,1089057,1089060,1089063,1089072,995213,995216,995455,995478,996708,996712,996716,996720,996724,996727,1356799,1356802,1356806,1356809,1308440,995443,996648,1244921,994404,996253,993767,995132,995872,995985,996584,1088953,1088965,1088970,1088977,1089023,1089027,1089030,994239,995043,995067,995077,995081,995088,995110,995122,995064,995070,995073,995084,995095,995118,995125,1595214,1652093,1661325,1190587,1242558,996462,1190646,1190641];

  //BENZODIAZEPINE CODES

  var benzodiazepineArray = [197321,197322,308047,308049,308050,433799,433800,485413,485414,485416,308048,433798,485415,433801,856769,856792,856863,889614,905516,905521,905369,905495,905505,905525,905532,199450,246172,1366192,197527,197528,349196,349198,197529,349197,204892,349195,246306,249943,349194,387007,387008,104706,105032,197589,197590,309844,309845,801957,801961,801966,1807452,1807459,197591,309843,141926,422657,108380,422658,108379,197653,197654,1298088,1298091,197901,197902,238100,311376,763028,1665188,197900,238101,763029,1665326,199275,311700,998211,1666777,1666798,1666800,106517,422410,311702,1551393,1551395,1666814,1666821,1666823,199775,198057,198058,312133,312134,198059,312135,198183,198184,198241,198242,198243,199273,199975,104693,151283,199278,485489,198317,198318,1251277,197464,197465,197466,576647,618739,618751,618737,141927,141928,214003,214004,687022,687023,687024,687025,577634,577643,577648,856781,856796,889616,1366196,1191056,1191058,206157,206159,206160,104699,104700,104701,801958,801962,801965,104719,206819,206820,206821,206828,1665190,1665327,207889,208463,208464,208465,539384,208681,1149627,542857,542967];

  //MUSCLE RELAXANT CODES

  var muscleRelaxantArray =
  [197446,197447,994226,105974,730794,1088934,1088936,197501,197502,828299,828320,828348,828353,828358,999731,197943,197945,238175,197944,994521,994528,994535,994541,994810,994811,994824,994837,994841,994847,1047437,197392,308516,308517,617298,1369783,1369791,1666613,1666622,197391,617299,199280,250976,1369787,1300890,430902,1494656,197935,351254,213695,730918,994228,214097,1189098,1189100,828322,828350,828301,828355,828359,1010654,207014,207016,1047440,1047444,1369784,1369788,1369792,1666615,1301627,202109,213725,805678,805679,1666620,1666623,664144,666857,209153,352277,1720612];
  var summaryentry = {"opioid":false,"bzd":false,"mr":false}
  var detail ={}
  regimenList.forEach(function(e){
    var detailentry = {"opioid":false,"bzd":false,"mr":false}
    var cui = parseInt(e,10)
    detailentry.opioid = opioidArray.indexOf(cui)!=-1
    detailentry.bzd = benzodiazepineArray.indexOf(cui)!=-1
    detailentry.mr = muscleRelaxantArray.indexOf(cui)!=-1
    detail[e]=detailentry
    summaryentry.opioid= ( summaryentry.opioid || detailentry.opioid )
    summaryentry.bzd= summaryentry.bzd || detailentry.bzd
    summaryentry.mr= summaryentry.mr || detailentry.mr
  })
  jsonoutput.detail=detail
  jsonoutput.summary=summaryentry
  jsonoutput.condition_satisfied = summaryentry.opioid || summaryentry.bzd || summaryentry.mr
  return jsonoutput
 }
