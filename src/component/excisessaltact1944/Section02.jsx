import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-800 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-xl font-bold md:text-xl">
              The Excises and Salt Act, 1944
            </h1>
            <p className="text-sm md:text-sm opacity-90">
              ( ACT NO. I OF 1944 )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-700 rounded-full shadow-md">
              <p className="text-xs font-medium md:text-xs">[ 24th February, 1944 ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/excises&saltact/excise-and-salt-act-1944"
            className="absolute flex items-center gap-2 px-3 py-2 text-green-700 transition-all bg-white rounded-full shadow top-4 left-4 hover:bg-green-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>


        {/* Header Section */}
        <div className="py-5">

          <div className="px-6 py-2 bg-green-300">
            <h2 className="font-bold text-center text-black text-md">CHAPTER I</h2>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="p-6">
              <div className="space-y-6 text-justify text-black">
                
                {/* Section */}
                <div>
                <p className="mb-4 text-sm">
                  <span className='text-sm font-bold leading-tight text-black md:text-sm'>2. Definitions</span>---<sup className='text-blue-500' title='Section 2 was substituted by section 5 of the Finance Act, 1979 (Act No. V of 1979)'>1</sup>[In this Act, unless there is anything repugnant in the subject or context,-
                </p>
                
                <div className="space-y-3 text-sm">
                  <p className="pl-4">
                    (a) "admission" includes admission as a spectator or as one of an audience, and admission for the purpose of amusement by taking part in an entertainment;
                  </p>
                  
                  <p className="pl-4">
                    <sup className='text-blue-500' title='Clause (aa) was inserted by section 2 (a) of অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) (With effect from 1st July 2020).)'>2</sup>[(aa) "associate" means such a relation between two or more persons as would make one act or reasonably expected to act in accordance with the intention of the other or make both acts or reasonably expected to act in accordance with the intention of a third person, and it also includes the following persons, namely—
                  </p>
                  
                  <div className="pl-8 space-y-1">
                    <p>(a) a partner of a partnership;</p>
                    <p>(b) a shareholder of a company;</p>
                    <p>(c) a Trust and a beneficiary of such Trust; or</p>
                    <p>(d) a joint venture for property development and the landowner as a partner of that joint venture, builder, or other related person, but does not include the persons with employment relations;]</p>
                  </div>
                  
                  <p className="pl-4">
                    (b) "Board" means the National Board of Revenue constituted under the National Board of Revenue Order, 1972 (P.O. No. 76 of 1972);
                  </p>
                  
                  <p className="pl-4">
                    (c) "broker" or "commission agent" means a person who, in the ordinary course of business, makes contracts for the sale or purchase of excisable goods for others;
                  </p>
                  
                  <p className="pl-4">
                    (d) "charge for admission" includes any payment made by a person who having been admitted to one part of a place of entertainment is subsequently admitted to another part thereof, for admission to which a payment involving a duty or a higher rate of duty is required, and any payment for seats or other accommodation in a place of entertainment;
                  </p>
                  
                  <p className="pl-4">
                    (e) "curing" includes wilting, drying, fermenting and any process for rendering an unmanufactured product fit for marketing or manufacture;
                  </p>
                  
                  <p className="pl-4">
                    (f) "distributor" means a person appointed by a manufacturer in or for a specified area to purchase excisable goods from him for sale to a wholesale dealer in that area;
                  </p>
                  
                  <p className="pl-4">
                    (g) "enterprise" includes a company, firm, establishment, institution, club or any other association of persons by whatever name called;
                  </p>
                  
                  <p className="pl-4">
                    (h) "entertainment" includes any cinema show, theatrical performance, musical performance, amusement, exhibition, show or performance in any other manner or by whatever name called, games and sports to which persons are admitted on payment;
                  </p>
                  
                  <p className="pl-4">
                    (i) "Excise Officer" means any officer of the Excise Department or any person invested by the Board with any of the powers of an Excise Officer under this Act or the rules made thereunder;
                  </p>
                  
                  <p className="pl-4">
                    (j) "excisable goods" means goods specified in Part I of the First Schedule as being subject to a duty of excise and includes salt;
                  </p>
                  
                  <p className="pl-4">
                    (k) "excisable services" means services, facilities, utilities and entertainments specified in Part II of the First Schedule as being subject to a duty of excise;
                  </p>
                  
                  <p className="pl-4">
                    (l) "factory" means any premises, including the precincts thereof, wherein or in any part of which excisable goods other than salt are manufactured, or wherein or in any part of which any manufacturing process connected with the production of these goods is being carried on or is ordinarily carried on;
                  </p>
                  
                  <p className="pl-4">
                    <sup className='text-blue-500' title='Sub-clauses (ii) and (iii) were substituted by section 5 of the Finance Act, 1981 (Act No. XI of 1981)'>3</sup>[(ll) "government entity" means—
                  </p>
                  
                  <div className="pl-8 space-y-1">
                    <p>(a) a government or any of its ministries, divisions, or attached departments;</p>
                    <p>(b) a semi-government entity or an autonomous body;</p>
                    <p>(c) a state-owned enterprise; or</p>
                    <p>(d) a local authority, council, or a similar organization;]</p>
                  </div>
                  
                  <p className="pl-4">
                    (m) "manufacture" includes any process incidental or ancillary to the completion of a manufactured product and any process of remanufacture, re-making, re-conditioning or repair and the process of packing or re-packing such product; and
                  </p>
                  
                  <div className="pl-8 space-y-2">
                    <p>(i) in relation to tobacco, includes the preparation of cigarettes, cigars, cheroots, biris, cigarette or pipe or hookah tobacco, chewing tobacco or snuff; and</p>
                    
                    <p><sup className='text-blue-500' title='Sub-clauses (ii) and (iii) were substituted by section 5 of the Finance Act, 1981 (Act No. XI of 1981)'>4</sup>[(ii) in relation to salt, includes collection, removal, preparation, steeping, evaporation, boiling, or any one or more of these processes, the separation or purification of salt obtained in the manufacture of saltpetre, the separation of salt from earth or other substance so as to produce elementary salt and the excavation or removal of natural saline deposits or efflorescence:</p>
                    
                    <p>(iii) in relation to steel furniture, fittings and fixtures, footwear, all sorts and wooden furniture, all sorts, includes labelling, re-labelling, printing or marking the name of the shop or establishment or the trade mark of the goods or the container thereof, or printing or labelling of prices or adoption of any other process to render the product marketable to consumers;</p>
                  </div>
                  
                  <p className="pl-4">
                    and the word "manufacturer" shall be construed accordingly and shall include not only a person who employs hired labour in the production or manufacture of excisable goods, but also any person who engages in their production or manufacture on his own account if those goods are intended for sale and, in respect of gold and silver and products thereof, steel furniture, fittings and fixtures, footwear, all sorts and wooden furniture, all sorts, also any person dealing in such excisable goods who, whether or not he carries out any process of manufacture himself or through his employees or relatives, gets either directly or indirectly, any process of manufacture carried out on his behalf by any person who is not in his employee and any person so dealing in such goods in any capacity whatever shall be deemed to have manufactured such goods for all purposes of this Act;]
                  </p>
                  
                  <p className="pl-4">
                    (n) "prescribed" means prescribed by rules made under this Act;
                  </p>
                  
                  <p className="pl-4">
                    (o) "sale" and "purchase", with their grammatical variations and cognate expressions, mean any transfer of the possession of goods by one person to another in the ordinary course of trade or business for cash or deferred payment or other consideration;
                  </p>
                  
                  <p className="pl-4">
                    (p) "saltpetre" includes rasi, sajji, and all other substances manufactured from saline earth, and kharinun and every form of sulphate or carbonate of soda;
                  </p>
                  
                  <p className="pl-4">
                    (q) "salt factory" includes-
                  </p>
                  
                  <div className="pl-8 space-y-1">
                    <p>(i) a place used or intended to be used in the manufacture of salt and all embankments, reservoirs, condensing and evaporating pans, buildings and waste places situated within the limits of such place as defined from time to time by <sup className='text-blue-500' title='The word “Commissioner” was substituted for the word “Collector” by section 4 of the Finance Act, 1995 (Act No. XII of 1995)'>5</sup>[Commissioner] of Excise;</p>
                    <p>(ii) all drying grounds and storage platforms and store-houses appertaining to any such place;</p>
                    <p>(iii) land on which salt is spontaneously produced; and a "private salt factory" is one not solely owned or not solely worked by the Government;</p>
                  </div>
                  
                  <p className="pl-4">
                    (r) "wholesale dealer" means a person who buys or sells excisable goods wholesale for the purpose of trade or manufacture, and includes a broker or commission agent who, in addition to making contracts for the sale or purchase of excisable goods for others, stocks such goods belonging to others as an agent for the purpose of sale.]
                  </p>
                </div>
              </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="">
          <div className="p-6">
            <div className="w-1/2 pb-2 mb-4 border-b border-gray-900">
              {/* Horizontal line */}
            </div>
            <p className="text-xs italic text-black">
              1. Section 2 was substituted by section 5 of the Finance Act, 1979 (Act No. V of 1979) <br/>
              2. Clause (aa) was inserted by section 2 (a) of অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) (With effect from 1st July 2020). <br/>
              3. Clause (ll) was inserted by section 2 (b) of অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) (With effect from 1st July 2020). <br/>
              4. Sub-clauses (ii) and (iii) were substituted by section 5 of the Finance Act, 1981 (Act No. XI of 1981) <br/>
              5. The word "Commissioner" was substituted for the word "Collector" by section 4 of the Finance Act, 1995 (Act No. XII of 1995) <br/>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}