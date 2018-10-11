import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProfilePage extends Component {
  componentDidMount() {
    const { changeChapter, closeMenu } = this.props
    changeChapter()
    closeMenu()
  }

  render() {
    return (
      <article className="page site-page">
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
          <p className="page__description top">
            このサイトは僕、 yui540のポートフォリオサイトのバージョン7です。<br />
            数々のリニューアルを経て、僕は新しい試みのプロジェクトに取り掛かりました。<br />
            -------それが、Cowardly Witch Projectです。<br />
            <img src="./images/site-page/0.jpg" alt="0" />
            このプロジェクトで重要なのが、Webサイトやアプリケーションを「魔法の世界」や「おとぎ話」のような世界観で表現することです。<br />
            それには、アニメーションやデザインの感性を重要視する必要があり、まず最初にそれを活かしたWebサイトを制作する必要がありました。<br />
            そこで完成したのが、このサイト「臆病な魔女」です。
          </p>
          <h2 className="page__sub-title">臆病な魔女とは</h2>
          <p className="page__description">
            このサイトのテーマである「臆病な魔女」とは、魔女になりたいという気持ちと、僕自身の臆病な性格が混ざり合って出来た僕自身の属性です。 <br />
            <img src="./images/site-page/1.png" alt="1" />
            なので、「yui540=憶病な魔女」です。<br />
            そんな臆病な魔女がWebサイトに感情を持たせたいという思いから、このサイトに魔法をかけました。<br />
            「臆病な魔女は、Webサイトに魔法をかけた。」
          </p>
          <h2 className="page__sub-title">オープニングアニメーションの構成</h2>
          <p className="page__description">
            このサイトのオープニングアニメーションは、<br />
            Prologue<br />
            Version_1<br />
            Version_2<br />
            Version_3<br />
            Version_4<br />
            Version_5<br />
            Version_6<br />
            LastChapter<br />
            というパート構成になっています。<br />
            <img src="./images/site-page/2.png" alt="2" />
            Prologueは、「魔女にとっての検索サイトってどんなのだろう？」ということをイメージして、自分なりに魔女風の検索を表現しました。<br />
            <img src="./images/site-page/3.png" alt="3" />
            Version_1 ~ Version_6は、このサイトの過去のバージョンの世界観を振り返っています。<br />
            <img src="./images/site-page/4.png" alt="4" />
            過去バージョンは、「作ったものページ」にありますのでよかったらご覧ください。<br />
            ※Version_1 ~ Version_4は現在、非公開のため動画での公開になっています。
          </p>
          <h2 className="page__sub-title">各ページ</h2>
          <p className="page__description">
            各ページのデザインやアニメーションは、とにかく僕が思う「可愛い」を目一杯表現しました。<br />
            <img src="./images/site-page/5.png" alt="5" />
            <img src="./images/site-page/6.png" alt="6" />
            <img src="./images/site-page/7.png" alt="7" />
            <img src="./images/site-page/8.png" alt="8" />
            全体的にカラフルな色合いに仕上がったと思います。
          </p>
          <h2 className="page__sub-title">さいごに</h2>
          <p className="page__description">
          これからも、このサイトのような「魔法の世界」や「おとぎ話」のような世界観のWebサイトやアプリケーションを作っていきます。<br />
          ぜひ、お楽しみに。
          </p>
          <section className="page__space"></section>
        </div>
        <Link to="/" className="page__close-btn">
          <div></div><div></div>
        </Link>
      </article>
    )
  }
}
