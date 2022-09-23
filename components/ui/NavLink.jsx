import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/NavLinks.module.css'

/**
 * @param {Object} props - link properties
 * @param {string} [props.linkText] - texto del Link
 * @param {string} [props.slug] - Link
 * @returns 
 */
function NavLink({linkText = 'addtext', slug = 'addtext'}) {
  const router = useRouter();
  return (
    <li className={`${styles.navbar__item} mx-4`}>
        <Link href={slug.toLowerCase()} >
            <a className={` font-normal text-gray-50 tracking-widest uppercase text-base ${router.pathname === '/'+slug || router.pathname === slug  ? styles.active : ''}` } >{linkText}</a>
        </Link>
    </li>
  )
}
export default NavLink