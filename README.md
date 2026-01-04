# My Dockerized Project

This project is fully Dockerized. You can run it locally using Docker Compose.

  1. Clone the Repository

git clone https://github.com/your-username/your-project.git
cd your-project


2.Set Up Environment Variables


Stripe
STRIPE_API_KEY=your_stripe_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key

SMTP (Mailtrap)
SMTP_USER=your_mailtrap_username
SMTP_PASS=your_mailtrap_password


3.Run Docker Compose

docker-compose up --build

Open your browser and visit: http://localhost:

4.Note: If you make changes to the .env file, restart the containers:

docker-compose down
docker-compose up --build







