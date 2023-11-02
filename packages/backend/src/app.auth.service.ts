import { Injectable } from '@nestjs/common';

@Injectable()
export class AppAuthService {
  auth(username: string, password: string): boolean {
    console.log(username, password);
    const user = AuthUsers.find(user => {
      return user.username === username && user.password === password;
    });

    return !!user;
  }
}

const AuthUsers = [
  {
    username: 'admin',
    password: 'admin12H@',
  },
  {
    username: 'user',
    password: 'user24H@',
  }
];