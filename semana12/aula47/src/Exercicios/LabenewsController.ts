import { ILabenewsController, User, News } from './Labenews.types';
import { labenews } from '../Services/Labenews';

class LabenewsController implements ILabenewsController {
  async getNews() {
    try {
      const response = await labenews.get<News[]>('/news/all');

      console.log('200: News parsed');
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

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
      console.log('200: Users retrieved');
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

  async notifyUser(subscriberId: string, message: string) {
    try {
      await labenews.post('/notifications/send', {
        subscriberId: subscriberId,
        message: message,
      });

      console.log(`User ${subscriberId} is notified with ${message}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  async notifyAllUsers(target: User[], message: string) {
    try {
      const promiseArray = [];

      for (const user of target) {
        promiseArray.push(
          labenews.post('/notifications/send', {
            subscriberId: user.id,
            message: message,
          })
        );
      }

      await Promise.all(promiseArray);

      console.log('All users have been notified');
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
      const promiseArray = [];

      for (const user of fromTarget) {
        promiseArray.push(
          labenews.get(`/subscribers/${user.id}/notifications/all`)
        );
      }

      const response = await Promise.all(promiseArray);

      console.log('200: Notifications parsed');

      return response.map((notification) => {
        return notification.data;
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { LabenewsController };
