# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d7b8120a-aaed-484f-be35-fab4324209b5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d7b8120a-aaed-484f-be35-fab4324209b5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d7b8120a-aaed-484f-be35-fab4324209b5) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

# Kaarya Connect Hub

A modern service marketplace connecting skilled workers with customers who need their services. Built with React, TypeScript, Node.js, and MySQL.

## 🚀 Features

- **User Authentication**: Secure registration and login for both customers and workers
- **Service Categories**: Browse services across multiple categories (plumbing, cleaning, electrical, etc.)
- **Job Posting**: Customers can post jobs with detailed requirements
- **Worker Profiles**: Skilled workers can create profiles showcasing their skills
- **Job Applications**: Workers can apply for jobs with proposals
- **Rating & Reviews**: Two-way rating system for quality assurance
- **Real-time Messaging**: Communication between customers and workers
- **Secure Payments**: Integrated payment processing with Stripe
- **Notifications**: Email and in-app notifications

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Shadcn/ui** for UI components
- **React Router** for navigation
- **Lucide React** for icons

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **MySQL** database (hosted on Aiven)
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Stripe** for payment processing
- **Nodemailer** for email services

## 📋 Prerequisites

- Node.js 18+
- MySQL database
- Gmail account (for email notifications)
- Stripe account (for payments)

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd kaarya-connect-hub
```

### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Environment Configuration
Create `.env` file in the backend directory:
```bash
cp .env.example .env
```

Update `.env` with your actual values:
- Database credentials (already configured for Aiven)
- Gmail app password for email notifications
- Stripe API keys for payments
- JWT secret key

### 4. Database Setup
1. Open MySQL Workbench
2. Connect to your Aiven MySQL database
3. Run the SQL schema provided in the setup documentation

### 5. Frontend Setup
```bash
cd ../
npm install
```

### 6. Start Development Servers

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
npm run dev
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get specific job
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job

### Applications
- `GET /api/applications` - Get user's applications
- `POST /api/applications` - Apply for job
- `PUT /api/applications/:id` - Update application status

### Reviews
- `GET /api/reviews` - Get reviews
- `POST /api/reviews` - Create review
- `GET /api/reviews/user/:id` - Get user reviews

### Categories
- `GET /api/categories` - Get all categories

### Messages
- `GET /api/messages` - Get user messages
- `POST /api/messages` - Send message

### Payments
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/confirm` - Confirm payment

## 🏗 Project Structure

```
kaarya-connect-hub/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── config/         # Configuration files
│   │   └── utils/          # Utility functions
│   ├── .env                # Environment variables
│   └── package.json
├── src/
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utility libraries
│   └── types/             # TypeScript types
└── package.json
```

## 🌟 Key Features Implementation

### User Types
- **Customers**: Post jobs, hire workers, make payments, leave reviews
- **Workers**: Create profiles, apply for jobs, receive payments, build reputation

### Job Workflow
1. Customer posts a job with requirements
2. Workers browse and apply with proposals
3. Customer selects preferred worker
4. Work is completed and payment processed
5. Both parties leave reviews

### Safety & Trust
- User verification system
- Rating and review system
- Secure payment processing
- Dispute resolution process

## 🚀 Deployment

### Backend Deployment
- Deploy to services like Railway, Render, or Heroku
- Update environment variables for production
- Ensure database connection is configured

### Frontend Deployment
- Deploy to Vercel, Netlify, or similar
- Update API base URL for production
- Configure environment variables

## 📱 Mobile Responsiveness

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: support@kaaryaconnect.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/kaarya-connect-hub/issues)

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Database hosting by [Aiven](https://aiven.io/)
