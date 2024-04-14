import './Link.css'

function Link(props: { title: string; url: string }) {
  const copy = () => {
    navigator.clipboard.writeText(props.url);
  }

  return (
    <a href={props.url} className='link-container'>
      <div className='link asset' onClick={copy}>
        <span className='title'>{props.title}</span>
        <span> </span> {/* Spacer for prompt/hint that appears when dragging a link */}
        <span className='url'>{props.url}</span>
      </div>
    </a>
  )
}

export default Link
