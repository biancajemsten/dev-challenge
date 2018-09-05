const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost:27017/devChallenge-${env}`;
const port = process.env.PORT || 4000;

module.exports = { dbURI, port};
