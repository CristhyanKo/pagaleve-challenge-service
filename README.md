# API Rest for Customers - Pagaleve Challenge

<p align="center"  style="margin: 40px 0">
<img src="https://wallet.pagaleve.com.br/6515fddd250fb36e7500.png" width="400" />
</p>

This application was developed for the challenge made by the company Pagaleve

The purpose of this API is to perform the basic management (CRUD) of clients, and the following technologies were used for development: Typescript, Node.js, Express, MongoDB, Mongoose, Jest, Morgan, i18next

## How to use

Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/desktop/windows/install/) or [MongoDb Server](https://www.mongodb.com/try/download/community)

In the project directory, you can run:

Npm:
```bash
npm install
```

Yarn:
```bash
yarn
```

Now we will need to raise an instance of the Mongo database, for that we are going to use the `docker-compose.yml` file to create this instance through docker

With docker running on your machine, run:
```bash
docker-compose up
```

Default authentication data is configured in the `docker-compose.yml` file, user: `pagaleve` pass: `pagalevePass`

```yml
environment:
            - MONGO_INITDB_ROOT_USERNAME=pagaleve
            - MONGO_INITDB_ROOT_PASSWORD=pagalevePass
```

Now you need to create the environment variables file `.env` at the root of your project with the URL of your Mongo database (If you have created your bank instance with MongoDb Server, enter your connection url)
```env
MONGO_DB_URI=mongodb://pagaleve:pagalevePass@localhost:27017/pagaleve?authSource=admin&readPreference=primary&ssl=false
```

Finally, with our database running, we can start our project by running:
```bash
yarn dev
```

If everything went well you will get the following return
```
🟡 [ROUTER] Mapping endpoints...
---------------------------------------
✅ App listening on port: 3001
---------------------------------------
🟢 [ROUTER] Endpoint "customer" mapped
```

