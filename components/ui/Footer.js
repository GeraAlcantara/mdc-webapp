import Link from "next/link";
import { socialMedia, FooterLinks } from "../data/FooterLinks";

function Footer() {
  const getdate = new Date();
  const year = getdate.getFullYear();
  return (
    <section className='pb-6 lg:pb-0'>
      <div className='mdc-ui-container flex flex-row flex-wrap justify-between mx-auto border-t-[1px] border-t-[#192641] sm:py-10 py-3'>
        {FooterLinks.map((footerlink, idx) => (
          <div key={footerlink.title + idx} className='flex flex-col my-4 min-w-[240px] md:min-w-[140px] '>
            <h1 className='font-bold text-lg mb-3'> {footerlink.title} </h1>
            <ul>
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name + index}
                  className={`font-normal text-base text-brandWhite hover:text-secondary cursor-pointer ${
                    index === footerlink.links.length - 1 ? "mb-0" : "mb-2"
                  } `}
                >
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <div className='mdc-ui-container flex justify-between mx-auto items-center md:flex-row flex-col border-t-[1px] border-t-[#192641] sm:py-10 py-3 '>
          <p className='font-normal text-center'>{`Copyright @ ${year} Mexico Development Center. | All right reserved.`}</p>
          <ul className='flex flex-row md:my-0 my-6' role='list'>
            {socialMedia.map(({ id, Icon, link, name }, idx) => {
              return (
                <li key={id}>
                  <a href={link} target='_blank' rel='noreferrer' className='  hover:text-accent text-secondary transition-colors duration-300'>
                    <span className='sr-only'>{name}</span>
                    <Icon className={`text-3xl hover:scale-105 ${idx !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}></Icon>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
