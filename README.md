# Therapist Booking

## Table of Contents
- [About](#about)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Team](#team)

## About
This project is a web application developed as part of the [ITI - Intake 2](https://iti.gov.eg) (Dokki Branch) "Web Development using MEARN stack" track.

It allows users to easily book appointments with therapists, securely pay online, and leave ratings and reviews.

## Technologies
- React
- Node.js
- Express
- Stripe API
- JSON Server
- Bootstrap
- HTML
- CSS
- JavaScript
- Git & GitHub

## Setup
To run this project locally, follow these steps:
1. Clone the repository:
```
git clone https://github.com/iamzeid/therapists-booking-project.git
cd therapists-booking-project
```
2. Install dependencies:
```
npm install
```
3. Start the JSON server:
```
json-server --watch db.json --port 5000
```
4. Start the React frontend:
```
npm start
```
5. Start the backend server for Stripe integration:
```
cd backend
node server.js
```

## Features
- **User Authentication**: Securely create an account and log in to access the website.
- **Therapist Profiles**: View detailed information about therapists, including specialties and experience.
- **Appointment Scheduling**: Easily book appointments with therapists based on availability.
- **Payment Processing**: Pay securely online through the website using Stripe.
- **Rating and Review**: Share experiences by leaving ratings and reviews for visited therapists.
- **Search and Filter**: Find therapists matching preferences with search and filter options.
- **FAQ Section**: Access a frequently asked questions section for quick answers.

## Team
- [Abdelrhman Mohamed Zeid](https://github.com/iamzeid) (Team Leader)
- [Asmaa Mohamed](https://github.com/elsobahy)
- [Fatma El Zahraa Abdelsattar](https://github.com/FatmaElzahraa8)
- [Masah Magdy](https://github.com/MasahAlmahdi)
- [Wafaa Samir](https://github.com/wafaasamir)
