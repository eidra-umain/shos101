# 📌 SHOS - Recipe 01 - Simple Node.js File Server

This small Node.js app will serve all the files inside a folder named data so you can access them from your browser.

1️⃣ Create the Project Folder

First, create a new folder and open it in your terminal:

```sh
mkdir receipe01 && cd receipe01
```

2️⃣ Initialize a Node.js Project

Run this command to create a basic package.json:

```sh
npm init -y
```

3️⃣ Install Express

We’ll use Express.js to create the server:

```sh
npm install express
```


4️⃣ Create the index.js File

Now, create a new file named index.js and add this code:

```js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5006

// Serve all files inside the "data" folder
app.use(express.static(path.join(__dirname, 'data')));

app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    console.log(`Rendering 'pages/index' for route '/'`)
    res.render('data/index')
  })

process.on('SIGTERM', async () => {
    console.log('SIGTERM signal received: gracefully shutting down')
    if (server) {
      server.close(() => {
        console.log('HTTP server closed')
      })
    }
  })


```
5️⃣ Create the data Folder

Inside your project, create a folder named data, and put some files inside (images, text, HTML, etc.).

6️⃣ Run the Server

Now, start the server with:

```sh
node index.js
```

Your files will be available at:

> 🔗 http://localhost:3000/your-file-name

This is super simple but useful when you need to quickly serve files! 🚀

## 🚀 Deploying to Heroku

Now that we have our app ready, let’s deploy it to Heroku!

📌 Steps to Deploy

1️⃣ Initialize a Git repository (if you haven’t yet):

```sh
git init
```

2️⃣ Add your files to Git:

```sh
git add .
```

3️⃣ Commit your changes:

```sh
git commit -am "First commit"
```

4️⃣ Create a new Heroku app:

Create an app on Heroku, which prepares Heroku to receive your source code.

```sh
heroku create

Creating app... done, ⬢ shrouded-anchorage-35377
https://shrouded-anchorage-35377.herokuapp.com/ | https://git.heroku.com/shrouded-anchorage-35377.git
```

When you create an app, you also create a Git remote called heroku. It’s associated with your local Git repository.

Heroku generates a random name for your app, in this case shrouded-anchorage-35377. Or you can pass a parameter to specify your own app name.

Deploy your code.

5️⃣ Push your code to Heroku:

```sh
git push heroku main

Enumerating objects: 554, done.
Counting objects: 100% (554/554), done.
Delta compression using up to 20 threads
Compressing objects: 100% (412/412), done.
Writing objects: 100% (554/554), 248.74 KiB | 124.37 MiB/s, done.
Total 554 (delta 109), reused 548 (delta 106), pack-reused 0
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Building on the Heroku-22 stack
remote: -----> Determining which buildpack to use for this app
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_VERBOSE=false
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  22.x
remote:        engines.npm (package.json):   unspecified (use default)
remote:
remote:        Resolving node version 22.x...
remote:        Downloading and installing node 22.11.0...
remote:        Using default npm version: 10.8.1
remote:
remote: -----> Installing dependencies
remote:        Installing node modules (package.json)
remote:
remote:        added 160 packages, and audited 161 packages in 4s
remote:
remote:        64 packages are looking for funding
remote:          run `npm fund` for details
remote:
remote:        found 0 vulnerabilities
remote:
remote: -----> Build
remote:
remote: -----> Caching build
remote:        - node_modules
remote:
remote: -----> Pruning devDependencies
remote:
remote:        up to date, audited 74 packages in 450ms
remote:
remote:        9 packages are looking for funding
remote:          run `npm fund` for details
remote:
remote:        found 0 vulnerabilities
remote:
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types -> web
remote:
remote: -----> Compressing...
remote:        Done: 43.4M
remote: -----> Launching...
remote:        Released v3
remote:        https://shrouded-anchorage-35377.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/shrouded-anchorage-35377.git
 * [new branch]      main -> main
```

6️⃣ Scale your app to run at least one web process:

Ensure that at least one instance of the app is running.

```sh
heroku ps:scale web=1
```

7️⃣ Open your app in the browser:

```sh
heroku open
```
🎉 Done! Your app is now live on Heroku! 🚀