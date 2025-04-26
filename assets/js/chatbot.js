const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotDialog = document.getElementById('chatbot-dialog');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const autocompleteSuggestions = document.getElementById('autocomplete-suggestions');
const loadingSpinner = document.getElementById('loading-spinner');

// Predefined dataset for Panvel Placement Company
const placementData = {
    "Latest Jobs": "Check the latest job openings here: <a href='/jobs.html'>View Jobs</a>",
    "Placement Preparation": "Boost your preparation with our resources: <a href='/resources/preparation.html'>Preparation Resources</a>",
    "Company List": "See the list of top recruiters associated with us: <a href='/companies.html'>Our Companies</a>",
    "Interview Tips": "Ace your interviews! Read tips here: <a href='/resources/interview-tips.html'>Interview Tips</a>",
    "Resume Help": "Need resume building guidance? Get help here: <a href='/resources/resume-building.html'>Resume Building Resources</a>",
    "Contact Support": "Have a query? Contact the TPO team here: <a href='/contact.html'>Contact Support</a>",
    "Internship Opportunities": "Find internship listings here: <a href='/internships.html'>Internship Opportunities</a>",
    "Upcoming Drives": "Stay updated with upcoming placement drives: <a href='/drives.html'>Upcoming Drives</a>",
    "Skill Development": "Enhance your skills through our programs: <a href='/resources/skill-development.html'>Skill Development Programs</a>",
    "FAQs": "Find answers to common questions: <a href='/faq.html'>FAQs</a>"
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
    addMessage("Hi! Welcome to Panvel Placement Support. 👋<br>How can I assist you today?", "bot");
}

// Show autocomplete suggestions
chatbotInput.addEventListener('input', () => {
    const input = chatbotInput.value.toLowerCase();
    const suggestions = Object.keys(placementData).filter(item => item.toLowerCase().includes(input));
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

// Handle user input and match content
function handleUserInput(input) {
    const foundItem = Object.keys(placementData).find(key =>
        key.toLowerCase().includes(input.toLowerCase())
    );

    if (foundItem) {
        addMessage(`Here's what I found for you: ${placementData[foundItem]}`, "bot");
    } else {
        addMessage(
            "Sorry, I couldn't find anything matching that. 🙁<br>Here are some options you can ask about:<br>" +
            Object.keys(placementData).join(", "),
            "bot"
        );
    }
}
