const serverUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://your-production-server.com'
    : 'http://localhost:3001';

export default serverUrl;
