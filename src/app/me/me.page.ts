import { Component, OnInit } from '@angular/core';
import { Me } from '../attributes/me';
import { MeService } from '../services/me';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
  standalone: false,
})
export class MePage implements OnInit {
  student: Me = {
    image: '',
    name: '',
    username: '',
    email: '',
    address: '',
  };

  constructor(private meService: MeService) {}

  ngOnInit() {
    this.student = this.meService.getStudentDetail();
  }
}
