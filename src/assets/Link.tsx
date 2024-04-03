import './Link.css'

function Link(props: { title: string; url: string }) {
  const copy = () => {
    navigator.clipboard.writeText(props.url);
  }

  return (
    <a href={props.url}>
      <div className='link' onClick={copy}>
        <b>{props.title}</b>
        <p> </p> {/* Spacer for drag */}
        <p>{props.url}</p>
      </div>
    </a>
  )
}

export default Link