"use client"
import React, { useState } from 'react';

import {
  DocumentTextIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ArrowsRightLeftIcon,
  IdentificationIcon,
  SunIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  MegaphoneIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  MapPinIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  ScaleIcon,
  DocumentMagnifyingGlassIcon,
  ChartPieIcon,
  WrenchScrewdriverIcon,
  UserIcon,
  ComputerDesktopIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  CogIcon,
  TruckIcon
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const menuItems = [
    { name: "Post Retirement Issue (PRL)", link: "/prl", icon: <DocumentTextIcon className="h-4 w-4" /> },
    { name: "Focal Point Center", link: "/focal-point", icon: <UserGroupIcon className="h-4 w-4" /> },
    { name: "Plaid Offset of NBR", link: "/field-offices", icon: <BuildingOfficeIcon className="h-4 w-4" /> },
    { name: "Transfer Posting", link: "/transfer-posting", icon: <ArrowsRightLeftIcon className="h-4 w-4" /> },
    { name: "Passport", link: "/passport", icon: <IdentificationIcon className="h-4 w-4" /> },
    { name: "EX Stargilobain Leave", link: "/ex-bangladesh-leave", icon: <GlobeAltIcon className="h-4 w-4" /> },
    { name: "Rear and Recreation Leave", link: "/rrl", icon: <SunIcon className="h-4 w-4" /> },
    { name: "(PRL)", link: "/prl-short", icon: <DocumentDuplicateIcon className="h-4 w-4" /> },
    { name: "Joining Letter", link: "/joining-letter", icon: <EnvelopeIcon className="h-4 w-4" /> },
    { name: "Discharge Office Order", link: "/discharge-order", icon: <BriefcaseIcon className="h-4 w-4" /> },
    { name: "Public Notice", link: "/public-notice", icon: <MegaphoneIcon className="h-4 w-4" /> },
    { name: "Tender Notice", link: "/tender-notice", icon: <ClipboardDocumentListIcon className="h-4 w-4" /> },
    { name: "National Integrity Strategy", link: "/integrity-strategy", icon: <ShieldCheckIcon className="h-4 w-4" /> },
    { name: "APA (Field Office)", link: "/apa-field", icon: <MapPinIcon className="h-4 w-4" /> },
    { name: "Annual Performance Agreement", link: "/annual-agreement", icon: <ChartBarIcon className="h-4 w-4" /> },
    { name: "Annual Procurement Plan (APF)", link: "/procurement-plan", icon: <ClipboardDocumentCheckIcon className="h-4 w-4" /> },
    { name: "Reggage Rules", link: "/baggage-rules", icon: <BriefcaseIcon className="h-4 w-4" /> },
    { name: "Double Taxation Avoidance Agreement", link: "/tax-avoidance", icon: <ScaleIcon className="h-4 w-4" /> },
    { name: "Income Tax Peripista", link: "/income-tax-paripatra", icon: <DocumentMagnifyingGlassIcon className="h-4 w-4" /> },
    { name: "Survey Reports", link: "/survey-reports", icon: <ChartPieIcon className="h-4 w-4" /> },
    { name: "AOR", link: "/adr", icon: <WrenchScrewdriverIcon className="h-4 w-4" /> },
    { name: "V2IT Agents/Adviders", link: "/vat-agents", icon: <UserIcon className="h-4 w-4" /> },
    { name: "NBR Enlisted Software Firm", link: "/software-firm", icon: <ComputerDesktopIcon className="h-4 w-4" /> },
    { name: "NBR Approved Software User", link: "/software-user", icon: <CheckCircleIcon className="h-4 w-4" /> },
    { name: "Airport Customs", link: "/airport-customs", icon: <TruckIcon className="h-4 w-4" /> }
  ];

  return (
    <div className="w-72 bg-white p-4 rounded-lg shadow-xl">
      <h2 className="text-lg font-bold text-white text-center bg-green-600 mb-4 py-2 rounded">
        Information Library
      </h2>
      <ul className="space-y-0">
        {menuItems.map((item, index) => (
          <li key={index} className="border-b border-gray-400 last:border-b-0">
            <a 
              href={item.link} 
              className="flex items-center text-sm text-gray-700 hover:text-blue-600 py-2 px-3 rounded hover:bg-blue-50 transition-colors"
            >
              <span className="text-gray-500 mr-3 flex-shrink-0">{item.icon}</span>
              <span className="truncate">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UpdateItem = ({ sl, subject, date, link }) => (
  <tr className="border border-gray-400 hover:bg-red-300">
    <td className="py-2 px-4 text-sm border border-gray-400 text-center">{sl}</td>
    <td className="py-2 px-4 text-sm border border-gray-400">{subject}</td>
    <td className="py-2 px-4 text-sm border border-gray-400 text-center">{date}</td>
    <td className="py-2 px-4 border border-gray-400 text-center">
      <a 
        href={link} 
        className="inline-flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
        title="Download PDF"
      >
        <img 
          src="/pdf-logo.png" 
          alt="PDF Download" 
          className="h-10 w-10 hover:opacity-80 transition-opacity"
        />
      </a>
    </td>
  </tr>
);

const LatestUpdates = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const updates = [
    { sl: '11356', subject: 'National Single Window (NSW) 5th Crew System Celebrating Half a Million CLP\'s, Champion on Paperless Customs & Conferring a-Return Champion Certificate to the Tax Payers will be 5th Crew System\'s Addicted Do Years (Add?)', date: '19-09-2025', link: '/documents/nsw-celebration.pdf' },
    { sl: '11354', subject: 'Bulk SMS 9th Crew (6th Stocks?)', date: '18-09-2025', link: '/documents/bulk-sms.pdf' },
    { sl: '11353', subject: 'Transfer/Posting order of Staff', date: '18-09-2025', link: '/documents/transfer-posting.pdf' },
    { sl: '11352', subject: 'Street ordered fixturewear date, extra willow creamer date, all five-sticks and/or full or correct check', date: '18-09-2025', link: '/documents/former-officers.pdf' },
    { sl: '11351', subject: 'Launch of process to select officials from developing or LOC Members to be sponsored under the WTO Secondment Programme ("PTMH")', date: '18-09-2025', link: '/documents/wto-program.pdf' },
    { sl: '11350', subject: '8th Stocks without, (6th Stocks with)', date: '18-09-2025', link: '/documents/customs-officer.pdf' },
    { sl: '11349', subject: 'Transfer/posting order of BCS (Taxes) [Commissioner]', date: '17-09-2025', link: '/documents/bcs-commissioner.pdf' },
    { sl: '11348', subject: 'Transfer/posting order of BCS (Taxes) [ICT]', date: '17-09-2025', link: '/documents/bcs-jct.pdf' },
    { sl: '11347', subject: '(6th Stocks without)', date: '17-09-2025', link: '/documents/customs-software.pdf' },
    { sl: '11346', subject: 'Transfer/Posting order of Staff', date: '17-09-2025', link: '/documents/staff-transfer.pdf' },
    { sl: '11345', subject: 'Transfer/posting Order of Assistant Revenue Officer (No - 2801)', date: '16-09-2025', link: '/documents/aro-2801.pdf' },
    { sl: '11344', subject: 'Transfer/posting Order of Assistant Revenue Officer (No 2791)', date: '16-09-2025', link: '/documents/aro-2791.pdf' },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex gap-6">
        <Sidebar />
        <div className="flex-1">
          <div className="bg-gray-100 p-3 rounded mb-4">
            
          </div>
          
          {/* Tab navigation */}
          <div className="mb-4">
            <div className="flex space-x-2">
              <button
                onClick={() => handleTabClick('latest')}
                className={`px-4 py-2 rounded transition-colors text-sm ${activeTab === 'latest' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
              >
                Latest Updates
              </button>
              <button
                onClick={() => handleTabClick('press')}
                className={`px-4 py-2 rounded transition-colors text-sm ${activeTab === 'press' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
              >
                Press Notes
              </button>
              <button
                onClick={() => handleTabClick('news')}
                className={`px-4 py-2 rounded transition-colors text-sm ${activeTab === 'news' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
              >
                News & Media
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-400 p-2 text-sm text-white bg-green-600">SL.</th>
                  <th className="border border-gray-400 p-2 text-sm text-white bg-green-600">Subject</th>
                  <th className="border border-gray-400 p-2 text-sm text-white bg-green-600">Issue Date</th>
                  <th className="border border-gray-400 p-2 text-sm text-white bg-green-600">Download</th>
                </tr>
              </thead>
              <tbody>
                {updates.map((update, index) => (
                  <UpdateItem key={index} {...update} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-right mt-3">
            <a 
              href="/all-updates" 
              className="text-blue-600 hover:underline font-medium text-sm"
            >
              more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;