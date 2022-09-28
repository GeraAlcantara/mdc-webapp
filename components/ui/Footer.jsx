import { socialMedia } from "../data/FooterLinks";

function Footer() {
  const getdate = new Date();
  const year = getdate.getFullYear();
  return (
    <section>
      <div className='mdc-ui-container flex justify-between mx-auto items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#192641] sm:py-16 py-6'>
        <p className='font-normal text-center'>{`Copyright @ ${year} Mexico Development Center. | All right reserved.`}</p>
        <ul className='flex flex-row md:mt-0 mt-6' role='list'>
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
    </section>
  );
}

export default Footer;
