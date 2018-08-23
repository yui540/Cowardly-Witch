import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import memories from '../config/memories'

export default class ProfilePage extends Component {
  componentDidMount() {
    const { changeChapter, closeMenu } = this.props
    changeChapter()
    closeMenu()
  }

  render() {
    return (
      <article className="page memories-page">
        <div className="page__bg"></div>
        <div className="page__decoration">
          <div></div><div></div><div></div><div></div>
        </div>
        <div className="page__frame"></div>
        <div className="page__inner">
          <section className="page__title">
            <div></div>
          </section>
          <section className="page__project"></section>
          <h2 className="page__sub-title top">今までの活動や出来事</h2>
          <section className="memories-page__content">
            {memories.map((mem, key) => {
              return (
                <a className="content" href={mem.link} key={key} target="_blank" rel="noopener noreferrer" title={mem.title}>
                  <img className="thumb" src={mem.thumb} alt={mem.title} />
                  <div className="color">
                    <h4 className="title">{mem.title}</h4>
                    <small className="date">{mem.date}</small>
                  </div>
                </a>
              )
            })}
          </section>

          <section className="page__space"></section>
        </div>
        <Link to="/" className="page__close-btn">
          <div></div><div></div>
        </Link>
      </article>
    )
  }
}
