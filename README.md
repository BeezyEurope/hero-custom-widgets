# Beezy Custom Widgets Repository

This repository contains the front end source code of Beezy Custom Widgets



## Install dependencies

With this script we can install all dependencies at global scope and in components subfolders.


``` yarn install```

## Env Variables needed.

You need to provide FacbookTooken, LinkedinToken and TwitterToken.
in ```packages/server/.env/```

```
PORT=4000
TWITTER_CONSUMER_KEY=TWITTER_CONSUMER_KEY
TWITTER_CONSUMER_SECRET=TWITTER_CONSUMER_SECRET
TWITTER_BEARER_TOKEN=TWITTER_BEARER_TOKEN

FB_TOKEN=FB_TOKEN

```

## Run Environment

To build the client and generate lib folders.

* Execute ``` yarn run-server ``` in root folder and this will run the server

* Go to component folder and execute ``` yarn run-client ```, this will run the client

### Run Environment with Docker

 ```docker build --build-arg TWITTER_CONSUMER_KEY=$TWITTER_CONSUMER_KEY --build-arg TWITTER_CONSUMER_SECRET=$TWITTER_CONSUMER_SECRET --build-arg TWITTER_BEARER_TOKEN=$TWITTER_BEARER_TOKEN --build-arg FB_TOKEN=$FB_TOKEN -t widgets . ```

 ```docker run -p 4000:4000 widgets```

 And then you will have your Client in http://localhost:4000/social?user=${tweeterUser}

 or you can just put ```docker-compose up -d```
 and ```docker-compose down```

 And then you will have your Client in http://localhost:4000/social?user=${tweeterUser}


  


## StoryBook

With the ``` yarn run storybook ``` command to run Storybook.


## Tests

To execute all tests execute this command in root folder:

``` yarn run test ```




## Code for the Beezy Stock Adaptive Card
In the folder [samples/adaptiveCards/stock](samples/adaptiveCards/stock) you will find the json and CSS files for the Beezy Stock Adaptive Card:

* Template: [stock.json](samples/adaptiveCards/stock/stock.json)
* Hostconfig: [stock_hostconfig.json](samples/adaptiveCards/stock/stock_hostconfig.json)
* Extra CSS: [stock.css](samples/adaptiveCards/stock/stock.css)

## URLs for testing source data in Stock Adaptive Card
Use these files to retreave data for the Stock adaptive card

* Increasing value: https://firebasestorage.googleapis.com/v0/b/bright-torus-238508.appspot.com/o/example.json?alt=media&token=8e390c6f-83b9-4bf8-ac49-c75082ccfdbf
* Decreasing value: https://firebasestorage.googleapis.com/v0/b/bright-torus-238508.appspot.com/o/stock_baja.json?alt=media&token=fac9d59d-0163-4471-882a-6329e9c0dae8
* Same value: https://firebasestorage.googleapis.com/v0/b/bright-torus-238508.appspot.com/o/stock_neutro.json?alt=media&token=e5402a86-8bed-42db-9902-79f8fe750b41




