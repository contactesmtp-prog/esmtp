// 'use client'

// export default function Loading() {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#0C2E53] border-opacity-50"></div>
//     </div>
//   )
// }

'use client'

import { Sparkles, Package, Users } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="relative flex flex-col items-center">
        {/* Main Loading Animation */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div className="w-20 h-20 rounded-full border-4 border-transparent border-t-[#0C2E53] animate-spin"></div>

          {/* Inner rotating ring - opposite direction */}
          <div className="absolute inset-2 w-16 h-16 rounded-full border-4 border-transparent border-b-[#D78B22] animate-spin-reverse"></div>

          {/* Center pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-[#0C2E53] rounded-full animate-pulse-scale"></div>
          </div>

          {/* Floating particles */}
          <div className="absolute -inset-4">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#D78B22] rounded-full animate-float-1"></div>
            <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-[#0C2E53] rounded-full animate-float-2"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#D78B22] rounded-full animate-float-3"></div>
            <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-[#0C2E53] rounded-full animate-float-4"></div>
          </div>
        </div>

        {/* Loading Text with Animated Dots */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-[#0C2E53] rounded-lg flex items-center justify-center animate-bounce-slow">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-[#0C2E53]">Chargement</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-dot-1"></div>
            <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-dot-2"></div>
            <div className="w-2 h-2 bg-[#D78B22] rounded-full animate-dot-3"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-[#0C2E53] rounded-full animate-progress"></div>
        </div>

        {/* Feature Icons */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center animate-fade-in-1">
            <div className="w-10 h-10 bg-[#D78B22] rounded-full flex items-center justify-center mb-2 animate-pulse-gentle">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Équipements</span>
          </div>

          <div className="flex flex-col items-center animate-fade-in-2">
            <div className="w-10 h-10 bg-[#0C2E53] rounded-full flex items-center justify-center mb-2 animate-pulse-gentle">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Formations</span>
          </div>

          <div className="flex flex-col items-center animate-fade-in-3">
            <div className="w-10 h-10 bg-[#D78B22] rounded-full flex items-center justify-center mb-2 animate-pulse-gentle">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs text-gray-600 font-medium">Excellence</span>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0C2E53]/5 rounded-full animate-pulse-slow"></div>
          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#D78B22]/5 rounded-full animate-pulse-slow"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-scale {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0) translateX(-50%);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
            opacity: 1;
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(-50%) translateX(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50%) translateX(10px);
            opacity: 1;
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0) translateX(-50%);
            opacity: 0.6;
          }
          50% {
            transform: translateY(10px) translateX(-50%);
            opacity: 1;
          }
        }

        @keyframes float-4 {
          0%,
          100% {
            transform: translateY(-50%) translateX(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50%) translateX(-10px);
            opacity: 1;
          }
        }

        @keyframes dot-1 {
          0%,
          80%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes dot-2 {
          0%,
          80%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes dot-3 {
          0%,
          80%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
            background-color: #0c2e53;
          }
          50% {
            width: 70%;
            background-color: #d78b22;
          }
          100% {
            width: 100%;
            background-color: #0c2e53;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes fade-in-1 {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-2 {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-3 {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 3s ease-in-out infinite 0.5s;
        }

        .animate-float-3 {
          animation: float-3 3s ease-in-out infinite 1s;
        }

        .animate-float-4 {
          animation: float-4 3s ease-in-out infinite 1.5s;
        }

        .animate-dot-1 {
          animation: dot-1 1.4s ease-in-out infinite;
        }

        .animate-dot-2 {
          animation: dot-2 1.4s ease-in-out infinite 0.2s;
        }

        .animate-dot-3 {
          animation: dot-3 1.4s ease-in-out infinite 0.4s;
        }

        .animate-progress {
          animation: progress 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in-1 {
          animation: fade-in-1 1s ease-out 0.5s both;
        }

        .animate-fade-in-2 {
          animation: fade-in-2 1s ease-out 0.7s both;
        }

        .animate-fade-in-3 {
          animation: fade-in-3 1s ease-out 0.9s both;
        }
      `}</style>
    </div>
  )
}
