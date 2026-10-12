
/* Lessons and Quizzes */

// The 10 lessons for the website.

/* These are the 10 lessons and their quizzes. */
const lessonData = [
    {
        title: "Screen Time",
        description: "Learn to manage time spent on devices.",
        intro: "Screen time is the amount of time we spend using phones, computers, tablets, and other digital devices.",
        tips: [
            "Pay attention to how much time you spend on your devices.",
            "Set reasonable limits for recreational screen time.",
            "Take breaks and make time for activities away from screens."
        ],
        scenario: "You planned to watch TikTok for 15 minutes after class. When you check the time, 45 minutes have passed, and you still have homework.",
        question: "What would be the most practical way to avoid this happening again?",
        options: [
            "Delete TikTok permanently so you never get distracted.",
            "Set a 15-minute app limit and decide when to use TikTok.",
            "Only use TikTok after midnight when your homework is finished."
        ],
        correct: 1,
        explanation: "Setting an app limit can help you enjoy TikTok without losing track of time."
    },
    {
        title: "Notifications",
        description: "Take control of digital interruptions.",
        intro: "Notifications help us stay informed, but constant alerts can interrupt our concentration.",
        tips: [
            "Turn off notifications that are not important.",
            "Use Do Not Disturb when studying or working.",
            "Check messages during planned breaks."
        ],
        scenario: "You're working on an assignment when messages from a WhatsApp group keep appearing. Some messages are important, but most are casual conversations.",
        question: "How could you manage the interruptions without missing something important?",
        options: [
            "Mute the group temporarily and check it during a planned break.",
            "Leave the group so you won't receive any more messages.",
            "Keep the notifications on but try not to look at them."
        ],
        correct: 0,
        explanation: "Temporarily muting notifications and checking messages during breaks can reduce distractions."
    },
    {
        title: "Social Media",
        description: "Build healthier social media habits.",
        intro: "Social media allows us to connect with others, but it can also affect how we spend our time and how we feel.",
        tips: [
            "Follow accounts that make your experience positive.",
            "Avoid comparing your everyday life to edited online posts.",
            "Take a break when social media starts affecting your mood."
        ],
        scenario: "After looking at Instagram stories, you notice you're comparing your weekend to other people's vacations and activities.",
        question: "Which response shows a healthier way to approach what you're seeing?",
        options: [
            "Remind yourself that Instagram shows selected moments and take a break if needed.",
            "Post something exciting so your weekend looks just as interesting.",
            "Keep checking stories until you find someone whose weekend was less exciting."
        ],
        correct: 0,
        explanation: "Instagram posts only show selected moments, so taking a break can help you keep things in perspective."
    },
    {
        title: "Digital Distractions",
        description: "Improve your focus during important tasks.",
        intro: "Digital distractions happen when apps, websites, or messages pull our attention away from what we are doing.",
        tips: [
            "Keep distracting apps closed while working.",
            "Set a specific goal before starting a task.",
            "Create a quiet workspace when possible."
        ],
        scenario: "You're researching a topic for class on YouTube. A recommended video catches your attention, and soon you're watching unrelated videos.",
        question: "What could help you stay focused while still using YouTube for research?",
        options: [
            "Watch recommended videos first so they won't distract you later.",
            "Use a separate playlist or save unrelated videos to watch after your assignment.",
            "Stop using YouTube for school even when it contains helpful information."
        ],
        correct: 1,
        explanation: "Saving unrelated videos for later lets you use YouTube for research without getting distracted."
    },
    {
        title: "Sleep and Devices",
        description: "Understand how nighttime device use affects sleep.",
        intro: "Using digital devices close to bedtime can make it harder to wind down, especially when the content is exciting or stressful.",
        tips: [
            "Create a relaxing bedtime routine.",
            "Avoid stimulating apps and videos right before bed.",
            "Keep your phone away from your bed if notifications disturb your sleep."
        ],
        scenario: "You're in bed at 10:30 PM watching a Netflix series. The next episode starts automatically, but you have to wake up at 6 AM.",
        question: "Which decision best supports a healthy sleep routine?",
        options: [
            "Finish the next episode because you've already started watching.",
            "Turn down the brightness and continue watching in bed.",
            "Turn off autoplay and save the next episode for another day."
        ],
        correct: 2,
        explanation: "Turning off autoplay can make it easier to stop watching and follow your bedtime routine."
    },
    {
        title: "Taking Breaks",
        description: "Make time to rest your mind and body.",
        intro: "Taking short breaks during long periods of device use gives you opportunities to move, rest your eyes, and reset your attention.",
        tips: [
            "Stand up and stretch between long work sessions.",
            "Look away from your screen regularly.",
            "Choose activities that let you move or relax."
        ],
        scenario: "You've been editing a school project on your laptop for almost two hours. Your eyes feel tired, but you want to finish.",
        question: "Which break would be most helpful?",
        options: [
            "Switch to Instagram Reels for 10 minutes.",
            "Step away from the screen, stretch, and look at something in the distance.",
            "Open Facebook on your phone while keeping your laptop nearby."
        ],
        correct: 1,
        explanation: "Stepping away from the screen gives your eyes a rest and lets you move your body."
    },
    {
        title: "Online Communication",
        description: "Communicate respectfully through technology.",
        intro: "Messages and comments do not always communicate tone clearly, so thoughtful online communication is important.",
        tips: [
            "Read messages carefully before responding.",
            "Use respectful language, even when you disagree.",
            "Ask for clarification instead of assuming someone's intention."
        ],
        scenario: "You're working on a group assignment, and one of your classmates sends several WhatsApp messages asking questions you've already answered. You're getting frustrated because you're trying to finish your part of the project.",
        question: "What's the best way to handle the situation?",
        options: [
            "Wait until you're less frustrated, then politely explain where they can find the information.",
            "Reply immediately with short answers so they understand you're busy.",
            "Mute the conversation and wait until the next day to respond, even though the assignment is due tonight."
        ],
        correct: 0,
        explanation: "Taking a moment before responding can help you communicate respectfully while still addressing the situation."
    },
    {
        title: "Multitasking",
        description: "Understand the challenges of switching tasks.",
        intro: "Trying to do several attention-demanding activities at once often means switching back and forth between them.",
        tips: [
            "Focus on one demanding task at a time.",
            "Finish smaller tasks before moving to something new.",
            "Silence distractions when working on important assignments."
        ],
        scenario: "You're listening to a recorded lecture while replying to Instagram messages. You realize you've missed part of the explanation.",
        question: "What would help you understand the lecture better?",
        options: [
            "Keep replying but pause the lecture every time a message arrives.",
            "Replay the missed section and put Instagram aside until you're finished.",
            "Play the lecture faster so you have more time for messages."
        ],
        correct: 1,
        explanation: "Giving the lecture your attention reduces distractions and helps you follow the explanation."
    },
    {
        title: "Digital Privacy",
        description: "Learn to protect your personal information.",
        intro: "Digital privacy involves controlling what personal information you share and who can access it.",
        tips: [
            "Use strong, unique passwords and enable multifactor authentication.",
            "Review privacy settings on apps and websites.",
            "Be cautious about sharing personal information online."
        ],
        scenario: "You receive a Facebook Messenger message that appears to be from a friend. They send a link asking you to sign in to view photos, but the website looks unfamiliar.",
        question: "What is the safest next step?",
        options: [
            "Open the link because the message came from someone you know.",
            "Enter your password, then change it afterward if something seems wrong.",
            "Contact your friend another way to verify the message before opening the link."
        ],
        correct: 2,
        explanation: "Checking with your friend through another method can help you avoid suspicious links."
    },
    {
        title: "Healthy Digital Routine",
        description: "Create habits that support your daily life.",
        intro: "A healthy digital routine balances useful technology with sleep, responsibilities, relationships, and offline activities.",
        tips: [
            "Plan time for important tasks and personal activities.",
            "Create device-free moments during the day.",
            "Adjust your habits based on what works for your schedule."
        ],
        scenario: "You enjoy watching YouTube, chatting on WhatsApp, and playing games, but lately you have less time for exercise and studying.",
        question: "Which approach would help you create a more balanced routine?",
        options: [
            "Schedule study and exercise time while keeping some time for entertainment.",
            "Stop using all entertainment apps during the school semester.",
            "Continue your usual routine but try to work faster when deadlines approach."
        ],
        correct: 0,
        explanation: "A balanced schedule makes room for entertainment without neglecting other priorities."
    }
];


/* Brief explanations about why each lesson matters */
const lessonStudies = [
    "Healthy screen time is about balance, not just counting hours. Technology should leave room for sleep, exercise, and other activities (American Academy of Pediatrics, 2026).",

    "Frequent notifications can interrupt important activities. Turning off unnecessary alerts is one way to reduce distractions (American Academy of Pediatrics, 2026).",

    "Social media can be useful for connecting with others, but it is important to recognize how online content affects our mood and habits (American Academy of Pediatrics, 2024).",

    "Switching between tasks can reduce efficiency, especially when both activities require concentration (American Psychological Association, 2006).",

    "Turning off electronic devices before bedtime can help support healthier sleep habits (Centers for Disease Control and Prevention, 2024).",

    "Taking breaks from screens creates opportunities for movement and helps reduce long periods of sitting (American Academy of Pediatrics, 2026).",

    "Respectful online communication can help prevent misunderstandings and support positive relationships (American Academy of Pediatrics, 2024).",

    "Research suggests that switching between demanding tasks can reduce productivity (American Psychological Association, 2006).",

    "Protecting personal information and reviewing privacy settings are important parts of safer technology use (American Academy of Pediatrics, 2026).",

    "Healthy digital habits involve balancing technology with sleep, physical activity, responsibilities, and relationships (American Academy of Pediatrics, 2026)."
];

// Find the sections and buttons from the HTML.
const home = document.getElementById("home");
const lessons = document.getElementById("lessons");
const lessonPage = document.getElementById("lessonPage");
const results = document.getElementById("results");
const wellness = document.getElementById("wellness");

const lessonGrid = document.getElementById("lessonGrid");

const completedLessons = new Set();
const firstTryCorrect = new Set();
let currentLesson = 0;
let hasAnswered = false;
let lessonOpenedAt = 0;


// Show only the page the user needs.
function showPage(page) {
   
[home, lessons, lessonPage, results, wellness].forEach(function(section) {
        section.hidden = section !== page;
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Update the progress bar after finishing lessons.
function updateProgress() {
    const count = completedLessons.size;

    document.getElementById("progressText").textContent =
        count + " of 10 completed";

    document.getElementById("progressBar").style.width =
        (count / lessonData.length * 100) + "%";

    document.getElementById("resultsBanner").hidden =
        count !== lessonData.length;
}

// Create the lesson cards.
function displayLessonCards() {
    lessonGrid.innerHTML = "";

    lessonData.forEach(function(lesson, index) {
        const card = document.createElement("button");
        card.className = "lesson-card";

        const picture = document.createElement("img");
        picture.className = "card-image";
        picture.src = "images/lesson" + (index + 1) + ".jpg";
        picture.alt = "Illustration for lesson " + (index + 1) + ": " + lesson.title;

        const heading = document.createElement("h3");
        heading.textContent = (index + 1) + ". " + lesson.title;

        const description = document.createElement("p");
        description.textContent = lesson.description;

        card.append(picture, heading, description);

        if (completedLessons.has(index)) {
            const label = document.createElement("span");
            label.className = "completed-label";
            label.textContent = "✓ Completed";
            card.appendChild(label);
        }

        card.addEventListener("click", function() {
            openLesson(index);
        });

        lessonGrid.appendChild(card);
    });

    updateProgress();
}

// Open the selected lesson and its quiz.
function openLesson(index) {
    currentLesson = index;
    hasAnswered = false;
    lessonOpenedAt = Date.now();

    const lesson = lessonData[index];

    // short explanation 
    document.getElementById("lessonStudy").textContent = lessonStudies[index];


    document.getElementById("lessonNumber").textContent =
        "Lesson " + (index + 1) + " of " + lessonData.length;
    const lessonImage = document.getElementById("lessonImage");
    lessonImage.src = "images/lesson" + (index + 1) + ".jpg";
    lessonImage.alt = "Illustration for lesson " + (index + 1) + ": " + lesson.title;
    document.getElementById("lessonTitle").textContent = lesson.title;
    document.getElementById("lessonIntro").textContent = lesson.intro;
    document.getElementById("scenarioText").textContent = lesson.scenario;
    document.getElementById("quizQuestion").textContent = lesson.question;

    // Add the tips for this lesson.
    const tipsList = document.getElementById("lessonTips");
    tipsList.innerHTML = "";

    lesson.tips.forEach(function(tip) {
        const item = document.createElement("li");
        item.textContent = tip;
        tipsList.appendChild(item);
    });

    // Add the three possible quiz answers.
    const options = document.getElementById("quizOptions");
    options.innerHTML = "";

    lesson.options.forEach(function(answer, answerIndex) {
        const button = document.createElement("button");
        button.className = "quiz-answer";
        button.textContent = String.fromCharCode(65 + answerIndex) +
            ". " + answer;

        button.addEventListener("click", function(event) {
            checkAnswer(answerIndex, index, event);
        });

        options.appendChild(button);
    });

    const feedback = document.getElementById("quizFeedback");
    feedback.hidden = true;
    feedback.className = "quiz-feedback";
    feedback.textContent = "";

    document.getElementById("nextButton").hidden = true;

    showPage(lessonPage);
}

// Check the answer and show feedback.
function checkAnswer(answerIndex, lessonIndex, event) {
    // Only a real mouse click or keypress from the user may answer a quiz.
    if (event && !event.isTrusted) {
        return;
    }

    // Ignore clicks that happen right after a lesson opens
    // (for example the second half of a double-click on Continue).
    if (Date.now() - lessonOpenedAt < 500) {
        return;
    }

    // The answer must belong to the lesson currently on screen.
    if (lessonIndex !== currentLesson) {
        return;
    }

    if (hasAnswered) {
        return;
    }

    hasAnswered = true;

    const lesson = lessonData[currentLesson];
    const isCorrect = answerIndex === lesson.correct;
    const feedback = document.getElementById("quizFeedback");
    const buttons = document.querySelectorAll(".quiz-answer");

    // Only the FIRST answer to a lesson counts toward the score,
    // and only this one lesson is marked as completed.
    const isFirstAttempt = !completedLessons.has(currentLesson);

    if (isFirstAttempt && isCorrect) {
        firstTryCorrect.add(currentLesson);
    }

    completedLessons.add(currentLesson);

    buttons.forEach(function(button, index) {
        button.disabled = true;

        if (index === lesson.correct) {
            button.classList.add("correct");
        } else if (index === answerIndex) {
            button.classList.add("incorrect");
        }
    });

    feedback.hidden = false;

    if (isCorrect) {
        feedback.classList.add("success");
        feedback.textContent = "✓ Correct! " + lesson.explanation;
    } else {
        feedback.classList.add("error");
        feedback.textContent = "Not quite! " + lesson.explanation;
    }

    // Change the Continue button for the last lesson.
    const nextButton = document.getElementById("nextButton");
    nextButton.hidden = false;

    if (completedLessons.size === lessonData.length) {
        nextButton.textContent = "View My Results →";
    } else {
        nextButton.textContent = "Continue →";
    }

    updateProgress();
}

// Show the final score when all lessons are completed.
function showResults() {
    document.getElementById("finalScore").textContent =
        firstTryCorrect.size + "/" + lessonData.length;

    showPage(results);
}

// Find the next lesson that has not been completed.
function continueLearning() {
    if (completedLessons.size === lessonData.length) {
        showResults();
        return;
    }

    for (let i = 1; i <= lessonData.length; i++) {
        const nextIndex = (currentLesson + i) % lessonData.length;

        if (!completedLessons.has(nextIndex)) {
            openLesson(nextIndex);
            return;
        }
    }
}

// Restart the quizzes and progress.
function restartLearning() {
    completedLessons.clear();
    firstTryCorrect.clear();
    currentLesson = 0;
    displayLessonCards();
    showPage(home);
}

// Connect the navigation buttons.
document.getElementById("startButton").addEventListener("click", function() {
    displayLessonCards();
    showPage(lessons);
});

document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault();
    showPage(home);
});

document.getElementById("backButton").addEventListener("click", function() {
    displayLessonCards();
    showPage(lessons);
});

document.getElementById("nextButton").addEventListener("click", continueLearning);

document.getElementById("viewResultsButton").addEventListener("click", function() {
    if (completedLessons.size === lessonData.length) {
        showResults();
    }
});

document.getElementById("reviewButton").addEventListener("click", function() {
    displayLessonCards();
    showPage(lessons);
});

document.getElementById("restartButton").addEventListener("click", restartLearning);

// Set up the lesson cards when the website loads.
displayLessonCards();

// Wellness Corner navigation
document.getElementById("wellnessBack").addEventListener("click", function() {
    displayLessonCards();
    showPage(lessons);
});

// Breathing exercise
let breathingTimer = null;
let breathingActive = false;

function stopBreathing() {
    breathingActive = false;
    clearInterval(breathingTimer);
    breathingTimer = null;

    const circle = document.getElementById("breathingCircle");
    circle.classList.remove("inhale", "exhale");
    document.getElementById("breathingText").textContent = "Ready?";
}

document.getElementById("breatheButton").addEventListener("click", function() {
    stopBreathing();
    breathingActive = true;

    const circle = document.getElementById("breathingCircle");
    const text = document.getElementById("breathingText");

    let inhaling = true;

    function breathe() {
        if (!breathingActive) return;

        circle.classList.toggle("inhale", inhaling);
        circle.classList.toggle("exhale", !inhaling);
        text.textContent = inhaling ? "Breathe In" : "Breathe Out";
        inhaling = !inhaling;
    }

    breathe();
    breathingTimer = setInterval(breathe, 4000);
});

document.getElementById("stopBreatheButton").addEventListener("click", stopBreathing);

document.getElementById("wellnessButton").addEventListener("click", function() {
    showPage(wellness);
});
