import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Sun,
  Users,
  Footprints,
  MapPin,
  Mountain,
  Lightbulb,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { RelatedGuides } from '../../components/article/ArticleParts';
import SEO from '../../components/SEO';

const SLUG = '3-days-in-krakow-itinerary';
const PAGE_URL = `https://www.greencontinenttours.com/travel-guide/${SLUG}`;
const TITLE = '3 Days in Kraków: The Perfect Itinerary, Must-See Attractions & Local Tips';
const DESCRIPTION =
  'Plan 3 perfect days in Kraków: Old Town, Wawel Castle, Kazimierz, Podgórze and Wieliczka — a day-by-day itinerary with food picks and local tips.';
const WHATSAPP_URL = `https://wa.me/48537482798?text=${encodeURIComponent(
  'Hello, I would like to plan a 3-day trip to Kraków with a private guide.'
)}`;
export const HERO_IMAGE = `/images/articles/${SLUG}/krakow-old-town-3-day-itinerary.webp`;

const overviewItems = [
  { label: 'Duration', value: '3 Days', icon: CalendarDays },
  { label: 'Best Season', value: 'Spring & Early Autumn', icon: Sun },
  { label: 'Ideal For', value: 'First-Time Visitors', icon: Users },
  { label: 'Getting Around', value: 'On Foot & Tram', icon: Footprints },
  { label: 'Start Point', value: 'Main Market Square', icon: MapPin },
  { label: 'Day Trip', value: 'Wieliczka Salt Mine', icon: Mountain },
];

const days = [
  {
    id: 'day-1',
    label: 'Day 1',
    title: 'Kraków Old Town & the Royal Route',
    intro:
      'Your first day is all about the historic heart of Kraków. Start in the medieval streets of the Old Town, continue to magnificent Wawel Hill, and finish with a relaxing walk along the Vistula River.',
    stops: [
      {
        title: 'Start at the Main Market Square (Rynek Główny)',
        paras: [
          'Begin your morning at Rynek Główny, Kraków’s Main Market Square — the heart of the Old Town and one of the most recognisable places in Poland. Surrounded by historic townhouses, cafés and impressive churches, it is the perfect starting point for exploring the city.',
          'Take your time walking around the square and admire its most important landmarks:',
        ],
        terms: [
          ['St. Mary’s Basilica', 'a magnificent Gothic church famous for its interior and the wooden altarpiece by Veit Stoss.'],
          ['The Cloth Hall (Sukiennice)', 'a historic trading hall in the centre of the square, now home to souvenir stalls and galleries.'],
          ['Town Hall Tower', 'the surviving part of Kraków’s former medieval town hall.'],
          ['Adam Mickiewicz Monument', 'a favourite meeting point dedicated to one of Poland’s greatest poets.'],
        ],
        after: [
          'One of Kraków’s most memorable traditions is the hourly trumpet call, the Hejnał Mariacki, played from the tower of St. Mary’s Basilica. The melody suddenly stops before it finishes — according to legend, in memory of a medieval trumpeter struck by an arrow while warning the city of an enemy attack.',
        ],
        tip: 'Visit the Main Market Square early in the morning. The atmosphere is calmer, the light is beautiful for photography, and you can enjoy the architecture before the busiest sightseeing hours.',
      },
      {
        title: 'Walk Floriańska Street and the Royal Route',
        paras: [
          'From the square, continue along Floriańska Street. This historic street forms part of the Royal Route, the ceremonial path once taken by Polish kings as they processed through Kraków. Look out for the historic façades, charming cafés and small shops along the way.',
          'At the end of the street stands St. Florian’s Gate, one of the most important surviving parts of the medieval city walls. Just beyond it is the Barbican, a round defensive bastion that once guarded the northern entrance to the city.',
          'From here, stroll through Planty Park, the green belt that encircles the Old Town — a lovely spot for a short break before you continue.',
        ],
      },
      {
        title: 'Visit Wawel Royal Castle and Cathedral',
        paras: [
          'No visit to Kraków is complete without Wawel Hill. For centuries it was the centre of Polish royal power: the castle was the residence of Polish kings, while Wawel Cathedral witnessed coronations, royal funerals and great national ceremonies. Today it is one of Poland’s most important historic sites.',
          'During your visit, explore:',
        ],
        terms: [
          ['Wawel Royal Castle', 'the former royal residence, with beautiful architecture and historical exhibitions.'],
          ['The Arcaded Courtyard', 'one of the most impressive Renaissance spaces in Kraków.'],
          ['Wawel Cathedral', 'where many Polish kings were crowned and laid to rest.'],
          ['The Sigismund Bell', 'the famous historic bell hanging in the cathedral tower.'],
        ],
        after: [
          'Even if you don’t enter every exhibition, walking around Wawel Hill and admiring the castle is an unforgettable experience. If you love history, book the castle exhibitions in advance — they can have separate tickets and timed entry.',
        ],
      },
      {
        title: 'The Vistula River and the Wawel Dragon',
        paras: [
          'After Wawel, walk down to the Vistula River. The boulevards here offer some of the best views of the castle — perfect for a slow riverside walk or a coffee with a view.',
          'Don’t miss the Wawel Dragon statue by the river. According to Kraków’s most famous legend, a dragon once lived in a cave beneath Wawel Hill and terrorised the townspeople until a clever shoemaker defeated it. The statue occasionally breathes real fire, which makes it a favourite with families and children.',
        ],
      },
      {
        title: 'Finish with Traditional Polish Food',
        paras: ['After a full day of sightseeing, sit down to a traditional Polish dinner. Look for classic dishes such as:'],
        terms: [
          ['Pierogi', 'Polish dumplings filled with potato and cheese, meat, cabbage or mushrooms.'],
          ['Żurek', 'a traditional sour rye soup, often served with sausage and egg.'],
          ['Bigos', 'a hearty hunter’s stew of cabbage, sauerkraut and meat.'],
          ['Kotlet schabowy', 'a breaded pork cutlet, traditionally served with potatoes and cabbage.'],
        ],
        after: [
          'For an authentic experience, try a bar mleczny — a traditional Polish milk bar serving simple home-style dishes, and a real part of the country’s culinary heritage. End the evening soaking up the Old Town atmosphere or with a peaceful walk through Planty Park.',
        ],
      },
    ],
  },
  {
    id: 'day-2',
    label: 'Day 2',
    title: 'Kazimierz, Jewish Heritage & Podgórze',
    intro:
      'Day two is dedicated to Kazimierz, Kraków’s historic Jewish district — a neighbourhood that blends centuries of history and religious heritage with independent cafés, restaurants and an artistic spirit. Then cross the river to Podgórze to discover sites connected to Kraków’s history during World War II.',
    stops: [
      {
        title: 'Discover the Historic Jewish District of Kazimierz',
        paras: [
          'Kazimierz was once a separate town before becoming part of Kraków, and over the centuries it grew into an important centre of Jewish life and culture. Today it is one of the city’s most rewarding places to explore — narrow streets, historic synagogues, old townhouses, small galleries and cafés.',
          'Places not to miss:',
        ],
        terms: [
          ['Szeroka Street', 'a historic street surrounded by important Jewish heritage sites.'],
          ['The Old Synagogue', 'one of the most significant historic Jewish buildings in Kraków, now a museum.'],
          ['Remuh Synagogue and Cemetery', 'a historic place of worship with a remarkable old Jewish cemetery.'],
          ['Plac Nowy', 'a lively square famous for its food stalls, local atmosphere and zapiekanki.'],
        ],
        after: [
          'Kazimierz is best explored slowly. Rather than rushing between sights, give yourself time to wander and discover the character of the neighbourhood.',
        ],
      },
      {
        title: 'Try a Traditional Kraków Zapiekanka',
        paras: [
          'One local food you have to try is zapiekanka — an open-faced baguette topped with mushrooms, cheese and other toppings, baked until crispy. Plac Nowy in Kazimierz is the best-known place to try it. Simple, delicious and perfect for a casual lunch while you explore.',
        ],
      },
      {
        title: 'Visit Podgórze and Ghetto Heroes Square',
        paras: [
          'Cross the Father Bernatek Footbridge to Podgórze. The bridge links the two historic districts and is known for its suspended sculptures of acrobats.',
          'Podgórze holds an important place in Kraków’s World War II history. During the German occupation, the Kraków Ghetto was established here in 1941, and thousands of Jewish residents were forced into it before deportation and mass murder.',
          'At Ghetto Heroes Square (Plac Bohaterów Getta), a memorial of empty chairs represents the absence of the people deported from the ghetto. Nearby, the Eagle Pharmacy (Apteka pod Orłem), which played an important role during the occupation, is now a museum.',
          'This part of the day is a meaningful opportunity to understand Kraków’s difficult history and the experiences of its Jewish community during the war.',
        ],
      },
      {
        title: 'Oskar Schindler’s Enamel Factory',
        paras: [
          'If you are interested in World War II history, visit Oskar Schindler’s Enamel Factory. The museum tells the story of Kraków under German occupation through the experiences of its residents, and is closely linked to Oskar Schindler, who saved more than a thousand Jewish people by employing them in his factories. It adds depth to everything you have seen in Kazimierz and Podgórze.',
        ],
        tip: 'This is a popular museum, so book in advance — and allow enough time for the exhibition rather than rushing through it.',
      },
      {
        title: 'Spend the Evening in Kazimierz',
        paras: [
          'Return to Kazimierz for the evening. Enjoy a traditional Polish dinner, try Jewish-inspired cuisine, or simply sit in a café and watch the neighbourhood come alive. After dark, the historic streets and courtyards have a completely different atmosphere from the busy Old Town.',
        ],
      },
    ],
  },
  {
    id: 'day-3',
    label: 'Day 3',
    title: 'Wieliczka Salt Mine or More of Kraków',
    intro:
      'For your third day, choose the experience that suits you best: one of Poland’s most famous attractions just outside the city, or another day discovering Kraków’s local character.',
    stops: [
      {
        title: 'Option A: Visit the Wieliczka Salt Mine',
        paras: [
          'The Wieliczka Salt Mine is one of the most famous attractions near Kraków. Located about 15 kilometres southeast of the city, the historic mine produced salt for centuries. The underground tourist route leads you through impressive chambers, salt sculptures, underground lakes and remarkable mining structures.',
          'Its most famous highlight is St. Kinga’s Chapel, an extraordinary underground chapel carved entirely from salt. Allow several hours including transport from Kraków — it is an excellent choice for anyone who loves history, architecture and unusual places.',
        ],
        tip: 'Book your visit in advance and wear comfortable shoes — the tourist route includes many stairs and a fair amount of walking.',
      },
      {
        title: 'Option B: Discover More of Kraków',
        paras: ['Prefer to stay in the city? Use your third day for some of Kraków’s less-visited gems:'],
        terms: [
          ['Collegium Maius', 'the historic home of the Jagiellonian University, one of the oldest universities in Europe, with a beautiful Gothic courtyard.'],
          ['Kościuszko Mound', 'one of the best panoramic views of Kraków, built in honour of Tadeusz Kościuszko, a national hero of Poland and the United States.'],
          ['Nowa Huta', 'a model socialist city built after World War II, with monumental architecture and wide avenues that contrast sharply with the medieval Old Town.'],
        ],
      },
    ],
  },
];

const seasons = [
  ['Spring', 'pleasant weather, blooming parks and fewer crowds than peak summer.'],
  ['Summer', 'long days, outdoor cafés, festivals and a lively atmosphere.'],
  ['Autumn', 'golden colours in Planty Park and relaxed sightseeing.'],
  ['Winter', 'Christmas markets, festive lights and a charming historic atmosphere.'],
];

const faqs = [
  ['Is Kraków worth visiting?', 'Absolutely. Kraków is one of Poland’s most beautiful historic cities, with impressive architecture, rich history, traditional cuisine and a welcoming atmosphere.'],
  ['How many days should I spend in Kraków?', 'Three days is ideal for a first visit — enough for the Old Town, Wawel Castle, Kazimierz and Podgórze. If you want to visit Auschwitz-Birkenau or the Wieliczka Salt Mine as well, add an extra day.'],
  ['Is Kraków expensive?', 'Compared with many major Western European cities, Kraków is good value. Accommodation, restaurants, public transport and sightseeing costs vary with the season and your travel style.'],
  ['Can I explore Kraków on foot?', 'Yes. The historic centre is compact and most major attractions are within walking distance. Trams and buses are useful for places outside the centre.'],
  ['Is Kraków suitable for families with children?', 'Yes. The Main Market Square, the Wawel Dragon, parks, museums and the Wieliczka Salt Mine are all family-friendly. Plan a comfortable pace with time for breaks.'],
  ['What is the best day trip from Kraków?', 'The Wieliczka Salt Mine is one of the most popular day trips. Auschwitz-Birkenau is another important destination for travellers interested in history and remembrance. Both require advance planning.'],
];

const tocItems = [
  { id: 'is-3-days-enough', title: 'Is 3 days enough?' },
  ...days.map((d) => ({ id: d.id, title: `${d.label}: ${d.title}` })),
  { id: 'practical-tips', title: 'Practical tips' },
  { id: 'where-to-stay', title: 'Where to stay' },
  { id: 'private-tour', title: 'Private Kraków tours' },
  { id: 'faq', title: 'FAQ' },
];

const h2 = 'text-2xl md:text-3xl font-bold text-[#0f4f47] tracking-tight mb-6 scroll-mt-28';
const h3 = 'text-xl md:text-[22px] font-bold text-[#0f4f47] tracking-tight leading-snug mb-3';
const body = 'space-y-4 text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light';

const Dot = () => <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#4dd4ac] shrink-0" aria-hidden="true" />;

const TermList = ({ items }) => (
  <ul className="space-y-3 my-5">
    {items.map(([term, desc]) => (
      <li key={term} className="flex items-start gap-3 text-[15px] text-gray-600 font-light leading-relaxed">
        <Dot />
        <span><strong className="font-semibold text-[#0f4f47]">{term}</strong> — {desc}</span>
      </li>
    ))}
  </ul>
);

const LocalTip = ({ children }) => (
  <aside className="my-6 flex gap-4 bg-[#4dd4ac]/10 border-l-[3px] border-[#4dd4ac] rounded-r-2xl px-5 py-4">
    <Lightbulb className="w-5 h-5 text-[#0f4f47] shrink-0 mt-0.5" strokeWidth={1.8} aria-hidden="true" />
    <p className="text-[14.5px] text-[#0f4f47] leading-relaxed">
      <span className="font-bold">Local tip: </span>{children}
    </p>
  </aside>
);

const Stop = ({ stop, index }) => (
  <div className="relative pl-7">
    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#4dd4ac] ring-4 ring-white shadow-sm" aria-hidden="true" />
    <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-1.5">Stop {index + 1}</p>
    <h3 className={h3}>{stop.title}</h3>
    <div className={body}>{stop.paras.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}</div>
    {stop.terms && <TermList items={stop.terms} />}
    {stop.after && <div className={body}>{stop.after.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}</div>}
    {stop.tip && <LocalTip>{stop.tip}</LocalTip>}
  </div>
);

const DaySection = ({ day }) => (
  <section id={day.id} className="mt-16 lg:mt-20 scroll-mt-28" data-testid={`itinerary-${day.id}`}>
    <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-2">{day.label}</p>
    <h2 className={h2}>{day.label}: {day.title}</h2>
    <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light mb-10">{day.intro}</p>
    <ol className="relative border-l-2 border-[#4dd4ac]/30 ml-3 space-y-12">
      {day.stops.map((s, i) => <li key={s.title}><Stop stop={s} index={i} /></li>)}
    </ol>
  </section>
);

const Hero = () => (
  <header className="relative overflow-hidden" data-testid="article-hero" aria-labelledby="article-heading">
    <div className="relative min-h-[520px] md:min-h-[580px] lg:min-h-[640px] w-full flex items-end">
      <img
        src={HERO_IMAGE}
        alt="Historic Kraków Old Town building seen through a medieval brick window in the city walls — 3 days in Kraków itinerary by Green Continent Tours"
        title="Kraków Old Town — 3-Day Itinerary"
        width="1333"
        height="833"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 28%' }}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a3a35]/55 via-[#0a3a35]/35 to-[#0a3a35]/85" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a3a35]/55 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative z-10 w-full pt-32 pb-20 md:pb-24 lg:pb-28">
        <div className="container mx-auto px-5 md:px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-white">
            <Link to="/travel-guide" className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-white/85 hover:text-[#4dd4ac] transition-colors" data-testid="back-to-travel-guide">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Travel Guide
            </Link>
            <div className="mt-7 md:mt-8">
              <span className="inline-block bg-[#0f4f47] text-[#4dd4ac] text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">Krakow</span>
            </div>
            <h1 id="article-heading" className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold tracking-tight leading-[1.08] mb-4 mt-5 drop-shadow-lg">
              3 Days in Kraków: The Perfect Itinerary, Must-See Attractions &amp; Local Tips
            </h1>
            <p className="text-base md:text-lg text-gray-100/95 font-light max-w-2xl leading-relaxed mb-6 drop-shadow">
              A day-by-day plan through the Old Town, Wawel, Kazimierz and Podgórze — with food, tickets and insider advice.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 md:gap-x-10 gap-y-2.5 text-[12.5px] text-white/80">
              <span className="inline-flex items-center gap-2"><Calendar className="w-3.5 h-3.5" aria-hidden="true" /><time dateTime="2026-06-20">June 20, 2026</time></span>
              <span className="inline-flex items-center gap-2"><Clock className="w-3.5 h-3.5" aria-hidden="true" />13 min read</span>
              <span className="inline-flex items-center gap-2"><User className="w-3.5 h-3.5" aria-hidden="true" />Green Continent Tours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Overview = () => (
  <section className="relative bg-white -mt-12 md:-mt-16 lg:-mt-20 z-10" aria-label="Trip overview" data-testid="overview-bar">
    <div className="container mx-auto px-5 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-[0_30px_60px_-25px_rgba(15,79,71,0.25)] p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
          {overviewItems.map(({ label, value, icon: Icon }) => (
            <div key={label} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#4dd4ac]/10 mb-2 md:mb-3">
                <Icon className="w-4 h-4 text-[#0f4f47]" strokeWidth={1.7} aria-hidden="true" />
              </div>
              <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-0.5">{label}</p>
              <p className="text-sm md:text-[15px] font-bold text-[#0f4f47] leading-tight">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Intro = () => (
  <>
    <div className={body}>
      <p className="text-lg md:text-xl text-[#0f4f47] font-light leading-relaxed">
        Planning to spend three days in Kraków? You’re in for a wonderful experience. Poland’s former royal capital is a city where medieval streets, royal castles, Jewish heritage, traditional Polish food and a vibrant café culture come together.
      </p>
      <p>
        Three days is enough to discover Kraków’s most important attractions, explore its historic neighbourhoods and enjoy the local cuisine. The key is to plan wisely: instead of rushing between sights, this itinerary groups places by location so you can explore comfortably on foot — whether it’s your first visit, a romantic city break or a family holiday.
      </p>
    </div>
    <div className="mt-8 bg-[#f4f7f6] rounded-2xl p-6 md:p-7">
      <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-3">In this guide you’ll discover</p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
        {['The best things to do in Kraków in 3 days', 'A day-by-day sightseeing itinerary', 'Must-see attractions and local spots', 'Where to eat traditional Polish food', 'Transport, ticket and sightseeing tips', 'How to make your trip more memorable'].map((t) => (
          <li key={t} className="flex items-start gap-3 text-[15px] text-gray-600 font-light leading-relaxed"><Dot /><span>{t}</span></li>
        ))}
      </ul>
    </div>
    <section id="is-3-days-enough" className="mt-14 lg:mt-16 scroll-mt-28">
      <h2 className={h2}>Is 3 Days Enough to Visit Kraków?</h2>
      <div className={body}>
        <p>Yes — three days is an excellent amount of time for a first visit. The historic centre is compact and most of the main attractions are within walking distance, so you can explore the Old Town, Wawel Castle and the Jewish district of Kazimierz, and still enjoy the city’s restaurants and cafés without spending your holiday in transit.</p>
        <p>Kraków also has famous excursions beyond the centre. If you want to visit the <strong className="font-semibold text-[#0f4f47]">Wieliczka Salt Mine</strong> or the <strong className="font-semibold text-[#0f4f47]">Auschwitz-Birkenau Memorial and Museum</strong>, plan an extra day or swap part of the city itinerary for a day trip. This guide focuses on Kraków itself — with a fourth day, add one of these excursions.</p>
      </div>
    </section>
  </>
);

const PracticalTips = () => (
  <section id="practical-tips" className="mt-16 lg:mt-20 scroll-mt-28">
    <h2 className={h2}>Practical Tips for Visiting Kraków</h2>
    <h3 className={h3}>When is the best time to visit?</h3>
    <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light">Kraków is a year-round destination, and each season has its own charm:</p>
    <TermList items={seasons} />
    <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light mb-10">For a comfortable city break, spring and early autumn are excellent choices.</p>
    <div className="space-y-10">
      <div>
        <h3 className={h3}>How to get around Kraków</h3>
        <div className={body}>
          <p>The historic centre is very walkable, and most stops in this itinerary are easy to reach on foot. For longer distances, Kraków has an extensive tram and bus network — useful for Nowa Huta, Kościuszko Mound and the Wieliczka area.</p>
          <p>Travelling with children, older family members or a group? <Link to="/services" className="text-[#0f4f47] font-semibold underline decoration-[#4dd4ac] underline-offset-4">Private transport</Link> makes the experience much more comfortable.</p>
        </div>
      </div>
      <div>
        <h3 className={h3}>Should you book attractions in advance?</h3>
        <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light">Yes, especially in summer and around public holidays. Some attractions have timed entry or limited tickets, so check the official websites and book popular museums and exhibitions ahead of time.</p>
      </div>
      <div>
        <h3 className={h3}>What should you wear?</h3>
        <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light">Comfortable walking shoes are essential — the historic streets are often cobbled and a sightseeing day can mean several kilometres on foot. Bring a light rain jacket and dress in layers, especially in spring and autumn, and dress respectfully when visiting churches and religious sites.</p>
      </div>
    </div>
  </section>
);

const WhereToStay = () => (
  <section id="where-to-stay" className="mt-16 lg:mt-20 scroll-mt-28">
    <h2 className={h2}>Where to Stay in Kraków</h2>
    <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light">For a first visit, two areas stand out:</p>
    <TermList items={[
      ['Old Town', 'best if you want to stay close to the main attractions, historic streets, restaurants and cafés.'],
      ['Kazimierz', 'best for a more relaxed atmosphere, independent restaurants, cultural venues and historic surroundings.'],
    ]} />
    <p className="text-[15.5px] md:text-base text-gray-600 leading-[1.85] font-light">Both offer easy access to everything in this itinerary, making them ideal bases for a three-day city break.</p>
  </section>
);

const PrivateTour = () => (
  <section id="private-tour" className="mt-16 lg:mt-20 scroll-mt-28">
    <h2 className={h2}>Is a Private Kraków Tour Worth It?</h2>
    <div className={body}>
      <p>On a first visit, a private city tour is one of the best ways to discover Kraków. Instead of simply walking between landmarks, you hear the history, legends, architecture and local traditions that make the city unique — at your own pace, with time for questions and a focus on what interests you most.</p>
      <p>At Green Continent Tours we organise private Kraków tours and tailor-made excursions for international visitors — from the Old Town and Kazimierz to the Wieliczka Salt Mine.</p>
    </div>
    <Link to="/services" data-testid="article-tours-link" className="mt-6 inline-flex items-center gap-2 bg-[#0f4f47] hover:bg-[#1a6b5f] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors">
      Discover our private Kraków tours <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  </section>
);

const Faq = () => (
  <section id="faq" className="mt-16 lg:mt-20 scroll-mt-28" data-testid="article-faq">
    <h2 className={h2}>Frequently Asked Questions About Visiting Kraków</h2>
    <div className="divide-y divide-gray-100 border-y border-gray-100">
      {faqs.map(([q, a]) => (
        <div key={q} className="py-6">
          <h3 className="text-lg font-bold text-[#0f4f47] tracking-tight mb-2">{q}</h3>
          <p className="text-[15px] text-gray-600 leading-[1.8] font-light">{a}</p>
        </div>
      ))}
    </div>
  </section>
);

const FinalThoughts = () => (
  <section className="mt-16 lg:mt-20">
    <h2 className={h2}>Final Thoughts</h2>
    <div className={body}>
      <p>Kraków rewards visitors who take their time. In three days you can experience the medieval Old Town, follow the story of Polish kings at Wawel, explore the fascinating streets of Kazimierz and learn about the city’s difficult past in Podgórze — while enjoying traditional Polish food, historic cafés and the local atmosphere that makes Kraków so special.</p>
      <p>Whether it’s a short city break or the start of a longer journey through Poland, Kraków deserves a place on your travel list. Ready to discover it? Explore the city with Green Continent Tours on a private experience tailored to your interests, schedule and travel style.</p>
    </div>
    <div className="mt-14 pt-8 border-t border-gray-100">
      <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-3">Continue Reading</p>
      <ul className="space-y-2 text-[15px]">
        {[
          ['/travel-guide/hidden-gems', 'Hidden gems in Poland tourists miss'],
          ['/travel-guide/avoid-mistakes', 'Tourist mistakes & scams to avoid in Poland'],
          ['/travel-guide/halal-tourism', 'The best halal food in Krakow'],
          ['/contact', 'Contact our Krakow team'],
        ].map(([to, label]) => (
          <li key={to}>
            <Link to={to} className="text-[#0f4f47] hover:text-[#1a6b5f] font-semibold inline-flex items-center gap-1.5">
              {label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Toc = () => (
  <aside className="hidden lg:block self-start sticky top-28" aria-label="Table of contents" data-testid="article-toc">
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(15,79,71,0.08)]">
      <p className="text-[10.5px] font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">In This Guide</p>
      <nav>
        <ul className="space-y-3 text-[13px] text-gray-500 font-light">
          {tocItems.map((t) => (
            <li key={t.id}><a href={`#${t.id}`} className="hover:text-[#0f4f47] hover:font-semibold transition-colors">{t.title}</a></li>
          ))}
        </ul>
      </nav>
    </div>
  </aside>
);

const WhatsAppCta = () => (
  <section className="bg-white pt-2 pb-14 lg:pb-16" aria-label="WhatsApp inquiry" data-testid="article-cta">
    <div className="container mx-auto px-5 md:px-6 lg:px-8">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="article-whatsapp-cta"
        className="group flex items-center justify-between gap-4 max-w-3xl mx-auto bg-gradient-to-r from-[#0f4f47] to-[#1a6b5f] hover:from-[#1a6b5f] hover:to-[#0f4f47] text-white pl-5 pr-5 py-4 md:pl-6 md:pr-7 md:py-5 rounded-2xl shadow-[0_15px_40px_-15px_rgba(15,79,71,0.4)] transition-all duration-300 hover:-translate-y-0.5">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#4dd4ac] mb-0.5">Plan Your Trip</p>
          <p className="text-[14px] md:text-[15px] font-semibold leading-snug">Chat with our Krakow team on WhatsApp</p>
        </div>
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#4dd4ac] shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </a>
    </div>
  </section>
);

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    image: `https://www.greencontinenttours.com${HERO_IMAGE}`,
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
    mainEntityOfPage: PAGE_URL,
    author: { '@type': 'Organization', name: 'Green Continent Tours' },
    publisher: {
      '@type': 'Organization',
      name: 'Green Continent Tours',
      logo: { '@type': 'ImageObject', url: 'https://www.greencontinenttours.com/GCT-asset/logo-512.png' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  },
];

const ThreeDaysInKrakow = () => (
  <div className="min-h-screen bg-white">
    <SEO
      path={`/travel-guide/${SLUG}`}
      title="3 Days in Kraków: Perfect Itinerary & Local Tips"
      description={DESCRIPTION}
      image={`https://www.greencontinenttours.com${HERO_IMAGE}`}
    />
    <Header />
    <main>
      <article>
        <Hero />
        <Overview />
        <section className="bg-white py-16 lg:py-20" aria-label="Article content">
          <div className="container mx-auto px-5 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_240px] gap-10 lg:gap-16 max-w-6xl mx-auto">
              <div className="max-w-3xl min-w-0">
                <Intro />
                {days.map((d) => <DaySection key={d.id} day={d} />)}
                <PracticalTips />
                <WhereToStay />
                <PrivateTour />
                <Faq />
                <FinalThoughts />
              </div>
              <Toc />
            </div>
          </div>
        </section>
      </article>
      <WhatsAppCta />
    </main>
    <RelatedGuides />
    <Footer />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </div>
);

export default ThreeDaysInKrakow;
