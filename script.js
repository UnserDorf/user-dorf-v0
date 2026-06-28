const CSV_URL = "vocabulary.csv";
const NOUN_VERB_CSV_URL = "nomen_verb_verbindungen.csv";
const MEANING_MATCH_CSV_URL = "meaning_match_items.csv";
const PREPOSITIONS_CSV_URL = "prepositions.csv";
const LEARNING_LEVELS = ["A1", "A2", "B1"];
const LEVEL_DATASET_PATHS = Object.fromEntries(LEARNING_LEVELS.map((level) => {
  const folder = level.toLowerCase();
  return [level, {
    flashcards: `data/${folder}/unserdorf_v0_${folder}_full_clean.csv`,
    vocabulary: `data/${folder}/unserdorf_${folder}_vocabulary_quiz_items.csv`,
    articles: `data/${folder}/unserdorf_${folder}_article_quiz_items.csv`,
    problemReview: `data/${folder}/unserdorf_${folder}_problem_review.csv`
  }];
}));
const RECENT_VOCABULARY_WORD_BUFFER = 100;
const WRONG_VOCABULARY_WAIT_BUFFER = 20;
const MEANING_MATCH_RECENT_BUFFER = 60;
const WRONG_MEANING_MATCH_WAIT_BUFFER = 20;
const APP_PASSWORD = "b1";
const UNLOCK_STORAGE_KEY = "goethe-b1-flashcards-unlocked-v1";
const STORAGE_KEY = "goethe-b1-flashcards-progress-v1";
const ARTICLE_STORAGE_KEY = "goethe-b1-article-quiz-progress-v1";
const CHALLENGE_QUESTION_COUNT = 10;
const FLASHCARD_SESSION_SIZE = 25;
const CHALLENGE_BANNER_ROTATION_QUESTIONS = 75;
const CHALLENGE_BANNERS = [
  "assets/town-center-stage-1.png",
  "assets/town-center-stage-2.png",
  "assets/town-center-stage-3.png",
  "assets/town-center-stage-4.png",
  "assets/town-center-stage-5.png",
  "assets/saturday-market.png",
  "assets/community-picnic.png",
  "assets/village-carnival.png",
  "assets/villages-homepage.png"
];
const PROFILE_STORAGE_KEY = "goethe-b1-profile-store-v1";
const DEVICE_ONBOARDING_KEY = "unser-dorf-device-onboarding-complete-v1";
const PROFILE_STORE_VERSION = 2;
const DEFAULT_GROUP_ID = "family-z";
const DEFAULT_GROUPS = [
  { id: "family-z", name: "Family Z", icon: "🏡", description: "Unser Familienlern-Dorf", password: "familyz" },
  { id: "b2-class", name: "B2 Class", icon: "📚", description: "Unser Deutschlern-Dorf", password: "b2class" },
  { id: "test-group", name: "Test Family", icon: "🧪", description: "Test- und Übungs-Dorf", password: "test" }
];
const ONBOARDING_PAGES = [
  {
    illustration: "assets/welcome-hero.png",
    illustrationAlt: "A welcoming view of Unser Dorf",
    title: "Welcome to Unser Dorf",
    body: [
      "Learn German while helping your village grow.",
      "Every word you learn contributes to something bigger."
    ],
    progress: "● ○ ○ ○ ○",
    backLabel: "Skip",
    nextLabel: "Next"
  },
  {
    illustration: "assets/learn-hero.png",
    illustrationAlt: "Flashcards for learning German words",
    title: "📇 Learn",
    body: [
      "Study new vocabulary with Flashcards.",
      "Choose your level and learn at your own pace."
    ],
    progress: "○ ● ○ ○ ○",
    backLabel: "Back",
    nextLabel: "Next"
  },
  {
    illustration: "assets/practice-hero.png",
    illustrationAlt: "Article practice in Unser Dorf",
    title: "🏆 Practice",
    body: [
      "Complete Challenges to review what you've learned.",
      "Correct answers strengthen your vocabulary and earn coins."
    ],
    progress: "○ ○ ● ○ ○",
    backLabel: "Back",
    nextLabel: "Next"
  },
  {
    illustration: "assets/grow-hero.png",
    illustrationAlt: "A growing village scene",
    title: "🏡 Grow",
    body: [
      "Earn coins, unlock Austria Album rewards, and help your village grow.",
      "Every learner contributes to a shared village."
    ],
    progress: "○ ○ ○ ● ○",
    backLabel: "Back",
    nextLabel: "Next"
  },
  {
    illustration: "assets/get-started-hero.png",
    illustrationAlt: "A path into the village",
    title: "You're Ready!",
    body: [
      "Choose your village, begin learning, and watch it grow.",
      "Your journey starts with your first word."
    ],
    progress: "○ ○ ○ ○ ●",
    backLabel: "Back",
    nextLabel: "Enter Your Village"
  }
];
const PROFILE_AVATARS = ["🦊", "🌸", "⭐", "👓", "🌿", "📚"];
const VILLAGE_NAMING_CONTRIBUTION_GOAL = 10;
const SUPABASE_URL = "https://fpbgaaswsgfdlydaoids.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_LcLGhSMEDZnMnqMw8xvkAw_a6JPQsgH";
const SUPABASE_SYNC_TABLE = "family_progress";
const FAMILY_SYNC_ID = "unser-dorf-household";

const LEGACY_PROFILE_IDS = new Set(["anna", "omar", "leila", "david", "mineko", "sami", "mai", "ziad"]);
const LEADERBOARD_PROFILE_IDS = [];
const ACHIEVEMENTS = [
  {
    id: "first-correct-answer",
    icon: "✅",
    name: "First Correct Answer",
    description: "Answer your first question correctly.",
    reward: 0,
    scope: "profile",
    metric: "correctAnswers",
    target: 1
  },
  {
    id: "one-hundred-correct-answers",
    icon: "✅",
    name: "100 Correct Answers",
    description: "Reach 100 correct answers.",
    reward: 0,
    scope: "profile",
    metric: "totalCorrectAnswers",
    target: 100
  },
  {
    id: "first-100-coins",
    icon: "🪙",
    name: "First 100 Coins",
    description: "Earn your first 100 coins.",
    reward: 0,
    scope: "profile",
    metric: "coins",
    target: 100
  },
  {
    id: "first-village-upgrade",
    icon: "🏡",
    name: "First Village Upgrade",
    description: "Help unlock the village's first upgrade.",
    reward: 0,
    scope: "family",
    metric: "familyCoins",
    target: 200
  },
  {
    id: "three-day-streak",
    icon: "🔥",
    name: "3-Day Streak",
    description: "Study for 3 days in a row.",
    reward: 0,
    scope: "profile",
    metric: "streak",
    target: 3
  },
  {
    id: "seven-day-streak",
    icon: "🔥",
    name: "7-Day Streak",
    description: "Study for 7 days in a row.",
    reward: 0,
    scope: "profile",
    metric: "streak",
    target: 7
  },
  {
    id: "first-austria-adventure",
    icon: "🇦🇹",
    name: "First Austria Adventure",
    description: "Unlock your first Austria Album reward.",
    reward: 0,
    scope: "profile",
    metric: "austriaAlbumRewards",
    target: 1
  },
  {
    id: "first-village-memory",
    icon: "🎉",
    name: "First Village Memory",
    description: "Unlock your first Village Memory.",
    reward: 0,
    scope: "family",
    metric: "villageMemories",
    target: 1
  }
];
const DAILY_CHALLENGES = [
  {
    id: "article-apprentice",
    icon: "🏷",
    name: "Article Apprentice",
    description: "Answer 20 article questions.",
    metric: "articleQuestions",
    goal: 20,
    reward: 10
  },
  {
    id: "article-expert",
    icon: "🏷",
    name: "Article Expert",
    description: "Answer 50 article questions.",
    metric: "articleQuestions",
    goal: 50,
    reward: 25
  },
  {
    id: "accuracy-challenge",
    icon: "🎯",
    name: "Accuracy Challenge",
    description: "Get 10 article questions correct.",
    metric: "correctArticleAnswers",
    goal: 10,
    reward: 15
  },
  {
    id: "consistency-challenge",
    icon: "🔥",
    name: "Consistency Challenge",
    description: "Answer 30 article questions.",
    metric: "articleQuestions",
    goal: 30,
    reward: 15
  },
  {
    id: "quick-practice",
    icon: "⚡",
    name: "Quick Practice",
    description: "Answer 15 article questions.",
    metric: "articleQuestions",
    goal: 15,
    reward: 8
  },
  {
    id: "marathon-challenge",
    icon: "🏆",
    name: "Marathon Challenge",
    description: "Answer 75 article questions.",
    metric: "articleQuestions",
    goal: 75,
    reward: 40
  }
];
const STREAK_ACTIVITY_GOAL = 10;
const VILLAGE_NAMING_MIN_SHARED_COINS = 700;
const LEVEL_UP_BONUS = 25;
const FAMILY_MILESTONES = [
  { coins: 500, reward: "" },
  { coins: 1000, reward: "" },
  { coins: 2000, reward: "" },
  { coins: 5000, reward: "" },
  { coins: 10000, reward: "" }
];
const FAMILY_WEALTH_LEVELS = [
  { min: 0, next: 100, icon: "", name: "Village Foundation" },
  { min: 100, next: 250, icon: "", name: "Community Garden" },
  { min: 250, next: 500, icon: "", name: "Village Home" },
  { min: 500, next: 1000, icon: "", name: "Learning Circle" },
  { min: 1000, next: 2000, icon: "", name: "Village Path" },
  { min: 2000, next: 4000, icon: "", name: "Village Workshop" },
  { min: 4000, next: 8000, icon: "", name: "Community Hub" },
  { min: 8000, next: 15000, icon: "", name: "Village Network" },
  { min: 15000, next: null, icon: "", name: "Shared Village" }
];
const AUSTRIA_ALBUM_REWARDS = [
  { id: "vienna-tram-ride", coins: 25, title: "Vienna Tram Adventure", category: "Vienna", image: "assets/vienna-tram-ride.png", icon: "🚋", description: "Explore Vienna aboard its iconic red-and-white trams." },
  { id: "schoenbrunn-palace", coins: 75, title: "Afternoon at Schönbrunn", category: "Vienna", image: "assets/schoenbrunn-palace.png", icon: "🏰", description: "Walk through the gardens at Schönbrunn." },
  { id: "vienna-woods", coins: 150, title: "Walk in the Vienna Woods", category: "Vienna", image: "assets/vienna-woods.png", icon: "🌳", description: "Enjoy peaceful forest trails, vineyards, and scenic views." },
  { id: "salzburg", coins: 250, title: "Salzburg Adventure", category: "Salzburg", image: "assets/salzburg.png", icon: "⛰", description: "Explore Austria's beautiful city of music and history." },
  { id: "prater", coins: 375, title: "Ride the Giant Ferris Wheel", category: "Vienna", image: "assets/prater.png", icon: "🎡", description: "Take in Vienna from the classic Prater wheel." },
  { id: "tiergarten-schoenbrunn", coins: 525, title: "Day at Tiergarten Schönbrunn", category: "Vienna", image: "assets/tiergarten-schoenbrunn.png", icon: "🦁", description: "Discover animals and nature at the world's oldest zoo." },
  { id: "hallstatt", coins: 700, title: "Discover Hallstatt", category: "Upper Austria", image: "assets/hallstatt.png", icon: "🏞", description: "Visit one of Austria's most picturesque lakeside villages." },
  { id: "semmering", coins: 900, title: "Semmering Adventure", category: "Lower Austria", image: "assets/semmering.png", icon: "🚂", description: "Ride Austria's famous mountain railway through forests, tunnels, and spectacular Alpine scenery." },
  { id: "danube-river", coins: 1150, title: "Danube Picnic Day", category: "Danube Region", image: "assets/danube-river.png", icon: "🌊", description: "Enjoy a relaxing summer day beside the Danube." },
  { id: "austrian-alps", coins: 1400, title: "Alpine Mountain Day", category: "Austrian Alps", image: "assets/austrian-alps.png", icon: "🏔", description: "Discover breathtaking mountain landscapes and alpine trails." }
];
const TOWN_CENTER_STAGES = [
  { id: "empty-square", coins: 0, stage: 1, icon: "🌱", title: "Open Village Green", description: "The village has a shared green space ready to grow." },
  { id: "flowers", coins: 200, stage: 2, icon: "🌷", title: "Flower Beds", description: "Flower beds bring color to the shared green." },
  { id: "bench", coins: 400, stage: 3, icon: "🪑", title: "Village Bench", description: "A bench gives the village a simple place to pause." },
  { id: "fountain", coins: 700, stage: 4, icon: "⛲", title: "Fountain", description: "A fountain makes the town center feel more alive." },
  { id: "swing-set", coins: 1000, stage: 5, icon: "🌸", title: "Blooming Square", description: "The Town Center feels welcoming and full of life." }
];
const VILLAGE_ALBUM_REWARDS = [
  { id: "saturday-market", coins: 100, title: "Saturday Market", image: "assets/saturday-market.png", icon: "🧺", description: "The village celebrates its first market day." },
  { id: "community-picnic", coins: 300, title: "Community Picnic", image: "assets/community-picnic.png", icon: "🥪", description: "Families gather together for a picnic in the village square." },
  { id: "music-day", coins: 500, title: "Music Day", image: "assets/music-day.png", icon: "🎶", description: "A small village music event brings everyone together." },
  { id: "outdoor-movie", coins: 850, title: "Outdoor Movie Night", image: "assets/outdoor-movie.png", icon: "🎬", description: "The village enjoys a movie under the stars." },
  { id: "village-carnival", coins: 1250, title: "Village Carnival", image: "assets/village-carnival.png", icon: "🎡", description: "The biggest celebration yet arrives in the village." }
];
const COIN_LEVELS = [
  { min: 0, next: 50, icon: "🪙", name: "Coin Pouch" },
  { min: 50, next: 150, icon: "👛", name: "Wallet" },
  { min: 150, next: 300, icon: "🐷", name: "Piggy Bank" },
  { min: 300, next: 500, icon: "💰", name: "Treasure Chest" },
  { min: 500, next: 800, icon: "🏧", name: "ATM" },
  { min: 800, next: 1200, icon: "🏦", name: "Bank" },
  { min: 1200, next: 1600, icon: "🏛️", name: "Bill Gates" },
  { min: 1600, next: 2500, icon: "💎", name: "Jeff Bezos" },
  { min: 2500, next: null, icon: "👑", name: "Elon Musk" }
];

const STANDARD_FILTERS = [
  ["all", "All words"],
  ["knownMeaning", "Known meaning"],
  ["unsureMeaning", "Kind of known meaning"],
  ["unknownMeaning", "Unknown meaning"],
  ["unratedMeaning", "Unrated meaning"]
];

const ARTICLE_FILTERS = [
  ["smartArticle", "Smart Review"],
  ["newArticles", "New"],
  ["learnedArticles", "Learned"],
  ["masteredArticles", "Mastered"],
  ["wrongRecently", "Wrong Recently"]
];

const MEANING_MATCH_TEMPLATES = [
  {
    id: "neutral-she",
    type: "infinitive",
    english: (meaning) => `She needs to ${meaning.base} today.`,
    german: ({ phrase }) => `Sie muss heute ${phrase}.`
  },
  {
    id: "neutral-we",
    type: "infinitive",
    english: (meaning) => `We have to ${meaning.base} soon.`,
    german: ({ phrase }) => `Wir müssen bald ${phrase}.`
  },
  {
    id: "future-they",
    type: "infinitive",
    english: (meaning) => `They will ${meaning.base} next week.`,
    german: ({ phrase }) => `Sie werden nächste Woche ${phrase}.`
  },
  {
    id: "school-question",
    type: "infinitive",
    context: "school",
    english: (meaning) => `Can you ${meaning.base} after class?`,
    german: ({ phrase }) => `Kannst du nach dem Unterricht ${phrase}?`
  },
  {
    id: "work-team",
    type: "infinitive",
    context: "work",
    english: (meaning) => `At work, the team has to ${meaning.base}.`,
    german: ({ phrase }) => `Bei der Arbeit muss das Team ${phrase}.`
  },
  {
    id: "family-plan",
    type: "infinitive",
    context: "family",
    english: (meaning) => `My family wants to ${meaning.base} this weekend.`,
    german: ({ phrase }) => `Meine Familie möchte am Wochenende ${phrase}.`
  },
  {
    id: "question-why",
    type: "infinitive",
    english: (meaning) => `Why do you want to ${meaning.base}?`,
    german: ({ phrase }) => `Warum willst du ${phrase}?`
  },
  {
    id: "everyday-plan",
    type: "infinitive",
    english: (meaning) => `I want to ${meaning.base}.`,
    german: ({ phrase }) => `Ich möchte ${phrase}.`
  },
  {
    id: "past-she-yesterday",
    type: "perfect",
    english: (meaning) => `She ${meaning.past} yesterday.`,
    german: ({ aux, phrase }) => `Sie ${aux.she} gestern ${phrase}.`
  },
  {
    id: "past-work",
    type: "perfect",
    english: (meaning) => `We ${meaning.past} after the meeting.`,
    german: ({ aux, phrase }) => `Wir ${aux.we} nach der Besprechung ${phrase}.`
  },
  {
    id: "past-school",
    type: "perfect",
    english: (meaning) => `He ${meaning.past} on the way to school.`,
    german: ({ aux, phrase }) => `Er ${aux.he} auf dem Weg zur Schule ${phrase}.`
  },
  {
    id: "question-perfect",
    type: "perfect",
    english: (meaning) => `Did they ${meaning.base} yet?`,
    german: ({ aux, phrase }) => `${capitalizeFirst(aux.they)} sie schon ${phrase}?`
  },
  {
    id: "past-lena",
    type: "perfect",
    english: (meaning) => `Lena ${meaning.past} this morning.`,
    german: ({ aux, phrase }) => `Lena ${aux.she} heute Morgen ${phrase}.`
  }
];

const els = {
  lockScreen: document.querySelector("#lockScreen"),
  lockForm: document.querySelector("#lockForm"),
  passwordInput: document.querySelector("#passwordInput"),
  lockError: document.querySelector("#lockError"),
  profileScreen: document.querySelector("#profileScreen"),
  villageSelection: document.querySelector("#villageSelection"),
  villageCardGrid: document.querySelector("#villageCardGrid"),
  villagePasswordForm: document.querySelector("#villagePasswordForm"),
  villagePasswordTitle: document.querySelector("#villagePasswordTitle"),
  villagePasswordInput: document.querySelector("#villagePasswordInput"),
  cancelVillagePassword: document.querySelector("#cancelVillagePassword"),
  villagePasswordError: document.querySelector("#villagePasswordError"),
  villageNameForm: document.querySelector("#villageNameForm"),
  villageNameInput: document.querySelector("#villageNameInput"),
  profileSignInHeading: document.querySelector("#profileSignInHeading"),
  profileSignInEyebrow: document.querySelector("#profileSignInEyebrow"),
  profileSignInTitle: document.querySelector("#profileSignInTitle"),
  profileGrid: document.querySelector("#profileGrid"),
  profileActions: document.querySelector("#profileActions"),
  emptyProfileMessage: document.querySelector("#emptyProfileMessage"),
  profileDebug: document.querySelector("#profileDebug"),
  profileLoginForm: document.querySelector("#profileLoginForm"),
  profileLoginTitle: document.querySelector("#profileLoginTitle"),
  profileLoginPassword: document.querySelector("#profileLoginPassword"),
  cancelProfileLogin: document.querySelector("#cancelProfileLogin"),
  profileLoginError: document.querySelector("#profileLoginError"),
  familyWealthCard: document.querySelector("#familyWealthCard"),
  createProfileToggle: document.querySelector("#createProfileToggle"),
  createProfileForm: document.querySelector("#createProfileForm"),
  createProfileTitle: document.querySelector("#createProfileTitle"),
  createProfileIntro: document.querySelector("#createProfileIntro"),
  createProfileName: document.querySelector("#createProfileName"),
  createProfilePassword: document.querySelector("#createProfilePassword"),
  avatarOptions: document.querySelector("#avatarOptions"),
  cancelCreateProfile: document.querySelector("#cancelCreateProfile"),
  createProfileError: document.querySelector("#createProfileError"),
  familyWealthCoins: document.querySelector("#familyWealthCoins"),
  familyWealthLevel: document.querySelector("#familyWealthLevel"),
  familyNextLevelName: document.querySelector("#familyNextLevelName"),
  familyGoalCoins: document.querySelector("#familyGoalCoins"),
  familyGoalRemaining: document.querySelector("#familyGoalRemaining"),
  familyWealthProgressFill: document.querySelector("#familyWealthProgressFill"),
  familyWealthProgressText: document.querySelector("#familyWealthProgressText"),
  appShell: document.querySelector("#appShell"),
  landingScreen: document.querySelector("#landingScreen"),
  landingGetStartedMain: document.querySelector("#landingGetStartedMain"),
  landingExistingAccountMain: document.querySelector("#landingExistingAccountMain"),
  demoScreen: document.querySelector("#demoScreen"),
  demoIllustration: document.querySelector("#demoIllustration"),
  demoTitle: document.querySelector("#demoTitle"),
  demoBody: document.querySelector("#demoBody"),
  demoProgress: document.querySelector("#demoProgress"),
  demoBack: document.querySelector("#demoBack"),
  demoNext: document.querySelector("#demoNext"),
  dashboardScreen: document.querySelector("#dashboardScreen"),
  achievementCollectionScreen: document.querySelector("#achievementCollectionScreen"),
  coinChallengesScreen: document.querySelector("#coinChallengesScreen"),
  levelSelectionScreen: document.querySelector("#levelSelectionScreen"),
  levelSelectionBack: document.querySelector("#levelSelectionBack"),
  levelSelectionContext: document.querySelector("#levelSelectionContext"),
  flashcardResumeScreen: document.querySelector("#flashcardResumeScreen"),
  flashcardResumeBack: document.querySelector("#flashcardResumeBack"),
  flashcardResumeDeck: document.querySelector("#flashcardResumeDeck"),
  flashcardResumePosition: document.querySelector("#flashcardResumePosition"),
  flashcardResumeContinue: document.querySelector("#flashcardResumeContinue"),
  flashcardChooseAnotherDeck: document.querySelector("#flashcardChooseAnotherDeck"),
  flashcardSetupScreen: document.querySelector("#flashcardSetupScreen"),
  flashcardSetupForm: document.querySelector("#flashcardSetupForm"),
  flashcardSetupBack: document.querySelector("#flashcardSetupBack"),
  flashcardSetupLevel: document.querySelector("#flashcardSetupLevel"),
  learningFlashcardsScreen: document.querySelector("#learningFlashcardsScreen"),
  learningFlashcard: document.querySelector("#learningFlashcard"),
  learningFlashcardsBack: document.querySelector("#learningFlashcardsBack"),
  learningFlashcardCounter: document.querySelector("#learningFlashcardCounter"),
  learningFlashcardSelection: document.querySelector("#learningFlashcardSelection"),
  learningDeckSelectorPanel: document.querySelector("#learningDeckSelectorPanel"),
  learningFlashcardGerman: document.querySelector("#learningFlashcardGerman"),
  learningFlashcardEnglish: document.querySelector("#learningFlashcardEnglish"),
  learningFlashcardCategory: document.querySelector("#learningFlashcardCategory"),
  learningFlashcardExample: document.querySelector("#learningFlashcardExample"),
  learningFlashcardExampleGroup: document.querySelector("#learningFlashcardExampleGroup"),
  flashcardStudyStats: document.querySelector("#flashcardStudyStats"),
  flashcardStatsKnown: document.querySelector("#flashcardStatsKnown"),
  flashcardStatsUnsure: document.querySelector("#flashcardStatsUnsure"),
  flashcardStatsUnknown: document.querySelector("#flashcardStatsUnknown"),
  flashcardStatsUnseen: document.querySelector("#flashcardStatsUnseen"),
  flashcardStatsKnownBar: document.querySelector("#flashcardStatsKnownBar"),
  flashcardStatsUnsureBar: document.querySelector("#flashcardStatsUnsureBar"),
  flashcardStatsUnknownBar: document.querySelector("#flashcardStatsUnknownBar"),
  flashcardStatsUnseenBar: document.querySelector("#flashcardStatsUnseenBar"),
  learningFlashcardRatings: document.querySelector("#learningFlashcardRatings"),
  learningFlashcardNavigation: document.querySelector("#learningFlashcardNavigation"),
  learningFlashcardPrevious: document.querySelector("#learningFlashcardPrevious"),
  learningFlashcardNext: document.querySelector("#learningFlashcardNext"),
  learningFlashcardEmpty: document.querySelector("#learningFlashcardEmpty"),
  flashcardCompletionCard: document.querySelector("#flashcardCompletionCard"),
  flashcardCompletionBack: document.querySelector("#flashcardCompletionBack"),
  flashcardCompletionCount: document.querySelector("#flashcardCompletionCount"),
  flashcardContinueStudying: document.querySelector("#flashcardContinueStudying"),
  flashcardReturnDashboard: document.querySelector("#flashcardReturnDashboard"),
  challengeLevelBack: document.querySelector("#challengeLevelBack"),
  challengeSelectedLevel: document.querySelector("#challengeSelectedLevel"),
  challengeSelectedCategory: document.querySelector("#challengeSelectedCategory"),
  articleSelectedLevel: document.querySelector("#articleSelectedLevel"),
  challengeMasteryDeck: document.querySelector("#challengeMasteryDeck"),
  challengeCorrectOnce: document.querySelector("#challengeCorrectOnce"),
  challengeMasteredCount: document.querySelector("#challengeMasteredCount"),
  challengeRemainingMastery: document.querySelector("#challengeRemainingMastery"),
  articleMasteryDeck: document.querySelector("#articleMasteryDeck"),
  articleCorrectOnce: document.querySelector("#articleCorrectOnce"),
  articleMasteredCount: document.querySelector("#articleMasteredCount"),
  articleRemainingMastery: document.querySelector("#articleRemainingMastery"),
  challengeReadyScreen: document.querySelector("#challengeReadyScreen"),
  challengeReadyBack: document.querySelector("#challengeReadyBack"),
  challengeReadyLevel: document.querySelector("#challengeReadyLevel"),
  challengeReadyTitle: document.querySelector("#challengeReadyTitle"),
  challengeReadyDescription: document.querySelector("#challengeReadyDescription"),
  challengeReadyStart: document.querySelector("#challengeReadyStart"),
  dashboardWelcome: document.querySelector("#dashboardWelcome"),
  dashboardVillageName: document.querySelector("#dashboardVillageName"),
  challengeHubVillageName: document.querySelector("#challengeHubVillageName"),
  currentGroupLabel: document.querySelector("#currentGroupLabel"),
  currentUserLabel: document.querySelector("#currentUserLabel"),
  dashboardChallengeStatus: document.querySelector("#dashboardChallengeStatus"),
  dashboardStreak: document.querySelector("#dashboardStreak"),
  dashboardChallengesCompleted: document.querySelector("#dashboardChallengesCompleted"),
  achievementPreview: document.querySelector("#achievementPreview"),
  austriaAlbumPreview: document.querySelector("#austriaAlbumPreview"),
  townCenterDashboardImage: document.querySelector("#townCenterDashboardImage"),
  townCenterDashboardStage: document.querySelector("#townCenterDashboardStage"),
  townCenterDashboardStageCount: document.querySelector("#townCenterDashboardStageCount"),
  villageAlbumPreview: document.querySelector("#villageAlbumPreview"),
  householdList: document.querySelector("#householdList"),
  rewardPageTitle: document.querySelector("#rewardPageTitle"),
  rewardPageSummary: document.querySelector("#rewardPageSummary"),
  collectionNavigation: document.querySelector("#collectionNavigation"),
  achievementsGrid: document.querySelector("#achievementsGrid"),
  challengeArticleProgressBar: document.querySelector("#challengeArticleProgressBar"),
  challengeArticleProgressLabel: document.querySelector("#challengeArticleProgressLabel"),
  challengeVocabularyProgressBar: document.querySelector("#challengeVocabularyProgressBar"),
  challengeVocabularyProgressLabel: document.querySelector("#challengeVocabularyProgressLabel"),
  challengeNounVerbProgressBar: document.querySelector("#challengeNounVerbProgressBar"),
  challengeNounVerbProgressLabel: document.querySelector("#challengeNounVerbProgressLabel"),
  challengeMeaningMatchProgressBar: document.querySelector("#challengeMeaningMatchProgressBar"),
  challengeMeaningMatchProgressLabel: document.querySelector("#challengeMeaningMatchProgressLabel"),
  challengePrepositionProgressBar: document.querySelector("#challengePrepositionProgressBar"),
  challengePrepositionProgressLabel: document.querySelector("#challengePrepositionProgressLabel"),
  levelCoins: document.querySelector("#levelCoins"),
  dashboardFamilyLevel: document.querySelector("#dashboardFamilyLevel"),
  dashboardFamilyCoins: document.querySelector("#dashboardFamilyCoins"),
  dashboardFamilyProgressFill: document.querySelector("#dashboardFamilyProgressFill"),
  dashboardFamilyProgressText: document.querySelector("#dashboardFamilyProgressText"),
  levelCelebration: document.querySelector("#levelCelebration"),
  levelCelebrationTitle: document.querySelector("#levelCelebrationTitle"),
  levelCelebrationProfile: document.querySelector("#levelCelebrationProfile"),
  levelCelebrationLevel: document.querySelector("#levelCelebrationLevel"),
  levelCelebrationBonus: document.querySelector("#levelCelebrationBonus"),
  namingCeremonyForm: document.querySelector("#namingCeremonyForm"),
  namingCeremonyInput: document.querySelector("#namingCeremonyInput"),
  levelCelebrationViewAlbum: document.querySelector("#levelCelebrationViewAlbum"),
  levelCelebrationClose: document.querySelector("#levelCelebrationClose"),
  memoryDetailModal: document.querySelector("#memoryDetailModal"),
  memoryDetailClose: document.querySelector("#memoryDetailClose"),
  memoryDetailImage: document.querySelector("#memoryDetailImage"),
  memoryDetailSource: document.querySelector("#memoryDetailSource"),
  memoryDetailTitle: document.querySelector("#memoryDetailTitle"),
  memoryDetailDescription: document.querySelector("#memoryDetailDescription"),
  controlPanel: document.querySelector("#controlPanel"),
  searchPanel: document.querySelector("#searchPanel"),
  statsGrid: document.querySelector("#statsGrid"),
  studyStage: document.querySelector("#studyStage"),
  studyChallengeBack: document.querySelector("#studyChallengeBack"),
  studyChallengeBanner: document.querySelector("#studyChallengeBanner"),
  nounVerbStage: document.querySelector("#nounVerbStage"),
  nounVerbChallengeBack: document.querySelector("#nounVerbChallengeBack"),
  nounVerbChallengeBanner: document.querySelector("#nounVerbChallengeBanner"),
  nounVerbCounter: document.querySelector("#nounVerbCounter"),
  nounVerbTitle: document.querySelector("#nounVerbTitle"),
  vocabularyReviewDebug: document.querySelector("#vocabularyReviewDebug"),
  nounVerbInstruction: document.querySelector("#nounVerbInstruction"),
  nounVerbPrompt: document.querySelector("#nounVerbPrompt"),
  nounVerbOptions: document.querySelector("#nounVerbOptions"),
  nounVerbResult: document.querySelector("#nounVerbResult"),
  nounVerbEmptyState: document.querySelector("#nounVerbEmptyState"),
  nounVerbNext: document.querySelector("#nounVerbNext"),
  actionBar: document.querySelector("#actionBar"),
  deckStatus: document.querySelector("#deckStatus"),
  currentProfileLabel: document.querySelector("#currentProfileLabel"),
  modeSelect: document.querySelector("#modeSelect"),
  filterSelect: document.querySelector("#filterSelect"),
  startSelect: document.querySelector("#startSelect"),
  orderSelect: document.querySelector("#orderSelect"),
  wordSearchInput: document.querySelector("#wordSearchInput"),
  searchResults: document.querySelector("#searchResults"),
  csvInput: document.querySelector("#csvInput"),
  homeButton: document.querySelector("#homeButton"),
  switchProfile: document.querySelector("#switchProfile"),
  logoutButton: document.querySelector("#logoutButton"),
  settingsToggle: document.querySelector("#settingsToggle"),
  settingsPanel: document.querySelector("#settingsPanel"),
  settingsVillageName: document.querySelector("#settingsVillageName"),
  settingsVillageNameInput: document.querySelector("#settingsVillageNameInput"),
  saveVillageName: document.querySelector("#saveVillageName"),
  settingsProfileName: document.querySelector("#settingsProfileName"),
  settingsProfileNameInput: document.querySelector("#settingsProfileNameInput"),
  saveProfileName: document.querySelector("#saveProfileName"),
  changeProfilePassword: document.querySelector("#changeProfilePassword"),
  resetLocalTestData: document.querySelector("#resetLocalTestData"),
  settingsBackDashboard: document.querySelector("#settingsBackDashboard"),
  statWordsLearned: document.querySelector("#statWordsLearned"),
  statWordsTotal: document.querySelector("#statWordsTotal"),
  statArticlesLearned: document.querySelector("#statArticlesLearned"),
  statNounsTotal: document.querySelector("#statNounsTotal"),
  statMeaningKnown: document.querySelector("#statMeaningKnown"),
  statMeaningUnsure: document.querySelector("#statMeaningUnsure"),
  statMeaningUnknown: document.querySelector("#statMeaningUnknown"),
  statMeaningUnrated: document.querySelector("#statMeaningUnrated"),
  statArticleNew: document.querySelector("#statArticleNew"),
  statArticleLearned: document.querySelector("#statArticleLearned"),
  statArticleMastered: document.querySelector("#statArticleMastered"),
  statArticleGap: document.querySelector("#statArticleGap"),
  cardCounter: document.querySelector("#cardCounter"),
  flashcard: document.querySelector("#flashcard"),
  cardMode: document.querySelector("#cardMode"),
  promptLabel: document.querySelector("#promptLabel"),
  questionText: document.querySelector("#questionText"),
  questionTranslation: document.querySelector("#questionTranslation"),
  articleGuess: document.querySelector("#articleGuess"),
  articleQuiz: document.querySelector("#articleQuiz"),
  articleQuizOptions: document.querySelector("#articleQuizOptions"),
  articleQuizResult: document.querySelector("#articleQuizResult"),
  articleQuizNext: document.querySelector("#articleQuizNext"),
  challengeResultsScreen: document.querySelector("#challengeResultsScreen"),
  challengeResultAccuracy: document.querySelector("#challengeResultAccuracy"),
  challengeResultCorrect: document.querySelector("#challengeResultCorrect"),
  challengeResultCoins: document.querySelector("#challengeResultCoins"),
  challengeResultsType: document.querySelector("#challengeResultsType"),
  challengeResultsBack: document.querySelector("#challengeResultsBack"),
  challengeResultsContinue: document.querySelector("#challengeResultsContinue"),
  answerPanel: document.querySelector("#answerPanel"),
  answerArticle: document.querySelector("#answerArticle"),
  answerMeaning: document.querySelector("#answerMeaning"),
  answerExample: document.querySelector("#answerExample"),
  emptyState: document.querySelector("#emptyState"),
  previousCard: document.querySelector("#previousCard"),
  nextCard: document.querySelector("#nextCard"),
  showAnswer: document.querySelector("#showAnswer"),
  ratingButtons: document.querySelector("#ratingButtons")
};

let cards = [];
let visibleCards = [];
let levelDatasets = createEmptyLevelDatasets();
let nounVerbPairs = [];
let meaningMatchItems = [];
let prepositionItems = [];
let visibleNounVerbPairs = [];
let visibleMeaningMatchPairs = [];
let visiblePrepositionItems = [];
let visibleVocabularyReviewCards = [];
let currentIndex = 0;
let nounVerbCurrentIndex = 0;
let meaningMatchCurrentIndex = 0;
let prepositionCurrentIndex = 0;
let vocabularyReviewCurrentIndex = 0;
let answerShown = false;
let selectedArticle = "";
let articleQuizAnswered = false;
let selectedQuizArticle = "";
let nounVerbQuizState = {
  currentQuestionId: "",
  selectedAnswer: "",
  hasAnswered: false,
  currentChoices: []
};
let meaningMatchQuizState = {
  currentQuestionId: "",
  selectedIndex: -1,
  hasAnswered: false,
  currentPrompt: "",
  currentTemplateId: "",
  currentChoices: []
};
let prepositionQuizState = {
  currentQuestionId: "",
  selectedAnswer: "",
  hasAnswered: false,
  currentChoices: []
};
let vocabularyReviewQuizState = {
  currentQuestionId: "",
  selectedAnswer: "",
  hasAnswered: false,
  currentChoices: []
};
let challengeSession = createEmptyChallengeSession();
let flashcardStudyCards = [];
let flashcardStudyIndex = 0;
let flashcardStudyLevel = "A1";
let flashcardStudyCategory = "nouns";
let selectedLearningPath = "";
let selectedLearningLevel = "A1";
let selectedChallengeCategory = "nouns";
let pendingChallengeAction = "";
let pendingFlashcardResumeKey = "";
let recentNounVerbQuestionIds = [];
let recentNounVerbNouns = [];
let recentMeaningMatchItems = [];
let recentMeaningMatchTemplateIds = [];
let recentVocabularyWords = [];
let meaningMatchGeneratedItems = new Map();
let progress = {};
let vocabularyProgress = {};
let articleProgress = {};
let nounVerbProgress = {};
let meaningMatchProgress = {};
let prepositionProgress = {};
let profileStore = null;
let checkingAchievements = false;
let pendingCelebrations = [];
let currentProfileId = "";
let currentGroupId = DEFAULT_GROUP_ID;
let pendingProfileId = "";
let selectedAvatar = PROFILE_AVATARS[0];
let searchResults = [];
let randomSessionKey = "";
let randomSessionIds = [];
let currentView = "dashboard";
let syncEnabled = false;
let demoPageIndex = 0;
let applyingRemoteStore = false;
let cloudSaveTimer = 0;
let cloudPullTimer = 0;

document.addEventListener("DOMContentLoaded", init);

async function init() {
  bindLockEvents();
  await unlockApp();
}

async function unlockApp() {
  els.lockScreen.classList.add("hidden");
  profileStore = loadProfileStore();
  syncEnabled = false;
  bindEvents();
  try {
    const response = await fetch(CSV_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Vocabulary file was not found.");
    const csv = await response.text();
    cards = normalizeCards(parseCsv(csv));
    els.deckStatus.textContent = "";
  } catch (error) {
    els.deckStatus.textContent = "";
    cards = [];
  }
  try {
    const response = await fetch(NOUN_VERB_CSV_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Noun-verb file was not found.");
    const csv = await response.text();
    nounVerbPairs = normalizeNounVerbPairs(parseCsv(csv));
  } catch (error) {
    console.warn("Could not load noun-verb pairs.", error);
    nounVerbPairs = [];
  }
  try {
    const response = await fetch(MEANING_MATCH_CSV_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Meaning Match file was not found.");
    const csv = await response.text();
    meaningMatchItems = normalizeMeaningMatchItems(parseCsv(csv));
  } catch (error) {
    console.warn("Could not load curated Meaning Match items.", error);
    meaningMatchItems = [];
  }
  try {
    const response = await fetch(PREPOSITIONS_CSV_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Prepositions file was not found.");
    const csv = await response.text();
    prepositionItems = normalizePrepositionItems(parseCsv(csv));
  } catch (error) {
    console.warn("Could not load preposition questions.", error);
    prepositionItems = [];
  }
  await Promise.all(LEARNING_LEVELS.map((level) => loadLevelDatasets(level)));
  if (isDeviceOnboardingComplete()) {
    showProfileScreen();
  } else {
    showLandingScreen();
  }
}

function isDeviceOnboardingComplete() {
  return localStorage.getItem(DEVICE_ONBOARDING_KEY) === "true";
}

function completeDeviceOnboarding() {
  localStorage.setItem(DEVICE_ONBOARDING_KEY, "true");
}

function createEmptyLevelDatasets() {
  return Object.fromEntries(LEARNING_LEVELS.map((level) => [level, {
    flashcards: [],
    vocabulary: [],
    articles: [],
    problemReview: []
  }]));
}

async function loadLevelDatasets(level) {
  const paths = LEVEL_DATASET_PATHS[level];
  if (!paths) return;
  const [flashcards, vocabulary, articles, problemReview] = await Promise.all([
    loadCsvRows(paths.flashcards),
    loadCsvRows(paths.vocabulary),
    loadCsvRows(paths.articles),
    loadCsvRows(paths.problemReview)
  ]);
  levelDatasets[level] = {
    flashcards: normalizeLevelCards(flashcards, level, "flashcards"),
    vocabulary: normalizeLevelCards(vocabulary, level, "vocabulary"),
    articles: normalizeArticleChallengeCards(articles, level),
    problemReview
  };
}

async function loadCsvRows(path) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) {
      console.warn(`Could not load ${path}: ${response.status}.`);
      return [];
    }
    return parseCsv(await response.text());
  } catch (error) {
    console.warn(`Could not load ${path}.`, error);
    return [];
  }
}

async function initializeFamilySync() {
  try {
    const remoteStore = await fetchProfileStoreFromCloud();

    if (remoteStore) {
      applyRemoteProfileStore(remoteStore);
    } else {
      await saveProfileStoreToCloudNow();
    }

    syncEnabled = true;
    startFamilySyncPolling();
  } catch (error) {
    syncEnabled = false;
    console.warn("Family sync unavailable. Using this device only.", error);
  }
}

function startFamilySyncPolling() {
  window.clearInterval(cloudPullTimer);
  cloudPullTimer = window.setInterval(async () => {
    if (applyingRemoteStore) return;
    const remoteStore = await fetchProfileStoreFromCloud();
    if (remoteStore) applyRemoteProfileStore(remoteStore);
  }, 5000);

  document.addEventListener("visibilitychange", async () => {
    if (document.visibilityState !== "visible" || applyingRemoteStore) return;
    const remoteStore = await fetchProfileStoreFromCloud();
    if (remoteStore) applyRemoteProfileStore(remoteStore);
  });
}

function bindLockEvents() {
  els.lockForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (els.passwordInput.value === APP_PASSWORD) {
      localStorage.setItem(UNLOCK_STORAGE_KEY, "true");
      els.lockError.classList.add("hidden");
      await unlockApp();
      return;
    }
    els.lockError.classList.remove("hidden");
    els.passwordInput.select();
  });
}

function isUnlocked() {
  return localStorage.getItem(UNLOCK_STORAGE_KEY) === "true";
}

function loadProfileStore() {
  const emptyStore = createProfileStore();
  let stored = null;
  try {
    stored = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY));
  } catch {
    stored = null;
  }

  if (stored?.version !== PROFILE_STORE_VERSION) {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(emptyStore));
    currentGroupId = emptyStore.currentGroup;
    return emptyStore;
  }

  const store = {
    ...emptyStore,
    ...(stored || {}),
    profiles: {
      ...emptyStore.profiles,
      ...(stored?.profiles || {})
    }
  };

  Object.keys(store.profiles).forEach((profileId) => {
    if (LEGACY_PROFILE_IDS.has(profileId)) {
      delete store.profiles[profileId];
      return;
    }
    store.profiles[profileId] = normalizeProfileData(store.profiles[profileId], store.profiles[profileId]);
  });
  if (LEGACY_PROFILE_IDS.has(store.currentProfile)) store.currentProfile = "";
  store.familyLevelsReached = normalizeFamilyLevelsReached(store.familyLevelsReached, store.profiles);
  store.familyAchievementsUnlocked = normalizeAchievementList(store.familyAchievementsUnlocked);
  store.villageName = normalizeVillageName(store.villageName);
  store.villageAlbumSeenRewards = normalizeRewardIdList(store.villageAlbumSeenRewards);
  store.townCenterStagesSeen = normalizeRewardIdList(store.townCenterStagesSeen);
  store.groups = normalizeGroups(store.groups, store);
  store.currentGroup = normalizeGroupId(store.currentGroup, store.groups);
  currentGroupId = store.currentGroup;
  promoteFamilyAchievements(store);

  if (!store.migratedLegacyProgress) {
    const legacyProgress = readStorageObject(STORAGE_KEY);
    const legacyArticleProgress = readStorageObject(ARTICLE_STORAGE_KEY);
    const hasLegacyData = Object.keys(legacyProgress).length > 0 || Object.keys(legacyArticleProgress).length > 0;
    store.migratedLegacyProgress = true;
  }

  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(store));
  return store;
}

function createProfileStore() {
  return {
    version: PROFILE_STORE_VERSION,
    currentGroup: DEFAULT_GROUP_ID,
    currentProfile: "",
    villageName: "",
    villageAlbumSeenRewards: [],
    townCenterStagesSeen: [],
    migratedLegacyProgress: false,
    familyLevelsReached: [],
    familyAchievementsUnlocked: [],
    groups: createDefaultGroups(),
    profiles: {}
  };
}

function createDefaultGroups() {
  return Object.fromEntries(DEFAULT_GROUPS.map((group) => [group.id, createGroupData(group)]));
}

function createGroupData(group, source = {}) {
  const savedVillageName = normalizeVillageName(source.villageName);
  const ceremonyReady = Boolean(source.namingCeremonyReady);
  return {
    id: group.id,
    name: group.name,
    icon: group.icon || source.icon || "🏡",
    description: group.description || source.description || "Learning village",
    password: group.password || source.password || "",
    villageName: savedVillageName === group.name && !ceremonyReady ? "" : savedVillageName,
    namingCeremonyReady: ceremonyReady,
    villageAlbumSeenRewards: normalizeRewardIdList(source.villageAlbumSeenRewards),
    townCenterStagesSeen: normalizeRewardIdList(source.townCenterStagesSeen),
    familyLevelsReached: Array.isArray(source.familyLevelsReached) ? source.familyLevelsReached.map(String) : [],
    familyAchievementsUnlocked: normalizeAchievementList(source.familyAchievementsUnlocked),
    austriaAlbumSeenRewards: normalizeRewardIdList(source.austriaAlbumSeenRewards),
    memberIds: normalizeGroupMemberIds(source.memberIds)
  };
}

function normalizeGroups(groups, store = profileStore) {
  const normalized = createDefaultGroups();
  Object.entries(groups || {}).forEach(([groupId, group]) => {
    const base = DEFAULT_GROUPS.find((item) => item.id === groupId) || { id: groupId, name: group?.name || "Group" };
    normalized[groupId] = createGroupData(base, group);
  });
  const existingProfileIds = Object.keys(store?.profiles || {}).filter((profileId) => !LEGACY_PROFILE_IDS.has(profileId));
  if (!Object.values(normalized).some((group) => group.memberIds.length) && existingProfileIds.length) {
    normalized[DEFAULT_GROUP_ID].memberIds = existingProfileIds.slice(0, 6);
  }
  normalized[DEFAULT_GROUP_ID].villageAlbumSeenRewards = normalized[DEFAULT_GROUP_ID].villageAlbumSeenRewards.length
    ? normalized[DEFAULT_GROUP_ID].villageAlbumSeenRewards
    : normalizeRewardIdList(store?.villageAlbumSeenRewards);
  normalized[DEFAULT_GROUP_ID].townCenterStagesSeen = normalized[DEFAULT_GROUP_ID].townCenterStagesSeen.length
    ? normalized[DEFAULT_GROUP_ID].townCenterStagesSeen
    : normalizeRewardIdList(store?.townCenterStagesSeen);
  normalized[DEFAULT_GROUP_ID].familyLevelsReached = normalized[DEFAULT_GROUP_ID].familyLevelsReached.length
    ? normalized[DEFAULT_GROUP_ID].familyLevelsReached
    : (Array.isArray(store?.familyLevelsReached) ? store.familyLevelsReached.map(String) : []);
  normalized[DEFAULT_GROUP_ID].familyAchievementsUnlocked = normalized[DEFAULT_GROUP_ID].familyAchievementsUnlocked.length
    ? normalized[DEFAULT_GROUP_ID].familyAchievementsUnlocked
    : normalizeAchievementList(store?.familyAchievementsUnlocked);
  return normalized;
}

function normalizeGroupMemberIds(value) {
  return Array.isArray(value) ? Array.from(new Set(value.map(String).filter(Boolean))).slice(0, 6) : [];
}

function mergeGroupData(localStore, remoteStore, baseStore) {
  const localGroups = normalizeGroups(localStore?.groups, {
    ...(localStore || {}),
    profiles: baseStore.profiles
  });
  const remoteGroups = normalizeGroups(remoteStore?.groups, {
    ...(remoteStore || {}),
    profiles: baseStore.profiles
  });
  const groupIds = new Set([
    ...Object.keys(localGroups),
    ...Object.keys(remoteGroups)
  ]);
  const groups = {};
  groupIds.forEach((groupId) => {
    const localGroup = localGroups[groupId];
    const remoteGroup = remoteGroups[groupId];
    const base = DEFAULT_GROUPS.find((group) => group.id === groupId) || {
      id: groupId,
      name: localGroup?.name || remoteGroup?.name || "Group"
    };
    groups[groupId] = createGroupData(base, {
      villageName: normalizeVillageName(localGroup?.villageName) || normalizeVillageName(remoteGroup?.villageName),
      namingCeremonyReady: Boolean(localGroup?.namingCeremonyReady || remoteGroup?.namingCeremonyReady),
      villageAlbumSeenRewards: [
        ...normalizeRewardIdList(localGroup?.villageAlbumSeenRewards),
        ...normalizeRewardIdList(remoteGroup?.villageAlbumSeenRewards)
      ],
      townCenterStagesSeen: [
        ...normalizeRewardIdList(localGroup?.townCenterStagesSeen),
        ...normalizeRewardIdList(remoteGroup?.townCenterStagesSeen)
      ],
      familyLevelsReached: [
        ...(Array.isArray(localGroup?.familyLevelsReached) ? localGroup.familyLevelsReached : []),
        ...(Array.isArray(remoteGroup?.familyLevelsReached) ? remoteGroup.familyLevelsReached : [])
      ],
      familyAchievementsUnlocked: [
        ...normalizeAchievementList(localGroup?.familyAchievementsUnlocked),
        ...normalizeAchievementList(remoteGroup?.familyAchievementsUnlocked)
      ],
      austriaAlbumSeenRewards: [
        ...normalizeRewardIdList(localGroup?.austriaAlbumSeenRewards),
        ...normalizeRewardIdList(remoteGroup?.austriaAlbumSeenRewards)
      ],
      memberIds: [
        ...normalizeGroupMemberIds(localGroup?.memberIds),
        ...normalizeGroupMemberIds(remoteGroup?.memberIds)
      ]
    });
  });
  return normalizeGroups(groups, baseStore);
}

function normalizeGroupId(groupId, groups = profileStore?.groups) {
  const id = String(groupId || "");
  return groups?.[id] ? id : DEFAULT_GROUP_ID;
}

function getCurrentGroup(store = profileStore) {
  if (!store?.groups) return null;
  const groupId = normalizeGroupId(currentGroupId || store.currentGroup, store.groups);
  if (store === profileStore) {
    currentGroupId = groupId;
    store.currentGroup = groupId;
  }
  return store.groups[groupId] || store.groups[DEFAULT_GROUP_ID];
}

function getCurrentGroupProfiles(store = profileStore) {
  const group = getCurrentGroup(store);
  return (group?.memberIds || [])
    .map((profileId) => store?.profiles?.[profileId])
    .filter(Boolean);
}

function normalizeVillageName(value) {
  return String(value || "").trim();
}

function normalizeRewardIdList(value) {
  return Array.isArray(value) ? Array.from(new Set(value.map(String).filter(Boolean))) : [];
}

function getVillageName() {
  return normalizeVillageName(getCurrentGroup()?.villageName) || "Unnamed Village";
}

function hasVillageName() {
  return Boolean(normalizeVillageName(getCurrentGroup()?.villageName));
}

function saveVillageName(value) {
  const group = getCurrentGroup();
  if (group) group.villageName = normalizeVillageName(value) || "Unser Dorf";
  profileStore.villageName = getVillageName();
  saveProfileStore();
}

function renderVillageName() {
  const villageName = getVillageName();
  if (els.dashboardVillageName) els.dashboardVillageName.textContent = `🏡 ${villageName}`;
  if (els.challengeHubVillageName) els.challengeHubVillageName.textContent = villageName;
  if (els.settingsVillageName) els.settingsVillageName.textContent = villageName;
  renderGroupSelectors();
}

function renderGroupSelectors() {
  if (!profileStore?.groups) return;
  const group = getCurrentGroup();
  const profile = currentProfileId ? getCurrentProfile() : null;
  if (els.currentGroupLabel) els.currentGroupLabel.textContent = group ? `🏡 ${group.name}` : "Choose Village";
  if (els.currentUserLabel) els.currentUserLabel.textContent = profile ? `${profile.emoji || "⭐"} ${profile.name}` : "No profile";
}

function renderVillageCards() {
  if (!els.villageCardGrid || !profileStore?.groups) return;
  const cards = Object.values(profileStore.groups).map((group) => {
    const button = document.createElement("button");
    button.className = "village-card";
    button.type = "button";
    button.dataset.groupId = group.id;
    button.addEventListener("click", () => selectVillage(group.id));
    const villageName = normalizeVillageName(group.villageName);
    button.replaceChildren(
      createTextElement("strong", "", group.name),
      createTextElement("span", "", villageName ? `Village Name: ${villageName}` : group.description || "Learning village")
    );
    return button;
  });
  els.villageCardGrid.replaceChildren(...cards);
}

function selectVillage(groupId) {
  if (!profileStore?.groups?.[groupId]) return;
  currentGroupId = groupId;
  profileStore.currentGroup = groupId;
  saveProfileStore();
  showVillagePassword();
}

function showVillageSelection() {
  currentProfileId = "";
  pendingProfileId = "";
  els.profileScreen.classList.add("village-landing-mode");
  els.profileScreen.classList.remove("first-use");
  hideProfileOnboardingPanels();
  els.villageSelection?.classList.remove("hidden");
  renderVillageCards();
  renderGroupSelectors();
}

function showVillagePassword() {
  const group = getCurrentGroup();
  if (!group) return;
  els.profileScreen.classList.remove("village-landing-mode");
  hideProfileOnboardingPanels();
  els.villagePasswordTitle.textContent = group.name;
  els.villagePasswordInput.value = "";
  els.villagePasswordError.classList.add("hidden");
  els.villagePasswordForm.classList.remove("hidden");
  els.villagePasswordInput.focus();
}

function handleVillagePassword(event) {
  event.preventDefault();
  const group = getCurrentGroup();
  if (!group || els.villagePasswordInput.value.trim() !== group.password) {
    els.villagePasswordError.classList.remove("hidden");
    els.villagePasswordInput.select();
    return;
  }
  showVillageEntry();
}

function showVillageEntry() {
  if (getProfileList().length === 0) {
    showCreateProfileScreen();
    return;
  }
  showProfileChooser();
}

function hideProfileOnboardingPanels() {
  if (!els.villageSelection || !els.villageSelection.classList.contains("hidden")) {
    els.profileScreen?.classList.remove("first-use");
  }
  els.villageSelection?.classList.add("hidden");
  els.villagePasswordForm?.classList.add("hidden");
  els.familyWealthCard?.classList.add("hidden");
  els.villageNameForm?.classList.add("hidden");
  els.profileSignInHeading?.classList.add("hidden");
  els.profileGrid?.classList.add("hidden");
  els.profileActions?.classList.add("hidden");
  els.emptyProfileMessage?.classList.add("hidden");
  els.profileLoginForm?.classList.add("hidden");
  els.createProfileForm?.classList.add("hidden");
}

function promoteFamilyAchievements(store) {
  if (!store?.profiles) return store;
  const familyIds = new Set(getFamilyAchievementIds(store));
  const group = getCurrentGroup(store);
  if (group) group.familyAchievementsUnlocked = Array.from(familyIds);
  store.familyAchievementsUnlocked = Array.from(familyIds);
  return store;
}

function getFamilyAchievementIds(store = profileStore) {
  if (!store) return [];
  const group = getCurrentGroup(store);
  const familyIds = new Set(normalizeAchievementList(group?.familyAchievementsUnlocked || store.familyAchievementsUnlocked));
  const familyAchievementIds = new Set(ACHIEVEMENTS
    .filter((achievement) => achievement.scope === "family")
    .map((achievement) => achievement.id));
  getCurrentGroupProfiles(store).forEach((profile) => {
    normalizeAchievementList(profile?.achievementsUnlocked).forEach((achievementId) => {
      if (familyAchievementIds.has(achievementId)) familyIds.add(achievementId);
    });
  });
  return Array.from(familyIds);
}

function getPersonalAchievementIds(profile) {
  const personalAchievementIds = new Set(ACHIEVEMENTS
    .filter((achievement) => achievement.scope !== "family")
    .map((achievement) => achievement.id));
  return normalizeAchievementList(profile?.achievementsUnlocked)
    .filter((achievementId) => personalAchievementIds.has(achievementId));
}

function normalizeProfileData(data, profile) {
  return {
    id: profile.id,
    name: data?.name || profile.name,
    emoji: profile.emoji,
    avatar: data?.avatar || profile.avatar,
    password: data?.password || profile.password || "",
    coins: normalizeCoinCount(data?.coins),
    levelBonusesAwarded: normalizeLevelBonuses(data?.levelBonusesAwarded, data?.coins),
    dailyChallenge: normalizeDailyChallenge(data?.dailyChallenge),
    streak: normalizeStreak(data?.streak),
    villageContribution: normalizeVillageContribution(data?.villageContribution),
    achievementsUnlocked: normalizeAchievementList(data?.achievementsUnlocked || data?.achievements),
    austriaAlbumSeenRewards: normalizeRewardIdList(data?.austriaAlbumSeenRewards),
    demoCompleted: data?.demoCompleted === undefined ? true : Boolean(data.demoCompleted),
    decks: data?.decks || {},
    progress: normalizeMeaningProgress(data?.progress || {}),
    vocabularyProgress: normalizeVocabularyProgress(data?.vocabularyProgress || {}),
    articleProgress: normalizeArticleProgress(data?.articleProgress || {}),
    nounVerbProgress: normalizeNounVerbProgress(data?.nounVerbProgress || {}),
    meaningMatchProgress: normalizeNounVerbProgress(data?.meaningMatchProgress || {}),
    prepositionProgress: normalizeNounVerbProgress(data?.prepositionProgress || {}),
    recentMeaningMatchItems: normalizeRecentItemList(data?.recentMeaningMatchItems, MEANING_MATCH_RECENT_BUFFER),
    vocabularyReviewStats: normalizeVocabularyReviewStats(data?.vocabularyReviewStats),
    challengeSessionsCompleted: normalizeCounter(data?.challengeSessionsCompleted),
    flashcardSessions: normalizeFlashcardSessions(data?.flashcardSessions),
    positions: normalizePositions(data?.positions),
    settings: {
      mode: data?.settings?.mode || "de-en",
      filter: data?.settings?.filter || "all",
      start: data?.settings?.start || "all",
      order: data?.settings?.order || "alphabetical"
    },
    history: Array.isArray(data?.history) ? data.history : [],
    lastStudyDate: data?.lastStudyDate || ""
  };
}

function normalizePositions(value = {}) {
  return {
    vocabulary: normalizePosition(value.vocabulary),
    article: normalizePosition(value.article),
    nounVerb: normalizePosition(value.nounVerb)
  };
}

function normalizeFlashcardSessions(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).map(([key, session]) => [
      key,
      {
        deckIds: Array.isArray(session?.deckIds) ? session.deckIds.map(String).filter(Boolean) : [],
        index: normalizeCounter(session?.index),
        studiedIds: Array.isArray(session?.studiedIds)
          ? Array.from(new Set(session.studiedIds.map(String).filter(Boolean)))
          : [],
        ratings: normalizeFlashcardRatings(session?.ratings),
        studyDate: typeof session?.studyDate === "string" ? session.studyDate : "",
        completed: Boolean(session?.completed),
        updatedAt: typeof session?.updatedAt === "string" ? session.updatedAt : ""
      }
    ])
  );
}

function normalizeFlashcardRatings(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value)
      .map(([cardId, rating]) => [String(cardId), normalizeMeaningStatus(rating)])
      .filter(([cardId, rating]) => cardId && ["known", "unsure", "unknown"].includes(rating))
  );
}

function normalizePosition(value) {
  const position = Number(value);
  return Number.isFinite(position) && position > 0 ? Math.floor(position) : 0;
}

function normalizeMeaningProgress(savedProgress) {
  return Object.fromEntries(
    Object.entries(savedProgress).map(([cardId, entry]) => [
      cardId,
      {
        ...entry,
        meaningStatus: normalizeMeaningStatus(entry.meaningStatus || entry.rating)
      }
    ])
  );
}

function normalizeVocabularyProgress(savedProgress) {
  return Object.fromEntries(
    Object.entries(savedProgress || {}).map(([cardId, entry]) => {
      const correctCount = normalizeCounter(entry.correctCount);
      const wrongCount = normalizeCounter(entry.wrongCount);
      return [
        cardId,
        {
          ...entry,
          correctCount,
          wrongCount,
          lastAnsweredAt: typeof entry.lastAnsweredAt === "string"
            ? entry.lastAnsweredAt
            : typeof entry.updatedAt === "string" ? entry.updatedAt : "",
          lastWrongAt: typeof entry.lastWrongAt === "string"
            ? entry.lastWrongAt
            : wrongCount > 0 && typeof entry.updatedAt === "string" ? entry.updatedAt : "",
          status: normalizeVocabularyMasteryStatus(entry.status, { correctCount })
        }
      ];
    })
  );
}

function normalizeVocabularyMasteryStatus(value, counts = {}) {
  const status = String(value || "").toLowerCase();
  const correctCount = normalizeCounter(counts.correctCount);
  if (status === "mastered" || correctCount >= 3) return "mastered";
  if (status === "learned" || correctCount >= 1) return "learned";
  return "new";
}

function normalizeRecentItemList(value = [], limit = 60) {
  if (!Array.isArray(value)) return [];
  const seen = new Set();
  return value
    .map(String)
    .filter((item) => {
      if (!item || seen.has(item)) return false;
      seen.add(item);
      return true;
    })
    .slice(0, limit);
}

function normalizeArticleProgress(savedProgress) {
  return Object.fromEntries(
    Object.entries(savedProgress).map(([cardId, entry]) => {
      const articleCorrectCount = normalizeCounter(entry.articleCorrectCount);
      const articleWrongCount = normalizeCounter(entry.articleWrongCount);
      return [
        cardId,
        {
          ...entry,
          articleCorrectCount,
          articleWrongCount,
          articleLastAnsweredAt: typeof entry.articleLastAnsweredAt === "string"
            ? entry.articleLastAnsweredAt
            : typeof entry.updatedAt === "string" ? entry.updatedAt : "",
          articleLastWrongAt: typeof entry.articleLastWrongAt === "string"
            ? entry.articleLastWrongAt
            : articleWrongCount > 0 && typeof entry.updatedAt === "string" ? entry.updatedAt : "",
          articleStatus: normalizeArticleStatus(entry.articleStatus || entry.rating, { articleCorrectCount })
        }
      ];
    })
  );
}

function normalizeNounVerbProgress(savedProgress) {
  return Object.fromEntries(
    Object.entries(savedProgress).map(([pairId, entry]) => {
      const correctCount = normalizeCounter(entry.correctCount);
      const wrongCount = normalizeCounter(entry.wrongCount);
      return [
        pairId,
        {
          ...entry,
          correctCount,
          wrongCount,
          lastAnsweredAt: typeof entry.lastAnsweredAt === "string"
            ? entry.lastAnsweredAt
            : typeof entry.updatedAt === "string" ? entry.updatedAt : "",
          lastWrongAt: typeof entry.lastWrongAt === "string"
            ? entry.lastWrongAt
            : wrongCount > 0 && typeof entry.updatedAt === "string" ? entry.updatedAt : "",
          status: normalizeNounVerbStatus(entry.status, { correctCount })
        }
      ];
    })
  );
}

function normalizeVocabularyReviewStats(value = {}) {
  return {
    answered: normalizeCounter(value?.answered),
    correct: normalizeCounter(value?.correct),
    incorrect: normalizeCounter(value?.incorrect),
    updatedAt: typeof value?.updatedAt === "string" ? value.updatedAt : ""
  };
}

function mergeVocabularyReviewStats(localStats = {}, remoteStats = {}) {
  const local = normalizeVocabularyReviewStats(localStats);
  const remote = normalizeVocabularyReviewStats(remoteStats);
  return {
    answered: Math.max(local.answered, remote.answered),
    correct: Math.max(local.correct, remote.correct),
    incorrect: Math.max(local.incorrect, remote.incorrect),
    updatedAt: latestString(local.updatedAt, remote.updatedAt)
  };
}

function normalizeMeaningStatus(value) {
  if (value === "know" || value === "known" || value === "meaningOnly") return "known";
  if (value === "unsure") return "unsure";
  if (value === "dontKnow" || value === "unknown") return "unknown";
  return "unrated";
}

function normalizeArticleStatus(value, entry = {}) {
  const correctCount = normalizeCounter(entry.articleCorrectCount);
  if (value === "mastered" || correctCount >= 3) return "mastered";
  if (value === "learned" || value === "known" || correctCount >= 1) return "learned";
  return "new";
}

function normalizeNounVerbStatus(value, entry = {}) {
  const correctCount = normalizeCounter(entry.correctCount);
  if (value === "mastered" || correctCount >= 3) return "mastered";
  if (value === "learned" || correctCount >= 1) return "learned";
  return "new";
}

function normalizeCoinCount(value) {
  const coins = Number(value);
  return Number.isFinite(coins) && coins > 0 ? Math.floor(coins) : 0;
}

function normalizeDailyChallenge(value) {
  const date = typeof value?.date === "string" ? value.date : getTodayKey();
  return {
    date,
    challengeId: typeof value?.challengeId === "string" ? value.challengeId : "",
    articleQuestions: normalizeCounter(value?.articleQuestions),
    correctArticleAnswers: normalizeCounter(value?.correctArticleAnswers),
    completed: Boolean(value?.completed),
    rewardAwardedFor: typeof value?.rewardAwardedFor === "string" ? value.rewardAwardedFor : ""
  };
}

function normalizeStreak(value) {
  return {
    current: normalizeCounter(value?.current),
    best: normalizeCounter(value?.best),
    lastQualifiedDate: typeof value?.lastQualifiedDate === "string" ? value.lastQualifiedDate : "",
    activityDate: typeof value?.activityDate === "string" ? value.activityDate : getTodayKey(),
    articleQuestions: normalizeCounter(value?.articleQuestions),
    vocabularyCards: normalizeCounter(value?.vocabularyCards)
  };
}

function normalizeVillageContribution(value) {
  return {
    articleQuestions: normalizeCounter(value?.articleQuestions),
    vocabularyCards: normalizeCounter(value?.vocabularyCards)
  };
}

function normalizeCounter(value) {
  const count = Number(value);
  return Number.isFinite(count) && count > 0 ? Math.floor(count) : 0;
}

function normalizeLevelBonuses(savedLevels, coinValue) {
  if (Array.isArray(savedLevels)) return savedLevels.map(String);
  const coins = normalizeCoinCount(coinValue);
  return COIN_LEVELS
    .filter((level) => level.min > 0 && coins >= level.min)
    .map((level) => getLevelId(level));
}

function normalizeAchievementList(value) {
  return Array.from(new Set((Array.isArray(value) ? value : []).map(String).filter(Boolean)));
}

function normalizeFamilyLevelsReached(savedLevels, profiles) {
  if (Array.isArray(savedLevels)) return savedLevels.map(String);
  const familyCoins = getFamilyCoinTotal(profiles);
  return FAMILY_WEALTH_LEVELS
    .filter((level) => level.min > 0 && familyCoins >= level.min)
    .map((level) => getFamilyLevelId(level));
}

function readStorageObject(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
}

function saveProfileStore() {
  const group = getCurrentGroup();
  if (group) {
    profileStore.currentGroup = group.id;
    profileStore.villageName = group.villageName;
    profileStore.villageAlbumSeenRewards = group.villageAlbumSeenRewards;
    profileStore.townCenterStagesSeen = group.townCenterStagesSeen;
    profileStore.familyLevelsReached = group.familyLevelsReached;
    profileStore.familyAchievementsUnlocked = group.familyAchievementsUnlocked;
  }
  promoteFamilyAchievements(profileStore);
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileStore));
  scheduleCloudSave();
}

function scheduleCloudSave() {
  if (!syncEnabled || applyingRemoteStore) return;
  window.clearTimeout(cloudSaveTimer);
  cloudSaveTimer = window.setTimeout(() => {
    saveProfileStoreToCloudNow();
  }, 450);
}

async function saveProfileStoreToCloudNow() {
  if (!profileStore) return;
  promoteFamilyAchievements(profileStore);
  try {
    const response = await fetch(`${getSupabaseRowUrl()}?on_conflict=id`, {
      method: "POST",
      headers: getSupabaseHeaders({ prefer: "resolution=merge-duplicates,return=minimal" }),
      body: JSON.stringify({
        id: FAMILY_SYNC_ID,
        profile_store: sanitizeProfileStoreForSync(profileStore),
        updated_at: new Date().toISOString()
      })
    });
    if (!response.ok) throw new Error(`Supabase save failed: ${response.status}`);
  } catch (error) {
    console.warn("Could not sync family progress. Local progress is still saved.", error);
  }
}

async function fetchProfileStoreFromCloud() {
  try {
    const response = await fetch(`${getSupabaseRowUrl()}?id=eq.${encodeURIComponent(FAMILY_SYNC_ID)}&select=profile_store&limit=1`, {
      headers: getSupabaseHeaders()
    });
    if (!response.ok) throw new Error(`Supabase load failed: ${response.status}`);
    const rows = await response.json();
    return rows?.[0]?.profile_store || null;
  } catch (error) {
    console.warn("Could not load shared family progress.", error);
    return null;
  }
}

function getSupabaseRowUrl() {
  return `${SUPABASE_URL}/rest/v1/${SUPABASE_SYNC_TABLE}`;
}

function getSupabaseHeaders(options = {}) {
  const headers = {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json"
  };
  if (options.prefer) headers.Prefer = options.prefer;
  return headers;
}

function applyRemoteProfileStore(remoteStore) {
  if (!remoteStore?.profiles) return;
  const mergedStore = mergeProfileStores(profileStore, remoteStore);
  applyingRemoteStore = true;
  profileStore = mergedStore;
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileStore));
  if (currentProfileId && profileStore.profiles[currentProfileId]) {
    progress = profileStore.profiles[currentProfileId].progress;
    vocabularyProgress = profileStore.profiles[currentProfileId].vocabularyProgress;
    articleProgress = profileStore.profiles[currentProfileId].articleProgress;
    nounVerbProgress = profileStore.profiles[currentProfileId].nounVerbProgress;
    meaningMatchProgress = profileStore.profiles[currentProfileId].meaningMatchProgress;
    prepositionProgress = profileStore.profiles[currentProfileId].prepositionProgress;
    recentMeaningMatchItems = normalizeRecentItemList(profileStore.profiles[currentProfileId].recentMeaningMatchItems, MEANING_MATCH_RECENT_BUFFER);
  }
  applyingRemoteStore = false;
  promoteFamilyAchievements(profileStore);
  refreshVisibleProfileState();
  renderAchievementDebugPanel();
}

function mergeProfileStores(localStore, remoteStore) {
  const baseStore = {
    ...createProfileStore(),
    ...(localStore || {}),
    ...(remoteStore || {}),
    profiles: {}
  };

  const customIds = new Set([
    ...Object.keys(localStore?.profiles || {}),
    ...Object.keys(remoteStore?.profiles || {})
  ].filter((profileId) => !LEGACY_PROFILE_IDS.has(profileId)));
  customIds.forEach((profileId) => {
    const localProfile = localStore?.profiles?.[profileId];
    const remoteProfile = remoteStore?.profiles?.[profileId];
    const customProfile = localProfile || remoteProfile;
    baseStore.profiles[profileId] = normalizeProfileData(
      { ...(remoteProfile || {}), ...(localProfile || {}) },
      {
        id: profileId,
        name: customProfile?.name || "Profile",
        emoji: customProfile?.emoji || "🏡",
        avatar: customProfile?.avatar || "",
        password: customProfile?.password || ""
      }
    );
  });

  baseStore.currentProfile = localStore?.currentProfile || remoteStore?.currentProfile || "";
  baseStore.villageName = normalizeVillageName(localStore?.villageName) || normalizeVillageName(remoteStore?.villageName);
  baseStore.villageAlbumSeenRewards = Array.from(
    new Set([
      ...normalizeRewardIdList(localStore?.villageAlbumSeenRewards),
      ...normalizeRewardIdList(remoteStore?.villageAlbumSeenRewards)
    ])
  );
  baseStore.townCenterStagesSeen = Array.from(
    new Set([
      ...normalizeRewardIdList(localStore?.townCenterStagesSeen),
      ...normalizeRewardIdList(remoteStore?.townCenterStagesSeen)
    ])
  );
  baseStore.familyLevelsReached = Array.from(
    new Set([
      ...(Array.isArray(localStore?.familyLevelsReached) ? localStore.familyLevelsReached : []),
      ...(Array.isArray(remoteStore?.familyLevelsReached) ? remoteStore.familyLevelsReached : [])
    ].map(String))
  );
  baseStore.familyAchievementsUnlocked = Array.from(
    new Set([
      ...(Array.isArray(localStore?.familyAchievementsUnlocked) ? localStore.familyAchievementsUnlocked : []),
      ...(Array.isArray(remoteStore?.familyAchievementsUnlocked) ? remoteStore.familyAchievementsUnlocked : [])
    ].map(String))
  );
  baseStore.groups = mergeGroupData(localStore, remoteStore, baseStore);
  baseStore.currentGroup = normalizeGroupId(localStore?.currentGroup || remoteStore?.currentGroup, baseStore.groups);
  currentGroupId = baseStore.currentGroup;
  baseStore.migratedLegacyProgress = Boolean(localStore?.migratedLegacyProgress || remoteStore?.migratedLegacyProgress);
  return promoteFamilyAchievements(baseStore);
}

function mergeProfileData(localProfile, remoteProfile, defaultProfile) {
  const local = normalizeProfileData(localProfile, defaultProfile);
  const remote = normalizeProfileData(remoteProfile, defaultProfile);
  return normalizeProfileData(
    {
      ...local,
      ...remote,
      coins: Math.max(normalizeCoinCount(local.coins), normalizeCoinCount(remote.coins)),
      dailyChallenge: pickLatestDailyChallenge(local.dailyChallenge, remote.dailyChallenge),
      streak: pickBestStreak(local.streak, remote.streak),
      villageContribution: pickBestVillageContribution(local.villageContribution, remote.villageContribution),
      progress: mergeProgressEntries(local.progress, remote.progress),
      vocabularyProgress: mergeProgressEntries(local.vocabularyProgress, remote.vocabularyProgress),
      articleProgress: mergeProgressEntries(local.articleProgress, remote.articleProgress),
      nounVerbProgress: mergeProgressEntries(local.nounVerbProgress, remote.nounVerbProgress),
      meaningMatchProgress: mergeProgressEntries(local.meaningMatchProgress, remote.meaningMatchProgress),
      prepositionProgress: mergeProgressEntries(local.prepositionProgress, remote.prepositionProgress),
      recentMeaningMatchItems: mergeRecentItemLists(local.recentMeaningMatchItems, remote.recentMeaningMatchItems, MEANING_MATCH_RECENT_BUFFER),
      vocabularyReviewStats: mergeVocabularyReviewStats(local.vocabularyReviewStats, remote.vocabularyReviewStats),
      challengeSessionsCompleted: Math.max(
        normalizeCounter(local.challengeSessionsCompleted),
        normalizeCounter(remote.challengeSessionsCompleted)
      ),
      flashcardSessions: {
        ...local.flashcardSessions,
        ...remote.flashcardSessions
      },
      positions: {
        vocabulary: Math.max(normalizePosition(local.positions?.vocabulary), normalizePosition(remote.positions?.vocabulary)),
        article: Math.max(normalizePosition(local.positions?.article), normalizePosition(remote.positions?.article)),
        nounVerb: Math.max(normalizePosition(local.positions?.nounVerb), normalizePosition(remote.positions?.nounVerb))
      },
      levelBonusesAwarded: Array.from(new Set([...(local.levelBonusesAwarded || []), ...(remote.levelBonusesAwarded || [])])),
      achievementsUnlocked: Array.from(new Set([...(local.achievementsUnlocked || []), ...(remote.achievementsUnlocked || [])])),
      austriaAlbumSeenRewards: Array.from(new Set([
        ...normalizeRewardIdList(local.austriaAlbumSeenRewards),
        ...normalizeRewardIdList(remote.austriaAlbumSeenRewards)
      ])),
      history: mergeHistory(local.history, remote.history),
      lastStudyDate: latestString(local.lastStudyDate, remote.lastStudyDate),
      settings: remote.settings || local.settings
    },
    defaultProfile
  );
}

function mergeProgressEntries(localEntries = {}, remoteEntries = {}) {
  const merged = { ...localEntries };
  Object.entries(remoteEntries || {}).forEach(([cardId, remoteEntry]) => {
    const localEntry = merged[cardId];
    merged[cardId] = latestString(localEntry?.updatedAt, remoteEntry?.updatedAt) === localEntry?.updatedAt
      ? localEntry
      : remoteEntry;
  });
  return merged;
}

function mergeRecentItemLists(localItems = [], remoteItems = [], limit = 60) {
  return normalizeRecentItemList([...(localItems || []), ...(remoteItems || [])], limit);
}

function mergeHistory(localHistory = [], remoteHistory = []) {
  const byKey = new Map();
  [...localHistory, ...remoteHistory].forEach((entry) => {
    if (!entry?.studiedAt || !entry?.cardId) return;
    byKey.set(`${entry.studiedAt}-${entry.cardId}-${entry.type}`, entry);
  });
  return [...byKey.values()]
    .sort((first, second) => String(second.studiedAt).localeCompare(String(first.studiedAt)))
    .slice(0, 200);
}

function pickLatestDailyChallenge(localChallenge, remoteChallenge) {
  const localDate = localChallenge?.date || "";
  const remoteDate = remoteChallenge?.date || "";
  if (localDate > remoteDate) return localChallenge;
  if (remoteDate > localDate) return remoteChallenge;
  return {
    date: localDate || remoteDate || getTodayKey(),
    challengeId: localChallenge?.challengeId || remoteChallenge?.challengeId || getDailyChallengeForDate(localDate || remoteDate || getTodayKey()).id,
    articleQuestions: Math.max(normalizeCounter(localChallenge?.articleQuestions), normalizeCounter(remoteChallenge?.articleQuestions)),
    correctArticleAnswers: Math.max(normalizeCounter(localChallenge?.correctArticleAnswers), normalizeCounter(remoteChallenge?.correctArticleAnswers)),
    completed: Boolean(localChallenge?.completed || remoteChallenge?.completed),
    rewardAwardedFor: localChallenge?.rewardAwardedFor || remoteChallenge?.rewardAwardedFor || ""
  };
}

function pickBestStreak(localStreak, remoteStreak) {
  return {
    activityDate: latestString(localStreak?.activityDate, remoteStreak?.activityDate) || getTodayKey(),
    lastQualifiedDate: latestString(localStreak?.lastQualifiedDate, remoteStreak?.lastQualifiedDate),
    current: Math.max(normalizeCounter(localStreak?.current), normalizeCounter(remoteStreak?.current)),
    best: Math.max(normalizeCounter(localStreak?.best), normalizeCounter(remoteStreak?.best)),
    articleQuestions: Math.max(normalizeCounter(localStreak?.articleQuestions), normalizeCounter(remoteStreak?.articleQuestions)),
    vocabularyCards: Math.max(normalizeCounter(localStreak?.vocabularyCards), normalizeCounter(remoteStreak?.vocabularyCards))
  };
}

function pickBestVillageContribution(localContribution, remoteContribution) {
  return {
    articleQuestions: Math.max(normalizeCounter(localContribution?.articleQuestions), normalizeCounter(remoteContribution?.articleQuestions)),
    vocabularyCards: Math.max(normalizeCounter(localContribution?.vocabularyCards), normalizeCounter(remoteContribution?.vocabularyCards))
  };
}

function latestString(first = "", second = "") {
  return String(first || "") >= String(second || "") ? first || "" : second || "";
}

function sanitizeProfileStoreForSync(store) {
  return JSON.parse(JSON.stringify(store));
}

function refreshVisibleProfileState() {
  if (!profileStore) return;
  if (!currentProfileId) {
    renderProfileCards();
    return;
  }
  const profile = getCurrentProfile();
  if (!profile) {
    showProfileScreen();
    return;
  }
  els.currentProfileLabel.textContent = profile.name;
  if (currentView === "dashboard") {
    renderDashboard();
  } else if (currentView === "achievements") {
    renderAchievementCollection();
  } else if (currentView === "coin-challenges") {
    renderCoinChallenges();
  } else if (currentView === "noun-verb") {
    renderNounVerbQuiz();
  } else if (currentView === "meaning-match") {
    renderMeaningMatchQuiz();
  } else if (currentView === "prepositions") {
    renderPrepositionQuiz();
  } else if (currentView === "vocabulary-review") {
    renderVocabularyReviewQuiz();
  } else if (currentView === "learning-flashcards") {
    renderLearningFlashcard();
  } else if (["level-selection", "flashcard-resume", "flashcard-setup", "flashcard-complete", "challenge-ready"].includes(currentView)) {
    return;
  } else {
    updateStats();
    renderCard();
  }
}

function showProfileScreen() {
  currentProfileId = "";
  pendingProfileId = "";
  progress = {};
  vocabularyProgress = {};
  articleProgress = {};
  nounVerbProgress = {};
  meaningMatchProgress = {};
  prepositionProgress = {};
  recentMeaningMatchItems = [];
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.appShell.classList.remove("onboarding-mode");
  els.appShell.classList.remove("landing-mode");
  els.appShell.classList.add("locked");
  els.landingScreen?.classList.add("hidden");
  els.demoScreen?.classList.add("hidden");
  els.profileScreen.classList.remove("hidden");
  showVillageSelection();
}

function showVillageNameSetup() {
  els.familyWealthCard.classList.add("hidden");
  els.profileSignInHeading.classList.add("hidden");
  els.profileGrid.classList.add("hidden");
  els.profileActions.classList.add("hidden");
  els.emptyProfileMessage.classList.add("hidden");
  els.profileDebug?.classList.add("hidden");
  els.profileLoginForm.classList.add("hidden");
  els.createProfileForm.classList.add("hidden");
  els.villageNameForm.classList.remove("hidden");
  els.profileScreen.classList.add("first-use");
  els.villageNameInput.value = "";
  els.villageNameInput.focus();
}

function handleVillageNameSubmit(event) {
  event.preventDefault();
  saveVillageName(els.villageNameInput.value);
  renderVillageName();
  renderProfileCards();
  showProfileChooser();
}

function selectProfile(profileId) {
  const profile = profileStore.profiles[profileId];
  if (!profile) return;
  showProfileLogin(profileId);
}

function showProfileLogin(profileId) {
  const profile = profileStore.profiles[profileId];
  if (!profile) return;
  pendingProfileId = profileId;
  hideProfileOnboardingPanels();
  els.profileLoginForm.querySelector(".eyebrow").textContent = "Welcome back";
  els.profileLoginTitle.textContent = `${profile.emoji || "⭐"} ${profile.name}`;
  els.profileLoginPassword.value = "";
  els.profileLoginError.classList.add("hidden");
  els.profileLoginForm.classList.remove("hidden");
  els.profileLoginPassword.focus();
}

function handleProfileLogin(event) {
  event.preventDefault();
  const profile = profileStore.profiles[pendingProfileId];
  if (!profile || els.profileLoginPassword.value !== profile.password) {
    els.profileLoginError.textContent = "Incorrect password.";
    els.profileLoginError.classList.remove("hidden");
    els.profileLoginPassword.select();
    return;
  }
  completeProfileLogin(pendingProfileId);
}

function completeProfileLogin(profileId) {
  const profile = profileStore.profiles[profileId];
  if (!profile) return;
  currentProfileId = profileId;
  pendingProfileId = "";
  profileStore.currentProfile = profileId;
  const group = getCurrentGroup();
  if (group && !group.memberIds.includes(profileId) && group.memberIds.length < 6) group.memberIds.push(profileId);
  progress = profile.progress;
  vocabularyProgress = profile.vocabularyProgress;
  articleProgress = profile.articleProgress;
  nounVerbProgress = profile.nounVerbProgress;
  meaningMatchProgress = profile.meaningMatchProgress;
  prepositionProgress = profile.prepositionProgress;
  recentMeaningMatchItems = normalizeRecentItemList(profile.recentMeaningMatchItems, MEANING_MATCH_RECENT_BUFFER);
  applyProfileSettings(profile.settings);
  saveProfileStore();
  els.currentProfileLabel.textContent = profile.name;
  renderGroupSelectors();
  els.profileScreen.classList.add("hidden");
  els.profileLoginForm.classList.add("hidden");
  els.appShell.classList.remove("locked");
  updateFilterOptions();
  currentIndex = 0;
  applyModeAndFilter();
  showDashboard();
}

function getCurrentProfile() {
  return profileStore.profiles[currentProfileId || profileStore.currentProfile] || null;
}

function applyProfileSettings(settings) {
  els.modeSelect.value = settings.mode || "de-en";
  updateFilterOptions();
  els.filterSelect.value = getValidFilterValue(settings.filter || "all");
  els.startSelect.value = settings.start || "all";
  els.orderSelect.value = settings.order || "alphabetical";
}

function saveSettings() {
  if (!currentProfileId) return;
  const profile = getCurrentProfile();
  profile.settings = {
    mode: els.modeSelect.value,
    filter: els.filterSelect.value,
    start: els.startSelect.value,
    order: els.orderSelect.value
  };
  saveProfileStore();
}

function showDashboard() {
  discardIncompleteChallengeSession();
  currentView = "dashboard";
  els.appShell.classList.remove("onboarding-mode");
  els.appShell.classList.remove("landing-mode");
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  setChallengeBackButtons(false, false);
  renderDashboard();
  els.landingScreen?.classList.add("hidden");
  els.demoScreen?.classList.add("hidden");
  els.dashboardScreen.classList.remove("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
}

function showLandingScreen() {
  discardIncompleteChallengeSession();
  currentView = "landing";
  currentProfileId = "";
  pendingProfileId = "";
  els.profileScreen.classList.add("hidden");
  els.appShell.classList.remove("locked");
  els.appShell.classList.remove("onboarding-mode");
  els.appShell.classList.add("landing-mode");
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  setChallengeBackButtons(false, false);
  els.landingScreen?.classList.remove("hidden");
  els.demoScreen?.classList.add("hidden");
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
}

function showDemoScreen() {
  discardIncompleteChallengeSession();
  currentView = "demo";
  demoPageIndex = 0;
  currentProfileId = "";
  pendingProfileId = "";
  els.profileScreen.classList.add("hidden");
  els.appShell.classList.remove("locked");
  els.appShell.classList.remove("landing-mode");
  els.appShell.classList.add("onboarding-mode");
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  setChallengeBackButtons(false, false);
  els.landingScreen?.classList.add("hidden");
  els.demoScreen?.classList.remove("hidden");
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  renderOnboardingPage();
}

function renderOnboardingPage() {
  const page = ONBOARDING_PAGES[demoPageIndex] || ONBOARDING_PAGES[0];
  if (els.demoIllustration) {
    const image = document.createElement("img");
    image.src = page.illustration;
    image.alt = page.illustrationAlt || "";
    image.loading = "eager";
    els.demoIllustration.replaceChildren(image);
  }
  if (els.demoTitle) els.demoTitle.textContent = page.title;
  if (els.demoBody) {
    const bodyNodes = page.sections
      ? page.sections.map(([heading, text]) => {
        const section = document.createElement("section");
        section.className = "onboarding-mini-section";
        const title = document.createElement("h3");
        title.textContent = heading;
        const copy = document.createElement("p");
        copy.textContent = text;
        section.append(title, copy);
        return section;
      })
      : page.body.map((text) => createTextElement("p", "", text));
    els.demoBody.replaceChildren(...bodyNodes);
  }
  if (els.demoProgress) els.demoProgress.textContent = page.progress;
  if (els.demoBack) els.demoBack.textContent = page.backLabel;
  if (els.demoNext) els.demoNext.textContent = page.nextLabel;
}

function moveDemoPage(direction) {
  const nextIndex = demoPageIndex + direction;
  if (nextIndex < 0) {
    completeDemoScreen();
    return;
  }
  demoPageIndex = clamp(nextIndex, 0, ONBOARDING_PAGES.length - 1);
  renderOnboardingPage();
}

function completeDemoScreen() {
  completeDeviceOnboarding();
  showProfileScreen();
}

function skipLandingToVillageSelection() {
  completeDeviceOnboarding();
  showProfileScreen();
}

function handleDemoNext() {
  if (demoPageIndex >= ONBOARDING_PAGES.length - 1) {
    completeDemoScreen();
    return;
  }
  moveDemoPage(1);
}

function handleDemoBack() {
  if (demoPageIndex === 0) {
    completeDemoScreen();
    return;
  }
  moveDemoPage(-1);
}

function showCoinChallenges() {
  discardIncompleteChallengeSession();
  currentView = "coin-challenges";
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  setChallengeBackButtons(false, false);
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.remove("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  if (els.challengeSelectedLevel) els.challengeSelectedLevel.textContent = selectedLearningLevel;
  if (els.articleSelectedLevel) els.articleSelectedLevel.textContent = selectedLearningLevel;
  if (els.challengeSelectedCategory) els.challengeSelectedCategory.textContent = getFlashcardCategoryLabel(selectedChallengeCategory);
  document.querySelectorAll('input[name="challengeCategory"]').forEach((input) => {
    input.checked = input.value === selectedChallengeCategory;
  });
  renderCoinChallenges();
  renderVillageName();
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
}

function showAchievementCollection(page = "austria-album") {
  discardIncompleteChallengeSession();
  currentView = page;
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  setChallengeBackButtons(false, false);
  renderAchievementCollection(page);
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.remove("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
}

function showStudyView(options = {}) {
  currentView = "study";
  const isArticleQuiz = els.modeSelect.value === "article-quiz";
  const cleanArticlePractice = (els.modeSelect.value === "article" || isArticleQuiz) && !options.focusSearch && !options.openStats;
  setChallengeBackButtons(
    (cleanArticlePractice && !isArticleQuiz) || (isArticleQuiz && challengeSession.type === "articles"),
    false
  );
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.appShell.classList.toggle("clean-article-practice", cleanArticlePractice);
  els.appShell.classList.toggle("clean-quiz-mode", cleanArticlePractice);
  els.appShell.classList.toggle("article-quiz-mode", isArticleQuiz);
  els.appShell.classList.remove("meaning-match-mode");
  els.controlPanel.classList.toggle("hidden", options.hideControls === true || cleanArticlePractice);
  els.searchPanel.classList.toggle("hidden", cleanArticlePractice);
  els.statsGrid.classList.toggle("hidden", cleanArticlePractice);
  els.studyStage.classList.remove("hidden");
  els.actionBar.classList.toggle("hidden", isArticleQuiz);
  if (options.focusSearch) {
    window.setTimeout(() => els.wordSearchInput.focus(), 0);
  }
  if (options.openStats) {
    document.querySelector(".detailed-stats")?.setAttribute("open", "");
  } else {
    document.querySelector(".detailed-stats")?.removeAttribute("open");
  }
}

function showNounVerbQuiz() {
  currentView = "noun-verb";
  setChallengeBackButtons(false, true);
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.add("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.actionBar.classList.remove("hidden");
  els.nounVerbStage.classList.remove("hidden");
  applyNounVerbSmartOrder();
  resumeNounVerbPosition();
  generateNounVerbQuestion("open quiz", nounVerbCurrentIndex);
  renderNounVerbQuiz();
}

function showVocabularyReviewQuiz() {
  currentView = "vocabulary-review";
  setChallengeBackButtons(false, true);
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.add("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  els.nounVerbStage.classList.remove("hidden");
  applyVocabularyReviewOrder();
  generateVocabularyReviewQuestion("open quiz", vocabularyReviewCurrentIndex);
  renderVocabularyReviewQuiz();
}

function showMeaningMatchQuiz() {
  currentView = "meaning-match";
  setChallengeBackButtons(false, true);
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.add("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.add("meaning-match-mode");
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.actionBar.classList.remove("hidden");
  els.nounVerbStage.classList.remove("hidden");
  applyMeaningMatchSmartOrder();
  generateMeaningMatchQuestion("open quiz", meaningMatchCurrentIndex);
  renderMeaningMatchQuiz();
}

function showPrepositionQuiz() {
  currentView = "prepositions";
  setChallengeBackButtons(false, true);
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.add("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.actionBar.classList.remove("hidden");
  els.nounVerbStage.classList.remove("hidden");
  applyPrepositionOrder();
  generatePrepositionQuestion("open quiz", prepositionCurrentIndex);
  renderPrepositionQuiz();
}

function setChallengeBackButtons(showStudyButton, showNounVerbButton) {
  els.studyChallengeBack.classList.toggle("hidden", !showStudyButton);
  els.nounVerbChallengeBack.classList.toggle("hidden", !showNounVerbButton);
}

function returnToCoinChallenges(event) {
  event?.preventDefault();
  saveCurrentPosition();
  closeSettingsMenu();
  showCoinChallenges();
}

function renderDashboard() {
  if (!currentProfileId) return;
  const profile = getCurrentProfile();
  prepareProfileDailyState(profile);
  checkAchievements("dashboard");
  const familySummary = getFamilyWealthSummary();
  profile.positions = normalizePositions(profile.positions);
  els.dashboardWelcome.textContent = `Welcome back, ${profile.name}`;
  renderVillageName();
  els.levelCoins.textContent = normalizeCoinCount(profile.coins);
  els.dashboardFamilyCoins.textContent = familySummary.totalCoins;
  renderProgressCards(profile);
  renderAchievementPreview(getAchievementStates());
  renderRewardPreviews(profile, familySummary.totalCoins);
  renderHouseholdMembers();
  if (!pendingCelebrations.length) checkVillageNamingCeremony();
  saveProfileStore();
  showNextPendingCelebration();
}

function renderProgressCards(profile) {
  if (els.dashboardStreak) {
    const streak = getDisplayStreak(profile).current;
    els.dashboardStreak.textContent = streak > 0 ? `${streak} ${streak === 1 ? "Day" : "Days"}` : "No streak yet";
  }
  if (els.dashboardChallengeStatus) {
    const challenge = getDailyChallengeForDate(profile.dailyChallenge.date);
    const progress = getDailyChallengeProgress(profile.dailyChallenge, challenge);
    els.dashboardChallengeStatus.textContent = profile.dailyChallenge.completed
      ? "Completed today"
      : `${progress.current} / ${challenge.goal}`;
  }
  if (els.dashboardChallengesCompleted) {
    els.dashboardChallengesCompleted.textContent = normalizeCounter(profile.challengeSessionsCompleted);
  }
}

function renderAchievementPreview(achievementStates = getAchievementStates()) {
  if (!els.achievementPreview) return;
  const earnedAchievements = achievementStates.filter(({ achievement, unlocked }) => unlocked && !achievement.testOnly);
  const latestAchievement = getRecentlyEarnedAchievements(achievementStates)[0]?.achievement || null;
  els.achievementPreview.replaceChildren(
    createTextElement("span", "reward-preview-count", `${earnedAchievements.length} earned`),
    createRewardPreviewLatest(latestAchievement ? `${latestAchievement.icon} ${latestAchievement.name}` : "None Yet")
  );
}

function renderRewardPreviews(profile = getCurrentProfile(), sharedCoins = getGroupCoinTotal()) {
  if (!profile) return;
  const unlockedCurrentAustriaIds = getAustriaAlbumUnlockedRewardIds(profile, true);
  const unlockedVillage = getUnlockedRewards(VILLAGE_ALBUM_REWARDS, sharedCoins);
  const townCenter = getTownCenterProgress(sharedCoins);
  if (els.austriaAlbumPreview) {
    const latestAustriaReward = getLatestRewardById(AUSTRIA_ALBUM_REWARDS, unlockedCurrentAustriaIds);
    els.austriaAlbumPreview.replaceChildren(
      createTextElement("span", "reward-preview-count", `${unlockedCurrentAustriaIds.length} / ${AUSTRIA_ALBUM_REWARDS.length} unlocked`),
      createRewardPreviewLatest(latestAustriaReward ? getRewardDisplayName(latestAustriaReward) : "None Yet")
    );
  }
  renderDashboardTownCenter(townCenter, sharedCoins);
  if (els.villageAlbumPreview) {
    const latestVillageReward = unlockedVillage[unlockedVillage.length - 1] || null;
    els.villageAlbumPreview.replaceChildren(
      createTextElement("span", "reward-preview-count", `${unlockedVillage.length} / ${VILLAGE_ALBUM_REWARDS.length} unlocked`),
      createRewardPreviewLatest(latestVillageReward ? getRewardDisplayName(latestVillageReward) : "None Yet")
    );
  }
}

function renderDashboardTownCenter(townCenter, sharedCoins) {
  if (!townCenter?.current) return;
  const stageName = getTownCenterStageName(townCenter.current);
  if (els.townCenterDashboardStage) els.townCenterDashboardStage.textContent = stageName;
  if (els.townCenterDashboardStageCount) els.townCenterDashboardStageCount.textContent = `Stage ${townCenter.current.stage} / ${TOWN_CENTER_STAGES.length}`;
  if (els.townCenterDashboardImage) {
    setTownCenterImage(els.townCenterDashboardImage, townCenter.current);
  }
}

function getLatestRewardById(rewards, unlockedIds) {
  const rewardById = new Map(rewards.map((reward) => [reward.id, reward]));
  return [...normalizeRewardIdList(unlockedIds)].reverse()
    .map((rewardId) => rewardById.get(rewardId))
    .find(Boolean) || null;
}

function getRewardDisplayName(reward) {
  return `${reward.icon || reward.image} ${reward.title}`;
}

function createRewardPreviewLatest(value) {
  const wrapper = document.createElement("span");
  wrapper.className = "reward-preview-latest";
  wrapper.replaceChildren(
    createTextElement("span", "", "Latest:"),
    createTextElement("strong", "", value)
  );
  return wrapper;
}

function createRewardPreviewMetric(label, value) {
  const wrapper = document.createElement("span");
  wrapper.className = "reward-preview-metric";
  wrapper.replaceChildren(
    createTextElement("span", "", label),
    createTextElement("strong", "", value)
  );
  return wrapper;
}

function renderSettingsPanel() {
  renderVillageName();
  const profile = getCurrentProfile();
  const villageHasName = hasVillageName();
  if (els.settingsVillageNameInput) {
    els.settingsVillageNameInput.value = villageHasName ? getVillageName() : "";
    els.settingsVillageNameInput.placeholder = villageHasName ? getVillageName() : "Unlocked after Village Naming Ceremony";
    els.settingsVillageNameInput.disabled = !villageHasName;
  }
  if (els.saveVillageName) {
    els.saveVillageName.disabled = !villageHasName;
  }
  if (els.settingsProfileName) {
    els.settingsProfileName.textContent = profile?.name || "No profile";
  }
  if (els.settingsProfileNameInput) {
    els.settingsProfileNameInput.value = profile?.name || "";
  }
}

function renderHouseholdMembers() {
  if (!els.householdList) return;
  const rows = getOrderedVillageMembers();

  els.householdList.replaceChildren(
    ...rows.map((profile) => {
      const card = document.createElement("article");
      card.className = "village-member-card";
      card.classList.toggle("current", profile.id === currentProfileId);
      card.replaceChildren(
        createTextElement("span", "village-member-avatar", profile.emoji || "⭐"),
        createTextElement("strong", "village-member-name", profile.name),
        createTextElement("span", "village-member-coins", `${normalizeCoinCount(profile.coins)} coins`),
        createTextElement("span", "village-member-status", getVillageMemberStatus(profile))
      );
      return card;
    })
  );
}

function getOrderedVillageMembers() {
  const profiles = getCurrentGroupProfiles();
  const current = profiles.filter((profile) => profile.id === currentProfileId);
  const others = profiles.filter((profile) => profile.id !== currentProfileId);
  return [...current, ...others];
}

function getVillageMemberStatus(profile) {
  const streak = getDisplayStreak(profile).current;
  if (streak > 0) return `${streak}-day streak`;
  const coins = normalizeCoinCount(profile.coins);
  if (coins > 0) return "Active today";
  return "Just started";
}

function renderCoinChallenges() {
  renderChallengeMasteryProgress();
  renderArticleMasteryProgress();
}

function getChallengeVocabularyDeck(level = selectedLearningLevel, category = selectedChallengeCategory) {
  return getVocabularyChallengeCards(level)
    .filter((card) => getFlashcardCategory(card) === category);
}

function getChallengeMasteryProgress(level = selectedLearningLevel, category = selectedChallengeCategory) {
  const deckCards = getChallengeVocabularyDeck(level, category);
  const total = deckCards.length;
  const progressMap = getCurrentProfile()?.vocabularyProgress || vocabularyProgress || {};
  const counts = deckCards.reduce(
    (summary, card) => {
      const correctCount = normalizeCounter(progressMap[card.id]?.correctCount);
      if (correctCount >= 1) summary.correctOnce += 1;
      if (correctCount >= 3) summary.mastered += 1;
      return summary;
    },
    { correctOnce: 0, mastered: 0 }
  );
  return {
    total,
    correctOnce: counts.correctOnce,
    mastered: counts.mastered,
    remaining: Math.max(total - counts.mastered, 0)
  };
}

function renderChallengeMasteryProgress() {
  const categoryLabel = getFlashcardCategoryLabel(selectedChallengeCategory);
  const summary = getChallengeMasteryProgress();
  if (els.challengeSelectedCategory) els.challengeSelectedCategory.textContent = categoryLabel;
  if (els.challengeSelectedLevel) els.challengeSelectedLevel.textContent = selectedLearningLevel;
  if (els.challengeMasteryDeck) els.challengeMasteryDeck.textContent = `${selectedLearningLevel} • ${categoryLabel}`;
  if (els.challengeCorrectOnce) els.challengeCorrectOnce.textContent = `${summary.correctOnce} / ${summary.total}`;
  if (els.challengeMasteredCount) els.challengeMasteredCount.textContent = `${summary.mastered} / ${summary.total}`;
  if (els.challengeRemainingMastery) els.challengeRemainingMastery.textContent = `${summary.remaining} / ${summary.total}`;
}

function getArticleMasteryProgress(level = selectedLearningLevel) {
  const deckCards = getArticleChallengeCards(level);
  const total = deckCards.length;
  const progressMap = getCurrentProfile()?.articleProgress || articleProgress || {};
  const counts = deckCards.reduce(
    (summary, card) => {
      const correctCount = normalizeCounter(progressMap[card.id]?.articleCorrectCount);
      if (correctCount >= 1) summary.correctOnce += 1;
      if (correctCount >= 3) summary.mastered += 1;
      return summary;
    },
    { correctOnce: 0, mastered: 0 }
  );
  return {
    total,
    correctOnce: counts.correctOnce,
    mastered: counts.mastered,
    remaining: Math.max(total - counts.mastered, 0)
  };
}

function renderArticleMasteryProgress() {
  const summary = getArticleMasteryProgress();
  if (els.articleSelectedLevel) els.articleSelectedLevel.textContent = selectedLearningLevel;
  if (els.articleMasteryDeck) els.articleMasteryDeck.textContent = `${selectedLearningLevel} • Articles`;
  if (els.articleCorrectOnce) els.articleCorrectOnce.textContent = `${summary.correctOnce} / ${summary.total}`;
  if (els.articleMasteredCount) els.articleMasteredCount.textContent = `${summary.mastered} / ${summary.total}`;
  if (els.articleRemainingMastery) els.articleRemainingMastery.textContent = `${summary.remaining} / ${summary.total}`;
}

function renderChallengeProgress(barEl, labelEl, summary) {
  if (!barEl || !labelEl) return;
  const safeSummary = {
    new: normalizeCounter(summary?.new),
    learned: normalizeCounter(summary?.learned),
    mastered: normalizeCounter(summary?.mastered)
  };
  const total = safeSummary.new + safeSummary.learned + safeSummary.mastered;
  const learnedPercent = total ? Math.round((safeSummary.learned / total) * 100) : 0;
  const masteredPercent = total ? Math.round((safeSummary.mastered / total) * 100) : 0;
  const newPercent = Math.max(0, 100 - learnedPercent - masteredPercent);

  barEl.replaceChildren(
    createProgressSegment("progress-new", newPercent, "New"),
    createProgressSegment("progress-learned", learnedPercent, "Learned"),
    createProgressSegment("progress-mastered", masteredPercent, "Mastered")
  );
  labelEl.textContent = total
    ? `Learned ${learnedPercent}% · Mastered ${masteredPercent}%`
    : "No questions loaded yet";
  barEl.setAttribute(
    "aria-label",
    `New ${newPercent}%, learned ${learnedPercent}%, mastered ${masteredPercent}%`
  );
}

function createProgressSegment(className, percent, label) {
  const segment = document.createElement("span");
  segment.className = className;
  segment.style.width = `${percent}%`;
  segment.title = `${label}: ${percent}%`;
  return segment;
}

function renderCoinLeaderboard() {
  if (!els.leaderboardList) return;
  const medals = ["🥇", "🥈", "🥉"];
  const rows = LEADERBOARD_PROFILE_IDS
    .map((profileId) => profileStore.profiles[profileId])
    .filter(Boolean)
    .sort((first, second) => normalizeCoinCount(second.coins) - normalizeCoinCount(first.coins));

  els.leaderboardList.replaceChildren(
    ...rows.map((profile, index) => {
      const row = document.createElement("div");
      const level = getCoinLevel(profile.coins);
      row.className = "leaderboard-row";
      row.classList.toggle("current", profile.id === currentProfileId);
      row.replaceChildren(
        createTextElement("span", "leaderboard-rank", medals[index] || ""),
        createAvatarElement(profile, "leaderboard-avatar"),
        createLeaderboardProfile(profile, level),
        createTextElement("strong", "", `${normalizeCoinCount(profile.coins)} coins`)
      );
      return row;
    })
  );
}

function renderAchievements() {
  if (!profileStore || !currentProfileId) return;
  renderDashboardAchievements(getAchievementStates());
}

function renderAchievementCollection(page = "austria-album") {
  if (!els.achievementsGrid || !profileStore || !currentProfileId) return;
  renderRewardsPage(page);
}

function renderRewardsPage(page = "austria-album") {
  const profile = getCurrentProfile();
  if (!profile) return;
  const sharedCoins = getGroupCoinTotal();
  const unlockedCurrentAustriaIds = getAustriaAlbumUnlockedRewardIds(profile, true);
  const unlockedVillage = getUnlockedRewards(VILLAGE_ALBUM_REWARDS, sharedCoins);
  const townCenter = getTownCenterProgress(sharedCoins);
  if (els.collectionNavigation) {
    els.collectionNavigation.classList.toggle("hidden", page === "town-center");
    els.collectionNavigation.querySelectorAll("button[data-dashboard-action]").forEach((button) => {
      button.classList.toggle("active", button.dataset.dashboardAction === page);
    });
  }
  if (page === "achievements") {
    const achievementStates = getAchievementStates().filter(({ achievement }) => !achievement.testOnly);
    const earnedCount = achievementStates.filter(({ unlocked }) => unlocked).length;
    els.rewardPageTitle.textContent = "Achievements";
    els.rewardPageSummary.textContent = `${earnedCount} earned`;
    els.achievementsGrid.replaceChildren(
      createRewardSection(
        "Achievements",
        `${earnedCount} earned`,
        achievementStates.map(({ achievement, unlocked, progress }) => createAchievementCard(achievement, unlocked, progress)),
        earnedCount === 0 ? "Your learning milestones will appear here as you study." : ""
      )
    );
    return;
  }
  if (page === "town-center") {
    els.rewardPageTitle.textContent = `🏡 ${getVillageName()} Town Center`;
    els.rewardPageSummary.textContent = `Current Stage: ${townCenter.current.title}`;
    els.achievementsGrid.replaceChildren(createTownCenterPage(townCenter, sharedCoins));
    return;
  }
  if (page === "village-album") {
    els.rewardPageTitle.textContent = `${getVillageName()} Village Memories`;
    els.rewardPageSummary.textContent = `Unlocked: ${unlockedVillage.length} / ${VILLAGE_ALBUM_REWARDS.length}`;
    els.achievementsGrid.replaceChildren(
      createRewardSection(
        "Village Memories",
        `Unlocked: ${unlockedVillage.length} / ${VILLAGE_ALBUM_REWARDS.length}`,
        VILLAGE_ALBUM_REWARDS.map((reward) => createVillageMemoryCard(reward, sharedCoins >= reward.coins)),
        unlockedVillage.length === 0 ? "Shared village memories will appear here as your village grows." : ""
      )
    );
    return;
  }
  els.rewardPageTitle.textContent = "My Austria Album";
  els.rewardPageSummary.textContent = `Unlocked: ${unlockedCurrentAustriaIds.length} / ${AUSTRIA_ALBUM_REWARDS.length}`;
  els.achievementsGrid.replaceChildren(
    createRewardSection(
      "My Austria Album",
      `Unlocked: ${unlockedCurrentAustriaIds.length} / ${AUSTRIA_ALBUM_REWARDS.length}`,
      AUSTRIA_ALBUM_REWARDS.map((reward) => createAustriaAlbumCard(reward, unlockedCurrentAustriaIds.includes(reward.id))),
      unlockedCurrentAustriaIds.length === 0 ? "Austria adventures will appear here as you earn them." : ""
    )
  );
}

function getUnlockedCurrentRewardIds(rewards, unlockedIds) {
  const currentIds = new Set(rewards.map((reward) => reward.id));
  return normalizeRewardIdList(unlockedIds).filter((rewardId) => currentIds.has(rewardId));
}

function getUnlockedRewards(rewards, coins) {
  return rewards.filter((reward) => normalizeCoinCount(coins) >= reward.coins);
}

function getAustriaAlbumUnlockedRewardIds(profileOrGroup, backfillFromCoins = false) {
  const target = profileOrGroup;
  const unlockedIds = getUnlockedCurrentRewardIds(AUSTRIA_ALBUM_REWARDS, target?.austriaAlbumSeenRewards);
  if (backfillFromCoins && target) target.austriaAlbumSeenRewards = unlockedIds;
  return unlockedIds;
}

function getAustriaAlbumUnlockedCount(profileOrGroup, includeCoinProgress = false) {
  if (!profileOrGroup) return 0;
  return getAustriaAlbumUnlockedRewardIds(profileOrGroup, includeCoinProgress).length;
}

function getTownCenterProgress(sharedCoins) {
  const coins = normalizeCoinCount(sharedCoins);
  const current = [...TOWN_CENTER_STAGES]
    .reverse()
    .find((stage) => coins >= stage.coins) || TOWN_CENTER_STAGES[0];
  const next = TOWN_CENTER_STAGES.find((stage) => stage.coins > coins) || null;
  const previousThreshold = current.coins;
  const nextThreshold = next?.coins || current.coins;
  const stageSpan = Math.max(nextThreshold - previousThreshold, 1);
  const progressPercent = next
    ? Math.min(Math.max(((coins - previousThreshold) / stageSpan) * 100, 0), 100)
    : 100;
  const coinsRemaining = next ? Math.max(next.coins - coins, 0) : 0;
  return { current, next, coins, coinsRemaining, progressPercent };
}

function getTownCenterStageName(stage) {
  return `${stage.icon} ${stage.title}`;
}

function getTownCenterImageSrc(stage) {
  const stageNumber = Math.min(Math.max(Number(stage?.stage) || 1, 1), 5);
  return `assets/town-center-stage-${stageNumber}.png`;
}

function setTownCenterImage(image, stage) {
  if (!image) return;
  const imagePath = getTownCenterImageSrc(stage);
  image.classList.remove("is-missing");
  image.alt = `${stage?.title || "Town Center"} Town Center`;
  image.onerror = () => {
    image.classList.add("is-missing");
    image.removeAttribute("src");
  };
  image.src = imagePath;
}

function createRewardSection(title, summary, cards, emptyNote = "") {
  const section = document.createElement("section");
  section.className = "reward-section";
  const heading = document.createElement("div");
  heading.className = "reward-section-heading";
  heading.replaceChildren(
    createTextElement("h3", "", title),
    createTextElement("p", "", summary)
  );
  const grid = document.createElement("div");
  grid.className = "reward-card-grid";
  grid.replaceChildren(...cards);
  const children = [heading];
  if (emptyNote) children.push(createTextElement("p", "reward-section-empty-note", emptyNote));
  children.push(grid);
  section.replaceChildren(...children);
  return section;
}

function createRewardCard(reward, unlocked, requirementText) {
  const card = document.createElement("article");
  card.className = "reward-card";
  card.classList.toggle("unlocked", unlocked);
  card.classList.toggle("locked", !unlocked);
  const children = [
    createRewardImageElement(reward, unlocked),
    createTextElement("strong", "", unlocked ? reward.title : "Locked"),
    createTextElement("span", "", unlocked ? reward.description : `Unlocks at ${requirementText}`)
  ];
  if (unlocked && reward.category) {
    children.splice(2, 0, createTextElement("span", "reward-category", reward.category));
  }
  card.replaceChildren(...children);
  return card;
}

function createAustriaAlbumCard(reward, unlocked) {
  const card = createRewardCard(reward, unlocked, `${reward.coins} Coins`);
  card.classList.add("austria-album-card");
  if (!unlocked) return card;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open ${reward.title}`);
  card.addEventListener("click", () => showRewardDetail(reward, "My Austria Album", "← Back to Album"));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    showRewardDetail(reward, "My Austria Album", "← Back to Album");
  });
  return card;
}

function createVillageMemoryCard(reward, unlocked) {
  const card = createRewardCard(reward, unlocked, `${reward.coins} Shared Village Coins`);
  card.classList.add("village-memory-card");
  if (!unlocked) return card;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open ${reward.title}`);
  card.addEventListener("click", () => showRewardDetail(reward, "Village Memories", "← Back to Memories"));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    showRewardDetail(reward, "Village Memories", "← Back to Memories");
  });
  return card;
}

function createRewardImageElement(reward, unlocked) {
  if (!unlocked) return createTextElement("span", "reward-image-placeholder", "🔒");
  if (!isImagePath(reward.image)) return createTextElement("span", "reward-image-placeholder", reward.image || reward.icon || "");
  const wrapper = document.createElement("span");
  wrapper.className = "reward-image-placeholder reward-image-frame";
  const image = document.createElement("img");
  image.src = reward.image;
  image.alt = reward.title;
  image.loading = "lazy";
  image.onerror = () => {
    image.remove();
    wrapper.classList.add("is-missing");
    wrapper.textContent = reward.icon || "Memory";
  };
  wrapper.replaceChildren(image);
  return wrapper;
}

function isImagePath(value) {
  return typeof value === "string" && /\.(png|jpe?g|webp|gif)$/i.test(value);
}

function showRewardDetail(reward, source = "Village Memories", closeText = "← Back") {
  if (!reward || !els.memoryDetailModal) return;
  els.memoryDetailClose.textContent = closeText;
  els.memoryDetailSource.textContent = source;
  els.memoryDetailTitle.textContent = reward.title;
  els.memoryDetailDescription.textContent = reward.description;
  els.memoryDetailImage.replaceChildren(createRewardDetailImage(reward));
  els.memoryDetailModal.classList.remove("hidden");
}

function hideRewardDetail() {
  els.memoryDetailModal?.classList.add("hidden");
}

function createRewardDetailImage(reward) {
  if (!isImagePath(reward.image)) return createTextElement("span", "memory-detail-placeholder", reward.icon || "Memory");
  const image = document.createElement("img");
  image.src = reward.image;
  image.alt = reward.title;
  image.loading = "lazy";
  image.onerror = () => {
    image.remove();
    const fallback = createTextElement("span", "memory-detail-placeholder", reward.icon || "Memory");
    els.memoryDetailImage.replaceChildren(fallback);
  };
  return image;
}

function createTownCenterPage(progress, sharedCoins) {
  const current = progress.current;
  const next = progress.next;
  const coins = normalizeCoinCount(sharedCoins);
  const section = document.createElement("section");
  section.className = "reward-section town-center-page";

  const hero = document.createElement("article");
  hero.className = "town-center-hero";
  const media = document.createElement("div");
  media.className = "town-center-hero-media";
  const image = document.createElement("img");
  image.loading = "lazy";
  media.replaceChildren(image);
  setTownCenterImage(image, current);
  const details = document.createElement("div");
  details.className = "town-center-hero-details";
  details.replaceChildren(
    createTownCenterDetail("Current Stage:", getTownCenterStageName(current)),
    createTownCenterDetail("Stage:", `${current.stage} / ${TOWN_CENTER_STAGES.length}`),
    createTownCenterDetail("Village Coins:", coins),
    createTownCenterDetail("Next Upgrade:", next ? getTownCenterStageName(next) : "All stages unlocked"),
    createTownCenterDetail("Coins Remaining:", progress.coinsRemaining)
  );
  hero.replaceChildren(media, details);

  const progressBlock = document.createElement("div");
  progressBlock.className = "town-center-progress-block";
  const progressTrack = document.createElement("div");
  progressTrack.className = "town-center-progress-track";
  const progressFill = document.createElement("span");
  progressFill.style.width = `${progress.progressPercent}%`;
  progressTrack.replaceChildren(progressFill);
  progressBlock.replaceChildren(
    createTextElement("span", "reward-summary", "Progress to next upgrade"),
    progressTrack,
    createTextElement("p", "", next ? `${coins} / ${next.coins} Shared Village Coins` : "All stages complete")
  );

  const stageList = document.createElement("div");
  stageList.className = "town-center-stage-list";
  stageList.replaceChildren(
    createTextElement("h3", "", "Village Growth"),
    ...getVisibleTownCenterStages().map((stage) => {
      const stageCard = document.createElement("article");
      const unlocked = coins >= stage.coins;
      const isCurrent = current.id === stage.id;
      stageCard.className = "town-center-stage-card";
      stageCard.classList.toggle("unlocked", unlocked);
      stageCard.classList.toggle("current", isCurrent);
      stageCard.replaceChildren(
        createTextElement("span", "reward-summary", getTownCenterStageStatus(stage, coins, current)),
        createTextElement("strong", "", `Stage ${stage.stage}: ${stage.title}`),
        createTextElement("p", "", stage.description)
      );
      return stageCard;
    })
  );
  section.replaceChildren(hero, progressBlock, stageList);
  return section;
}

function createTownCenterDetail(label, value) {
  const wrapper = document.createElement("span");
  wrapper.replaceChildren(
    createTextElement("small", "", label),
    createTextElement("strong", "", value)
  );
  return wrapper;
}

function getVisibleTownCenterStages() {
  return TOWN_CENTER_STAGES.filter((stage) => stage.stage <= 5);
}

function getTownCenterStageStatus(stage, coins, current) {
  if (current?.id === stage.id) return "🌟 Current";
  if (coins >= stage.coins) return "✓ Unlocked";
  return "🔒 Locked";
}

function createTownCenterSection(progress, sharedCoins) {
  const current = progress.current;
  const next = progress.next;
  const section = document.createElement("section");
  section.className = "reward-section town-center-section";
  section.replaceChildren(
    createTextElement("h3", "", "Town Center"),
    createTextElement("p", "reward-summary", `Shared Village Coins: ${sharedCoins}`),
    createTownCenterCard("Current Level:", current),
    next
      ? createTownCenterCard("Next:", next)
      : createTextElement("p", "reward-summary", "All Version 0 town center stages unlocked.")
  );
  return section;
}

function createTownCenterCard(label, stage) {
  const card = document.createElement("article");
  card.className = "town-center-card";
  card.replaceChildren(
    createTextElement("span", "reward-summary", label),
    createTextElement("strong", "", `Stage ${stage.stage} - ${stage.title}`),
    createTextElement("span", "reward-image-placeholder", stage.icon),
    createTextElement("p", "", stage.description)
  );
  return card;
}

function getAchievementStates() {
  promoteFamilyAchievements(profileStore);
  const profile = getCurrentProfile();
  const profileUnlocked = new Set(getPersonalAchievementIds(profile));
  const familyUnlocked = new Set(getFamilyAchievementIds(profileStore));
  return ACHIEVEMENTS.map((achievement) => {
    const storedUnlocked = achievement.scope === "family"
      ? familyUnlocked.has(achievement.id)
      : profileUnlocked.has(achievement.id);
    const progress = getAchievementProgress(achievement, profile);
    const unlocked = storedUnlocked || progress.isComplete;
    return { achievement, unlocked, progress };
  });
}

function renderDashboardAchievements(achievementStates) {
  if (!els.recentAchievements || !els.nextAchievements) return;
  const recentAchievements = getRecentlyEarnedAchievements(achievementStates);
  const nextGoals = getNextGoalAchievements(achievementStates);

  els.recentAchievements.replaceChildren(
    ...(recentAchievements.length
      ? recentAchievements.map(({ achievement, unlocked, progress }) => createAchievementCard(achievement, unlocked, progress, { compact: true }))
      : [createEmptyAchievementCard("No achievements earned yet.")]
    )
  );

  els.nextAchievements.replaceChildren(
    ...(nextGoals.length
      ? nextGoals.map(({ achievement, unlocked, progress }) => createAchievementCard(achievement, unlocked, progress, { compact: true }))
      : [createEmptyAchievementCard("All current goals unlocked.")]
    )
  );
}

function createAchievementCard(achievement, unlocked, progress, options = {}) {
  const badge = document.createElement("article");
  badge.className = "achievement-badge";
  badge.classList.toggle("compact", options.compact === true);
  badge.classList.toggle("unlocked", unlocked);
  badge.classList.toggle("locked", !unlocked);
  badge.replaceChildren(
    createTextElement("span", "achievement-icon", unlocked ? `✓ ${achievement.icon}` : achievement.icon || "🔒"),
    createAchievementBody(achievement, unlocked, progress)
  );
  return badge;
}

function createEmptyAchievementCard(message) {
  const badge = document.createElement("article");
  badge.className = "achievement-badge compact locked";
  badge.replaceChildren(
    createTextElement("span", "achievement-icon", "○"),
    createTextElement("small", "", message)
  );
  return badge;
}

function getRecentlyEarnedAchievements(achievementStates) {
  const profile = getCurrentProfile();
  const personalOrder = getPersonalAchievementIds(profile);
  const familyOrder = getFamilyAchievementIds(profileStore);
  const recentIds = [...personalOrder, ...familyOrder].slice(-6).reverse();
  return recentIds
    .map((achievementId) => achievementStates.find(({ achievement, unlocked }) => achievement.id === achievementId && unlocked))
    .filter(Boolean)
    .filter(({ achievement }, index, list) => list.findIndex((item) => item.achievement.id === achievement.id) === index)
    .slice(0, 2);
}

function getNextGoalAchievements(achievementStates) {
  const lockedGoals = achievementStates
    .filter(({ achievement, unlocked, progress }) => !achievement.testOnly && !unlocked && progress.target > 0);
  const preferredGoals = [
    getClosestAchievementByMetric(lockedGoals, ["coins"]),
    getClosestAchievementByMetric(lockedGoals, ["familyCoins"]),
    getClosestAchievementByMetric(lockedGoals, ["articlesMastered", "nounVerbCorrect", "streak", "correctAnswers"])
  ].filter(Boolean);
  const fallbackGoals = lockedGoals
    .sort(compareAchievementProgress)
    .filter((goal) => !preferredGoals.some((preferred) => preferred.achievement.id === goal.achievement.id));
  return [...preferredGoals, ...fallbackGoals].slice(0, 2);
}

function getClosestAchievementByMetric(achievementStates, metrics) {
  return achievementStates
    .filter(({ achievement }) => metrics.includes(achievement.metric))
    .sort(compareAchievementProgress)[0] || null;
}

function compareAchievementProgress(first, second) {
  const firstRemaining = first.progress.target - first.progress.current;
  const secondRemaining = second.progress.target - second.progress.current;
  return firstRemaining - secondRemaining || second.progress.percent - first.progress.percent;
}

function createAchievementBody(achievement, unlocked, progress) {
  const body = document.createElement("div");
  const rewardText = achievement.reward > 0
    ? `Reward: +${achievement.reward} coins`
    : "Learning milestone";
  const children = [
    createTextElement("strong", "", achievement.name),
    createTextElement("span", "", achievement.description),
    createTextElement("small", "achievement-progress-text", progress.target > 0 ? `${progress.current} / ${progress.target}` : unlocked ? "Unlocked" : "Locked")
  ];
  if (progress.target > 0) children.push(createProgressBar(progress.percent));
  children.push(createTextElement("small", "", unlocked ? `Unlocked · ${rewardText}` : rewardText));
  body.replaceChildren(...children);
  return body;
}

function createProgressBar(percent) {
  const track = document.createElement("span");
  const fill = document.createElement("span");
  track.className = "achievement-progress";
  fill.style.width = `${clamp(percent, 0, 100)}%`;
  track.append(fill);
  return track;
}

function getAchievementProgress(achievement, profile = getCurrentProfile()) {
  const target = normalizeCounter(achievement.target);
  const current = getAchievementCurrentValue(achievement, profile);
  return {
    current: target > 0 ? Math.min(current, target) : current,
    raw: current,
    target,
    percent: target > 0 ? Math.min((current / target) * 100, 100) : 0,
    isComplete: target > 0 ? current >= target : false
  };
}

function getAchievementCurrentValue(achievement, profile = getCurrentProfile()) {
  if (achievement.metric === "correctAnswers") return hasAnyCorrectQuizAnswer(profile) ? 1 : 0;
  if (achievement.metric === "totalCorrectAnswers") return getTotalCorrectAnswerCount(profile);
  if (achievement.metric === "coins") return normalizeCoinCount(profile?.coins);
  if (achievement.metric === "streak") return normalizeCounter(profile?.streak?.current);
  if (achievement.metric === "articlesMastered") return getArticleSummary().mastered;
  if (achievement.metric === "nounVerbCorrect") return getNounVerbCorrectAnswerCount(profile);
  if (achievement.metric === "familyCoins") return getGroupCoinTotal();
  if (achievement.metric === "austriaAlbumRewards") return getAustriaAlbumUnlockedCount(profile, true);
  if (achievement.metric === "villageMemories") return getUnlockedRewards(VILLAGE_ALBUM_REWARDS, getGroupCoinTotal()).length;
  return 0;
}

function renderAchievementDebugPanel() {
  if (!els.debugCurrentProfile || !profileStore) return;
  promoteFamilyAchievements(profileStore);
  const profile = currentProfileId ? getCurrentProfile() : null;
  const personalAchievements = profile
    ? getPersonalAchievementIds(profile)
    : [];
  const familyAchievements = getFamilyAchievementIds(profileStore);

  els.debugCurrentProfile.textContent = profile?.name || "None";
  els.debugPersonalAchievements.textContent = formatDebugAchievementList(personalAchievements);
  els.debugFamilyAchievements.textContent = formatDebugAchievementList(familyAchievements);
  els.debugAchievementSource.textContent = hasCloudSyncConfig()
    ? "Firebase/Supabase + Local Storage"
    : "Local Storage";
}

function formatDebugAchievementList(achievementIds) {
  if (!achievementIds.length) return "None";
  return achievementIds
    .map((id) => getAchievementById(id)?.name || id)
    .join(", ");
}

function hasCloudSyncConfig() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_SYNC_TABLE);
}

function getAchievementById(achievementId) {
  return ACHIEVEMENTS.find((achievement) => achievement.id === achievementId) || null;
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function createLeaderboardProfile(profile, level) {
  const container = document.createElement("span");
  container.className = "leaderboard-profile";
  container.append(
    createTextElement("span", "leaderboard-name", profile.name),
    createTextElement("span", "leaderboard-level", `${level.icon} ${level.name}`)
  );
  return container;
}

function createAvatarElement(profile, extraClass = "") {
  const container = document.createElement("span");
  container.className = ["avatar-wrap", extraClass].filter(Boolean).join(" ");
  renderAvatar(container, profile);
  return container;
}

function renderAvatar(container, profile) {
  if (!container || !profile) return;
  container.replaceChildren();
  container.classList.remove("avatar-fallback");

  if (!profile.avatar) {
    container.textContent = profile.emoji;
    container.classList.add("avatar-fallback");
    return;
  }

  const image = document.createElement("img");
  image.src = profile.avatar;
  image.alt = "";
  image.width = 48;
  image.height = 48;
  image.addEventListener(
    "error",
    () => {
      container.replaceChildren(document.createTextNode(profile.emoji));
      container.classList.add("avatar-fallback");
    },
    { once: true }
  );
  container.appendChild(image);
}

function getCoinLevel(coinsValue) {
  const coins = normalizeCoinCount(coinsValue);
  return [...COIN_LEVELS].reverse().find((level) => coins >= level.min) || COIN_LEVELS[0];
}

function getLevelId(level) {
  return `coins-${level.min}`;
}

function getFamilyLevelId(level) {
  return `family-${level.min}`;
}

function getLevelProgressPercent(coinsValue, level) {
  const coins = normalizeCoinCount(coinsValue);
  if (!level.next) return 100;
  return Math.min(((coins - level.min) / (level.next - level.min)) * 100, 100);
}

function formatResumePosition(position, total) {
  if (!total) return 0;
  return Math.min(normalizePosition(position) + 1, total);
}

function prepareProfileDailyState(profile) {
  const today = getTodayKey();
  const todayChallenge = getDailyChallengeForDate(today);
  profile.dailyChallenge = normalizeDailyChallenge(profile.dailyChallenge);
  profile.streak = normalizeStreak(profile.streak);

  if (profile.dailyChallenge.date !== today || profile.dailyChallenge.challengeId !== todayChallenge.id) {
    profile.dailyChallenge = {
      date: today,
      challengeId: todayChallenge.id,
      articleQuestions: 0,
      correctArticleAnswers: 0,
      completed: false,
      rewardAwardedFor: ""
    };
  }

  if (profile.streak.activityDate !== today) {
    profile.streak.activityDate = today;
    profile.streak.articleQuestions = 0;
    profile.streak.vocabularyCards = 0;
  }

  if (profile.streak.lastQualifiedDate && getDayDistance(profile.streak.lastQualifiedDate, today) > 1) {
    profile.streak.current = 0;
  }
}

function getDisplayStreak(profile) {
  prepareProfileDailyState(profile);
  return {
    current: normalizeCounter(profile.streak.current),
    best: normalizeCounter(profile.streak.best)
  };
}

function handleDashboardAction(action) {
  if (action === "dashboard") {
    showDashboard();
    return;
  }
  if (action === "flashcards") {
    showFlashcardsEntry();
    return;
  }
  if (action === "challenges") {
    showChallengesEntry();
    return;
  }

  if (["achievements", "austria-album", "town-center", "village-album"].includes(action)) {
    showAchievementCollection(action);
    return;
  }

  if (action === "restart-vocabulary") {
    if (!confirmAndResetSavedPosition("vocabulary")) return;
    openStudyRoute({ mode: "de-en", filter: "all", resume: false });
    return;
  }

  if (action === "restart-articles") {
    if (!confirmAndResetSavedPosition("article")) return;
    openStudyRoute({ mode: "article", filter: "smartArticle", resume: false });
    return;
  }

  const routes = {
    continue: { mode: "de-en", filter: "all", resume: true },
    articles: { mode: "article", filter: "smartArticle", resume: true },
    "earn-coins": "challenges",
    "unknown-meanings": { mode: "de-en", filter: "unknownMeaning" },
    "unknown-articles": { mode: "article", filter: "newArticles" },
    search: { mode: "de-en", filter: "all", focusSearch: true },
    statistics: { mode: els.modeSelect.value, filter: els.filterSelect.value, openStats: true }
  };
  const route = routes[action];
  if (!route) return;
  if (route === "challenges") {
    showChallengesEntry();
    return;
  }
  openStudyRoute(route);
}

function showChallengesEntry() {
  showLevelSelection("challenges");
}

function showFlashcardsEntry() {
  const resumable = getMostRecentFlashcardSession();
  if (resumable) {
    selectedLearningLevel = resumable.level;
    flashcardStudyLevel = resumable.level;
    flashcardStudyCategory = resumable.category;
  }
  showLevelSelection("flashcards");
}

function getMostRecentFlashcardSession(level = "") {
  const profile = getFlashcardSessionProfile();
  const sessions = Object.entries(profile?.flashcardSessions || {})
    .map(([key, session]) => {
      const match = /^(A1|A2|B1)-(nouns|verbs|other)$/.exec(key);
      if (level && match?.[1] !== level) return null;
      if (!match || !session.deckIds.length) return null;
      const levelCards = getFlashcardCardsForLevel(match[1]);
      const validDeckIds = session.deckIds.filter((id) => levelCards.some((card) => card.id === id));
      if (!validDeckIds.length) return null;
      return {
        key,
        level: match[1],
        category: match[2],
        index: clamp(session.index, 0, validDeckIds.length - 1),
        total: validDeckIds.length,
        updatedAt: session.updatedAt || ""
      };
    })
    .filter(Boolean)
    .sort((first, second) => second.updatedAt.localeCompare(first.updatedAt));
  return sessions[0] || null;
}

function getPreferredFlashcardCategoryForLevel(level) {
  return getMostRecentFlashcardSession(level)?.category
    || (flashcardStudyLevel === level ? flashcardStudyCategory : "")
    || "nouns";
}

function renderLevelSelectionState() {
  els.levelSelectionScreen.querySelectorAll("button[data-learning-level]").forEach((button) => {
    const isSelected = button.dataset.learningLevel === selectedLearningLevel;
    button.classList.toggle("selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function resumePendingFlashcardSession() {
  const match = /^(A1|A2|B1)-(nouns|verbs|other)$/.exec(pendingFlashcardResumeKey);
  if (!match) {
    showLevelSelection("flashcards");
    return;
  }
  openFlashcardDeck(match[1], match[2]);
}

function openFlashcardDeck(level, category, { forceNew = false } = {}) {
  if (!LEARNING_LEVELS.includes(level) || !["nouns", "verbs", "other"].includes(category)) return;
  if (currentView === "learning-flashcards" && flashcardStudyCards.length) {
    saveCurrentFlashcardSession();
  }
  selectedLearningPath = "flashcards";
  selectedLearningLevel = level;
  flashcardStudyLevel = level;
  flashcardStudyCategory = category;
  loadOrCreateFlashcardSession(forceNew);
  currentView = "learning-flashcards";
  closeLearningDeckSelector();
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.remove("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  renderLearningFlashcard();
}

function showLevelSelection(path) {
  if (path === "challenges") discardIncompleteChallengeSession();
  selectedLearningPath = path;
  els.levelSelectionContext.textContent = path === "challenges" ? "Challenges" : "Flashcards";
  currentView = "level-selection";
  setChallengeBackButtons(false, false);
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.levelSelectionScreen.classList.remove("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  renderLevelSelectionState();
}

function chooseLearningLevel(level) {
  if (!["A1", "A2", "B1"].includes(level)) return;
  selectedLearningLevel = level;
  if (selectedLearningPath === "flashcards") {
    showFlashcardSetup();
    return;
  }
  if (selectedLearningPath === "challenges") {
    showCoinChallenges();
  }
}

function showFlashcardSetup() {
  currentView = "flashcard-setup";
  setChallengeBackButtons(false, false);
  flashcardStudyCategory = getPreferredFlashcardCategoryForLevel(selectedLearningLevel);
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.remove("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  els.flashcardSetupLevel.textContent = `${selectedLearningLevel} Flashcards`;
  els.flashcardSetupForm.querySelectorAll('input[name="flashcardCategory"]').forEach((input) => {
    input.checked = input.value === flashcardStudyCategory;
  });
}

function startLearningFlashcards() {
  const categoryInput = els.flashcardSetupForm.querySelector('input[name="flashcardCategory"]:checked');
  openFlashcardDeck(selectedLearningLevel, categoryInput?.value || "nouns");
}

function getFlashcardLevel(card) {
  if (LEARNING_LEVELS.includes(card.level)) return card.level;
  const index = Math.max(cards.findIndex((item) => item.id === card.id), 0);
  const sectionSize = Math.max(Math.ceil(cards.length / 3), 1);
  if (index < sectionSize) return "A1";
  if (index < sectionSize * 2) return "A2";
  return "B1";
}

function getFlashcardCategory(card) {
  if (card.wordType === "noun") return "nouns";
  if (card.wordType === "verb") return "verbs";
  if (card.wordType) return "other";
  if (card.isNoun) return "nouns";
  const word = String(card.word || "").trim();
  if (/^[a-zäöüß].*(en|ern|eln)$/.test(word)) return "verbs";
  return "other";
}

function getFlashcardCategoryLabel(category) {
  if (category === "nouns") return "Nouns";
  if (category === "verbs") return "Verbs";
  return "Other Words";
}

function renderLearningDeckSelector() {
  if (!els.learningDeckSelectorPanel) return;
  const deckGroups = LEARNING_LEVELS.map((level) => {
    const deckButtons = ["nouns", "verbs", "other"].map((category) => {
      const isActive = level === flashcardStudyLevel && category === flashcardStudyCategory;
      return `
        <button class="${isActive ? "active" : ""}" type="button" data-flashcard-deck-level="${level}" data-flashcard-deck-category="${category}">
          ${getFlashcardCategoryLabel(category)}
        </button>
      `;
    }).join("");
    return `
      <div class="learning-deck-selector-group">
        <strong>${level}</strong>
        <div>${deckButtons}</div>
      </div>
    `;
  }).join("");
  els.learningDeckSelectorPanel.innerHTML = `
    <h3>Choose Study Deck</h3>
    ${deckGroups}
  `;
}

function closeLearningDeckSelector() {
  els.learningDeckSelectorPanel?.classList.add("hidden");
  els.learningFlashcardSelection?.setAttribute("aria-expanded", "false");
}

function toggleLearningDeckSelector() {
  if (!els.learningDeckSelectorPanel) return;
  renderLearningDeckSelector();
  const isOpen = !els.learningDeckSelectorPanel.classList.contains("hidden");
  els.learningDeckSelectorPanel.classList.toggle("hidden", isOpen);
  els.learningFlashcardSelection.setAttribute("aria-expanded", String(!isOpen));
}

function buildLearningFlashcardOrder(cardList) {
  const candidates = cardList.map((card) => ({ card, weight: getFlashcardReviewWeight(card) }));
  const selected = [];
  while (candidates.length && selected.length < FLASHCARD_SESSION_SIZE) {
    const totalWeight = candidates.reduce((total, item) => total + item.weight, 0);
    let target = Math.random() * totalWeight;
    let selectedIndex = 0;
    for (let index = 0; index < candidates.length; index += 1) {
      target -= candidates[index].weight;
      if (target <= 0) {
        selectedIndex = index;
        break;
      }
    }
    selected.push(candidates.splice(selectedIndex, 1)[0].card);
  }
  return selected;
}

function getFlashcardReviewWeight(card) {
  const status = getMeaningStatus(card);
  if (status === "unknown") return 6;
  if (status === "unsure") return 4;
  if (status === "unrated") return 2;
  return 1;
}

function getFlashcardSessionKey() {
  return `${flashcardStudyLevel}-${flashcardStudyCategory}`;
}

function getFlashcardSessionProfile() {
  const profile = getCurrentProfile();
  if (!profile) return null;
  profile.flashcardSessions = normalizeFlashcardSessions(profile.flashcardSessions);
  return profile;
}

function getFlashcardCardsForLevel(level) {
  return levelDatasets[level]?.flashcards || [];
}

function getFlashcardCardsForDeck(level = flashcardStudyLevel, category = flashcardStudyCategory) {
  return getFlashcardCardsForLevel(level)
    .filter((card) => getFlashcardCategory(card) === category);
}

function loadOrCreateFlashcardSession(forceNew = false) {
  const profile = getFlashcardSessionProfile();
  const availableCards = getFlashcardCardsForDeck();
  const availableById = new Map(availableCards.map((card) => [card.id, card]));
  const key = getFlashcardSessionKey();
  const saved = profile?.flashcardSessions?.[key];
  const savedCards = saved?.deckIds?.map((id) => availableById.get(id)).filter(Boolean) || [];
  const canResume = !forceNew && savedCards.length && !saved.completed;

  if (canResume) {
    flashcardStudyCards = savedCards;
    flashcardStudyIndex = clamp(saved.index, 0, Math.max(savedCards.length - 1, 0));
    return;
  }

  flashcardStudyCards = buildLearningFlashcardOrder(availableCards);
  flashcardStudyIndex = 0;
  if (!profile) return;
  profile.flashcardSessions[key] = {
    deckIds: flashcardStudyCards.map((card) => card.id),
    index: 0,
    studiedIds: [],
    ratings: normalizeFlashcardRatings(saved?.ratings),
    studyDate: getTodayKey(),
    completed: false,
    updatedAt: new Date().toISOString()
  };
  saveProfileStore();
}

function saveCurrentFlashcardSession({ studiedCard = null, completed = false } = {}) {
  const profile = getFlashcardSessionProfile();
  if (!profile) return;
  const key = getFlashcardSessionKey();
  const existing = profile.flashcardSessions[key] || {};
  const today = getTodayKey();
  const studiedIds = new Set(existing.studyDate === today ? existing.studiedIds || [] : []);
  if (studiedCard?.id) studiedIds.add(studiedCard.id);
  profile.flashcardSessions[key] = {
    deckIds: flashcardStudyCards.map((card) => card.id),
    index: flashcardStudyIndex,
    studiedIds: Array.from(studiedIds),
    ratings: normalizeFlashcardRatings(existing.ratings),
    studyDate: today,
    completed,
    updatedAt: new Date().toISOString()
  };
  saveProfileStore();
}

function renderLearningFlashcard() {
  const card = flashcardStudyCards[flashcardStudyIndex];
  const hasCard = Boolean(card);
  els.learningFlashcard.classList.remove("hidden");
  els.flashcardCompletionCard.classList.add("hidden");
  els.learningFlashcardEmpty.classList.toggle("hidden", hasCard);
  els.learningFlashcardSelection.classList.toggle("hidden", !hasCard);
  els.learningFlashcardGerman.classList.toggle("hidden", !hasCard);
  els.learningFlashcardEnglish.classList.toggle("hidden", !hasCard);
  els.learningFlashcardCategory.classList.toggle("hidden", !hasCard);
  els.learningFlashcardExampleGroup.classList.toggle("hidden", !hasCard);
  els.flashcardStudyStats?.classList.toggle("hidden", !hasCard);
  els.learningFlashcardRatings.classList.toggle("hidden", !hasCard);
  els.learningFlashcardNavigation.classList.toggle("hidden", !hasCard);
  els.learningFlashcardCounter.textContent = hasCard
    ? `Card ${flashcardStudyIndex + 1} of ${flashcardStudyCards.length}`
    : "No cards";
  if (!card) {
    closeLearningDeckSelector();
    return;
  }
  const categoryLabel = getFlashcardCategoryLabel(flashcardStudyCategory);
  els.learningFlashcardSelection.textContent = `${flashcardStudyLevel} • ${categoryLabel} ▼`;
  els.learningFlashcardGerman.textContent = card.article ? `${card.article} ${card.word}` : card.word;
  els.learningFlashcardEnglish.textContent = card.english;
  els.learningFlashcardCategory.textContent = card.category || categoryLabel;
  els.learningFlashcardExample.textContent = card.example || "";
  els.learningFlashcardExampleGroup.classList.toggle("hidden", !card.example);
  renderLearningDeckSelector();
  renderFlashcardStudyStats();
  els.learningFlashcardPrevious.disabled = flashcardStudyIndex === 0;
  els.learningFlashcardNext.textContent = flashcardStudyIndex === flashcardStudyCards.length - 1 ? "Finish" : "Next";
}

function getCurrentFlashcardSession() {
  const profile = getFlashcardSessionProfile();
  return profile?.flashcardSessions?.[getFlashcardSessionKey()] || null;
}

function getFlashcardStudyStats() {
  const session = getCurrentFlashcardSession();
  const ratings = normalizeFlashcardRatings(session?.ratings);
  const deckCards = getFlashcardCardsForDeck();
  const stats = { known: 0, unsure: 0, unknown: 0, unseen: 0 };
  deckCards.forEach((card) => {
    const rating = ratings[card.id];
    if (rating === "known") stats.known += 1;
    else if (rating === "unsure") stats.unsure += 1;
    else if (rating === "unknown") stats.unknown += 1;
    else stats.unseen += 1;
  });
  return stats;
}

function renderFlashcardStudyStats() {
  const stats = getFlashcardStudyStats();
  if (els.flashcardStatsKnown) els.flashcardStatsKnown.textContent = stats.known;
  if (els.flashcardStatsUnsure) els.flashcardStatsUnsure.textContent = stats.unsure;
  if (els.flashcardStatsUnknown) els.flashcardStatsUnknown.textContent = stats.unknown;
  if (els.flashcardStatsUnseen) els.flashcardStatsUnseen.textContent = stats.unseen;
  const total = Math.max(stats.known + stats.unsure + stats.unknown + stats.unseen, 1);
  if (els.flashcardStatsKnownBar) els.flashcardStatsKnownBar.style.flexGrow = stats.known / total;
  if (els.flashcardStatsUnsureBar) els.flashcardStatsUnsureBar.style.flexGrow = stats.unsure / total;
  if (els.flashcardStatsUnknownBar) els.flashcardStatsUnknownBar.style.flexGrow = stats.unknown / total;
  if (els.flashcardStatsUnseenBar) els.flashcardStatsUnseenBar.style.flexGrow = stats.unseen / total;
}

function updateFlashcardStudyRating(card, rating) {
  const profile = getFlashcardSessionProfile();
  if (!profile || !card?.id) return;
  const key = getFlashcardSessionKey();
  const session = profile.flashcardSessions[key] || {};
  profile.flashcardSessions[key] = {
    ...session,
    ratings: {
      ...normalizeFlashcardRatings(session.ratings),
      [card.id]: normalizeMeaningStatus(rating)
    },
    updatedAt: new Date().toISOString()
  };
}

function rateLearningFlashcard(rating) {
  const card = flashcardStudyCards[flashcardStudyIndex];
  if (!card || !currentProfileId) return;
  updateFlashcardStudyRating(card, rating);
  progress[card.id] = {
    ...(progress[card.id] || {}),
    meaningStatus: normalizeMeaningStatus(rating),
    updatedAt: new Date().toISOString()
  };
  saveProgress();
  moveLearningFlashcard(1, card);
}

function moveLearningFlashcard(direction, studiedCard = null) {
  if (!flashcardStudyCards.length) return;
  if (direction < 0) {
    flashcardStudyIndex = Math.max(flashcardStudyIndex - 1, 0);
    saveCurrentFlashcardSession();
    renderLearningFlashcard();
    return;
  }
  const card = studiedCard || flashcardStudyCards[flashcardStudyIndex];
  if (flashcardStudyIndex >= flashcardStudyCards.length - 1) {
    saveCurrentFlashcardSession({ studiedCard: card, completed: true });
    showFlashcardCompletion();
    return;
  }
  flashcardStudyIndex += 1;
  saveCurrentFlashcardSession({ studiedCard: card });
  renderLearningFlashcard();
}

function showFlashcardCompletion() {
  const profile = getFlashcardSessionProfile();
  const session = profile?.flashcardSessions?.[getFlashcardSessionKey()];
  els.flashcardCompletionCount.textContent = normalizeCounter(session?.studiedIds?.length);
  currentView = "flashcard-complete";
  els.learningFlashcard.classList.add("hidden");
  els.flashcardCompletionCard.classList.remove("hidden");
}

function handleChallengeAction(action) {
  if (!["vocabulary-review", "articles"].includes(action)) return;
  showChallengeReady(action);
}

function showChallengeReady(action) {
  pendingChallengeAction = action;
  currentView = "challenge-ready";
  const isVocabulary = action === "vocabulary-review";
  els.challengeReadyLevel.textContent = isVocabulary
    ? `${selectedLearningLevel} • ${getFlashcardCategoryLabel(selectedChallengeCategory)} Challenge`
    : `${selectedLearningLevel} Challenge`;
  els.challengeReadyTitle.textContent = isVocabulary ? "Vocabulary" : "Articles";
  els.challengeReadyDescription.textContent = isVocabulary
    ? "Review German vocabulary."
    : "Practice der, die, das.";
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  els.challengeReadyScreen.classList.remove("hidden");
}

function beginPendingChallenge() {
  const action = pendingChallengeAction;
  pendingChallengeAction = "";
  const routes = {
    articles: { mode: "article-quiz", filter: "smartArticle", resume: true }
  };
  if (action === "vocabulary-review") {
    startChallengeSession("vocabulary", selectedLearningLevel);
    showVocabularyReviewQuiz();
    return;
  }
  const route = routes[action];
  if (!route) return;
  if (action === "articles") startChallengeSession("articles", selectedLearningLevel);
  openStudyRoute(route);
}

function createEmptyChallengeSession() {
  return {
    type: "",
    level: "",
    category: "",
    questionIds: [],
    answered: 0,
    correct: 0,
    coinsEarned: 0,
    complete: false
  };
}

function discardIncompleteChallengeSession() {
  if (challengeSession.type && !challengeSession.complete) {
    challengeSession = createEmptyChallengeSession();
  }
  pendingChallengeAction = "";
}

function startChallengeSession(type, level = selectedLearningLevel) {
  const questionCards = type === "articles"
    ? getArticleChallengeCards(level)
    : getChallengeVocabularyDeck(level, selectedChallengeCategory);
  challengeSession = {
    ...createEmptyChallengeSession(),
    type,
    level,
    category: type === "vocabulary" ? selectedChallengeCategory : "",
    questionIds: shuffleCards(questionCards).slice(0, CHALLENGE_QUESTION_COUNT).map((card) => card.id)
  };
}

function recordChallengeSessionAnswer(type, isCorrect) {
  if (challengeSession.type !== type || challengeSession.complete) return;
  challengeSession.answered = Math.min(challengeSession.answered + 1, CHALLENGE_QUESTION_COUNT);
  if (isCorrect) {
    challengeSession.correct += 1;
    challengeSession.coinsEarned += 1;
  }
}

function advanceChallengeSession(type, moveNext) {
  if (challengeSession.type !== type) {
    moveNext();
    return;
  }
  if (challengeSession.answered >= CHALLENGE_QUESTION_COUNT) {
    showChallengeResults();
    return;
  }
  moveNext();
}

function showChallengeResults() {
  if (!challengeSession.complete) {
    const profile = getCurrentProfile();
    if (profile) {
      profile.challengeSessionsCompleted = normalizeCounter(profile.challengeSessionsCompleted) + 1;
      saveProfileStore();
    }
  }
  challengeSession.complete = true;
  const correct = clamp(challengeSession.correct, 0, CHALLENGE_QUESTION_COUNT);
  const accuracy = Math.round((correct / CHALLENGE_QUESTION_COUNT) * 100);
  const challengeName = challengeSession.type === "articles" ? "Articles" : "Vocabulary";
  els.challengeResultsType.textContent = `${challengeSession.level || selectedLearningLevel} ${challengeName}`;
  els.challengeResultAccuracy.textContent = `${accuracy}%`;
  els.challengeResultCorrect.textContent = `${correct} / ${CHALLENGE_QUESTION_COUNT}`;
  els.challengeResultCoins.textContent = `+${challengeSession.coinsEarned}`;
  els.dashboardScreen.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  els.challengeResultsScreen.classList.remove("hidden");
}

function openStudyRoute(route) {
  els.modeSelect.value = route.mode;
  updateFilterOptions();
  els.filterSelect.value = getValidFilterValue(route.filter);
  els.startSelect.value = "all";
  randomSessionKey = "";
  randomSessionIds = [];
  saveSettings();
  applyModeAndFilter();
  if (route.resume) {
    resumeSavedPosition();
  } else {
    currentIndex = 0;
    saveCurrentPosition();
  }
  renderCard();
  showStudyView({ focusSearch: route.focusSearch, openStats: route.openStats });
}

function getPositionKey(mode = els.modeSelect.value) {
  if (mode === "article" || mode === "article-quiz") return "article";
  return "vocabulary";
}

function getSavedPosition(key = getPositionKey()) {
  const profile = getCurrentProfile();
  profile.positions = normalizePositions(profile.positions);
  return normalizePosition(profile.positions[key]);
}

function resumeSavedPosition() {
  if (!visibleCards.length) {
    currentIndex = 0;
    return;
  }
  currentIndex = clamp(getSavedPosition(), 0, visibleCards.length - 1);
}

function resumeNounVerbPosition() {
  if (!visibleNounVerbPairs.length) {
    nounVerbCurrentIndex = 0;
    return;
  }
  nounVerbCurrentIndex = clamp(getSavedPosition("nounVerb"), 0, visibleNounVerbPairs.length - 1);
}

function saveCurrentPosition() {
  if (currentView === "noun-verb") {
    saveNounVerbPosition();
    return;
  }
  if (currentView === "vocabulary-review") return;
  if (currentView === "meaning-match") return;
  if (!currentProfileId) return;
  const profile = getCurrentProfile();
  profile.positions = normalizePositions(profile.positions);
  profile.positions[getPositionKey()] = clamp(currentIndex, 0, Math.max(visibleCards.length - 1, 0));
  saveProfileStore();
}

function saveNounVerbPosition() {
  if (!currentProfileId) return;
  const profile = getCurrentProfile();
  profile.positions = normalizePositions(profile.positions);
  profile.positions.nounVerb = clamp(nounVerbCurrentIndex, 0, Math.max(visibleNounVerbPairs.length - 1, 0));
  saveProfileStore();
}

function resetSavedPosition(key = getPositionKey()) {
  if (!currentProfileId) return;
  const profile = getCurrentProfile();
  profile.positions = normalizePositions(profile.positions);
  profile.positions[key] = 0;
  saveProfileStore();
  if (currentView === "dashboard") renderDashboard();
}

function confirmAndResetSavedPosition(key) {
  const profile = getCurrentProfile();
  const label = key === "article" ? "article" : "vocabulary";
  if (!window.confirm(`Restart ${profile.name}'s ${label} position from the beginning? This will not erase progress or coins.`)) return false;
  resetSavedPosition(key);
  return true;
}

function resetCurrentProfileTestData() {
  const profile = getCurrentProfile();
  if (!profile) return;
  progress = {};
  articleProgress = {};
  nounVerbProgress = {};
  meaningMatchProgress = {};
  prepositionProgress = {};
  vocabularyProgress = {};
  profile.progress = progress;
  profile.articleProgress = articleProgress;
  profile.nounVerbProgress = nounVerbProgress;
  profile.meaningMatchProgress = meaningMatchProgress;
  profile.prepositionProgress = prepositionProgress;
  profile.vocabularyProgress = vocabularyProgress;
  profile.vocabularyReviewStats = normalizeVocabularyReviewStats({});
  profile.positions = normalizePositions({});
  profile.history = [];
  profile.lastStudyDate = "";
  currentIndex = 0;
  nounVerbCurrentIndex = 0;
  vocabularyReviewCurrentIndex = 0;
  meaningMatchCurrentIndex = 0;
  prepositionCurrentIndex = 0;
  saveProfileStore();
  applyModeAndFilter();
  renderDashboard();
}

function renderProfileCards() {
  renderGroupSelectors();
  const profileCards = getProfileList().map((profileInfo) => {
    const profile = profileStore.profiles[profileInfo.id];
    const button = document.createElement("button");
    button.className = "profile-card";
    button.type = "button";
    button.dataset.profileId = profile.id;
    button.addEventListener("click", () => selectProfile(profile.id));
    button.replaceChildren(
      createTextElement("span", "profile-card-avatar", profile.emoji || "⭐"),
      createTextElement("span", "profile-name", profile.name),
      createTextElement("span", "profile-signin-note", "Enter password")
    );
    return button;
  });
  els.profileGrid.replaceChildren(
    ...profileCards
  );
  els.emptyProfileMessage.classList.toggle("hidden", profileCards.length > 0);
  els.profileSignInHeading.classList.toggle("hidden", profileCards.length === 0);
  els.profileScreen.classList.toggle("first-use", profileCards.length === 0);
  els.createProfileToggle.replaceChildren(
    document.createTextNode(profileCards.length === 0 ? "Create Profile" : "Create New Profile")
  );
}

function getProfileList() {
  const groupMemberIds = new Set(getCurrentGroup()?.memberIds || []);
  return Object.values(profileStore.profiles || {})
    .filter((profile) => groupMemberIds.has(profile.id))
    .map((profile) => ({
      id: profile.id,
      name: profile.name,
      emoji: profile.emoji || "",
      avatar: profile.avatar || "",
      password: profile.password || ""
    }));
}

function showProfileChooser() {
  pendingProfileId = "";
  const group = getCurrentGroup();
  const hasProfiles = getProfileList().length > 0;
  hideProfileOnboardingPanels();
  if (els.profileSignInEyebrow) els.profileSignInEyebrow.textContent = `Welcome to ${group?.name || "your village"}`;
  if (els.profileSignInTitle) els.profileSignInTitle.textContent = hasProfiles ? "Choose Profile" : "Create your profile";
  els.profileSignInHeading.classList.remove("hidden");
  els.profileGrid.classList.remove("hidden");
  els.profileActions.classList.remove("hidden");
  els.profileLoginForm.reset();
  els.profileLoginError.classList.add("hidden");
  els.profileLoginError.textContent = "Incorrect password.";
  els.createProfileForm.reset();
  els.createProfileError.classList.add("hidden");
  els.createProfileError.textContent = "";
  renderProfileCards();
}

function showCreateProfileScreen() {
  const group = getCurrentGroup();
  hideProfileOnboardingPanels();
  if (els.createProfileTitle) els.createProfileTitle.textContent = `Welcome to ${group?.name || "your village"}`;
  if (els.createProfileIntro) els.createProfileIntro.textContent = "Create your profile";
  renderAvatarPicker();
  els.createProfileForm.reset();
  els.createProfileError.classList.add("hidden");
  els.createProfileError.textContent = "";
  els.createProfileForm.classList.remove("hidden");
  els.createProfileName.focus();
}

function cancelCreateProfile() {
  if (getProfileList().length === 0) {
    showVillageSelection();
    return;
  }
  showProfileChooser();
}

function renderAvatarPicker() {
  selectedAvatar = selectedAvatar || PROFILE_AVATARS[0];
  if (!els.avatarOptions) return;
  const buttons = PROFILE_AVATARS.map((avatar) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "avatar-option";
    button.textContent = avatar;
    button.setAttribute("aria-label", `Choose ${avatar} avatar`);
    button.classList.toggle("selected", avatar === selectedAvatar);
    button.addEventListener("click", () => {
      selectedAvatar = avatar;
      renderAvatarPicker();
    });
    return button;
  });
  els.avatarOptions.replaceChildren(...buttons);
}

function createCustomProfile(name, password, emoji = selectedAvatar) {
  const id = createCustomProfileId(name);
  profileStore.profiles[id] = normalizeProfileData(
    { id, name, password, emoji, avatar: "", demoCompleted: false },
    { id, name, password, emoji, avatar: "" }
  );
  const group = getCurrentGroup();
  if (group && !group.memberIds.includes(id) && group.memberIds.length < 6) {
    group.memberIds.push(id);
  }
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileStore));
  return id;
}

function createCustomProfileId(name) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    || "profile";
  return `custom-${Date.now().toString(36)}-${slug}`;
}

function renameCurrentProfile(nextName) {
  const profile = getCurrentProfile();
  const normalizedName = String(nextName || "").trim();
  if (!profile || !normalizedName) {
    window.alert("Profile name was not changed.");
    return false;
  }
  const nameExists = getCurrentGroupProfiles()
    .some((existingProfile) => existingProfile.id !== profile.id && existingProfile.name.toLowerCase() === normalizedName.toLowerCase());
  if (nameExists) {
    window.alert("A profile with that name already exists.");
    return false;
  }
  profile.name = normalizedName;
  saveProfileStore();
  els.currentProfileLabel.textContent = profile.name;
  renderProfileCards();
  renderDashboard();
  renderSettingsPanel();
  return true;
}

function handleCreateProfile(event) {
  event.preventDefault();
  const name = els.createProfileName.value.trim();
  const password = els.createProfilePassword.value;
  if (!name || !password) {
    els.createProfileError.textContent = "Enter a name and password.";
    els.createProfileError.classList.remove("hidden");
    return;
  }
  if ((getCurrentGroup()?.memberIds || []).length >= 6) {
    els.createProfileError.textContent = "This group already has 6 members.";
    els.createProfileError.classList.remove("hidden");
    return;
  }
  const nameExists = getCurrentGroupProfiles()
    .some((profile) => profile.name.toLowerCase() === name.toLowerCase());
  if (nameExists) {
    els.createProfileError.textContent = "A profile with that name already exists.";
    els.createProfileError.classList.remove("hidden");
    return;
  }
  const profileId = createCustomProfile(name, password, selectedAvatar);
  completeProfileLogin(profileId);
}

function renderFamilyWealth() {
  const summary = getFamilyWealthSummary();
  els.familyWealthLevel.textContent = summary.level.name;
  els.familyWealthCoins.textContent = summary.totalCoins;
  els.familyNextLevelName.textContent = summary.nextLevel.next
    ? summary.nextFamilyLevel.name
    : "Shared Village Complete";
  els.familyGoalCoins.textContent = summary.nextLevel.next ? `${summary.nextLevel.next} Coins` : "Shared Village Complete";
  els.familyGoalRemaining.textContent = summary.remaining;
  els.familyWealthProgressFill.style.width = `${summary.progressPercent}%`;
  els.familyWealthProgressText.textContent = summary.nextLevel.next
    ? `${summary.totalCoins} / ${summary.nextLevel.next}`
    : "Max family level reached";
}

function getFamilyWealthSummary() {
  const totalCoins = getGroupCoinTotal();
  const level = getFamilyWealthLevel(totalCoins);
  const nextGoal = FAMILY_MILESTONES.find((milestone) => totalCoins < milestone.coins)
    || FAMILY_MILESTONES[FAMILY_MILESTONES.length - 1];
  const nextLevel = level.next ? level : { ...level, next: null };
  const nextFamilyLevel = FAMILY_WEALTH_LEVELS.find((item) => item.min === level.next) || level;
  const nextTarget = nextLevel.next || nextGoal.coins;
  const remaining = Math.max(nextTarget - totalCoins, 0);
  const progressPercent = nextTarget ? Math.min((totalCoins / nextTarget) * 100, 100) : 100;
  return { totalCoins, level, nextGoal, nextLevel, nextFamilyLevel, remaining, progressPercent };
}

function getFamilyCoinTotal(profiles) {
  return Object.values(profiles || {}).reduce((total, profile) => total + normalizeCoinCount(profile?.coins), 0);
}

function getGroupCoinTotal(group = getCurrentGroup()) {
  return getFamilyCoinTotal(
    Object.fromEntries((group?.memberIds || [])
      .map((profileId) => [profileId, profileStore?.profiles?.[profileId]])
      .filter(([, profile]) => Boolean(profile)))
  );
}

function getFamilyWealthLevel(coinsValue) {
  const coins = normalizeCoinCount(coinsValue);
  return [...FAMILY_WEALTH_LEVELS].reverse().find((level) => coins >= level.min) || FAMILY_WEALTH_LEVELS[0];
}

function getProfileDashboardStats(profile) {
  const counts = Object.values(profile.progress || {}).reduce(
    (total, entry) => {
      const status = normalizeMeaningStatus(entry.meaningStatus || entry.rating);
      if (status === "known") total.known += 1;
      if (status === "unsure") total.unsure += 1;
      if (status === "unknown") total.unknown += 1;
      return total;
    },
    { known: 0, unsure: 0, unknown: 0 }
  );
  const mastered = cards.length ? `${Math.round((counts.known / cards.length) * 100)}%` : "0%";
  return {
    total: cards.length,
    known: counts.known,
    unsure: counts.unsure,
    unknown: counts.unknown,
    mastered,
    lastStudyDate: profile.lastStudyDate ? `Last: ${formatDate(profile.lastStudyDate)}` : "Not studied yet"
  };
}

function formatDate(value) {
  return new Date(value).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
}

function logoutToProfileScreen() {
  saveCurrentPosition();
  closeSettingsMenu();
  currentProfileId = "";
  pendingProfileId = "";
  els.appShell.classList.add("locked");
  els.profileScreen.classList.remove("hidden");
  showVillageEntry();
}

function lockSharedPasswordScreen() {
  saveCurrentPosition();
  closeSettingsMenu();
  showProfileScreen();
}

function bindEvents() {
  if (els.appShell.dataset.bound === "true") return;
  els.appShell.dataset.bound = "true";
  els.villageNameForm.addEventListener("submit", handleVillageNameSubmit);
  els.villagePasswordForm?.addEventListener("submit", handleVillagePassword);
  els.namingCeremonyForm?.addEventListener("submit", handleNamingCeremonySubmit);
  els.cancelVillagePassword?.addEventListener("click", showVillageSelection);
  els.createProfileToggle.addEventListener("click", showCreateProfileScreen);
  els.cancelCreateProfile.addEventListener("click", cancelCreateProfile);
  els.createProfileForm.addEventListener("submit", handleCreateProfile);
  els.cancelProfileLogin.addEventListener("click", showProfileChooser);
  els.profileLoginForm.addEventListener("submit", handleProfileLogin);

  els.appShell.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-dashboard-action]");
    if (!actionTarget) return;
    handleDashboardAction(actionTarget.dataset.dashboardAction);
  });

  els.appShell.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const actionTarget = event.target.closest('[role="button"][data-dashboard-action]');
    if (!actionTarget) return;
    event.preventDefault();
    handleDashboardAction(actionTarget.dataset.dashboardAction);
  });

  els.coinChallengesScreen.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-challenge-action]");
    if (!button) return;
    handleChallengeAction(button.dataset.challengeAction);
  });
  els.coinChallengesScreen.addEventListener("change", (event) => {
    const input = event.target.closest('input[name="challengeCategory"]');
    if (!input) return;
    selectedChallengeCategory = input.value || "nouns";
    renderChallengeMasteryProgress();
  });

  els.modeSelect.addEventListener("change", () => {
    updateFilterOptions();
    saveSettings();
    applyModeAndFilter();
    resumeSavedPosition();
    renderCard();
  });

  els.filterSelect.addEventListener("change", () => {
    currentIndex = 0;
    saveSettings();
    applyModeAndFilter();
  });

  els.startSelect.addEventListener("change", () => {
    currentIndex = 0;
    saveSettings();
    applyModeAndFilter();
  });

  els.orderSelect.addEventListener("change", () => {
    currentIndex = 0;
    randomSessionKey = "";
    randomSessionIds = [];
    saveSettings();
    applyModeAndFilter();
  });

  els.wordSearchInput.addEventListener("input", updateSearchResults);

  els.searchResults.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-card-id]");
    if (!button) return;
    openSearchResult(button.dataset.cardId);
  });

  els.showAnswer.addEventListener("click", revealAnswer);

  els.previousCard.addEventListener("click", () => {
    if (currentView === "noun-verb") {
      moveNounVerbCard(-1);
      return;
    }
    if (currentView === "meaning-match") {
      moveMeaningMatchCard(-1);
      return;
    }
    if (currentView === "prepositions") {
      movePrepositionCard(-1);
      return;
    }
    if (currentView === "vocabulary-review") {
      moveVocabularyReviewCard(-1);
      return;
    }
    moveCard(-1);
  });
  els.nextCard.addEventListener("click", () => {
    if (currentView === "noun-verb") {
      moveNounVerbCard(1);
      return;
    }
    if (currentView === "meaning-match") {
      moveMeaningMatchCard(1);
      return;
    }
    if (currentView === "prepositions") {
      movePrepositionCard(1);
      return;
    }
    if (currentView === "vocabulary-review") {
      moveVocabularyReviewCard(1);
      return;
    }
    moveCard(1);
  });

  els.homeButton.addEventListener("click", () => {
    saveCurrentPosition();
    closeSettingsMenu();
    showDashboard();
  });
  els.landingGetStartedMain?.addEventListener("click", showDemoScreen);
  els.landingExistingAccountMain?.addEventListener("click", skipLandingToVillageSelection);
  els.demoBack?.addEventListener("click", handleDemoBack);
  els.demoNext?.addEventListener("click", handleDemoNext);

  els.studyChallengeBack.addEventListener("click", returnToCoinChallenges);
  els.articleQuizNext.addEventListener("click", () => {
    advanceChallengeSession("articles", () => moveCard(1));
  });
  els.nounVerbChallengeBack.addEventListener("click", returnToCoinChallenges);

  els.ratingButtons.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-rating]");
    if (!button || !visibleCards[currentIndex]) return;
    rateCard(button.dataset.rating);
  });

  els.articleGuess.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-article]");
    if (!button || !visibleCards[currentIndex] || articleQuizAnswered) return;
    answerArticleQuiz(button.dataset.article);
  });

  els.articleQuizOptions.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-quiz-article]");
    if (!button || !visibleCards[currentIndex] || articleQuizAnswered) return;
    answerArticleQuiz(button.dataset.quizArticle);
  });

  els.nounVerbOptions.addEventListener("click", (event) => {
    const prepositionButton = event.target.closest("button[data-preposition-choice]");
    if (prepositionButton) {
      console.log("Preposition answer button clicked", {
        currentView,
        selectedAnswer: prepositionButton.dataset.prepositionChoice,
        currentQuestionId: prepositionQuizState.currentQuestionId
      });
      if (prepositionQuizState.hasAnswered) return;
      answerPrepositionQuiz(prepositionButton.dataset.prepositionChoice);
      return;
    }

    const button = event.target.closest("button[data-verb]");
    if (currentView === "vocabulary-review") {
      const vocabularyReviewButton = event.target.closest("button[data-vocabulary-choice]");
      if (!vocabularyReviewButton || vocabularyReviewQuizState.hasAnswered) return;
      answerVocabularyReviewQuiz(vocabularyReviewButton.dataset.vocabularyChoice);
      return;
    }
    if (currentView === "meaning-match") {
      const meaningMatchButton = event.target.closest("button[data-meaning-choice]");
      if (!meaningMatchButton || meaningMatchQuizState.hasAnswered) return;
      answerMeaningMatchQuiz(Number(meaningMatchButton.dataset.meaningChoice));
      return;
    }
    if (!button || nounVerbQuizState.hasAnswered) return;
    answerNounVerbQuiz(button.dataset.verb);
  });

  els.nounVerbNext.addEventListener("click", () => {
    if (currentView === "meaning-match") {
      moveMeaningMatchCard(1);
      return;
    }
    if (currentView === "vocabulary-review") {
      advanceChallengeSession("vocabulary", () => moveVocabularyReviewCard(1));
      return;
    }
    if (currentView === "prepositions") {
      movePrepositionCard(1);
      return;
    }
    moveNounVerbCard(1);
  });
  els.challengeResultsContinue.addEventListener("click", () => {
    challengeSession = createEmptyChallengeSession();
    showDashboard();
    showNextPendingCelebration();
  });
  els.levelSelectionBack.addEventListener("click", showDashboard);
  els.flashcardResumeBack?.addEventListener("click", showDashboard);
  els.flashcardResumeContinue?.addEventListener("click", resumePendingFlashcardSession);
  els.flashcardChooseAnotherDeck?.addEventListener("click", () => showLevelSelection("flashcards"));
  els.levelSelectionScreen.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-learning-level]");
    if (!button) return;
    chooseLearningLevel(button.dataset.learningLevel);
  });
  els.flashcardSetupBack.addEventListener("click", () => showLevelSelection("flashcards"));
  els.challengeLevelBack.addEventListener("click", () => showLevelSelection("challenges"));
  els.challengeReadyBack.addEventListener("click", showCoinChallenges);
  els.challengeReadyStart.addEventListener("click", beginPendingChallenge);
  els.learningFlashcardsBack.addEventListener("click", showFlashcardSetup);
  els.flashcardCompletionBack.addEventListener("click", showFlashcardSetup);
  els.learningFlashcardPrevious.addEventListener("click", () => moveLearningFlashcard(-1));
  els.learningFlashcardNext.addEventListener("click", () => moveLearningFlashcard(1));
  els.flashcardContinueStudying.addEventListener("click", () => {
    openFlashcardDeck(flashcardStudyLevel, flashcardStudyCategory, { forceNew: true });
  });
  els.flashcardReturnDashboard.addEventListener("click", showDashboard);
  els.challengeResultsBack.addEventListener("click", showCoinChallenges);
  els.flashcardSetupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    startLearningFlashcards();
  });
  els.learningFlashcardRatings.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-flashcard-rating]");
    if (!button) return;
    rateLearningFlashcard(button.dataset.flashcardRating);
  });
  els.learningFlashcardSelection?.addEventListener("click", toggleLearningDeckSelector);
  els.learningDeckSelectorPanel?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-flashcard-deck-level][data-flashcard-deck-category]");
    if (!button) return;
    openFlashcardDeck(button.dataset.flashcardDeckLevel, button.dataset.flashcardDeckCategory);
  });

  els.switchProfile.addEventListener("click", logoutToProfileScreen);
  els.logoutButton.addEventListener("click", lockSharedPasswordScreen);

  els.settingsToggle.addEventListener("click", () => {
    const isOpen = !els.settingsPanel.classList.contains("hidden");
    els.settingsPanel.classList.toggle("hidden", isOpen);
    els.settingsToggle.setAttribute("aria-expanded", String(!isOpen));
    if (isOpen) return;
    renderSettingsPanel();
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".settings-menu")) return;
    closeSettingsMenu();
  });

  els.saveVillageName.addEventListener("click", () => {
    if (!hasVillageName()) return;
    saveVillageName(els.settingsVillageNameInput.value);
    renderVillageName();
    renderSettingsPanel();
  });

  els.saveProfileName.addEventListener("click", () => {
    renameCurrentProfile(els.settingsProfileNameInput.value);
  });

  els.changeProfilePassword.addEventListener("click", () => {
    const profile = getCurrentProfile();
    if (!profile) return;
    const nextPassword = window.prompt(`New password for ${profile.name}`);
    if (nextPassword === null) return;
    const normalizedPassword = nextPassword.trim();
    if (!normalizedPassword) {
      window.alert("Password was not changed.");
      return;
    }
    profile.password = normalizedPassword;
    saveProfileStore();
    renderSettingsPanel();
  });

  els.resetLocalTestData?.addEventListener("click", () => {
    closeSettingsMenu();
    const profile = getCurrentProfile();
    if (!profile) return;
    if (!window.confirm(`Reset local test data for ${profile.name}? This keeps profiles and the village name.`)) return;
    resetCurrentProfileTestData();
  });

  els.settingsBackDashboard.addEventListener("click", () => {
    closeSettingsMenu();
    showDashboard();
  });

  if (els.csvInput) {
    els.csvInput.addEventListener("change", async (event) => {
      const [file] = event.target.files;
      if (!file) return;
      const csv = await file.text();
      cards = normalizeCards(parseCsv(csv));
      els.deckStatus.textContent = "";
      currentIndex = 0;
      updateFilterOptions();
      applyModeAndFilter();
    });
  }

  els.levelCelebrationClose.addEventListener("click", () => {
    els.levelCelebration.classList.add("hidden");
    if (!showNextPendingCelebration()) checkVillageNamingCeremony();
  });

  els.levelCelebrationViewAlbum?.addEventListener("click", () => {
    const page = els.levelCelebrationViewAlbum.dataset.rewardPage || "austria-album";
    els.levelCelebration.classList.add("hidden");
    showAchievementCollection(page);
  });

  els.memoryDetailClose?.addEventListener("click", hideRewardDetail);
  els.memoryDetailModal?.addEventListener("click", (event) => {
    if (event.target === els.memoryDetailModal) hideRewardDetail();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideRewardDetail();
  });
}

function closeSettingsMenu() {
  els.settingsPanel.classList.add("hidden");
  els.settingsToggle.setAttribute("aria-expanded", "false");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell);
  if (row.some((value) => value.trim() !== "")) rows.push(row);

  const headers = rows.shift()?.map((header) => header.replace(/^\uFEFF/, "").trim().toLowerCase()) || [];
  return rows.map((values) => {
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = (values[index] || "").trim();
    });
    return entry;
  });
}

function normalizeCards(rows) {
  return rows
    .filter((row) => row.word && row.english)
    .map((row, index) => ({
      id: slugify(`${row.article || "none"}-${row.word}-${row.english}`) || `card-${index}`,
      word: row.word,
      article: row.article.toLowerCase(),
      english: row.english,
      example: row.example || "",
      level: String(row.level || row.cefr || "").trim().toUpperCase(),
      isNoun: ["der", "die", "das"].includes(row.article.toLowerCase())
    }));
}

function normalizeLevelCards(rows, level, source) {
  const seen = new Set();
  const fallbackCards = new Map(cards.map((card) => [normalizeDatasetWord(card.word), card]));
  return rows
    .map((row, index) => {
      const fallbackCard = fallbackCards.get(normalizeDatasetWord(row.german));
      const english = String(row.english || fallbackCard?.english || "").trim();
      const example = String(row.examplesentence || fallbackCard?.example || "").trim();
      const article = normalizeArticleValue(row.article);
      const wordType = String(row.wordtype || "").trim().toLowerCase();
      const id = String(row.id || "").trim()
        || `${level.toLowerCase()}-${source}-${slugify(`${row.german}-${row.english}`) || index}`;
      return {
        id,
        word: String(row.german || "").trim(),
        article,
        english,
        example,
        level,
        wordType,
        category: String(row.category || "").trim(),
        isNoun: wordType === "noun" || Boolean(article),
        datasetSource: source
      };
    })
    .filter((card) => card.word && card.english)
    .filter((card) => {
      if (seen.has(card.id)) return false;
      seen.add(card.id);
      return true;
    });
}

function normalizeDatasetWord(value) {
  return String(value || "").trim().toLocaleLowerCase("de");
}

function normalizeArticleChallengeCards(rows, level) {
  const seen = new Set();
  const fallbackCardsByArticle = new Map(cards.map((card) => [
    `${card.article}:${normalizeDatasetWord(card.word)}`,
    card
  ]));
  const fallbackCardsByWord = new Map(cards.map((card) => [normalizeDatasetWord(card.word), card]));
  return rows
    .filter((row) => row.german && ["der", "die", "das"].includes(normalizeArticleValue(row.article)))
    .map((row, index) => {
      const article = normalizeArticleValue(row.article);
      const wordKey = normalizeDatasetWord(row.german);
      const fallbackCard = fallbackCardsByArticle.get(`${article}:${wordKey}`)
        || fallbackCardsByWord.get(wordKey);
      const id = String(row.id || "").trim()
        || `${level.toLowerCase()}-articles-${slugify(row.german) || index}`;
      return {
        id,
        word: row.german.trim(),
        article,
        english: String(row.english || fallbackCard?.english || "").trim(),
        example: String(row.examplesentence || fallbackCard?.example || "").trim(),
        level,
        wordType: "noun",
        category: String(row.category || "").trim(),
        isNoun: true,
        datasetSource: "articles"
      };
    })
    .filter((card) => {
      if (seen.has(card.id)) return false;
      seen.add(card.id);
      return true;
    });
}

function normalizeArticleValue(value) {
  const article = String(value || "").trim().toLowerCase();
  return ["der", "die", "das"].includes(article) ? article : "";
}

function normalizeNounVerbPairs(rows) {
  const seen = new Set();
  return rows
    .filter((row) => row.noun && row.verb && row.phrase)
    .map((row, index) => {
      const phrase = row.phrase.trim();
      const verb = row.verb.trim();
      const id = slugify(`${row.noun}-${row.article || "none"}-${phrase}-${verb}`) || `noun-verb-${index}`;
      return {
        id,
        noun: row.noun.trim(),
        article: (row.article || "").trim().toLowerCase(),
        verb,
        phrase,
        english: row.english || "",
        example: row.example || "",
        category: row.category || "review"
      };
    })
    .filter((pair) => {
      const key = `${pair.phrase.toLowerCase()}::${pair.verb.toLowerCase()}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function normalizeMeaningMatchItems(rows) {
  const seen = new Set();
  return rows
    .filter((row) => row.id && row.phrase && row.englishsentence && row.correctgermansentence && row.wronggermansentence)
    .map((row, index) => ({
      id: slugify(row.id) || `meaning-match-${index}`,
      phrase: row.phrase.trim(),
      english: row.englishmeaning || "",
      englishMeaning: row.englishmeaning || "",
      englishSentence: row.englishsentence.trim(),
      correctGermanSentence: row.correctgermansentence.trim(),
      wrongGermanSentence: row.wronggermansentence.trim(),
      example: row.example || "",
      templateId: "curated"
    }))
    .filter((item) => {
      if (!isMeaningMatchCuratedItemValid(item)) return false;
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
}

function isMeaningMatchCuratedItemValid(item) {
  if (!item.englishSentence || !item.correctGermanSentence || !item.wrongGermanSentence) return false;
  if (item.correctGermanSentence === item.wrongGermanSentence) return false;
  return true;
}

function normalizePrepositionItems(rows) {
  const seen = new Set();
  return rows
    .filter((row) => row.id && row.sentence && row.correct && row.wrong1 && row.wrong2 && row.wrong3)
    .map((row, index) => ({
      id: slugify(row.id) || `preposition-${index}`,
      sentence: row.sentence.trim(),
      correct: row.correct.trim(),
      wrong1: row.wrong1.trim(),
      wrong2: row.wrong2.trim(),
      wrong3: row.wrong3.trim()
    }))
    .filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
}

function applyModeAndFilter() {
  const mode = els.modeSelect.value;
  const filter = els.filterSelect.value;
  const startLetter = els.startSelect.value;
  const order = els.orderSelect.value;

  const sourceCards = mode === "article-quiz" && challengeSession.type === "articles"
    ? getArticleChallengeCards(challengeSession.level)
    : cards;
  const challengeQuestionIds = new Set(challengeSession.questionIds || []);
  const filteredCards = sourceCards.filter((card) => {
    if (mode === "article-quiz"
      && challengeSession.type === "articles"
      && (getFlashcardLevel(card) !== challengeSession.level
        || (challengeQuestionIds.size && !challengeQuestionIds.has(card.id)))) return false;
    const meaningStatus = getMeaningStatus(card);
    const articleStatus = getArticleStatus(card);
    if (mode === "article-quiz" || mode === "article") {
      if (!card.isNoun) return false;
      if (filter === "newArticles" && articleStatus !== "new") return false;
      if (filter === "learnedArticles" && articleStatus !== "learned") return false;
      if (filter === "masteredArticles" && articleStatus !== "mastered") return false;
      if (filter === "wrongRecently" && !isWrongRecently(card)) return false;
      return true;
    }
    if (filter === "knownMeaning" && meaningStatus !== "known") return false;
    if (filter === "unsureMeaning" && meaningStatus !== "unsure") return false;
    if (filter === "unknownMeaning" && meaningStatus !== "unknown") return false;
    if (filter === "unratedMeaning" && meaningStatus !== "unrated") return false;
    return true;
  });

  const startedCards = applyStartLetter(filteredCards, startLetter);
  visibleCards = (mode === "article-quiz" || mode === "article") && filter === "smartArticle"
    ? applySmartArticleOrder(startedCards)
    : applyStudyOrder(startedCards, order);
  currentIndex = clamp(currentIndex, 0, Math.max(visibleCards.length - 1, 0));
  answerShown = false;
  selectedArticle = "";
  articleQuizAnswered = false;
  selectedQuizArticle = "";
  updateStats();
  renderCard();
}

function updateSearchResults() {
  const query = els.wordSearchInput.value.trim();
  if (!query) {
    searchResults = [];
    els.searchResults.classList.add("hidden");
    els.searchResults.replaceChildren();
    return;
  }

  const normalizedQuery = normalizeSearchValue(query);
  searchResults = cards
    .filter((card) => normalizeSearchValue(card.word).includes(normalizedQuery))
    .sort((first, second) => getSortKey(first.word).localeCompare(getSortKey(second.word), "de"))
    .slice(0, 40);

  renderSearchResults(query);
}

function renderSearchResults(query) {
  els.searchResults.classList.remove("hidden");
  if (!searchResults.length) {
    els.searchResults.replaceChildren(createSearchEmptyMessage(query));
    return;
  }

  els.searchResults.replaceChildren(
    ...searchResults.map((card) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "search-result";
      button.dataset.cardId = card.id;
      button.innerHTML = `
        <span class="search-result-word">${formatGermanWord(card)}</span>
        <span class="search-result-english">${escapeHtml(card.english)}</span>
        <span class="search-result-example">${escapeHtml(card.example || "")}</span>
      `;
      return button;
    })
  );
}

function createSearchEmptyMessage(query) {
  const message = document.createElement("p");
  message.className = "search-empty";
  message.textContent = `No German words found for "${query}".`;
  return message;
}

function openSearchResult(cardId) {
  const card = cards.find((item) => item.id === cardId);
  if (!card) return;

  els.wordSearchInput.value = "";
  searchResults = [];
  els.searchResults.classList.add("hidden");
  els.searchResults.replaceChildren();

  els.modeSelect.value = "de-en";
  updateFilterOptions();
  els.filterSelect.value = "all";
  els.startSelect.value = "all";
  els.orderSelect.value = "alphabetical";
  applyModeAndFilter();

  const index = visibleCards.findIndex((item) => item.id === card.id);
  if (index !== -1) {
    currentIndex = index;
    answerShown = false;
    selectedArticle = "";
    articleQuizAnswered = false;
    selectedQuizArticle = "";
    renderCard();
  }
}

function normalizeSearchValue(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatGermanWord(card) {
  const word = escapeHtml(card.word);
  return card.article ? `${escapeHtml(card.article)} ${word}` : word;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeRegExp(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderCard() {
  const card = visibleCards[currentIndex];
  const mode = els.modeSelect.value;
  const modeText = getModeText(mode);
  const isArticleQuiz = mode === "article-quiz";

  els.cardMode.textContent = isArticleQuiz && challengeSession.type === "articles"
    ? "Article Practice"
    : isArticleQuiz ? "Article Practice" : modeText;
  const articleChallengeActive = isArticleQuiz && challengeSession.type === "articles";
  els.cardCounter.textContent = visibleCards.length
    ? articleChallengeActive
      ? `Question ${Math.min(challengeSession.answered + (articleQuizAnswered ? 0 : 1), CHALLENGE_QUESTION_COUNT)} of ${CHALLENGE_QUESTION_COUNT}`
      : `${isArticleQuiz ? "Question" : "Card"} ${currentIndex + 1} of ${visibleCards.length}`
    : `${isArticleQuiz ? "Question" : "Card"} 0 of 0`;
  els.emptyState.classList.toggle("hidden", Boolean(card));
  els.previousCard.disabled = visibleCards.length < 2;
  els.nextCard.disabled = visibleCards.length < 2;
  els.actionBar.classList.toggle("hidden", isArticleQuiz);
  els.articleQuizNext.classList.toggle("hidden", !isArticleQuiz || !articleQuizAnswered);
  els.flashcard.classList.toggle("article-quiz-card", isArticleQuiz);
  els.showAnswer.disabled = !card;
  els.showAnswer.classList.toggle("hidden", isArticleQuiz || mode === "article" || !card || answerShown);
  els.ratingButtons.classList.toggle("hidden", isArticleQuiz || mode === "article" || !card || !answerShown);
  els.answerPanel.classList.toggle("hidden", isArticleQuiz || mode === "article" || !card || !answerShown);
  els.articleGuess.classList.toggle("hidden", isArticleQuiz || !card || mode !== "article" || articleQuizAnswered);
  els.articleQuiz.classList.toggle("hidden", !isArticleQuiz || !card || articleQuizAnswered);
  els.ratingButtons.classList.toggle("article-rating-mode", mode === "article");
  updateRatingButtonLabels(mode);

  if (!card) {
    els.promptLabel.textContent = "No cards";
    els.articleQuizResult.classList.add("hidden");
    els.questionText.textContent = "Nothing to study";
    els.questionTranslation.textContent = "";
    els.questionTranslation.classList.add("hidden");
    return;
  }

  if (mode === "en-de") {
    els.promptLabel.textContent = "English";
    els.questionText.textContent = card.english;
  } else if (isArticleQuiz) {
    els.promptLabel.textContent = "Choose the correct article.";
    els.questionText.textContent = card.word;
  } else if (mode === "article") {
    els.promptLabel.textContent = "Choose the article";
    els.questionText.textContent = card.word;
  } else {
    els.promptLabel.textContent = "German";
    els.questionText.textContent = card.word;
  }
  const translation = "";
  els.questionTranslation.textContent = translation;
  els.questionTranslation.classList.toggle("hidden", !translation);

  els.answerArticle.textContent = card.article || "none";
  els.answerMeaning.textContent = mode === "en-de" ? `${card.article ? `${card.article} ` : ""}${card.word}` : card.english;
  els.answerExample.textContent = buildExampleText(card);
  renderChallengeBanner(els.studyChallengeBanner);
  renderArticleResult(card);
}

function getChallengeBannerSrc() {
  const profile = getCurrentProfile();
  const completedQuestions = normalizeCounter(profile?.challengeSessionsCompleted) * CHALLENGE_QUESTION_COUNT;
  const currentQuestions = challengeSession.type && !challengeSession.complete
    ? normalizeCounter(challengeSession.answered)
    : 0;
  const rotationIndex = Math.floor((completedQuestions + currentQuestions) / CHALLENGE_BANNER_ROTATION_QUESTIONS);
  return CHALLENGE_BANNERS[rotationIndex % CHALLENGE_BANNERS.length] || CHALLENGE_BANNERS[0];
}

function renderChallengeBanner(image) {
  if (!image) return;
  const imagePath = getChallengeBannerSrc();
  image.classList.remove("is-missing");
  image.onerror = () => {
    image.classList.add("is-missing");
    image.removeAttribute("src");
  };
  image.src = imagePath;
}

function revealAnswer() {
  if (!visibleCards[currentIndex]) return;
  answerShown = true;
  renderCard();
}

function moveCard(direction) {
  if (!visibleCards.length) return;
  currentIndex = (currentIndex + direction + visibleCards.length) % visibleCards.length;
  answerShown = false;
  selectedArticle = "";
  articleQuizAnswered = false;
  selectedQuizArticle = "";
  saveCurrentPosition();
  renderCard();
}

function rateCard(rating) {
  const card = visibleCards[currentIndex];
  if (els.modeSelect.value === "article") {
    rateArticleCard(rating);
    return;
  }
  progress[card.id] = {
    meaningStatus: normalizeMeaningStatus(rating),
    updatedAt: new Date().toISOString()
  };
  recordStudyHistory("flashcard", card, normalizeMeaningStatus(rating));
  recordDailyActivity("vocabulary");
  saveProgress();

  if (visibleCards.length > 1) {
    currentIndex = (currentIndex + 1) % visibleCards.length;
  }

  applyModeAndFilter();
  saveCurrentPosition();
}

function updateStats() {
  const meaning = cards.reduce(
    (total, card) => {
      total[getMeaningStatus(card)] += 1;
      return total;
    },
    { known: 0, unsure: 0, unknown: 0, unrated: 0 }
  );

  const articles = getArticleSummary();

  els.statMeaningKnown.textContent = meaning.known;
  els.statMeaningUnsure.textContent = meaning.unsure;
  els.statMeaningUnknown.textContent = meaning.unknown;
  els.statMeaningUnrated.textContent = meaning.unrated;
  els.statArticleNew.textContent = articles.new;
  els.statArticleLearned.textContent = articles.learned;
  els.statArticleMastered.textContent = articles.mastered;
  els.statArticleGap.textContent = articles.gap;
  els.statArticlesLearned.textContent = articles.mastered;
  els.statNounsTotal.textContent = articles.nouns;
  els.statWordsLearned.textContent = getWordsLearnedCount();
  els.statWordsTotal.textContent = cards.length;
  if (currentView === "dashboard") renderDashboard();
  if (currentView === "coin-challenges") renderCoinChallenges();
}

function renderArticleResult(card) {
  const mode = els.modeSelect.value;
  if (!["article", "article-quiz"].includes(mode) || !card) {
    els.articleQuizResult.classList.add("hidden");
    els.flashcard.classList.remove("quiz-result-visible");
    els.articleQuizNext.classList.add("hidden");
    return;
  }

  const fullAnswer = `${card.article} ${card.word}`;
  const wordMeaning = card.english
    ? `<span class="quiz-result-answer">${escapeHtml(fullAnswer)} = ${escapeHtml(capitalizeFirst(card.english))}</span>`
    : `<span class="quiz-result-answer">${escapeHtml(fullAnswer)}</span>`;
  const isCorrect = selectedQuizArticle === card.article;
  els.articleQuizResult.innerHTML = isCorrect
    ? `
      <span class="quiz-result-label">✅ Correct!</span>
      ${wordMeaning}
    `
    : `
      <span class="quiz-result-label">❌ Not quite</span>
      ${wordMeaning}
    `;
  els.articleQuizResult.classList.toggle("hidden", !articleQuizAnswered);
  els.articleQuizResult.classList.toggle("success", articleQuizAnswered && isCorrect);
  els.articleQuizResult.classList.toggle("error", articleQuizAnswered && !isCorrect);
  els.flashcard.classList.toggle("quiz-result-visible", articleQuizAnswered);
  els.articleQuizNext.classList.toggle("hidden", mode !== "article-quiz" || !articleQuizAnswered);

  els.articleGuess.querySelectorAll("button").forEach((button) => {
    const article = button.dataset.article;
    button.disabled = articleQuizAnswered;
    button.classList.toggle("selected", selectedQuizArticle === article);
    button.classList.toggle("correct", articleQuizAnswered && article === card.article);
    button.classList.toggle("incorrect", articleQuizAnswered && selectedQuizArticle === article && article !== card.article);
  });

  els.articleQuizOptions.querySelectorAll("button").forEach((button) => {
    const article = button.dataset.quizArticle;
    button.disabled = articleQuizAnswered;
    button.classList.toggle("selected", selectedQuizArticle === article);
    button.classList.toggle("correct", articleQuizAnswered && article === card.article);
    button.classList.toggle("incorrect", articleQuizAnswered && selectedQuizArticle === article && article !== card.article);
  });
}

function answerArticleQuiz(article) {
  const card = visibleCards[currentIndex];
  if (!card) return;
  selectedQuizArticle = article;
  articleQuizAnswered = true;
  const isCorrect = article === card.article;
  recordChallengeSessionAnswer("articles", isCorrect);
  updateArticleLearningProgress(card, isCorrect);
  console.log("Article button clicked", {
    selectedArticle: article,
    correctArticle: card.article,
    isCorrect
  });
  if (isCorrect) {
    awardCoins(1);
  }
  recordDailyActivity("article", { isCorrect });
  recordStudyHistory("article-quiz", card, isCorrect ? "correct" : "wrong");
  saveArticleProgress();
  saveCurrentPosition();
  updateStats();
  renderCard();
}

function updateArticleLearningProgress(card, isCorrect) {
  const previous = getArticleProgressEntry(card);
  const now = new Date().toISOString();
  const articleCorrectCount = previous.articleCorrectCount + (isCorrect ? 1 : 0);
  const articleWrongCount = previous.articleWrongCount + (isCorrect ? 0 : 1);
  let articleStatus = previous.articleStatus;

  if (isCorrect) {
    articleStatus = articleCorrectCount >= 3 ? "mastered" : "learned";
  } else if (articleStatus === "mastered") {
    articleStatus = "learned";
  } else if (articleStatus !== "learned") {
    articleStatus = "new";
  }

  articleProgress[card.id] = {
    ...previous,
    articleCorrectCount,
    articleWrongCount,
    articleLastAnsweredAt: now,
    articleLastWrongAt: isCorrect ? previous.articleLastWrongAt || "" : now,
    articleStatus,
    updatedAt: now
  };

  return articleStatus;
}

function awardCoins(amount) {
  if (!currentProfileId) return;
  const profile = profileStore?.profiles?.[currentProfileId];
  if (!profile) return;
  profile.coins = normalizeCoinCount(profile.coins) + normalizeCounter(amount);
  awardLevelBonusIfNeeded(profile);
  celebrateFamilyLevelIfNeeded();
  checkAchievements("coins");
  checkRewardUnlocks(profile);
  checkTownCenterStageUnlocks();
  saveProfileStore();
}

function checkRewardUnlocks(profile) {
  if (!profile) return;
  const group = getCurrentGroup();
  if (!group) return;
  profile.austriaAlbumSeenRewards = normalizeRewardIdList(profile.austriaAlbumSeenRewards);
  group.villageAlbumSeenRewards = normalizeRewardIdList(group.villageAlbumSeenRewards);
  const sharedCoins = getGroupCoinTotal(group);
  const personalCoins = normalizeCoinCount(profile.coins);
  const newPersonalReward = AUSTRIA_ALBUM_REWARDS.find((reward) => {
    return personalCoins >= reward.coins && !profile.austriaAlbumSeenRewards.includes(reward.id);
  });
  if (newPersonalReward) {
    profile.austriaAlbumSeenRewards.push(newPersonalReward.id);
    showRewardUnlockCelebration(newPersonalReward, "My Austria Album");
    return;
  }
  const newVillageReward = VILLAGE_ALBUM_REWARDS.find((reward) => {
    return sharedCoins >= reward.coins && !group.villageAlbumSeenRewards.includes(reward.id);
  });
  if (newVillageReward) {
    group.villageAlbumSeenRewards.push(newVillageReward.id);
    showRewardUnlockCelebration(newVillageReward, "Village Memories");
  }
}

function showRewardUnlockCelebration(reward, source) {
  if (deferCelebration(() => showRewardUnlockCelebration(reward, source))) return;
  hideNamingCeremonyForm();
  els.levelCelebrationTitle.textContent = "Congratulations!";
  els.levelCelebrationProfile.textContent = "You unlocked:";
  els.levelCelebrationLevel.textContent = reward.title;
  els.levelCelebrationBonus.textContent = source;
  els.levelCelebrationBonus.classList.remove("hidden");
  showRewardCelebrationActions(source === "Village Memories" ? "village-album" : "austria-album", source === "Village Memories" ? "View Memories" : "View Album");
  els.levelCelebration.classList.remove("hidden");
}

function showRewardCelebrationActions(page, label = "View Album") {
  hideNamingCeremonyForm();
  els.levelCelebrationViewAlbum.dataset.rewardPage = page;
  els.levelCelebrationViewAlbum.textContent = label;
  els.levelCelebrationViewAlbum.classList.remove("hidden");
  els.levelCelebrationClose.textContent = "Continue";
}

function hideRewardCelebrationActions() {
  hideNamingCeremonyForm();
  els.levelCelebrationViewAlbum.dataset.rewardPage = "";
  els.levelCelebrationViewAlbum.textContent = "View Album";
  els.levelCelebrationViewAlbum.classList.add("hidden");
  els.levelCelebrationClose.textContent = "Nice!";
}

function hideNamingCeremonyForm() {
  els.namingCeremonyForm?.classList.add("hidden");
  if (els.namingCeremonyInput) els.namingCeremonyInput.value = "";
}

function checkVillageNamingCeremony() {
  const group = getCurrentGroup();
  if (!group || normalizeVillageName(group.villageName)) return false;
  const members = getCurrentGroupProfiles();
  if (!members.length) return false;
  if (getGroupCoinTotal(group) < VILLAGE_NAMING_MIN_SHARED_COINS) return false;
  const everyMemberContributed = members.every(hasQualifiedForNamingCeremony);
  if (!everyMemberContributed) return false;
  group.namingCeremonyReady = true;
  showVillageNamingCeremony();
  return true;
}

function hasQualifiedForNamingCeremony(profile) {
  const contribution = normalizeVillageContribution(profile?.villageContribution);
  return contribution.articleQuestions >= VILLAGE_NAMING_CONTRIBUTION_GOAL
    || contribution.vocabularyCards >= VILLAGE_NAMING_CONTRIBUTION_GOAL;
}

function showVillageNamingCeremony() {
  const group = getCurrentGroup();
  if (!group || normalizeVillageName(group.villageName)) return;
  hideRewardCelebrationActions();
  els.levelCelebrationTitle.textContent = "🎉 Village Naming Ceremony";
  els.levelCelebrationProfile.textContent = "Everyone in your village has contributed.";
  els.levelCelebrationLevel.textContent = "Your village is ready to receive its name.";
  els.levelCelebrationBonus.textContent = "";
  els.levelCelebrationBonus.classList.add("hidden");
  els.namingCeremonyForm?.classList.remove("hidden");
  if (els.namingCeremonyInput) {
    els.namingCeremonyInput.value = "";
    els.namingCeremonyInput.focus();
  }
  els.levelCelebrationClose.textContent = "Later";
  els.levelCelebration.classList.remove("hidden");
}

function handleNamingCeremonySubmit(event) {
  event.preventDefault();
  const name = normalizeVillageName(els.namingCeremonyInput?.value);
  if (!name) {
    els.namingCeremonyInput?.focus();
    return;
  }
  saveVillageName(name);
  hideNamingCeremonyForm();
  els.levelCelebration.classList.add("hidden");
  renderVillageName();
  renderVillageCards();
  if (currentProfileId) renderDashboard();
}

function checkTownCenterStageUnlocks() {
  if (!profileStore) return;
  const group = getCurrentGroup();
  if (!group) return;
  group.townCenterStagesSeen = normalizeRewardIdList(group.townCenterStagesSeen);
  const sharedCoins = getGroupCoinTotal(group);
  const newStage = TOWN_CENTER_STAGES.find((stage) => {
    return stage.coins > 0 && sharedCoins >= stage.coins && !group.townCenterStagesSeen.includes(stage.id);
  });
  if (!newStage) return;
  group.townCenterStagesSeen.push(newStage.id);
  showTownCenterStageCelebration(newStage);
}

function showTownCenterStageCelebration(stage) {
  if (deferCelebration(() => showTownCenterStageCelebration(stage))) return;
  els.levelCelebrationTitle.textContent = "Village Upgrade!";
  els.levelCelebrationProfile.textContent = "The Town Center has unlocked:";
  els.levelCelebrationLevel.textContent = getTownCenterStageName(stage);
  els.levelCelebrationBonus.textContent = "";
  els.levelCelebrationBonus.classList.add("hidden");
  showRewardCelebrationActions("town-center", "View Progress");
  els.levelCelebration.classList.remove("hidden");
}

function awardLevelBonusIfNeeded(profile) {
  profile.levelBonusesAwarded = normalizeLevelBonuses(profile.levelBonusesAwarded, 0);
  const reachedLevel = [...COIN_LEVELS]
    .reverse()
    .find((level) => level.min > 0 && normalizeCoinCount(profile.coins) >= level.min);

  if (!reachedLevel) return;

  const levelId = getLevelId(reachedLevel);
  if (profile.levelBonusesAwarded.includes(levelId)) return;

  profile.levelBonusesAwarded.push(levelId);
  profile.coins = normalizeCoinCount(profile.coins) + LEVEL_UP_BONUS;
  showLevelCelebration(profile, reachedLevel);
}

function showLevelCelebration(profile, level) {
  if (deferCelebration(() => showLevelCelebration(profile, level))) return;
  els.levelCelebrationTitle.textContent = "🎉 Congratulations!";
  els.levelCelebrationProfile.textContent = `${profile.name} reached:`;
  els.levelCelebrationLevel.textContent = `${level.icon} ${level.name}`;
  els.levelCelebrationBonus.textContent = `+${LEVEL_UP_BONUS} bonus coins`;
  els.levelCelebrationBonus.classList.remove("hidden");
  hideRewardCelebrationActions();
  els.levelCelebration.classList.remove("hidden");
}

function celebrateFamilyLevelIfNeeded() {
  const group = getCurrentGroup();
  if (!group) return;
  group.familyLevelsReached = normalizeFamilyLevelsReached(group.familyLevelsReached, Object.fromEntries(getCurrentGroupProfiles().map((profile) => [profile.id, profile])));
  const familyLevel = getFamilyWealthLevel(getGroupCoinTotal(group));
  if (familyLevel.min === 0) return;

  const levelId = getFamilyLevelId(familyLevel);
  if (group.familyLevelsReached.includes(levelId)) return;

  group.familyLevelsReached.push(levelId);
  showFamilyLevelCelebration(familyLevel);
}

function showFamilyLevelCelebration(level) {
  if (deferCelebration(() => showFamilyLevelCelebration(level))) return;
  els.levelCelebrationTitle.textContent = "Shared Village Milestone";
  els.levelCelebrationProfile.textContent = "Unser Dorf reached:";
  els.levelCelebrationLevel.textContent = level.name;
  els.levelCelebrationBonus.textContent = "";
  els.levelCelebrationBonus.classList.add("hidden");
  hideRewardCelebrationActions();
  els.levelCelebration.classList.remove("hidden");
}

function showDailyChallengeComplete(challenge) {
  if (deferCelebration(() => showDailyChallengeComplete(challenge))) return;
  els.levelCelebrationTitle.textContent = "🎉 Daily Challenge Complete!";
  els.levelCelebrationProfile.textContent = "Challenge:";
  els.levelCelebrationLevel.textContent = `${challenge.icon} ${challenge.name}`;
  els.levelCelebrationBonus.textContent = `Reward: 🪙 +${challenge.reward} Coins`;
  els.levelCelebrationBonus.classList.remove("hidden");
  hideRewardCelebrationActions();
  els.levelCelebration.classList.remove("hidden");
}

function checkAchievements(reason = "") {
  if (!profileStore || !currentProfileId || checkingAchievements) return;
  checkingAchievements = true;
  try {
    const profile = getCurrentProfile();
    profile.achievementsUnlocked = normalizeAchievementList(profile.achievementsUnlocked);
    promoteFamilyAchievements(profileStore);
    const familyAchievementIds = getFamilyAchievementIds(profileStore);

    ACHIEVEMENTS.forEach((achievement) => {
      const isUnlocked = achievement.scope === "family"
        ? familyAchievementIds.includes(achievement.id)
        : profile.achievementsUnlocked.includes(achievement.id);
      if (isUnlocked || !isAchievementConditionMet(achievement, profile)) return;
      unlockAchievement(achievement, profile, reason);
    });
  } finally {
    checkingAchievements = false;
  }
}

function isAchievementConditionMet(achievement, profile) {
  if (achievement.testOnly) return false;
  return getAchievementProgress(achievement, profile).isComplete;
}

function hasAnyCorrectQuizAnswer(profile) {
  return Object.values(profile.articleProgress || {}).some((entry) => normalizeCounter(entry.articleCorrectCount) > 0)
    || Object.values(profile.vocabularyProgress || {}).some((entry) => normalizeCounter(entry.correctCount) > 0)
    || Object.values(profile.nounVerbProgress || {}).some((entry) => normalizeCounter(entry.correctCount) > 0)
    || Object.values(profile.meaningMatchProgress || {}).some((entry) => normalizeCounter(entry.correctCount) > 0)
    || Object.values(profile.prepositionProgress || {}).some((entry) => normalizeCounter(entry.correctCount) > 0);
}

function getNounVerbCorrectAnswerCount(profile) {
  return Object.values(profile.nounVerbProgress || {}).reduce((total, entry) => {
    return total + normalizeCounter(entry.correctCount);
  }, 0);
}

function getTotalCorrectAnswerCount(profile) {
  if (!profile) return 0;
  return [
    profile.articleProgress,
    profile.vocabularyProgress,
    profile.nounVerbProgress,
    profile.meaningMatchProgress,
    profile.prepositionProgress
  ].reduce((total, progress) => {
    return total + Object.values(progress || {}).reduce((progressTotal, entry) => {
      return progressTotal + normalizeCounter(entry.articleCorrectCount ?? entry.correctCount);
    }, 0);
  }, 0);
}

function unlockAchievement(achievement, profile, reason = "") {
  if (achievement.scope === "family") {
    const group = getCurrentGroup();
    if (group) {
      group.familyAchievementsUnlocked = normalizeAchievementList(group.familyAchievementsUnlocked);
      if (!group.familyAchievementsUnlocked.includes(achievement.id)) group.familyAchievementsUnlocked.push(achievement.id);
      profileStore.familyAchievementsUnlocked = group.familyAchievementsUnlocked;
    } else {
      profileStore.familyAchievementsUnlocked.push(achievement.id);
    }
    showAchievementCelebration(achievement);
    return;
  }

  profile.achievementsUnlocked.push(achievement.id);
  if (achievement.reward > 0) {
    profile.coins = normalizeCoinCount(profile.coins) + achievement.reward;
    awardLevelBonusIfNeeded(profile);
    celebrateFamilyLevelIfNeeded();
  }
  showAchievementCelebration(achievement);
  if (reason !== "coins") checkAchievements("achievement-reward");
}

function showAchievementCelebration(achievement) {
  if (deferCelebration(() => showAchievementCelebration(achievement))) return;
  els.levelCelebrationTitle.textContent = "🎉 Achievement Unlocked!";
  els.levelCelebrationProfile.textContent = achievement.scope === "family" ? "Shared achievement:" : "Achievement:";
  els.levelCelebrationLevel.textContent = `${achievement.icon} ${achievement.name}`;
  if (achievement.reward > 0) {
    els.levelCelebrationBonus.textContent = `+${achievement.reward} Bonus ${achievement.reward === 1 ? "Coin" : "Coins"}`;
    els.levelCelebrationBonus.classList.remove("hidden");
  } else {
    els.levelCelebrationBonus.textContent = "Learning milestone";
    els.levelCelebrationBonus.classList.remove("hidden");
  }
  hideRewardCelebrationActions();
  els.levelCelebration.classList.remove("hidden");
}

async function testPersonalAchievement() {
  if (!currentProfileId) return;
  const achievement = getAchievementById("test-personal-achievement");
  const profile = getCurrentProfile();
  if (!achievement || !profile) return;
  profile.achievementsUnlocked = normalizeAchievementList(profile.achievementsUnlocked);
  if (!profile.achievementsUnlocked.includes(achievement.id)) {
    profile.achievementsUnlocked.push(achievement.id);
    profile.coins = normalizeCoinCount(profile.coins) + achievement.reward;
    showAchievementCelebration(achievement);
  } else {
    showAchievementCelebration(achievement);
  }
  awardLevelBonusIfNeeded(profile);
  celebrateFamilyLevelIfNeeded();
  saveProfileStore();
  await saveProfileStoreToCloudNow();
  renderAchievements();
  if (currentView === "achievements") renderAchievementCollection();
  renderCoinLeaderboard();
  renderAchievementDebugPanel();
}

async function testFamilyAchievement() {
  const achievement = getAchievementById("test-family-achievement");
  if (!achievement || !profileStore) return;
  profileStore.familyAchievementsUnlocked = normalizeAchievementList(profileStore.familyAchievementsUnlocked);
  if (!profileStore.familyAchievementsUnlocked.includes(achievement.id)) {
    profileStore.familyAchievementsUnlocked.push(achievement.id);
  }
  Object.values(profileStore.profiles || {}).forEach((profile) => {
    profile.achievementsUnlocked = normalizeAchievementList(profile.achievementsUnlocked);
    if (!profile.achievementsUnlocked.includes(achievement.id)) {
      profile.achievementsUnlocked.push(achievement.id);
    }
  });
  promoteFamilyAchievements(profileStore);
  showAchievementCelebration(achievement);
  saveProfileStore();
  await saveProfileStoreToCloudNow();
  renderAchievements();
  if (currentView === "achievements") renderAchievementCollection();
  renderAchievementDebugPanel();
}

function recordDailyActivity(type, details = {}) {
  if (!currentProfileId) return;
  const profile = getCurrentProfile();
  prepareProfileDailyState(profile);
  profile.villageContribution = normalizeVillageContribution(profile.villageContribution);

  if (type === "article") {
    const dailyChallenge = getDailyChallengeForDate(profile.dailyChallenge.date);
    profile.dailyChallenge.articleQuestions += 1;
    if (details.isCorrect) profile.dailyChallenge.correctArticleAnswers += 1;
    profile.streak.articleQuestions += 1;
    profile.villageContribution.articleQuestions += 1;
    const challengeProgress = getDailyChallengeProgress(profile.dailyChallenge, dailyChallenge);
    if (!profile.dailyChallenge.completed && challengeProgress.raw >= dailyChallenge.goal) {
      profile.dailyChallenge.completed = true;
      if (profile.dailyChallenge.rewardAwardedFor !== dailyChallenge.id) {
        profile.dailyChallenge.rewardAwardedFor = dailyChallenge.id;
        awardCoins(dailyChallenge.reward);
      }
      showDailyChallengeComplete(dailyChallenge);
    }
  }

  if (type === "vocabulary") {
    profile.streak.vocabularyCards += 1;
    profile.villageContribution.vocabularyCards += 1;
  }

  updateStreakQualification(profile);
  checkAchievements("daily-activity");
  saveProfileStore();
}

function deferCelebration(showCelebration) {
  if (!challengeSession.type || challengeSession.complete) return false;
  pendingCelebrations.push(showCelebration);
  return true;
}

function showNextPendingCelebration() {
  if (!els.levelCelebration.classList.contains("hidden")) return false;
  const nextCelebration = pendingCelebrations.shift();
  if (!nextCelebration) return false;
  nextCelebration();
  return true;
}

function updateStreakQualification(profile) {
  const today = getTodayKey();
  const qualifiesToday = profile.streak.articleQuestions >= STREAK_ACTIVITY_GOAL
    || profile.streak.vocabularyCards >= STREAK_ACTIVITY_GOAL;

  if (!qualifiesToday || profile.streak.lastQualifiedDate === today) return;

  const distance = profile.streak.lastQualifiedDate ? getDayDistance(profile.streak.lastQualifiedDate, today) : null;
  profile.streak.current = distance === 1 ? normalizeCounter(profile.streak.current) + 1 : 1;
  profile.streak.best = Math.max(normalizeCounter(profile.streak.best), profile.streak.current);
  profile.streak.lastQualifiedDate = today;
}

function rateArticleCard(rating) {
  const card = visibleCards[currentIndex];
  const previous = getArticleProgressEntry(card);
  articleProgress[card.id] = {
    ...previous,
    articleStatus: normalizeArticleStatus(rating, previous),
    updatedAt: new Date().toISOString()
  };
  recordStudyHistory(els.modeSelect.value === "article" ? "article-practice" : "article-quiz", card, getArticleStatus(card));
  saveArticleProgress();

  if (visibleCards.length > 1) {
    currentIndex = (currentIndex + 1) % visibleCards.length;
  }

  applyModeAndFilter();
  saveCurrentPosition();
}

function getArticleReviewLists() {
  return cards.reduce(
    (lists, card) => {
      if (!card.isNoun) return lists;
      const rating = getArticleStatus(card);
      if (rating === "mastered") lists.mastered.push(card);
      else if (rating === "learned") lists.learned.push(card);
      else lists.new.push(card);
      return lists;
    },
    { new: [], learned: [], mastered: [] }
  );
}

function buildExampleText(card) {
  if (els.modeSelect.value !== "article" || !selectedArticle) return card.example || "-";
  const marker = selectedArticle === card.article ? "Correct" : `Your guess: ${selectedArticle}`;
  return `${marker}. ${card.example || ""}`.trim();
}

function getMeaningStatus(card) {
  const entry = progress[card.id];
  return normalizeMeaningStatus(entry?.meaningStatus || entry?.rating);
}

function getVocabularyProgressEntry(card) {
  const entry = vocabularyProgress[card.id] || {};
  const correctCount = normalizeCounter(entry.correctCount);
  const wrongCount = normalizeCounter(entry.wrongCount);
  return {
    ...entry,
    correctCount,
    wrongCount,
    lastAnsweredAt: typeof entry.lastAnsweredAt === "string"
      ? entry.lastAnsweredAt
      : typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    lastWrongAt: typeof entry.lastWrongAt === "string"
      ? entry.lastWrongAt
      : wrongCount > 0 && typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    status: normalizeVocabularyMasteryStatus(entry.status, { correctCount })
  };
}

function getVocabularyMasteryStatus(card) {
  return getVocabularyProgressEntry(card).status;
}

function getVocabularyLastAnsweredMs(card) {
  const lastAnswered = Date.parse(getVocabularyProgressEntry(card).lastAnsweredAt);
  return Number.isFinite(lastAnswered) ? lastAnswered : 0;
}

function getArticleProgressEntry(card) {
  const entry = articleProgress[card.id] || {};
  const articleCorrectCount = normalizeCounter(entry.articleCorrectCount);
  const articleWrongCount = normalizeCounter(entry.articleWrongCount);
  return {
    ...entry,
    articleCorrectCount,
    articleWrongCount,
    articleLastAnsweredAt: typeof entry.articleLastAnsweredAt === "string"
      ? entry.articleLastAnsweredAt
      : typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    articleLastWrongAt: typeof entry.articleLastWrongAt === "string"
      ? entry.articleLastWrongAt
      : articleWrongCount > 0 && typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    articleStatus: normalizeArticleStatus(entry.articleStatus || entry.rating, { articleCorrectCount })
  };
}

function getArticleStatus(card) {
  return getArticleProgressEntry(card).articleStatus;
}

function getArticleLastAnsweredMs(card) {
  const lastAnswered = Date.parse(getArticleProgressEntry(card).articleLastAnsweredAt);
  return Number.isFinite(lastAnswered) ? lastAnswered : 0;
}

function getArticleLastWrongMs(card) {
  const lastWrong = Date.parse(getArticleProgressEntry(card).articleLastWrongAt);
  return Number.isFinite(lastWrong) ? lastWrong : 0;
}

function isWrongRecently(card) {
  const entry = getArticleProgressEntry(card);
  if (!entry.articleWrongCount || entry.articleStatus === "mastered") return false;
  const lastAnswered = getArticleLastWrongMs(card);
  if (!lastAnswered) return false;
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  return Date.now() - lastAnswered <= sevenDays;
}

function getArticleSummary() {
  return cards.reduce(
    (total, card) => {
      if (!card.isNoun) return total;
      total.nouns += 1;
      total[getArticleStatus(card)] += 1;
      if (isWrongRecently(card)) total.wrongRecently += 1;
      if (getMeaningStatus(card) === "known" && getArticleStatus(card) !== "mastered") total.gap += 1;
      return total;
    },
    { new: 0, learned: 0, mastered: 0, wrongRecently: 0, gap: 0, nouns: 0 }
  );
}

function getWordLearningSummary() {
  return cards.reduce(
    (total, card) => {
      total[getVocabularyMasteryStatus(card)] += 1;
      return total;
    },
    { new: 0, learned: 0, mastered: 0 }
  );
}

function getWordsLearnedCount() {
  return cards.filter((card) => {
    const meaningKnown = getMeaningStatus(card) === "known";
    const articleKnown = !card.isNoun || ["learned", "mastered"].includes(getArticleStatus(card));
    return meaningKnown && articleKnown;
  }).length;
}

function resetNounVerbQuizState() {
  nounVerbQuizState = {
    currentQuestionId: "",
    selectedAnswer: "",
    hasAnswered: false,
    currentChoices: []
  };
}

function getCurrentNounVerbPair() {
  if (!nounVerbQuizState.currentQuestionId) return null;
  return visibleNounVerbPairs.find((pair) => pair.id === nounVerbQuizState.currentQuestionId) || null;
}

function generateNounVerbQuestion(reason, targetIndex = nounVerbCurrentIndex) {
  if (!visibleNounVerbPairs.length) {
    resetNounVerbQuizState();
    console.log("Noun-verb question generated", {
      currentQuestionId: "",
      reason,
      availableQuestions: 0
    });
    return;
  }

  nounVerbCurrentIndex = clamp(targetIndex, 0, visibleNounVerbPairs.length - 1);
  const pair = visibleNounVerbPairs[nounVerbCurrentIndex];
  nounVerbQuizState = {
    currentQuestionId: pair.id,
    selectedAnswer: "",
    hasAnswered: false,
    currentChoices: buildNounVerbChoices(pair)
  };
  rememberNounVerbQuestion(pair);
  console.log("Noun-verb question generated", {
    currentQuestionId: pair.id,
    noun: pair.noun,
    reason,
    phrase: pair.phrase
  });
}

function renderNounVerbQuiz() {
  const pair = getCurrentNounVerbPair();
  const hasPair = Boolean(pair);
  if (hasPair) {
    nounVerbCurrentIndex = visibleNounVerbPairs.findIndex((item) => item.id === pair.id);
  }
  els.nounVerbTitle.textContent = "Noun-Verb Pairs";
  els.vocabularyReviewDebug?.classList.add("hidden");
  els.nounVerbInstruction.textContent = "Choose the verb";
  els.nounVerbStage.classList.toggle("noun-verb-result-visible", nounVerbQuizState.hasAnswered);
  els.showAnswer.classList.add("hidden");
  els.ratingButtons.classList.add("hidden");
  els.previousCard.disabled = visibleNounVerbPairs.length < 2;
  els.nextCard.disabled = visibleNounVerbPairs.length < 2;
  els.nounVerbEmptyState.classList.toggle("hidden", hasPair);
  els.nounVerbPrompt.classList.toggle("hidden", !hasPair);
  els.nounVerbOptions.classList.toggle("hidden", !hasPair);
  els.nounVerbResult.classList.add("hidden");
  els.nounVerbNext.classList.add("hidden");
  els.nounVerbEmptyState.querySelector("h2").textContent = "No noun-verb pairs available";
  els.nounVerbEmptyState.querySelector("p").textContent = "Make sure nomen_verb_verbindungen.csv is uploaded.";
  els.nounVerbCounter.textContent = hasPair
    ? `Card ${nounVerbCurrentIndex + 1} of ${visibleNounVerbPairs.length}`
    : "0 / 0";
  if (!pair) {
    els.nounVerbPrompt.textContent = "No noun-verb pairs";
    els.nounVerbOptions.replaceChildren();
    return;
  }

  els.nounVerbPrompt.textContent = buildNounVerbPrompt(pair);
  els.nounVerbOptions.replaceChildren(
    ...nounVerbQuizState.currentChoices.map((verb) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.verb = verb;
      button.textContent = verb;
      button.disabled = nounVerbQuizState.hasAnswered;
      button.classList.toggle("correct", nounVerbQuizState.hasAnswered && verb === pair.verb);
      button.classList.toggle(
        "incorrect",
        nounVerbQuizState.hasAnswered && verb === nounVerbQuizState.selectedAnswer && verb !== pair.verb
      );
      return button;
    })
  );

  if (nounVerbQuizState.hasAnswered) renderNounVerbResult(pair);
}

function buildNounVerbPrompt(pair) {
  const index = pair.phrase.toLowerCase().indexOf(pair.verb.toLowerCase());
  if (index >= 0) {
    return `${pair.phrase.slice(0, index)}_____${pair.phrase.slice(index + pair.verb.length)}`;
  }
  return `${pair.phrase} _____`;
}

function buildNounVerbChoices(pair) {
  const wrongChoices = shuffleCards(
    Array.from(new Set(nounVerbPairs.map((item) => item.verb).filter((verb) => verb && verb !== pair.verb)))
  ).slice(0, 3);
  return shuffleCards([pair.verb, ...wrongChoices]);
}

function answerNounVerbQuiz(verb) {
  const pair = getCurrentNounVerbPair();
  if (!pair || nounVerbQuizState.hasAnswered) return;
  const isCorrect = verb === pair.verb;
  nounVerbQuizState.selectedAnswer = verb;
  nounVerbQuizState.hasAnswered = true;
  console.log("Noun-verb answer clicked", {
    currentQuestionId: pair.id,
    selectedAnswer: verb,
    correctAnswer: pair.verb,
    isCorrect
  });
  updateNounVerbLearningProgress(pair, isCorrect);
  if (isCorrect) awardCoins(2);
  recordStudyHistory("noun-verb", pair, isCorrect ? "correct" : "wrong");
  saveNounVerbProgress();
  saveNounVerbPosition();
  renderNounVerbQuiz();
  renderCoinChallenges();
  if (currentView === "dashboard") renderDashboard();
}

function renderNounVerbResult(pair) {
  const isCorrect = nounVerbQuizState.selectedAnswer === pair.verb;
  els.nounVerbResult.classList.remove("hidden", "success", "error");
  els.nounVerbResult.classList.add(isCorrect ? "success" : "error");
  els.nounVerbResult.innerHTML = `
    <span class="quiz-result-label">${isCorrect ? "✅ Correct" : "❌ Wrong"}</span>
    ${isCorrect ? "" : "<span class=\"quiz-result-correction\">Correct answer:</span>"}
    <span class="quiz-result-answer">${escapeHtml(pair.phrase)}</span>
    <span class="quiz-result-meaning"><strong>English:</strong> ${escapeHtml(pair.english || "-")}</span>
    <span class="quiz-result-meaning"><strong>Example:</strong> ${escapeHtml(pair.example || "-")}</span>
    ${isCorrect ? "<span class=\"quiz-result-reward\"><strong>Reward:</strong> 🪙🪙 +2 Coins</span>" : ""}
  `;
  els.nounVerbOptions.querySelectorAll("button").forEach((button) => {
    const verb = button.dataset.verb;
    button.disabled = true;
    button.classList.toggle("correct", verb === pair.verb);
    button.classList.toggle("incorrect", verb === nounVerbQuizState.selectedAnswer && verb !== pair.verb);
  });
  els.nounVerbNext.classList.add("hidden");
}

function resetVocabularyReviewQuizState() {
  vocabularyReviewQuizState = {
    currentQuestionId: "",
    selectedAnswer: "",
    hasAnswered: false,
    currentChoices: []
  };
}

function getVocabularyReviewCards() {
  if (challengeSession.type !== "vocabulary") return cards;
  const questionIds = new Set(challengeSession.questionIds || []);
  return getChallengeVocabularyDeck(challengeSession.level, challengeSession.category || selectedChallengeCategory)
    .filter((card) => !questionIds.size || questionIds.has(card.id));
}

function getVocabularyChallengeCards(level) {
  return levelDatasets[level]?.vocabulary || [];
}

function getArticleChallengeCards(level) {
  return levelDatasets[level]?.articles || [];
}

function getCurrentVocabularyReviewCard() {
  if (!vocabularyReviewQuizState.currentQuestionId) return null;
  return visibleVocabularyReviewCards.find((card) => card.id === vocabularyReviewQuizState.currentQuestionId) || null;
}

function applyVocabularyReviewOrder() {
  const currentQuestionId = vocabularyReviewQuizState.currentQuestionId;
  visibleVocabularyReviewCards = applyVocabularyReviewPriorityOrder(getVocabularyReviewCards());
  const currentQuestionIndex = visibleVocabularyReviewCards.findIndex((card) => card.id === currentQuestionId);
  vocabularyReviewCurrentIndex = currentQuestionIndex >= 0
    ? currentQuestionIndex
    : clamp(vocabularyReviewCurrentIndex, 0, Math.max(visibleVocabularyReviewCards.length - 1, 0));
}

function applyVocabularyReviewPriorityOrder(cardList) {
  const recentWordKeys = new Set(recentVocabularyWords);
  const freshCards = cardList.filter((card) => !recentWordKeys.has(getVocabularyReviewWordKey(card)));
  const repeatCards = cardList.filter((card) => recentWordKeys.has(getVocabularyReviewWordKey(card)));
  return [...sortVocabularyReviewCandidates(freshCards), ...sortVocabularyReviewCandidates(repeatCards)];
}

function generateVocabularyReviewQuestion(reason, targetIndex = vocabularyReviewCurrentIndex) {
  if (!visibleVocabularyReviewCards.length) {
    resetVocabularyReviewQuizState();
    console.log("Vocabulary Review question generated", {
      currentQuestionId: "",
      reason,
      availableQuestions: 0
    });
    return;
  }

  vocabularyReviewCurrentIndex = clamp(targetIndex, 0, visibleVocabularyReviewCards.length - 1);
  const card = visibleVocabularyReviewCards[vocabularyReviewCurrentIndex];
  vocabularyReviewQuizState = {
    currentQuestionId: card.id,
    selectedAnswer: "",
    hasAnswered: false,
    currentChoices: buildVocabularyReviewChoices(card)
  };
  rememberVocabularyReviewWord(card);
  console.log("Vocabulary Review question generated", {
    currentQuestionId: card.id,
    reason,
    word: card.word,
    recentVocabularyWords: [...recentVocabularyWords]
  });
}

function renderVocabularyReviewQuiz() {
  const card = getCurrentVocabularyReviewCard();
  const hasCard = Boolean(card);
  if (hasCard) {
    vocabularyReviewCurrentIndex = visibleVocabularyReviewCards.findIndex((item) => item.id === card.id);
  }
  els.nounVerbTitle.textContent = challengeSession.type === "vocabulary" ? "Vocabulary" : "Vocabulary Review";
  els.vocabularyReviewDebug?.classList.add("hidden");
  els.nounVerbInstruction.textContent = "Choose the English meaning.";
  els.nounVerbStage.classList.toggle("noun-verb-result-visible", vocabularyReviewQuizState.hasAnswered);
  els.showAnswer.classList.add("hidden");
  els.ratingButtons.classList.add("hidden");
  els.previousCard.disabled = visibleVocabularyReviewCards.length < 2;
  els.nextCard.disabled = visibleVocabularyReviewCards.length < 2;
  els.nounVerbEmptyState.classList.toggle("hidden", hasCard);
  els.nounVerbPrompt.classList.toggle("hidden", !hasCard);
  els.nounVerbOptions.classList.toggle("hidden", !hasCard);
  els.nounVerbResult.classList.add("hidden");
  els.nounVerbNext.classList.toggle("hidden", !vocabularyReviewQuizState.hasAnswered);
  renderChallengeBanner(els.nounVerbChallengeBanner);
  const vocabularyChallengeActive = challengeSession.type === "vocabulary";
  els.nounVerbCounter.textContent = hasCard
    ? vocabularyChallengeActive
      ? `Question ${Math.min(challengeSession.answered + (vocabularyReviewQuizState.hasAnswered ? 0 : 1), CHALLENGE_QUESTION_COUNT)} of ${CHALLENGE_QUESTION_COUNT}`
      : `Card ${vocabularyReviewCurrentIndex + 1} of ${visibleVocabularyReviewCards.length}`
    : "0 / 0";
  if (!card) {
    els.nounVerbPrompt.textContent = "No vocabulary words";
    els.nounVerbEmptyState.querySelector("h2").textContent = "No vocabulary words available";
    els.nounVerbEmptyState.querySelector("p").textContent = `The ${challengeSession.level || selectedLearningLevel} vocabulary dataset could not be loaded.`;
    els.nounVerbOptions.replaceChildren();
    return;
  }

  els.nounVerbPrompt.textContent = card.word;
  els.nounVerbOptions.replaceChildren(
    ...vocabularyReviewQuizState.currentChoices.map((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.vocabularyChoice = choice;
      button.textContent = `${String.fromCharCode(65 + index)}) ${choice}`;
      button.disabled = vocabularyReviewQuizState.hasAnswered;
      button.classList.toggle("correct", vocabularyReviewQuizState.hasAnswered && choice === card.english);
      button.classList.toggle(
        "incorrect",
        vocabularyReviewQuizState.hasAnswered && choice === vocabularyReviewQuizState.selectedAnswer && choice !== card.english
      );
      return button;
    })
  );

  if (vocabularyReviewQuizState.hasAnswered) renderVocabularyReviewResult(card);
}

function buildVocabularyReviewChoices(card) {
  const answerSource = challengeSession.type === "vocabulary"
    ? getChallengeVocabularyDeck(challengeSession.level || selectedLearningLevel, challengeSession.category || selectedChallengeCategory)
    : getVocabularyChallengeCards(challengeSession.level || selectedLearningLevel);
  const wrongChoices = shuffleCards(
    Array.from(new Set(answerSource
      .map((item) => item.english)
      .filter((english) => english && english !== card.english)))
  ).slice(0, 3);
  return shuffleCards([card.english, ...wrongChoices]);
}

function answerVocabularyReviewQuiz(selectedAnswer) {
  const card = getCurrentVocabularyReviewCard();
  if (!card || vocabularyReviewQuizState.hasAnswered) return;
  const isCorrect = selectedAnswer === card.english;
  recordChallengeSessionAnswer("vocabulary", isCorrect);
  vocabularyReviewQuizState.selectedAnswer = selectedAnswer;
  vocabularyReviewQuizState.hasAnswered = true;
  updateVocabularyReviewStats(isCorrect);
  if (isCorrect) {
    awardCoins(1);
  }
  updateVocabularyMasteryProgress(card, isCorrect);
  recordStudyHistory("vocabulary-review", card, isCorrect ? "correct" : "wrong");
  recordDailyActivity("vocabulary");
  saveVocabularyProgress();
  renderVocabularyReviewQuiz();
  renderCoinChallenges();
}

function updateVocabularyMasteryProgress(card, isCorrect) {
  const previous = getVocabularyProgressEntry(card);
  const now = new Date().toISOString();
  const correctCount = previous.correctCount + (isCorrect ? 1 : 0);
  const wrongCount = previous.wrongCount + (isCorrect ? 0 : 1);
  const status = isCorrect
    ? correctCount >= 3 ? "mastered" : "learned"
    : previous.status;

  vocabularyProgress[card.id] = {
    ...previous,
    correctCount,
    wrongCount,
    lastAnsweredAt: now,
    lastWrongAt: isCorrect ? previous.lastWrongAt || "" : now,
    status,
    updatedAt: now
  };
}

function updateVocabularyReviewStats(isCorrect) {
  const profile = getCurrentProfile();
  profile.vocabularyReviewStats = normalizeVocabularyReviewStats(profile.vocabularyReviewStats);
  profile.vocabularyReviewStats.answered += 1;
  profile.vocabularyReviewStats[isCorrect ? "correct" : "incorrect"] += 1;
  profile.vocabularyReviewStats.updatedAt = new Date().toISOString();
}

function renderVocabularyReviewResult(card) {
  const isCorrect = vocabularyReviewQuizState.selectedAnswer === card.english;
  els.nounVerbResult.classList.remove("hidden", "success", "error");
  els.nounVerbResult.classList.add(isCorrect ? "success" : "error");
  els.nounVerbResult.innerHTML = `
    <span class="quiz-result-label">${isCorrect ? "✅ Correct!" : "❌ Not quite"}</span>
    <span class="quiz-result-answer">${escapeHtml(card.word)} = ${escapeHtml(capitalizeFirst(card.english))}</span>
  `;
  els.nounVerbOptions.querySelectorAll("button").forEach((button) => {
    const answer = button.dataset.vocabularyChoice;
    button.disabled = true;
    button.classList.toggle("correct", answer === card.english);
    button.classList.toggle("incorrect", answer === vocabularyReviewQuizState.selectedAnswer && answer !== card.english);
  });
  els.nounVerbNext.classList.remove("hidden");
}

function moveVocabularyReviewCard(direction) {
  applyVocabularyReviewOrder();
  if (!visibleVocabularyReviewCards.length) {
    generateVocabularyReviewQuestion(direction > 0 ? "next/skip" : "previous", 0);
    renderVocabularyReviewQuiz();
    return;
  }
  vocabularyReviewCurrentIndex = direction > 0
    ? getNextVocabularyReviewIndex()
    : (vocabularyReviewCurrentIndex - 1 + visibleVocabularyReviewCards.length) % visibleVocabularyReviewCards.length;
  generateVocabularyReviewQuestion(direction > 0 ? "next/skip" : "previous", vocabularyReviewCurrentIndex);
  renderVocabularyReviewQuiz();
}

function getNextVocabularyReviewIndex() {
  if (visibleVocabularyReviewCards.length < 2) return vocabularyReviewCurrentIndex;
  const currentId = vocabularyReviewQuizState.currentQuestionId || visibleVocabularyReviewCards[vocabularyReviewCurrentIndex]?.id || "";
  const currentWordKey = getVocabularyReviewWordKey(visibleVocabularyReviewCards[vocabularyReviewCurrentIndex]);
  const recentWordKeys = new Set(recentVocabularyWords);
  const wrongWaitKeys = new Set(recentVocabularyWords.slice(0, WRONG_VOCABULARY_WAIT_BUFFER));
  const candidates = visibleVocabularyReviewCards
    .map((card, index) => ({ card, index }))
    .filter(({ card }) => card.id !== currentId && getVocabularyReviewWordKey(card) !== currentWordKey);

  const freshCandidates = candidates.filter(({ card }) => !recentWordKeys.has(getVocabularyReviewWordKey(card)));
  const outsideWrongWaitCandidates = candidates.filter(({ card }) => !wrongWaitKeys.has(getVocabularyReviewWordKey(card)));
  const selectedIndex = pickVocabularyReviewCandidateIndex(freshCandidates)
    ?? pickVocabularyReviewCandidateIndex(outsideWrongWaitCandidates)
    ?? pickVocabularyReviewCandidateIndex(candidates)
    ?? vocabularyReviewCurrentIndex;

  const selectedCard = visibleVocabularyReviewCards[selectedIndex];
  console.log("Vocabulary Review item selected", {
    selectedItemId: selectedCard?.id || "",
    word: selectedCard?.word || "",
    recentVocabularyWords: [...recentVocabularyWords],
    reasonSelected: freshCandidates.some(({ index }) => index === selectedIndex)
      ? "selected outside recentVocabularyWords"
      : "recent repeat allowed because no fresh candidate was available"
  });
  return selectedIndex;
}

function pickVocabularyReviewCandidateIndex(candidates) {
  if (!candidates.length) return null;
  const ordered = sortVocabularyReviewCandidates(candidates.map(({ card }) => card));
  const selectedCard = ordered[0];
  return candidates.find(({ card }) => card.id === selectedCard?.id)?.index ?? null;
}

function sortVocabularyReviewCandidates(cardList) {
  const newCards = [];
  const learned = [];
  const mastered = [];

  cardList.forEach((card) => {
    const status = getVocabularyMasteryStatus(card);
    if (status === "mastered") mastered.push(card);
    else if (status === "learned") learned.push(card);
    else newCards.push(card);
  });

  const randomizedNewCards = shuffleCards(newCards);
  const randomizedLearned = shuffleCards(learned)
    .sort((first, second) => getVocabularyProgressEntry(first).correctCount - getVocabularyProgressEntry(second).correctCount);
  const randomizedMastered = shuffleCards(mastered)
    .sort((first, second) => getVocabularyLastAnsweredMs(first) - getVocabularyLastAnsweredMs(second));

  const occasionalMastered = randomizedMastered.filter((_, index) => index % 6 === 0);
  return [...randomizedNewCards, ...randomizedLearned, ...occasionalMastered, ...randomizedMastered.filter((_, index) => index % 6 !== 0)];
}

function rememberVocabularyReviewWord(card) {
  const wordKey = getVocabularyReviewWordKey(card);
  if (!wordKey) return;
  recentVocabularyWords = [
    wordKey,
    ...recentVocabularyWords.filter((key) => key !== wordKey)
  ].slice(0, RECENT_VOCABULARY_WORD_BUFFER);
}

function getVocabularyReviewWordKey(card) {
  return card?.word ? getSortKey(card.word) : "";
}

function moveNounVerbCard(direction) {
  if (!visibleNounVerbPairs.length) return;
  if (direction > 0) applyNounVerbSmartOrder();
  const nextIndex = direction > 0
    ? getNextNounVerbIndex()
    : (nounVerbCurrentIndex - 1 + visibleNounVerbPairs.length) % visibleNounVerbPairs.length;
  console.log("Noun-verb Next clicked", {
    direction,
    fromQuestionId: nounVerbQuizState.currentQuestionId,
    hasAnswered: nounVerbQuizState.hasAnswered,
    nextIndex
  });
  generateNounVerbQuestion(direction > 0 ? "next/skip" : "previous", nextIndex);
  saveNounVerbPosition();
  renderNounVerbQuiz();
}

function applyNounVerbSmartOrder() {
  const currentQuestionId = nounVerbQuizState.currentQuestionId;
  visibleNounVerbPairs = applyNounVerbPriorityOrder(nounVerbPairs);
  const currentQuestionIndex = visibleNounVerbPairs.findIndex((pair) => pair.id === currentQuestionId);
  nounVerbCurrentIndex = currentQuestionIndex >= 0
    ? currentQuestionIndex
    : clamp(nounVerbCurrentIndex, 0, Math.max(visibleNounVerbPairs.length - 1, 0));
}

function resetMeaningMatchQuizState() {
  meaningMatchQuizState = {
    currentQuestionId: "",
    selectedIndex: -1,
    hasAnswered: false,
    currentPrompt: "",
    currentTemplateId: "",
    currentChoices: []
  };
}

function getCurrentMeaningMatchPair() {
  if (!meaningMatchQuizState.currentQuestionId) return null;
  return visibleMeaningMatchPairs.find((pair) => pair.id === meaningMatchQuizState.currentQuestionId) || null;
}

function generateMeaningMatchQuestion(reason, targetIndex = meaningMatchCurrentIndex) {
  if (!visibleMeaningMatchPairs.length) {
    resetMeaningMatchQuizState();
    console.log("Meaning Match question generated", {
      currentQuestionId: "",
      reason,
      availableQuestions: 0
    });
    return;
  }

  meaningMatchCurrentIndex = clamp(targetIndex, 0, visibleMeaningMatchPairs.length - 1);
  const pair = visibleMeaningMatchPairs[meaningMatchCurrentIndex];
  const questionData = buildMeaningMatchQuestionData(pair);
  meaningMatchQuizState = {
    currentQuestionId: pair.id,
    selectedIndex: -1,
    hasAnswered: false,
    currentPrompt: questionData.prompt,
    currentTemplateId: questionData.templateId,
    currentChoices: questionData.choices
  };
  rememberMeaningMatchQuestion(pair);
  rememberMeaningMatchTemplate(questionData.templateId);
  console.log("Meaning Match question generated", {
    selectedItemId: pair.id,
    reason,
    phrase: pair.phrase,
    templateId: questionData.templateId,
    recentMeaningMatchItems: [...recentMeaningMatchItems]
  });
}

function renderMeaningMatchQuiz() {
  const pair = getCurrentMeaningMatchPair();
  const hasPair = Boolean(pair);
  if (hasPair) {
    meaningMatchCurrentIndex = visibleMeaningMatchPairs.findIndex((item) => item.id === pair.id);
  }
  els.nounVerbTitle.textContent = "Meaning Match";
  els.vocabularyReviewDebug?.classList.add("hidden");
  els.nounVerbInstruction.textContent = "Choose the better German sentence";
  els.nounVerbStage.classList.toggle("noun-verb-result-visible", meaningMatchQuizState.hasAnswered);
  els.showAnswer.classList.add("hidden");
  els.ratingButtons.classList.add("hidden");
  els.previousCard.disabled = visibleMeaningMatchPairs.length < 2;
  els.nextCard.disabled = visibleMeaningMatchPairs.length < 2;
  els.nounVerbEmptyState.classList.toggle("hidden", hasPair);
  els.nounVerbPrompt.classList.toggle("hidden", !hasPair);
  els.nounVerbOptions.classList.toggle("hidden", !hasPair);
  els.nounVerbResult.classList.add("hidden");
  els.nounVerbNext.classList.add("hidden");
  els.nounVerbEmptyState.querySelector("h2").textContent = "No meaning match questions";
  els.nounVerbEmptyState.querySelector("p").textContent = "Make sure meaning_match_items.csv is uploaded.";
  els.nounVerbCounter.textContent = hasPair
    ? `Card ${meaningMatchCurrentIndex + 1} of ${visibleMeaningMatchPairs.length}`
    : "0 / 0";
  if (!pair) {
    els.nounVerbPrompt.textContent = "No meaning match questions";
    els.nounVerbOptions.replaceChildren();
    return;
  }

  els.nounVerbPrompt.textContent = meaningMatchQuizState.currentPrompt || buildMeaningMatchEnglishPrompt(pair);
  els.nounVerbOptions.replaceChildren(
    ...meaningMatchQuizState.currentChoices.map((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.meaningChoice = String(index);
      button.textContent = `${index === 0 ? "A" : "B"}) ${choice.sentence}`;
      button.disabled = meaningMatchQuizState.hasAnswered;
      button.classList.toggle("correct", meaningMatchQuizState.hasAnswered && choice.isCorrect);
      button.classList.toggle(
        "incorrect",
        meaningMatchQuizState.hasAnswered && index === meaningMatchQuizState.selectedIndex && !choice.isCorrect
      );
      return button;
    })
  );

  if (meaningMatchQuizState.hasAnswered) renderMeaningMatchResult(pair);
}

function buildMeaningMatchEnglishPrompt(pair) {
  return pair?.englishSentence || "";
}

function getMeaningMatchMeaning(pair) {
  return String(pair.englishMeaning || pair.english || pair.phrase || "")
    .split(";")[0]
    .replace(/^to\s+/i, "")
    .trim() || pair.phrase;
}

function buildMeaningMatchQuestionData(pair) {
  if (!isMeaningMatchEligiblePair(pair)) {
    return {
      prompt: "",
      templateId: "",
      choices: []
    };
  }
  return {
    prompt: pair.englishSentence,
    templateId: pair.templateId || "curated",
    choices: shuffleCards([
      { sentence: pair.correctGermanSentence, isCorrect: true },
      { sentence: pair.wrongGermanSentence, isCorrect: false }
    ])
  };
}

function buildMeaningMatchChoices(pair) {
  return buildMeaningMatchQuestionData(pair).choices;
}

function getMeaningMatchCorrectSentence(pair) {
  return pair?.correctGermanSentence || "";
}

function getMeaningMatchWrongVerb(pair, template = null) {
  const sameNounVerbs = getMeaningMatchVerbsForNoun(pair.noun);
  const verbs = Array.from(new Set(nounVerbPairs
    .map((item) => item.verb)
    .filter((verb) => {
      if (!verb || verb === pair.verb || sameNounVerbs.has(verb.toLowerCase())) return false;
      if (template?.type === "perfect" && !hasReliableGermanParticiple(verb)) return false;
      return true;
    })))
    .sort((first, second) => first.localeCompare(second, "de"));
  if (!verbs.length) return "";
  return verbs[getStableHash(pair.id || pair.phrase || pair.verb) % verbs.length];
}

function buildMeaningMatchWrongSentence(pair, wrongVerb, correctSentence) {
  if (pair?.wrongGermanSentence) return pair.wrongGermanSentence;
  const escapedVerb = escapeRegExp(pair.verb);
  const verbPattern = new RegExp(escapedVerb, "i");
  if (verbPattern.test(correctSentence)) return correctSentence.replace(verbPattern, wrongVerb);
  return "";
}

function buildMeaningMatchWrongPhrase(pair, wrongVerb) {
  const escapedVerb = escapeRegExp(pair.verb);
  const verbPattern = new RegExp(escapedVerb, "i");
  return getMeaningMatchCleanPhrase(pair).replace(verbPattern, wrongVerb);
}

function getMeaningMatchCleanPhrase(pair) {
  return String(pair.phrase || "")
    .replace(/[.!?]+$/g, "")
    .trim();
}

function getMeaningMatchGeneratedItem(pair) {
  if (!pair?.id) return null;
  if (meaningMatchGeneratedItems.has(pair.id)) return meaningMatchGeneratedItems.get(pair.id);
  const generatedItem = createMeaningMatchGeneratedItem(pair);
  meaningMatchGeneratedItems.set(pair.id, generatedItem);
  return generatedItem;
}

function createMeaningMatchGeneratedItem(pair) {
  if (!isMeaningMatchMeaningSafe(pair)) return null;
  const template = getMeaningMatchTemplate(pair);
  if (!template) return null;
  const meaning = getMeaningMatchMeaningForms(pair);
  const correctPhrase = getMeaningMatchCleanPhrase(pair);
  const wrongVerb = getMeaningMatchWrongVerb(pair, template);
  if (!wrongVerb) return null;
  const wrongPhrase = buildMeaningMatchWrongPhrase(pair, wrongVerb);
  if (!wrongPhrase || wrongPhrase === correctPhrase) return null;
  const correctGermanSentence = buildMeaningMatchSentence(template, pair.verb, correctPhrase);
  const wrongGermanSentence = buildMeaningMatchSentence(template, wrongVerb, wrongPhrase);
  const englishSentence = template.english(meaning);
  if (!isMeaningMatchSentenceQualitySafe(englishSentence, correctGermanSentence, wrongGermanSentence)) return null;
  return {
    phrase: pair.phrase,
    englishSentence,
    correctGermanSentence,
    wrongGermanSentence,
    templateId: template.id
  };
}

function buildMeaningMatchSentence(template, verb, phrase) {
  if (template.type !== "perfect") return template.german({ phrase });
  const aux = getGermanPerfectAuxiliaryForms(verb);
  return template.german({
    aux,
    phrase: buildMeaningMatchPerfectPhrase(phrase, verb)
  });
}

function getMeaningMatchMeaningForms(pair) {
  const base = getMeaningMatchMeaning(pair);
  return {
    base,
    past: getEnglishPastMeaning(base)
  };
}

function getEnglishPastMeaning(meaning) {
  const words = String(meaning || "").trim().split(/\s+/);
  const verb = words.shift() || "";
  const rest = words.length ? ` ${words.join(" ")}` : "";
  const irregular = {
    be: "was",
    become: "became",
    bring: "brought",
    catch: "caught",
    cancel: "canceled",
    come: "came",
    contribute: "contributed",
    do: "did",
    file: "filed",
    feel: "felt",
    find: "found",
    get: "got",
    give: "gave",
    go: "went",
    have: "had",
    hold: "held",
    keep: "kept",
    lay: "laid",
    lead: "led",
    make: "made",
    meet: "met",
    pay: "paid",
    put: "put",
    raise: "raised",
    reach: "reached",
    say: "said",
    see: "saw",
    set: "set",
    spend: "spent",
    submit: "submitted",
    apologize: "apologized",
    take: "took",
    win: "won"
  };
  return `${irregular[verb.toLowerCase()] || regularEnglishPast(verb)}${rest}`;
}

function regularEnglishPast(verb) {
  if (!verb) return "";
  if (/e$/i.test(verb)) return `${verb}d`;
  if (/[^aeiou]y$/i.test(verb)) return `${verb.slice(0, -1)}ied`;
  if (/([bcdfghjklmnpqrstvwxyz])$/i.test(verb) && /[aeiou][bcdfghjklmnpqrstvwxyz]$/i.test(verb)) return `${verb}${verb.slice(-1)}ed`;
  return `${verb}ed`;
}

function capitalizeFirst(value) {
  const text = String(value || "");
  return text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : "";
}

function buildMeaningMatchPerfectPhrase(phrase, verb) {
  const escapedVerb = escapeRegExp(verb);
  return phrase.replace(new RegExp(`${escapedVerb}$`, "i"), getGermanParticiple(verb));
}

function getGermanPerfectAuxiliaryForms(verb) {
  const seinVerbs = new Set(["bleiben", "fahren", "fallen", "fliehen", "gehen", "gelangen", "geraten", "kommen", "laufen", "passieren", "reisen", "springen", "steigen", "sterben", "treten", "wachsen", "werden"]);
  const isSein = seinVerbs.has(String(verb || "").toLowerCase());
  return isSein
    ? { he: "ist", she: "ist", we: "sind", they: "sind" }
    : { he: "hat", she: "hat", we: "haben", they: "haben" };
}

function getGermanParticiple(verb) {
  const normalized = String(verb || "").toLowerCase();
  const participles = {
    abgeben: "abgegeben",
    ablegen: "abgelegt",
    ableisten: "abgeleistet",
    aufnehmen: "aufgenommen",
    aufstellen: "aufgestellt",
    auslösen: "ausgelöst",
    ausüben: "ausgeübt",
    befolgen: "befolgt",
    bekommen: "bekommen",
    bringen: "gebracht",
    erheben: "erhoben",
    erstatten: "erstattet",
    finden: "gefunden",
    geben: "gegeben",
    gewinnen: "gewonnen",
    halten: "gehalten",
    hegen: "gehegt",
    kündigen: "gekündigt",
    legen: "gelegt",
    leisten: "geleistet",
    machen: "gemacht",
    nehmen: "genommen",
    spenden: "gespendet",
    stellen: "gestellt",
    treffen: "getroffen",
    treten: "getreten",
    üben: "geübt",
    verbringen: "verbracht"
  };
  if (participles[normalized]) return participles[normalized];
  if (/ieren$/.test(normalized)) return normalized.replace(/ieren$/, "iert");
  if (/^(be|emp|ent|er|ge|miss|ver|zer)/.test(normalized)) return `${normalized.replace(/en$/, "")}t`;
  return `ge${normalized.replace(/en$/, "")}t`;
}

function hasReliableGermanParticiple(verb) {
  const normalized = String(verb || "").toLowerCase();
  const knownParticiples = new Set([
    "abgeben", "ablegen", "ableisten", "aufnehmen", "aufstellen", "auslösen", "ausüben",
    "befolgen", "bekommen", "bringen", "erheben", "erstatten", "finden", "geben",
    "gewinnen", "halten", "hegen", "kündigen", "legen", "leisten", "machen", "nehmen",
    "spenden", "stellen", "treffen", "treten", "üben", "verbringen"
  ]);
  if (knownParticiples.has(normalized)) return true;
  if (/ieren$/.test(normalized)) return true;
  return false;
}

function getMeaningMatchTemplate(pair) {
  const recentTemplates = new Set(recentMeaningMatchTemplateIds);
  const compatibleTemplates = MEANING_MATCH_TEMPLATES.filter((template) => isMeaningMatchTemplateCompatible(template, pair));
  const freshTemplates = compatibleTemplates.filter((template) => !recentTemplates.has(template.id));
  const candidates = freshTemplates.length ? freshTemplates : compatibleTemplates;
  if (!candidates.length) return null;
  return candidates[getStableHash(`${pair.id || pair.phrase}::${recentMeaningMatchTemplateIds.join("|")}`) % candidates.length];
}

function isMeaningMatchTemplateCompatible(template, pair) {
  if (template.context && !isMeaningMatchContextCompatible(template.context, pair)) return false;
  if (template.type !== "perfect") return true;
  return canBuildMeaningMatchPerfect(pair) && hasReliableGermanParticiple(pair.verb);
}

function canBuildMeaningMatchPerfect(pair) {
  const phrase = getMeaningMatchCleanPhrase(pair);
  return Boolean(pair?.verb && new RegExp(`${escapeRegExp(pair.verb)}$`, "i").test(phrase));
}

function isMeaningMatchContextCompatible(context, pair) {
  const base = getMeaningMatchMeaning(pair).toLowerCase();
  if (context === "work") {
    return /\b(application|inquiry|order|arrangement|agreement|offer|speech|deposit|police report|claim|contribution|confession|remark|selection|authority|instruction|answer)\b/.test(base);
  }
  if (context === "school") {
    return /\b(answer|question|speech|claim|contribution|selection|decision|action|remark|inquiry|application)\b/.test(base);
  }
  if (context === "family") {
    return /\b(dinner|bath|evening|goodbye|selection|decision|arrangement|help|deposit|appointment|conversation)\b/.test(base);
  }
  return true;
}

function isMeaningMatchMeaningSafe(pair) {
  const meaning = getMeaningMatchMeaning(pair).toLowerCase();
  if (!meaning || meaning.length < 3) return false;
  if (/^(be|being)\b/.test(meaning)) return false;
  if (/\b(on|of|from|to|for|with|against|about|at|in)$/i.test(meaning)) return false;
  if (/\bsomeone\b|\bsomething\b|\bsomebody\b|\bone's\b/.test(meaning)) return false;
  return true;
}

function isMeaningMatchSentenceQualitySafe(englishSentence, correctGermanSentence, wrongGermanSentence) {
  const sentence = englishSentence.toLowerCase();
  const blockedPhrases = [
    "make confusion",
    "do an application",
    "do a application",
    "cause an application",
    "make an accident",
    "take a decision"
  ];
  if (blockedPhrases.some((phrase) => sentence.includes(phrase))) return false;
  if (!correctGermanSentence || !wrongGermanSentence || correctGermanSentence === wrongGermanSentence) return false;
  return true;
}

function rememberMeaningMatchTemplate(templateId) {
  if (!templateId) return;
  recentMeaningMatchTemplateIds = [
    templateId,
    ...recentMeaningMatchTemplateIds.filter((id) => id !== templateId)
  ].slice(0, 3);
}

function isMeaningMatchEligiblePair(pair) {
  return isMeaningMatchCuratedItemValid(pair);
}

function doesPhraseContainVerb(phrase, verb) {
  return new RegExp(`(^|\\s)${escapeRegExp(verb)}($|\\s|[.!?])`, "i").test(phrase);
}

function getMeaningMatchVerbsForNoun(noun) {
  const nounKey = getSortKey(noun || "");
  return new Set(nounVerbPairs
    .filter((item) => getSortKey(item.noun || "") === nounKey)
    .map((item) => item.verb.toLowerCase())
    .filter(Boolean));
}

function answerMeaningMatchQuiz(choiceIndex) {
  const pair = getCurrentMeaningMatchPair();
  if (!pair || meaningMatchQuizState.hasAnswered) return;
  const choice = meaningMatchQuizState.currentChoices[choiceIndex];
  if (!choice) return;
  meaningMatchQuizState.selectedIndex = choiceIndex;
  meaningMatchQuizState.hasAnswered = true;
  const isCorrect = Boolean(choice.isCorrect);
  updateMeaningMatchLearningProgress(pair, isCorrect);
  if (isCorrect) awardCoins(2);
  recordStudyHistory("meaning-match", pair, isCorrect ? "correct" : "wrong");
  saveMeaningMatchProgress();
  renderMeaningMatchQuiz();
  renderCoinChallenges();
}

function renderMeaningMatchResult(pair) {
  const choice = meaningMatchQuizState.currentChoices[meaningMatchQuizState.selectedIndex];
  const isCorrect = Boolean(choice?.isCorrect);
  const correctChoice = meaningMatchQuizState.currentChoices.find((item) => item.isCorrect);
  const correctSentence = correctChoice?.sentence || getMeaningMatchCorrectSentence(pair);
  els.nounVerbResult.classList.remove("hidden", "success", "error");
  els.nounVerbResult.classList.add(isCorrect ? "success" : "error");
  els.nounVerbResult.innerHTML = isCorrect
    ? `
      <span class="quiz-result-label">✅ Correct</span>
      <span class="quiz-result-meaning">${escapeHtml(getMeaningMatchMeaning(pair))}</span>
      <span class="quiz-result-answer">${escapeHtml(pair.phrase)}</span>
      <span class="quiz-result-meaning"><strong>Example:</strong> ${escapeHtml(correctSentence)}</span>
      <span class="quiz-result-reward"><strong>Reward:</strong> 🪙🪙 +2 Coins</span>
    `
    : `
      <span class="quiz-result-label">❌ Wrong</span>
      <span class="quiz-result-correction">Correct answer:</span>
      <span class="quiz-result-answer">${escapeHtml(correctSentence)}</span>
      <span class="quiz-result-meaning"><strong>Meaning:</strong> ${escapeHtml(getMeaningMatchMeaning(pair))}</span>
    `;
  els.nounVerbOptions.querySelectorAll("button").forEach((button) => {
    const index = Number(button.dataset.meaningChoice);
    const option = meaningMatchQuizState.currentChoices[index];
    button.disabled = true;
    button.classList.toggle("correct", Boolean(option?.isCorrect));
    button.classList.toggle("incorrect", index === meaningMatchQuizState.selectedIndex && !option?.isCorrect);
  });
  els.nounVerbNext.classList.add("hidden");
}

function moveMeaningMatchCard(direction) {
  if (!visibleMeaningMatchPairs.length) return;
  if (direction > 0) applyMeaningMatchSmartOrder();
  const nextIndex = direction > 0
    ? getNextMeaningMatchIndex()
    : (meaningMatchCurrentIndex - 1 + visibleMeaningMatchPairs.length) % visibleMeaningMatchPairs.length;
  console.log("Meaning Match Next clicked", {
    direction,
    fromQuestionId: meaningMatchQuizState.currentQuestionId,
    nextIndex,
    recentMeaningMatchItems: [...recentMeaningMatchItems]
  });
  generateMeaningMatchQuestion(direction > 0 ? "next/skip" : "previous", nextIndex);
  renderMeaningMatchQuiz();
}

function resetPrepositionQuizState() {
  prepositionQuizState = {
    currentQuestionId: "",
    selectedAnswer: "",
    hasAnswered: false,
    currentChoices: []
  };
}

function getCurrentPrepositionItem() {
  if (!prepositionQuizState.currentQuestionId) return null;
  return visiblePrepositionItems.find((item) => item.id === prepositionQuizState.currentQuestionId) || null;
}

function applyPrepositionOrder() {
  const currentQuestionId = prepositionQuizState.currentQuestionId;
  visiblePrepositionItems = applyPrepositionPriorityOrder(prepositionItems);
  const currentQuestionIndex = visiblePrepositionItems.findIndex((item) => item.id === currentQuestionId);
  prepositionCurrentIndex = currentQuestionIndex >= 0
    ? currentQuestionIndex
    : clamp(prepositionCurrentIndex, 0, Math.max(visiblePrepositionItems.length - 1, 0));
}

function applyPrepositionPriorityOrder(itemList) {
  const newItems = [];
  const learned = [];
  const mastered = [];

  itemList.forEach((item) => {
    const status = getPrepositionStatus(item);
    if (status === "mastered") mastered.push(item);
    else if (status === "learned") learned.push(item);
    else newItems.push(item);
  });

  const randomizedNewItems = shuffleCards(newItems);
  const randomizedLearned = shuffleCards(learned)
    .sort((first, second) => getPrepositionProgressEntry(first).correctCount - getPrepositionProgressEntry(second).correctCount);
  const randomizedMastered = shuffleCards(mastered)
    .sort((first, second) => getPrepositionLastAnsweredMs(first) - getPrepositionLastAnsweredMs(second));
  const occasionalMastered = randomizedMastered.filter((_, index) => index % 6 === 0);
  return [...randomizedNewItems, ...randomizedLearned, ...occasionalMastered, ...randomizedMastered.filter((_, index) => index % 6 !== 0)];
}

function generatePrepositionQuestion(reason, targetIndex = prepositionCurrentIndex) {
  if (!visiblePrepositionItems.length) {
    resetPrepositionQuizState();
    console.log("Preposition question generated", {
      currentQuestionId: "",
      reason,
      availableQuestions: 0
    });
    return;
  }

  prepositionCurrentIndex = clamp(targetIndex, 0, visiblePrepositionItems.length - 1);
  const item = visiblePrepositionItems[prepositionCurrentIndex];
  prepositionQuizState = {
    currentQuestionId: item.id,
    selectedAnswer: "",
    hasAnswered: false,
    currentChoices: shuffleCards([item.correct, item.wrong1, item.wrong2, item.wrong3])
  };
  console.log("Preposition question generated", {
    currentQuestionId: item.id,
    reason,
    sentence: item.sentence
  });
}

function renderPrepositionQuiz() {
  const item = getCurrentPrepositionItem();
  const hasItem = Boolean(item);
  if (hasItem) {
    prepositionCurrentIndex = visiblePrepositionItems.findIndex((entry) => entry.id === item.id);
  }
  els.nounVerbTitle.textContent = "Preposition Master";
  els.vocabularyReviewDebug?.classList.add("hidden");
  els.nounVerbInstruction.textContent = "Choose the preposition";
  els.nounVerbStage.classList.toggle("noun-verb-result-visible", prepositionQuizState.hasAnswered);
  els.showAnswer.classList.add("hidden");
  els.ratingButtons.classList.add("hidden");
  els.previousCard.disabled = visiblePrepositionItems.length < 2;
  els.nextCard.disabled = visiblePrepositionItems.length < 2;
  els.nounVerbEmptyState.classList.toggle("hidden", hasItem);
  els.nounVerbPrompt.classList.toggle("hidden", !hasItem);
  els.nounVerbOptions.classList.toggle("hidden", !hasItem);
  els.nounVerbResult.classList.add("hidden");
  els.nounVerbNext.classList.add("hidden");
  els.nounVerbEmptyState.querySelector("h2").textContent = "No preposition questions";
  els.nounVerbEmptyState.querySelector("p").textContent = "Make sure prepositions.csv is uploaded.";
  els.nounVerbCounter.textContent = hasItem
    ? `Card ${prepositionCurrentIndex + 1} of ${visiblePrepositionItems.length}`
    : "0 / 0";
  if (!item) {
    els.nounVerbPrompt.textContent = "No preposition questions";
    els.nounVerbOptions.replaceChildren();
    return;
  }

  els.nounVerbPrompt.textContent = item.sentence;
  els.nounVerbOptions.replaceChildren(
    ...prepositionQuizState.currentChoices.map((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.prepositionChoice = choice;
      button.textContent = `${String.fromCharCode(65 + index)}) ${choice}`;
      button.disabled = prepositionQuizState.hasAnswered;
      button.classList.toggle("correct", prepositionQuizState.hasAnswered && choice === item.correct);
      button.classList.toggle(
        "incorrect",
        prepositionQuizState.hasAnswered && choice === prepositionQuizState.selectedAnswer && choice !== item.correct
      );
      return button;
    })
  );

  if (prepositionQuizState.hasAnswered) renderPrepositionResult(item);
}

function normalizePrepositionAnswer(value) {
  return String(value || "").trim().toLowerCase();
}

function answerPrepositionQuiz(selectedAnswer) {
  const item = getCurrentPrepositionItem();
  if (!item) return;
  if (prepositionQuizState.hasAnswered) {
    console.log("Preposition answer ignored because question is already answered", {
      currentQuestionId: item.id,
      selectedAnswer,
      correctAnswer: item.correct
    });
    return;
  }

  const normalizedSelected = normalizePrepositionAnswer(selectedAnswer);
  const normalizedCorrect = normalizePrepositionAnswer(item.correct);
  const isCorrect = normalizedSelected === normalizedCorrect;
  prepositionQuizState.selectedAnswer = selectedAnswer;
  prepositionQuizState.hasAnswered = true;

  const progressEntry = updatePrepositionLearningProgress(item, isCorrect);
  let coinsAwarded = 0;
  if (isCorrect) {
    awardCoins(2);
    coinsAwarded = 2;
  }

  console.log("Preposition answer handled", {
    currentQuestionId: item.id,
    selectedAnswer,
    correctAnswer: item.correct,
    isCorrect,
    coinsAwarded,
    progressUpdated: true,
    progress: progressEntry
  });

  recordStudyHistory("prepositions", item, isCorrect ? "correct" : "wrong");
  savePrepositionProgress();
  renderPrepositionQuiz();
  renderCoinChallenges();
  if (currentView === "dashboard") renderDashboard();
}

function renderPrepositionResult(item) {
  const isCorrect = normalizePrepositionAnswer(prepositionQuizState.selectedAnswer) === normalizePrepositionAnswer(item.correct);
  const fullSentence = item.sentence.replace("_____", item.correct);
  els.nounVerbResult.classList.remove("hidden", "success", "error");
  els.nounVerbResult.classList.add(isCorrect ? "success" : "error");
  els.nounVerbResult.innerHTML = `
    <span class="quiz-result-label">${isCorrect ? "✅ Correct" : "❌ Wrong"}</span>
    ${isCorrect ? "" : "<span class=\"quiz-result-correction\">Correct answer:</span>"}
    <span class="quiz-result-answer">${escapeHtml(fullSentence)}</span>
    ${isCorrect ? "<span class=\"quiz-result-reward\"><strong>Reward:</strong> 🪙🪙 +2 Coins</span>" : ""}
  `;
  els.nounVerbOptions.querySelectorAll("button").forEach((button) => {
    const answer = button.dataset.prepositionChoice;
    button.disabled = true;
    button.classList.toggle("correct", answer === item.correct);
    button.classList.toggle("incorrect", answer === prepositionQuizState.selectedAnswer && answer !== item.correct);
  });
  els.nounVerbNext.classList.remove("hidden");
}

function movePrepositionCard(direction) {
  if (!visiblePrepositionItems.length) return;
  if (direction > 0) applyPrepositionOrder();
  prepositionCurrentIndex = direction > 0
    ? (prepositionCurrentIndex + 1) % visiblePrepositionItems.length
    : (prepositionCurrentIndex - 1 + visiblePrepositionItems.length) % visiblePrepositionItems.length;
  generatePrepositionQuestion(direction > 0 ? "next/skip" : "previous", prepositionCurrentIndex);
  renderPrepositionQuiz();
}

function applyMeaningMatchSmartOrder() {
  const currentQuestionId = meaningMatchQuizState.currentQuestionId;
  visibleMeaningMatchPairs = applyMeaningMatchPriorityOrder(meaningMatchItems);
  const currentQuestionIndex = visibleMeaningMatchPairs.findIndex((pair) => pair.id === currentQuestionId);
  meaningMatchCurrentIndex = currentQuestionIndex >= 0
    ? currentQuestionIndex
    : clamp(meaningMatchCurrentIndex, 0, Math.max(visibleMeaningMatchPairs.length - 1, 0));
}

function getNextMeaningMatchIndex() {
  if (visibleMeaningMatchPairs.length < 2) return meaningMatchCurrentIndex;
  const recentItems = new Set(recentMeaningMatchItems);
  const wrongWaitItems = new Set(recentMeaningMatchItems.slice(0, WRONG_MEANING_MATCH_WAIT_BUFFER));
  const currentId = visibleMeaningMatchPairs[meaningMatchCurrentIndex]?.id;
  const candidates = visibleMeaningMatchPairs
    .map((pair, index) => ({ pair, index }))
    .filter(({ pair }) => pair.id !== currentId);
  const freshCandidates = candidates.filter(({ pair }) => !recentItems.has(pair.id));
  const outsideWrongWaitCandidates = candidates.filter(({ pair }) => !wrongWaitItems.has(pair.id));

  const selectedIndex = pickMeaningMatchCandidateIndex(freshCandidates)
    ?? pickMeaningMatchCandidateIndex(outsideWrongWaitCandidates, { preferOldestRecent: true })
    ?? pickMeaningMatchCandidateIndex(candidates)
    ?? meaningMatchCurrentIndex;
  const selectedPair = visibleMeaningMatchPairs[selectedIndex];
  console.log("Meaning Match item selected", {
    selectedItemId: selectedPair?.id || "",
    phrase: selectedPair?.phrase || "",
    recentMeaningMatchItems: [...recentMeaningMatchItems],
    reasonSelected: freshCandidates.some(({ index }) => index === selectedIndex)
      ? "selected outside recentMeaningMatchItems"
      : "recent repeat allowed because no fresh candidate was available"
  });
  return selectedIndex;
}

function pickMeaningMatchCandidateIndex(candidates, options = {}) {
  if (!candidates.length) return null;
  if (options.preferOldestRecent) {
    const oldestAge = Math.max(...candidates.map(({ pair }) => getMeaningMatchRecentAge(pair.id)));
    const oldestCandidates = candidates.filter(({ pair }) => getMeaningMatchRecentAge(pair.id) === oldestAge);
    return pickMeaningMatchCandidateIndex(oldestCandidates);
  }
  const bestRank = Math.min(...candidates.map(({ pair }) => getMeaningMatchPriorityRank(pair)));
  const bestCandidates = candidates.filter(({ pair }) => getMeaningMatchPriorityRank(pair) === bestRank);
  const weightedCandidates = shuffleCards(bestCandidates)
    .sort((first, second) => getMeaningMatchRecentAge(second.pair.id) - getMeaningMatchRecentAge(first.pair.id));
  return weightedCandidates[0]?.index ?? null;
}

function getMeaningMatchRecentAge(pairId) {
  const index = recentMeaningMatchItems.indexOf(pairId);
  return index === -1 ? recentMeaningMatchItems.length + 1 : index;
}

function rememberMeaningMatchQuestion(pairOrId) {
  const pairId = typeof pairOrId === "string" ? pairOrId : pairOrId?.id || "";
  if (!pairId) return;
  recentMeaningMatchItems = [
    pairId,
    ...recentMeaningMatchItems.filter((id) => id !== pairId)
  ].slice(0, MEANING_MATCH_RECENT_BUFFER);
  saveMeaningMatchRecentItems();
}

function getNextNounVerbIndex() {
  if (visibleNounVerbPairs.length < 2) return nounVerbCurrentIndex;
  const recentIds = new Set(recentNounVerbQuestionIds);
  const recentNouns = new Set(recentNounVerbNouns);
  const veryRecentIds = new Set(recentNounVerbQuestionIds.slice(0, 5));
  const currentId = visibleNounVerbPairs[nounVerbCurrentIndex]?.id;
  const currentNoun = getNounVerbNounKey(visibleNounVerbPairs[nounVerbCurrentIndex]);
  const candidates = visibleNounVerbPairs
    .map((pair, index) => ({ pair, index }))
    .filter(({ pair }) => pair.id !== currentId);

  const freshQuestionAndNoun = candidates.filter(({ pair }) => {
    const nounKey = getNounVerbNounKey(pair);
    return !recentIds.has(pair.id) && nounKey !== currentNoun && !recentNouns.has(nounKey);
  });
  const freshQuestion = candidates.filter(({ pair }) => !recentIds.has(pair.id));
  const notVeryRecent = candidates.filter(({ pair }) => !veryRecentIds.has(pair.id));
  const sameNounButNotCurrent = candidates.filter(({ pair }) => getNounVerbNounKey(pair) !== currentNoun);

  return pickNounVerbCandidateIndex(freshQuestionAndNoun)
    ?? pickNounVerbCandidateIndex(freshQuestion)
    ?? pickNounVerbCandidateIndex(notVeryRecent)
    ?? pickNounVerbCandidateIndex(sameNounButNotCurrent)
    ?? pickNounVerbCandidateIndex(candidates)
    ?? nounVerbCurrentIndex;
}

function pickNounVerbCandidateIndex(candidates) {
  if (!candidates.length) return null;
  const bestRank = Math.min(...candidates.map(({ pair }) => getNounVerbPriorityRank(pair)));
  const bestCandidates = candidates.filter(({ pair }) => getNounVerbPriorityRank(pair) === bestRank);
  const weightedCandidates = shuffleCards(bestCandidates)
    .sort((first, second) => getNounVerbRecentAge(second.pair.id) - getNounVerbRecentAge(first.pair.id));
  return weightedCandidates[0]?.index ?? null;
}

function getNounVerbRecentAge(pairId) {
  const index = recentNounVerbQuestionIds.indexOf(pairId);
  return index === -1 ? recentNounVerbQuestionIds.length + 1 : index;
}

function getNounVerbNounKey(pair) {
  return getSortKey(pair?.noun || "");
}

function rememberNounVerbQuestion(pairOrId) {
  const pair = typeof pairOrId === "string"
    ? nounVerbPairs.find((item) => item.id === pairOrId)
    : pairOrId;
  const pairId = pair?.id || "";
  if (!pairId) return;
  const nounKey = getNounVerbNounKey(pair);
  recentNounVerbQuestionIds = [
    pairId,
    ...recentNounVerbQuestionIds.filter((id) => id !== pairId)
  ].slice(0, 10);
  if (nounKey) {
    recentNounVerbNouns = [
      nounKey,
      ...recentNounVerbNouns.filter((noun) => noun !== nounKey)
    ].slice(0, 10);
  }
}

function applyNounVerbPriorityOrder(pairList) {
  const wrongRecent = [];
  const newPairs = [];
  const learned = [];
  const mastered = [];

  pairList.forEach((pair) => {
    const status = getNounVerbStatus(pair);
    if (isNounVerbWrongRecently(pair)) wrongRecent.push(pair);
    else if (status === "new") newPairs.push(pair);
    else if (status === "learned") learned.push(pair);
    else mastered.push(pair);
  });

  wrongRecent.sort((first, second) => getNounVerbLastWrongMs(second) - getNounVerbLastWrongMs(first));
  const randomizedNewPairs = shuffleCards(newPairs);
  const randomizedLearned = shuffleCards(learned).sort((first, second) => getNounVerbProgressEntry(first).correctCount - getNounVerbProgressEntry(second).correctCount);
  const randomizedMastered = shuffleCards(mastered).sort((first, second) => getNounVerbLastAnsweredMs(first) - getNounVerbLastAnsweredMs(second));

  const mainReview = [...wrongRecent, ...randomizedNewPairs, ...randomizedLearned];
  if (!mainReview.length) return randomizedMastered;
  return [...mainReview, ...randomizedMastered.filter((_, index) => index % 6 === 0)];
}

function getNounVerbPriorityRank(pair) {
  if (isNounVerbWrongRecently(pair)) return 0;
  const status = getNounVerbStatus(pair);
  if (status === "new") return 1;
  if (status === "learned") return 2;
  return 3;
}

function getMeaningMatchPriorityRank(pair) {
  const status = getMeaningMatchStatus(pair);
  if (status === "new") return 0;
  if (status === "learned") return 1;
  return 2;
}

function applyMeaningMatchPriorityOrder(pairList) {
  const eligiblePairs = pairList.filter(isMeaningMatchEligiblePair);
  const recentItems = new Set(recentMeaningMatchItems);
  const freshPairs = eligiblePairs.filter((pair) => !recentItems.has(pair.id));
  const repeatPairs = eligiblePairs.filter((pair) => recentItems.has(pair.id));
  return [
    ...sortMeaningMatchCandidates(freshPairs),
    ...sortMeaningMatchCandidates(repeatPairs)
  ];
}

function sortMeaningMatchCandidates(pairList) {
  const newPairs = [];
  const learned = [];
  const mastered = [];

  pairList.forEach((pair) => {
    const status = getMeaningMatchStatus(pair);
    if (status === "new") newPairs.push(pair);
    else if (status === "learned") learned.push(pair);
    else mastered.push(pair);
  });

  const randomizedNewPairs = shuffleCards(newPairs);
  const randomizedLearned = shuffleCards(learned).sort((first, second) => getMeaningMatchProgressEntry(first).correctCount - getMeaningMatchProgressEntry(second).correctCount);
  const randomizedMastered = shuffleCards(mastered).sort((first, second) => getMeaningMatchLastAnsweredMs(first) - getMeaningMatchLastAnsweredMs(second));
  const mainReview = [...randomizedNewPairs, ...randomizedLearned];
  if (!mainReview.length) return randomizedMastered;
  return [...mainReview, ...randomizedMastered.filter((_, index) => index % 6 === 0)];
}

function compareNounVerbPairs(first, second) {
  return getSortKey(first.noun).localeCompare(getSortKey(second.noun), "de") || first.phrase.localeCompare(second.phrase, "de");
}

function updateNounVerbLearningProgress(pair, isCorrect) {
  const previous = getNounVerbProgressEntry(pair);
  const now = new Date().toISOString();
  const correctCount = previous.correctCount + (isCorrect ? 1 : 0);
  const wrongCount = previous.wrongCount + (isCorrect ? 0 : 1);
  const status = isCorrect
    ? correctCount >= 3 ? "mastered" : "learned"
    : previous.status;

  nounVerbProgress[pair.id] = {
    ...previous,
    correctCount,
    wrongCount,
    lastAnsweredAt: now,
    lastWrongAt: isCorrect ? previous.lastWrongAt || "" : now,
    status,
    updatedAt: now
  };
}

function getNounVerbProgressEntry(pair) {
  const entry = nounVerbProgress[pair.id] || {};
  const correctCount = normalizeCounter(entry.correctCount);
  const wrongCount = normalizeCounter(entry.wrongCount);
  return {
    ...entry,
    correctCount,
    wrongCount,
    lastAnsweredAt: typeof entry.lastAnsweredAt === "string"
      ? entry.lastAnsweredAt
      : typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    lastWrongAt: typeof entry.lastWrongAt === "string"
      ? entry.lastWrongAt
      : wrongCount > 0 && typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    status: normalizeNounVerbStatus(entry.status, { correctCount })
  };
}

function getNounVerbStatus(pair) {
  return getNounVerbProgressEntry(pair).status;
}

function getNounVerbLastAnsweredMs(pair) {
  const lastAnswered = Date.parse(getNounVerbProgressEntry(pair).lastAnsweredAt);
  return Number.isFinite(lastAnswered) ? lastAnswered : 0;
}

function getNounVerbLastWrongMs(pair) {
  const lastWrong = Date.parse(getNounVerbProgressEntry(pair).lastWrongAt);
  return Number.isFinite(lastWrong) ? lastWrong : 0;
}

function isNounVerbWrongRecently(pair) {
  const entry = getNounVerbProgressEntry(pair);
  if (!entry.wrongCount || entry.status === "mastered") return false;
  const lastWrong = getNounVerbLastWrongMs(pair);
  if (!lastWrong) return false;
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  return Date.now() - lastWrong <= sevenDays;
}

function getNounVerbSummary() {
  return nounVerbPairs.reduce(
    (total, pair) => {
      total[getNounVerbStatus(pair)] += 1;
      return total;
    },
    { new: 0, learned: 0, mastered: 0 }
  );
}

function updatePrepositionLearningProgress(item, isCorrect) {
  const previous = getPrepositionProgressEntry(item);
  const now = new Date().toISOString();
  const correctCount = previous.correctCount + (isCorrect ? 1 : 0);
  const wrongCount = previous.wrongCount + (isCorrect ? 0 : 1);
  const status = isCorrect
    ? correctCount >= 3 ? "mastered" : "learned"
    : previous.status;

  prepositionProgress[item.id] = {
    ...previous,
    correctCount,
    wrongCount,
    lastAnsweredAt: now,
    lastWrongAt: isCorrect ? previous.lastWrongAt || "" : now,
    status,
    updatedAt: now
  };

  return prepositionProgress[item.id];
}

function getPrepositionProgressEntry(item) {
  const entry = prepositionProgress[item.id] || {};
  const correctCount = normalizeCounter(entry.correctCount);
  const wrongCount = normalizeCounter(entry.wrongCount);
  return {
    ...entry,
    correctCount,
    wrongCount,
    lastAnsweredAt: typeof entry.lastAnsweredAt === "string"
      ? entry.lastAnsweredAt
      : typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    lastWrongAt: typeof entry.lastWrongAt === "string"
      ? entry.lastWrongAt
      : wrongCount > 0 && typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    status: normalizeNounVerbStatus(entry.status, { correctCount })
  };
}

function getPrepositionStatus(item) {
  return getPrepositionProgressEntry(item).status;
}

function getPrepositionLastAnsweredMs(item) {
  const lastAnswered = Date.parse(getPrepositionProgressEntry(item).lastAnsweredAt);
  return Number.isFinite(lastAnswered) ? lastAnswered : 0;
}

function getPrepositionSummary() {
  return prepositionItems.reduce(
    (total, item) => {
      total[getPrepositionStatus(item)] += 1;
      return total;
    },
    { new: 0, learned: 0, mastered: 0 }
  );
}

function updateMeaningMatchLearningProgress(pair, isCorrect) {
  const previous = getMeaningMatchProgressEntry(pair);
  const now = new Date().toISOString();
  const correctCount = previous.correctCount + (isCorrect ? 1 : 0);
  const wrongCount = previous.wrongCount + (isCorrect ? 0 : 1);
  const status = isCorrect
    ? correctCount >= 3 ? "mastered" : "learned"
    : previous.status;

  meaningMatchProgress[pair.id] = {
    ...previous,
    correctCount,
    wrongCount,
    lastAnsweredAt: now,
    lastWrongAt: isCorrect ? previous.lastWrongAt || "" : now,
    status,
    updatedAt: now
  };
}

function getMeaningMatchProgressEntry(pair) {
  const entry = meaningMatchProgress[pair.id] || {};
  const correctCount = normalizeCounter(entry.correctCount);
  const wrongCount = normalizeCounter(entry.wrongCount);
  return {
    ...entry,
    correctCount,
    wrongCount,
    lastAnsweredAt: typeof entry.lastAnsweredAt === "string"
      ? entry.lastAnsweredAt
      : typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    lastWrongAt: typeof entry.lastWrongAt === "string"
      ? entry.lastWrongAt
      : wrongCount > 0 && typeof entry.updatedAt === "string" ? entry.updatedAt : "",
    status: normalizeNounVerbStatus(entry.status, { correctCount })
  };
}

function getMeaningMatchStatus(pair) {
  return getMeaningMatchProgressEntry(pair).status;
}

function getMeaningMatchLastAnsweredMs(pair) {
  const lastAnswered = Date.parse(getMeaningMatchProgressEntry(pair).lastAnsweredAt);
  return Number.isFinite(lastAnswered) ? lastAnswered : 0;
}

function getMeaningMatchLastWrongMs(pair) {
  const lastWrong = Date.parse(getMeaningMatchProgressEntry(pair).lastWrongAt);
  return Number.isFinite(lastWrong) ? lastWrong : 0;
}

function isMeaningMatchWrongRecently(pair) {
  const entry = getMeaningMatchProgressEntry(pair);
  if (!entry.wrongCount || entry.status === "mastered") return false;
  const lastWrong = getMeaningMatchLastWrongMs(pair);
  if (!lastWrong) return false;
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  return Date.now() - lastWrong <= sevenDays;
}

function getMeaningMatchSummary() {
  return meaningMatchItems.filter(isMeaningMatchEligiblePair).reduce(
    (total, pair) => {
      total[getMeaningMatchStatus(pair)] += 1;
      return total;
    },
    { new: 0, learned: 0, mastered: 0 }
  );
}

function updateRatingButtonLabels(mode) {
  const labels = mode === "article"
    ? [
      ["known", "I know the article", false],
      ["unknown", "I don’t know the article", false],
      ["unknown", "", true]
    ]
    : [
      ["known", "I know the meaning", false],
      ["unsure", "I kind of know the meaning", false],
      ["unknown", "I don’t know the meaning", false]
    ];

  els.ratingButtons.querySelectorAll("button[data-rating]").forEach((button, index) => {
    const [value, label, hidden] = labels[index];
    button.dataset.rating = value;
    button.textContent = label;
    button.classList.toggle("hidden", hidden);
  });
}

function getModeText(mode) {
  if (mode === "article-quiz") return "Article Quiz";
  if (mode === "article") return "Article Practice";
  if (mode === "en-de") return "English -> German";
  return "German -> English";
}

function applyStartLetter(cardList, startLetter) {
  const sortedCards = [...cardList].sort((first, second) => getSortKey(first.word).localeCompare(getSortKey(second.word), "de"));
  if (startLetter === "all") return sortedCards;
  const startIndex = sortedCards.findIndex((card) => getSortLetter(card.word) >= startLetter);
  return startIndex === -1 ? [] : sortedCards.slice(startIndex);
}

function applyStudyOrder(cardList, order) {
  if (order !== "random") return cardList;

  const sessionKey = [
    currentProfileId,
    els.modeSelect.value,
    els.filterSelect.value,
    els.startSelect.value,
    cardList.map((card) => card.id).join("|")
  ].join("::");

  if (sessionKey !== randomSessionKey) {
    randomSessionKey = sessionKey;
    randomSessionIds = shuffleCards(cardList).map((card) => card.id);
  }

  const cardsById = new Map(cardList.map((card) => [card.id, card]));
  return randomSessionIds.map((id) => cardsById.get(id)).filter(Boolean);
}

function shuffleCards(cardList) {
  const shuffled = [...cardList];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function applySmartArticleOrder(cardList) {
  const wrongRecent = [];
  const newCards = [];
  const learned = [];
  const mastered = [];

  cardList.forEach((card) => {
    const status = getArticleStatus(card);
    if (isWrongRecently(card)) wrongRecent.push(card);
    else if (status === "new") newCards.push(card);
    else if (status === "learned") learned.push(card);
    else mastered.push(card);
  });

  wrongRecent.sort((first, second) => getArticleLastWrongMs(second) - getArticleLastWrongMs(first));
  newCards.sort(compareCardsByGerman);
  learned.sort((first, second) => {
    const firstProgress = getArticleProgressEntry(first);
    const secondProgress = getArticleProgressEntry(second);
    return firstProgress.articleCorrectCount - secondProgress.articleCorrectCount || compareCardsByGerman(first, second);
  });
  mastered.sort((first, second) => getArticleLastAnsweredMs(first) - getArticleLastAnsweredMs(second) || compareCardsByGerman(first, second));

  const mainReview = [...wrongRecent, ...newCards, ...learned];
  if (!mainReview.length) return mastered;

  const occasionalMastered = mastered.filter((_, index) => index % 6 === 0);
  return [...mainReview, ...occasionalMastered];
}

function compareCardsByGerman(first, second) {
  return getSortKey(first.word).localeCompare(getSortKey(second.word), "de");
}

function getSortLetter(word) {
  return getSortKey(word)
    .charAt(0)
    .toUpperCase();
}

function getSortKey(word) {
  return word
    .trim()
    .replace(/^sich(?:\s+etwas)?\s+/i, "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^[^a-zA-Z]+/, "")
    .toLowerCase();
}

function updateFilterOptions() {
  const isArticleQuiz = els.modeSelect.value === "article-quiz" || els.modeSelect.value === "article";
  const options = isArticleQuiz ? ARTICLE_FILTERS : STANDARD_FILTERS;
  const allowedValues = options.map(([value]) => value);
  const currentValue = els.filterSelect.value;

  els.filterSelect.replaceChildren(
    ...options.map(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      return option;
    })
  );

  els.filterSelect.value = allowedValues.includes(currentValue) ? currentValue : options[0][0];
}

function getValidFilterValue(value) {
  const options = els.modeSelect.value === "article-quiz" || els.modeSelect.value === "article" ? ARTICLE_FILTERS : STANDARD_FILTERS;
  const allowedValues = options.map(([optionValue]) => optionValue);
  return allowedValues.includes(value) ? value : options[0][0];
}

function recordStudyHistory(type, card, rating) {
  if (!currentProfileId) return;
  const profile = getCurrentProfile();
  const now = new Date().toISOString();
  profile.lastStudyDate = now;
  profile.history = [
    {
      type,
      cardId: card.id,
      word: card.word || card.phrase || card.noun || "",
      rating,
      studiedAt: now,
      mode: els.modeSelect.value
    },
    ...(profile.history || [])
  ].slice(0, 200);
}

function loadProgress() {
  return getCurrentProfile()?.progress || {};
}

function saveProgress() {
  if (!currentProfileId) return;
  getCurrentProfile().progress = progress;
  saveProfileStore();
}

function loadVocabularyProgress() {
  return getCurrentProfile()?.vocabularyProgress || {};
}

function saveVocabularyProgress() {
  if (!currentProfileId) return;
  getCurrentProfile().vocabularyProgress = vocabularyProgress;
  saveProfileStore();
}

function loadArticleProgress() {
  return getCurrentProfile()?.articleProgress || {};
}

function saveArticleProgress() {
  if (!currentProfileId) return;
  getCurrentProfile().articleProgress = articleProgress;
  saveProfileStore();
}

function loadNounVerbProgress() {
  return getCurrentProfile()?.nounVerbProgress || {};
}

function saveNounVerbProgress() {
  if (!currentProfileId) return;
  getCurrentProfile().nounVerbProgress = nounVerbProgress;
  saveProfileStore();
}

function loadMeaningMatchProgress() {
  return getCurrentProfile()?.meaningMatchProgress || {};
}

function saveMeaningMatchProgress() {
  if (!currentProfileId) return;
  getCurrentProfile().meaningMatchProgress = meaningMatchProgress;
  saveProfileStore();
}

function savePrepositionProgress() {
  if (!currentProfileId) return;
  getCurrentProfile().prepositionProgress = prepositionProgress;
  saveProfileStore();
}

function saveMeaningMatchRecentItems() {
  if (!currentProfileId) return;
  getCurrentProfile().recentMeaningMatchItems = normalizeRecentItemList(recentMeaningMatchItems, MEANING_MATCH_RECENT_BUFFER);
  saveProfileStore();
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDailyChallengeForDate(date = getTodayKey()) {
  const index = getStableDailyChallengeIndex(date);
  return DAILY_CHALLENGES[index] || DAILY_CHALLENGES[0];
}

function getStableDailyChallengeIndex(date) {
  const key = String(date || getTodayKey());
  if (DAILY_CHALLENGES.length < 2) return getRawDailyChallengeIndex(key);
  const baseIndex = getRawDailyChallengeIndex(key);
  const previousIndex = getAdjustedPreviousDailyChallengeIndex(key);
  if (baseIndex !== previousIndex) return baseIndex;
  return (baseIndex + 1) % DAILY_CHALLENGES.length;
}

function getAdjustedPreviousDailyChallengeIndex(dateKey) {
  const previousDate = shiftDateKey(dateKey, -1);
  const previousBaseIndex = getRawDailyChallengeIndex(previousDate);
  const previousPreviousIndex = getRawDailyChallengeIndex(shiftDateKey(previousDate, -1));
  return previousBaseIndex === previousPreviousIndex
    ? (previousBaseIndex + 1) % DAILY_CHALLENGES.length
    : previousBaseIndex;
}

function getRawDailyChallengeIndex(dateKey) {
  return getStableHash(dateKey) % DAILY_CHALLENGES.length;
}

function getStableHash(key) {
  let hash = 0;
  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function shiftDateKey(dateKey, days) {
  const date = parseDateKey(dateKey);
  if (!date) return String(dateKey || "");
  date.setDate(date.getDate() + days);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDailyChallengeProgress(progress, challenge = getDailyChallengeForDate(progress?.date)) {
  const current = challenge.metric === "correctArticleAnswers"
    ? normalizeCounter(progress?.correctArticleAnswers)
    : normalizeCounter(progress?.articleQuestions);
  return {
    current: Math.min(current, challenge.goal),
    raw: current
  };
}

function getDayDistance(fromDate, toDate) {
  const from = parseDateKey(fromDate);
  const to = parseDateKey(toDate);
  if (!from || !to) return 0;
  return Math.round((to.getTime() - from.getTime()) / 86400000);
}

function parseDateKey(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || "");
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
