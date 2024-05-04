import './Link.css'

function Link(props: { title: string; url: string }) {
  const copy = () => {
    navigator.clipboard.writeText(props.url);
  }

  const paste = (e: React.DragEvent<HTMLElement>) => {
    // Set MIME types to paste only the URL
    e.dataTransfer.setData('text/uri-list', props.url);
    e.dataTransfer.setData('text/html', props.url);
  }

  return (
    <div className='asset link' onClick={copy} onDragStart={paste} draggable>
      <span className='link-title'>{props.title}</span>
      <span className='link-url'>{props.url}</span>
      <a href={props.url} target='_blank'>
        <picture>
          <source srcSet="redirect-dark.png" media="(prefers-color-scheme: dark)" />
          <img src="redirect-light.png" alt="redirect" draggable="false" />
        </picture>
      </a>
    </div>
  )
}

export default Link
