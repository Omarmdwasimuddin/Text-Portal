'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { TypeAnimation } from 'react-type-animation'
import '@/i18n'  

export default function Banner() {
  const [lang, setLang] = useState('bn')
  const [searchValue, setSearchValue] = useState('')
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    const newLang = lang === 'bn' ? 'en' : 'bn'
    setLang(newLang)
    i18n.changeLanguage(newLang) 
  }

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="relative flex items-center justify-center px-4 py-3 overflow-hidden isolate bg-green-900/80 sm:px-6">
      {/* Gradient BG Shapes */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-144.25 bg-gradient-to-r from-pink-400 to-indigo-500 opacity-30"
        />
      </div>

      <div className="flex flex-col items-center justify-between w-full max-w-5xl gap-4 sm:flex-row sm:gap-6">
        {/* Left: Logo + Site Name */}
        <div className="flex items-center flex-shrink-0 gap-2">
          <Image
            src="/logo.jpeg"
            alt="Tax & Trade Solutions"
            width={32}
            height={32}
            className="rounded-full"
          />
          <p className="text-sm text-white whitespace-nowrap">{t('siteName')}</p>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 w-full mx-0 sm:max-w-md lg:max-w-xl sm:mx-6">
          <div className="relative">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 text-sm text-white placeholder-gray-300 border border-gray-400 rounded-full bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            {!searchValue && (
              <div className="absolute inset-0 flex items-center pl-4 pointer-events-none">
                <TypeAnimation
                  key={lang}
                  sequence={[
                    t('searchPlaceholder'),
                    2000,
                    t('searchExample1'),
                    2000,
                    t('searchExample2'),
                    2000,
                    t('searchExample3'),
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-sm text-gray-300 truncate"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: Language Toggle */}
        <div className="flex items-center flex-shrink-0 gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-white transition-colors border border-gray-400 rounded-full bg-white/20 hover:bg-white/30"
          >
            <Image
              src={lang === 'bn' ? '/flags/bnflag.png' : '/flags/enflag.png'}
              alt={lang === 'bn' ? 'Bangla' : 'English'}
              width={20}
              height={20}
              className="border rounded-full"
            />
            <span className="uppercase">{lang}</span>
          </button>
        </div>
      </div>
    </div>
  )
}