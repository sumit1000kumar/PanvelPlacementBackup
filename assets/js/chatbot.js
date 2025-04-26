
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotDialog = document.getElementById('chatbot-dialog');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const autocompleteSuggestions = document.getElementById('autocomplete-suggestions');
const loadingSpinner = document.getElementById('loading-spinner');

// Predefined dataset
const examData = {
    "SBI PO": "Exam info: <a href='/static/exams/sbi-po.html'>SBI PO Page</a><br>Syllabus: <a href='static\syllabus\SBI PO.pdf'>SBI PO Syllabus</a><br>Study material: <a href='/static/study-material/sbi-po.html'>SBI PO Study Material</a>",
    "LIC AAO": "Exam info: <a href='/static/exams/lic-aao.html'>LIC AAO Page</a><br>Syllabus: <a href='/static/exams/syllabus/lic-aao-syllabus.html'>LIC AAO Syllabus</a><br>Study material: <a href='/static/study-material/lic-aao.html'>LIC AAO Study Material</a>",
    "SSC MTS": "Exam info: <a href='/static/exams/ssc-mts.html'>SSC MTS Page</a><br>Syllabus: <a href='/static/exams/syllabus/ssc-mts-syllabus.html'>SSC MTS Syllabus</a><br>Study material: <a href='/static/study-material/ssc-mts.html'>SSC MTS Study Material</a>",
    "RBI GRADE B": "Exam info: <a href='/static/exams/rbi-grade-b.html'>RBI GRADE B Page</a><br>Syllabus: <a href='/static/exams/syllabus/rbi-grade-b-syllabus.html'>RBI GRADE B Syllabus</a><br>Study material: <a href='/static/study-material/rbi-grade-b.html'>RBI GRADE B Study Material</a>",
    "SBI CLERK": "Exam info: <a href='/static/exams/sbi-clerk.html'>SBI Clerk Page</a><br>Syllabus: <a href='/static/exams/syllabus/sbi-clerk-syllabus.html'>SBI Clerk Syllabus</a><br>Study material: <a href='/static/study-material/sbi-clerk.html'>SBI Clerk Study Material</a>",
    "UGC NET": "Exam info: <a href='/static/exams/ugc-net.html'>UGC NET Page</a><br>Syllabus: <a href='/static/exams/syllabus/ugc-net-syllabus.html'>UGC NET Syllabus</a><br>Study material: <a href='/static/study-material/ugc-net.html'>UGC NET Study Material</a>",
    "SSC CGL": "Exam info: <a href='/static/exams/ssc-cgl.html'>SSC CGL Page</a><br>Syllabus: <a href='/static/exams/syllabus/ssc-cgl-syllabus.html'>SSC CGL Syllabus</a><br>Study material: <a href='/static/study-material/ssc-cgl.html'>SSC CGL Study Material</a>",
    "IBPS SO": "Exam info: <a href='/static/exams/ibps-so.html'>IBPS SO Page</a><br>Syllabus: <a href='/static/exams/syllabus/ibps-so-syllabus.html'>IBPS SO Syllabus</a><br>Study material: <a href='/static/study-material/ibps-so.html'>IBPS SO Study Material</a>",
    "NDA": "Exam info: <a href='/static/exams/nda.html'>NDA Page</a><br>Syllabus: <a href='/static/exams/syllabus/nda-syllabus.html'>NDA Syllabus</a><br>Study material: <a href='/static/study-material/nda.html'>NDA Study Material</a>",
    "SSC GD": "Exam info: <a href='/static/exams/ssc-gd.html'>SSC GD Page</a><br>Syllabus: <a href='/static/exams/syllabus/ssc-gd-syllabus.html'>SSC GD Syllabus</a><br>Study material: <a href='/static/study-material/ssc-gd.html'>SSC GD Study Material</a>",
    "RPF CONSTABLE": "Exam info: <a href='/static/exams/rpf-constable.html'>RPF Constable Page</a><br>Syllabus: <a href='/static/exams/syllabus/rpf-constable-syllabus.html'>RPF Constable Syllabus</a><br>Study material: <a href='/static/study-material/rpf-constable.html'>RPF Constable Study Material</a>",
    "UPSC CSE": "Exam info: <a href='/static/exams/upsc-cse.html'>UPSC CSE Page</a><br>Syllabus: <a href='/static/exams/syllabus/upsc-cse-syllabus.html'>UPSC CSE Syllabus</a><br>Study material: <a href='/static/study-material/upsc-cse.html'>UPSC CSE Study Material</a>",
    "IBPS PO": "Exam info: <a href='/static/exams/ibps-po.html'>IBPS PO Page</a><br>Syllabus: <a href='/static/exams/syllabus/ibps-po-syllabus.html'>IBPS PO Syllabus</a><br>Study material: <a href='/static/study-material/ibps-po.html'>IBPS PO Study Material</a>",
    "SSC JE": "Exam info: <a href='/static/exams/ssc-je.html'>SSC JE Page</a><br>Syllabus: <a href='/static/exams/syllabus/ssc-je-syllabus.html'>SSC JE Syllabus</a><br>Study material: <a href='/static/study-material/ssc-je.html'>SSC JE Study Material</a>",
    "IBPS CLERK": "Exam info: <a href='/static/exams/ibps-clerk.html'>IBPS Clerk Page</a><br>Syllabus: <a href='/static/exams/syllabus/ibps-clerk-syllabus.html'>IBPS Clerk Syllabus</a><br>Study material: <a href='/static/study-material/ibps-clerk.html'>IBPS Clerk Study Material</a>",
    "FCI MANAGER": "Exam info: <a href='/static/exams/fci-manager.html'>FCI Manager Page</a><br>Syllabus: <a href='/static/exams/syllabus/fci-manager-syllabus.html'>FCI Manager Syllabus</a><br>Study material: <a href='/static/study-material/fci-manager.html'>FCI Manager Study Material</a>",
    "RRB NTPC": "Exam info: <a href='/static/exams/rrb-ntpc.html'>RRB NTPC Page</a><br>Syllabus: <a href='/static/exams/syllabus/rrb-ntpc-syllabus.html'>RRB NTPC Syllabus</a><br>Study material: <a href='/static/study-material/rrb-ntpc.html'>RRB NTPC Study Material</a>",
    "SSC CGL": "Exam info: <a href='/static/exams/ssc-cgl.html'>SSC CGL Page</a><br>Syllabus: <a href='/static/exams/syllabus/ssc-cgl-syllabus.html'>SSC CGL Syllabus</a><br>Study material: <a href='/static/study-material/ssc-cgl.html'>SSC CGL Study Material</a>"
};

// Show chatbot dialog
chatbotIcon.addEventListener('click', () => {
    chatbotDialog.style.display = 'flex';
    chatbotIcon.style.display = 'none';
    greetUser();
});

// Close chatbot dialog
chatbotClose.addEventListener('click', () => {
    chatbotDialog.style.display = 'none';
    chatbotIcon.style.display = 'flex';
});

// Add message to the chat
function addMessage(message, sender = 'user') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = message;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll
}

// Greet user
function greetUser() {
    addMessage("Hi! I'm here to help.  What exam are you preparing for?", "bot");
}

// Show autocomplete suggestions
chatbotInput.addEventListener('input', () => {
    const input = chatbotInput.value.toLowerCase();
    const suggestions = Object.keys(examData).filter(exam => exam.toLowerCase().includes(input));
    showAutocompleteSuggestions(suggestions);
});

function showAutocompleteSuggestions(suggestions) {
    autocompleteSuggestions.innerHTML = ''; // Clear previous suggestions
    if (suggestions.length === 0) {
        autocompleteSuggestions.style.display = 'none';
        return;
    }
    suggestions.forEach(suggestion => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.textContent = suggestion;
        suggestionDiv.addEventListener('click', () => {
            chatbotInput.value = suggestion;
            autocompleteSuggestions.style.display = 'none';
        });
        autocompleteSuggestions.appendChild(suggestionDiv);
    });
    autocompleteSuggestions.style.display = 'block';
}

// Handle user input
chatbotSend.addEventListener('click', () => {
    const userInput = chatbotInput.value.trim();
    if (userInput) {
        addMessage(userInput, 'user');
        chatbotInput.value = ''; // Clear input
        autocompleteSuggestions.style.display = 'none';
        showLoadingSpinner();
        setTimeout(() => {
            hideLoadingSpinner();
            handleUserInput(userInput);
        }, 1000); // Simulate loading delay
    }
});

// Show loading spinner
function showLoadingSpinner() {
    loadingSpinner.style.display = 'block';
}

// Hide loading spinner
function hideLoadingSpinner() {
    loadingSpinner.style.display = 'none';
}

// Handle user input and match exam
function handleUserInput(input) {
    const foundExam = Object.keys(examData).find(key =>
        key.toLowerCase().includes(input.toLowerCase())
    );

    if (foundExam) {
        addMessage(`Great choice! Here's what I found: ${examData[foundExam]}`, "bot");
    } else {
        addMessage(
            "I couldn't find that exam. Here are some popular ones you can try: " +
            Object.keys(examData).join(", "),
            "bot"
        );
    }
}
