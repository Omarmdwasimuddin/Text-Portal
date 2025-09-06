'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const menuItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    submenu: [
      { name: 'Vision & Mission', href: '/about/vision-mission' },
      { name: 'About Abu Sufian', href: '/about/abu-sufian' },
      { name: 'Gallery', href: '/about/gallery' },
    ],
  },
  { name: 'Service', 
    submenu: [
      { name: 'NBR ICT', 
        submenu: [
      { name: 'ePass System', href: '/service/epass-system' },
      { name: 'PMIS', href: '/service/nbr-website' },
      { name: 'Database of Digital Services', href: '/service/nbr-website' },
      { name: 'eRequisition', href: '/service/nbr-website' },
        ]
       },
      { name: 'Income Tax', 
        submenu: [
      { name: 'Higher Court Case Management', href: '/service/higher-court-case-management' },
      { name: 'Return Verify/PSR', href: '/service/return-verify' },
      { name: 'e-Return', href: '/service/e-return' },
      { name: 'e-Tax Service', href: '/service/e-tax-service' },
      { name: 'Tax Clearance Certificat for Foreigners', 
        submenu: [
      { name: 'Taxprayers Online Application', href: '/about/taxprayers' },
      { name: 'Certificat', href: '/about/certificate' },
      { name: 'Official Use', href: '/about/official-use' },
    ],
       },
      { name: 'e-TIN', href: '/service/e-tin' },
      { name: 'e-TDS', 
        submenu: [
      { name: 'Website', href: '/about/taxprayers' },
      { name: 'Facebook', href: '/about/certificate' },
      { name: 'YouTube', href: '/about/official-use' },
    ],
       },
      { name: 'Income Tax e-Filing', href: '/service/income-tax-efiling' },
      { name: 'Travel Tax', href: '/service/travel-tax' },
    ],
       },
      { name: 'Cusotoms', 
        submenu: [
      { name: 'Bangladesh Customs', href: '/custom/bangladesh-customs' },
      { name: 'CBMS', href: '/custom/cbms' },
      { name: 'Customs Act, Rules and Proceedure', href: '/custom/custom-act' },
      { name: 'ASYCUDA WORLD', href: '/custom/asycuda-world' },
      { name: 'BSW', href: '/custom/bsw' },
      { name: 'DCH Detained Goods Management', href: '/custom/dch' },
      { name: 'e-Auction', href: '/custom/e-auction' },
    ],
       },
      { name: 'VAT', 
        submenu: [
      { name: 'eBin', href: '/vat/ebin' },
      { name: 'iVAS', href: '/vat/ivas' },
      { name: 'VAT Calculator', href: '/vat/vat-calculator' },
      { name: 'Apply for VAT Advisor', href: '/vat/apply-for-vat-advisor' },
      { name: 'Apply for VAT Agent', href: '/vat/apply-for-vat-agent' },
      { name: 'Learn VAT Online', href: '/vat/learn-vat-online' },
        ]
       },
      { name: 'Payment & Chalan', 
        submenu: [
      { name: 'ePayment', href: '/about/epayment' },
      { name: 'a-Chalan', href: '/about/a-chalan' },
        ]
       },
    ],
   },
  {
    name: 'Regulations',
    submenu: [
      {
        name: 'Instructions',
        submenu: [
          { name: 'VAT', href: '/regulations/instructions/vat' },
          { name: 'Customs', href: '/regulations/instructions/customs' },
        ],
      },
      {
        name: 'Acts',
        submenu: [
          { name: 'Finance Acts', href: '/regulations/acts/finance' },
          { name: 'VAT Acts', href: '/regulations/acts/vat' },
          { name: 'Customs Acts', href: '/regulations/acts/customs' },
          { name: 'Income Tax Acts', href: '/regulations/acts/income-tax' },
          { name: 'Excise Acts', href: '/regulations/acts/excise' },
          { name: 'Administrative Acts', href: '/regulations/acts/administrative' },
          { name: 'Other Relevant Acts', href: '/regulations/acts/other' },
        ],
      },
      { name: 'Rules', 
        submenu: [
      { name: 'Baggage Rules', href: '/regulations/rules/finance' },
      { name: 'VAT Rules', href: '/regulations/rules/vat' },
      { name: 'Income Tax Rules', href: '/regulations/rules/customs' },
      { name: 'Customs Rules', href: '/regulations/rules/customs' },
      { name: 'Excise Rules', href: '/regulations/rules/customs' },
      { name: 'Others Relevant Rules', href: '/regulations/rules/customs' },
        ]
       },
      { name: 'SROs', 
        submenu: [
      { name: 'VAT SROs', href: '/regulations/sros/finance' },
      { name: 'Income Tax SROs', href: '/regulations/sros/finance' },
      { name: 'Customs SROs', href: '/regulations/sros/finance' },
      { name: 'Excise SROs', href: '/regulations/sros/finance' },
      { name: 'Others Relevant SROs', href: '/regulations/sros/finance' },
        ]
       },
      { name: 'General Orders', 
        submenu: [
      { name: 'VAT GOs', href: '/regulations/general/finance' },
      { name: 'Income Tax GOs', href: '/regulations/general/finance' },
      { name: 'Customs GOs', href: '/regulations/general/finance' },
      { name: 'Excise GOs', href: '/regulations/general/finance' },
        ]
       },
      { name: 'Advance Ruling', href: '/regulations/advance-ruling' },
      { name: 'Bond Entitlement', href: '/regulations/bond-entitlement' },
      { name: 'Policy', href: '/regulations/policy' },
    ],
  },
  { name: 'Form', 
    submenu: [
      { name: 'e-Return Training Registration', href: '/form/income-tax' },
      { name: 'VAT', 
        submenu: [
      { name: 'VAT 1991', href: '/form/vat' },
      { name: 'VAT 2012', href: '/form/vat' },
        ]
       },
      { name: 'Income Tax', href: '/form/vat' },
      { name: 'Others Relevant Forms', href: '/form/vat' },
    ]
   },
  { name: 'Tax Types', 
    submenu: [
      { name: 'VAT', 
        submenu: [
      { name: 'VAT eService', href: '/tax-types/vat' },
      { name: 'VAT FAQ', href: '/tax-types/vat' },
      { name: 'VAT Strategic Statement', href: '/tax-types/vat' },
      { name: 'VAT Compliance Guides', href: '/tax-types/vat' },
      { name: 'VAT Act', href: '/tax-types/vat' },
      { name: 'VAT Rules', href: '/tax-types/vat' },
      { name: 'VAT Forms', href: '/tax-types/vat' },
      { name: 'VAT SROs', href: '/tax-types/vat' },
      { name: 'VAT GOs', href: '/tax-types/vat' },
      { name: 'VAT Apeal', href: '/tax-types/vat' },
        ]
       },
      { name: 'Customs Duty', 
        submenu: [
      { name: 'Operative Tariff', href: '/tax-types/customs-duty' },
      { name: 'Customs eService', href: '/tax-types/customs-duty' },
      { name: 'Customs FAQ', href: '/tax-types/customs-duty' },
      { name: 'Customs Acts', href: '/tax-types/customs-duty' },
      { name: 'Customs SROs', href: '/tax-types/customs-duty' },
      { name: 'Customs GOs', href: '/tax-types/customs-duty' },
      { name: 'Customs Apeal', href: '/tax-types/customs-duty' },
      
        ]
       },
      { name: 'Excise Duty', 
        submenu: [
      { name: 'Excise Act', href: '/tax-types/excise-duty' },
      { name: 'Excise Rules', href: '/tax-types/excise-duty' },
      { name: 'Excise SROs', href: '/tax-types/excise-duty' },
      { name: 'Excise GOs', href: '/tax-types/excise-duty' },
        ]
       },
      { name: 'Surcharge', href: '/tax-types/income-tax' },
      { name: 'Income Tax', 
        submenu: [
      { name: 'Income Tax Paripatra', href: '/tax-types/income-tax' },
      { name: 'Income Tax FAQ', href: '/tax-types/income-tax' },
      { name: 'Income Tax Act', href: '/tax-types/income-tax' },
      { name: 'Income Tax Rules', href: '/tax-types/income-tax' },
      { name: 'Income Tax Forms', href: '/tax-types/income-tax' },
      { name: 'Income Tax SROs', href: '/tax-types/income-tax' },
      { name: 'Income Tax GOs', href: '/tax-types/income-tax' },
      { name: 'Income Tax Apeal', href: '/tax-types/income-tax' },
        ]
       },
      { name: 'Tariff Schedule', href: '/tax-types/income-tax' },
    ]
   },
  { name: 'Budget', href: '/budget' },
  { name: 'Project', 
    submenu: [
      { name: 'CMID (ACCESS Program)', href: '/project/development' },
      { name: 'BMAP', href: '/project/non-development' },
      { name: 'NSW', href: '/project/foreign-aided' },
      { name: 'VOP VAT', href: '/project/foreign-aided' },
    ]
   },
  { name: 'Publications', 
    submenu: [
      { name: 'VAT', href: '/publications/annual-report' },
      { name: 'Income Tax', href: '/publications/tax-statistics' },
      { name: 'Customs', href: '/publications/research-analysis' },
      { name: 'General', href: '/publications/research-analysis' },
      { name: 'Research & Statistics', href: '/publications/research-analysis' },
      { name: 'All Publication', href: '/publications/research-analysis' },
    ]
   },
  { name: 'EFDMS', 
    submenu: [
      { name: 'List of Organizations (Devices of Genex)', href: 'https://efdms.nbr.gov.bd/' },
      { name: 'List of Organizations', href: 'https://efdms.nbr.gov.bd/' },
    ]
   },
  { name: 'FAQ', href: '/faq' },
]

function Navbar() {
  const [openMenus, setOpenMenus] = useState({})

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <nav className="bg-green-700 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <MobileMenu items={menuItems} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center justify-center w-full">
            {menuItems.map((item, idx) => (
              <div key={idx} className="relative group/menu">
                {item.submenu ? (
                  <>
                    <button className="px-3 py-2 hover:bg-green-600 rounded-md transition-colors duration-200 flex items-center">
                      {item.name}
                      <ChevronRightIcon className="w-4 h-4 ml-1 transform group-hover/menu:rotate-90 transition-transform" />
                    </button>
                    <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:pointer-events-auto transition-all duration-300 transform group-hover/menu:translate-y-0">
                      <div className="bg-green-700 text-white rounded-md min-w-[200px] py-1">
                        {item.submenu.map((subItem, subIdx) => (
                          <div key={subIdx} className="relative group/subitem">
                            {subItem.submenu ? (
                              <>
                                <div className="flex justify-between items-center px-4 py-2 hover:bg-green-600 cursor-pointer">
                                  {subItem.name}
                                  <ChevronRightIcon className="w-4 h-4 ml-2" />
                                </div>
                                <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all duration-300 transform translate-x-2 group-hover/subitem:translate-x-0">
                                  <div className="bg-green-700 text-white rounded-md min-w-[200px] py-1">
                                    {subItem.submenu.map((subSubItem, subSubIdx) => (
                                      subSubItem.submenu ? (
                                        <div key={subSubIdx} className="relative group/subsubitem">
                                          <div className="flex justify-between items-center px-4 py-2 hover:bg-green-600 cursor-pointer">
                                            {subSubItem.name}
                                            <ChevronRightIcon className="w-4 h-4 ml-2" />
                                          </div>
                                          <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/subsubitem:opacity-100 group-hover/subsubitem:visible transition-all duration-300 transform translate-x-2 group-hover/subsubitem:translate-x-0">
                                            <div className="bg-green-700 text-white rounded-md min-w-[200px] py-1">
                                              {subSubItem.submenu.map((subSubSubItem, subSubSubIdx) => (
                                                <Link
                                                  key={subSubSubIdx}
                                                  href={subSubSubItem.href}
                                                  className="block px-4 py-2 hover:bg-green-600"
                                                >
                                                  {subSubSubItem.name}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <Link
                                          key={subSubIdx}
                                          href={subSubItem.href}
                                          className="block px-4 py-2 hover:bg-green-600"
                                        >
                                          {subSubItem.name}
                                        </Link>
                                      )
                                    ))}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <Link
                                href={subItem.href}
                                className="block px-4 py-2 hover:bg-green-600"
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : item.name === 'Home' ? (
                  <Link
                    href={item.href}
                    className="px-3 py-2 hover:bg-green-600 rounded-md transition-colors duration-200 flex items-center"
                  >
                    <HomeIcon className="w-5 h-5" />
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 hover:bg-green-600 rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

// Mobile Menu Component
function MobileMenu({ items }) {
  const [open, setOpen] = useState(false)
  const [openSubMenus, setOpenSubMenus] = useState({})

  const toggleSubMenu = (name) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const renderMobileSubMenu = (submenu, level = 1) => (
    <ul className={`pl-${level * 4}`}>
      {submenu.map((item, idx) => (
        <li key={idx} className="w-full">
          {item.submenu ? (
            <>
              <button
                onClick={() => toggleSubMenu(item.name)}
                className="w-full text-left py-2 px-2 hover:bg-green-600 rounded flex justify-between items-center"
              >
                {item.name} <ChevronRightIcon className={`w-4 h-4 ml-2 transition-transform ${openSubMenus[item.name] ? 'rotate-90' : ''}`} />
              </button>
              {openSubMenus[item.name] && renderMobileSubMenu(item.submenu, level + 1)}
            </>
          ) : (
            <Link
              href={item.href}
              className=" py-2 px-2 hover:bg-green-600 rounded flex items-center"
              onClick={() => setOpen(false)}
            >
              {item.name === 'Home' && <HomeIcon className="w-5 h-5 mr-2" />}
              {item.name !== 'Home' && item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="text-white focus:outline-none px-3 py-2 border border-white rounded-md"
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-700 z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-white mb-4 px-2 py-1 border border-white rounded-md"
          >
            ✕ Close
          </button>
          <ul className="flex flex-col">
            {items.map((item, idx) => (
              <li key={idx} className="w-full">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(item.name)}
                      className="w-full text-left py-2 px-2 hover:bg-green-600 rounded flex justify-between items-center"
                    >
                      {item.name} <ChevronRightIcon className={`w-4 h-4 ml-2 transition-transform ${openSubMenus[item.name] ? 'rotate-90' : ''}`} />
                    </button>
                    {openSubMenus[item.name] && renderMobileSubMenu(item.submenu)}
                  </>
                ) : item.name === 'Home' ? (
                  <Link
                    href={item.href}
                    className="py-2 px-2 hover:bg-green-600 rounded flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    <HomeIcon className="w-5 h-5 mr-2" />
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 px-2 hover:bg-green-600 rounded"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar