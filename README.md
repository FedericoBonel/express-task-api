# Express task api

Simple yet strong api developed in node.js that allows you to persist your own task/todo list to a mongo database.

## How do I use it?

A basic way to get your own instance of this app running is by:

First clone/fork this repo by typing the following in your shell/cmd:

```
git clone "repo-uri"
```

Second install the app using:

```
cd ./express-task-api
npm install
```

Lastly run the app.js script by replacing the placeholders with your own information:

```
PORT=5000 MONGODB_URI="your-own-mongodb-database" node app.js
```

And that's it have fun!

If you want to check out a client that consumes this api using React and Redux you can [click here!](https://github.com/FedericoBonel/redux-todo)