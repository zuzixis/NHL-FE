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
        icon: 'pi pi-fw pi-bars',
        routerLink: '/league'
      }, {
        label: 'Conferences',
        icon: 'pi pi-fw pi-clipboard',
        routerLink: '/conference'
      }, {
        label: 'Divisions',
        icon: 'pi pi-fw pi-th-large',
        routerLink: '/division'
      },
      {
        label: 'Matches',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/match'
      },
      {
        label: 'Team',
        icon: 'pi pi-fw pi-users',
        routerLink: '/team'
      },
      {
        label: 'Team Comparison',
        icon: 'pi pi-fw pi-users',
        routerLink: '/team-compare'
      }
    ];
  }
}
