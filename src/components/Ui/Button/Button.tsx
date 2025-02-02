import IButton from '../../../types/IButton'

const Button = ({ type, text, onClick, additionalStyles }: IButton) => {
   let styles: string = `cursor-pointer rounded-2xl py-3 px-7 border-secondary border-2 uppercase font-semibold ${additionalStyles}`

   if (type === 'filled') {
      styles = `${styles} bg-secondary text-primary`
   } else {
      styles = `${styles} text-white`
   }

   return (
      <button type='submit' className={styles} onClick={onClick}>
         {text}
      </button>
   )
}

export default Button