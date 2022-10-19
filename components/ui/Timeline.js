import { useParallax } from "react-scroll-parallax";

function Timeline() {
  const timeline = useParallax({
    scaleY: [0, 1, "easeInOutQuad"],
  });

  return (
    <div
      // @ts-ignore
      ref={timeline.ref}
      className='origin-top w-[2px] bg-gradient-to-b from-secondary to-accent bg-[#4cafb8] h-[78%] top-[12%] absolute hidden lg:block'
    ></div>
  );
}

export default Timeline;
