import Image from "next/image";

/**
 * @param {{authorAvatar:string, authorName: string, date: string}} AutorPostInfo
 * @returns
 */
export default function AuthorPostInfo({ authorAvatar, authorName, date }) {
  return (
    <div className='flex gap-4 items-center'>
      <div className='relative w-12 h-12'>
        <Image src={`/blog/images/${authorAvatar}`} layout='fill' objectFit='cover' alt='imagen de un articulo' className='rounded-full' />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='text-sm capitalize '>{authorName}</span>
        <span className='text-sm'>{new Date(date).toLocaleDateString("es-MX", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
      </div>
    </div>
  );
}
