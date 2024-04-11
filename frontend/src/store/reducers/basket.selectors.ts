import { RootState } from "..";

export const getBasketCount = (store: RootState) => store.list.length

export const getTotalPrice = (store: RootState) => {
    return store.list.reduce((acc, item ) => {
        return acc + item.Price
    }, 0)
}

export const getCartList = (store: RootState) => store.list

export const getOrderList = (store: RootState) => store.list
