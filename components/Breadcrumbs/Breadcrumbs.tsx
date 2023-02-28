import Link from 'next/link'

interface BreadcrumbsProps {
  breadcrumbs: {
    name: string
    url: string
  }[]
}

function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumbs" className="bg-brandBlue-700 md:bg-transparent p-2 rounded-lg">
      <ol className="flex flex-wrap">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className="first:before:content-[''] first:before:px-0 before:px-1 md:before:px-2 before:content-['/'] text-sm"
          >
            {/* last breadcrumb should include aria-current="page" */}
            {index === breadcrumbs.length - 1 ? (
              <span aria-current="page" className="text-slate-500">
                {`${breadcrumb.name.toUpperCase()}`}
              </span>
            ) : (
              <Link href={breadcrumb.url}>
                <a className="hover:text-brandBlue-400 font-bold">
                  {breadcrumb.name.toUpperCase()}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
