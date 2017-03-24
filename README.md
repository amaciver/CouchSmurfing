# CouchSmurfing

###### [CouchSmurfing live][couchsmurfing]

[couchsmurfing]: http://couchsmurfing.herokuapp.com

##### CouchSmurfing is a full-stack web application inspired by Couchsurfing and the many great cartoon characters of the 1980's.


CouchSmurfing's backend is Ruby on Rails with a PostgreSQL database. The frontend implements React.js and the Redux architecture.

## UX Features

  * Browse cities
  * Browse hosts
  * User homepage
  * City details
  * Host details
  * Make stay requests
  * Leave reviews
  * Search bar with Autosuggest
  * Google maps
  * Modal components
  * DatePicker
  * CSS spinner

----
### Overview

  * Users can browse a selection of kingdoms and realms from 1980's cartoon shows.

  * Each kingdom or realm has a list of hosts who live there, along with a Google map of the realm's earthly projection.

  * Hosts can be selected via the map or by clicking on their link in the hosts list.

  * Each host's page features information about the host, including their interests, availability, short bio, and an image of their home.

  * On each host's page, users can request a stay with the host by clicking on the request button and selecting dates, or leave a review of a host with whom they have stayed.
----
### Landing Page

  * The landing page features splash graphics and testimonials about the site's greatness.

  * Users can login or signup from the nav bar, or demo the site with a guest login. The Auth Modal features two form-types that can be toggled between from within each modal.

  * The bottom of the landing page features an index of cities that un-registered users can navigate through. Subsequent features are locked.

### User Homepage

  * The user homepage is the index route for logged-in users. It includes a profile card, existing stay requests, and a list of cities to explore.

  * Users can navigate directly to the host's page by clicking on a stay request.

  * The navigation bar features a search bar that autosuggests matching city names, and a user dropdown menu that allows navigation back to the user homepage and logging out.

### City Details

  * Each city page features a beautiful graphic from the universe of the cartoon at hand and a poignant description of the realm.

  * The city page provides a list of hosts along with some initial information about each, including their availabilities and interests. Hosts can be clicked to go to their detail pages.

  * Each city page has a Google map corresponding to the place on earth where the realm is projected.

  * Each host appears as a marker on the map. Clicking the marker makes an InfoWindow appear that can also be clicked to take the user to the host's detail page.

### Host Details

  * On the host detail page, users can see information about the host: age, sex, interests, availability, etc.

  * Users can request to stay with a host with a Request Modal that features a DatePicker.

  * Backend validations ensure that users cannot make overlapping requests.

  * Users can leave reviews of hosts, and delete reviews they have authored.
______
## Future Directions
  * Users can sign up as hosts
  * Users upload profile photos and photos from their stays
  * Hosts integrated into search bar results
  * Messaging modal with back-and-forth communication; linked up with user's email


___
##### See the development [README][readme] for a list of components, wireframes, sample state, and DB schema.

[readme]: docs/readme.md

# Now, [go][couchsmurfing] book some stays with awesome legends of the 80's TV screen!
