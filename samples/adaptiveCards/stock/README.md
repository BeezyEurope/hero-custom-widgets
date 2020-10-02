## Code for the Beezy Stock adaptive card
Here you will find the json and CSS files for the Beezy Stock adaptive card:

* Template: stock.json
* Hostconfig: stock_hostconfig.json
* Extra CSS: stock.css

## URLs for testing source data in Stock adaptive card
Use these files to retreave data for the Stock adaptive card:

* Increasing value: https://firebasestorage.googleapis.com/v0/b/bright-torus-238508.appspot.com/o/example.json?alt=media&token=8e390c6f-83b9-4bf8-ac49-c75082ccfdbf
* Decreasing value: https://firebasestorage.googleapis.com/v0/b/bright-torus-238508.appspot.com/o/stock_baja.json?alt=media&token=fac9d59d-0163-4471-882a-6329e9c0dae8
* Same value: https://firebasestorage.googleapis.com/v0/b/bright-torus-238508.appspot.com/o/stock_neutro.json?alt=media&token=e5402a86-8bed-42db-9902-79f8fe750b41


## Basic CSS recommended for **any** Adaptive Card in the Beezy Hero
~~~
html,
body,
.ac-adaptiveCard {
  height: 100%;
}

body {
  margin: 0;
  overflow: hidden;
}

.ac-adaptiveCard:focus {
  outline: 0;
}
~~~