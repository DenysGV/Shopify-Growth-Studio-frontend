export default interface IButton {
   type: "filled" | 'empty',
   text: string,
   onClick: () => void,
   additionalStyles?: string
}