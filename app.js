const levelCatalog = [
  { file: "dark-01", name: "Midnight Market", cats: [
    {x:.1192,y:.0969,hitX:.035,hitY:.039,clipX:.038,clipY:.043},{x:.8788,y:.2632,hitX:.070,hitY:.045,clipX:.072,clipY:.047},{x:.1603,y:.7915,hitX:.058,hitY:.064,clipX:.060,clipY:.067},{x:.8254,y:.8317,hitX:.067,hitY:.058,clipX:.069,clipY:.060}] },
  { file: "dark-02", name: "Future Station", cats: [
    {x:.6316,y:.0443,hitX:.057,hitY:.035,clipX:.058,clipY:.035},{x:.1284,y:.5255,hitX:.032,hitY:.044,clipX:.034,clipY:.046},{x:.9362,y:.6049,hitX:.038,hitY:.070,clipX:.040,clipY:.073},{x:.1427,y:.8664,hitX:.061,hitY:.072,clipX:.063,clipY:.075}] },
  { file: "dark-03", name: "Shadow Greenhouse", cats: [
    {x:.8186,y:.1204,hitX:.098,hitY:.046,clipX:.102,clipY:.048},{x:.1096,y:.1435,hitX:.046,hitY:.048,clipX:.048,clipY:.050},{x:.9334,y:.5893,hitX:.047,hitY:.071,clipX:.049,clipY:.074},{x:.2069,y:.7576,hitX:.043,hitY:.060,clipX:.045,clipY:.063}] },
  { file: "dark-04", name: "Orbital Observatory", cats: [
    {x:.0502,y:.1324,hitX:.038,hitY:.060,clipX:.040,clipY:.063},{x:.9422,y:.2026,hitX:.055,hitY:.080,clipX:.058,clipY:.083},{x:.1770,y:.7436,hitX:.082,hitY:.057,clipX:.085,clipY:.060},{x:.7959,y:.7978,hitX:.078,hitY:.060,clipX:.081,clipY:.063}] },
  { file: "dark-05", name: "After-hours Library", cats: [
    {x:.1077,y:.0566,hitX:.033,hitY:.037,clipX:.035,clipY:.039},{x:.8517,y:.2536,hitX:.059,hitY:.042,clipX:.062,clipY:.044},{x:.1439,y:.7516,hitX:.043,hitY:.050,clipX:.045,clipY:.053},{x:.6643,y:.8983,hitX:.055,hitY:.058,clipX:.058,clipY:.061}] },
  { file: "dark-06", name: "Airport Concourse", cats: [
    {x:.6019,y:.1162,hitX:.0573,hitY:.0271,clipX:.064,clipY:.035},{x:.2166,y:.3726,hitX:.0446,hitY:.0605,clipX:.052,clipY:.068},{x:.8838,y:.5048,hitX:.0653,hitY:.0366,clipX:.073,clipY:.044},{x:.4984,y:.7691,hitX:.0239,hitY:.0271,clipX:.031,clipY:.035}] },
  { file: "dark-07", name: "Rooftop Greenhouses", cats: [
    {x:.7898,y:.2245,hitX:.0382,hitY:.0494,clipX:.046,clipY:.057},{x:.3646,y:.4315,hitX:.0207,hitY:.0589,clipX:.028,clipY:.067},{x:.1354,y:.6959,hitX:.0334,hitY:.0239,clipX:.041,clipY:.032},{x:.6879,y:.7659,hitX:.0510,hitY:.0334,clipX:.059,clipY:.041}] },
  { file: "dark-08", name: "Maker Workshop", cats: [
    {x:.3185,y:.1401,hitX:.0350,hitY:.0446,clipX:.043,clipY:.052},{x:.8089,y:.4236,hitX:.0637,hitY:.0382,clipX:.072,clipY:.046},{x:.4395,y:.4570,hitX:.0701,hitY:.0621,clipX:.079,clipY:.071},{x:.2994,y:.8615,hitX:.0510,hitY:.0525,clipX:.059,clipY:.061}] },
  { file: "dark-09", name: "Metro Control Room", cats: [
    {x:.3742,y:.2182,hitX:.0462,hitY:.0557,clipX:.054,clipY:.064},{x:.2389,y:.4236,hitX:.0637,hitY:.0446,clipX:.072,clipY:.053},{x:.7261,y:.4634,hitX:.0669,hitY:.0430,clipX:.075,clipY:.051},{x:.4061,y:.8201,hitX:.0717,hitY:.0430,clipX:.080,clipY:.051}] },
  { file: "dark-10", name: "Museum Archive", cats: [
    {x:.7500,y:.2102,hitX:.0748,hitY:.0446,clipX:.083,clipY:.053},{x:.6322,y:.3901,hitX:.0462,hitY:.0717,clipX:.054,clipY:.080},{x:.2102,y:.5191,hitX:.0318,hitY:.0414,clipX:.040,clipY:.049},{x:.4666,y:.6783,hitX:.0780,hitY:.0414,clipX:.086,clipY:.049}] },
  { file: "dark-11", name: "Future Food Court", cats: [
    {x:.3694,y:.2022,hitX:.0287,hitY:.0430,clipX:.037,clipY:.051},{x:.2739,y:.4889,hitX:.0446,hitY:.0303,clipX:.053,clipY:.038},{x:.7755,y:.5701,hitX:.0525,hitY:.0318,clipX:.061,clipY:.040},{x:.4809,y:.7420,hitX:.0510,hitY:.0669,clipX:.059,clipY:.075}] },
  { file: "dark-12", name: "Aquarium Workshop", cats: [
    {x:.6417,y:.1688,hitX:.0462,hitY:.0350,clipX:.054,clipY:.043},{x:.7691,y:.4506,hitX:.0844,hitY:.0494,clipX:.093,clipY:.058},{x:.2643,y:.4666,hitX:.0382,hitY:.0621,clipX:.046,clipY:.071},{x:.4586,y:.7341,hitX:.0764,hitY:.0589,clipX:.085,clipY:.067}] },
  { file: "dark-13", name: "Music Warehouse", cats: [
    {x:.5717,y:.1513,hitX:.0525,hitY:.0239,clipX:.061,clipY:.032},{x:.3551,y:.3822,hitX:.0334,hitY:.0605,clipX:.041,clipY:.069},{x:.7070,y:.4156,hitX:.0605,hitY:.0398,clipX:.069,clipY:.048},{x:.1369,y:.6369,hitX:.0669,hitY:.0414,clipX:.075,clipY:.050}] },
  { file: "dark-14", name: "Laundry Laboratory", cats: [
    {x:.1592,y:.2850,hitX:.0637,hitY:.0398,clipX:.072,clipY:.048},{x:.8201,y:.3742,hitX:.0621,hitY:.0653,clipX:.071,clipY:.074},{x:.4427,y:.4506,hitX:.0541,hitY:.0780,clipX:.063,clipY:.087},{x:.4475,y:.8328,hitX:.0876,hitY:.0525,clipX:.096,clipY:.061}] },
  { file: "dark-15", name: "Arcade Repair Shop", cats: [
    {x:.6943,y:.2484,hitX:.0541,hitY:.0414,clipX:.063,clipY:.050},{x:.3439,y:.3392,hitX:.0478,hitY:.0621,clipX:.056,clipY:.071},{x:.7134,y:.6497,hitX:.0541,hitY:.0478,clipX:.063,clipY:.056},{x:.1576,y:.7006,hitX:.0589,hitY:.0796,clipX:.067,clipY:.088}] },
  { file: "dark-16", name: "Parcel Sorting Maze", cats: [
    {x:.5478,y:.1385,hitX:.021,hitY:.021,clipX:.024,clipY:.023},{x:.2325,y:.3742,hitX:.021,hitY:.021,clipX:.024,clipY:.023},{x:.7293,y:.4761,hitX:.021,hitY:.021,clipX:.024,clipY:.023},{x:.4076,y:.7739,hitX:.021,hitY:.025,clipX:.024,clipY:.028}] },
  { file: "dark-17", name: "Turbine Workshop", cats: [
    {x:.7277,y:.2182,hitX:.023,hitY:.026,clipX:.026,clipY:.029},{x:.5175,y:.3885,hitX:.023,hitY:.027,clipX:.026,clipY:.030},{x:.1067,y:.4204,hitX:.023,hitY:.025,clipX:.026,clipY:.028},{x:.6815,y:.7611,hitX:.028,hitY:.044,clipX:.031,clipY:.047}] },
  { file: "classic-01", name: "Birdhouse Village", isColor: true, cats: [
    {x:.665,y:.548,hitX:.024,hitY:.025,clipX:.032,clipY:.034}] },
  { file: "classic-02", name: "Sushi Parade", isColor: true, cats: [
    {x:.400,y:.600,hitX:.055,hitY:.027,clipX:.070,clipY:.038}] },
  { file: "classic-03", name: "Pixel Robot Factory", isColor: true, cats: [
    {x:.9079,y:.3820,hitX:.022,hitY:.032,clipX:.030,clipY:.041}] },
  { file: "classic-04", name: "Garden Greenhouse", isColor: true, cats: [
    {x:.6707,y:.4486,hitX:.026,hitY:.030,clipX:.034,clipY:.038}] },
  { file: "classic-05", name: "Toy Market", isColor: true, cats: [
    {x:.205,y:.160,hitX:.050,hitY:.060,clipX:.064,clipY:.075}] },
  { file: "classic-06", name: "Paper Harbor", isColor: true, cats: [
    {x:.806,y:.859,hitX:.040,hitY:.045,clipX:.052,clipY:.057}] },
  { file: "classic-07", name: "Secret Library", isColor: true, cats: [
    {x:.1487,y:.5339,hitX:.020,hitY:.050,clipX:.028,clipY:.061}] },
  { file: "classic-08", name: "Owl Crowd", isColor: true, cats: [
    {x:.890,y:.180,hitX:.040,hitY:.055,clipX:.052,clipY:.070}] },
  { file: "classic-09", name: "Blue Owl Crowd", isColor: true, cats: [
    {x:.1746,y:.8305,hitX:.045,hitY:.065,clipX:.058,clipY:.078}] },
  { file: "classic-10", name: "Festival Owl Crowd", isColor: true, cats: [
    {x:.925,y:.530,hitX:.040,hitY:.080,clipX:.052,clipY:.100}] },
  { file: "classic-11", name: "Antique Map Room", isColor: true, cats: [
    {x:.2927,y:.1407,hitX:.025,hitY:.060,clipX:.034,clipY:.076}] },
  { file: "classic-12", name: "Midnight Observatory", isColor: true, cats: [
    {x:.820,y:.830,hitX:.035,hitY:.045,clipX:.046,clipY:.058}] },
  { file: "classic-13", name: "Botanical Curiosity Room", isColor: true, cats: [
    {x:.8907,y:.3620,hitX:.025,hitY:.055,clipX:.034,clipY:.068}] },
  { file: "classic-14", name: "Modern Art Studio", isColor: true, cats: [
    {x:.145,y:.170,hitX:.035,hitY:.025,clipX:.046,clipY:.034}] },
  { file: "classic-15", name: "Robotics Workshop", isColor: true, cats: [
    {x:.900,y:.770,hitX:.025,hitY:.045,clipX:.034,clipY:.058}] },
  { file: "hard-01", name: "Midnight Rail Signals", cats: [
    {x:.9733,y:.4833,hitX:.011,hitY:.010,clipX:.013,clipY:.012},{x:.2823,y:.5554,hitX:.011,hitY:.010,clipX:.013,clipY:.012},{x:.1898,y:.3545,hitX:.010,hitY:.009,clipX:.012,clipY:.011},{x:.5092,y:.8700,hitX:.010,hitY:.009,clipX:.012,clipY:.011}] },
  { file: "hard-02", name: "Vertical Hydroponics", cats: [
    {x:.6595,y:.4378,hitX:.015,hitY:.015,clipX:.017,clipY:.017},{x:.0251,y:.6523,hitX:.012,hitY:.012,clipX:.014,clipY:.014},{x:.7364,y:.5004,hitX:.014,hitY:.014,clipX:.016,clipY:.016},{x:.4382,y:.1284,hitX:.013,hitY:.011,clipX:.015,clipY:.013}] },
  { file: "hard-03", name: "Deep Engine Room", cats: [
    {x:.2018,y:.2010,hitX:.013,hitY:.011,clipX:.015,clipY:.013},{x:.8329,y:.4709,hitX:.013,hitY:.011,clipX:.015,clipY:.013},{x:.5112,y:.4533,hitX:.012,hitY:.010,clipX:.014,clipY:.012},{x:.9669,y:.8541,hitX:.012,hitY:.011,clipX:.014,clipY:.013}] }
  ,{ file: "ten-01", name: "Clockmaker Maze", isColor: true, cats: [
    {x:.105,y:.120,hitX:.050,hitY:.055,clipX:.060,clipY:.065},{x:.250,y:.200,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.490,y:.100,hitX:.045,hitY:.050,clipX:.055,clipY:.060},{x:.760,y:.130,hitX:.050,hitY:.045,clipX:.060,clipY:.055},{x:.910,y:.230,hitX:.055,hitY:.055,clipX:.065,clipY:.065},{x:.073,y:.420,hitX:.040,hitY:.060,clipX:.050,clipY:.070},{x:.860,y:.420,hitX:.045,hitY:.060,clipX:.055,clipY:.070},{x:.100,y:.780,hitX:.050,hitY:.070,clipX:.060,clipY:.080},{x:.480,y:.910,hitX:.050,hitY:.055,clipX:.060,clipY:.065},{x:.800,y:.820,hitX:.055,hitY:.055,clipX:.065,clipY:.065}] }
  ,{ file: "ten-02", name: "Aquarium Laboratory", isColor: true, cats: [
    {x:.100,y:.100,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.340,y:.180,hitX:.050,hitY:.040,clipX:.060,clipY:.050},{x:.900,y:.100,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.110,y:.370,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.410,y:.480,hitX:.055,hitY:.060,clipX:.065,clipY:.070},{x:.880,y:.420,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.100,y:.750,hitX:.055,hitY:.060,clipX:.065,clipY:.070},{x:.920,y:.660,hitX:.045,hitY:.060,clipX:.055,clipY:.070},{x:.520,y:.890,hitX:.050,hitY:.040,clipX:.060,clipY:.050},{x:.740,y:.890,hitX:.050,hitY:.050,clipX:.060,clipY:.060}] }
  ,{ file: "ten-03", name: "Lantern Festival Alley", isColor: true, cats: [
    {x:.100,y:.160,hitX:.050,hitY:.050,clipX:.060,clipY:.060},{x:.820,y:.140,hitX:.045,hitY:.060,clipX:.055,clipY:.070},{x:.570,y:.260,hitX:.050,hitY:.055,clipX:.060,clipY:.065},{x:.150,y:.370,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.890,y:.380,hitX:.045,hitY:.060,clipX:.055,clipY:.070},{x:.940,y:.630,hitX:.045,hitY:.060,clipX:.055,clipY:.070},{x:.060,y:.740,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.390,y:.810,hitX:.055,hitY:.055,clipX:.065,clipY:.065},{x:.620,y:.810,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.930,y:.880,hitX:.045,hitY:.055,clipX:.055,clipY:.065}] }
  ,{ file: "ten-04", name: "Snowy Railway Depot", isColor: true, cats: [
    {x:.140,y:.140,hitX:.055,hitY:.045,clipX:.065,clipY:.055},{x:.450,y:.270,hitX:.050,hitY:.045,clipX:.060,clipY:.055},{x:.920,y:.230,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.080,y:.380,hitX:.045,hitY:.060,clipX:.055,clipY:.070},{x:.570,y:.430,hitX:.050,hitY:.050,clipX:.060,clipY:.060},{x:.850,y:.540,hitX:.050,hitY:.065,clipX:.060,clipY:.075},{x:.290,y:.690,hitX:.045,hitY:.050,clipX:.055,clipY:.060},{x:.090,y:.740,hitX:.045,hitY:.050,clipX:.055,clipY:.060},{x:.590,y:.860,hitX:.060,hitY:.060,clipX:.070,clipY:.070},{x:.840,y:.840,hitX:.050,hitY:.050,clipX:.060,clipY:.060}] }
  ,{ file: "ten-05", name: "Old Bakery Kitchen", isColor: true, cats: [
    {x:.180,y:.090,hitX:.045,hitY:.050,clipX:.055,clipY:.060},{x:.550,y:.070,hitX:.050,hitY:.045,clipX:.060,clipY:.055},{x:.680,y:.170,hitX:.040,hitY:.055,clipX:.050,clipY:.065},{x:.240,y:.440,hitX:.045,hitY:.045,clipX:.055,clipY:.055},{x:.840,y:.440,hitX:.040,hitY:.050,clipX:.050,clipY:.060},{x:.045,y:.590,hitX:.040,hitY:.050,clipX:.050,clipY:.060},{x:.960,y:.400,hitX:.040,hitY:.055,clipX:.050,clipY:.065},{x:.925,y:.750,hitX:.045,hitY:.045,clipX:.055,clipY:.055},{x:.590,y:.800,hitX:.050,hitY:.045,clipX:.060,clipY:.055},{x:.130,y:.940,hitX:.045,hitY:.040,clipX:.055,clipY:.050}] }
  ,{ file: "ten-06", name: "Orbital Greenhouse", isColor: true, cats: [
    {x:.120,y:.080,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.300,y:.220,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.520,y:.210,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.900,y:.210,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.080,y:.440,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.870,y:.460,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.110,y:.720,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.450,y:.670,hitX:.050,hitY:.055,clipX:.060,clipY:.065},{x:.780,y:.700,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.910,y:.940,hitX:.045,hitY:.050,clipX:.055,clipY:.060}] }
  ,{ file: "ten-07", name: "Antique Map Archive", isColor: true, cats: [
    {x:.170,y:.090,hitX:.045,hitY:.050,clipX:.055,clipY:.060},{x:.470,y:.120,hitX:.040,hitY:.050,clipX:.050,clipY:.060},{x:.870,y:.160,hitX:.050,hitY:.055,clipX:.060,clipY:.065},{x:.100,y:.420,hitX:.045,hitY:.060,clipX:.055,clipY:.070},{x:.750,y:.430,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.090,y:.620,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.240,y:.730,hitX:.040,hitY:.045,clipX:.050,clipY:.055},{x:.500,y:.790,hitX:.045,hitY:.050,clipX:.055,clipY:.060},{x:.890,y:.630,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.930,y:.860,hitX:.045,hitY:.050,clipX:.055,clipY:.060}] }
  ,{ file: "ten-08", name: "Candy Factory", isColor: true, cats: [
    {x:.100,y:.090,hitX:.045,hitY:.060,clipX:.055,clipY:.070},{x:.500,y:.070,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.840,y:.150,hitX:.050,hitY:.065,clipX:.060,clipY:.075},{x:.140,y:.420,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.820,y:.420,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.095,y:.650,hitX:.040,hitY:.050,clipX:.050,clipY:.060},{x:.910,y:.610,hitX:.040,hitY:.055,clipX:.050,clipY:.065},{x:.290,y:.840,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.520,y:.770,hitX:.050,hitY:.055,clipX:.060,clipY:.065},{x:.920,y:.790,hitX:.055,hitY:.075,clipX:.065,clipY:.085}] }
  ,{ file: "ten-09", name: "Instrument Repair Hall", isColor: true, cats: [
    {x:.140,y:.160,hitX:.040,hitY:.055,clipX:.050,clipY:.065},{x:.570,y:.220,hitX:.060,hitY:.050,clipX:.070,clipY:.060},{x:.850,y:.180,hitX:.040,hitY:.060,clipX:.050,clipY:.070},{x:.160,y:.380,hitX:.045,hitY:.055,clipX:.055,clipY:.065},{x:.730,y:.510,hitX:.045,hitY:.065,clipX:.055,clipY:.075},{x:.070,y:.610,hitX:.035,hitY:.050,clipX:.045,clipY:.060},{x:.920,y:.750,hitX:.035,hitY:.045,clipX:.045,clipY:.055},{x:.260,y:.840,hitX:.060,hitY:.060,clipX:.070,clipY:.070},{x:.550,y:.820,hitX:.060,hitY:.060,clipX:.070,clipY:.070},{x:.900,y:.940,hitX:.045,hitY:.055,clipX:.055,clipY:.065}] }
  ,{ file: "ten-10", name: "Jungle Observatory", isColor: true, cats: [
    {x:.130,y:.080,hitX:.045,hitY:.060,clipX:.055,clipY:.070},{x:.440,y:.230,hitX:.045,hitY:.050,clipX:.055,clipY:.060},{x:.920,y:.220,hitX:.055,hitY:.075,clipX:.065,clipY:.085},{x:.160,y:.390,hitX:.050,hitY:.065,clipX:.060,clipY:.075},{x:.720,y:.430,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.100,y:.570,hitX:.055,hitY:.050,clipX:.065,clipY:.060},{x:.880,y:.580,hitX:.050,hitY:.050,clipX:.060,clipY:.060},{x:.200,y:.760,hitX:.055,hitY:.075,clipX:.065,clipY:.085},{x:.460,y:.750,hitX:.050,hitY:.060,clipX:.060,clipY:.070},{x:.870,y:.820,hitX:.050,hitY:.055,clipX:.060,clipY:.065}] }
  ,{ file: "ink-01", name: "Railway Maintenance Depot", cats: [
    {x:.234,y:.157,hitX:.035,hitY:.040,clipX:.032,clipY:.045},{x:.223,y:.224,hitX:.035,hitY:.035,clipX:.030,clipY:.035},{x:.878,y:.143,hitX:.035,hitY:.040,clipX:.030,clipY:.045},{x:.823,y:.238,hitX:.035,hitY:.035,clipX:.030,clipY:.035},{x:.934,y:.428,hitX:.035,hitY:.040,clipX:.030,clipY:.040},{x:.170,y:.491,hitX:.035,hitY:.040,clipX:.030,clipY:.040},{x:.613,y:.498,hitX:.035,hitY:.035,clipX:.030,clipY:.035},{x:.500,y:.661,hitX:.035,hitY:.035,clipX:.032,clipY:.035},{x:.888,y:.729,hitX:.035,hitY:.045,clipX:.035,clipY:.050},{x:.247,y:.780,hitX:.040,hitY:.040,clipX:.040,clipY:.040}] }
  ,{ file: "ink-02", name: "Submarine Control Room", cats: [
    {x:.915,y:.103,hitX:.035,hitY:.035,clipX:.035,clipY:.030},{x:.113,y:.199,hitX:.030,hitY:.040,clipX:.025,clipY:.040},{x:.940,y:.238,hitX:.035,hitY:.030,clipX:.035,clipY:.025},{x:.702,y:.264,hitX:.030,hitY:.035,clipX:.028,clipY:.030},{x:.471,y:.265,hitX:.035,hitY:.055,clipX:.035,clipY:.055},{x:.933,y:.369,hitX:.035,hitY:.030,clipX:.035,clipY:.025},{x:.827,y:.637,hitX:.030,hitY:.045,clipX:.025,clipY:.045},{x:.511,y:.676,hitX:.035,hitY:.035,clipX:.035,clipY:.030},{x:.297,y:.823,hitX:.035,hitY:.035,clipX:.035,clipY:.035},{x:.814,y:.911,hitX:.035,hitY:.050,clipX:.035,clipY:.050}] }
  ,{ file: "ink-03", name: "Mechanical Rooftop Greenhouse", cats: [
    {x:.166,y:.129,hitX:.035,hitY:.030,clipX:.032,clipY:.025},{x:.928,y:.146,hitX:.035,hitY:.045,clipX:.035,clipY:.045},{x:.892,y:.285,hitX:.030,hitY:.040,clipX:.028,clipY:.040},{x:.365,y:.292,hitX:.030,hitY:.035,clipX:.028,clipY:.035},{x:.617,y:.431,hitX:.030,hitY:.060,clipX:.028,clipY:.060},{x:.153,y:.548,hitX:.045,hitY:.045,clipX:.042,clipY:.045},{x:.420,y:.711,hitX:.040,hitY:.045,clipX:.038,clipY:.045},{x:.847,y:.742,hitX:.035,hitY:.040,clipX:.035,clipY:.040},{x:.128,y:.882,hitX:.050,hitY:.045,clipX:.050,clipY:.045},{x:.807,y:.897,hitX:.040,hitY:.040,clipX:.040,clipY:.035}] }
  ,{ file: "ink-04", name: "Astronomical Observatory Workshop", cats: [
    {x:.082,y:.146,hitX:.030,hitY:.030,clipX:.028,clipY:.028},{x:.069,y:.327,hitX:.030,hitY:.030,clipX:.025,clipY:.028},{x:.908,y:.363,hitX:.030,hitY:.035,clipX:.030,clipY:.032},{x:.217,y:.460,hitX:.028,hitY:.035,clipX:.022,clipY:.032},{x:.814,y:.471,hitX:.030,hitY:.035,clipX:.028,clipY:.035},{x:.874,y:.523,hitX:.030,hitY:.035,clipX:.028,clipY:.032},{x:.632,y:.798,hitX:.035,hitY:.035,clipX:.035,clipY:.035},{x:.953,y:.815,hitX:.030,hitY:.030,clipX:.028,clipY:.028},{x:.065,y:.851,hitX:.028,hitY:.040,clipX:.025,clipY:.038},{x:.088,y:.918,hitX:.035,hitY:.030,clipX:.035,clipY:.028}] }
  ,{ file: "ink-05", name: "Clockmaker Workshop", cats: [
    {x:.110,y:.115,hitX:.025,hitY:.035,clipX:.018,clipY:.032},{x:.743,y:.193,hitX:.025,hitY:.028,clipX:.018,clipY:.025},{x:.419,y:.217,hitX:.025,hitY:.040,clipX:.020,clipY:.038},{x:.957,y:.327,hitX:.025,hitY:.025,clipX:.018,clipY:.020},{x:.192,y:.383,hitX:.025,hitY:.030,clipX:.016,clipY:.028},{x:.524,y:.433,hitX:.025,hitY:.030,clipX:.018,clipY:.028},{x:.763,y:.445,hitX:.025,hitY:.028,clipX:.018,clipY:.025},{x:.559,y:.776,hitX:.028,hitY:.030,clipX:.025,clipY:.028},{x:.886,y:.821,hitX:.025,hitY:.035,clipX:.018,clipY:.032},{x:.033,y:.834,hitX:.028,hitY:.035,clipX:.025,clipY:.035}] }
  ,{ file: "ink-06", name: "Classical Library Archive", cats: [
    {x:.085,y:.050,hitX:.028,hitY:.028,clipX:.025,clipY:.025},{x:.832,y:.151,hitX:.025,hitY:.025,clipX:.020,clipY:.018},{x:.290,y:.210,hitX:.025,hitY:.028,clipX:.022,clipY:.025},{x:.961,y:.345,hitX:.025,hitY:.025,clipX:.022,clipY:.020},{x:.599,y:.443,hitX:.024,hitY:.028,clipX:.015,clipY:.025},{x:.172,y:.447,hitX:.025,hitY:.025,clipX:.020,clipY:.018},{x:.835,y:.651,hitX:.025,hitY:.030,clipX:.018,clipY:.028},{x:.224,y:.758,hitX:.028,hitY:.025,clipX:.025,clipY:.022},{x:.687,y:.780,hitX:.028,hitY:.025,clipX:.025,clipY:.022},{x:.890,y:.909,hitX:.025,hitY:.030,clipX:.022,clipY:.030}] }
  ,{ file: "ink-07", name: "Harbor Crane Warehouse", cats: [
    {x:.750,y:.108,hitX:.025,hitY:.025,clipX:.020,clipY:.018},{x:.098,y:.139,hitX:.025,hitY:.025,clipX:.020,clipY:.020},{x:.435,y:.215,hitX:.025,hitY:.030,clipX:.022,clipY:.030},{x:.049,y:.420,hitX:.028,hitY:.028,clipX:.025,clipY:.025},{x:.838,y:.450,hitX:.025,hitY:.025,clipX:.018,clipY:.018},{x:.815,y:.565,hitX:.028,hitY:.025,clipX:.025,clipY:.020},{x:.222,y:.594,hitX:.025,hitY:.032,clipX:.020,clipY:.032},{x:.119,y:.678,hitX:.028,hitY:.030,clipX:.025,clipY:.028},{x:.457,y:.781,hitX:.028,hitY:.028,clipX:.025,clipY:.025},{x:.880,y:.882,hitX:.030,hitY:.030,clipX:.030,clipY:.028}] }
  ,{ file: "ink-08", name: "Orbital Cargo Bay", cats: [
    {x:.367,y:.107,hitX:.030,hitY:.028,clipX:.028,clipY:.025},{x:.705,y:.160,hitX:.035,hitY:.025,clipX:.032,clipY:.022},{x:.113,y:.170,hitX:.030,hitY:.030,clipX:.028,clipY:.028},{x:.935,y:.381,hitX:.030,hitY:.030,clipX:.028,clipY:.028},{x:.530,y:.506,hitX:.030,hitY:.025,clipX:.028,clipY:.022},{x:.840,y:.519,hitX:.030,hitY:.025,clipX:.028,clipY:.025},{x:.191,y:.548,hitX:.030,hitY:.030,clipX:.030,clipY:.028},{x:.210,y:.732,hitX:.030,hitY:.032,clipX:.028,clipY:.030},{x:.431,y:.805,hitX:.035,hitY:.030,clipX:.035,clipY:.028},{x:.903,y:.917,hitX:.035,hitY:.035,clipX:.032,clipY:.032}] }
  ,{ file: "ink-09", name: "Grand Theater Backstage", cats: [
    {x:.393,y:.055,hitX:.025,hitY:.028,clipX:.020,clipY:.025},{x:.117,y:.106,hitX:.025,hitY:.025,clipX:.022,clipY:.020},{x:.672,y:.142,hitX:.025,hitY:.025,clipX:.020,clipY:.018},{x:.915,y:.281,hitX:.025,hitY:.025,clipX:.022,clipY:.018},{x:.189,y:.348,hitX:.025,hitY:.028,clipX:.018,clipY:.025},{x:.500,y:.483,hitX:.025,hitY:.025,clipX:.020,clipY:.018},{x:.879,y:.540,hitX:.025,hitY:.025,clipX:.022,clipY:.018},{x:.132,y:.589,hitX:.025,hitY:.025,clipX:.022,clipY:.018},{x:.508,y:.723,hitX:.025,hitY:.025,clipX:.022,clipY:.020},{x:.895,y:.882,hitX:.028,hitY:.030,clipX:.025,clipY:.028}] }
  ,{ file: "ink-10", name: "Mountain Weather Station", cats: [
    {x:.313,y:.101,hitX:.030,hitY:.025,clipX:.028,clipY:.018},{x:.111,y:.114,hitX:.025,hitY:.025,clipX:.020,clipY:.022},{x:.597,y:.215,hitX:.025,hitY:.025,clipX:.018,clipY:.018},{x:.873,y:.276,hitX:.025,hitY:.025,clipX:.020,clipY:.018},{x:.133,y:.449,hitX:.028,hitY:.025,clipX:.025,clipY:.018},{x:.901,y:.488,hitX:.025,hitY:.025,clipX:.022,clipY:.018},{x:.435,y:.532,hitX:.025,hitY:.025,clipX:.018,clipY:.018},{x:.087,y:.728,hitX:.025,hitY:.028,clipX:.022,clipY:.025},{x:.496,y:.759,hitX:.025,hitY:.025,clipX:.020,clipY:.018},{x:.854,y:.903,hitX:.025,hitY:.028,clipX:.022,clipY:.025}] }
,{ file: "next-01", name: "Grand Railway Terminal", cats: [{"x":0.1898,"y":0.2376,"hitX":0.04,"hitY":0.04,"clipX":0.034,"clipY":0.031},{"x":0.3246,"y":0.5726,"hitX":0.04,"hitY":0.04,"clipX":0.031,"clipY":0.029},{"x":0.4211,"y":0.6236,"hitX":0.04,"hitY":0.04,"clipX":0.031,"clipY":0.029},{"x":0.5758,"y":0.685,"hitX":0.04,"hitY":0.04,"clipX":0.03,"clipY":0.028},{"x":0.1754,"y":0.7464,"hitX":0.04,"hitY":0.04,"clipX":0.03,"clipY":0.028},{"x":0.3828,"y":0.7608,"hitX":0.04,"hitY":0.04,"clipX":0.035,"clipY":0.031},{"x":0.9522,"y":0.433,"hitX":0.04,"hitY":0.04,"clipX":0.031,"clipY":0.028},{"x":0.9298,"y":0.7552,"hitX":0.04,"hitY":0.04,"clipX":0.034,"clipY":0.03},{"x":0.6164,"y":0.949,"hitX":0.045,"hitY":0.04,"clipX":0.043,"clipY":0.034},{"x":0.6045,"y":0.4856,"hitX":0.04,"hitY":0.04,"clipX":0.034,"clipY":0.031}] }
  ,{ file: "next-02", name: "Rooftop Market Maze", cats: [{"x":0.1802,"y":0.1053,"hitX":0.04,"hitY":0.04,"clipX":0.034,"clipY":0.03},{"x":0.7727,"y":0.1563,"hitX":0.04,"hitY":0.04,"clipX":0.031,"clipY":0.028},{"x":0.189,"y":0.3182,"hitX":0.04,"hitY":0.04,"clipX":0.031,"clipY":0.028},{"x":0.945,"y":0.3134,"hitX":0.04,"hitY":0.04,"clipX":0.032,"clipY":0.028},{"x":0.7488,"y":0.453,"hitX":0.04,"hitY":0.04,"clipX":0.031,"clipY":0.028},{"x":0.4976,"y":0.5191,"hitX":0.04,"hitY":0.04,"clipX":0.03,"clipY":0.028},{"x":0.5486,"y":0.5941,"hitX":0.04,"hitY":0.04,"clipX":0.029,"clipY":0.027},{"x":0.2911,"y":0.6443,"hitX":0.04,"hitY":0.04,"clipX":0.035,"clipY":0.031},{"x":0.1794,"y":0.8652,"hitX":0.04,"hitY":0.04,"clipX":0.034,"clipY":0.03},{"x":0.8923,"y":0.7568,"hitX":0.04,"hitY":0.04,"clipX":0.028,"clipY":0.027}] }
  ,{ file: "next-03", name: "Clockwork Foundry", cats: [{"x":0.1906,"y":0.1978,"hitX":0.04,"hitY":0.04,"clipX":0.035,"clipY":0.031},{"x":0.7329,"y":0.0431,"hitX":0.04,"hitY":0.04,"clipX":0.037,"clipY":0.032},{"x":0.8676,"y":0.2424,"hitX":0.04,"hitY":0.04,"clipX":0.031,"clipY":0.028},{"x":0.5463,"y":0.3349,"hitX":0.04,"hitY":0.04,"clipX":0.031,"clipY":0.028},{"x":0.2289,"y":0.6547,"hitX":0.04,"hitY":0.04,"clipX":0.037,"clipY":0.032},{"x":0.5167,"y":0.7009,"hitX":0.04,"hitY":0.04,"clipX":0.032,"clipY":0.029},{"x":0.8509,"y":0.6571,"hitX":0.04,"hitY":0.04,"clipX":0.038,"clipY":0.034},{"x":0.2329,"y":0.8732,"hitX":0.04,"hitY":0.04,"clipX":0.038,"clipY":0.034},{"x":0.8565,"y":0.8812,"hitX":0.04,"hitY":0.04,"clipX":0.031,"clipY":0.028},{"x":0.4912,"y":0.9203,"hitX":0.04,"hitY":0.04,"clipX":0.037,"clipY":0.032}] }
  ,{ file: "next-04", name: "Orbital Assembly Hangar", cats: [{"x":0.0873,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3094,"y":0.0957,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1128,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8692,"y":0.1328,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1176,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3585,"y":0.3226,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6515,"y":0.3509,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4426,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2436,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.7101,"y":0.7675,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-05", name: "Toy Conveyor Factory", cats: [{"x":0.0542,"y":0.0407,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.2831,"y":0.1794,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.3254,"y":0.3301,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.925,"y":0.323,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.0678,"y":0.8509,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.4625,"y":0.4226,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.6707,"y":0.4386,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.614,"y":0.5183,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.618,"y":0.9067,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.5024,"y":0.8772,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04}] }
  ,{ file: "next-06", name: "Grand Pumping Station", cats: [{"x":0.116,"y":0.1021,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3493,"y":0.1156,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6156,"y":0.1089,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8293,"y":0.1208,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1336,"y":0.3042,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3983,"y":0.3226,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6635,"y":0.3349,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.862,"y":0.4466,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2356,"y":0.6858,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6942,"y":0.7636,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-07", name: "Botanical Glasshouse", cats: [{"x":0.1001,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3333,"y":0.0837,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.0969,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1128,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1176,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3983,"y":0.3146,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6794,"y":0.3389,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8509,"y":0.4825,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2309,"y":0.6898,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6543,"y":0.7715,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-08", name: "Inventor Curiosity Room", cats: [{"x":0.1033,"y":0.0981,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3254,"y":0.1116,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1089,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8692,"y":0.1288,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1176,"y":0.3162,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3983,"y":0.3305,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6715,"y":0.3429,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4665,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2388,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.7022,"y":0.7755,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-09", name: "Lantern Pottery Lane", cats: [{"x":0.116,"y":0.126,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3413,"y":0.1156,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1368,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1288,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1216,"y":0.3242,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3744,"y":0.3385,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6635,"y":0.3549,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4825,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2468,"y":0.6978,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6974,"y":0.7875,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-10", name: "Treehouse Village", cats: [{"x":0.1192,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3413,"y":0.0957,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1089,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1248,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1256,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3904,"y":0.3226,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6635,"y":0.3429,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8509,"y":0.4825,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2388,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6782,"y":0.7755,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-11", name: "Old Bakery Kitchen", isColor: true, cats: [{"x":0.1192,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3413,"y":0.0997,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1168,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1208,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1176,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3824,"y":0.3266,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6595,"y":0.3429,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4745,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2468,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6942,"y":0.7795,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-12", name: "Canal Flower Market", isColor: true, cats: [{"x":0.2384,"y":0.051,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.6212,"y":0.1396,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.9266,"y":0.3301,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.3206,"y":0.453,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.6675,"y":0.6922,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.1411,"y":0.323,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.5813,"y":0.3509,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.7974,"y":0.437,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.5375,"y":0.2352,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04},{"x":0.4944,"y":0.5821,"hitX":0.045,"hitY":0.045,"clipX":0.04,"clipY":0.04}] }
  ,{ file: "next-13", name: "Seaside Amusement Pier", isColor: true, cats: [{"x":0.1192,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3413,"y":0.0957,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.5997,"y":0.1089,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1248,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1216,"y":0.3162,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3904,"y":0.3305,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6555,"y":0.3469,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4745,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2388,"y":0.6978,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6782,"y":0.7755,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-14", name: "Dragon Archive", isColor: true, cats: [{"x":0.1112,"y":0.1061,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3333,"y":0.0957,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1128,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8692,"y":0.1288,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1216,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3904,"y":0.3305,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6595,"y":0.3429,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8509,"y":0.4785,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2388,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6862,"y":0.7755,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-15", name: "Robot Transit Factory", isColor: true, cats: [{"x":0.116,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3413,"y":0.0957,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1128,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1248,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1176,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3872,"y":0.3305,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6595,"y":0.3469,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4745,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2388,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6862,"y":0.7755,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-16", name: "Gardener Tool Shed", isColor: true, cats: [{"x":0.116,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3413,"y":0.0957,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1128,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1248,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1176,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3904,"y":0.3305,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6595,"y":0.3469,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4745,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2388,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6862,"y":0.7755,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-17", name: "Sports Equipment Workshop", isColor: true, cats: [{"x":0.116,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3413,"y":0.0957,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1128,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1248,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1176,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3904,"y":0.3305,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6595,"y":0.3469,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4745,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2388,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6862,"y":0.7755,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-18", name: "Tropical Greenhouse", isColor: true, cats: [{"x":0.116,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3413,"y":0.0957,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1128,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1248,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1176,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3904,"y":0.3305,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6595,"y":0.3469,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4745,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2388,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6862,"y":0.7755,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-19", name: "Lunar Control Laboratory", isColor: true, cats: [{"x":0.116,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3413,"y":0.0957,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1128,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1248,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1176,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3904,"y":0.3305,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6595,"y":0.3469,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4745,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2388,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6862,"y":0.7755,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-20", name: "Lantern Bazaar", isColor: true, cats: [{"x":0.116,"y":0.11,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.3413,"y":0.0957,"hitX":0.0399,"hitY":0.0375,"clipX":0.0349,"clipY":0.0325},{"x":0.6077,"y":0.1128,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8612,"y":0.1248,"hitX":0.0447,"hitY":0.035,"clipX":0.0397,"clipY":0.03},{"x":0.1176,"y":0.3122,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3904,"y":0.3305,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6595,"y":0.3469,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.4745,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.2388,"y":0.6938,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.6862,"y":0.7755,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-21", name: "Lighthouse Keeper Workshop", isColor: true, cats: [{"x":0.0793,"y":0.0941,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.2588,"y":0.1798,"hitX":0.0427,"hitY":0.0459,"clipX":0.0377,"clipY":0.0409},{"x":0.5327,"y":0.1886,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.7855,"y":0.1419,"hitX":0.0447,"hitY":0.0391,"clipX":0.0397,"clipY":0.0341},{"x":0.1854,"y":0.368,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.4302,"y":0.4183,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6874,"y":0.4226,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8589,"y":0.5064,"hitX":0.0471,"hitY":0.0351,"clipX":0.0421,"clipY":0.0301},{"x":0.3664,"y":0.7177,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.7819,"y":0.7675,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-22", name: "Alpine Cable Station", isColor: true, cats: [{"x":0.1001,"y":0.138,"hitX":0.0387,"hitY":0.0383,"clipX":0.0337,"clipY":0.0333},{"x":0.2939,"y":0.2077,"hitX":0.0427,"hitY":0.0459,"clipX":0.0377,"clipY":0.0409},{"x":0.6077,"y":0.1328,"hitX":0.035,"hitY":0.0419,"clipX":0.03,"clipY":0.0369},{"x":0.8533,"y":0.1699,"hitX":0.0447,"hitY":0.0391,"clipX":0.0397,"clipY":0.0341},{"x":0.1376,"y":0.4039,"hitX":0.0515,"hitY":0.0363,"clipX":0.0465,"clipY":0.0313},{"x":0.3824,"y":0.4382,"hitX":0.035,"hitY":0.0435,"clipX":0.03,"clipY":0.0385},{"x":0.6077,"y":0.5024,"hitX":0.0519,"hitY":0.0479,"clipX":0.0469,"clipY":0.0429},{"x":0.8349,"y":0.4541,"hitX":0.0471,"hitY":0.0387,"clipX":0.0421,"clipY":0.0337},{"x":0.2707,"y":0.7177,"hitX":0.0355,"hitY":0.0471,"clipX":0.0305,"clipY":0.0421},{"x":0.7341,"y":0.7396,"hitX":0.0483,"hitY":0.0355,"clipX":0.0433,"clipY":0.0305}] }
  ,{ file: "next-23", name: "Museum Restoration Hall", isColor: true, cats: [[.2257,.299],[.5383,.2959],[.9051,.2097],[.1659,.4386],[.5136,.4083],[.453,.5614],[.7416,.4625],[.6898,.7376],[.5662,.8549],[.8668,.8182]].map(([x,y])=>({x,y,hitX:.035,hitY:.035,clipX:.03,clipY:.03})) }
  ,{ file: "next-24", name: "Tropical Riverboat Engine Room", isColor: true, cats: [[.1053,.2512],[.4075,.2225],[.6842,.1954],[.9282,.2727],[.2257,.5415],[.453,.5933],[.6715,.5016],[.2153,.6475],[.362,.7528],[.8931,.764]].map(([x,y])=>({x,y,hitX:.035,hitY:.035,clipX:.03,clipY:.03})) }
  ,{ file: "next-25", name: "Winter Observatory Library", isColor: true, cats: [[.1404,.4657],[.2536,.6204],[.4585,.445],[.8987,.3373],[.8573,.134],[.7727,.3724],[.6818,.5335],[.4705,.6467],[.4761,.7711],[.8796,.799]].map(([x,y])=>({x,y,hitX:.035,hitY:.035,clipX:.03,clipY:.03})) }
].map(level => {
  const assetVersion = level.file.startsWith("next-") ? "?v=reviewed-76-80-v1" : "";
  return { ...level, image: `assets/levels/${level.file}.webp${assetVersion}`, answer: `assets/levels/${level.file}-answer.webp${assetVersion}` };
});

const REVIEWED_CATS_59_63 = {
  "next-04": [{"x":0.0455,"y":0.2528,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.311,"y":0.2185,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0271},{"x":0.7313,"y":0.1587,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.701,"y":0.5925,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.7982,"y":0.6515,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.925,"y":0.6491,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.5423,"y":0.6842,"hitX":0.04,"hitY":0.04,"clipX":0.0271,"clipY":0.0255},{"x":0.4848,"y":0.7895,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.6954,"y":0.7839,"hitX":0.04,"hitY":0.04,"clipX":0.0271,"clipY":0.0255},{"x":0.697,"y":0.9729,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0271}],
  "next-05": [{"x":0.067,"y":0.1116,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.9195,"y":0.1651,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.4402,"y":0.2727,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.2408,"y":0.4043,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0271},{"x":0.4346,"y":0.4737,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.7727,"y":0.4609,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0271},{"x":0.0997,"y":0.8692,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0303},{"x":0.5502,"y":0.8852,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0319},{"x":0.7927,"y":0.8214,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.3126,"y":0.5742,"hitX":0.04,"hitY":0.04,"clipX":0.0271,"clipY":0.0255}],
  "next-06": [{"x":0.0766,"y":0.1411,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0271},{"x":0.4992,"y":0.138,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.8174,"y":0.2265,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.9713,"y":0.3166,"hitX":0.04,"hitY":0.04,"clipX":0.0287,"clipY":0.0255},{"x":0.3644,"y":0.4729,"hitX":0.04,"hitY":0.04,"clipX":0.0287,"clipY":0.0255},{"x":0.1938,"y":0.5128,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.8573,"y":0.4968,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0303},{"x":0.0781,"y":0.8214,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.2297,"y":0.9187,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0303},{"x":0.5359,"y":0.9163,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0319}],
  "next-07": [{"x":0.1132,"y":0.1228,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0271},{"x":0.4163,"y":0.1539,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.8437,"y":0.3301,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.1523,"y":0.5207,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.4705,"y":0.547,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0271},{"x":0.6483,"y":0.571,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0271},{"x":0.5359,"y":0.7512,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0303},{"x":0.3437,"y":0.9011,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0303},{"x":0.8341,"y":0.8772,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.2584,"y":0.7974,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271}],
  "next-08": [{"x":0.453,"y":0.0917,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.1826,"y":0.1555,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.8836,"y":0.189,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.9147,"y":0.5183,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.4952,"y":0.6021,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.0638,"y":0.6715,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.3708,"y":0.6738,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.7663,"y":0.6722,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.1268,"y":0.8764,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0303},{"x":0.7041,"y":0.9131,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271}]
};
levelCatalog.forEach(level => {
  if (REVIEWED_CATS_59_63[level.file]) level.cats = REVIEWED_CATS_59_63[level.file];
});

const REVIEWED_CATS_64_67 = {
  "next-09": [{"x":0.3206,"y":0.1683,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.7512,"y":0.2887,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.0885,"y":0.3868,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.496,"y":0.5327,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.0885,"y":0.6204,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.4537,"y":0.6754,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.1651,"y":0.7504,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0271},{"x":0.8054,"y":0.7049,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.0223,"y":0.4641,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.9697,"y":0.5423,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271}],
  "next-10": [{"x":0.4171,"y":0.1986,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0303},{"x":0.6938,"y":0.2337,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.9306,"y":0.2919,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.1874,"y":0.5255,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0303},{"x":0.2727,"y":0.4442,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.5534,"y":0.5415,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0287},{"x":0.1292,"y":0.4904,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.9442,"y":0.6021,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.8254,"y":0.6515,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.3301,"y":0.8708,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335}],
  "next-11": [{"x":0.2911,"y":0.0893,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.8979,"y":0.1651,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.7225,"y":0.2472,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.2943,"y":0.3262,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.5774,"y":0.3357,"hitX":0.04,"hitY":0.04,"clipX":0.0271,"clipY":0.0255},{"x":0.6786,"y":0.4633,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.1204,"y":0.4928,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.8054,"y":0.5455,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.0223,"y":0.6268,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0303},{"x":0.8947,"y":0.7791,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0335}],
  "next-12": [{"x":0.0646,"y":0.0415,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.1699,"y":0.3676,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.5742,"y":0.3413,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.9099,"y":0.3126,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.189,"y":0.6276,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.7911,"y":0.571,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.5662,"y":0.4944,"hitX":0.04,"hitY":0.04,"clipX":0.0271,"clipY":0.0239},{"x":0.6108,"y":0.7065,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335},{"x":0.0758,"y":0.8293,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.7887,"y":0.9075,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287}]
};
levelCatalog.forEach(level => {
  if (REVIEWED_CATS_64_67[level.file]) level.cats = REVIEWED_CATS_64_67[level.file];
});

const REVIEWED_CATS_68_75 = {
  "next-13": [{"x":0.5327,"y":0.126,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.3421,"y":0.2344,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.5909,"y":0.3557,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.2281,"y":0.4649,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335},{"x":0.8828,"y":0.4817,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.9593,"y":0.4928,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.5215,"y":0.6699,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0319},{"x":0.8381,"y":0.6874,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.6906,"y":0.8198,"hitX":0.04,"hitY":0.04,"clipX":0.0399,"clipY":0.0351},{"x":0.1842,"y":0.8931,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319}],
  "next-14": [{"x":0.2823,"y":0.0295,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.0319,"y":0.2185,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.4976,"y":0.1587,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.8357,"y":0.1172,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.9545,"y":0.2408,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.9474,"y":0.4641,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0319},{"x":0.697,"y":0.4992,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.386,"y":0.5662,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.2153,"y":0.7959,"hitX":0.04,"hitY":0.04,"clipX":0.0399,"clipY":0.0351},{"x":0.3054,"y":0.8987,"hitX":0.04,"hitY":0.04,"clipX":0.0399,"clipY":0.0351}],
  "next-15": [{"x":0.189,"y":0.0885,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.5183,"y":0.1053,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.929,"y":0.0925,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.8437,"y":0.1826,"hitX":0.04,"hitY":0.04,"clipX":0.0287,"clipY":0.0255},{"x":0.2225,"y":0.2217,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.8214,"y":0.3142,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.5518,"y":0.5582,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.1324,"y":0.634,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.7313,"y":0.7081,"hitX":0.04,"hitY":0.04,"clipX":0.0287,"clipY":0.0255},{"x":0.8222,"y":0.89,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287}],
  "next-16": [{"x":0.1021,"y":0.0758,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.803,"y":0.0957,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.4809,"y":0.3389,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.6427,"y":0.3748,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.1675,"y":0.4633,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.9051,"y":0.4625,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.1324,"y":0.6388,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0319},{"x":0.6276,"y":0.6116,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.2049,"y":0.764,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335},{"x":0.8102,"y":0.7464,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335}],
  "next-17": [{"x":0.5965,"y":0.1675,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.4825,"y":0.3078,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.3955,"y":0.3174,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.1228,"y":0.4195,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0319},{"x":0.945,"y":0.4872,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.1268,"y":0.6316,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.6659,"y":0.6268,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0319},{"x":0.2974,"y":0.6946,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0319},{"x":0.1324,"y":0.8445,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335},{"x":0.9681,"y":0.7608,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319}],
  "next-18": [{"x":0.1236,"y":0.1938,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.4705,"y":0.1268,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.7759,"y":0.1443,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.3182,"y":0.3684,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.697,"y":0.3581,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.0837,"y":0.5391,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335},{"x":0.697,"y":0.5167,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.8963,"y":0.6459,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.5606,"y":0.7632,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335},{"x":0.8836,"y":0.8612,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335}],
  "next-19": [{"x":0.2121,"y":0.1021,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.5136,"y":0.2344,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.8589,"y":0.2289,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.7217,"y":0.4617,"hitX":0.04,"hitY":0.04,"clipX":0.0335,"clipY":0.0303},{"x":0.8573,"y":0.5925,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.6116,"y":0.6268,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0319},{"x":0.3469,"y":0.6443,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.1659,"y":0.6802,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0319},{"x":0.1699,"y":0.9027,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335},{"x":0.8509,"y":0.8931,"hitX":0.04,"hitY":0.04,"clipX":0.0399,"clipY":0.0351}],
  "next-20": [{"x":0.5112,"y":0.1093,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.8421,"y":0.1085,"hitX":0.04,"hitY":0.04,"clipX":0.0319,"clipY":0.0287},{"x":0.1164,"y":0.3931,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.3333,"y":0.504,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.6746,"y":0.4219,"hitX":0.04,"hitY":0.04,"clipX":0.0367,"clipY":0.0319},{"x":0.8955,"y":0.362,"hitX":0.04,"hitY":0.04,"clipX":0.0303,"clipY":0.0271},{"x":0.8389,"y":0.4793,"hitX":0.04,"hitY":0.04,"clipX":0.0351,"clipY":0.0319},{"x":0.1539,"y":0.6754,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335},{"x":0.4785,"y":0.8246,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335},{"x":0.823,"y":0.7927,"hitX":0.04,"hitY":0.04,"clipX":0.0383,"clipY":0.0335}]
};
levelCatalog.forEach(level => {
  if (REVIEWED_CATS_68_75[level.file]) level.cats = REVIEWED_CATS_68_75[level.file];
});

// Fixed shuffle: varied on first load, stable across refreshes so saved progress stays meaningful.
const V9_LEVEL_ORDER = [
  "classic-08", "dark-03", "ten-04", "classic-02", "hard-02",
  "ten-09", "dark-11", "classic-13", "dark-06", "ten-01",
  "hard-03", "classic-05", "ten-06", "dark-15", "classic-11",
  "dark-01", "ten-10", "dark-12", "classic-01", "dark-08",
  "ten-03", "classic-15", "hard-01", "ten-08", "dark-17",
  "classic-04", "dark-04", "ten-05", "dark-10", "classic-09",
  "ten-02", "dark-02", "classic-06", "dark-16", "ten-07",
  "dark-07", "classic-12", "dark-14", "classic-03", "classic-14",
  "dark-05", "classic-07", "dark-13", "classic-10", "dark-09"
];
const DEPLOYED_LEVEL_ORDER_V10 = [
  "ink-03", "ten-08", "dark-05", "ten-06", "hard-01",
  "classic-07", "hard-03", "classic-11", "dark-13", "ten-10",
  "ink-07", "dark-15", "classic-13", "dark-08", "ten-07",
  "dark-10", "classic-14", "dark-06", "classic-01", "ink-10",
  "classic-10", "dark-01", "hard-02", "classic-04", "dark-03",
  "ten-04", "ink-05", "classic-06", "dark-16", "ten-02",
  "dark-02", "ten-01", "ink-06", "ink-09", "ten-03",
  "ink-08", "classic-05", "ink-02", "classic-03", "ink-04",
  "classic-09", "ink-01", "classic-12", "dark-11", "dark-04",
  "ten-05", "dark-14", "ten-09", "dark-07", "classic-08",
  "dark-12", "classic-15", "dark-17", "classic-02", "dark-09"
];
const DEPLOYED_LEVEL_ORDER_V12 = [
  "dark-05", "ten-08", "ink-03", "ten-03", "ink-01",
  "dark-06", "classic-03", "dark-01", "classic-12", "dark-14",
  "classic-01", "dark-11", "classic-04", "dark-15", "dark-03",
  "classic-09", "classic-15", "dark-09", "ink-04", "classic-10",
  "ink-06", "ink-05", "classic-07", "ten-02", "dark-16",
  "classic-06", "dark-13", "classic-11", "dark-04", "dark-10",
  "ten-05", "dark-08", "ten-10", "dark-12", "ten-09",
  "dark-17", "ten-01", "hard-03", "classic-05", "hard-01",
  "ten-06", "dark-07", "ten-07", "ink-10", "classic-14",
  "dark-02", "ten-04", "ink-07", "classic-08", "ink-02",
  "hard-02", "classic-02", "ink-09", "classic-13", "ink-08"
];
const PREVIOUS_LEVEL_ORDER_V13 = [
  ...DEPLOYED_LEVEL_ORDER_V12,
  "next-01", "next-02", "next-03", "next-04", "next-05",
  "next-06", "next-07", "next-08", "next-09", "next-10",
  "next-11", "next-12", "next-13", "next-14", "next-15",
  "next-16", "next-17", "next-18", "next-19", "next-20"
];
const levelByFile = new Map(levelCatalog.map(level => [level.file, level]));
const PREVIOUS_LEVEL_ORDER_V14 = [...PREVIOUS_LEVEL_ORDER_V13].sort((left, right) =>
  levelByFile.get(left).cats.length - levelByFile.get(right).cats.length
);
const LEVEL_ORDER = [
  ...PREVIOUS_LEVEL_ORDER_V14,
  "next-21", "next-22", "next-23", "next-24", "next-25"
];
const levels = LEVEL_ORDER.map(file => levelByFile.get(file));

const CONTENT_VERSION = "eighty-levels-v15";
const TOTAL_CATS = levels.reduce((sum, level) => sum + level.cats.length, 0);
const previousContentVersion = localStorage.getItem("cat-content-version");
if (previousContentVersion !== CONTENT_VERSION) {
  const oldScores = JSON.parse(localStorage.getItem("cat-scores") || "{}");
  const scoresByFile = {};
  const storedOrder = JSON.parse(localStorage.getItem("cat-level-order") || "null");
  const versionOrder = previousContentVersion === "forty-five-interleaved-levels-v9"
    ? V9_LEVEL_ORDER
    : previousContentVersion === "fifty-five-interleaved-levels-v10"
      ? DEPLOYED_LEVEL_ORDER_V10
      : previousContentVersion === "fifty-five-levels-v12"
        ? DEPLOYED_LEVEL_ORDER_V12
        : previousContentVersion === "seventy-five-levels-v13"
          ? PREVIOUS_LEVEL_ORDER_V13
          : previousContentVersion === "difficulty-sorted-levels-v14"
            ? PREVIOUS_LEVEL_ORDER_V14
            : null;
  const previousOrder = storedOrder || versionOrder || levelCatalog.map(level => level.file);
  Object.entries(oldScores).forEach(([index, score]) => {
    const file = previousOrder[Number(index)];
    if (file) scoresByFile[file] = score;
  });
  const remappedScores = {};
  levels.forEach((level, index) => {
    if (scoresByFile[level.file]) remappedScores[index] = scoresByFile[level.file];
  });
  const completedCount = Object.keys(remappedScores).length;
  localStorage.setItem("cat-scores", JSON.stringify(remappedScores));
  localStorage.setItem("cat-current", String(Math.min(completedCount, levels.length - 1)));
  localStorage.setItem("cat-unlocked", String(Math.min(completedCount, levels.length - 1)));
  localStorage.setItem("cat-content-version", CONTENT_VERSION);
}
localStorage.setItem("cat-level-order", JSON.stringify(LEVEL_ORDER));

const $ = (selector) => document.querySelector(selector);
const screens = [...document.querySelectorAll(".screen")];
const savedScores = JSON.parse(localStorage.getItem("cat-scores") || "{}");
const firstIncomplete = levels.findIndex((_, index) => !savedScores[index]);
const unlockedFromScores = firstIncomplete < 0 ? levels.length - 1 : firstIncomplete;
const state = {
  level: Math.min(Number(localStorage.getItem("cat-current")) || 0, levels.length - 1),
  unlocked: Math.min(Math.max(Number(localStorage.getItem("cat-unlocked")) || 0, unlockedFromScores), levels.length - 1),
  scores: savedScores,
  hearts: 5, hints: 3, startedAt: 0, elapsed: 0, timerId: null, found: new Set(),
  solved: false, sound: localStorage.getItem("cat-sound") !== "off",
  palette: localStorage.getItem("cat-palette") === "light" ? "light" : "dark",
  reviewMode: false,
  scale: 1, panX: 0, panY: 0, dragging: false, moved: false, pointerX: 0, pointerY: 0,
  pointers: new Map(), gesture: false, pinchDistance: 0, pinchMidpoint: null
};

const imageStage = $("#imageStage");
const puzzleImage = $("#puzzleImage");
const imageFrame = $("#imageFrame");
const foundCats = $("#foundCats");
const hintLens = $("#hintLens");

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("is-active", screen.id === id));
  if (id !== "gameScreen") stopTimer();
}

function save() {
  localStorage.setItem("cat-current", state.level);
  localStorage.setItem("cat-unlocked", state.unlocked);
  localStorage.setItem("cat-scores", JSON.stringify(state.scores));
}

function renderHome() {
  const completed = Object.keys(state.scores).length;
  $("#continueNote").textContent = completed ? `${completed} of ${levels.length} puzzles completed` : "Progress saves automatically";
  $("#startSoundButton").textContent = state.sound ? "♪" : "×";
}

function setReviewMode(active) {
  state.reviewMode = active;
  document.body.classList.toggle("review-mode", active);
  $("#reviewToolbar").hidden = !active;
}

function enterReviewMode() {
  setReviewMode(true);
  const savedReviewLevel = Number(localStorage.getItem("cat-review-current"));
  const reviewLevel = Number.isInteger(savedReviewLevel) ? Math.min(Math.max(savedReviewLevel, 0), levels.length - 1) : 0;
  startLevel(reviewLevel);
}

function leaveReviewMode() {
  if (!state.reviewMode) return;
  setReviewMode(false);
  state.level = Math.min(Number(localStorage.getItem("cat-current")) || 0, levels.length - 1);
}

function reviewNextLevel() {
  if (!state.reviewMode) return;
  const nextLevel = state.level === levels.length - 1 ? 0 : state.level + 1;
  localStorage.setItem("cat-review-current", String(nextLevel));
  startLevel(nextLevel);
}

function applyPalette(palette) {
  state.palette = palette === "light" ? "light" : "dark";
  document.body.classList.toggle("palette-light", state.palette === "light");
  document.querySelectorAll("[data-palette]").forEach(button => {
    const active = button.dataset.palette === state.palette;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  localStorage.setItem("cat-palette", state.palette);
}

function renderLevels() {
  const grid = $("#levelGrid");
  grid.innerHTML = levels.map((level, index) => {
    const locked = false;
    const stars = state.scores[index]?.stars || 0;
    return `<button class="level-card ${level.isColor ? "color-level-card" : ""} ${locked ? "locked" : ""}" data-level="${index}" ${locked ? "disabled" : ""} aria-label="Level ${index + 1}: ${level.name}${locked ? ", locked" : ""}">
      <img src="${level.image}" alt="" loading="lazy"><span class="number">${index + 1}</span><span class="level-stars">${"★".repeat(stars)}${"☆".repeat(3-stars)}</span>
    </button>`;
  }).join("");
  $("#starTotal").textContent = Object.values(state.scores).reduce((sum, score) => sum + score.stars, 0);
  grid.querySelectorAll("[data-level]").forEach(button => button.addEventListener("click", () => startLevel(Number(button.dataset.level))));
  showScreen("levelScreen");
}

function startLevel(index) {
  const level = levels[index];
  state.level = index; state.hearts = 5; state.hints = 3; state.solved = false; state.elapsed = 0; state.found = new Set();
  document.body.classList.toggle("color-level", Boolean(level.isColor));
  resetView();
  if (!state.reviewMode) save();
  showScreen("gameScreen");
  $("#levelLabel").textContent = `LEVEL ${index + 1}`;
  $("#reviewPosition").textContent = `REVIEW ${index + 1} / ${levels.length}`;
  $("#reviewToolbar").hidden = !state.reviewMode;
  $("#progressFill").style.width = "0%"; $("#catProgress").textContent = `0 / ${level.cats.length}`;
  foundCats.innerHTML = ""; hintLens.classList.remove("show");
  updateHearts(); updateHints();
  $("#loadingCard").classList.remove("is-hidden");
  puzzleImage.onload = () => {
    fitStage();
    $("#loadingCard").classList.add("is-hidden");
    state.startedAt = Date.now(); startTimer();
  };
  puzzleImage.src = level.image;
  puzzleImage.alt = `Level ${index + 1}: ${level.name}. Find ${level.cats.length === 1 ? "the hidden cat" : `${level.cats.length} hidden cats`}.`;
  if (puzzleImage.complete) puzzleImage.onload();
  new Image().src = level.answer;
  const next = levels[index + 1]; if (next) { new Image().src = next.image; new Image().src = next.answer; }
}

function placeMarker(element, cat) {
  element.style.left = `${cat.x * 100}%`; element.style.top = `${cat.y * 100}%`;
}

function updateHearts() {
  $("#hearts").innerHTML = [0,1,2,3,4].map(i => `<span class="heart ${i >= state.hearts ? "lost" : ""}">♥</span>`).join("");
  $("#hearts").setAttribute("aria-label", `${state.hearts} lives remaining`);
}
function updateHints() { $("#hintCount").textContent = `${state.hints} left`; $("#hintButton").disabled = !state.hints || state.solved; }

function startTimer() {
  stopTimer(); updateTimer(); state.timerId = setInterval(updateTimer, 1000);
}
function stopTimer() { if (state.timerId) clearInterval(state.timerId); state.timerId = null; }
function updateTimer() { if (!state.solved) state.elapsed = Math.floor((Date.now() - state.startedAt) / 1000); $("#timer").textContent = formatTime(state.elapsed); }
function formatTime(seconds) { return `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(seconds % 60).padStart(2,"0")}`; }

function imageCoordinates(event) {
  const rect = puzzleImage.getBoundingClientRect();
  const renderedRatio = puzzleImage.naturalWidth / puzzleImage.naturalHeight;
  const boxRatio = rect.width / rect.height;
  let width = rect.width, height = rect.height, left = rect.left, top = rect.top;
  if (boxRatio > renderedRatio) { width = height * renderedRatio; left += (rect.width - width) / 2; }
  else { height = width / renderedRatio; top += (rect.height - height) / 2; }
  return { x: (event.clientX - left) / width, y: (event.clientY - top) / height };
}

function handleGuess(event) {
  if (state.solved || state.dragging || state.moved) return;
  const p = imageCoordinates(event); if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return;
  const cats = levels[state.level].cats;
  const hitIndex = cats.findIndex(cat => ((p.x - cat.x) / cat.hitX) ** 2 + ((p.y - cat.y) / cat.hitY) ** 2 <= 1);
  if (hitIndex < 0) { wrongGuess(event.clientX, event.clientY); return; }
  if (state.found.has(hitIndex)) { toast("You already found this cat"); return; }
  state.found.add(hitIndex); revealCat(hitIndex); tone("hint"); updateCatProgress();
  if (state.found.size === cats.length) setTimeout(solveLevel, 450);
}

function revealCat(index) {
  const level = levels[state.level], cat = level.cats[index];
  const overlay = document.createElement("img");
  overlay.className = "found-cat-overlay"; overlay.src = level.answer; overlay.alt = "";
  overlay.style.clipPath = `ellipse(${cat.clipX * 100}% ${cat.clipY * 100}% at ${cat.x * 100}% ${cat.y * 100}%)`;
  foundCats.append(overlay);
}

function updateCatProgress() {
  const total = levels[state.level].cats.length;
  $("#catProgress").textContent = `${state.found.size} / ${total}`;
  $("#progressFill").style.width = `${state.found.size / total * 100}%`;
  if (state.found.size < total) toast(`${state.found.size} found · ${total - state.found.size} to go`);
}

function revealAllCats() {
  levels[state.level].cats.forEach((_, index) => { if (!state.found.has(index)) revealCat(index); });
}

function wrongGuess(x, y) {
  state.hearts--; updateHearts(); tone("wrong");
  const mark = document.createElement("i"); mark.className = "miss-mark"; mark.style.left = `${x}px`; mark.style.top = `${y}px`; document.body.append(mark); setTimeout(() => mark.remove(), 600);
  if (state.hearts <= 0) {
    const total = levels[state.level].cats.length;
    revealAllCats(); toast(`${total === 1 ? "The cat is" : "All cats are"} orange — try again!`); stopTimer();
    setTimeout(() => startLevel(state.level), 2100);
  } else toast(state.hearts === 1 ? "Careful — one heart left!" : "Not there. Keep looking!");
}

function solveLevel() {
  state.solved = true; stopTimer(); tone("win"); confetti();
  const stars = state.hearts >= 4 ? 3 : state.hearts >= 2 ? 2 : 1;
  if (!state.reviewMode) {
    const previous = state.scores[state.level];
    state.scores[state.level] = { stars: Math.max(stars, previous?.stars || 0), best: Math.min(state.elapsed, previous?.best ?? Infinity) };
    state.unlocked = Math.max(state.unlocked, Math.min(state.level + 1, levels.length - 1)); save();
  }
  $("#progressFill").style.width = "100%";
  setTimeout(() => showResult(stars), 800);
}

function showResult(stars) {
  $("#resultTime").textContent = formatTime(state.elapsed);
  $("#resultStars").textContent = "★".repeat(stars) + "☆".repeat(3-stars);
  const last = state.level === levels.length - 1;
  const total = levels[state.level].cats.length;
  $("#resultTitle").textContent = last ? "Today's puzzles are complete!" : total === 1 ? "Cat found!" : `All ${total} cats found!`;
  $("#resultMessage").textContent = last ? "You've finished today's puzzles. Would you like to start over?" : total === 1 ? "That hidden cat has turned orange!" : ["Perfect finds — sharp eyes!","Meow-nificent detective work!","Every cat has turned orange!"][state.level % 3];
  $("#nextButton span").textContent = last ? "Start over" : "Next level";
  $("#resultLevelsButton").textContent = last ? "Not now" : "All levels";
  $("#successModal").classList.add("show"); $("#successModal").setAttribute("aria-hidden", "false");
}
function hideResult() { $("#successModal").classList.remove("show"); $("#successModal").setAttribute("aria-hidden", "true"); }

function useHint() {
  if (!state.hints || state.solved) return;
  const index = levels[state.level].cats.findIndex((_, catIndex) => !state.found.has(catIndex));
  if (index < 0) return;
  placeMarker(hintLens, levels[state.level].cats[index]);
  state.hints--; updateHints(); hintLens.classList.remove("show"); void hintLens.offsetWidth; hintLens.classList.add("show"); tone("hint");
  toast(state.hints ? "Search inside the glowing area" : "Last hint used — look closely!");
  setTimeout(() => hintLens.classList.remove("show"), 3300);
}

function fitStage() {
  const side = Math.max(imageFrame.clientWidth, imageFrame.clientHeight);
  imageStage.style.width = `${side}px`; imageStage.style.height = `${side}px`;
  imageStage.style.left = `${(imageFrame.clientWidth - side) / 2}px`;
  imageStage.style.top = `${(imageFrame.clientHeight - side) / 2}px`;
  clampPan(); applyView();
}
function clampPan() {
  const maxX = Math.max(0, (imageStage.offsetWidth * state.scale - imageFrame.clientWidth) / 2);
  const maxY = Math.max(0, (imageStage.offsetHeight * state.scale - imageFrame.clientHeight) / 2);
  state.panX = Math.min(maxX, Math.max(-maxX, state.panX));
  state.panY = Math.min(maxY, Math.max(-maxY, state.panY));
}
function applyView() {
  imageStage.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.scale})`;
}
function setZoom(value) {
  const previousScale = state.scale;
  state.scale = Math.min(3, Math.max(1, value));
  if (state.scale === 1 && previousScale > 1) { state.panX = 0; state.panY = 0; }
  clampPan(); applyView();
}
function zoomAt(value, clientX, clientY) {
  const nextScale = Math.min(3, Math.max(1, value));
  const frame = imageFrame.getBoundingClientRect();
  const focusX = clientX - (frame.left + frame.width / 2);
  const focusY = clientY - (frame.top + frame.height / 2);
  const imageX = (focusX - state.panX) / state.scale;
  const imageY = (focusY - state.panY) / state.scale;
  state.panX = focusX - imageX * nextScale;
  state.panY = focusY - imageY * nextScale;
  state.scale = nextScale;
  clampPan(); applyView();
}
function resetView() { state.scale = 1; state.panX = 0; state.panY = 0; state.dragging = false; state.gesture = false; state.pointers.clear(); fitStage(); }

function toast(message) { const el = $("#toast"); el.textContent = message; el.classList.add("show"); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 1800); }
function tone(type) {
  if (!state.sound) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext; if (!AudioContext) return;
  const ctx = tone.ctx ||= new AudioContext(); const notes = type === "win" ? [523,659,784] : type === "hint" ? [440,660] : [170,120];
  notes.forEach((frequency, i) => { const oscillator = ctx.createOscillator(), gain = ctx.createGain(); oscillator.connect(gain).connect(ctx.destination); oscillator.frequency.value = frequency; oscillator.type = type === "wrong" ? "sawtooth" : "sine"; gain.gain.setValueAtTime(.08, ctx.currentTime + i*.11); gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .17 + i*.11); oscillator.start(ctx.currentTime + i*.11); oscillator.stop(ctx.currentTime + .2 + i*.11); });
}
function confetti() {
  const colors = ["#ffd84d","#ff6b6b","#55ddb4","#7656f7","#4ec5ff"];
  for (let i=0;i<34;i++) { const piece=document.createElement("i"); piece.className="confetti"; piece.style.left=`${Math.random()*100}%`; piece.style.background=colors[i%colors.length]; piece.style.setProperty("--drift",`${(Math.random()-.5)*240}px`); piece.style.animationDelay=`${Math.random()*.35}s`; document.body.append(piece); setTimeout(()=>piece.remove(),2200); }
}

$("#playButton").addEventListener("click", () => startLevel(Math.min(state.unlocked, levels.length - 1)));
$("#levelsButton").addEventListener("click", renderLevels);
$("#reviewModeButton").addEventListener("click", enterReviewMode);
$("#reviewNextButton").addEventListener("click", reviewNextLevel);
document.querySelectorAll('[data-action="home"]').forEach(button => button.addEventListener("click", () => { resetView(); leaveReviewMode(); renderHome(); showScreen("startScreen"); }));
$("#hintButton").addEventListener("click", useHint);
$("#zoomReset").addEventListener("click", resetView);
document.querySelectorAll("[data-palette]").forEach(button => button.addEventListener("click", () => applyPalette(button.dataset.palette)));
$("#nextButton").addEventListener("click", () => {
  hideResult();
  if (state.reviewMode) reviewNextLevel();
  else startLevel(state.level === levels.length - 1 ? 0 : state.level + 1);
});
$("#resultLevelsButton").addEventListener("click", () => { hideResult(); renderLevels(); });
$("#startSoundButton").addEventListener("click", () => { state.sound=!state.sound; localStorage.setItem("cat-sound",state.sound?"on":"off"); renderHome(); tone("hint"); });

imageFrame.addEventListener("pointerdown", event => {
  imageFrame.setPointerCapture(event.pointerId);
  state.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (state.pointers.size === 1) {
    const canPan = imageStage.offsetWidth * state.scale > imageFrame.clientWidth + 1 || imageStage.offsetHeight * state.scale > imageFrame.clientHeight + 1;
    state.dragging = canPan; state.moved = false; state.pointerX = event.clientX; state.pointerY = event.clientY;
  } else if (state.pointers.size === 2) {
    const [a, b] = [...state.pointers.values()];
    state.gesture = true; state.dragging = false; state.moved = true;
    state.pinchDistance = Math.hypot(b.x - a.x, b.y - a.y);
    state.pinchMidpoint = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  }
});
imageFrame.addEventListener("pointermove", event => {
  if (!state.pointers.has(event.pointerId)) return;
  state.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (state.gesture && state.pointers.size >= 2) {
    const [a, b] = [...state.pointers.values()];
    const distance = Math.hypot(b.x - a.x, b.y - a.y);
    const midpoint = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
    if (state.pinchDistance > 0) {
      zoomAt(state.scale * distance / state.pinchDistance, state.pinchMidpoint.x, state.pinchMidpoint.y);
      state.panX += midpoint.x - state.pinchMidpoint.x; state.panY += midpoint.y - state.pinchMidpoint.y;
      clampPan(); applyView();
    }
    state.pinchDistance = distance; state.pinchMidpoint = midpoint;
    return;
  }
  if (!state.dragging) return;
  const dx = event.clientX - state.pointerX, dy = event.clientY - state.pointerY;
  if (Math.abs(dx) + Math.abs(dy) > 3) state.moved = true;
  state.panX += dx; state.panY += dy; state.pointerX = event.clientX; state.pointerY = event.clientY;
  clampPan(); applyView();
});
imageFrame.addEventListener("pointerup", event => {
  const wasGesture = state.gesture, wasDragging = state.dragging;
  state.pointers.delete(event.pointerId);
  if (wasGesture) {
    state.dragging = false;
    if (state.pointers.size === 0) { state.gesture = false; state.moved = false; state.pinchMidpoint = null; }
    return;
  }
  state.dragging = false;
  if (!wasDragging || !state.moved) handleGuess(event);
  setTimeout(() => state.moved = false, 0);
});
imageFrame.addEventListener("pointercancel", event => {
  state.pointers.delete(event.pointerId);
  if (state.pointers.size === 0) { state.gesture = false; state.dragging = false; state.moved = false; }
});
imageFrame.addEventListener("wheel", event => { event.preventDefault(); zoomAt(state.scale + (event.deltaY < 0 ? .25 : -.25), event.clientX, event.clientY); }, { passive: false });
window.addEventListener("resize", fitStage);

applyPalette(state.palette);
renderHome();
