## Component Hierarchy


**LandingContainer**
  - Landing
    + LandingHeader
      - AuthFormContainer
    + MovingGraphic
    + Testimonial
      - HowItWorksModal
      - AuthFormContainer
    + CitiesSearchContainer
    + TopDestinationsIndex(CitiesIndexContainer type: landing)
    + Footer

**AuthFormContainer**
  - AuthFormModal

**CitiesIndexContainer**
  - CitiesIndex
    + CityIndexItemContainer

**CityIndexItemContainer**
  - CityIndexItem

**CitiesSearchContainer**
  - AutoSearch
  - AutoSearchResults

____________

**UserViewContainer**
  - UserView
    + Header
      - CitiesSearchContainer
      - UserDropdownContainer
    + UserCard(user:currentUser)
      - UserImage
    + ExploreCitiesIndex(CitiesIndexContainer type: userView)
    + ReviewsContainer(type: userView)
    + Footer

**UserDropdownContainer**
  - UserDropdown
    + UserImage

**ReviewsContainer**
  - Reviews
    + ReviewItemContainer

**ReviewItemContainer**
  - ReviewItem
    + UserImage

____________

**HostViewContainer**
  - HostView
    + Header
      - CitiesSearchContainer
      - UserDropdownContainer
    + UserCard(user: host)
      - UserImage
    + MyHomeContainer
    + StatusBar
      - RequestFormContainer
      - (MessageFormContainer)
    + Overview
    + AboutMe
    + ReviewsContainer(type: host)
    + Footer

**MyHomeContainer**(maybe not a container)
  - MyHome
    + ImageScroller(maybe)

**RequestFormContainer**
  - RequestFormModal
    + DatePicker

**(MessageFormContainer)**
  - MessageFormModal

____________

**CityViewContainer**
  - CityView
    + Header
      - CitiesSearchContainer
      - UserDropdownContainer
    + CityGraphicContainer
    + HostsListContainer
    + MapsContainer
    + Footer

**CityGraphicContainer**
  - CityGraphic
    + NearbyCitiesIndex(CitiesIndexContainer type: nearby)

**HostsListContainer**
  - HostsList
    + HostsHeaderContainer
    + HostItemContainer

**HostItemContainer**
  - UserImage(type: host)


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "LandingContainer or UserViewContainer (redirect to /home if logged in)" |
| "/home" | "UserViewContainer" |
| "/cities/:cityId" | "CityViewContainer" |
| "/hosts/:hostId" | "HostViewContainer" |
