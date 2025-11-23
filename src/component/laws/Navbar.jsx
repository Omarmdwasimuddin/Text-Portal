'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HomeIcon, ChevronRightIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const menuItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    submenu: [
      { name: 'TTS', href: '/about/tts' },
    ],
  },
  { name: 'Service', 
    submenu: [
      { name: 'VAT', href:'/service/vat'},
      { name: 'Cusotoms', href:'/service/customs'},
      { name: 'Income Tax', href:'/service/income-tax'},
      { name: 'RJSC', href:'/service/income-tax'},
      { name: 'Trade Solutions', href:'/service/income-tax'},
    ],
   },
  {
    name: 'Regulations',
    submenu: [
      {
        name: 'Acts',
        submenu: [
          { name: 'Finance Act', href: '/regulations/acts/finance-acts' },
          { name: 'VAT Act', href: '/regulations/acts/vat-acts' },
          { name: 'Customs Act', href: '/regulations/instructions/customs' },
          { name: 'Income Tax Act', href: '/regulations/instructions/customs' },
          { name: 'Excise and Salt Act', href: '/regulations/instructions/customs' },
          { name: 'Others Acts', href: '/regulations/instructions/customs' },
        ],
      },
      {
        name: 'Rules',
        submenu: [
          { name: 'VAT Rules', href: '/regulations/acts/finance' },
          { name: 'Customs Rules', href: '/regulations/acts/vat' },
          { name: 'Income Tax Rules', href: '/regulations/acts/customs' },
          { name: 'Others Rules', href: '/regulations/acts/income-tax' },
        ],
      },
      { name: 'SRO', 
        submenu: [
      { name: 'VAT', href: '/regulations/rules/finance' },
      { name: 'Customs', href: '/regulations/rules/vat' },
      { name: 'Income Tax', href: '/regulations/rules/customs' },
      { name: 'Others', href: '/regulations/rules/customs' },
        ]
       },
      { name: 'GO (General Order)', 
        submenu: [
      { name: 'VAT', href: '/regulations/sros/finance' },
      { name: 'Customs', href: '/regulations/sros/finance' },
      { name: 'Income Tax', href: '/regulations/sros/finance' },
      { name: 'Others', href: '/regulations/sros/finance' },
        ]
       },
      { name: 'Explanations', 
        submenu: [
      { name: 'VAT', href: '/regulations/general/finance' },
      { name: 'Customs', href: '/regulations/general/finance' },
      { name: 'Income Tax', href: '/regulations/general/finance' },
      { name: 'Others', href: '/regulations/general/finance' },
        ]
       },
    ],
  },
  { name: 'Forms', 
    submenu: [
      { name: 'VAT', href: '/form/vat' },
      { name: 'Customs', href: '/form/customs' },
      { name: 'Income Tax', href: '/form/income-tax' },
      { name: 'Others', href: '/form/others' },
    ]
   },
  { name: 'Tax Types', 
    submenu: [
      { name: 'VAT', href: '/tax-types/vat' },
      { name: 'Customs', href: '/tax-types/customs' },
      { name: 'Income Tax', href: '/tax-types/income-tax' },
      { name: 'Others', href: '/tax-types/others' },
    ]
   },
  { name: 'Budget', 
    submenu: [
      { name: 'Speech', href: '/budget/speech' },
    ]
   },
  { name: 'Publications', 
    submenu: [
      { name: 'VAT', href: '/publications/annual-report' },
      { name: 'Customs', href: '/publications/tax-statistics' },
      { name: 'Income Tax', href: '/publications/research-analysis' },
      { name: 'Others', href: '/publications/research-analysis' },
    ]
   },
  { name: 'FAQ', 
    submenu: [
      { name: 'VAT', href: '/faq/vat' },
      { name: 'Customs', href: '/faq/customs' },
      { name: 'Income Tax', href: '/faq/tax' },
      { name: 'Others', href: '/faq/others' },
    ]
   },
  { name: 'Blogs', 
    submenu: [
      { name: 'VAT', href: '/publications/annual-report' },
      { name: 'Customs', href: '/publications/tax-statistics' },
      { name: 'Income Tax', href: '/publications/research-analysis' },
      { name: 'Others', href: '/publications/research-analysis' },
    ]
   },
  { name: 'Login', href: '/login', icon: UserIcon },
  { name: 'Cart', href: '/cart', icon: ShoppingCartIcon, onlyIcon: true },
]

function Navbar() {
  const [openMenus, setOpenMenus] = useState({})
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

    return (
    <nav className={`w-full transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 z-50 bg-gradient-to-r from-green-400/95 to-red-400/95 shadow-lg' : 'bg-green-800 relative'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <MobileMenu items={menuItems} isSticky={isSticky} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center justify-center w-full z-50">
            {menuItems.map((item, idx) => (
              <div key={idx} className="relative group/menu">
                {item.submenu ? (
                  <>
                    <button className={`px-3 py-2 whitespace-nowrap ${isSticky ? 'text-gray-900' : 'text-white'} hover:bg-green-600 rounded-md transition-colors duration-200 flex items-center`}>
                      {item.name}
                      <ChevronRightIcon className="w-4 h-4 ml-1 transform group-hover/menu:rotate-90 transition-transform" />
                    </button>
                    <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:pointer-events-auto transition-all duration-300 transform group-hover/menu:translate-y-0">
                      <div className="bg-green-700 text-white rounded-md min-w-[200px] py-1">
                        {item.submenu.map((subItem, subIdx) => (
                          <div key={subIdx} className="relative group/subitem">
                            {subItem.submenu ? (
                              <>
                                <div className="flex justify-between items-center px-4 py-2 text-white hover:bg-green-600 cursor-pointer">
                                  {subItem.name}
                                  <ChevronRightIcon className="w-4 h-4 ml-2" />
                                </div>
                                <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all duration-300 transform translate-x-2 group-hover/subitem:translate-x-0">
                                  <div className="bg-green-700 text-white rounded-md min-w-[200px] py-1">
                                    {subItem.submenu.map((subSubItem, subSubIdx) => (
                                      subSubItem.submenu ? (
                                        <div key={subSubIdx} className="relative group/subsubitem">
                                          <div className="flex justify-between items-center px-4 py-2 text-white hover:bg-green-600 cursor-pointer">
                                            {subSubItem.name}
                                            <ChevronRightIcon className="w-4 h-4 ml-2" />
                                          </div>
                                          <div className="absolute left-full top-0 pl-1 opacity-0 invisible group-hover/subsubitem:opacity-100 group-hover/subsubitem:visible transition-all duration-300 transform translate-x-2 group-hover/subsubitem:translate-x-0">
                                            <div className="bg-green-700 text-white rounded-md min-w-[200px] py-1">
                                              {subSubItem.submenu.map((subSubSubItem, subSubSubIdx) => (
                                                <Link
                                                  key={subSubSubIdx}
                                                  href={subSubSubItem.href}
                                                  className="block px-4 py-2 text-white hover:bg-green-600"
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
                                          className="block px-4 py-2 text-white hover:bg-green-600"
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
                                className="block px-4 py-2 text-white hover:bg-green-600"
                              >
                                {subItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : item.icon ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 ${isSticky ? 'text-gray-900' : 'text-white'} hover:bg-green-600 rounded-md transition-colors duration-200 flex items-center`}
                  >
                    <item.icon className="w-5 h-5" />
                    {!item.onlyIcon && <span className="ml-1">{item.name}</span>}
                  </Link>
                ) : item.name === 'Home' ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 ${isSticky ? 'text-gray-900' : 'text-white'} hover:bg-green-600 rounded-md transition-colors duration-200 flex items-center`}
                  >
                    <HomeIcon className="w-5 h-5" />
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 ${isSticky ? 'text-gray-900' : 'text-white'} hover:bg-green-600 rounded-md transition-colors duration-200`}
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
function MobileMenu({ items, isSticky }) {
  const [open, setOpen] = useState(false)
  const [openSubMenus, setOpenSubMenus] = useState({})

  const toggleSubMenu = (name) => {
    setOpenSubMenus((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const renderMobileSubMenu = (submenu, level = 1) => (
    <ul className={`${level === 1 ? 'pl-4' : level === 2 ? 'pl-8' : 'pl-12'}`}>
      {submenu.map((item, idx) => (
        <li key={idx} className="w-full">
          {item.submenu ? (
            <>
              <button
                onClick={() => toggleSubMenu(item.name)}
                className="w-full text-left py-2 px-2 text-white hover:bg-green-600 rounded flex justify-between items-center"
              >
                {item.name} <ChevronRightIcon className={`w-4 h-4 ml-2 transition-transform ${openSubMenus[item.name] ? 'rotate-90' : ''}`} />
              </button>
              {openSubMenus[item.name] && renderMobileSubMenu(item.submenu, level + 1)}
            </>
          ) : item.icon ? (
            <Link
              href={item.href}
              className="py-2 px-2 text-white hover:bg-green-600 rounded flex items-center"
              onClick={() => setOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              {!item.onlyIcon && <span className="ml-2">{item.name}</span>}
            </Link>
          ) : item.name === 'Home' ? (
            <Link
              href={item.href}
              className="py-2 px-2 text-white hover:bg-green-600 rounded flex items-center"
              onClick={() => setOpen(false)}
            >
              <HomeIcon className="w-5 h-5 mr-2" />
            </Link>
          ) : (
            <Link
              href={item.href}
              className="block py-2 px-2 text-white hover:bg-green-600 rounded"
              onClick={() => setOpen(false)}
            >
              {item.name}
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
        className={`${isSticky ? 'text-gray-900 border-gray-900' : 'text-white border-white'} focus:outline-none px-3 py-2 border rounded-md`}
      >
        ☰
      </button>

      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)}></div>}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 ${isSticky ? 'bg-gradient-to-b from-green-400/95 to-red-400/95' : 'bg-green-800'} z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
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
                      className="w-full text-left py-2 px-2 text-white hover:bg-green-600 rounded flex justify-between items-center"
                    >
                      {item.name} <ChevronRightIcon className={`w-4 h-4 ml-2 transition-transform ${openSubMenus[item.name] ? 'rotate-90' : ''}`} />
                    </button>
                    {openSubMenus[item.name] && renderMobileSubMenu(item.submenu)}
                  </>
                ) : item.icon ? (
                  <Link
                    href={item.href}
                    className="py-2 px-2 text-white hover:bg-green-600 rounded flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {!item.onlyIcon && <span className="ml-2">{item.name}</span>}
                  </Link>
                ) : item.name === 'Home' ? (
                  <Link
                    href={item.href}
                    className="py-2 px-2 text-white hover:bg-green-600 rounded flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    <HomeIcon className="w-5 h-5 mr-2" />
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 px-2 text-white hover:bg-green-600 rounded"
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