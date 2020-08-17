import * as jwt from 'jsonwebtoken';

export class Authenticator {
      private static EXPIRES_IN = '1min';

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
}
