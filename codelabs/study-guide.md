# Self-Hosting Open-Source Study Guide

## Quiz

1.  What is the key difference between free software and open-source software?
2.  Explain what Docker is and how it simplifies application deployment.
3.  Describe the difference between a Docker image and a Docker container.
4.  What are three advantages of self-hosting open-source applications?
5.  Name three open-source applications that can be easily run using Docker, as mentioned in the provided texts.
6.  What is Git and why is it useful for project management?
7.  Explain the difference between Git and GitHub.
8.  What is Heroku, and what is it primarily used for?
9.  What command do you use in Git to save your changes locally?
10.  What is Ngrok, and what problem does it solve?

## Quiz Answer Key

1.  The key difference is that free software focuses on user rights to use, modify, and share, but the source code may not be available, while open-source software always makes the source code publicly available for modification and distribution.
2.  Docker is a platform that packages an application with all its dependencies into a standardized unit for software development, enabling applications to run reliably across different computing environments by using containers.
3.  A Docker image is a read-only template or a "recipe" that defines everything needed to run an application, while a Docker container is a runnable instance of that image, providing an isolated environment for the application.
4.  Three advantages of self-hosting are increased control over your data, the ability to customize the tool to your specific needs, and potential cost savings by avoiding subscription fees for cloud-based services.
5.  Metabase, WordPress, and n8n are three open-source applications mentioned that can be easily run using Docker, allowing for quick setup and management of these tools.
6.  Git is a distributed version control system that tracks changes to files, allowing users to revert to previous versions, collaborate with others, and manage different branches of a project.
7.  Git is a version control system installed locally, while GitHub is a cloud-based hosting service for Git repositories. GitHub provides collaboration features, issue tracking, and remote storage for Git projects.
8.  Heroku is a platform-as-a-service (PaaS) that allows developers to deploy, manage, and scale applications easily.
9.  The command used in Git to save your changes locally is git commit -m "message", where "message" is a short description of the changes made.
10.  Ngrok is a tool that creates secure tunnels from a local machine to the public internet, allowing developers to expose local servers and applications for testing and demonstration purposes.

## Essay Questions

1.  Discuss the benefits and drawbacks of self-hosting open-source applications compared to using Software as a Service (SaaS) solutions. Consider factors such as cost, control, security, and maintenance.
2.  Explain the role of Docker in modern application development and deployment. How does it simplify the process of running applications across different environments, and what are its limitations?
3.  Compare and contrast different Git hosting platforms, such as GitHub, GitLab, and Bitbucket. Discuss the unique features and target audiences of each platform, and provide recommendations for choosing the right platform for specific projects.
4.  Describe the process of deploying a Docker application to Heroku using Git. What are the advantages of using Heroku for deployment, and what are some potential challenges or limitations?
5.  Explain how Ngrok can be used to expose a local application to the internet. Discuss the benefits of using Ngrok for development and testing, and outline the security considerations that should be taken into account when using the tool.

## Glossary of Key Terms

-   **Self-Hosting:** The practice of hosting software applications on your own infrastructure, rather than relying on a third-party service provider.
-   **Open-Source Software:** Software with source code that is publicly available and can be viewed, modified, and distributed by anyone.
-   **Free Software:** Software that grants users the freedom to run, study, distribute, and modify it without restrictions, but source code might not be available.
-   **Docker:** A platform for packaging, distributing, and running applications in isolated environments called containers.
-   **Container:** A lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries, and settings.
-   **Docker Image:** A read-only template used to create Docker containers, containing the application code, dependencies, and runtime environment.
-   **Docker Hub:** A public registry for Docker images, similar to an app store for containers.
-   **Virtual Machine (VM):** A software-based emulation of a computer system, providing a complete virtual environment with its own operating system.
-   **Git:** A distributed version control system used for tracking changes in source code during software development.
-   **GitHub:** A web-based platform that provides hosting for Git repositories, along with collaboration features, issue tracking, and project management tools.
-   **GitLab:** A web-based DevOps lifecycle tool that provides Git repository management, CI/CD pipelines, and other features for software development and deployment.
-   **Bitbucket:** A web-based version control repository management solution designed for teams using Atlassian products like Jira.
-   **Repository:** A storage location for software packages.
-   **Commit:** A saved snapshot of changes made to a file or set of files in a Git repository.
-   **Push:** The action of uploading local commits to a remote Git repository, such as GitHub or GitLab.
-   **Pull:** The action of downloading changes from a remote Git repository to a local Git repository.
-   **Branch:** A parallel version of a repository, allowing developers to work on new features or bug fixes without affecting the main codebase.
-   **Merge:** The process of combining changes from one branch into another in a Git repository.
-   **Heroku:** A platform-as-a-service (PaaS) that allows developers to deploy, manage, and scale applications easily.
-   **Ngrok:** A tool that creates secure tunnels from a local machine to the public internet, allowing developers to expose local servers and applications for testing and demonstration purposes.
-   **Dockerfile:** A text document that contains all the commands a user could call on the command line to assemble an image.
-   **CI/CD:** Continuous Integration and Continuous Delivery, a set of practices that automate the software development process.
-   **DevSecOps:** The integration of security practices into the DevOps workflow.