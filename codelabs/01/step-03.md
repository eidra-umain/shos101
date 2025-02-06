**Self-Hosting Open-Source 101: Part 1 - Running Your First Open-Source App**

---
**About this codelab**

📅 **Last updated:** Feb 3, 2025

✍️ **Written by:** Jackson Mafra

---

## **3. Understanding Docker, Containers, and Self-Hosting**

Before we start running apps, let’s break down some key concepts in a **simple and informal way**.

### **What is Docker? 🐳**
Think of Docker as a **magic box** that packs everything an app needs—code, libraries, and dependencies—so it runs the same way on any computer. No more **"but it works on my machine!"** issues.

### **What is a Container? 📦**
A container is like a **mini virtual computer**, but much lighter and faster than traditional virtual machines. It runs an app in an isolated environment without messing with your system.

- Imagine you want to test Metabase or WordPress.
- Instead of installing tons of software manually, you **pull a container** that has everything ready.
- You run it, and boom! Your app is up and running in seconds.

### **Containers vs. Virtual Machines (VMs) 🤔**

| Feature            | Containers 🐳 | Virtual Machines 💾 |
|--------------------|--------------|--------------------|
| **Startup Time**   | Seconds ⚡️   | Minutes 🕐       |
| **Resource Usage** | Lightweight 💨 | Heavy 🏋️         |
| **Isolation**      | Shared OS 🏠 | Full OS per VM 🖥  |
| **Portability**    | Very portable 🚀 | Less flexible 📦 |
| **Best For**       | Running multiple apps efficiently 🏃 | Full OS environments 🏗 |

#### **So… Docker is NOT VirtualBox!** 🚫
- **VirtualBox** (or VMware) creates a **full virtual computer** with its own OS.
- **Docker** runs apps in **lightweight containers** using your existing OS.
- If you just need to run an app (like Metabase, WordPress, or n8n), **Docker is the way to go!**

---

### **What are Docker Images? 🖼️**
A **Docker Image** is like a **recipe** 📜 that contains everything needed to run an app:

✅ The app itself

✅ All dependencies and configurations

✅ The operating system environment


#### **How it works:**
1️⃣ You **download (pull) an image** from **Docker Hub** (like an app store for containers).

2️⃣ You **create a container** from the image.

3️⃣ The app runs inside the container.


**Example:**
If you want to self-host **Metabase**, you **pull the Metabase image** and create a container from it.

```sh
docker pull metabase/metabase
docker run -d -p 3000:3000 metabase/metabase
```
> Now, Metabase is running at http://localhost:3000 🚀
---

### **What Does Self-Hosting Mean? 🏠**
Self-hosting means **running an application on your own computer or server instead of relying on a cloud provider** (like Google, AWS, or SaaS platforms).

#### **Why self-host?**
✅ **Control** – Your data, your rules.

✅ **Customization** – Modify and configure the tool however you like.

✅ **Cost-saving** – Avoid paying for cloud subscriptions.


#### **How it works under the hood? ⚙️**

1️⃣ **Docker pulls the app’s image** (a pre-configured blueprint).

2️⃣ **A container starts**, running the app in an isolated environment.

3️⃣ **You access the app** via your browser (e.g., `http://localhost:3000`).

4️⃣ **When you're done, you stop the container**—no mess left behind!


---

## **4. References & Official Docs 📚**

For those who like to dive deeper, here are some useful links:

📖 **Docker Overview:** [https://docs.docker.com/get-started/overview/](https://docs.docker.com/get-started/overview/)

📖 **What is a Container?** [https://www.docker.com/resources/what-container](https://www.docker.com/resources/what-container)

📖 **Containers vs. VMs:** [https://www.docker.com/resources/what-container](https://www.docker.com/resources/what-container/)

📖 **Docker Images Explained:** [https://docs.docker.com/get-started/02_our_app/](https://docs.docker.com/get-started/02_our_app/)

📖 **Self-Hosting Guide:** [https://selfhosted.libhunt.com/](https://selfhosted.libhunt.com/)

📖 **Docker Tutorial: A Step by Step Tutorial for Beginners:** [https://www.simplilearn.com/tutorials/docker-tutorial)

---

[➡️ **Next:**](step-04.md)