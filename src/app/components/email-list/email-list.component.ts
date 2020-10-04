import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {
  emailList;

  constructor(service: EmailService) {
    this.emailList = service.getEmailList();
   }

  ngOnInit(): void {
  }

  removeEmail(email) {
    let index = this.emailList.indexOf(email);
    this.emailList.splice(index, 1);
  }

}
