import Link from 'next/link'
/**
 * @param {Object} props - link properties
 * @param {string} [props.linkText] - texto del Link
 * @param {string} [props.slug] - Link
 * @returns 
 */
function NavLink({linkText = 'addtext', slug = 'addtext'}) {
  return (
    <li className='mx-2'>
        <Link href={slug.toLowerCase()} >
            <a className='font-RobotoCondense font-normal text-gray-50 tracking-widest uppercase text-base'>{linkText}</a>
        </Link>
    </li>
  )
}
export default NavLink