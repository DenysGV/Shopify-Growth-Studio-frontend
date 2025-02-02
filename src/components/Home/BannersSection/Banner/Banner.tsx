import IBanner from '../../../../types/IBanner'

const Banner = ({ text, textColor, bgColor }: IBanner) => {
   return (
      <div className={`w-full overflow-hidden whitespace-nowrap bg-${bgColor} py-1`}>
         <div className={`animate-marquee flex gap-5 text-3xl text-${textColor} max-sm:text-xl `}>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
         </div>
      </div>
   )
}

export default Banner