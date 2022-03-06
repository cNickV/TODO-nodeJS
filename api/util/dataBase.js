const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'ec2-34-233-157-9.compute-1.amazonaws.com',
  username: 'aezundcucnsmfb',
  password: '56324bb03cada5794f7c16afeb9280b2b655265db1ef2f751fe72410b5ba6baf',
  port: 5432,
  database: 'd3am12ffme2q2o',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = { sequelize };
