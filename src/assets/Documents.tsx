// import { useState } from 'react'
import Document from './Document'
import './Documents.css'

function Documents() {
  // const [prompt, setPrompt] = useState('Drag document here')

  // const setDragPrompt = () => {
  //   setPrompt('Drag document here');
  //   const dragDrop = document.querySelector('.drag-drop') as HTMLElement;
  //   dragDrop.style.backgroundColor = 'var(--asset-background)';
  // }

  // const setDropPrompt = () => {
  //   setPrompt('Drop document here');
  //   const dragDrop = document.querySelector('.drag-drop') as HTMLElement;
  //   dragDrop.style.backgroundColor = 'var(--asset-hover)';
  // }

  // const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault(); // Prevent file from being opened
  //   setDragPrompt();
  // }

  // const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault(); // Prevent file from being opened
  //   setDropPrompt();
  // }

  return (
    <div className='documents asset-container'>
      <Document title={'Resume'} />
      {/* <div className='drag-drop' onDragOver={dragOverHandler} onDragLeave={setDragPrompt} onDragEnd={setDragPrompt} onDrop={dropHandler}>
        <p>{prompt}</p>
        <input type="file" />
      </div> */}
    </div>
  )
}

export default Documents
