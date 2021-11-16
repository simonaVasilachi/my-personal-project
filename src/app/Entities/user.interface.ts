import { LoginDetails } from './login-details.interface';

export interface UserInterface extends LoginDetails {
  id?: number;
  userName?: string;
  firstName?: string;
  lastName?: string;
}
