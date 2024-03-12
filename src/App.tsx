// import { useState } from 'react'
// import Links from './assets/Links'
import './App.css'

function App() {
  return (
    <>
      <header>
        <img src="resumate-128.png" alt="resumate" />
        <h1>Resumate</h1>
      </header>
      <main>
        {/* <Links /> */}
      </main>
      <nav>
        <input type="radio" name="tab" id="links" />
        <label htmlFor="links">
          <figure>
            <picture>
              <source srcSet="links-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="links-light.png" alt="links" />
            </picture>
            <figcaption>Links</figcaption>
          </figure>
        </label>
        <input type="radio" name="tab" id="experience" />

        <label htmlFor="experience">
          <figure>
            <picture>
              <source srcSet="experience-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="experience-light.png" alt="experience" />
            </picture>
            <figcaption>Experience</figcaption>
          </figure>
        </label>

        <input type="radio" name="tab" id="resume" />
        <label htmlFor="resume">
          <figure>
            <picture>
              <source srcSet="resume-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="resume-light.png" alt="resume" />
            </picture>
            <figcaption>Resume</figcaption>
          </figure>
        </label>

        <input type="radio" name="tab" id="profile" />
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
