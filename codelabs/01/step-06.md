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
docker run -d -p 5000:5000 appflowy/appflowy
```


📌 **Go to:** [http://localhost:5000](http://localhost:5000)

📌 Start organizing **your life** for free!



### **5️⃣ Running LinShare (Self-Hosted File Sharing) 📂**



Forget Google Drive—**LinShare** lets you store files **privately**.


```sh
docker run -d -p 8081:8080 linshare/linshare
```


📌 **Go to:** [http://localhost:8081](http://localhost:8081)

📌 Upload **any file**, share it securely.



### **6️⃣ Running Supabase (Firebase Alternative) 🛠️**



Supabase = **a free, open-source Firebase alternative**!


```sh
docker run -d -p 54321:54321 supabase/supabase
```


📌 **Go to:** [http://localhost:54321](http://localhost:54321)

📌 Set up a **backend for your apps** (without Google spying on you 👀).



### **7️⃣ Running Apache Airflow (Task Automation) 💨**



Airflow is used by **Netflix, Uber, and Spotify** to automate stuff!


```sh
docker run -d -p 8082:8080 apache/airflow
```


📌 **Go to:** [http://localhost:8082](http://localhost:8082)

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


---

[➡️ **Next:**](step-06.md)