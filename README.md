# JrView for open Energy Data

Electricity information in Finland based on the real-time measurements in Fingrid's operation control system. The data is updated every 3 minute.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ npm install
$ heroku local web
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku via Github

```
$ git add .
$ git commit -m "description"
$ git push origin master
```

## About

This project was my personal experimental towards open source world and freebies. I like to see what you can really do without buying anything. Idea came to my mind when Finnish electricity transmission operator published some of their data via open data application interfaces. This application is not intend to be production level at any point. I also need to warn you! I am not developer, this was my very first nodejs project and files really need some cleanup.

## Application components

All used application components was chosen mainly because they are free, but also I did evaluation regarding complexity and my competence.

### User interface

I started project by looking good template for user interface. I set few criterias for user interface:
* responsive
* based on Bootstrap
* working and looking good also in mobile phone
* free

After googling and testing a lot different templates with desktop and mobile, I chose Outline template by FreeHTML5.co.
Graphs are Chart.js which was easy to use and enough good looking by default. Outline template used bunch of different glyphicons etc. However I chosen not to use them and use ionicons instead. This was biggest modification what I did regarding user interface, so not much :)

### Application platform
