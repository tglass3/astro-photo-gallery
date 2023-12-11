export type Photo = {
  // Photo ID (unique). It will also become the URL slug.
  id: number | string
  // Photo title
  title: string
  // Photo URL (can be absolute or relative to the public folder)
  url: string
  // Photo description
  description: string
  // External URL (View More Link)
  // extURL: string
}

export const photos: Photo[] = [
  {
    id: 1,
    title: 'QUIETBOOK',
    description:
      "A quietbook are meant to keep young children quietly entertained in public. The primary challenge I faced was to design pages that are age appropriate for ages 3-4 while ensuring the book is durable and silent. I created a Legend of Zelda themed book, and focused on storytelling activities. I was worried a physical toy would not be as entertaining as a digital one, but the feedback I received dispelled my worries. Even parents and children who were not familiar with the franchise greatly enjoyed my final product and I received both the parents' choice and childrens' choice awards after anonymous testing.",
    url: '/img/quietbook.png',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 2,
    title: 'CARDS ON THE TABLE',
    description:
      "Previously, I worked in a group of five to create a themed experience for the SFCC 2022 Grad Show. Our group chose a card theme, likening a hand of cards to a student's design work. We created a system of symbols for each suit that represented a different aspect of design and led our classmates in organizing the event, My role was to create the poster and mailer, as well as oversee the planning and setup of the in-person expereince. Our showcase was a huge success, with many industry rofessionals in attendance.",
    url: '/img/gradshow.jpg',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 3,
    title: 'HALFTONE',
    description:
    "Halftone Maker's Market was a personal project of mine during my time as Visual Communication Design Club President, which was very popular with student creators. The event uplifted studetn artists and designers by offering them a place to sell their work without costing them anything in entrance fees. We saw greate turnout for vendors, and had many artists asking when the next event would take place. Had our club not taken haiatus, this event would have been a biannual occurance.",
    url: '/img/halftone.png',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 4,
    title: 'VCDC LOGO REDESIGN',
    description:
    "Upon taking up the position of Club President for the Visual Communication Design Club, I decided to redesign the club logo to give it a more timeless and design-related appearance. I chose a rounded san-serif font to relay a friendly and approachable feeling, and took the indigo color from Adobe Illustrator's anchor point color. The logo was received well and still acts as the club logo today.",
    url: '/img/clublogo.png',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 5,
    title: 'EMERGE CDA BLOCK PARTY',
    description:
    "Emerge CDA is an art gallery dedicated to uplifting newly debuted artists. I took up the task of creating a poster to advertise their 9th annual block party, an event in which artists from the region of all ages and experience levels can sell their artwork. I chose a blue, yellow, green, and orange color palette to keep the design gender neutral, and chose a staticy CRTTV effect to evoke memories from the 90's, the year's theme. While the poster was not chose to be used, I was very proud of the end result and felt that it comminucated the event details quite well.",
    url: '/img/emerge.jpg',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 6,
    title: 'LVL UP BARCADE',
    description:
    "LVL UP Barcade is an arcade and bar concept I created to practice branding anf layout in a restaurant setting. The brand boasts neon blues and pinks to evoke a retro feel, and blocky, abstract lettering to push a futuristic vibe. The biggest challenge for me in this project was creating something unique that did not feel cliche or childish, but that would appeal to those who grew up in the 80's and 90's. I feel that I was successful in this after a round of redesigning a year after this project's creation.",
    url: '/img/lvlup.jpg',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 7,
    title: 'MYSTERY KIT',
    description:
      "This project was meant to be an escape room design challenge, however my group had no experience with  escapes and instead decided to create a portable mystery kit. My roles in the project were puzzle design and web design. I created a website to act as a passcode-protected system that would reveal one of two endings to the player. Animated with GSAP, the site initiated a countdown when aQR code was scanned, create a sense of urgency in our players. Unfortunately, we did not take into account players' expereince level with puzzles and the kit has yet to be completed by any player.",
    url: '/img/mysterykit.png',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 8,
    title: 'RIGHT-CLIK GAMING MAGAZINE',
    description:
      "This Right-Clik Gaming Magazine concept was created to practice layout and typography. I chose to highlight the upcoming Resident Evil 8 game, however my greatest challenge became finding fair use images of the game since it had yet to come out. I later entered this design into the 2021 American Advertising Awards and receieved a broze award for my efforts.",
    url: '/img/rightclik.jpg',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 9,
    title: 'PANTRY BUDDY',
    description:
      "Pantry Buddy is an AI assisted pantry tracker, meant to keep track of users' current pantry inventory and shopping list. I initially finished this app in spring of 2023, but decided the previous design looked too childish and did not have enough contrast. In the end, I chose this format and color palette to appeal to an older audience.",
    url: '/img/pantrybuddy.png',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 10,
    title: 'LEAGUE OF WOMEN VOTERS',
    description:
      "I had worked on a project for the League of Women Voters previously, so I was already familiar with their mission. My voter recruitment poster aimed to draw on a sense of humor rather than overloading the viewer with information. I chose a brighter color palette and fun illustration style to create the infamous 'duck mayor' poster, which was a huge hit on the EWU campus where it was displayed.",
    url: '/img/lwvposter.png',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 11,
    title: 'TEAM BLAZE LOGO REDESIGN',
    description:
      "Team Blaze is a local triathelon group that was in need of a logo redesign. This project was meant to focus on typography, so I took the opportunity to play with negative spaces. I attempted to reach out to Team Blaze to get their feedback but never heard a response. Regardless, this design won a bronze award in the 2021 American Advertising Awards.",
    url: '/img/teamblazemockup.jpg',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 12,
    title: 'STARDUST PACKAGE DESIGN',
    description:
      "A practice in product design, Stardust is an energy drink concept design meant to appeal to a feminine crowd with its edible glitter and pastel colors. My main focus was to create an interesting brand for the concept, and to work on an overtly feminine design which I hadn't done in my portfolio before. In the end, I was proud of this design but I am considering a redesign in the future.",
    url: '/img/stardust.jpg',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 13,
    title: 'LIMBO CONCERT POSTER',
    description:
      "Limbo is a solo musician I discovered randomly, and was inspired by her soft sound and DIY marketing. I decided to redesign one of her most recent concert posters to practice layout with a high volume of content. I chose a navy hue for the poster to make the content pop, rather than keeping everything pastel. I enjoyed this design a lot, and may consider doing a series of similar posters in the future.",
    url: '/img/limbo.jpg',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 14,
    title: 'CAFFIEND PRODUCT DESIGN',
    description:
      "This project was a challenge in interactive design, which acted as an intro to UX design. The  goal was to create a design the user would interact with, and my solution was to create stackable coffee tins that could be mixed and matched to create different character designs. This design choice played on my illustrative strengths and was a lot of fun to construct.",
    url: '/img/caffiend.jpg',
    // extURL: 'https://www.ewu.edu/'
  },
  {
    id: 15,
    title: 'REI Text Illustration',
    description:
      "Another challenge in typography, this challenge taught me how to illustrate with text. I was assigned the REI company to design for, and worked towards illustrating a rock climber using the phrase 'keep going'. I chose to use a sans-serif font to keep the design clean, and kept the design in greyscale to boost legibility.",
    url: '/img/reiposter.jpg',
    // extURL: 'https://www.ewu.edu/'
  },
]
