import { Injectable } from '@angular/core';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emailList: Email[] = [
    {
      from: 'this_email@gmail.com',
      to: 'mark1@gmail.com',
      subject: 'the subject 1',
      body: 'the message',
    },
    {
      from: 'barbarian_email@gmail.com',
      to: 'barbaro@gmail.com',
      subject: 'the subject 2',
      body: 'This is the body of the email, right?',
    },
    {
      from: 'example@gmail.com',
      to: 'mark_giuliana@gmail.com',
      subject: 'the subject 2',
      body: '',
    }
  ];

  constructor() {}

  getEmailList() {
    return this.emailList;
  }
}
