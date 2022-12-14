import { BsCheckLg } from "react-icons/bs";
import { useParallax } from "react-scroll-parallax";
import clsx from "clsx";
//espect to recieve a option from Colors enum
interface TimelineCheckmarkProps {
  bgColor: Colors;
}
function TimelineCheckmark({ bgColor }: TimelineCheckmarkProps) {
  const check = useParallax({
    scale: [0, 1, "easeInOutExpo"],
  });

  return (
    <div
      // @ts-ignore
      ref={check.ref}
      className=' justify-center items-center hidden lg:flex '
    >
      <BsCheckLg
        className={clsx("relative p-2 text-lg box-content  text-brandWhite rounded-full", {
          " bg-secondary": bgColor === "secondary",
          " bg-tropicalBlue": bgColor === "TropicalBlue",
          " bg-mintGreen": bgColor === "MintGreen",
          " bg-brightGreen": bgColor === "BrightGreen",
        })}
      />
    </div>
  );
}

export default TimelineCheckmark;

/* 
 {
                  "hover:bg-secondary bg-secondary": colorClass === "secondary",
                  "hover:bg-tropicalBlue bg-tropicalBlue": colorClass === "TropicalBlue",
                  "hover:bg-mintGreen bg-mintGreen": colorClass === "MintGreen",
                  "hover:bg-brightGreen bg-brightGreen": colorClass === "BrightGreen",
                }
                 */
