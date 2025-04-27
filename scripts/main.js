const artworkData = [

  // ===== Dragon Ball Z Era =====
  {
    title: "Goku",
    image: "assets/images/goku.png",
    year: "1992",
    category: "dbz",
    description: "Sayian protagonist after defeating Frieza on Planet Namek using his Super Sayian transformation"
  },
  {
    title: "Cell (First Form)",
    image: "assets/images/firstformcell.png",
    year: "1992",
    category: "dbz",
    description: "Imperfect bio-android with insectoid features"
  },
  {
    title: "Frieza (Final Form)",
    image: "assets/images/friezaZ.png",
    year: "1991",
    category: "dbz",
    description: "The galactic tyrant in his sleek, white-armored form, smirking"
  },
  {
    title: "Gohan (Vs. Perfect Cell)",
    image: "assets/images/gohanZ.png",
    year: "1993",
    category: "dbz",
    description: "Teen Gohan stands up to the mighty Perfect Cell"
  },
  {
    title: "Kid Buu",
    image: "assets/images/kidbuu.png",
    year: "1995",
    category: "dbz",
    description: "Purest form of Majin Buu with chaotic energy"
  },
  {
    title: "Majin Vegeta",
    image: "assets/images/majinvegeta.png",
    year: "1989",
    category: "dbz",
    description: "The fallen prince after overcoming Babadi's curse, using it's power to amplify his battle power immensely"
  },
  {
    title: "Piccolo",
    image: "assets/images/piccoloZ.png",
    year: "1989",
    category: "dbz",
    description: "Namekian warrior preparing for battle against the evil Sayian Raditz"
  },
  {
    title: "Perfect Cell",
    image: "assets/images/perfectcell.png",
    year: "1993",
    category: "dbz",
    description: "The ultimate bio-android effortlessly lifting a massive cliff fragment with one hand, demonstrating his overwhelming power"
  },
  {
    title: "Master Roshi",
    image: "assets/images/roshi.png",
    year: "1986",
    category: "dbz",
    description: "The Turtle Hermit, a legendary master of martial arts and mentor of the Z fighters"
  },

  // ===== Dragon Ball Super Era =====
  {
    title: "Beerus",
    image: "assets/images/beerus.png",
    year: "2013",
    category: "dbs",
    description: "Universe 7's God of Destruction, possessing energy capable of destroying entire solar systems or even galaxies"
  },
  {
    title: "Frieza (Resurrected)",
    image: "assets/images/friezaSuper.png",
    year: "2015",
    category: "dbs",
    description: "Golden form during Tournament of Power"
  },
  {
    title: "Goku (Ultra Instinct Sign)",
    image: "assets/images/gokuSuper.png",
    year: "2017",
    category: "dbs",
    description: "First manifestation of the Ultra Instinct technique"
  },
  {
    title: "Vegeta (Super Saiyan Blue)",
    image: "assets/images/vegetaSuper.png",
    year: "2015",
    category: "dbs",
    description: "Royal Saiyan in godly blue aura"
  },
  {
    title: "Whis",
    image: "assets/images/whis.png",
    year: "2013",
    category: "dbs",
    description: "Universe 7's angelic guide"
  },
  {
    title: "Future Trunks",
    image: "assets/images/futuretrunks.png",
    year: "2016",
    category: "dbs",
    description: "Time-traveling Sayian warrior gripping his sword, ready to strike"
  },
  {
    title: "Jiren",
    image: "assets/images/jiren.png",
    year: "2017",
    category: "dbs",
    description: "Grey alien warrior from Universe 11 with colossal strength, fueled by grief"
  },
  {
    title: "Hit",
    image: "assets/images/hit.png",
    year: "2016",
    category: "dbs",
    description: "Universe 6's elite assassin with time-skipping abilities"
  },
  {
    title: "Zeno",
    image: "assets/images/zenny.png",
    year: "2016",
    category: "dbs",
    description: "The Omni-King floating in the vastness of space, capable of erasing universes or existence itself"
  },

  // ===== Dr. Slump Era =====
  {
    title: "Arale Norimaki",
    image: "assets/images/arale.jpg",
    year: "1980",
    category: "dr-slump",
    description: "The iconic android girl with signature goggles"
  },
  {
    title: "Akane",
    image: "assets/images/akane.png",
    year: "1981",
    category: "dr-slump",
    description: "Pigtailed classmate with cheerful expression"
  },
  {
    title: "Gatchan",
    image: "assets/images/gatchan.png",
    year: "1980",
    category: "dr-slump",
    description: "Mechanical companion with extendable arms"
  },
  {
    title: "Midori",
    image: "assets/images/midori.png",
    year: "1982",
    category: "dr-slump",
    description: "Green-haired girl with drill-shaped pigtails"
  },
  {
    title: "Obotchaman",
    image: "assets/images/obotchaman.png",
    year: "1981",
    category: "dr-slump",
    description: "Arale's serious-faced robotic rival"
  },
  {
    title: "Peasuke Soramame",
    image: "assets/images/peasuke.png",
    year: "1983",
    category: "dr-slump",
    description: "Arale's love interest with hidden strength"
  },
  {
    title: "Senbei Norimaki",
    image: "assets/images/senbe.png",
    year: "1980",
    category: "dr-slump",
    description: "Eccentric inventor and Arale's creator"
  },
  {
    title: "Taro Soramame",
    image: "assets/images/taro.png",
    year: "1981",
    category: "dr-slump",
    description: "Peasuke's martial artist older brother"
  },
  {
    title: "Dr. Mashirito",
    image: "assets/images/doc.png",
    year: "1981",
    category: "dr-slump",
    description: "Arale's arch-nemesis with spiral glasses, often creating evil robot duplicates"
  }
];

const featuredArtwork = [
  {
    title: "Goku",
    image: "assets/images/goku.png",
    year: "1989",
    description: "Classic Saiyan warrior wearing tattered orange gi in Super Sayian form after defeating Frieza"
  },
  {
    title: "Goku (Ultra Instinct)",
    image: "assets/images/gokuSuper.png",
    year: "2017",
    description: "Refined art style with divine Ultra Instinct transformation"
  },
  {
    title: "Majin Vegeta",
    image: "assets/images/majinvegeta.png",
    year: "2001",
    description: "Fallen prince with Babadi's curse mark, harnessing the curse's evil power"
  },
  {
    title: "Vegeta (Super Saiyan Blue)",
    image: "assets/images/vegetaSuper.png",
    year: "2015",
    description: "Royal Saiyan in godly blue aura"
  },
  {
    title: "Frieza (Final Form)",
    image: "assets/images/friezaZ.png",
    year: "1991",
    description: "Galactic tyrant in sleek white armor on Planet Namek"
  },
  {
    title: "Golden Frieza",
    image: "assets/images/friezaSuper.png",
    year: "2015",
    description: "Resurrected emperor with metallic golden sheen"
  }
];

function initGallery() {
  filterArt('all');
  setupEventListeners();
  initSlideshow();
}

function filterArt(category) {
  const gallery = document.getElementById('artwork-grid');
  gallery.innerHTML = '';

  artworkData.forEach(art => {
    if (category === 'all' || art.category === category) {
      const col = document.createElement('div');
      col.className = 'gallery-col';
      col.innerHTML = `
        <div class="card gallery-card h-100">
          <img src="${art.image}" class="card-img-top" alt="${art.title}">
          <div class="card-body">
            <h5 class="card-title">${art.title}</h5>
            <p class="card-text">
              ${art.year} • <span class="era-badge badge-${art.category}">${art.category.toUpperCase()}</span>
            </p>
            <p class="card-text text-muted">${art.description}</p>
          </div>
        </div>
      `;
      gallery.appendChild(col);
    }
  });
}

function initSlideshow() {
  const container = document.getElementById('slideshow-container');
  container.innerHTML = '';

  featuredArtwork.forEach(art => {
    const slide = document.createElement('li');
    slide.className = 'splide__slide';
    slide.innerHTML = `
      <div class="slide-content">
        <img src="${art.image}" alt="${art.title}">
        <div class="slide-caption">
          <h3>${art.title} • ${art.year}</h3>
          <p>${art.description}</p>
        </div>
      </div>
    `;
    container.appendChild(slide);
  });

  new Splide('#featured-slideshow', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 4000,
    pauseOnHover: true
  }).mount();
}

function setupEventListeners() {
  document.querySelectorAll('.gallery-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.gallery-link.active').classList.remove('active');
      e.target.classList.add('active');
      filterArt(e.target.dataset.filter);
    });
  });
}

document.addEventListener('DOMContentLoaded', initGallery);