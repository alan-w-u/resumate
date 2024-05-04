import { useState } from 'react'
import Document from './Document'
import './Documents.css'

function Documents() {
  const [prompt, setPrompt] = useState('Drag document here')

  const setDragPrompt = () => {
    setPrompt('Drag document here');
    const dragDrop = document.querySelector('.drag-drop') as HTMLElement;
    dragDrop.style.backgroundColor = 'var(--asset-background)';
  }

  const setDropPrompt = () => {
    setPrompt('Drop document here');
    const dragDrop = document.querySelector('.drag-drop') as HTMLElement;
    dragDrop.style.backgroundColor = 'var(--asset-hover)';
  }

  const dropHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault(); // Prevent file from being opened
    setDragPrompt();
  }

  const dragOverHandler = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault(); // Prevent file from being opened
    setDropPrompt();
  }

  return (
    <>
      <div className='assets documents'>
        <Document title={'Resume'} file={"test.pdf"} />
        <div className='drop-zone' onDragOver={dragOverHandler} onDragLeave={setDragPrompt} onDragEnd={setDragPrompt} onDrop={dropHandler}>
          <p>{prompt}</p>
          <input type="file" />
        </div>
      </div>
      <br />
      <button className='asset-add-button'>+</button>
    </>
  )
}

export default Documents
