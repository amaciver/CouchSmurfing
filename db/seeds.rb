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

  demo_user = User.create!(
    username: "Guest",
    password: "demopassword",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489627245/guest_image_gkpagy.png"
  )

  andrew = User.create!(
    username: "Andrew",
    password: "andrew",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489978310/headshots/andrew_profile_head.jpg"
  )

  jane = User.create!(
    username: "Jane",
    password: "andrew",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489874358/headshots/profile_photo1_head.png"
  )

  carlos = User.create!(
    username: "Carlos",
    password: "andrew",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489874768/headshots/profile_photo2_head.png"
  )


################



  smurf_village = City.create!(
    name: "Smurf Village",
    description: "The Smurf Village is the home residence for the Smurfs. It is located in a forest, the exact location of which is unknown to all but Smurfs. It is protected by a magical field that renders it invisible to all outsiders.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489627724/CityImages/smurf_village.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489627879/CityImages/smurf_village_banner.jpg",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489628820/CityImages/smurf_village_map.jpg",
    lat: 34.07086232376631,
    lng: -118.19091796875
  )

  thundera = City.create!(
    name: "Thundera",
    description: "Thundera is the homeworld of the Thunderians. Before its destruction there was such great peace - particularly among the Cats - that the natives did not even need to worry about covering themselves in protection from attack or the elements.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629362/CityImages/thundera.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489628990/CityImages/thundera_banner.png",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629414/CityImages/thundera_map.jpg",
    lat: 19.40443049681278,
    lng: -99.129638671875
  )

  kingdom_of_caring = City.create!(
    name: "Kingdom of Caring",
    description: "The Kingdom of Caring is an establishment of the Care Bear Family. It may or may not be a monarchy. It is known to include the Bears' Care-a-Lot and the Cousins' Forest of Feelings.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629659/CityImages/kingdom_of_caring.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629831/CityImages/kingdom_of_caring_banner.jpg",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630009/CityImages/kingdom_of_caring_map.jpg",
    lat: -22.93025503698591,
    lng: -43.1982421875
  )

  eternia = City.create!(
    name: "Eternia",
    description: "Eternia is at the center of the universe. At the planet's center lies the Star Seed, a spark left over from the creation of the universe. Possessing it would grant infinite power to its holder.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630328/CityImages/eternia.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630507/CityImages/eternia_banner.png",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630876/CityImages/eternia_map.jpg",
    lat: 30.021543509740027,
    lng: 31.146240234375
  )

  equestria = City.create!(
    name: "Equestria",
    description: "Equestria is inhabited by magical ponies and other talking creatures, such as griffons and dragons. Other animals and creatures also live in Equestria.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489631982/CityImages/equestria.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/c_crop,h_815,x_61,y_281/v1489631911/CityImages/equestria_banner.png",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489631222/CityImages/equestria_map.jpg",
    lat: 48.88639177703194,
    lng: 2.28515625
  )

  cybertron = City.create!(
    name: "Cybertron",
    description: "Cybertron is the home planet of the Transformers and the body of their creator, Primus. Cybertron is a shining metal, technological world; a planet of towering future cities without end and vast metallic plains, spiraling metal mountains and bottomless neon-lit chasms.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490060251/CityImages/cybertron.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490060310/CityImages/cybertron_banner.jpg",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490060375/CityImages/cybertron_map.jpg",
    lat: 35.70414710206052,
    lng: 139.72000122070312
  )

  new_york = City.create!(
    name: "New York City",
    description: "The 'Big Apple' is home to millionaires and artists alike, but most importantly, it's sewers host the baddest bunch of teenage mutants around.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490060886/CityImages/new_york.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490061068/CityImages/new_york_banner.jpg",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490061231/CityImages/new_york_map.jpg",
    lat: 40.753499070431374,
    lng: -73.92631530761719
  )

  classified = City.create!(
    name: "Classified",
    description: "We cannot reveal the location of these hosts, due to issues of national security; you are invited to book your stay nonetheless, as long as you are willing to be blindfolded for the journey there.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490061968/CityImages/gi_joe_city.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490062159/CityImages/gi_joe_banner.png",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490062240/CityImages/gi_joe_map.jpg",
    lat: 33.43144133557529,
    lng: -135
  )

  arus = City.create!(
    name: "Arus",
    description: "Arus is a planet inhabited by a humanoid species, although other species, such as the Space Mice, are represented as part of the planet's population. Arus serves as home base for Voltron and the Voltron Force.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490062549/CityImages/arus.png",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490062616/CityImages/arus_banner.png",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490062863/CityImages/arus_map.jpg",
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
    lat: 37.78156937014928,
    lng: -122.41413116455078,
    interests: ["Leadership", "Beards"],
    about_me: "I'm a fun-loving grandfather-type who has his hands full managing a crazy bunch of my mostly male offspring",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489716912/Smurfs/papa_smurf.png",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489717100/Smurfs/Houses/smurf_house_1.png",
    status: "Accepting Guests"
  )

  smurfette = Host.create!(
    city_id: smurf_village.id,
    name: "Smurfette",
    age: 24,
    sex: "Female",
    city: "Smurf Village",
    location: "Smurfette's House",
    lat: 20,
    lng: 20,
    interests: ["Hair", "Flowers", "Chastity"],
    about_me: "I'm a happy-go-lucky type of girl who gets a lot of attention from the guys. I enjoy spending my time picking flowers and creating tension in my small village.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489717334/Smurfs/smurfette.png",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489717449/Smurfs/Houses/smurfettes_house.jpg",
    status: "Accepting Guests"
  )

  liono = Host.create!(
    city_id: thundera.id,
    name: "Liono",
    age: 26,
    sex: "Male",
    city: "Thundera",
    location: "ThunderCats Lair",
    lat: 20,
    lng: 20,
    interests: ["Swords", "Leadership", "Lasers"],
    about_me: "I'm pretty busy battling enemies most days of the week, although I try to carve out some time now and then to enjoy a craft catnip.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489717711/ThunderCats/liono.png",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489717795/ThunderCats/Houses/thundercats_lair.jpg",
    status: "Maybe Accepting Guests"
  )

  cheetara = Host.create!(
    city_id: thundera.id,
    name: "Cheetara",
    age: 23,
    sex: "Female",
    city: "Thundera",
    location: "ThunderCats Lair",
    lat: 20,
    lng: 20,
    interests: ["Running", "Bo Staff", "Leotards"],
    about_me: "I'm a speedy gal who knows how to defend herself. I'm heavily involved in women's rights activism. Can you keep up?",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489718114/ThunderCats/cheetara.jpg",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489717795/ThunderCats/Houses/thundercats_lair.jpg",
    status: "Accepting Guests"
  )

  grumpy_bear = Host.create!(
    city_id: kingdom_of_caring.id,
    name: "Grumpy Bear",
    age: 30,
    sex: "Male",
    city: "Kingdom of Caring",
    location: "Rain Cloud",
    lat: 20,
    lng: 20,
    interests: ["Frowning", "Rain"],
    about_me: "I don't understand what there is to be so happy about. I prefer cold rainy days curled up with some tea and my existential angst.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489718402/CareBears/grumpy_bear.png",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489718780/CareBears/Houses/grumpy_house.jpg",
    status: "Not Accepting Guests"
  )

  he_man = Host.create!(
    city_id: eternia.id,
    name: "Adam/He-Man",
    age: 27,
    sex: "Male",
    city: "Eternia",
    location: "The Royal Palace",
    lat: 20,
    lng: 20,
    interests: ["Swords", "Alter-Egos", "Castles"],
    about_me: "I'm a prince. Also into Crossfit. I get all my life advice from a lady with wings, and I have a have a mortal enemy named Skeletor.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489979034/HeMan/he-man.jpg",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489979738/HeMan/houses/royal-palace.jpg",
    status: "Accepting Guests"
  )

  skeletor = Host.create!(
    city_id: eternia.id,
    name: "Skeletor",
    age: 42,
    sex: "Male",
    city: "Eternia",
    location: "Snake Mountain",
    lat: 20,
    lng: 20,
    interests: ["Evil", "Mutants", "Castles"],
    about_me: "I spend most of my time trying to get into Castle Grayskull so I can take over the Universe. Not into skincare.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489979513/HeMan/skeletor.png",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489979607/HeMan/houses/snake-mountain.jpg",
    status: "Not Accepting Guests"
  )

  sorceress = Host.create!(
    city_id: eternia.id,
    name: "Sorceress",
    age: 546,
    sex: "Female",
    city: "Eternia",
    location: "Castle Grayskull",
    lat: 20,
    lng: 20,
    interests: ["Wisdom", "Flying"],
    about_me: "If you catch me out and about, I might look like a falcon; but come over to my place, and you'll see what an exceptionally powerful force I am.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489979993/HeMan/sorceress.jpg",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489979119/HeMan/houses/castle-grayskull.jpg",
    status: "Accepting Guests"
  )



  fizzy = Host.create!(
    city_id: equestria.id,
    name: "Fizzy",
    age: 12,
    sex: "Female",
    city: "Eternia",
    location: "Waterfall",
    lat: 30,
    lng: 20,
    interests: ["Silliness", "Bubbles", "Ice Cream"],
    about_me: "I'm a silly little pony who is always stumbling or bumping into things. One hot afternoon on my way to the Waterfall for a swim, I tripped over a tree stump and landed on a bed of moss. The moss was so soft and comfortable that I decided to take a nap.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/c_crop,g_east,h_339,w_366,x_0/v1490150251/MyLittlePony/fizzy.png",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490150812/MyLittlePony/Houses/waterfall.jpg",
    status: "Accepting Guests"
  )

  cherries_jubilee = Host.create!(
    city_id: equestria.id,
    name: "Cherries Jubilee",
    age: 11,
    sex: "Female",
    city: "Eternia",
    location: "Paradise Estates Orchard",
    lat: 30,
    lng: 20,
    interests: ["Strictness", "Sports", "Cherries"],
    about_me: "Big, red juicy cherries are my favorite snack. I carefully tend to the cherry trees in the orchard and enjoy making beautiful decorations from the pretty pink cherry blossom petals. In the Cherry Blossom parade my float is always the prettiest.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490151148/MyLittlePony/cherries_jubilee.jpg",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/c_crop,g_east,h_291,w_323/v1490151298/MyLittlePony/Houses/orchard.png",
    status: "Accepting Guests"
  )

  optimus_prime = Host.create!(
    city_id: cybertron.id,
    name: "Optimus Prime",
    age: 2530,
    sex: "Robot",
    city: "Cybertron",
    location: "Processing Core",
    lat: 40,
    lng: 20,
    interests: ["Big Rigs", "AllSpark", "Auto-Tune"],
    about_me: "Originally a mere civilian, I was chosen by the Matrix to command, the first in a number of heavy burdens I have been forced to bear. Every casualty, human or Cybertronian, weighs heavily on my spark. I do not show this side to my soldiers, and I never succumb to despair.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490151786/Transformers/optimus_prime.jpg",
    house_image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1490151855/Transformers/Houses/processing_core.jpg",
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

end
