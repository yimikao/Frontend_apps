//VIEW
const image_space = document.getElementById('person-img');
const author_space = document.getElementById('author');
const job_space = document.getElementById('job');
const info_space = document.getElementById('info');

const previous_button = document.querySelector('.prev-btn');
const next_button = document.querySelector('.next-btn');
const random_button = document.querySelector('.random-btn');



//MODEL

let currentIndividual = 0;

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


//CONTROLLER

window.addEventListener("DOMContentLoaded", function () {

  const individual = reviews[currentIndividual];
  image_space.src = individual.img;
  author_space.textContent = individual.name;
  job_space.textContent = individual.job;
  info_space.textContent = individual.text;

})

function show_individual_review(arg_individual) {

  const individual = reviews[arg_individual];
  image_space.src = individual.img;
  author_space.textContent = individual.name;
  job_space.textContent = individual.job;
  info_space.textContent = individual.text;
}

previous_button.addEventListener("click", function () {
  currentIndividual--;

  if (currentIndividual < 0) {
    currentIndividual = reviews.length - 1;
  }
  show_individual_review(currentIndividual);
})

next_button.addEventListener("click", function () {
  currentIndividual++;

  if (currentIndividual > reviews.length - 1) {
    currentIndividual = 0;
  }
  show_individual_review(currentIndividual);
})

random_button.addEventListener("click", function () {

  currentIndividual = Math.floor(Math.random() * reviews.length)
  show_individual_review(currentIndividual);
})