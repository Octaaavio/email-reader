import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  emailIndex: number;

  constructor(service: EmailService, router: Router, private route: ActivatedRoute) {
    this.emailList = service.getEmailList();
    this.router = router;
   }

  ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    this.emailIndex = +params.get('index');
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
