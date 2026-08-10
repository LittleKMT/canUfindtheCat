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
  ,{ file: "tiny-ink-01", name: "Old Railway Station", cats: [
    {x:.140,y:.150,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.220,y:.290,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.290,y:.490,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.550,y:.380,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.730,y:.470,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.910,y:.490,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.520,y:.700,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.760,y:.870,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.100,y:.720,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.420,y:.600,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-ink-02", name: "Rooftop Market", cats: [
    {x:.250,y:.150,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.700,y:.100,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.300,y:.320,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.580,y:.310,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.820,y:.470,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.400,y:.700,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.600,y:.680,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.200,y:.780,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.720,y:.750,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.150,y:.900,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-ink-03", name: "Clock Tower Interior", cats: [
    {x:.490,y:.220,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.200,y:.220,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.790,y:.310,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.550,y:.450,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.130,y:.550,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.320,y:.690,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.810,y:.660,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.930,y:.550,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.470,y:.910,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.600,y:.770,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-ink-04", name: "Spacecraft Repair Bay", cats: [
    {x:.210,y:.120,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.480,y:.210,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.580,y:.420,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.120,y:.450,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.870,y:.390,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.450,y:.620,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.630,y:.700,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.860,y:.620,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.240,y:.820,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.930,y:.780,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-ink-05", name: "Toy Factory", cats: [
    {x:.160,y:.140,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.690,y:.130,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.300,y:.350,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.900,y:.280,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.550,y:.480,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.250,y:.570,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.580,y:.700,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.290,y:.790,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.750,y:.750,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.170,y:.900,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-ink-06", name: "Underground Water Control Room", cats: [
    {x:.100,y:.180,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.320,y:.150,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.620,y:.150,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.860,y:.200,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.230,y:.360,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.480,y:.430,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.780,y:.440,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.340,y:.660,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.690,y:.700,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.840,y:.870,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-ink-07", name: "Wizard's Botanical Laboratory", cats: [
    {x:.170,y:.140,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.420,y:.190,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.720,y:.180,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.850,y:.350,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.230,y:.400,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.550,y:.480,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.740,y:.590,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.170,y:.670,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.440,y:.770,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.830,y:.830,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-ink-08", name: "Crowded Antique Shop", cats: [
    {x:.180,y:.160,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.420,y:.120,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.700,y:.180,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.850,y:.290,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.220,y:.370,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.480,y:.420,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.650,y:.550,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.150,y:.660,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.500,y:.730,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.840,y:.760,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-ink-09", name: "Rainy Shopping Street", cats: [
    {x:.130,y:.140,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.440,y:.110,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.730,y:.180,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.220,y:.350,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.500,y:.420,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.840,y:.380,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.320,y:.600,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.680,y:.610,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.180,y:.760,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.820,y:.780,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-ink-10", name: "Forest Treehouse Village", cats: [
    {x:.230,y:.130,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.440,y:.170,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.720,y:.200,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.860,y:.320,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.170,y:.430,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.480,y:.380,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.650,y:.480,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.300,y:.620,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.760,y:.690,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.470,y:.840,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-color-01", name: "Pastry Kitchen", isColor: true, cats: [
    {x:.140,y:.150,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.400,y:.120,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.670,y:.180,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.870,y:.250,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.220,y:.400,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.520,y:.420,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.780,y:.490,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.180,y:.660,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.480,y:.730,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.830,y:.820,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-color-02", name: "Canal Flower Market", isColor: true, cats: [
    {x:.130,y:.140,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.420,y:.120,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.700,y:.180,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.870,y:.300,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.220,y:.420,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.520,y:.440,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.780,y:.520,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.180,y:.680,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.480,y:.720,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.830,y:.840,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-color-03", name: "Seaside Amusement Park", isColor: true, cats: [
    {x:.150,y:.140,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.420,y:.130,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.690,y:.180,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.880,y:.300,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.220,y:.420,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.520,y:.460,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.780,y:.540,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.180,y:.670,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.480,y:.740,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.830,y:.840,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-color-04", name: "Dragon Library", isColor: true, cats: [
    {x:.180,y:.120,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.440,y:.140,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.680,y:.180,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.860,y:.340,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.300,y:.380,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.560,y:.420,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.740,y:.560,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.170,y:.700,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.470,y:.760,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.820,y:.840,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
  ,{ file: "tiny-color-05", name: "Mini Robot City", isColor: true, cats: [
    {x:.140,y:.120,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.390,y:.150,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.680,y:.140,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.860,y:.280,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.220,y:.380,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.530,y:.430,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.750,y:.540,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.180,y:.670,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.490,y:.730,hitX:.026,hitY:.026,clipX:.017,clipY:.017},{x:.830,y:.840,hitX:.026,hitY:.026,clipX:.017,clipY:.017}] }
].map(level => ({ ...level, image: `assets/levels/${level.file}.webp`, answer: `assets/levels/${level.file}-answer.webp` }));

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
const LEVEL_ORDER = [...DEPLOYED_LEVEL_ORDER_V10, "tiny-ink-01", "tiny-ink-02", "tiny-ink-03", "tiny-ink-04", "tiny-ink-05", "tiny-ink-06", "tiny-ink-07", "tiny-ink-08", "tiny-ink-09", "tiny-ink-10", "tiny-color-01", "tiny-color-02", "tiny-color-03", "tiny-color-04", "tiny-color-05"];
const levelByFile = new Map(levelCatalog.map(level => [level.file, level]));
const levels = LEVEL_ORDER.map(file => levelByFile.get(file));

const CONTENT_VERSION = "seventy-levels-next20-stage3-v11";
const TOTAL_CATS = levels.reduce((sum, level) => sum + level.cats.length, 0);
const previousContentVersion = localStorage.getItem("cat-content-version");
if (previousContentVersion !== CONTENT_VERSION) {
  const oldScores = JSON.parse(localStorage.getItem("cat-scores") || "{}");
  const scoresByFile = {};
  const storedOrder = JSON.parse(localStorage.getItem("cat-level-order") || "null");
  const versionOrder = previousContentVersion === "forty-five-interleaved-levels-v9" ? V9_LEVEL_ORDER : previousContentVersion === "fifty-five-interleaved-levels-v10" ? DEPLOYED_LEVEL_ORDER_V10 : null;
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
    const locked = index > state.unlocked;
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
  resetView(); save(); showScreen("gameScreen");
  $("#levelLabel").textContent = `LEVEL ${index + 1}`;
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
  const previous = state.scores[state.level];
  state.scores[state.level] = { stars: Math.max(stars, previous?.stars || 0), best: Math.min(state.elapsed, previous?.best ?? Infinity) };
  state.unlocked = Math.max(state.unlocked, Math.min(state.level + 1, levels.length - 1)); save();
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
document.querySelectorAll('[data-action="home"]').forEach(button => button.addEventListener("click", () => { resetView(); renderHome(); showScreen("startScreen"); }));
$("#hintButton").addEventListener("click", useHint);
$("#zoomReset").addEventListener("click", resetView);
document.querySelectorAll("[data-palette]").forEach(button => button.addEventListener("click", () => applyPalette(button.dataset.palette)));
$("#nextButton").addEventListener("click", () => { hideResult(); startLevel(state.level === levels.length-1 ? 0 : state.level+1); });
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
