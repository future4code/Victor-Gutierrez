import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export class Authenticator {
      private static EXPIRES_IN = '10min';

      public generateToken(input: string): string {
            const token = jwt.sign(
                  {
                        id: input,
                  },
                  process.env.JWT_KEY as string,
                  {
                        expiresIn: Authenticator.EXPIRES_IN,
                  }
            );
            return token;
      }

      public getData(token: string): string {
            const payload = jwt.verify(
                  token,
                  process.env.JWT_KEY as string
            ) as any;
            const result = payload.id;

            return result;
      }
}
