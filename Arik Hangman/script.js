const main_img_div = document.getElementById("outlined_div");
const question_line = document.getElementById("question_line");
const correction_line = document.getElementById("is_correct");

const button1 = document.getElementById("answer1");
const button2 = document.getElementById("answer2");
const button3 = document.getElementById("answer3");
const button4 = document.getElementById("answer4");

const img_divs =
[
    document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3"),
    document.getElementById("img4"),
];

const questions = 
{
    "מתי אריק איינשטיין נולד" : [
        ["1939 ינואר 3", true],
        ["1949 ינואר 3", false],
        ["1936 דצמבר 9", false],
        ["1940 נובמבר 10", false]
    ],
    "לאיזה תפקיד התגייס בצבא": [
        ["מדריך ספורט", false],
        ["שחקן כדורסל", false],
        ["להקת הנחל", true],
        ["מפקד טנק", false]
    ],
    "מדוע נעצר אריק איינשטיין" : [
        ["תאונת דרכים", false],
        ["עישון חשיש", true],
        ["גניבה", false],
        ["סחיטה באיומים",  false]
    ],
    "באיזו עיר התגורר אריק איינשטיין כל חייו" : [
        ["באר שבע", false],
        ["חדרה", false],
        ["תל אביב", true],
        ["ירושליים", false]
    ],
    "איזו קבוצת ספורט אהד או העריץ אריק איינשטיין" : [
        ["מכבי תל אביב", false],
        ["הפועל תל אביב", true],
        ["ביתר ירושליים", false],
        ["מכבי חיפה", false]
    ],
    "מדוע הפסיק להופיע אריק איינשטיין בפני קהל" : [
        ["בגלל שרב עם האמרגן שלו", false],
        ["הוא לא הפסיק להופיע", false],
        ["העדיף לעשות קלטות של מוזיקה לילדים", false],
        ["בשל תאונת הדרכים", true]
    ]
};


change_for_question(0);


let correct_answers = 0;
let current_question = 0;
let tryy = 0;

let stop = false;

button1.addEventListener("click", () => {
    button_func(0);
});

button2.addEventListener("click", () => {
    button_func(1);
});

button3.addEventListener("click", () => {
    button_func(2);
});

button4.addEventListener("click", () => {
    button_func(3);
});

function button_func(btn_index)
{
    if (!stop)
    {   
        const answer = btn_index;
        if (questions[return_key(current_question)][answer][1])
        {
            correction_line.innerHTML = "👍נכון";
            correction_line.style.color = "blue";
            correct_answers++;
        }
        else
        {
            correction_line.innerHTML = "👎שגוי";
            correction_line.style.color = "red";
            if (wrong_answer() === false)
            {
                console.log("e");
                return;
            }
        }

        current_question++;

        if (current_question === 6)
        {
            correction_line.innerHTML = `סיימת וענית על ${correct_answers} שאלות נכון מתוך 6`;
            correction_line.style.color = "blue";
            stop = true;
            return;
        }

        change_for_question(current_question);
    }
}

function change_for_question(question_index)
{
    question_line.innerHTML = return_key(question_index);
    button1.innerHTML = questions[return_key(question_index)][0][0];
    button2.innerHTML = questions[return_key(question_index)][1][0];
    button3.innerHTML = questions[return_key(question_index)][2][0];
    button4.innerHTML = questions[return_key(question_index)][3][0];
}

function return_key(index)
{
    return Object.keys(questions)[index];
}

function wrong_answer()
{
    const img = document.createElement("img");
    img.src = `pic${tryy+1}.png`;
    img_divs[tryy].appendChild(img);
    tryy++;

    if(tryy === 4)
    {
        stop = true;
        correction_line.innerHTML = `נפסלת וענית על ${correct_answers} שאלות נכון מתוך ${current_question+1}`;
        correction_line.style.color = "red";
        return false;
    }
}