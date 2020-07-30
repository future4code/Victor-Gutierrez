interface User {
  id: string;
  name: string;
  email: string;
}

interface News {
  title: string;
  content: string;
  date: number;
}

interface ILabenewsController {
  getSubscribers(): Promise<User[]>;
  createNews(content: Omit<News, 'date'>): Promise<void>;
  createNewsAndNotifyUsers(
    content: Omit<News, 'date'>,
    target: User[],
    notificationMessage: string
  ): Promise<void>;
  notifyAllUsers(target: User[], message: string): Promise<void>;
  createUser(data: Omit<User, 'id'>): Promise<void>;
  getAllNotifications(fromTarget: User[]): Promise<any>;
}

export { User, News, ILabenewsController };
