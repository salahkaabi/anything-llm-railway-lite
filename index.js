const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('✅ AnythingLLM Lite running on Railway Cloud!');
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});