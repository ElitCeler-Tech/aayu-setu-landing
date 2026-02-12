"use client";

import React from "react";
import BlurFade from "./ui/blur-fade";
import { Iphone } from "./ui/iphone";
import {
  FileText,
  Upload,
  Bell,
  Search,
  Plus,
  Filter,
  ChevronLeft,
  Pill,
  Bot,
  Mic,
  ArrowRight,
  Home,
  User,
  Sparkles,
  Target,
  MessageCircle,
  Phone,
  Watch,
  UserPlus,
  Heart,
  Wind,
  Thermometer,
  Moon,
  Stethoscope,
  Video,
  X,
  Users,
  Eye,
  Download,
} from "lucide-react";

export const MedicationScreen = () => (
  <div className="h-full w-full bg-[#f8f9fa] flex flex-col pt-12 px-6 font-sans">
    {/* Status Bar Replacement/Space */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <ChevronLeft size={24} className="text-gray-900" />
        <h1 className="text-xl font-bold text-gray-900">My Medications</h1>
      </div>
    </div>

    {/* Tabs */}
    <div className="flex bg-gray-200 p-1 rounded-xl mb-6">
      <button className="flex-1 bg-[#3A8177] text-white py-2 rounded-lg text-sm font-medium shadow-sm">
        Active medication
      </button>
      <button className="flex-1 text-gray-500 py-2 rounded-lg text-sm font-medium">
        Inactive medication
      </button>
    </div>

    {/* Search */}
    <div className="flex items-center gap-3 mb-6">
      <div className="flex-1 bg-white rounded-xl px-4 py-3 flex items-center gap-2 shadow-sm border border-gray-100">
        <Search size={18} className="text-gray-400" />
        <span className="text-gray-400 text-sm">Search</span>
      </div>
      <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-[#3A8177]">
        <Filter size={20} />
      </div>
    </div>

    {/* Active Medications Header */}
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-semibold text-gray-500">
        All Active Medications
      </h2>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Interactions</span>
        <div className="w-8 h-4 bg-gray-300 rounded-full relative">
          <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
        </div>
      </div>
    </div>

    {/* Medication Card 1: Metformin */}
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-[#3A8177] text-white text-[10px] px-3 py-1 rounded-bl-xl font-medium">
        View Info
      </div>
      <div className="flex gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center">
          <Pill size={24} className="text-[#3A8177] opacity-60" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Metformim</h3>
          <p className="text-xs text-gray-500 mt-1">
            1 capsule | 09:00 AM Daily
          </p>
          <div className="flex gap-3 mt-3">
            <button className="bg-[#3A8177] text-white text-xs px-6 py-1.5 rounded-full">
              Take
            </button>
            <button className="bg-white border border-[#3A8177] text-[#3A8177] text-xs px-6 py-1.5 rounded-full">
              Skip
            </button>
          </div>
        </div>
      </div>
      <p className="text-[10px] text-gray-400 mb-3">
        Prescribed by{" "}
        <span className="text-gray-700 font-medium">Dr. Lata Singh</span>
      </p>
      <div className="bg-orange-50 p-3 rounded-xl flex justify-between items-center">
        <div>
          <p className="text-[10px] text-gray-400">Directions</p>
          <p className="text-[11px] text-gray-700 font-medium">
            Take 30 min before breakfast once daily
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-orange-500 font-medium">Used For</p>
          <p className="text-[11px] text-gray-700 font-medium">Acidity</p>
        </div>
      </div>
    </div>

    {/* Medication Card 2: Captopril */}
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-[#3A8177] text-white text-[10px] px-3 py-1 rounded-bl-xl font-medium">
        View Info
      </div>
      <div className="flex gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center">
          <div className="bg-blue-100 w-10 h-10 rounded flex items-center justify-center">
            <Pill size={20} className="text-blue-500" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Captropil</h3>
          <p className="text-xs text-gray-500 mt-1">
            1 capsule | 10:00 AM Daily
          </p>
          <p className="text-xs text-gray-500 mt-2">Taken at 10:15 AM</p>
        </div>
      </div>
      <p className="text-[10px] text-gray-400 mb-3">
        Prescribed by{" "}
        <span className="text-gray-700 font-medium">Dr. Lata Singh</span>
      </p>
      <div className="bg-orange-50 p-3 rounded-xl flex justify-between items-center">
        <div>
          <p className="text-[10px] text-gray-400">Directions</p>
          <p className="text-[11px] text-gray-700 font-medium">
            Take 30 min after breakfast once daily
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-orange-500 font-medium">Used For</p>
          <p className="text-[11px] text-gray-700 font-medium">BP</p>
        </div>
      </div>
    </div>

    {/* Floating Action Button */}
    <div className="absolute bottom-6 right-6">
      <button className="w-14 h-14 bg-[#3A8177] rounded-full flex items-center justify-center shadow-lg text-white">
        <Plus size={28} />
      </button>
    </div>
  </div>
);

export const AIAyuScreen = () => (
  <div className="h-full w-full bg-[#f8f9fa] flex flex-col font-sans relative">
    {/* Header */}
    <div className="pt-12 px-6 pb-4">
      <div className="flex items-center gap-2">
        <ChevronLeft size={24} className="text-gray-900" />
        <h1 className="text-xl font-bold text-gray-900">Chat with AI - Ayu</h1>
      </div>
    </div>

    {/* Chat Area */}
    <div className="flex-1 px-6 overflow-y-auto pb-32">
      <div className="mt-8 space-y-6">
        <div className="w-10 h-10 bg-[#3A8177] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
          AI
        </div>

        <div className="space-y-3">
          <div className="bg-white px-5 py-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-600 w-fit max-w-[85%]">
            How can I assist you today?
          </div>
          <div className="bg-white px-5 py-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-600 w-fit max-w-[85%]">
            I can only assist with medical queries.
          </div>
          <div className="bg-white px-5 py-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-600 w-fit max-w-[85%]">
            Ask about health, medicines or care...
          </div>
        </div>
      </div>
    </div>

    {/* Input Area */}
    <div className="absolute bottom-24 left-0 right-0 px-6">
      <div className="bg-white p-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 pl-5">
        <input
          type="text"
          placeholder="Ask all the medical doubts"
          className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
        />
        <div className="flex items-center gap-1">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Mic size={18} />
          </button>
          <button className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Nav */}
    <div className="absolute bottom-0 left-0 right-0 bg-[#35615E] h-20 rounded-t-[2.5rem] px-8 flex items-center justify-between z-10">
      <Home size={24} className="text-gray-300 opacity-60" />
      <FileText size={24} className="text-gray-300 opacity-60" />
      <div className="w-14 h-14 bg-[#FF8437] rounded-full -mt-8 flex items-center justify-center border-[4px] border-[#f8f9fa] shadow-lg">
        <Sparkles size={24} className="text-white" />
      </div>
      <User size={24} className="text-gray-300 opacity-60" />
      <Pill size={24} className="text-gray-300 opacity-60" />
    </div>
  </div>
);

export const HealthInsightsScreen = () => (
  <div className="h-full w-full bg-[#f8f9fa] flex flex-col font-sans relative overflow-y-auto pb-24 no-scrollbar">
    {/* Header */}
    <div className="pt-12 px-6 flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-gray-900">Hi John 👋</h1>
      </div>
      <div className="flex items-center gap-3">
        <Bell size={20} className="text-gray-600" />
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
          <User size={16} />
        </div>
      </div>
    </div>

    {/* Search */}
    <div className="px-6 mb-6">
      <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-2 shadow-sm border border-gray-100">
        <Search size={16} className="text-gray-400" />
        <span className="text-gray-400 text-sm">Search</span>
      </div>
    </div>

    {/* Hexagon Menu Grid (Simplified Layout) */}
    <div className="px-6 mb-8 relative h-48 flex items-center justify-center">
      {/* Center Logo */}
      <div className="w-12 h-12 bg-[#3A8177] rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-[#f8f9fa]">
        <Sparkles size={20} className="text-white" />
      </div>

      {/* Icons positioned circularly roughly */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 -ml-16">
        <div className="w-10 h-10 bg-[#0F67AF] rounded-full flex items-center justify-center text-white shadow-md">
          <MessageCircle size={18} />
        </div>
      </div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 ml-16">
        <div className="w-10 h-10 bg-[#4DA599] rounded-full flex items-center justify-center text-white shadow-md">
          <FileText size={18} />
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 -ml-16">
        <div className="w-10 h-10 bg-[#6C757D] rounded-full flex items-center justify-center text-white shadow-md">
          <Pill size={18} />
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 ml-16">
        <div className="w-10 h-10 bg-[#F59E0B] rounded-full flex items-center justify-center text-white shadow-md">
          <Watch size={18} />
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <div className="w-10 h-10 bg-[#EF4444] rounded-full flex items-center justify-center text-white shadow-md">
          <UserPlus size={18} />
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <div className="w-10 h-10 bg-[#7C3AED] rounded-full flex items-center justify-center text-white shadow-md">
          <Phone size={18} />
        </div>
      </div>

      {/* Connecting Lines (Decorative) */}
      <svg
        className="absolute inset-0 w-full h-full -z-0 pointer-events-none opacity-20"
        viewBox="0 0 300 200"
      >
        <path
          d="M150 100 L 100 50"
          stroke="#3A8177"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M150 100 L 200 50"
          stroke="#3A8177"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M150 100 L 100 150"
          stroke="#3A8177"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M150 100 L 200 150"
          stroke="#3A8177"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M150 100 L 50 100"
          stroke="#3A8177"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M150 100 L 250 100"
          stroke="#3A8177"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>
    </div>

    {/* Do you know Card */}
    <div className="px-6 mb-6">
      <div className="bg-[#034942] rounded-2xl p-4 text-white flex items-center justify-between relative overflow-hidden">
        <div className="z-10 relative max-w-[65%]">
          <h3 className="text-xs font-bold mb-1 opacity-90">Do you know?</h3>
          <p className="text-[10px] opacity-80 leading-tight">
            Smoking can seriously damage your lungs and heart.
          </p>
        </div>
        <div className="w-12 h-12 bg-[#FF8437] rounded-full flex items-center justify-center text-white font-bold text-xs z-10 relative shadow-sm">
          Sk
        </div>
        {/* Abstract bg shapes */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-4 -mt-4"></div>
      </div>
    </div>

    {/* Snapshot */}
    <div className="px-6 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-500">
          Today&apos;s Snapshot -
        </h3>
        <span className="text-[10px] text-[#3A8177] font-medium">
          Change device
        </span>
      </div>
      <p className="text-[10px] text-gray-400 mb-3 italic">
        Fitbit · Last sync 8:45 AM
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
            <Heart size={14} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">98 BPM</div>
            <div className="text-[9px] text-gray-400">Heart Rate</div>
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <Wind size={14} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">16 breath/min</div>
            <div className="text-[9px] text-gray-400">Respiratory Rate</div>
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <Thermometer size={14} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">36.5 °C</div>
            <div className="text-[9px] text-gray-400">Skin Temperature</div>
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <Moon size={14} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">7h 45m</div>
            <div className="text-[9px] text-gray-400">Sleep</div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Nav */}
    <div className="absolute bottom-0 left-0 right-0 bg-[#35615E] h-20 rounded-t-[2.5rem] px-8 flex items-center justify-between z-10">
      <Home size={24} className="text-white" />
      <FileText size={24} className="text-gray-300 opacity-60" />
      <div className="w-14 h-14 bg-[#FF8437] rounded-full -mt-8 flex items-center justify-center border-[4px] border-[#f8f9fa] shadow-lg">
        <Sparkles size={24} className="text-white" />
      </div>
      <User size={24} className="text-gray-300 opacity-60" />
      <Pill size={24} className="text-gray-300 opacity-60" />
    </div>
  </div>
);

export const DoctorConsultationScreen = () => (
  <div className="h-full w-full bg-[#f8f9fa] flex flex-col font-sans relative overflow-y-auto pb-24 no-scrollbar">
    {/* Header */}
    <div className="pt-12 px-6 flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <ChevronLeft size={24} className="text-gray-900" />
        <h1 className="text-xl font-bold text-gray-900">Appointments</h1>
      </div>
      <div className="w-8 h-8 bg-[#3A8177] rounded-full flex items-center justify-center text-white shadow-sm">
        <Plus size={18} />
      </div>
    </div>

    {/* Tabs */}
    <div className="px-6 mb-6">
      <div className="flex bg-gray-200 p-1 rounded-xl">
        <button className="flex-1 bg-[#3A8177] text-white py-2 rounded-lg text-sm font-medium shadow-sm">
          Upcoming
        </button>
        <button className="flex-1 text-gray-500 py-2 rounded-lg text-sm font-medium">
          Past
        </button>
      </div>
    </div>

    {/* Search */}
    <div className="px-6 mb-6">
      <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-2 shadow-sm border border-gray-100">
        <Search size={16} className="text-gray-400" />
        <span className="text-gray-400 text-sm">Search</span>
        <div className="ml-auto text-[#3A8177]">
          <Filter size={18} />
        </div>
      </div>
    </div>

    {/* Today's Appointments */}
    <div className="px-6 mb-2">
      <h3 className="text-xs font-semibold text-gray-500 mb-3">
        Today , May 25 2025
      </h3>
      <div className="space-y-3">
        {/* Card 1 */}
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden shrink-0">
            <img
              src="/doctor-1.png"
              alt="Dr"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-sm text-gray-900">
                  Dr. Shreeya Singh
                </h4>
                <p className="text-[10px] text-gray-400">
                  General & Family care
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#3A8177] flex items-center justify-center text-white">
                <Phone size={14} />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                <Watch size={10} className="text-[#3A8177]" />
                <span className="text-[9px] font-medium text-gray-600">
                  May 25 - 12:00 PM
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] text-gray-400 font-medium">
                  Voice Call
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden shrink-0">
            <img
              src="/doctor-2.png"
              alt="Dr"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-sm text-gray-900">
                  Dr. Adarsh Shah
                </h4>
                <p className="text-[10px] text-gray-400">
                  General & Family care
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#3A8177] flex items-center justify-center text-white">
                <Video size={14} />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                <Watch size={10} className="text-[#3A8177]" />
                <span className="text-[9px] font-medium text-gray-600">
                  May 25 - 01:00 PM
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] text-gray-400 font-medium">
                  Video Call
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Tomorrow's Appointments */}
    <div className="px-6 mt-4">
      <h3 className="text-xs font-semibold text-gray-500 mb-3">
        Tommorow , May 26 2025
      </h3>
      <div className="space-y-3 mb-24">
        {/* Card 3 */}
        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden shrink-0">
            <img
              src="/doctor-3.png"
              alt="Dr"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-sm text-gray-900">
                  Dr. Sahil Sharma
                </h4>
                <p className="text-[10px] text-gray-400">
                  General & Family care
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#3A8177] flex items-center justify-center text-white">
                <UserPlus size={14} />
              </div>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                <Watch size={10} className="text-[#3A8177]" />
                <span className="text-[9px] font-medium text-gray-600">
                  May 26 - 01:00 PM
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] text-gray-400 font-medium whitespace-nowrap">
                  Clinic Appointment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Nav */}
    <div className="absolute bottom-0 left-0 right-0 bg-[#35615E] h-20 rounded-t-[2.5rem] px-8 flex items-center justify-between z-10">
      <Home size={24} className="text-gray-300 opacity-60" />
      <FileText size={24} className="text-gray-300 opacity-60" />
      <div className="w-14 h-14 bg-[#FF8437] rounded-full -mt-8 flex items-center justify-center border-[4px] border-[#f8f9fa] shadow-lg">
        <Sparkles size={24} className="text-white" />
      </div>
      <User size={24} className="text-gray-300 opacity-60" />
      <Pill size={24} className="text-gray-300 opacity-60" />
    </div>
  </div>
);

export const FamilyHealthScreen = () => (
  <div className="h-full w-full bg-[#f8f9fa] flex flex-col font-sans relative">
    {/* Header */}
    <div className="pt-12 px-6 flex items-center gap-2 mb-6">
      <ChevronLeft size={24} className="text-gray-900" />
      <h1 className="text-xl font-bold text-gray-900">Track Health Together</h1>
    </div>

    {/* Main Content */}
    <div className="px-6 flex flex-col items-center text-center mt-4">
      <p className="text-xs text-gray-500 mb-8 leading-relaxed max-w-[80%]">
        Create a Group or Circle to add caregivers or caretakers who can help
        you manage health and well-being.
      </p>

      {/* Illustration Placeholder */}
      <div className="w-48 h-48 rounded-full bg-white mb-8 flex items-center justify-center relative overflow-hidden shadow-sm p-4">
        {/* Placeholder for the illustration */}
        <div className="w-full h-full bg-gray-50 rounded-full flex items-center justify-center">
          <Users size={64} className="text-gray-200" />
        </div>
        <img
          src="/family-group.png"
          alt="Family"
          className="absolute inset-0 w-full h-full object-cover opacity-0 sm:opacity-100"
          onError={(e) => (e.currentTarget.style.opacity = "0")}
        />
      </div>

      {/* Buttons */}
      <div className="w-full space-y-4">
        <button className="w-full bg-[#3A8177] text-white py-3 rounded-xl font-medium text-sm shadow-lg shadow-[#3A8177]/20">
          Create a group
        </button>
        <div className="relative flex items-center justify-center">
          <div className="h-[1px] bg-gray-200 w-full absolute"></div>
          <span className="bg-[#f8f9fa] px-2 text-xs text-gray-400 relative z-10">
            Or
          </span>
        </div>
        <button className="w-full bg-white border border-[#3A8177] text-[#3A8177] py-3 rounded-xl font-medium text-sm">
          Join Group
        </button>
      </div>
    </div>

    {/* Bottom Nav */}
    <div className="absolute bottom-0 left-0 right-0 bg-[#35615E] h-20 rounded-t-[2.5rem] px-8 flex items-center justify-between z-10">
      <Home size={24} className="text-gray-300 opacity-60" />
      <FileText size={24} className="text-gray-300 opacity-60" />
      <div className="w-14 h-14 bg-[#FF8437] rounded-full -mt-8 flex items-center justify-center border-[4px] border-[#f8f9fa] shadow-lg">
        <Sparkles size={24} className="text-white" />
      </div>
      <User size={24} className="text-gray-300 opacity-60" />
      <Pill size={24} className="text-gray-300 opacity-60" />
    </div>
  </div>
);

const features = [
  {
    id: 0,
    pill: "Track your health",
    title: "Unified Health Records",
    subtitle: "Bring all your Health Records at one place",
    image: "/uified/unified-health.png",
    topCard: {
      icon: <Upload size={20} />,
      title: "Digitalize and store all your records here",
      desc: "Upload and scan all your documents",
    },
    bottomCard: (
      <div
        className="rounded-[2rem] p-8 shadow-xl text-white space-y-6 h-full"
        style={{
          background:
            "linear-gradient(140.58deg, #006C61 22.56%, #000000 101.65%)",
        }}
      >
        <h3 className="text-xl font-medium">
          All your heath records at one place
        </h3>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 text-gray-900">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <div className="font-medium">Medical Reports</div>
              <div className="text-xs text-gray-500">Aug 01, 2024</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 text-gray-900">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <div className="font-medium">Lab Reports</div>
              <div className="text-xs text-gray-500">Aug 01, 2024</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    pill: "Track your health",
    title: "Smart Medication Management",
    subtitle: "Never miss medicines or follow-ups with intelligent reminders.",
    // We render custom component for this feature, image is fallback or unused if we modify the renderer
    image: "/uified/smart-medication.png",
    screenContent: undefined,
    topCard: {
      icon: <Bell size={20} />,
      title: "Reminders and Notifications",
      desc: "Stay on track with timely reminders and and get information on Medication.",
    },
    bottomCard: (
      <div
        className="rounded-[2rem] p-6 lg:p-8 shadow-xl text-white h-full flex flex-col justify-between"
        style={{
          background:
            "linear-gradient(140.58deg, #006C61 22.56%, #000000 101.65%)",
        }}
      >
        <div className="mb-6">
          <h3 className="text-xl font-medium">Medication Reminders & Logs</h3>
          <p className="text-sm opacity-80 mt-1">
            Never miss a dose with intelligent reminders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* List Card */}
          <div className="bg-white rounded-2xl p-4 text-gray-900 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div>
                <div className="font-bold text-xs text-gray-900">25 Sep</div>
                <div className="text-[9px] text-gray-400">
                  Scheduled: 09:50 AM
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[8px] text-white">
                  ✓
                </div>
                <div className="text-[9px] text-green-600 mt-0.5">10:50 AM</div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <div>
                <div className="font-bold text-xs text-gray-900">24 Sep</div>
                <div className="text-[9px] text-gray-400">
                  Scheduled: 09:50 AM
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[8px] text-white">
                  ✓
                </div>
                <div className="text-[9px] text-green-600 mt-0.5">10:50 AM</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-xs text-gray-900">23 Sep</div>
                <div className="text-[9px] text-gray-400">
                  Scheduled: 09:50 AM
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[8px] text-white">
                  ×
                </div>
                <div className="text-[9px] text-red-500 mt-0.5">Missed</div>
              </div>
            </div>
          </div>

          {/* Single Medication Card */}
          <div className="bg-white rounded-2xl p-4 text-gray-900 relative">
            <div className="absolute top-0 right-0 bg-[#3A8177] text-white text-[8px] px-2 py-0.5 rounded-bl-lg">
              View Info
            </div>
            <div className="flex items-start gap-3 mb-3 mt-1">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                <Pill size={18} className="text-[#3A8177]" />
              </div>
              <div>
                <div className="font-bold text-sm">Metformim</div>
                <div className="text-[9px] text-gray-500">
                  1 capsule | 09:00 AM Daily
                </div>
              </div>
            </div>

            <button className="w-full bg-[#3A8177] text-white text-xs py-1.5 rounded-full mb-3">
              Take
            </button>

            <div className="text-[9px] text-gray-400 mb-2">
              Prescribed by{" "}
              <span className="font-medium text-gray-700">Dr. Lata Singh</span>
            </div>
            <div className="bg-orange-50 p-2 rounded-lg">
              <div className="flex justify-between items-end">
                <div className="flex-1">
                  <div className="text-[8px] text-gray-400">Directions</div>
                  <div className="text-[9px] font-medium leading-tight mt-0.5">
                    Take 30 min before breakfast once daily
                  </div>
                </div>
                <div className="text-right ml-2">
                  <div className="text-[8px] text-orange-500">Used For</div>
                  <div className="text-[9px] font-medium">Acidity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    pill: "Track your health",
    title: "Smart AI Assistance- AI Ayu",
    subtitle: "Clear, AI-powered summaries for faster decisions",
    image: "/hero/hero-right.png",
    screenContent: undefined,
    topCard: {
      icon: <Bot size={20} />,
      title: "Chat with AI",
      desc: "Ask Questions about your health and get Personalized recommendations",
    },
    bottomCard: (
      <div
        className="rounded-[2rem] p-6 lg:p-8 shadow-xl text-white h-full relative overflow-hidden"
        style={{
          background:
            "linear-gradient(140.58deg, #006C61 22.56%, #000000 101.65%)",
        }}
      >
        <div className="mb-6 z-10 relative">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-medium">Chat with AI - Ayu</h3>
          </div>
          <p className="text-sm opacity-80">
            Ask questions about your health at ease
          </p>
        </div>

        <div className="bg-[#5F8D88] md:bg-[#5F8D88]/50 rounded-2xl p-4 h-[220px] relative overflow-hidden flex flex-col justify-end pb-16">
          {/* Messages */}
          <div className="space-y-4 w-full">
            {/* User Message */}
            <div className="flex justify-end items-start gap-2">
              <div className="bg-[#072D28] text-white text-xs px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[80%]">
                Can I take Virta daily?
              </div>
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-[10px] text-white shrink-0 mt-1">
                J
              </div>
            </div>

            {/* AI Response */}
            <div className="flex justify-start items-start gap-2">
              <div className="w-6 h-6 bg-[#3A8177] rounded-full flex items-center justify-center text-[8px] text-white shrink-0 mt-1">
                AI
              </div>
              <div className="bg-white text-gray-800 text-xs p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
                <div className="font-bold text-[#3A8177] mb-1 text-[10px]">
                  Ayusetu AI
                </div>
                <ul className="list-disc pl-3 space-y-1 text-[10px] leading-relaxed">
                  <li>
                    Daily use of Virta depends on its purpose and ingredients
                  </li>
                  <li>Some medicines are not meant for long-term daily use</li>
                  <li>Always follow the doctor&apos;s prescription</li>
                </ul>
              </div>
            </div>

            {/* User Message 2 */}
            <div className="flex justify-end items-center gap-2">
              <div className="bg-[#072D28] text-white text-[10px] px-4 py-2.5 rounded-full">
                Use My Medical history and respond
              </div>
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-[10px] text-white shrink-0">
                J
              </div>
            </div>
          </div>

          {/* Input Placeholer */}
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-full px-4 py-2 flex items-center justify-between">
            <span className="text-[10px] text-gray-400">
              Ask all the medical doubts...
            </span>
            <div className="w-5 h-5 bg-[#3A8177] rounded-full flex items-center justify-center">
              <ArrowRight size={10} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    pill: "Track your health",
    title: "Health Insights & Recommendations",
    subtitle: "Understand trends, improvements, and warning signals clearly.",
    image: "/hero/hero-left.png",
    screenContent: undefined,
    topCard: {
      icon: <Target size={20} />,
      title: "AI summary Reports and Health insights",
      desc: "Get Personalized health Insights",
    },
    bottomCard: (
      <div
        className="rounded-[2rem] p-6 lg:p-8 shadow-xl text-white h-full relative flex flex-col justify-between"
        style={{
          background:
            "linear-gradient(140.58deg, #006C61 22.56%, #000000 101.65%)",
        }}
      >
        <div>
          <h3 className="text-xl font-medium mb-1">Ai summarized reports</h3>
          <p className="text-sm opacity-80 mb-6">
            Organize your health records, securely share reports when needed.
          </p>

          <div className="bg-white rounded-xl p-4 flex items-center gap-4 text-gray-900 mb-6">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <div className="font-medium text-sm">Ai Analysed Summary</div>
              <div className="text-[10px] text-gray-500">Aug 01, 2024</div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="bg-[#FFF8E6] rounded-xl p-3 flex-1 flex items-start gap-2 relative">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0 text-gray-600 mt-1">
              <FileText size={10} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-900">
                Eat slow and early
              </div>
              <div className="text-[9px] text-gray-500 leading-tight mt-0.5">
                your body digests better before 8 PM.
              </div>
            </div>
            <div className="absolute bottom-[-6px] left-6 w-3 h-3 bg-[#FFF8E6] rotate-45 transform"></div>
          </div>
          <div className="bg-[#FFF8E6] rounded-xl p-3 flex-1 flex items-start gap-2 relative">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0 text-gray-600 mt-1">
              <FileText size={10} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-900">
                Limit Red Meat
              </div>
              <div className="text-[9px] text-gray-500 leading-tight mt-0.5">
                Opt for fish or dal-based protein
              </div>
            </div>
            <div className="absolute bottom-[-6px] left-6 w-3 h-3 bg-[#FFF8E6] rotate-45 transform"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    pill: "Track your health",
    title: "Doctor Consultations",
    subtitle: "Book online (call/video) or offline consultations seamlessly.",
    image: "/uified/doctor-consultations.png",
    screenContent: undefined,
    topCard: {
      icon: <Stethoscope size={20} />,
      title: "Doctor Consultations",
      desc: "Book and manage appointments effortlessly.",
    },
    bottomCard: (
      <div
        className="rounded-[2rem] p-6 lg:p-8 shadow-xl text-white h-full relative overflow-hidden flex flex-col"
        style={{
          background:
            "linear-gradient(140.58deg, #006C61 22.56%, #000000 101.65%)",
        }}
      >
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-1">
            Consult and make appointment with Ease
          </h3>
          <p className="text-sm opacity-80">Seamless appointment flow</p>
        </div>

        <div className="flex-1 bg-[#4A7A75] rounded-2xl relative overflow-hidden shadow-inner flex flex-col items-center justify-center">
          {/* Call Screen Simulation */}
          <div className="relative text-center">
            <div className="w-20 h-20 rounded-full border-2 border-white/20 p-1 mb-3 mx-auto relative">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-300 relative">
                <img
                  src="/doctor-call.png"
                  alt="Dr"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border border-white opacity-50 animate-ping"></div>
            </div>
            <h4 className="font-medium text-sm">Dr.Lata Singh</h4>
            <p className="text-[10px] opacity-70 mt-1">Ringing...</p>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
              <X size={16} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-red-100 cursor-pointer hover:scale-105 transition-transform">
              <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#3A8177] flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
              <Phone size={16} />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    pill: "Track your health",
    title: "Family Health Tracking",
    subtitle: "Manage health for parents, children, and dependents together.",
    image: "/uified/family-health.png",
    screenContent: undefined,
    topCard: {
      icon: <Users size={20} />,
      title: "Family & Doctor Sharing Mode",
      desc: "Share data securely and safely with Family and healthcare providers ( HIPPA ).",
    },
    bottomCard: (
      <div
        className="rounded-[2rem] p-6 lg:p-8 shadow-xl text-white h-full relative overflow-hidden flex flex-col"
        style={{
          background:
            "linear-gradient(140.58deg, #006C61 22.56%, #000000 101.65%)",
        }}
      >
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-1">
            Notify Family on Missed Meds
          </h3>
          <p className="text-sm opacity-80">
            Seamless experience for Family health management
          </p>
        </div>

        <div className="bg-[#4A7A75] rounded-2xl p-4 md:p-6 relative overflow-hidden shadow-inner flex flex-col justify-center flex-1">
          {/* Notification Card */}
          <div className="bg-[#5D8B86] rounded-xl p-4 shadow-lg backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3A8177] font-bold text-xs">
                R
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">
                  Dad Missed a dose of medication
                </div>
              </div>
            </div>

            <p className="text-xs opacity-90 mb-4 pl-[44px]">
              Dad wants to share a Report
            </p>

            <div className="flex gap-3 pl-[44px]">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/30 text-xs hover:bg-white/10 transition-colors">
                <Eye size={12} /> View
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-[#3A8177] text-xs font-medium hover:bg-gray-100 transition-colors">
                <Download size={12} /> Download
              </button>
            </div>
          </div>
          <div className="absolute bottom-2 right-4 text-[10px] opacity-60">
            10:00 AM
          </div>
        </div>
      </div>
    ),
  },
];

const UnifiedHealthRecords = () => {
  return (
    <section className="relative">
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-[#f9fafb]"}`}
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            {/* Header */}
            <BlurFade delay={0}>
              <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16 space-y-6">
                <div className="flex items-center gap-4 w-full max-w-lg justify-center opacity-80">
                  <div className="h-[3px] w-full bg-[linear-gradient(90deg,rgba(65,116,111,0.89)_0%,rgba(117,227,214,0.89)_100%)] opacity-50 rounded-full" />
                  <div className="shrink-0 px-6 py-1.5 rounded-full border border-[#3A8177]/30 text-[#3A8177] text-sm font-medium bg-[#ECF6F5]">
                    {feature.pill}
                  </div>
                  <div className="h-[3px] w-full bg-[linear-gradient(90deg,rgba(132,255,239,0.89)_0%,rgba(45,100,93,0.89)_100%)] opacity-50 rounded-full" />
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-heading font-medium bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 text-lg">{feature.subtitle}</p>
                </div>
              </div>
            </BlurFade>

            {/* Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
              <BlurFade delay={0.1} className="flex-1 flex justify-center w-full">
                <div className="w-[220px] sm:w-[250px]">
                  <Iphone
                    src={feature.image}
                    className="w-full h-auto drop-shadow-2xl"
                  >
                    {feature.screenContent}
                  </Iphone>
                </div>
              </BlurFade>

              <BlurFade delay={0.2} className="flex-1 w-full space-y-8 max-w-lg lg:max-w-xl">
                <div className="space-y-8">
                  <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#3A8177] rounded-full text-white">
                          {feature.topCard.icon}
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">
                          {feature.topCard.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 pl-[52px]">
                        {feature.topCard.desc}
                      </p>
                    </div>
                  </div>
                  {feature.bottomCard}
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UnifiedHealthRecords;
