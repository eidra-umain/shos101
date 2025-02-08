**Self-Hosting Open-Source 101: Part 2 -Getting Started with Git, GitHub, and Deploying with Heroku**

---
**About this codelab**

📅 **Last updated:** Feb 6, 2025

✍️ **Written by:** Jackson Mafra

---
## ****Step 05: Understanding Heroku and Setting Up a Deployment****


### ****What You’ll Learn****

✅ What Heroku is and how it helps you deploy your app

✅ How to create a Heroku account

✅ How to deploy your project to Heroku



---



### ****1️⃣ What is Heroku?****

Heroku is a platform that makes it easy to deploy (put online) your web apps and projects. It’s like a home for your project, but on the internet. Instead of worrying about setting up a server, Heroku takes care of it for you!



---



### ****2️⃣ Setting Up Heroku****

#### ****Create a Heroku Account****

1. Go to [Heroku](https://www.heroku.com) and sign up for a free account.

2. After signing up, log in to your account.



---



### ****Install Heroku CLI****

Heroku CLI (Command Line Interface) lets you control your Heroku apps from your computer. To install it:



1. Go to [Heroku CLI Downloads](https://devcenter.heroku.com/articles/heroku-cli)

2. Follow the instructions based on your operating system (Windows, macOS, or Linux).



Once installed, you can use Heroku commands in your terminal!



---



## ****3️⃣ Deploying Your App to Heroku****



Let’s get your project online!



### ****Step 1: Log into Heroku****

In your terminal, type:



```sh
heroku login
```


This will open a browser window where you can log in with your Heroku account.



**Step 2: Create a New Heroku App**



Now, create a new Heroku app for your project by typing:


```sh
heroku create
```


Heroku will create a new app with a random name and provide a URL (like https://your-app-name.herokuapp.com). You can use this URL to access your app online.



**Step 3: Push Your Project to Heroku**



Now, let’s push your project to Heroku. First, make sure you’ve committed all your changes in Git. Then run:


```sh
git push heroku main
```


This sends your project to Heroku and deploys it online!



**Step 4: Open Your App**



Once the deployment is finished, you can open your app by running:


```sh
heroku open
```

Your app will open in the browser with the URL provided earlier.


**4️⃣ What’s Next?**


Congrats! Your project is now live! 🎉

You can make changes to your code and simply push them to Heroku with the same git push heroku main command to update your app.


---
**Next Step →** [**Step 06: Running a Docker App on Heroku**](step-06.md) **🚀**