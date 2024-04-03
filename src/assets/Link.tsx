import './Link.css'

function Link(props: { title: string; url: string }) {
  const copy = () => {
    navigator.clipboard.writeText(props.url);
  }

  return (
    <a href={props.url} className='url-container'>
      <div className='link' onClick={copy}>
        <span className='title'>{props.title}</span>
        <span> </span> {/* Spacer for drag data */}
        <span className='url'>{props.url}</span>
      </div>
    </a>
  )
}

export default Link