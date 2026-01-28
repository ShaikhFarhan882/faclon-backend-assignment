# IoT Sensor Backend Assignment

A Node.js backend service designed to ingest IoT sensor temperature readings, persist them to a MongoDB Atlas database, and expose a REST API to retrieve the latest reading for any given device.

## 📋 Features
* **Data Ingestion:** Accepts temperature readings via HTTP POST `POST /api/sensor/ingest` .
* **Data Retrieval:** Fetches the most recent reading for a specific device via HTTP GET `GET /api/sensor/:deviceId/latest` .
* **Persistence:** Stores all data securely in MongoDB Atlas using Mongoose .
* **Validation:** Ensures `deviceId` and `temperature` are present; defaults timestamp to server time if missing .

## 🛠️ Tech Stack
* **Runtime:** Node.js (v18+ or v20 LTS) 
* **Framework:** Express.js
* **Database:** MongoDB (Mongoose ODM)

## 📸 Output Screenshots

Here are the results from testing the API endpoints and verifying data persistence in MongoDB.

### 1. API Testing & Execution
![API Execution 1](https://github.com/user-attachments/assets/b7fb186f-39ff-48e1-a8c7-173c707b875e)

### 2. Response Verification
![API Response 2](https://github.com/user-attachments/assets/03898d97-9e5e-475a-af5d-2eb4c75f467e)

### 3. MongoDB Atlas Persistence
![Database View 3](https://github.com/user-attachments/assets/9baf1b45-0f60-41a0-bcea-7cd1d8b5dc32)

## Setup & Installation

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v18 or higher)
* A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (Free Tier) .

### 2. Clone and Install
```bash
# Clone the repository
git clone https://github.com/ShaikhFarhan882/faclon-backend-assignment/
cd faclon-backend-assignment

# Install dependencies
npm install
