**Self-Hosting Open-Source 101: Part 2 -Getting Started with Git, GitHub, and Deploying with Heroku**

---
**About this codelab**

📅 **Last updated:** Feb 6, 2025

✍️ **Written by:** Jackson Mafra

---

## **Step 03: Git vs. GitHub & Alternatives**


### ****Skills Covered****

- Difference between Git and GitHub

- Understanding Git hosting platforms

- Comparing GitHub, GitLab, Bitbucket, and Heroku

- When to use self-hosted vs. cloud Git solutions


---


## ****Topics Covered****

✅ What is GitHub?

✅ How GitHub works with Git

✅ Alternative Git platforms (GitLab, Bitbucket, Azure DevOps)

✅ Git-based deployment with ****Heroku****

✅ Self-hosted vs. cloud-based Git services

✅ Choosing the right platform for your project



---



## ****Git vs. GitHub – What’s the Difference?****



| Feature | Git | GitHub |
|---------|----|-------|
| What it is | A ****version control system**** that tracks changes in code | A ****cloud-based service**** that hosts Git repositories |
| Where it runs | On your ****local machine**** | On the ****internet/cloud**** |
| Collaboration | Can be used alone or in teams | Makes it easy to ****collaborate**** with others |
| Access Control | No built-in user management | Supports teams, permissions, and access control |
| Features | Branching, merging, tracking changes | Issue tracking, pull requests, CI/CD integrations |



### ****Think of it this way:****

- ****Git**** is like having a "Save" button for your entire project.

- ****GitHub**** is like a ****Google Drive**** for your Git projects—it helps teams store, share, and manage code.

---

## ****Why Use GitHub?****

✅ ****Remote Storage**** – Keep your projects safe in the cloud

✅ ****Collaboration**** – Work with others easily using Pull Requests

✅ ****Issue Tracking**** – Manage bugs, features, and discussions

✅ ****CI/CD Integration**** – Automate testing and deployment

✅ ****Open Source & Portfolio**** – Share your work and contribute to projects



---
## ****Alternatives to GitHub****



GitHub is the most popular Git platform, but it’s not the only option!



| Platform | Best For | Features |
|----------|---------|----------|
| ****GitHub**** | Open-source & team collaboration | Public/private repos, actions for CI/CD, large community |
| ****GitLab**** | Enterprises & DevOps | Built-in CI/CD, self-hosting options |
| ****Bitbucket**** | Teams using Jira & Atlassian tools | Deep integration with Jira, pipelines for CI/CD |
| ****Azure DevOps**** | Microsoft ecosystem | Strong integration with Azure, built-in DevOps tools |
| ****Heroku**** | Deploying applications with Git | Simple Git-based deployment, free-tier hosting |

---

## ****Using Heroku for Git-Based Deployment****


Heroku is a ****platform-as-a-service (PaaS)**** that allows developers to ****deploy applications using Git****.


✅ ****Why Use Heroku?****

- Simple ****Git-based deployment**** (`git push heroku main`)

- Free tier available for testing & small apps

- Supports ****Node.js, Python, Ruby, Java****, and more

- Integrates with ****GitHub**** and ****CI/CD tools****

- Built-in ****PostgreSQL database**** support



### **Self-Hosted vs. Cloud-Based Git Services**


| **Hosting Type** |   **Pros** |  **Cons**|
|--|--|--|
| **Cloud-based (GitHub, GitLab, Bitbucket, Heroku)** | Easy setup, no maintenance, accessible from anywhere |Limited control over data|
|**Self-hosted (GitLab Self-Managed, Gitea, Gogs)**|Full control, better security, no external dependencies|Requires maintenance, higher setup effort |


### **When to choose self-hosting?**

•  Your company has strict **security policies**

•  You want **full control** over data

•  You need to host Git repositories **inside your own network**



### **Which Git Platform Should You Use?**

#### **Use GitHub if:**

•  You’re working on **open-source projects**

•  You want a simple and **popular** solution

•  You need **GitHub Actions for automation**


####**Use GitLab if:**

•  You need **strong built-in CI/CD pipelines**

•  You prefer a **self-hosted** solution

•  Your company follows a **DevOps workflow**



####**Use Bitbucket if:**

•  Your team already uses **Jira & Atlassian tools**

•  You want a **cheaper option** for private repos

•  You prefer **Bitbucket Pipelines for CI/CD**


#### **Use Heroku if:**

•  You want a **simple Git-based deployment**

•  You need a **quick way to host applications**

•  You prefer **automatic scaling & easy database integration**

---

## **References & Further Learning**



For a deeper dive into Git hosting platforms and Heroku, check out:



📌 [GitHub Documentation](https://docs.github.com/)

📌 [GitLab Documentation](https://docs.gitlab.com/)

📌 [Bitbucket Documentation](https://bitbucket.org/product/guides)

📌 [Microsoft Azure DevOps](https://azure.microsoft.com/en-us/products/devops/)

📌 [Heroku Getting Started Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)


---

**Next Step →** [**Step 04: Installing Git & Setting Up GitHub**](step-04.md) **🚀**