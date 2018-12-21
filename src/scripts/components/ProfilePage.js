import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import name from '../../images/profile-page/name.svg'
import wishlist from '../../images/profile-page/wishlist.svg'
import job from '../../images/profile-page/job.svg'

export default class ProfilePage extends Component {
  componentDidMount() {
    const { changeChapter, closeMenu } = this.props
    changeChapter()
    closeMenu()
  }

  render() {
    return (
      <article className="page profile-page">
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
          <img className="profile-page__icon" src="./images/profile-page/icon.png" alt="アイコン" />
          <img className="profile-page__name" src={name} alt="yui540" />
          <h2 className="page__sub-title">どんな人物？</h2>
          <p className="page__description">
            魔法少女になるため、プログラミングを学んだが、<br />
            まず少女でないことに気づき、人生が狂う。<br />
            ----そして、現在は<br />
            年齢を考えて魔女になりたいという気持ちと、自分の臆病な性格から<br />
            「臆病な魔女」という属性を手に入れた。<br />
            ※性別は、男です。
          </p>
          <h2 className="page__sub-title">僕の構成要素</h2>
          <section className="profile-page__table">
            <div className="inner">
              <h4>状態</h4><p>病んでる</p>
              <h4>性別</h4><p>男</p>
              <h4>ひとこと</h4><p>JavaScriptとCSSとAtomと可愛いのがすこ。</p>
              <h4>誕生日</h4><p>1996/11/09 - 22歳</p>
              <h4>特徴</h4><p>病弱・臆病・ポンコツ・精神不安定</p>
              <h4>行動</h4><p>ずっとぐーたらしてる</p>
              <h4>好きな作品</h4><p>ゴブリンスレーヤー, やはり俺の青春ラブコメはまちがっている。, 五等分の花嫁, ガヴリールドロップアウト, すのはら荘の管理人さん</p>
              <h4>好きな人・キャラ</h4><p>丹羽孝希, 由比ヶ浜結衣, ミライアカリ, さユり, ナナヲアカリ, loundraw, 寺田てら, オーイシマサヨシ</p>
              <h4>好きな技術</h4><p>JavaScript, CSS, HTML5Canvas, WebGL, Electron</p>
              <h4>好きな食べ物</h4><p>和菓子, 駄菓子, 肉じゃが, チョコレート, あん饅, マカロン</p>
              <h4>Kyash</h4><p>yui540</p>
              <h4 className="last">FANBOX</h4><p className="lastname"><a href="https://www.pixiv.net/fanbox/creator/16972511" target="_blank" rel="noopener noreferrer">yui540を応援する</a></p>
            </div>
            <a className="link-btn" rel="noopener noreferrer" href="http://amzn.asia/3Xubapz" target="_blank">
              <img src={wishlist} alt="ほしい物リスト" />
            </a>
          </section>
          <h2 className="page__sub-title">お仕事のご依頼</h2>
          <section className="profile-page__job">
            <p>
              <s>
                やっはろー！<br />
                実は個人でもお仕事を受け付けております。<br />
                LP,同人サイト,ポートフォリオサイトなどの<br />
                制作をお手伝いさせていただきます。（ペライチのWebページの場合、6万〜8万円を目安）<br />
                お仕事のご依頼は、Twitterとかで<br />
                DM飛ばしてね。
              </s><br />
              現在、お仕事は受け付けておりません。
            </p>
            <a className="link-btn" rel="noopener noreferrer" href="https://twitter.com/yui540" target="_blank">
              <img src={job} alt="お仕事のご依頼" />
            </a>
          </section>
          <h2 className="page__sub-title">ひとりごと</h2>
          <section className="profile-page__timeline">
            <iframe src="./timeline.html" title="timeline"></iframe>
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
