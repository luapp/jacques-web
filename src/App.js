import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Alejandra Cruz</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#music">Music</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className="main-content">
        <div className="image-container">
          <img src={require('./image.png')} alt="Alejandra Cruz" />
        </div>
        <div className="text-container">
          <h1>Alejandra Cruz is a singer and songwriter from Barcelona, Spain.</h1>
          <p>Her new album is available now.</p>
          <button className="listen-button">Listen Now</button>
        </div>
      </main>
      <section className="about-section">
        <h2>Alejandra Cruz grew up by the beach, but you won’t mistake her songs for breezy summertime fare.</h2>
        <p>
          She writes from the point of view of outcasts and misfits, bringing a new perspective and incisive wit
          to her tales of relationships gone wrong. With a smoky voice trained on jazz classics and a stacked
          backing band, she combines a vintage sound with modern material to thrilling effect.
        </p>
      </section>
      <section className="shows-section">
        <h2>Upcoming Shows</h2>
        <div className="shows-container">
          <div className="show">
            <h3>6.17</h3>
            <p>Venue<br />Barcelona, SP</p>
            <a href="#">Get Tickets</a>
          </div>
          <div className="show">
            <h3>6.22</h3>
            <p>Venue<br />Paris, FR</p>
            <a href="#">Get Tickets</a>
          </div>
          <div className="show">
            <h3>6.25</h3>
            <p>Venue<br />Copenhagen, DK</p>
            <a href="#">Get Tickets</a>
          </div>
          <div className="show">
            <h3>7.01</h3>
            <p>Venue<br />Berlin, BRD</p>
            <a href="#">Get Tickets</a>
          </div>
          <div className="show">
            <h3>7.04</h3>
            <p>Venue<br />Berlin, BRD</p>
            <a href="#">Get Tickets</a>
          </div>
          <div className="show">
            <h3>7.11</h3>
            <p>Venue<br />Zürich, CH</p>
            <a href="#">Get Tickets</a>
          </div>
        </div>
      </section>
      <section className="album-section">
        <div className="album-image-container">
          <img src={require('./im.png')} alt="New Album Cover" />
        </div>
        <div className="album-text-container">
          <h2>New Album Out Now</h2>
          <p>
            Over ten songs, Cruz’s new album charts a year in the life of a cast of characters who step in and out of the shadows. Featuring lush production and a full string section, it’s her most accomplished album to date.
          </p>
          <button className="listen-button">Listen Now</button>
        </div>
      </section>
    </div>
  );
}

export default App;
