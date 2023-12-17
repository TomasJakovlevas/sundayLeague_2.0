import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  const footerContnet = [
    {
      title: 'About',
      link: '/',
    },
  ];

  return (
    <div className='text-sm flex flex-wrap items-center justify-center gap-3'>
      {footerContnet.map((element) => (
        <span key={element.title}>
          <Link className='hover:underline' href={element.link}>
            {element.title}
          </Link>
        </span>
      ))}

      <span>© 2023 SundayLeague</span>
    </div>
  );
};
