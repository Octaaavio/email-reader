import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { Email } from '../../interfaces/email';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  emailList: Email[] = [];
  index: number;

  constructor(private service: EmailService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.emailList = this.service.getEmailList();
    this.route.paramMap.subscribe(params => {
      this.index = parseInt(params.get('index'), 10);
    })
  }

}
