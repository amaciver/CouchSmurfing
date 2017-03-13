# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id/reviews`
  - index of all reviews on a user

### Session

- `POST /api/session`
- `DELETE /api/session`

### Cities

- `GET /api/cities`
  - Cities index/search
- `GET /api/cities/:cityId`

### Hosts

- `GET /api/hosts`
  - accepts `city_id` query param to list hosts by city
- `GET /api/hosts/:id`
- `GET /api/hosts/:id/reviews`
  - index of all reviews on a host
