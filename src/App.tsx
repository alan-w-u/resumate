// import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <header>
        <img src="resumate-128.png" alt="resumate" />
        <h1>Resumate</h1>
      </header>
      <main>

      </main>
      <nav>
        <figure>
          <picture>
            <source srcSet="link-dark.png" media="(prefers-color-scheme: dark)" />
            <img src="link-light.png" alt="link" />
          </picture>
          <figcaption>Links</figcaption>
        </figure>
        <figure>
          <picture>
            <source srcSet="experience-dark.png" media="(prefers-color-scheme: dark)" />
            <img src="experience-light.png" alt="experience" />
          </picture>
          <figcaption>Experience</figcaption>
        </figure>
        <figure>
          <picture>
            <source srcSet="resume-dark.png" media="(prefers-color-scheme: dark)" />
            <img src="resume-light.png" alt="resume" />
          </picture>
          <figcaption>Resume</figcaption>
        </figure>
        <figure>
          <picture>
            <source srcSet="profile-dark.png" media="(prefers-color-scheme: dark)" />
            <img src="profile-light.png" alt="profile" />
          </picture>
          <figcaption>Profile</figcaption>
        </figure>
      </nav>
    </>
  )
}

export default App
