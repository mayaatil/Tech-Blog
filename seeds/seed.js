const sequelize = require('../config/connection');
const { User, Post, Response } = require('../models');
const userData = require('./userData.json');
const postData = require('./postData.json');
const responseData = require('./responseData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const posts of postData) {
    await Post.create({
      ...posts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const response of responseData) {
    await Response.create({
      ...response,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: Math.ceil(Math.random() * responseData.length),
    });
  }

  process.exit(0);
};

seedDatabase();
