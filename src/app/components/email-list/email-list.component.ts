import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {
  emailList;
  router;
  extra: string;

  constructor(service: EmailService, router: Router) {
    this.emailList = service.getEmailList();
   }

  ngOnInit(): void {
    this.extra = "";
  }

  viewEmail(emailIndex: number): void {
    this.router.navigate(['view-email/' + emailIndex]);
  }

  removeEmail(email) {
    let index = this.emailList.indexOf(email);
    this.emailList.splice(index, 1);
  }

}
