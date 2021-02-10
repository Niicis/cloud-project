module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
  default: {
  connector: 'bookshelf',
  settings: {
  client: 'postgres',
  host: 'ec2-54-72-155-238.eu-west-1.compute.amazonaws.com',
  port: 5432,
  database: 'db62gfljlcj8ik',
  username: 'uunjkxbcstexgf',
  password: '96c87f5a8da61f0faea005db280d561bbd4d5a982db06f14e795c28016fa4378',
  ssl: {
  rejectUnauthorized: false
  }
  },
  options: {
  ssl: true,
  },
  },
  },
  });