'use strict';

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
      this.abouts = JSON.parse(values[0]);
      this.activities = JSON.parse(values[1]);
      this.awards = JSON.parse(values[2]);
      this.certifications = JSON.parse(values[3]);
      this.projects = JSON.parse(values[4]);
      this.skills = JSON.parse(values[5]);
    }).catch(reason => {
      console.error('File load error: ' + reason);
    });
  }
});
