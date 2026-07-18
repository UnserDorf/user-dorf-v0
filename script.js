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
const FOCUSED_REVIEW_MIN_COUNT = 10;
const FOCUSED_REVIEW_MAX_COUNT = 20;
const FOCUSED_REVIEW_CLEAR_STREAK = 3;
const FLASHCARD_SESSION_SIZE = 25;
const LEARN_GERMAN_GOAL_STORAGE_KEY = "unserDorfLearnGermanWordGoal";
const LEARN_GERMAN_LEVEL_STORAGE_KEY = "unserDorfLearnGermanLevel";
const LEARN_GERMAN_CATEGORY_STORAGE_KEY = "unserDorfLearnGermanCategory";
const LEARN_GERMAN_DEFAULT_GOAL = 20;
const LEARN_GERMAN_MIN_GOAL = 5;
const LEARN_GERMAN_MAX_GOAL = 50;
const LEARN_GERMAN_GOAL_STEP = 5;
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
      "Learn German.",
      "Help your village grow."
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
      "Build your vocabulary with Flashcards."
    ],
    progress: "○ ● ○ ○ ○",
    backLabel: "Back",
    nextLabel: "Next"
  },
  {
    illustration: "./assets/practice-hero.png",
    illustrationAlt: "Article practice in Unser Dorf",
    title: "🏆 Practice",
    body: [
      "Review what you've learned.",
      "Earn coins for correct answers."
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
      "Earn coins.",
      "Unlock beautiful places across Austria.",
      "Watch your village come to life."
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
      "Your village is waiting."
    ],
    progress: "○ ○ ○ ○ ●",
    backLabel: "Back",
    nextLabel: "Enter Your Village"
  }
];
const ACHIEVEMENT_NOTIFICATION_DURATION_MS = 4600;
const ACHIEVEMENT_NOTIFICATION_QUEUE_DELAY_MS = 220;
const INTERNAL_BUILD_ID = "admin-profile-cleanup-2026-07-14";
const FIREBASE_SYNC_DEFAULT_ROOT_PATH = "unserDorf/v0Testing";
const FIREBASE_SYNC_DEFAULT_DOCUMENT_PATH = "unserDorf/v0Testing/profileStores/shared";
const FIREBASE_APP_MODULE_URL = "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
const FIREBASE_FIRESTORE_MODULE_URL = "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
const FIREBASE_AUTH_MODULE_URL = "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
const REMEMBERED_EMAIL_STORAGE_KEY = "unserDorfRememberedEmail";
const ARCHIVED_LOCAL_PROFILES_STORAGE_KEY = "unserDorfArchivedLocalProfilesV1";
const OBSOLETE_LOCAL_IDENTITY_STORAGE_KEYS = [
  "unser-dorf-local-identity-profile-id"
];
const DELETE_ACCOUNT_RECENT_AUTH_MAX_AGE_MS = 4 * 60 * 1000;
const USER_ROLES = new Set(["member", "villageAdmin", "developer"]);
const DEVELOPER_BOOTSTRAP_EMAILS = new Set(["minekoa-z@gmail.com"]);

const LEGACY_PROFILE_IDS = new Set(["anna", "omar", "leila", "david", "mineko", "sami", "mai", "ziad"]);
const LEADERBOARD_PROFILE_IDS = [];
const ACHIEVEMENTS = [
  {
    id: "first-flashcard-reviewed",
    icon: "📇",
    name: "1 Flashcard Reviewed",
    description: "Review your first flashcard.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 1
  },
  {
    id: "flashcards-reviewed-10",
    icon: "📇",
    name: "10 Flashcards Reviewed",
    description: "Review 10 flashcards.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 10
  },
  {
    id: "flashcards-reviewed-50",
    icon: "📇",
    name: "50 Flashcards Reviewed",
    description: "Review 50 flashcards.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 50
  },
  {
    id: "flashcards-reviewed-100",
    icon: "📇",
    name: "100 Flashcards Reviewed",
    description: "Review 100 flashcards.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 100
  },
  {
    id: "flashcards-reviewed-250",
    icon: "📇",
    name: "250 Flashcards Reviewed",
    description: "Review 250 flashcards.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 250
  },
  {
    id: "flashcards-reviewed-500",
    icon: "📇",
    name: "500 Flashcards Reviewed",
    description: "Review 500 flashcards.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 500
  },
  {
    id: "flashcards-reviewed-1000",
    icon: "📇",
    name: "1000 Flashcards Reviewed",
    description: "Review 1000 flashcards.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 1000
  },
  {
    id: "flashcards-reviewed-1500",
    icon: "📇",
    name: "1500 Flashcards Reviewed",
    description: "Review 1500 flashcards.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 1500
  },
  {
    id: "flashcards-reviewed-2000",
    icon: "📇",
    name: "2000 Flashcards Reviewed",
    description: "Review 2000 flashcards.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 2000
  },
  {
    id: "flashcards-reviewed-2500",
    icon: "📇",
    name: "2500 Flashcards Reviewed",
    description: "Review 2500 flashcards.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 2500
  },
  {
    id: "flashcards-reviewed-3000",
    icon: "📇",
    name: "3000 Flashcards Reviewed",
    description: "Review 3000 flashcards.",
    reward: 0,
    scope: "profile",
    metric: "flashcardsReviewed",
    target: 3000
  }
];
const STREAK_ACTIVITY_GOAL = 10;
const VILLAGE_NAMING_MEMORY_ID = "name-your-village";
const VILLAGE_NAMING_ENABLED = false;
const FUTURE_VILLAGE_NAMING_MEMORY = {
  id: VILLAGE_NAMING_MEMORY_ID,
  coins: 100,
  title: "Name Your Village",
  image: "assets/village-memories.png",
  icon: "🏡",
  description: "Your village is ready to receive its name."
};
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
  { id: "plant-sale", coins: 250, title: "Plant Sale", image: "assets/plant-sale.png", icon: "🌿", description: "Neighbors share plants and seedlings for the village green." },
  { id: "community-picnic", coins: 300, title: "Community Picnic", image: "assets/community-picnic.png", icon: "🥪", description: "Families gather together for a picnic in the village square." },
  { id: "childrens-play-day", coins: 450, title: "Children's Play Day", image: "assets/childrens-play-day.png", icon: "🪁", description: "The village square fills with games, laughter, and play." },
  { id: "music-day", coins: 600, title: "Music Day", image: "assets/music-day.png", icon: "🎶", description: "A small village music event brings everyone together." },
  { id: "harvest-festival", coins: 800, title: "Harvest Festival", image: "assets/harvest-festival.png", icon: "🌻", description: "The village celebrates a season of learning and growth." },
  { id: "outdoor-movie", coins: 1250, title: "Outdoor Movie Night", image: "assets/outdoor-movie.png", icon: "🎬", description: "The village enjoys a movie under the stars." },
  { id: "village-carnival", coins: 1500, title: "Village Carnival", image: "assets/village-carnival.png", icon: "🎡", description: "The biggest celebration yet arrives in the village." },
  { id: "lantern-festival", coins: 1800, title: "Lantern Festival", image: "assets/lantern-festival.png", icon: "🕯️", description: "Lanterns glow as the village celebrates what everyone has built together." }
];
const COIN_LEVELS = [
  { min: 0, next: null, icon: "🪙", name: "Coins" }
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
  firebaseAuthCard: document.querySelector("#firebaseAuthCard"),
  firebaseAuthTitle: document.querySelector("#firebaseAuthTitle"),
  firebaseAuthIntro: document.querySelector("#firebaseAuthIntro"),
  firebaseAuthForm: document.querySelector("#firebaseAuthForm"),
  firebaseAuthEmail: document.querySelector("#firebaseAuthEmail"),
  rememberEmailCheckbox: document.querySelector("#rememberEmailCheckbox"),
  firebaseAuthPassword: document.querySelector("#firebaseAuthPassword"),
  forgotPasswordLink: document.querySelector("#forgotPasswordLink"),
  firebaseEmailSignIn: document.querySelector("#firebaseEmailSignIn"),
  firebaseEmailRegister: document.querySelector("#firebaseEmailRegister"),
  firebaseAuthToggle: document.querySelector("#firebaseAuthToggle"),
  firebaseAuthTryDemo: document.querySelector("#firebaseAuthTryDemo"),
  firebaseAuthHome: document.querySelector("#firebaseAuthHome"),
  firebaseAuthStatus: document.querySelector("#firebaseAuthStatus"),
  resetPasswordCard: document.querySelector("#resetPasswordCard"),
  resetPasswordForm: document.querySelector("#resetPasswordForm"),
  resetPasswordFormContent: document.querySelector("#resetPasswordFormContent"),
  resetPasswordEmail: document.querySelector("#resetPasswordEmail"),
  sendResetEmailButton: document.querySelector("#sendResetEmailButton"),
  resetPasswordBack: document.querySelector("#resetPasswordBack"),
  resetPasswordStatus: document.querySelector("#resetPasswordStatus"),
  resetPasswordSuccess: document.querySelector("#resetPasswordSuccess"),
  resetPasswordSuccessBack: document.querySelector("#resetPasswordSuccessBack"),
  displayNameForm: document.querySelector("#displayNameForm"),
  displayNameInput: document.querySelector("#displayNameInput"),
  displayNameError: document.querySelector("#displayNameError"),
  villageSelection: document.querySelector("#villageSelection"),
  villageSelectionBack: document.querySelector("#villageSelectionBack"),
  villageSelectionTitle: document.querySelector("#villageSelectionTitle"),
  villageSelectionSubtitle: document.querySelector("#villageSelectionSubtitle"),
  villageChoiceActions: document.querySelector("#villageChoiceActions"),
  joinVillageButton: document.querySelector("#joinVillageButton"),
  createVillageButton: document.querySelector("#createVillageButton"),
  villageCreateNotice: document.querySelector("#villageCreateNotice"),
  joinVillageIntro: document.querySelector("#joinVillageIntro"),
  villageCardGrid: document.querySelector("#villageCardGrid"),
  villageSelectionHelper: document.querySelector(".village-selection-helper"),
  villagePasswordForm: document.querySelector("#villagePasswordForm"),
  villagePasswordTitle: document.querySelector("#villagePasswordTitle"),
  villagePasswordInput: document.querySelector("#villagePasswordInput"),
  cancelVillagePassword: document.querySelector("#cancelVillagePassword"),
  villagePasswordError: document.querySelector("#villagePasswordError"),
  villageNameForm: document.querySelector("#villageNameForm"),
  villageNameInput: document.querySelector("#villageNameInput"),
  familyWealthCard: document.querySelector("#familyWealthCard"),
  familyWealthCoins: document.querySelector("#familyWealthCoins"),
  familyWealthLevel: document.querySelector("#familyWealthLevel"),
  familyNextLevelName: document.querySelector("#familyNextLevelName"),
  familyGoalCoins: document.querySelector("#familyGoalCoins"),
  familyGoalRemaining: document.querySelector("#familyGoalRemaining"),
  familyWealthProgressFill: document.querySelector("#familyWealthProgressFill"),
  familyWealthProgressText: document.querySelector("#familyWealthProgressText"),
  appShell: document.querySelector("#appShell"),
  landingScreen: document.querySelector("#landingScreen"),
  landingTryDemo: document.querySelector("#landingTryDemo"),
  landingGetStartedMain: document.querySelector("#landingGetStartedMain"),
  landingExistingAccountMain: document.querySelector("#landingExistingAccountMain"),
  demoScreen: document.querySelector("#demoScreen"),
  demoIllustration: document.querySelector("#demoIllustration"),
  demoTitle: document.querySelector("#demoTitle"),
  demoBody: document.querySelector("#demoBody"),
  demoProgress: document.querySelector("#demoProgress"),
  demoBack: document.querySelector("#demoBack"),
  demoSignIn: document.querySelector("#demoSignIn"),
  demoNext: document.querySelector("#demoNext"),
  dashboardScreen: document.querySelector("#dashboardScreen"),
  dashboardContinueButton: document.querySelector(".dashboard-continue-button"),
  learnGermanScreen: document.querySelector("#learnGermanScreen"),
  learnGermanBack: document.querySelector("#learnGermanBack"),
  learnHowItWorks: document.querySelector("#learnHowItWorks"),
  learnIntroPanel: document.querySelector("#learnIntroPanel"),
  learnIntroBack: document.querySelector("#learnIntroBack"),
  learnIntroChooseLevel: document.querySelector("#learnIntroChooseLevel"),
  learnRecommendationPanel: document.querySelector("#learnRecommendationPanel"),
  learnRecommendationCard: document.querySelector("#learnRecommendationCard"),
  learnRecommendationEyebrow: document.querySelector("#learnRecommendationEyebrow"),
  learnRecommendationTitle: document.querySelector("#learnRecommendationTitle"),
  learnRecommendationMeta: document.querySelector("#learnRecommendationMeta"),
  learnRecommendationActions: document.querySelector("#learnRecommendationActions"),
  learnRecommendationPrimary: document.querySelector("#learnRecommendationPrimary"),
  learnGoalControls: document.querySelector("#learnGoalControls"),
  learnGoalDecrease: document.querySelector("#learnGoalDecrease"),
  learnGoalIncrease: document.querySelector("#learnGoalIncrease"),
  learnGoalValue: document.querySelector("#learnGoalValue"),
  learnGoalNote: document.querySelector("#learnGoalNote"),
  learnEstimate: document.querySelector("#learnEstimate"),
  learnProgressList: document.querySelector("#learnProgressList"),
  learnDifficultPanel: document.querySelector("#learnDifficultPanel"),
  learnDifficultSummary: document.querySelector("#learnDifficultSummary"),
  learnDifficultActions: document.querySelector("#learnDifficultActions"),
  learnDifficultVocabulary: document.querySelector("#learnDifficultVocabulary"),
  learnDifficultArticles: document.querySelector("#learnDifficultArticles"),
  learnShortcutPanel: document.querySelector("#learnShortcutPanel"),
  learnShortcutToggle: document.querySelector("#learnShortcutToggle"),
  achievementCollectionScreen: document.querySelector("#achievementCollectionScreen"),
  coinChallengesScreen: document.querySelector("#coinChallengesScreen"),
  levelSelectionScreen: document.querySelector("#levelSelectionScreen"),
  levelSelectionBack: document.querySelector("#levelSelectionBack"),
  levelSelectionContext: document.querySelector("#levelSelectionContext"),
  flashcardSetupGoal: document.querySelector("#flashcardSetupGoal"),
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
  learningGoalScreen: document.querySelector("#learningGoalScreen"),
  learningGoalBack: document.querySelector("#learningGoalBack"),
  learningGoalDecrease: document.querySelector("#learningGoalDecrease"),
  learningGoalIncrease: document.querySelector("#learningGoalIncrease"),
  learningGoalValue: document.querySelector("#learningGoalValue"),
  learningGoalEstimate: document.querySelector("#learningGoalEstimate"),
  learningGoalSelectionSummary: document.querySelector("#learningGoalSelectionSummary"),
  learningGoalChange: document.querySelector("#learningGoalChange"),
  learningGoalChangePanel: document.querySelector("#learningGoalChangePanel"),
  learningGoalStart: document.querySelector("#learningGoalStart"),
  learningGoalLevelOptions: document.querySelector("#learningGoalLevelOptions"),
  learningGoalCategoryOptions: document.querySelector("#learningGoalCategoryOptions"),
  learningFlashcardsScreen: document.querySelector("#learningFlashcardsScreen"),
  learningFlashcard: document.querySelector("#learningFlashcard"),
  learningFlashcardsBack: document.querySelector("#learningFlashcardsBack"),
  learningFlashcardCounter: document.querySelector("#learningFlashcardCounter"),
  learningFlashcardProgressBar: document.querySelector("#learningFlashcardProgressBar"),
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
  challengeReadyStudySetNotice: document.querySelector("#challengeReadyStudySetNotice"),
  challengeReadyMeta: document.querySelector("#challengeReadyMeta"),
  challengeReadyPrompt: document.querySelector("#challengeReadyPrompt"),
  challengeReadyStart: document.querySelector("#challengeReadyStart"),
  dashboardWelcome: document.querySelector("#dashboardWelcome"),
  dashboardVillageName: document.querySelector("#dashboardVillageName"),
  dashboardVillageMembersCount: document.querySelector("#dashboardVillageMembersCount"),
  dashboardVillageMembersPreview: document.querySelector("#dashboardVillageMembersPreview"),
  villageMembersScreen: document.querySelector("#villageMembersScreen"),
  villageMembersBack: document.querySelector("#villageMembersBack"),
  villageMembersTitle: document.querySelector("#villageMembersTitle"),
  villageMembersSummary: document.querySelector("#villageMembersSummary"),
  villageMembersList: document.querySelector("#villageMembersList"),
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
  collectionPageIntro: document.querySelector("#collectionPageIntro"),
  collectionPageHero: document.querySelector("#collectionPageHero"),
  collectionPageDescription: document.querySelector("#collectionPageDescription"),
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
  levelCelebrationImageFrame: document.querySelector("#levelCelebrationImageFrame"),
  levelCelebrationImage: document.querySelector("#levelCelebrationImage"),
  levelCelebrationEyebrow: document.querySelector("#levelCelebrationEyebrow"),
  levelCelebrationTitle: document.querySelector("#levelCelebrationTitle"),
  levelCelebrationProfile: document.querySelector("#levelCelebrationProfile"),
  levelCelebrationLevel: document.querySelector("#levelCelebrationLevel"),
  levelCelebrationBonus: document.querySelector("#levelCelebrationBonus"),
  levelCelebrationStatus: document.querySelector("#levelCelebrationStatus"),
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
  mobileLogoutButton: document.querySelector("#mobileLogoutButton"),
  mobileMenuHomeButton: document.querySelector("#mobileMenuHomeButton"),
  mobileMenuProfileButton: document.querySelector("#mobileMenuProfileButton"),
  mobileMenuSettingsButton: document.querySelector("#mobileMenuSettingsButton"),
  settingsToggle: document.querySelector("#settingsToggle"),
  settingsPanel: document.querySelector("#settingsPanel"),
  settingsMainMenu: document.querySelector("#settingsMainMenu"),
  settingsDetail: document.querySelector("#settingsDetail"),
  settingsMenuBack: document.querySelector("#settingsMenuBack"),
  settingsVillageName: document.querySelector("#settingsVillageName"),
  villageSettingsSection: document.querySelector("#villageSettingsSection"),
  villageRenameLockNote: document.querySelector("#villageRenameLockNote"),
  settingsProfileName: document.querySelector("#settingsProfileName"),
  settingsChangeDisplayName: document.querySelector("#settingsChangeDisplayName"),
  accountDisplayNameFields: document.querySelector("#accountDisplayNameFields"),
  accountDisplayNameInput: document.querySelector("#accountDisplayNameInput"),
  saveAccountDisplayName: document.querySelector("#saveAccountDisplayName"),
  accountDisplayNameStatus: document.querySelector("#accountDisplayNameStatus"),
  settingsResetPassword: document.querySelector("#settingsResetPassword"),
  developerSettingsSection: document.querySelector("#developerSettingsSection"),
  openDeveloperTools: document.querySelector("#openDeveloperTools"),
  developerToolsScreen: document.querySelector("#developerToolsScreen"),
  developerToolsBack: document.querySelector("#developerToolsBack"),
  developerToolsRefresh: document.querySelector("#developerToolsRefresh"),
  developerToolsStatus: document.querySelector("#developerToolsStatus"),
  developerToolsContent: document.querySelector("#developerToolsContent"),
  deleteAccountButton: document.querySelector("#deleteAccountButton"),
  deleteAccountModal: document.querySelector("#deleteAccountModal"),
  deleteAccountForm: document.querySelector("#deleteAccountForm"),
  deleteAccountConfirmInput: document.querySelector("#deleteAccountConfirmInput"),
  deleteAccountStatus: document.querySelector("#deleteAccountStatus"),
  cancelDeleteAccount: document.querySelector("#cancelDeleteAccount"),
  confirmDeleteAccount: document.querySelector("#confirmDeleteAccount"),
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
  articleQuizStudySetNotice: document.querySelector("#articleQuizStudySetNotice"),
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
  rewardDebugScreen: document.querySelector("#rewardDebugScreen"),
  rewardDebugContent: document.querySelector("#rewardDebugContent"),
  rewardDebugClose: document.querySelector("#rewardDebugClose"),
  answerPanel: document.querySelector("#answerPanel"),
  answerArticle: document.querySelector("#answerArticle"),
  answerMeaning: document.querySelector("#answerMeaning"),
  answerExample: document.querySelector("#answerExample"),
  emptyState: document.querySelector("#emptyState"),
  previousCard: document.querySelector("#previousCard"),
  nextCard: document.querySelector("#nextCard"),
  showAnswer: document.querySelector("#showAnswer"),
  ratingButtons: document.querySelector("#ratingButtons"),
  vocabularyReviewStudySetNotice: document.querySelector("#vocabularyReviewStudySetNotice")
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
let reviewReturnTarget = "";
let learningGoalBackTarget = "learn-german";
let guidedLearningActive = false;
let learnGermanReturnActive = false;
let developerPreviewMode = "";
let pendingFlashcardResumeKey = "";
let activeStudySetCountRepairPending = false;
let recentNounVerbQuestionIds = [];
let recentNounVerbNouns = [];
let recentMeaningMatchItems = [];
let recentMeaningMatchTemplateIds = [];
let recentVocabularyWords = [];
let meaningMatchGeneratedItems = new Map();
let progress = {};
let vocabularyProgress = {};
let articleProgress = {};
let difficultWords = {};
let nounVerbProgress = {};
let meaningMatchProgress = {};
let prepositionProgress = {};
let profileStore = null;
let checkingAchievements = false;
let pendingCelebrations = [];
let achievementNotificationQueue = [];
let achievementNotificationTimer = 0;
let achievementNotificationShowing = false;
let rewardDebugLastResult = "";
let currentProfileId = "";
let currentGroupId = DEFAULT_GROUP_ID;
let pendingProfileId = "";
let pendingVillageJoinId = "";
let verifiedVillageJoinId = "";
let searchResults = [];
let randomSessionKey = "";
let randomSessionIds = [];
let currentView = "dashboard";
let syncEnabled = false;
let firebaseSyncAvailable = false;
let firebaseAuthUser = null;
let firebaseAuthReady = false;
let firebaseAuthUnsubscribe = null;
let firebaseAuthMode = "signup";
let villageSelectionMode = "choose";
let demoPageIndex = 0;
let demoFinalScreenActive = false;
let registeredDemoActive = false;
let applyingRemoteStore = false;
let firebaseSyncApi = null;
let firebaseSyncPromise = null;
let cloudSaveTimer = 0;
let cloudPullTimer = 0;
let cloudSaveInFlight = false;
let cloudSavePending = false;
let profileDataSource = "localStorage";
let lastIdentityProfileWasCreated = false;
let obsoleteLocalIdentityDataDetected = false;
let villageRosterWriteCountSinceSignIn = 0;
let developerToolsActiveSection = "overview";
let developerToolsBusy = false;
let developerToolsLastData = null;
let developerToolsLastError = null;
let cloudSyncDebug = {
  firebaseSignedIn: false,
  syncEnabled: false,
  userDocLoaded: false,
  villageDocsLoaded: [],
  lastCloudSaveTime: "",
  lastCloudLoadTime: "",
  lastCloudSaveError: "",
  lastCloudLoadError: "",
  firestoreProfileExists: false,
  firestoreCoinsLoaded: 0
};
let lastPreHydrationProgressSnapshot = null;
let userProgressHydratedFromServer = false;
let userProgressHydrationInProgress = false;
let studySessionWriteCountSinceSignIn = 0;
let lastLearningHydrationSnapshot = null;
let browserHistoryApplying = false;
let lastBrowserHistoryKey = "";
let pendingBrowserRoute = null;
let browserHistoryIndex = 0;
let browserHistoryInitialized = false;
let developerPreviewBaseline = null;

const USER_PROGRESS_WRITE_TRACE_PREFIX = "[Unser Dorf user progress write trace]";
const SIGN_IN_PROGRESS_VERIFICATION_PREFIX = "[Unser Dorf sign-in progress verification]";
const RESET_VERIFICATION_PREFIX = "[Unser Dorf reset verification]";
const DEVICE_SESSION_STORAGE_KEY = "unserDorfDeviceSessionId";
const HISTORY_STATE_KEY = "unser-dorf-route";

document.addEventListener("DOMContentLoaded", () => {
  init().catch((error) => {
    console.error("Unser Dorf failed to initialize.", error);
  });
});

function scrollPageToTop(target = null) {
  const containers = [
    document.scrollingElement,
    document.documentElement,
    document.body,
    els?.appShell,
    els?.profileScreen,
    target
  ].filter(Boolean);

  window.requestAnimationFrame(() => {
    containers.forEach((container) => {
      if (typeof container.scrollTo === "function") {
        container.scrollTo({ top: 0, left: 0, behavior: "auto" });
      } else {
        container.scrollTop = 0;
        container.scrollLeft = 0;
      }
    });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

function getHistoryRouteForCurrentView() {
  const route = {
    key: HISTORY_STATE_KEY,
    view: currentView || "dashboard"
  };
  if (currentView === "demo" && registeredDemoActive) route.mode = "registered";
  if (currentView === "auth") route.mode = firebaseAuthMode || "signup";
  if (currentView === "village-password") route.groupId = pendingVillageJoinId || currentGroupId || "";
  if (currentView === "level-selection") route.path = selectedLearningPath || "flashcards";
  if (currentView === "flashcard-setup") {
    route.level = selectedLearningLevel;
    route.category = flashcardStudyCategory;
  }
  if (currentView === "learning-goal") {
    route.backTarget = learningGoalBackTarget || "learn-german";
    route.level = selectedLearningLevel;
    route.category = flashcardStudyCategory;
  }
  if (currentView === "learning-flashcards" || currentView === "flashcard-complete") {
    route.level = flashcardStudyLevel || selectedLearningLevel;
    route.category = flashcardStudyCategory;
  }
  if (currentView === "challenge-ready") {
    route.action = pendingChallengeAction || "vocabulary-review";
    route.returnTarget = getReviewReturnTarget();
  }
  if (currentView === "vocabulary-review" || currentView === "noun-verb" || currentView === "meaning-match" || currentView === "prepositions") {
    route.returnTarget = getReviewReturnTarget();
  }
  return route;
}

function getBrowserHistoryHash(route = getHistoryRouteForCurrentView()) {
  const params = new URLSearchParams();
  const view = route.view || "dashboard";
  params.set("view", view);
  ["mode", "groupId", "path", "level", "category", "action", "returnTarget", "backTarget"].forEach((key) => {
    if (route[key]) params.set(key, route[key]);
  });
  return `#${params.toString()}`;
}

function getBrowserHistoryKey(route = getHistoryRouteForCurrentView()) {
  return JSON.stringify({
    view: route.view || "",
    path: route.path || "",
    mode: route.mode || "",
    groupId: route.groupId || "",
    level: route.level || "",
    category: route.category || "",
    action: route.action || "",
    returnTarget: route.returnTarget || "",
    backTarget: route.backTarget || ""
  });
}

function syncBrowserHistory(options = {}) {
  if (browserHistoryApplying || !window.history?.pushState) return;
  if (developerPreviewMode && !options.allowPreviewHistory) return;
  const route = {
    key: HISTORY_STATE_KEY,
    ...(options.route || getHistoryRouteForCurrentView())
  };
  if (!isHistoryManagedView(route.view)) return;
  const key = getBrowserHistoryKey(route);
  if (!options.replace && key === lastBrowserHistoryKey) return;
  const method = options.replace || !browserHistoryInitialized ? "replaceState" : "pushState";
  route.index = method === "pushState" ? browserHistoryIndex + 1 : browserHistoryIndex;
  const nextUrl = `${window.location.pathname}${window.location.search}${getBrowserHistoryHash(route)}`;
  window.history[method](route, "", nextUrl);
  browserHistoryInitialized = true;
  browserHistoryIndex = route.index;
  lastBrowserHistoryKey = key;
}

function replaceBrowserHistoryWithDashboard() {
  if (!window.history?.replaceState) return;
  const route = {
    key: HISTORY_STATE_KEY,
    view: "dashboard",
    index: Number.isFinite(Number(browserHistoryIndex)) ? Number(browserHistoryIndex) : 0
  };
  window.history.replaceState(route, "", `${window.location.pathname}${window.location.search}${getBrowserHistoryHash(route)}`);
  browserHistoryInitialized = true;
  browserHistoryIndex = route.index;
  lastBrowserHistoryKey = getBrowserHistoryKey(route);
}

function navigateAppBack(fallback = showDashboard) {
  if (
    window.history?.back
    && window.history.state?.key === HISTORY_STATE_KEY
    && Number.isFinite(Number(window.history.state.index))
    && Number(window.history.state.index) > 0
  ) {
    window.history.back();
    return;
  }
  fallback();
}

function isHistoryManagedView(view = currentView) {
  return new Set([
    "landing",
    "demo",
    "auth",
    "reset-password",
    "display-name",
    "village-selection",
    "join-village",
    "village-password",
    "dashboard",
    "learn-german",
    "learn-intro",
    "level-selection",
    "flashcard-setup",
    "learning-goal",
    "learning-flashcards",
    "flashcard-complete",
    "coin-challenges",
    "challenge-ready",
    "challenge-results",
    "vocabulary-review",
    "noun-verb",
    "meaning-match",
    "prepositions",
    "austria-album",
    "village-album",
    "achievement-milestones",
    "town-center",
    "village-members",
    "settings",
    "developer-tools"
  ]).has(view);
}

function readRouteFromLocation() {
  const params = new URLSearchParams((window.location.hash || "").replace(/^#/, ""));
  const view = params.get("view") || "";
  if (!view) return null;
  return {
    key: HISTORY_STATE_KEY,
    view,
    mode: params.get("mode") || "",
    groupId: params.get("groupId") || "",
    path: params.get("path") || "",
    level: params.get("level") || "",
    category: params.get("category") || "",
    action: params.get("action") || "",
    returnTarget: params.get("returnTarget") || "",
    backTarget: params.get("backTarget") || "",
    index: Number(window.history.state?.index) || 0
  };
}

function getBrowserRouteState(eventState = null) {
  if (eventState?.key === HISTORY_STATE_KEY) return eventState;
  return readRouteFromLocation();
}

function canApplyAuthenticatedRoute(route) {
  if (!route) return false;
  if (route.view === "demo" && route.mode === "registered") {
    return Boolean(currentProfileId && shouldShowRegisteredUserIntroduction(getCurrentProfile()));
  }
  if (["landing", "demo", "auth", "reset-password"].includes(route.view)) return true;
  if (["display-name", "village-selection", "join-village", "village-password"].includes(route.view)) {
    return Boolean(firebaseAuthUser || currentProfileId || profileStore?.currentProfile);
  }
  return Boolean(currentProfileId && getCurrentProfile());
}

function applyBrowserRoute(route) {
  if (!route || !isHistoryManagedView(route.view)) return false;
  if (shouldIgnorePendingRouteAfterLogin(route)) {
    pendingBrowserRoute = null;
    replaceBrowserHistoryWithDashboard();
    showDashboard({ replaceHistory: true });
    return true;
  }
  if (!canApplyAuthenticatedRoute(route)) {
    pendingBrowserRoute = route;
    return false;
  }
  browserHistoryApplying = true;
  try {
    browserHistoryIndex = Number(route.index) || 0;
    if (route.view !== "settings") closeSettingsMenu();
    if (route.level && LEARNING_LEVELS.includes(route.level)) {
      selectedLearningLevel = route.level;
      flashcardStudyLevel = route.level;
    }
    if (route.category && ["nouns", "verbs", "other"].includes(route.category)) {
      flashcardStudyCategory = route.category;
    }
    if (route.returnTarget) setReviewReturnTarget(route.returnTarget);
    switch (route.view) {
      case "landing":
        showLandingScreen();
        break;
      case "demo":
        showDemoScreen({ registered: route.mode === "registered" });
        break;
      case "auth":
        if (firebaseAuthUser) routeAfterIdentityReady();
        else showFirebaseAuthScreen(route.mode || "signin");
        break;
      case "reset-password":
        showResetPasswordScreen();
        break;
      case "display-name":
        showDisplayNameSetup(currentProfileId || profileStore?.currentProfile);
        break;
      case "village-selection":
        showVillageSelection();
        break;
      case "join-village":
        showVillageSelection();
        showJoinVillageOptions();
        break;
      case "village-password":
        showVillagePassword(route.groupId || pendingVillageJoinId || currentGroupId);
        break;
      case "dashboard":
        showDashboard();
        break;
      case "learn-german":
        showLearnGermanPage();
        break;
      case "learn-intro":
        showLearnGermanPage();
        showLearnIntroPanel({ firstTime: shouldShowRegisteredUserIntroduction() });
        break;
      case "level-selection":
        showLevelSelection(route.path || selectedLearningPath || "flashcards");
        break;
      case "flashcard-setup":
        showFlashcardSetup();
        break;
      case "learning-goal":
        showLearningGoalScreen({ backTarget: route.backTarget || "learn-german" });
        break;
      case "learning-flashcards":
        openFlashcardDeck(route.level || flashcardStudyLevel || selectedLearningLevel, route.category || flashcardStudyCategory);
        break;
      case "flashcard-complete":
        if (route.level || route.category) openFlashcardDeck(route.level || flashcardStudyLevel || selectedLearningLevel, route.category || flashcardStudyCategory);
        showFlashcardCompletion();
        break;
      case "coin-challenges":
        showCoinChallenges();
        break;
      case "challenge-ready":
        showChallengeReady(route.action || pendingChallengeAction || "vocabulary-review");
        break;
      case "challenge-results":
        showChallengeResults();
        break;
      case "vocabulary-review":
        showVocabularyReviewQuiz();
        break;
      case "noun-verb":
        showNounVerbQuiz();
        break;
      case "meaning-match":
        showMeaningMatchQuiz();
        break;
      case "prepositions":
        showPrepositionQuiz();
        break;
      case "austria-album":
      case "village-album":
      case "achievement-milestones":
      case "town-center":
        showAchievementCollection(route.view);
        break;
      case "village-members":
        showVillageMembers();
        break;
      case "settings":
        if (!currentProfileId) showDashboard();
        openSettingsPanel();
        break;
      case "developer-tools":
        showDeveloperTools();
        break;
      default:
        return false;
    }
    lastBrowserHistoryKey = getBrowserHistoryKey(getHistoryRouteForCurrentView());
    return true;
  } finally {
    browserHistoryApplying = false;
  }
}

function applyPendingBrowserRouteIfReady() {
  if (shouldIgnorePendingRouteAfterLogin(pendingBrowserRoute)) {
    pendingBrowserRoute = null;
    replaceBrowserHistoryWithDashboard();
    return false;
  }
  if (!pendingBrowserRoute || !canApplyAuthenticatedRoute(pendingBrowserRoute)) return false;
  const route = pendingBrowserRoute;
  pendingBrowserRoute = null;
  return applyBrowserRoute(route);
}

function shouldIgnorePendingRouteAfterLogin(route) {
  if (!route || !firebaseAuthUser || !currentProfileId || developerPreviewMode) return false;
  if (route.view === "landing") return true;
  if (route.view === "demo" && route.mode !== "registered") return true;
  if (route.view === "demo" && route.mode === "registered" && !shouldShowRegisteredUserIntroduction(getCurrentProfile())) return true;
  return false;
}

function initializeBrowserHistory() {
  const initialRoute = getBrowserRouteState(window.history.state);
  if (initialRoute) {
    browserHistoryIndex = Number(initialRoute.index) || 0;
    if (window.history?.replaceState && window.history.state?.key !== HISTORY_STATE_KEY) {
      const normalizedInitialRoute = {
        ...initialRoute,
        key: HISTORY_STATE_KEY,
        index: browserHistoryIndex
      };
      window.history.replaceState(
        normalizedInitialRoute,
        "",
        `${window.location.pathname}${window.location.search}${getBrowserHistoryHash(normalizedInitialRoute)}`
      );
    }
    browserHistoryInitialized = true;
    pendingBrowserRoute = initialRoute;
  }
  window.addEventListener("popstate", (event) => {
    if (developerPreviewMode) {
      endDeveloperPreviewMode();
      return;
    }
    const route = getBrowserRouteState(event.state);
    if (!route) return;
    browserHistoryIndex = Number(route.index) || 0;
    applyBrowserRoute(route);
  });
}

function updateCloudSyncDebug(patch = {}, label = "sync status") {
  const activeProfile = getCurrentProfile?.() || null;
  cloudSyncDebug = {
    ...cloudSyncDebug,
    firebaseSignedIn: Boolean(firebaseAuthUser),
    syncEnabled: Boolean(syncEnabled),
    ...patch
  };
  console.info("[Unser Dorf cloud sync]", label, {
    firebaseUid: firebaseAuthUser?.uid || "none",
    signedInEmail: firebaseAuthUser?.email || "none",
    firebaseSignedIn: cloudSyncDebug.firebaseSignedIn ? "yes" : "no",
    syncEnabled: cloudSyncDebug.syncEnabled,
    activeProfileId: currentProfileId || profileStore?.currentProfile || "none",
    displayName: activeProfile ? getVillageDisplayName(activeProfile) : "none",
    villageId: activeProfile?.villageId || profileStore?.currentGroup || "none",
    localCoins: normalizeCoinCount(activeProfile?.coins),
    firestoreProfileExists: Boolean(cloudSyncDebug.firestoreProfileExists),
    firestoreCoinsLoaded: normalizeCoinCount(cloudSyncDebug.firestoreCoinsLoaded),
    userDocLoaded: cloudSyncDebug.userDocLoaded ? "yes" : "no",
    villageDocsLoaded: cloudSyncDebug.villageDocsLoaded,
    lastCloudSaveTime: cloudSyncDebug.lastCloudSaveTime || "none",
    lastCloudLoadTime: cloudSyncDebug.lastCloudLoadTime || "none",
    lastCloudSaveError: cloudSyncDebug.lastCloudSaveError || "none",
    lastCloudLoadError: cloudSyncDebug.lastCloudLoadError || "none"
  });
}

function getErrorMessage(error) {
  return error?.message || String(error || "Unknown error");
}

function getDeviceSessionId() {
  const existing = localStorage.getItem(DEVICE_SESSION_STORAGE_KEY);
  if (existing) return existing;
  const created = `device-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  localStorage.setItem(DEVICE_SESSION_STORAGE_KEY, created);
  return created;
}

function getProgressFieldSnapshot(profile = {}) {
  return {
    coins: normalizeCoinCount(profile.coins),
    contributionCoins: normalizeCoinCount(profile.contributionCoins),
    streakDays: normalizeCounter(profile.streak?.days),
    flashcardProgressItems: Object.keys(profile.progress || {}).length,
    vocabularyProgressItems: Object.keys(profile.vocabularyProgress || {}).length,
    articleProgressItems: Object.keys(profile.articleProgress || {}).length,
    difficultWordItems: Object.keys(profile.difficultWords || {}).length,
    flashcardSessionItems: Object.keys(profile.flashcardSessions || {}).length,
    activeStudySetWords: normalizeActiveStudySet(profile.activeStudySet).wordIds.length,
    austriaAlbumRewards: normalizeRewardIdList(profile.austriaAlbumSeenRewards).length,
    achievements: normalizeAchievementList(profile.achievementsUnlocked).length,
    progressResetVersion: normalizeCounter(profile.progressResetVersion)
  };
}

function getLearningCountSnapshotFromProfile(profile = {}) {
  const activeStudySet = normalizeActiveStudySet(profile?.activeStudySet);
  const sessions = normalizeFlashcardSessions(profile?.flashcardSessions || {});
  const incompleteSessions = Object.values(sessions).filter((session) => session.deckIds?.length && !session.completed);
  const newestIncompleteSession = incompleteSessions
    .sort((first, second) => String(second.updatedAt || "").localeCompare(String(first.updatedAt || "")))[0] || null;
  return {
    activeStudySetCount: activeStudySet.wordIds.length,
    activeStudySetSessionId: activeStudySet.sessionId || "",
    unfinishedDeckCount: newestIncompleteSession ? new Set(newestIncompleteSession.deckIds || []).size : 0,
    unfinishedSessionId: newestIncompleteSession?.sessionId || "",
    unfinishedStudyGoal: normalizeFlashcardSessionGoal(newestIncompleteSession?.studyGoal || newestIncompleteSession?.deckIds?.length || 0)
  };
}

function getLearningCountSnapshotFromUserDoc(userData = {}, profileId = "") {
  const profile = profileId ? userData.profiles?.[profileId] : null;
  const topLevelStudySet = normalizeActiveStudySet(userData.activeStudySet);
  const profileSnapshot = getLearningCountSnapshotFromProfile(profile || {});
  return {
    topLevelActiveStudySetCount: topLevelStudySet.wordIds.length,
    topLevelActiveStudySetSessionId: topLevelStudySet.sessionId || "",
    profileActiveStudySetCount: profileSnapshot.activeStudySetCount,
    profileActiveStudySetSessionId: profileSnapshot.activeStudySetSessionId,
    profileUnfinishedDeckCount: profileSnapshot.unfinishedDeckCount,
    profileUnfinishedSessionId: profileSnapshot.unfinishedSessionId,
    profileUnfinishedStudyGoal: profileSnapshot.unfinishedStudyGoal
  };
}

function getAuthoritativeLearningDisplayCount(profile = getCurrentProfile()) {
  const snapshot = getLearningCountSnapshotFromProfile(profile || {});
  return snapshot.activeStudySetCount || snapshot.unfinishedDeckCount || 0;
}

function isAuthenticatedLearningHydrating() {
  return Boolean(firebaseAuthUser && hasCloudSyncConfig() && !userProgressHydratedFromServer);
}

function logLearningHydration(details = {}) {
  console.info("[Unser Dorf learning hydration]", {
    deviceSessionId: getDeviceSessionId(),
    firebaseUid: firebaseAuthUser?.uid || "none",
    localCachedWordCountBeforeHydration: lastLearningHydrationSnapshot?.localCachedWordCount ?? null,
    serverWordCount: lastLearningHydrationSnapshot?.serverWordCount ?? null,
    serverSessionId: lastLearningHydrationSnapshot?.serverSessionId || "",
    localSessionId: lastLearningHydrationSnapshot?.localSessionId || "",
    renderedWordCount: getAuthoritativeLearningDisplayCount(),
    hydrationComplete: userProgressHydratedFromServer,
    localStateDiscarded: Boolean(lastLearningHydrationSnapshot?.localStateDiscarded),
    studySessionWriteOccurredDuringSignIn: studySessionWriteCountSinceSignIn > 0,
    ...details
  });
}

function traceUserProgressWrite(functionName, reason, payload = {}, sources = {}) {
  if (userProgressHydrationInProgress && (
    Object.prototype.hasOwnProperty.call(payload, "activeStudySet")
    || Object.prototype.hasOwnProperty.call(payload, "profiles")
    || Object.prototype.hasOwnProperty.call(payload, "learningPreferences")
  )) {
    studySessionWriteCountSinceSignIn += 1;
  }
  const activeProfileId = currentProfileId || profileStore?.currentProfile || "";
  const activeProfile = activeProfileId ? profileStore?.profiles?.[activeProfileId] : null;
  const payloadProfiles = payload?.profiles || {};
  const payloadProfile = payloadProfiles[activeProfileId] || Object.values(payloadProfiles)[0] || activeProfile || {};
  console.info(USER_PROGRESS_WRITE_TRACE_PREFIX, {
    functionName,
    reason,
    firebaseUid: firebaseAuthUser?.uid || "none",
    deviceSessionId: getDeviceSessionId(),
    firestorePath: getFirebaseUserDocumentPath(firebaseAuthUser?.uid || ""),
    fieldsWritten: Object.keys(payload || {}),
    payloadProgress: getProgressFieldSnapshot(payloadProfile),
    localProgress: getProgressFieldSnapshot(activeProfile || {}),
    sources,
    stack: new Error().stack
  });
}

function getIdentitySnapshotFromStore(store, profileId = "") {
  const resolvedProfileId = profileId || store?.currentProfile || "";
  const profile = resolvedProfileId ? store?.profiles?.[resolvedProfileId] : null;
  return {
    profileId: resolvedProfileId,
    displayName: getVillageDisplayName(profile),
    villageId: profile?.villageId || store?.currentGroup || "",
    coins: normalizeCoinCount(profile?.coins),
    currentGroup: store?.currentGroup || ""
  };
}

function logCloudIdentityDebug(label, details = {}) {
  const localSnapshot = getIdentitySnapshotFromStore(profileStore, currentProfileId || profileStore?.currentProfile || "");
  const remoteProfileId = details.userData?.currentProfile || details.remoteStore?.currentProfile || "";
  const remoteSnapshot = getIdentitySnapshotFromStore(details.remoteStore, remoteProfileId);
  const finalSnapshot = getIdentitySnapshotFromStore(profileStore, currentProfileId || profileStore?.currentProfile || "");
  console.info("[Unser Dorf cloud identity]", label, {
    firebaseUid: firebaseAuthUser?.uid || "none",
    loadedFirestoreDisplayName: remoteSnapshot.displayName || "none",
    loadedFirestoreVillageId: remoteSnapshot.villageId || "none",
    loadedFirestoreCoins: remoteSnapshot.coins,
    localStorageDisplayName: localSnapshot.displayName || "none",
    localStorageVillageId: localSnapshot.villageId || "none",
    localStorageCoins: localSnapshot.coins,
    finalActiveDisplayName: finalSnapshot.displayName || "none",
    finalActiveVillageId: finalSnapshot.villageId || "none",
    finalActiveCoins: finalSnapshot.coins
  });
}

function getFirebaseProviderLabel(user = firebaseAuthUser) {
  const providers = Array.isArray(user?.providerData)
    ? user.providerData.map((provider) => provider?.providerId).filter(Boolean)
    : [];
  return providers.length ? providers.join(", ") : "password";
}

function logAuthStateDiagnostics(label = "AUTH STATE") {
  const profileId = currentProfileId || profileStore?.currentProfile || getFirebaseProfileId(firebaseAuthUser);
  const profile = profileId ? profileStore?.profiles?.[profileId] : null;
  console.info(`[Unser Dorf auth diagnostics] ${label}`, {
    firebaseProjectId: getFirebaseSyncConfig().firebaseConfig.projectId || "not configured",
    firebaseUid: firebaseAuthUser?.uid || "none",
    email: firebaseAuthUser?.email || "none",
    provider: firebaseAuthUser ? getFirebaseProviderLabel(firebaseAuthUser) : "none",
    firestoreProfileUid: profileId || "none",
    villageId: profile?.villageId || profileStore?.currentGroup || "none",
    obsoleteLocalProfileDataDetected: obsoleteLocalIdentityDataDetected
  });
}

function getFirebaseUserDocumentPath(uid = firebaseAuthUser?.uid || "") {
  return uid ? `unserDorf/v0Testing/users/${uid}` : "unserDorf/v0Testing/users/{no-uid}";
}

function getFirebaseProfileId(user = firebaseAuthUser) {
  return user?.uid ? `firebase-${sanitizeIdentityId(user.uid)}` : "";
}

function getVillageNameFromStore(store, groupId = "") {
  const resolvedGroupId = groupId || store?.currentGroup || "";
  const group = resolvedGroupId ? store?.groups?.[resolvedGroupId] : null;
  return normalizeVillageName(group?.villageName) || normalizeVillageName(group?.name) || "Unser Dorf";
}

function getProfileSnapshotForDebug(store, profileId = "") {
  const snapshot = getIdentitySnapshotFromStore(store, profileId);
  return {
    ...snapshot,
    villageName: getVillageNameFromStore(store, snapshot.villageId || snapshot.currentGroup)
  };
}

function logAuthDebugBlock(label = "AUTH DEBUG", store = profileStore) {
  const activeProfileId = currentProfileId || store?.currentProfile || "";
  const snapshot = getProfileSnapshotForDebug(store, activeProfileId);
  console.info(
    [
      "==========================",
      label,
      "==========================",
      `Firebase UID: ${firebaseAuthUser?.uid || "none"}`,
      `Firebase email: ${firebaseAuthUser?.email || "none"}`,
      `Firebase provider: ${getFirebaseProviderLabel(firebaseAuthUser)}`,
      `Firestore user document path: ${getFirebaseUserDocumentPath(firebaseAuthUser?.uid || "")}`,
      `Loaded displayName: ${snapshot.displayName || "none"}`,
      `Loaded villageId: ${snapshot.villageId || "none"}`,
      `Loaded villageName: ${snapshot.villageName || "none"}`,
      `Local profile id: ${activeProfileId || "none"}`,
      `syncEnabled: ${Boolean(syncEnabled)}`,
      "=========================="
    ].join("\n")
  );
}

function logDashboardDataDebug(profile) {
  const snapshot = getProfileSnapshotForDebug(profileStore, currentProfileId || profileStore?.currentProfile || "");
  console.info(
    [
      "==========================",
      "DASHBOARD DATA DEBUG",
      "==========================",
      `Final displayName: ${getVillageDisplayName(profile)}`,
      `Final villageId: ${profile?.villageId || snapshot.villageId || "none"}`,
      `Final villageName: ${snapshot.villageName || "none"}`,
      `Final coin count: ${normalizeCoinCount(profile?.coins)}`,
      `Data source used (Firestore / localStorage / merged): ${profileDataSource}`,
      "=========================="
    ].join("\n")
  );
}

function getUserProfileCheck(profileId, profile) {
  const userDocumentExists = Boolean(cloudSyncDebug.userDocLoaded);
  const firestoreProfileExists = Boolean(cloudSyncDebug.firestoreProfileExists);
  const villageId = profile?.villageId || profileStore?.currentGroup || "";
  const displayName = String(profile?.villageDisplayName || profile?.displayName || "").trim();
  const villageName = getVillageNameFromStore(profileStore, villageId);
  const shouldShowOnboarding = firebaseAuthUser
    ? Boolean(profileId && !hasVillageDisplayName(profile))
    : Boolean(profileId && !hasVillageDisplayName(profile));
  let reason = "Existing profile found.";
  if (!profileId || !profile) {
    reason = "No active profile found.";
  } else if (firebaseAuthUser && lastIdentityProfileWasCreated && !hasVillageDisplayName(profile)) {
    reason = "A new Firebase profile was created and no display name exists yet.";
  } else if (!firebaseAuthUser && !hasVillageDisplayName(profile)) {
    reason = "Local-only profile has no display name yet.";
  } else if (firebaseAuthUser && !lastIdentityProfileWasCreated && !hasVillageDisplayName(profile)) {
    reason = "Existing Firebase profile has no confirmed display name yet.";
  }
  return {
    userDocumentExists,
    firestoreProfileExists,
    displayName,
    villageId,
    villageName,
    shouldShowOnboarding,
    reason
  };
}

function logUserProfileCheck(profileId, profile) {
  const check = getUserProfileCheck(profileId, profile);
  console.info(
    [
      "USER PROFILE CHECK",
      "------------------",
      `Firebase UID: ${firebaseAuthUser?.uid || "none"}`,
      `User document exists: ${check.userDocumentExists}`,
      `Firestore profile exists: ${check.firestoreProfileExists}`,
      `displayName: ${check.displayName || "none"}`,
      `villageId: ${check.villageId || "none"}`,
      `villageName: ${check.villageName || "none"}`,
      `Should show onboarding: ${check.shouldShowOnboarding}`,
      `Reason: ${check.reason}`
    ].join("\n")
  );
  return check;
}

function getIdentityCleanupReport(store = profileStore, user = firebaseAuthUser) {
  const email = String(user?.email || "").toLowerCase();
  const canonicalId = getFirebaseProfileId(user);
  const profileRows = Object.entries(store?.profiles || {})
    .filter(([profileId, profile]) => {
      const ownerEmail = String(profile?.ownerEmail || "").toLowerCase();
      return profileId === canonicalId
        || profile?.ownerUid === user?.uid
        || Boolean(email && ownerEmail && ownerEmail === email);
    })
    .map(([profileId, profile]) => ({
      profileId,
      canonical: profileId === canonicalId,
      ownerUid: profile.ownerUid || "",
      ownerEmail: profile.ownerEmail || "",
      displayName: getVillageDisplayName(profile),
      villageId: profile.villageId || "",
      coins: normalizeCoinCount(profile.coins)
    }));
  const memberships = Object.values(store?.groups || {}).flatMap((group) => (
    (group.memberIds || [])
      .filter((profileId) => profileRows.some((row) => row.profileId === profileId))
      .map((profileId) => ({
        groupId: group.id,
        groupName: group.name,
        profileId
      }))
  ));
  return {
    firebaseUid: user?.uid || "",
    email: user?.email || "",
    canonicalId,
    profileRows,
    memberships
  };
}

function logIdentityCleanupReport(report = getIdentityCleanupReport()) {
  console.info("[Unser Dorf v0 debug] Identity report", report);
  if (report.profileRows?.length) console.table(report.profileRows);
  if (report.memberships?.length) console.table(report.memberships);
  return report;
}

async function cleanupDuplicateTestIdentityProfiles(options = {}) {
  const before = getIdentityCleanupReport();
  logIdentityCleanupReport(before);
  if (!options.confirm) {
    console.warn("[Unser Dorf v0 debug] Dry run only. Run UnserDorfV0Debug.cleanupDuplicateTestProfiles({ confirm: true }) to remove duplicates.");
    return before;
  }
  const result = consolidateFirebaseIdentityProfiles(profileStore, {
    createIfMissing: true,
    preferProfileId: profileStore.currentProfile
  });
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileStore));
  if (firebaseAuthUser) {
    syncEnabled = true;
    await saveProfileStoreToCloudNow();
  }
  const after = getIdentityCleanupReport();
  console.info("[Unser Dorf v0 debug] Duplicate cleanup complete.", { result, after });
  logIdentityCleanupReport(after);
  return after;
}

function installV0DebugTools() {
  window.UnserDorfV0Debug = {
    inspectIdentity: () => logIdentityCleanupReport(),
    cleanupDuplicateTestProfiles: cleanupDuplicateTestIdentityProfiles,
    clearLocalStorage: () => {
      localStorage.clear();
      console.info("[Unser Dorf v0 debug] localStorage cleared. Reload the page to start fresh.");
    },
    signOut: signOutOfFirebase
  };
}

async function init() {
  try {
    installV0DebugTools();
    cleanupObsoleteLocalIdentityData();
    initializeBrowserHistory();
    bindLockEvents();
    await unlockApp();
  } catch (error) {
    console.error("Initialization did not finish.", error);
  }
}

function cleanupObsoleteLocalIdentityData() {
  const detectedKeys = OBSOLETE_LOCAL_IDENTITY_STORAGE_KEYS.filter((key) => localStorage.getItem(key) !== null);
  obsoleteLocalIdentityDataDetected = detectedKeys.length > 0;
  detectedKeys.forEach((key) => localStorage.removeItem(key));
  console.info("[Unser Dorf auth diagnostics] Obsolete local-profile data check.", {
    detected: obsoleteLocalIdentityDataDetected,
    removedKeys: detectedKeys
  });
}

function archiveObsoleteLocalOnlyProfiles(store = profileStore) {
  if (!store?.profiles) return;
  const localProfileIds = Object.keys(store.profiles).filter((profileId) => profileId.startsWith("local-"));
  if (!localProfileIds.length) return;
  const archivedProfiles = Object.fromEntries(localProfileIds.map((profileId) => [profileId, store.profiles[profileId]]));
  const existingArchive = readStorageObject(ARCHIVED_LOCAL_PROFILES_STORAGE_KEY);
  localStorage.setItem(ARCHIVED_LOCAL_PROFILES_STORAGE_KEY, JSON.stringify({
    ...existingArchive,
    archivedAt: new Date().toISOString(),
    profiles: {
      ...(existingArchive.profiles || {}),
      ...archivedProfiles
    }
  }));
  localProfileIds.forEach((profileId) => {
    delete store.profiles[profileId];
  });
  Object.values(store.groups || {}).forEach((group) => {
    group.memberIds = normalizeGroupMemberIds((group.memberIds || []).filter((profileId) => !localProfileIds.includes(profileId)));
  });
  if (localProfileIds.includes(store.currentProfile)) store.currentProfile = "";
  obsoleteLocalIdentityDataDetected = true;
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(store));
  console.info("[Unser Dorf auth diagnostics] Archived obsolete local-only profiles.", {
    profileIds: localProfileIds
  });
}

async function unlockApp() {
  els.lockScreen.classList.add("hidden");
  profileStore = loadProfileStore();
  archiveObsoleteLocalOnlyProfiles(profileStore);
  await initializeFamilySync();
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
  await Promise.all(LEARNING_LEVELS.map((level) => loadLevelDatasets(level).catch((error) => {
    console.error(`Could not initialize ${level} datasets.`, error);
    levelDatasets[level] = createEmptyLevelDatasets()[level];
  })));
  routeAfterStartup();
  maybeShowRewardDebugPage();
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
  if (!hasCloudSyncConfig()) {
    syncEnabled = false;
    firebaseSyncAvailable = false;
    updateCloudSyncDebug({ userDocLoaded: false }, "Firebase config disabled");
    return;
  }
  try {
    await getFirebaseSyncApi();
    firebaseSyncAvailable = true;
	    await waitForFirebaseAuthState();
	    if (!firebaseAuthUser) {
	      syncEnabled = false;
	      userProgressHydratedFromServer = false;
	      userProgressHydrationInProgress = false;
	      updateCloudSyncDebug({ userDocLoaded: false }, "No Firebase user signed in");
	      return;
	    }
	    villageRosterWriteCountSinceSignIn = 0;
	    studySessionWriteCountSinceSignIn = 0;
	    userProgressHydratedFromServer = false;
	    userProgressHydrationInProgress = true;
	    lastLearningHydrationSnapshot = {
	      localCachedWordCount: getAuthoritativeLearningDisplayCount(getCurrentProfile()),
	      localSessionId: getLearningCountSnapshotFromProfile(getCurrentProfile() || {}).activeStudySetSessionId
	        || getLearningCountSnapshotFromProfile(getCurrentProfile() || {}).unfinishedSessionId,
	      serverWordCount: null,
	      serverSessionId: "",
	      localStateDiscarded: false
	    };
	    const remoteStore = await fetchProfileStoreFromCloud();

    if (remoteStore) {
      applyRemoteProfileStore(remoteStore);
    } else {
      profileDataSource = "localStorage";
    }
    userProgressHydratedFromServer = true;
    userProgressHydrationInProgress = false;
    logLearningHydration({
      renderedWordCountAfterHydration: getAuthoritativeLearningDisplayCount(),
      renderedWordCountBeforeHydration: null
    });
    ensureBootstrapDeveloperRole();

    syncEnabled = true;
    updateCloudSyncDebug({}, "Firebase sync enabled");
	    await verifySignInFamilyZRoster(firebaseSyncApi || await getFirebaseSyncApi());
	    await verifySignInProgressState(firebaseSyncApi || await getFirebaseSyncApi());
	    startFamilySyncPolling();
  } catch (error) {
    syncEnabled = false;
    firebaseSyncAvailable = false;
    userProgressHydratedFromServer = false;
    userProgressHydrationInProgress = false;
    updateCloudSyncDebug({ lastCloudLoadError: getErrorMessage(error) }, "Firebase sync unavailable");
    console.error("Firebase sync unavailable. User will remain signed out until Firebase authentication works.", error);
  }
}

function startFamilySyncPolling() {
  window.clearInterval(cloudPullTimer);
  cloudPullTimer = window.setInterval(async () => {
    try {
      if (applyingRemoteStore) return;
      const remoteStore = await fetchProfileStoreFromCloud();
      if (remoteStore) applyRemoteProfileStore(remoteStore);
    } catch (error) {
      console.error("Cloud sync polling failed.", error);
    }
  }, 5000);

  document.addEventListener("visibilitychange", async () => {
    try {
      if (document.visibilityState !== "visible") {
        window.clearTimeout(cloudSaveTimer);
        return;
      }
      if (applyingRemoteStore) return;
      const remoteStore = await fetchProfileStoreFromCloud();
      if (remoteStore) applyRemoteProfileStore(remoteStore);
    } catch (error) {
      console.error("Cloud sync visibility refresh failed.", error);
    }
  });
}

function bindLockEvents() {
  if (!els.lockForm) {
    console.warn("Optional UI element #lockForm is missing. Shared password lock is skipped.");
    return;
  }
  els.lockForm.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      if (els.passwordInput.value === APP_PASSWORD) {
        localStorage.setItem(UNLOCK_STORAGE_KEY, "true");
        els.lockError.classList.add("hidden");
        await unlockApp();
        return;
      }
      els.lockError.classList.remove("hidden");
      els.passwordInput.select();
    } catch (error) {
      console.error("Unlock form failed.", error);
    }
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
  store.villageAlbumSeenRewards = normalizeVillageAlbumSeenRewardIds(store.villageAlbumSeenRewards);
  store.townCenterStagesSeen = normalizeRewardIdList(store.townCenterStagesSeen);
  store.groups = normalizeGroups(store.groups, store);
  store.currentGroup = normalizeGroupId(store.currentGroup, store.groups);
  currentGroupId = store.currentGroup;
  promoteFamilyAchievements(store);

  if (!store.migratedLegacyProgress) {
    const hasLegacyData = hasLegacyLocalProgress();
    const migrated = migrateLegacyProgressToProfile(store, store.currentProfile);
    store.migratedLegacyProgress = !hasLegacyData || migrated;
  }

  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(store));
  return store;
}

function hasLegacyLocalProgress() {
  return Object.keys(readStorageObject(STORAGE_KEY)).length > 0
    || Object.keys(readStorageObject(ARTICLE_STORAGE_KEY)).length > 0;
}

function migrateLegacyProgressToProfile(store, profileId) {
  if (!store?.profiles || !profileId || !store.profiles[profileId]) return false;
  const legacyProgress = normalizeMeaningProgress(readStorageObject(STORAGE_KEY));
  const legacyArticleProgress = normalizeArticleProgress(readStorageObject(ARTICLE_STORAGE_KEY));
  const hasLegacyData = Object.keys(legacyProgress).length > 0 || Object.keys(legacyArticleProgress).length > 0;
  if (!hasLegacyData) return false;
  const profile = store.profiles[profileId];
  profile.progress = mergeProgressEntries(profile.progress || {}, legacyProgress);
  profile.articleProgress = mergeProgressEntries(profile.articleProgress || {}, legacyArticleProgress);
  console.info("[Unser Dorf cloud sync] Migrated legacy local progress into profile store.", {
    profileId,
    flashcardItems: Object.keys(legacyProgress).length,
    articleItems: Object.keys(legacyArticleProgress).length
  });
  return true;
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
    villageAlbumSeenRewards: normalizeVillageAlbumSeenRewardIds(source.villageAlbumSeenRewards),
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
  if (!firebaseAuthUser && !Object.values(normalized).some((group) => group.memberIds.length) && existingProfileIds.length) {
    normalized[DEFAULT_GROUP_ID].memberIds = existingProfileIds.slice(0, 6);
  }
  normalized[DEFAULT_GROUP_ID].villageAlbumSeenRewards = normalized[DEFAULT_GROUP_ID].villageAlbumSeenRewards.length
    ? normalized[DEFAULT_GROUP_ID].villageAlbumSeenRewards
    : normalizeVillageAlbumSeenRewardIds(store?.villageAlbumSeenRewards);
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

function normalizeProfileIdList(value) {
  return Array.isArray(value) ? Array.from(new Set(value.map(String).filter(Boolean))) : [];
}

function mergeGroupData(localStore, remoteStore, baseStore) {
  const preferRemoteMembership = Boolean(firebaseAuthUser && remoteStore?.groups);
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
        ...normalizeVillageAlbumSeenRewardIds(localGroup?.villageAlbumSeenRewards),
        ...normalizeVillageAlbumSeenRewardIds(remoteGroup?.villageAlbumSeenRewards)
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
      memberIds: preferRemoteMembership
        ? normalizeGroupMemberIds(remoteGroup?.memberIds)
        : [
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
  const seenMemberKeys = new Set();
  return (group?.memberIds || [])
    .map((profileId) => store?.profiles?.[profileId])
    .filter((profile) => {
      if (!profile) return false;
      const memberKey = String(profile.ownerUid || profile.id || "").trim();
      if (!memberKey || seenMemberKeys.has(memberKey)) return false;
      seenMemberKeys.add(memberKey);
      return true;
    });
}

function normalizeVillageName(value) {
  return String(value || "").trim();
}

function normalizeRewardIdList(value) {
  return Array.isArray(value) ? Array.from(new Set(value.map(String).filter(Boolean))) : [];
}

function normalizeVillageAlbumSeenRewardIds(value) {
  const ids = normalizeRewardIdList(value);
  const migratedIds = !VILLAGE_NAMING_ENABLED && ids.includes(VILLAGE_NAMING_MEMORY_ID)
    ? [...ids, "saturday-market"]
    : ids;
  const activeIds = new Set(VILLAGE_ALBUM_REWARDS.map((reward) => reward.id));
  return normalizeRewardIdList(migratedIds).filter((rewardId) => activeIds.has(rewardId));
}

function getVillageName() {
  const group = getCurrentGroup();
  return normalizeVillageName(group?.villageName) || normalizeVillageName(group?.name) || "Unser Dorf";
}

function hasVillageName() {
  return Boolean(normalizeVillageName(getCurrentGroup()?.villageName));
}

function isVillageNamingUnlocked(group = getCurrentGroup()) {
  if (!VILLAGE_NAMING_ENABLED) return false;
  if (!group) return false;
  return Boolean(
    normalizeVillageName(group.villageName)
      || group.namingCeremonyReady
      || normalizeRewardIdList(group.villageAlbumSeenRewards).includes(VILLAGE_NAMING_MEMORY_ID)
  );
}

function saveVillageName(value) {
  const group = getCurrentGroup();
  if (group) {
    group.villageName = normalizeVillageName(value) || "Unser Dorf";
    group.namingCeremonyReady = true;
  }
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
  if (els.currentUserLabel) els.currentUserLabel.textContent = profile ? `${profile.emoji || "⭐"} ${getVillageDisplayName(profile)}` : "No profile";
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
      createTextElement("span", "", villageName || group.description || "Learning village")
    );
    return button;
  });
  els.villageCardGrid.replaceChildren(...cards);
}

function selectVillage(groupId) {
  if (!profileStore?.groups?.[groupId]) return;
  pendingVillageJoinId = groupId;
  showVillagePassword(groupId);
}

function showVillageSelection() {
  currentView = "village-selection";
  villageSelectionMode = "choose";
  pendingProfileId = "";
  pendingVillageJoinId = "";
  verifiedVillageJoinId = "";
  els.profileScreen.classList.add("village-landing-mode");
  els.profileScreen.classList.remove("first-use");
  els.appShell.classList.remove("landing-mode");
  els.appShell.classList.remove("onboarding-mode");
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.appShell.classList.add("locked");
  els.landingScreen?.classList.add("hidden");
  els.demoScreen?.classList.add("hidden");
  els.profileScreen.classList.remove("hidden");
  hideProfileOnboardingPanels();
  els.villageSelection?.classList.remove("hidden");
  if (els.villageSelectionTitle) els.villageSelectionTitle.textContent = "Choose Your Village";
  if (els.villageSelectionSubtitle) els.villageSelectionSubtitle.textContent = "How would you like to get started?";
  if (els.villageSelectionBack) {
    els.villageSelectionBack.textContent = "← Back";
    els.villageSelectionBack.classList.remove("hidden");
  }
  els.villageChoiceActions?.classList.remove("hidden");
  els.joinVillageIntro?.classList.add("hidden");
  els.villageCardGrid?.classList.add("hidden");
  els.villageCreateNotice?.classList.add("hidden");
  els.villageSelectionHelper?.classList.add("hidden");
  renderVillageCards();
  renderGroupSelectors();
  scrollPageToTop(els.profileScreen);
  syncBrowserHistory();
}

function showJoinVillageOptions() {
  currentView = "join-village";
  villageSelectionMode = "join";
  pendingVillageJoinId = "";
  verifiedVillageJoinId = "";
  if (els.villageSelectionTitle) els.villageSelectionTitle.textContent = "Join a Village";
  if (els.villageSelectionSubtitle) els.villageSelectionSubtitle.textContent = "Select the village you would like to join.";
  if (els.villageSelectionBack) {
    els.villageSelectionBack.textContent = "← Back";
    els.villageSelectionBack.classList.remove("hidden");
  }
  els.villageChoiceActions?.classList.add("hidden");
  els.joinVillageIntro?.classList.remove("hidden");
  els.villageCardGrid?.classList.remove("hidden");
  els.villageCreateNotice?.classList.add("hidden");
  els.villageSelectionHelper?.classList.remove("hidden");
  renderVillageCards();
  scrollPageToTop(els.profileScreen);
  syncBrowserHistory();
}

function showCreateVillageComingSoon() {
  villageSelectionMode = "choose";
  els.villageCardGrid?.classList.add("hidden");
  els.joinVillageIntro?.classList.add("hidden");
  if (els.villageCreateNotice) els.villageCreateNotice.textContent = "Coming Soon";
  els.villageCreateNotice?.classList.remove("hidden");
}

function handleVillageSelectionBack() {
  if (villageSelectionMode === "join") {
    showVillageSelection();
    return;
  }
  showLandingScreen();
}

function enterSelectedVillage() {
  const profileId = ensureIdentityProfile();
  const group = getCurrentGroup();
  if (!profileId || !group) return;
  const isExistingMember = group.memberIds?.includes(profileId);
  if (!isExistingMember && verifiedVillageJoinId !== group.id) {
    pendingVillageJoinId = group.id;
    showVillagePassword(group.id);
    return;
  }
  keepProfileInOnlyOneGroup(profileStore, profileId, group.id);
  profileStore.currentGroup = group.id;
  profileStore.currentProfile = profileId;
  profileStore.profiles[profileId].villageId = group.id;
  verifiedVillageJoinId = "";
  pendingVillageJoinId = "";
  saveProfileStore();
  if (!isExistingMember) {
    saveCurrentVillageMembershipToCloudNow("village join").catch((error) => {
      console.warn("Could not persist new village membership immediately.", error);
    });
  }
  routeAfterIdentityReady();
}

function showVillagePassword(groupId = pendingVillageJoinId || currentGroupId) {
  const group = profileStore?.groups?.[groupId];
  if (!group) return;
  currentView = "village-password";
  pendingVillageJoinId = group.id;
  els.profileScreen.classList.remove("village-landing-mode");
  hideProfileOnboardingPanels();
  if (els.villagePasswordTitle) els.villagePasswordTitle.textContent = group.name;
  if (els.villagePasswordInput) els.villagePasswordInput.value = "";
  if (els.villagePasswordError) {
    els.villagePasswordError.textContent = "That village password does not look right. Please try again.";
    els.villagePasswordError.classList.add("hidden");
  }
  els.villagePasswordForm?.classList.remove("hidden");
  scrollPageToTop(els.profileScreen);
  els.villagePasswordInput?.focus();
  syncBrowserHistory();
}

function handleVillagePassword(event) {
  event.preventDefault();
  const group = profileStore?.groups?.[pendingVillageJoinId];
  const enteredPassword = String(els.villagePasswordInput?.value || "").trim();
  if (!group || enteredPassword !== String(group.password || "").trim()) {
    if (els.villagePasswordError) {
      els.villagePasswordError.textContent = "That village password does not look right. Please try again.";
      els.villagePasswordError.classList.remove("hidden");
    }
    els.villagePasswordInput?.select();
    return;
  }
  currentGroupId = group.id;
  profileStore.currentGroup = group.id;
  verifiedVillageJoinId = group.id;
  enterSelectedVillage();
}

function showVillageEntry() {
  showVillageSelection();
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
  const confirmedDisplayName = String(
    data?.villageDisplayName
      || data?.displayName
      || profile.villageDisplayName
      || profile.displayName
      || ""
  ).trim();
  const fallbackName = String(data?.name || profile.name || confirmedDisplayName || "Learner").trim() || "Learner";
  const displayNameConfirmed = data?.displayNameConfirmed === undefined && profile?.displayNameConfirmed === undefined
    ? Boolean(confirmedDisplayName)
    : Boolean(data?.displayNameConfirmed ?? profile?.displayNameConfirmed);
  return {
    id: profile.id,
    name: confirmedDisplayName || fallbackName,
    displayName: confirmedDisplayName,
    villageDisplayName: confirmedDisplayName,
    displayNameConfirmed,
    emoji: profile.emoji,
    avatar: data?.avatar || profile.avatar,
    password: data?.password || profile.password || "",
    ownerUid: typeof data?.ownerUid === "string" ? data.ownerUid : "",
    ownerEmail: typeof data?.ownerEmail === "string" ? data.ownerEmail : "",
    role: sanitizeUserRole(data?.role || profile?.role),
    protectedAccount: Boolean(data?.protectedAccount || profile?.protectedAccount),
    villageId: typeof data?.villageId === "string" ? data.villageId : "",
    contributionCoins: normalizeCoinCount(data?.contributionCoins),
    coins: normalizeCoinCount(data?.coins),
    progressResetVersion: normalizeCounter(data?.progressResetVersion),
    progressResetAtIso: typeof data?.progressResetAtIso === "string" ? data.progressResetAtIso : "",
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
    difficultWords: normalizeDifficultWords(data?.difficultWords || {}),
    nounVerbProgress: normalizeNounVerbProgress(data?.nounVerbProgress || {}),
    meaningMatchProgress: normalizeNounVerbProgress(data?.meaningMatchProgress || {}),
    prepositionProgress: normalizeNounVerbProgress(data?.prepositionProgress || {}),
    recentMeaningMatchItems: normalizeRecentItemList(data?.recentMeaningMatchItems, MEANING_MATCH_RECENT_BUFFER),
    vocabularyReviewStats: normalizeVocabularyReviewStats(data?.vocabularyReviewStats),
    challengeSessionsCompleted: normalizeCounter(data?.challengeSessionsCompleted),
    flashcardSessions: normalizeFlashcardSessions(data?.flashcardSessions),
    flashcardsReviewed: Math.max(
      normalizeCounter(data?.flashcardsReviewed),
      getLegacyFlashcardsReviewedCount(data?.flashcardSessions)
    ),
    activeStudySet: normalizeActiveStudySet(data?.activeStudySet),
    learningIntroSeen: Boolean(data?.learningIntroSeen ?? profile?.learningIntroSeen),
    forceFirstTimeExperience: Boolean(data?.forceFirstTimeExperience ?? profile?.forceFirstTimeExperience),
    registeredIntroCompleted: data?.registeredIntroCompleted === undefined && profile?.registeredIntroCompleted === undefined
      ? true
      : Boolean(data?.registeredIntroCompleted ?? profile?.registeredIntroCompleted),
    learningPreferences: normalizeLearningPreferences(data?.learningPreferences || profile?.learningPreferences),
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
        sessionId: typeof session?.sessionId === "string" ? session.sessionId : "",
        studyDate: typeof session?.studyDate === "string" ? session.studyDate : "",
        studyGoal: normalizeFlashcardSessionGoal(session?.studyGoal || session?.requestedWordCount || session?.todayGoal || session?.deckSize),
        completed: Boolean(session?.completed),
        updatedAt: typeof session?.updatedAt === "string" ? session.updatedAt : ""
      }
    ])
  );
}

function normalizeFlashcardSessionGoal(value = LEARN_GERMAN_DEFAULT_GOAL) {
  const numericValue = Number(value);
  const safeValue = Number.isFinite(numericValue) ? numericValue : LEARN_GERMAN_DEFAULT_GOAL;
  return clamp(
    Math.round(safeValue / LEARN_GERMAN_GOAL_STEP) * LEARN_GERMAN_GOAL_STEP,
    LEARN_GERMAN_MIN_GOAL,
    LEARN_GERMAN_MAX_GOAL
  );
}

function normalizeLearningPreferences(value = {}) {
  const level = LEARNING_LEVELS.includes(value?.level) ? value.level : "";
  const category = ["nouns", "verbs", "other"].includes(value?.category) ? value.category : "";
  return {
    studyGoal: normalizeFlashcardSessionGoal(value?.studyGoal),
    level,
    category,
    updatedAt: typeof value?.updatedAt === "string" ? value.updatedAt : ""
  };
}

function mergeLearningPreferences(localPreferences, remotePreferences) {
  const local = normalizeLearningPreferences(localPreferences);
  const remote = normalizeLearningPreferences(remotePreferences);
  return latestString(local.updatedAt, remote.updatedAt) === local.updatedAt ? local : remote;
}

function normalizeActiveStudySet(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { sessionId: "", reviewedAt: "", wordIds: [], wordCount: 0, words: {}, reviewStatus: normalizeStudySetReviewStatus() };
  }
  const words = {};
  Object.entries(value.words || {}).forEach(([wordId, word]) => {
    const id = String(word?.wordId || wordId || "").trim();
    if (!id) return;
    words[id] = {
      wordId: id,
      german: String(word?.german || "").trim(),
      level: String(word?.level || "").trim().toUpperCase(),
      category: normalizeStudySetCategory(word?.category),
      article: normalizeArticleValue(word?.article),
      rating: normalizeMeaningStatus(word?.rating),
      reviewedAt: typeof word?.reviewedAt === "string" ? word.reviewedAt : "",
      sessionId: typeof word?.sessionId === "string" ? word.sessionId : ""
    };
  });
  const storedWordIds = Array.isArray(value.wordIds)
    ? value.wordIds.map(String).filter((wordId) => Boolean(words[wordId]))
    : [];
  const wordIds = Array.from(new Set([...storedWordIds, ...Object.keys(words)]))
    .filter((wordId) => Boolean(words[wordId]));
  if (isActiveStudySetCountInconsistent(value, wordIds, words)) {
    activeStudySetCountRepairPending = true;
  }
  return {
    sessionId: typeof value.sessionId === "string" ? value.sessionId : "",
    reviewedAt: typeof value.reviewedAt === "string" ? value.reviewedAt : "",
    wordIds,
    wordCount: wordIds.length,
    words,
    reviewStatus: normalizeStudySetReviewStatus(value.reviewStatus)
  };
}

function isActiveStudySetCountInconsistent(value, normalizedWordIds = [], normalizedWords = {}) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const storedWordIds = Array.isArray(value.wordIds)
    ? value.wordIds.map(String).filter(Boolean)
    : [];
  const storedUniqueWordIdCount = new Set(storedWordIds).size;
  const wordsObjectCount = Object.keys(value.words || {}).length;
  const normalizedCount = normalizedWordIds.length;
  const storedWordCount = Number(value.wordCount);
  return (
    (storedWordIds.length > 0 && storedUniqueWordIdCount !== normalizedCount)
    || (wordsObjectCount > 0 && Object.keys(normalizedWords).length !== normalizedCount)
    || (Number.isFinite(storedWordCount) && storedWordCount !== normalizedCount)
  );
}

function normalizeStudySetReviewStatus(value = {}) {
  return {
    vocabularyCompletedAt: typeof value?.vocabularyCompletedAt === "string" ? value.vocabularyCompletedAt : "",
    articleCompletedAt: typeof value?.articleCompletedAt === "string" ? value.articleCompletedAt : ""
  };
}

function normalizeStudySetCategory(value) {
  const category = String(value || "").trim().toLowerCase();
  if (["noun", "nouns"].includes(category)) return "nouns";
  if (["verb", "verbs"].includes(category)) return "verbs";
  if (["other", "others", "other words"].includes(category)) return "other";
  return "";
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

function normalizeDifficultWords(savedProgress = {}) {
  if (!savedProgress || typeof savedProgress !== "object" || Array.isArray(savedProgress)) return {};
  return Object.fromEntries(
    Object.entries(savedProgress).map(([wordId, entry]) => {
      const id = String(entry?.wordId || wordId || "").trim();
      return [
        id,
        {
          wordId: id,
          vocabularyCorrectStreak: normalizeCounter(entry?.vocabularyCorrectStreak),
          articleCorrectStreak: normalizeCounter(entry?.articleCorrectStreak),
          lastFocusedReviewAt: typeof entry?.lastFocusedReviewAt === "string" ? entry.lastFocusedReviewAt : "",
          lastVocabularyFocusedAt: typeof entry?.lastVocabularyFocusedAt === "string" ? entry.lastVocabularyFocusedAt : "",
          lastArticleFocusedAt: typeof entry?.lastArticleFocusedAt === "string" ? entry.lastArticleFocusedAt : "",
          lastIncorrectAt: typeof entry?.lastIncorrectAt === "string" ? entry.lastIncorrectAt : "",
          lastCorrectAt: typeof entry?.lastCorrectAt === "string" ? entry.lastCorrectAt : ""
        }
      ];
    }).filter(([wordId]) => Boolean(wordId))
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

function sanitizeUserRole(value) {
  const role = String(value || "").trim();
  return USER_ROLES.has(role) ? role : "member";
}

function getCurrentUserRole() {
  const profile = getCurrentProfile() || profileStore?.profiles?.[getFirebaseProfileId(firebaseAuthUser)];
  return sanitizeUserRole(profile?.role);
}

function isCurrentUserDeveloper() {
  return Boolean(firebaseAuthUser && getCurrentUserRole() === "developer");
}

function isProtectedDeveloperAccount(user = firebaseAuthUser) {
  if (!user) return false;
  return shouldBootstrapDeveloperRole(user) || (user.uid === firebaseAuthUser?.uid && getCurrentUserRole() === "developer");
}

function shouldBootstrapDeveloperRole(user = firebaseAuthUser) {
  const email = String(user?.email || "").toLowerCase();
  return Boolean(email && DEVELOPER_BOOTSTRAP_EMAILS.has(email));
}

function ensureBootstrapDeveloperRole() {
  if (!shouldBootstrapDeveloperRole()) return false;
  const profileId = getFirebaseProfileId(firebaseAuthUser);
  const profile = profileStore?.profiles?.[profileId];
  if (!profile) return false;
  const changed = sanitizeUserRole(profile.role) !== "developer" || profile.protectedAccount !== true;
  profile.role = "developer";
  profile.protectedAccount = true;
  if (!changed) return false;
  console.info("[Unser Dorf developer tools] Seeded developer role for Mineko's Firebase profile.", {
    uid: firebaseAuthUser.uid,
    email: firebaseAuthUser.email,
    protectedAccount: true
  });
  return true;
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

function saveProfileStore(options = {}) {
  if (developerPreviewMode) return;
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
  if (options.localOnly) return;
  scheduleCloudSave(options);
}

function scheduleCloudSave(options = {}) {
  if (!syncEnabled || applyingRemoteStore || developerPreviewMode) return;
  window.clearTimeout(cloudSaveTimer);
  if (options.immediate) {
    saveProfileStoreToCloudNow();
    return;
  }
  cloudSaveTimer = window.setTimeout(() => {
    saveProfileStoreToCloudNow();
  }, 450);
}

async function saveProfileStoreToCloudNow() {
  if (!profileStore || !hasCloudSyncConfig() || !firebaseAuthUser) return;
  if (cloudSaveInFlight) {
    cloudSavePending = true;
    updateCloudSyncDebug({}, "Firestore save queued behind active save");
    return;
  }
  cloudSaveInFlight = true;
  cloudSavePending = false;
  consolidateFirebaseIdentityProfiles(profileStore);
  promoteFamilyAchievements(profileStore);
  try {
    const firebase = await getFirebaseSyncApi();
    const ownedProfiles = getFirebaseOwnedProfiles();
    if (!Object.keys(ownedProfiles).length) {
      updateCloudSyncDebug({}, "Firestore save skipped until Firebase profile exists");
      return;
    }
    const savedAt = new Date().toISOString();
    const activeProfileId = currentProfileId || profileStore.currentProfile || "";
    const activeProfile = activeProfileId ? profileStore.profiles?.[activeProfileId] : null;
    updateCloudSyncDebug({
      lastCloudSaveError: ""
    }, "Firestore save starting");
    const userPayload = {
      uid: firebaseAuthUser.uid,
      email: firebaseAuthUser.email || "",
      displayName: getVillageDisplayName(activeProfile),
      villageId: activeProfile?.villageId || currentGroupId || profileStore.currentGroup || DEFAULT_GROUP_ID,
      villageName: getVillageName(),
      role: getCurrentUserRole(),
      protectedAccount: Boolean(activeProfile?.protectedAccount),
      currentGroup: currentGroupId || profileStore.currentGroup || DEFAULT_GROUP_ID,
      currentProfile: currentProfileId || profileStore.currentProfile || "",
      activeStudySet: normalizeActiveStudySet(activeProfile?.activeStudySet),
      difficultWords: normalizeDifficultWords(activeProfile?.difficultWords),
      forceFirstTimeExperience: Boolean(activeProfile?.forceFirstTimeExperience),
      registeredIntroCompleted: activeProfile?.registeredIntroCompleted === false ? false : true,
      profiles: ownedProfiles,
      progressResetVersion: normalizeCounter(activeProfile?.progressResetVersion),
      progressResetAtIso: activeProfile?.progressResetAtIso || "",
      lastLoginAtIso: new Date().toISOString(),
      updatedAt: firebase.serverTimestamp(),
      updatedAtIso: savedAt
    };
    traceUserProgressWrite("saveProfileStoreToCloudNow", "explicit profile/progress save", userPayload, {
      firestoreUserDocument: true,
      inMemoryProfile: true,
      localStorage: false,
      legacyProfileStore: false,
      explicitQuizReward: false,
      explicitDeveloperReset: false
    });
    await firebase.setDoc(getFirebaseUserDocRef(firebase, firebaseAuthUser.uid), userPayload, { merge: true });

    updateCloudSyncDebug({
      lastCloudSaveTime: savedAt,
      lastCloudSaveError: "",
      firestoreCoinsLoaded: normalizeCoinCount(activeProfile?.coins)
    }, "Firestore save complete");
  } catch (error) {
    updateCloudSyncDebug({ lastCloudSaveError: getErrorMessage(error) }, "Firestore save failed");
    console.warn("Could not sync progress to Firebase. Local progress is still saved.", error);
  } finally {
    cloudSaveInFlight = false;
    if (cloudSavePending && firebaseAuthUser) {
      cloudSavePending = false;
      saveProfileStoreToCloudNow();
    }
  }
}

async function saveCurrentVillageMembershipToCloudNow(reason = "village membership change") {
  if (!profileStore || !hasCloudSyncConfig() || !firebaseAuthUser) return;
  try {
    const firebase = await getFirebaseSyncApi();
    await syncCurrentProfileToVillageDoc(firebase, new Date().toISOString(), {
      allowCreateMembership: true,
      reason
    });
  } catch (error) {
    updateCloudSyncDebug({ lastCloudSaveError: getErrorMessage(error) }, "Firestore village membership save failed");
    console.warn("Could not sync village membership to Firebase.", error);
  }
}

async function syncCurrentProfileToVillageDoc(firebase, savedAt, options = {}) {
  const profileId = currentProfileId || profileStore.currentProfile || getFirebaseProfileId(firebaseAuthUser);
  const activeProfile = profileId ? profileStore.profiles?.[profileId] : null;
  const groupId = normalizeGroupId(activeProfile?.villageId || currentGroupId || profileStore.currentGroup, profileStore.groups);
  const groupInfo = DEFAULT_GROUPS.find((group) => group.id === groupId);
  if (!profileId || !activeProfile || !groupInfo) {
    console.info("[Unser Dorf village sync] Skipped village profile sync because no active Firebase profile is ready.", {
      reason: options.reason || "",
      profileId,
      groupId
    });
    return;
  }

  const villageRef = getFirebaseVillageDocRef(firebase, groupId);
  const villagePath = getFirebaseVillageDocPath(firebase, groupId);
  const villageSnapshot = await firebase.getDocFromServer(villageRef);
  const villageData = villageSnapshot.exists() ? villageSnapshot.data() || {} : {};
  const serverProfiles = { ...(villageData.profiles || {}) };
  const serverMemberProfiles = { ...(villageData.memberProfiles || {}) };
  const serverGroup = createGroupData(groupInfo, villageData.group || {});
  const serverMemberIds = normalizeGroupMemberIds([
    ...normalizeProfileIdList(serverGroup.memberIds || []),
    ...Object.keys(serverProfiles)
  ]);
  const alreadyMember = serverMemberIds.includes(profileId) || Boolean(serverProfiles[profileId]);
  if (!alreadyMember && !options.allowCreateMembership) {
    console.info("[Unser Dorf village sync] Skipped village membership write because Firestore does not list this profile as a village member.", {
      reason: options.reason || "",
      path: villagePath,
      profileId,
      groupId,
      serverMemberIds
    });
    return;
  }

  const sanitizedProfile = sanitizeProfileStoreForSync({
    ...activeProfile,
    id: profileId,
    ownerUid: activeProfile.ownerUid || firebaseAuthUser.uid,
    ownerEmail: activeProfile.ownerEmail || firebaseAuthUser.email || "",
    villageId: groupId
  });
  const nextMemberIds = normalizeGroupMemberIds([...serverMemberIds, profileId]);
  const nextGroup = createGroupData(groupInfo, {
    ...serverGroup,
    memberIds: nextMemberIds
  });
  serverProfiles[profileId] = sanitizedProfile;
  serverMemberProfiles[profileId] = sanitizedProfile;

  console.info("[Unser Dorf village sync] Writing current profile to village document.", {
    reason: options.reason || "",
    path: villagePath,
    profileId,
    allowCreateMembership: Boolean(options.allowCreateMembership),
    memberIdsBefore: serverMemberIds,
    memberIdsAfter: nextMemberIds
  });

  const villagePayload = {
    group: nextGroup,
    profiles: serverProfiles,
    memberProfiles: serverMemberProfiles,
    rosterVersion: getNextVillageRosterVersion(villageData),
    rosterUpdatedAt: firebase.serverTimestamp(),
    rosterUpdatedAtIso: savedAt,
    updatedAt: firebase.serverTimestamp(),
    updatedAtIso: savedAt
  };
  traceVillageWrite("syncCurrentProfileToVillageDoc", options.reason || "village profile sync", groupId, villagePayload, {
    currentFirestoreVillageDocument: true,
    explicitVillageJoin: Boolean(options.allowCreateMembership),
    currentUserDocument: false,
    profileStores: false,
    localStorage: false,
    legacyMigration: false,
    adminCleanup: false
  });
  await firebase.setDoc(villageRef, villagePayload, { merge: true });
}

async function saveActiveStudySetToCloudNow(studySet) {
  if (!hasCloudSyncConfig() || !firebaseAuthUser) return;
  const normalizedStudySet = normalizeActiveStudySet(studySet);
  try {
    const firebase = await getFirebaseSyncApi();
    traceUserProgressWrite("saveActiveStudySetToCloudNow", "explicit completed flashcard study set save", { activeStudySet: normalizedStudySet }, {
      firestoreUserDocument: true,
      inMemoryProfile: true,
      localStorage: false,
      legacyProfileStore: false,
      explicitQuizReward: false,
      explicitDeveloperReset: false
    });
    const userRef = getFirebaseUserDocRef(firebase, firebaseAuthUser.uid);
    const profileId = currentProfileId || profileStore?.currentProfile || getFirebaseProfileId(firebaseAuthUser);
    if (!normalizedStudySet.wordIds.length && firebase.updateDoc) {
      const clearPayload = { activeStudySet: {} };
      if (profileId) clearPayload[`profiles.${profileId}.activeStudySet`] = {};
      await firebase.updateDoc(userRef, clearPayload);
    } else {
      const payload = { activeStudySet: normalizedStudySet };
      if (profileId) payload.profiles = { [profileId]: { activeStudySet: normalizedStudySet } };
      await firebase.setDoc(
        userRef,
        payload,
        { merge: true }
      );
    }
    updateCloudSyncDebug({
      lastCloudSaveTime: new Date().toISOString(),
      lastCloudSaveError: ""
    }, "Firestore activeStudySet save complete");
  } catch (error) {
    updateCloudSyncDebug({ lastCloudSaveError: getErrorMessage(error) }, "Firestore activeStudySet save failed");
    console.warn("Could not sync active flashcard study set to Firebase. Local study set is still saved.", error);
  }
}

async function saveLearningPreferencesToCloudNow(preferences) {
  if (!hasCloudSyncConfig() || !firebaseAuthUser) return;
  const normalizedPreferences = normalizeLearningPreferences(preferences);
  try {
    const firebase = await getFirebaseSyncApi();
    traceUserProgressWrite("saveLearningPreferencesToCloudNow", "explicit learning preference save", { learningPreferences: normalizedPreferences }, {
      firestoreUserDocument: true,
      inMemoryProfile: true,
      localStorage: false,
      legacyProfileStore: false,
      explicitQuizReward: false,
      explicitDeveloperReset: false
    });
    await firebase.setDoc(
      getFirebaseUserDocRef(firebase, firebaseAuthUser.uid),
      { learningPreferences: normalizedPreferences },
      { merge: true }
    );
    updateCloudSyncDebug({
      lastCloudSaveTime: new Date().toISOString(),
      lastCloudSaveError: ""
    }, "Firestore learningPreferences save complete");
  } catch (error) {
    updateCloudSyncDebug({ lastCloudSaveError: getErrorMessage(error) }, "Firestore learningPreferences save failed");
    console.warn("Could not sync learning preferences to Firebase. Local preferences are still saved.", error);
  }
}

async function saveDifficultWordsToCloudNow(words = difficultWords) {
  if (!hasCloudSyncConfig() || !firebaseAuthUser) return;
  try {
    const firebase = await getFirebaseSyncApi();
    const payload = { difficultWords: normalizeDifficultWords(words) };
    traceUserProgressWrite("saveDifficultWordsToCloudNow", "explicit difficult-word progress save", payload, {
      firestoreUserDocument: true,
      inMemoryProfile: true,
      localStorage: false,
      legacyProfileStore: false,
      explicitQuizReward: false,
      explicitDeveloperReset: false
    });
    await firebase.setDoc(
      getFirebaseUserDocRef(firebase, firebaseAuthUser.uid),
      payload,
      { merge: true }
    );
    updateCloudSyncDebug({
      lastCloudSaveTime: new Date().toISOString(),
      lastCloudSaveError: ""
    }, "Firestore difficultWords save complete");
  } catch (error) {
    updateCloudSyncDebug({ lastCloudSaveError: getErrorMessage(error) }, "Firestore difficultWords save failed");
    console.warn("Could not sync difficult words to Firebase. Local difficult-word data is still saved.", error);
  }
}

async function fetchProfileStoreFromCloud() {
  if (!hasCloudSyncConfig() || !firebaseAuthUser) return null;
  try {
    const firebase = await getFirebaseSyncApi();
    const remoteStore = createProfileStore();
    let hasRemoteData = false;

    const legacySnapshot = await firebase.getDoc(firebase.docRef);
    if (legacySnapshot.exists()) {
      const legacyData = legacySnapshot.data() || {};
      const legacyStore = legacyData.profileStore || legacyData.profile_store;
      if (legacyStore?.profiles) {
        console.info("[Unser Dorf village lifecycle] Loaded legacy profile store.", {
          path: getFirebaseProfileStoreDocPath(firebase, "shared"),
          profileIds: Object.keys(legacyStore.profiles || {}),
          familyZMemberIds: normalizeGroupMemberIds(legacyStore.groups?.[DEFAULT_GROUP_ID]?.memberIds || []),
          action: "diagnostics-only; authenticated startup does not import legacy rosters"
        });
      }
    }

    const villageDocsLoaded = [];
    await Promise.all(DEFAULT_GROUPS.map(async (groupInfo) => {
      const villageSnapshot = await firebase.getDocFromServer(getFirebaseVillageDocRef(firebase, groupInfo.id));
      if (!villageSnapshot.exists()) return;
	      const villageData = villageSnapshot.data() || {};
	      console.info("[Unser Dorf village lifecycle] Loaded village document.", {
	        path: getFirebaseVillageDocPath(firebase, groupInfo.id),
	        groupId: groupInfo.id,
	        memberIds: normalizeGroupMemberIds(villageData.group?.memberIds || []),
	        topLevelMemberIds: normalizeGroupMemberIds(villageData.memberIds || []),
	        profileIds: Object.keys(villageData.profiles || {}),
	        memberProfileIds: Object.keys(villageData.memberProfiles || {})
	      });
      mergeRemoteProfilesIntoStore(remoteStore, villageData.profiles || {});
      remoteStore.groups[groupInfo.id] = createGroupData(groupInfo, villageData.group || {});
      remoteStore.groups[groupInfo.id].memberIds = normalizeGroupMemberIds([
        ...remoteStore.groups[groupInfo.id].memberIds,
        ...Object.keys(villageData.profiles || {})
      ]);
      villageDocsLoaded.push(groupInfo.id);
      hasRemoteData = true;
    }));

      const userSnapshot = await firebase.getDocFromServer(getFirebaseUserDocRef(firebase, firebaseAuthUser.uid));
    const userDocLoaded = userSnapshot.exists();
    let firestoreProfileExists = false;
    if (userSnapshot.exists()) {
	      const userData = userSnapshot.data() || {};
	      console.info("[Unser Dorf village lifecycle] Loaded user document.", {
	        path: getFirebaseUserDocPath(firebase, firebaseAuthUser.uid),
	        uid: firebaseAuthUser.uid,
	        currentGroup: userData.currentGroup || "",
	        currentProfile: userData.currentProfile || "",
	        profileIds: Object.keys(userData.profiles || {})
	      });
	      firestoreProfileExists = getFirebaseIdentityProfileIds({
        profiles: userData.profiles || {}
      }, firebaseAuthUser).length > 0;
      const userIdentityProfiles = getFirebaseIdentityProfilesFromMap(userData.profiles || {}, firebaseAuthUser);
      const userProgressResetVersion = normalizeCounter(userData.progressResetVersion);
      const userProgressResetAtIso = typeof userData.progressResetAtIso === "string" ? userData.progressResetAtIso : "";
      Object.values(userIdentityProfiles).forEach((profile) => {
        profile.progressResetVersion = Math.max(normalizeCounter(profile.progressResetVersion), userProgressResetVersion);
        if (userProgressResetAtIso && !profile.progressResetAtIso) profile.progressResetAtIso = userProgressResetAtIso;
      });
      mergeRemoteProfilesIntoStore(remoteStore, userIdentityProfiles, { preferIncomingIdentity: true });
      const userRole = sanitizeUserRole(userData.role);
      if (userRole !== "member") {
        getFirebaseIdentityProfileIds(remoteStore, firebaseAuthUser).forEach((profileId) => {
          if (remoteStore.profiles[profileId]) remoteStore.profiles[profileId].role = userRole;
        });
      }
      const hasTopLevelActiveStudySet = Object.prototype.hasOwnProperty.call(userData, "activeStudySet");
      const remoteActiveStudySet = normalizeActiveStudySet(userData.activeStudySet);
      if (hasTopLevelActiveStudySet) {
        getFirebaseIdentityProfileIds(remoteStore, firebaseAuthUser).forEach((profileId) => {
          if (remoteStore.profiles[profileId]) remoteStore.profiles[profileId].activeStudySet = remoteActiveStudySet;
        });
      }
      remoteStore.currentGroup = normalizeGroupId(userData.currentGroup || remoteStore.currentGroup, remoteStore.groups);
      remoteStore.currentProfile = String(userData.currentProfile || "");
      const serverLearningSnapshot = getLearningCountSnapshotFromUserDoc(userData, remoteStore.currentProfile || getFirebaseProfileId(firebaseAuthUser));
      const serverWordCount = serverLearningSnapshot.topLevelActiveStudySetCount
        || serverLearningSnapshot.profileActiveStudySetCount
        || serverLearningSnapshot.profileUnfinishedDeckCount
        || 0;
      const serverSessionId = serverLearningSnapshot.topLevelActiveStudySetSessionId
        || serverLearningSnapshot.profileActiveStudySetSessionId
        || serverLearningSnapshot.profileUnfinishedSessionId
        || "";
      lastLearningHydrationSnapshot = {
        ...(lastLearningHydrationSnapshot || {}),
        serverWordCount,
        serverSessionId,
        serverLearningSnapshot,
        localStateDiscarded: Boolean(
          lastLearningHydrationSnapshot
          && Number(lastLearningHydrationSnapshot.localCachedWordCount) !== Number(serverWordCount)
        )
      };
      console.info("[Unser Dorf learning hydration] Server user document study state.", {
        path: getFirebaseUserDocPath(firebase, firebaseAuthUser.uid),
        profileId: remoteStore.currentProfile || getFirebaseProfileId(firebaseAuthUser),
        ...serverLearningSnapshot,
        authoritativeCount: serverWordCount,
        authoritativeSessionId: serverSessionId
      });
      consolidateFirebaseIdentityProfiles(remoteStore, {
        preferProfileId: remoteStore.currentProfile
      });
      hasRemoteData = true;
      logCloudIdentityDebug("Firestore user document loaded", {
        remoteStore,
        userData
      });
    }

    updateCloudSyncDebug({
      userDocLoaded,
      villageDocsLoaded,
      firestoreProfileExists,
      firestoreCoinsLoaded: getIdentitySnapshotFromStore(remoteStore, remoteStore.currentProfile).coins,
      lastCloudLoadTime: new Date().toISOString(),
      lastCloudLoadError: ""
    }, "Firestore load complete");
    return hasRemoteData ? remoteStore : null;
  } catch (error) {
    updateCloudSyncDebug({ lastCloudLoadError: getErrorMessage(error) }, "Firestore load failed");
    console.warn("Could not load shared Firebase progress.", error);
    return null;
  }
}

function mergeRemoteProfilesIntoStore(store, incomingProfiles = {}, options = {}) {
  Object.entries(incomingProfiles || {}).forEach(([profileId, incomingProfile]) => {
    if (!profileId || LEGACY_PROFILE_IDS.has(profileId)) return;
    const existingProfile = store.profiles?.[profileId];
    const sourceProfile = existingProfile || incomingProfile || {};
    const defaultProfile = {
      id: profileId,
      name: sourceProfile.name || "Profile",
      emoji: sourceProfile.emoji || "🏡",
      avatar: sourceProfile.avatar || "",
      password: sourceProfile.password || ""
    };
    store.profiles[profileId] = existingProfile
      ? mergeProfileData(existingProfile, incomingProfile, defaultProfile, {
        preferRemoteIdentity: Boolean(options.preferIncomingIdentity)
      })
      : normalizeProfileData(incomingProfile, defaultProfile);
  });
}

function getFirebaseIdentityProfileIds(store = profileStore, user = firebaseAuthUser) {
  if (!store?.profiles || !user?.uid) return [];
  const canonicalId = getFirebaseProfileId(user);
  const email = String(user.email || "").toLowerCase();
  return Object.entries(store.profiles)
    .filter(([profileId, profile]) => {
      if (!profile || LEGACY_PROFILE_IDS.has(profileId)) return false;
      const ownerEmail = String(profile.ownerEmail || "").toLowerCase();
      return profileId === canonicalId
        || profile.ownerUid === user.uid
        || Boolean(email && ownerEmail && ownerEmail === email);
    })
    .map(([profileId]) => profileId);
}

function getFirebaseIdentityProfilesFromMap(profiles = {}, user = firebaseAuthUser) {
  if (!profiles || !user?.uid) return {};
  const canonicalId = getFirebaseProfileId(user);
  const email = String(user.email || "").toLowerCase();
  return Object.fromEntries(Object.entries(profiles).filter(([profileId, profile]) => {
    if (!profile || LEGACY_PROFILE_IDS.has(profileId)) return false;
    const ownerEmail = String(profile.ownerEmail || profile.email || "").toLowerCase();
    return profileId === canonicalId
      || profile.ownerUid === user.uid
      || Boolean(email && ownerEmail && ownerEmail === email);
  }));
}

function replaceProfileIdsInGroups(store, duplicateIds, canonicalId) {
  const duplicateSet = new Set(duplicateIds.filter((profileId) => profileId && profileId !== canonicalId));
  Object.values(store?.groups || {}).forEach((group) => {
    group.memberIds = normalizeGroupMemberIds((group.memberIds || []).map((profileId) => (
      duplicateSet.has(profileId) ? canonicalId : profileId
    )));
  });
}

function keepProfileInOnlyOneGroup(store, profileId, selectedGroupId) {
  if (!store?.groups || !profileId || !selectedGroupId) return;
  Object.values(store.groups).forEach((group) => {
    const memberIds = normalizeGroupMemberIds(group.memberIds || []);
    group.memberIds = group.id === selectedGroupId
      ? normalizeGroupMemberIds([...memberIds, profileId])
      : memberIds.filter((memberId) => memberId !== profileId);
  });
}

function findFirstGroupForProfile(store, profileId) {
  return Object.values(store?.groups || {}).find((group) => group?.memberIds?.includes(profileId)) || null;
}

function consolidateFirebaseIdentityProfiles(store = profileStore, options = {}) {
  const user = options.user || firebaseAuthUser;
  const canonicalId = getFirebaseProfileId(user);
  if (!store?.profiles || !user?.uid || !canonicalId) {
    return { canonicalId: "", duplicateIds: [], changed: false };
  }

  const matchingIds = Array.from(new Set([
    canonicalId,
    ...getFirebaseIdentityProfileIds(store, user)
  ].filter(Boolean)));
  const existingIds = matchingIds.filter((profileId) => store.profiles[profileId]);
  const sourceIds = existingIds.length ? existingIds : [canonicalId];
  const preferId = options.preferProfileId && store.profiles[options.preferProfileId]
    ? options.preferProfileId
    : store.currentProfile && sourceIds.includes(store.currentProfile)
      ? store.currentProfile
      : sourceIds[0];
  let canonicalProfile = store.profiles[canonicalId] || null;

  sourceIds.forEach((profileId) => {
    const profile = store.profiles[profileId];
    if (!profile) return;
    const defaultProfile = {
      id: canonicalId,
      name: canonicalProfile?.name || profile.name || getIdentityDisplayName(),
      emoji: canonicalProfile?.emoji || profile.emoji || "🌿",
      avatar: canonicalProfile?.avatar || profile.avatar || "",
      password: canonicalProfile?.password || profile.password || ""
    };
    canonicalProfile = canonicalProfile
      ? mergeProfileData(canonicalProfile, { ...profile, id: canonicalId }, defaultProfile, {
        preferRemoteIdentity: profileId === preferId
      })
      : normalizeProfileData({ ...profile, id: canonicalId }, defaultProfile);
  });

  if (!canonicalProfile && options.createIfMissing) {
    const identityName = getIdentityDisplayName();
    canonicalProfile = normalizeProfileData(
      {
        id: canonicalId,
        name: identityName,
        displayName: "",
        villageDisplayName: "",
        displayNameConfirmed: false,
        password: "",
        emoji: "🌿",
        avatar: "",
        demoCompleted: true,
        role: shouldBootstrapDeveloperRole(user) ? "developer" : "member",
        protectedAccount: shouldBootstrapDeveloperRole(user)
      },
      { id: canonicalId, name: identityName, password: "", emoji: "🌿", avatar: "" }
    );
  }
  if (!canonicalProfile) {
    return { canonicalId, duplicateIds: [], changed: false };
  }

  canonicalProfile.id = canonicalId;
  canonicalProfile.ownerUid = user.uid;
  canonicalProfile.ownerEmail = user.email || canonicalProfile.ownerEmail || "";
  const groupForProfile = findFirstGroupForProfile(store, preferId) || findFirstGroupForProfile(store, canonicalId);
  if (!canonicalProfile.villageId && groupForProfile?.id) canonicalProfile.villageId = groupForProfile.id;
  store.profiles[canonicalId] = canonicalProfile;

  const duplicateIds = sourceIds.filter((profileId) => profileId !== canonicalId);
  replaceProfileIdsInGroups(store, duplicateIds, canonicalId);
  duplicateIds.forEach((profileId) => {
    delete store.profiles[profileId];
  });

  store.currentProfile = canonicalId;
  const resolvedGroupId = normalizeGroupId(canonicalProfile.villageId || store.currentGroup, store.groups);
  store.currentGroup = resolvedGroupId;
  currentProfileId = canonicalId;
  currentGroupId = resolvedGroupId;
  const currentGroup = store.groups?.[resolvedGroupId];
  if (currentGroup) keepProfileInOnlyOneGroup(store, canonicalId, resolvedGroupId);

  if (duplicateIds.length || !existingIds.includes(canonicalId)) {
    console.info("[Unser Dorf identity cleanup] Consolidated Firebase identity profiles.", {
      firebaseUid: user.uid,
      canonicalId,
      duplicateIds,
      email: user.email || ""
    });
  }

  return {
    canonicalId,
    duplicateIds,
    changed: duplicateIds.length > 0 || !existingIds.includes(canonicalId)
  };
}

function getFirebaseSyncConfig() {
  const config = window.UNSER_DORF_FIREBASE_SYNC || window.UNSER_DORF_FIREBASE_CONFIG || {};
  const firebaseConfig = config.firebaseConfig || config.config || {};
  const enabled = Boolean(config.enabled && firebaseConfig.apiKey && firebaseConfig.projectId);
  return {
    enabled,
    firebaseConfig,
    rootPath: String(config.rootPath || FIREBASE_SYNC_DEFAULT_ROOT_PATH),
    documentPath: String(config.documentPath || FIREBASE_SYNC_DEFAULT_DOCUMENT_PATH),
    adminUids: Array.isArray(config.adminUids) ? config.adminUids.map(String).filter(Boolean) : [],
    adminEmails: Array.isArray(config.adminEmails) ? config.adminEmails.map((email) => String(email).toLowerCase()).filter(Boolean) : []
  };
}

async function getFirebaseSyncApi() {
  if (firebaseSyncApi) return firebaseSyncApi;
  if (!firebaseSyncPromise) {
    firebaseSyncPromise = initializeFirebaseSyncApi();
  }
  firebaseSyncApi = await firebaseSyncPromise;
  return firebaseSyncApi;
}

async function initializeFirebaseSyncApi() {
  const syncConfig = getFirebaseSyncConfig();
  if (!syncConfig.enabled) throw new Error("Firebase sync is not configured.");
  const documentPathParts = syncConfig.documentPath.split("/").map((part) => part.trim()).filter(Boolean);
  if (documentPathParts.length % 2 !== 0) {
    throw new Error("Firebase documentPath must point to a Firestore document.");
  }
  const rootPathParts = syncConfig.rootPath.split("/").map((part) => part.trim()).filter(Boolean);
  if (rootPathParts.length % 2 !== 0) {
    throw new Error("Firebase rootPath must point to a Firestore document.");
  }
  const [{ initializeApp }, firestoreModule, authModule] = await Promise.all([
    import(FIREBASE_APP_MODULE_URL),
    import(FIREBASE_FIRESTORE_MODULE_URL),
    import(FIREBASE_AUTH_MODULE_URL)
  ]);
  const app = initializeApp(syncConfig.firebaseConfig);
  const db = firestoreModule.getFirestore(app);
  const auth = authModule.getAuth(app);
  return {
    app,
    db,
    auth,
    authModule,
    rootPathParts,
    docRef: firestoreModule.doc(db, ...documentPathParts),
    collection: firestoreModule.collection,
    doc: firestoreModule.doc,
	    getDoc: firestoreModule.getDoc,
	    getDocs: firestoreModule.getDocs,
	    getDocFromServer: firestoreModule.getDocFromServer || firestoreModule.getDoc,
	    getDocsFromServer: firestoreModule.getDocsFromServer || firestoreModule.getDocs,
	    deleteDoc: firestoreModule.deleteDoc,
    setDoc: firestoreModule.setDoc,
    updateDoc: firestoreModule.updateDoc,
    serverTimestamp: firestoreModule.serverTimestamp
  };
}

function applyRemoteProfileStore(remoteStore) {
  if (!remoteStore?.profiles) return;
  const preHydrationProfileId = currentProfileId || profileStore?.currentProfile || getFirebaseProfileId(firebaseAuthUser);
  const preHydrationProfile = preHydrationProfileId ? profileStore?.profiles?.[preHydrationProfileId] : null;
  lastPreHydrationProgressSnapshot = getProgressFieldSnapshot(preHydrationProfile || {});
  const localProfileIdsBeforeHydration = Object.keys(profileStore?.profiles || {}).filter((profileId) => !LEGACY_PROFILE_IDS.has(profileId));
  const mergedStore = mergeProfileStores(profileStore, remoteStore);
  const remoteProfileIds = new Set(Object.keys(remoteStore.profiles || {}));
  const discardedLocalProfileIds = localProfileIdsBeforeHydration.filter((profileId) => !remoteProfileIds.has(profileId));
  applyingRemoteStore = true;
  profileStore = mergedStore;
  consolidateFirebaseIdentityProfiles(profileStore, {
    preferProfileId: remoteStore.currentProfile
  });
  profileDataSource = "merged";
  if (firebaseAuthUser && profileStore.currentProfile) {
    currentProfileId = profileStore.currentProfile;
  }
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileStore));
  if (currentProfileId && profileStore.profiles[currentProfileId]) {
    progress = profileStore.profiles[currentProfileId].progress;
    vocabularyProgress = profileStore.profiles[currentProfileId].vocabularyProgress;
    articleProgress = profileStore.profiles[currentProfileId].articleProgress;
    difficultWords = profileStore.profiles[currentProfileId].difficultWords;
    nounVerbProgress = profileStore.profiles[currentProfileId].nounVerbProgress;
    meaningMatchProgress = profileStore.profiles[currentProfileId].meaningMatchProgress;
    prepositionProgress = profileStore.profiles[currentProfileId].prepositionProgress;
    recentMeaningMatchItems = normalizeRecentItemList(profileStore.profiles[currentProfileId].recentMeaningMatchItems, MEANING_MATCH_RECENT_BUFFER);
  }
  applyingRemoteStore = false;
  promoteFamilyAchievements(profileStore);
  logCloudIdentityDebug("Remote profile store applied", { remoteStore });
  console.info("[Unser Dorf authenticated local cache cleanup]", {
    discardedLocalProfileIds,
    serverProfileIds: [...remoteProfileIds],
    localStorageKey: PROFILE_STORAGE_KEY,
    action: "local roster cache replaced by Firestore hydration"
  });
  refreshVisibleProfileState();
  renderAchievementDebugPanel();
}

function mergeProfileStores(localStore, remoteStore) {
  const preferRemoteIdentity = Boolean(firebaseAuthUser && remoteStore?.profiles);
  const baseStore = {
    ...createProfileStore(),
    ...(localStore || {}),
    ...(remoteStore || {}),
    profiles: {}
  };

  const customIds = new Set((preferRemoteIdentity
    ? Object.keys(remoteStore?.profiles || {})
    : [
      ...Object.keys(localStore?.profiles || {}),
      ...Object.keys(remoteStore?.profiles || {})
    ]).filter((profileId) => !LEGACY_PROFILE_IDS.has(profileId)));
  customIds.forEach((profileId) => {
    const localProfile = localStore?.profiles?.[profileId];
    const remoteProfile = remoteStore?.profiles?.[profileId];
    const customProfile = localProfile || remoteProfile;
    const defaultProfile = {
      id: profileId,
      name: customProfile?.name || "Profile",
      emoji: customProfile?.emoji || "🏡",
      avatar: customProfile?.avatar || "",
      password: customProfile?.password || ""
    };
    baseStore.profiles[profileId] = mergeProfileData(localProfile, remoteProfile, defaultProfile, {
      preferRemoteIdentity
    });
  });

  baseStore.currentProfile = preferRemoteIdentity
    ? remoteStore?.currentProfile || localStore?.currentProfile || ""
    : localStore?.currentProfile || remoteStore?.currentProfile || "";
  baseStore.villageName = normalizeVillageName(localStore?.villageName) || normalizeVillageName(remoteStore?.villageName);
  baseStore.villageAlbumSeenRewards = Array.from(
    new Set([
      ...normalizeVillageAlbumSeenRewardIds(localStore?.villageAlbumSeenRewards),
      ...normalizeVillageAlbumSeenRewardIds(remoteStore?.villageAlbumSeenRewards)
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
  baseStore.currentGroup = normalizeGroupId(
    preferRemoteIdentity
      ? remoteStore?.currentGroup || localStore?.currentGroup
      : localStore?.currentGroup || remoteStore?.currentGroup,
    baseStore.groups
  );
  currentGroupId = baseStore.currentGroup;
  baseStore.migratedLegacyProgress = Boolean(localStore?.migratedLegacyProgress || remoteStore?.migratedLegacyProgress);
  return promoteFamilyAchievements(baseStore);
}

function mergeProfileData(localProfile, remoteProfile, defaultProfile, options = {}) {
  const local = normalizeProfileData(localProfile, defaultProfile);
  const remote = normalizeProfileData(remoteProfile, defaultProfile);
  const preferRemoteIdentity = Boolean(options.preferRemoteIdentity && remoteProfile);
  const identitySource = preferRemoteIdentity ? remote : local;
  const fallbackIdentitySource = preferRemoteIdentity ? local : remote;
  const progressSource = preferRemoteIdentity ? remote : null;
  return normalizeProfileData(
    {
      ...local,
      ...remote,
      coins: progressSource ? normalizeCoinCount(progressSource.coins) : Math.max(normalizeCoinCount(local.coins), normalizeCoinCount(remote.coins)),
      dailyChallenge: progressSource ? progressSource.dailyChallenge : pickLatestDailyChallenge(local.dailyChallenge, remote.dailyChallenge),
      streak: progressSource ? progressSource.streak : pickBestStreak(local.streak, remote.streak),
      villageContribution: progressSource ? progressSource.villageContribution : pickBestVillageContribution(local.villageContribution, remote.villageContribution),
      progress: progressSource ? progressSource.progress : mergeProgressEntries(local.progress, remote.progress),
      vocabularyProgress: progressSource ? progressSource.vocabularyProgress : mergeProgressEntries(local.vocabularyProgress, remote.vocabularyProgress),
      articleProgress: progressSource ? progressSource.articleProgress : mergeProgressEntries(local.articleProgress, remote.articleProgress),
      difficultWords: progressSource ? progressSource.difficultWords : mergeDifficultWords(local.difficultWords, remote.difficultWords),
      nounVerbProgress: progressSource ? progressSource.nounVerbProgress : mergeProgressEntries(local.nounVerbProgress, remote.nounVerbProgress),
      meaningMatchProgress: progressSource ? progressSource.meaningMatchProgress : mergeProgressEntries(local.meaningMatchProgress, remote.meaningMatchProgress),
      prepositionProgress: progressSource ? progressSource.prepositionProgress : mergeProgressEntries(local.prepositionProgress, remote.prepositionProgress),
      recentMeaningMatchItems: progressSource ? progressSource.recentMeaningMatchItems : mergeRecentItemLists(local.recentMeaningMatchItems, remote.recentMeaningMatchItems, MEANING_MATCH_RECENT_BUFFER),
      vocabularyReviewStats: progressSource ? progressSource.vocabularyReviewStats : mergeVocabularyReviewStats(local.vocabularyReviewStats, remote.vocabularyReviewStats),
      challengeSessionsCompleted: progressSource ? normalizeCounter(progressSource.challengeSessionsCompleted) : Math.max(
        normalizeCounter(local.challengeSessionsCompleted),
        normalizeCounter(remote.challengeSessionsCompleted)
      ),
      flashcardSessions: progressSource ? progressSource.flashcardSessions : mergeFlashcardSessions(local.flashcardSessions, remote.flashcardSessions),
      flashcardsReviewed: progressSource
        ? normalizeCounter(progressSource.flashcardsReviewed)
        : Math.max(normalizeCounter(local.flashcardsReviewed), normalizeCounter(remote.flashcardsReviewed)),
      activeStudySet: progressSource ? progressSource.activeStudySet : mergeActiveStudySets(local.activeStudySet, remote.activeStudySet),
      learningPreferences: mergeLearningPreferences(local.learningPreferences, remote.learningPreferences),
      positions: progressSource ? progressSource.positions : {
        vocabulary: Math.max(normalizePosition(local.positions?.vocabulary), normalizePosition(remote.positions?.vocabulary)),
        article: Math.max(normalizePosition(local.positions?.article), normalizePosition(remote.positions?.article)),
        nounVerb: Math.max(normalizePosition(local.positions?.nounVerb), normalizePosition(remote.positions?.nounVerb))
      },
      levelBonusesAwarded: progressSource ? progressSource.levelBonusesAwarded : Array.from(new Set([...(local.levelBonusesAwarded || []), ...(remote.levelBonusesAwarded || [])])),
      achievementsUnlocked: progressSource ? progressSource.achievementsUnlocked : Array.from(new Set([...(local.achievementsUnlocked || []), ...(remote.achievementsUnlocked || [])])),
      austriaAlbumSeenRewards: progressSource ? progressSource.austriaAlbumSeenRewards : Array.from(new Set([
        ...normalizeRewardIdList(local.austriaAlbumSeenRewards),
        ...normalizeRewardIdList(remote.austriaAlbumSeenRewards)
      ])),
      history: progressSource ? progressSource.history : mergeHistory(local.history, remote.history),
      lastStudyDate: progressSource ? progressSource.lastStudyDate : latestString(local.lastStudyDate, remote.lastStudyDate),
      progressResetVersion: progressSource ? normalizeCounter(progressSource.progressResetVersion) : Math.max(normalizeCounter(local.progressResetVersion), normalizeCounter(remote.progressResetVersion)),
      progressResetAtIso: progressSource ? progressSource.progressResetAtIso : latestString(local.progressResetAtIso, remote.progressResetAtIso),
      ownerUid: identitySource.ownerUid || fallbackIdentitySource.ownerUid || "",
      ownerEmail: identitySource.ownerEmail || fallbackIdentitySource.ownerEmail || "",
      role: sanitizeUserRole(identitySource.role || fallbackIdentitySource.role),
      displayName: identitySource.displayName || fallbackIdentitySource.displayName || "",
      displayNameConfirmed: Boolean(identitySource.displayNameConfirmed || fallbackIdentitySource.displayNameConfirmed),
      villageDisplayName: identitySource.villageDisplayName
        || identitySource.displayName
        || fallbackIdentitySource.villageDisplayName
        || fallbackIdentitySource.displayName
        || "",
      villageId: identitySource.villageId || fallbackIdentitySource.villageId || "",
      contributionCoins: progressSource ? normalizeCoinCount(progressSource.contributionCoins) : Math.max(normalizeCoinCount(local.contributionCoins), normalizeCoinCount(remote.contributionCoins)),
      settings: remote.settings || local.settings
    },
    defaultProfile
  );
}

function mergeFlashcardSessions(localSessions = {}, remoteSessions = {}) {
  const local = normalizeFlashcardSessions(localSessions);
  const remote = normalizeFlashcardSessions(remoteSessions);
  const merged = {};
  const keys = new Set([...Object.keys(local), ...Object.keys(remote)]);
  keys.forEach((key) => {
    const localSession = local[key] || {};
    const remoteSession = remote[key] || {};
    const newest = latestString(localSession.updatedAt, remoteSession.updatedAt) === localSession.updatedAt
      ? localSession
      : remoteSession;
    const sameStudyDate = localSession.studyDate && localSession.studyDate === remoteSession.studyDate;
    merged[key] = {
      ...newest,
      deckIds: newest.deckIds || localSession.deckIds || remoteSession.deckIds || [],
      index: normalizePosition(newest.index),
      studiedIds: sameStudyDate
        ? Array.from(new Set([...(localSession.studiedIds || []), ...(remoteSession.studiedIds || [])]))
        : normalizeRecentItemList(newest.studiedIds || [], Math.max(FLASHCARD_SESSION_SIZE, LEARN_GERMAN_MAX_GOAL)),
      ratings: {
        ...normalizeFlashcardRatings(localSession.ratings),
        ...normalizeFlashcardRatings(remoteSession.ratings)
      },
      studyGoal: normalizeFlashcardSessionGoal(newest.studyGoal || localSession.studyGoal || remoteSession.studyGoal || newest.requestedWordCount || localSession.requestedWordCount || remoteSession.requestedWordCount),
      completed: Boolean(localSession.completed || remoteSession.completed),
      updatedAt: latestString(localSession.updatedAt, remoteSession.updatedAt)
    };
  });
  return normalizeFlashcardSessions(merged);
}

function mergeActiveStudySets(localStudySet, remoteStudySet) {
  const local = normalizeActiveStudySet(localStudySet);
  const remote = normalizeActiveStudySet(remoteStudySet);
  if (!local.wordIds.length) return remote;
  if (!remote.wordIds.length) return local;
  if (local.sessionId && local.sessionId === remote.sessionId) {
    return normalizeActiveStudySet({
      ...local,
      reviewStatus: {
        vocabularyCompletedAt: latestString(
          local.reviewStatus?.vocabularyCompletedAt,
          remote.reviewStatus?.vocabularyCompletedAt
        ),
        articleCompletedAt: latestString(
          local.reviewStatus?.articleCompletedAt,
          remote.reviewStatus?.articleCompletedAt
        )
      }
    });
  }
  return latestString(local.reviewedAt, remote.reviewedAt) === local.reviewedAt ? local : remote;
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

function mergeDifficultWords(localEntries = {}, remoteEntries = {}) {
  const local = normalizeDifficultWords(localEntries);
  const remote = normalizeDifficultWords(remoteEntries);
  const merged = { ...local };
  Object.entries(remote).forEach(([wordId, remoteEntry]) => {
    const localEntry = merged[wordId];
    if (!localEntry) {
      merged[wordId] = remoteEntry;
      return;
    }
    merged[wordId] = {
      wordId,
      vocabularyCorrectStreak: Math.max(localEntry.vocabularyCorrectStreak, remoteEntry.vocabularyCorrectStreak),
      articleCorrectStreak: Math.max(localEntry.articleCorrectStreak, remoteEntry.articleCorrectStreak),
      lastFocusedReviewAt: latestString(localEntry.lastFocusedReviewAt, remoteEntry.lastFocusedReviewAt),
      lastVocabularyFocusedAt: latestString(localEntry.lastVocabularyFocusedAt, remoteEntry.lastVocabularyFocusedAt),
      lastArticleFocusedAt: latestString(localEntry.lastArticleFocusedAt, remoteEntry.lastArticleFocusedAt),
      lastIncorrectAt: latestString(localEntry.lastIncorrectAt, remoteEntry.lastIncorrectAt),
      lastCorrectAt: latestString(localEntry.lastCorrectAt, remoteEntry.lastCorrectAt)
    };
  });
  return normalizeDifficultWords(merged);
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
    challengeId: localChallenge?.challengeId || remoteChallenge?.challengeId || "",
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

function sanitizeGroupForSync(group) {
  return JSON.parse(JSON.stringify(group || {}));
}

function getFirebaseUserDocRef(firebase, uid) {
  return firebase.doc(firebase.db, ...firebase.rootPathParts, "users", uid);
}

function getFirebaseUserDocPath(firebase, uid) {
  return [...firebase.rootPathParts, "users", uid].join("/");
}

function getFirebaseUsersCollectionRef(firebase) {
  return firebase.collection(firebase.db, ...firebase.rootPathParts, "users");
}

function getFirebaseUsersCollectionPath(firebase) {
  return [...firebase.rootPathParts, "users"].join("/");
}

function getFirebaseProfileStoresCollectionRef(firebase) {
  return firebase.collection(firebase.db, ...firebase.rootPathParts, "profileStores");
}

function getFirebaseProfileStoresCollectionPath(firebase) {
  return [...firebase.rootPathParts, "profileStores"].join("/");
}

function getFirebaseProfileStoreDocPath(firebase, docId) {
  return [...firebase.rootPathParts, "profileStores", docId].join("/");
}

function getFirebaseVillageDocRef(firebase, groupId) {
  return firebase.doc(firebase.db, ...firebase.rootPathParts, "villages", groupId);
}

function getFirebaseVillageDocPath(firebase, groupId) {
  return [...firebase.rootPathParts, "villages", groupId].join("/");
}

function getFirebaseOwnedProfileIds() {
  if (!firebaseAuthUser || !profileStore?.profiles) return [];
  const canonicalId = getFirebaseProfileId(firebaseAuthUser);
  return canonicalId && profileStore.profiles[canonicalId] ? [canonicalId] : [];
}

function getFirebaseOwnedProfiles() {
  if (!firebaseAuthUser) return {};
  return Object.fromEntries(getFirebaseOwnedProfileIds().map((profileId) => {
    const profile = profileStore.profiles[profileId];
    return [
      profileId,
      sanitizeProfileStoreForSync({
        ...profile,
        ownerUid: profile.ownerUid || firebaseAuthUser.uid,
        ownerEmail: profile.ownerEmail || firebaseAuthUser.email || ""
      })
    ];
  }));
}

function getProfilesForGroupSync(group) {
  if (!group?.memberIds || !profileStore?.profiles) return {};
  return Object.fromEntries(
    group.memberIds
      .map((profileId) => [profileId, profileStore.profiles[profileId]])
      .filter(([, profile]) => Boolean(profile))
      .map(([profileId, profile]) => [profileId, sanitizeProfileStoreForSync(profile)])
  );
}

function traceVillageWrite(functionName, reason, villageId, payload = {}, source = {}) {
  if (villageId !== DEFAULT_GROUP_ID) return;
  villageRosterWriteCountSinceSignIn += 1;
  const group = payload.group || {};
  const profiles = payload.profiles || {};
  const memberProfiles = payload.memberProfiles || {};
  const memberIds = normalizeProfileIdList([
    ...(group.memberIds || []),
    ...(payload.memberIds || [])
  ]);
  console.info("[Unser Dorf village write trace]", {
    functionName,
    reason,
    path: `unserDorf/v0Testing/villages/${villageId}`,
    memberIds,
    profileIds: Object.keys(profiles),
    memberProfileIds: Object.keys(memberProfiles),
    source,
    stack: new Error("Village write trace").stack
  });
}

function getNextVillageRosterVersion(villageData = {}) {
  return normalizeCounter(villageData.rosterVersion) + 1;
}

async function verifySignInFamilyZRoster(firebase) {
  if (!firebase || !firebaseAuthUser) return;
  try {
    const villagePath = getFirebaseVillageDocPath(firebase, DEFAULT_GROUP_ID);
    const snapshot = await firebase.getDocFromServer(getFirebaseVillageDocRef(firebase, DEFAULT_GROUP_ID));
    const data = snapshot.exists() ? snapshot.data() || {} : {};
    const group = createGroupData(DEFAULT_GROUPS.find((item) => item.id === DEFAULT_GROUP_ID), data.group || {});
    const profiles = data.profiles || {};
    const memberProfiles = data.memberProfiles || {};
    const serverMemberIds = normalizeProfileIdList([
      ...(group.memberIds || []),
      ...(data.memberIds || []),
      ...Object.keys(profiles),
      ...Object.keys(memberProfiles)
    ]);
    const renderedMembers = getCurrentGroup()?.id === DEFAULT_GROUP_ID
      ? getCurrentGroupProfiles(profileStore)
      : [];
    console.info("[Unser Dorf sign-in roster verification]", {
      path: villagePath,
      serverMemberCount: serverMemberIds.length,
      serverMemberIds,
      renderedMemberCount: renderedMembers.length,
      renderedProfileIds: renderedMembers.map((profile) => profile.id || ""),
      rosterWritesDuringSignIn: villageRosterWriteCountSinceSignIn,
      rosterWriteOccurred: villageRosterWriteCountSinceSignIn > 0
    });
  } catch (error) {
    console.warn("[Unser Dorf sign-in roster verification] Could not verify Family Z roster from server.", error);
  }
}

async function verifySignInProgressState(firebase) {
  if (!firebase || !firebaseAuthUser) return;
  try {
    const path = getFirebaseUserDocPath(firebase, firebaseAuthUser.uid);
    const localProfileId = currentProfileId || profileStore?.currentProfile || getFirebaseProfileId(firebaseAuthUser);
    const snapshot = await firebase.getDocFromServer(getFirebaseUserDocRef(firebase, firebaseAuthUser.uid));
    const data = snapshot.exists() ? snapshot.data() || {} : {};
    const profileId = data.currentProfile || localProfileId;
    const serverProfile = profileId ? data.profiles?.[profileId] : null;
    const renderedProfile = getCurrentProfile();
    console.info(SIGN_IN_PROGRESS_VERIFICATION_PREFIX, {
      path,
      serverCoinValue: normalizeCoinCount(serverProfile?.coins),
      renderedCoinValue: normalizeCoinCount(renderedProfile?.coins),
      localCachedCoinValueBeforeHydration: normalizeCoinCount(lastPreHydrationProgressSnapshot?.coins),
      serverResetVersion: normalizeCounter(data.progressResetVersion || serverProfile?.progressResetVersion),
      localResetVersion: normalizeCounter(lastPreHydrationProgressSnapshot?.progressResetVersion),
      renderedResetVersion: normalizeCounter(renderedProfile?.progressResetVersion),
      userProgressWriteOccurredDuringSignIn: studySessionWriteCountSinceSignIn > 0,
      studySessionWritesDuringSignIn: studySessionWriteCountSinceSignIn,
      dataSource: "Firestore"
    });
  } catch (error) {
    console.warn(`${SIGN_IN_PROGRESS_VERIFICATION_PREFIX} Could not verify signed-in progress from server.`, error);
  }
}

function routeAfterStartup() {
  logAuthStateDiagnostics("startup route");
  if (firebaseAuthUser) {
    logAuthDebugBlock("AUTH DEBUG", profileStore);
    routeAfterIdentityReady();
    return;
  }
  showLandingScreen();
}

function routeAfterIdentityReady() {
  const profileId = ensureIdentityProfile();
  const profile = profileStore?.profiles?.[profileId] || null;
  logAuthStateDiagnostics("identity ready");
  const profileCheck = logUserProfileCheck(profileId, profile);
  if (shouldOpenDeveloperToolsFromUrl()) {
    showDeveloperTools();
    return;
  }
  if (profileId && profileCheck.shouldShowOnboarding) {
    showDisplayNameSetup(profileId);
    return;
  }
  const villageIds = getVillageIdsForProfile(profileId);
  const groupId = getVillageIdForProfile(profileId);
  if (villageIds.length > 1) {
    showVillageSelection();
    return;
  }
  if (profileId && groupId) {
    currentGroupId = groupId;
    profileStore.currentGroup = groupId;
    if (shouldShowRegisteredUserIntroduction(profile)) {
      completeProfileLogin(profileId, { showDashboard: false });
      showRegisteredUserIntroduction();
      return;
    }
    completeProfileLogin(profileId, { showDashboard: false });
    if (applyPendingBrowserRouteIfReady()) return;
    showDashboard();
    return;
  }
  showVillageSelection();
}

function getIdentityProfileId() {
  if (!profileStore?.profiles) return "";
  if (firebaseAuthUser) {
    return getFirebaseProfileId(firebaseAuthUser);
  }
  return "";
}

function ensureIdentityProfile() {
  if (!profileStore?.profiles) return "";
  const profileId = getIdentityProfileId();
  if (!profileId) return "";
  lastIdentityProfileWasCreated = false;
  if (firebaseAuthUser) {
    consolidateFirebaseIdentityProfiles(profileStore, {
      preferProfileId: profileStore.currentProfile
    });
  }
  if (!profileStore.profiles[profileId]) {
    lastIdentityProfileWasCreated = true;
    const identityName = getIdentityDisplayName();
    profileStore.profiles[profileId] = normalizeProfileData(
      {
        id: profileId,
        name: identityName,
        displayName: "",
        villageDisplayName: "",
        displayNameConfirmed: false,
        password: "",
        emoji: "🌿",
        avatar: "",
        demoCompleted: true,
        registeredIntroCompleted: false,
        learningIntroSeen: false,
        ownerUid: firebaseAuthUser?.uid || "",
        ownerEmail: firebaseAuthUser?.email || "",
        role: shouldBootstrapDeveloperRole() ? "developer" : "member",
        protectedAccount: shouldBootstrapDeveloperRole()
      },
      { id: profileId, name: identityName, password: "", emoji: "🌿", avatar: "" }
    );
  }
  if (firebaseAuthUser) assignProfileToFirebaseUser(profileId);
  if (!profileStore.migratedLegacyProgress) {
    const hasLegacyData = hasLegacyLocalProgress();
    const migrated = migrateLegacyProgressToProfile(profileStore, profileId);
    profileStore.migratedLegacyProgress = !hasLegacyData || migrated;
  }
  profileStore.currentProfile = profileId;
  saveProfileStore();
  return profileId;
}

function getIdentityDisplayName() {
  if (firebaseAuthUser?.displayName) return firebaseAuthUser.displayName;
  if (firebaseAuthUser?.email) return firebaseAuthUser.email.split("@")[0] || "Learner";
  return "Learner";
}

function hasVillageDisplayName(profile) {
  const displayName = String(profile?.villageDisplayName || profile?.displayName || "").trim();
  return Boolean(displayName && profile?.displayNameConfirmed !== false);
}

function getVillageDisplayName(profile) {
  return String(profile?.villageDisplayName || profile?.displayName || profile?.name || "Learner").trim() || "Learner";
}

function showDisplayNameSetup(profileId = currentProfileId || profileStore?.currentProfile) {
  const profile = profileStore?.profiles?.[profileId] || null;
  currentView = "display-name";
  currentProfileId = profileId || "";
  els.appShell.classList.add("locked");
  els.landingScreen?.classList.add("hidden");
  els.demoScreen?.classList.add("hidden");
  els.profileScreen?.classList.remove("hidden");
  els.profileScreen?.classList.remove("village-landing-mode", "first-use");
  hideProfileOnboardingPanels();
  if (els.displayNameInput) {
    els.displayNameInput.value = hasVillageDisplayName(profile) ? getVillageDisplayName(profile) : "";
  }
  els.displayNameError?.classList.add("hidden");
  els.displayNameForm?.classList.remove("hidden");
  scrollPageToTop(els.profileScreen);
  els.displayNameInput?.focus();
  syncBrowserHistory();
}

function handleDisplayNameSubmit(event) {
  event.preventDefault();
  const profileId = ensureIdentityProfile();
  const profile = profileStore?.profiles?.[profileId];
  const displayName = String(els.displayNameInput?.value || "").trim();
  if (!profile || !displayName) {
    els.displayNameError?.classList.remove("hidden");
    els.displayNameInput?.focus();
    return;
  }
  profile.displayName = displayName;
  profile.villageDisplayName = displayName;
  profile.displayNameConfirmed = true;
  profile.name = displayName;
  profile.ownerUid = profile.ownerUid || firebaseAuthUser?.uid || "";
  profile.ownerEmail = profile.ownerEmail || firebaseAuthUser?.email || "";
  profileStore.currentProfile = profileId;
  saveProfileStore();
  routeAfterIdentityReady();
}

function sanitizeIdentityId(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    || Date.now().toString(36);
}

function getVillageIdForProfile(profileId) {
  return getVillageIdsForProfile(profileId)[0] || "";
}

function getVillageIdsForProfile(profileId) {
  if (!profileId || !profileStore?.groups) return [];
  const currentGroup = profileStore.groups[profileStore.currentGroup || currentGroupId];
  const villageIds = Object.values(profileStore.groups)
    .filter((group) => group?.memberIds?.includes(profileId))
    .map((group) => group.id);
  if (currentGroup?.memberIds?.includes(profileId)) {
    return [currentGroup.id, ...villageIds.filter((groupId) => groupId !== currentGroup.id)];
  }
  return villageIds;
}

function assignProfileToFirebaseUser(profileId = currentProfileId || profileStore?.currentProfile) {
  if (!firebaseAuthUser || !profileId || !profileStore?.profiles?.[profileId]) return;
  const profile = profileStore.profiles[profileId];
  profile.ownerUid = profile.ownerUid || firebaseAuthUser.uid;
  profile.ownerEmail = profile.ownerEmail || firebaseAuthUser.email || "";
}

async function waitForFirebaseAuthState() {
  if (!hasCloudSyncConfig()) return null;
  const firebase = await getFirebaseSyncApi();
  if (firebaseAuthReady) return firebaseAuthUser;
  return new Promise((resolve) => {
    firebaseAuthUnsubscribe?.();
    firebaseAuthUnsubscribe = firebase.authModule.onAuthStateChanged(firebase.auth, (user) => {
      firebaseAuthUser = user || null;
      firebaseAuthReady = true;
      updateFirebaseAuthStatus("");
      resolve(firebaseAuthUser);
    });
  });
}

function shouldShowFirebaseAuthScreen() {
  return hasCloudSyncConfig() && firebaseSyncAvailable && !firebaseAuthUser;
}

function hideProfileOnboardingPanels() {
  if (!els.villageSelection || !els.villageSelection.classList.contains("hidden")) {
    els.profileScreen?.classList.remove("first-use");
  }
  els.firebaseAuthCard?.classList.add("hidden");
  els.resetPasswordCard?.classList.add("hidden");
  els.displayNameForm?.classList.add("hidden");
  els.villageSelection?.classList.add("hidden");
  els.familyWealthCard?.classList.add("hidden");
  els.villageNameForm?.classList.add("hidden");
  els.villagePasswordForm?.classList.add("hidden");
}

function showFirebaseAuthScreen(mode = "signup", message = "") {
  currentView = "auth";
  firebaseAuthMode = mode === "signin" ? "signin" : "signup";
  if (!developerPreviewMode) {
    currentProfileId = "";
    pendingProfileId = "";
    progress = {};
    vocabularyProgress = {};
    articleProgress = {};
    nounVerbProgress = {};
    meaningMatchProgress = {};
    prepositionProgress = {};
    recentMeaningMatchItems = [];
  }
  els.appShell.classList.add("locked");
  els.landingScreen?.classList.add("hidden");
  els.demoScreen?.classList.add("hidden");
  els.profileScreen.classList.remove("hidden");
  els.profileScreen.classList.remove("village-landing-mode", "first-use");
  hideProfileOnboardingPanels();
  els.firebaseAuthCard?.classList.remove("hidden");
  renderFirebaseAuthScreen();
  preloadFirebaseAuthForSignIn();
  updateFirebaseAuthStatus(message);
  scrollPageToTop(els.profileScreen);
  els.firebaseAuthEmail?.focus();
  syncBrowserHistory();
}

function preloadFirebaseAuthForSignIn() {
  if (!hasCloudSyncConfig()) return;
  getFirebaseSyncApi()
    .then(() => {
      firebaseSyncAvailable = true;
    })
    .catch((error) => {
      firebaseSyncAvailable = false;
      console.warn("Firebase authentication unavailable.", error);
    });
}

function renderFirebaseAuthScreen() {
  const isSignIn = firebaseAuthMode === "signin";
  if (els.firebaseAuthTitle) {
    els.firebaseAuthTitle.textContent = isSignIn ? "Sign in" : "Create your account";
  }
  els.firebaseAuthCard?.classList.toggle("is-sign-in", isSignIn);
  if (els.firebaseAuthIntro) {
    els.firebaseAuthIntro.textContent = isSignIn
      ? "Sign in to your account."
      : "Save your progress and learn from any device.";
  }
  if (els.firebaseEmailSignIn) {
    els.firebaseEmailSignIn.textContent = "Sign In";
    els.firebaseEmailSignIn.classList.toggle("hidden", !isSignIn);
  }
  if (els.firebaseEmailRegister) {
    els.firebaseEmailRegister.textContent = "Create Account";
    els.firebaseEmailRegister.classList.toggle("hidden", isSignIn);
  }
  if (els.firebaseAuthPassword) {
    els.firebaseAuthPassword.autocomplete = isSignIn ? "current-password" : "new-password";
  }
  els.forgotPasswordLink?.classList.toggle("hidden", !isSignIn);
  if (els.firebaseAuthToggle) {
    els.firebaseAuthToggle.classList.add("hidden");
  }
  if (els.firebaseAuthTryDemo) {
    els.firebaseAuthTryDemo.classList.add("hidden");
  }
  if (els.firebaseAuthHome) {
    els.firebaseAuthHome.textContent = "← Back";
    els.firebaseAuthHome.classList.remove("hidden");
  }
  syncRememberedEmailField();
}

function getRememberedEmail() {
  return localStorage.getItem(REMEMBERED_EMAIL_STORAGE_KEY) || "";
}

function syncRememberedEmailField() {
  const rememberedEmail = getRememberedEmail();
  if (els.rememberEmailCheckbox) {
    els.rememberEmailCheckbox.checked = Boolean(rememberedEmail);
  }
  if (rememberedEmail && els.firebaseAuthEmail && !els.firebaseAuthEmail.value.trim()) {
    els.firebaseAuthEmail.value = rememberedEmail;
  }
}

function updateRememberedEmailPreference() {
  const email = els.firebaseAuthEmail?.value.trim() || "";
  if (els.rememberEmailCheckbox?.checked && email) {
    localStorage.setItem(REMEMBERED_EMAIL_STORAGE_KEY, email);
    return;
  }
  localStorage.removeItem(REMEMBERED_EMAIL_STORAGE_KEY);
}

function toggleFirebaseAuthMode() {
  showFirebaseAuthScreen(firebaseAuthMode === "signin" ? "signup" : "signin");
}

function returnAuthToDemo() {
  showDemoScreen();
}

function returnAuthToHome() {
  showLandingScreen();
}

function showResetPasswordScreen() {
  currentView = "reset-password";
  els.appShell.classList.add("locked");
  els.landingScreen?.classList.add("hidden");
  els.demoScreen?.classList.add("hidden");
  els.profileScreen.classList.remove("hidden");
  els.profileScreen.classList.remove("village-landing-mode", "first-use");
  hideProfileOnboardingPanels();
  els.resetPasswordCard?.classList.remove("hidden");
  els.resetPasswordForm?.classList.remove("hidden");
  els.resetPasswordFormContent?.classList.remove("hidden");
  els.resetPasswordEmail?.closest("label")?.classList.remove("hidden");
  els.sendResetEmailButton?.classList.remove("hidden");
  els.resetPasswordBack?.classList.remove("hidden");
  els.resetPasswordSuccess?.classList.add("hidden");
  updateResetPasswordStatus("");
  const currentEmail = els.firebaseAuthEmail?.value.trim() || firebaseAuthUser?.email || getRememberedEmail();
  if (els.resetPasswordEmail) {
    els.resetPasswordEmail.value = currentEmail;
  }
  scrollPageToTop(els.profileScreen);
  els.resetPasswordEmail?.focus();
  syncBrowserHistory();
}

function showResetPasswordSuccess() {
  els.resetPasswordForm?.classList.add("hidden");
  els.resetPasswordSuccess?.classList.remove("hidden");
  updateResetPasswordStatus("");
  scrollPageToTop(els.profileScreen);
}

function returnToSignInFromResetPassword() {
  showFirebaseAuthScreen("signin");
}

function updateResetPasswordStatus(message = "", isError = false) {
  if (!els.resetPasswordStatus) return;
  els.resetPasswordStatus.textContent = message;
  els.resetPasswordStatus.classList.toggle("hidden", !message);
  els.resetPasswordStatus.classList.toggle("firebase-auth-status-ok", Boolean(message && !isError));
}

async function handlePasswordResetSubmit() {
  const email = els.resetPasswordEmail?.value.trim() || "";
  if (!email) {
    updateResetPasswordStatus("Enter your email address.", true);
    els.resetPasswordEmail?.focus();
    return;
  }
  updateResetPasswordStatus("Sending reset email...");
  try {
    const firebase = await getFirebaseSyncApi();
    console.info("[Unser Dorf auth recovery] Sending password reset email.", {
      email,
      projectId: getFirebaseSyncConfig().firebaseConfig.projectId || "unknown"
    });
    await firebase.authModule.sendPasswordResetEmail(firebase.auth, email);
    console.info("[Unser Dorf auth recovery] Firebase accepted password reset request. If no email arrives, check whether the Auth user exists and whether Firebase email templates/sending are enabled.", {
      email
    });
    showResetPasswordSuccess();
  } catch (error) {
    console.error("Password reset email failed.", error);
    updateResetPasswordStatus(getFriendlyPasswordResetError(error), true);
  }
}

function updateFirebaseAuthStatus(message = "", isError = false) {
  if (!els.firebaseAuthStatus) return;
  els.firebaseAuthStatus.textContent = message;
  els.firebaseAuthStatus.classList.toggle("hidden", !message);
  els.firebaseAuthStatus.classList.toggle("firebase-auth-status-ok", Boolean(message && !isError));
}

async function handleFirebaseEmailAuth(mode) {
  if (developerPreviewMode) {
    updateFirebaseAuthStatus("Preview mode is UI-only. No Firebase account will be created or changed.", true);
    return;
  }
  const email = els.firebaseAuthEmail?.value.trim();
  const password = els.firebaseAuthPassword?.value || "";
  updateRememberedEmailPreference();
  if (mode === "register" && firebaseAuthUser) {
    updateFirebaseAuthStatus("You are already signed in. Loading your profile...");
    await handleFirebaseSignedIn(firebaseAuthUser);
    return;
  }
  if (!email || !password) {
    updateFirebaseAuthStatus("Enter an email and password.", true);
    return;
  }
  updateFirebaseAuthStatus(mode === "register" ? "Creating account..." : "Signing in...");
  try {
    const firebase = await getFirebaseSyncApi();
    const credential = mode === "register"
      ? await firebase.authModule.createUserWithEmailAndPassword(firebase.auth, email, password)
      : await firebase.authModule.signInWithEmailAndPassword(firebase.auth, email, password);
    await handleFirebaseSignedIn(credential.user);
  } catch (error) {
    if (mode === "register" && String(error?.code || "").includes("auth/email-already-in-use")) {
      showFirebaseAuthScreen("signin", "An account with this email already exists. Please sign in instead.");
      return;
    }
    console.error("Firebase email authentication failed.", error);
    updateFirebaseAuthStatus(getFriendlyFirebaseAuthError(error), true);
  }
}

async function handleFirebaseSignedIn(user) {
  firebaseAuthUser = user || null;
  firebaseAuthReady = true;
  syncEnabled = false;
  userProgressHydratedFromServer = false;
  userProgressHydrationInProgress = Boolean(firebaseAuthUser);
  updateCloudSyncDebug({ userDocLoaded: false }, "Firebase signed in");
  updateFirebaseAuthStatus("Signed in. Loading your progress...");
  await initializeFamilySync();
  logAuthDebugBlock("AUTH DEBUG", profileStore);
  routeAfterIdentityReady();
}

async function signOutOfFirebase() {
  clearDeveloperPreviewState();
  if (!firebaseAuthUser) {
    lockSharedPasswordScreen();
    return;
  }
  try {
    window.clearTimeout(cloudSaveTimer);
    const firebase = await getFirebaseSyncApi();
    await firebase.authModule.signOut(firebase.auth);
  } catch (error) {
    console.warn("Could not sign out of Firebase.", error);
  }
  firebaseAuthUser = null;
  syncEnabled = false;
  userProgressHydratedFromServer = false;
  userProgressHydrationInProgress = false;
  saveCurrentPosition();
  closeSettingsMenu();
  showLandingScreen();
}

function getFriendlyFirebaseAuthError(error) {
  const code = String(error?.code || "");
  if (code.includes("auth/invalid-credential") || code.includes("auth/wrong-password")) return "That email or password did not work.";
  if (code.includes("auth/user-not-found")) return "No account was found for that email.";
  if (code.includes("auth/email-already-in-use")) return "An account with this email already exists. Please sign in instead.";
  if (code.includes("auth/weak-password")) return "Please use a longer password.";
  return "Sign-in did not finish. Please try again.";
}

function getFriendlyPasswordResetError(error) {
  const code = String(error?.code || "");
  if (code.includes("auth/invalid-email")) return "Enter a valid email address.";
  if (code.includes("auth/user-not-found")) return "No account was found for that email.";
  if (code.includes("auth/network-request-failed")) return "We could not connect. Check your internet connection and try again.";
  if (code.includes("auth/too-many-requests")) return "Too many attempts. Please wait a moment and try again.";
  return "We could not send the reset email. Please try again.";
}

function getFriendlyDeleteAccountError(error) {
  const code = String(error?.code || "");
  if (code.includes("auth/requires-recent-login")) {
    return "For your security, please sign in again before deleting your account.";
  }
  if (code.includes("auth/network-request-failed") || code.includes("unavailable")) {
    return "We could not connect. Check your internet connection and try again.";
  }
  if (code.includes("permission-denied")) {
    return "We could not delete your saved data because the account does not have permission. Please sign in again and try once more.";
  }
  return "We could not delete the account. Please try again.";
}

function openDeleteAccountConfirmation() {
  closeSettingsMenu();
  if (isProtectedDeveloperAccount()) {
    console.warn("Protected developer account deletion was blocked in-app.", {
      uid: firebaseAuthUser?.uid || "",
      email: firebaseAuthUser?.email || ""
    });
    window.alert("Developer accounts cannot be deleted inside the app. Use the Firebase Console or a recovery/admin procedure so Mineko's access and Firestore data are not accidentally removed.");
    return;
  }
  if (els.deleteAccountConfirmInput) els.deleteAccountConfirmInput.value = "";
  updateDeleteAccountStatus("");
  updateDeleteAccountButtonState();
  els.deleteAccountModal?.classList.remove("hidden");
  els.deleteAccountConfirmInput?.focus();
}

function closeDeleteAccountConfirmation() {
  els.deleteAccountModal?.classList.add("hidden");
  updateDeleteAccountStatus("");
  if (els.deleteAccountConfirmInput) els.deleteAccountConfirmInput.value = "";
  updateDeleteAccountButtonState();
}

function updateDeleteAccountButtonState() {
  if (!els.confirmDeleteAccount) return;
  els.confirmDeleteAccount.disabled = els.deleteAccountConfirmInput?.value !== "DELETE";
}

function updateDeleteAccountStatus(message = "", isError = false) {
  if (!els.deleteAccountStatus) return;
  els.deleteAccountStatus.textContent = message;
  els.deleteAccountStatus.classList.toggle("hidden", !message);
  els.deleteAccountStatus.classList.toggle("firebase-auth-status-ok", Boolean(message && !isError));
}

function getFirebaseAuthAgeMs(user = firebaseAuthUser) {
  const lastSignInTime = Date.parse(user?.metadata?.lastSignInTime || "");
  if (!lastSignInTime) return Number.POSITIVE_INFINITY;
  return Date.now() - lastSignInTime;
}

function isFirebaseAuthRecent(user = firebaseAuthUser) {
  return getFirebaseAuthAgeMs(user) <= DELETE_ACCOUNT_RECENT_AUTH_MAX_AGE_MS;
}

async function handleDeleteAccountSubmit(event) {
  event.preventDefault();
  if (els.deleteAccountConfirmInput?.value !== "DELETE") {
    updateDeleteAccountStatus("Type DELETE to confirm.", true);
    return;
  }
  if (isProtectedDeveloperAccount()) {
    updateDeleteAccountStatus("Developer accounts cannot be deleted inside the app. Use Firebase Console/admin recovery so Mineko's access is protected.", true);
    console.warn("Protected developer account deletion submit was blocked.", {
      uid: firebaseAuthUser?.uid || "",
      email: firebaseAuthUser?.email || ""
    });
    return;
  }
  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    const message = "We could not connect. Check your internet connection and try again.";
    console.warn("Account deletion blocked because the browser is offline.");
    updateDeleteAccountStatus(message, true);
    return;
  }
  if (firebaseAuthUser && !isFirebaseAuthRecent(firebaseAuthUser)) {
    console.warn("Account deletion blocked because Firebase requires a recent sign-in.", {
      uid: firebaseAuthUser.uid,
      email: firebaseAuthUser.email,
      authAgeMs: getFirebaseAuthAgeMs(firebaseAuthUser)
    });
    updateDeleteAccountStatus("For your security, please sign in again before deleting your account.", true);
    return;
  }
  if (els.confirmDeleteAccount) els.confirmDeleteAccount.disabled = true;
  updateDeleteAccountStatus("Deleting account...");
  try {
    const user = firebaseAuthUser;
    if (user) {
      const firebase = await getFirebaseSyncApi();
      console.info("Deleting Unser Dorf Firebase Auth account before Firestore cleanup.", {
        uid: user.uid,
        email: user.email,
        userDocPath: [...firebase.rootPathParts, "users", user.uid].join("/")
      });
      await firebase.authModule.deleteUser(user);
      try {
        await deleteFirebaseUserData(firebase, user);
      } catch (cleanupError) {
        console.error("Firebase Auth account was deleted, but Firestore cleanup did not finish. Use Developer Tools or a Cloud Function to remove remaining Firestore data.", cleanupError);
      }
    }
    clearLocalAccountState();
    closeDeleteAccountConfirmation();
    showLandingScreen();
  } catch (error) {
    console.error("Account deletion failed.", error);
    updateDeleteAccountStatus(getFriendlyDeleteAccountError(error), true);
    updateDeleteAccountButtonState();
  }
}

async function deleteFirebaseUserData(firebase, user) {
  const ownedProfileIds = await getFirebaseOwnedProfileIdsForDeletion(firebase, user);
  const savedAt = new Date().toISOString();
  console.info("Cleaning Firestore account data before Auth deletion.", {
    uid: user.uid,
    ownedProfileIds
  });
  await Promise.all(DEFAULT_GROUPS.map(async (groupInfo) => {
    const villageRef = getFirebaseVillageDocRef(firebase, groupInfo.id);
    const snapshot = await firebase.getDoc(villageRef);
    const data = snapshot.exists() ? snapshot.data() : {};
    const group = sanitizeGroupForSync(data.group || profileStore?.groups?.[groupInfo.id] || createGroupData(groupInfo));
    group.memberIds = normalizeGroupMemberIds((group.memberIds || []).filter((profileId) => !ownedProfileIds.includes(profileId)));
    const profiles = { ...(data.profiles || {}) };
    ownedProfileIds.forEach((profileId) => {
      delete profiles[profileId];
    });
    group.memberIds = normalizeGroupMemberIds([
      ...group.memberIds.filter((profileId) => profiles[profileId]),
      ...Object.keys(profiles)
    ]);
	    const villagePayload = {
	      group,
	      profiles,
	      rosterVersion: getNextVillageRosterVersion(data),
	      rosterUpdatedAt: firebase.serverTimestamp(),
	      rosterUpdatedAtIso: savedAt,
	      updatedAt: firebase.serverTimestamp(),
	      updatedAtIso: savedAt
	    };
    traceVillageWrite("deleteFirebaseUserData", "account deletion cleanup", groupInfo.id, villagePayload, {
      currentFirestoreVillageDocument: true,
      currentUserDocument: true,
      profileStores: false,
      localStorage: false,
      legacyMigration: false,
      explicitVillageJoin: false,
      adminCleanup: true
    });
    await firebase.setDoc(villageRef, villagePayload);
  }));
  await deleteLegacySharedProfileStoreReferences(firebase, ownedProfileIds, savedAt);
  await firebase.deleteDoc(getFirebaseUserDocRef(firebase, user.uid));
}

async function getFirebaseOwnedProfileIdsForDeletion(firebase, user) {
  const ownedProfileIds = new Set(getFirebaseOwnedProfileIdsForUser(user));
  const userSnapshot = await firebase.getDoc(getFirebaseUserDocRef(firebase, user.uid));
  if (userSnapshot.exists()) {
    const userData = userSnapshot.data() || {};
    Object.keys(userData.profiles || {}).forEach((profileId) => ownedProfileIds.add(profileId));
    if (userData.currentProfile) ownedProfileIds.add(String(userData.currentProfile));
  }
  return [...ownedProfileIds].filter(Boolean);
}

async function deleteLegacySharedProfileStoreReferences(firebase, ownedProfileIds, savedAt) {
  const profileIds = normalizeProfileIdList(ownedProfileIds);
  if (!profileIds.length) return;
  const collectionSnapshot = await readFirestoreWithDebug(
    () => firebase.getDocsFromServer(getFirebaseProfileStoresCollectionRef(firebase)),
    {
      operation: "list legacy profileStores before removing profile references",
      path: getFirebaseProfileStoresCollectionPath(firebase),
      removedProfileIds: profileIds
    }
  );
  await Promise.all(collectionSnapshot.docs.map(async (docSnapshot) => {
    const data = docSnapshot.data() || {};
    const legacyStore = data.profileStore || data.profile_store;
    if (!legacyStore?.profiles) return;
    const { cleanedStore, changed } = removeProfileIdsFromLegacyStore(legacyStore, profileIds);
    if (!changed) return;
    const docPath = getFirebaseProfileStoreDocPath(firebase, docSnapshot.id);
    await writeFirestoreWithDebug(
      () => firebase.setDoc(firebase.doc(firebase.db, ...firebase.rootPathParts, "profileStores", docSnapshot.id), {
        profileStore: cleanedStore,
        updatedAt: firebase.serverTimestamp(),
        updatedAtIso: savedAt
      }, { merge: true }),
      {
        operation: "remove profile references from legacy profileStore document",
        path: docPath,
        removedProfileIds: profileIds
      }
    );
  }));
}

function removeProfileIdsFromLegacyStore(legacyStore, profileIds) {
  const removedProfileIds = new Set(normalizeProfileIdList(profileIds));
  const cleanedStore = sanitizeProfileStoreForSync(legacyStore);
  let changed = false;
  removedProfileIds.forEach((profileId) => {
    if (cleanedStore.profiles?.[profileId]) {
      delete cleanedStore.profiles[profileId];
      changed = true;
    }
    if (cleanedStore.memberProfiles?.[profileId]) {
      delete cleanedStore.memberProfiles[profileId];
      changed = true;
    }
  });
  if (Array.isArray(cleanedStore.memberIds)) {
    const nextMemberIds = normalizeGroupMemberIds(cleanedStore.memberIds.filter((profileId) => !removedProfileIds.has(profileId)));
    changed = changed || nextMemberIds.length !== cleanedStore.memberIds.length;
    cleanedStore.memberIds = nextMemberIds;
  }
  if (Array.isArray(cleanedStore.members)) {
    const nextMembers = cleanedStore.members.filter((member) => {
      const memberId = String(member?.profileId || member?.id || member || "");
      return !removedProfileIds.has(memberId);
    });
    changed = changed || nextMembers.length !== cleanedStore.members.length;
    cleanedStore.members = nextMembers;
  }
  Object.values(cleanedStore.groups || {}).forEach((group) => {
    const currentMemberIds = normalizeGroupMemberIds(group.memberIds || []);
    const nextMemberIds = currentMemberIds.filter((profileId) => !removedProfileIds.has(profileId));
    if (nextMemberIds.length !== currentMemberIds.length) changed = true;
    group.memberIds = normalizeGroupMemberIds(nextMemberIds);
    removedProfileIds.forEach((profileId) => {
      if (group.profiles?.[profileId]) {
        delete group.profiles[profileId];
        changed = true;
      }
      if (group.memberProfiles?.[profileId]) {
        delete group.memberProfiles[profileId];
        changed = true;
      }
    });
    if (Array.isArray(group.members)) {
      const nextMembers = group.members.filter((member) => {
        const memberId = String(member?.profileId || member?.id || member || "");
        return !removedProfileIds.has(memberId);
      });
      changed = changed || nextMembers.length !== group.members.length;
      group.members = nextMembers;
    }
  });
  if (removedProfileIds.has(cleanedStore.currentProfile)) {
    cleanedStore.currentProfile = "";
    changed = true;
  }
  if (!cleanedStore.groups?.[cleanedStore.currentGroup]) cleanedStore.currentGroup = DEFAULT_GROUP_ID;
  return { cleanedStore, changed };
}

function getFirebaseOwnedProfileIdsForUser(user = firebaseAuthUser) {
  const canonicalId = getFirebaseProfileId(user);
  const email = String(user?.email || "").toLowerCase();
  return [...new Set([
    canonicalId,
    ...Object.entries(profileStore?.profiles || {})
    .filter(([profileId, profile]) => {
      const ownerEmail = String(profile?.ownerEmail || "").toLowerCase();
      return profileId === canonicalId
        || profile?.ownerUid === user?.uid
        || Boolean(email && ownerEmail && ownerEmail === email);
    })
    .map(([profileId]) => profileId)
  ].filter(Boolean))];
}

function clearLocalAccountState() {
  window.clearTimeout(cloudSaveTimer);
  window.clearInterval(cloudPullTimer);
  localStorage.clear();
  firebaseAuthUser = null;
  firebaseAuthReady = true;
  syncEnabled = false;
  currentProfileId = "";
  pendingProfileId = "";
  currentGroupId = DEFAULT_GROUP_ID;
  profileStore = createProfileStore();
  progress = {};
  vocabularyProgress = {};
  articleProgress = {};
  nounVerbProgress = {};
  meaningMatchProgress = {};
  prepositionProgress = {};
  closeSettingsMenu();
}

function refreshVisibleProfileState() {
  if (!profileStore) return;
  if (!currentProfileId) {
    showLandingScreen();
    return;
  }
  const profile = getCurrentProfile();
  if (!profile) {
    showProfileScreen();
    return;
  }
  els.currentProfileLabel.textContent = getVillageDisplayName(profile);
  if (currentView === "dashboard") {
    renderDashboard();
  } else if (currentView === "learn-german") {
    renderLearnGermanPage();
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
  if (firebaseAuthUser) {
    routeAfterIdentityReady();
    return;
  }
  showLandingScreen();
}

function showVillageNameSetup() {
  els.familyWealthCard?.classList.add("hidden");
  els.villageNameForm.classList.remove("hidden");
  els.profileScreen.classList.add("first-use");
  els.villageNameInput.value = "";
  scrollPageToTop(els.profileScreen);
  els.villageNameInput.focus();
}

function handleVillageNameSubmit(event) {
  event.preventDefault();
  saveVillageName(els.villageNameInput.value);
  renderVillageName();
  routeAfterIdentityReady();
}

function completeProfileLogin(profileId, options = {}) {
  const profile = profileStore.profiles[profileId];
  if (!profile) return;
  const showHome = options.showDashboard !== false;
  currentProfileId = profileId;
  assignProfileToFirebaseUser(profileId);
  pendingProfileId = "";
  profileStore.currentProfile = profileId;
  const group = getCurrentGroup();
  if (group && !group.memberIds.includes(profileId) && group.memberIds.length < 6) group.memberIds.push(profileId);
  if (group) profile.villageId = group.id;
  progress = profile.progress;
  vocabularyProgress = profile.vocabularyProgress;
  articleProgress = profile.articleProgress;
  difficultWords = profile.difficultWords;
  nounVerbProgress = profile.nounVerbProgress;
  meaningMatchProgress = profile.meaningMatchProgress;
  prepositionProgress = profile.prepositionProgress;
  recentMeaningMatchItems = normalizeRecentItemList(profile.recentMeaningMatchItems, MEANING_MATCH_RECENT_BUFFER);
  applyProfileSettings(profile.settings);
  saveProfileStore();
  els.currentProfileLabel.textContent = getVillageDisplayName(profile);
  renderGroupSelectors();
  els.profileScreen.classList.add("hidden");
  els.appShell.classList.remove("locked");
  updateFilterOptions();
  currentIndex = 0;
  applyModeAndFilter();
  if (showHome) showDashboard();
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

function isLegacyStudyViewActive() {
  return ["study", "noun-verb", "meaning-match", "prepositions", "vocabulary-review"].includes(currentView);
}

function hideLegacyStudyUi() {
  els.controlPanel?.classList.add("hidden");
  els.searchPanel?.classList.add("hidden");
  els.statsGrid?.classList.add("hidden");
  els.studyStage?.classList.add("hidden");
  els.nounVerbStage?.classList.add("hidden");
  els.actionBar?.classList.add("hidden");
  els.answerPanel?.classList.add("hidden");
  els.ratingButtons?.classList.add("hidden");
  els.articleGuess?.classList.add("hidden");
  els.articleQuiz?.classList.add("hidden");
  els.articleQuizResult?.classList.add("hidden");
  els.articleQuizNext?.classList.add("hidden");
}

function showDashboard(options = {}) {
  discardIncompleteChallengeSession();
  if (!options.preservePreview && developerPreviewMode) {
    const baseline = developerPreviewBaseline;
    clearDeveloperPreviewState();
    verifyDeveloperPreviewSafetySnapshot(baseline);
  } else if (!options.preservePreview) {
    developerPreviewMode = "";
  }
  reviewReturnTarget = "";
  guidedLearningActive = false;
  learnGermanReturnActive = false;
  currentView = "dashboard";
  els.appShell.classList.remove("onboarding-mode");
  els.appShell.classList.remove("landing-mode");
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.appShell.classList.remove("vocabulary-review-mode");
  setChallengeBackButtons(false, false);
  renderDashboard();
  els.landingScreen?.classList.add("hidden");
  els.demoScreen?.classList.add("hidden");
  els.dashboardScreen.classList.remove("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.villageMembersScreen?.classList.add("hidden");
  els.developerToolsScreen?.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  hideLegacyStudyUi();
  scrollPageToTop(els.dashboardScreen);
  syncBrowserHistory({ replace: Boolean(options.replaceHistory) });
}

function showLearnGermanPage() {
  discardIncompleteChallengeSession();
  reviewReturnTarget = "";
  guidedLearningActive = false;
  learnGermanReturnActive = false;
  currentView = "learn-german";
  els.appShell.classList.remove("onboarding-mode");
  els.appShell.classList.remove("landing-mode");
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.appShell.classList.remove("vocabulary-review-mode");
  setChallengeBackButtons(false, false);
  renderLearnGermanPage();
  els.landingScreen?.classList.add("hidden");
  els.demoScreen?.classList.add("hidden");
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.remove("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.villageMembersScreen?.classList.add("hidden");
  els.developerToolsScreen?.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  hideLearnIntroPanel();
  hideLegacyStudyUi();
  scrollPageToTop(els.learnGermanScreen);
  syncBrowserHistory();
}

function showLandingScreen(options = {}) {
  discardIncompleteChallengeSession();
  currentView = "landing";
  if (!options.preview && !developerPreviewMode) {
    currentProfileId = "";
    pendingProfileId = "";
  }
  hideAuthenticatedAppViews();
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
  closeSettingsMenu();
  hideRewardDetail();
  hideRewardDebugPage();
  if (!options.preview && !developerPreviewMode) resetLoggedOutTransientUi();
  scrollPageToTop(els.landingScreen);
  syncBrowserHistory({ replace: true });
}

function hideAuthenticatedAppViews() {
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.villageMembersScreen?.classList.add("hidden");
  els.developerToolsScreen?.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  hideLegacyStudyUi();
}

function resetLoggedOutTransientUi() {
  window.clearTimeout(achievementNotificationTimer);
  achievementNotificationTimer = 0;
  achievementNotificationShowing = false;
  achievementNotificationQueue = [];
  pendingCelebrations = [];
  els.levelCelebration?.classList.add("hidden");
}

function showDemoScreen(options = {}) {
  discardIncompleteChallengeSession();
  registeredDemoActive = Boolean(options.registered);
  if (options.preview && !developerPreviewMode) developerPreviewMode = registeredDemoActive ? "new-user" : "first-visit";
  currentView = "demo";
  demoPageIndex = 0;
  demoFinalScreenActive = false;
  if (!registeredDemoActive && !developerPreviewMode) {
    currentProfileId = "";
    pendingProfileId = "";
  }
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
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  renderOnboardingPage();
  scrollPageToTop(els.demoScreen);
  syncBrowserHistory();
}

function renderOnboardingPage() {
  demoFinalScreenActive = false;
  const page = ONBOARDING_PAGES[demoPageIndex] || ONBOARDING_PAGES[0];
  if (els.demoIllustration) {
    const image = document.createElement("img");
    image.src = page.illustration;
    image.alt = page.illustrationAlt || "";
    image.loading = "eager";
    image.onerror = () => {
      console.warn("Demo image failed to load.", {
        requestedPath: page.illustration,
        fallbackPath: "assets/learn-hero.png"
      });
      image.onerror = null;
      image.src = "assets/learn-hero.png";
    };
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
  if (els.demoBack) els.demoBack.textContent = registeredDemoActive ? "Skip" : page.backLabel;
  els.demoBack?.classList.remove("hidden");
  els.demoSignIn?.classList.add("hidden");
  if (els.demoNext) els.demoNext.textContent = page.nextLabel;
}

function renderDemoFinalScreen() {
  demoFinalScreenActive = true;
  if (els.demoIllustration) {
    const image = document.createElement("img");
    image.src = "assets/grow-hero.png";
    image.alt = "A growing Unser Dorf village";
    image.loading = "eager";
    els.demoIllustration.replaceChildren(image);
  }
  if (els.demoTitle) els.demoTitle.textContent = "Your village grew!";
  if (els.demoBody) {
    els.demoBody.replaceChildren(
      createTextElement("p", "", "Every learning session helps your village grow.")
    );
  }
  if (els.demoProgress) els.demoProgress.textContent = "● ● ● ● ●";
  if (els.demoBack) {
    els.demoBack.textContent = "Back to Home";
    els.demoBack.classList.toggle("hidden", registeredDemoActive);
  }
  els.demoSignIn?.classList.toggle("hidden", registeredDemoActive);
  if (els.demoNext) els.demoNext.textContent = registeredDemoActive ? "Go to Dashboard" : "Create your account";
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
  if (developerPreviewMode && !registeredDemoActive) {
    endDeveloperPreviewMode();
    return;
  }
  if (registeredDemoActive) {
    completeRegisteredDemo();
    return;
  }
  showLandingScreen();
}

function completeRegisteredDemo() {
  if (developerPreviewMode) {
    registeredDemoActive = false;
    showDashboard({ preservePreview: true });
    updateDeveloperPreviewControls();
    return;
  }
  const profile = getCurrentProfile();
  if (profile) {
    profile.registeredIntroCompleted = true;
    saveProfileStore({ immediate: true });
  }
  registeredDemoActive = false;
  showDashboard();
}

function skipLandingToVillageSelection() {
  showFirebaseAuthScreen("signin");
}

function startGetStartedFlow() {
  showFirebaseAuthScreen("signup");
}

function handleDemoNext() {
  if (demoFinalScreenActive) {
    if (registeredDemoActive) {
      completeRegisteredDemo();
      return;
    }
    startGetStartedFlow();
    return;
  }
  if (demoPageIndex >= ONBOARDING_PAGES.length - 1) {
    renderDemoFinalScreen();
    return;
  }
  moveDemoPage(1);
}

function handleDemoBack() {
  if (demoFinalScreenActive) {
    completeDemoScreen();
    return;
  }
  if (demoPageIndex === 0) {
    completeDemoScreen();
    return;
  }
  moveDemoPage(-1);
}

function handleDemoSignIn() {
  showFirebaseAuthScreen("signin");
}

function showCoinChallenges() {
  discardIncompleteChallengeSession();
  reviewReturnTarget = "";
  currentView = "coin-challenges";
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.appShell.classList.remove("vocabulary-review-mode");
  setChallengeBackButtons(false, false);
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.villageMembersScreen?.classList.add("hidden");
  els.developerToolsScreen?.classList.add("hidden");
  els.coinChallengesScreen.classList.remove("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
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
  scrollPageToTop(els.coinChallengesScreen);
  syncBrowserHistory();
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
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.remove("hidden");
  els.villageMembersScreen?.classList.add("hidden");
  els.developerToolsScreen?.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  scrollPageToTop(els.achievementCollectionScreen);
  syncBrowserHistory();
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
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
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
  scrollPageToTop(els.studyStage);
}

function showNounVerbQuiz() {
  currentView = "noun-verb";
  setChallengeBackButtons(false, true);
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.add("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.appShell.classList.remove("vocabulary-review-mode");
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
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
  syncBrowserHistory();
}

function showVocabularyReviewQuiz() {
  currentView = "vocabulary-review";
  setChallengeBackButtons(false, true);
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.add("clean-quiz-mode");
  els.appShell.classList.add("vocabulary-review-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
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
  scrollPageToTop(els.nounVerbStage);
  syncBrowserHistory();
}

function showMeaningMatchQuiz() {
  currentView = "meaning-match";
  setChallengeBackButtons(false, true);
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.add("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("vocabulary-review-mode");
  els.appShell.classList.add("meaning-match-mode");
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
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
  syncBrowserHistory();
}

function showPrepositionQuiz() {
  currentView = "prepositions";
  setChallengeBackButtons(false, true);
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.add("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  els.appShell.classList.remove("vocabulary-review-mode");
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
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
  syncBrowserHistory();
}

function setChallengeBackButtons(showStudyButton, showNounVerbButton) {
  els.studyChallengeBack.classList.toggle("hidden", !showStudyButton);
  els.nounVerbChallengeBack.classList.toggle("hidden", !showNounVerbButton);
}

function returnToCoinChallenges(event) {
  event?.preventDefault();
  saveCurrentPosition();
  closeSettingsMenu();
  if (isManualReviewPath()) {
    discardIncompleteChallengeSession();
    showLevelSelection(selectedLearningPath);
    return;
  }
  showCoinChallenges();
}

function renderDashboard() {
  if (!currentProfileId) return;
  const profile = getCurrentProfile();
  logDashboardDataDebug(profile);
  prepareProfileDailyState(profile);
  const familySummary = getFamilyWealthSummary();
  profile.positions = normalizePositions(profile.positions);
  els.dashboardWelcome.textContent = `Welcome back, ${getVillageDisplayName(profile)}`;
  renderVillageName();
  els.levelCoins.textContent = normalizeCoinCount(profile.coins);
  els.dashboardFamilyCoins.textContent = familySummary.totalCoins;
  renderDashboardLearningAction(profile);
  renderProgressCards(profile);
  renderAchievementPreview(getAchievementStates());
  renderRewardPreviews(profile, familySummary.totalCoins);
  renderVillageMembersPreview();
  renderHouseholdMembers();
  saveProfileStore();
  showNextPendingCelebration();
}

function renderDashboardLearningAction(profile) {
  if (!els.dashboardContinueButton) return;
  if (developerPreviewMode === "new-user") {
    els.dashboardContinueButton.textContent = "▶ Start Learning";
    return;
  }
  const hasStartedLearning = Boolean(
    profile?.learningIntroSeen
    || hasCompletedLearningActivity(profile)
    || normalizeActiveStudySet(profile?.activeStudySet).wordIds.length
  );
  els.dashboardContinueButton.textContent = hasStartedLearning ? "▶ Continue Learning" : "▶ Start Learning";
}

function renderProgressCards(profile) {
  if (els.dashboardStreak) {
    const streak = getDisplayStreak(profile).current;
    els.dashboardStreak.textContent = streak > 0 ? `${streak} ${streak === 1 ? "Day" : "Days"}` : "No streak yet";
  }
  if (els.dashboardChallengeStatus) {
    const completed = normalizeCounter(profile.challengeSessionsCompleted);
    els.dashboardChallengeStatus.textContent = completed > 0
      ? `${completed} completed`
      : "Ready to start";
  }
  if (els.dashboardChallengesCompleted) {
    els.dashboardChallengesCompleted.textContent = normalizeCounter(profile.challengeSessionsCompleted);
  }
}

function renderAchievementPreview(achievementStates = getAchievementStates()) {
  if (!els.achievementPreview) return;
  const earnedAchievements = achievementStates.filter(({ achievement, unlocked }) => unlocked && !achievement.testOnly);
  const latestAchievement = getRecentlyEarnedAchievements(achievementStates)[0]?.achievement || null;
  renderRewardPreviewText(
    els.achievementPreview,
    `${earnedAchievements.length} earned`,
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
    renderRewardPreviewText(
      els.austriaAlbumPreview,
      `${unlockedCurrentAustriaIds.length} / ${AUSTRIA_ALBUM_REWARDS.length} unlocked`,
      createRewardPreviewLatest(latestAustriaReward ? getRewardDisplayName(latestAustriaReward) : "None Yet")
    );
  }
  renderDashboardTownCenter(townCenter, sharedCoins);
  if (els.villageAlbumPreview) {
    const latestVillageReward = unlockedVillage[unlockedVillage.length - 1] || null;
    renderRewardPreviewText(
      els.villageAlbumPreview,
      `${unlockedVillage.length} / ${VILLAGE_ALBUM_REWARDS.length} unlocked`,
      createRewardPreviewLatest(latestVillageReward ? getRewardDisplayName(latestVillageReward) : "None Yet")
    );
  }
}

function renderRewardPreviewText(container, countText, latestElement) {
  const card = container.closest(".reward-preview-card");
  const title = card?.querySelector("h4");
  if (title) {
    let headingRow = card.querySelector(".reward-preview-heading-row");
    if (!headingRow) {
      headingRow = document.createElement("div");
      headingRow.className = "reward-preview-heading-row";
      title.replaceWith(headingRow);
      headingRow.append(title);
    }
    headingRow.querySelector(".reward-preview-count")?.remove();
    headingRow.append(createTextElement("span", "reward-preview-count", countText));
  }
  container.replaceChildren(latestElement);
}

function renderDashboardTownCenter(townCenter, sharedCoins) {
  if (!townCenter?.current) return;
  const villageMemberCount = getOrderedVillageMembers().length || 1;
  if (els.townCenterDashboardStage) {
    els.townCenterDashboardStage.textContent = `${villageMemberCount} Village ${villageMemberCount === 1 ? "Member" : "Members"}`;
  }
  if (els.townCenterDashboardStageCount) {
    els.townCenterDashboardStageCount.textContent = `Stage ${townCenter.current.stage}/${TOWN_CENTER_STAGES.length}`;
  }
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
  if (els.settingsVillageName) {
    els.settingsVillageName.textContent = getVillageName();
  }
  if (els.settingsProfileName) {
    els.settingsProfileName.textContent = profile ? getVillageDisplayName(profile) : "No profile";
  }
  if (els.accountDisplayNameInput) {
    els.accountDisplayNameInput.value = profile ? getVillageDisplayName(profile) : "";
  }
  els.accountDisplayNameFields?.classList.add("hidden");
  updateAccountDisplayNameStatus("");
  els.developerSettingsSection?.classList.toggle("hidden", !isCurrentUserDeveloper());
}

function showSettingsMenuView() {
  els.settingsMainMenu?.classList.remove("hidden");
  els.settingsDetail?.classList.add("hidden");
  scrollPageToTop(els.settingsPanel);
}

function showSettingsDetailView() {
  renderSettingsPanel();
  els.settingsMainMenu?.classList.add("hidden");
  els.settingsDetail?.classList.remove("hidden");
  scrollPageToTop(els.settingsPanel);
}

function openSettingsPanel() {
  if (!els.settingsPanel) {
    console.warn("Optional UI element #settingsPanel is missing. Settings cannot open.");
    return;
  }
  els.settingsPanel.classList.remove("hidden");
  els.settingsToggle?.setAttribute("aria-expanded", "true");
  syncBrowserHistory({ route: { key: HISTORY_STATE_KEY, view: "settings" } });
  if (window.matchMedia("(min-width: 1200px)").matches) {
    showSettingsDetailView();
    return;
  }
  renderSettingsPanel();
  showSettingsMenuView();
}

function showAccountDisplayNameEditor() {
  const profile = getCurrentProfile();
  if (els.accountDisplayNameInput) {
    els.accountDisplayNameInput.value = profile ? getVillageDisplayName(profile) : "";
  }
  updateAccountDisplayNameStatus("");
  els.accountDisplayNameFields?.classList.remove("hidden");
  els.accountDisplayNameInput?.focus();
}

function updateAccountDisplayNameStatus(message = "", isError = false) {
  if (!els.accountDisplayNameStatus) return;
  els.accountDisplayNameStatus.textContent = message;
  els.accountDisplayNameStatus.classList.toggle("hidden", !message);
  els.accountDisplayNameStatus.classList.toggle("is-error", Boolean(message && isError));
}

async function saveAccountDisplayName() {
  const profile = getCurrentProfile();
  const displayName = String(els.accountDisplayNameInput?.value || "").trim();
  if (!profile || !displayName) {
    updateAccountDisplayNameStatus("Enter a display name.", true);
    els.accountDisplayNameInput?.focus();
    return;
  }
  profile.displayName = displayName;
  profile.villageDisplayName = displayName;
  profile.displayNameConfirmed = true;
  profile.name = displayName;
  profile.ownerUid = profile.ownerUid || firebaseAuthUser?.uid || "";
  profile.ownerEmail = profile.ownerEmail || firebaseAuthUser?.email || "";
  saveProfileStore();
  await saveProfileStoreToCloudNow();
  if (els.currentProfileLabel) els.currentProfileLabel.textContent = getVillageDisplayName(profile);
  if (els.currentUserLabel) els.currentUserLabel.textContent = getVillageDisplayName(profile);
  if (currentView === "dashboard") renderDashboard();
  if (currentView === "village-members") renderVillageMembersPage();
  renderSettingsPanel();
  els.accountDisplayNameFields?.classList.remove("hidden");
  updateAccountDisplayNameStatus("Display name updated.");
}

function shouldOpenDeveloperToolsFromUrl() {
  const params = new URLSearchParams(window.location.search || "");
  return params.get("developerTools") === "1"
    || params.get("adminTools") === "1"
    || window.location.hash === "#developer-tools";
}

function setDeveloperToolsStatus(message = "", isError = false) {
  if (!els.developerToolsStatus) return;
  els.developerToolsStatus.textContent = message;
  els.developerToolsStatus.classList.toggle("is-error", Boolean(message && isError));
  els.developerToolsStatus.classList.toggle("hidden", !message);
}

function showDeveloperTools() {
  developerPreviewMode = "";
  currentView = "developer-tools";
  closeSettingsMenu();
  hideAuthenticatedAppViews();
  hideLegacyStudyUi();
  els.profileScreen?.classList.add("hidden");
  els.appShell?.classList.remove("locked", "landing-mode", "onboarding-mode", "clean-article-practice", "clean-quiz-mode", "article-quiz-mode", "meaning-match-mode", "vocabulary-review-mode");
  els.developerToolsScreen?.classList.remove("hidden");
  scrollPageToTop(els.developerToolsScreen);
  renderDeveloperToolsPage();
  syncBrowserHistory();
}

function returnToSettingsFromDeveloperTools() {
  showDashboard();
  openSettingsPanel();
}

async function readFirestoreWithDebug(readAction, details) {
  try {
    console.info("[Unser Dorf Firestore read]", {
      ...details,
      uid: firebaseAuthUser?.uid || "",
      email: firebaseAuthUser?.email || ""
    });
    return await readAction();
  } catch (error) {
    error.firestorePath = details?.path || "";
    error.firestoreOperation = details?.operation || "";
    developerToolsLastError = {
      type: "read",
      path: error.firestorePath,
      operation: error.firestoreOperation,
      code: error?.code || "",
      message: error?.message || String(error)
    };
    console.error("[Unser Dorf Firestore read failed]", {
      ...details,
      uid: firebaseAuthUser?.uid || "",
      email: firebaseAuthUser?.email || "",
      code: error?.code || "",
      message: error?.message || String(error),
      error
    });
    throw error;
  }
}

async function writeFirestoreWithDebug(writeAction, details) {
  try {
    console.info("[Unser Dorf Firestore write]", {
      ...details,
      uid: firebaseAuthUser?.uid || "",
      email: firebaseAuthUser?.email || ""
    });
    const result = await writeAction();
    console.info("[Unser Dorf Firestore write success]", details);
    return result;
  } catch (error) {
    error.firestorePath = details?.path || "";
    error.firestoreOperation = details?.operation || "";
    developerToolsLastError = {
      type: "write",
      path: error.firestorePath,
      operation: error.firestoreOperation,
      code: error?.code || "",
      message: error?.message || String(error)
    };
    console.error("[Unser Dorf Firestore write failed]", {
      ...details,
      uid: firebaseAuthUser?.uid || "",
      email: firebaseAuthUser?.email || "",
      code: error?.code || "",
      message: error?.message || String(error),
      error
    });
    throw error;
  }
}

async function renderDeveloperToolsPage() {
  if (!els.developerToolsContent) return;
  if (!(await isCurrentUserDeveloperFromFirestore())) {
    setDeveloperToolsStatus("Admin access only.", true);
    els.developerToolsContent.replaceChildren(
      createTextElement("p", "developer-tools-empty", "Admin access only.")
    );
    return;
  }

  setDeveloperToolsStatus("Loading developer data...");
  els.developerToolsContent.replaceChildren();
  try {
    const data = await loadDeveloperToolsData();
    developerToolsLastData = data;
    setDeveloperToolsStatus("Developer data loaded. Auth accounts must be deleted manually or via Cloud Function.");
    els.developerToolsContent.replaceChildren(createDeveloperToolsLayout(data));
  } catch (error) {
    console.error("Developer Tools failed to load.", error);
    const permissionHint = String(error?.code || "").includes("permission-denied")
      ? " Firestore rules are blocking one of the Developer Tools reads. Check the browser console for the exact path."
      : "";
    setDeveloperToolsStatus(`Could not load Developer Tools data: ${getErrorMessage(error)}.${permissionHint}`, true);
  }
}

function createDeveloperToolsLayout(data) {
  const wrapper = document.createElement("div");
  wrapper.className = "developer-tools-layout";
  const nav = document.createElement("nav");
  nav.className = "developer-tools-tabs";
  nav.setAttribute("aria-label", "Developer Tools sections");
  const sections = [
    ["overview", "Overview"],
    ["users", "Users"],
    ["villages", "Villages"],
    ["cleanup", "Cleanup"],
    ["testing", "Testing"],
    ["diagnostics", "Diagnostics"]
  ];
  nav.replaceChildren(...sections.map(([id, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.className = id === developerToolsActiveSection ? "is-active" : "";
    button.addEventListener("click", () => {
      developerToolsActiveSection = id;
      if (developerToolsLastData) els.developerToolsContent.replaceChildren(createDeveloperToolsLayout(developerToolsLastData));
      scrollPageToTop(els.developerToolsScreen);
    });
    return button;
  }));
  const content = document.createElement("div");
  content.className = "developer-tools-section-content";
  if (developerToolsActiveSection === "users") {
    content.append(createDeveloperUsersSection(data.users, data.villages));
  } else if (developerToolsActiveSection === "villages") {
    content.append(createDeveloperVillagesSection(data.villages));
  } else if (developerToolsActiveSection === "cleanup") {
    content.append(createDeveloperCleanupSection(data));
  } else if (developerToolsActiveSection === "testing") {
    content.append(createDeveloperTestingSection(data));
  } else if (developerToolsActiveSection === "diagnostics") {
    content.append(createDeveloperDiagnosticsSection(data));
  } else {
    content.append(createDeveloperOverviewSection(data));
  }
  wrapper.replaceChildren(nav, content);
  return wrapper;
}

async function isCurrentUserDeveloperFromFirestore() {
  if (!firebaseAuthUser || !hasCloudSyncConfig()) {
    console.warn("[Unser Dorf Developer Tools auth] Developer access check skipped.", {
      hasFirebaseUser: Boolean(firebaseAuthUser),
      hasCloudSyncConfig: hasCloudSyncConfig()
    });
    return false;
  }
  try {
    const firebase = await getFirebaseSyncApi();
    const userDocPath = getFirebaseUserDocPath(firebase, firebaseAuthUser.uid);
    console.info("[Unser Dorf Developer Tools auth] Checking current developer account.", {
      uid: firebaseAuthUser.uid,
      email: firebaseAuthUser.email || "",
      provider: firebaseAuthUser.providerData?.map((provider) => provider.providerId).join(", ") || "password",
      userDocPath
    });
    const snapshot = await readFirestoreWithDebug(
      () => firebase.getDoc(getFirebaseUserDocRef(firebase, firebaseAuthUser.uid)),
      {
        operation: "get current developer user document",
        path: userDocPath
      }
    );
    const data = snapshot.exists() ? snapshot.data() || {} : {};
    const role = sanitizeUserRole(data.role);
    const protectedAccount = Boolean(data.protectedAccount);
    const profile = getCurrentProfile() || profileStore?.profiles?.[getFirebaseProfileId(firebaseAuthUser)];
    if (profile && role !== profile.role) profile.role = role;
    if (profile && protectedAccount) profile.protectedAccount = true;
    console.info("[Unser Dorf Developer Tools auth] Current user profile check.", {
      uid: firebaseAuthUser.uid,
      email: firebaseAuthUser.email || "",
      userDocPath,
      documentExists: snapshot.exists(),
      role,
      protectedAccount,
      allowed: role === "developer"
    });
    return role === "developer";
  } catch (error) {
    console.error("[Unser Dorf Developer Tools auth] Could not verify developer role from Firestore.", {
      uid: firebaseAuthUser?.uid || "",
      email: firebaseAuthUser?.email || "",
      error
    });
    return false;
  }
}

async function loadDeveloperToolsData() {
  const firebase = await getFirebaseSyncApi();
  console.info("[Unser Dorf Developer Tools] Loading developer data.", {
    uid: firebaseAuthUser?.uid || "",
    email: firebaseAuthUser?.email || "",
    usersPath: getFirebaseUsersCollectionPath(firebase),
    villagePaths: DEFAULT_GROUPS.map((groupInfo) => getFirebaseVillageDocPath(firebase, groupInfo.id))
  });
  const userSnapshot = await readFirestoreWithDebug(
    () => firebase.getDocs(getFirebaseUsersCollectionRef(firebase)),
    {
      operation: "list developer users collection",
      path: getFirebaseUsersCollectionPath(firebase)
    }
  );
  const villageSnapshots = [];
  for (const groupInfo of DEFAULT_GROUPS) {
    const snapshot = await readFirestoreWithDebug(
      () => firebase.getDoc(getFirebaseVillageDocRef(firebase, groupInfo.id)),
      {
        operation: "get developer village document",
        path: getFirebaseVillageDocPath(firebase, groupInfo.id)
      }
    );
    villageSnapshots.push({ groupInfo, snapshot });
  }
  const userDocs = userSnapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    data: docSnapshot.data() || {}
  }));
  const validUserIndex = createValidUserIndex(userDocs);
  const villages = villageSnapshots.map(({ groupInfo, snapshot }) => {
    const data = snapshot.exists() ? snapshot.data() || {} : {};
    const group = createGroupData(groupInfo, data.group || {});
    const profiles = data.profiles || {};
    const rawMemberIds = normalizeProfileIdList([
      ...(group.memberIds || []),
      ...Object.keys(profiles)
    ]);
    const membershipIssues = getVillageMembershipIssues({
      id: groupInfo.id,
      memberIds: rawMemberIds,
      profiles
    }, validUserIndex);
    return {
      id: groupInfo.id,
      name: normalizeVillageName(group.villageName) || normalizeVillageName(group.name) || groupInfo.name,
      creator: data.creatorUid || data.adminUid || group.creatorUid || "Not set",
      memberIds: membershipIssues.validMemberIds,
      rawMemberIds,
      profiles,
      orphanedMembers: membershipIssues.orphanedMembers,
      duplicateMembers: membershipIssues.duplicateMembers,
      cleanupProfileIds: membershipIssues.cleanupProfileIds
    };
  });
  return {
    users: buildDeveloperUserRows(userDocs, villages),
    villages,
    validUserIndex
  };
}

function createValidUserIndex(userDocs) {
  const validUids = new Set();
  const validProfileIds = new Set();
  userDocs.forEach(({ id: uid, data }) => {
    if (!uid) return;
    validUids.add(uid);
    validProfileIds.add(getFirebaseProfileId({ uid }));
    Object.keys(data?.profiles || {}).forEach((profileId) => validProfileIds.add(profileId));
    if (data?.currentProfile) validProfileIds.add(String(data.currentProfile));
  });
  return { validUids, validProfileIds };
}

function getVillageMembershipIssues(village, validUserIndex) {
  const validUids = validUserIndex?.validUids || new Set();
  const validProfileIds = validUserIndex?.validProfileIds || new Set();
  const candidateProfileIds = normalizeProfileIdList([
    ...(village.memberIds || []),
    ...Object.keys(village.profiles || {})
  ]);
  const seenMemberKeys = new Set();
  const validMemberIds = [];
  const orphanedMembers = [];
  const duplicateMembers = [];
  const cleanupProfileIds = new Set();

  candidateProfileIds.forEach((profileId) => {
    const hasVillageProfile = Boolean(village.profiles?.[profileId]);
    const profile = village.profiles?.[profileId] || {};
    const ownerUid = String(profile.ownerUid || "").trim();
    const memberKey = ownerUid || profileId;
    const hasValidUserDoc = Boolean(
      validProfileIds.has(profileId)
        || (ownerUid && validUids.has(ownerUid))
        || (ownerUid && validProfileIds.has(getFirebaseProfileId({ uid: ownerUid })))
    );
    const summary = {
      villageId: village.id,
      profileId,
      uid: ownerUid,
      email: profile.ownerEmail || "",
      displayName: getVillageDisplayName(profile),
      reason: !hasVillageProfile
        ? "Member ID has no village profile record"
        : hasValidUserDoc
          ? "Duplicate UID/member reference"
          : "No matching Firestore user document"
    };

    if (!hasVillageProfile) {
      orphanedMembers.push(summary);
      cleanupProfileIds.add(profileId);
      return;
    }
    if (!hasValidUserDoc) {
      orphanedMembers.push(summary);
      cleanupProfileIds.add(profileId);
      return;
    }
    if (seenMemberKeys.has(memberKey)) {
      duplicateMembers.push(summary);
      cleanupProfileIds.add(profileId);
      return;
    }
    seenMemberKeys.add(memberKey);
    validMemberIds.push(profileId);
  });

  return {
    validMemberIds,
    orphanedMembers,
    duplicateMembers,
    cleanupProfileIds: Array.from(cleanupProfileIds)
  };
}

function buildDeveloperUserRows(userDocs, villages) {
  const rows = [];
  const seenProfileIds = new Set();
  userDocs.forEach(({ id: uid, data }) => {
    const profiles = data.profiles || {};
    const profileIds = Object.keys(profiles);
    profileIds.forEach((profileId) => seenProfileIds.add(profileId));
    const primaryProfileId = data.currentProfile && profiles[data.currentProfile]
      ? data.currentProfile
      : profileIds[0] || getFirebaseProfileId({ uid });
    const primaryProfile = profiles[primaryProfileId] || {};
    const villageId = primaryProfile.villageId || data.villageId || data.currentGroup || "";
    rows.push({
      uid,
      profileId: primaryProfileId,
      profileIds: profileIds.length ? profileIds : [primaryProfileId].filter(Boolean),
      email: data.email || primaryProfile.ownerEmail || "",
      displayName: data.displayName || getVillageDisplayName(primaryProfile),
      villageId,
      villageName: data.villageName || getDeveloperVillageName(villages, villageId),
      role: sanitizeUserRole(data.role || primaryProfile.role),
      coins: normalizeCoinCount(primaryProfile.coins),
      challengesCompleted: normalizeCounter(primaryProfile.challengeSessionsCompleted),
      createdAt: data.createdAtIso || primaryProfile.createdAtIso || "Not available",
      lastLoginAt: data.lastLoginAtIso || data.updatedAtIso || primaryProfile.lastStudyDate || "Not available",
      source: "User document"
    });
  });

  villages.forEach((village) => {
    Object.entries(village.profiles || {}).forEach(([profileId, profile]) => {
      if (seenProfileIds.has(profileId)) return;
      seenProfileIds.add(profileId);
      rows.push({
        uid: profile.ownerUid || "",
        profileId,
        profileIds: [profileId],
        email: profile.ownerEmail || "",
        displayName: getVillageDisplayName(profile),
        villageId: village.id,
        villageName: village.name,
        role: sanitizeUserRole(profile.role),
        coins: normalizeCoinCount(profile.coins),
        challengesCompleted: normalizeCounter(profile.challengeSessionsCompleted),
        createdAt: profile.createdAtIso || "Not available",
        lastLoginAt: profile.lastStudyDate || "Not available",
        source: "Village profile"
      });
    });
  });

  return rows.sort((first, second) => first.displayName.localeCompare(second.displayName));
}

function getDeveloperVillageName(villages, villageId) {
  return villages.find((village) => village.id === villageId)?.name || villageId || "No village";
}

function createDeveloperSystemStatusCard(data) {
  const section = document.createElement("section");
  section.className = "developer-tools-card developer-system-status-card";
  const projectId = getFirebaseSyncConfig().firebaseConfig.projectId || "Not configured";
  const currentUser = data.users.find((user) => user.uid && user.uid === firebaseAuthUser?.uid);
  const currentProfile = getCurrentProfile() || profileStore?.profiles?.[getFirebaseProfileId(firebaseAuthUser || {})] || {};
  const currentName = currentUser?.displayName || getVillageDisplayName(currentProfile) || getIdentityDisplayName() || "Not available";
  const currentRole = sanitizeUserRole(currentUser?.role || currentProfile.role);
  section.replaceChildren(
    createTextElement("h3", "", "System Status"),
    createDeveloperDefinitionList([
      ["Users", `${data.users.length}`],
      ["Villages", `${data.villages.length}`],
      ["Current account", currentName],
      ["Role", currentRole === "developer" ? "Developer" : currentRole],
      ["Firebase UID", firebaseAuthUser?.uid || "Not signed in"],
      ["Project", projectId]
    ])
  );
  return section;
}

function createDeveloperOverviewSection(data) {
  const section = document.createElement("section");
  section.className = "developer-tools-card";
  const cleanupIssueCount = data.villages.reduce((total, village) => (
    total + (village.orphanedMembers?.length || 0) + (village.duplicateMembers?.length || 0)
  ), 0);
  const currentUser = data.users.find((user) => user.uid && user.uid === firebaseAuthUser?.uid);
  const currentProfile = getCurrentProfile() || {};
  const currentVillage = currentUser?.villageName || normalizeVillageName(currentProfile.villageName) || currentProfile.villageId || "No village";
  const cards = [
    ["Total Firestore users", `${data.users.length}`],
    ["Total villages", `${data.villages.length}`],
    ["Current account", currentUser?.displayName || getVillageDisplayName(currentProfile) || "Not available"],
    ["Current role", formatDeveloperRole(currentUser?.role || currentProfile.role)],
    ["Current village", currentVillage],
    ["Cleanup issues found", `${cleanupIssueCount}`]
  ];
  const grid = document.createElement("div");
  grid.className = "developer-overview-grid";
  cards.forEach(([label, value]) => {
    const card = document.createElement("article");
    card.className = "developer-summary-card";
    card.replaceChildren(
      createTextElement("span", "", label),
      createTextElement("strong", "", value)
    );
    grid.append(card);
  });
  section.replaceChildren(createTextElement("h3", "", "Overview"), grid);
  return section;
}

function createDeveloperDiagnosticsSection(data) {
  const section = document.createElement("section");
  section.className = "developer-tools-card developer-diagnostics-card";
  const firebaseConfig = getFirebaseSyncConfig().firebaseConfig;
  const currentProfile = getCurrentProfile() || {};
  const currentUser = data.users.find((user) => user.uid && user.uid === firebaseAuthUser?.uid);
  const currentVillageId = currentUser?.villageId || currentProfile.villageId || currentGroupId || "";
  const difficultDiagnostics = getDifficultWordDiagnostics();
  const difficultNouns = difficultDiagnostics.filter((candidate) => candidate.isNoun);
  const diagnostics = {
    build: INTERNAL_BUILD_ID,
    firebaseProjectId: firebaseConfig.projectId || "Not configured",
    currentUid: firebaseAuthUser?.uid || "Not signed in",
    email: firebaseAuthUser?.email || "Not available",
    provider: firebaseAuthUser?.providerData?.map((provider) => provider.providerId).join(", ") || "password",
    firestoreRole: formatDeveloperRole(currentUser?.role || currentProfile.role),
    protectedAccount: String(Boolean(currentProfile.protectedAccount || currentUser?.role === "developer")),
    currentVillagePath: currentVillageId ? `unserDorf/v0Testing/villages/${currentVillageId}` : "No village",
    difficultVocabularyWords: `${difficultDiagnostics.length}`,
    difficultNouns: `${difficultNouns.length}`,
    lastFirestoreError: developerToolsLastError
      ? `${developerToolsLastError.operation || "operation"} ${developerToolsLastError.path || ""} ${developerToolsLastError.code || ""} ${developerToolsLastError.message || ""}`.trim()
      : "None",
    loadedDataSource: profileDataSource || "Firestore/local cache"
  };
  const copyButton = createDeveloperActionButton("Copy diagnostics", async () => {
    const text = Object.entries(diagnostics).map(([key, value]) => `${key}: ${value}`).join("\n");
    await navigator.clipboard?.writeText(text);
    setDeveloperToolsStatus("Diagnostics copied.");
  });
  section.replaceChildren(
    createTextElement("h3", "", "Diagnostics"),
    createDeveloperDefinitionList(Object.entries(diagnostics).map(([key, value]) => [formatDeveloperDiagnosticLabel(key), value])),
    createDifficultWordsDiagnosticsDetails(difficultDiagnostics),
    copyButton
  );
  return section;
}

function createDifficultWordsDiagnosticsDetails(candidates) {
  const details = document.createElement("details");
  details.className = "developer-technical-details";
  const summary = createTextElement("summary", "", "Difficult-word details");
  const list = document.createElement("div");
  list.className = "developer-technical-list";
  if (!candidates.length) {
    list.append(createTextElement("p", "", "No difficult words are currently eligible."));
  } else {
    candidates.forEach((candidate) => {
      const item = document.createElement("p");
      item.textContent = `${candidate.word} · ${candidate.level} · priority ${candidate.priority} · ${candidate.reasons.join("; ")} · vocabulary streak ${candidate.vocabularyCorrectStreak} · article streak ${candidate.articleCorrectStreak} · last reviewed ${candidate.lastReviewedAt || "never"}`;
      list.append(item);
    });
  }
  details.replaceChildren(summary, list);
  return details;
}

function formatDeveloperDiagnosticLabel(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());
}

function formatDeveloperRole(role) {
  const safeRole = sanitizeUserRole(role);
  if (safeRole === "developer") return "Developer";
  if (safeRole === "villageAdmin") return "Village Admin";
  return "Member";
}

function createDeveloperCleanupSection(data) {
  const section = document.createElement("section");
  section.className = "developer-tools-card";
  const familyZ = data.villages.find((village) => village.id === DEFAULT_GROUP_ID);
  const keepOnlyPreview = getFamilyZKeepCurrentUserPreview(familyZ);
  const cleanupRows = [
    ...(familyZ?.orphanedMembers || []),
    ...(familyZ?.duplicateMembers || [])
  ];
  section.append(createTextElement("h3", "", "Family Z membership cleanup"));
  if (keepOnlyPreview.keepProfileId) {
    section.append(createDeveloperCleanupPreview(keepOnlyPreview));
    if (keepOnlyPreview.removedMembers.length) {
      section.append(
        createTextElement(
          "p",
          "developer-tools-empty",
          `${keepOnlyPreview.removedMembers.length} Family Z member${keepOnlyPreview.removedMembers.length === 1 ? "" : "s"} will be removed.`
        ),
        createDeveloperActionButton("Remove all stale Family Z members", cleanupFamilyZKeepOnlyCurrentUser, true)
      );
    } else {
      section.append(createTextElement("p", "developer-tools-empty", "Family Z already contains only the current Mineko account."));
    }
    const oldUserCount = data.users.filter((user) => user.uid !== firebaseAuthUser?.uid).length;
    if (oldUserCount) {
      section.append(
        createTextElement("p", "developer-tools-empty", `${oldUserCount} old Firestore profile${oldUserCount === 1 ? "" : "s"} can be deleted after reviewing the user list.`),
        createDeveloperActionButton("Delete all old Firestore profiles", () => deleteAllOldFirestoreProfiles(data), true)
      );
    }
  } else {
    section.append(createTextElement("p", "developer-tools-empty", "Sign in as Mineko before using the keep-current-account cleanup."));
  }
  section.append(createTextElement(
    "p",
    "developer-tools-empty",
    cleanupRows.length
      ? `${cleanupRows.length} stale or duplicate member record${cleanupRows.length === 1 ? "" : "s"} found. Review before cleanup.`
      : "No stale Family Z member records found."
  ));
  if (cleanupRows.length) {
    const list = document.createElement("div");
    list.className = "developer-user-grid";
    cleanupRows.forEach((member) => {
      const card = document.createElement("article");
      card.className = "developer-user-card";
      card.replaceChildren(
        createTextElement("h4", "", member.displayName || member.profileId || "Unknown member"),
        createDeveloperDefinitionList([
          ["Reason", member.reason],
          ["Email", member.email || "Not available"],
          ["UID", member.uid || "No UID stored"],
          ["Profile ID", member.profileId],
          ["Village", member.villageId]
        ])
      );
      list.append(card);
    });
    const cleanupButton = createDeveloperActionButton(
      "Clean orphaned Family Z members",
      cleanupFamilyZOrphanedMembers,
      true
    );
    section.append(list, cleanupButton);
  }
  return section;
}

function createDeveloperTestingSection(data) {
  const section = document.createElement("section");
  section.className = "developer-tools-card";
  const currentUser = data.users.find((user) => user.uid && user.uid === firebaseAuthUser?.uid);
  const familyZ = data.villages.find((village) => village.id === DEFAULT_GROUP_ID);
  const memberCount = familyZ?.memberIds?.length || 0;
  const testingGrid = document.createElement("div");
  testingGrid.className = "developer-overview-grid developer-testing-grid";

  const personalCard = document.createElement("article");
  personalCard.className = "developer-summary-card developer-testing-card";
  personalCard.replaceChildren(
    createTextElement("span", "", "Current account"),
    createTextElement("strong", "", currentUser?.displayName || getIdentityDisplayName() || "Mineko"),
    createDeveloperTestingActionCard({
      title: "👋 Preview First Visit",
      description: "Launch the app exactly as someone opening Unser Dorf for the very first time.",
      keeps: ["Current sign-in", "Firebase UID", "Firestore data", "Local user data"],
      resets: ["Nothing. This is preview only."],
      actionLabel: "Preview First Visit",
      handler: startFirstVisitPreview,
      destructive: false
    }),
    createDeveloperTestingActionCard({
      title: "🎓 Preview New User",
      description: "Preview the flow after a learner has created an account, chosen a display name, and joined a village.",
      keeps: ["Current sign-in", "Display name", "Village membership", "Developer role", "All permissions"],
      resets: ["Nothing. This is preview only."],
      actionLabel: "Preview New User",
      handler: startNewUserPreview,
      destructive: false
    }),
    createDeveloperTestingActionCard({
      title: "👤 Continue as Current User",
      description: "Return to the authenticated application with your real account and progress.",
      keeps: ["Current user session"],
      resets: ["Nothing"],
      actionLabel: "Continue as Current User",
      handler: endDeveloperPreviewMode,
      destructive: false
    }),
    createDeveloperTestingActionCard({
      title: "Replay First Learning Experience",
      description: "Replay the learning introduction exactly as a newly registered learner would experience it after creating an account.",
      keeps: ["Account", "Display name", "Family membership", "Developer access"],
      resets: ["Learning progress", "Learning introduction", "First learning session"],
      actionLabel: "Replay First Learning Experience",
      handler: openReplayFirstLearningExperienceDialog,
      destructive: true
    }),
    createDeveloperTestingActionCard({
      title: "Reset Learning Progress",
      description: "Clear your learning history and start studying from the beginning without replaying onboarding.",
      keeps: ["Account", "Display name", "Village membership", "Developer access", "Onboarding state"],
      resets: ["Flashcards", "Vocabulary Review", "Article Review", "Difficult words", "Streaks", "Study history"],
      actionLabel: "Reset Learning Progress",
      handler: () => openResetMyLearningProgressDialog({ includePersonalRewards: false }),
      destructive: false
    })
  );

  const familyCard = document.createElement("article");
  familyCard.className = "developer-summary-card developer-testing-card";
  familyCard.replaceChildren(
    createTextElement("span", "", "Family Z"),
    createTextElement("strong", "", `${memberCount} member${memberCount === 1 ? "" : "s"}`),
    createTextElement("p", "developer-tools-empty", "Reset shared village progress without deleting the village, password, members, or admin access."),
    createDeveloperActionButton("Reset Family Z Progress", () => openResetFamilyZProgressDialog(data), true)
  );

  testingGrid.replaceChildren(personalCard, familyCard);
  section.replaceChildren(
    createTextElement("h3", "", "Testing"),
    createTextElement("p", "developer-tools-empty", "Safe reset tools for fresh family testing."),
    testingGrid
  );
  return section;
}

function createDeveloperTestingActionCard({ title, description, keeps = [], resets = [], actionLabel, handler, destructive = false }) {
  const card = document.createElement("section");
  card.className = "developer-testing-action";
  card.replaceChildren(
    createTextElement("h4", "", title),
    createTextElement("p", "developer-tools-empty", description),
    createDeveloperTestingList("Keeps", keeps),
    createDeveloperTestingList("Resets", resets),
    createDeveloperActionButton(actionLabel, handler, destructive)
  );
  return card;
}

function createDeveloperTestingList(title, items = []) {
  const wrapper = document.createElement("div");
  wrapper.className = "developer-testing-list";
  const list = document.createElement("ul");
  items.forEach((item) => {
    const row = document.createElement("li");
    row.textContent = item;
    list.append(row);
  });
  wrapper.replaceChildren(createTextElement("span", "", title), list);
  return wrapper;
}

function startFirstVisitPreview() {
  if (!firebaseAuthUser || !getCurrentProfile()) {
    setDeveloperToolsStatus("Sign in as the developer account before previewing onboarding.", true);
    return;
  }
  beginDeveloperPreviewMode("first-visit");
  setDeveloperToolsStatus("Preview mode: no account, village, or learning data will be changed.");
  showLandingScreen({ preview: true });
}

function startNewUserPreview() {
  if (!firebaseAuthUser || !getCurrentProfile()) {
    setDeveloperToolsStatus("Sign in as the developer account before previewing onboarding.", true);
    return;
  }
  beginDeveloperPreviewMode("new-user");
  setDeveloperToolsStatus("Preview mode: no account, village, or learning data will be changed.");
  guidedLearningActive = false;
  learnGermanReturnActive = false;
  showDemoScreen({ registered: true, preview: true });
}

function beginDeveloperPreviewMode(mode) {
  developerPreviewMode = mode;
  developerPreviewBaseline = captureDeveloperPreviewSafetySnapshot();
  pendingBrowserRoute = null;
  replaceBrowserHistoryWithDashboard();
  updateDeveloperPreviewControls();
}

function clearDeveloperPreviewState() {
  developerPreviewMode = "";
  registeredDemoActive = false;
  guidedLearningActive = false;
  learnGermanReturnActive = false;
  demoFinalScreenActive = false;
  pendingBrowserRoute = null;
  hideLearnIntroPanel();
  removeDeveloperPreviewControls();
  developerPreviewBaseline = null;
}

function endDeveloperPreviewMode() {
  const baseline = developerPreviewBaseline;
  clearDeveloperPreviewState();
  verifyDeveloperPreviewSafetySnapshot(baseline);
  showDashboard({ replaceHistory: true });
}

function updateDeveloperPreviewControls() {
  removeDeveloperPreviewControls();
  if (!developerPreviewMode) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "developer-preview-exit-button";
  button.dataset.developerPreviewExit = "true";
  button.textContent = "Exit Preview";
  button.addEventListener("click", endDeveloperPreviewMode);
  document.body.append(button);
}

function removeDeveloperPreviewControls() {
  document.querySelectorAll("[data-developer-preview-exit]").forEach((node) => node.remove());
}

function captureDeveloperPreviewSafetySnapshot() {
  const profile = getCurrentProfile();
  const group = getCurrentGroup();
  return {
    uid: firebaseAuthUser?.uid || "",
    email: firebaseAuthUser?.email || "",
    displayName: getVillageDisplayName(profile),
    displayNameConfirmed: Boolean(profile?.displayNameConfirmed),
    villageId: profile?.villageId || "",
    currentGroup: profileStore?.currentGroup || "",
    memberIds: normalizeGroupMemberIds(group?.memberIds || []),
    role: sanitizeUserRole(profile?.role),
    protectedAccount: Boolean(profile?.protectedAccount),
    registeredIntroCompleted: profile?.registeredIntroCompleted === false ? false : true,
    learningIntroSeen: Boolean(profile?.learningIntroSeen),
    forceFirstTimeExperience: Boolean(profile?.forceFirstTimeExperience),
    coins: normalizeCoinCount(profile?.coins),
    activeStudySetCount: normalizeActiveStudySet(profile?.activeStudySet).wordIds.length,
    flashcardProgressCount: Object.keys(normalizeMeaningProgress(profile?.progress || {})).length,
    vocabularyProgressCount: Object.keys(normalizeVocabularyProgress(profile?.vocabularyProgress || {})).length,
    articleProgressCount: Object.keys(normalizeArticleProgress(profile?.articleProgress || {})).length
  };
}

function verifyDeveloperPreviewSafetySnapshot(before) {
  if (!before) return;
  const after = captureDeveloperPreviewSafetySnapshot();
  const changedFields = Object.keys(before).filter((key) => JSON.stringify(before[key]) !== JSON.stringify(after[key]));
  if (!changedFields.length) {
    console.info("[Unser Dorf developer preview] Preview ended without changing real profile state.", { before, after });
    return;
  }
  console.warn("[Unser Dorf developer preview] Real profile state changed during preview.", {
    changedFields,
    before,
    after
  });
}

function createDeveloperCleanupPreview(preview) {
  const wrapper = document.createElement("div");
  wrapper.className = "developer-cleanup-preview";
  wrapper.replaceChildren(
    createDeveloperCleanupGroup("KEEP", [preview.keepMember], true),
    createDeveloperCleanupGroup("REMOVE", preview.removedMembers, false)
  );
  return wrapper;
}

function createDeveloperCleanupGroup(title, members, isKeepGroup = false) {
  const group = document.createElement("section");
  group.className = "developer-cleanup-group";
  const heading = createTextElement("h4", "", title);
  group.append(heading);
  if (!members.length) {
    group.append(createTextElement("p", "developer-tools-empty", isKeepGroup ? "No current account found." : "No members will be removed."));
    return group;
  }
  const list = document.createElement("div");
  list.className = "developer-cleanup-list";
  members.forEach((member) => list.append(createDeveloperCleanupAccountCard(member, isKeepGroup)));
  group.append(list);
  return group;
}

function createDeveloperCleanupAccountCard(member, isKeepCard = false) {
  const card = document.createElement("article");
  card.className = `developer-cleanup-account${isKeepCard ? " is-current" : ""}`;
  const titleRow = document.createElement("div");
  titleRow.className = "developer-cleanup-title-row";
  titleRow.append(createTextElement("h5", "", `✓ ${member.displayName || member.profileId || "Unknown member"}`));
  if (isKeepCard) {
    const badge = createTextElement("span", "developer-current-badge", "CURRENT ACCOUNT");
    titleRow.append(badge);
  }
  card.replaceChildren(
    titleRow,
    createDeveloperDefinitionList([
      ["Display name", member.displayName || "Not available"],
      ["Email", member.email || "Not available"],
      ["UID", member.uid || "No UID stored"],
      ["Village", member.villageName || member.villageId || "Family Z"],
      ["Reason", member.reason || (isKeepCard ? "Current developer account" : "Cleanup candidate")]
    ])
  );
  return card;
}

function getFamilyZKeepCurrentUserPreview(familyZ) {
  const keepUid = firebaseAuthUser?.uid || "";
  const keepProfileId = keepUid ? getFirebaseProfileId(firebaseAuthUser) : "";
  const currentProfile = profileStore?.profiles?.[keepProfileId] || familyZ?.profiles?.[keepProfileId] || {};
  const villageName = familyZ?.name || "Family Z";
  const allProfileIds = normalizeProfileIdList([
    ...(familyZ?.rawMemberIds || []),
    ...(familyZ?.memberIds || []),
    ...Object.keys(familyZ?.profiles || {})
  ]);
  const removedMembers = allProfileIds
    .filter((profileId) => profileId !== keepProfileId)
    .map((profileId) => {
      const profile = familyZ?.profiles?.[profileId] || profileStore?.profiles?.[profileId] || {};
      const uid = String(profile.ownerUid || "").trim();
      return {
        profileId,
        uid,
        email: profile.ownerEmail || "",
        displayName: getVillageDisplayName(profile),
        villageId: DEFAULT_GROUP_ID,
        villageName,
        reason: uid === keepUid
          ? "Duplicate current developer UID entry"
          : uid
            ? "Old Family Z test account, not the current developer account"
            : "No Firebase UID stored on this village member record"
      };
    });
  return {
    keepUid,
    keepProfileId,
    keepDisplayName: getVillageDisplayName(currentProfile),
    keepMember: {
      profileId: keepProfileId,
      uid: keepUid,
      email: firebaseAuthUser?.email || currentProfile.ownerEmail || "",
      displayName: getVillageDisplayName(currentProfile) || getIdentityDisplayName() || "Mineko",
      villageId: DEFAULT_GROUP_ID,
      villageName,
      reason: "Current developer account"
    },
    removedMembers
  };
}

function createDeveloperUsersSection(users, villages = []) {
  const section = document.createElement("section");
  section.className = "developer-tools-card";
  section.append(createTextElement("h3", "", "Users"));
  if (!users.length) {
    section.append(createTextElement("p", "developer-tools-empty", "No user profiles found."));
    return section;
  }
  const controls = createDeveloperUserFilters(users, villages);
  const grid = document.createElement("div");
  grid.className = "developer-user-list";
  const renderRows = () => {
    const filtered = filterDeveloperUsers(users, controls);
    grid.replaceChildren(...filtered.map((user) => createDeveloperUserCard(user)));
    if (!filtered.length) grid.append(createTextElement("p", "developer-tools-empty", "No users match these filters."));
  };
  Object.values(controls).forEach((control) => control.addEventListener("input", renderRows));
  Object.values(controls).forEach((control) => control.addEventListener("change", renderRows));
  renderRows();
  section.append(controls.wrapper, grid);
  return section;
}

function createDeveloperUserFilters(users, villages) {
  const wrapper = document.createElement("div");
  wrapper.className = "developer-user-filters";
  const search = document.createElement("input");
  search.type = "search";
  search.placeholder = "Search name or email";
  search.autocomplete = "off";
  const village = document.createElement("select");
  village.append(new Option("All villages", ""));
  villages.forEach((item) => village.append(new Option(item.name, item.id)));
  const role = document.createElement("select");
  role.append(new Option("All roles", ""));
  ["developer", "villageAdmin", "member"].forEach((item) => role.append(new Option(formatDeveloperRole(item), item)));
  const state = document.createElement("select");
  state.append(
    new Option("All profiles", ""),
    new Option("Current account", "current"),
    new Option("Active profiles", "active"),
    new Option("Orphaned profiles", "orphaned"),
    new Option("No village", "no-village")
  );
  wrapper.replaceChildren(search, village, role, state);
  return { wrapper, search, village, role, state };
}

function filterDeveloperUsers(users, controls) {
  const query = controls.search.value.trim().toLowerCase();
  const village = controls.village.value;
  const role = controls.role.value;
  const state = controls.state.value;
  return users.filter((user) => {
    const text = `${user.displayName || ""} ${user.email || ""}`.toLowerCase();
    if (query && !text.includes(query)) return false;
    if (village && user.villageId !== village) return false;
    if (role && sanitizeUserRole(user.role) !== role) return false;
    if (state === "current" && user.uid !== firebaseAuthUser?.uid) return false;
    if (state === "active" && (isDeveloperUserOrphaned(user) || !user.villageId)) return false;
    if (state === "orphaned" && !isDeveloperUserOrphaned(user)) return false;
    if (state === "no-village" && user.villageId) return false;
    return true;
  });
}

function createDeveloperUserCard(user) {
  const card = document.createElement("article");
  const isCurrent = Boolean(user.uid && user.uid === firebaseAuthUser?.uid);
  card.className = `developer-user-card developer-user-row${isCurrent ? " is-current" : ""}`;
  const summary = document.createElement("div");
  summary.className = "developer-user-summary";
  const title = document.createElement("div");
  title.className = "developer-user-title";
  title.replaceChildren(
    createTextElement("h4", "", user.displayName || "Unnamed user"),
    createTextElement("p", "", user.email || "No email")
  );
  const meta = document.createElement("div");
  meta.className = "developer-user-meta";
  meta.replaceChildren(
    createTextElement("span", "", user.villageName || user.villageId || "No village"),
    createTextElement("span", "", `${user.coins} coins`),
    createTextElement("span", "", user.lastLoginAt || "No activity")
  );
  const badges = createDeveloperUserBadges(user);
  summary.replaceChildren(title, meta, badges);
  const actions = document.createElement("div");
  actions.className = "developer-tools-actions";
  const actionButtons = [
    createDeveloperActionButton("Reset progress", () => resetDeveloperUserProgress(user)),
    createDeveloperActionButton("Remove from village", () => removeDeveloperUserFromVillage(user))
  ];
  if (!isCurrent) actionButtons.push(createDeveloperActionButton("Delete Firestore profile", () => deleteDeveloperUser(user), true));
  actions.replaceChildren(...actionButtons);
  const details = document.createElement("details");
  details.className = "developer-technical-details";
  details.append(
    createTextElement("summary", "", "Show technical details"),
    createDeveloperDefinitionList([
      ["UID", user.uid || "No Auth UID found"],
      ["Profile ID", user.profileId || "Not available"],
      ["All Profile IDs", (user.profileIds || []).join(", ") || "Not available"],
      ["Source", user.source],
      ["Created", user.createdAt],
      ["Full last activity", user.lastLoginAt],
      ["Challenges", `${user.challengesCompleted}`]
    ])
  );
  card.replaceChildren(
    summary,
    details,
    actions
  );
  return card;
}

function createDeveloperUserBadges(user) {
  const badges = document.createElement("div");
  badges.className = "developer-badges";
  if (user.uid && user.uid === firebaseAuthUser?.uid) badges.append(createDeveloperBadge("CURRENT ACCOUNT", "current"));
  const role = sanitizeUserRole(user.role);
  if (role === "developer") badges.append(createDeveloperBadge("DEVELOPER", "developer"));
  else if (role === "villageAdmin") badges.append(createDeveloperBadge("VILLAGE ADMIN", "admin"));
  else badges.append(createDeveloperBadge("MEMBER", "member"));
  if (isDeveloperUserOrphaned(user)) badges.append(createDeveloperBadge("ORPHANED", "orphaned"));
  return badges;
}

function createDeveloperBadge(label, type = "") {
  const badge = createTextElement("span", `developer-badge ${type}`.trim(), label);
  return badge;
}

function isDeveloperUserOrphaned(user) {
  return user.source === "Village profile" || !user.uid;
}

function createDeveloperVillagesSection(villages) {
  const section = document.createElement("section");
  section.className = "developer-tools-card";
  section.append(createTextElement("h3", "", "Villages"));
  const grid = document.createElement("div");
  grid.className = "developer-village-grid";
  villages.forEach((village) => {
    const memberNames = village.memberIds
      .map((profileId) => getVillageDisplayName(village.profiles?.[profileId]))
      .filter(Boolean);
    const cleanupCount = (village.orphanedMembers?.length || 0) + (village.duplicateMembers?.length || 0);
    const card = document.createElement("article");
    card.className = "developer-village-card";
    const actions = document.createElement("div");
    actions.className = "developer-tools-actions";
    actions.replaceChildren(
      createDeveloperActionButton("View members", () => {
        developerToolsActiveSection = "users";
        if (developerToolsLastData) els.developerToolsContent.replaceChildren(createDeveloperToolsLayout(developerToolsLastData));
      }),
      createDeveloperActionButton("Remove stale memberships", cleanupFamilyZOrphanedMembers),
      createDeveloperActionButton("Reset village progress", () => {
        if (village.id !== DEFAULT_GROUP_ID) {
          setDeveloperToolsStatus("Only Family Z progress reset is enabled for v0 testing.", true);
          return;
        }
        return openResetFamilyZProgressDialog({ villages });
      }, true)
    );
    card.replaceChildren(
      createTextElement("h4", "", village.name),
      createDeveloperBadge(`${memberNames.length} member${memberNames.length === 1 ? "" : "s"}`, "member"),
      createDeveloperDefinitionList([
        ["Village ID", village.id],
        ["Creator/admin", village.creator],
        ["Cleanup issues", `${cleanupCount}`],
        ["Members", memberNames.join(", ") || "No members"]
      ]),
      actions
    );
    grid.append(card);
  });
  section.append(grid);
  return section;
}

function createDeveloperDefinitionList(rows) {
  const list = document.createElement("dl");
  list.className = "developer-definition-list";
  rows.forEach(([label, value]) => {
    list.append(createTextElement("dt", "", label), createTextElement("dd", "", value));
  });
  return list;
}

function createDeveloperActionButton(label, handler, destructive = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.className = destructive ? "danger-button" : "ghost-button";
  button.disabled = developerToolsBusy;
  button.addEventListener("click", () => runSafely(`Developer Tools ${label}`, async () => {
    if (developerToolsBusy) return;
    setDeveloperToolsBusy(true);
    try {
      await handler();
    } finally {
      setDeveloperToolsBusy(false);
    }
  }));
  return button;
}

function setDeveloperToolsBusy(isBusy) {
  developerToolsBusy = Boolean(isBusy);
  els.developerToolsScreen?.querySelectorAll("button").forEach((button) => {
    if (button.id === "developerToolsBack") return;
    button.disabled = developerToolsBusy;
  });
}

async function deleteDeveloperUser(user) {
  if (user.uid && user.uid === firebaseAuthUser?.uid) {
    setDeveloperToolsStatus("You cannot delete the currently signed-in developer account.", true);
    return;
  }
  const target = createDeveloperDeleteTarget(user);
  const confirmed = await confirmDeleteFirestoreProfile(target);
  if (!confirmed) return;
  try {
    const result = await deleteFirestoreProfileTarget(target);
    if (!result.verification.ok) {
      setDeveloperToolsStatus(`Could not verify profile deletion. ${result.verification.failures.join(" ")}`, true);
      return;
    }
    await renderDeveloperToolsPage();
    refreshVillageMembershipUi();
    setDeveloperToolsStatus("Profile deleted successfully.");
  } catch (error) {
    console.error("[Unser Dorf Developer Tools] Delete Firestore profile failed.", {
      target,
      code: error?.code || "",
      path: error?.firestorePath || "",
      operation: error?.firestoreOperation || "",
      message: error?.message || String(error),
      error
    });
    const pathHint = error?.firestorePath ? ` Path: ${error.firestorePath}.` : "";
    const codeHint = error?.code ? ` Code: ${error.code}.` : "";
    setDeveloperToolsStatus(`Could not delete Firestore profile: ${getErrorMessage(error)}.${codeHint}${pathHint}`, true);
  }
}

function createDeveloperDeleteTarget(user) {
  return {
    uid: String(user.uid || "").trim(),
    email: String(user.email || "").trim(),
    displayName: user.displayName || "Unnamed user",
    profileIds: getDeveloperTargetProfileIds(user),
    villageId: user.villageId || "",
    villageName: user.villageName || user.villageId || "No village"
  };
}

function confirmDeleteFirestoreProfile(target) {
  return new Promise((resolve) => {
    const overlay = document.createElement("section");
    overlay.className = "developer-confirmation-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Delete Firestore profile");
    const card = document.createElement("article");
    card.className = "developer-confirmation-card";
    const actions = document.createElement("div");
    actions.className = "developer-confirmation-actions";
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "ghost-button";
    cancelButton.textContent = "Cancel";
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger-button";
    deleteButton.textContent = "Delete Profile";
    actions.replaceChildren(cancelButton, deleteButton);
    card.replaceChildren(
      createTextElement("h3", "", "Delete Firestore profile?"),
      createDeveloperDefinitionList([
        ["Name", target.displayName || "Not available"],
        ["Email", target.email || "Not available"],
        ["UID", target.uid || "No Auth UID found"],
        ["Village", target.villageName || target.villageId || "No village"]
      ]),
      createTextElement("p", "", "This will permanently remove the Firestore profile, learning progress, and village references."),
      createTextElement("p", "", "The Firebase Authentication account, if one still exists, must be deleted separately."),
      actions
    );
    overlay.append(card);
    document.body.append(overlay);

    let handleKeydown = null;
    const finish = (confirmed) => {
      if (handleKeydown) document.removeEventListener("keydown", handleKeydown);
      overlay.remove();
      resolve(confirmed);
    };
    cancelButton.addEventListener("click", () => finish(false), { once: true });
    deleteButton.addEventListener("click", () => finish(true), { once: true });
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) finish(false);
    });
    handleKeydown = (event) => {
      if (event.key === "Escape") finish(false);
    };
    document.addEventListener("keydown", handleKeydown);
    deleteButton.focus();
  });
}

async function deleteFirestoreProfileTarget(target) {
  if (target.uid && target.uid === firebaseAuthUser?.uid) {
    throw new Error("The current developer account cannot be deleted.");
  }
  const firebase = await getFirebaseSyncApi();
  const savedAt = new Date().toISOString();
  console.info("[Unser Dorf Developer Tools] Deleting Firestore profile target.", target);
  await removeDeveloperTargetFromVillageDocs(firebase, target, DEFAULT_GROUPS.map((group) => group.id), savedAt);
  await deleteLegacyProfileStoreReferencesForTarget(firebase, target, savedAt);
  if (target.uid) {
    const userPath = getFirebaseUserDocPath(firebase, target.uid);
    await writeFirestoreWithDebug(
      () => firebase.deleteDoc(getFirebaseUserDocRef(firebase, target.uid)),
      {
        operation: "delete developer user document",
        path: userPath,
        targetUid: target.uid
      }
    );
  }
  removeProfileIdsFromLocalStore(target.profileIds);
  removeDeveloperTargetFromLocalVillages(target);
  const verification = await verifyDeveloperProfileDeleted(firebase, target);
  return { verification };
}

async function deleteAllOldFirestoreProfiles(data) {
  const currentUid = firebaseAuthUser?.uid || "";
  const targets = dedupeDeveloperDeleteTargets(
    data.users
      .filter((user) => !user.uid || user.uid !== currentUid)
      .map((user) => createDeveloperDeleteTarget(user))
  );
  if (!targets.length) {
    setDeveloperToolsStatus("No old Firestore profiles found to delete.");
    return;
  }
  const confirmed = await confirmDeleteOldFirestoreProfiles(targets);
  if (!confirmed) return;
  const results = [];
  for (const target of targets) {
    try {
      const result = await deleteFirestoreProfileTarget(target);
      results.push({ target, ok: result.verification.ok, failures: result.verification.failures });
    } catch (error) {
      console.error("[Unser Dorf Developer Tools] Bulk profile delete failed for target.", {
        target,
        code: error?.code || "",
        message: error?.message || String(error),
        error
      });
      results.push({
        target,
        ok: false,
        failures: [`${target.displayName || target.uid || "Unknown profile"} failed: ${error?.code || getErrorMessage(error)}`]
      });
    }
  }
  await renderDeveloperToolsPage();
  refreshVillageMembershipUi();
  const failures = results.flatMap((result) => result.failures || []);
  const deletedCount = results.filter((result) => result.ok).length;
  if (failures.length) {
    setDeveloperToolsStatus(`Deleted ${deletedCount} old Firestore profile${deletedCount === 1 ? "" : "s"}, but verification found problems: ${failures.join(" ")}`, true);
    return;
  }
  setDeveloperToolsStatus(`Deleted ${deletedCount} old Firestore profile${deletedCount === 1 ? "" : "s"}. Current Mineko account preserved.`);
}

function dedupeDeveloperDeleteTargets(targets) {
  const seen = new Set();
  return targets.filter((target) => {
    const key = target.uid || target.profileIds.join("|") || target.email;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function confirmDeleteOldFirestoreProfiles(targets) {
  return new Promise((resolve) => {
    const requiredText = `DELETE ${targets.length} PROFILE${targets.length === 1 ? "" : "S"}`;
    const overlay = document.createElement("section");
    overlay.className = "developer-confirmation-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Delete all old Firestore profiles");
    const card = document.createElement("article");
    card.className = "developer-confirmation-card developer-bulk-delete-card";
    const list = document.createElement("div");
    list.className = "developer-bulk-delete-list";
    targets.forEach((target) => {
      list.append(createDeveloperCleanupAccountCard({
        displayName: target.displayName,
        email: target.email,
        uid: target.uid,
        villageName: target.villageName,
        reason: "Old Firestore profile; not the current Mineko developer account"
      }));
    });
    const label = document.createElement("label");
    label.className = "developer-confirmation-input";
    const input = document.createElement("input");
    input.type = "text";
    input.autocomplete = "off";
    input.placeholder = requiredText;
    label.append(createTextElement("span", "", `Type ${requiredText} to confirm`), input);
    const actions = document.createElement("div");
    actions.className = "developer-confirmation-actions";
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "ghost-button";
    cancelButton.textContent = "Cancel";
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger-button";
    deleteButton.textContent = "Delete Profiles";
    deleteButton.disabled = true;
    actions.replaceChildren(cancelButton, deleteButton);
    card.replaceChildren(
      createTextElement("h3", "", `Delete ${targets.length} old Firestore profile${targets.length === 1 ? "" : "s"}?`),
      createTextElement("p", "", "The current Mineko developer account will be kept."),
      list,
      label,
      createTextElement("p", "", "Firebase Authentication accounts are NOT deleted by this browser tool."),
      actions
    );
    overlay.append(card);
    document.body.append(overlay);

    input.addEventListener("input", () => {
      deleteButton.disabled = input.value.trim() !== requiredText;
    });
    let handleKeydown = null;
    const finish = (confirmed) => {
      if (handleKeydown) document.removeEventListener("keydown", handleKeydown);
      overlay.remove();
      resolve(confirmed);
    };
    cancelButton.addEventListener("click", () => finish(false), { once: true });
    deleteButton.addEventListener("click", () => finish(true), { once: true });
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) finish(false);
    });
    handleKeydown = (event) => {
      if (event.key === "Escape") finish(false);
    };
    document.addEventListener("keydown", handleKeydown);
    input.focus();
  });
}

async function removeDeveloperTargetFromVillageDocs(firebase, target, villageIds, savedAt) {
  const profileIdSet = new Set(target.profileIds || []);
  await Promise.all(villageIds.map(async (villageId) => {
    const villageRef = getFirebaseVillageDocRef(firebase, villageId);
    const villagePath = getFirebaseVillageDocPath(firebase, villageId);
    const snapshot = await readFirestoreWithDebug(
      () => firebase.getDoc(villageRef),
      {
        operation: "read village before deleting developer profile",
        path: villagePath,
        targetUid: target.uid || ""
      }
    );
    if (!snapshot.exists()) return;
    const data = snapshot.data() || {};
    const groupInfo = DEFAULT_GROUPS.find((group) => group.id === villageId) || { id: villageId, name: villageId };
    const group = createGroupData(groupInfo, data.group || {});
    const profiles = { ...(data.profiles || {}) };
    const memberProfiles = { ...(data.memberProfiles || {}) };
    Object.entries(profiles).forEach(([profileId, profile]) => {
      if (doesDeveloperTargetMatchProfile(target, profileId, profile)) {
        delete profiles[profileId];
        profileIdSet.add(profileId);
      }
    });
    Object.entries(memberProfiles).forEach(([profileId, profile]) => {
      if (doesDeveloperTargetMatchProfile(target, profileId, profile)) {
        delete memberProfiles[profileId];
        profileIdSet.add(profileId);
      }
    });
    const cleanedMemberIds = normalizeGroupMemberIds([
      ...(group.memberIds || []).filter((profileId) => profiles[profileId] && !profileIdSet.has(profileId)),
      ...Object.keys(profiles)
    ]);
    group.memberIds = cleanedMemberIds;
	    const update = {
	      group,
	      profiles,
	      memberProfiles,
	      rosterVersion: getNextVillageRosterVersion(data),
	      rosterUpdatedAt: firebase.serverTimestamp(),
	      rosterUpdatedAtIso: savedAt,
	      updatedAt: firebase.serverTimestamp(),
	      updatedAtIso: savedAt
	    };
	    if (target.uid && (data.creatorUid === target.uid || data.adminUid === target.uid)) {
	      update.creatorUid = "";
	      update.adminUid = "";
	    }
	    traceVillageWrite("removeDeveloperTargetFromVillageDocs", "developer profile deletion cleanup", villageId, update, {
	      currentFirestoreVillageDocument: true,
	      currentUserDocument: false,
	      profileStores: false,
	      localStorage: false,
	      legacyMigration: false,
	      explicitVillageJoin: false,
	      adminCleanup: true
	    });
	    await writeFirestoreWithDebug(
      () => firebase.setDoc(villageRef, update, { merge: true }),
      {
        operation: "remove developer profile from village document",
        path: villagePath,
        targetUid: target.uid || "",
        removedProfileIds: Array.from(profileIdSet)
      }
    );
  }));
}

async function deleteLegacyProfileStoreReferencesForTarget(firebase, target, savedAt) {
  const collectionPath = getFirebaseProfileStoresCollectionPath(firebase);
  const snapshot = await readFirestoreWithDebug(
    () => firebase.getDocs(getFirebaseProfileStoresCollectionRef(firebase)),
    {
      operation: "list legacy profileStores before deleting developer profile",
      path: collectionPath,
      targetUid: target.uid || ""
    }
  );
	  await Promise.all(snapshot.docs.map(async (docSnapshot) => {
	    const data = docSnapshot.data() || {};
	    const legacyStore = data.profileStore || data.profile_store;
	    if (!legacyStore?.profiles) return;
	    const removedProfileIds = [];
	    Object.entries(legacyStore.profiles || {}).forEach(([profileId, profile]) => {
	      if (doesDeveloperTargetMatchProfile(target, profileId, profile)) {
	        removedProfileIds.push(profileId);
	      }
	    });
	    if (!removedProfileIds.length) return;
	    const { cleanedStore } = removeProfileIdsFromLegacyStore(legacyStore, removedProfileIds);
	    const docPath = getFirebaseProfileStoreDocPath(firebase, docSnapshot.id);
	    await writeFirestoreWithDebug(
      () => firebase.setDoc(firebase.doc(firebase.db, ...firebase.rootPathParts, "profileStores", docSnapshot.id), {
        profileStore: cleanedStore,
        updatedAt: firebase.serverTimestamp(),
        updatedAtIso: savedAt
      }, { merge: true }),
      {
        operation: "remove developer profile from legacy profileStore document",
        path: docPath,
        targetUid: target.uid || "",
        removedProfileIds
      }
    );
  }));
}

function doesDeveloperTargetMatchProfile(target, profileId, profile = {}) {
  const targetProfileIds = new Set(target.profileIds || []);
  const targetEmail = String(target.email || "").toLowerCase();
  const ownerEmail = String(profile.ownerEmail || profile.email || "").toLowerCase();
  return targetProfileIds.has(profileId)
    || Boolean(target.uid && profile.ownerUid === target.uid)
    || Boolean(targetEmail && ownerEmail && targetEmail === ownerEmail);
}

async function verifyDeveloperProfileDeleted(firebase, target) {
  const failures = [];
  if (target.uid) {
    const userPath = getFirebaseUserDocPath(firebase, target.uid);
    const userSnapshot = await readFirestoreWithDebug(
      () => firebase.getDoc(getFirebaseUserDocRef(firebase, target.uid)),
      {
        operation: "verify developer user document deleted",
        path: userPath,
        targetUid: target.uid
      }
    );
    if (userSnapshot.exists()) failures.push(`${userPath} still exists.`);
  }

  for (const groupInfo of DEFAULT_GROUPS) {
    const villagePath = getFirebaseVillageDocPath(firebase, groupInfo.id);
    const villageSnapshot = await readFirestoreWithDebug(
      () => firebase.getDoc(getFirebaseVillageDocRef(firebase, groupInfo.id)),
      {
        operation: "verify village has no deleted developer profile references",
        path: villagePath,
        targetUid: target.uid || ""
      }
    );
    if (!villageSnapshot.exists()) continue;
    const data = villageSnapshot.data() || {};
    const group = createGroupData(groupInfo, data.group || {});
    const profiles = data.profiles || {};
    const memberProfiles = data.memberProfiles || {};
    const matchingProfileIds = Object.entries(profiles)
      .filter(([profileId, profile]) => doesDeveloperTargetMatchProfile(target, profileId, profile))
      .map(([profileId]) => profileId);
    const matchingMemberProfileIds = Object.entries(memberProfiles)
      .filter(([profileId, profile]) => doesDeveloperTargetMatchProfile(target, profileId, profile))
      .map(([profileId]) => profileId);
    const matchingMemberIds = normalizeProfileIdList(group.memberIds || [])
      .filter((profileId) => (target.profileIds || []).includes(profileId) || matchingProfileIds.includes(profileId) || matchingMemberProfileIds.includes(profileId));
    if (matchingProfileIds.length) failures.push(`${villagePath} profiles still references ${matchingProfileIds.join(", ")}.`);
    if (matchingMemberProfileIds.length) failures.push(`${villagePath} memberProfiles still references ${matchingMemberProfileIds.join(", ")}.`);
    if (matchingMemberIds.length) failures.push(`${villagePath} memberIds still references ${matchingMemberIds.join(", ")}.`);
    if (target.uid && (data.creatorUid === target.uid || data.adminUid === target.uid)) failures.push(`${villagePath} still has creator/admin reference to ${target.uid}.`);
  }

  const legacySnapshot = await readFirestoreWithDebug(
    () => firebase.getDocs(getFirebaseProfileStoresCollectionRef(firebase)),
    {
      operation: "verify legacy profileStores have no deleted developer profile references",
      path: getFirebaseProfileStoresCollectionPath(firebase),
      targetUid: target.uid || ""
    }
  );
	  legacySnapshot.docs.forEach((docSnapshot) => {
	    const data = docSnapshot.data() || {};
	    const legacyStore = data.profileStore || data.profile_store;
	    if (!legacyStore?.profiles) return;
	    const targetProfileIds = new Set(target.profileIds || []);
	    Object.entries(legacyStore.profiles || {}).forEach(([profileId, profile]) => {
	      if (doesDeveloperTargetMatchProfile(target, profileId, profile)) targetProfileIds.add(profileId);
	    });
	    const matches = findProfileIdsInLegacyStore(legacyStore, targetProfileIds);
	    if (matches.length) failures.push(`${getFirebaseProfileStoreDocPath(firebase, docSnapshot.id)} still references ${matches.join(", ")}.`);
	  });
  console.info("[Unser Dorf Developer Tools] Delete profile verification result.", {
    target,
    ok: failures.length === 0,
    failures
  });
  return { ok: failures.length === 0, failures };
}

function removeDeveloperTargetFromLocalVillages(target) {
  const targetProfileIds = new Set(target.profileIds || []);
  Object.values(profileStore?.groups || {}).forEach((group) => {
    group.memberIds = normalizeGroupMemberIds((group.memberIds || []).filter((profileId) => !targetProfileIds.has(profileId)));
  });
  saveProfileStore();
}

async function cleanupFamilyZOrphanedMembers() {
  const data = await loadDeveloperToolsData();
  const familyZ = data.villages.find((village) => village.id === DEFAULT_GROUP_ID);
  const currentProfileId = firebaseAuthUser?.uid ? getFirebaseProfileId(firebaseAuthUser) : "";
  const cleanupProfileIds = normalizeProfileIdList(familyZ?.cleanupProfileIds || [])
    .filter((profileId) => profileId !== currentProfileId);
  const cleanupRows = [
    ...(familyZ?.orphanedMembers || []),
    ...(familyZ?.duplicateMembers || [])
  ].filter((member) => member.profileId !== currentProfileId);
  if (!cleanupProfileIds.length) {
    setDeveloperToolsStatus("Family Z has no orphaned or duplicate member records to clean.");
    return;
  }
  console.table(cleanupRows);
  const confirmed = window.confirm(
    `Clean ${cleanupProfileIds.length} stale Family Z member record${cleanupProfileIds.length === 1 ? "" : "s"}?\n\n`
      + cleanupRows.map((member) => `${member.displayName || member.profileId} (${member.reason})`).join("\n")
      + "\n\nThis removes only Firestore village membership/profile references. Family Z will not be deleted."
  );
  if (!confirmed) return;
  const firebase = await getFirebaseSyncApi();
  const savedAt = new Date().toISOString();
  await removeProfileIdsFromVillageDocs(firebase, cleanupProfileIds, [DEFAULT_GROUP_ID], savedAt);
  await deleteLegacySharedProfileStoreReferences(firebase, cleanupProfileIds, savedAt);
  removeProfileIdsFromLocalStore(cleanupProfileIds);
  setDeveloperToolsStatus(`Cleaned ${cleanupProfileIds.length} stale Family Z member record${cleanupProfileIds.length === 1 ? "" : "s"}.`);
  await renderDeveloperToolsPage();
  refreshVillageMembershipUi();
}

async function cleanupFamilyZKeepOnlyCurrentUser() {
  if (!firebaseAuthUser?.uid) {
    setDeveloperToolsStatus("Sign in as Mineko before cleaning Family Z.", true);
    return;
  }
  const data = await loadDeveloperToolsData();
  const familyZ = data.villages.find((village) => village.id === DEFAULT_GROUP_ID);
  const preview = getFamilyZKeepCurrentUserPreview(familyZ);
  const removeCount = preview.removedMembers.length;
  if (!preview.keepProfileId) {
    setDeveloperToolsStatus("Could not identify the current Mineko Firebase UID.", true);
    return;
  }
  if (!removeCount) {
    setDeveloperToolsStatus("Family Z already contains only the current Mineko account.");
    return;
  }
  console.table([
    { action: "KEEP", displayName: preview.keepDisplayName, uid: preview.keepUid, profileId: preview.keepProfileId },
    ...preview.removedMembers.map((member) => ({
      action: "REMOVE",
      displayName: member.displayName,
      uid: member.uid,
      profileId: member.profileId,
      reason: member.reason
    }))
  ]);
  const confirmed = await confirmFamilyZCleanup(removeCount);
  if (!confirmed) return;

  const firebase = await getFirebaseSyncApi();
  const savedAt = new Date().toISOString();
  const userRef = getFirebaseUserDocRef(firebase, firebaseAuthUser.uid);
  const userSnapshot = await firebase.getDoc(userRef);
  const userData = userSnapshot.exists() ? userSnapshot.data() || {} : {};
  const userProfiles = { ...(userData.profiles || {}) };
  const localProfile = profileStore?.profiles?.[preview.keepProfileId] || {};
  const villageProfile = familyZ?.profiles?.[preview.keepProfileId] || {};
  const keepProfile = normalizeProfileData(
    {
      ...localProfile,
      ...villageProfile,
      ...(userProfiles[preview.keepProfileId] || {}),
      id: preview.keepProfileId,
      ownerUid: firebaseAuthUser.uid,
      ownerEmail: firebaseAuthUser.email || "",
      villageId: DEFAULT_GROUP_ID,
      role: "developer",
      protectedAccount: true
    },
    {
      id: preview.keepProfileId,
      name: getVillageDisplayName(localProfile) || getIdentityDisplayName(),
      emoji: localProfile.emoji || "🌿",
      avatar: localProfile.avatar || "",
      password: ""
    }
  );
  keepProfile.ownerUid = firebaseAuthUser.uid;
  keepProfile.ownerEmail = firebaseAuthUser.email || "";
  keepProfile.villageId = DEFAULT_GROUP_ID;
  keepProfile.role = "developer";
  keepProfile.protectedAccount = true;

  const villageRef = getFirebaseVillageDocRef(firebase, DEFAULT_GROUP_ID);
  const villagePath = getFirebaseVillageDocPath(firebase, DEFAULT_GROUP_ID);
  const beforeCleanupSnapshot = await readFirestoreWithDebug(
    () => firebase.getDocFromServer(villageRef),
    {
      operation: "read Family Z before keep-current cleanup",
      path: villagePath,
      keepProfileId: preview.keepProfileId,
      removedProfileIds: preview.removedMembers.map((member) => member.profileId)
    }
  );
  console.info("[Unser Dorf Family Z cleanup] Village document before cleanup.", {
    path: villagePath,
    data: beforeCleanupSnapshot.exists() ? beforeCleanupSnapshot.data() : null
  });
  const beforeCleanupData = beforeCleanupSnapshot.exists() ? beforeCleanupSnapshot.data() || {} : {};
  const familyZInfo = DEFAULT_GROUPS.find((group) => group.id === DEFAULT_GROUP_ID);
  const group = createGroupData(familyZInfo, {
    ...(familyZ || {}),
    memberIds: [preview.keepProfileId]
  });
  group.memberIds = [preview.keepProfileId];
  const cleanedVillagePayload = {
    group,
    profiles: {
      [preview.keepProfileId]: sanitizeProfileStoreForSync(keepProfile)
    },
    memberProfiles: {
      [preview.keepProfileId]: sanitizeProfileStoreForSync(keepProfile)
    },
    memberIds: [preview.keepProfileId],
    legacyRosterMigrationVersion: 1,
    rosterVersion: getNextVillageRosterVersion(beforeCleanupData),
    rosterUpdatedAt: firebase.serverTimestamp(),
    rosterUpdatedAtIso: savedAt,
    updatedAt: firebase.serverTimestamp(),
    updatedAtIso: savedAt
  };
  console.info("[Unser Dorf Family Z cleanup] Writing cleaned Family Z payload.", {
    path: villagePath,
    payload: {
      ...cleanedVillagePayload,
      updatedAt: "[serverTimestamp]"
    }
  });
	  traceVillageWrite("cleanupFamilyZKeepOnlyCurrentUser", "developer Family Z keep-current cleanup", DEFAULT_GROUP_ID, cleanedVillagePayload, {
	    currentFirestoreVillageDocument: true,
	    currentUserDocument: true,
	    profileStores: true,
	    localStorage: true,
	    legacyMigration: false,
	    explicitVillageJoin: false,
	    adminCleanup: true
	  });
	  await firebase.setDoc(villageRef, cleanedVillagePayload);

  userProfiles[preview.keepProfileId] = keepProfile;
  await firebase.setDoc(userRef, {
    uid: firebaseAuthUser.uid,
    email: firebaseAuthUser.email || "",
    displayName: getVillageDisplayName(keepProfile),
	    villageId: DEFAULT_GROUP_ID,
	    villageName: familyZInfo?.name || "Family Z",
	    role: "developer",
	    protectedAccount: true,
	    legacyRosterMigrationVersion: 1,
	    currentGroup: DEFAULT_GROUP_ID,
    currentProfile: preview.keepProfileId,
    profiles: userProfiles,
    updatedAt: firebase.serverTimestamp(),
    updatedAtIso: savedAt
  }, { merge: true });

  await deleteLegacySharedProfileStoreReferences(firebase, preview.removedMembers.map((member) => member.profileId), savedAt);
  if (profileStore?.profiles) {
    profileStore.profiles[preview.keepProfileId] = keepProfile;
    preview.removedMembers.forEach((member) => {
      delete profileStore.profiles[member.profileId];
    });
  }
  if (profileStore?.groups?.[DEFAULT_GROUP_ID]) {
    profileStore.groups[DEFAULT_GROUP_ID].memberIds = [preview.keepProfileId];
  }
	  profileStore.currentGroup = DEFAULT_GROUP_ID;
	  profileStore.currentProfile = preview.keepProfileId;
	  profileStore.legacyRosterMigrationVersion = 1;
  currentGroupId = DEFAULT_GROUP_ID;
  currentProfileId = preview.keepProfileId;
  saveProfileStore();

  const afterCleanupSnapshot = await readFirestoreWithDebug(
    () => firebase.getDocFromServer(villageRef),
    {
      operation: "read Family Z immediately after keep-current cleanup",
      path: villagePath,
      keepProfileId: preview.keepProfileId
    }
  );
  console.info("[Unser Dorf Family Z cleanup] Village document after cleanup write.", {
    path: villagePath,
    data: afterCleanupSnapshot.exists() ? afterCleanupSnapshot.data() : null
  });

  const verification = await verifyFamilyZCleanupResult(
    firebase,
    preview.keepProfileId,
    preview.keepUid,
    preview.removedMembers.map((member) => member.profileId)
  );
  await renderDeveloperToolsPage();
  refreshVillageMembershipUi();
  if (!verification.ok) {
    setDeveloperToolsStatus(
      `Family Z cleanup warning: ${verification.warnings.join(" ")} Refresh Developer Tools before continuing.`,
      true
    );
  } else {
    setDeveloperToolsStatus(
      `✓ Family Z cleanup complete.\n\nRemoved:\n${removeCount} stale member${removeCount === 1 ? "" : "s"}\n\nRemaining:\n${verification.memberCount} member${verification.memberCount === 1 ? "" : "s"}\n\nCurrent Mineko account preserved.`
    );
  }
}

async function verifyFamilyZCleanupResult(firebase, keepProfileId, keepUid, removedProfileIds = []) {
  const warnings = [];
  const [userSnapshot, villageSnapshot] = await Promise.all([
    readFirestoreWithDebug(
      () => firebase.getDocsFromServer(getFirebaseUsersCollectionRef(firebase)),
      {
        operation: "verify developer users collection after Family Z cleanup",
        path: getFirebaseUsersCollectionPath(firebase)
      }
    ),
    readFirestoreWithDebug(
      () => firebase.getDocFromServer(getFirebaseVillageDocRef(firebase, DEFAULT_GROUP_ID)),
      {
        operation: "verify Family Z village document after cleanup",
        path: getFirebaseVillageDocPath(firebase, DEFAULT_GROUP_ID)
      }
    )
  ]);
  const validUserIndex = createValidUserIndex(userSnapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    data: docSnapshot.data() || {}
  })));
  const villageData = villageSnapshot.exists() ? villageSnapshot.data() || {} : {};
  const group = createGroupData(DEFAULT_GROUPS.find((item) => item.id === DEFAULT_GROUP_ID), villageData.group || {});
  const profiles = villageData.profiles || {};
  const memberProfiles = villageData.memberProfiles || {};
  const memberIds = normalizeProfileIdList(group.memberIds || []);
  const topLevelMemberIds = normalizeProfileIdList(villageData.memberIds || []);
  const profileIds = normalizeProfileIdList(Object.keys(profiles));
  const memberProfileIds = normalizeProfileIdList(Object.keys(memberProfiles));
  const combinedMemberIds = normalizeProfileIdList([...memberIds, ...topLevelMemberIds, ...profileIds, ...memberProfileIds]);
  const ownerUids = combinedMemberIds
    .map((profileId) => String((profiles[profileId] || memberProfiles[profileId])?.ownerUid || "").trim())
    .filter(Boolean);
  const duplicateUidCount = ownerUids.length - new Set(ownerUids).size;
  const invalidMembers = combinedMemberIds.filter((profileId) => {
    const profile = profiles[profileId] || memberProfiles[profileId];
    const ownerUid = String(profile?.ownerUid || "").trim();
    return !profile
      || !validUserIndex.validProfileIds.has(profileId)
      || !ownerUid
      || !validUserIndex.validUids.has(ownerUid);
  });

  if (!villageSnapshot.exists()) warnings.push("Family Z village document was not found.");
  if (memberIds.length !== 1 || memberIds[0] !== keepProfileId) warnings.push("memberIds does not contain only the current Mineko profile.");
  if (topLevelMemberIds.length && (topLevelMemberIds.length !== 1 || topLevelMemberIds[0] !== keepProfileId)) warnings.push("Top-level memberIds does not contain only the current Mineko profile.");
  if (profileIds.length !== 1 || profileIds[0] !== keepProfileId) warnings.push("Village profiles does not contain only the current Mineko profile.");
  if (memberProfileIds.length && (memberProfileIds.length !== 1 || memberProfileIds[0] !== keepProfileId)) warnings.push("Village memberProfiles does not contain only the current Mineko profile.");
  if (!profiles[keepProfileId]) warnings.push("The current Mineko profile is missing from Family Z profiles.");
  if (String(profiles[keepProfileId]?.ownerUid || "") !== keepUid) warnings.push("The remaining Family Z member UID does not match the current Firebase UID.");
  if (duplicateUidCount > 0) warnings.push("Duplicate member UIDs remain in Family Z.");
  if (invalidMembers.length) warnings.push(`Invalid member references remain: ${invalidMembers.join(", ")}.`);

  const removedSet = new Set(normalizeProfileIdList(removedProfileIds));
  const removedStillInVillage = combinedMemberIds.filter((profileId) => removedSet.has(profileId));
  if (removedStillInVillage.length) warnings.push(`Removed members still appear in Family Z: ${removedStillInVillage.join(", ")}.`);

  const legacySnapshot = await readFirestoreWithDebug(
    () => firebase.getDocsFromServer(getFirebaseProfileStoresCollectionRef(firebase)),
    {
      operation: "verify legacy profileStores after Family Z cleanup",
      path: getFirebaseProfileStoresCollectionPath(firebase),
      removedProfileIds: [...removedSet]
    }
  );
  legacySnapshot.docs.forEach((docSnapshot) => {
    const data = docSnapshot.data() || {};
    const legacyStore = data.profileStore || data.profile_store;
    if (!legacyStore?.profiles) return;
    const staleReferences = findProfileIdsInLegacyStore(legacyStore, removedSet);
    if (staleReferences.length) {
      warnings.push(`${getFirebaseProfileStoreDocPath(firebase, docSnapshot.id)} still references ${staleReferences.join(", ")}.`);
    }
  });

  console.info("[Unser Dorf Family Z cleanup] Verification result.", {
    path: getFirebaseVillageDocPath(firebase, DEFAULT_GROUP_ID),
    serverMemberCount: combinedMemberIds.length,
    renderedMemberCount: getCurrentGroupProfiles(profileStore).length,
    memberIds,
    topLevelMemberIds,
    profileIds,
    memberProfileIds,
    removedProfileIds: [...removedSet],
    warnings
  });
  return {
    ok: warnings.length === 0,
    warnings,
    memberCount: combinedMemberIds.length
  };
}

function findProfileIdsInLegacyStore(legacyStore, profileIdSet) {
  const matches = new Set();
  if (!profileIdSet?.size) return [];
  Object.keys(legacyStore.profiles || {}).forEach((profileId) => {
    if (profileIdSet.has(profileId)) matches.add(profileId);
  });
  Object.keys(legacyStore.memberProfiles || {}).forEach((profileId) => {
    if (profileIdSet.has(profileId)) matches.add(profileId);
  });
  normalizeProfileIdList(legacyStore.memberIds || []).forEach((profileId) => {
    if (profileIdSet.has(profileId)) matches.add(profileId);
  });
  Object.values(legacyStore.groups || {}).forEach((group) => {
    Object.keys(group.profiles || {}).forEach((profileId) => {
      if (profileIdSet.has(profileId)) matches.add(profileId);
    });
    Object.keys(group.memberProfiles || {}).forEach((profileId) => {
      if (profileIdSet.has(profileId)) matches.add(profileId);
    });
    normalizeProfileIdList(group.memberIds || []).forEach((profileId) => {
      if (profileIdSet.has(profileId)) matches.add(profileId);
    });
  });
  return [...matches];
}

function refreshVillageMembershipUi() {
  renderVillageMembersPreview();
  renderVillageMembersPage();
  renderDashboard();
}

function confirmFamilyZCleanup(removeCount) {
  return new Promise((resolve) => {
    const overlay = document.createElement("section");
    overlay.className = "developer-confirmation-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Confirm Family Z cleanup");
    const card = document.createElement("article");
    card.className = "developer-confirmation-card";
    const actions = document.createElement("div");
    actions.className = "developer-confirmation-actions";
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "ghost-button";
    cancelButton.textContent = "Cancel";
    const cleanButton = document.createElement("button");
    cleanButton.type = "button";
    cleanButton.className = "danger-button";
    cleanButton.textContent = "Clean Family Z";
    actions.replaceChildren(cancelButton, cleanButton);
    card.replaceChildren(
      createTextElement("h3", "", `Remove ${removeCount} Family Z member${removeCount === 1 ? "" : "s"}?`),
      createTextElement("p", "", "The current Mineko developer account will be kept."),
      createTextElement("p", "", "This action removes old village membership records only."),
      createTextElement("p", "", "Firebase Authentication accounts are NOT deleted."),
      actions
    );
    overlay.append(card);
    document.body.append(overlay);

    let handleKeydown = null;
    const finish = (confirmed) => {
      if (handleKeydown) document.removeEventListener("keydown", handleKeydown);
      overlay.remove();
      resolve(confirmed);
    };
    cancelButton.addEventListener("click", () => finish(false), { once: true });
    cleanButton.addEventListener("click", () => finish(true), { once: true });
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) finish(false);
    });
    handleKeydown = (event) => {
      if (event.key === "Escape") {
        finish(false);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    cleanButton.focus();
  });
}

function openResetMyLearningProgressDialog(options = {}) {
  return new Promise((resolve) => {
    const includePersonalRewardsByDefault = Boolean(options.includePersonalRewards);
    const overlay = document.createElement("section");
    overlay.className = "developer-confirmation-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Reset learning progress");
    const card = document.createElement("article");
    card.className = "developer-confirmation-card";
    const checklist = document.createElement("div");
    checklist.className = "developer-definition-list";
    const personalRewardsId = "resetPersonalRewards";
    checklist.replaceChildren(
      createResetChecklistRow("Flashcard progress", true, true),
      createResetChecklistRow("Vocabulary and Article Review progress", true, true),
      createResetChecklistRow("Current study set", true, true),
      createResetChecklistRow("Difficult words", true, true),
      createResetChecklistRow("Streak and learning milestones", true, true),
      createResetChecklistRow("Personal coins and Austria Album", includePersonalRewardsByDefault, false, personalRewardsId)
    );
    const keepList = document.createElement("ul");
    keepList.className = "developer-tools-empty";
    ["Account and login", "Display name", "Developer role", "Family Z membership", "Village-wide progress"].forEach((item) => {
      const row = document.createElement("li");
      row.textContent = `✓ ${item}`;
      keepList.append(row);
    });
    const confirmationInput = document.createElement("input");
    confirmationInput.type = "text";
    confirmationInput.placeholder = "Type RESET";
    confirmationInput.autocomplete = "off";
    const actions = document.createElement("div");
    actions.className = "developer-confirmation-actions";
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "ghost-button";
    cancelButton.textContent = "Cancel";
    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "danger-button";
    resetButton.textContent = "Reset Progress";
    resetButton.disabled = true;
    actions.replaceChildren(cancelButton, resetButton);
    const resetTitle = options.firstTimeUserReset ? "Replay First Learning Experience?" : "Reset Learning Progress?";
    const resetMessage = options.firstTimeUserReset
      ? "This will reset learning progress and show the first-time learning experience again. Your account, profile, and village membership will be kept."
      : "Your account, developer access, and village membership will be kept.";
    card.replaceChildren(
      createTextElement("h3", "", resetTitle),
      createTextElement("p", "", resetMessage),
      createTextElement("h4", "", "Reset"),
      checklist,
      createTextElement("h4", "", "Keep"),
      keepList,
      confirmationInput,
      actions
    );
    overlay.append(card);
    document.body.append(overlay);

    let handleKeydown = null;
    const finish = (confirmed) => {
      if (handleKeydown) document.removeEventListener("keydown", handleKeydown);
      const includePersonalRewards = Boolean(document.querySelector(`#${personalRewardsId}`)?.checked);
      overlay.remove();
      resolve({ confirmed, includePersonalRewards });
    };
    confirmationInput.addEventListener("input", () => {
      resetButton.disabled = confirmationInput.value.trim() !== "RESET";
    });
    cancelButton.addEventListener("click", () => finish(false), { once: true });
    resetButton.addEventListener("click", () => finish(true), { once: true });
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) finish(false);
    });
    handleKeydown = (event) => {
      if (event.key === "Escape") finish(false);
    };
    document.addEventListener("keydown", handleKeydown);
    confirmationInput.focus();
  }).then(async ({ confirmed, includePersonalRewards }) => {
    if (!confirmed) return;
    await resetCurrentDeveloperLearningProgress({
      includePersonalRewards,
      firstTimeUserReset: Boolean(options.firstTimeUserReset),
      successMessage: options.firstTimeUserReset
        ? "Replay First Learning Experience is ready. Sign back in to see the first-time learning flow."
        : ""
    });
  });
}

function openReplayFirstLearningExperienceDialog() {
  return new Promise((resolve) => {
    const overlay = document.createElement("section");
    overlay.className = "developer-confirmation-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Replay first learning experience");
    const card = document.createElement("article");
    card.className = "developer-confirmation-card";
    const actions = document.createElement("div");
    actions.className = "developer-confirmation-actions";
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "ghost-button";
    cancelButton.textContent = "Cancel";
    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "danger-button";
    resetButton.textContent = "Reset";
    actions.replaceChildren(cancelButton, resetButton);
    card.replaceChildren(
      createTextElement("h3", "", "Replay First Learning Experience?"),
      createTextElement("p", "", "This will reset learning progress and show the first-time learning introduction again. Your account, display name, Family membership, and developer access will remain intact."),
      actions
    );
    overlay.append(card);
    document.body.append(overlay);

    let handleKeydown = null;
    const finish = (confirmed) => {
      if (handleKeydown) document.removeEventListener("keydown", handleKeydown);
      overlay.remove();
      resolve(confirmed);
    };
    cancelButton.addEventListener("click", () => finish(false), { once: true });
    resetButton.addEventListener("click", () => finish(true), { once: true });
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) finish(false);
    });
    handleKeydown = (event) => {
      if (event.key === "Escape") finish(false);
    };
    document.addEventListener("keydown", handleKeydown);
    resetButton.focus();
  }).then(async (confirmed) => {
    if (!confirmed) return;
    await resetCurrentDeveloperLearningProgress({
      includePersonalRewards: true,
      firstTimeUserReset: true,
      successMessage: "Replay First Learning Experience is ready. Sign back in to see the first-time learning flow."
    });
  });
}

function openResetFamilyZProgressDialog(data) {
  return new Promise((resolve) => {
    const familyZ = data.villages.find((village) => village.id === DEFAULT_GROUP_ID);
    const overlay = document.createElement("section");
    overlay.className = "developer-confirmation-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Reset Family Z progress");
    const card = document.createElement("article");
    card.className = "developer-confirmation-card";
    const keepList = document.createElement("ul");
    keepList.className = "developer-tools-empty";
    ["Village name", "Password/join code", `${familyZ?.memberIds?.length || 0} current member${(familyZ?.memberIds?.length || 0) === 1 ? "" : "s"}`, "Admin/developer access"].forEach((item) => {
      const row = document.createElement("li");
      row.textContent = `✓ ${item}`;
      keepList.append(row);
    });
    const resetList = document.createElement("ul");
    resetList.className = "developer-tools-empty";
    ["Village coins", "Member contribution totals", "Town center progress", "Village Memories", "Collective rewards", "Recent contributions"].forEach((item) => {
      const row = document.createElement("li");
      row.textContent = `✓ ${item}`;
      resetList.append(row);
    });
    const confirmationInput = document.createElement("input");
    confirmationInput.type = "text";
    confirmationInput.placeholder = "Type RESET FAMILY Z";
    confirmationInput.autocomplete = "off";
    const actions = document.createElement("div");
    actions.className = "developer-confirmation-actions";
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "ghost-button";
    cancelButton.textContent = "Cancel";
    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "danger-button";
    resetButton.textContent = "Reset Family Z";
    resetButton.disabled = true;
    actions.replaceChildren(cancelButton, resetButton);
    card.replaceChildren(
      createTextElement("h3", "", "Reset Family Z progress?"),
      createTextElement("p", "", "This will return the village to its starting state so new members can unlock rewards together."),
      createTextElement("h4", "", "Family Z will keep"),
      keepList,
      createTextElement("h4", "", "Family Z will reset"),
      resetList,
      confirmationInput,
      actions
    );
    overlay.append(card);
    document.body.append(overlay);

    let handleKeydown = null;
    const finish = (confirmed) => {
      if (handleKeydown) document.removeEventListener("keydown", handleKeydown);
      overlay.remove();
      resolve(confirmed);
    };
    confirmationInput.addEventListener("input", () => {
      resetButton.disabled = confirmationInput.value.trim() !== "RESET FAMILY Z";
    });
    cancelButton.addEventListener("click", () => finish(false), { once: true });
    resetButton.addEventListener("click", () => finish(true), { once: true });
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) finish(false);
    });
    handleKeydown = (event) => {
      if (event.key === "Escape") finish(false);
    };
    document.addEventListener("keydown", handleKeydown);
    confirmationInput.focus();
  }).then(async (confirmed) => {
    if (!confirmed) return;
    await resetFamilyZProgressForFreshTesting();
  });
}

function createResetChecklistRow(label, checked = true, locked = false, id = "") {
  const wrapper = document.createElement("label");
  wrapper.className = "remember-email-option";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = checked;
  input.disabled = locked;
  if (id) input.id = id;
  wrapper.replaceChildren(input, document.createTextNode(label));
  return wrapper;
}

async function resetCurrentDeveloperLearningProgress(options = {}) {
  if (!firebaseAuthUser) {
    setDeveloperToolsStatus("Sign in before resetting learning progress.", true);
    return;
  }
  const currentProfile = getCurrentProfile();
  const profileId = currentProfileId || profileStore?.currentProfile || getFirebaseProfileId(firebaseAuthUser);
  if (!currentProfile || !profileId) {
    setDeveloperToolsStatus("Could not find the current developer profile.", true);
    return;
  }
  const firebase = await getFirebaseSyncApi();
  const savedAt = new Date().toISOString();
  const userRef = getFirebaseUserDocRef(firebase, firebaseAuthUser.uid);
  const currentUserSnapshot = await readFirestoreWithDebug(
    () => firebase.getDocFromServer(userRef),
    {
      operation: "read current developer before learning reset",
      path: getFirebaseUserDocPath(firebase, firebaseAuthUser.uid)
    }
  );
  const currentUserData = currentUserSnapshot.exists() ? currentUserSnapshot.data() || {} : {};
  const nextResetVersion = Math.max(
    normalizeCounter(currentUserData.progressResetVersion),
    normalizeCounter(currentProfile.progressResetVersion)
  ) + 1;
  const resetProfile = createLearningResetProfile(currentProfile, {
    includePersonalRewards: Boolean(options.includePersonalRewards),
    firstTimeUserReset: Boolean(options.firstTimeUserReset),
    progressResetVersion: nextResetVersion,
    progressResetAtIso: savedAt
  });
  resetProfile.id = profileId;
  resetProfile.ownerUid = firebaseAuthUser.uid;
  resetProfile.ownerEmail = firebaseAuthUser.email || "";
  resetProfile.role = "developer";
  resetProfile.protectedAccount = true;
  resetProfile.villageId = currentProfile.villageId || currentGroupId || DEFAULT_GROUP_ID;

  const userPayload = {
    activeStudySet: normalizeActiveStudySet(resetProfile.activeStudySet),
    difficultWords: normalizeDifficultWords(resetProfile.difficultWords),
    progressResetVersion: nextResetVersion,
    progressResetAt: firebase.serverTimestamp(),
    progressResetAtIso: savedAt,
    role: "developer",
    protectedAccount: true,
    currentProfile: profileId,
    currentGroup: resetProfile.villageId || DEFAULT_GROUP_ID,
    profiles: {
      [profileId]: sanitizeProfileStoreForSync(resetProfile)
    },
    updatedAt: firebase.serverTimestamp(),
    updatedAtIso: savedAt
  };
  if (options.firstTimeUserReset) {
    Object.assign(userPayload, createFirstTimeExperienceResetPayload("", savedAt));
  }
  traceUserProgressWrite("resetCurrentDeveloperLearningProgress", "explicit developer reset", userPayload, {
    firestoreUserDocument: true,
    inMemoryProfile: false,
    localStorage: false,
    legacyProfileStore: false,
    explicitQuizReward: false,
    explicitDeveloperReset: true
  });
  await firebase.setDoc(userRef, userPayload, { merge: true });
  if (firebase.updateDoc) {
    const profilePath = `profiles.${profileId}`;
    const overwritePayload = {
      activeStudySet: {},
      difficultWords: {},
      progressResetVersion: nextResetVersion,
      progressResetAt: firebase.serverTimestamp(),
      progressResetAtIso: savedAt,
      [`${profilePath}.dailyChallenge`]: {},
      [`${profilePath}.streak`]: {},
      [`${profilePath}.villageContribution`]: {},
      [`${profilePath}.achievementsUnlocked`]: [],
      [`${profilePath}.decks`]: {},
      [`${profilePath}.progress`]: {},
      [`${profilePath}.vocabularyProgress`]: {},
      [`${profilePath}.articleProgress`]: {},
      [`${profilePath}.difficultWords`]: {},
      [`${profilePath}.nounVerbProgress`]: {},
      [`${profilePath}.meaningMatchProgress`]: {},
      [`${profilePath}.prepositionProgress`]: {},
      [`${profilePath}.recentMeaningMatchItems`]: [],
      [`${profilePath}.vocabularyReviewStats`]: {},
      [`${profilePath}.challengeSessionsCompleted`]: 0,
      [`${profilePath}.flashcardSessions`]: {},
      [`${profilePath}.flashcardsReviewed`]: 0,
      [`${profilePath}.activeStudySet`]: {},
      [`${profilePath}.learningPreferences`]: resetProfile.learningPreferences,
      [`${profilePath}.positions`]: {},
      [`${profilePath}.history`]: [],
      [`${profilePath}.lastStudyDate`]: "",
      [`${profilePath}.learningIntroSeen`]: false,
      [`${profilePath}.progressResetVersion`]: nextResetVersion,
      [`${profilePath}.progressResetAtIso`]: savedAt,
      updatedAt: firebase.serverTimestamp(),
      updatedAtIso: savedAt
    };
    if (options.firstTimeUserReset) {
      Object.assign(overwritePayload, createFirstTimeExperienceResetPayload(profilePath, savedAt));
    }
    if (options.includePersonalRewards) {
      overwritePayload[`${profilePath}.coins`] = 0;
      overwritePayload[`${profilePath}.contributionCoins`] = 0;
      overwritePayload[`${profilePath}.levelBonusesAwarded`] = [];
      overwritePayload[`${profilePath}.austriaAlbumSeenRewards`] = [];
    }
    traceUserProgressWrite("resetCurrentDeveloperLearningProgress", "explicit developer reset field overwrite", overwritePayload, {
      firestoreUserDocument: true,
      inMemoryProfile: false,
      localStorage: false,
      legacyProfileStore: false,
      explicitQuizReward: false,
      explicitDeveloperReset: true
    });
    await firebase.updateDoc(userRef, overwritePayload);
  }

  if (resetProfile.villageId) {
    const villagePayload = {
      profiles: {
        [profileId]: sanitizeProfileStoreForSync(resetProfile)
      },
      memberProfiles: {
        [profileId]: sanitizeProfileStoreForSync(resetProfile)
      },
      updatedAt: firebase.serverTimestamp(),
      updatedAtIso: savedAt
    };
    traceVillageWrite("resetCurrentDeveloperLearningProgress", "developer reset current learning progress", resetProfile.villageId, villagePayload, {
      currentFirestoreVillageDocument: true,
      currentUserDocument: true,
      profileStores: false,
      localStorage: false,
      legacyMigration: false,
      explicitVillageJoin: false,
      adminCleanup: true
    });
    await firebase.setDoc(getFirebaseVillageDocRef(firebase, resetProfile.villageId), villagePayload, { merge: true });
  }

  applyCurrentLearningResetLocally(profileId, resetProfile);
  clearLocalLearningState(options);
  const verification = await verifyCurrentDeveloperLearningReset(firebase, profileId, options);
  await refreshAfterDeveloperReset();
  if (!verification.ok) {
    setDeveloperToolsStatus(`Learning reset warning: ${verification.warnings.join(" ")}`, true);
  } else {
    setDeveloperToolsStatus(options.successMessage || "Learning progress reset successfully.");
  }
}

function createFirstTimeExperienceResetPayload(profilePath = "", savedAt = new Date().toISOString()) {
  const prefix = profilePath ? `${profilePath}.` : "";
  return {
    [`${prefix}learningIntroSeen`]: false,
    [`${prefix}onboardingCompleted`]: false,
    [`${prefix}hasSeenWelcome`]: false,
    [`${prefix}hasSeenHowItWorks`]: false,
    [`${prefix}hasDismissedHowItWorks`]: false,
    [`${prefix}hasChosenFirstLevel`]: false,
    [`${prefix}hasCompletedFirstFlashcards`]: false,
    [`${prefix}hasStartedReviews`]: false,
    [`${prefix}hasSeenContinueLearning`]: false,
    [`${prefix}forceFirstTimeExperience`]: true,
    [`${prefix}firstTimeExperienceResetAtIso`]: savedAt
  };
}

function createLearningResetProfile(profile, options = {}) {
  const base = {
    ...profile,
    dailyChallenge: {},
    streak: {},
    villageContribution: {},
    achievementsUnlocked: [],
    decks: {},
    progress: {},
    vocabularyProgress: {},
    articleProgress: {},
    difficultWords: {},
    nounVerbProgress: {},
    meaningMatchProgress: {},
    prepositionProgress: {},
    recentMeaningMatchItems: [],
    vocabularyReviewStats: {},
    challengeSessionsCompleted: 0,
    flashcardSessions: {},
    flashcardsReviewed: 0,
    activeStudySet: {},
    learningPreferences: normalizeLearningPreferences({
      studyGoal: LEARN_GERMAN_DEFAULT_GOAL,
      level: "",
      category: "",
      updatedAt: options.progressResetAtIso || new Date().toISOString()
    }),
    positions: {},
    history: [],
    lastStudyDate: "",
    learningIntroSeen: false,
    onboardingCompleted: false,
    hasSeenWelcome: false,
    hasSeenHowItWorks: false,
    hasDismissedHowItWorks: false,
    hasChosenFirstLevel: false,
    hasCompletedFirstFlashcards: false,
    hasStartedReviews: false,
    hasSeenContinueLearning: false,
    forceFirstTimeExperience: Boolean(options.firstTimeUserReset),
    registeredIntroCompleted: profile.registeredIntroCompleted !== false,
    firstTimeExperienceResetAtIso: options.firstTimeUserReset ? (options.progressResetAtIso || "") : (profile.firstTimeExperienceResetAtIso || ""),
    progressResetVersion: normalizeCounter(options.progressResetVersion),
    progressResetAtIso: options.progressResetAtIso || ""
  };
  if (options.includePersonalRewards) {
    base.coins = 0;
    base.contributionCoins = 0;
    base.levelBonusesAwarded = [];
    base.austriaAlbumSeenRewards = [];
  }
  return normalizeProfileData(base, {
    id: profile.id || "",
    name: getVillageDisplayName(profile),
    emoji: profile.emoji || "🌿",
    avatar: profile.avatar || "",
    password: profile.password || ""
  });
}

function applyCurrentLearningResetLocally(profileId, resetProfile) {
  if (profileStore?.profiles) profileStore.profiles[profileId] = resetProfile;
  progress = {};
  vocabularyProgress = {};
  articleProgress = {};
  difficultWords = {};
  nounVerbProgress = {};
  meaningMatchProgress = {};
  prepositionProgress = {};
  recentMeaningMatchItems = [];
  recentVocabularyWords = [];
  flashcardStudyCards = [];
  flashcardStudyIndex = 0;
  currentIndex = 0;
  vocabularyReviewCurrentIndex = 0;
  challengeSession = createEmptyChallengeSession();
  saveProfileStore({ localOnly: true });
}

function clearLocalLearningState(options = {}) {
  [
    STORAGE_KEY,
    ARTICLE_STORAGE_KEY,
    LEARN_GERMAN_LEVEL_STORAGE_KEY,
    LEARN_GERMAN_CATEGORY_STORAGE_KEY,
    LEARN_GERMAN_GOAL_STORAGE_KEY,
    ...(options.firstTimeUserReset ? [DEVICE_ONBOARDING_KEY] : [])
  ].forEach((key) => {
    try {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    } catch (error) {
      console.warn("[Unser Dorf reset] Could not clear local learning key.", { key, error });
    }
  });
}

async function verifyCurrentDeveloperLearningReset(firebase, profileId, options = {}) {
  const warnings = [];
  const snapshot = await readFirestoreWithDebug(
    () => firebase.getDocFromServer(getFirebaseUserDocRef(firebase, firebaseAuthUser.uid)),
    {
      operation: "verify current developer learning reset",
      path: getFirebaseUserDocPath(firebase, firebaseAuthUser.uid)
    }
  );
  const data = snapshot.exists() ? snapshot.data() || {} : {};
  const profile = data.profiles?.[profileId] || {};
  if (!snapshot.exists()) warnings.push("Current user document was not found.");
  if (sanitizeUserRole(data.role || profile.role) !== "developer") warnings.push("Developer role was not preserved.");
  if (!Boolean(data.protectedAccount || profile.protectedAccount)) warnings.push("Protected account flag was not preserved.");
  if (normalizeActiveStudySet(data.activeStudySet).wordIds.length) warnings.push("Top-level activeStudySet was not cleared.");
  if (Object.keys(normalizeDifficultWords(data.difficultWords)).length) warnings.push("Top-level difficultWords was not cleared.");
  if (Object.keys(normalizeMeaningProgress(profile.progress || {})).length) warnings.push("Flashcard progress was not cleared.");
  if (Object.keys(normalizeVocabularyProgress(profile.vocabularyProgress || {})).length) warnings.push("Vocabulary Review progress was not cleared.");
  if (Object.keys(normalizeArticleProgress(profile.articleProgress || {})).length) warnings.push("Article Review progress was not cleared.");
  if (Object.keys(normalizeDifficultWords(profile.difficultWords || {})).length) warnings.push("Difficult words were not cleared.");
  if (normalizeActiveStudySet(profile.activeStudySet).wordIds.length) warnings.push("Profile activeStudySet was not cleared.");
  if (options.firstTimeUserReset && Boolean(profile.learningIntroSeen || data.learningIntroSeen)) warnings.push("How Learning Works intro flag was not reset.");
  if (options.firstTimeUserReset && Boolean(profile.hasSeenContinueLearning || data.hasSeenContinueLearning)) warnings.push("Continue Learning first-time flag was not reset.");
  if (options.firstTimeUserReset && !Boolean(profile.forceFirstTimeExperience || data.forceFirstTimeExperience)) warnings.push("First-time experience force flag was not set.");
  if (options.includePersonalRewards && normalizeCoinCount(profile.coins) !== 0) warnings.push("Personal coins were not reset.");
  if (options.includePersonalRewards && normalizeRewardIdList(profile.austriaAlbumSeenRewards).length) warnings.push("Austria Album progress was not reset.");
  console.info(RESET_VERIFICATION_PREFIX, {
    path: getFirebaseUserDocPath(firebase, firebaseAuthUser.uid),
    serverCoinValue: normalizeCoinCount(profile.coins),
    resetVersion: normalizeCounter(data.progressResetVersion || profile.progressResetVersion),
    fieldsCleared: {
      progress: Object.keys(profile.progress || {}).length === 0,
      vocabularyProgress: Object.keys(profile.vocabularyProgress || {}).length === 0,
      articleProgress: Object.keys(profile.articleProgress || {}).length === 0,
      difficultWords: Object.keys(profile.difficultWords || {}).length === 0,
      flashcardSessions: Object.keys(profile.flashcardSessions || {}).length === 0,
      activeStudySet: normalizeActiveStudySet(profile.activeStudySet).wordIds.length === 0
    },
    preservedAccountFields: {
      uid: firebaseAuthUser.uid,
      email: firebaseAuthUser.email || "",
      role: sanitizeUserRole(data.role || profile.role),
      protectedAccount: Boolean(data.protectedAccount || profile.protectedAccount),
      villageId: profile.villageId || data.currentGroup || ""
    },
    localCacheCleared: true,
    verificationPassed: warnings.length === 0,
    warnings
  });
  return { ok: warnings.length === 0, warnings };
}

async function resetFamilyZProgressForFreshTesting() {
  const firebase = await getFirebaseSyncApi();
  const savedAt = new Date().toISOString();
  const villageRef = getFirebaseVillageDocRef(firebase, DEFAULT_GROUP_ID);
  const villagePath = getFirebaseVillageDocPath(firebase, DEFAULT_GROUP_ID);
  const snapshot = await readFirestoreWithDebug(
    () => firebase.getDocFromServer(villageRef),
    {
      operation: "read Family Z before progress reset",
      path: villagePath
    }
  );
  if (!snapshot.exists()) {
    setDeveloperToolsStatus("Family Z village document was not found.", true);
    return;
  }
  const data = snapshot.data() || {};
  const groupInfo = DEFAULT_GROUPS.find((group) => group.id === DEFAULT_GROUP_ID);
  const group = createGroupData(groupInfo, data.group || {});
  const existingProfiles = {
    ...(data.memberProfiles || {}),
    ...(data.profiles || {})
  };
  const memberIds = normalizeGroupMemberIds([
    ...(group.memberIds || []),
    ...(data.memberIds || []),
    ...Object.keys(data.memberProfiles || {}),
    ...Object.keys(existingProfiles)
  ]);
  const resetProfiles = {};
  memberIds.forEach((profileId) => {
    const profile = existingProfiles[profileId] || data.memberProfiles?.[profileId] || profileStore?.profiles?.[profileId] || {};
    if (!profile || !Object.keys(profile).length) return;
    resetProfiles[profileId] = createFamilyZProgressResetProfile(profile, profileId);
  });
  group.memberIds = normalizeGroupMemberIds(memberIds.filter((profileId) => resetProfiles[profileId]));
  group.villageAlbumSeenRewards = [];
  group.townCenterStagesSeen = [];
  group.familyLevelsReached = [];
  group.familyAchievementsUnlocked = [];
  const villagePayload = {
    group,
    profiles: sanitizeProfileStoreForSync(resetProfiles),
    memberProfiles: sanitizeProfileStoreForSync(resetProfiles),
    memberIds: group.memberIds,
    villageAlbumSeenRewards: [],
    townCenterStagesSeen: [],
    familyLevelsReached: [],
    familyAchievementsUnlocked: [],
    progressResetAt: firebase.serverTimestamp(),
    progressResetAtIso: savedAt,
    updatedAt: firebase.serverTimestamp(),
    updatedAtIso: savedAt
  };
  traceVillageWrite("resetFamilyZProgressForFreshTesting", "developer reset Family Z progress", DEFAULT_GROUP_ID, villagePayload, {
    currentFirestoreVillageDocument: true,
    currentUserDocument: true,
    profileStores: false,
    localStorage: false,
    legacyMigration: false,
    explicitVillageJoin: false,
    adminCleanup: true
  });
  await firebase.setDoc(villageRef, villagePayload, { merge: true });
  await updateFamilyZMemberUserDocsForProgressReset(firebase, resetProfiles, savedAt);
  applyFamilyZProgressResetLocally(group, resetProfiles);
  const verification = await verifyFamilyZProgressReset(firebase, group.memberIds);
  await refreshAfterDeveloperReset();
  if (!verification.ok) {
    setDeveloperToolsStatus(`Family Z reset warning: ${verification.warnings.join(" ")}`, true);
  } else {
    setDeveloperToolsStatus("Family Z has been reset for fresh testing.");
  }
}

function createFamilyZProgressResetProfile(profile, profileId) {
  const resetProfile = normalizeProfileData(
    {
      ...profile,
      id: profileId,
      coins: 0,
      contributionCoins: 0,
      levelBonusesAwarded: [],
      villageContribution: {},
      familyLevelsReached: [],
      familyAchievementsUnlocked: [],
      history: []
    },
    {
      id: profileId,
      name: getVillageDisplayName(profile),
      emoji: profile.emoji || "🌿",
      avatar: profile.avatar || "",
      password: profile.password || ""
    }
  );
  resetProfile.villageId = DEFAULT_GROUP_ID;
  return resetProfile;
}

async function updateFamilyZMemberUserDocsForProgressReset(firebase, resetProfiles, savedAt) {
  for (const [profileId, resetProfile] of Object.entries(resetProfiles)) {
    const ownerUid = String(resetProfile.ownerUid || "").trim();
    if (!ownerUid) continue;
    const userRef = getFirebaseUserDocRef(firebase, ownerUid);
    const snapshot = await readFirestoreWithDebug(
      () => firebase.getDoc(userRef),
      {
        operation: "read Family Z member user before progress reset",
        path: getFirebaseUserDocPath(firebase, ownerUid),
        profileId
      }
    );
    if (!snapshot.exists()) continue;
    const data = snapshot.data() || {};
    const currentProfile = data.profiles?.[profileId];
    const nextProfile = currentProfile
      ? createFamilyZProgressResetProfile(currentProfile, profileId)
      : resetProfile;
    await firebase.setDoc(userRef, {
      profiles: {
        [profileId]: sanitizeProfileStoreForSync(nextProfile)
      },
      updatedAt: firebase.serverTimestamp(),
      updatedAtIso: savedAt
    }, { merge: true });
  }
}

function applyFamilyZProgressResetLocally(group, resetProfiles) {
  if (!profileStore) return;
  profileStore.villageAlbumSeenRewards = [];
  profileStore.townCenterStagesSeen = [];
  profileStore.familyLevelsReached = [];
  profileStore.familyAchievementsUnlocked = [];
  if (profileStore.groups?.[DEFAULT_GROUP_ID]) {
    profileStore.groups[DEFAULT_GROUP_ID] = {
      ...profileStore.groups[DEFAULT_GROUP_ID],
      ...group,
      villageAlbumSeenRewards: [],
      townCenterStagesSeen: [],
      familyLevelsReached: [],
      familyAchievementsUnlocked: []
    };
  }
  Object.entries(resetProfiles).forEach(([profileId, resetProfile]) => {
    if (profileStore.profiles?.[profileId]) {
      profileStore.profiles[profileId] = resetProfile;
    }
  });
  saveProfileStore({ localOnly: true });
  saveLearningPreferencesToCloudNow(profile.learningPreferences);
}

async function verifyFamilyZProgressReset(firebase, expectedMemberIds = []) {
  const warnings = [];
  const snapshot = await readFirestoreWithDebug(
    () => firebase.getDocFromServer(getFirebaseVillageDocRef(firebase, DEFAULT_GROUP_ID)),
    {
      operation: "verify Family Z progress reset",
      path: getFirebaseVillageDocPath(firebase, DEFAULT_GROUP_ID)
    }
  );
  const data = snapshot.exists() ? snapshot.data() || {} : {};
  const group = createGroupData(DEFAULT_GROUPS.find((item) => item.id === DEFAULT_GROUP_ID), data.group || {});
  const profiles = data.profiles || {};
  const memberIds = normalizeGroupMemberIds([...(group.memberIds || []), ...(data.memberIds || [])]);
  const expected = normalizeGroupMemberIds(expectedMemberIds);
  const villageCoins = getFamilyCoinTotal(profiles);
  if (!snapshot.exists()) warnings.push("Family Z village document was not found after reset.");
  if (villageCoins !== 0) warnings.push(`Village coins are ${villageCoins}, not 0.`);
  if (normalizeVillageAlbumSeenRewardIds(group.villageAlbumSeenRewards).length) warnings.push("Village Memories seen rewards were not cleared.");
  if (normalizeRewardIdList(group.townCenterStagesSeen).length) warnings.push("Town center seen stages were not cleared.");
  if (normalizeRewardIdList(group.familyLevelsReached).length) warnings.push("Collective level rewards were not cleared.");
  if (normalizeRewardIdList(group.familyAchievementsUnlocked).length) warnings.push("Collective achievement rewards were not cleared.");
  if (JSON.stringify(memberIds) !== JSON.stringify(expected)) warnings.push("Family Z member IDs changed during reset.");
  Object.entries(profiles).forEach(([profileId, profile]) => {
    if (normalizeCoinCount(profile.coins) !== 0) warnings.push(`${profileId} still has coins.`);
    if (normalizeCoinCount(profile.contributionCoins) !== 0) warnings.push(`${profileId} still has contribution coins.`);
    if (Array.isArray(profile.history) && profile.history.length) warnings.push(`${profileId} still has recent contribution history.`);
  });
  return { ok: warnings.length === 0, warnings };
}

async function refreshAfterDeveloperReset() {
  renderDashboard();
  renderVillageMembersPreview();
  renderVillageMembersPage();
  if (!els.achievementCollectionScreen?.classList.contains("hidden")) renderAchievementCollection(currentView || "austria-album");
  if (!els.learnGermanScreen?.classList.contains("hidden")) renderLearnGermanPage();
  await renderDeveloperToolsPage();
}

async function removeDeveloperUserFromVillage(user) {
  if (!user.villageId) {
    setDeveloperToolsStatus("This user is not currently attached to a village.", true);
    return;
  }
  const confirmed = window.confirm(`Remove ${user.displayName || user.email || user.profileId} from ${user.villageName || user.villageId}? This does not delete their account.`);
  if (!confirmed) return;
  const firebase = await getFirebaseSyncApi();
  const profileIds = getDeveloperTargetProfileIds(user);
  const savedAt = new Date().toISOString();
  await removeProfileIdsFromVillageDocs(firebase, profileIds, [user.villageId], savedAt);
  await clearVillageFromUserDoc(firebase, user, profileIds, savedAt);
  removeProfileIdsFromLocalGroups(profileIds, user.villageId);
  setDeveloperToolsStatus(`Removed ${user.displayName} from ${user.villageName || user.villageId}.`);
  await renderDeveloperToolsPage();
}

async function resetDeveloperUserProgress(user) {
  const confirmed = window.confirm(`Reset learning progress for ${user.displayName || user.email || user.profileId}? Identity, village membership, and role will be kept.`);
  if (!confirmed) return;
  const firebase = await getFirebaseSyncApi();
  const profileIds = getDeveloperTargetProfileIds(user);
  const savedAt = new Date().toISOString();
  if (user.uid) {
    const userRef = getFirebaseUserDocRef(firebase, user.uid);
    const snapshot = await firebase.getDoc(userRef);
    if (snapshot.exists()) {
      const data = snapshot.data() || {};
      const profiles = { ...(data.profiles || {}) };
      profileIds.forEach((profileId) => {
        if (profiles[profileId]) profiles[profileId] = resetProfileProgressData(profiles[profileId]);
      });
      await firebase.setDoc(userRef, {
        profiles,
        updatedAt: firebase.serverTimestamp(),
        updatedAtIso: savedAt
      }, { merge: true });
    }
  }
  await updateProfileIdsInVillageDocs(firebase, profileIds, (profile) => resetProfileProgressData(profile), savedAt);
  profileIds.forEach((profileId) => {
    if (profileStore?.profiles?.[profileId]) profileStore.profiles[profileId] = resetProfileProgressData(profileStore.profiles[profileId]);
  });
  saveProfileStore();
  setDeveloperToolsStatus(`Reset progress for ${user.displayName}.`);
  await renderDeveloperToolsPage();
}

function getDeveloperTargetProfileIds(user) {
  return Array.from(new Set([
    ...(Array.isArray(user.profileIds) ? user.profileIds : []),
    user.profileId,
    user.uid ? `firebase-${sanitizeIdentityId(user.uid)}` : ""
  ].map(String).filter(Boolean)));
}

async function removeProfileIdsFromVillageDocs(firebase, profileIds, villageIds, savedAt) {
  const profileIdSet = new Set(profileIds);
  await Promise.all(villageIds.map(async (villageId) => {
    const villageRef = getFirebaseVillageDocRef(firebase, villageId);
    const snapshot = await firebase.getDoc(villageRef);
    if (!snapshot.exists()) return;
    const data = snapshot.data() || {};
    const groupInfo = DEFAULT_GROUPS.find((group) => group.id === villageId) || { id: villageId, name: villageId };
    const group = createGroupData(groupInfo, data.group || {});
    const profiles = { ...(data.profiles || {}) };
    profileIds.forEach((profileId) => delete profiles[profileId]);
    group.memberIds = normalizeGroupMemberIds([
      ...(group.memberIds || []).filter((profileId) => !profileIdSet.has(profileId) && profiles[profileId]),
      ...Object.keys(profiles)
    ]);
	    const villagePayload = {
	      group,
	      profiles,
	      rosterVersion: getNextVillageRosterVersion(data),
	      rosterUpdatedAt: firebase.serverTimestamp(),
	      rosterUpdatedAtIso: savedAt,
	      updatedAt: firebase.serverTimestamp(),
	      updatedAtIso: savedAt
	    };
    traceVillageWrite("removeProfileIdsFromVillageDocs", "developer remove profile ids from village", villageId, villagePayload, {
      currentFirestoreVillageDocument: true,
      currentUserDocument: false,
      profileStores: false,
      localStorage: false,
      legacyMigration: false,
      explicitVillageJoin: false,
      adminCleanup: true
    });
    await firebase.setDoc(villageRef, villagePayload);
  }));
}

async function updateProfileIdsInVillageDocs(firebase, profileIds, updater, savedAt) {
  const profileIdSet = new Set(profileIds);
  await Promise.all(DEFAULT_GROUPS.map(async (groupInfo) => {
    const villageRef = getFirebaseVillageDocRef(firebase, groupInfo.id);
    const snapshot = await firebase.getDoc(villageRef);
    if (!snapshot.exists()) return;
    const data = snapshot.data() || {};
    const profiles = { ...(data.profiles || {}) };
    Object.keys(profiles).forEach((profileId) => {
      if (profileIdSet.has(profileId)) profiles[profileId] = updater(profiles[profileId]);
    });
    const villagePayload = {
      ...data,
      profiles,
      updatedAt: firebase.serverTimestamp(),
      updatedAtIso: savedAt
    };
    traceVillageWrite("updateProfileIdsInVillageDocs", "developer update profile ids in village", groupInfo.id, villagePayload, {
      currentFirestoreVillageDocument: true,
      currentUserDocument: false,
      profileStores: false,
      localStorage: false,
      legacyMigration: false,
      explicitVillageJoin: false,
      adminCleanup: true
    });
    await firebase.setDoc(villageRef, villagePayload);
  }));
}

async function clearVillageFromUserDoc(firebase, user, profileIds, savedAt) {
  if (!user.uid) return;
  const userRef = getFirebaseUserDocRef(firebase, user.uid);
  const snapshot = await firebase.getDoc(userRef);
  if (!snapshot.exists()) return;
  const data = snapshot.data() || {};
  const profiles = { ...(data.profiles || {}) };
  profileIds.forEach((profileId) => {
    if (profiles[profileId]) profiles[profileId] = {
      ...profiles[profileId],
      villageId: ""
    };
  });
  await firebase.setDoc(userRef, {
    currentGroup: "",
    villageId: "",
    villageName: "",
    profiles,
    updatedAt: firebase.serverTimestamp(),
    updatedAtIso: savedAt
  }, { merge: true });
}

function resetProfileProgressData(profile) {
  return normalizeProfileData(
    {
      ...profile,
      coins: 0,
      contributionCoins: 0,
      levelBonusesAwarded: [],
      dailyChallenge: {},
      streak: {},
      villageContribution: {},
      achievementsUnlocked: [],
      austriaAlbumSeenRewards: [],
      decks: {},
      progress: {},
      vocabularyProgress: {},
      articleProgress: {},
      difficultWords: {},
      nounVerbProgress: {},
      meaningMatchProgress: {},
      prepositionProgress: {},
      recentMeaningMatchItems: [],
      vocabularyReviewStats: {},
      challengeSessionsCompleted: 0,
      flashcardSessions: {},
      flashcardsReviewed: 0,
      activeStudySet: {},
      learningIntroSeen: false,
      positions: {},
      history: [],
      lastStudyDate: ""
    },
    {
      id: profile.id || "",
      name: getVillageDisplayName(profile),
      emoji: profile.emoji || "🌿",
      avatar: profile.avatar || "",
      password: profile.password || ""
    }
  );
}

function removeProfileIdsFromLocalStore(profileIds) {
  profileIds.forEach((profileId) => {
    delete profileStore?.profiles?.[profileId];
  });
  Object.values(profileStore?.groups || {}).forEach((group) => {
    group.memberIds = normalizeGroupMemberIds((group.memberIds || []).filter((profileId) => !profileIds.includes(profileId)));
  });
  if (profileIds.includes(profileStore?.currentProfile)) profileStore.currentProfile = "";
  saveProfileStore();
}

function removeProfileIdsFromLocalGroups(profileIds, villageId) {
  const group = profileStore?.groups?.[villageId];
  if (!group) return;
  group.memberIds = normalizeGroupMemberIds((group.memberIds || []).filter((profileId) => !profileIds.includes(profileId)));
  profileIds.forEach((profileId) => {
    if (profileStore.profiles?.[profileId]) profileStore.profiles[profileId].villageId = "";
  });
  saveProfileStore();
}

function renderHouseholdMembers() {
  if (!els.householdList) return;
  const rows = getOrderedVillageMembers();

  els.householdList.replaceChildren(
    ...rows.map((profile) => createVillageMemberCard(profile))
  );
}

function renderVillageMembersPreview() {
  const members = getOrderedVillageMembers();
  if (els.dashboardVillageMembersCount) {
    const count = members.length || 1;
    els.dashboardVillageMembersCount.textContent = `${count} ${count === 1 ? "learner" : "learners"} contributing`;
  }
  if (els.dashboardVillageMembersPreview) {
    const previewNames = members.slice(0, 4).map((profile) => getVillageDisplayName(profile));
    const extraCount = Math.max(members.length - previewNames.length, 0);
    const preview = previewNames.length
      ? `${previewNames.join(", ")}${extraCount > 0 ? ` +${extraCount} more` : ""}`
      : "Helping the village grow";
    els.dashboardVillageMembersPreview.textContent = preview;
  }
}

function showVillageMembers() {
  discardIncompleteChallengeSession();
  currentView = "village-members";
  els.appShell.classList.remove("clean-article-practice");
  els.appShell.classList.remove("clean-quiz-mode");
  els.appShell.classList.remove("article-quiz-mode");
  els.appShell.classList.remove("meaning-match-mode");
  setChallengeBackButtons(false, false);
  renderVillageMembersPage();
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.villageMembersScreen?.classList.remove("hidden");
  els.developerToolsScreen?.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  scrollPageToTop(els.villageMembersScreen);
  syncBrowserHistory();
}

function renderVillageMembersPage() {
  const members = getOrderedVillageMembers();
  const memberCount = members.length || 1;
  const sharedCoins = getGroupCoinTotal();
  const townCenter = getTownCenterProgress(sharedCoins);
  if (els.villageMembersTitle) {
    els.villageMembersTitle.textContent = `🏡 ${getVillageName()}`;
  }
  if (els.villageMembersSummary) {
    els.villageMembersSummary.textContent = "";
  }
  if (!els.villageMembersList) return;
  els.villageMembersList.replaceChildren(
    createVillagePictureSection(townCenter),
    createVillageTwoColumnRow(
      createVillageProgressSection(townCenter, sharedCoins, memberCount),
      createVillageMembersSection(members)
    ),
    createVillageRecentContributionsSection(members),
    createVillageMemoriesSection(sharedCoins)
  );
}

function createVillageMemberCard(profile, showContributionLabel = false) {
  const card = document.createElement("article");
  card.className = "village-member-card";
  card.classList.toggle("current", profile.id === currentProfileId);
  const contributionCoins = getVillageContributionCoins(profile);
  const memberSummary = showContributionLabel
    ? createVillageMemberDetails(profile, contributionCoins)
    : createTextElement(
        "span",
        "village-member-coins",
        `${contributionCoins} ${showContributionLabel ? "contribution " : ""}coins`
      );
  const memberHeader = document.createElement("span");
  memberHeader.className = "village-member-header";
  memberHeader.replaceChildren(
    createAvatarElement(profile, "village-member-avatar"),
    createTextElement("strong", "village-member-name", getVillageDisplayName(profile))
  );
  card.replaceChildren(
    memberHeader,
    memberSummary,
    ...getVillageMemberStatusLines(profile).map((status) => createTextElement("span", "village-member-status", status))
  );
  return card;
}

function getVillageContributionCoins(profile) {
  const explicitContribution = normalizeCoinCount(profile?.contributionCoins);
  return explicitContribution > 0 ? explicitContribution : normalizeCoinCount(profile?.coins);
}

function createVillagePictureSection(townCenter) {
  const section = document.createElement("section");
  section.className = "village-page-picture";
  const media = document.createElement("div");
  media.className = "village-page-hero-media";
  const image = document.createElement("img");
  image.loading = "lazy";
  setTownCenterImage(image, townCenter.current);
  media.replaceChildren(image);
  section.replaceChildren(media);
  return section;
}

function createVillageTwoColumnRow(...sections) {
  const modifier = typeof sections.at(-1) === "string" ? sections.pop() : "";
  const row = document.createElement("div");
  row.className = `village-page-row${modifier ? ` ${modifier}` : ""}`;
  row.replaceChildren(...sections);
  return row;
}

function createVillageMembersSection(members) {
  const section = document.createElement("section");
  section.className = "village-page-section village-page-card";
  section.replaceChildren(
    createVillageSectionHeading("Village Members"),
    createVillageCardGrid(members.map((profile) => createVillageMemberCard(profile, true)))
  );
  return section;
}

function createVillageProgressSection(townCenter, sharedCoins, memberCount) {
  const nextMemory = getNextVillageMemory(sharedCoins);
  const section = document.createElement("section");
  section.className = "village-page-section village-page-card village-progress-section";
  const progressTrack = document.createElement("div");
  progressTrack.className = "town-center-progress-track";
  const progressFill = document.createElement("span");
  progressFill.style.width = `${townCenter.progressPercent}%`;
  progressTrack.replaceChildren(progressFill);
  section.replaceChildren(
    createVillageSectionHeading("Village Progress"),
    progressTrack,
    createVillageSummaryList([
      ["Village Coins", townCenter.next ? `${normalizeCoinCount(sharedCoins)} / ${townCenter.next.coins}` : `${normalizeCoinCount(sharedCoins)}`],
      ["Current Stage", `Stage ${townCenter.current.stage}/${TOWN_CENTER_STAGES.length}`],
      ["Current Growth", getTownCenterStageName(townCenter.current)],
      ["Next Village Memory", nextMemory ? `${nextMemory.title} at ${nextMemory.coins} coins` : "All memories unlocked"],
      ["Members", `${memberCount} ${memberCount === 1 ? "Member" : "Members"}`]
    ], "two-column")
  );
  return section;
}

function createVillageMemoriesSection(sharedCoins) {
  const unlockedCount = getUnlockedRewards(VILLAGE_ALBUM_REWARDS, sharedCoins).length;
  const section = document.createElement("section");
  section.className = "village-page-section village-page-card village-memories-section";
  section.replaceChildren(
    createVillageSectionHeading("Village Memories"),
    createVillageCardGrid(VILLAGE_ALBUM_REWARDS.map((reward) => createVillageMemoryCard(reward, sharedCoins >= reward.coins)))
  );
  return section;
}

function createVillageRecentContributionsSection(members) {
  const activities = getVillageRecentContributions(members);
  const section = document.createElement("section");
  section.className = "village-page-section village-page-card village-recent-section";
  const list = document.createElement("div");
  list.className = "village-contribution-list";
  list.replaceChildren(
    ...(activities.length
      ? activities.slice(0, 5).map((activity) => createTextElement("p", "", activity.text))
      : [createTextElement("p", "village-empty-note", "Recent village activity will appear here as learners study.")]
    )
  );
  section.replaceChildren(
    createVillageSectionHeading("Recent Contributions"),
    list
  );
  return section;
}

function createVillageMemberDetails(profile, contributionCoins) {
  const wrapper = document.createElement("span");
  wrapper.className = "village-member-details";
  wrapper.replaceChildren(
    createTextElement("span", "", `${contributionCoins} coins contributed`)
  );
  return wrapper;
}

function createVillageSectionHeading(title, summary) {
  const heading = document.createElement("div");
  heading.className = "village-section-heading";
  const children = [createTextElement("h3", "", title)];
  if (summary) children.push(createTextElement("p", "", summary));
  heading.replaceChildren(...children);
  return heading;
}

function createVillageSummaryGrid(items) {
  const grid = document.createElement("div");
  grid.className = "village-summary-grid";
  grid.replaceChildren(...items.map(([label, value]) => {
    const item = document.createElement("span");
    item.replaceChildren(
      createTextElement("small", "", label),
      createTextElement("strong", "", value)
    );
    return item;
  }));
  return grid;
}

function createVillageSummaryList(items, modifier = "") {
  const list = document.createElement("div");
  list.className = `village-summary-list${modifier ? ` ${modifier}` : ""}`;
  list.replaceChildren(...items.map(([label, value]) => {
    const item = document.createElement("span");
    item.replaceChildren(
      createTextElement("small", "", label),
      createTextElement("strong", "", value)
    );
    return item;
  }));
  return list;
}

function createVillageCardGrid(cards) {
  const grid = document.createElement("div");
  grid.className = "village-page-grid";
  grid.replaceChildren(...cards);
  return grid;
}

function getNextVillageMemory(sharedCoins) {
  const coins = normalizeCoinCount(sharedCoins);
  return VILLAGE_ALBUM_REWARDS.find((reward) => reward.coins > coins) || null;
}

function getVillageMemberLearningLevel(profile) {
  const sessions = Object.keys(profile?.flashcardSessions || {}).join(" ");
  const history = (profile?.history || []).map((entry) => `${entry.cardId || ""} ${entry.word || ""}`).join(" ");
  const text = `${sessions} ${history}`.toUpperCase();
  if (text.includes("B1")) return "B1";
  if (text.includes("A2")) return "A2";
  return "A1";
}

function getVillageMemberHouseStage(profile) {
  const coins = getVillageContributionCoins(profile);
  if (coins >= 250) return "Stage 5";
  if (coins >= 100) return "Stage 4";
  if (coins >= 50) return "Stage 3";
  if (coins >= 10) return "Stage 2";
  return "Stage 1";
}

function getVillageRecentContributions(members) {
  return members.flatMap((profile) => {
    const name = getVillageDisplayName(profile);
    const activities = [];
    const coins = getVillageContributionCoins(profile);
    if (coins > 0) {
      activities.push({
        date: profile.lastStudyDate || "",
        text: `${name} earned ${coins} ${coins === 1 ? "coin" : "coins"}`
      });
    }
    const completedChallenges = normalizeCounter(profile.challengeSessionsCompleted);
    if (completedChallenges > 0) {
      activities.push({
        date: profile.lastStudyDate || "",
        text: `${name} completed ${completedChallenges} ${completedChallenges === 1 ? "Challenge" : "Challenges"}`
      });
    }
    const recentHistory = Array.isArray(profile.history) ? profile.history.slice(0, 2) : [];
    recentHistory.forEach((entry) => {
      activities.push({
        date: entry.studiedAt || "",
        text: getVillageHistoryContributionText(name, entry)
      });
    });
    return activities;
  })
    .filter((activity) => activity.text)
    .sort((first, second) => String(second.date).localeCompare(String(first.date)))
    .slice(0, 5);
}

function getVillageHistoryContributionText(name, entry) {
  if (entry?.type === "article-quiz") return `${name} practiced articles`;
  if (entry?.type === "vocabulary-review") return `${name} completed a Vocabulary Review`;
  if (entry?.type === "flashcard") return `${name} reviewed flashcards`;
  if (entry?.type === "article-practice") return `${name} practiced articles`;
  return `${name} studied vocabulary`;
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

function getVillageMemberStatusLines(profile) {
  const streak = getDisplayStreak(profile).current;
  const streakText = streak > 0 ? `🔥 ${streak}-day streak` : "🔥 No streak yet";
  const activityText = profile?.lastStudyDate ? "Active today" : "Just started";
  return [streakText, activityText];
}

function renderCoinChallenges() {
  renderChallengeMasteryProgress();
  renderArticleMasteryProgress();
}

function getChallengeVocabularyDeck(level = selectedLearningLevel, category = selectedChallengeCategory) {
  if (!category || category === "all") return getVocabularyChallengeCards(level);
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
  if (page === "achievements") {
    const achievementStates = getAchievementStates().filter(({ achievement }) => !achievement.testOnly);
    const earnedCount = achievementStates.filter(({ unlocked }) => unlocked).length;
    els.rewardPageTitle.textContent = "Flashcard Milestones";
    els.rewardPageSummary.textContent = `${earnedCount} earned`;
    setCollectionPageIntro({
      image: "assets/achievements.png",
      alt: "Flashcard Milestones collection",
      summary: `${earnedCount} earned`,
      description: "Your flashcard review milestones will appear here as you study."
    });
    els.achievementsGrid.replaceChildren(
      createRewardSection(
        "",
        "",
        achievementStates.map(({ achievement, unlocked, progress }) => createAchievementCard(achievement, unlocked, progress)),
        earnedCount === 0 ? "Your flashcard review milestones will appear here as you study." : ""
      )
    );
    return;
  }
  if (page === "town-center") {
    els.rewardPageTitle.textContent = `🏡 ${getVillageName()} Town Center`;
    els.rewardPageSummary.textContent = `Current Stage: ${townCenter.current.title}`;
    els.collectionPageIntro?.classList.add("hidden");
    els.achievementsGrid.replaceChildren(createTownCenterPage(townCenter, sharedCoins));
    return;
  }
  if (page === "village-album") {
    els.rewardPageTitle.textContent = "Village Memories";
    els.rewardPageSummary.textContent = `${unlockedVillage.length} / ${VILLAGE_ALBUM_REWARDS.length} unlocked`;
    setCollectionPageIntro({
      image: "assets/village-memories.png",
      alt: "Village Memories collection",
      summary: `${unlockedVillage.length} / ${VILLAGE_ALBUM_REWARDS.length} unlocked`,
      description: "Shared village memories will appear here as your village grows."
    });
    els.achievementsGrid.replaceChildren(
      createRewardSection(
        "",
        "",
        VILLAGE_ALBUM_REWARDS.map((reward) => createVillageMemoryCard(reward, sharedCoins >= reward.coins)),
        unlockedVillage.length === 0 ? "Shared village memories will appear here as your village grows." : ""
      )
    );
    return;
  }
  els.rewardPageTitle.textContent = "My Austria Album";
  els.rewardPageSummary.textContent = `${unlockedCurrentAustriaIds.length} / ${AUSTRIA_ALBUM_REWARDS.length} unlocked`;
  setCollectionPageIntro({
    image: "assets/my-austria-album.png",
    alt: "My Austria Album collection",
    summary: `${unlockedCurrentAustriaIds.length} / ${AUSTRIA_ALBUM_REWARDS.length} unlocked`,
    description: "Austria adventures will appear here as you earn them."
  });
  els.achievementsGrid.replaceChildren(
    createRewardSection(
      "",
      "",
      AUSTRIA_ALBUM_REWARDS.map((reward) => createAustriaAlbumCard(reward, unlockedCurrentAustriaIds.includes(reward.id))),
      unlockedCurrentAustriaIds.length === 0 ? "Austria adventures will appear here as you earn them." : ""
    )
  );
}

function setCollectionPageIntro({ image, alt, summary, description }) {
  els.collectionPageIntro?.classList.remove("hidden");
  if (els.collectionPageHero) {
    els.collectionPageHero.src = image;
    els.collectionPageHero.alt = alt;
  }
  if (els.rewardPageSummary) els.rewardPageSummary.textContent = summary;
  if (els.collectionPageDescription) els.collectionPageDescription.textContent = description;
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
  const children = title || summary ? [heading] : [];
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
      : [createEmptyAchievementCard("No flashcard milestones earned yet.")]
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
    .filter(({ achievement, unlocked, progress }) => {
      return !achievement.testOnly
        && achievement.metric === "flashcardsReviewed"
        && !unlocked
        && progress.target > 0;
    });
  return lockedGoals.sort(compareAchievementProgress).slice(0, 2);
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
    : "Flashcard milestone";
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
  if (achievement.metric === "flashcardsReviewed") return getFlashcardsReviewedCount(profile);
  return 0;
}

function getFlashcardsReviewedCount(profile = getCurrentProfile()) {
  return Math.max(
    normalizeCounter(profile?.flashcardsReviewed),
    getLegacyFlashcardsReviewedCount(profile?.flashcardSessions)
  );
}

function getLegacyFlashcardsReviewedCount(flashcardSessions = {}) {
  const sessions = normalizeFlashcardSessions(flashcardSessions);
  return Object.values(sessions).reduce((total, session) => {
    const ratings = normalizeFlashcardRatings(session.ratings);
    return total + Object.keys(ratings).length;
  }, 0);
}

function recordFlashcardReview(profile = getCurrentProfile()) {
  if (!profile) return 0;
  profile.flashcardsReviewed = getFlashcardsReviewedCount(profile) + 1;
  return profile.flashcardsReviewed;
}

function shouldShowRewardDebugPage() {
  const params = new URLSearchParams(window.location.search);
  return params.get("rewardDebug") === "1" || window.location.hash === "#reward-debug";
}

function maybeShowRewardDebugPage() {
  if (!shouldShowRewardDebugPage()) return;
  showRewardDebugPage();
}

function showRewardDebugPage() {
  if (!els.rewardDebugScreen || !els.rewardDebugContent) return;
  renderRewardDebugPage();
  els.rewardDebugScreen.classList.remove("hidden");
}

function hideRewardDebugPage() {
  els.rewardDebugScreen?.classList.add("hidden");
}

function renderRewardDebugPage() {
  if (!els.rewardDebugContent) return;
  els.rewardDebugContent.replaceChildren(
    createRewardDebugCurrentProgressSection(),
    createRewardDebugFlashcardAchievementsSection(),
    createRewardDebugAustriaAlbumSection(),
    createRewardDebugVillageMemoriesSection(),
    createRewardDebugVillageGrowthSection(),
    createRewardDebugQueueSection(),
    createRewardDebugSimulationSection()
  );
}

function createRewardDebugCurrentProgressSection() {
  const profile = getCurrentProfile();
  const sharedCoins = getGroupCoinTotal();
  const townCenter = getTownCenterProgress(sharedCoins);
  const unlockedAustria = getAustriaAlbumUnlockedRewardIds(profile, true);
  const unlockedMemories = getUnlockedRewards(VILLAGE_ALBUM_REWARDS, sharedCoins);
  const achievementStates = getAchievementStates().filter(({ achievement }) => !achievement.testOnly);
  const earnedAchievements = achievementStates.filter(({ unlocked }) => unlocked);
  const currentWaiting = getRewardDebugWaitingLabel();
  return createRewardDebugSection("Current User Progress", [
    createRewardDebugTable(
      ["Metric", "Current value"],
      [
        ["Current village", getCurrentGroup()?.name || "None"],
        ["Current profile", profile ? getVillageDisplayName(profile) : "None"],
        ["Flashcards reviewed", `${getFlashcardsReviewedCount(profile)}`],
        ["Vocabulary quiz correct", `${getDebugVocabularyCorrectCount(profile)}`],
        ["Article quiz correct", `${getDebugArticleCorrectCount(profile)}`],
        ["Coins", `${normalizeCoinCount(profile?.coins)}`],
        ["Village Coins", `${sharedCoins}`],
        ["Current Village Stage", `Stage ${townCenter.current.stage}: ${getTownCenterStageName(townCenter.current)}`],
        ["Austria Album Progress", `${unlockedAustria.length} / ${AUSTRIA_ALBUM_REWARDS.length}`],
        ["Village Memories Progress", `${unlockedMemories.length} / ${VILLAGE_ALBUM_REWARDS.length}`],
        ["Flashcard Milestones Earned", `${earnedAchievements.length} / ${achievementStates.length}`],
        ["Current Streak", `${normalizeCounter(profile?.streak?.current)}`],
        ["Challenges Completed", `${normalizeCounter(profile?.challengeSessionsCompleted)}`],
        ["Current reward waiting to display", currentWaiting]
      ]
    )
  ], true);
}

function createRewardDebugFlashcardAchievementsSection() {
  return createRewardDebugSection("Flashcard Milestones", [
    createRewardDebugTable(
      ["Reviewed", "Milestone", "Status"],
      getDebugAchievementsByMetric("flashcardsReviewed").map((achievement) => [
        `${achievement.target} ${achievement.target === 1 ? "reviewed" : "reviewed"}`,
        `${achievement.icon} ${achievement.name}`,
        createRewardDebugStatusCell(getAchievementDebugStatus(achievement), "Earned", "Not Earned")
      ])
    )
  ]);
}

function createRewardDebugAustriaAlbumSection() {
  const unlockedIds = new Set(getAustriaAlbumUnlockedRewardIds(getCurrentProfile(), true));
  return createRewardDebugSection("Austria Album", [
    createRewardDebugTable(
      ["#", "Reward", "Unlock requirement", "Image filename", "Status"],
      AUSTRIA_ALBUM_REWARDS.map((reward, index) => [
        `${index + 1}`,
        reward.title,
        `${reward.coins} personal coins`,
        reward.image || "None",
        createRewardDebugStatusCell(unlockedIds.has(reward.id), "Unlocked", "Locked")
      ])
    )
  ]);
}

function createRewardDebugVillageMemoriesSection() {
  const unlockedIds = new Set(getUnlockedRewards(VILLAGE_ALBUM_REWARDS, getGroupCoinTotal()).map((reward) => reward.id));
  return createRewardDebugSection("Village Memories", [
    createTextElement("p", "reward-debug-note", "Village Memories unlock from shared village coins calculated by getGroupCoinTotal(group)."),
    createRewardDebugTable(
      ["Memory", "Unlock requirement", "Image filename", "Status"],
      VILLAGE_ALBUM_REWARDS.map((reward, index) => [
        `${index + 1}: ${reward.title}`,
        `${reward.coins} shared village coins`,
        reward.image || "None",
        createRewardDebugStatusCell(unlockedIds.has(reward.id), "Unlocked", "Locked")
      ])
    )
  ]);
}

function createRewardDebugVillageGrowthSection() {
  const sharedCoins = getGroupCoinTotal();
  const current = getTownCenterProgress(sharedCoins).current;
  return createRewardDebugSection("Village Growth", [
    createRewardDebugTable(
      ["Stage", "Stage name", "Village coin requirement", "Status"],
      TOWN_CENTER_STAGES.map((stage) => [
        `Stage ${stage.stage}`,
        `${stage.icon} ${stage.title}`,
        `${stage.coins}`,
        createRewardDebugStatusCell(sharedCoins >= stage.coins, stage.id === current.id ? "Current" : "Unlocked", "Locked")
      ])
    )
  ]);
}

function createRewardDebugQueueSection() {
  return createRewardDebugSection("Reward Queue", [
    createRewardDebugTable(
      ["Setting", "Current value"],
      [
        ["Current queue size", `${achievementNotificationQueue.length}`],
        ["Current popup duration", `${ACHIEVEMENT_NOTIFICATION_DURATION_MS} ms`],
        ["Delay between queued milestones", `${ACHIEVEMENT_NOTIFICATION_QUEUE_DELAY_MS} ms`],
        ["Current reward waiting to display", getRewardDebugWaitingLabel()]
      ]
    )
  ]);
}

function getRewardDebugWaitingLabel() {
  if (achievementNotificationShowing) return "Milestone popup is visible";
  if (achievementNotificationQueue[0]?.name) return achievementNotificationQueue[0].name;
  if (pendingCelebrations.length) return "Pending celebration";
  return "None";
}

function getDebugVocabularyCorrectCount(profile = getCurrentProfile()) {
  return Object.values(profile?.vocabularyProgress || {}).reduce((total, entry) => {
    return total + normalizeCounter(entry.correctCount);
  }, 0);
}

function getDebugArticleCorrectCount(profile = getCurrentProfile()) {
  return Object.values(profile?.articleProgress || {}).reduce((total, entry) => {
    return total + normalizeCounter(entry.articleCorrectCount);
  }, 0);
}

function getDebugAchievementsByMetric(metric) {
  return ACHIEVEMENTS
    .filter((achievement) => achievement.metric === metric)
    .sort((first, second) => normalizeCounter(first.target) - normalizeCounter(second.target));
}

function getAchievementDebugStatus(achievement) {
  return getAchievementStates().find((state) => state.achievement.id === achievement.id)?.unlocked || false;
}

function createRewardDebugStatusCell(isUnlocked, earnedLabel = "Earned", lockedLabel = "Not Earned") {
  const badge = createTextElement("span", isUnlocked ? "reward-debug-status unlocked" : "reward-debug-status locked", isUnlocked ? `✅ ${earnedLabel}` : `❌ ${lockedLabel}`);
  return badge;
}

function createRewardDebugSection(title, children = [], open = false) {
  const section = document.createElement("details");
  section.className = "reward-debug-section";
  section.open = open;
  section.append(createTextElement("summary", "", title), ...children);
  return section;
}

function createRewardDebugTable(headers, rows) {
  const table = document.createElement("table");
  table.className = "reward-debug-table";
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headers.forEach((header) => headerRow.append(createTextElement("th", "", header)));
  thead.append(headerRow);
  const tbody = document.createElement("tbody");
  rows.forEach((row) => {
    const tableRow = document.createElement("tr");
    row.forEach((cell) => {
      const tableCell = document.createElement("td");
      if (cell instanceof Node) tableCell.append(cell);
      else tableCell.textContent = cell;
      tableRow.append(tableCell);
    });
    tbody.append(tableRow);
  });
  table.append(thead, tbody);
  return table;
}

function createRewardDebugSimulationSection() {
  const output = createTextElement("div", "reward-debug-simulation-output", rewardDebugLastResult || "Choose a simulation. These tools update the current local test profile.");
  const actions = [
    ["Review 10 Flashcards", "review-flashcards", 10],
    ["Review 50 Flashcards", "review-flashcards", 50],
    ["Review 250 Flashcards", "review-flashcards", 250],
    ["Answer 10 Vocabulary Questions Correctly", "vocabulary-correct", 10],
    ["Answer 100 Vocabulary Questions Correctly", "vocabulary-correct", 100],
    ["Answer 500 Vocabulary Questions Correctly", "vocabulary-correct", 500],
    ["Answer 10 Article Questions Correctly", "article-correct", 10],
    ["Unlock Austria Album #5", "unlock-austria", 5],
    ["Unlock Village Memory #3", "unlock-memory", 3],
    ["Advance Village Stage", "advance-stage", 1],
    ["Reset Rewards", "reset-rewards", 0, true],
    ["Reset Collections", "reset-collections", 0, true],
    ["Reset Progress", "reset-progress", 0, true],
    ["Reset Everything", "reset-everything", 0, true]
  ];
  const buttons = document.createElement("div");
  buttons.className = "reward-debug-simulation-actions";
  actions.forEach(([label, type, amount, destructive]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    if (destructive) button.classList.add("danger");
    button.addEventListener("click", () => {
      const result = runRewardDebugSimulation(type, amount, Boolean(destructive));
      rewardDebugLastResult = result;
      renderRewardDebugPage();
    });
    buttons.append(button);
  });
  return createRewardDebugSection("Simulate Reward", [
    createTextElement("p", "reward-debug-note", "Developer tools only. Simulation buttons intentionally change the current local test profile so rewards can be verified quickly."),
    buttons,
    output
  ], true);
}

function runRewardDebugSimulation(type, amount, destructive = false) {
  const profile = getCurrentProfile();
  if (!profile) return "No active profile. Sign in first, then open ?rewardDebug=1.";
  if (destructive && !window.confirm("This developer action changes the current local test profile. Continue?")) {
    return "Cancelled.";
  }
  if (!destructive && !window.confirm("Apply this simulation to the current local test profile?")) {
    return "Cancelled.";
  }

  const before = getRewardDebugProgressSnapshot();
  if (type === "review-flashcards") addRewardDebugFlashcardReviews(amount);
  if (type === "vocabulary-correct") addRewardDebugVocabularyCorrect(amount);
  if (type === "article-correct") addRewardDebugArticleCorrect(amount);
  if (type === "unlock-austria") unlockRewardDebugAustriaAlbum(amount);
  if (type === "unlock-memory") unlockRewardDebugVillageMemory(amount);
  if (type === "advance-stage") advanceRewardDebugVillageStage();
  if (type === "reset-rewards") resetRewardDebugRewards();
  if (type === "reset-collections") resetRewardDebugCollections();
  if (type === "reset-progress") resetRewardDebugProgress();
  if (type === "reset-everything") resetRewardDebugEverything();

  refreshRewardDebugAfterSimulation();
  const after = getRewardDebugProgressSnapshot();
  return `Updated. Coins: ${before.coins} → ${after.coins}. Village Coins: ${before.villageCoins} → ${after.villageCoins}. Flashcard Milestones: ${before.achievements} → ${after.achievements}.`;
}

function getRewardDebugProgressSnapshot() {
  const profile = getCurrentProfile();
  const achievements = getAchievementStates().filter(({ achievement, unlocked }) => !achievement.testOnly && unlocked).length;
  return {
    coins: normalizeCoinCount(profile?.coins),
    villageCoins: getGroupCoinTotal(),
    achievements
  };
}

function addRewardDebugFlashcardReviews(amount) {
  const profile = getCurrentProfile();
  const existingReviewCount = getFlashcardsReviewedCount(profile);
  profile.flashcardSessions = normalizeFlashcardSessions(profile.flashcardSessions);
  const key = "reward-debug-flashcards";
  const session = profile.flashcardSessions[key] || { deckIds: [], index: 0, studiedIds: [], ratings: {}, studyDate: getTodayKey(), completed: false, updatedAt: "" };
  session.ratings = normalizeFlashcardRatings(session.ratings);
  session.studiedIds = Array.isArray(session.studiedIds) ? session.studiedIds : [];
  const timestamp = Date.now();
  Array.from({ length: amount }).forEach((_, index) => {
    const cardId = `reward-debug-flashcard-${timestamp}-${index + 1}`;
    session.ratings[cardId] = "known";
    if (!session.studiedIds.includes(cardId)) session.studiedIds.push(cardId);
  });
  session.updatedAt = new Date().toISOString();
  profile.flashcardSessions[key] = session;
  profile.flashcardsReviewed = existingReviewCount + amount;
  recordDailyActivity("vocabulary");
  checkAchievements("flashcards");
}

function addRewardDebugVocabularyCorrect(amount) {
  const profile = getCurrentProfile();
  vocabularyProgress = normalizeVocabularyProgress(profile.vocabularyProgress);
  const timestamp = Date.now();
  Array.from({ length: amount }).forEach((_, index) => {
    const cardId = `reward-debug-vocabulary-${timestamp}-${index + 1}`;
    vocabularyProgress[cardId] = {
      correctCount: 1,
      wrongCount: 0,
      lastAnsweredAt: new Date().toISOString(),
      lastWrongAt: "",
      status: "learned",
      updatedAt: new Date().toISOString()
    };
  });
  profile.vocabularyProgress = vocabularyProgress;
  profile.challengeSessionsCompleted = normalizeCounter(profile.challengeSessionsCompleted) + Math.ceil(amount / CHALLENGE_QUESTION_COUNT);
  Array.from({ length: amount }).forEach(() => awardCoins(1));
  recordDailyActivity("vocabulary");
}

function addRewardDebugArticleCorrect(amount) {
  const profile = getCurrentProfile();
  articleProgress = normalizeArticleProgress(profile.articleProgress);
  const timestamp = Date.now();
  Array.from({ length: amount }).forEach((_, index) => {
    const cardId = `reward-debug-article-${timestamp}-${index + 1}`;
    articleProgress[cardId] = {
      articleCorrectCount: 1,
      articleWrongCount: 0,
      articleLastAnsweredAt: new Date().toISOString(),
      articleLastWrongAt: "",
      articleStatus: "learned",
      updatedAt: new Date().toISOString()
    };
  });
  profile.articleProgress = articleProgress;
  profile.challengeSessionsCompleted = normalizeCounter(profile.challengeSessionsCompleted) + Math.ceil(amount / CHALLENGE_QUESTION_COUNT);
  Array.from({ length: amount }).forEach(() => awardCoins(1));
  recordDailyActivity("article", { isCorrect: true });
}

function unlockRewardDebugAustriaAlbum(index) {
  const reward = AUSTRIA_ALBUM_REWARDS[normalizeCounter(index) - 1];
  const profile = getCurrentProfile();
  if (!reward || !profile) return;
  const needed = Math.max(reward.coins - normalizeCoinCount(profile.coins), 0);
  Array.from({ length: needed }).forEach(() => awardCoins(1));
  checkRewardUnlocks(profile);
}

function unlockRewardDebugVillageMemory(index) {
  const reward = VILLAGE_ALBUM_REWARDS[normalizeCounter(index) - 1];
  if (!reward) return;
  const needed = Math.max(reward.coins - getGroupCoinTotal(), 0);
  Array.from({ length: needed }).forEach(() => awardCoins(1));
}

function advanceRewardDebugVillageStage() {
  const next = getTownCenterProgress(getGroupCoinTotal()).next;
  if (!next) return;
  const needed = Math.max(next.coins - getGroupCoinTotal(), 0);
  Array.from({ length: needed }).forEach(() => awardCoins(1));
}

function resetRewardDebugRewards() {
  const profile = getCurrentProfile();
  const group = getCurrentGroup();
  if (profile) profile.achievementsUnlocked = [];
  if (group) group.familyAchievementsUnlocked = [];
  if (profileStore) profileStore.familyAchievementsUnlocked = [];
  achievementNotificationQueue = [];
  pendingCelebrations = [];
}

function resetRewardDebugCollections() {
  const profile = getCurrentProfile();
  const group = getCurrentGroup();
  if (profile) profile.austriaAlbumSeenRewards = [];
  if (group) {
    group.villageAlbumSeenRewards = [];
    group.townCenterStagesSeen = [];
    group.familyLevelsReached = [];
  }
}

function resetRewardDebugProgress() {
  const profile = getCurrentProfile();
  if (!profile) return;
  progress = {};
  vocabularyProgress = {};
  articleProgress = {};
  difficultWords = {};
  nounVerbProgress = {};
  meaningMatchProgress = {};
  prepositionProgress = {};
  profile.progress = progress;
  profile.vocabularyProgress = vocabularyProgress;
  profile.articleProgress = articleProgress;
  profile.difficultWords = difficultWords;
  profile.nounVerbProgress = nounVerbProgress;
  profile.meaningMatchProgress = meaningMatchProgress;
  profile.prepositionProgress = prepositionProgress;
  profile.flashcardSessions = {};
  profile.flashcardsReviewed = 0;
  profile.challengeSessionsCompleted = 0;
  profile.vocabularyReviewStats = normalizeVocabularyReviewStats({});
  profile.streak = normalizeStreak({});
  profile.villageContribution = normalizeVillageContribution({});
}

function resetRewardDebugEverything() {
  const profile = getCurrentProfile();
  if (!profile) return;
  resetRewardDebugRewards();
  resetRewardDebugCollections();
  resetRewardDebugProgress();
  profile.coins = 0;
  profile.levelBonusesAwarded = [];
}

function refreshRewardDebugAfterSimulation() {
  saveProfileStore();
  refreshVisibleProfileState();
  renderVillageCards();
  renderRewardDebugPage();
}

function createRewardDebugList(title, items) {
  const wrapper = document.createElement("div");
  wrapper.className = "reward-debug-result-group";
  wrapper.append(createTextElement("strong", "", title));
  const list = document.createElement("ul");
  (items.length ? items : ["None"]).forEach((item) => {
    list.append(createTextElement("li", "", item));
  });
  wrapper.append(list);
  return wrapper;
}

function renderAchievementDebugPanel() {
  if (!els.debugCurrentProfile || !profileStore) return;
  promoteFamilyAchievements(profileStore);
  const profile = currentProfileId ? getCurrentProfile() : null;
  const personalAchievements = profile
    ? getPersonalAchievementIds(profile)
    : [];
  const familyAchievements = getFamilyAchievementIds(profileStore);

  els.debugCurrentProfile.textContent = profile ? getVillageDisplayName(profile) : "None";
  els.debugPersonalAchievements.textContent = formatDebugAchievementList(personalAchievements);
  els.debugFamilyAchievements.textContent = formatDebugAchievementList(familyAchievements);
  els.debugAchievementSource.textContent = hasCloudSyncConfig()
    ? "Firebase + Local Storage"
    : "Local Storage";
}

function formatDebugAchievementList(achievementIds) {
  if (!achievementIds.length) return "None";
  return achievementIds
    .map((id) => getAchievementById(id)?.name || id)
    .join(", ");
}

function hasCloudSyncConfig() {
  return getFirebaseSyncConfig().enabled;
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
    createTextElement("span", "leaderboard-name", getVillageDisplayName(profile)),
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
  profile.dailyChallenge = normalizeDailyChallenge(profile.dailyChallenge);
  profile.streak = normalizeStreak(profile.streak);

  if (profile.dailyChallenge.date !== today) {
    profile.dailyChallenge = {
      date: today,
      challengeId: "",
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
  if (action === "continue-learning") {
    if (developerPreviewMode === "new-user") {
      guidedLearningActive = true;
      learnGermanReturnActive = true;
      showLearnGermanPage();
      showLearnIntroPanel({ preview: true });
      return;
    }
    showLearnGermanPage();
    if (shouldShowLearningIntro()) {
      guidedLearningActive = true;
      learnGermanReturnActive = true;
      showLearnIntroPanel();
    }
    return;
  }
  if (action === "flashcards") {
    guidedLearningActive = false;
    learnGermanReturnActive = false;
    showFlashcardsEntry();
    return;
  }
  if (action === "challenges") {
    guidedLearningActive = false;
    learnGermanReturnActive = false;
    showChallengesEntry();
    return;
  }
  if (action === "vocabulary-quiz") {
    guidedLearningActive = false;
    learnGermanReturnActive = false;
    showDirectChallenge("vocabulary-review", { returnTarget: "dashboard" });
    return;
  }
  if (action === "article-quiz") {
    guidedLearningActive = false;
    learnGermanReturnActive = false;
    showDirectChallenge("articles", { returnTarget: "dashboard" });
    return;
  }
  if (action === "village-members") {
    showVillageMembers();
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

function continueGuidedLearning() {
  guidedLearningActive = true;
  handleLearnGermanAction(getLearnGermanRecommendation().action, { guided: true });
}

function setLearnIntroContent({ firstTime = false } = {}) {
  const eyebrow = els.learnIntroPanel?.querySelector(".learn-intro-heading .eyebrow");
  const title = els.learnIntroPanel?.querySelector(".learn-intro-heading h3");
  if (eyebrow) eyebrow.textContent = "📚 Learn German";
  if (title) title.textContent = "Learn new words, review what you've learned, earn coins, and help your village grow.";
  if (els.learnIntroChooseLevel) {
    els.learnIntroChooseLevel.textContent = firstTime ? "Start Learning" : "Choose Your Level";
  }
}

function showLearnIntroPanel(options = {}) {
  const firstTime = Boolean(options.firstTime);
  if (options.preview && !developerPreviewMode) developerPreviewMode = "new-user";
  currentView = "learn-intro";
  setLearnIntroContent({ firstTime });
  els.learnGermanScreen?.classList.add("intro-focused-mode");
  els.learnGermanScreen?.classList.toggle("first-time-intro-mode", firstTime);
  els.learnIntroPanel?.classList.remove("hidden");
  els.learnRecommendationPanel?.classList.add("hidden");
  els.learnDifficultPanel?.classList.add("hidden");
  els.learnShortcutPanel?.classList.add("hidden");
  updateLearnIntroPreviewControls();
  scrollPageToTop(els.learnIntroPanel || els.learnGermanScreen);
  syncBrowserHistory({ replace: firstTime });
}

function hideLearnIntroPanel() {
  els.learnGermanScreen?.classList.remove("intro-focused-mode");
  els.learnGermanScreen?.classList.remove("first-time-intro-mode");
  setLearnIntroContent({ firstTime: false });
  els.learnIntroPanel?.classList.add("hidden");
  removeLearnIntroPreviewControls();
  els.learnRecommendationPanel?.classList.remove("hidden");
  els.learnDifficultPanel?.classList.remove("hidden");
  els.learnShortcutPanel?.classList.remove("hidden");
}

function updateLearnIntroPreviewControls() {
  removeLearnIntroPreviewControls();
  if (!developerPreviewMode) return;
  const card = els.learnIntroPanel?.querySelector(".learn-intro-card");
  if (!card) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "small-link-button learn-intro-preview-exit";
  button.dataset.previewExit = "true";
  button.textContent = "👤 Continue as Current User";
  button.addEventListener("click", endDeveloperPreviewMode);
  card.append(button);
}

function removeLearnIntroPreviewControls() {
  els.learnIntroPanel?.querySelectorAll("[data-preview-exit]").forEach((node) => node.remove());
}

function shouldShowRegisteredUserIntroduction(profile = getCurrentProfile()) {
  return Boolean(profile && profile.registeredIntroCompleted === false);
}

function showRegisteredUserIntroduction() {
  guidedLearningActive = false;
  learnGermanReturnActive = false;
  showDemoScreen({ registered: true });
}

function shouldShowLearningIntro(profile = getCurrentProfile()) {
  if (!profile || profile.learningIntroSeen) return false;
  const state = getGuidedLearningState(profile);
  return !state.wordCount && !hasCompletedLearningActivity(profile);
}

function hasCompletedLearningActivity(profile = getCurrentProfile()) {
  if (!profile) return false;
  const sessions = normalizeFlashcardSessions(profile.flashcardSessions);
  const hasStudiedFlashcards = Object.values(sessions).some((session) => new Set(session?.studiedIds || []).size > 0 || Boolean(session?.completed));
  const vocabularyStats = normalizeVocabularyReviewStats(profile.vocabularyReviewStats);
  const hasVocabularyReview = normalizeCounter(vocabularyStats.answered) > 0;
  const hasArticleReview = Object.values(profile.articleProgress || {}).some((entry) => normalizeCounter(entry?.articleCorrectCount) + normalizeCounter(entry?.articleWrongCount) > 0);
  const hasChallengeCompletion = normalizeCounter(profile.challengeSessionsCompleted) > 0;
  return hasStudiedFlashcards || hasVocabularyReview || hasArticleReview || hasChallengeCompletion;
}

function markLearningIntroSeen() {
  const profile = getCurrentProfile();
  if (!profile) return;
  const needsUpdate = !profile.learningIntroSeen || profile.forceFirstTimeExperience || profile.registeredIntroCompleted === false;
  if (!needsUpdate) return;
  profile.learningIntroSeen = true;
  if (profile.forceFirstTimeExperience) {
    profile.forceFirstTimeExperience = false;
  }
  if (profile.registeredIntroCompleted === false) {
    profile.registeredIntroCompleted = true;
  }
  saveProfileStore({ immediate: true });
}

function chooseLevelFromLearningIntro() {
  if (!developerPreviewMode) markLearningIntroSeen();
  els.learnGermanScreen?.classList.remove("first-time-intro-mode");
  learnGermanReturnActive = true;
  guidedLearningActive = true;
  showFlashcardsEntry({ guided: false });
}

function getStoredLearnGermanLevel() {
  const profileLevel = getCurrentProfile()?.learningPreferences?.level;
  if (LEARNING_LEVELS.includes(profileLevel)) return profileLevel;
  const level = localStorage.getItem(LEARN_GERMAN_LEVEL_STORAGE_KEY);
  return LEARNING_LEVELS.includes(level) ? level : "";
}

function getStoredLearnGermanCategory() {
  const profileCategory = getCurrentProfile()?.learningPreferences?.category;
  if (["nouns", "verbs", "other"].includes(profileCategory)) return profileCategory;
  const category = localStorage.getItem(LEARN_GERMAN_CATEGORY_STORAGE_KEY);
  return ["nouns", "verbs", "other"].includes(category) ? category : "";
}

function rememberLearnGermanChoices(level = selectedLearningLevel, category = flashcardStudyCategory) {
  if (developerPreviewMode) return;
  if (LEARNING_LEVELS.includes(level)) localStorage.setItem(LEARN_GERMAN_LEVEL_STORAGE_KEY, level);
  if (["nouns", "verbs", "other"].includes(category)) localStorage.setItem(LEARN_GERMAN_CATEGORY_STORAGE_KEY, category);
  updateLearningPreferences({ level, category });
}

function getLearnGermanGoal() {
  const profileGoal = getCurrentProfile()?.learningPreferences?.studyGoal;
  if (Number.isFinite(Number(profileGoal))) return normalizeFlashcardSessionGoal(profileGoal);
  const saved = Number(localStorage.getItem(LEARN_GERMAN_GOAL_STORAGE_KEY));
  if (!Number.isFinite(saved)) return LEARN_GERMAN_DEFAULT_GOAL;
  return clamp(Math.round(saved / LEARN_GERMAN_GOAL_STEP) * LEARN_GERMAN_GOAL_STEP, LEARN_GERMAN_MIN_GOAL, LEARN_GERMAN_MAX_GOAL);
}

function updateLearningPreferences(updates = {}) {
  if (developerPreviewMode) return;
  const profile = getCurrentProfile();
  if (!profile) return;
  profile.learningPreferences = normalizeLearningPreferences({
    ...(profile.learningPreferences || {}),
    ...updates,
    updatedAt: new Date().toISOString()
  });
  saveProfileStore({ localOnly: true });
}

function setLearnGermanGoal(value) {
  const numericValue = Number(value);
  const safeValue = Number.isFinite(numericValue) ? numericValue : LEARN_GERMAN_DEFAULT_GOAL;
  const nextGoal = clamp(
    Math.round(safeValue / LEARN_GERMAN_GOAL_STEP) * LEARN_GERMAN_GOAL_STEP,
    LEARN_GERMAN_MIN_GOAL,
    LEARN_GERMAN_MAX_GOAL
  );
  if (!developerPreviewMode) {
    localStorage.setItem(LEARN_GERMAN_GOAL_STORAGE_KEY, String(nextGoal));
    updateLearningPreferences({ studyGoal: nextGoal });
  }
  renderLearnGermanPage();
  if (currentView === "learning-goal") renderLearningGoalScreen();
}

function getLearnGermanTimeEstimate(wordCount = getLearnGermanGoal()) {
  const minMinutes = Math.max(1, Math.floor(wordCount / 5));
  const maxMinutes = Math.max(minMinutes + 1, Math.ceil(wordCount / 4));
  return `${minMinutes}–${maxMinutes} minutes`;
}

function renderLearnGermanPage() {
  if (isAuthenticatedLearningHydrating()) {
    renderLearnGermanHydrationLoading();
    return;
  }
  const recommendation = getLearnGermanRecommendation();
  const goal = getLearnGermanGoal();
  els.learnRecommendationCard?.classList.toggle("complete", recommendation.action === "complete");
  els.learnRecommendationCard?.classList.toggle("has-study-set", recommendation.hasStudySet);
  if (els.learnRecommendationEyebrow) els.learnRecommendationEyebrow.textContent = recommendation.eyebrow;
  if (els.learnRecommendationTitle) els.learnRecommendationTitle.textContent = recommendation.title;
  if (els.learnRecommendationMeta) els.learnRecommendationMeta.textContent = recommendation.meta;
  if (els.learnGoalValue) els.learnGoalValue.textContent = String(goal);
  if (els.learnEstimate) els.learnEstimate.textContent = `Estimated time: ${getLearnGermanTimeEstimate(goal)}`;
  if (els.learnGoalDecrease) els.learnGoalDecrease.disabled = goal <= LEARN_GERMAN_MIN_GOAL;
  if (els.learnGoalIncrease) els.learnGoalIncrease.disabled = goal >= LEARN_GERMAN_MAX_GOAL;
  els.learnGoalControls?.classList.toggle("hidden", !recommendation.showGoal);
  els.learnGoalNote?.classList.toggle("hidden", !recommendation.showGoal);
  els.learnEstimate?.classList.toggle("hidden", !recommendation.showGoal);
  renderLearnGermanProgress(recommendation);
  renderDifficultWordsPanel();
  if (!els.learnRecommendationActions) return;

  if (recommendation.action === "complete") {
    const completeTitle = createTextElement("strong", "learn-complete-title", "🎉 Study set complete!");
    const newSetButton = createTextElement("button", "ghost-button", "Start a New Study Set");
    newSetButton.type = "button";
    newSetButton.dataset.learnAction = "new-flashcards";
    const dashboardButton = createTextElement("button", "small-link-button", "Back to Dashboard");
    dashboardButton.type = "button";
    dashboardButton.dataset.learnAction = "dashboard";
    newSetButton.className = "primary-button";
    els.learnRecommendationActions.replaceChildren(completeTitle, newSetButton, dashboardButton);
    return;
  }

  if (els.learnRecommendationPrimary) {
    els.learnRecommendationPrimary.textContent = recommendation.buttonLabel;
    els.learnRecommendationPrimary.dataset.learnAction = recommendation.action;
    els.learnRecommendationActions.replaceChildren(els.learnRecommendationPrimary);
  }
}

function renderLearnGermanHydrationLoading() {
  if (els.learnRecommendationCard) {
    els.learnRecommendationCard.classList.remove("complete", "has-study-set");
  }
  if (els.learnRecommendationEyebrow) els.learnRecommendationEyebrow.textContent = "Today's Progress";
  if (els.learnRecommendationTitle) els.learnRecommendationTitle.textContent = "Loading your learning progress…";
  if (els.learnRecommendationMeta) els.learnRecommendationMeta.textContent = "Checking your latest study set from cloud sync.";
  els.learnGoalControls?.classList.add("hidden");
  els.learnGoalNote?.classList.add("hidden");
  els.learnEstimate?.classList.add("hidden");
  els.learnProgressList?.classList.add("hidden");
  els.learnProgressList?.replaceChildren();
  if (els.learnRecommendationActions) {
    const loading = createTextElement("p", "learn-loading-note", "Please wait a moment.");
    els.learnRecommendationActions.replaceChildren(loading);
  }
  logLearningHydration({
    renderedWordCountBeforeHydration: null,
    loadingStateShown: true
  });
}

function toggleLearnPanel(panel, toggle) {
  if (!panel || !toggle) return;
  const nextExpanded = panel.classList.contains("is-collapsed");
  panel.classList.toggle("is-collapsed", !nextExpanded);
  toggle.setAttribute("aria-expanded", String(nextExpanded));
}

function renderLearnGermanProgress(recommendation) {
  if (!els.learnProgressList) return;
  els.learnProgressList.classList.toggle("hidden", !recommendation.pathSteps?.length);
  if (!recommendation.pathSteps?.length) {
    els.learnProgressList.replaceChildren();
    return;
  }
  const stack = document.createElement("div");
  stack.className = "learn-progress-stack";
  const path = document.createElement("div");
  path.className = "learn-path learn-session-path";
  recommendation.pathSteps.forEach((step, index) => {
    path.append(createLearnFlowBubble(step, { variant: "session" }));
    if (index < recommendation.pathSteps.length - 1) {
      path.append(createLearnFlowArrow());
    }
  });
  stack.append(path);
  els.learnProgressList.replaceChildren(stack);
}

function createLearnFlowBubble(step, { variant = "session" } = {}) {
  const item = document.createElement("div");
  item.className = `learn-flow-bubble learn-path-step learn-${variant}-bubble ${step.status} is-${step.status}`;
  const label = document.createElement("span");
  label.className = "learn-path-label";
  const marker = step.status === "complete" ? "✓ " : "";
  const title = createTextElement("strong", "learn-path-title", `${marker}${step.label}`);
  label.append(title);
  if (step.caption) {
    label.append(createTextElement("span", "learn-path-caption", step.caption));
  }
  item.append(label);
  if (step.status === "current") {
    item.append(createTextElement("strong", "learn-path-next", "NEXT"));
  }
  if (Array.isArray(step.substeps) && step.substeps.length) {
    const substeps = document.createElement("div");
    substeps.className = "learn-path-substeps";
    step.substeps.forEach((substep) => {
      const substepRow = createTextElement(
        "span",
        `learn-path-substep is-${substep.status}`,
        `${substep.status === "complete" ? "✓" : "○"} ${substep.label}`
      );
      substeps.append(substepRow);
    });
    item.append(substeps);
  }
  return item;
}

function createLearnFlowArrow(className = "learn-flow-arrow learn-path-arrow") {
  return createTextElement("span", className, "→");
}

function getLearnGermanRecommendation(profile = getCurrentProfile()) {
  const state = getGuidedLearningState(profile);
  if (!state.wordCount) {
    const resumable = getMostRecentFlashcardSession("", { incompleteOnly: true });
    if (resumable) {
      return {
        action: "resume-flashcards",
        eyebrow: "Today's Session",
        title: `${resumable.level} · ${getFlashcardCategoryLabel(resumable.category)} · ${resumable.total} ${resumable.total === 1 ? "word" : "words"}`,
        meta: "Continue where you left off.",
        buttonLabel: "Continue Flashcards",
        showGoal: false,
        hasStudySet: false,
        pathSteps: getLearnGermanPathSteps("flashcards", state)
      };
    }
    const goal = getLearnGermanGoal();
    return {
      action: "flashcards",
      eyebrow: "Today's Session",
      title: getLearnGermanContextLine(state, goal),
      meta: "Choose a level and start a new set of words.",
      buttonLabel: "Start Learning",
      showGoal: false,
      hasStudySet: false,
      pathSteps: getLearnGermanPathSteps("flashcards", state)
    };
  }
  if (!state.vocabularyComplete) {
    return {
      action: "vocabulary-review",
      eyebrow: "Today's Session",
      title: getLearnGermanContextLine(state),
      meta: "Continue where you left off.",
      buttonLabel: "Continue Vocabulary Review",
      showGoal: false,
      hasStudySet: true,
      pathSteps: getLearnGermanPathSteps("vocabulary-review", state)
    };
  }
  if (state.nounCount > 0 && !state.articleComplete) {
    return {
      action: "article-review",
      eyebrow: "Today's Session",
      title: getLearnGermanContextLine(state),
      meta: "Continue where you left off.",
      buttonLabel: "Continue Article Review",
      showGoal: false,
      hasStudySet: true,
      pathSteps: getLearnGermanPathSteps("article-review", state)
    };
  }
  return {
    action: "complete",
    eyebrow: "Today's Session",
    title: getLearnGermanContextLine(state),
    meta: "You completed this study set. Ready to learn more words?",
    buttonLabel: "Start a New Study Set",
    showGoal: false,
    hasStudySet: true,
    pathSteps: getLearnGermanPathSteps("complete", state)
  };
}

function getLearnGermanContextLine(state, goal = getLearnGermanGoal()) {
  const words = state.studySet.wordIds
    .map((wordId) => state.studySet.words[wordId])
    .filter(Boolean);
  if (!words.length) return `New study set · ${goal} words`;
  const levels = Array.from(new Set(words.map((word) => word.level).filter(Boolean)));
  const categories = Array.from(new Set(words.map((word) => word.category).filter(Boolean)));
  const level = levels.length === 1 ? levels[0] : "Mixed levels";
  const category = categories.length === 1 ? getFlashcardCategoryLabel(categories[0]) : "Mixed words";
  const count = state.wordCount || state.studySet.wordIds.length;
  return `${level} · ${category} · ${count} ${count === 1 ? "word" : "words"}`;
}

function getLearnGermanPathSteps(nextStep, state) {
  const reviewComplete = Boolean(state.vocabularyComplete && (state.nounCount === 0 || state.articleComplete));
  const reviewCurrent = nextStep === "vocabulary-review" || nextStep === "article-review";
  return [
    {
      label: "📚 Learn",
      caption: "Flashcards",
      status: nextStep === "flashcards" ? "current" : state.wordCount ? "complete" : "future"
    },
    {
      label: "✅ Review",
      caption: reviewComplete ? "Vocabulary + Article Review" : "Vocabulary + Article Review",
      status: reviewCurrent ? "current" : reviewComplete ? "complete" : "future",
      substeps: [
        {
          label: "Vocabulary",
          status: state.vocabularyComplete ? "complete" : "future"
        },
        {
          label: "Article",
          status: state.articleComplete || (state.nounCount === 0 && state.vocabularyComplete) ? "complete" : "future"
        }
      ]
    },
    {
      label: "🪙 Earn",
      caption: "Coins",
      status: nextStep === "complete" ? "complete" : "future"
    },
    {
      label: "🏡 Build",
      caption: "Village",
      status: nextStep === "complete" ? "complete" : "future"
    }
  ];
}

function getGuidedLearningState(profile = getCurrentProfile()) {
  const rawStudySet = profile?.activeStudySet;
  const activeStudySet = normalizeActiveStudySet(rawStudySet);
  const reviewStatus = normalizeStudySetReviewStatus(activeStudySet.reviewStatus);
  const studyWords = activeStudySet.wordIds
    .map((wordId) => activeStudySet.words[wordId])
    .filter(Boolean);
  const nounCount = studyWords.filter((word) => isStudySetNoun(word)).length;
  const wordCount = activeStudySet.wordIds.length;
  const complete = Boolean(
    wordCount
    && reviewStatus.vocabularyCompletedAt
    && (nounCount === 0 || reviewStatus.articleCompletedAt)
  );
  logStudySetCountDiagnostics(rawStudySet, activeStudySet, {
    displayedCount: wordCount,
    sessionCompleted: complete
  });
  repairActiveStudySetCountIfNeeded(profile, rawStudySet, activeStudySet);
  return {
    studySet: activeStudySet,
    wordCount,
    nounCount,
    vocabularyComplete: Boolean(reviewStatus.vocabularyCompletedAt),
    articleComplete: Boolean(reviewStatus.articleCompletedAt)
  };
}

function logStudySetCountDiagnostics(rawStudySet, normalizedStudySet, details = {}) {
  const storedWordIds = Array.isArray(rawStudySet?.wordIds) ? rawStudySet.wordIds.map(String).filter(Boolean) : [];
  const wordsObjectCount = rawStudySet?.words && typeof rawStudySet.words === "object"
    ? Object.keys(rawStudySet.words).length
    : 0;
  console.log("[Unser Dorf study-set count]", {
    storedWordCount: rawStudySet?.wordCount ?? null,
    wordIdsLength: storedWordIds.length,
    uniqueWordIdsCount: new Set(storedWordIds).size,
    wordsObjectCount,
    normalizedWordIdsCount: normalizedStudySet.wordIds.length,
    displayedCount: details.displayedCount,
    sessionCompletedStatus: Boolean(details.sessionCompleted)
  });
}

function repairActiveStudySetCountIfNeeded(profile, rawStudySet, normalizedStudySet) {
  if (!profile || !rawStudySet || !activeStudySetCountRepairPending) return;
  const needsRepair = isActiveStudySetCountInconsistent(rawStudySet, normalizedStudySet.wordIds, normalizedStudySet.words);
  if (!needsRepair && !normalizedStudySet.wordIds.length) {
    activeStudySetCountRepairPending = false;
    return;
  }
  activeStudySetCountRepairPending = false;
  profile.activeStudySet = normalizedStudySet;
  saveProfileStore({ localOnly: true });
  saveActiveStudySetToCloudNow(normalizedStudySet);
}

function isStudySetNoun(word) {
  return word?.category === "nouns" || Boolean(normalizeArticleValue(word?.article));
}

function handleLearnGermanAction(action, options = {}) {
  if (!action) return;
  guidedLearningActive = Boolean(options.guided);
  if (action === "dashboard") {
    guidedLearningActive = false;
    learnGermanReturnActive = false;
    showDashboard();
    return;
  }
  if (action === "flashcards" || action === "new-flashcards") {
    learnGermanReturnActive = true;
    if (action === "flashcards" && options.guided && shouldShowLearningIntro()) {
      showLearnIntroPanel();
      return;
    }
    if (options.guided) markLearningIntroSeen();
    showLearningGoalScreen({ backTarget: "learn-german" });
    return;
  }
  if (action === "resume-flashcards") {
    learnGermanReturnActive = true;
    const resumable = getMostRecentFlashcardSession("", { incompleteOnly: true });
    if (resumable) {
      openFlashcardDeck(resumable.level, resumable.category);
      return;
    }
    showLearningGoalScreen({ backTarget: "learn-german" });
    return;
  }
  if (action === "vocabulary-review") {
    learnGermanReturnActive = true;
    if (!options.guided) {
      setReviewReturnTarget("learn-german");
      showLevelSelection("vocabulary-review");
      return;
    }
    setReviewReturnTarget("continue-learning");
    prepareStudySetReviewContext("vocabulary");
    showDirectChallenge("vocabulary-review", { returnTarget: "continue-learning" });
    return;
  }
  if (action === "article-review") {
    learnGermanReturnActive = true;
    if (!options.guided) {
      setReviewReturnTarget("learn-german");
      showLevelSelection("article-review");
      return;
    }
    setReviewReturnTarget("continue-learning");
    prepareStudySetReviewContext("articles");
    showDirectChallenge("articles", { returnTarget: "continue-learning" });
  }
}

function returnToLearnGermanOrDashboard() {
  if (learnGermanReturnActive || guidedLearningActive) {
    showLearnGermanPage();
    return;
  }
  showDashboard();
}

function setReviewReturnTarget(target = "") {
  const validTargets = new Set(["continue-learning", "learn-german", "level-selection", "reviews", "dashboard"]);
  reviewReturnTarget = validTargets.has(target) ? target : "";
}

function getReviewReturnTarget() {
  if (reviewReturnTarget) return reviewReturnTarget;
  if (guidedLearningActive || learnGermanReturnActive) return "continue-learning";
  return "reviews";
}

function returnFromReviewFlow(event) {
  event?.preventDefault();
  const target = getReviewReturnTarget();
  discardIncompleteChallengeSession();
  if (target === "continue-learning" || target === "learn-german") {
    showLearnGermanPage();
    return;
  }
  if (target === "level-selection" && isManualReviewPath()) {
    showLevelSelection(selectedLearningPath);
    return;
  }
  if (target === "dashboard") {
    showDashboard();
    return;
  }
  showCoinChallenges();
}

function isManualReviewPath(path = selectedLearningPath) {
  return path === "vocabulary-review" || path === "article-review";
}

function returnToManualLevelSelectionOrLearnGerman(event) {
  returnFromReviewFlow(event);
}

function prepareStudySetReviewContext(type) {
  const studySet = getActiveStudySet();
  const words = studySet.wordIds.map((wordId) => studySet.words[wordId]).filter(Boolean);
  const firstWord = words[0];
  if (LEARNING_LEVELS.includes(firstWord?.level)) {
    selectedLearningLevel = firstWord.level;
  }
  if (type === "vocabulary") {
    selectedChallengeCategory = "all";
  }
}

function markActiveStudySetReviewCompleted(type) {
  const profile = getCurrentProfile();
  if (!profile?.activeStudySet?.wordIds?.length) return;
  profile.activeStudySet = normalizeActiveStudySet(profile.activeStudySet);
  const now = new Date().toISOString();
  const reviewStatus = normalizeStudySetReviewStatus(profile.activeStudySet.reviewStatus);
  if (type === "vocabulary") {
    reviewStatus.vocabularyCompletedAt = now;
  } else if (type === "articles") {
    reviewStatus.articleCompletedAt = now;
  } else {
    return;
  }
  profile.activeStudySet.reviewStatus = reviewStatus;
  saveProfileStore({ localOnly: true });
  saveActiveStudySetToCloudNow(profile.activeStudySet);
}

function getGuidedArticleReviewQuestionCount() {
  const studySet = getActiveStudySet();
  if (!studySet.wordIds.length) return 0;
  const words = studySet.wordIds.map((wordId) => studySet.words[wordId]).filter(Boolean);
  const firstWord = words[0];
  const level = LEARNING_LEVELS.includes(firstWord?.level) ? firstWord.level : selectedLearningLevel;
  const matches = getStudySetQuizMatches(studySet, getArticleChallengeCards(level), {
    type: "articles",
    level
  });
  return matches.length;
}

function continueAfterGuidedChallengeResult(completedSession) {
  if (completedSession?.type === "vocabulary") {
    const articleQuestionCount = getGuidedArticleReviewQuestionCount();
    if (articleQuestionCount > 0) {
      prepareStudySetReviewContext("articles");
      setReviewReturnTarget("continue-learning");
      showDirectChallenge("articles", { returnTarget: "continue-learning" });
      showNextPendingCelebration();
      return;
    }
  }
  showLearnGermanPage();
  showNextPendingCelebration();
}

function showDirectChallenge(action, options = {}) {
  setReviewReturnTarget(options.returnTarget || reviewReturnTarget || "reviews");
  if (!options.keepLearningPath) selectedLearningPath = "challenges";
  showChallengeReady(action);
}

function showChallengesEntry() {
  guidedLearningActive = false;
  setReviewReturnTarget("reviews");
  showLevelSelection("challenges");
}

function showFlashcardsEntry(options = {}) {
  const resumable = getMostRecentFlashcardSession();
  if (resumable) {
    selectedLearningLevel = resumable.level;
    flashcardStudyLevel = resumable.level;
    flashcardStudyCategory = resumable.category;
  } else {
    selectedLearningLevel = getStoredLearnGermanLevel() || selectedLearningLevel;
    flashcardStudyLevel = selectedLearningLevel;
    flashcardStudyCategory = getStoredLearnGermanCategory() || flashcardStudyCategory;
  }
  if (options.guided && !shouldShowLearningIntro()) {
    showFlashcardSetup();
    return;
  }
  showLevelSelection("flashcards");
}

function getMostRecentFlashcardSession(level = "", options = {}) {
  const profile = getFlashcardSessionProfile();
  const sessions = Object.entries(profile?.flashcardSessions || {})
    .map(([key, session]) => {
      const match = /^(A1|A2|B1)-(nouns|verbs|other)$/.exec(key);
      if (level && match?.[1] !== level) return null;
      if (options.incompleteOnly && session.completed) return null;
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
        completed: Boolean(session.completed),
        updatedAt: session.updatedAt || ""
      };
    })
    .filter(Boolean)
    .sort((first, second) => second.updatedAt.localeCompare(first.updatedAt));
  return sessions[0] || null;
}

function getPreferredFlashcardCategoryForLevel(level) {
  return getMostRecentFlashcardSession(level)?.category
    || getStoredLearnGermanCategory()
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

function openFlashcardDeck(level, category, { forceNew = false, requestedGoal = getLearnGermanGoal() } = {}) {
  if (!LEARNING_LEVELS.includes(level) || !["nouns", "verbs", "other"].includes(category)) return;
  if (currentView === "learning-flashcards" && flashcardStudyCards.length) {
    saveCurrentFlashcardSession();
  }
  selectedLearningPath = "flashcards";
  selectedLearningLevel = level;
  flashcardStudyLevel = level;
  flashcardStudyCategory = category;
  if (forceNew) prepareNewFlashcardStudySession(requestedGoal);
  loadOrCreateFlashcardSession(forceNew, requestedGoal);
  currentView = "learning-flashcards";
  closeLearningDeckSelector();
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
  els.learningFlashcardsScreen.classList.remove("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  renderLearningFlashcard();
  scrollPageToTop(els.learningFlashcardsScreen);
  syncBrowserHistory();
}

function prepareNewFlashcardStudySession(requestedGoal = getLearnGermanGoal()) {
  if (developerPreviewMode) return;
  const profile = getCurrentProfile();
  if (!profile) return;
  const now = new Date().toISOString();
  profile.flashcardSessions = normalizeFlashcardSessions(profile.flashcardSessions);
  Object.entries(profile.flashcardSessions).forEach(([key, session]) => {
    profile.flashcardSessions[key] = {
      ...session,
      completed: true,
      supersededByNewSession: true,
      updatedAt: now
    };
  });
  profile.activeStudySet = normalizeActiveStudySet();
  profile.learningPreferences = normalizeLearningPreferences({
    ...(profile.learningPreferences || {}),
    studyGoal: requestedGoal,
    level: selectedLearningLevel,
    category: flashcardStudyCategory,
    updatedAt: now
  });
  saveProfileStore({ localOnly: true });
  saveActiveStudySetToCloudNow(profile.activeStudySet);
}

function showLevelSelection(path) {
  if (path === "challenges") discardIncompleteChallengeSession();
  selectedLearningPath = path;
  els.appShell.classList.remove("vocabulary-review-mode");
  const contextLabels = {
    flashcards: "FLASHCARDS",
    "vocabulary-review": "VOCABULARY REVIEW",
    "article-review": "ARTICLE REVIEW",
    challenges: "REVIEWS"
  };
  els.levelSelectionContext.textContent = contextLabels[path] || "FLASHCARDS";
  currentView = "level-selection";
  setChallengeBackButtons(false, false);
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.levelSelectionScreen.classList.remove("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  renderLevelSelectionState();
  scrollPageToTop(els.levelSelectionScreen);
  syncBrowserHistory();
}

function chooseLearningLevel(level) {
  if (!["A1", "A2", "B1"].includes(level)) return;
  selectedLearningLevel = level;
  rememberLearnGermanChoices(selectedLearningLevel, getStoredLearnGermanCategory() || flashcardStudyCategory);
  if (selectedLearningPath === "flashcards") {
    showFlashcardSetup();
    return;
  }
  if (selectedLearningPath === "vocabulary-review") {
    startManualReviewForSelectedLevel("vocabulary-review");
    return;
  }
  if (selectedLearningPath === "article-review") {
    startManualReviewForSelectedLevel("articles");
    return;
  }
  if (selectedLearningPath === "challenges") {
    showCoinChallenges();
  }
}

function startManualReviewForSelectedLevel(action) {
  if (!["vocabulary-review", "articles"].includes(action)) return;
  guidedLearningActive = false;
  learnGermanReturnActive = true;
  setReviewReturnTarget("level-selection");
  if (action === "vocabulary-review") {
    selectedChallengeCategory = "all";
  }
  showDirectChallenge(action, { keepLearningPath: true });
}

function showFlashcardSetup() {
  currentView = "flashcard-setup";
  setChallengeBackButtons(false, false);
  flashcardStudyCategory = getPreferredFlashcardCategoryForLevel(selectedLearningLevel);
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.remove("hidden");
  els.learningGoalScreen?.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  els.flashcardSetupLevel.textContent = selectedLearningLevel;
  if (els.flashcardSetupGoal) els.flashcardSetupGoal.textContent = `Today's goal: ${getLearnGermanGoal()} words`;
  els.flashcardSetupForm.querySelectorAll('input[name="flashcardCategory"]').forEach((input) => {
    input.checked = input.value === flashcardStudyCategory;
  });
  scrollPageToTop(els.flashcardSetupScreen);
  syncBrowserHistory();
}

function startLearningFlashcards() {
  const categoryInput = els.flashcardSetupForm.querySelector('input[name="flashcardCategory"]:checked');
  const category = categoryInput?.value || "nouns";
  flashcardStudyCategory = category;
  rememberLearnGermanChoices(selectedLearningLevel, category);
  showLearningGoalScreen({ backTarget: "flashcard-setup" });
}

function showLearningGoalScreen(options = {}) {
  currentView = "learning-goal";
  learningGoalBackTarget = options.backTarget || "learn-german";
  selectedLearningLevel = getStoredLearnGermanLevel() || selectedLearningLevel;
  flashcardStudyLevel = selectedLearningLevel;
  flashcardStudyCategory = getStoredLearnGermanCategory() || flashcardStudyCategory || "nouns";
  els.learningGoalChangePanel?.classList.add("hidden");
  setChallengeBackButtons(false, false);
  renderLearningGoalScreen();
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.challengeResultsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.remove("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  scrollPageToTop(els.learningGoalScreen);
  syncBrowserHistory();
}

function renderLearningGoalScreen() {
  const goal = getLearnGermanGoal();
  if (els.learningGoalValue) els.learningGoalValue.textContent = String(goal);
  if (els.learningGoalEstimate) els.learningGoalEstimate.textContent = `Estimated time: ${getLearnGermanTimeEstimate(goal)}`;
  if (els.learningGoalDecrease) els.learningGoalDecrease.disabled = goal <= LEARN_GERMAN_MIN_GOAL;
  if (els.learningGoalIncrease) els.learningGoalIncrease.disabled = goal >= LEARN_GERMAN_MAX_GOAL;
  if (els.learningGoalSelectionSummary) {
    els.learningGoalSelectionSummary.textContent = `${selectedLearningLevel} · ${getFlashcardCategoryLabel(flashcardStudyCategory)}`;
  }
  els.learningGoalLevelOptions?.querySelectorAll("[data-goal-level]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.goalLevel === selectedLearningLevel);
  });
  els.learningGoalCategoryOptions?.querySelectorAll("[data-goal-category]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.goalCategory === flashcardStudyCategory);
  });
}

function startLearningFromGoal() {
  const requestedGoal = getLearnGermanGoal();
  logTodayGoalSelected(requestedGoal);
  rememberLearnGermanChoices(selectedLearningLevel, flashcardStudyCategory);
  openFlashcardDeck(selectedLearningLevel, flashcardStudyCategory, { forceNew: true, requestedGoal });
}

function handleLearningGoalBack() {
  if (learningGoalBackTarget === "flashcard-setup") {
    showFlashcardSetup();
    return;
  }
  showLearnGermanPage();
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
  if (category === "all") return "All Words";
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

function buildLearningFlashcardOrder(cardList, requestedGoal = getLearnGermanGoal()) {
  const sessionSize = Math.min(normalizeFlashcardSessionGoal(requestedGoal), cardList.length);
  const candidates = cardList.map((card) => ({ card, weight: getFlashcardReviewWeight(card) }));
  const selected = [];
  while (candidates.length && selected.length < sessionSize) {
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

function createFlashcardSessionId(key = getFlashcardSessionKey()) {
  return `${key}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function logFlashcardSessionDiagnostics(details = {}) {
  console.log("[Unser Dorf flashcard session]", {
    selectedGoal: details.selectedGoal,
    availableWordCount: details.availableWordCount,
    constructedDeckLength: details.constructedDeckLength,
    uniqueDeckLength: details.uniqueDeckLength,
    currentIndex: details.currentIndex,
    storedBatchSize: details.storedBatchSize ?? null,
    displayedTotal: details.displayedTotal,
    sessionId: details.sessionId || ""
  });
}

function logTodayGoalSelected(goal, details = {}) {
  console.info("[Unser Dorf Today's Goal selected]", {
    goalSize: normalizeFlashcardSessionGoal(goal),
    level: selectedLearningLevel,
    category: flashcardStudyCategory,
    timestamp: new Date().toISOString(),
    ...details
  });
}

function logStudySessionLifecycle(label, session = {}, details = {}) {
  const deckIds = Array.isArray(session.deckIds) ? session.deckIds.map(String).filter(Boolean) : [];
  console.info(`[Unser Dorf ${label} study session]`, {
    deckLength: deckIds.length,
    goalSize: normalizeFlashcardSessionGoal(session.studyGoal || details.goalSize || deckIds.length),
    wordIdsLength: deckIds.length,
    timestamp: session.updatedAt || new Date().toISOString(),
    sessionId: session.sessionId || "",
    level: details.level || flashcardStudyLevel,
    category: details.category || flashcardStudyCategory,
    currentIndex: normalizeCounter(session.index),
    completed: Boolean(session.completed),
    source: details.source || ""
  });
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

function loadOrCreateFlashcardSession(forceNew = false, requestedGoal = getLearnGermanGoal()) {
  const availableCards = getFlashcardCardsForDeck();
  const availableById = new Map(availableCards.map((card) => [card.id, card]));
  const key = getFlashcardSessionKey();
  const selectedGoal = normalizeFlashcardSessionGoal(requestedGoal);
  const goalSize = Math.min(selectedGoal, availableCards.length);

  if (developerPreviewMode) {
    flashcardStudyCards = buildLearningFlashcardOrder(availableCards, selectedGoal);
    flashcardStudyIndex = 0;
    logStudySessionLifecycle("preview", {
      sessionId: `${key}-preview`,
      deckIds: flashcardStudyCards.map((card) => card.id),
      index: 0,
      studyGoal: selectedGoal,
      completed: false,
      updatedAt: new Date().toISOString()
    }, {
      goalSize,
      level: flashcardStudyLevel,
      category: flashcardStudyCategory,
      source: "developer preview only"
    });
    logFlashcardSessionDiagnostics({
      selectedGoal,
      availableWordCount: availableCards.length,
      constructedDeckLength: flashcardStudyCards.length,
      uniqueDeckLength: new Set(flashcardStudyCards.map((card) => card.id)).size,
      currentIndex: flashcardStudyIndex,
      storedBatchSize: "",
      displayedTotal: flashcardStudyCards.length,
      sessionId: `${key}-preview`
    });
    return;
  }

  const profile = getFlashcardSessionProfile();
  const saved = profile?.flashcardSessions?.[key];
  const savedCards = saved?.deckIds?.map((id) => availableById.get(id)).filter(Boolean) || [];
  const savedGoal = normalizeFlashcardSessionGoal(saved?.studyGoal || selectedGoal);
  const canResume = !forceNew && savedCards.length === goalSize && savedGoal === selectedGoal && !saved.completed;

  if (canResume) {
    flashcardStudyCards = savedCards;
    flashcardStudyIndex = clamp(saved.index, 0, Math.max(savedCards.length - 1, 0));
    logStudySessionLifecycle("loaded", saved, {
      goalSize,
      level: flashcardStudyLevel,
      category: flashcardStudyCategory,
      source: "resume existing incomplete session"
    });
    logFlashcardSessionDiagnostics({
      selectedGoal,
      availableWordCount: availableCards.length,
      constructedDeckLength: flashcardStudyCards.length,
      uniqueDeckLength: new Set(flashcardStudyCards.map((card) => card.id)).size,
      currentIndex: flashcardStudyIndex,
      storedBatchSize: saved?.batchSize || saved?.cardsPerBatch || saved?.miniSessionSize || "",
      displayedTotal: flashcardStudyCards.length,
      sessionId: saved?.sessionId || ""
    });
    return;
  }

  flashcardStudyCards = buildLearningFlashcardOrder(availableCards, selectedGoal);
  flashcardStudyIndex = 0;
  const sessionId = createFlashcardSessionId(key);
  if (!profile) return;
  profile.flashcardSessions[key] = {
    sessionId,
    deckIds: flashcardStudyCards.map((card) => card.id),
    index: 0,
    studiedIds: [],
    ratings: normalizeFlashcardRatings(saved?.ratings),
    studyDate: getTodayKey(),
    studyGoal: selectedGoal,
    completed: false,
    updatedAt: new Date().toISOString()
  };
  logStudySessionLifecycle("created", profile.flashcardSessions[key], {
    goalSize,
    level: flashcardStudyLevel,
    category: flashcardStudyCategory,
    source: forceNew ? "new requested study set" : "no resumable session"
  });
  logFlashcardSessionDiagnostics({
    selectedGoal,
    availableWordCount: availableCards.length,
    constructedDeckLength: flashcardStudyCards.length,
    uniqueDeckLength: new Set(flashcardStudyCards.map((card) => card.id)).size,
    currentIndex: flashcardStudyIndex,
    storedBatchSize: saved?.batchSize || saved?.cardsPerBatch || saved?.miniSessionSize || "",
    displayedTotal: flashcardStudyCards.length,
    sessionId
  });
  saveProfileStore();
}

function saveCurrentFlashcardSession({ studiedCard = null, completed = false } = {}) {
  if (developerPreviewMode) return;
  const profile = getFlashcardSessionProfile();
  if (!profile) return;
  const key = getFlashcardSessionKey();
  const existing = profile.flashcardSessions[key] || {};
  const today = getTodayKey();
  const deckIds = Array.from(new Set(flashcardStudyCards.map((card) => card.id).filter(Boolean)));
  const studiedIds = new Set(existing.studyDate === today ? existing.studiedIds || [] : []);
  if (studiedCard?.id) studiedIds.add(studiedCard.id);
  if (completed) deckIds.forEach((wordId) => studiedIds.add(wordId));
  profile.flashcardSessions[key] = {
    sessionId: existing.sessionId || createFlashcardSessionId(key),
    deckIds,
    index: completed ? Math.max(deckIds.length - 1, 0) : flashcardStudyIndex,
    studiedIds: Array.from(studiedIds),
    ratings: normalizeFlashcardRatings(existing.ratings),
    studyDate: today,
    studyGoal: normalizeFlashcardSessionGoal(existing.studyGoal || flashcardStudyCards.length || getLearnGermanGoal()),
    completed,
    updatedAt: new Date().toISOString()
  };
  const activeStudySetUpdated = completed ? updateActiveStudySetFromFlashcardSession(profile, key) : false;
  if (completed) verifyCompletedFlashcardSession(profile.flashcardSessions[key], profile.activeStudySet);
  saveProfileStore({ localOnly: true });
  if (activeStudySetUpdated) {
    saveActiveStudySetToCloudNow(profile.activeStudySet);
  }
}

function verifyCompletedFlashcardSession(session, activeStudySet) {
  const deckIds = Array.from(new Set((session?.deckIds || []).map(String).filter(Boolean)));
  const studiedIds = Array.from(new Set((session?.studiedIds || []).map(String).filter(Boolean)));
  const studySet = normalizeActiveStudySet(activeStudySet);
  const countsMatch = deckIds.length === studiedIds.length && deckIds.length === studySet.wordIds.length;
  const missingStudiedIds = deckIds.filter((wordId) => !studiedIds.includes(wordId));
  const missingStudySetIds = deckIds.filter((wordId) => !studySet.wordIds.includes(wordId));
  if (countsMatch && !missingStudiedIds.length && !missingStudySetIds.length) return true;
  console.warn("[Unser Dorf flashcard completion mismatch]", {
    sessionId: session?.sessionId || "",
    deckCount: deckIds.length,
    studiedCount: studiedIds.length,
    activeStudySetCount: studySet.wordIds.length,
    missingStudiedIds,
    missingStudySetIds
  });
  return false;
}

function updateActiveStudySetFromFlashcardSession(profile, key = getFlashcardSessionKey()) {
  if (!profile?.flashcardSessions?.[key]) return false;
  const session = profile.flashcardSessions[key];
  if (!session.completed) return false;
  const ratings = normalizeFlashcardRatings(session.ratings);
  const deckIds = Array.from(new Set((session.deckIds || []).map(String).filter(Boolean)));
  const studiedSet = new Set((session.studiedIds || []).map(String).filter(Boolean));
  const completedIds = deckIds.filter((wordId) => studiedSet.has(wordId));
  if (!deckIds.length || completedIds.length !== deckIds.length) return false;
  const deckCards = getFlashcardCardsForDeck();
  const cardsById = new Map(deckCards.map((card) => [card.id, card]));
  const now = new Date().toISOString();
  const words = {};

  completedIds.forEach((wordId) => {
    const card = cardsById.get(wordId) || flashcardStudyCards.find((item) => item.id === wordId);
    if (!card) return;
    const existing = words[wordId];
    const rating = getCautiousStudySetRating(existing?.rating, ratings[wordId] || "unknown");
    words[wordId] = {
      wordId,
      german: card.word || "",
      level: getFlashcardLevel(card) || flashcardStudyLevel,
      category: getFlashcardCategory(card),
      article: normalizeArticleValue(card.article),
      rating,
      reviewedAt: now,
      sessionId: session.sessionId || key
    };
  });

  const wordIds = completedIds.filter((wordId) => Boolean(words[wordId]));
  if (!wordIds.length || wordIds.length !== completedIds.length) return false;
  profile.activeStudySet = normalizeActiveStudySet({
    sessionId: session.sessionId || key,
    reviewedAt: now,
    wordIds,
    words,
    reviewStatus: normalizeStudySetReviewStatus()
  });
  console.info("[Unser Dorf completed activeStudySet]", {
    sessionId: profile.activeStudySet.sessionId,
    deckLength: deckIds.length,
    completedWordIds: completedIds.length,
    activeStudySetWordCount: profile.activeStudySet.wordIds.length,
    timestamp: now,
    level: flashcardStudyLevel,
    category: flashcardStudyCategory
  });
  return true;
}

function getCautiousStudySetRating(firstRating, secondRating) {
  const priority = { unknown: 3, unsure: 2, known: 1 };
  const first = normalizeMeaningStatus(firstRating);
  const second = normalizeMeaningStatus(secondRating);
  return (priority[first] || 0) >= (priority[second] || 0) ? first : second;
}

function renderLearningFlashcard() {
  const card = flashcardStudyCards[flashcardStudyIndex];
  const hasCard = Boolean(card);
  const session = getCurrentFlashcardSession();
  els.learningFlashcard.classList.remove("hidden");
  els.flashcardCompletionCard.classList.add("hidden");
  els.learningFlashcardEmpty.classList.toggle("hidden", hasCard);
  els.learningFlashcardSelection.classList.toggle("hidden", !hasCard);
  els.learningFlashcardGerman.classList.toggle("hidden", !hasCard);
  els.learningFlashcardEnglish.classList.toggle("hidden", !hasCard);
  els.learningFlashcardCategory?.classList.toggle("hidden", !hasCard);
  els.learningFlashcardExampleGroup.classList.toggle("hidden", !hasCard);
  els.flashcardStudyStats?.classList.toggle("hidden", !hasCard);
  els.learningFlashcardRatings.classList.toggle("hidden", !hasCard);
  els.learningFlashcardNavigation.classList.toggle("hidden", !hasCard);
  els.learningFlashcardCounter.textContent = hasCard
    ? `Card ${flashcardStudyIndex + 1} of ${flashcardStudyCards.length}`
    : "No cards";
  if (hasCard) {
    logFlashcardSessionDiagnostics({
      selectedGoal: normalizeFlashcardSessionGoal(session?.studyGoal || getLearnGermanGoal()),
      availableWordCount: getFlashcardCardsForDeck().length,
      constructedDeckLength: flashcardStudyCards.length,
      uniqueDeckLength: new Set(flashcardStudyCards.map((item) => item.id)).size,
      currentIndex: flashcardStudyIndex,
      storedBatchSize: session?.batchSize || session?.cardsPerBatch || session?.miniSessionSize || "",
      displayedTotal: flashcardStudyCards.length,
      sessionId: session?.sessionId || ""
    });
  }
  if (els.learningFlashcardProgressBar) {
    const progressPercent = hasCard && flashcardStudyCards.length
      ? ((flashcardStudyIndex + 1) / flashcardStudyCards.length) * 100
      : 0;
    els.learningFlashcardProgressBar.style.width = `${Math.min(Math.max(progressPercent, 0), 100)}%`;
  }
  if (!card) {
    closeLearningDeckSelector();
    return;
  }
  const categoryLabel = getFlashcardCategoryLabel(flashcardStudyCategory);
  els.learningFlashcardSelection.textContent = `${flashcardStudyLevel} • ${categoryLabel} ▼`;
  els.learningFlashcardGerman.textContent = card.article ? `${card.article} ${card.word}` : card.word;
  els.learningFlashcardEnglish.textContent = card.english;
  if (els.learningFlashcardCategory) els.learningFlashcardCategory.textContent = card.category || categoryLabel;
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
  recordFlashcardReview(profile);
}

function rateLearningFlashcard(rating) {
  const card = flashcardStudyCards[flashcardStudyIndex];
  if (!card || !currentProfileId) return;
  updateFlashcardStudyRating(card, rating);
  checkAchievements("flashcards");
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
  const activeStudySet = normalizeActiveStudySet(profile?.activeStudySet);
  verifyCompletedFlashcardSession(session, activeStudySet);
  const completionCount = activeStudySet.wordIds.length
    || new Set(session?.studiedIds || []).size
    || new Set(session?.deckIds || []).size;
  els.flashcardCompletionCount.textContent = normalizeCounter(completionCount);
  if (els.flashcardContinueStudying) {
    els.flashcardContinueStudying.textContent = developerPreviewMode ? "Exit Preview" : "▶ Continue to Vocabulary Review";
  }
  currentView = "flashcard-complete";
  els.learningFlashcard.classList.add("hidden");
  els.flashcardCompletionCard.classList.remove("hidden");
  scrollPageToTop(els.learningFlashcardsScreen);
  syncBrowserHistory();
}

function handleChallengeAction(action) {
  if (!["vocabulary-review", "articles"].includes(action)) return;
  setReviewReturnTarget("reviews");
  showChallengeReady(action);
}

function showChallengeReady(action) {
  pendingChallengeAction = action;
  currentView = "challenge-ready";
  const isVocabulary = action === "vocabulary-review";
  const studySetPreview = getStudySetPreviewForChallengeAction(action);
  const guidedStudySetReview = Boolean(guidedLearningActive && studySetPreview.count);
  els.challengeReadyScreen?.classList.toggle("vocabulary-review-ready", isVocabulary);
  els.challengeReadyLevel.classList.remove("hidden");
  els.challengeReadyLevel.textContent = isVocabulary ? "VOCABULARY REVIEW" : "ARTICLE REVIEW";
  els.challengeReadyTitle.textContent = isVocabulary ? "Vocabulary Review" : "Article Review";
  els.challengeReadyDescription.textContent = isVocabulary
    ? "Review the words you just studied."
    : "Practice der, die, das.";
  if (isVocabulary) {
    els.challengeReadyStudySetNotice?.classList.add("hidden");
    els.challengeReadyStudySetNotice?.replaceChildren();
    const recentCount = normalizeCounter(studySetPreview.reviewedCount || studySetPreview.count);
    const questionCount = guidedStudySetReview ? studySetPreview.count : CHALLENGE_QUESTION_COUNT;
    els.challengeReadyMeta.textContent = `${recentCount} recent ${recentCount === 1 ? "word" : "words"} • ${questionCount} ${questionCount === 1 ? "question" : "questions"}`;
    els.challengeReadyPrompt?.classList.add("hidden");
    els.challengeReadyStart.textContent = "Start Review";
  } else {
    renderStudySetNotice(els.challengeReadyStudySetNotice, {
      studySetUsed: studySetPreview.count > 0,
      studySetReviewedCount: studySetPreview.reviewedCount
    });
    els.challengeReadyMeta.textContent = guidedStudySetReview
      ? `${studySetPreview.count} ${studySetPreview.count === 1 ? "Question" : "Questions"}`
      : "10 Questions";
    els.challengeReadyPrompt?.classList.remove("hidden");
    els.challengeReadyStart.textContent = "Start Review";
  }
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
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
  scrollPageToTop(els.challengeReadyScreen);
  syncBrowserHistory();
}

function beginPendingChallenge() {
  const action = pendingChallengeAction;
  pendingChallengeAction = "";
  const routes = {
    articles: { mode: "article-quiz", filter: "smartArticle", resume: true }
  };
  if (action === "vocabulary-review") {
    startChallengeSession("vocabulary", selectedLearningLevel, { useStudySet: guidedLearningActive });
    showVocabularyReviewQuiz();
    return;
  }
  const route = routes[action];
  if (!route) return;
  if (action === "articles") {
    if (guidedLearningActive && !getGuidedArticleReviewQuestionCount()) {
      console.info("[Unser Dorf guided learning] Skipping Article Review because this study set has no eligible nouns.");
      showLearnGermanPage();
      return;
    }
    startChallengeSession("articles", selectedLearningLevel, { useStudySet: guidedLearningActive });
  }
  openStudyRoute(route);
}

function createEmptyChallengeSession() {
  return {
    type: "",
    level: "",
    category: "",
    questionIds: [],
    questionCount: CHALLENGE_QUESTION_COUNT,
    answered: 0,
    correct: 0,
    coinsEarned: 0,
    complete: false,
    focusedReview: false,
    focusedReviewKind: "",
    studySetUsed: false,
    studySetReviewedCount: 0,
    studySetQuestionCount: 0
  };
}

function discardIncompleteChallengeSession() {
  if (challengeSession.type && !challengeSession.complete) {
    challengeSession = createEmptyChallengeSession();
  }
  pendingChallengeAction = "";
}

function startChallengeSession(type, level = selectedLearningLevel, options = {}) {
  const selection = buildChallengeQuestionSelection(type, level, options);
  challengeSession = {
    ...createEmptyChallengeSession(),
    type,
    level,
    category: type === "vocabulary" ? selectedChallengeCategory : "",
    questionIds: selection.cards.map((card) => card.id),
    questionCount: options.useStudySet ? selection.cards.length : selection.cards.length || CHALLENGE_QUESTION_COUNT,
    studySetUsed: selection.studySetUsed,
    studySetReviewedCount: selection.studySetReviewedCount,
    studySetQuestionCount: selection.studySetQuestionCount
  };
}

function buildChallengeQuestionSelection(type, level = selectedLearningLevel, options = {}) {
  const guidedStudySetReview = Boolean(options.useStudySet);
  const defaultCards = type === "articles"
    ? getArticleChallengeCards(level)
    : getChallengeVocabularyDeck(level, guidedStudySetReview ? "all" : selectedChallengeCategory);
  const fallbackCards = shuffleCards(defaultCards).slice(0, CHALLENGE_QUESTION_COUNT);
  const studySet = getActiveStudySet();
  if (!guidedStudySetReview || !studySet.wordIds.length || !defaultCards.length) {
    return createChallengeQuestionSelection(fallbackCards, studySet, 0);
  }

  const studyMatches = getStudySetQuizMatches(studySet, defaultCards, {
    type,
    level,
    category: ""
  });
  if (!studyMatches.length) {
    return createChallengeQuestionSelection([], studySet, 0, 0);
  }

  const targetStudyCount = studyMatches.length;
  const studyCards = pickWeightedStudySetCards(studyMatches, targetStudyCount, type);
  return createChallengeQuestionSelection(studyCards, studySet, studyCards.length, studyCards.length, {
    dedupeWords: false
  });
}

function createChallengeQuestionSelection(cardsForQuiz, studySet, studySetQuestionCount, maxQuestions = CHALLENGE_QUESTION_COUNT, options = {}) {
  const uniqueCards = [];
  const seen = new Set();
  const seenWords = new Set();
  const dedupeWords = options.dedupeWords !== false;
  cardsForQuiz.forEach((card) => {
    const wordKey = getStudySetCardMatchKey(card);
    if (!card?.id || seen.has(card.id) || (dedupeWords && seenWords.has(wordKey)) || uniqueCards.length >= maxQuestions) return;
    seen.add(card.id);
    seenWords.add(wordKey);
    uniqueCards.push(card);
  });
  return {
    cards: uniqueCards,
    studySetUsed: studySetQuestionCount > 0,
    studySetReviewedCount: getStudySetWordCount(studySet),
    studySetQuestionCount
  };
}

function getActiveStudySet() {
  const profile = getCurrentProfile();
  const rawStudySet = profile?.activeStudySet;
  const activeStudySet = normalizeActiveStudySet(rawStudySet);
  repairActiveStudySetCountIfNeeded(profile, rawStudySet, activeStudySet);
  return activeStudySet;
}

function getStudySetWordCount(studySet) {
  return normalizeActiveStudySet(studySet).wordIds.length;
}

function getStudySetPreviewForChallengeAction(action) {
  const type = action === "articles" ? "articles" : "vocabulary";
  const defaultCards = type === "articles"
    ? getArticleChallengeCards(selectedLearningLevel)
    : getChallengeVocabularyDeck(selectedLearningLevel, selectedChallengeCategory);
  const studySet = getActiveStudySet();
  const matches = getStudySetQuizMatches(studySet, defaultCards, {
    type,
    level: selectedLearningLevel,
    category: type === "vocabulary" ? selectedChallengeCategory : ""
  });
  return {
    count: matches.length,
    reviewedCount: getStudySetWordCount(studySet)
  };
}

function getStudySetQuizMatches(studySet, defaultCards, options = {}) {
  const normalizedStudySet = normalizeActiveStudySet(studySet);
  if (!normalizedStudySet.wordIds.length || !defaultCards.length) return [];
  const byId = new Map(defaultCards.map((card) => [card.id, card]));
  const byWordArticle = new Map(defaultCards.map((card) => [getStudySetCardMatchKey(card), card]));
  const byWord = new Map(defaultCards.map((card) => [normalizeDatasetWord(card.word), card]));
  const seen = new Set();
  return normalizedStudySet.wordIds
    .map((wordId) => normalizedStudySet.words[wordId])
    .filter(Boolean)
    .filter((word) => isStudySetWordEligibleForQuiz(word, options))
    .map((word) => {
      const card = byId.get(word.wordId)
        || byWordArticle.get(getStudySetWordMatchKey(word))
        || byWord.get(normalizeDatasetWord(word.german));
      return card ? { card, studyWord: word } : null;
    })
    .filter(Boolean)
    .filter(({ card }) => {
      if (seen.has(card.id)) return false;
      seen.add(card.id);
      return true;
    });
}

function isStudySetWordEligibleForQuiz(word, options = {}) {
  if (!word?.wordId) return false;
  if (options.level && word.level && word.level !== options.level) return false;
  if (options.type === "articles") return word.category === "nouns" || Boolean(word.article);
  if (options.type === "vocabulary" && options.category && options.category !== "all") return word.category === options.category;
  return true;
}

function getStudySetCardMatchKey(card) {
  return `${normalizeArticleValue(card?.article)}:${normalizeDatasetWord(card?.word)}`;
}

function getStudySetWordMatchKey(word) {
  return `${normalizeArticleValue(word?.article)}:${normalizeDatasetWord(word?.german)}`;
}

function pickWeightedStudySetCards(matches, count, type) {
  const candidates = matches.map(({ card, studyWord }) => ({
    card,
    weight: getStudySetQuizWeight(card, studyWord, type)
  }));
  const selected = [];
  while (candidates.length && selected.length < count) {
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

function getStudySetQuizWeight(card, studyWord, type) {
  const rating = normalizeMeaningStatus(studyWord?.rating);
  const ratingWeight = rating === "unknown" ? 7 : rating === "unsure" ? 4 : 2;
  const progressEntry = type === "articles"
    ? getArticleProgressEntry(card)
    : getVocabularyProgressEntry(card);
  const wrongAt = type === "articles" ? progressEntry.articleLastWrongAt : progressEntry.lastWrongAt;
  return ratingWeight + (wrongAt ? 3 : 0) + Math.random();
}

function getAllLearningReviewCards() {
  const byId = new Map();
  [
    ...cards,
    ...LEARNING_LEVELS.flatMap((level) => levelDatasets[level]?.vocabulary || []),
    ...LEARNING_LEVELS.flatMap((level) => levelDatasets[level]?.articles || [])
  ].forEach((card) => {
    if (card?.id && !byId.has(card.id)) byId.set(card.id, card);
  });
  return [...byId.values()];
}

function getLatestMs(...values) {
  return Math.max(0, ...values.map((value) => {
    const parsed = Date.parse(value || "");
    return Number.isFinite(parsed) ? parsed : 0;
  }));
}

function wasMostRecentVocabularyAnswerIncorrect(card) {
  const entry = getVocabularyProgressEntry(card);
  const wrong = Date.parse(entry.lastWrongAt || "");
  const answered = Date.parse(entry.lastAnsweredAt || "");
  return Number.isFinite(wrong) && (!Number.isFinite(answered) || wrong >= answered);
}

function wasMostRecentArticleAnswerIncorrect(card) {
  const entry = getArticleProgressEntry(card);
  const wrong = Date.parse(entry.articleLastWrongAt || "");
  const answered = Date.parse(entry.articleLastAnsweredAt || "");
  return Number.isFinite(wrong) && (!Number.isFinite(answered) || wrong >= answered);
}

function getDifficultWordDiagnostics() {
  return getAllLearningReviewCards()
    .map((card) => getDifficultWordCandidate(card))
    .filter((candidate) => candidate.eligible);
}

function getDifficultWordCandidate(card) {
  const stored = normalizeDifficultWords(difficultWords)[card.id] || {
    wordId: card.id,
    vocabularyCorrectStreak: 0,
    articleCorrectStreak: 0,
    lastFocusedReviewAt: "",
    lastVocabularyFocusedAt: "",
    lastArticleFocusedAt: "",
    lastIncorrectAt: "",
    lastCorrectAt: ""
  };
  const meaningStatus = getMeaningStatus(card);
  const vocabularyIncorrect = wasMostRecentVocabularyAnswerIncorrect(card);
  const articleIncorrect = card.isNoun && wasMostRecentArticleAnswerIncorrect(card);
  const vocabularyPreviouslyDifficult = Boolean(stored.lastIncorrectAt && stored.vocabularyCorrectStreak < FOCUSED_REVIEW_CLEAR_STREAK);
  const articlePreviouslyDifficult = Boolean(card.isNoun && stored.lastIncorrectAt && stored.articleCorrectStreak < FOCUSED_REVIEW_CLEAR_STREAK);
  const reasons = [];
  let priority = 0;

  if (vocabularyIncorrect) {
    reasons.push("Recent Vocabulary Review answer was incorrect");
    priority = Math.max(priority, 100);
  }
  if (articleIncorrect) {
    reasons.push("Recent Article Review answer was incorrect");
    priority = Math.max(priority, 100);
  }
  if (meaningStatus === "unknown") {
    reasons.push("Flashcard marked Don’t Know");
    priority = Math.max(priority, 70);
  }
  if (meaningStatus === "unsure") {
    reasons.push("Flashcard marked Unsure");
    priority = Math.max(priority, 45);
  }
  if (!vocabularyIncorrect && !articleIncorrect && (vocabularyPreviouslyDifficult || articlePreviouslyDifficult)) {
    reasons.push("Previously difficult, recently answered correctly");
    priority = Math.max(priority, 30 - Math.max(stored.vocabularyCorrectStreak, stored.articleCorrectStreak) * 6);
  }

  const eligible = Boolean(reasons.length && priority > 0);
  return {
    card,
    wordId: card.id,
    word: card.word || "",
    level: getFlashcardLevel(card),
    isNoun: Boolean(card.isNoun || normalizeArticleValue(card.article)),
    eligible,
    reasons,
    priority,
    vocabularyCorrectStreak: stored.vocabularyCorrectStreak,
    articleCorrectStreak: stored.articleCorrectStreak,
    lastReviewedAt: stored.lastFocusedReviewAt,
    lastActivityMs: getLatestMs(
      stored.lastFocusedReviewAt,
      stored.lastIncorrectAt,
      getVocabularyProgressEntry(card).lastWrongAt,
      getArticleProgressEntry(card).articleLastWrongAt
    )
  };
}

function getFocusedReviewCandidates(type = "vocabulary") {
  const candidates = getDifficultWordDiagnostics()
    .filter((candidate) => type !== "articles" || candidate.isNoun)
    .sort((first, second) => (
      second.priority - first.priority
      || getLatestMs(first.lastReviewedAt) - getLatestMs(second.lastReviewedAt)
      || second.lastActivityMs - first.lastActivityMs
      || compareCardsByGerman(first.card, second.card)
    ));
  if (candidates.length <= FOCUSED_REVIEW_MIN_COUNT) return candidates;
  return candidates.slice(0, FOCUSED_REVIEW_MAX_COUNT);
}

function renderDifficultWordsPanel() {
  if (!els.learnDifficultPanel || !els.learnDifficultSummary) return;
  const vocabularyCandidates = getFocusedReviewCandidates("vocabulary");
  const articleCandidates = getFocusedReviewCandidates("articles");
  const count = vocabularyCandidates.length;
  const nounCount = articleCandidates.length;
  els.learnDifficultPanel.classList.toggle("is-empty", count === 0);
  if (!count) {
    els.learnDifficultSummary.textContent = "No words";
    els.learnDifficultActions?.classList.remove("has-articles");
    els.learnDifficultVocabulary?.classList.add("hidden");
    els.learnDifficultArticles?.classList.add("hidden");
    return;
  }
  els.learnDifficultSummary.textContent = `${count} ${count === 1 ? "word" : "words"}`;
  els.learnDifficultActions?.classList.toggle("has-articles", nounCount > 0);
  els.learnDifficultVocabulary?.classList.remove("hidden");
  els.learnDifficultVocabulary.textContent = "Review Vocabulary";
  els.learnDifficultArticles?.classList.toggle("hidden", nounCount === 0);
  if (els.learnDifficultArticles) {
    els.learnDifficultArticles.textContent = "Review Articles";
  }
}

function startFocusedDifficultReview(type = "vocabulary") {
  const candidates = getFocusedReviewCandidates(type);
  if (!candidates.length) {
    renderDifficultWordsPanel();
    return;
  }
  const questionIds = candidates.map((candidate) => candidate.card.id);
  challengeSession = {
    ...createEmptyChallengeSession(),
    type: type === "articles" ? "articles" : "vocabulary",
    level: "Focused",
    category: "",
    questionIds,
    questionCount: questionIds.length,
    focusedReview: true,
    focusedReviewKind: type === "articles" ? "articles" : "vocabulary"
  };
  guidedLearningActive = false;
  learnGermanReturnActive = true;
  setReviewReturnTarget("learn-german");
  if (type === "articles") {
    selectedLearningPath = "";
    openStudyRoute({ mode: "article-quiz", filter: "smartArticle", resume: false });
    return;
  }
  selectedLearningPath = "";
  showVocabularyReviewQuiz();
}

function updateFocusedDifficultyProgress(card, type, isCorrect) {
  if (!card?.id) return;
  difficultWords = normalizeDifficultWords(difficultWords);
  const previous = difficultWords[card.id] || { wordId: card.id };
  const now = new Date().toISOString();
  const patch = {
    ...previous,
    wordId: card.id,
    lastFocusedReviewAt: now
  };
  if (type === "articles") {
    patch.lastArticleFocusedAt = now;
    patch.articleCorrectStreak = isCorrect ? normalizeCounter(previous.articleCorrectStreak) + 1 : 0;
  } else {
    patch.lastVocabularyFocusedAt = now;
    patch.vocabularyCorrectStreak = isCorrect ? normalizeCounter(previous.vocabularyCorrectStreak) + 1 : 0;
  }
  if (isCorrect) {
    patch.lastCorrectAt = now;
  } else {
    patch.lastIncorrectAt = now;
  }
  difficultWords[card.id] = patch;
  saveDifficultWordsProgress();
}

function shouldAwardFocusedReviewCoin(card, type) {
  if (!challengeSession.focusedReview) return true;
  const entry = normalizeDifficultWords(difficultWords)[card?.id] || {};
  const reviewedAt = type === "articles" ? entry.lastArticleFocusedAt : entry.lastVocabularyFocusedAt;
  return !reviewedAt || reviewedAt.slice(0, 10) !== getTodayKey();
}

function renderStudySetNotice(element, session = challengeSession) {
  if (!element) return;
  const shouldShow = Boolean(session?.studySetUsed && session?.studySetReviewedCount);
  element.classList.toggle("hidden", !shouldShow);
  if (!shouldShow) {
    element.replaceChildren();
    return;
  }
  element.replaceChildren(
    createTextElement("strong", "", "Practising words from your recent flashcards"),
    createTextElement("span", "", `${normalizeCounter(session.studySetReviewedCount)} words reviewed`)
  );
}

function recordChallengeSessionAnswer(type, isCorrect) {
  if (challengeSession.type !== type || challengeSession.complete) return;
  const questionCount = getChallengeSessionQuestionCount();
  challengeSession.answered = Math.min(challengeSession.answered + 1, questionCount);
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
  if (challengeSession.answered >= getChallengeSessionQuestionCount()) {
    showChallengeResults();
    return;
  }
  moveNext();
}

function showChallengeResults() {
  currentView = "challenge-results";
  const wasComplete = challengeSession.complete;
  challengeSession.complete = true;
  if (!wasComplete) {
    const profile = getCurrentProfile();
    if (profile) {
      profile.challengeSessionsCompleted = normalizeCounter(profile.challengeSessionsCompleted) + 1;
      saveProfileStore({ immediate: true });
    }
    if (challengeSession.studySetUsed) {
      markActiveStudySetReviewCompleted(challengeSession.type);
    }
  }
  const questionCount = getChallengeSessionQuestionCount();
  const correct = clamp(challengeSession.correct, 0, questionCount);
  const accuracy = Math.round((correct / questionCount) * 100);
  const challengeName = challengeSession.type === "articles" ? "Article Review" : "Vocabulary Review";
  els.challengeResultsType.textContent = `${challengeSession.level || selectedLearningLevel} ${challengeName}`;
  els.challengeResultAccuracy.textContent = `${accuracy}%`;
  els.challengeResultCorrect.textContent = `${correct} / ${questionCount}`;
  els.challengeResultCoins.textContent = `+${challengeSession.coinsEarned}`;
  if (els.challengeResultsContinue) {
    if (guidedLearningActive && challengeSession.type === "vocabulary" && getGuidedArticleReviewQuestionCount() > 0) {
      els.challengeResultsContinue.textContent = "Continue to Article Review";
    } else if (guidedLearningActive) {
      els.challengeResultsContinue.textContent = "Finish Session";
    } else {
      els.challengeResultsContinue.textContent = "Continue";
    }
  }
  els.dashboardScreen.classList.add("hidden");
  els.learnGermanScreen?.classList.add("hidden");
  els.achievementCollectionScreen.classList.add("hidden");
  els.coinChallengesScreen.classList.add("hidden");
  els.challengeReadyScreen.classList.add("hidden");
  els.levelSelectionScreen.classList.add("hidden");
  els.flashcardSetupScreen.classList.add("hidden");
  els.learningGoalScreen?.classList.add("hidden");
  els.learningFlashcardsScreen.classList.add("hidden");
  els.flashcardResumeScreen?.classList.add("hidden");
  els.controlPanel.classList.add("hidden");
  els.searchPanel.classList.add("hidden");
  els.statsGrid.classList.add("hidden");
  els.studyStage.classList.add("hidden");
  els.nounVerbStage.classList.add("hidden");
  els.actionBar.classList.add("hidden");
  els.challengeResultsScreen.classList.remove("hidden");
  scrollPageToTop(els.challengeResultsScreen);
  syncBrowserHistory();
}

function getChallengeSessionQuestionCount(session = challengeSession) {
  return Math.max(1, normalizeCounter(session?.questionCount) || CHALLENGE_QUESTION_COUNT);
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
  if (!window.confirm(`Restart ${getVillageDisplayName(profile)}'s ${label} position from the beginning? This will not erase progress or coins.`)) return false;
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
  difficultWords = {};
  profile.progress = progress;
  profile.articleProgress = articleProgress;
  profile.difficultWords = difficultWords;
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
  const profiles = group === getCurrentGroup()
    ? getCurrentGroupProfiles()
    : (group?.memberIds || [])
      .map((profileId) => profileStore?.profiles?.[profileId])
      .filter(Boolean);
  return getFamilyCoinTotal(Object.fromEntries(profiles.map((profile) => [profile.id, profile])));
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
  routeAfterIdentityReady();
}

function lockSharedPasswordScreen() {
  saveCurrentPosition();
  closeSettingsMenu();
  currentProfileId = "";
  pendingProfileId = "";
  showLandingScreen();
}

function warnMissingOptionalElement(key, selector) {
  if (els[key]) return;
  console.warn(`Optional UI element ${selector} is missing. Related optional controls will be skipped.`);
}

function warnMissingSettingsElements() {
  [
    ["settingsChangeDisplayName", "#settingsChangeDisplayName"],
    ["accountDisplayNameFields", "#accountDisplayNameFields"],
    ["accountDisplayNameInput", "#accountDisplayNameInput"],
    ["saveAccountDisplayName", "#saveAccountDisplayName"],
    ["accountDisplayNameStatus", "#accountDisplayNameStatus"],
    ["openDeveloperTools", "#openDeveloperTools"],
    ["developerToolsScreen", "#developerToolsScreen"],
    ["deleteAccountButton", "#deleteAccountButton"],
    ["deleteAccountForm", "#deleteAccountForm"]
  ].forEach(([key, selector]) => warnMissingOptionalElement(key, selector));
}

function runSafely(label, callback) {
  try {
    const result = callback();
    if (result && typeof result.catch === "function") {
      result.catch((error) => console.error(`${label} failed.`, error));
    }
  } catch (error) {
    console.error(`${label} failed.`, error);
  }
}

function bindOptionalEvent(element, selector, eventName, handler) {
  if (!element) {
    console.warn(`Optional UI element ${selector} is missing. ${eventName} listener was skipped.`);
    return;
  }
  element.addEventListener(eventName, (event) => {
    runSafely(`${selector} ${eventName} handler`, () => handler(event));
  });
}

function bindSettingsEvents() {
  warnMissingSettingsElements();
  bindOptionalEvent(els.settingsChangeDisplayName, "#settingsChangeDisplayName", "click", showAccountDisplayNameEditor);
  bindOptionalEvent(els.saveAccountDisplayName, "#saveAccountDisplayName", "click", saveAccountDisplayName);
  bindOptionalEvent(els.settingsResetPassword, "#settingsResetPassword", "click", () => {
    closeSettingsMenu();
    showResetPasswordScreen();
  });
  bindOptionalEvent(els.openDeveloperTools, "#openDeveloperTools", "click", showDeveloperTools);
  bindOptionalEvent(els.developerToolsBack, "#developerToolsBack", "click", () => navigateAppBack(returnToSettingsFromDeveloperTools));
  bindOptionalEvent(els.developerToolsRefresh, "#developerToolsRefresh", "click", renderDeveloperToolsPage);
  bindOptionalEvent(els.deleteAccountButton, "#deleteAccountButton", "click", openDeleteAccountConfirmation);
  bindOptionalEvent(els.cancelDeleteAccount, "#cancelDeleteAccount", "click", closeDeleteAccountConfirmation);
  bindOptionalEvent(els.deleteAccountConfirmInput, "#deleteAccountConfirmInput", "input", updateDeleteAccountButtonState);
  bindOptionalEvent(els.deleteAccountForm, "#deleteAccountForm", "submit", handleDeleteAccountSubmit);
  bindOptionalEvent(els.mobileMenuSettingsButton, "#mobileMenuSettingsButton", "click", showSettingsDetailView);
  bindOptionalEvent(els.settingsMenuBack, "#settingsMenuBack", "click", showSettingsMenuView);
  bindOptionalEvent(els.settingsToggle, "#settingsToggle", "click", () => {
    if (!els.settingsPanel) {
      console.warn("Optional UI element #settingsPanel is missing. Settings menu cannot open.");
      return;
    }
    const isOpen = !els.settingsPanel.classList.contains("hidden");
    if (isOpen) {
      closeSettingsMenu();
      return;
    }
    openSettingsPanel();
  });
}

function bindEvents() {
  if (els.appShell.dataset.bound === "true") return;
  els.appShell.dataset.bound = "true";
  bindSettingsEvents();
  els.villageNameForm.addEventListener("submit", handleVillageNameSubmit);
  els.displayNameForm?.addEventListener("submit", handleDisplayNameSubmit);
  els.firebaseAuthForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    handleFirebaseEmailAuth(firebaseAuthMode === "signin" ? "sign-in" : "register");
  });
  els.rememberEmailCheckbox?.addEventListener("change", updateRememberedEmailPreference);
  els.forgotPasswordLink?.addEventListener("click", showResetPasswordScreen);
  els.resetPasswordForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    handlePasswordResetSubmit();
  });
  els.resetPasswordBack?.addEventListener("click", () => navigateAppBack(returnToSignInFromResetPassword));
  els.resetPasswordSuccessBack?.addEventListener("click", returnToSignInFromResetPassword);
  els.firebaseAuthToggle?.addEventListener("click", toggleFirebaseAuthMode);
  els.firebaseAuthTryDemo?.addEventListener("click", returnAuthToDemo);
  els.firebaseAuthHome?.addEventListener("click", () => navigateAppBack(returnAuthToHome));
  els.villageSelectionBack?.addEventListener("click", () => navigateAppBack(handleVillageSelectionBack));
  els.joinVillageButton?.addEventListener("click", showJoinVillageOptions);
  els.createVillageButton?.addEventListener("click", showCreateVillageComingSoon);
  els.villagePasswordForm?.addEventListener("submit", handleVillagePassword);
  els.namingCeremonyForm?.addEventListener("submit", handleNamingCeremonySubmit);
  els.cancelVillagePassword?.addEventListener("click", () => navigateAppBack(showVillageSelection));
  els.villageMembersBack?.addEventListener("click", showDashboard);
  els.learnGermanBack?.addEventListener("click", showDashboard);
  els.learnHowItWorks?.addEventListener("click", showLearnIntroPanel);
  els.learnIntroBack?.addEventListener("click", () => {
    navigateAppBack(() => {
      hideLearnIntroPanel();
      currentView = "learn-german";
      scrollPageToTop(els.learnGermanScreen);
    });
  });
  els.learnIntroChooseLevel?.addEventListener("click", chooseLevelFromLearningIntro);
  els.learnGoalDecrease?.addEventListener("click", () => {
    setLearnGermanGoal(getLearnGermanGoal() - LEARN_GERMAN_GOAL_STEP);
  });
  els.learnGoalIncrease?.addEventListener("click", () => {
    setLearnGermanGoal(getLearnGermanGoal() + LEARN_GERMAN_GOAL_STEP);
  });
  els.learnShortcutToggle?.addEventListener("click", () => {
    toggleLearnPanel(els.learnShortcutPanel, els.learnShortcutToggle);
  });
  els.learnDifficultVocabulary?.addEventListener("click", () => startFocusedDifficultReview("vocabulary"));
  els.learnDifficultArticles?.addEventListener("click", () => startFocusedDifficultReview("articles"));
  els.learnGermanScreen?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-learn-action]");
    if (!button) return;
    handleLearnGermanAction(button.dataset.learnAction, {
      guided: button === els.learnRecommendationPrimary
    });
  });

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

  els.showAnswer.addEventListener("click", () => {
    if (!isLegacyStudyViewActive()) {
      hideLegacyStudyUi();
      return;
    }
    revealAnswer();
  });

  els.previousCard.addEventListener("click", () => {
    if (!isLegacyStudyViewActive()) {
      hideLegacyStudyUi();
      return;
    }
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
    if (!isLegacyStudyViewActive()) {
      hideLegacyStudyUi();
      return;
    }
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
  els.landingTryDemo?.addEventListener("click", showDemoScreen);
  els.landingGetStartedMain?.addEventListener("click", startGetStartedFlow);
  els.landingExistingAccountMain?.addEventListener("click", skipLandingToVillageSelection);
  els.demoBack?.addEventListener("click", handleDemoBack);
  els.demoSignIn?.addEventListener("click", handleDemoSignIn);
  els.demoNext?.addEventListener("click", handleDemoNext);

  els.studyChallengeBack.addEventListener("click", (event) => {
    event?.preventDefault();
    if (currentView === "study" && challengeSession.type === "articles") {
      navigateAppBack(() => returnFromReviewFlow(event));
      return;
    }
    navigateAppBack(() => returnToCoinChallenges(event));
  });
  els.articleQuizNext.addEventListener("click", () => {
    advanceChallengeSession("articles", () => moveCard(1));
  });
  els.nounVerbChallengeBack.addEventListener("click", (event) => {
    event?.preventDefault();
    if (currentView === "vocabulary-review") {
      navigateAppBack(() => returnFromReviewFlow(event));
      return;
    }
    navigateAppBack(() => returnToCoinChallenges(event));
  });

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
    const completedSession = { ...challengeSession };
    challengeSession = createEmptyChallengeSession();
    if (guidedLearningActive) {
      continueAfterGuidedChallengeResult(completedSession);
      return;
    }
    guidedLearningActive = false;
    returnToLearnGermanOrDashboard();
    showNextPendingCelebration();
  });
  els.levelSelectionBack.addEventListener("click", () => navigateAppBack(returnToLearnGermanOrDashboard));
  els.flashcardResumeBack?.addEventListener("click", () => navigateAppBack(returnToLearnGermanOrDashboard));
  els.flashcardResumeContinue?.addEventListener("click", resumePendingFlashcardSession);
  els.flashcardChooseAnotherDeck?.addEventListener("click", () => showLevelSelection("flashcards"));
  els.levelSelectionScreen.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-learning-level]");
    if (!button) return;
    chooseLearningLevel(button.dataset.learningLevel);
  });
  els.flashcardSetupBack.addEventListener("click", () => navigateAppBack(() => showLevelSelection("flashcards")));
  els.learningGoalBack?.addEventListener("click", () => navigateAppBack(handleLearningGoalBack));
  els.learningGoalDecrease?.addEventListener("click", () => {
    setLearnGermanGoal(getLearnGermanGoal() - LEARN_GERMAN_GOAL_STEP);
  });
  els.learningGoalIncrease?.addEventListener("click", () => {
    setLearnGermanGoal(getLearnGermanGoal() + LEARN_GERMAN_GOAL_STEP);
  });
  els.learningGoalChange?.addEventListener("click", () => {
    els.learningGoalChangePanel?.classList.toggle("hidden");
  });
  els.learningGoalLevelOptions?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-goal-level]");
    if (!button) return;
    selectedLearningLevel = button.dataset.goalLevel;
    flashcardStudyLevel = selectedLearningLevel;
    rememberLearnGermanChoices(selectedLearningLevel, flashcardStudyCategory);
    renderLearningGoalScreen();
  });
  els.learningGoalCategoryOptions?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-goal-category]");
    if (!button) return;
    flashcardStudyCategory = button.dataset.goalCategory;
    rememberLearnGermanChoices(selectedLearningLevel, flashcardStudyCategory);
    renderLearningGoalScreen();
  });
  els.learningGoalStart?.addEventListener("click", startLearningFromGoal);
  els.challengeLevelBack.addEventListener("click", () => navigateAppBack(() => showLevelSelection("challenges")));
  els.challengeReadyBack.addEventListener("click", () => navigateAppBack(returnToManualLevelSelectionOrLearnGerman));
  els.challengeReadyStart.addEventListener("click", beginPendingChallenge);
  els.learningFlashcardsBack.addEventListener("click", () => navigateAppBack(showFlashcardSetup));
  els.flashcardCompletionBack.addEventListener("click", () => navigateAppBack(showFlashcardSetup));
  els.learningFlashcardPrevious.addEventListener("click", () => moveLearningFlashcard(-1));
  els.learningFlashcardNext.addEventListener("click", () => moveLearningFlashcard(1));
  els.flashcardContinueStudying.addEventListener("click", () => {
    if (developerPreviewMode) {
      endDeveloperPreviewMode();
      return;
    }
    guidedLearningActive = true;
    learnGermanReturnActive = true;
    setReviewReturnTarget("continue-learning");
    prepareStudySetReviewContext("vocabulary");
    showDirectChallenge("vocabulary-review", { returnTarget: "continue-learning" });
  });
  els.flashcardReturnDashboard.addEventListener("click", returnToLearnGermanOrDashboard);
  els.challengeResultsBack.addEventListener("click", () => navigateAppBack(returnToManualLevelSelectionOrLearnGerman));
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

  els.switchProfile?.addEventListener("click", logoutToProfileScreen);
  els.logoutButton?.addEventListener("click", signOutOfFirebase);
  els.mobileMenuHomeButton?.addEventListener("click", () => {
    closeSettingsMenu();
    showDashboard();
  });
  els.mobileLogoutButton?.addEventListener("click", signOutOfFirebase);

  document.addEventListener("click", (event) => {
    if (event.target.closest(".settings-menu")) return;
    closeSettingsMenu();
  });

  els.resetLocalTestData?.addEventListener("click", () => {
    closeSettingsMenu();
    const profile = getCurrentProfile();
    if (!profile) return;
    if (!window.confirm(`Reset local test data for ${getVillageDisplayName(profile)}? This keeps profiles and the village name.`)) return;
    resetCurrentProfileTestData();
  });

  els.settingsBackDashboard?.addEventListener("click", () => {
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

  els.levelCelebrationClose.addEventListener("click", closeLevelCelebration);
  els.rewardDebugClose?.addEventListener("click", hideRewardDebugPage);
  els.rewardDebugScreen?.addEventListener("click", (event) => {
    if (event.target === els.rewardDebugScreen) hideRewardDebugPage();
  });
  window.addEventListener("hashchange", maybeShowRewardDebugPage);

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
  els.settingsPanel?.classList.add("hidden");
  els.settingsToggle?.setAttribute("aria-expanded", "false");
  showSettingsMenuView();
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

function cleanArticleQuizDisplayWord(value) {
  return String(value || "")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/\s+/g, " ")
    .replace(/^[-–—]+|[-–—]+$/g, "")
    .trim();
}

function getArticleQuizMeaningFromRow(row, fallbackCard) {
  return String(
    row.meaning_en
      || row.meaning
      || row.translation
      || row.english
      || fallbackCard?.meaningEn
      || fallbackCard?.meaning
      || fallbackCard?.translation
      || fallbackCard?.english
      || ""
  ).trim();
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
      const displayWord = cleanArticleQuizDisplayWord(row.german);
      const wordKey = normalizeDatasetWord(displayWord || row.german);
      const fallbackCard = fallbackCardsByArticle.get(`${article}:${wordKey}`)
        || fallbackCardsByWord.get(wordKey);
      const id = String(row.id || "").trim()
        || `${level.toLowerCase()}-articles-${slugify(row.german) || index}`;
      const meaning = getArticleQuizMeaningFromRow(row, fallbackCard);
      return {
        id,
        word: displayWord || row.german.trim(),
        article,
        english: meaning,
        meaningEn: String(row.meaning_en || "").trim(),
        meaning: String(row.meaning || "").trim(),
        translation: String(row.translation || "").trim(),
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

  const sourceCards = mode === "article-quiz" && challengeSession.type === "articles" && challengeSession.focusedReview
    ? getAllLearningReviewCards()
    : mode === "article-quiz" && challengeSession.type === "articles"
    ? getArticleChallengeCards(challengeSession.level)
    : cards;
  const challengeQuestionIds = new Set(challengeSession.questionIds || []);
  const filteredCards = sourceCards.filter((card) => {
    if (mode === "article-quiz"
      && challengeSession.type === "articles"
      && !challengeSession.focusedReview
      && (getFlashcardLevel(card) !== challengeSession.level
        || (challengeQuestionIds.size && !challengeQuestionIds.has(card.id)))) return false;
    if (mode === "article-quiz"
      && challengeSession.type === "articles"
      && challengeSession.focusedReview
      && challengeQuestionIds.size
      && !challengeQuestionIds.has(card.id)) return false;
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
    ? challengeSession.focusedReview ? startedCards : applySmartArticleOrder(startedCards)
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
  if (!isLegacyStudyViewActive()) {
    hideLegacyStudyUi();
    return;
  }
  const card = visibleCards[currentIndex];
  const mode = els.modeSelect.value;
  const modeText = getModeText(mode);
  const isArticleQuiz = mode === "article-quiz";
  renderStudySetNotice(
    els.articleQuizStudySetNotice,
    isArticleQuiz && challengeSession.type === "articles" ? challengeSession : null
  );

  els.cardMode.textContent = isArticleQuiz && challengeSession.type === "articles"
    ? "Article Practice"
    : isArticleQuiz ? "Article Practice" : modeText;
  const articleChallengeActive = isArticleQuiz && challengeSession.type === "articles";
  els.cardCounter.textContent = visibleCards.length
    ? articleChallengeActive
      ? `Question ${Math.min(challengeSession.answered + (articleQuizAnswered ? 0 : 1), getChallengeSessionQuestionCount())} of ${getChallengeSessionQuestionCount()}`
      : `${isArticleQuiz ? "Question" : "Card"} ${currentIndex + 1} of ${visibleCards.length}`
    : isArticleQuiz ? "Loading your review..." : "Card 0 of 0";
  els.emptyState.classList.toggle("hidden", Boolean(card));
  els.previousCard.classList.remove("hidden");
  els.nextCard.classList.remove("hidden");
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
    els.promptLabel.textContent = isArticleQuiz ? "Article Review" : "No cards";
    els.articleQuizResult.classList.add("hidden");
    els.questionText.textContent = isArticleQuiz ? "Loading your review..." : "Nothing to study";
    els.questionTranslation.textContent = "";
    els.questionTranslation.classList.add("hidden");
    return;
  }

  if (mode === "en-de") {
    els.promptLabel.textContent = "English";
    els.questionText.textContent = card.english;
  } else if (isArticleQuiz) {
    els.promptLabel.textContent = "ARTICLE REVIEW";
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
  recordFlashcardReview(getCurrentProfile());
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
  const meaning = getArticleQuizMeaning(card);
  const wordMeaning = meaning
    ? `<span class="quiz-result-answer">${escapeHtml(fullAnswer)} = ${escapeHtml(capitalizeFirst(meaning))}</span>`
    : `<span class="quiz-result-answer">${escapeHtml(fullAnswer)}</span>`;
  const isCorrect = selectedQuizArticle === card.article;
  els.articleQuizResult.innerHTML = isCorrect
    ? `
      <span class="quiz-result-label">✅ Correct!</span>
      ${wordMeaning}
    `
    : `
      <span class="quiz-result-label">❌ Not quite</span>
      <span class="quiz-result-correction">Correct answer:</span>
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

function getArticleQuizMeaning(card) {
  return String(
    card?.meaningEn
      || card?.meaning
      || card?.translation
      || card?.english
      || ""
  ).trim();
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
  if (isCorrect && shouldAwardFocusedReviewCoin(card, "articles")) {
    awardCoins(1);
  }
  if (challengeSession.focusedReview) {
    updateFocusedDifficultyProgress(card, "articles", isCorrect);
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
  checkRewardUnlocks(profile);
  checkTownCenterStageUnlocks();
  saveProfileStore({ immediate: true });
}

function checkRewardUnlocks(profile) {
  if (!profile) return;
  const group = getCurrentGroup();
  if (!group) return;
  profile.austriaAlbumSeenRewards = normalizeRewardIdList(profile.austriaAlbumSeenRewards);
  group.villageAlbumSeenRewards = normalizeVillageAlbumSeenRewardIds(group.villageAlbumSeenRewards);
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
    if (newVillageReward.id === VILLAGE_NAMING_MEMORY_ID && !normalizeVillageName(group.villageName)) {
      group.namingCeremonyReady = true;
      showVillageNamingCeremony();
      return;
    }
    showRewardUnlockCelebration(newVillageReward, "Village Memories");
  }
}

function showRewardUnlockCelebration(reward, source) {
  if (deferCelebration(() => showRewardUnlockCelebration(reward, source))) return;
  if (source === "My Austria Album") {
    showAustriaAlbumUnlockCelebration(reward);
    return;
  }
  resetLevelCelebrationPresentation();
  hideNamingCeremonyForm();
  els.levelCelebrationTitle.textContent = "Congratulations!";
  els.levelCelebrationProfile.textContent = "You unlocked:";
  els.levelCelebrationLevel.textContent = reward.title;
  els.levelCelebrationBonus.textContent = source;
  els.levelCelebrationBonus.classList.remove("hidden");
  showRewardCelebrationActions(source === "Village Memories" ? "village-album" : "austria-album", source === "Village Memories" ? "View Memories" : "View Album");
  els.levelCelebration.classList.remove("hidden");
}

function showAustriaAlbumUnlockCelebration(reward) {
  resetLevelCelebrationPresentation();
  hideNamingCeremonyForm();
  els.levelCelebration.classList.add("album-unlock-celebration");
  els.levelCelebrationEyebrow.textContent = "NEW ALBUM ITEM";
  els.levelCelebrationTitle.textContent = "Congratulations!";
  els.levelCelebrationProfile.textContent = "You unlocked:";
  els.levelCelebrationLevel.textContent = reward.title;
  els.levelCelebrationBonus.textContent = reward.description || "";
  els.levelCelebrationBonus.classList.toggle("hidden", !reward.description);
  renderAlbumUnlockImage(reward);
  renderAlbumUnlockStatus();
  showRewardCelebrationActions("austria-album", "View Album");
  els.levelCelebration.classList.remove("hidden");
}

function renderAlbumUnlockImage(reward) {
  if (!els.levelCelebrationImageFrame || !els.levelCelebrationImage) return;
  if (!isImagePath(reward.image)) {
    els.levelCelebrationImage.removeAttribute("src");
    els.levelCelebrationImage.alt = "";
    els.levelCelebrationImageFrame.classList.add("hidden");
    return;
  }
  els.levelCelebrationImageFrame.classList.remove("hidden");
  els.levelCelebrationImage.alt = reward.title;
  els.levelCelebrationImage.onerror = () => {
    els.levelCelebrationImage.removeAttribute("src");
    els.levelCelebrationImageFrame.classList.add("hidden");
  };
  els.levelCelebrationImage.src = reward.image;
}

function renderAlbumUnlockStatus() {
  if (!els.levelCelebrationStatus) return;
  const unlockedCount = getAustriaAlbumUnlockedRewardIds(getCurrentProfile(), true).length;
  els.levelCelebrationStatus.innerHTML = `
    <span>My Austria Album</span>
    <strong>${unlockedCount} / ${AUSTRIA_ALBUM_REWARDS.length} items collected</strong>
  `;
  els.levelCelebrationStatus.classList.remove("hidden");
}

function resetLevelCelebrationPresentation() {
  els.levelCelebration.classList.remove("album-unlock-celebration");
  if (els.levelCelebrationEyebrow) els.levelCelebrationEyebrow.textContent = "Level up";
  if (els.levelCelebrationImage) {
    els.levelCelebrationImage.onerror = null;
    els.levelCelebrationImage.removeAttribute("src");
    els.levelCelebrationImage.alt = "";
  }
  els.levelCelebrationImageFrame?.classList.add("hidden");
  if (els.levelCelebrationStatus) {
    els.levelCelebrationStatus.textContent = "";
    els.levelCelebrationStatus.classList.add("hidden");
  }
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

function showVillageNamingCeremony() {
  const group = getCurrentGroup();
  if (!group || normalizeVillageName(group.villageName)) return;
  resetLevelCelebrationPresentation();
  hideRewardCelebrationActions();
  els.levelCelebrationTitle.textContent = "🎉 Name Your Village";
  els.levelCelebrationProfile.textContent = "Your village has unlocked its first shared memory.";
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
  resetLevelCelebrationPresentation();
  els.levelCelebrationTitle.textContent = "Village Upgrade!";
  els.levelCelebrationProfile.textContent = "The Town Center has unlocked:";
  els.levelCelebrationLevel.textContent = getTownCenterStageName(stage);
  els.levelCelebrationBonus.textContent = "";
  els.levelCelebrationBonus.classList.add("hidden");
  showRewardCelebrationActions("town-center", "View Progress");
  els.levelCelebration.classList.remove("hidden");
}

function awardLevelBonusIfNeeded(profile) {
  if (!profile) return;
  profile.levelBonusesAwarded = normalizeLevelBonuses(profile.levelBonusesAwarded, 0);
}

function celebrateFamilyLevelIfNeeded() {
  const group = getCurrentGroup();
  if (!group) return;
  group.familyLevelsReached = normalizeFamilyLevelsReached(group.familyLevelsReached, Object.fromEntries(getCurrentGroupProfiles().map((profile) => [profile.id, profile])));
}

function checkAchievements(reason = "") {
  if (reason !== "flashcards") return;
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
}

function showAchievementCelebration(achievement) {
  if (deferCelebration(() => showAchievementCelebration(achievement))) return;
  queueAchievementNotification(achievement);
}

function queueAchievementNotification(achievement) {
  if (!achievement) return;
  achievementNotificationQueue.push(achievement);
  showNextAchievementNotification();
}

function showNextAchievementNotification() {
  if (achievementNotificationShowing) return true;
  if (!els.levelCelebration.classList.contains("hidden")) return false;
  const achievement = achievementNotificationQueue.shift();
  if (!achievement) return false;
  achievementNotificationShowing = true;
  renderAchievementNotification(achievement);
  els.levelCelebration.classList.remove("hidden");
  window.clearTimeout(achievementNotificationTimer);
  achievementNotificationTimer = window.setTimeout(closeLevelCelebration, ACHIEVEMENT_NOTIFICATION_DURATION_MS);
  return true;
}

function renderAchievementNotification(achievement) {
  resetLevelCelebrationPresentation();
  els.levelCelebrationTitle.textContent = "🎉 Flashcard Milestone!";
  els.levelCelebrationProfile.textContent = "Milestone:";
  els.levelCelebrationLevel.textContent = `${achievement.icon} ${achievement.name}`;
  if (achievement.reward > 0) {
    els.levelCelebrationBonus.textContent = `+${achievement.reward} Bonus ${achievement.reward === 1 ? "Coin" : "Coins"}`;
    els.levelCelebrationBonus.classList.remove("hidden");
  } else {
    els.levelCelebrationBonus.textContent = "Flashcard milestone";
    els.levelCelebrationBonus.classList.remove("hidden");
  }
  hideRewardCelebrationActions();
}

function closeLevelCelebration() {
  const wasAchievementNotification = achievementNotificationShowing;
  window.clearTimeout(achievementNotificationTimer);
  achievementNotificationTimer = 0;
  achievementNotificationShowing = false;
  els.levelCelebration.classList.add("hidden");
  if (wasAchievementNotification) {
    window.setTimeout(() => {
      if (showNextAchievementNotification()) return;
      showNextPendingCelebration();
    }, ACHIEVEMENT_NOTIFICATION_QUEUE_DELAY_MS);
    return;
  }
  if (showNextAchievementNotification()) return;
  showNextPendingCelebration();
}

function recordDailyActivity(type, details = {}) {
  if (!currentProfileId) return;
  const profile = getCurrentProfile();
  prepareProfileDailyState(profile);
  profile.villageContribution = normalizeVillageContribution(profile.villageContribution);

  if (type === "article") {
    profile.streak.articleQuestions += 1;
    profile.villageContribution.articleQuestions += 1;
  }

  if (type === "vocabulary") {
    profile.streak.vocabularyCards += 1;
    profile.villageContribution.vocabularyCards += 1;
  }

  updateStreakQualification(profile);
  saveProfileStore();
}

function deferCelebration(showCelebration) {
  const celebrationIsVisible = els.levelCelebration && !els.levelCelebration.classList.contains("hidden");
  if (celebrationIsVisible || achievementNotificationShowing || achievementNotificationQueue.length) {
    pendingCelebrations.push(showCelebration);
    return true;
  }
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
  if (challengeSession.type === "vocabulary" && challengeSession.focusedReview) {
    const cardsById = new Map(getAllLearningReviewCards().map((card) => [card.id, card]));
    return (challengeSession.questionIds || []).map((wordId) => cardsById.get(wordId)).filter(Boolean);
  }
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
  if (challengeSession.focusedReview) return cardList;
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
  hideVocabularyReviewContextLine();
  if (hasCard) {
    vocabularyReviewCurrentIndex = visibleVocabularyReviewCards.findIndex((item) => item.id === card.id);
  }
  els.nounVerbTitle.textContent = "Vocabulary Review";
  els.vocabularyReviewDebug?.classList.add("hidden");
  els.nounVerbInstruction.textContent = "VOCABULARY REVIEW";
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
      ? `Question ${Math.min(challengeSession.answered + (vocabularyReviewQuizState.hasAnswered ? 0 : 1), getChallengeSessionQuestionCount())} of ${getChallengeSessionQuestionCount()}`
      : `Card ${vocabularyReviewCurrentIndex + 1} of ${visibleVocabularyReviewCards.length}`
    : "Loading your review...";
  if (!card) {
    els.nounVerbPrompt.textContent = "Loading your review...";
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
      button.textContent = choice;
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

function hideVocabularyReviewContextLine() {
  const element = els.vocabularyReviewStudySetNotice;
  if (!element) return;
  element.classList.add("hidden");
  element.classList.remove("vocabulary-review-context-line");
  element.replaceChildren();
}

function buildVocabularyReviewChoices(card) {
  const answerSource = challengeSession.type === "vocabulary" && challengeSession.focusedReview
    ? getAllLearningReviewCards()
    : challengeSession.type === "vocabulary"
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
  if (isCorrect && shouldAwardFocusedReviewCoin(card, "vocabulary")) {
    awardCoins(1);
  }
  updateVocabularyMasteryProgress(card, isCorrect);
  if (challengeSession.focusedReview) {
    updateFocusedDifficultyProgress(card, "vocabulary", isCorrect);
  }
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
    <span class="quiz-result-answer">${isCorrect
      ? `${escapeHtml(card.word)} = ${escapeHtml(capitalizeFirst(card.english))}`
      : `Correct answer: ${escapeHtml(capitalizeFirst(card.english))}`}</span>
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
  if (mode === "article-quiz") return "Article Review";
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

function saveDifficultWordsProgress() {
  if (!currentProfileId) return;
  difficultWords = normalizeDifficultWords(difficultWords);
  getCurrentProfile().difficultWords = difficultWords;
  saveProfileStore({ localOnly: true });
  saveDifficultWordsToCloudNow(difficultWords);
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

function getStableHash(key) {
  let hash = 0;
  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) >>> 0;
  }
  return hash;
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
