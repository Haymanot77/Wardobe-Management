# Wardrobe Management System

A web-based **Wardrobe Management System** built using **Vue 3 (Frontend)** and **Laravel 11 (Backend)**, running in **Docker**.

##  Features

- User authentication (login/registration)
- Add, edit, and delete clothing items
- Categorize items (e.g., tops, bottoms, shoes)
- Filter and search functionality
- Responsive and user-friendly UI

---

##  Setup Instructions

###  Prerequisites
Ensure you have the following installed:

- [Docker](https://www.docker.com/) & Docker Compose
- Git

---

###  Installation Steps

#### 1Clone the Repository
```sh
git clone https://github.com/YOUR-USERNAME/Wardrobe-Management.git
cd Wardrobe-Management
```

#### 2️ Start the Docker Containers
```sh
./vendor/bin/sail up -d
```

#### 3️ Install Backend Dependencies (Laravel)
```sh
./vendor/bin/sail composer install
```

#### 4️ Set Up Environment Variables
```sh
cp .env.example .env
```
Modify the `.env` file as needed, then run:
```sh
./vendor/bin/sail artisan key:generate
```

#### 5️ Run Migrations & Seed Database
```sh
./vendor/bin/sail artisan migrate --seed
```

#### 6️ Install Frontend Dependencies (Vue 3)
```sh
cd wardrobe-frontend
./vendor/bin/sail npm install
```

#### 7️ Run the Development Server
```sh
./vendor/bin/sail npm run dev
```

---

##  Usage
After setup, access the application:

- **Frontend:** `http://localhost:5173`
- **Backend API:** `http://localhost/api`

---

##  Project Structure
```
Wardrobe-Management/
├── wardrobe-frontend/    # Vue 3 Frontend
├── app/                  # Laravel App Logic
├── database/             # Database Migrations & Seeders
├── public/               # Public Assets
├── routes/               # API Routes
├── .env                  # Environment Variables
├── docker-compose.yml    # Docker Configuration
└── README.md             # Project Documentation
```

---

##  Useful Commands

- Start the project: `./vendor/bin/sail up -d`
- Stop the project: `./vendor/bin/sail down`
- Run Laravel migrations: `./vendor/bin/sail artisan migrate`
- Seed database: `./vendor/bin/sail artisan db:seed`
- Clear cache: `./vendor/bin/sail artisan cache:clear`

---

