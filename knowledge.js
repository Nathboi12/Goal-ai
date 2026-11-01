/* ============================================================
   KNOWLEDGE BASE — the only thing that needs editing.
   Each entry: q = ways people might ask it, a = the answer,
   k = optional extra keywords. The entries below are the owner’s
   Q&A list. chip:true shows the question as a suggestion button.
   ============================================================ */
const BOT_NAME = "My Business Assistant";
const GREETING = "Hello! Welcome. How can I help you today?";
const FALLBACK = "I’m sorry, I don’t have an answer for that yet. Please try asking your question in a different way or contact the owner for more information.";

const KB = [
  { q: ["Hello", "Hi", "Hey", "Hi there", "Hello chatbot", "Good morning", "Good afternoon", "Good evening"], a: "Hello! Welcome. How can I help you today?" },
  { q: ["Who are you?", "What are you?", "Tell me about yourself", "What is your name?"], a: "I am a personal business assistant chatbot designed to provide information and help answer questions about the business." },
  { q: ["What can you do?", "How can you help me?", "What do you help with?", "Can you help me?"], a: "I can provide information about the business, services, projects, and other information available in my system.", k: ["help"] },
  { q: ["Are you a real person?", "Am I talking to a human?", "Are you a robot?", "Is this a chatbot?"], a: "I am an automated chatbot created to help answer questions and provide information.", k: ["robot", "human", "bot", "person"] },
  { q: ["What is your business about?", "Tell me about your business", "What do you do?", "What is this business?"], a: "We focus on building useful solutions, working on projects, and helping people and businesses.", k: ["business"] },
  { q: ["What services do you offer?", "What can you do for me?", "What services are available?", "Tell me about your services"], a: "Our services depend on our current business activities. Please ask about a specific service to learn more.", k: ["service", "offer"], chip: true },
  { q: ["What projects are you working on?", "Tell me about your projects", "What are you building?", "What projects do you have?"], a: "We are working on different projects and digital solutions. Ask about a specific project to learn more.", k: ["project"] },
  { q: ["What is Biz Flow?", "Tell me about Biz Flow", "What does Biz Flow do?", "What is the Biz Flow app?"], a: "Biz Flow is a web app designed to help users with their business activities. Users can explore the app and share feedback about their experience.", k: ["bizflow"], chip: true },
  { q: ["Can I try Biz Flow?", "How can I use Biz Flow?", "Where can I find Biz Flow?", "I want to test Biz Flow"], a: "Yes! You can visit Biz Flow and test the app. Your feedback will help us improve it.", k: ["test", "try"] },
  { q: ["Can we collaborate?", "Can I work with you?", "I want to work with you", "Are you open to collaboration?", "Can we partner?"], a: "Yes, we are open to discussing useful collaborations. Please share details about your idea or project.", k: ["collaborate", "partner", "partnership"] },
  { q: ["Can I give feedback?", "I have feedback", "I want to share my opinion", "Where can I send feedback?"], a: "Absolutely! Feedback is always welcome and helps us improve our projects and services.", k: ["feedback", "opinion"] },
  { q: ["I found a problem", "There is a bug", "Something is not working", "The app has a problem", "I want to report an issue"], a: "Thank you for letting us know. Please describe the problem, what happened, and what you were trying to do.", k: ["bug", "issue", "error", "broken", "problem"] },
  { q: ["How can I contact you?", "How can I reach you?", "I want to contact the owner", "Can I speak with someone?", "How do I get in touch?"], a: "You can contact the owner using the available contact information.", k: ["contact", "email", "phone", "reach", "owner"], chip: true },
  { q: ["How much do your services cost?", "What are your prices?", "How much does it cost?", "Tell me about your pricing"], a: "Prices may depend on the type of service or project. Please contact us with details about what you need for more information.", k: ["price", "cost", "pricing", "fee"], chip: true },
  { q: ["Thank you", "Thanks", "Thank you very much", "Thanks for your help"], a: "You’re welcome! Feel free to ask if you need anything else.", k: ["thank"] },
  { q: ["Bye", "Goodbye", "See you later", "Talk to you later"], a: "Goodbye! Have a great day.", k: ["bye", "goodbye"] }
];
