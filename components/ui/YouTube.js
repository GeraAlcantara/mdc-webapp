import React from "react";

export default function YouTube({ id }) {
  return (
    <div>
      <iframe src={`https://www.youtube.com/embed/${id}`} allow='autoplay; encrypted-media' title='Embedded YouTube video' referrerPolicy='no-referrer' />
    </div>
  );
}
