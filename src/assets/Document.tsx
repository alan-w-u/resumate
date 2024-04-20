import './Document.css'

function Document(props: { title: string; file: string }) {
  const copy = (e: React.DragEvent<HTMLElement>) => {
    // e.dataTransfer.setData("application/pdf", props.file)
    const file = new File([""], props.file, { type: "application/pdf" });
    e.dataTransfer.setData("application/pdf", file.name)
  }

  return (
    <a href="test.pdf" className='asset document' onDragStart={copy} draggable download>
      <div className='document-info'>
        <span className='document-title'>{props.title}</span>
        <br />
        <span className='document-file'>{props.file}</span>
      </div>
      <iframe src={props.file} ></iframe>
    </a>
  )
}

export default Document
