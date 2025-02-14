import React, { useState } from 'react';
import { Lock, Mail, User, KeyRound, ArrowRight } from 'lucide-react';

function App() {
  const [activeForm, setActiveForm] = useState<'login' | 'register' | 'forgot'>('login');

  const backgroundStyle = {
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {activeForm === 'login' && 'Welcome To Website Dewa!'}
              {activeForm === 'register' && 'Create Account'}
              {activeForm === 'forgot' && 'Reset Password'}
            </h1>
            <p className="text-gray-500 mt-2">
              {activeForm === 'login' && 'Please sign in to continue'}
              {activeForm === 'register' && 'Get started with your account'}
              {activeForm === 'forgot' && 'Enter your email to reset password'}
            </p>
          </div>

          {/* Forms */}
          <div className="space-y-4">
            {activeForm === 'login' && (
              <>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Sign In <ArrowRight size={20} />
                </button>
              </>
            )}

            {activeForm === 'register' && (
              <>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                  />
                </div>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Create Account <ArrowRight size={20} />
                </button>
              </>
            )}

            {activeForm === 'forgot' && (
              <>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Reset Password <ArrowRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Footer Links */}
          <div className="text-center space-y-2">
            {activeForm === 'login' && (
              <>
                <button
                  onClick={() => setActiveForm('forgot')}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  Forgot Password?
                </button>
                <div className="text-gray-500">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setActiveForm('register')}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Sign Up
                  </button>
                </div>
              </>
            )}
            {(activeForm === 'register' || activeForm === 'forgot') && (
              <div className="text-gray-500">
                Already have an account?{' '}
                <button
                  onClick={() => setActiveForm('login')}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;