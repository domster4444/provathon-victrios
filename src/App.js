import React from 'react';
import './scss/main.css';
export default function App() {
  return (
    <div>
      <main id="Navigation">
        <div id="logo">
          <span>Kshitiz</span> Shah
        </div>
        <section id="navigation_section">
          <header id="navigation_section_header">
            <nav id="navBar">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Resume</a>
                </li>
                <li>
                  <a href="#">Works</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </nav>
          </header>
        </section>
      </main>
    </div>
  );
}
