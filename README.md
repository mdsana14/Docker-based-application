GameHub Registration

A simple and stylish game event registration web app built using Node.js, Express, MySQL, and fully containerized with Docker.

🚀 Features

-->Player Registration Form

-->Stores data in MySQL database

-->Responsive UI with background image

-->Dockerized Node.js app + MySQL database

-->Easy to run using docker compose

🗂 Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js + Express

Database: MySQL

Containerization: Docker & Docker Compose

📦 How to Run the Project
1️⃣ Start the application
In the project folder (where docker-compose.yml is located):
docker compose up --build

2️⃣ Access the app
Open your browser and visit:
http://localhost:5000

3️⃣ Check stored data in MySQL container:
docker exec -it gamehub_db mysql -u root -pace123


Then:
USE gaming_db;
SELECT * FROM registrations;

🛑 Stop the application
docker compose down

Output:
<img width="1901" height="1022" alt="Screenshot 2025-11-16 222511" src="https://github.com/user-attachments/assets/f41f9df8-d5e4-4d2e-b0db-392b23f9af37" />

<img width="1918" height="1020" alt="Screenshot 2025-11-16 222534" src="https://github.com/user-attachments/assets/06ce9a17-2b7c-4c1e-9b29-af0a942bb560" />

<img width="1918" height="1019" alt="Screenshot 2025-11-16 223214" src="https://github.com/user-attachments/assets/e9183538-7d56-4611-8a80-db39538fb9e7" />

<img width="1501" height="942" alt="Screenshot 2025-11-16 223308" src="https://github.com/user-attachments/assets/bb75147b-2804-4c84-8324-e525686d401b" />

