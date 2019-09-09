import { User } from './user';

export interface ApiResponse {
  res: boolean;
  error?: string;
  description?: string;
  token?: string;
  return?: any;
}
