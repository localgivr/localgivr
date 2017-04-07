# README

## Routes

## User routes

### GET    /api/users

- returns an array of all the users

### GET /api/users/:id

- returns the user with a user id of `:id`
- requires a token

### POST /api/users

- signup. takes:
  - first_name (required)
  - last_name (required)
  - email (required)
  - password (required)
  - zip (required)
  - img_url (optional)

- returns basic user info, and a token

### POST /api/users/login

- login. takes:
  - email (required)
  - password (required)

- returns basic user info, and a token


 user GET    /api/users/:id(.:format)        users#show
      PATCH  /api/users/:id(.:format)        users#update
      PUT    /api/users/:id(.:format)        users#update
      DELETE /api/users/:id(.:format)        users#destroy


## Org routes

### GET    /api/orgs

- returns an array of all the orgs

### GET /api/orgs/:id

- returns the org with a org id of `:id`
- requires a token

### POST /api/orgs

- signup. takes:
  - name (required)
  - email (required)
  - password (required)
  - zip (required)
  - ein (optional?)
  - phone (optional?)
  - street (optional?)
  - city (optional?)
  - state (optional?)

- returns basic org info, and a token

### POST /api/orgs/login

- login. takes:
  - email (required)
  - password (required)

- returns basic org info, and a token

 org GET    /api/orgs/:id(.:format)         orgs#show
     PATCH  /api/orgs/:id(.:format)         orgs#update
     PUT    /api/orgs/:id(.:format)         orgs#update
     DELETE /api/orgs/:id(.:format)         orgs#destroy



***

  GET    /api/needs(.:format)            needs#index
      POST   /api/needs(.:format)            needs#create

 need GET    /api/needs/:id(.:format)        needs#show
      PATCH  /api/needs/:id(.:format)        needs#update
      PUT    /api/needs/:id(.:format)        needs#update
      DELETE /api/needs/:id(.:format)        needs#destroy

types GET    /api/types(.:format)            types#index
      POST   /api/types(.:format)            types#create

 type GET    /api/types/:id(.:format)        types#show
      PATCH  /api/types/:id(.:format)        types#update
      PUT    /api/types/:id(.:format)        types#update
      DELETE /api/types/:id(.:format)        types#destroy

 cats GET    /api/cats(.:format)             cats#index
      POST   /api/cats(.:format)             cats#create

  cat GET    /api/cats/:id(.:format)         cats#show
      PATCH  /api/cats/:id(.:format)         cats#update
      PUT    /api/cats/:id(.:format)         cats#update
      DELETE /api/cats/:id(.:format)         cats#destroy

  follows GET    /api/follows(.:format)          follows#index
        POST   /api/follows(.:format)          follows#create

  follow GET    /api/follows/:id(.:format)      follows#show
        PATCH  /api/follows/:id(.:format)      follows#update
        PUT    /api/follows/:id(.:format)      follows#update
        DELETE /api/follows/:id(.:format)      follows#destroy
