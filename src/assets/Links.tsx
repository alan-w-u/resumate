// import { useState, useEffect } from 'react';
import Link from './Link'
import './Links.css'

interface Link {
  title: string;
  url: string;
}

function Links() {
  // const [links, setLinks] = useState<Link[]>([]);

  // useEffect(() => {
  //   chrome.storage.sync.get('links', (data: any) => {
  //     if (data.links) {
  //       setLinks(data.links);
  //     }
  //   });
  // });

  // // const add = (title: string, url: string) => {
  // //   const link = {
  // //     title: title,
  // //     url: url
  // //   };

  // //   setLinks([...links, link]);

  // //   chrome.storage.sync.set({ links: [...links, link] });
  // // };

  // const add = () => {
  //   const link = {
  //     title: 'Email',
  //     url: 'alanwu0004@gmail.com'
  //   };

  //   setLinks([...links, link]);

  //   chrome.storage.sync.set({ links: [...links, link] });
  // };

  return (
    <>
      <div className="assets links">
        <Link title={'Email'} url={'alanwu0004@gmail.com'} />
        <Link title={'LinkedIn'} url={'https://www.linkedin.com/in/alan-w-u/'} />
        <Link title={'GitHub'} url={'https://github.com/alan-w-u'} />
        <Link title={'Website'} url={'https://alan-w-u.github.io/'} />
      </div>
    </>
  );
}

export default Links
