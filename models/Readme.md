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

---

## Setup & Installation

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v18 or higher)
* A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (Free Tier) .

### 2. Clone and Install
```bash
# Clone the repository
git clone <YOUR_GITHUB_REPO_LINK>
cd faclon-backend-assignment

# Install dependencies
npm install