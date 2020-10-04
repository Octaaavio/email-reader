import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emailList: Email[] = [
    {
      from: 'example1@gmail.com',
      to: 'mark1@gmail.com',
      subject: 'the subject 1',
      body: 'the message',
    },
    {
      from: 'example2@gmail.com',
      to: 'mark2@gmail.com',
      subject: 'the subject 2',
      body: '',
    },
    {
      from: 'example3@gmail.com',
      to: 'mark2@gmail.com',
      subject: 'the subject 2',
      body: '',
    }
  ];

  constructor() {}

  getEmailList() {
    return this.emailList;
  }
}
