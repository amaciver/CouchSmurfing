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
    username: "guest",
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






  smurf_village = City.create!(
    name: "Smurf Village",
    description: "The Smurf Village is the home residence for the Smurfs. It is located in a forest, the exact location of which is unknown to all but Smurfs. It is protected by a magical field that renders it invisible to all outsiders.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489627724/CityImages/smurf_village.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489627879/CityImages/smurf_village_banner.jpg",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489628820/CityImages/smurf_village_map.jpg"
  )

  thundera = City.create!(
    name: "Thundera",
    description: "Thundera is the homeworld of the Thunderians. Before its destruction there was such great peace - particularly among the Cats - that the natives did not even need to worry about covering themselves in protection from attack or the elements.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629362/CityImages/thundera.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489628990/CityImages/thundera_banner.png",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629414/CityImages/thundera_map.jpg"
  )

  kingdom_of_caring = City.create!(
    name: "Kingdom of Caring",
    description: "The Kingdom of Caring is an establishment of the Care Bear Family. It may or may not be a monarchy. It is known to include the Bears' Care-a-Lot and the Cousins' Forest of Feelings.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629659/CityImages/kingdom_of_caring.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629831/CityImages/kingdom_of_caring_banner.jpg",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630009/CityImages/kingdom_of_caring_map.jpg"
  )

  eternia = City.create!(
    name: "Eternia",
    description: "Eternia is at the center of the universe. At the planet's center lies the Star Seed, a spark left over from the creation of the universe. Possessing it would grant infinite power to its holder.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630328/CityImages/eternia.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630507/CityImages/eternia_banner.png",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630876/CityImages/eternia_map.jpg"
  )

  equestria = City.create!(
    name: "Equestria",
    description: "Equestria is inhabited by magical ponies and other talking creatures, such as griffons and dragons. Other animals and creatures also live in Equestria.",
    image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489631982/CityImages/equestria.jpg",
    banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/c_crop,h_815,x_61,y_281/v1489631911/CityImages/equestria_banner.png",
    map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489631222/CityImages/equestria_map.jpg"
  )

  # cities = [
  #   {
  #     name: "Smurf Village",
  #     description: "The Smurf Village is the home residence for the Smurfs. It is located in a forest, the exact location of which is unknown to all but Smurfs. It is protected by a magical field that renders it invisible to all outsiders.",
  #     image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489627724/CityImages/smurf_village.jpg",
  #     banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489627879/CityImages/smurf_village_banner.jpg",
  #     map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489628820/CityImages/smurf_village_map.jpg"
  #   },
  #   {
  #     name: "Thundera",
  #     description: "Thundera is the homeworld of the Thunderians. Before its destruction there was such great peace - particularly among the Cats - that the natives did not even need to worry about covering themselves in protection from attack or the elements.",
  #     image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629362/CityImages/thundera.jpg",
  #     banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489628990/CityImages/thundera_banner.png",
  #     map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629414/CityImages/thundera_map.jpg"
  #   },
  #   {
  #     name: "Kingdom of Caring",
  #     description: "The Kingdom of Caring is an establishment of the Care Bear Family. It may or may not be a monarchy. It is known to include the Bears' Care-a-Lot and the Cousins' Forest of Feelings.",
  #     image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629659/CityImages/kingdom_of_caring.jpg",
  #     banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489629831/CityImages/kingdom_of_caring_banner.jpg",
  #     map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630009/CityImages/kingdom_of_caring_map.jpg"
  #   },
  #   {
  #     name: "Eternia",
  #     description: "Eternia is at the center of the universe. At the planet's center lies the Star Seed, a spark left over from the creation of the universe. Possessing it would grant infinite power to its holder.",
  #     image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630328/CityImages/eternia.jpg",
  #     banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630507/CityImages/eternia_banner.png",
  #     map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489630876/CityImages/eternia_map.jpg"
  #   },
  #   {
  #     name: "Equestria",
  #     description: "Equestria is inhabited by magical ponies and other talking creatures, such as griffons and dragons. Other animals and creatures also live in Equestria.",
  #     image_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489631982/CityImages/equestria.jpg",
  #     banner_url: "http://res.cloudinary.com/couchsmurfing/image/upload/c_crop,h_815,x_61,y_281/v1489631911/CityImages/equestria_banner.png",
  #     map_url: "http://res.cloudinary.com/couchsmurfing/image/upload/v1489631222/CityImages/equestria_map.jpg"
  #   }
  # ]
  # City.create!(cities)

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
    status: "Accepting Guests"
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
