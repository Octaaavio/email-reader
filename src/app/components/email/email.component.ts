import { Component, OnInit } from '@angular/core';
import { Email } from '../../interfaces/email';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  email: Email;
  emailList: Email[] = [];

  constructor() {
    this.email = { from: "", to: "", subject: "", body: "" }
  }

  ngOnInit(): void {
  }

}
