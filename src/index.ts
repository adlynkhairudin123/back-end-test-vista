import app from './app2';

const PORT = process.env.PORT || 3000;
console.log('Starting server from CWD:', process.cwd());
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
