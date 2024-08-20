import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuModule, MenubarModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  items: MenuItem[] | undefined;
  activeItem: string | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Counter App',
        icon: 'pi pi-arrows-v',
        routerLink: '/counter',
      },
      {
        label: 'Wearger App',
        icon: 'pi pi-sun',
        routerLink: '/weather',
      },
      {
        label: 'Chat App',
        icon: 'pi pi-envelope',
        routerLink: '/chat',
      },
      {
        label: 'Reactive Form',
        icon: 'pi pi-envelope',
        routerLink: '/reactive',
      },
    ];

    // Listen to route changes and update activeItem accordingly
    this.router.events.subscribe(() => {
      this.setActiveItem();
    });

    // Set the initial active item
    this.setActiveItem();
  }

  setActiveItem() {
    const currentUrl = this.router.url;
    this.activeItem = this.items?.find(
      (item) => item.routerLink === currentUrl
    )?.label;
  }

  isActive(item: MenuItem): boolean {
    return this.activeItem === item.label;
  }
}
