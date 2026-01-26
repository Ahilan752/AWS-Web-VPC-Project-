# Highly Available Web Application Architecture on AWS

This project demonstrates the design and deployment of a **highly available and scalable web application** on AWS using core cloud services and best practices.

## 🖼️ Architecture Diagram

![AWS Architecture Diagram](architecture-diagram.png)


---

## 📌 Project Overview

The application is deployed inside a custom **AWS VPC spanning two Availability Zones**.  
It uses **EC2 instances in public subnets**, an **Application Load Balancer**, **Auto Scaling**, 
and **Amazon RDS MySQL (Multi-AZ) in private subnets** to ensure high availability, scalability, and security.

Users access a web-based form hosted on EC2, and the submitted data is securely stored and retrieved from the RDS database.

---

## 🏗️ Architecture Summary

- Custom VPC with **2 Availability Zones**
- **Public Subnets**
  - EC2 instances (Frontend + Backend)
  - Application Load Balancer (ALB)
  - Auto Scaling Group (ASG)
- **Private Subnets**
  - Amazon RDS MySQL (Multi-AZ)

---

## 🔁 Application Workflow

1. User accesses the application via the **public internet**
2. Traffic enters the VPC through the **Internet Gateway (IGW)**
3. Request reaches the **Application Load Balancer DNS URL**
4. Application Load Balancer distributes traffic to EC2 instances
5. EC2 instances serve the frontend and backend application
6. User submits data through the web form
7. Backend processes the request
8. Data is stored securely in **Amazon RDS MySQL (Private Subnet)**
9. Stored data can be retrieved and displayed from the database

---

## 🔐 Security Features

- **Internet Gateway** enables controlled public access to the application
- Load Balancer acts as the single entry point for users
- EC2 instances run in **public subnets** with controlled inbound access
- RDS is deployed in **private subnets (not publicly accessible)**
- Database access restricted only to EC2 Security Group
- Network isolation using public and private subnets

---

## ⚙️ AWS Services Used

- Amazon VPC
- Internet Gateway (IGW)
- Amazon EC2
- Application Load Balancer (ALB)
- Auto Scaling Group (ASG)
- Amazon RDS MySQL (Multi-AZ)
- Security Groups
- Route Tables

---

## 🚀 Key Highlights

- Highly available Multi-AZ architecture
- Load-balanced and auto-scaled EC2 application layer
- Secure database deployment in private subnets
- No direct internet access to the database
- Designed using AWS best practices

---

## 📈 Learning Outcome

- Hands-on experience with AWS VPC and networking
- Implemented load balancing and auto scaling
- Understood high availability and fault tolerance concepts
- Gained practical experience with RDS MySQL Multi-AZ
- Learned real-world AWS architecture design

---
## 🔮 Future Enhancements

- Add a **VPC Endpoint for Amazon S3** to allow EC2 instances to access S3 securely without using the public internet.
- Improve security by keeping all AWS service traffic within the AWS private network.
- Extend the architecture with additional monitoring and logging services.
  
---

