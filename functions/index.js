const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Get visitor count
exports.getVisitorCount = functions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    // Handle preflight request
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send("");
    return;
  }

  try {
    const snapshot = await admin.database().ref("visitorCount").once("value");
    const count = snapshot.val() || 0;

    res.status(200).json({count: count});
  } catch (error) {
    console.error("Error getting visitor count:", error);
    res.status(500).json({error: "Failed to retrieve visitor count"});
  }
});

// Increment visitor count
exports.incrementVisitorCount = functions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    // Handle preflight request
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({error: "Method not allowed"});
    return;
  }

  try {
    // Get current count
    const countRef = admin.database().ref("visitorCount");

    // Use a transaction to safely increment
    const result = await countRef.transaction((currentCount) => {
      return (currentCount || 0) + 1;
    });

    res.status(200).json({count: result.snapshot.val()});
  } catch (error) {
    console.error("Error incrementing visitor count:", error);
    res.status(500).json({error: "Failed to increment visitor count"});
  }
});
