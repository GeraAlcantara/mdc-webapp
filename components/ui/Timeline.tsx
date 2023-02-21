import { useParallax } from 'react-scroll-parallax'

function Timeline() {
  const { ref } = useParallax<HTMLDivElement>({
    scaleY: [0, 1, 'easeInOutQuad']
  })

  return (
    <div
      ref={ref}
      className="origin-top w-[2px] bg-gradient-to-b from-secondary to-accent bg-[#4cafb8] h-[78%] top-[12%] absolute hidden lg:block"
    />
  )
}

export default Timeline
