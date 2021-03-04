import { Component, OnInit } from '@angular/core';
import { Config, Menu, Category } from './accordion/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-accordion';
  options: Config = { multi: false };

  public array: Menu[] = [];
  public array2: Menu[] = [];

  public category: Category = {
    id: 1,
    name: 'Mujer',
    subcategories: [
      { id: 2, name: 'Colección' },
      { id: 3, name: 'Abrigos', subcategories: [{ id: 5, name: 'Abrigo de Lana' }, { id: 6, name: 'Abrigo de Cuero',  subcategories: [{ id: 5, name: 'Abrigo de Lana' }, { id: 6, name: 'Abrigo de Cuero',  subcategories: [{ id: 5, name: 'Abrigo de Lana' }, { id: 6, name: 'Abrigo de Cuero' }] }] }] },
      { id: 3, name: 'Abrigos', subcategories: [{ id: 5, name: 'Abrigo de Lana' }, { id: 6, name: 'Abrigo de Cuero' }] },
      { id: 4, name: 'Novedades' }
    ]
  };

  ngOnInit(): void {
    const algo = this.formatToMenuAccordion(this.category);
    console.log(algo)
    this.array.push(algo);
    this.array2.push(Object.assign({}, algo))
  }

  formatToMenuAccordion(type: any): Menu {

    if (type.subcategories?.length > 0) {

      type.subcategories = type.subcategories.map((cat: any) => {
        if (cat.subcategories?.length > 0) {
          return {
            name: cat.name,
            active: false,
            iconClass: 'fa fa-code',
            submenu: this.formatToMenuAccordion(cat.subcategories ? cat : [])
          }
        } else {
          return cat;
        }
      });
      const accordionMenu: Menu = {
        name: type.name,
        active: false,
        iconClass: 'fa fa-code',
        submenu: type.subcategories
      }

      return accordionMenu

    } else {
      return type;
    }
  }

}
