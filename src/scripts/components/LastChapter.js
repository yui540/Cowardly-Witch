import React from 'react'
import Menu from './Menu'

export default ({ menu, openMenu, closeMenu }) => (
  <article className="last-chapter">
    <div className="last-chapter__bg" />
    <div className="last-chapter__ball" />
    <div className="last-chapter__frame">
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="last-chapter__decoration">
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="moon" />
    </div>
    <div className="last-chapter__logo" />
    <nav className="last-chapter__sns-nav">
      <a
        href="https://twitter.com/yui540"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
      >
        <i className="fab fa-twitter" />
      </a>
      <a href="https://github.com/yui540" target="_blank" rel="noopener noreferrer" title="GitHub">
        <i className="fab fa-github" />
      </a>
      <a
        href="https://yuki540.hatenablog.jp/archive"
        target="_blank"
        rel="noopener noreferrer"
        title="はてなブログ"
      >
        <i className="fas fa-edit" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCcrjkTnjMxXf7wnynsmWMzA/"
        target="_blank"
        rel="noopener noreferrer"
        title="YouTube"
      >
        <i className="fab fa-youtube" />
      </a>
      <a
        href="https://www.instagram.com/yui540net/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <i className="fab fa-instagram" />
      </a>
    </nav>
    <button type="button" className="last-chapter__menu-btn" onClick={openMenu}>
      <div />
      <div />
      <div />
    </button>
    <Menu menu={menu} closeMenu={closeMenu} />
  </article>
)
