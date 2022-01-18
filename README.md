## shopify backend challenge 2022

### setup

- [install node](https://nodejs.org/en/download/)
- clone the repository (cd to s2022)
  - `git clone https://github.com/ghaskins99/s2022.git`
- install dependencies
  - `npm i`
- first-time setup the database
  - `npm run migrate:up`
  - `npm run seed` to add a few sample items
- run the server!
  - `npm run dev` for less typing, or
  - `npm run compile` & `node ./dist/server.js`
- make requests
  - sample requests see `/sample_requests`
    - curl, powershell, postman, insomnia
  - visit the browser @ http://localhost:8000/api/inventory (to list all items)
    - other methods such as creating an item don't have a browser UI, this is how I interpeted the challenge
