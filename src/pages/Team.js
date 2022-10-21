import React from 'react'
import Sujan from "../pictures/Team/CEO.jpg";
import Saksham from "../pictures/Team/CTO.jpg"
import Aishma from "../pictures/Team/Designer.png"
import Nihang from "../pictures/Team/Full stack dev.jpg"
import Rahul from "../pictures/Team/fullstack.png"
import "../pages/cssdesign/Team.css";

export default function Team() {
  return (
    <div class="responsive-container-block container">
      <p class="text-blk team-head-text">
        Our Team
      </p>
      <div class="responsive-container-block">
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
          <div class="card">
            <div class="team-image-wrapper">
              <img src={Sujan}
                class="team-member-image" />
            </div>
            <p class="text-blk name">Sujan Bhattari
            </p>
            <p class="text-blk position">CEO & Founder
            </p>
            <p class="text-blk feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="social-icons">
              <a href="https://www.twitter.com" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                  class="twitter-icon" />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"
                  class="facebook-icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
          <div class="card">
            <div class="team-image-wrapper">
              <img src={Saksham}
                class="team-member-image" />
            </div>
            <p class="text-blk name">Saksham Kadayat
            </p>
            <p class="text-blk position">CTO & Co-Founder
            </p>
            <p class="text-blk feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="social-icons">
              <a href="https://www.twitter.com" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                  class="twitter-icon" />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"
                  class="facebook-icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
          <div class="card">
            <div class="team-image-wrapper">
              <img src={Aishma}
                class="team-member-image" />
            </div>
            <p class="text-blk name">Aishma Poudel
            </p>
            <p class="text-blk position">Graphics Designer
            </p>
            <p class="text-blk feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="social-icons">
              <a href="https://www.twitter.com" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                  class="twitter-icon" />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"
                  class="facebook-icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
          <div class="card">
            <div class="team-image-wrapper">
              <img src={Nihang}
                class="team-member-image" />
            </div>
            <p class="text-blk name">Nihang Lama
            </p>
            <p class="text-blk position">Full stack Developer
            </p>
            <p class="text-blk feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="social-icons">
              <a href="https://www.twitter.com" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                  class="twitter-icon" />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"
                  class="facebook-icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
          <div class="card">
            <div class="team-image-wrapper">
              <img src={Rahul}
                class="team-member-image" />
            </div>
            <p class="text-blk name">Rahul Dotel
            </p>
            <p class="text-blk position">Full stack Developer
            </p>
            <p class="text-blk feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="social-icons">
              <a href="https://www.twitter.com" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                  class="twitter-icon" />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"
                  class="facebook-icon" />
              </a>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}
