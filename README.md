# Study Buddy 🎓 Phase 1 

A Next.js application that connects students with perfect study partners through AI-powered matching, collaborative tools, and seamless session scheduling.

## 👥 Team Members
- **[Klotey-1313]** - [Klotey-1313](https://github.com/Klotey-1313) -  Project Lead & Full Stack 
- **[Jybhavsar12]** - [Jybhavsar12](https://github.com/Jybhavsar12) - Backend & API Integration
- **[KirtanVaghela19]** - [KirtanVaghela19](https://github.com/KirtanVaghela19) - State Managment & Logic 
- **[Navprime1]** - [Navprime1](https://github.com/Navprime1) - Frontend & UI/UX  

## 🚀 Features

- **Smart Matching**: AI-powered algorithm to find compatible study partners
- **Collaborative Tools**: Real-time flashcards, notes, and progress tracking
- **Session Scheduling**: Integrated calendar for organizing study sessions
- **User Dashboard**: Personalized interface for managing study activities
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: Custom auth system
- **Development**: ESLint, Hot reload
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Git**

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/study-buddy.git
   cd study-buddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
study-buddy/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── auth/              # Authentication pages
│   │   ├── dashboard/         # User dashboard
│   │   ├── features/          # Feature pages
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable UI components
│   │   └── ui/               # Base UI components
│   └── lib/                  # Utilities and configurations
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## 🤝 Contributing

We follow a collaborative workflow to ensure code quality and smooth teamwork.

### Branch Naming Convention
- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/update-description` - Documentation updates
- `refactor/component-name` - Code refactoring

### Workflow Steps

1. **Create a new branch**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Test your changes locally

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add user authentication system"
   ```

4. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Go to GitHub and create a PR
   - Add a clear description of changes
   - Request review from team members
   - Address any feedback

### Commit Message Convention
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Current Development Status

### ✅ Completed
- [x] Project setup and configuration
- [x] Basic UI components and layout
- [x] Landing page with feature showcase
- [x] Dashboard structure
- [x] Theme toggle functionality

### 🚧 In Progress
- [ ] User authentication system
- [ ] Database integration
- [ ] Smart matching algorithm
- [ ] Real-time collaborative tools

### 📋 Upcoming
- [ ] Session scheduling system
- [ ] Mobile responsiveness improvements
- [ ] Testing implementation
- [ ] Deployment setup

## 🐛 Issues & Bug Reports

If you encounter any issues:
1. Check existing [Issues](https://github.com/Jybhavsar12/study-buddy/issues)
2. Create a new issue with detailed description
3. Include steps to reproduce the problem
4. Add relevant labels (bug, enhancement, etc.)

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This project is created for educational purposes as part of our collaborative learning experience.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment tools
- Our instructors and peers for guidance and support

---

**Happy Coding! 🚀**

For questions or support, reach out to any team member or create an issue in this repository.




--- 
# Study Buddy - Phase 2 Implementation

## Project Overview
Study Buddy is a collaborative learning platform that connects students with study partners and provides tools for effective group learning.

## Component Structure

### UI Components
- **Button** (`src/components/ui/Button.tsx`): Reusable button with multiple variants
- **ThemeToggle** (`src/components/ui/ThemeToggle.tsx`): Dark/light mode switcher
- **ReactBits** (`src/components/ui/ReactBits.tsx`): Animated background particles

### Pages
- **Home** (`src/app/page.tsx`): Landing page with feature overview
- **Dashboard** (`src/app/dashboard/page.tsx`): User dashboard with study tools
- **Demo** (`src/app/demo/page.tsx`): Interactive feature demonstrations
- **Authentication** (`src/app/auth/`): Login and registration pages
- **Features** (`src/app/features/`): Detailed feature pages

## Routing Structure
- `/` - Home page
- `/dashboard` - User dashboard (protected)
- `/demo` - Feature demonstrations
- `/auth/login` - User login
- `/auth/register` - User registration
- `/features/*` - Feature detail pages

## State Management
- **AuthContext** (`src/lib/auth.tsx`): User authentication and session management
- **Theme State**: Managed in ThemeToggle component with localStorage persistence
- **Form State**: Local state management in forms using React hooks

## Styling Approach
- **Tailwind CSS**: Utility-first CSS framework
- **Dark Mode**: System preference detection with manual toggle
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Glass Morphism**: Modern UI effects with backdrop blur

## Key Features Implemented
1. Smart partner matching interface
2. Study session scheduling
3. Collaborative tools (flashcards, notes)
4. User authentication flow
5. Responsive design across all devices
