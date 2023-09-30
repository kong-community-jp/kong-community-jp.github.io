<template>
  <PreLoader />
  <PreHeader />
  <CustomHeader />

  <div class="main-banner" id="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="caption header-text">
            <h6>OSS API Gateway「Kong」の日本コミュニティ</h6>
            <div class="line-dec"></div>
            <h4>Kong <span>Community,</span> Japan</h4>
            <p>
              OSS API
              Gateway「Kong」を中心とした、日本におけるAPIマネジメントプラットフォーム普及に向けた活動を開始しました。このサイトはコミュニティが運営するKong情報ページです。
            </p>
            <div class="main-button scroll-to-section"><a href="#aboutus" class="fw-bold">About Us</a></div>
            <span>or</span>
            <div class="second-button"><a href="#events" class="fw-bold">Check our Events</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="services section" id="aboutus">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-6">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2>Kong <span>Community,</span> Japanとは?</h2>
                <div class="line-dec"></div>
                <p>
                  日本におけるAPIマネジメントプラットフォームの普及に向けて、<strong>OSSであるKong Gateway</strong
                  >を中心に活動しています
                </p>
              </div>
              <p>
                いまやPC、スマートフォン、IoT機器などの様々な通信機器がつながる時代となり、企業活動においても社内外へのデータ連携に注目が集まっている上に、SPAのようなより優れたUXを提供する目的からもAPI主導の開発に対する需要が高まっています。こうした背景からAPIマネジメント市場は2030年までに、年平均21.2%の成長が見込まれています。
              </p>
              <br />
              <p>
                APIマネジメントの重要性は高まる一方、日本語で発信される情報が少なさやコミュニティ活動が活発ではないことから、日本ではこの分野におけるナレッジ共有や蓄積が不十分です。また、世界で最も使われているOSS
                APIプラットフォームである「Kong」の認知度も高いとは言えません。世界でのKong
                OSSプロジェクトの活動は非常に活発で、16万人のコミュニティメンバーが活躍しており、世界44ヶ国/79のグループでミートアップが開催されています。
              </p>
              <br />
              <p>
                このような背景から、<strong
                  >日本におけるAPIマネジメントプラットフォームの普及に向けて、OSSであるKongゲートウェイを中心に活動するKong
                  Community, Japanを設立いたしました。</strong
                >新機能の検証や実践事例をミートアップやブログ投稿での発信を行なっています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="projects section" id="events">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h2>イベント情報</h2>
            <div class="line-dec"></div>
            <p>定期的にConnpassにてミートアップを開催しています。ぜひご参加ください!!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <EventCarousel />
        </div>
      </div>
    </div>
  </div>

  <div class="infos section" id="infos">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main-content">
            <div class="row">
              <div class="col-lg-8">
                <div class="section-heading">
                  <h2>Kong リリース情報 / ブログ情報</h2>
                  <div class="line-dec"></div>
                  <a
                    class="twitter-timeline"
                    data-chrome="nofooter noscrollbar"
                    data-width="100%"
                    data-height="600"
                    data-theme="dark"
                    href="https://twitter.com/thekongincjapan?ref_src=twsrc%5Etfw"
                    >Tweets by thekongincjapan</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-us section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="contact-us-content">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading">
                  <h2>お問い合わせ</h2>
                  <p>
                    <strong
                      >Connpassにて定期的にミートアップを開催しています。ぜひKong Community,
                      Japanのグループにご参加ください。</strong
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="more-info">
              <div class="row">
                <div class="col-lg-4">
                  <div class="info-item">
                    <a href="https://kongjp.connpass.com/"
                      ><i class="fa-solid fa-microphone-lines"></i>
                      <h4>Connpass</h4></a
                    >
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="info-item">
                    <a href="https://bit.ly/kongjpslack"
                      ><i class="fa-brands fa-slack"></i>
                      <h4>Slack</h4></a
                    >
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="info-item">
                    <a href="https://github.com/kong-community-jp"
                      ><i class="fa-brands fa-github"></i>
                      <h4>Github</h4></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CopyrightFooter />
</template>
