require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Reading = require('./models/Reading');

const app = express();
app.use(bodyParser.json());

// --- 1. Database Connection ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- 2. API Routes ---

// POST: Ingest Sensor Data
app.post('/api/sensor/ingest', async (req, res) => {
  try {
    const { deviceId, temperature, timestamp } = req.body;

    // Validation [cite: 11]
    if (!deviceId || temperature === undefined) {
      return res.status(400).json({ error: 'Missing required fields: deviceId, temperature' });
    }

    const reading = new Reading({
      deviceId,
      temperature,
      timestamp: timestamp || Date.now() // Default to now if missing [cite: 12]
    });

    await reading.save();
    res.status(201).json({ message: 'Data ingested successfully', data: reading });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve Latest Reading
app.get('/api/sensor/:deviceId/latest', async (req, res) => {
  try {
    const { deviceId } = req.params;

    // Find one, sort by timestamp descending (-1) to get the newest [cite: 9]
    const latestReading = await Reading.findOne({ deviceId })
      .sort({ timestamp: -1 })
      .exec();

    if (!latestReading) {
      return res.status(404).json({ error: 'No data found for this device' });
    }

    res.status(200).json(latestReading);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- 3. Start Server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});