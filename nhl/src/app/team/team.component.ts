import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  products: any[] = [
    { code: 'P001', name: 'Produkt 1', category: 'Kategória A', quantity: 10 },
    { code: 'P002', name: 'Produkt 2', category: 'Kategória B', quantity: 20 },
    { code: 'P003', name: 'Produkt 3', category: 'Kategória C', quantity: 30 },
    { code: 'P004', name: 'Produkt 4', category: 'Kategória A', quantity: 15 },
    { code: 'P005', name: 'Produkt 5', category: 'Kategória B', quantity: 25 }
  ];
}
