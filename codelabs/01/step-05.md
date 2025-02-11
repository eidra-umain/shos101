**Self-Hosting Open-Source 101: Part 1 - Running Your First Open-Source App**

---
**About this codelab**

📅 **Last updated:** Feb 3, 2025

✍️ **Written by:** Jackson Mafra

---

## Installing the Tools


Before we start running self-hosted applications, let’s set up the **tools** you’ll need.

## ****Minimum System Requirements 🖥️****

Before installing, make sure your system meets these ****minimum requirements****:


| Component  | Minimum Requirements |
|---------------|----------------------|
| ****OS****  | Windows 10/11, macOS 11+, Linux (Ubuntu/Debian/Fedora) |
| ****CPU**** | 64-bit processor (Intel/AMD) |
| ****RAM**** | At least ****8GB**** (16GB+ recommended) |
| ****Storage**** | ****20GB+ free space**** for Docker images/containers |
| ****Internet****  | Required for downloading tools and images |


---

## ****Installing the Required Tools 🔧****


We’ll install:

✅ ****Docker**** (for running containers)

✅ ****Git**** (for managing code and pulling repositories)

✅ ****Ngrok**** (for exposing local apps to the internet)

✅ ****VS Code / Sublime Text 3**** (for editing config files and code)

✅ ****Python 3**** ( Required for some self-hosted tools and scripting)

✅ ****Node.js & npm ****  (Essential for JavaScript-based applications)

---



### ****Installing Docker 🐳****

#### ****Windows****

1️⃣ Download Docker Desktop: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

2️⃣ Run the installer and follow the steps.

3️⃣ Restart your PC if needed.

4️⃣ Open ****Command Prompt**** (cmd) and check if Docker is installed:

```sh
docker --version
```

5️⃣ If it prints a version number, Docker is ready! 🚀



#### ****Mac****


1️⃣ Download Docker Desktop for Mac: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

2️⃣ Install it and restart your Mac.

3️⃣ Open **Terminal** and check:


```sh
docker --version
```

4️⃣ If you see a version, Docker is running! 🎉


#### ****Linux (Ubuntu/Debian)****

1️⃣ Open Terminal and run:


```sh
sudo apt update
sudo apt install docker.io
```

2️⃣ Add your user to the Docker group (so you don’t need sudo every time):


```sh
sudo usermod -aG docker $USER
```

3️⃣ Restart your computer.

4️⃣ Verify installation:


```sh
docker --version
```


### **Installing Git 🛠️**


#### **Windows**

1️⃣ Download Git for Windows: [https://git-scm.com/downloads](https://git-scm.com/downloads)

2️⃣ Run the installer (default settings are fine).

3️⃣ Open **Command Prompt** and check:


```sh
git --version
```

#### **Mac**

1️⃣ Open Terminal and install Git using Homebrew:


```sh
brew install git
```

2️⃣ Check installation:


```sh
git --version
```

#### **Linux (Ubuntu/Debian)**


1️⃣ Install Git via Terminal:


```sh
sudo apt install git
```

2️⃣ Check installation:


```sh
git --version
```


### **Installing Ngrok 🌍**

Ngrok allows you to expose your local app to the internet.

#### **Windows & Mac**

1️⃣ Download Ngrok: [https://ngrok.com/download](https://ngrok.com/download)

2️⃣ Extract it to a folder (e.g., C:\ngrok\ on Windows).

3️⃣ Open **Command Prompt/Terminal** and authenticate:


```sh
ngrok authtoken YOUR_AUTH_TOKEN
```

_(Sign up on the website to get a free auth token!)_


#### **Linux**

1️⃣ Install via Terminal:


```sh
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip

unzip ngrok-stable-linux-amd64.zip

sudo mv ngrok /usr/local/bin/
```

2️⃣ Authenticate:


```sh
ngrok authtoken YOUR_AUTH_TOKEN
```


### Installing Python 3 🐍

#### Windows

1️⃣ Download Python 3: https://www.python.org/downloads/

2️⃣ Run the installer and check the box “Add Python to PATH”.

3️⃣ Verify the installation:

```sh
python --version
```

#### Mac

1️⃣ Install Python 3 using Homebrew:

```sh
brew install python
```

2️⃣ Verify the installation:

```sh
python3 --version
```

#### Linux (Ubuntu/Debian)

1️⃣ Install Python 3 via Terminal:

```sh
sudo apt install python3 python3-pip
```

2️⃣ Verify the installation:

```sh
python3 --version
```


### Installing Node.js & npm 🟢

#### Windows

1️⃣ Download Node.js (LTS version) from: https://nodejs.org/

2️⃣ Run the installer (includes npm by default).

3️⃣ Verify the installation:

```sh
node --version
npm --version
```

#### Mac

1️⃣ Install Node.js and npm using Homebrew:

```sh
brew install node
```

2️⃣ Verify the installation:

```sh
node --version
npm --version
```

#### Linux (Ubuntu/Debian)

1️⃣ Install Node.js and npm:

```sh
sudo apt install nodejs npm
```

2️⃣ Verify the installation:

```sh
node --version
npm --version
```

This keeps the instructions short and consistent with the existing format. 🚀 Let me know if you need any tweaks!


### **Installing a Code Editor 📝**


You can use **VS Code** or **Sublime Text 3** to edit configuration files.

#### **VS Code**

1️⃣ Download VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2️⃣ Install it and open a project folder.


#### **Sublime Text 3**

1️⃣ Download: [https://www.sublimetext.com/3](https://www.sublimetext.com/3)

2️⃣ Install and open it.


### **Verify Everything is Installed ✅**


After installing, run these commands to check if everything is working:


```sh
docker --version

git --version

ngrok --version
```

If you see version numbers, **you’re ready to start! 🚀**


### **References & Official Docs 📚**

📖 **Docker Installation:** [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

📖 **Git Installation:** [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

📖 **Ngrok Docs:** [https://ngrok.com/docs](https://ngrok.com/docs)

📖 **VS Code:** [https://code.visualstudio.com/](https://code.visualstudio.com/)


---

[➡️ **Next**](step-06.md)