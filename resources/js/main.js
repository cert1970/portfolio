'use strict';

import {MDCTabBar} from '@material/tab-bar';
import {MDCRipple} from '@material/ripple';

function loadFile(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      }
    });
    xhr.open('GET', url, true);
    xhr.send();
  });
}

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));

document.querySelector('.mdc-fab').addEventListener('click', () => {
  window.scroll({ top: 0, behavior: 'smooth' });
});

new Vue({
  el: 'main',
  data: {
    abouts: 0,
    activities: 0,
    awards: 0,
    certifications: 0,
    projects: 0,
    skills: 0
  },
  created: function() {
    Promise.all([
      loadFile('data/abouts.json'),
      loadFile('data/activities.json'),
      loadFile('data/awards.json'),
      loadFile('data/certifications.json'),
      loadFile('data/projects.json'),
      loadFile('data/skills.json')
    ]).then(values => {
      this.abouts         = JSON.parse(values[0]);
      this.activities     = JSON.parse(values[1]);
      this.awards         = JSON.parse(values[2]);
      this.certifications = JSON.parse(values[3]);
      this.projects       = JSON.parse(values[4]);
      this.skills         = JSON.parse(values[5]);

      let sections = document.querySelectorAll('section');
      let nav = document.querySelector('.navigation');

      // [].forEach.call(sections, (section, index) => {
      //   console.log(index, section.offsetTop);
      // });

      window.addEventListener('scroll', () => {
        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i].offsetTop <= window.scrollY + nav.offsetHeight) {
            tabBar.activateTab(i);
            break;
          }
        }
      });

      AOS.init({
        offset: 100,
        delay: 0,
        duration: 250,
        easing: 'mdc-standard'
      });

      M.ScrollSpy.init(sections,
        {
          'scrollOffset': document.querySelector('.navigation').offsetHeight,
          'activeClass': 'navigation__link--active'
        }
      );

      document.querySelector('section:last-child').setAttribute('style', `min-height: calc(100vh - ${nav.offsetHeight}px)`)
    }).catch(reason => {
      console.error('File load error: ' + reason);
    });
  }
});
