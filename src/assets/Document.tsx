import './Document.css'

function Document(props: { title: string }) {
  return (
    <div className='document asset'>
      <span className='title'>{props.title}</span>
      <iframe src="test.pdf" ></iframe>
    </div>
  )
}

export default Document
