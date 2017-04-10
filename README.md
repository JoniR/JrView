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

This project was my personal experimental towards open source world and freebies. I like to see what you can really do without buying anything. Idea came to my mind when Finnish electricity transmission operator published some of their data via open data application interfaces. This application is not intend to be production level at any point. I also need to warn you! I am not developer, this was my very first Node.js project and files really need some cleanup.

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
Every application, any web page need somekind of hosting. This app doesn't make any difference. Like with UI, I set criterias for platform/hosting:
* must host PHP or Node.js or .net applications
* free version must handle all requirements for this app

Actually there was very many different choices and I am sure that everyone can find somekind of platform for host open source projects. In this project Heroku Cloud application platform was chosen. Heroku platform itself offers all bells and whistles for modern development and developer doesn't need worry of platform at all - it's just works. Time of writing this free Heroku offers 1 web or 1 process with 512 MB RAM and 550h running with unverified account and with verified account 1000h which is more than one month for one worker. If application is inactive more than 30 minutes, it goes sleep and wakeup automatically when it is used next time. This may cause some slowness when user try to reach application.

Heroku is able to run Node.js and PHP applications, but not .net as native. You can run .net applications with Mono framework. Thus I chose to write my application with Node.js so I don't need to change "thinking" between UI code and server code, since both are using JavaScript language.

### Database
This application actually doesn't really need anykind of database for storing data, but still I wanted to use some. There was two main reasons for this:
* I wanted to learn more about MongoDB
* I wanted to minimize call's towards Fingrid REST-services

mLab offers full hosted 0.5Gb sized MongoDB for free from their sandbox subscription. They say: "Sandbox plans are ideal for learning, developing, and prototyping" and this is excactly what I am doing here.

### Application architecture
Like I stated before this was my first Node.js project. I didn't want to start project by studying everything about Node.js rather than that I chose just to start coding. I have learned that developers generally want to use always some framework and this is not exception on Node.js world. Frameworks give nice start for every project without need for develop everything by your self. Some research and in no-time Express framework was deployed to project.

Usually this kind of application data refresh is done in background and data is ready when user land the page. Altought in this case, I didn't have possibility to sync data all the time, so I make compromise. When user lands to the page, data refresh is triggered. If last refresh has been made more than 3 minutes ago new data is fetched from Fingrid and imported to the MongoDB. Otherwise no any call's are made towards Fingrid data services. This way I was able to minimize call's towards Fingrid REST-services even users constantly hit page refresh. Calls are made maximum every 3 minutes. User interface is always fetching data from MongoDB and page is updated by ajax. Good thing by doing this way is that user always see some value even Fingrid service didn't answer anything, down side is that user also can see values what are not latest values.
