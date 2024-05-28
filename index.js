require("dotenv").config();
const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = process.env.PORT || 3000; // Choose a port for your server

app.get('/restart-container', (req, res) => {
    const containerName = process.env.CONTAINER_NAME || ""

    if (!containerName) {
        return res.status(400).json({ error: 'Container name not provided' });
    }

    // Command to restart Docker container
    const command = `docker restart ${containerName}`;

    // Execute the command
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error restarting container ${containerName}: ${stderr}`);
            return res.status(500).json({ error: `Error restarting container ${containerName}` });
        }
        console.log(`Container ${containerName} restarted successfully`);
        res.status(200).json({ message: `Container ${containerName} restarted successfully` });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
