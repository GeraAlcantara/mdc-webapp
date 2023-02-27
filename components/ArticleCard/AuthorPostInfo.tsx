import Image from 'next/image'

export default function AuthorPostInfo({
  authorAvatar,
  authorName,
  date
}: {
  authorAvatar: string
  authorName: string
  date: string
}) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative w-12 h-12">
        <Image
          alt="imagen de un articulo"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
          src={`/blog/images/${authorAvatar}`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm capitalize ">{authorName}</span>
        <span className="text-sm">
          {new Date(date).toLocaleDateString('es-MX', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
    </div>
  )
}
