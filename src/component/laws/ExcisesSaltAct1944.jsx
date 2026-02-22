'use client'
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const chapters = [
  {
    title: 'Chapter I',
    sections: [
      { 
        href: '/laws/excisessaltact1944/section/section01', 
        text: 'Short title, extent and commencement', 
        number: '1'
      },
      { 
        href: '/laws/excisessaltact1944/section/section02', 
        text: 'Definitions', 
        number: '2' 
      },
    ],
  },
  {
    title: 'Chapter II',
    subtitle: 'LEVY AND COLLECTION OF DUTY',
    sections: [
      {
        href: '/laws/excisessaltact1944/section/section03',
        text: 'Duties specified in the First Schedule to be levied',
        number: '3',
      },
      {
        href: '/laws/excisessaltact1944/section/section3A',
        text: 'Regulatory duty of Excise',
        number: '3A',
      },
      {
        href: '/laws/excisessaltact1944/section/section3AA',
        text: 'Determination of duty',
        number: '3AA',
      },
      {
        href: '/laws/excisessaltact1944/section/section3B',
        text: 'Goods particularly composed of dutiable articles',
        number: '3B',
      },
      {
        href: '/laws/excisessaltact1944/section/section3C',
        text: 'Principle for determination of tariff classification',
        number: '3C',
      },
      {
        href: '/laws/excisessaltact1944/section/section04',
        text: 'Determination of value for the purposes of duty',
        number: '4',
      },
      {
        href: '/laws/excisessaltact1944/section/section05',
        text: '[Omitted.]',
        number: '5',
      },
      {
        href: '/laws/excisessaltact1944/section/section06',
        text: 'Certain operations to be subject to licence',
        number: '6',
      },
      {
        href: '/laws/excisessaltact1944/section/section07',
        text: 'Form and conditions of licence',
        number: '7',
      },
      {
        href: '/laws/excisessaltact1944/section/section08',
        text: 'Restriction on possession of excisable goods',
        number: '8',
      },
      {
        href: '/laws/excisessaltact1944/section/section9A',
        text: 'Certain offences to be non-cognizable',
        number: '9A',
      },
      {
        href: '/laws/excisessaltact1944/section/section09',
        text: 'Offences and penalties',
        number: '9',
      },
      {
        href: '/laws/excisessaltact1944/section/section9B',
        text: 'Presumption of culpable mental state',
        number: '9B',
      },
      {
        href: '/laws/excisessaltact1944/section/section9C',
        text: 'Relevancy of statements under certain circumstances',
        number: '9C',
      },
      {
        href: '/laws/excisessaltact1944/section/section9D',
        text: 'Power of Court to publish name, place of business, etc., of persons convicted under the Act',
        number: '9D',
      },
      {
        href: '/laws/excisessaltact1944/section/section10',
        text: 'Power of Courts to order forfeiture',
        number: '10',
      },
      {
        href: '/laws/excisessaltact1944/section/section11',
        text: 'Recovery of Government Dues',
        number: '11',
      },
      {
        href: '/laws/excisessaltact1944/section/section12',
        text: 'Application of the provisions of Act IV of 1969 to excise duties',
        number: '12',
      },
      {
        href: '/laws/excisessaltact1944/section/section12A',
        text: 'Exemptions',
        number: '12A',
      },
    ],
  },
  {
    title: 'Chapter III',
    subtitle: '5[APPOINTMENT OF EXCISE OFFICERS AND THEIR POWERS AND DUTIES]',
    sections: [
      {
        href: '/laws/excisessaltact1944/section/section13A',
        text: 'Powers and duties of Excise Officers',
        number: '13A',
      },
      {
        href: '/laws/excisessaltact1944/section/section13B',
        text: 'Delegation of powers',
        number: '13B',
      },
      {
        href: '/laws/excisessaltact1944/section/section13C',
        text: 'Entrustment of functions of the Excise Officers to certain other officers',
        number: '13C',
      },
      {
        href: '/laws/excisessaltact1944/section/section13D',
        text: 'Power to arrest',
        number: '13D',
      },
      {
        href: '/laws/excisessaltact1944/section/section14',
        text: 'Power to summon persons to give evidence and produce documents in inquiries under this Act',
        number: '14',
      },
      {
        href: '/laws/excisessaltact1944/section/section15',
        text: 'Officers required to assist [Excise Officers]',
        number: '15',
      },
      {
        href: '/laws/excisessaltact1944/section/section16',
        text: 'Owners or occupiers of land to report manufacture of contraband excisable goods',
        number: '16',
      },
      {
        href: '/laws/excisessaltact1944/section/section17',
        text: 'Punishment for connivance at offences',
        number: '17',
      },
      {
        href: '/laws/excisessaltact1944/section/section18',
        text: 'Searches and arrests how to be made',
        number: '18',
      },
      {
        href: '/laws/excisessaltact1944/section/section19',
        text: 'Disposal of persons arrested',
        number: '19',
      },
      {
        href: '/laws/excisessaltact1944/section/section20',
        text: 'Procedure to be followed by officer in charge of police-station',
        number: '20',
      },
      {
        href: '/laws/excisessaltact1944/section/section21',
        text: 'Inquiry how to be made by [Excise Officers] against arrested persons',
        number: '21',
      },
      {
        href: '/laws/excisessaltact1944/section/section22',
        text: 'Vexatious search, seizure, etc., by [Excise Officer]',
        number: '22',
      },
      {
        href: '/laws/excisessaltact1944/section/section23',
        text: 'Failure of [Excise Officer] in duty',
        number: '23',
      },
    ],
  },
  {
    title: 'Chapter IV',
    subtitle: 'TRANSPORT BY SEA',
    sections: [
      {
        href: '/laws/excisessaltact1944/section/section24',
        text: 'Penalties for carrying excisable goods in certain vessels',
        number: '24',
      },
      {
        href: '/laws/excisessaltact1944/section/section25',
        text: 'Exceptions',
        number: '25',
      },
      {
        href: '/laws/excisessaltact1944/section/section26',
        text: 'Power of stoppage, search and arrest',
        number: '26',
      },
      {
        href: '/laws/excisessaltact1944/section/section27',
        text: 'Penalties for resisting officer',
        number: '27',
      },
      {
        href: '/laws/excisessaltact1944/section/section28',
        text: 'Confiscation of vessel and cargo',
        number: '28',
      },
      {
        href: '/laws/excisessaltact1944/section/section29',
        text: 'Jurisdiction',
        number: '29',
      },
      {
        href: '/laws/excisessaltact1944/section/section30',
        text: 'Power to exempt from operation of this Chapter',
        number: '30',
      },
    ],
  },
  {
    title: 'Chapter V',
    subtitle: 'SPECIAL PROVISIONS RELATING TO SALT',
    sections: [
          { 
            href: '/laws/excisessaltact1944/section/section31',
            text: 'Special and permanent rights of manufacturing salt to be recognised',
            number: '31',
          },
          { 
            href: '/laws/excisessaltact1944/section/section32',
            text: '[Omitted.]',
            number: '32',
          },
    ],
  },
  {
    title: 'Chapter VI',
    subtitle: '6ADJUDICATION OF [CASE]',
    sections: [
      {
        href: '/laws/excisessaltact1944/section/section33',
        text: 'Power of adjudication',
        number: '33',
      },
      {
        href: '/laws/excisessaltact1944/section/section34',
        text: 'Option to pay fine in lieu of confiscation',
        number: '34',
      },
      {
        href: '/laws/excisessaltact1944/section/section34A',
        text: 'Confiscation of containers and conveyance',
        number: '34A',
      },
      {
        href: '/laws/excisessaltact1944/section/section35',
        text: 'Appeals',
        number: '35',
      },
      {
        href: '/laws/excisessaltact1944/section/section35A',
        text: 'Power of the Board on departmental proceedings',
        number: '35A',
      },
      {
        href: '/laws/excisessaltact1944/section/section35B',
        text: 'Power of the [Board] to rectify mistakes',
        number: '35B',
      },
      {
        href: '/laws/excisessaltact1944/section/section36',
        text: 'Revision by Government',
        number: '36',
      },
      {
        href: '/laws/excisessaltact1944/section/section36A',
        text: 'Appearance by authorised representative',
        number: '36A',
      },
      {
        href: '/laws/excisessaltact1944/section/section36B',
        text: 'Power of the Government to rectify mistakes',
        number: '36B',
      },
      {
        href: '/laws/excisessaltact1944/section/section36C',
        text: 'Power to write off sums due to Government',
        number: '36C',
      },
    ],
  },
  {
    title: 'Chapter VII',
    subtitle: 'SUPPLEMENTAL PROVISIONS',
    sections: [
      {
        href: '/laws/excisessaltact1944/section/section37',
        text: 'Power of [Board] to make rules',
        number: '37',
      },
      {
        href: '/laws/excisessaltact1944/section/section38',
        text: 'Publication of rules and notifications',
        number: '38',
      },
      {
        href: '/laws/excisessaltact1944/section/section39',
        text: '[Omitted.]',
        number: '39',
      },
      {
        href: '/laws/excisessaltact1944/section/section40',
        text: 'Bar of suits and limitation of suits and other legal proceedings',
        number: '40',
      },
    ],
  },
  {
    title: 'Schedule',
    sections: [
      { 
        href: '/pdfs/schedule.pdf', 
        text: 'SCHEDULE',
        isPdf: true
      },
    ],
  },
  {
    title: '',
    sections: [
      { 
        href: '', 
        text: '',
        isPdf: true
      },
    ],
  },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handlePdfClick = (e, href) => {
    e.preventDefault();
    window.open(href, '_blank');
  };

  // Flatten all sections for searching
  const allSections = useMemo(() => {
    const sections = [];
    
    const extractSections = (items, levelInfo = {}) => {
      items.forEach(item => {
        if (item.sections) {
          // This is a section group with subsections
          extractSections(item.sections, {
            ...levelInfo,
            groupTitle: item.title,
            groupSubtitle: item.subtitle
          });
        } else if (item.href) {
          // This is a direct section
          sections.push({
            ...item,
            ...levelInfo,
            chapterTitle: levelInfo.chapterTitle || '',
            chapterSubtitle: levelInfo.chapterSubtitle || ''
          });
        }
      });
    };
    
    chapters.forEach(chapter => {
      extractSections(chapter.sections, {
        chapterTitle: chapter.title,
        chapterSubtitle: chapter.subtitle
      });
    });
    
    return sections;
  }, []);

  // Filter sections based on search term - WITH PRIORITY RANKING
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const term = searchTerm.toLowerCase().trim();
    
    // If search term includes "ধারা" followed by a number, search specifically by section number
    const sectionNumberMatch = term.match(/ধারা\s*(\d+\.?\d*)/);
    if (sectionNumberMatch) {
      const sectionNumber = sectionNumberMatch[1];
      const exactMatch = allSections.filter(section => 
        section.number.toString() === sectionNumber
      );
      return exactMatch.map(section => ({ ...section, priority: 1 }));
    }
    
    // Search by section number directly
    if (/^\d+\.?\d*$/.test(term)) {
      const exactMatch = allSections.filter(section => 
        section.number.toString() === term
      );
      return exactMatch.map(section => ({ ...section, priority: 1 }));
    }
    
    const searchResults = allSections.map(section => {
      const searchFields = [
        section.text?.toLowerCase() || '',
        section.chapterTitle?.toLowerCase() || '',
        section.chapterSubtitle?.toLowerCase() || '',
        section.groupTitle?.toLowerCase() || '',
        section.groupSubtitle?.toLowerCase() || '',
      ].join(' ');
      
      let priority = 0;
      
      // Exact match (পুরো বাক্য exact মিলে গেলে)
      if (searchFields.includes(term)) {
        priority = 1; // Highest priority
      }
      // Starts with match (শুরুতে মিলে গেলে)
      else if (searchFields.startsWith(term)) {
        priority = 2;
      }
      // Contains all words in order (সব words সঠিক order এ থাকলে)
      else if (searchFields.includes(term)) {
        priority = 3;
      }
      // Contains all words but not necessarily in order (সব words থাকলে)
      else {
        const searchWords = term.split(/\s+/).filter(word => word.length > 0);
        const containsAllWords = searchWords.every(word => searchFields.includes(word));
        if (containsAllWords) {
          priority = 4;
        }
        // Contains some words (কিছু word মিললে)
        else {
          const containsSomeWords = searchWords.some(word => searchFields.includes(word));
          if (containsSomeWords) {
            priority = 5;
          }
        }
      }
      
      return { ...section, priority };
    }).filter(section => section.priority > 0);
    
    // Sort by priority (lower number = higher priority)
    return searchResults.sort((a, b) => a.priority - b.priority);
  }, [searchTerm, allSections]);

  // Close search when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setIsSearchOpen(false);
    };

    if (isSearchOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchOpen]);

  // Render nested sections
  const renderSections = (sections) => {
    if (sections[0]?.sections) {
      // This is a section with subsections
      return (
        <div className="space-y-4">
          {sections.map((sectionGroup, idx) => (
            <div key={idx}>
              {sectionGroup.title && (
                <h3 className="pt-1 pb-1 mb-2 font-semibold text-center text-black bg-green-200 border-b border-blue-100 text-md">
                  {sectionGroup.title}
                </h3>
              )}
              {sectionGroup.subtitle && (
                <p className="mb-2 text-sm text-center text-gray-600">{sectionGroup.subtitle}</p>
              )}
              <ul className="space-y-1">
                {sectionGroup.sections?.map((subsection, subIdx) => (
                  <li key={subIdx} className="flex items-start">
                    <span className="font-medium text-blue-700 min-w-[2.5rem]">{subsection.number}.</span>
                    <Link 
                      href={subsection.href} 
                      className="text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
                    >
                      {subsection.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      // This is a flat section
      return (
        <ul className="space-y-2">
          {sections?.map((section, idx) => (
            <li key={idx} className="flex items-start">
              <span className="font-medium text-blue-700 min-w-[2.5rem]">{section.number}.</span>
              <Link 
                href={section.href} 
                className="text-blue-600 transition-colors duration-200 hover:text-green-800 hover:underline"
              >
                {section.text}
              </Link>
            </li>
          ))}
        </ul>
      );
    }
  };

  const regularChapters = chapters.filter(ch => 
    ch.title !== 'তফসিল' && ch.title !== 'গেজেটেড অনুলিপি'
  );
  
  const specialChapters = chapters.filter(ch => 
    ch.title === 'তফসিল' || ch.title === 'গেজেটেড অনুলিপি'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="relative overflow-hidden text-white shadow-lg bg-gradient-to-r from-green-800 to-green-800">
        <div className="container px-6 py-8 mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
            {/* Text Content */}
            <div className="flex-1 lg:pr-8">
              <h1 className="mb-2 text-xl font-bold md:text-xl">The Excises and Salt Act, 1944</h1>
              <p className="text-xs opacity-90">( ACT NO. I OF 1944 )</p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mt-6">
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="text"
                    placeholder="Search for law... "
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setIsSearchOpen(true);
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    className="w-full px-4 py-3 pl-12 text-white border rounded-lg bg-white/10 backdrop-blur-sm border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                  
                  <svg 
                    className="absolute w-5 h-5 transform -translate-y-1/2 left-4 top-1/2 text-white/70" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                  
                  {searchTerm && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setIsSearchOpen(false);
                      }}
                      className="absolute transform -translate-y-1/2 right-4 top-1/2 text-white/70 hover:text-white"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Search Results Dropdown */}
                {isSearchOpen && searchTerm && (
                  <div 
                    className="absolute left-0 right-0 z-50 mt-2 overflow-y-auto bg-white rounded-lg shadow-xl top-full max-h-96"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {filteredSections.length > 0 ? (
                      <div className="py-2">
                        <div className="px-4 py-2 text-sm text-gray-500 border-b">
                          {filteredSections.length}টি ফলাফল পাওয়া গেছে
                          <span className="px-2 py-1 ml-2 text-xs text-blue-800 bg-blue-100 rounded">
                            Exact match: {filteredSections.filter(s => s.priority === 1).length}
                          </span>
                        </div>
                        {filteredSections.map((section, index) => (
                          <Link
                            key={index}
                            href={section.href}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchTerm('');
                            }}
                            className={`block px-4 py-3 hover:bg-blue-50 border-b last:border-b-0 transition-colors duration-200 ${
                              section.priority === 1 ? 'bg-yellow-50 border-l-4 border-yellow-400' : ''
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <span className="font-medium text-blue-700">ধারা {section.number}</span>
                              <div className="flex items-center space-x-2">
                                <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded">
                                  {section.chapterTitle}
                                </span>
                                {section.groupTitle && (
                                  <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                                    {section.groupTitle}
                                  </span>
                                )}
                                {section.priority === 1 && (
                                  <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                                    Exact Match
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="mt-1 text-gray-800">{section.text}</p>
                            {section.groupTitle && (
                              <p className="mt-1 text-sm text-gray-600">{section.groupTitle}</p>
                            )}
                            <p className="mt-1 text-xs text-gray-500">{section.chapterSubtitle}</p>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        কোন ফলাফল পাওয়া যায়নি। অন্য শব্দ দিয়ে চেষ্টা করুন।
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side Image */}
            <div className="flex-shrink-0 mt-6 lg:mt-0 lg:ml-6">
              <div className="w-full lg:w-64 xl:w-80">
                <img 
                  src="/law-banner/law-banner-img.png" 
                  alt="Law Banner" 
                  className="object-contain w-full h-32 rounded-lg lg:h-40"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-6 py-8 mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="p-6 mb-8 bg-white border-l-4 border-green-700 shadow-md rounded-xl">
          <h2 className="mb-3 font-semibold text-center text-black text-md">
            <sup className='text-blue-500' title='Throughout this Act, the words “Government” and “Taka” were substituted for the words “Central Government” and “rupees” respectively by section 3 and the Second Schedule of the Bangladesh Laws (Revision and Declaration) Act, 1973 (Act No. VIII of 1973).'>1</sup>
            [<sup className='text-blue-500' title='Throughout this Act, the word “Bangladesh” was substituted for the word “Pakistan” by Article 3 of the Finance Order, 1972 (President’s Order No. 77 of 1972).'>2</sup>
          An Act to consolidate and amend the law relating to <sup className='text-blue-500' title='The word “Central” was omitted by section 3 and the Second Schedule of the Bangladesh Laws (Revision and Declaration) Act, 1973 (Act No. VIII of 1973)'>3</sup>[* * *] duties of excise and to salt.
          </h2>
          
          {/* Added important legal phrases */}
          <div className="p-4 my-4 text-justify border-l-4 rounded-r-lg bg-gray-50">
            <p className="italic text-black">
              WHEREAS it is expedient to consolidate and amend the law relating to <sup className='text-blue-500'title='The word “Central” was omitted by section 3 and the Second Schedule of the Bangladesh Laws (Revision and Declaration) Act, 1973 (Act No. VIII of 1973)'>4</sup>[* * *] duties of excise on goods manufactured or produced, and services provided or rendered, in Bangladesh and to salt;<br/><br/>
              It is hereby enacted as follows:-<br/><br/>
            </p>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 gap-6">
          {regularChapters.map((chapter, index) => (
            <div key={index} className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="p-4 font-bold text-black bg-gradient-to-r from-green-300 to-green-300">
                <h2 className="text-center text-md">{chapter.title}</h2>
                <p className="text-xs text-center opacity-90">{chapter.subtitle}</p>
              </div>
              
              <div className="p-4">
                {renderSections(chapter.sections)}
              </div>
            </div>
          ))}
        </div>

        {/* Special Chapters */}
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
          {specialChapters.map((specialChapter, idx) => (
            <div key={idx} className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="p-4 text-black bg-gradient-to-r from-green-300 to-green-300">
                <h2 className="text-xl font-bold text-center">{specialChapter.title}</h2>
                <p className="text-sm opacity-90">{specialChapter.subtitle}</p>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {specialChapter.sections?.map((section, secIdx) => (
                    <li key={secIdx} className="flex items-start">
                      {section.isPdf ? (
                        <a 
                          href={section.href} 
                          onClick={(e) => handlePdfClick(e, section.href)}
                          className="flex items-center text-blue-600 transition-colors duration-200 hover:text-green-800 hover:underline"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {section.text}
                        </a>
                      ) : (
                        <Link 
                          href={section.href} 
                          className="text-purple-600 transition-colors duration-200 hover:text-purple-800 hover:underline"
                        >
                          {section.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;