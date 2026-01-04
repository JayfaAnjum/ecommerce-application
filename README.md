## Running the Project Locally with Docker

This project is fully Dockerized. To run it locally:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/your-project.git
cd your-project

# Stripe
STRIPE_API_KEY=your_stripe_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# SMTP (Mailtrap)
SMTP_USER=your_mailtrap_username
SMTP_PASS=your_mailtrap_password


2.**Run Docker Compose**

docker-compose up --build
Visit http://localhost

## 2️⃣ Run Docker Compose

```bash
docker-compose up --build




