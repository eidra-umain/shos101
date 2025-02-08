**Self-Hosting Open-Source 101: Part 2 -Getting Started with Git, GitHub, and Deploying with Heroku**

---
**About this codelab**

📅 **Last updated:** Feb 6, 2025

✍️ **Written by:** Jackson Mafra

---

## ****Step 04: Installing Git & Setting Up GitHub****



### ****What You’ll Learn****

✅ Install Git on your computer

✅ Set up your name and email in Git

✅ Create a GitHub account

✅ Connect GitHub with your computer



---



### ****1️⃣ Install Git****



Git is a tool that helps you save different versions of your work.



#### ****Windows****

1️⃣ Download Git from [git-scm.com](https://git-scm.com/downloads)

2️⃣ Open the file and install it (just click "Next" until it finishes)

3️⃣ Open ****Command Prompt**** and check if it works:

```sh
git --version
```


**Mac**



1️⃣ Open **Terminal** (search for it on your Mac)

2️⃣ Install Git using this command:


```sh
brew install git
```


3️⃣ Check if Git is installed:


```sh
git --version
```


**Linux (Ubuntu/Debian)**



1️⃣ Open **Terminal**

2️⃣ Install Git:


```sh
sudo apt update && sudo apt install git -y
```


3️⃣ Check if Git is installed:


```sh
git --version
```


**2️⃣ Set Up Your Name & Email in Git**



Every time you save changes, Git needs to know **who you are**.



Open **Command Prompt (Windows)** or **Terminal (Mac/Linux)** and type:


```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```


To check if it worked:


```
git config --list
```


**3️⃣ Create a GitHub Account**



GitHub is like **Google Drive for code**. It saves all your Git projects online.



1️⃣ Go to [GitHub](https://github.com/)

2️⃣ Click **“Sign Up”**

3️⃣ Fill in your details and create an account

4️⃣ Verify your email and log in



**4️⃣ Connect GitHub to Your Computer**



After installing Git and setting up GitHub, let’s connect them!



1️⃣ Open **GitHub** and create a new repository:

•  Click **“New”**

•  Give it a name (e.g., **my-first-project**)

•  Click **“Create repository”**



2️⃣ Copy the **HTTPS** link shown after creating the repo



3️⃣ Open **Command Prompt (Windows)** or **Terminal (Mac/Linux)** and type:


```sh
git clone [PASTE YOUR LINK HERE]
```


Example:


```sh
git clone https://github.com/your-username/my-first-project.git
```


This downloads the project to your computer! 🎉

<br/><br/>

### ****1️⃣ What is a Commit?****

A ****commit**** is like saving your progress in a game. It creates a "checkpoint" so you can go back if needed.


With Git, you:

1️⃣ ****Track your changes****

2️⃣ ****Save them with a message****

3️⃣ ****Send them to GitHub****

---

### ****2️⃣ Making Your First Commit****



#### ****Step 1: Go to Your Project Folder****

Open ****Command Prompt (Windows)**** or ****Terminal (Mac/Linux)**** and go to your project folder:



```sh
cd my-first-project
```


**Step 2: Create a New File**


Let’s create a simple file to test Git.


**Windows (Command Prompt)**


```sh
echo "Hello, Git!" > hello.txt
```


**Mac/Linux (Terminal)**


```sh
echo "Hello, Git!" > hello.txt
```


**Step 3: Tell Git to Track the File**


```sh
git add hello.txt
```


This tells Git to **pay attention** to this file.



**Step 4: Save Your Changes (Commit)**


```sh
git commit -m "Added hello.txt"
```


✅ The -m means “message.”

✅ The text inside quotes is a short **description** of what you changed.



**3️⃣ Sending Your Changes to GitHub**



Now, let’s send (push) our commit to GitHub!


```sh
git push origin main
```


✅ origin = GitHub

✅ main = The main branch of your project



After this, go to your **GitHub repository**, refresh the page, and **you will see your file online!** 🎉

**References & More Learning**



📌 [GitHub: Getting Started](https://docs.github.com/en/get-started)

📌 [Git Basics](https://www.w3schools.com/git/)

---

**Next Step →** [**Step 05: Understanding Heroku and Setting Up a Deployment**](step-05.md) **🚀**