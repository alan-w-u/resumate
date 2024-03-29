import './Link.css'

function Link(props: { title: string; url: string }) {
  const copy = () => {
    navigator.clipboard.writeText(props.url);
  }

  return (
    <div className='link' onClick={copy}>
      <a href={props.url}>{props.title}</a>
      <p>{props.url}</p>
    </div>
  )
}

export default Link