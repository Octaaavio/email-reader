import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from '../../interfaces/email';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {

  email: Email;
  emailList;
  @ViewChild('emailForm') emailForm: any;

  constructor(emailService: EmailService) {
    this.emailList = emailService.getEmailList();
   }

  ngOnInit(): void {
    this.email = { from: "", to: "", subject: "", body: ""}
  }

  sendEmail(form: NgForm): void {
    let emailToList: Email = { from: this.email.to, to: this.email.to, subject: this.email.subject, body: this.email.body};
    window.alert("Email Sent to: " + this.email.to + "!");
    this.emailList.push(emailToList);
  }

  clearEmail(): void {
    this.emailForm.reset();
  }

}
