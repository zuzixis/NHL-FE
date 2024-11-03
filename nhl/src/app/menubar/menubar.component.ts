import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'League',
        icon: 'pi pi-fw pi-home',
        routerLink: '/league' 
      },
      {
        label: 'Match',
        icon: 'pi pi-fw pi-home',
        routerLink: '/match' 
      },
      {
        label: 'Team',
        icon: 'pi pi-fw pi-info',
        routerLink: '/team'  
      }
    ];
  }
}
