export default function YouTube({ id }) {
  return (
    <div className='aspect-video w-full'>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow='autoplay; encrypted-media'
        title='Embedded YouTube video'
        referrerPolicy='no-referrer'
        className='w-full h-full'
      />
    </div>
  );
}
