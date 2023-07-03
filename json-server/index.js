const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const server = jsonServer.create();
// server.use(jsonServer.defaults({ noCors: true }));
server.use(jsonServer.bodyParser);
server.use(cors());

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(async (req, res, next) => {
  await new Promise(((res) => {
    setTimeout(res, 8000);
  }));
  next();
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
  const { users } = db;

  const userFromBd = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (!userFromBd) {
    return res.status(403).json({ message: 'Auth Error' });
  }

  return res.json(userFromBd);
});

// eslint-disable-next-line
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Auth Error' });
  }

  next();
});

server.use(router);

server.listen(8000, () => {
  console.log('server is running on 8000 port');
});

const v8 = require('v8');

const heapStatistics = v8.getHeapStatistics();
const heapLimitInMB = heapStatistics.heap_size_limit / (1024 * 1024);

console.log('Текущий предел памяти для JavaScript-кучи:', heapLimitInMB, 'МБ');
