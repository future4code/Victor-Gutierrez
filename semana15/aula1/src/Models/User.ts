import { v4 } from 'uuid';
import { IUser } from '../Types/index';

class User implements IUser {
      id: string;

      constructor(
            public name: string,
            public email: string,
            public password: string
      ) {
            this.id = v4();

            return this;
      }
}

export default User;
