**Self-Hosting Open-Source 101: Part 2 -Getting Started with Git, GitHub, and Deploying with Heroku**

---
**About this codelab**

📅 **Last updated:** Feb 6, 2025

✍️ **Written by:** Jackson Mafra

---

## ****Step 06: Running a Docker App on Heroku****



### ****What You’ll Learn****

✅ How to deploy a simple Docker container on Heroku

✅ How to update the app and see changes live



---



### ****1️⃣ Setting Up Your Docker App****



We will create a simple ****Hello World**** app inside a ****Docker container**** and deploy it to ****Heroku****. Every time we update the file, commit, and push, the changes will appear on our Heroku app.



---



## ****2️⃣ Create a Simple App****



### ****Step 1: Create a New Folder for Your Project****

Open a terminal and run:



```sh
mkdir heroku-docker-app
cd heroku-docker-app
```


**Step 2: Create an index.html File**



Inside your folder, create a file named **index.html** with this content:


```html
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<title>Docker + Heroku</title>

</head>

<body>

<h1>Hello, Docker on Heroku! 🚀</h1>

</body>

</html>
```


**3️⃣ Create a Simple Web Server**



Now, let’s create a simple Python web server that serves this HTML file.



**Step 1: Create a server.py File**



Create a file named **server.py** and add this content:


```py
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

PORT = 8080

class Handler(SimpleHTTPRequestHandler):
def do_GET(self):
self.path = 'index.html'
return SimpleHTTPRequestHandler.do_GET(self)

with TCPServer(("", PORT), Handler) as httpd:
print(f"Serving on port {PORT}")
httpd.serve_forever()
```

**4️⃣ Create a Dockerfile**


Now, let’s tell Docker how to package and run our app.


**Step 1: Create a Dockerfile**



Inside your folder, create a file named **Dockerfile** and add this:


```rb
_# Use a lightweight Python image_
FROM python:3.9

_# Set the working directory_
WORKDIR /app

_# Copy all files to the container_
COPY . .

_# Expose port 8080_
EXPOSE  8080

_# Run the server_
CMD ["python", "server.py"]
```
**5️⃣ Deploying the Docker App to Heroku**

**Step 1: Log In to Heroku**

Make sure you’re logged in:

```sh
heroku container:login
```

**Step 2: Create a Heroku App (If You Haven’t Yet)**

```sh
heroku create your-app-name
```

**Step 3: Push Your Docker App to Heroku**

1.  **Build and push the container**

```sh
heroku container:push web -a your-app-name
```

2.  **Release the app**

```sh
heroku container:release web -a your-app-name
```


3.  **Open the app in your browser**

```sh
heroku open
```

You should see **“Hello, Docker on Heroku! 🚀”** in your browser!


**6️⃣ Updating the App and Seeing Changes**

Now, let’s change the **index.html** file and deploy the update.

**Step 1: Edit index.html**

Change the text inside the `<h1>` tag to:

`<h1>Updated! 🚀 Hello from Docker on Heroku!</h1>`

**Step 2: Commit and Push the Changes**


Run these commands:


```sh
git add .

git commit -m "Updated Hello World message"

heroku container:push web -a your-app-name

heroku container:release web -a your-app-name

heroku open

 ```

Your updated message should now appear on Heroku! 🎉


**7️⃣ What’s Next?**


Awesome! You’ve now:

✅ Deployed a simple **Docker container** on **Heroku**

✅ Made changes and updated the app


Next, we’ll learn how to **expose your local app to the internet** using **Ngrok**.


**References & More Learning**



📌 [Heroku: Deploying with Docker](https://devcenter.heroku.com/articles/container-registry-and-runtime)

📌 [Docker Docs](https://docs.docker.com/get-started/)




---

**Next Step →** [**Step 07: Exposing Your Local App to the Internet with Ngrok**](step-07.md) **🚀**