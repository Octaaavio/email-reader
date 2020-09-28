import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/interfaces/email';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent implements OnInit {
  email: Email;
  emailList: Email[] = [];

  constructor() {}

  ngOnInit(): void {
    this.email = { from: '', to: '', subject: '', body: '' };
  }

  addEmail(): void {
    this.emailList.push(this.email);
  }
}
