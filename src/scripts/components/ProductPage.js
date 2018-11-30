import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import products from '../config/product'

export default class ProfilePage extends Component {
  componentDidMount() {
    const { changeChapter, closeMenu } = this.props
    changeChapter()
    closeMenu()
  }

  render() {
    return (
      <article className="page product-page">
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
          <h2 className="page__sub-title top">アプリ・Webサービスなど</h2>
          <section className="product-page__content">
            {products.app.map((app, key) => {
              return (
                <a className="content" href={app.link} key={key} target="_blank" rel="noopener noreferrer">
                  <div className="inner">
                    <img src={app.thumb} alt={app.name} />
                    <h4 className="title">{app.name}</h4>
                    <p className="description">{app.description}</p>
                    <small className="date">{app.date}</small>
                  </div>
                </a>
              )
            })}
          </section>

          <h2 className="page__sub-title">デザイン</h2>
          <section className="product-page__content">
            {products.design.map((design, key) => {
              return (
                <a className="content" href={design.link} key={key} target="_blank" rel="noopener noreferrer">
                  <div className="inner">
                    <img src={design.thumb} alt={design.name} />
                    <h4 className="title">{design.name}</h4>
                    <p className="description">{design.description}</p>
                    <small className="date">{design.date}</small>
                  </div>
                </a>
              )
            })}
          </section>

          <h2 className="page__sub-title">お仕事実績</h2>
          <section className="product-page__content">
            {products.works.map((work, key) => {
              return (
                <a className="content" href={work.link} key={key} target="_blank" rel="noopener noreferrer">
                  <div className="inner">
                    <img src={work.thumb} alt={work.name} />
                    <h4 className="title">{work.name}</h4>
                    <p className="description">{work.description}</p>
                    <small className="date">{work.date}</small>
                  </div>
                </a>
              )
            })}
          </section>

          <h2 className="page__sub-title">子作品まとめ</h2>
          <section className="product-page__content">
            {products.matome.map((img, key) => {
              return (
                <a className="content" href={img.link} key={key} target="_blank" rel="noopener noreferrer">
                  <div className="inner">
                    <img src={img.thumb} alt={img.name} />
                    <h4 className="title">{img.name}</h4>
                    <p className="description">{img.description}</p>
                    <small className="date">{img.date}</small>
                  </div>
                </a>
              )
            })}
          </section>

          <h2 className="page__sub-title">イラスト</h2>
          <section className="product-page__content">
            {products.illust.map((img, key) => {
              return (
                <a className="content" href={img.link} key={key} target="_blank" rel="noopener noreferrer">
                  <div className="inner">
                    <img src={img.thumb} alt={img.name} />
                    <h4 className="title">{img.name}</h4>
                    <p className="description">{img.description}</p>
                    <small className="date">{img.date}</small>
                  </div>
                </a>
              )
            })}
          </section>

          <h2 className="page__sub-title">ライブラリ</h2>
          <section className="product-page__content">
            {products.lib.map((lib, key) => {
              return (
                <a className="content" href={lib.link} key={key} target="_blank" rel="noopener noreferrer">
                  <div className="inner">
                    <img src={lib.thumb} alt={lib.name} />
                    <h4 className="title">{lib.name}</h4>
                    <p className="description">{lib.description}</p>
                    <small className="date">{lib.date}</small>
                  </div>
                </a>
              )
            })}
          </section>

          <h2 className="page__sub-title">動画</h2>
          <section className="product-page__content">
            {products.movie.map((movie, key) => {
              return (
                <a className="content" href={movie.link} key={key} target="_blank" rel="noopener noreferrer">
                  <div className="inner">
                    <img src={movie.thumb} alt={movie.name} />
                    <h4 className="title">{movie.name}</h4>
                    <p className="description">{movie.description}</p>
                    <small className="date">{movie.date}</small>
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
