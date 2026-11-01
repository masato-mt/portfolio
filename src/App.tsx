import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`portfolio ${darkMode ? 'dark' : ''}`}>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
  {darkMode ? '☀ Light' : '☾ Dark'}
</button>
      <header className="header">
        <a className="logo" href="#home">MY PORTFOLIO<span>.</span></a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#works">Works</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">PORTFOLIO / 2026</p>

          <h1>
            Hello, I'm<br />
            <span>Masato Yamaguchi.</span>
          </h1>

          <p className="intro">
            はじめまして！<br />
            ここは独学で作ったポートフォリオサイトです。
          </p>

          <a className="button" href="#works">
            VIEW MY WORKS ↗
          </a>

          <div className="hero-note">
            <span>HTML / CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Python</span>
            <span>Flutter</span>
            <span>Docker</span>
          </div>
        </section>

        <section className="section" id="about">
          <p className="section-label">01 / ABOUT</p>
          <h2>About me</h2>
          <p>
            前職ではPythonを使ったAI画像解析にちょっとだけ関わりました。<br />
            webGLによる視覚的な表現に関心があって始めたweb開発ですが、
            学んでいくうちにReactなどを使った先進的な開発にも興味を持ち始めました。
            Flutterでのアプリ開発にも挑戦中です。

          </p>
        </section>

        <section className="section" id="skills">
          <p className="section-label">02 / SKILLS</p>
          <h2>Technologies</h2>

          <div className="cards">
            <article className="card">
              <span>01</span>
              <h3>HTML & CSS</h3>
              <p>Webページの構造とレイアウトをつくる</p>
            </article>

            <article className="card">
              <span>02</span>
              <h3>JavaScript</h3>
              <p>Webページに動きや機能を追加する</p>
            </article>

            <article className="card">
              <span>03</span>
              <h3>React</h3>
              <p>コンポーネントを活用した開発を学ぶ</p>
            </article>

            <article className="card">
              <span>04</span>
              <h3>Python</h3>
              <p>画像解析からweb開発まで</p>
            </article>

            <article className="card">
              <span>05</span>
              <h3>Flutter</h3>
              <p>複数プラットフォームの開発をする</p>
            </article>

            <article className="card">
              <span>06</span>
              <h3>Docker</h3>
              <p>再現性のある仮想環境をつくる</p>
            </article>

          </div>
        </section>

        <section className="section" id="works">
          <p className="section-label">03 / WORKS</p>
          <h2>Selected works</h2>

          <article className="work">
            <div className="work-number">PROJECT 001</div>
            <div>
              <h3>My Portfolio Website</h3>
              <p>
                自己紹介用の簡単なポートフォリオサイト
              </p>
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">CSS</span>
            </div>
          </article>
        </section>
      </main>

      <footer>
        <p>MY PORTFOLIO © 2026</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App
