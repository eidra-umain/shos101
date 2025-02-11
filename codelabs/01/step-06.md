**Self-Hosting Open-Source 101: Part 1 - Running Your First Open-Source App**

---
**About this codelab**

📅 **Last updated:** Feb 3, 2025

✍️ **Written by:** Jackson Mafra

---

## Running Your First Apps in Docker


Got it! Now, let’s move on to the **next step**—actually running some **cool self-hosted apps** inside Docker. 🐳💡

We’ll keep it **super simple** and **fun** (just like before) so that even if you’ve **never** run a server before, you can get things up and running in **minutes**. 🚀


### ****Now it's time for the fun part! 🎉****

In this section, you’ll learn how to ****run awesome open-source apps**** like:

✅ ****Metabase**** (Data analytics 📊)

✅ ****WordPress**** (Website builder / CMS 📝)

✅ ****n8n**** (No-code automation 🤖)

✅ ****AppFlowy**** (Notion alternative 🗂️)

✅ ****LinShare**** (File sharing 📂)

✅ ****Supabase**** (Firebase alternative 🛠️)

✅ ****Airflow**** (Task automation 💨)

Instead of ****installing**** them manually (which is a pain 😩), we’ll use ****Docker**** to set them up in ****seconds****.



---


### ****1️⃣ Running Metabase (Data Analytics Dashboard) 📊****


Metabase is like ****Google Analytics****, but you own it! 🚀

To run it in Docker, just enter this command:


```sh
docker run -d -p 3000:3000 metabase/metabase
```


📌 **Go to:** [http://localhost:3000](http://localhost:3000)

📌 Set up your admin account, and BOOM—you have a data dashboard!



### **2️⃣ Running WordPress (Website Builder) 📝**



Want to build a blog? WordPress is the **OG website maker**!



Run this:


```sh
docker run -d -p 8080:80 wordpress
```


📌 **Go to:** [http://localhost:8080](http://localhost:8080)

📌 Follow the setup wizard, and **you’re live!** 🎉



### **3️⃣ Running n8n (No-Code Automation) 🤖**



n8n is like **Zapier**, but **free**!



Run this:


```sh
docker run -d -p 5678:5678 n8nio/n8n
```


📌 **Go to:** [http://localhost:5678](http://localhost:5678)

📌 Create workflows like **“Send an email when someone tweets about me”** 🚀



### **4️⃣ Running AppFlowy (Notion Alternative) 🗂️**



Want **Notion**, but without paying $$$? **AppFlowy** is the answer!


```sh
git clone https://github.com/AppFlowy-IO/AppFlowy-Cloud
cd AppFlowy-Cloud
```

Setting up the .env file for AppFlowy

First, we need to copy the  `.env`  file:

```bash
cp deploy.env .env
```

Start by pulling all of the relevant docker images:

```bash
docker compose pull
```

Now test that everything works by deploying the AppFlowy stack:

```bash
docker compose up -d
```


📌 **Go to:** [http://localhost](http://localhost)

📌 Start organizing **your life** for free!


### **5️⃣ Running LinShare (Self-Hosted File Sharing) 📂**


Forget Google Drive—**LinShare** lets you store files **privately**.


Clone the LinShare Repository:
```sh
git clone https://github.com/linagora/linshare-docker.git
cd linshare-docker
```

This command will start multiple containers, including:

 - Tomcat with the LinShare server
 - PostgreSQL and MongoDB databases
 - Apache2 for the LinShare interfaces
 - ClamAV for virus scanning
 - LDAP directory for user management

```sh
docker  compose  up -d
```

Configure the Hosts File:

Add the following entries to your /etc/hosts file to access the LinShare interfaces:

```plaintext
127.0.0.1 admin.linshare.local user.linshare.local linshare.local traefik.linshare.local
```

Access the LinShare Admin Interface:

Once the containers are running, access the admin interface by navigating to 📌 **Go to:** [admin](https://admin.linshare.local) . Use the default credentials:

> Username: `root@localhost.localdomain`

> Password: `adminlinshare`

From here, you can configure domains, LDAP connections, and other administrative settings.

📌 Upload **any file**, share it securely.


### **6️⃣ Running Supabase (Firebase Alternative) 🛠️**

Supabase = **a free, open-source Firebase alternative**!



Get the code
```sh
git clone --depth 1 https://github.com/supabase/supabase
```

Go to the docker folder

```sh
cd supabase/docker
```

Copy the fake env vars

```sh
cp .env.example .env
```

Pull the latest images

```sh
docker compose pull
```

Start the services (in detached mode)
```sh
docker compose up -d
```

📌 **Go to:** [http://localhost:8000](http://localhost:8000)

📌 Set up a **backend for your apps** (without Google spying on you 👀).



### **7️⃣ Running Apache Airflow (Task Automation) 💨**



Airflow is used by **Netflix, Uber, and Spotify** to automate stuff!


Fetching docker-compose.yaml [Docs Link](https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html#fetching-docker-compose-yaml)

```sh
curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.10.4/docker-compose.yaml'
```


##### Setting the right Airflow user[](https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html#setting-the-right-airflow-user "Permalink to this heading")

On  **Linux**, the quick-start needs to know your host user id and needs to have group id set to  `0`. Otherwise the files created in  `dags`,  `logs`  and  `plugins`  will be created with  `root`  user ownership. You have to make sure to configure them for the docker-compose:

```sh
mkdir  -p  ./dags  ./logs  ./plugins  ./config
echo  -e  "AIRFLOW_UID=$(id  -u)"  >  .env
```


#####  Initialize the database[](https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html#initialize-the-database "Permalink to this heading")

On  **all operating systems**, you need to run database migrations and create the first user account. To do this, run.

```sh
docker  compose  up  airflow-init
```

##### Running Airflow[](https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html#running-airflow "Permalink to this heading")

Now you can start all services:

```sh
docker  compose  up -d
```

📌 **Go to:** [http://localhost:8080](http://localhost:8080)

📌 Automate tasks like **“Download new movies every Friday at 8 PM”** 🎥



### **Final Tips 💡**



✅ **Stopping an App:**

If you want to **stop** any app, run:


```sh
docker stop <container_id>
```


Find the container ID by running:


```
docker ps
```


✅ **Removing an App:**

To **remove** an app completely, run:


```
docker rm <container_id>
```


✅ **Checking Logs (Debugging):**

If something isn’t working, check the logs:


```
docker logs <container_id>
```

---

> The more advanced stuff—like keeping apps running after a restart, updating them, and backing up data—will be in an intermediate/advanced course for those who need it.


---

## **📌 Official Docker Images & Documentation**



Here are the official Docker images and documentation for the apps we’ll be using. These links will help you find more details, troubleshooting tips, and advanced configurations if needed.



🔹 **Metabase**

 - [Docker Image](https://hub.docker.com/r/metabase/metabase)

 - [Official Docs](https://www.metabase.com/docs/latest/installation-and-operation/running-metabase-on-docker)



🔹 **WordPress**

 - [Docker Image](https://hub.docker.com/_/wordpress)

 - [Official Docs](https://wordpress.org/documentation/article/hosting-wordpress/)



🔹 **n8n**

 - [Docker Image](https://hub.docker.com/r/n8nio/n8n)

 - [Official Docs](https://docs.n8n.io/courses/level-one/)



🔹 **AppFlowy**

 - [Docker Image](https://hub.docker.com/r/appflowyio/appflowy_client)

 - [Official Docs](https://docs.appflowy.io/docs/appflowy/install-appflowy/installation-methods/installing-with-docker)



🔹 **LinShare**

 - [Docker](https://github.com/linagora/linshare-docker)

 - [Official Docs](https://github.com/linagora/linshare)



🔹 **Supabase**

 - [Official Docs](https://supabase.com/docs/guides/hosting/docker)



🔹 **Apache Airflow**

 - [Docker Image](https://hub.docker.com/r/apache/airflow)

 - [Official Docs](https://airflow.apache.org/docs/apache-airflow/stable/howto/docker-compose/index.html)
