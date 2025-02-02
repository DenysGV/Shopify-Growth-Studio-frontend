import { ReactNode } from "react";

export default interface IButton {
   type: "filled" | 'empty',
   text: string | ReactNode,
   onClick: () => void,
   additionalStyles?: string
}