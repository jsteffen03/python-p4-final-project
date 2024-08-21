from config import app
from models import db, Furniture, Project, User, project_furniture_table

with app.app_context():

    # This will delete any existing rows
    # so you can run the seed file multiple times without having duplicate entries in your database
    print("Deleting data...")
    db.session.query(Furniture).delete()
    db.session.query(Project).delete()
    db.session.query(User).delete()
    db.session.commit()

    
    print("Creating furniture...")
    table1 = Furniture(name="Casmera Coffee Table", type="table", price=208, img="https://assets.wfcdn.com/im/96315560/resize-h755-w755%5Ecompr-r85/2643/264375396/Casmera+Coffee+Table.jpg")
    table2 = Furniture(name="Rahn Dining Table", type="table", price=220, img="https://assets.wfcdn.com/im/43494966/resize-h755-w755%5Ecompr-r85/2678/267823513/Rahn+Dining+Table.jpg")
    table3 = Furniture(name="Cuji 47'' Round Pedestal Dining Table", type="table", price=313, img="https://assets.wfcdn.com/im/15742141/resize-h755-w755%5Ecompr-r85/2911/291134662/Cuji+47%27%27+Round+Pedestal+Dining+Table.jpg")
    table4 = Furniture(name="Painswick Solid Wood 3 - Drawer End Tablek", type="table", price=120, img="https://assets.wfcdn.com/im/60780401/resize-h755-w755%5Ecompr-r85/1577/157738829/Painswick+Solid+Wood+3+-+Drawer+End+Table.jpg")
    table5 = Furniture(name="Brycin Tray Top End Table", type="table", price=78, img="https://assets.wfcdn.com/im/20441015/resize-h755-w755%5Ecompr-r85/9113/91135245/Brycin+Tray+Top+End+Table.jpg")
    table6 = Furniture(name="Vianor Coffee Table", type="table", price=215, img="https://assets.wfcdn.com/im/98346023/resize-h755-w755%5Ecompr-r85/2516/251672386/Vianor+Coffee+Table.jpg")
    table7 = Furniture(name="Krish End Table", type="table", price=53, img="https://assets.wfcdn.com/im/83659466/resize-h755-w755%5Ecompr-r85/2304/230481759/Krish+End+Table.jpg")
    table8 = Furniture(name="Donique Glass Coffee Table", type="table", price=143, img="https://assets.wfcdn.com/im/35973565/resize-h755-w755%5Ecompr-r85/1481/148130508/Donique+Glass+Coffee+Table.jpg")
    table9 = Furniture(name="Anirudha 79 in Oval Dining Table", type="table", price=700, img="https://assets.wfcdn.com/im/32221490/resize-h755-w755%5Ecompr-r85/2533/253313835/Anirudha+79%22+Oval+Dining+Table.jpg")
    table10 = Furniture(name="Homeira Rectangle Big Dining Table", type="table", price=800, img="https://assets.wfcdn.com/im/84185020/resize-h755-w755%5Ecompr-r85/2679/267947664/Homeira++62.9%22+to+94.4%22+Extendable+Dining+Tables+for+6+to+10+-+++Rectangle+Big+Dining+Table.jpg")
    chair1 = Furniture(name="Almyra Coastal Upholstered Slipper Chair with Wood Legs", type="chair", price=195, img="https://assets.wfcdn.com/im/68162941/resize-h755-w755%5Ecompr-r85/2348/234834572/Almyra+Coastal+Upholstered+Slipper+Chair+with+Wood+Legs.jpg")
    chair2 = Furniture(name="Euclid Upholstered Accent Chair with Metal Legs", type="chair", price=163, img="https://assets.wfcdn.com/im/72803502/resize-h755-w755%5Ecompr-r85/2846/284680746/Euclid+Upholstered+Accent+Chair+with+Metal+Legs.jpg")
    chair3 = Furniture(name="Mid-Back Executive Swivel Office Chair", type="chair", price=189, img="https://assets.wfcdn.com/im/92442312/resize-h755-w755%5Ecompr-r85/6038/60389452/Mid-Back+Executive+Swivel+Office+Chair+with+Metal+Frame+and+Arms.jpg")
    chair4 = Furniture(name="Lundgren Leather Task Chair", type="chair", price=179, img="https://assets.wfcdn.com/im/53992202/resize-h755-w755%5Ecompr-r85/2461/246114573/Lundgren+Leather+Task+Chair+with+Padded+Arms.jpg")
    chair5 = Furniture(name="Alexandrina Fabric Upholstered Side Chair", type="chair", price=365, img="https://assets.wfcdn.com/im/11434038/resize-h755-w755%5Ecompr-r85/2778/277851421/Alexandrina+Fabric+Upholstered+Side+Chair.jpg")
    chair6 = Furniture(name="Gallman Upholstered Side Chair", type="chair", price=209, img="https://assets.wfcdn.com/im/83668661/resize-h755-w755%5Ecompr-r85/2760/276019207/Gallman+Upholstered+Side+Chair.jpg")
    chair7 = Furniture(name="Eddy Velvet Wingback Chair", type="chair", price=378, img="https://assets.wfcdn.com/im/47492624/resize-h755-w755%5Ecompr-r85/2492/249238865/Eddy+Velvet+Wingback+Chair.jpg")
    chair8 = Furniture(name="Torrence Upholstered Barrel Chair", type="chair", price=137, img="https://assets.wfcdn.com/im/22154363/resize-h755-w755%5Ecompr-r85/2639/263938892/Torrence+Upholstered+Barrel+Chair+with+Ottoman.jpg")
    chair9 = Furniture(name="Hertford Upholstered Linen Blend Accent Chair", type="chair", price=156, img="https://assets.wfcdn.com/im/03618549/resize-h755-w755%5Ecompr-r85/2031/203193695/Hertford+Upholstered+Linen+Blend+Accent+Chair+with+Wooden+Legs+and+One+Pillow.jpg")
    chair10 = Furniture(name="Upholstered Accent Chair", type="chair", price=228, img="https://assets.wfcdn.com/im/51272788/resize-h755-w755%5Ecompr-r85/2537/253774557/Upholstered+Accent+Chair.jpg")
    sofa1 = Furniture(name="Futon Sofa Bed Modern Corduroy Couch", type="sofa", price=176, img="https://assets.wfcdn.com/im/91012004/resize-h1600-w1600%5Ecompr-r85/2830/283012294/Futon+Sofa+Bed+Modern+Corduroy+Couch+Convertible+Folding+Reclining+Sleeper+Sofa.jpg")
    sofa2 = Furniture(name="Areni 51in Upholstered Loveseat", type="sofa", price=314, img="https://assets.wfcdn.com/im/96677293/resize-h755-w755%5Ecompr-r85/2525/252550753/Areni+51%27%27+Upholstered+Loveseat.jpg")
    sofa3 = Furniture(name="Convertible Sectional Sofa Couch", type="sofa", price=299, img="https://assets.wfcdn.com/im/14590663/resize-h755-w755%5Ecompr-r85/2853/285316337/Convertible+Sectional+Sofa+Couch%2C+L+Shaped+Couch+Sofa+For+Living+Room%2C+Small+3+Seater+Sofa+Couch+With+Storage+Ottoman+And+Side+Pockets.jpg")
    sofa4 = Furniture(name="Jaceyon 74.8in Flared Arm Convertible Sleeper Sofa", type="sofa", price=319, img="https://assets.wfcdn.com/im/67733689/resize-h755-w755%5Ecompr-r85/2875/287518735/Jaceyon++74.8%22+Flared+Arm+Convertible+Sleeper+Sofa.jpg")
    sofa5 = Furniture(name="Modern Chenille Couch Sofa Sectional with Deep Tufted Seat", type="sofa", price=1200, img="https://assets.wfcdn.com/im/79750494/resize-h755-w755%5Ecompr-r85/2859/285929615/Modern+Chenille+Couch+Sofa+Sectional+with+Deep+Tufted+Seat.jpg")
    sofa6 = Furniture(name="Sleeper Sofa, 112 Inch Pull Out Sofa Bed ", type="sofa", price=975, img="https://assets.wfcdn.com/im/71702749/resize-h755-w755%5Ecompr-r85/2863/286347990/Sleeper+Sofa%2C+112+Inch+Pull+Out+Sofa+Bed+with+Storage+Chaise+%26+3+Seater.jpg")
    sofa7 = Furniture(name="Jeses MINIMORE Modern Style Etta", type="sofa", price=730, img="https://assets.wfcdn.com/im/24379759/resize-h755-w755%5Ecompr-r85/2848/284861627/Jeses+MINIMORE+Modern+Style+Etta+84.3%22+Mid-Century+Modern+Design+Sofa.jpg")
    sofa8 = Furniture(name="Carelle 89in Corduroy Sofa", type="sofa", price=920, img="https://assets.wfcdn.com/im/89778106/resize-h1246-w1600%5Ecompr-r85/2728/272851561/Carelle+89%27%27+Corduroy+Sofa.jpg")
    sofa9 = Furniture(name="Avrilynn 85.4in Upholstered Sofa", type="sofa", price=600, img="https://assets.wfcdn.com/im/82630225/resize-h755-w755%5Ecompr-r85/2935/293544818/Avrilynn+85.4%27%27+Upholstered+Sofa.jpg")
    sofa10 = Furniture(name="Carel 66.1in Upholstered Loveseat", type="sofa", price=979, img="https://assets.wfcdn.com/im/25558700/resize-h755-w755%5Ecompr-r85/2537/253772629/Carel+66.1%27%27+Upholstered+Loveseat.jpg")
    carpet1 = Furniture(name="Willhite Animal Print Rug", type="carpet", price=109, img="https://assets.wfcdn.com/im/50967384/resize-h755-w755%5Ecompr-r85/1938/193875170/Willhite+Animal+Print+Rug.jpg")
    carpet2 = Furniture(name="Bayshore Coastal Starfish Striped Area Rug", type="carpet", price=239, img="https://assets.wfcdn.com/im/84047637/resize-h755-w755%5Ecompr-r85/1272/127269979/Bayshore+Coastal+Starfish+Striped+Area+Rug.jpg")
    carpet3 = Furniture(name="Corum Abstract Rug", type="carpet", price=119, img="https://assets.wfcdn.com/im/94884928/resize-h755-w755%5Ecompr-r85/1246/124645094/Corum+Abstract+Rug.jpg")
    carpet4 = Furniture(name="Coraline Animal Print Machine Washable Accent Rug", type="carpet", price=199, img="https://assets.wfcdn.com/im/10223493/resize-h755-w755%5Ecompr-r85/1981/198134460/Coraline+Animal+Print+Machine+Washable+Accent+Rug+for+Living+Room+Bedroom+Dining+Room+Entryway+Kitchen.jpg")
    carpet5 = Furniture(name="Uptown Hand Tufted Wool Geometric Rug", type="carpet", price=329, img="https://assets.wfcdn.com/im/64269246/resize-h755-w755%5Ecompr-r85/2612/261214584/Uptown+Hand+Tufted+Wool+Geometric+Rug.jpg")
    carpet6 = Furniture(name="Kylan Geometric Wool Runner Rug ", type="carpet", price=98, img="https://assets.wfcdn.com/im/12849444/resize-h755-w755%5Ecompr-r85/4213/42138391/Kylan+Geometric+Wool+Runner+Rug+for+Living+Room+Bedroom+Dining+Room+Entryway+Hallway+Kitchen%2C+Multicolor%2FBlack.jpg")
    carpet7 = Furniture(name="Abstract Blue Area Rug", type="carpet", price=125, img="https://assets.wfcdn.com/im/09354923/resize-h755-w755%5Ecompr-r85/2222/222277958/Abstract+Blue%2FBeige%2FGray+Area+Rug.jpg")
    carpet8 = Furniture(name="Anchise Striped Rug", type="carpet", price=769, img="https://assets.wfcdn.com/im/83277322/resize-h755-w755%5Ecompr-r85/2265/226568905/Anchise+Striped+Rug.jpg")
    carpet9 = Furniture(name="Latrissa Moroccan Handmade Flatweave Wool", type="carpet", price=279, img="https://assets.wfcdn.com/im/96317520/resize-h755-w755%5Ecompr-r85/2495/249532158/Latrissa+Moroccan+Handmade+Flatweave+Wool+Charcoal%2FCream+Area+Rug.jpg")
    carpet10 = Furniture(name="Tomas Chevron Area Rug", type="carpet", price=349, img="https://assets.wfcdn.com/im/99338672/resize-h755-w755%5Ecompr-r85/2047/204784059/Tomas+Chevron+Rug+Dark+Blue%2FGray+Indoor%2FOutdoor+Area+Rug.jpg")
    shelving1 = Furniture(name="2 Piece Floating Shelf with Towel Bar", type="shelving", price=64, img="https://assets.wfcdn.com/im/66812020/resize-h755-w755%5Ecompr-r85/2079/207964595/PA000011+2+Piece+Floating+Shelf+with+Towel+Bar.jpg")
    shelving2 = Furniture(name="Dunseith 2 Piece Circle Accent Shelf ", type="shelving", price=99, img="https://assets.wfcdn.com/im/09209163/resize-h800-w800%5Ecompr-r85/2381/238162761/Dunseith+2+Piece+Circle+Accent+Shelf+with+Live+Edge.jpg")
    shelving3 = Furniture(name="Mcspadden 2 Piece Triangle Solid Wood Floating Shelf", type="shelving", price=26, img="https://assets.wfcdn.com/im/41796878/resize-h755-w755%5Ecompr-r85/1350/135013734/Mcspadden+2+Piece+Triangle+Solid+Wood+Floating+Shelf.jpg")
    shelving4 = Furniture(name="Sporgh 2 Piece Pine Floating Shelf ", type="shelving", price=69, img="https://assets.wfcdn.com/im/04841429/resize-h755-w755%5Ecompr-r85/2547/254785423/Sporgh+2+Piece+Pine+Floating+Shelf.jpg")
    shelving5 = Furniture(name="Gipe 7 Piece Floating Shelf", type="shelving", price=60, img="https://assets.wfcdn.com/im/16283793/resize-h755-w755%5Ecompr-r85/1297/129797104/Gipe+7+Piece+Floating+Shelf.jpg")
    shelving6 = Furniture(name="Aberdeen 3 Piece Circle", type="shelving", price=46, img="https://assets.wfcdn.com/im/07343566/resize-h755-w755%5Ecompr-r85/1311/131151575/Aberdeen+3+Piece+Circle.jpg")
    shelving7 = Furniture(name="Midland 3 Piece Diamond Tiered Shelf", type="shelving", price=63, img="https://assets.wfcdn.com/im/98226571/resize-h800-w800%5Ecompr-r85/1652/165260646/Midland+3+Piece+Diamond+Tiered+Shelf.jpg")
    shelving8 = Furniture(name="Abramowski 3 Piece Floating Shelf Wall Shelves", type="shelving", price=37, img="https://assets.wfcdn.com/im/49402832/resize-h755-w755%5Ecompr-r85/2616/261682923/Abramowski+3+Piece+Floating+Shelf+Wall+Shelves+with+Invisible+Brackets.jpg")
    shelving9 = Furniture(name="5-Tier Vegetable Fruit Rack Snack Rack", type="shelving", price=129, img="https://assets.wfcdn.com/im/10552863/resize-h800-w800%5Ecompr-r85/2570/257071837/5-Tier+Vegetable+Fruit+Rack+Snack+Rack+Kitchen+Storage+Organizer+Basket+Stand.jpg")
    shelving10 = Furniture(name="Ohlson 3 Shelf 35in Display Unit ", type="shelving", price=126, img="https://assets.wfcdn.com/im/52919956/resize-h800-w800%5Ecompr-r85/2194/219422522/Ohlson+3+Shelf+35%22H+Display+Unit+with+Metal+Frame+in+Rustic+Wood+Grain+Finish.jpg")
    misc1 = Furniture(name="Ghost Portrait", type="misc", price=37, img="https://assets.wfcdn.com/im/74338792/resize-h755-w755%5Ecompr-r85/2790/279082258/%22+Ghost+Portrait+%22.jpg")
    misc2 = Furniture(name="White Orchid Tree Garden Of Branches ", type="misc", price=67, img="https://assets.wfcdn.com/im/27029744/resize-h755-w755%5Ecompr-r85/2475/247510314/Arunveer+%22+White+Orchid+Tree+Garden+Of+Branches+VII+%22.jpg")
    misc3 = Furniture(name="Abstract Textures Contemporary Black And White Modern Art", type="misc", price=124, img="https://assets.wfcdn.com/im/07387299/resize-h755-w755%5Ecompr-r85/2768/276836367/Geometric+Line+%22+Abstract+Textures+Contemporary+Black+And+White+Modern+Art+Calm+Warm+Extra+Large+Artwork+Pictures+%22.jpg")
    misc4 = Furniture(name="Linen Fern I", type="misc", price=72, img="https://assets.wfcdn.com/im/55864668/resize-h755-w755%5Ecompr-r85/2749/274931663/%22+Linen+Fern+I+%22+3+-+Pieces.jpg")
    misc5 = Furniture(name="Moderna Aluminum Table Vase", type="misc", price=45, img="https://assets.wfcdn.com/im/16119746/resize-h755-w755%5Ecompr-r85/2513/251358283/Moderna+Aluminum+Table+Vase.jpg")
    misc6 = Furniture(name="Mcquade Ceramic Table Vase", type="misc", price=21, img="https://assets.wfcdn.com/im/32300039/resize-h755-w755%5Ecompr-r85/1938/193881224/Mcquade+Ceramic+Table+Vase.jpg")
    misc7 = Furniture(name="Arianna Ceramic Floor Vase", type="misc", price=69, img="https://assets.wfcdn.com/im/01932331/resize-h755-w755%5Ecompr-r85/2581/258139488/Arianna+Ceramic+Floor+Vase.jpg")
    misc8 = Furniture(name="Euphemia Ceramic Floor Vase", type="misc", price=47, img="https://assets.wfcdn.com/im/76763805/resize-h755-w755%5Ecompr-r85/3767/37672405/Euphemia+Ceramic+Floor+Vase.jpg")
    misc9 = Furniture(name="Wood Picture Frame", type="misc", price=35, img="https://assets.wfcdn.com/im/00671207/resize-h755-w755%5Ecompr-r85/2577/257750172/Wood+Picture+Frame.jpg")
    misc10 = Furniture(name="Bane Wood Picture Frame", type="misc", price=63, img="https://assets.wfcdn.com/im/17502579/resize-h755-w755%5Ecompr-r85/1463/146315916/Bane+Wood+Picture+Frame.jpg")
    lighting1 = Furniture(name="Triplett 58'' Column Floor Lamp ", type="lighting", price=62, img="https://assets.wfcdn.com/im/01333360/resize-h755-w755%5Ecompr-r85/1057/105785027/Triplett+58%27%27+Column+Floor+Lamp.jpg")
    lighting2 = Furniture(name="62in Arched Floor Lamp ", type="lighting", price=61, img="https://assets.wfcdn.com/im/21564470/resize-h755-w755%5Ecompr-r85/2514/251452334/62%22+Arched+Floor+Lamp+with+Remote+Control+and+Bulb+Included.jpg")
    lighting3 = Furniture(name="Debbye 77in Chrome Arched Floor Lamp", type="lighting", price=97, img="https://assets.wfcdn.com/im/31112894/resize-h755-w755%5Ecompr-r85/1464/146409333/Debbye+77%27%27+Chrome+Arched+Floor+Lamp.jpg")
    lighting4 = Furniture(name="Coleford 65'' Black Tree Floor Lamp", type="lighting", price=116, img="https://assets.wfcdn.com/im/63093969/resize-h755-w755%5Ecompr-r85/2770/277040574/Coleford+65%27%27+Black+Tree+Floor+Lamp.jpg")
    lighting5 = Furniture(name="Snowhill 59'' Column Floor Lamp", type="lighting", price=127, img="https://assets.wfcdn.com/im/61439013/resize-h755-w755%5Ecompr-r85/2785/278575260/Snowhill+59%27%27+Column+Floor+Lamp.jpg")
    lighting6 = Furniture(name="Graeme Paden Dimmable Table Lamp", type="lighting", price=51, img="https://assets.wfcdn.com/im/81871166/resize-h755-w755%5Ecompr-r85/2137/213707278/Graeme+Paden+Dimmable+Table+Lamp+With+Usb+And+Touch+Control.jpg")
    lighting7 = Furniture(name="Sabb Ceramic Table Lamp", type="lighting", price=143, img="https://assets.wfcdn.com/im/25286329/resize-h755-w755%5Ecompr-r85/2181/218167548/Sabb+Ceramic+Table+Lamp.jpg")
    lighting8 = Furniture(name="Arcola Resin Table Lamp ", type="lighting", price=126, img="https://assets.wfcdn.com/im/15889791/resize-h755-w755%5Ecompr-r85/2485/248509383/Arcola+Resin+Table+Lamp.jpg")
    lighting9 = Furniture(name="Anazagene Modern Ceramic Table Lamp ", type="lighting", price=88, img="https://assets.wfcdn.com/im/15270802/resize-h755-w755%5Ecompr-r85/2656/265633868/Anazagene+Modern+Ceramic+Table+Lamp+Set%2C+Suitable+For+Living+Room%2C+Bedroom%2C+Office.jpg")
    lighting10 = Furniture(name="Gracieleigh Metal Table Lamp", type="lighting", price=64, img="https://assets.wfcdn.com/im/48488560/resize-h755-w755%5Ecompr-r85/2500/250077307/Gracieleigh+Metal+Table+Lamp.jpg")
    
    furnitures = [table1,table2,table3,table4,table5,table6,table7,table8,table9,table10,chair1,chair2,chair3,chair4,chair5,chair6,chair7,chair8,chair9,chair10,sofa1,sofa2,sofa3,sofa4,sofa5,sofa6,sofa7,sofa8,sofa9,sofa10,carpet1,carpet2,carpet3,carpet4,carpet5,carpet6,carpet7,carpet8,carpet9,carpet10,shelving1,shelving2,shelving3,shelving4,shelving5,shelving6,shelving7,shelving8,shelving9,shelving10,misc1,misc2,misc3,misc4,misc5,misc6,misc7,misc8,misc9,misc10,lighting1,lighting2,lighting3,lighting4,lighting5,lighting6,lighting7,lighting8,lighting9,lighting10]

    user1= User(name="nancy", username="pantz", password_hash="meow123")
    user2= User(name="justin", username="pidge", password_hash="maddy123")

    # project_furniture_table1 = project_furniture_table(project_id=1, furniture_id=1)
    # project_furniture_table2 = project_furniture_table(project_id=2, furniture_id=2)
    

    project1= Project(title="living room", budget=10000, description="This is for my living room", user_id=1)
    project2= Project(title="dining room", budget=15000, description="This is for my dining room", user_id=1)
    
    db.session.add_all(furnitures)
    db.session.add(user1)
    db.session.add(project1)
    db.session.add(user2)
    db.session.add(project2)

    db.session.commit()
    
    stmt = project_furniture_table.insert().values(project_id=project1.id, furniture_id=table1.id)
    db.session.execute(stmt)
    db.session.commit()
    
