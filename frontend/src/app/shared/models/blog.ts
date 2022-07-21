import { User } from './user';

export interface Blog {
  id: number;
  title: string;
  content: string;
  createdBy: User;
}
