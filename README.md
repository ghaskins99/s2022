## shopify backend challenge 2022

### setup

- [install node](https://nodejs.org/en/download/)
- clone the repository (and cd to s2022)
  - `git clone https://github.com/ghaskins99/s2022.git`
- install dependencies
  - `npm i`
- first-time setup the database
  - `npm run migrate:up`
    - WARN (Windows): make sure the path to the directory (`s2022`) doesn't contain any 'space' characters (as far as I know, that is the issue; ex. `new folder (3)\s2022` will cause MikroORM to fail to find entities)
  - `npm run seed` to add a few sample items
- run the server!
  - `npm run dev` for less typing, or
  - `npm run compile` & `node ./dist/server.js`
- make requests
  - sample requests, see [`/sample_requests`](/sample_requests)
    - curl, powershell, postman, insomnia
  - visit the browser @ http://localhost:8000/api/inventory (to list all items)
    - other methods such as creating an item don't have a browser UI, this is how I interpeted the challenge
