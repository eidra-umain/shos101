**Self-Hosting Open-Source 101: Part 1 - Running Your First Open-Source App**

---
**About this codelab**

📅 **Last updated:** Feb 3, 2025

✍️ **Written by:** Jackson Mafra

---

## Understanding Docker


Hey there! 👋

Now that we’ve installed all the tools, let’s talk about ****Docker**** and how it works.

You don’t need to be a ****developer**** to understand this—just think of it like organizing apps in little ****magic boxes**** that make running them easier.


## ****Docker vs. Virtual Machines 🤖 vs. 🏠****


### ****What’s the Difference?****

Imagine you ****want to build a tiny house****. You have two options:

1️⃣ ****Virtual Machine (VM)**** – This is like ****building a whole new house**** every time you need a space for something new. You get walls, plumbing, electricity—everything—but it takes a lot of time, space, and resources.


2️⃣ ****Docker (Container)**** – This is like ****renting a fully-furnished tiny room in a huge house****. Instead of rebuilding everything from scratch, you just use what’s already there! It's ****lighter, faster, and more efficient****.


### ****Real-World Example:****


- ****Virtual Machine (VM)**** = Buying a whole new laptop just to install one app.

- ****Docker Container**** = Running the app ****inside a small, isolated folder**** on your existing laptop.



| Feature  | Virtual Machine 🏠 | Docker 🐳 |
|---------------|------------------|------------|
| Startup Time  | ****Minutes**** ⏳  | ****Seconds**** ⚡ |
| Performance | Uses a lot of RAM 🛑 | Uses minimal RAM ✅ |
| Storage Size  | ****10GB+**** for each VM 📂 | ****MBs to GBs**** per container 🗂️ |
| Flexibility | Requires full OS 🏗️ | Uses existing OS 🛠️ |


So ****Docker wins**** when you need something ****fast, lightweight, and easy to manage****. 🚀

---

## ****What is a Docker Container? 📦****

Think of a ****Docker container**** as a ****magic box**** that contains everything a program needs to run.

🔹 ****Example:**** Imagine you want to bake a cake. 🎂

Normally, you'd need to:

1️⃣ Buy ingredients (flour, eggs, sugar)

2️⃣ Find a recipe

3️⃣ Get the right oven settings

4️⃣ Bake the cake

Now imagine if you had a ****pre-made cake mix**** with everything already inside.

That’s exactly what ****a Docker container**** is! ****It already has everything inside**** so it runs without extra steps.
<br/><br/>

👉 ****A Docker container includes:****

✅ The program (like WordPress or Metabase)

✅ The settings it needs

✅ The environment it runs in

✅ All required dependencies


So instead of manually ****installing and configuring**** things, Docker lets you ****run them instantly!**** 🚀

---

## ****What is a Docker Image? 🖼️****

A ****Docker Image**** is like a ****recipe**** for a container. 📝

Imagine you want to make a ****burger 🍔****.

The ****recipe**** (Docker Image) tells you:


- What ingredients to use

- How to cook it

- What toppings to add

When you follow the recipe, you ****create the burger**** (which is the ****Docker Container****).



### ****Key Difference:****


- 🖼 ****Docker Image**** = Recipe 📖 (a file that describes everything)

- 📦 ****Docker Container**** = The actual cooked burger 🍔 (the running app)


---



## ****Dockerfile - Your Own Custom Recipe 📜****

A ****Dockerfile**** is just a ****list of instructions**** that tells Docker how to build an image.

Example: Imagine you want to create ****your own burger recipe****:


```sh

# Start with a basic burger bun

FROM beef-bun:latest

# Add cheese

RUN add-cheese

# Add sauce

RUN add-secret-sauce

# Serve the burger

CMD ["serve-burger"]
```

When you run this, **Docker follows these steps** and makes a **delicious burger (Docker Image)** that you can use anywhere.

In the **real world**, a Dockerfile is used to create **customized software environments** so your apps always run **exactly the same way, every time**.

### **Basic Docker Commands 🏗️**

Here are **just a few commands** to get started. We won’t overload you!
<br/><br/>

| **Command**  | **What it does 🛠️** |
|---------------|---------------------|
|docker pull <image> | **Downloads** an image (like getting a recipe)|
|docker run <image> | **Runs** a container (like cooking the burger)|
|docker ps  |Shows running containers|
|docker stop <container> | Stops a running container|
|docker rm <container> | Removes a stopped container|


<br/>
Example: Want to **run WordPress** in seconds? Try this:


```sh
docker run -d -p 8080:80 wordpress
```


Now go to http://localhost:8080 and **boom, WordPress is running!** 🎉

## **🕸️ What is a Docker Network? (Explained Simply)**

Think of Docker **containers** like **houses** in a city. 🏠🏠🏠

•  Each house has **people inside** (applications running).

•  To **talk to each other**, they need **streets and roads** (a network).



Docker **networks** are like those streets. They **connect containers** so they can **communicate** safely. 🚗🚲

> 🔹 Example: No Network = No Communication


Imagine you have:

•  A **WordPress container** 📝 (needs a database)

•  A **MySQL container** 🗄️ (stores the data)

If they are **not on the same network**, WordPress **can’t see** the database. 😢


### **🛠 How to Create a Docker Network?**


To create a network in Docker, run:

```sh
docker network create my-network
```


Now, when you **start containers**, put them on the **same network**:


```sh
docker run --name my-mysql --network my-network -e MYSQL_ROOT_PASSWORD=mysecret -d mysql:8.0

docker run --name my-wordpress --network my-network -p 8080:80 -e WORDPRESS_DB_HOST=my-mysql -d wordpress
```

💡 **Now, WordPress and MySQL can talk because they are on the same “street”!** 🚗💬


But if we **connect them** with a network, they can **talk** and WordPress can store and retrieve data. 🎉

## **Docker Compose**


**Docker Compose** is a tool that helps you run apps that need **multiple containers** at once. Instead of running multiple docker run commands, you just define everything in a docker-compose.yml file and start it with one command! 🚀

Lets use the example of WordPress.
A better way is to use Docker Compose, so you don’t need to type long commands:

### 📝 Create a docker-compose.yml file:

```yaml
version: '3.8'

services:
  wordpress:
    image: wordpress
    restart: always
    ports:
      - 8080:80
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: exampleuser
      WORDPRESS_DB_PASSWORD: examplepass
      WORDPRESS_DB_NAME: exampledb
    volumes:
      - wordpress:/var/www/html

  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_DATABASE: exampledb
      MYSQL_USER: exampleuser
      MYSQL_PASSWORD: examplepass
      MYSQL_RANDOM_ROOT_PASSWORD: '1'
    volumes:
      - db:/var/lib/mysql

volumes:
  wordpress:
  db:
```

🚀 Run everything with:

**Example:** Running WordPress (which has multiple services like a database, API) would be messy with many docker run commands.
With Compose, you just write a simple file, and everything runs with:

<br/>

```sh
docker-compose up -d
```
🔹 Open http://localhost:8080 and complete the WordPress setup.

<br/>

#### **📌 Essential Docker Compose Commands**

<br/>

##### **🔹 Starting and Stopping Services**


```sh
docker-compose up
```

Starts the services **defined in** docker-compose.yml.

```sh
docker-compose up -d
```

Starts the services in **detached mode** (in the background).

```sh
docker-compose down
```

Stops and **removes all** the containers, networks, and volumes **created by Compose**.

<br/><br/><br/>
##### **🔹 Managing Containers**

```sh
docker-compose ps
```

Lists the **running** containers from the docker-compose.yml file.

```sh
docker-compose restart
```
**Restarts** all services.

```sh
docker-compose stop
```

Stops all running containers **without removing them**.

```sh
docker-compose start
```

Starts **previously stopped** containers.

<br/><br/><br/>
##### **🔹 Viewing Logs and Status**


```sh
docker-compose logs
```

Shows the **logs** of all services.


```sh
docker-compose logs -f
```

Shows **real-time logs** (like tail -f).

```sh
docker-compose top
```

Shows the running processes in **each container**.

<br/><br/><br/>
##### **🔹 Executing Commands in a Running Container**


```sh
docker-compose exec <service_name> sh
```

Opens a **shell inside the container** (use bash instead of sh if available).

Example for **Supabase** (entering the database container):

```sh
docker-compose exec db psql -U postgres
```

<br/><br/><br/>
##### **🔹 Managing Images and Builds**


```sh
docker-compose build
```
**Manually builds** the images defined in docker-compose.yml.


```sh
docker-compose pull
```
**Pulls** the latest images from Docker Hub.


```sh
docker-compose up --build
```

Builds images **before starting** the containers.


<br/><br/><br/>
###### **🔹 Handling Volumes and Cleanup**


```sh
docker-compose down -v
```

Removes **all volumes** (useful for resetting database data).


```sh
docker volume ls
```
Lists all volumes created by Compose.


```sh
docker-compose rm
```

Removes **stopped** containers.

<br/><br/><br/>
**🔥 TL;DR: Must-Know Commands**



|**Action** | **Command**|
|-------------|-------------------|
|Start services|  docker-compose up -d|
|Stop and remove everything|  docker-compose down|
|Restart services | docker-compose restart|
|Check running containers | docker-compose ps|
|View logs | docker-compose logs -f|
|Enter a container | docker-compose exec <service> sh|


### **References & Official Docs 📚**

📖 **Docker Basics:** [https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)

📖 **Docker Images vs Containers:** [https://docs.docker.com/storage/storagedriver/](https://docs.docker.com/storage/storagedriver/)

📖 **Learn with Playgrounds:** [https://labs.play-with-docker.com/](https://labs.play-with-docker.com/)


### **Running Your First Self-Hosted App 🚀**

Now that you understand the **basics**, let’s **run a real app** inside a Docker container!

---

[➡️ **Next**](step-05.md)