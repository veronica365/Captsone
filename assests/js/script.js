// Functions to read elements by id, class or tag name
const $ = (element) => document.querySelector(element);

/**
 * Below are scripts to populate my works section with projects
 */
const featuredSpeakers = [
  {
    id: 1,
    name: 'Suzan Wojiski',
    jobDescription: 'CEO of Youtube',
    headline:
      'Discover how to work more closely across your team with customer-led demos and templates.',
  },
  {
    id: 2,
    name: 'Larry Page',
    jobDescription: 'Google Co-founder &amp; Former CEO ',
    headline:
      'Discover how to work more closely across your team with customer-led demos and templates.',
  },
  {
    id: 3,
    name: 'Catalina Popa',
    jobDescription: 'CEO of Creative Commons, ex COO of the Mozilla foundatio',
    headline:
      'Discover how to work more closely across your team with customer-led demos and templates.',
  },
  {
    id: 4,
    name: 'Ryan Merkley',
    jobDescription: 'CEO of Facebook',
    headline:
      'Discover how to work more closely across your team with customer-led demos and templates.',
  },
  {
    id: 5,
    name: 'Daniel Oh',
    jobDescription: 'CEO of Apple',
    headline:
      'Discover how to work more closely across your team with customer-led demos and templates.',
  },
  {
    id: 6,
    name: 'Johan Janssen',
    jobDescription: 'CEO of Tesla',
    headline:
      'Discover how to work more closely across your team with customer-led demos and templates.',
  },
];

const generateFeaturedSpeaker = (speakers) => {
  let innerHTML = '';
  speakers.forEach((speaker) => {
    innerHTML += `<div class="col-lg-6 mb-4">
                <div class="d-flex flex-row speaker card border-0">
                    <div class="image-wrap">
                        <img class="img-fluid" src="./assests/img/profile-${speaker.id}.png" alt="speaker 1">
                    </div>
                    <div class="card-body pt-0 d-flex flex-column">
                        <h3 class="card-title m-0 mb-2">${speaker.name}</h3>
                        <span>${speaker.jobDescription}</span>
                        <p class="card-text">${speaker.headline}</p>
                    </div>
                </div>
            </div>
        `;
  });
  const mobileViewMore = `
    <div class="col-12">
        <div class="py-2 text-center d-block d-md-none border border-2 border-gray show-more">
            <span class="m-0">More <i class="ms-2 fa-solid fa-angle-down text-danger fa-lg"></i></span>
        </div>
    </div>`;
  innerHTML += mobileViewMore;
  return innerHTML;
};

const featuredTitle = $('#speakers .title-2');
const featured = $('#speakers .speaker-wrapper .mx-auto');
featuredTitle.innerHTML = '<h2 class="m-0 fw-bold">Featured Speakers</h2><hr />';
featured.innerHTML = generateFeaturedSpeaker(featuredSpeakers);
$('.show-more').addEventListener('click', () => {
  $('#speakers').classList.toggle('mobile');
  $('.show-more').classList.toggle('d-none');
});
