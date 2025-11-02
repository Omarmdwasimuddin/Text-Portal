'use client'
import React from 'react';
import Image from 'next/image';
import { 
  FaSearch, 
  FaBolt, 
  FaHandshake, 
  FaGlobeAmericas,
  FaUsers,
  FaFileContract,
  FaBalanceScale,
  FaChartLine,
  FaHeart, 
  FaRocket, 
  FaArrowRight
} from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/Img/law.jpg"
            alt="Tax and Legal Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-yellow-400 opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-400 opacity-15 rounded-full animate-ping"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              About Tax & Trade Solution
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 animate-fade-in-up animation-delay-200">
              Revolutionizing Tax & Customs Compliance Through Digital Innovation
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { number: "10K+", label: "Legal Docs" },
                { number: "5K+", label: "Users" },
                { number: "500+", label: "Clients" },
                { number: "99.8%", label: "Accuracy" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 300 + 400}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To democratize access to tax and customs regulations by creating a comprehensive, 
                  user-friendly digital platform that empowers professionals, businesses, and students 
                  with accurate, up-to-date legal information and expert consultancy services.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become Bangladesh&apos;s most trusted digital ecosystem for tax and trade solutions, 
                  bridging the gap between complex regulations and practical compliance through 
                  innovative technology and expert guidance.
                </p>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
                
                {/* Animated Cards */}
                <div className="absolute top-8 left-8 w-64 h-40 bg-white rounded-lg shadow-lg p-6 transform rotate-3 animate-float">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <h3 className="font-semibold text-gray-800">Real-time Updates</h3>
                  </div>
                  <p className="text-sm text-gray-600">Instant access to latest SROs and amendments</p>
                </div>
                
                <div className="absolute bottom-8 right-8 w-56 h-32 bg-white rounded-lg shadow-lg p-4 transform -rotate-2 animate-float animation-delay-1000">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <h3 className="font-semibold text-gray-800">Smart Search</h3>
                  </div>
                  <p className="text-sm text-gray-600">AI-powered cross-referencing</p>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-36 bg-white rounded-lg shadow-lg p-4 animate-float animation-delay-2000">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <h3 className="font-semibold text-gray-800">Expert Support</h3>
                  </div>
                  <p className="text-sm text-gray-600">Professional consultancy services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section with Modern Design */}
<section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Enhanced Header */}
    <div className="text-center mb-20">
      
      <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Our Core <span className="text-blue-600">Values</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        The foundational principles that shape our mission and guide our approach to 
        delivering exceptional service to you
      </p>
    </div>
    
    {/* Enhanced Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: FaSearch,
          title: "Accuracy",
          description: "Providing verified, up-to-date legal information with proper citations and source references",
          color: "text-emerald-600",
          bgColor: "bg-emerald-50",
          borderColor: "border-emerald-200",
          gradient: "from-emerald-50 to-white"
        },
        {
          icon: FaBolt,
          title: "Innovation",
          description: "Leveraging cutting-edge technology to simplify complex tax and customs regulations",
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          gradient: "from-blue-50 to-white"
        },
        {
          icon: FaHandshake,
          title: "Trust",
          description: "Building long-term relationships based on reliability, transparency, and proven expertise",
          color: "text-purple-600",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-200",
          gradient: "from-purple-50 to-white"
        },
        {
          icon: FaGlobeAmericas,
          title: "Accessibility",
          description: "Making tax knowledge available to everyone, from professionals to students",
          color: "text-amber-600",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-200",
          gradient: "from-amber-50 to-white"
        }
      ].map((value, index) => (
        <div 
          key={index}
          className="group relative"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          
          {/* Card */}
          <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up group-hover:border-gray-200 backdrop-blur-sm">
            
            {/* Icon Container */}
            <div className={`inline-flex items-center justify-center w-15 h-15 rounded-3xl ${value.bgColor} ${value.color} mb-8 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl border ${value.borderColor}`}>
              <value.icon className="w-7 h-7" />
            </div>
            
            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
              {value.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
              {value.description}
            </p>
            
            {/* Hover Indicator */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Backed by a team of licensed professionals with decades of combined experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                area: "Tax Consultants",
                count: "15+",
                description: "Licensed VAT & Tax practitioners with NBR accreditation",
                color: "text-blue-600"
              },
              {
                icon: FaFileContract,
                area: "Customs Experts",
                count: "12+",
                description: "Seasoned professionals in customs clearance and HS coding",
                color: "text-green-600"
              },
              {
                icon: FaBalanceScale,
                area: "Legal Advisors",
                count: "8+",
                description: "Legal experts specializing in tax litigation and compliance",
                color: "text-purple-600"
              }
            ].map((expertise, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <expertise.icon className={`w-8 h-8 ${expertise.color}`} />
                  </div>
                </div>
                <div className="text-5xl font-bold text-blue-600 mb-4">{expertise.count}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{expertise.area}</h3>
                <p className="text-gray-600">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your tax and trade needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaChartLine,
                title: "Digital Transformation",
                description: "Streamlining tax compliance through innovative digital solutions and automation"
              },
              {
                icon: FaHandshake,
                title: "Client Success",
                description: "Dedicated to your success with personalized support and strategic guidance"
              },
              {
                icon: FaGlobeAmericas,
                title: "National Reach",
                description: "Serving clients across Bangladesh with local expertise and global standards"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Simplify Your Tax Compliance?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals and businesses who trust Tax & Trade Solution 
            for their tax and customs needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
              Explore Our Services
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;