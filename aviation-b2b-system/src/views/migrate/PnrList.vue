<template>
  <div class="migrate-pnr-list">
    <!-- Migrated from /02PNR搜索—列表.html -->
    <div class="header-top">
      <div class="wp">
        <span class="iconfont icon-dianhua"></span>
        <span>86-755-82255555</span>
      </div>
    </div>
    <div class="search-bg">
      <div class="header">
        <div class="header-box">
          <div class="menubtn"><i></i><i></i><i></i></div>
          <a href="#" class="logo"><img src="/images/logo.png"/></a>
          <div class="nav">
            <ul class="clearfix">
              <li class="on"><span><a href="#"><b class="iconfont icon-feiji"></b> Book air tickets</a></span></li>
              <li><span><a href="#"><b class="iconfont icon-lvhangjiudian"></b> Book a hotel</a></span></li>
              <li class="header-order"><span><a href="#"><b class="iconfont icon-dingdan"></b> Order Management</a></span></li>
              <li class="header-right"><a href="#"><span class="iconfont icon-wode"></span><span class="user-name">123456789@qq.com</span><span class="iconfont icon-tuichu"></span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="wp">
        <div class="bookbox">
          <div class="bookbox-top">
            <a href="#" class="on">PNR search</a>
            <a href="#">Flight search</a>
          </div>
          <div class="pnrserch-box">
            <div class="pnrserch-left">
              <button class="search-btn"><span class="iconfont icon-sousuo"></span></button>
              <textarea placeholder="Paste PNR text here"></textarea>
            </div>
            <div class="pnrserch-right">
              <div class="pnrserch-list">
                <div class="pnrserch-list-top">
                  <div class="pnrserch-name">
                    <img src="/images/pnrtb.jpg" alt=""/>
                    <div class="pnrserch-name-text">
                      <p>VZ811</p>
                      <p>Economy class (y)</p>
                      <p>Non-shared</p>
                    </div>
                  </div>
                  <div class="pnrserch-flightbox">
                    <div class="pnrserch-flightbox-text"><h3>FUK</h3><p>08:55</p><p>2025/11/26</p></div>
                    <div class="pnrserch-flightbox-planetp"><span class="iconfont icon-jt_feiji"></span></div>
                    <div class="pnrserch-flightbox-text"><h3>BKK</h3><p>13:55</p><p>2025/11/26</p></div>
                  </div>
                  <div class="pnrserch-time"><span class="iconfont icon-shijian"></span><span>6h5m</span></div>
                </div>
                <div class="pnrserch-list-content">
                  <div class="pnrserch-list-content-title">
                    <p>The cabin class you are searching for is currently the lowest one</p>
                    <p>If you have any questions, please contact the customer service staff.</p>
                  </div>
                  <div class="pnrserch-box">
                    <div class="pnrserch-item" v-for="i in 4" :key="i">
                      <div class="pnrserch-item-left"><span>Self-operated air routes</span><p>Tickets will be issued within one hour</p></div>
                      <div class="pnrserch-item-cont"><span>Cabin : T8</span>| <span>Brand freight rate</span>| <span>Fare Basis </span>| <span>Baggage allowance</span></div>
                      <div class="pnrserch-item-right"><div><h3>3200.00</h3><span>CNY</span></div><a href="#" class="reservation">Reservation</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wp">
      <div class="policy-box">
        <div class="policy-title">Policy promotion</div>
        <div class="policy-ul">
          <div class="policy-item" v-for="i in 6" :key="i">
            <span class="policy-rate">3.25%</span>
            <span>MH</span>
            <div class="policy-content"><div class="policypadd"><p>One-way/round-trip</p><p>Departure: MY</p><p>Arrival: Global Excluded country: MY</p></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bg">
      <div class="wp">
        <div class="footer-top">
          <div class="footer-top-left"><div class="wat"><img src="/images/wat.jpg" alt=""/></div><div><p>Route working hours</p><p>00:00-23:59(GMT+8)</p></div></div>
          <div class="footer-top-right"><a href="#" target="_blank"><span class="iconfont icon-weixin"></span></a><a href="#" target="_blank"><span class="iconfont icon-youjian"></span></a></div>
        </div>
        <div class="footer-bottom"><p>Yue ICP No. 2022074476. All rights reserved by Zhongyuan Aviation ©</p></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Minimal interactivity can be added later; keep component lightweight now.
</script>
</script>

<style scoped>
.migrate-pnr-list{padding:16px}
</style>
