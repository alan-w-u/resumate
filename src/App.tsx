import { useState } from 'react'
import Links from './assets/Links'
import Documents from './assets/Documents'
import './App.css'

function App() {
  const [tab, setTab] = useState('links');
  const promptText: Record<string, string> = {
    links: 'Click to Copy / Drag to Paste',
    documents: 'Drag to Upload',
  }

  return (
    <>
      <header>
        <img src="resumate-128.png" alt="resumate" />
        <h1>Resumate</h1>
      </header>
      <main>
        <span className='prompt'>{promptText[tab]}</span>
        {tab === 'links' && <Links />}
        {tab === 'documents' && <Documents />}
      </main>
      <nav>
        <input type="radio" name="tab" id="links" onChange={() => setTab('links')} defaultChecked />
        <label htmlFor="links">
          <figure>
            <picture>
              <source srcSet="links-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="links-light.png" alt="links" />
            </picture>
            <figcaption>Links</figcaption>
          </figure>
        </label>

        <input type="radio" name="tab" id="documents" onChange={() => setTab('documents')} />
        <label htmlFor="documents">
          <figure>
            <picture>
              <source srcSet="documents-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="documents-light.png" alt="documents" />
            </picture>
            <figcaption>Documents</figcaption>
          </figure>
        </label>

        <input type="radio" name="tab" id="experience" onChange={() => setTab('experience')} />
        <label htmlFor="experience">
          <figure>
            <picture>
              <source srcSet="experience-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="experience-light.png" alt="experience" />
            </picture>
            <figcaption>Experience</figcaption>
          </figure>
        </label>

        <input type="radio" name="tab" id="profile" onChange={() => setTab('profile')} />
        <label htmlFor="profile">
          <figure>
            <picture>
              <source srcSet="profile-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="profile-light.png" alt="profile" />
            </picture>
            <figcaption>Profile</figcaption>
          </figure>
        </label>
      </nav>
    </>
  )
}

export default App
