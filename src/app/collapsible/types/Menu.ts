export interface Menu<T> {
    name: string, 
    iconClass: string, 
    active: boolean,
    submenu: T
}

export interface Category {
  id: number
  name: string,
  subcategories?: Category[]
};