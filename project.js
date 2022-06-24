const seeProjectDetail = document.querySelectorAll('.pro-button');
const projectDetail = document.querySelector('.project-container');
const mainTag = document.querySelector('.flex-container');
const header = document.querySelector('.header');

const projects = [
  {
    id: '1',
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featured_image: './images/card1.png',
    link_to_live: ['See live', './images/iconlive.png', 'https://github.com'],
    link_to_source: ['See source', './images/github.png', 'https://github.com'],
    technologies: ['React', 'Redux', 'React-Router'],
    name_detail: ['Milen Alebel ', 'Front-End Dev', '2022'],
  },
  {
    id: '2',
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featured_image: './images/card2.png',
    link_to_live: ['See live', './img/live.png', 'https://github.com'],
    link_to_source: ['See source', './img/git.png', 'https://github.com'],
    technologies: ['React', 'Redux', 'React-Router'],
    name_detail: ['Milen Alebel', 'Front-End Dev', '2021'],
  },
  {
    id: '3',
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',

    featured_image: './images/card3.png',
    link_to_live: ['See live', './img/live.png', 'https://github.com'],
    link_to_source: ['See source', './img/git.png', 'https://github.com'],
    technologies: ['React', 'Redux Toolkit'],
    name_detail: ['Contributors: Milen Alebel', 'Full-stack website', '2022'],
  },
  {
    id: '4',
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',

    featured_image: './images/card4.png',
    link_to_live: ['See live', './img/live.png', 'https://github.com'],
    link_to_source: ['See source', './img/git.png', 'https://github.com'],
    technologies: ['html', 'css', 'javaScript'],
    name_detail: ['milen alebel', 'Front-End Dev', '2021'],
  },
];

seeProjectDetail.forEach((button) => {
  button.addEventListener('click', (e) => {
    const selectedProject = projects.filter(
      (project) => project.id === e.target.id
    )[0];
    projectDetail.classList.remove('hide');
    mainTag.classList.add('fixed_postion');
    header.classList.add('fixed_postion');

    projectDetail.innerHTML = `
    <div class="overlay">
    <div id="modal">
    <div>
   
    <section class="card  popup-card">
    <div class="">
    <div class = popup-header>
      <h2 class="card-title-two cardtwo">${selectedProject.name}</h2>
      <img class="close-btn"src="./images/Icon.png"  alt="Icon">
      </div>
      <div class="card-about">
        <p>CANOPY</p>
        <ul>
          <li>Back End Dev</li>
          <li>2015</li>
        </ul>
      </div>
     
      <div class="card-popup"><img class="card-pop1" src="${selectedProject.featured_image}" alt="" /></div>
          <div class="flex">
          <div class="card1-description" >
          <p class="card1-description-p">
          ${selectedProject.description}
          </p>
        </div>
        <div>
      <ul class="language">
        <li>${selectedProject.technologies[0]}</li>
        <li>${selectedProject.technologies[1]}</li>
        <li>${selectedProject.technologies[2]}</li>
      </ul>

      <div class="project-detail-buttons">
      <a  href="${selectedProject.link_to_live[2]}"><button class="work-button_1 see-source">${selectedProject.link_to_live[0]}
<img class="see-source-img" src=${selectedProject.link_to_live[1]} alt="" /></button>
</a>
      <a href="${selectedProject.link_to_source[2]}"><button class="work-button_1 see-source">${selectedProject.link_to_source[0]}
<img class="see-source-img"  src=${selectedProject.link_to_source[1]}  padding-top=30px ; alt="" /></button>
</a>
  </div>
  </div>
  </div>

    
  </section>
</div>
</div>
</div>
  `;

    const projectDetailClose = document.querySelector('.close-btn');
    projectDetailClose.addEventListener('click', () => {
      mainTag.classList.remove('fixed_postion');
      header.classList.remove('fixed_postion');
      projectDetail.classList.add('hide');
    });
  });
});
