import Link from './Link'
import './Links.css'

function Links() {
  return (
    <>
      <div className='assets links'>
        <Link title={'Email'} url={'alanwu0004@gmail.com'} />
        <Link title={'LinkedIn'} url={'https://www.linkedin.com/in/alan-w-u/'} />
        <Link title={'GitHub'} url={'https://github.com/alan-w-u'} />
        <Link title={'Website'} url={'https://alan-w-u.github.io/'} />
      </div>
      <br />
      <button className='asset-add-button'>+</button>
    </>
  );
}

export default Links
