module.exports = {
  db: {
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "7827",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || "tasksdb",
  },
};
