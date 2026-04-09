let flashcards = [
    { question: "What is HTML?", answer: "HyperText Markup Language" },
    { question: "What is CSS?", answer: "Cascading Style Sheets" },
    { question: "What is JS?", answer: "JavaScript" }
];

let currentIndex = 0;

function displayCard() {
    document.getElementById("question").innerText = flashcards[currentIndex].question;
    document.getElementById("answer").innerText = flashcards[currentIndex].answer;
    document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
    document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    displayCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    displayCard();
}

function addCard() {
    let q = document.getElementById("newQuestion").value;
    let a = document.getElementById("newAnswer").value;

    if (q && a) {
        flashcards.push({ question: q, answer: a });
        document.getElementById("newQuestion").value = "";
        document.getElementById("newAnswer").value = "";
        alert("Flashcard added!");
    } else {
        alert("Please enter both fields");
    }
}

displayCard();