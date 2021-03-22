# ESXX Features

App that showcases how to use ES9, ES10, ES11 and ES12 features in LWC OSS.

Note: for this app to work lwc-services needs to be ^3.0.2.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/albarivas/esxx-features-oss # or clone your own fork
$ cd esxx-features-oss
$ npm install
```

Run the app locally for development, with hot reloading enabled.

```sh
$ npm run watch
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

-   [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
-   [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
-   [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
-   [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
-   [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
