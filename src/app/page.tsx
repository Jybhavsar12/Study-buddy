import { Button } from "@/components/ui/Button";
import { ReactBits } from "@/components/ui/ReactBits";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 transition-all duration-500 relative">
      <ReactBits />
      
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/10 dark:bg-black/10 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center animate-pulse-slow">
            <span className="text-white font-bold text-sm">SB</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Study Buddy</span>
        </div>
        <div className="flex gap-4 items-center">
          <ThemeToggle />
          <Link href="/auth/login">
            <Button variant="secondary">Sign In</Button>
          </Link>
          <Link href="/auth/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse-slow">
              Study Partner
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with fellow students, organize study sessions, and master your subjects together with 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> collaborative flashcards</span> and 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> real-time notes</span>.
          </p>
          
          <div className="flex gap-4 justify-center mb-16 flex-wrap">
            <Link href="/auth/register">
              <Button className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                🚀 Start Studying Together
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="secondary" className="transform hover:scale-105 transition-all duration-300">
                👀 View Demo
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link href="/features/smart-matching" className="group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Smart Matching</h3>
                <p className="text-gray-600 dark:text-gray-300">AI-powered algorithm finds your perfect study partners based on subjects, schedule, and learning style.</p>
              </div>
            </Link>

            <Link href="/features/collaborative-tools" className="group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Collaborative Tools</h3>
                <p className="text-gray-600 dark:text-gray-300">Real-time flashcards, shared notes, and progress tracking to enhance your group study sessions.</p>
              </div>
            </Link>

            <Link href="/features/session-scheduling" className="group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Session Scheduling</h3>
                <p className="text-gray-600 dark:text-gray-300">Seamlessly organize study sessions with integrated calendar and automatic reminders.</p>
              </div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Study Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-200 dark:border-gray-700 mt-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-300">
          <p>&copy; 2024 Study Buddy. Built for collaborative learning. 🎓</p>
        </div>
      </footer>
    </div>
  );
}
