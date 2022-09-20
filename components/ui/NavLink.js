import Link from 'next/link'
/**
 * 
 * @param {{linkText:String}} props 
 * @returns 
 */
let defaulttext = 'addtext'

function NavLink(props) {
  return (
    <li className='mx-2'>
        <Link href={props.linkText.toLowerCase() || defaulttext } >
            <a className='font-RobotoCondense font-normal text-gray-50 tracking-widest uppercase text-base'>{props.linkText || defaulttext}</a>
        </Link>
    </li>
  )
}

export default NavLink