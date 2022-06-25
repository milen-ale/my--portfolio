const projectDetail1 = document.querySelector('.project-container1');

const projects1 = [
  {
    id: '1',
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featured_image: './images/card1.png',
    link_to_live: ['See project', './img/live.png', 'https://github.com'],
    link_to_source: ['See project', './img/git.png', 'https://github.com'],
    technologies: ['React', 'Redux', 'React-Router'],
    name_detail: ['Milen Alebel ', 'Front-End Dev', '2022'],
  },
  {
    id: '2',
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    featured_image: './images/card2.png',
    link_to_live: ['See project', './img/live.png', 'https://github.com'],
    link_to_source: ['See project', './img/git.png', 'https://github.com'],
    technologies: ['React', 'Redux', 'React-Router'],
    name_detail: ['Milen Alebel', 'Front-End Dev', '2021'],
  },
  {
    id: '3',
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',

    featured_image: './images/card3.png',
    link_to_live: ['See project', './img/live.png', 'https://github.com'],
    link_to_source: ['See project', './img/git.png', 'https://github.com'],
    technologies: ['React', 'Redux Toolkit'],
    name_detail: ['Contributors: Milen Alebel', 'Full-stack website', '2022'],
  },
  {
    id: '4',
    name: 'Tonic',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',

    featured_image: './images/card4.png',
    link_to_live: ['See project', './img/live.png', 'https://github.com'],
    link_to_source: ['See project', './img/git.png', 'https://github.com'],
    technologies: ['html', 'css', 'javaScript'],
    name_detail: ['milen alebel', 'Front-End Dev', '2021'],
  },
];

const selectedProject = projects1[0];
const selectedProject1 = projects1[1];
const selectedProject2 = projects1[2];
const selectedProject3 = projects1[3];

projectDetail1.innerHTML = `
    <div class="card-container">
  <div class="card">
    <img src="${selectedProject.featured_image}" class="cardpic" alt="" />
   <div class="desktop">
    <h2 class="card-title">${selectedProject.name}</h2>
    <h2 class="card-title-two">${selectedProject.name}</h2>
    <div class="card-about">
      <p>CANOPY</p>
      <ul>
        <li>Back End Dev</li>
        <li>2015</li>
      </ul>
    </div>
        <p class="card1-description-p">
        ${selectedProject.description}
        </p>
    
    <ul class="language">
      <li>${selectedProject.technologies[0]}</li>
      <li>${selectedProject.technologies[1]}</li>
      <li>${selectedProject.technologies[2]}</li>
    </ul>
    <button type="button" class="pro-button" id="1">${selectedProject.link_to_live[0]}</button>

</div>
</div>
</div>

<div class="card-container">
  <div class="card">
    <img src="${selectedProject1.featured_image}" class="cardpic" alt="" />
   <div class="desktop">
    <h2 class="card-title">${selectedProject1.name}</h2>
    <h2 class="card-title-two">${selectedProject1.name}</h2>
    <div class="card-about">
      <p>CANOPY</p>
      <ul>
        <li>Back End Dev</li>
        <li>2015</li>
      </ul>
    </div>
        <p class="card1-description-p">
        ${selectedProject1.description}
        </p>
    
    <ul class="language">
      <li>${selectedProject1.technologies[0]}</li>
      <li>${selectedProject1.technologies[1]}</li>
      <li>${selectedProject1.technologies[2]}</li>
    </ul>
    <button type="button" class="pro-button" id="2">${selectedProject.link_to_live[0]}</button>

</div>
</div>
</div>

<div class="card-container">
  <div class="card">
    <img src="${selectedProject2.featured_image}" class="cardpic" alt="" />
   <div class="desktop">
    <h2 class="card-title">${selectedProject2.name}</h2>
    <h2 class="card-title-two">${selectedProject2.name}</h2>
    <div class="card-about">
      <p>CANOPY</p>
      <ul>
        <li>Back End Dev</li>
        <li>2015</li>
      </ul>
    </div>
        <p class="card1-description-p">
        ${selectedProject2.description}
        </p>
    
    <ul class="language">
      <li>${selectedProject2.technologies[0]}</li>
      <li>${selectedProject2.technologies[1]}</li>
      <li>${selectedProject2.technologies[2]}</li>
    </ul>
    <button type="button" class="pro-button" id="3">${selectedProject2.link_to_live[0]}</button>

</div>
</div>
</div>

<div class="card-container">
  <div class="card">
    <img src="${selectedProject3.featured_image}" class="cardpic" alt="" />
   <div class="desktop">
    <h2 class="card-title">${selectedProject3.name}</h2>
    <h2 class="card-title-two">${selectedProject3.name}</h2>
    <div class="card-about">
      <p>CANOPY</p>
      <ul>
        <li>Back End Dev</li>
        <li>2015</li>
      </ul>
    </div>
        <p class="card1-description-p">
        ${selectedProject3.description}
        </p>
    
    <ul class="language">
      <li>${selectedProject3.technologies[0]}</li>
      <li>${selectedProject3.technologies[1]}</li>
      <li>${selectedProject3.technologies[2]}</li>
    </ul>
    <button type="button" class="pro-button" id="4">${selectedProject.link_to_live[0]}</button>

</div>
</div>
</div>
`;
