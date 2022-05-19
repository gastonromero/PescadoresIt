const quizData = [  
    {  
        question: "¿ Qué significa F.O.D.A ?",  
        a: " Fortaleza, Oportunidades, Debilidades, Amenazas.",  
        b: " Finanzas, Opciones, Deudas, Aumento.",  
        c: " Fisico, Ojos, Dentadura, Altura.",  
        d: " Futuro, Oportunidad, Dinero, Ambiciones.",  
        correct: "a",  
    },  
    {  
        question: "¿ Cuál es el primer paso para emprender exitosamente una busqueda laboral ?",  
        a: " Envíar mi CV a distintos puestos para asi, tener mas oportunidades de entrevistas laborales.",  
        b: " Buscar cual es el oficio con mas ingreso monetario para armar un CV acorde al empleo.",
        c: " Definir mi perfil para reconocer mis fortalezas y aspectos de mejora, para luego saber que ofrecer en mi busqueda de empleo.",  
        d: " Ninguno de los anteriores",  
        correct: "c",  
    },  
    {  
        question: "En un armado de CV, ¿ Cual de estas opciones es la incorrecta ?",  
        a: " Contacto: Numero de telefono y mail actualizados",  
        b: " Experiencia laboral: listado de lo más antiguo a lo más actual.",  
        c: " Acerca de mi: Un breve resumen sobre mi perfil.",
        d: " QR de mi video CV: Un video de 3 min describiendo mi perfil.", 
        correct: "b",  
    },  
    {  
        question: "En una entrevista laboral presencial ¿Cual de estas opciones no es importante?",  
        a: " Llevar ropa nueva y costosa para crear una buena primera impresion ante el reclutador.",  
        b: " Estudiar previamente qué hace la empresa y su historia (entrar a la página institucional).",  
        c: " Tener cierta idea de la remuneración pretendida para un puesto de similares características que las que se ofrece.",  
        d: " Fijarse con antelación en un mapa la ubicación y qué transporte te lleva para ser puntual.",  
        correct: "a",  
    },  
    ];  
    const quiz = document.getElementById("quiz");  
    const answerElements = document.querySelectorAll(".answer");  
    const questionElement = document.getElementById("question");  
    const a_text = document.getElementById("a_text");  
    const b_text = document.getElementById("b_text");  
    const c_text = document.getElementById("c_text");  
    const d_text = document.getElementById("d_text");  
    const submitButton = document.getElementById("submit");  
    let currentQuiz = 0;  
    let score = 0;  
    const deselectAnswers = () => {  
    answerElements.forEach((answer) => (answer.checked = false));  
    };  
    
    const getSelected = () => {  
    let answer;  
    answerElements.forEach((answerElement) => {  
        if (answerElement.checked) answer = answerElement.id;  
    });  
    
    return answer;  
    };  
    
    const loadQuiz = () => {  
    deselectAnswers();  
    const currentQuizData = quizData[currentQuiz];  
    questionElement.innerText = currentQuizData.question;  
    a_text.innerText = currentQuizData.a;  
    b_text.innerText = currentQuizData.b;  
    c_text.innerText = currentQuizData.c;  
    d_text.innerText = currentQuizData.d;  
    };  
    
    loadQuiz();  
    
    submitButton.addEventListener("click", () => {  
    const answer = getSelected();  
    if (answer) {  
        if (answer === quizData[currentQuiz].correct) score++;  
        currentQuiz++;  
        if (currentQuiz < quizData.length) loadQuiz();  
        else {  
        quiz.innerHTML = `  
            <div class="respuesta-h">
            <h2>Respondiste <span class="respuesta-color">${score}/${quizData.length}</span> preguntas correctamente!</br></br>
            ¡FELICIDADES!
            </h2>
            </div>
            <button class="boton-quiz" onclick="history.go(0)">Jugar de nuevo</button>  
        `
        }  
    }  
    });  