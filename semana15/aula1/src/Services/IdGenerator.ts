import { v4 } from 'uuid';

class IdGenerator {
      id: string;

      public generate(): string {
            return v4();
      }
}

export default new IdGenerator();
