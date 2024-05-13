import { useEffect } from 'react';
import './Document.css'

function Document(props: { title: string; file: string }) {
  const windowURL = window.location.href.replace('index.html', ''); // Output Example: chrome-extension://poibaddlheccibebnomlggmmmojidpje/

  let response: any;
  let blob: any;
  let objectURL: any;
  let pdfData: any;

  useEffect(() => {
    const fetchFile = async () => {
      response = await fetch(props.file);
      blob = await response.blob();
      objectURL = URL.createObjectURL(blob);

      let reader = new FileReader();
      reader.readAsArrayBuffer(blob);

      reader.onload = () => {
        pdfData = reader.result;
      }
    };

    fetchFile();
  }, [props.file]);

  const upload = (e: React.DragEvent<HTMLElement>) => {
    // let anchor = document.createElement('a');
    // anchor.href = objectURL;
    // anchor.download = props.file;
    // anchor.click();

    e.dataTransfer.setData('text/uri-list', windowURL + props.file);
    e.dataTransfer.setData('text/html', pdfData);
    e.dataTransfer.setData('application/pdf', pdfData);
    // e.dataTransfer.setData('DownloadURL', `application/pdf:${props.file}:chrome-extension://poibaddlheccibebnomlggmmmojidpje/test.pdf`);
    // e.dataTransfer.setData('DownloadURL', `application/pdf:${props.file}:${objectURL}`); // Download file when drag to desktop
    e.dataTransfer.setData('DownloadURL', `application/pdf:${props.file}:${windowURL}${props.file}`); // Download file when drag to desktop

    console.log(windowURL);
    console.log(response);
    console.log(response.url);
    console.log(objectURL);
    console.log(blob);
    console.log(pdfData);
  };

  return (
    <div className="asset document" onDragStart={upload} draggable>
      <div className="document-info">
        <span className="document-title">{props.title}</span>
        <span className="document-file">{props.file}</span>
        <div className="document-buttons">
          <a href={props.file} download>
            <picture>
              <source srcSet="download-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="download-light.png" alt="download" />
            </picture>
          </a>
          <a href={props.file} target="_blank">
            <picture>
              <source srcSet="redirect-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="redirect-light.png" alt="redirect" />
            </picture>
          </a>
        </div>
      </div>
      <iframe src={props.file} ></iframe>
    </div>
  );
}

export default Document
