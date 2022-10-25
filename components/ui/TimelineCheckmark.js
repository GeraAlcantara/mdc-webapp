import { BsCheckLg } from "react-icons/bs";
import { useParallax } from "react-scroll-parallax";

function TimelineCheckmark({ bgColor }) {
  const check = useParallax({
    scale: [0, 1, "easeInOutExpo"],
  });

  return (
    <div
      // @ts-ignore
      ref={check.ref}
      className=' justify-center items-center hidden lg:flex '
    >
      <BsCheckLg className={`relative p-2 text-lg box-content bg-secondary text-white rounded-full ${bgColor}`} />
    </div>
  );
}

export default TimelineCheckmark;
