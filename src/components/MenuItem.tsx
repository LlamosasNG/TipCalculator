import type { MenuItem } from "../types";
import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};
export default function MenuItem({ item, dispatch }: MenuItemProps) {
  const { name, price } = item;

  return (
    <button
      className=" border-4 rounded-lg border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>{name}</p>
      <p className=" font-black">${price}</p>
    </button>
  );
}
