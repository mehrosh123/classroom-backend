import AgentApi from 'apminsight';
AgentApi.config();
import express from 'express';
import type { Request, Response } from 'express';
import type { AddressInfo } from 'node:net';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import subjectRouter from './routes/subject.js';
import securityMiddleware from './middleware/security.js';
import { auth } from './lib/auth.js';

const app = express();
const PORT = Number(process.env.PORT) || 8000;
app.all('/api/auth/*', toNodeHandler(auth));

app.use(cors());
app.use(express.json());
app.use(securityMiddleware);

app.use('/api/subjects', subjectRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello! Your TypeScript Express server is running',
  });
});

const server = app.listen(PORT, () => {
  const address = server.address() as AddressInfo | null;
  const boundPort = address?.port ?? PORT;
  console.log(`Server is running at http://localhost:${boundPort}`);
});

server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Stop the existing process or set PORT to a different value.`);
    process.exit(1);
  }

  console.error('Server failed to start:', error);
  process.exit(1);
});
