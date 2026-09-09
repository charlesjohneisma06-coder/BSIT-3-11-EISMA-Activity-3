import { Injectable } from '@angular/core';
import { Me } from '../attributes/me';

@Injectable({
  providedIn: 'root'
})
export class MeService {
  private studentDetail: Me = {
    image: 'assets/images/me.jpg',
    name: 'Charles John Eisma',
    username: 'sijeyesm',
    email: 'charlesjohn@gmail.com',
    address: 'Valenzuela City'
  };

  getStudentDetail(): Me {
    return this.studentDetail;
  }
}