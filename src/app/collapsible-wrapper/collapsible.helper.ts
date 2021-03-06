export class CollapsibleHelper<T> {

  name: string;
  iconClass: string;
  active: boolean;
  childrens: T[];

  constructor(name: string, iconClass: string = 'fa fa-code', active: boolean = false, childrens: T[]) {
    this.name = name;
    this.iconClass = iconClass;
    this.active = active;
    this.childrens = childrens;
  }

}