export interface Collapsible<T> {
  name: string;
  iconClass: string;
  active: boolean;
  childrens: T[];
}

export interface CollapsibleWrapper<T> {
  collapseAll: boolean;
  childrens: T[];
}