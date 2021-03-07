export interface Categoria {
  id: number,
  name: string,
  subcategories?: Categoria[],

}

export const data: Categoria[] = [
  {
    id: 1,
    name: 'Mujer',
    subcategories: [
      {
        id: 3,
        name: 'PREPARA TU CESTA',
        subcategories: [
          {
            id: 4,
            name: 'Nuestra Selección'
          },
          {
            id: 5,
            name: 'Hasta -50%'
          },
          {
            id: 6,
            name: 'Abrigos, Chaquetas y Americanas'
          },
          {
            id: 7,
            name: 'Chaquetas de Piel'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Hombre',
    subcategories: [
      {
        id: 3,
        name: 'GET YOUR CART READY',
        subcategories: [
          {
            id: 4,
            name: 'Selected Items up to -50%'
          },
          {
            id: 5,
            name: 'Coats, Jackets and Blazers'
          },
          {
            id: 6,
            name: 'Jumpers & Cardigans'
          },
          {
            id: 7,
            name: 'T-shirts'
          }
        ]
      }
    ]
  },

];