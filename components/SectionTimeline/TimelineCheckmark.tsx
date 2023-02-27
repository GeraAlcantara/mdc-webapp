import { BsCheckLg } from 'react-icons/bs'
import { useParallax } from 'react-scroll-parallax'
import clsx from 'clsx'
interface TimelineCheckmarkProps {
  bgColor: Colors
}
function TimelineCheckmark({ bgColor }: TimelineCheckmarkProps) {
  const check = useParallax({
    scale: [0, 1, 'easeInOutExpo']
  })

  return (
    <div
      // @ts-ignore
      ref={check.ref}
      className=" justify-center items-center hidden lg:flex "
    >
      <BsCheckLg
        className={clsx('relative p-2 text-lg box-content  text-brandWhite rounded-full', {
          ' bg-secondary': bgColor === 'secondary',
          ' bg-tropicalBlue': bgColor === 'TropicalBlue',
          ' bg-mintGreen': bgColor === 'MintGreen',
          ' bg-brightGreen': bgColor === 'BrightGreen'
        })}
      />
    </div>
  )
}

export default TimelineCheckmark
