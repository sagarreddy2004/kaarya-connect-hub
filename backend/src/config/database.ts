import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Using your Aiven MySQL connection string
const database = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'mysql',
  logging: false, // set to true for SQL query logging
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const testConnection = async () => {
  try {
    await database.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export { database, testConnection };