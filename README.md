# Prompt2Vdo

Prompt2Vdo is a simple **AI text to video prototype** that demonstrates how a frontend application can send structured video-generation requests to a backend service and display the response in real time.

This project focuses on **end to end flow**, clean structure, and deployment readiness rather than actual AI video generation.

---

# Features
- Text prompt input for video description
- Style selection (Cinematic, Animation, Realistic)
- Duration selection
- Backend API integration
- Loading state and response preview
- Deployed frontend and backend

---

# Project Structure
```text
prompt2vdo/
├── client/   # React frontend
├── server/   # Node.js + Express backend
├── README.md # Project documentation

Tech Stack

Frontend

React (Create React App)
JavaScript
CSS

Backend

Node.js
Express
CORS
dotenv

Deployment

Frontend: Vercel
Backend: Render

1. Running the Project Locally
i. Clone the repository
git clone https://github.com/Sunit2003-mallick/prompt2vdo.git
cd prompt2vdo

ii. Run the Backend
cd server
npm install
node index.js

Backend runs on:
http://localhost:5000

iii. Run the Frontend
cd client
npm install
npm start

Frontend runs on:
http://localhost:3000

2. Live Deployment

Frontend (Vercel):
https://prompt2vdo.vercel.app

Backend (Render):
https://prompt2vdo-backend.onrender.com

Notes:

-This project is a prototype focused on frontend–backend integration.

-Actual AI video generation is not implemented.

-The UI is optimized for desktop view; responsiveness can be added later.

Author:

Sunit Kumar Mallick
GitHub: https://github.com/Sunit2003-mallick

License:
This project is for learning and evaluation purposes.