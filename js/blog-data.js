/* ============================================================
   Blog Article Data — one details page, every article.
   Cards link to blog-details.html?id=<slug>; blog-details.html
   renders the matching article from this registry.
   ============================================================ */
const BLOG_POSTS = {
    japanese: {
        category: 'Cultural Insights', pre: 'The Silent Language of ', em: 'Japanese Business', post: ' Meetings.',
        date: 'August 12, 2026', read: '8 min read',
        author: 'Dr. Julian Reed', role: 'Lead APAC Consultant',
        bio: 'Linguist and cultural consultant specializing in East Asian corporate communications.',
        avatar: '../images/team_leader.png', img: '../images/blog-japanese.jpg',
        tags: ['#Japan', '#BusinessEtiquette', '#Corporate'],
        blocks: [
            { t: 'dropcap', x: 'Mastering the bow is just the beginning. Discover the unwritten rules of corporate negotiation in Tokyo, from seating arrangements to the subtle art of reading the air.' },
            { t: 'p', x: 'In western business cultures, directness is often celebrated. We are taught to cut to the chase and put our cards on the table. However, when conducting business in Japan, such an approach can be perceived as aggressive and lacking in refinement. The true art of Japanese business negotiation lies not in what is said, but in what is left unsaid.' },
            { t: 'h3', x: 'Reading the Air (Kuuki wo Yomu)' },
            { t: 'p', x: 'One of the most critical concepts for foreign executives to grasp is <em>Kuuki wo Yomu</em>, which literally translates to "reading the air." It refers to the ability to sense the mood, understand unspoken sentiments, and act accordingly without needing explicit instructions.' },
            { t: 'quote', x: 'In a Tokyo boardroom, silence is rarely empty. It is often filled with profound contemplation, respect, or a polite disagreement that words would only brutalize.' },
            { t: 'p', x: 'When a proposal is met with a sharp intake of breath through the teeth and a slight tilt of the head, it rarely means agreement. It is a polite, non-confrontational way of expressing difficulty or disagreement.' },
            { t: 'h3', x: 'The Seating Protocol (Sekiji)' },
            { t: 'p', x: 'Where you sit in a meeting room is not a matter of choice; it is deeply rooted in hierarchical respect. The seat furthest from the door, known as the <em>Kamiza</em> (seat of honor), is reserved for the most senior person or the guest of honor. The seat closest to the door, the <em>Shimoza</em>, is for the most junior person.' },
            { t: 'takeaways', items: ['Never rush silences during a negotiation.', 'Always wait to be seated; do not assume your place.', 'Pay close attention to non-verbal cues over explicit statements.'] },
            { t: 'p', x: 'Understanding these cultural nuances is what separates a successful international enterprise from one that struggles to gain traction in the APAC region.' }
        ]
    },
    french: {
        category: 'Language Tips', pre: 'Mastering the French ', em: 'Subjunctive', post: ' Without Tears',
        date: 'August 05, 2026', read: '6 min read',
        author: 'Elena Marchetti', role: 'Senior Editor, Romance Languages',
        bio: 'Editor and lifelong Francophile who has taught the subjunctive to more students than she cares to count.',
        avatar: '../images/team_leader.png', img: '../images/blog-french.jpg',
        tags: ['#French', '#Grammar', '#Subjunctive'],
        blocks: [
            { t: 'dropcap', x: 'The French subjunctive terrifies more learners than any other verb mood. But stripped of its mystique, it is a simple reflex: French switches moods the moment certainty wavers.' },
            { t: 'p', x: 'Think of the indicative as the realm of facts — <em>je sais qu\u2019il vient</em> — and the subjunctive as the realm of wishes, doubts, and emotions. The trigger is rarely about grammar and almost always about attitude.' },
            { t: 'h3', x: 'When French Demands the Subjunctive' },
            { t: 'p', x: 'After <em>il faut que</em>, <em>je veux que</em>, and <em>je doute que</em>, the subjunctive is non-negotiable. After <em>apr\u00E8s que</em> it is forbidden. Everything in between is a judgment call — and that is where native intuition lives.' },
            { t: 'quote', x: 'The subjunctive is not a test of grammar; it is the grammar of uncertainty, and French loves it precisely because of that.' },
            { t: 'takeaways', items: ['Memorize the high-frequency triggers first: falloir, vouloir, douter, craindre.', 'Hear the mood before you read it — subjunctive melodies are unmistakable.', 'When in doubt, French speakers use it more often than not.'] },
            { t: 'p', x: 'Stop treating the subjunctive as an exam obstacle and start hearing it as a mood. Fluency follows the ear, not the rulebook.' }
        ]
    },
    ceos: {
        category: 'Corporate', pre: 'Why English is ', em: 'No Longer Enough', post: ' for Global CEOs',
        date: 'July 28, 2026', read: '7 min read',
        author: 'Markus Brandt', role: 'Director of Corporate Programs',
        bio: 'Former diplomat turned corporate trainer who has coached C-suites on four continents.',
        avatar: '../images/team_leader.png', img: '../images/blog-ceos.jpg',
        tags: ['#Leadership', '#GlobalBusiness', '#Multilingual'],
        blocks: [
            { t: 'dropcap', x: 'A decade ago, fluent English was the ceiling for most executives. Today, the boardroom has quietly shifted: the leaders opening new markets are the ones who can switch languages mid-sentence.' },
            { t: 'p', x: 'The numbers are stark. Deals closed in a client\u2019s native language are measurably faster, and partnerships survive their first crisis better when the founders can speak directly. Translation, even excellent translation, adds distance.' },
            { t: 'h3', x: 'The New Executive Curriculum' },
            { t: 'p', x: 'Tomorrow\u2019s CEO does not need to write poetry in German or argue contract law in Mandarin. They need operational fluency: the ability to host a dinner, thank a team, and follow a negotiation\u2019s emotional subtext without an interpreter.' },
            { t: 'quote', x: 'English gets you in the room. The second language decides whether you are remembered when the room empties.' },
            { t: 'takeaways', items: ['Target operational fluency, not native-level mastery.', 'Learn the vocabulary of trust: hospitality, negotiation, and family.', 'A 15-minute daily language block compounds faster than quarterly intensives.'] },
            { t: 'p', x: 'The era of the monolingual executive is closing. The question is not whether you will learn, but which language your next market will reward.' }
        ]
    },
    spanish: {
        category: 'Cultural Insights', pre: 'The History of ', em: 'Spanish Idioms', post: '',
        date: 'July 15, 2026', read: '5 min read',
        author: 'Elena Marchetti', role: 'Senior Editor, Romance Languages',
        bio: 'Editor and lifelong Francophile who has taught the subjunctive to more students than she cares to count.',
        avatar: '../images/team_leader.png', img: '../images/blog-spanish.jpg',
        tags: ['#Spanish', '#Idioms', '#Culture'],
        blocks: [
            { t: 'dropcap', x: 'Every Spanish idiom is a fossilized story. <em>Estar en la luna</em> — to be on the moon — carries four centuries of astrology, poetry, and gentle mockery in a single phrase.' },
            { t: 'p', x: 'Many of the most common expressions were born in the markets and taverns of medieval Iberia, where <em>tener la sart\u00E9n por el mango</em> — holding the frying pan by the handle — literally described who controlled the kitchen and, metaphorically, the household.' },
            { t: 'h3', x: 'From Gold to Football' },
            { t: 'p', x: 'Language evolves on the street, not in academies. The twentieth century replaced bullring metaphors with football ones, and the digital age has begun minting idioms in real time across the Americas.' },
            { t: 'quote', x: 'To learn an idiom is to inherit a joke your great-great-grandparents were in on.' },
            { t: 'p', x: 'The next time a Spanish speaker leaves you staring at a frying pan, remember: you are not confused — you are five hundred years behind, and catching up is half the fun.' }
        ]
    },
    german: {
        category: 'Language Tips', pre: 'The Art of ', em: 'German Compound Nouns', post: '',
        date: 'July 08, 2026', read: '6 min read',
        author: 'Markus Brandt', role: 'Director of Corporate Programs',
        bio: 'Former diplomat turned corporate trainer who has coached C-suites on four continents.',
        avatar: '../images/team_leader.png', img: '../images/blog-german.jpg',
        tags: ['#German', '#Vocabulary', '#WordBuilding'],
        blocks: [
            { t: 'dropcap', x: 'German does not invent new words; it welds old ones together. <em>Rindfleischetikettierungs\u00FCberwachungsaufgaben\u00FCbertragungsgesetz</em> is not a monster — it is a small bureaucracy in a single word.' },
            { t: 'p', x: 'This compounding is not a quirk but a design philosophy. Where English needs a prepositional phrase, German stacks nouns in order of importance, with the final word carrying the meaning.' },
            { t: 'h3', x: 'Reading German Compounds' },
            { t: 'p', x: 'Start from the end. <em>Haust\u00FCrschl\u00FCssel</em> is a key (Schl\u00FCssel) for the house door (Haust\u00FCr). The grammar follows the logic: German sentences, like German words, place the verb — the action — at the end.' },
            { t: 'quote', x: 'A German compound noun is a mini-sentence: read it backwards and it begins to make sense.' },
            { t: 'takeaways', items: ['Always parse compounds from the final word backwards.', 'Learn the most productive connector elements: -s-, -es-, -en-.', 'Play the game: combine three nouns a day and build a vocabulary of your own.'] },
            { t: 'p', x: 'Once you stop fearing the length and start reading from the tail, the longest words in German become the most efficient ones.' }
        ]
    },
    pronunciation: {
        category: 'Language Tips', pre: 'Why ', em: 'Pronunciation', post: ' Matters More Than Vocabulary',
        date: 'June 30, 2026', read: '5 min read',
        author: 'Elena Marchetti', role: 'Senior Editor, Romance Languages',
        bio: 'Editor and lifelong Francophile who has taught the subjunctive to more students than she cares to count.',
        avatar: '../images/team_leader.png', img: '../images/blog-pronunciation.jpg',
        tags: ['#Speaking', '#Pronunciation', '#Fluency'],
        blocks: [
            { t: 'dropcap', x: 'You can survive in a language with three hundred words spoken beautifully. You can be ignored with three thousand words spoken badly. The ear forgives vocabulary gaps long before it forgives sound.' },
            { t: 'p', x: 'Pronunciation is the first impression a language makes. It signals belonging — not perfection, but care. A well-tuned accent buys patience; a mangled one spends it.' },
            { t: 'h3', x: 'Sound Before Structure' },
            { t: 'p', x: 'Learners instinctively collect vocabulary, yet the fastest progress comes from shadowing: replay a sentence, mimic its melody, and let your mouth learn before your memory does.' },
            { t: 'quote', x: 'Vocabulary is what you know; pronunciation is what you are understood to know.' },
            { t: 'p', x: 'Reorder your priorities. Ten minutes of daily shadowing will make you more intelligible — and more human — than a month of flashcards.' }
        ]
    },
    mandarin: {
        category: 'Corporate', pre: 'Negotiating in ', em: 'Mandarin', post: ': A Survival Guide',
        date: 'June 22, 2026', read: '8 min read',
        author: 'Dr. Julian Reed', role: 'Lead APAC Consultant',
        bio: 'Linguist and cultural consultant specializing in East Asian corporate communications.',
        avatar: '../images/team_leader.png', img: '../images/blog-mandarin.jpg',
        tags: ['#Mandarin', '#China', '#Negotiation'],
        blocks: [
            { t: 'dropcap', x: 'Guanxi, face, and numbers that never sound like the numbers — the first high-stakes meeting in Shanghai can feel like a chess match played in a language you half-own.' },
            { t: 'p', x: 'The opening moves matter most. In Chinese business culture, the meal precedes the meeting, and the relationship precedes the contract. Rushing to terms before trust is seen as both rude and unwise.' },
            { t: 'h3', x: 'Face Is Currency' },
            { t: 'p', x: 'Never correct a counterpart publicly, even on a factual error. Preserving <em>mianzi</em> (face) is not courtesy — it is the precondition for any concession. Disagreement is voiced indirectly, often through silence or a change of subject.' },
            { t: 'quote', x: 'The Chinese business deal is not signed at the table. It is signed in the months of dinners, favors, and trust that precede the table.' },
            { t: 'takeaways', items: ['Accept hospitality before business — refusal is read as rejection.', 'Learn numbers perfectly; tone errors at this level are fatal.', 'Never let a counterpart lose face, even in victory.'] },
            { t: 'p', x: 'Mandarin for business is less about vocabulary and more about the unspoken contract you are negotiating before the first clause is read.' }
        ]
    },
    codeswitching: {
        category: 'Corporate', pre: '', em: 'Code-Switching', post: ' in Multinational Offices',
        date: 'June 14, 2026', read: '6 min read',
        author: 'Dr. Julian Reed', role: 'Lead APAC Consultant',
        bio: 'Linguist and cultural consultant specializing in East Asian corporate communications.',
        avatar: '../images/team_leader.png', img: '../images/blog-codeswitching.jpg',
        tags: ['#Teamwork', '#Multilingual', '#OfficeCulture'],
        blocks: [
            { t: 'dropcap', x: 'In a room where three languages are spoken, every sentence is a choice. When the conversation flips to Spanish mid-meeting, someone is gaining nuance — and someone else is losing the thread.' },
            { t: 'p', x: 'Code-switching is not a flaw in communication; it is its optimization. Bilingual teams switch to the language of emotion, precision, or humor depending on what the moment demands. The risk is not switching — it is switching without a map.' },
            { t: 'h3', x: 'The Leader\u2019s Playbook' },
            { t: 'p', x: 'Strong leaders name the pattern. They set ground rules: full documentation in the lingua franca, parallel translation of critical decisions, and the freedom to switch for creative or emotional moments without losing anyone.' },
            { t: 'quote', x: 'Code-switching is not a loss of discipline. It is a superpower the monolingual office has not learned to wield.' },
            { t: 'takeaways', items: ['Document every decision in the shared language.', 'Welcome switching for rapport; anchor switching for precision.', 'Appoint a cultural interpreter in every mixed-language team.'] },
            { t: 'p', x: 'The multinational office of the future will not be monolingual. It will be deliberately, skillfully multilingual.' }
        ]
    },
    psychology: {
        category: 'Language Tips', pre: 'The ', em: 'Psychology', post: ' of Language Learning',
        date: 'June 05, 2026', read: '7 min read',
        author: 'Dr. Amirah Hassan', role: 'Research Fellow, Global Business Culture',
        bio: 'Applied linguist researching how adults learn — and unlearn — languages under pressure.',
        avatar: '../images/team_leader.png', img: '../images/blog-psychology.jpg',
        tags: ['#Learning', '#Psychology', '#Habits'],
        blocks: [
            { t: 'dropcap', x: 'Why do adults freeze in conversations their own students would survive? Because adult brains have learned to fear error — and language acquisition is an error factory.' },
            { t: 'p', x: 'Motivation in language learning compounds like interest on a loan: early fluency pays emotional dividends that fund later persistence. The tragedy is that most curricula front-load the boring years.' },
            { t: 'h3', x: 'Habit Beats Discipline' },
            { t: 'p', x: 'Discipline is a depletable resource; habit is infrastructure. Learners who anchor a ten-minute session to an existing daily routine — coffee, commute, dinner — sustain progress that weekend warriors abandon by February.' },
            { t: 'quote', x: 'The adult who allows themselves to sound foolish for a year will speak beautifully for a lifetime.' },
            { t: 'takeaways', items: ['Tie study to an existing daily anchor.', 'Reward speaking, not just correct speaking.', 'Accept a regression period after every plateau — it is progress in disguise.'] },
            { t: 'p', x: 'The language you failed to learn at twenty is waiting for the you who finally stops being afraid of being wrong.' }
        ]
    },
    diplofrench: {
        category: 'Cultural Insights', pre: 'Diplomatic French: ', em: 'Words That Win Deals', post: '',
        date: 'May 27, 2026', read: '6 min read',
        author: 'Elena Marchetti', role: 'Senior Editor, Romance Languages',
        bio: 'Editor and lifelong Francophile who has taught the subjunctive to more students than she cares to count.',
        avatar: '../images/team_leader.png', img: '../images/blog-diplofrench.jpg',
        tags: ['#French', '#Diplomacy', '#Persuasion'],
        blocks: [
            { t: 'dropcap', x: 'In Paris, the strongest yes in the room is often a carefully delivered maybe. Diplomatic French is an entire architecture of understatement, and it wins deals by never raising its voice.' },
            { t: 'p', x: 'The conditional tense is its master tool. <em>Je pourrais envisager</em> — "I could envisage" — leaves a door ajar without promising the hallway. It is politeness engineered as strategy.' },
            { t: 'h3', x: 'The Grammar of Refusal' },
            { t: 'p', x: 'A direct <em>non</em> is rare in professional French. Refusal is voiced as difficulty, timing, or administrative constraint: <em>ce ne sera pas possible</em>. The message lands the same; the relationship survives.' },
            { t: 'quote', x: 'French diplomacy is the art of saying no so gracefully that the other party thanks you for it.' },
            { t: 'takeaways', items: ['Master the conditional for negotiation: je pourrais, nous pourrions.', 'Refuse with constraint, never with finality.', 'Read the subjunctive as a signal of feeling — and respond to it.'] },
            { t: 'p', x: 'Learn to negotiate in the conditional and you will never be trapped by your own enthusiasm again.' }
        ]
    },
    spanishtenses: {
        category: 'Language Tips', pre: 'Mastering Spanish ', em: 'Verb Tenses', post: ' Without Fear',
        date: 'May 19, 2026', read: '7 min read',
        author: 'Elena Marchetti', role: 'Senior Editor, Romance Languages',
        bio: 'Editor and lifelong Francophile who has taught the subjunctive to more students than she cares to count.',
        avatar: '../images/team_leader.png', img: '../images/blog-spanishtenses.jpg',
        tags: ['#Spanish', '#Grammar', '#Tenses'],
        blocks: [
            { t: 'dropcap', x: 'Spanish does not have more tenses than English — it has better-marked ones. Every ending is a compass pointing to a moment in time, and fear dissolves once you read the compass.' },
            { t: 'p', x: 'Beginners drown in conjugation tables because they study forms before meaning. The useful map is chronological: present, then the two pasts (completed vs. ongoing), then the futures and their cousins.' },
            { t: 'h3', x: 'The Preterite and the Imperfect' },
            { t: 'p', x: 'The preterite narrates events: <em>llegu\u00E9</em> (I arrived). The imperfect describes scenes: <em>llov\u00EDa</em> (it was raining). Think movie: imperfect sets the shot, preterite advances the plot. Storytellers — not grammarians — mastered this first.' },
            { t: 'quote', x: 'The subjunctive is not algebra. It is the Spanish way of saying that reality and desire are two different rooms.' },
            { t: 'p', x: 'Map the timeline once, practice it in stories — and the moods that terrified you become the flavor you begin to crave.' }
        ]
    },
    techenglish: {
        category: 'Corporate', pre: 'English for Tech: ', em: 'Speaking Engineer', post: '',
        date: 'May 11, 2026', read: '6 min read',
        author: 'Markus Brandt', role: 'Director of Corporate Programs',
        bio: 'Former diplomat turned corporate trainer who has coached C-suites on four continents.',
        avatar: '../images/team_leader.png', img: '../images/blog-techenglish.jpg',
        tags: ['#English', '#Tech', '#Career'],
        blocks: [
            { t: 'dropcap', x: 'The developer who ships code but freezes in standups is not a junior — they are an engineer speaking the wrong English. Tech has a dialect, and it is entirely learnable.' },
            { t: 'p', x: 'Standups, RFCs, retros, sprints: each ritual has a fixed script. The vocabulary is small, the patterns are repetitive, and mastery is a matter of rehearsal rather than talent.' },
            { t: 'h3', x: 'The Language of Shipping' },
            { t: 'p', x: 'Precision beats politeness in technical English. <em>Blocked by</em>, <em>carried over</em>, <em>in review</em> — status words do the work of entire sentences. The engineer who names the blocker owns the conversation.' },
            { t: 'quote', x: 'In tech, clarity is a courtesy. The best speakers are not the most eloquent — they are the most predictable.' },
            { t: 'takeaways', items: ['Learn the fixed scripts: standup, retro, RFC review.', 'Master status vocabulary before technical jargon.', 'Practice explaining a bug in sixty seconds — it is the universal test.'] },
            { t: 'p', x: 'Relocating to an international team is a language project as much as a career move. Treat it like one and the standup stops being a stage.' }
        ]
    },
    pause: {
        category: 'Language Tips', pre: 'The Power of ', em: 'the Pause', post: ' in Public Speaking',
        date: 'May 03, 2026', read: '5 min read',
        author: 'Markus Brandt', role: 'Director of Corporate Programs',
        bio: 'Former diplomat turned corporate trainer who has coached C-suites on four continents.',
        avatar: '../images/team_leader.png', img: '../images/blog-pause.jpg',
        tags: ['#Speaking', '#Presentations', '#Confidence'],
        blocks: [
            { t: 'dropcap', x: 'Silence is a muscle. The presenters who command a room are rarely the fastest talkers — they are the ones who can hold their nerve in the gap between sentences.' },
            { t: 'p', x: 'Nervous speakers rush because silence feels like failure. Yet every pause is a transfer of authority: the speaker who can be quiet proves they are not performing — they are thinking.' },
            { t: 'h3', x: 'The Three-Second Rule' },
            { t: 'p', x: 'After a headline sentence, hold three full seconds. It feels like an eternity on stage and reads as confidence in the audience. Before a key number, pause again — the number becomes an event instead of a detail.' },
            { t: 'quote', x: 'The pause is not the absence of speech. It is speech, in its most confident tense.' },
            { t: 'takeaways', items: ['Pause after headlines and before numbers.', 'Count to three silently — it feels longer than it is.', 'Let the audience finish your sentence: silence invites them in.'] },
            { t: 'p', x: 'In any language, the most persuasive sentence a speaker can deliver is the one they let the room complete.' }
        ]
    },
    arabic: {
        category: 'Cultural Insights', pre: 'Arabic ', em: 'Business Etiquette', post: ' Essentials',
        date: 'April 25, 2026', read: '7 min read',
        author: 'Dr. Amirah Hassan', role: 'Research Fellow, Global Business Culture',
        bio: 'Applied linguist researching how adults learn — and unlearn — languages under pressure.',
        avatar: '../images/team_leader.png', img: '../images/blog-arabic.jpg',
        tags: ['#Arabic', '#Etiquette', '#GulfBusiness'],
        blocks: [
            { t: 'dropcap', x: 'The right hand, the coffee ceremony, and the pace of trust: entering a Gulf boardroom is a masterclass in details that a translation app will never teach you.' },
            { t: 'p', x: 'Relationships in Arab business culture are built before contracts, and time moves at the speed of trust, not the speed of agendas. Rushing a meeting to the signature is a signal of disrespect, however polite the words.' },
            { t: 'h3', x: 'The Rituals That Matter' },
            { t: 'p', x: 'Accept the coffee. Use the right hand for handshakes, food, and documents — the left is considered unclean. Address the most senior person first, and let small talk about family and country run its course before business is raised.' },
            { t: 'quote', x: 'In the Gulf, the meeting begins when the coffee cups arrive — and the deal is decided long before anyone says the word contract.' },
            { t: 'takeaways', items: ['Always accept hospitality; refusing coffee is refusing the relationship.', 'Use only the right hand for handshakes, food, and papers.', 'Never raise business before the host does.'] },
            { t: 'p', x: 'Master the rituals and you will find that in the Gulf, courtesy is not the prelude to business — it is the business.' }
        ]
    },
    ai: {
        category: 'Cultural Insights', pre: 'Learning Languages in ', em: 'the Age of AI', post: '',
        date: 'April 17, 2026', read: '8 min read',
        author: 'Dr. Amirah Hassan', role: 'Research Fellow, Global Business Culture',
        bio: 'Applied linguist researching how adults learn — and unlearn — languages under pressure.',
        avatar: '../images/team_leader.png', img: '../images/blog-ai.jpg',
        tags: ['#AI', '#Learning', '#FutureOfWork'],
        blocks: [
            { t: 'dropcap', x: 'The apps translate everything, and yet the demand for human language skills has never been higher. The paradox is not a mystery — it is the market discovering what machines cannot do.' },
            { t: 'p', x: 'Translation delivers meaning; it cannot deliver trust, timing, or belonging. A joke lands or dies on rhythm. A negotiation reads the room before it reads the document. These are not translation problems — they are human ones.' },
            { t: 'h3', x: 'Where AI Actually Helps' },
            { t: 'p', x: 'Used well, AI is the world\u2019s most patient tutor: instant feedback, endless dialogue practice, and pronunciation coaching at 2 a.m. Used badly, it is a shortcut that converts fluency into dependence.' },
            { t: 'quote', x: 'Machines will translate your words forever. They will never translate the pause between them.' },
            { t: 'takeaways', items: ['Use AI for volume practice; use humans for emotional range.', 'Never negotiate through an app — fluency is a safety feature.', 'Let AI drill your weak spots; it is relentless and unembarrassed.'] },
            { t: 'p', x: 'The AI age has not ended language learning. It has finally explained why we learn: not to be understood, but to belong.' }
        ]
    },
    gerengineering: {
        category: 'Corporate', pre: 'German for Engineering: ', em: 'Precision in Words', post: '',
        date: 'April 09, 2026', read: '7 min read',
        author: 'Markus Brandt', role: 'Director of Corporate Programs',
        bio: 'Former diplomat turned corporate trainer who has coached C-suites on four continents.',
        avatar: '../images/team_leader.png', img: '../images/blog-gerengineering.jpg',
        tags: ['#German', '#Engineering', '#Industry'],
        blocks: [
            { t: 'dropcap', x: 'Munich runs on the passive voice. <em>Es wird gepr\u00FCft</em> — it will be checked — is not bureaucratic hedging; it is the grammar of accountability, German engineering style.' },
            { t: 'p', x: 'Technical German rewards exactness over speed. Where English delegates an approval with a friendly email, German expects the <em>Freigabe</em> — a formal release — documented, named, and archived.' },
            { t: 'h3', x: 'The Vocabulary of Approval' },
            { t: 'p', x: '<em>Technische Dokumentation</em>, <em>Abnahme</em> (acceptance), <em>Sollbruchstelle</em> (deliberate weak point): each term compresses a procedure that English needs a paragraph for. Learn the nouns and you inherit the process.' },
            { t: 'quote', x: 'In German engineering, the document is not the record of the work. It is the work.' },
            { t: 'takeaways', items: ['Master the passive voice — it is the house style of German industry.', 'Learn approval nouns: Freigabe, Abnahme, Pr\u00FCfung.', 'Never say yes in writing unless you mean it; German records are permanent.'] },
            { t: 'p', x: 'The engineer who speaks technical German is not just understood — they are trusted with the process itself.' }
        ]
    },
    dinner: {
        category: 'Cultural Insights', pre: 'The Etiquette of ', em: 'Business Dinners', post: ' Abroad',
        date: 'April 01, 2026', read: '6 min read',
        author: 'Dr. Amirah Hassan', role: 'Research Fellow, Global Business Culture',
        bio: 'Applied linguist researching how adults learn — and unlearn — languages under pressure.',
        avatar: '../images/team_leader.png', img: '../images/blog-dinner.jpg',
        tags: ['#Dining', '#Etiquette', '#Culture'],
        blocks: [
            { t: 'dropcap', x: 'Chopsticks in Tokyo, forks in Lyon, hands in Riyadh: the business dinner is where deals are actually concluded, and every culture has a different set of rules for the table.' },
            { t: 'p', x: 'In Japan, never stick chopsticks upright in rice — it evokes a funeral rite. In France, keep both hands visible and your bread on the table, never the plate. In the Gulf, eat with the right hand and let the host serve you first.' },
            { t: 'h3', x: 'The Universal Rule' },
            { t: 'p', x: 'Every dinner etiquette system, from the strictest to the loosest, agrees on one thing: watch the host. The host sets the pace, the portions, and the moment business may begin. Match them and you cannot go far wrong.' },
            { t: 'quote', x: 'The deal is signed at the table, but it is closed in the way you hold the fork.' },
            { t: 'takeaways', items: ['Research the local table rules before the flight, not at the table.', 'Never raise business before the host signals the transition.', 'When uncertain, mirror the host — it is never the wrong move.'] },
            { t: 'p', x: 'Learn the table of your next market and you will find that the dinner is not a distraction from the deal — it is the deal.' }
        ]
    }
};