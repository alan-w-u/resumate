import './Link.css'

function Link(props: { title: string; url: string }) {
  const copy = () => {
    navigator.clipboard.writeText(props.url);
  }

  return (
    <a href={props.url} className='asset link' onClick={copy} draggable>
      <span className='link-title'>{props.title}</span>
      <span className='link-url'>{props.url}</span>
      <a href={props.url} target='_blank'>
        <picture>
          <source srcSet="redirect-dark.png" media="(prefers-color-scheme: dark)" />
          <img src="redirect-light.png" alt="profile" draggable="false" />
        </picture>
      </a>
    </a>
  )
}

export default Link
