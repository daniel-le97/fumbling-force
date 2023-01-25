import { atom } from "nanostores";

const isCartOpen = atom(false)
export const appState: Boolean =  isCartOpen()