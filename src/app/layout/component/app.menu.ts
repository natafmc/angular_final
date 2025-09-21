import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Works',
                items: [
                  { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                  {  label: 'Saludo', icon: 'pi pi-fw pi-volume-up', routerLink: ['/works/saludo'] },
                  {  label: 'Componente 01', icon: 'pi pi-fw pi-check-square', routerLink: ['/works/c01'] },
                  {  label: 'Componente 02', icon: 'pi pi-fw pi-check-square', routerLink: ['/works/c02'] },
                  {  label: 'Componente 03', icon: 'pi pi-fw pi-check-square', routerLink: ['/works/c03'] },
                  {  label: 'Componente 04', icon: 'pi pi-fw pi-check-square', routerLink: ['/works/c04'] },
                  {  label: 'Componente 05', icon: 'pi pi-fw pi-check-square', routerLink: ['/works/c05'] },
                  {  label: 'Componente 06', icon: 'pi pi-fw pi-check-square', routerLink: ['/works/c06'] },
                  {  label: 'Componente 07', icon: 'pi pi-fw pi-check-square', routerLink: ['/works/c07'] },
                  {  label: 'Componente 08', icon: 'pi pi-fw pi-check-square', routerLink: ['/works/c08'] },
                  {  label: 'Componente 09', icon: 'pi pi-fw pi-check-square', routerLink: ['/works/c09'] },
                  {  label: 'Componente 10', icon: 'pi pi-fw pi-check-square', routerLink: ['/works/c10'] },

                ]
            },
        ];
    }
}
