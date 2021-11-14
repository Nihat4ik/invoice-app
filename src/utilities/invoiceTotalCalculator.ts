interface ItemsInterface {
  quantity: number;
  name: string;
  price: number;
}

interface TotalItemsInterface extends ItemsInterface {
  total: number;
}

/**
 * Calculates total amount of specific item in invoice.
 * @param items Parameter that contains items that is in invoice.
 */
export const itemsWithTotal = (
  items: ItemsInterface[]
): TotalItemsInterface[] | [] => {
  return items.length > 0
    ? items.map((el: ItemsInterface) => {
        return {
          ...el,
          total: el.price * el.quantity,
        };
      })
    : [];
};

/**
 * Calculates total amount of all items in invoice.
 * @param items Parameter that contains items that is in invoice.
 */
export const total = (items: ItemsInterface[]): number => {
  return items.length > 0
    ? items
        .map((el) => {
          return el.price * el.quantity;
        })
        .reduce((prev, next) => prev + next)
    : 0;
};
