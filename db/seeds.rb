# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  City.destroy_all
  User.destroy_all
  Host.destroy_all
  Request.destroy_all
  Review.destroy_all

  demo_user = User.create!(
    username: "Guest",
    password: "demopassword",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489627245/guest_image_gkpagy.png"
  )

  andrew = User.create!(
    username: "Andrew",
    password: "andrew",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489978310/headshots/andrew_profile_head.jpg"
  )

  jane = User.create!(
    username: "Jane",
    password: "andrew",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489874358/headshots/profile_photo1_head.png"
  )

  carlos = User.create!(
    username: "Carlos",
    password: "andrew",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489874768/headshots/profile_photo2_head.png"
  )

  skeletor_user = User.create!(
    username: "Skeletor",
    password: "andrew",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489979513/HeMan/skeletor.png"
  )

  liono_user = User.create!(
    username: "Liono",
    password: "andrew",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489717711/ThunderCats/liono.png"
  )

  cheer_bear_user = User.create!(
    username: "CheerBear",
    password: "andrew",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490243579/CareBears/cheer_bear.png"
  )


################



  smurf_village = City.create!(
    name: "Smurf Village",
    description: "The Smurf Village is the home residence for the Smurfs. It is located in a forest, the exact location of which is unknown to all but Smurfs. It is protected by a magical field that renders it invisible to all outsiders.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489627724/CityImages/smurf_village.jpg",
    banner_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489627879/CityImages/smurf_village_banner.jpg",
    map_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489628820/CityImages/smurf_village_map.jpg",
    lat: 34.07086232376631,
    lng: -118.19091796875
  )

  thundera = City.create!(
    name: "Thundera",
    description: "Thundera is the homeworld of the Thunderians. Before its destruction there was such great peace - particularly among the Cats - that the natives did not even need to worry about covering themselves in protection from attack or the elements.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489629362/CityImages/thundera.jpg",
    banner_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489628990/CityImages/thundera_banner.png",
    map_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489629414/CityImages/thundera_map.jpg",
    lat: 19.40443049681278,
    lng: -99.129638671875
  )

  kingdom_of_caring = City.create!(
    name: "Kingdom of Caring",
    description: "The Kingdom of Caring is an establishment of the Care Bear Family. It may or may not be a monarchy. It is known to include the Bears' Care-a-Lot and the Cousins' Forest of Feelings.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489629659/CityImages/kingdom_of_caring.jpg",
    banner_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489629831/CityImages/kingdom_of_caring_banner.jpg",
    map_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489630009/CityImages/kingdom_of_caring_map.jpg",
    lat: -22.93025503698591,
    lng: -43.1982421875
  )

  eternia = City.create!(
    name: "Eternia",
    description: "Eternia is at the center of the universe. At the planet's center lies the Star Seed, a spark left over from the creation of the universe. Possessing it would grant infinite power to its holder.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489630328/CityImages/eternia.jpg",
    banner_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489630507/CityImages/eternia_banner.png",
    map_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489630876/CityImages/eternia_map.jpg",
    lat: 30.021543509740027,
    lng: 31.146240234375
  )

  equestria = City.create!(
    name: "Equestria",
    description: "Equestria is inhabited by magical ponies and other talking creatures, such as griffons and dragons. Other animals and creatures also live in Equestria.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489631982/CityImages/equestria.jpg",
    banner_url: "https://res.cloudinary.com/couchsmurfing/image/upload/c_crop,h_815,x_61,y_281/v1489631911/CityImages/equestria_banner.png",
    map_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489631222/CityImages/equestria_map.jpg",
    lat: 48.88639177703194,
    lng: 2.28515625
  )

  cybertron = City.create!(
    name: "Cybertron",
    description: "Cybertron is the home planet of the Transformers and the body of their creator, Primus. Cybertron is a shining metal, technological world; a planet of towering future cities without end and vast metallic plains, spiraling metal mountains and bottomless neon-lit chasms.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490060251/CityImages/cybertron.jpg",
    banner_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490060310/CityImages/cybertron_banner.jpg",
    map_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490060375/CityImages/cybertron_map.jpg",
    lat: 35.70414710206052,
    lng: 139.72000122070312
  )

  new_york = City.create!(
    name: "New York City",
    description: "The 'Big Apple' is home to millionaires and artists alike, but most importantly, it's sewers host the baddest bunch of teenage mutants around.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490060886/CityImages/new_york.jpg",
    banner_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490061068/CityImages/new_york_banner.jpg",
    map_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490061231/CityImages/new_york_map.jpg",
    lat: 40.753499070431374,
    lng: -73.92631530761719
  )

  classified = City.create!(
    name: "Classified",
    description: "We cannot reveal the location of these hosts, due to issues of national security; you are invited to book your stay nonetheless, as long as you are willing to be blindfolded for the journey there.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490061968/CityImages/gi_joe_city.jpg",
    banner_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490062159/CityImages/gi_joe_banner.png",
    map_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490062240/CityImages/gi_joe_map.jpg",
    lat: 33.43144133557529,
    lng: -135
  )

  arus = City.create!(
    name: "Arus",
    description: "Arus is a planet inhabited by a humanoid species, although other species, such as the Space Mice, are represented as part of the planet's population. Arus serves as home base for Voltron and the Voltron Force.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490062549/CityImages/arus.png",
    banner_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490062616/CityImages/arus_banner.png",
    map_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490062863/CityImages/arus_map.jpg",
    lat: 19.05173366503917,
    lng: 72.88330078125
  )



############

  papa_smurf = Host.create!(
    city_id: smurf_village.id,
    name: "Papa Smurf",
    age: 62,
    sex: "Male",
    city: "Smurf Village",
    location: "Papa Smurf's House",
    lat: 34.175453097578526,
    lng: -118.30902099609375,
    interests: ["Leadership", "Beards"],
    about_me: "I'm a fun-loving grandfather-type who has his hands full managing a crazy bunch of my mostly male offspring",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489716912/Smurfs/papa_smurf.png",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489717100/Smurfs/Houses/smurf_house_1.png",
    status: "Accepting Guests"
  )

  smurfette = Host.create!(
    city_id: smurf_village.id,
    name: "Smurfette",
    age: 24,
    sex: "Female",
    city: "Smurf Village",
    location: "Smurfette's House",
    lat: 34.020794936018724,
    lng: -118.35845947265625,
    interests: ["Hair", "Flowers", "Chastity"],
    about_me: "I'm a happy-go-lucky type of girl who gets a lot of attention from the guys. I enjoy spending my time picking flowers and creating tension in my small village.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489717334/Smurfs/smurfette.png",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489717449/Smurfs/Houses/smurfettes_house.jpg",
    status: "Accepting Guests"
  )

  liono = Host.create!(
    city_id: thundera.id,
    name: "Liono",
    age: 26,
    sex: "Male",
    city: "Thundera",
    location: "ThunderCats Lair",
    lat: 19.435514339097825,
    lng: -99.18731689453125,
    interests: ["Swords", "Leadership", "Lasers"],
    about_me: "I'm pretty busy battling enemies most days of the week, although I try to carve out some time now and then to enjoy a craft catnip.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489717711/ThunderCats/liono.png",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489717795/ThunderCats/Houses/thundercats_lair.jpg",
    status: "Maybe Accepting Guests"
  )

  cheetara = Host.create!(
    city_id: thundera.id,
    name: "Cheetara",
    age: 23,
    sex: "Female",
    city: "Thundera",
    location: "ThunderCats Lair",
    lat: 19.4303341116379,
    lng: -99.07196044921875,
    interests: ["Running", "Bo Staff", "Leotards"],
    about_me: "I'm a speedy gal who knows how to defend herself. I'm heavily involved in women's rights activism. Can you keep up?",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489718114/ThunderCats/cheetara.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489717795/ThunderCats/Houses/thundercats_lair.jpg",
    status: "Accepting Guests"
  )

  mummra = Host.create!(
    city_id: thundera.id,
    name: "Mumm-Ra",
    age: 100000000,
    sex: "Mummy",
    city: "Thundera",
    location: "Black Pyramids",
    lat: 19.4665922322076,
    lng: -98.822021484375,
    interests: ["Incantation", "Minions", "Cotton"],
    about_me: "I spend most of my time lounging about my sarcophagus, but I'm always up for a night club. I can transform into a muscular fiend.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490244327/ThunderCats/mummra.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490244381/ThunderCats/Houses/black_pyramids.jpg",
    status: "Not Accepting Guests"
  )

  grumpy_bear = Host.create!(
    city_id: kingdom_of_caring.id,
    name: "Grumpy Bear",
    age: 30,
    sex: "Male",
    city: "Kingdom of Caring",
    location: "Rain Cloud",
    lat: -22.9381596393164,
    lng: -43.2586669921875,
    interests: ["Frowning", "Rain"],
    about_me: "I don't understand what there is to be so happy about. I prefer cold rainy days curled up with some tea and my existential angst.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489718402/CareBears/grumpy_bear.png",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489718780/CareBears/Houses/grumpy_house.jpg",
    status: "Not Accepting Guests"
  )

  cheer_bear = Host.create!(
    city_id: kingdom_of_caring.id,
    name: "Cheer Bear",
    age: 22,
    sex: "Female",
    city: "Kingdom of Caring",
    location: "Rainbow",
    lat: -22.84200839859578,
    lng: -42.8411865234375,
    interests: ["Happiness", "Optimism"],
    about_me: "I think everything is great all the time. I love it when the sun shines, and when you come to stay with me, we'll just sit around and smile at how fabulous life is :)",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490243579/CareBears/cheer_bear.png",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490243631/CareBears/Houses/rainbow.jpg",
    status: "Accepting Guests"
  )

  brave_heart_lion = Host.create!(
    city_id: kingdom_of_caring.id,
    name: "Brave Heart Lion",
    age: 28,
    sex: "Male",
    city: "Kingdom of Caring",
    location: "Forest of Feelings",
    lat: -22.52777979869455,
    lng: -43.08563232421875,
    interests: ["Bravery", "Pride", "Crowns"],
    about_me: "My job is to help everyone be brave. I love combing my hair and roaring into the sky. My catchphrase is 'Charge!'.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/c_crop,g_east,h_502,w_397/v1490243971/CareBears/brave_heart_lion.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490244056/CareBears/Houses/forest_of_feelings.jpg",
    status: "Accepting Guests"
  )

  he_man = Host.create!(
    city_id: eternia.id,
    name: "Adam/He-Man",
    age: 27,
    sex: "Male",
    city: "Eternia",
    location: "The Royal Palace",
    lat: 30.116621582819374,
    lng: 31.13525390625,
    interests: ["Swords", "Alter-Egos", "Castles"],
    about_me: "I'm a prince. Also into Crossfit. I get all my life advice from a lady with wings, and I have a have a mortal enemy named Skeletor.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489979034/HeMan/he-man.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489979738/HeMan/houses/royal-palace.jpg",
    status: "Accepting Guests"
  )

  skeletor = Host.create!(
    city_id: eternia.id,
    name: "Skeletor",
    age: 42,
    sex: "Male",
    city: "Eternia",
    location: "Snake Mountain",
    lat: 29.625996273660785,
    lng: 31.66259765625,
    interests: ["Evil", "Mutants", "Castles"],
    about_me: "I spend most of my time trying to get into Castle Grayskull so I can take over the Universe. Not into skincare.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489979513/HeMan/skeletor.png",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489979607/HeMan/houses/snake-mountain.jpg",
    status: "Not Accepting Guests"
  )

  sorceress = Host.create!(
    city_id: eternia.id,
    name: "Sorceress",
    age: 546,
    sex: "Female",
    city: "Eternia",
    location: "Castle Grayskull",
    lat: 31.66259765625,
    lng: 31.376953125,
    interests: ["Wisdom", "Flying"],
    about_me: "If you catch me out and about, I might look like a falcon; but come over to my place, and you'll see what an exceptionally powerful force I am.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489979993/HeMan/sorceress.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1489979119/HeMan/houses/castle-grayskull.jpg",
    status: "Accepting Guests"
  )



  fizzy = Host.create!(
    city_id: equestria.id,
    name: "Fizzy",
    age: 12,
    sex: "Female",
    city: "Equestria",
    location: "Waterfall",
    lat: 48.832181625698475,
    lng: 2.164306640625,
    interests: ["Silliness", "Bubbles", "Ice Cream"],
    about_me: "I'm a silly little pony who is always stumbling or bumping into things. One hot afternoon on my way to the Waterfall for a swim, I tripped over a tree stump and landed on a bed of moss. The moss was so soft and comfortable that I decided to take a nap.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/c_crop,g_east,h_339,w_366,x_0/v1490150251/MyLittlePony/fizzy.png",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490150812/MyLittlePony/Houses/waterfall.jpg",
    status: "Accepting Guests"
  )

  cherries_jubilee = Host.create!(
    city_id: equestria.id,
    name: "Cherries Jubilee",
    age: 11,
    sex: "Female",
    city: "Equestria",
    location: "Paradise Estates Orchard",
    lat: 48.84302835299516,
    lng: 2.296142578125,
    interests: ["Strictness", "Sports", "Cherries"],
    about_me: "Big, red juicy cherries are my favorite snack. I carefully tend to the cherry trees in the orchard and enjoy making beautiful decorations from the pretty pink cherry blossom petals. In the Cherry Blossom parade my float is always the prettiest.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490151148/MyLittlePony/cherries_jubilee.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/c_crop,g_east,h_291,w_323/v1490151298/MyLittlePony/Houses/orchard.png",
    status: "Accepting Guests"
  )

  optimus_prime = Host.create!(
    city_id: cybertron.id,
    name: "Optimus Prime",
    age: 25300004,
    sex: "Robot",
    city: "Cybertron",
    location: "Processing Core",
    lat: 35.706377408871774,
    lng: 139.66644287109375,
    interests: ["Big Rigs", "AllSpark", "Auto-Tune"],
    about_me: "Originally a mere civilian, I was chosen by the Matrix to command, the first in a number of heavy burdens I have been forced to bear. Every casualty, human or Cybertronian, weighs heavily on my spark. I do not show this side to my soldiers, and I never succumb to despair.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490151786/Transformers/optimus_prime.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490151855/Transformers/Houses/processing_core.jpg",
    status: "Accepting Guests"
  )

  megatron = Host.create!(
    city_id: cybertron.id,
    name: "Megatron",
    age: 23508737,
    sex: "Robot",
    city: "Cybertron",
    location: "Decepticons Base",
    lat: 35.092945313732635,
    lng: 139.49615478515625,
    interests: ["Jets", "Cannons", "High-pitched voices"],
    about_me: "Leader of the Decepticons. I feel great contempt for other Transformers who, I believe, betray their proud heritage by demanding peace and cooperation with weaker life forms. It is the destiny of the Decepticons to bring order to the universe through conquest.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490235774/Transformers/megatron.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490235862/Transformers/Houses/underwater_base.jpg",
    status: "Maybe Accepting Guests"
  )

  bumblebee = Host.create!(
    city_id: cybertron.id,
    name: "Bumblebee",
    age: 14563490,
    sex: "Robot",
    city: "Cybertron",
    location: "Decepticons Base",
    lat: 36.07130229942241,
    lng: 138.77655029296875,
    interests: ["Volkswagens", "Friendship", "FM Radio"],
    about_me: "Some of my best friends are humans! While my stature allows me to do my job better than most Autobots could manage, I am self-conscious about my size. Maybe this is why I makes fast friends among the humans. I look up (so to speak) to the other Autobots",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490236060/Transformers/bumblebee.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490236322/Transformers/Houses/manganese_mountains.jpg",
    status: "Accepting Guests"
  )

  starscream = Host.create!(
    city_id: cybertron.id,
    name: "Starscream",
    age: 16539874,
    sex: "Robot",
    city: "Cybertron",
    location: "Sea of Rust",
    lat: 36.25756282630298,
    lng: 140.77056884765625,
    interests: ["Betrayal", "Science", "Immortality"],
    about_me: "Self-proclaimed pride of the Cybertron War Academy, I'm famous not only for my incredible skill, but also for my limitless ambition. I believe I would be a much better leader than Megatron, but don't tell him that.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490236566/Transformers/starscream.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490237179/Transformers/sea_of_rust.jpg",
    status: "Accepting Guests"
  )

  leonardo = Host.create!(
    city_id: new_york.id,
    name: "Leonardo",
    age: 15,
    sex: "Male",
    city: "New York City",
    location: "Sewers",
    lat: 40.876141411413684,
    lng: -73.88580322265625,
    interests: ["Leadership", "Swords", "Humorlessness"],
    about_me: "I'm the serious one of the bunch. If you stay with me, we'll have fun doing chores and meditating on responsibility. No hanky-panky",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490237396/TMNT/leonardo.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490237584/TMNT/Houses/turtles_lair.jpg",
    status: "Accepting Guests"
  )

  michelangelo = Host.create!(
    city_id: new_york.id,
    name: "Michelangelo",
    age: 15,
    sex: "Male",
    city: "New York City",
    location: "Pizza Shop",
    lat: 40.80965166748853,
    lng: -73.92974853515625,
    interests: ["Numchuks", "Partying"],
    about_me: "They call me the Party Dude. Not really into cleaning up, or doing what other people tell me to. Don't be a square, and we'll have a great time.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490237752/TMNT/michelangelo.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490237822/TMNT/Houses/pizza_shop.png",
    status: "Accepting Guests"
  )

  cobra_commander = Host.create!(
    city_id: classified.id,
    name: "Cobra Commander",
    age: 45,
    sex: "Male",
    city: "Classified",
    location: "Cobra Headquarters",
    lat: 33.747180448149855,
    lng: -135.472412109375,
    interests: ["Face masks", "Ululation"],
    about_me: "I think I'm a great boss, but no one seems to respect me. I have a huge crush on one of my employees but she never seems to notice me; maybe it's because of my shiny face.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490240124/GIJoe/cobra_commander.png",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490240180/GIJoe/Houses/cobra_base.jpg",
    status: "Accepting Guests"
  )

  sgt_slaughter = Host.create!(
    city_id: classified.id,
    name: "Sgt. Slaughter",
    age: 41,
    sex: "Male",
    city: "Classified",
    location: "Boot Camp",
    lat: 33.408516828002675,
    lng: -134.5330810546875,
    interests: ["Yelling", "Initmidation", "Duffel bags"],
    about_me: "Attention maggot! No slacking off when you stay with me, we'll be up at dawn for some morning exercise. If you can't handle the heat, stay out of my living room. Drop and give me twenty!",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490240429/GIJoe/sgt_slaughter.png",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490240531/GIJoe/Houses/boot_camp.jpg",
    status: "Accepting Guests"
  )

  scarlett = Host.create!(
    city_id: classified.id,
    name: "Scarlett",
    age: 27,
    sex: "Female",
    city: "Classified",
    location: "Archery Range",
    lat: 33.72890830547334,
    lng: -134.5770263671875,
    interests: ["Crossbows", "Women's rights"],
    about_me: "My red hair isn't as firey as my personality. Don't cross me, and I won't crossbow you. Dating a blind guy, but he's a ninja around the house.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490240925/GIJoe/scarlett.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490241012/GIJoe/Houses/archery.jpg",
    status: "Accepting Guests"
  )

  keith_kogane = Host.create!(
    city_id: arus.id,
    name: "Captain Kogane",
    age: 22,
    sex: "Male",
    city: "Arus",
    location: "Pilot's Lounge",
    lat: 19.4665922322076,
    lng: 72.872314453125,
    interests: ["Pondering", "Strategy"],
    about_me: "Commander and leader of the Voltron Force. I pilot the black lion. I'm a quiet individual who spends much of my time pondering my decisions, thinking up new strategies. I also have a hobby of reading books.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490242116/keith_ojvboa.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490242231/Voltron/Houses/pilot_lounge.jpg",
    status: "Accepting Guests"
  )

  pidge = Host.create!(
    city_id: arus.id,
    name: "Pidge",
    age: 12,
    sex: "Male",
    city: "Arus",
    location: "Science Lab",
    lat: 19.041348796589016,
    lng: 73.3502197265625,
    interests: ["Leftys", "Precociousness"],
    about_me: "My home planet, Balto, was destroyed by nuclear missiles from King Zarkon. I graduated from the academy at a young age; my specialty is science. I am well-trained in martial arts, and I'm not afraid to speak my mind, especially to villains.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490242677/Voltron/pidge.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490243016/Voltron/Houses/science.jpg",
    status: "Accepting Guests"
  )

  princess_allura = Host.create!(
    city_id: arus.id,
    name: "Princess Allura",
    age: 19,
    sex: "Female",
    city: "Arus",
    location: "Royal Palace",
    lat: 19.02057711096681,
    lng: 72.6910400390625,
    interests: ["Romance", "Telepathy", "Necromancy"],
    about_me: "Though a bit naïve, especially with matters of romance, I am a strong-willed person, and am very capable of ruling my planet, though some tend to doubt this ability. I have feelings for Keith.",
    image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490243290/Voltron/princess_allura.jpg",
    house_image_url: "https://res.cloudinary.com/couchsmurfing/image/upload/v1490243350/Voltron/palace.png",
    status: "Accepting Guests"
  )





##########################


  review1 = Review.create!(
    user_id: demo_user.id,
    host_id: papa_smurf.id,
    body: "Had trouble finding the place, and the bed was too small; but everyone I met was really nice."
  )

  review2 = Review.create!(
    user_id: jane.id,
    host_id: papa_smurf.id,
    body: "Reminded me of my grandpa! I love you Papa Smurf! See you next time!"
  )

  review3 = Review.create!(
    user_id: cheer_bear_user.id,
    host_id: he_man.id,
    body: "I just had the most wonderful time staying with Adam. What big muscles he has!"
  )

  review4 = Review.create!(
    user_id: carlos.id,
    host_id: liono.id,
    body: "Liono was super cool, but I was sneezing the whole time I was there. Guess I should have thought about the fact that I'm allergic to cats :("
  )

  review5 = Review.create!(
    user_id: skeletor_user.id,
    host_id: grumpy_bear.id,
    body: "What a downer! It was a beautiful day outside, and all Grumpy Bear wanted to do was listen to Morrissey."
  )

  review6 = Review.create!(
    user_id: demo_user.id,
    host_id: fizzy.id,
    body: "I'm a little concerned with how much high-fructose corn syrup Fizzy consumes..."
  )

  review7 = Review.create!(
    user_id: jane.id,
    host_id: leonardo.id,
    body: "Leo showed me around the city on a skateboard. What a wiz in the kitchen! Such knife skills!"
  )

  review8 = Review.create!(
    user_id: liono_user.id,
    host_id: cobra_commander.id,
    body: "Cobra Commander and I had a pretty good time together, but I think he suffers from low self-esteem."
  )

  review9 = Review.create!(
    user_id: demo_user.id,
    host_id: smurfette.id,
    body: "Smurfette is the life of the party, for sure. She's a little cranky after a night out at the club, but mimosa brunch was so much fun! "
  )

  review10 = Review.create!(
    user_id: carlos.id,
    host_id: cheetara.id,
    body: "If you're looking for a jogging partner, Cheetara will keep you on your toes. She also swings a mean stick."
  )

  review11 = Review.create!(
    user_id: skeletor_user.id,
    host_id: cheer_bear.id,
    body: "Too cheery."
  )

  review12 = Review.create!(
    user_id: demo_user.id,
    host_id: brave_heart_lion.id,
    body: "Had the best time running around town confronting criminals wiht Brave Heart Lion. Some people said it was foolish, but we were just being brave!"
  )

  review13 = Review.create!(
    user_id: jane.id,
    host_id: he_man.id,
    body: "We had such a romantic dinner at the Royal Palace... I think there might be a spark between us. I love you Adam!"
  )

  review14 = Review.create!(
    user_id: cheer_bear_user.id,
    host_id: skeletor.id,
    body: "A little obsessive... All he would talk about was some castle he wanted to conquer. I think he needs to re-evaluate his life goals."
  )

  review15 = Review.create!(
    user_id: skeletor_user.id,
    host_id: sorceress.id,
    body: "Damn you sorceress! I thought if you let me sleep on your couch, I would finally be able to take over Castle Grayskull, but you put me to sleep right after dinner with a magic spell!"
  )

  review16 = Review.create!(
    user_id: demo_user.id,
    host_id: cherries_jubilee.id,
    body: "I got to stay with Cherries Jubilee during harvest season! We gorged ourselves on the sweetest fruit you can imagine. All the clopping around in the morning woke me up though."
  )

  review17 = Review.create!(
    user_id: andrew.id,
    host_id: optimus_prime.id,
    body: "Optimus was so inspirational. Super into country music and strange forms of energy."
  )

  review18 = Review.create!(
    user_id: demo_user.id,
    host_id: megatron.id,
    body: "Total meanie. House smelled like jet fuel."
  )

  review19 = Review.create!(
    user_id: carlos.id,
    host_id: bumblebee.id,
    body: "Oh my gosh, turn off the radio! Cute car though."
  )

  review20 = Review.create!(
    user_id: liono_user.id,
    host_id: starscream.id,
    body: "Had a great time talking about quantum physics with Starscream."
  )

  review21 = Review.create!(
    user_id: demo_user.id,
    host_id: leonardo.id,
    body: "Blue is my favorite color too!"
  )

  review22 = Review.create!(
    user_id: cheer_bear_user.id,
    host_id: michelangelo.id,
    body: "Cowabunga! I thought New York would be scary, but Michelangelo showed me a great time. Ate tons of pizza!"
  )

  review23 = Review.create!(
    user_id: skeletor_user.id,
    host_id: cobra_commander.id,
    body: "You've got a new recruit here! Cobra LA-LA-LA-LA!!!"
  )

  review24 = Review.create!(
    user_id: andrew.id,
    host_id: sgt_slaughter.id,
    body: "I really appreciated the Sgt.'s sense of structure. I'll never make my bed the same way again."
  )

  review25 = Review.create!(
    user_id: carlos.id,
    host_id: scarlett.id,
    body: "What's up Scarlett! Shout out to you and Snake Eyes!"
  )

  review26 = Review.create!(
    user_id: jane.id,
    host_id: keith_kogane.id,
    body: "At first I was scared of the giant robotic lion, but Keith really has a calming demeanor and soon I was riding on top!"
  )

  review27 = Review.create!(
    user_id: andrew.id,
    host_id: pidge.id,
    body: "Pretty cool for a 12 year old. We talked differential equations and reaction-diffusion models."
  )

  review28 = Review.create!(
    user_id: skeletor_user.id,
    host_id: princess_allura.id,
    body: "I was surprised to find out we both have an interest in communing with the dead. I think I'm in love."
  )


  #########################


  request1 = Request.create!(
    user_id: demo_user.id,
    host_id: papa_smurf.id,
    start_date: "Thu, 23 Jun 2017 19:00:00 UTC +00:00",
    end_date: "Fri, 28 Aug 2017 19:00:00 UTC +00:00",
  )
  request2 = Request.create!(
    user_id: demo_user.id,
    host_id: skeletor.id,
    start_date: "Thu, 23 Mar 2017 19:00:00 UTC +00:00",
    end_date: "Fri, 28 Apr 2017 19:00:00 UTC +00:00",
  )

end
