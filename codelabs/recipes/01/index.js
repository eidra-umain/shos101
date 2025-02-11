const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5006

// Serve all files inside the "data" folder
app.use(express.static(path.join(__dirname, 'data')));

app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    console.log(`Rendering 'pages/index' for route '/'`)
    res.render('data/index')
  })

process.on('SIGTERM', async () => {
    console.log('SIGTERM signal received: gracefully shutting down')
    if (server) {
      server.close(() => {
        console.log('HTTP server closed')
      })
    }
  })
