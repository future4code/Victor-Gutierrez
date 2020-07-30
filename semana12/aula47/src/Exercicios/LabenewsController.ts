import { ILabenewsController, User, News } from './Labenews.types';
import { labenews } from '../Services/Labenews';

class LabenewsController implements ILabenewsController {
  async createUser(data: Omit<User, 'id'>) {
    try {
      await labenews.put('/subscribers', data);

      console.log(`User ${data.email} has been created`);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getSubscribers() {
    try {
      const response = await labenews.get<User[]>('/subscribers/all');

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createNews(content: Omit<News, 'date'>) {
    try {
      await labenews.put('/news', {
        ...content,
        date: Date.now(),
      });
      console.log('200: News created');
    } catch (error) {
      throw new Error(error);
    }
  }

  async notifyAllUsers(target: User[], message: string) {
    try {
      const promiseArray = target.map((user) => {
        labenews.post('/notifications/send', {
          subscriberId: user.id,
          message: message,
        });
      });

      await Promise.all(promiseArray);
      console.log('All users has been notified');
    } catch (error) {
      throw new Error(error);
    }
  }

  async createNewsAndNotifyUsers(
    content: Omit<News, 'date'>,
    target: User[],
    notificationMessage: string
  ) {
    try {
      await this.createNews(content);
      await this.notifyAllUsers(target, notificationMessage);
    } catch (error) {}
  }

  async getAllNotifications(fromTarget: User[]) {
    try {
      const promiseArray = fromTarget.map((user) => {
        labenews.get(`/subscribers/${user.id}/notifications/all`);
      });

      const response = await Promise.all(promiseArray);

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
