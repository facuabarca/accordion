export interface Menu {
    name: string, 
    iconClass: string, 
    active: boolean,
    submenu: Category[]
}

export interface Category {
  id: number
  name: string,
  subcategories?: Category[]
};