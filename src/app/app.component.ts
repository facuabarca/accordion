import { Component, OnInit } from '@angular/core';
import { Config, Menu } from './collapsible/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-accordion';
  options: Config = { multi: false };


  // public category = {
  //   name: 'Mujer',
  //   subcategories: [
  //     { id: 2, name: 'Colección' },
  //     { id: 3, name: 'Abrigos', subcategories: [{ id: 5, name: 'Abrigo de Lana' }, { id: 6, name: 'Abrigo de Cuero',  subcategories: [{ id: 5, name: 'Abrigo de Lana' }, { id: 6, name: 'Abrigo de Cuero',  subcategories: [{ id: 5, name: 'Abrigo de Lana' }, { id: 6, name: 'Abrigo de Cuero' }] }] }] },
  //     { id: 3, name: 'Abrigos', subcategories: [{ id: 5, name: 'Abrigo de Lana' }, { id: 6, name: 'Abrigo de Cuero' }] },
  //     { id: 4, name: 'Novedades' }
  //   ]
  // };
  menus: Menu<any>[] = [
    { 
      name: 'Front-end',
      iconClass: 'fa fa-code',
      active: false,
      submenu: [
        { name: 'HTML', url: '#', active: false,  submenu: [
                            { name: 'HTML 2', url: '#', active: false, submenu: [ { name: 'HTML 3', url: '#', active: false}] },
                            { name: 'CSS 2', url: '#' },
                            { name: 'Javascript 2', url: '#' }
        ] },
        { name: 'CSS', url: '#' },
        { name: 'Javascript', url: '#' }
      ]
    },
    { 
      name: 'Responsive web',
      iconClass: 'fa fa-mobile',
      active: false,
      submenu: [
        { name: 'Tablets', url: '#' },
        { name: 'Mobiles', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      name: 'Web Browser',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    }
  ];

  ngOnInit(): void {
    
  }



}
