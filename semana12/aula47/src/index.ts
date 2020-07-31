import fs from 'fs';

import { LabenewsController } from './Exercicios/LabenewsController';

const labenews = new LabenewsController();

const script = async () => {
  try {
    const users = await labenews.getSubscribers();

    const data = await Promise.all([
      labenews.getNews(),
      labenews.getAllNotifications(users),
    ]);

    fs.writeFileSync(
      __dirname + '/Database/subscribers.txt',
      JSON.stringify(users, null, 2)
    );

    fs.writeFileSync(
      __dirname + '/Database/news.txt',
      JSON.stringify(data[0], null, 2)
    );
    fs.writeFileSync(
      __dirname + '/Database/notifications.txt',
      JSON.stringify(data[1], null, 2)
    );

    new Promise((resolve) => {
      resolve(setTimeout(() => console.log('----Success! Checkout src/Database  ---'), 5000));
    });
  } catch (error) {
    console.log(error);
  }
};

script();
