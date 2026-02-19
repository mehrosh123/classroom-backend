import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = 8000;

// JSON middleware to parse incoming requests
app.use(express.json());

// Root GET route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello! Your TypeScript Express server is running smoothly."
  });
});

// Start server and log the URL
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});