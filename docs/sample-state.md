```js
{
  currentUser: {
    id: 1,
    username: "Andrew MacIver",
    location: "SF, CA",
    image_url: "/assets/images/1.svg",
    reviews: {
      23: {
        host_id: 2,
        body: "Was too big for the couch. Hit on Smurfette."
      }
    }
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createRequest: {
      errors: ["host is unavailable"]
    }
  },
  hosts: {
    2: {
      id: 2,
      city_id: 1,
      name: "Papa Smurf",
      city: "Smurf Village",
      location: "Papa Smurf's House"
      lat: -32.65,
      lon: 232.111,
      interests: ["Leadership", "Beards"],
      image_url: "/assets/images/2.svg",
      status: "Accepting Guests"
    }
  },
  host: {
    id: 3,
    name: "He-Man",
    age: 26,
    sex: "Male",
    city: "Eternia",
    location: "Castle Grayskull"
    interests: ["Leadership", "Muscles"],
    about_me: "Prince who loves to get out on the weekends"
    image_url: "/assets/images/3.svg",
    house_image_url: "https://super7store.files.wordpress.com/2015/11/castle-grayskull-final-1.jpg",
    status: "Maybe Accepting Guests",
    reviews: {
      10: {
        user_id: 2,
        body: "Bed was too big. Made fun of my blue skin."
      }
    }
  }
  cities: {
    4: {
      id: 4,
      name: "Thundera",
      image_url: "http://vignette1.wikia.nocookie.net/thundercats/images/1/12/Thundera.jpg/revision/latest?cb=20091122194842"
    }
  }
  city: {
    name: "Thundera",
    description: "Thundera is the homeworld of the Thunderians. Before its destruction there was such great peace - particularly among the Cats - that the natives did not even need to worry about covering themselves in protection from attack or the elements.",
    banner_url: "https://screamsheet.files.wordpress.com/2011/08/thundera.png",
    map_url: "http://vignette1.wikia.nocookie.net/thundercats/images/8/87/Map20thundercat.jpg/revision/latest?cb=20100921203617"
  }
}
```
