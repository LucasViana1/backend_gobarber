// anexa nova tipagem na lib express
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
