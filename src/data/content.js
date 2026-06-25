export const reviews = [
  {
    name: 'Mark',
    text: 'Incredible, authentic, from scratch Italian food rivaling the best you can get in Italy. The weekly menu adds depth and hearing about the dishes is a neat experience.',
    highlight: 'Italy in Warsaw',
  },
  {
    name: 'Magdalena',
    text: 'Obłędne jedzenie, zwłaszcza carbonara. Czuć wysokiej jakości składniki, a ceny niewygórowane. Super karta win, atmosfera przyjemna.',
    highlight: 'Carbonara',
  },
  {
    name: 'Karol',
    text: 'Niesamowity klimat czuć już od wejścia. Daniele sam dba o ten klimat w każdym aspekcie: nakrycie, sugestie przy wyborze i szczegółowy opis dań.',
    highlight: 'Atmosfera',
  },
  {
    name: 'Pawel',
    text: 'Fantastyczne miejsce! Co tydzień nowe menu, wszystkie produkty najwyższej jakości, kompozycje dań niczym z restauracji Michelin.',
    highlight: 'Menu tygodniowe',
  },
  {
    name: 'Patrycja',
    text: 'WOW and WOW again! Italian cuisine at its finest — even better than in some restaurants in Italy. The quality of the ingredients, the flavor, the presentation... everything is just perfect.',
    highlight: 'Perfekcja',
  },
  {
    name: 'Daniela',
    text: "It's the best carbonara we've ever tried! Well balanced, cooked by original recipe — no cream, no onion. The bacon is smoky, pasta is very rich in taste.",
    highlight: 'Carbonara',
  },
  {
    name: 'Maria',
    text: 'Najlepsza pasta, aperitivo i wino w Warszawie – bez dwóch zdań. Wszystko jest tu dopracowane, świeże i po prostu pyszne.',
    highlight: 'Pasta & wino',
  },
  {
    name: 'Aino',
    text: 'Najlepsze risotto jakie do tej pory jadłam! Miejsce bezpretensjonalne i autentyczne, w którym smak, a nie wygląd odgrywa główną rolę.',
    highlight: 'Risotto',
  },
];

export const signatures = [
  {
    name: 'Carbonara',
    italian: 'alla Romana',
    description:
      'Kultowa carbonara z chrupiącym guanciale, jajkiem i pecorino — bez śmietany, bez cebuli. Według wielu: najlepsza w Warszawie.',
    price: 'od 50 zł',
    tag: 'Stały faworyt',
  },
  {
    name: 'Ravioli',
    italian: 'fatti a mano',
    description:
      'Ręcznie lepione pierożki z sezonowymi nadzieniami — ricotta, dynia, cytryna. Delikatne ciasto al dente, aromatyczne i niezapomniane.',
    price: 'od 68 zł',
    tag: 'Sezonowe',
  },
  {
    name: 'Risotto',
    italian: 'cremoso',
    description:
      'Kremowe, perfekcyjnie wyważone risotto przygotowywane z najwyższej jakości ryżu i bulionu — zmieniane wraz z menu tygodniowym.',
    price: 'sezonowo',
    tag: 'Chef\'s choice',
  },
  {
    name: 'Bruschetta',
    italian: 'semplice',
    description:
      'Najprostsza i najsmaczniejsza — świeże pomidory, oliwa, bazylia na chrupiącym pieczywie. Idealny początek wieczoru.',
    price: 'od 21 zł',
    tag: 'Antipasto',
  },
  {
    name: 'Cannolo',
    italian: 'siciliano',
    description:
      'Kruche rurki wypełnione słodką ricottą — deser, który goście wspominają najczęściej. Obok tiramisu i panna cotty.',
    price: 'deser',
    tag: 'Dolce',
  },
];

export const weeklyMenu = {
  week: 'Tydzień 25 · Czerwiec 2026',
  note: 'Menu aktualizujemy co środę. Daniele osobiście opowiada o każdym daniu.',
  courses: [
    {
      category: 'Antipasti',
      items: [
        { name: 'Bruschetta al pomodoro', detail: 'pomidory, bazylia, oliwa extra vergine' },
        { name: 'Minestrone della settimana', detail: 'warzywa sezonowe, parmezan' },
      ],
    },
    {
      category: 'Pasta',
      items: [
        { name: 'Spaghetti alla Carbonara', detail: 'guanciale, pecorino, uovo' },
        { name: 'Ravioli di ricotta e limone', detail: 'masło szałwiowe, parmezan' },
        { name: 'Linguine allo scoglio', detail: 'owoce morza, pomodorini, białe wino' },
      ],
    },
    {
      category: 'Secondi & Dolci',
      items: [
        { name: 'Flaki alla romana', detail: 'tradycyjna receptura szefa' },
        { name: 'Tiramisù', detail: 'mascarpone, espresso, kakao' },
        { name: 'Cannolo siciliano', detail: 'ricotta, skórka pomarańczowa' },
      ],
    },
  ],
};

export const hours = [
  { day: 'Poniedziałek', time: 'Zamknięte' },
  { day: 'Wtorek – Niedziela', time: '12:00 – 22:00' },
];

export const contact = {
  address: 'Topiel 12',
  city: '00-342 Warszawa',
  district: 'Powiśle',
  phone: '+48 519 858 740',
  phoneLink: 'tel:+48519858740',
  maps: 'https://maps.google.com/?q=Topiel+12,+Warszawa',
};
