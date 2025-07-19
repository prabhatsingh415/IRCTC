# IRCTC Ticket Booking Web Application

A full-stack clone of the IRCTC train ticket booking system. This project demonstrates a seamless web experience for searching trains, booking tickets, managing reservations, and more—mirroring real-world workflows found in railway reservation platforms.

**Live Demo:** [irctc-rose.vercel.app](https://irctc-rose.vercel.app)

---

## Table of Contents

* [About](#about)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Usage Instructions](#usage-instructions)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [Contact](#contact)

---

## About

This IRCTC Ticket Booking clone is a full-stack web application inspired by the actual Indian Railway ticketing platform.

* **Frontend:** HTML, CSS (Tailwind), JavaScript
* **Backend:** Java (Servlets + JDBC, see [backend repo](https://github.com/prabhatsingh415/-irctc-app-backend))
* **Functionality:** End-to-end workflow from train search and booking to ticket management and cancellation.

---

## Features

* **🎫 Ticket Booking:** Book train tickets by selecting train ID, date, and passenger details. Backend validation and session management ensure secure transactions.
* **🔍 Train Search:** Search trains between stations with real-time filtering and suggestions.
* **⚙️ Ticket Management:** Cancel bookings and retrieve booking information seamlessly using backend APIs.
* **Instant Booking:** Book your train tickets in seconds with an intuitive, responsive UI.
* **Smart Search:** Find the perfect train with live availability and route details.
* **Hassle-Free Cancellation:** Cancel tickets effortlessly in just a few clicks.

---

## Tech Stack

* **Frontend:** HTML, CSS (Tailwind), JavaScript
* **Backend:** Java (Servlets, JDBC)
* **Deployment:** [Vercel](https://vercel.com/) for frontend, [Render](https://render.com/) for backend API
* **Integrations:** RESTful API for communication between frontend and backend

---

## Getting Started

### Prerequisites

* Node.js and npm (for running frontend locally)
* Java (for backend, see [backend repo](https://github.com/prabhatsingh415/-irctc-app-backend))

### Installation

#### Frontend

```bash
git clone https://github.com/prabhatsingh415/IRCTC.git
cd IRCTC
# If using Tailwind, install dependencies:
npm install
# Build Tailwind CSS if needed:
npm run build
# Serve frontend (or use any static server)
npx serve .
```

#### Backend

See [IRCTC App Backend](https://github.com/prabhatsingh415/-irctc-app-backend) for backend setup instructions.

### Running Locally

1. Start backend server (Java Servlet/JDBC).
2. Update API endpoints in frontend JavaScript files if running locally.
3. Open `public/index.html` in your browser or use a local server.

---

## Usage Instructions

### ✨ Steps to Use the App:

1. **Search Trains**

   * Go to "Search Train" page.
   * Enter source and destination.
   * Example routes:

     | From  | To      |
     | ----- | ------- |
     | Kota  | Ajmer   |
     | Kota  | Jaipur  |
     | Kota  | Jodhpur |
     | Kota  | Delhi   |
     | Delhi | Mumbai  |
     | Delhi | Kanpur  |

2. **Get the Train ID** from the search result for the train you want to book.

3. **Book Tickets**

   * Go to the Book Ticket page.
   * **Login or Sign Up** (valid email is required as ticket will be sent to your email).
   * Enter the **Train ID** and passenger details.
   * After successful booking, the ticket will be sent automatically to your registered email.

4. **Cancel Tickets**

   * Go to Cancel Ticket page.
   * Enter your **Ticket ID** (which you received via email).
   * Submit to cancel the booking.

---

## Project Structure

```
/public
  /Pages       # HTML pages (BookTicket, searchTrain, about, contact)
  /Javascript  # JS files for interactivity and API calls
  /Css         # Tailwind output and other CSS
  /images      # Logo and assets
README.md      # This file
```

---

## Contributing

Contributions, suggestions, and bug reports are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature-xyz`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-xyz`)
5. Create a Pull Request

---

## Contact

* **Developer:** [Prabhat Singh](https://github.com/prabhatsingh415)
* **Twitter/X:** [@Prabhatsingh415](https://x.com/Prabhatsingh415)
* **LinkedIn:** [Prabhat Singh](https://www.linkedin.com/in/prabhat-singh-rj415)
* **Email:** [support@irctc.com](singh.prabhat.work@gmail.com)

---

> **Disclaimer:** This is a learning and demonstration project and is not affiliated with the official IRCTC platform.
