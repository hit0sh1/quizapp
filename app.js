const quiz = [
    {
        question: "2023年、最も人気なVtuberは誰？",
        answers: ["ぐら", "さめちゃん", "すいちゃん", "みこめっと"],
        correct: "ぐら",
    },
    {
        question: "2023年、最も人気な歌手は誰？",
        answers: ["Ado", "さめちゃん", "すいちゃん", "みこめっと"],
        correct: "Ado",
    },
    {
        question: "2023年、最も人気なアニメキャラクターは誰？",
        answers: ["ナルト", "さめちゃん", "すいちゃん", "みこめっと"],
        correct: "ナルト",
    },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }
    quizIndex++;
    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
    }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
