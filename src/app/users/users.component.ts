import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = [
    { firstName: 'Justin', lastName: 'Bieber', age: 1 },
    { firstName: 'Bella', lastName: 'Hadid', age: 2 },
    { firstName: 'Selena', lastName: 'Gomez', age: 3 },
    { firstName: 'Diana', lastName: 'Princess', age: 4 },
    { firstName: 'Michel', lastName: 'Jackson', age: 5 },
    { firstName: 'Firoz', lastName: 'F', age: 6 },
    { firstName: 'Gigi', lastName: 'Hadid', age: 7 },
    { firstName: 'Hill', lastName: 'Ton', age: 8 },
    { firstName: 'Zayn', lastName: 'Malik', age: 9 },
    { firstName: 'Javed', lastName: 'Islam', age: 10 }
  ];
}
