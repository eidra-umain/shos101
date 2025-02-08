**Self-Hosting Open-Source 101: Part 2 -Getting Started with Git, GitHub, and Deploying with Heroku**

---
**About this codelab**

📅 **Last updated:** Feb 6, 2025

✍️ **Written by:** Jackson Mafra

---

## **Step 07: Exposing Your Local App to the Internet with Ngrok**



### **What You’ll Learn**



✅ How to make your local app accessible from anywhere

✅ How to use **Ngrok** to create a public URL



### **1️⃣ What is Ngrok?**



**Ngrok** is a tool that creates a **temporary public link** for your local app. This is useful for:



✅ **Testing your app** on real devices

✅ **Sharing your app** without deploying

✅ **Debugging webhook integrations** (like Stripe, Slack, etc.)



### **Why Use Ngrok?**


Normally, sharing your project online is **complicated** because you need to:


✅ Set up **port forwarding** on your router

✅ Get a **static IP address**

✅ Deal with **firewall rules**



With **Ngrok**, you **skip all that**! 🎉 It creates a **temporary online link** to your project, so anyone can access it easily.



### **Common Use Cases for Ngrok**



🔹 **Share your app** with friends without uploading it

🔹 **Test webhooks or APIs** (e.g., Discord bots, payment systems)

🔹 **Play multiplayer games** with custom servers

🔹 **Access your home computer remotely**



### **2️⃣ Install Ngrok**


First, install Ngrok based on your system:


#### **Windows**

Open **Command Prompt as Administrator** and run:


```sh
choco install ngrok
```


#### **Mac**



Open **Terminal** and run:


```sh
brew install ngrok
```


#### **Linux**



Open **Terminal** and run:


```sh
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \
sudo gpg --dearmor -o /etc/apt/keyrings/ngrok.gpg && \
echo "deb [signed-by=/etc/apt/keyrings/ngrok.gpg] https://ngrok-agent.s3.amazonaws.com buster main" | \
sudo tee /etc/apt/sources.list.d/ngrok.list && \
sudo apt update && sudo apt install ngrok
```


### **3️⃣ Connect Ngrok to Your Account**

1.  Go to [ngrok.com](https://ngrok.com/) and **create a free account**.

2.  Copy your **Authtoken** from the **dashboard**.

3.  In **Terminal** or **Command Prompt**, run:


```sh
ngrok config add-authtoken YOUR_AUTHTOKEN
```


Test the installation by running:


```sh
$ ngrok -h
  NAME:
    ngrok - tunnel local ports to public URLs and inspect traffic

  USAGE:
    ngrok [command] [flags]

  DESCRIPTION:
    ngrok exposes local networked services behinds NATs and firewalls to the
    public internet over a secure tunnel. Share local websites, build/test
    webhook consumers and self-host personal services.
    Detailed help for each command is available with 'ngrok help <command>'.
    Open http://localhost:4040 for ngrok's web interface to inspect traffic.

  Author:
    ngrok - <support@ngrok.com>

  TERMS OF SERVICE: https://ngrok.com/tos

  EXAMPLES:
    ngrok http 80                           # secure public URL for port 80 web server
    ngrok http --url baz.ngrok.dev 8080  # port 8080 available at baz.ngrok.dev
    ngrok http foo.dev:80                   # tunnel to host:port instead of localhost
    ngrok http https://localhost            # expose a local https server
    ngrok tcp 22                            # tunnel arbitrary TCP traffic to port 22
    ngrok tls --url=foo.com 443          # TLS traffic for foo.com to port 443
    ngrok start foo bar baz                 # start tunnels from the configuration file

  COMMANDS:
    api                            use ngrok agent as an api client
    completion                     generates shell completion code for bash or zsh
    config                         update or migrate ngrok's configuration file
    credits                        prints author and licensing information
    diagnose                       diagnose connection issues
    help                           Help about any command
    http                           start an HTTP tunnel
    service                        run and control an ngrok service on a target operating system
    start                          start tunnels by name from the configuration file
    tcp                            start a TCP tunnel
    tls                            start a TLS tunnel
    tunnel                         start a tunnel for use with a tunnel-group backend
    update                         update ngrok to the latest version
    version                        print the version string

  OPTIONS:
        --config strings   path to config files; they are merged if multiple
    -h, --help             help for ngrok
    -v, --version          version for ngrok
```



This should print the help text for Ngrok.



### **4️⃣ Start Ngrok**



Start Ngrok by running:


```sh
ngrok http 8000
```

You should see an output like this:


```sh
ngrok (Ctrl+C to quit)


Session Status  online

Account inconshreveable (Plan: Free)

Version 3.0.0

Region  United States (us)

Latency 78ms

Web Interface http:_//127.0.0.1:4040_

Forwarding  https:_//84c5df439d74.ngrok-free.dev -> http://localhost:8000_

```

Now, open the **Forwarding URL** in your browser. 🎉

You now have a **public URL** for your web service.



### **5️⃣ Secure Your Public Endpoint (Optional)**



Since your URL is **public**, it’s important to add security.



#### **Add Basic Authentication**



To require a username and password, run:


```sh
ngrok http 8000 --basic-auth 'ngrok:issecure'
```


Now, visitors will be prompted to log in before accessing your app.



#### **Use OAuth 2.0 for Authentication**



To allow **Google sign-in**, run:


```sh
ngrok http 8000 --oauth google
```


If you have a paid plan, you can allow specific email addresses:


```sh
ngrok http 8000 --oauth-allow-email your-email@gmail.com
```


### **6️⃣ Starting a Local Web Service**



Before using Ngrok, make sure you have a **local web service running**.



**Quick Setup Using Python**

1.  Open **Terminal** or **Command Prompt**.

2.  Create a new directory and navigate to it:


```sh
mkdir ~/ngrok-demo && cd ~/ngrok-demo
```


3.  Create an **index.html** file with the following content:


```html
<h1>Hello, World!</h1>
```

4.  Start a basic **local web server** using Python:


```sh
python3 -m http.server 8000
```


5.  Open **http://localhost:8000** in your browser to see your page.



Now, you can **expose this local service using Ngrok**:


```sh
ngrok http 8000
```

Your local webpage is now **accessible from anywhere!** 🌍



### **7️⃣ Why is Ngrok Useful?**



📌 **Test your app on your phone** – Open the Ngrok link on your phone.

📌 **Share with others** – Send the link to a friend, and they can see your app.

📌 **Webhook Testing** – If a service (like PayPal or GitHub) needs to send data to your app, use Ngrok.



Now you’re all set to expose your local app to the internet securely! 🚀
