import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/NavLinks.module.scss";

function NavLink({ linkText = "addtext", slug = "addtext" }) {
  const router = useRouter();
  return (
    <li className={`${styles.navbar__item} mx-4`}>
      <Link href={slug.toLowerCase()}>
        <a
          className={` font-normal text-brandWhite tracking-widest capitalize text-base ${
            router.pathname === "/" + slug || router.pathname === slug ? styles.active : ""
          }`}
        >
          {linkText}
        </a>
      </Link>
    </li>
  );
}
export default NavLink;
