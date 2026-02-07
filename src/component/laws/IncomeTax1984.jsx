'use client'
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const chapters = [
  {
    title: 'Chapter I',
    subtitle: 'PRELIMINARY',
    sections: [
      { 
        href: '/laws/incometax1984/section/section01', 
        text: 'Short title and commencement', 
        number: '1' 
      },
      { 
        href: '/laws/incometax1984/section/section02', 
        text: 'Definitions', 
        number: '2' 
      },
    ],
  },
  {
    title: 'Chapter II',
    subtitle: 'ADMINISTRATION',
    sections: [
      {
        href: '/laws/incometax1984/section/section03',
        text: 'Income-tax authorities',
        number: '3',
      },
      {
        href: '/laws/incometax1984/section/section04',
        text: 'Appointment of income-tax authorities',
        number: '4',
      },
      {
        href: '/laws/incometax1984/section/section04A',
        text: 'Delegation of powers',
        number: '4A',
      },
      {
        href: '/laws/incometax1984/section/section05',
        text: 'Subordination and control of income-tax authorities',
        number: '5',
      },
      {
        href: '/laws/incometax1984/section/section06',
        text: 'Jurisdiction of income-tax authorities',
        number: '6',
      },
      {
        href: '/laws/incometax1984/section/section07',
        text: 'Exercise of jurisdiction by successor',
        number: '7',
      },
      {
        href: '/laws/incometax1984/section/section08',
        text: 'Officers, etc. to follow instructions of the Board',
        number: '8',
      },
      {
        href: '/laws/incometax1984/section/section09',
        text: 'Guidance to the Deputy Commissioner of Taxes, etc.',
        number: '9',
      },
      {
        href: '/laws/incometax1984/section/section10',
        text: 'Exercise of assessment functions by the Inspecting Joint Commissioners [and the Inspecting Additional Commissioners]',
        number: '10',
      },
    ],
  },
  {
    title: 'Chapter III',
    subtitle: 'TAXES APPELLATE TRIBUNAL',
    sections: [
      {
        href: '/laws/incometax1984/section/section11',
        text: 'Establishment of Appellate Tribunal',
        number: '11',
      },
      {
        href: '/laws/incometax1984/section/section12',
        text: 'Exercise of power of the Tribunal by Benches',
        number: '12',
      },
      {
        href: '/laws/incometax1984/section/section13',
        text: 'Decision of Bench',
        number: '13',
      },
      {
        href: '/laws/incometax1984/section/section14',
        text: 'Exercise of power by one member',
        number: '14',
      },
      {
        href: '/laws/incometax1984/section/section15',
        text: 'Regulation of procedure',
        number: '15',
      },
    ],
  },
  {
    title: 'Chapter IV',
    subtitle: 'CHARGE OF INCOME TAX',
    sections: [
      {
        href: '/laws/incometax1984/section/section16',
        text: 'Charge of income-tax',
        number: '16',
      },
      {
        href: '/laws/incometax1984/section/section16A',
        text: 'Charge of surcharge',
        number: '16A',
      },
      {
        href: '/laws/incometax1984/section/section16B',
        text: 'Charge of additional tax',
        number: '16B',
      },
      {
        href: '/laws/incometax1984/section/section16BB',
        text: 'Charge of additional amount, etc',
        number: '16BB',
      },
      {
        href: '/laws/incometax1984/section/section16BBB',
        text: 'Charge of minimum tax',
        number: '16BBB',
      },
      {
        href: '/laws/incometax1984/section/section16C',
        text: '[Omitted]',
        number: '16C',
      },
      {
        href: '/laws/incometax1984/section/section16CC',
        text: '[Omitted]',
        number: '16CC',
      },
      {
        href: '/laws/incometax1984/section/section16CCC',
        text: '[Omitted]',
        number: '16CCC',
      },
      {
        href: '/laws/incometax1984/section/section16D',
        text: '[Omitted]',
        number: '16D',
      },
      {
        href: '/laws/incometax1984/section/section16E',
        text: '[Omitted]',
        number: '16E',
      },
      {
        href: '/laws/incometax1984/section/section16F',
        text: 'Charge of tax on stock dividend',
        number: '16F',
      },
      {
        href: '/laws/incometax1984/section/section16G',
        text: 'Charge of tax on retained earnings, reserves, surplus etc',
        number: '16G',
      },
      {
        href: '/laws/incometax1984/section/section16H',
        text: 'Charge of tax on the difference of investment, import and export',
        number: '16H',
      },
      {
        href: '/laws/incometax1984/section/section17',
        text: 'Scope of the total income',
        number: '17',
      },
      {
        href: '/laws/incometax1984/section/section18',
        text: 'Income deemed to accrue or arise in Bangladesh',
        number: '18',
      },
      {
        href: '/laws/incometax1984/section/section19',
        text: 'Un-explained investments, etc., deemed to be income',
        number: '19',
      },
      {
        href: '/laws/incometax1984/section/section19A',
        text: '[Omitted]',
        number: '19A',
      },
      {
        href: '/laws/incometax1984/section/section19AA',
        text: '[Omitted]',
        number: '19AA',
      },
      {
        href: '/laws/incometax1984/section/section19AAA',
        text: '[Omitted]',
        number: '19AAA',
      },
      {
        href: '/laws/incometax1984/section/section19AAAA',
        text: '[Omitted]',
        number: '19AAAA',
      },
      {
        href: '/laws/incometax1984/section/section19AAAAA',
        text: '[Omitted]',
        number: '19AAAAA',
      },
      {
        href: '/laws/incometax1984/section/section19AAAAAA',
        text: 'Special Tax Treatment in respect of investment in new industrial undertaking',
        number: '19AAAAAA',
      },
      {
        href: '/laws/incometax1984/section/section19B',
        text: '[Omitted]',
        number: '19B',
      },
      {
        href: '/laws/incometax1984/section/section19BB',
        text: '[Omitted]',
        number: '19BB',
      },
      {
        href: '/laws/incometax1984/section/section19BBB',
        text: '[Omitted]',
        number: '19BBB',
      },
      {
        href: '/laws/incometax1984/section/section19BBBB',
        text: '[Omitted]',
        number: '19BBBB',
      },
      {
        href: '/laws/incometax1984/section/section19BBBBB',
        text: 'Special tax treatment in respect of investment in [***] building, apartment',
        number: '19BBBBB',
      },
      {
        href: '/laws/incometax1984/section/section19C',
        text: 'Special tax treatment in respect of investment in the purchase of bond under Bangladesh Infrastructure Finance Fund',
        number: '19C',
      },
      {
        href: '/laws/incometax1984/section/section19D',
        text: '[Omitted]',
        number: '19D',
      },
      {
        href: '/laws/incometax1984/section/section19DD',
        text: 'Special tax treatment in respect of investment in Economic Zones or Hi-Tech Parks',
        number: '19DD',
      },
      {
        href: '/laws/incometax1984/section/section19E',
        text: 'Voluntary disclosure of income',
        number: '19E',
      },
      {
        href: '/laws/incometax1984/section/section19F',
        text: 'Special Tax Treatment in respect of undisclosed offshore assets',
        number: '19F',
      },
      {
        href: '/laws/incometax1984/section/section19G',
        text: 'Penalty for any offshore asset not disclosed in the return',
        number: '19G',
      },
    ],
  },
  {
    title: 'Chapter V',
    subtitle: 'COMPUTATION OF INCOME',
    sections: [
      {
        href: '/laws/incometax1984/section/section20',
        text: 'Heads of income',
        number: '20',
      },
      {
        href: '/laws/incometax1984/section/section21',
        text: 'Salaries',
        number: '21',
      },
      {
        href: '/laws/incometax1984/section/section22',
        text: 'Interest on securities',
        number: '22',
      },
      {
        href: '/laws/incometax1984/section/section23',
        text: 'Deductions from interest on securities',
        number: '23',
      },
      {
        href: '/laws/incometax1984/section/section24',
        text: 'Income from house property',
        number: '24',
      },
      {
        href: '/laws/incometax1984/section/section25',
        text: 'Deductions from income from house property',
        number: '25',
      },
      {
        href: '/laws/incometax1984/section/section26',
        text: 'Agricultural income',
        number: '26',
      },
      {
        href: '/laws/incometax1984/section/section27',
        text: 'Deductions from agricultural income',
        number: '27',
      },
      {
        href: '/laws/incometax1984/section/section28',
        text: 'Income from business or profession',
        number: '28',
      },
      {
        href: '/laws/incometax1984/section/section29',
        text: 'Deductions from income from business or profession',
        number: '29',
      },
      {
        href: '/laws/incometax1984/section/section30A',
        text: 'Provision for disallowance',
        number: '30A',
      },
      {
        href: '/laws/incometax1984/section/section30',
        text: 'Deduction not admissible in certain circumstances',
        number: '30',
      },
      {
        href: '/laws/incometax1984/section/section30B',
        text: 'Treatment of disallowances',
        number: '30B',
      },
      {
        href: '/laws/incometax1984/section/section31',
        text: 'Capital gains',
        number: '31',
      },
      {
        href: '/laws/incometax1984/section/section31A',
        text: 'Capital gains from the transfer of business or undertaking',
        number: '31A',
      },
      {
        href: '/laws/incometax1984/section/section32',
        text: 'Computation of capital gains',
        number: '32',
      },
      {
        href: '/laws/incometax1984/section/section32A',
        text: 'Computation of capital gains from the transfer of business or undertaking',
        number: '32A',
      },
      {
        href: '/laws/incometax1984/section/section33',
        text: 'Income from other sources',
        number: '33',
      },
      {
        href: '/laws/incometax1984/section/section34',
        text: 'Deductions from income from other sources',
        number: '34',
      },
      {
        href: '/laws/incometax1984/section/section35',
        text: 'Method of accounting',
        number: '35',
      },
      {
        href: '/laws/incometax1984/section/section36',
        text: 'Allocation of income from royalties, etc., for literary works, etc.',
        number: '36',
      },
      {
        href: '/laws/incometax1984/section/section37',
        text: 'Set off of losses',
        number: '37',
      },
      {
        href: '/laws/incometax1984/section/section38',
        text: 'Carry forward of business losses',
        number: '38',
      },
      {
        href: '/laws/incometax1984/section/section39',
        text: 'Carry forward of loss in speculation business',
        number: '39',
      },
      {
        href: '/laws/incometax1984/section/section40',
        text: 'Carry forward of loss under the head "Capital gains"',
        number: '40',
      },
      {
        href: '/laws/incometax1984/section/section41',
        text: 'Carry forward of loss under the head "Agricultural income"',
        number: '41',
      },
      {
        href: '/laws/incometax1984/section/section42',
        text: 'Conditions and limitations of carrying forward of loss, etc.',
        number: '42',
      },
      {
        href: '/laws/incometax1984/section/section43',
        text: 'Computation of total income',
        number: '43',
      },
    ],
  },
  {
    title: 'Chapter VI',
    subtitle: 'EXEMPTIONS AND ALLOWANCES',
    sections: [
      {
        href: '/laws/incometax1984/section/section44',
        text: 'Exemption',
        number: '44',
      },
      {
        href: '/laws/incometax1984/section/section45',
        text: 'Exemption of income of an industrial undertaking',
        number: '45',
      },
      {
        href: '/laws/incometax1984/section/section46',
        text: 'Exemption of income of a tourist industry',
        number: '46',
      },
      {
        href: '/laws/incometax1984/section/section46A',
        text: 'Exemption from tax of newly established industrial undertakings, etc. in certain cases',
        number: '46A',
      },
      {
        href: '/laws/incometax1984/section/section46B',
        text: 'Exemption from tax of newly established industrial undertakings set up between the period of July, 2011 and June, 2019, etc., in certain cases',
        number: '46B',
      },
      {
        href: '/laws/incometax1984/section/section46BB',
        text: 'Exemption from tax of newly established industrial undertakings set up between the period of July, 2019 and June, 2024, etc. in certain cases',
        number: '46BB',
      },
      {
        href: '/laws/incometax1984/section/section46C',
        text: 'Exemption from tax of newly established physical infrastructure facility set up between the period of July, 2011 and June, 2019, etc. in certain cases',
        number: '46C',
      },
      {
        href: '/laws/incometax1984/section/section46CC',
        text: 'Exemption from tax of newly established physical infrastructure facility set up between the period of July, 2019 and June, 2024, etc. in certain cases',
        number: '46CC',
      },
      {
        href: '/laws/incometax1984/section/section47',
        text: 'Exemption of income of co-operative societies',
        number: '47',
      },
    ],
  },
  {
    title: 'Chapter VII',
    subtitle: 'PAYMENT OF TAX BEFORE ASSESSMENT',
    sections: [
      { href: '/laws/incometax1984/section/section48', text: 'Deduction at source and advance payment of tax', number: '48' },
      { href: '/laws/incometax1984/section/section49', text: 'Income subject to deduction at source', number: '49' },
      { href: '/laws/incometax1984/section/section50A', text: 'Deduction at source from discount on the real value of Bangladesh Bank bills', number: '50A' },
      { href: '/laws/incometax1984/section/section50', text: 'Deduction at source from salaries', number: '50' },
      { href: '/laws/incometax1984/section/section50B', text: 'Deduction of tax from payment of remuneration to Members of Parliament', number: '50B' },
      { href: '/laws/incometax1984/section/section51', text: 'Deduction at source from discount, interest or profit on securities', number: '51' },
      { href: '/laws/incometax1984/section/section51A', text: '[Omitted]', number: '51A' },
      { href: '/laws/incometax1984/section/section52', text: 'Deduction from payment to contractors, etc.', number: '52' },
      { href: '/laws/incometax1984/section/section52A', text: 'Deduction from payment of royalties etc', number: '52A' },
      { href: '/laws/incometax1984/section/section52AA', text: 'Deduction from the payment of certain services', number: '52AA' },
      { href: '/laws/incometax1984/section/section52AAA', text: 'Collection of tax from clearing and forwarding agents', number: '52AAA' },
      { href: '/laws/incometax1984/section/section52B', text: 'Collection of tax from Cigarette manufacturers', number: '52B' },
      { href: '/laws/incometax1984/section/section52C', text: 'Deduction at source from compensation against acquisition of property', number: '52C' },
      { href: '/laws/incometax1984/section/section52D', text: 'Deduction at source from interest on saving instruments', number: '52D' },
      { href: '/laws/incometax1984/section/section52DD', text: 'Deduction from payment to a beneficiary of workers\' participation fund', number: '52DD' },
      { href: '/laws/incometax1984/section/section52E', text: '[Omitted]', number: '52E' },
      { href: '/laws/incometax1984/section/section52F', text: 'Collection of tax from brick manufacturers', number: '52F' },
      { href: '/laws/incometax1984/section/section52G', text: '[Omitted]', number: '52G' },
      { href: '/laws/incometax1984/section/section52H', text: '[Omitted]', number: '52H' },
      { href: '/laws/incometax1984/section/section52I', text: 'Deduction from the commission of letter of credit', number: '52I' },
      { href: '/laws/incometax1984/section/section52J', text: '[Omitted]', number: '52J' },
      { href: '/laws/incometax1984/section/section52JJ', text: 'Collection of tax from travel agent', number: '52JJ' },
      { href: '/laws/incometax1984/section/section52K', text: 'Collection of tax by City Corporation or Pourashava at the time of renewal of trade licence', number: '52K' },
      { href: '/laws/incometax1984/section/section52L', text: '[Omitted]', number: '52L' },
      { href: '/laws/incometax1984/section/section52M', text: 'Collection of tax from freight forward agency commission', number: '52M' },
      { href: '/laws/incometax1984/section/section52N', text: 'Collection of tax on account of purchase of power', number: '52N' },
      { href: '/laws/incometax1984/section/section52O', text: 'Collection of tax from a foreign technician serving in a diamond cutting industry', number: '52O' },
      { href: '/laws/incometax1984/section/section52P', text: 'Deduction of tax for services from convention hall, conference centre, etc', number: '52P' },
      { href: '/laws/incometax1984/section/section52Q', text: 'Deduction of Tax from any income remitted from abroad in connection with any service, revenue sharing, etc', number: '52Q' },
      { href: '/laws/incometax1984/section/section52R', text: 'Deduction of tax from receipts in respect of international phone call', number: '52R' },
      { href: '/laws/incometax1984/section/section52S', text: '[Omitted]', number: '52S' },
      { href: '/laws/incometax1984/section/section52T', text: 'Deduction of tax from any payment in excess of premium paid on life insurance policy', number: '52T' },
      { href: '/laws/incometax1984/section/section52U', text: 'Deduction from payment on account of local letter of credit, etc.', number: '52U' },
      { href: '/laws/incometax1984/section/section52V', text: 'Deduction from payment by cellular mobile phone operator', number: '52V' },
      { href: '/laws/incometax1984/section/section53', text: 'Collection of tax on account of import of goods', number: '53' },
      { href: '/laws/incometax1984/section/section53A', text: 'Deduction at source from income from house property', number: '53A' },
      { href: '/laws/incometax1984/section/section53AA', text: 'Collection of tax from shipping business of a resident', number: '53AA' },
      { href: '/laws/incometax1984/section/section53B', text: 'Collection of tax from recruiting agents', number: '53B' },
      { href: '/laws/incometax1984/section/section53BB', text: 'Deduction of tax from export proceeds of goods', number: '53BB' },
      { href: '/laws/incometax1984/section/section53BBB', text: 'Collection of tax from Member of Stock Exchanges', number: '53BBB' },
      { href: '/laws/incometax1984/section/section53BBBB', text: '[Omitted]', number: '53BBBB' },
      { href: '/laws/incometax1984/section/section53C', text: 'Collection of tax on sale price of goods or property sold by public auction', number: '53C' },
      { href: '/laws/incometax1984/section/section53CC', text: '[Omitted]', number: '53CC' },
      { href: '/laws/incometax1984/section/section53CCC', text: 'Deduction or collection of tax at source from courier business of a non-resident', number: '53CCC' },
      { href: '/laws/incometax1984/section/section53D', text: 'Deduction from payment to actors, actresses, producers, etc.', number: '53D' },
      { href: '/laws/incometax1984/section/section53DD', text: '[Omitted]', number: '53DD' },
      { href: '/laws/incometax1984/section/section53DDD', text: 'Deduction of tax at source from export cash subsidy', number: '53DDD' },
      { href: '/laws/incometax1984/section/section53E', text: 'Deduction or collection at source from commission, discount, fees, etc.', number: '53E' },
      { href: '/laws/incometax1984/section/section53EE', text: 'Deduction of tax from commission or remuneration paid to agent of foreign buyer', number: '53EE' },
      { href: '/laws/incometax1984/section/section53F', text: 'Deduction at source from interest on saving deposits and fixed deposits, etc', number: '53F' },
      { href: '/laws/incometax1984/section/section53FF', text: 'Collection of tax from persons engaged in real estate or land development business', number: '53FF' },
      { href: '/laws/incometax1984/section/section53G', text: 'Deduction at source from insurance commission', number: '53G' },
      { href: '/laws/incometax1984/section/section53GG', text: 'Deduction at source from fees, etc. of Surveyors of general insurance company', number: '53GG' },
      { href: '/laws/incometax1984/section/section53GGG', text: '[Omitted]', number: '53GGG' },
      { href: '/laws/incometax1984/section/section53H', text: 'Collection of tax on transfer, etc. of property', number: '53H' },
      { href: '/laws/incometax1984/section/section53HH', text: 'Collection of tax from lease of property', number: '53HH' },
      { href: '/laws/incometax1984/section/section53I', text: 'Deduction at source from interest on deposit of Post Office Savings Bank Account', number: '53I' },
      { href: '/laws/incometax1984/section/section53J', text: 'Deduction at source from rental value of [water body or] vacant land or plant or machinery', number: '53J' },
      { href: '/laws/incometax1984/section/section53K', text: 'Deduction of tax from advertising bill of newspaper or magazine or private television channel [or private radio station, etc.]', number: '53K' },
      { href: '/laws/incometax1984/section/section53L', text: '[Omitted]', number: '53L' },
      { href: '/laws/incometax1984/section/section53M', text: 'Collection of tax from transfer of securities or mutual fund units by sponsor shareholders of a company etc.', number: '53M' },
      { href: '/laws/incometax1984/section/section53N', text: 'Collection of tax from transfer of share of shareholder of Stock Exchanges', number: '53N' },
      { href: '/laws/incometax1984/section/section53O', text: '[Omitted]', number: '53O' },
      { href: '/laws/incometax1984/section/section53P', text: 'Deduction of tax from any sum paid by real estate developer to land owner', number: '53P' },
      { href: '/laws/incometax1984/section/section53Q', text: 'Collection of Tax from motorvehicles plying commercially', number: '53Q' },
      { href: '/laws/incometax1984/section/section53R', text: 'Collection of tax from inland ships', number: '53R' },
      { href: '/laws/incometax1984/section/section54', text: 'Deduction of tax from dividends', number: '54' },
      { href: '/laws/incometax1984/section/section55', text: 'Deduction from income from lottery, etc.', number: '55' },
      { href: '/laws/incometax1984/section/section56', text: 'Deduction from income of non-residents', number: '56' },
      { href: '/laws/incometax1984/section/section57', text: 'Consequences of failure to deduct, collect, etc', number: '57' },
      { href: '/laws/incometax1984/section/section57A', text: 'Consequences of the issuance of certificate of tax deduction or collection without actual deduction, collection or payment', number: '57A' },
      { href: '/laws/incometax1984/section/section58', text: 'Certificate of deduction, etc. of tax', number: '58' },
      { href: '/laws/incometax1984/section/section59', text: 'Payment to Government of tax deducted', number: '59' },
      { href: '/laws/incometax1984/section/section60', text: 'Unauthorised deduction prohibited', number: '60' },
      { href: '/laws/incometax1984/section/section61', text: 'Power to levy tax without prejudice to other mode of recovery', number: '61' },
      { href: '/laws/incometax1984/section/section62', text: 'Credit of tax deducted or collected at source', number: '62' },
      { href: '/laws/incometax1984/section/section62A', text: '[Omitted]', number: '62A' },
      { href: '/laws/incometax1984/section/section63', text: 'Payment of tax where no deduction is made', number: '63' },
      { href: '/laws/incometax1984/section/section64', text: 'Advance payment of tax', number: '64' },
      { href: '/laws/incometax1984/section/section65', text: 'Computation of advance tax', number: '65' },
      { href: '/laws/incometax1984/section/section66', text: 'Instalments of advance tax', number: '66' },
      { href: '/laws/incometax1984/section/section67', text: 'Estimate of advance tax', number: '67' },
      { href: '/laws/incometax1984/section/section68', text: 'Advance payment of tax by new assessees', number: '68' },
      { href: '/laws/incometax1984/section/section68A', text: 'Advance tax on certain income', number: '68A' },
      { href: '/laws/incometax1984/section/section68B', text: 'Advance tax for the owners of private motor car', number: '68B' },
      { href: '/laws/incometax1984/section/section69', text: 'Failure to pay instalments of advance tax', number: '69' },
      { href: '/laws/incometax1984/section/section70', text: 'Levy of interest for failure to pay advance tax', number: '70' },
      { href: '/laws/incometax1984/section/section71', text: 'Credit of advance tax', number: '71' },
      { href: '/laws/incometax1984/section/section72', text: 'Interest payable by Government on excess payment of advance tax', number: '72' },
      { href: '/laws/incometax1984/section/section73', text: 'Interest payable by the assessee on deficiency in payment of advance tax', number: '73' },
      { href: '/laws/incometax1984/section/section73A', text: 'Delay Interest for not filing return on or before the Tax Day', number: '73A' },
      { href: '/laws/incometax1984/section/section74', text: 'Payment of tax on the basis of return', number: '74' }
    ]
  },
  {
    title: 'Chapter VIII',
    subtitle: 'RETURN AND STATEMENT',
    sections: [
      { href: '/laws/incometax1984/section/section75', text: 'Return of income', number: '75' },
      { href: '/laws/incometax1984/section/section75A', text: 'Return of withholding tax', number: '75A' },
      { href: '/laws/incometax1984/section/section75AA', text: 'Audit of the return of withholding tax', number: '75AA' },
      { href: '/laws/incometax1984/section/section75B', text: 'Obligation to furnish Annual Information Return', number: '75B' },
      { href: '/laws/incometax1984/section/section75C', text: 'Concurrent jurisdiction', number: '75C' },
      { href: '/laws/incometax1984/section/section76', text: '[Omitted]', number: '76' },
      { href: '/laws/incometax1984/section/section77', text: 'Notice of filing return', number: '77' },
      { href: '/laws/incometax1984/section/section78', text: 'Filing of revised return', number: '78' },
      { href: '/laws/incometax1984/section/section79', text: 'Production of accounts and documents, etc', number: '79' },
      { href: '/laws/incometax1984/section/section80', text: 'Statements of assets, liabilities and life style', number: '80' }
    ]
  },
  {
    title: 'Chapter IX',
    subtitle: 'ASSESSMENT',
    sections: [
      { href: '/laws/incometax1984/section/section81', text: 'Provisional assessment', number: '81' },
      { href: '/laws/incometax1984/section/section82', text: 'Assessment on correct return', number: '82' },
      { href: '/laws/incometax1984/section/section82A', text: 'Assessment under simplified procedure', number: '82A' },
      { href: '/laws/incometax1984/section/section82B', text: '[Omitted]', number: '82B' },
      { href: '/laws/incometax1984/section/section82BB', text: 'Universal Self Assessment', number: '82BB' },
      { href: '/laws/incometax1984/section/section82C', text: 'Minimum Tax', number: '82C' },
      { href: '/laws/incometax1984/section/section82D', text: 'Spot Assessment', number: '82D' },
      { href: '/laws/incometax1984/section/section83A', text: '[Omitted]', number: '83A' },
      { href: '/laws/incometax1984/section/section83AA', text: '[Omitted]', number: '83AA' },
      { href: '/laws/incometax1984/section/section83', text: 'Assessment after hearing', number: '83' },
      { href: '/laws/incometax1984/section/section83AAA', text: 'Assessment on the basis of report of a chartered accountant', number: '83AAA' },
      { href: '/laws/incometax1984/section/section84A', text: '[Omitted]', number: '84A' },
      { href: '/laws/incometax1984/section/section84', text: 'Best judgment assessment', number: '84' },
      { href: '/laws/incometax1984/section/section85', text: 'Special provisions regarding assessment of firms', number: '85' },
      { href: '/laws/incometax1984/section/section86', text: 'Assessment in case of change in the constitution of a firm', number: '86' },
      { href: '/laws/incometax1984/section/section87', text: 'Assessment in case of constitution of new successor firm', number: '87' },
      { href: '/laws/incometax1984/section/section88', text: 'Assessment in case of succession to business otherwise than on death', number: '88' },
      { href: '/laws/incometax1984/section/section89', text: 'Assessment in case of discontinued business', number: '89' },
      { href: '/laws/incometax1984/section/section90', text: 'Assessment in case of partition of a Hindu undivided family', number: '90' },
      { href: '/laws/incometax1984/section/section91', text: 'Assessment in case of persons leaving Bangladesh', number: '91' },
      { href: '/laws/incometax1984/section/section92', text: 'Assessment in the case of income of a deceased person', number: '92' },
      { href: '/laws/incometax1984/section/section93', text: 'Tax, etc. escaping payment', number: '93' },
      { href: '/laws/incometax1984/section/section94', text: 'Limitation for assessment', number: '94' },
      { href: '/laws/incometax1984/section/section94A', text: '[Omitted]', number: '94A' },
      { href: '/laws/incometax1984/section/section94B', text: 'Bar to question assessment', number: '94B' }
    ]
  },
  {
    title: 'Chapter X',
    subtitle: 'LIABILITY IN SPECIAL CASES',
    sections: [
      { href: '/laws/incometax1984/section/section95', text: 'Liability of representative in certain cases', number: '95' },
      { href: '/laws/incometax1984/section/section96', text: 'Persons to be treated as agent', number: '96' },
      { href: '/laws/incometax1984/section/section97', text: 'Right of representative to recover tax paid', number: '97' },
      { href: '/laws/incometax1984/section/section98', text: 'Liability of firm or association for unrecoverable tax due from partners or members', number: '98' },
      { href: '/laws/incometax1984/section/section99', text: 'Liability of partners, etc., for discontinued business of a firm, etc.', number: '99' },
      { href: '/laws/incometax1984/section/section100', text: 'Liability of directors for unrecoverable tax of private companies', number: '100' },
      { href: '/laws/incometax1984/section/section101', text: 'Liability of liquidator for tax of private companies under liquidation', number: '101' },
      { href: '/laws/incometax1984/section/section102', text: 'Liability to tax in case of shipping business of non-residents', number: '102' },
      { href: '/laws/incometax1984/section/section103', text: '[Omitted]', number: '103' },
      { href: '/laws/incometax1984/section/section103A', text: 'Liability to tax in case of air transport business of non-residents', number: '103A' }
    ]
  },
  {
    title: 'Chapter XI',
    subtitle: 'SPECIAL PROVISIONS RELATING TO AVOIDANCE OF TAX',
    sections: [
      { href: '/laws/incometax1984/section/section104', text: 'Avoidance of tax through transactions with non-residents', number: '104' },
      { href: '/laws/incometax1984/section/section105', text: 'Avoidance of tax through transfer of assets', number: '105' },
      { href: '/laws/incometax1984/section/section106', text: 'Avoidance of tax by transactions in securities', number: '106' },
      { href: '/laws/incometax1984/section/section107', text: 'Tax clearance certificate required for persons leaving Bangladesh', number: '107' }
    ]
  },
  {
    title: 'Chapter XIA',
    subtitle: 'Transfer Pricing',
    sections: [
      { href: '/laws/incometax1984/section/section107A', text: 'Definitions', number: '107A' },
      { href: '/laws/incometax1984/section/section107B', text: 'Determination of income from international transaction having regard to arm\'s length price', number: '107B' },
      { href: '/laws/incometax1984/section/section107C', text: 'Computation of arm\'s length price', number: '107C' },
      { href: '/laws/incometax1984/section/section107D', text: 'Reference to Transfer Pricing Officer', number: '107D' },
      { href: '/laws/incometax1984/section/section107E', text: 'Maintenance and keeping of information, documents and records', number: '107E' },
      { href: '/laws/incometax1984/section/section107EE', text: 'Statement of international transactions to be submitted', number: '107EE' },
      { href: '/laws/incometax1984/section/section107F', text: 'Report from an accountant to be furnished', number: '107F' },
      { href: '/laws/incometax1984/section/section107G', text: 'Penalty for failure to keep, maintain or furnish information, documents or records to the Deputy Commissioner of Taxes', number: '107G' },
      { href: '/laws/incometax1984/section/section107H', text: 'Penalty for failure to comply with the notice or requisition under section 107C', number: '107H' },
      { href: '/laws/incometax1984/section/section107HH', text: 'Penalty for failure to comply with the provision of section 107EE', number: '107HH' },
      { href: '/laws/incometax1984/section/section107I', text: 'Penalty for failure to furnish report under section 107F', number: '107I' },
      { href: '/laws/incometax1984/section/section107J', text: 'Applicability of this Chapter', number: '107J' }
    ]
  },
  {
    title: 'Chapter XII',
    subtitle: 'REQUIREMENT OF FURNISHING CERTAIN INFORMATION',
    sections: [
      { href: '/laws/incometax1984/section/section108', text: 'Information regarding payment of salary', number: '108' },
      { href: '/laws/incometax1984/section/section108A', text: 'Information regarding filing of return by employees', number: '108A' },
      { href: '/laws/incometax1984/section/section109', text: 'Information regarding Payment of interest', number: '109' },
      { href: '/laws/incometax1984/section/section110', text: 'Information regarding payment of dividend', number: '110' }
    ]
  },
  {
    title: 'Chapter XIII',
    subtitle: '[REGISTRATION OF FIRMS-Omitted]',
    sections: [
      { href: '/laws/incometax1984/section/section111', text: '[Omitted]', number: '111' },
    ],
  },
  {
    title: 'Chapter XIIIA',
    subtitle: '2[Startup Sandbox]',
    sections: [
      { href: '/laws/incometax1984/section/section111A', text: 'Startup sandbox', number: '111A' },
    ],
  },
  {
    title: 'Chapter XIV',
    subtitle: 'POWERS OF INCOME TAX AUTHORITIES',
    sections: [
      { href: '/laws/incometax1984/section/section112', text: 'Powers under this Chapter not to prejudice other powers', number: '112' },
      { href: '/laws/incometax1984/section/section113', text: 'Power to call for information', number: '113' },
      { href: '/laws/incometax1984/section/section113A', text: 'Automatic furnishing of information', number: '113A' },
      { href: '/laws/incometax1984/section/section114', text: 'Power to Inspect registers of companies', number: '114' },
      { href: '/laws/incometax1984/section/section115', text: 'Power of survey', number: '115' },
      { href: '/laws/incometax1984/section/section116', text: 'Additional powers of enquiry and production of documents', number: '116' },
      { href: '/laws/incometax1984/section/section116A', text: 'Power of giving order for not removing property', number: '116A' },
      { href: '/laws/incometax1984/section/section117', text: 'Power of search and seizure', number: '117' },
      { href: '/laws/incometax1984/section/section117A', text: 'Power to verify and enforce deduction or collection of tax', number: '117A' },
      { href: '/laws/incometax1984/section/section118', text: 'Retention of seized assets', number: '118' },
      { href: '/laws/incometax1984/section/section119', text: 'Application of retained assets', number: '119' },
      { href: '/laws/incometax1984/section/section120', text: 'Power of Commissioner or Inspecting Joint Commissioner to revise the erroneous order', number: '120' },
      { href: '/laws/incometax1984/section/section121', text: '[Omitted]', number: '121' },
      { href: '/laws/incometax1984/section/section121A', text: 'Revisional power of Commissioner', number: '121A' },
      { href: '/laws/incometax1984/section/section122', text: 'Power to take evidence on oath, etc.', number: '122' }
    ]
  },
  {
    title: 'Chapter XV',
    subtitle: 'IMPOSITION OF PENALTY',
    sections: [
      { href: '/laws/incometax1984/section/section123', text: 'Penalty for not maintaining accounts in the prescribed manner', number: '123' },
      { href: '/laws/incometax1984/section/section124', text: 'Penalty for failure to file return, etc.', number: '124' },
      { href: '/laws/incometax1984/section/section124A', text: 'Penalty for using fake Tax-payer\'s Identification Number', number: '124A' },
      { href: '/laws/incometax1984/section/section124AA', text: '[Omitted]', number: '124AA' },
      { href: '/laws/incometax1984/section/section125', text: 'Failure to pay advance tax, etc.', number: '125' },
      { href: '/laws/incometax1984/section/section126', text: 'Penalty for non-compliance with notice', number: '126' },
      { href: '/laws/incometax1984/section/section127', text: 'Failure to pay tax on the basis of return', number: '127' },
      { href: '/laws/incometax1984/section/section128', text: 'Penalty for concealment of income', number: '128' },
      { href: '/laws/incometax1984/section/section129', text: '[Omitted]', number: '129' },
      { href: '/laws/incometax1984/section/section129A', text: 'Penalty for incorrect or false audit report by chartered accountant', number: '129A' },
      { href: '/laws/incometax1984/section/section129B', text: 'Penalty for furnishing fake audit report', number: '129B' },
      { href: '/laws/incometax1984/section/section130', text: 'Bar to imposition of penalty without hearing', number: '130' },
      { href: '/laws/incometax1984/section/section131', text: 'Previous approval of Inspecting Joint Commissioner for imposing penalty', number: '131' },
      { href: '/laws/incometax1984/section/section131A', text: 'Previous approval of the Board for imposing penalty', number: '131A' },
      { href: '/laws/incometax1984/section/section132', text: 'Orders of penalty to be sent to Deputy Commissioner of Taxes', number: '132' },
      { href: '/laws/incometax1984/section/section133', text: 'Penalty to be without prejudice to other liability', number: '133' },
      { href: '/laws/incometax1984/section/section133A', text: 'Revision of penalty based on the revised amount of income', number: '133A' }
    ]
  },
  {
    title: 'Chapter XVI',
    subtitle: 'RECOVERY OF TAX',
    sections: [
      { href: '/laws/incometax1984/section/section134', text: 'Tax to include penalty, interest, etc.', number: '134' },
      { href: '/laws/incometax1984/section/section135', text: 'Notice of demand', number: '135' },
      { href: '/laws/incometax1984/section/section136', text: '[Omitted]', number: '136' },
      { href: '/laws/incometax1984/section/section137', text: 'Penalty for default in payment of tax', number: '137' },
      { href: '/laws/incometax1984/section/section138', text: 'Certificate for recovery of tax', number: '138' },
      { href: '/laws/incometax1984/section/section139', text: 'Method of recovery by Tax Recovery Officer', number: '139' },
      { href: '/laws/incometax1984/section/section140', text: 'Power of withdrawal of certificate and stay of proceeding', number: '140' },
      { href: '/laws/incometax1984/section/section141', text: 'Validity of certificate for recovery not open to dispute', number: '141' },
      { href: '/laws/incometax1984/section/section142', text: 'Recovery of tax through Collector of District', number: '142' },
      { href: '/laws/incometax1984/section/section142A', text: 'Recovery of tax through Special Magistrates', number: '142A' },
      { href: '/laws/incometax1984/section/section143', text: 'Other modes of recovery', number: '143' }
    ]
  },
  {
    title: 'Chapter XVII',
    subtitle: 'DOUBLE TAXATION RELIEF',
    sections: [
      { href: '/laws/incometax1984/section/section144', text: 'Agreement to avoid double taxation', number: '144' },
      { href: '/laws/incometax1984/section/section145', text: 'Relief in respect of income arising outside Bangladesh', number: '145' }
    ]
  },
  {
    title: 'Chapter XVIII',
    subtitle: 'REFUNDS',
    sections: [
      { href: '/laws/incometax1984/section/section146', text: 'Entitlement to refund', number: '146' },
      { href: '/laws/incometax1984/section/section147', text: 'Claim of refund for deceased or disabled persons', number: '147' },
      { href: '/laws/incometax1984/section/section148', text: 'Correctness of assessment, etc., not to be questioned', number: '148' },
      { href: '/laws/incometax1984/section/section149', text: 'Refund on the basis of orders in appeal', number: '149' },
      { href: '/laws/incometax1984/section/section150', text: 'Form of claim and limitation', number: '150' },
      { href: '/laws/incometax1984/section/section151', text: 'Interest on delayed refund', number: '151' },
      { href: '/laws/incometax1984/section/section152', text: 'Adjustment of refund against tax', number: '152' }
    ]
  },
  {
    title: 'Chapter XVIIIA',
    subtitle: '[SETTLEMENT OF CASES.- Omitted]',
    sections: [
      { 
        href: '/laws/incometax1984/section/section152A-E', 
        text: '[Omitted]', 
        number: '152A, 152B, 152C, 152D and 152E' 
      },
    ],
  },
  {
    title: 'Chapter XVIIIB',
    subtitle: 'Alternative Dispute Resolution',
    sections: [
      {
        href: '/laws/incometax1984/section/section152F',
        text: 'Alternative Dispute Resolution',
        number: '152F'
      },
      {
        href: '/laws/incometax1984/section/section152G',
        text: 'Commencement of ADR',
        number: '152G'
      },
      {
        href: '/laws/incometax1984/section/section152H',
        text: 'Definitions',
        number: '152H'
      },
      {
        href: '/laws/incometax1984/section/section152I',
        text: 'Stay of proceeding in case of pending appeal or reference',
        number: '152I'
      },
      {
        href: '/laws/incometax1984/section/section152J',
        text: 'Application for alternative resolution of disputes',
        number: '152J'
      },
      {
        href: '/laws/incometax1984/section/section152K',
        text: 'Eligibility for application for ADR',
        number: '152K'
      },
      {
        href: '/laws/incometax1984/section/section152L',
        text: 'Appointment of Facilitator and his duties and responsibilities',
        number: '152L'
      },
      {
        href: '/laws/incometax1984/section/section152M',
        text: 'Rights and duties of the assessee for ADR',
        number: '152M'
      },
      {
        href: '/laws/incometax1984/section/section152N',
        text: 'Nomination and responsibility of the Commissioner\'s Representative in ADR',
        number: '152N'
      },
      {
        href: '/laws/incometax1984/section/section152O',
        text: 'Decision of the ADR',
        number: '152O'
      },
      {
        href: '/laws/incometax1984/section/section152P',
        text: 'Effect of agreement',
        number: '152P'
      },
      {
        href: '/laws/incometax1984/section/section152Q',
        text: 'Limitation for appeal where agreement is not concluded',
        number: '152Q'
      },
      {
        href: '/laws/incometax1984/section/section152R',
        text: 'Post verification of the agreement',
        number: '152R'
      },
      {
        href: '/laws/incometax1984/section/section152S',
        text: 'Bar on suit or prosecution',
        number: '152S'
      }
    ]
  },
  {
    title: 'Chapter XIX',
    subtitle: 'APPEAL AND REFERENCE',
    sections: [
      {
        href: '/laws/incometax1984/section/section153',
        text: 'Appeal to appellate income tax authority',
        number: '153'
      },
      {
        href: '/laws/incometax1984/section/section154',
        text: 'Form of appeal and limitation',
        number: '154'
      },
      {
        href: '/laws/incometax1984/section/section155',
        text: 'Procedure in appeal before the Appellate Joint Commissioner or the Commission (Appeals)',
        number: '155'
      },
      {
        href: '/laws/incometax1984/section/section156',
        text: 'Decision in appeal by the Appellate Joint Commissioner or the Commission (Appeals)',
        number: '156'
      },
      {
        href: '/laws/incometax1984/section/section157',
        text: 'Appeal against order of Tax Recovery Officer',
        number: '157'
      },
      {
        href: '/laws/incometax1984/section/section158',
        text: 'Appeal to the Appellate Tribunal',
        number: '158'
      },
      {
        href: '/laws/incometax1984/section/section159',
        text: 'Disposal of appeal by the Appellate Tribunal',
        number: '159'
      },
      {
        href: '/laws/incometax1984/section/section160',
        text: 'Reference to the High Court Division',
        number: '160'
      },
      {
        href: '/laws/incometax1984/section/section161',
        text: 'Decision of the High Court Division',
        number: '161'
      },
      {
        href: '/laws/incometax1984/section/section162',
        text: 'Appeal to the Appellate Division',
        number: '162'
      }
    ]
  },
  {
    title: 'Chapter XX',
    subtitle: 'PROTECTION OF INFORMATION',
    sections: [
      { 
        href: '/laws/incometax1984/section/section163', 
        text: 'Statement, returns, etc., to be confidential', 
        number: '163' 
      },
    ],
  },
  {
    title: 'Chapter XXI',
    subtitle: 'OFFENCES AND PROSECUTION',
    sections: [
      {
        href: '/laws/incometax1984/section/section164',
        text: 'Punishment for non-compliance of certain obligations',
        number: '164'
      },
      {
        href: '/laws/incometax1984/section/section165',
        text: 'Punishment for false statement in verifications, etc.',
        number: '165'
      },
      {
        href: '/laws/incometax1984/section/section165A',
        text: "Punishment for improper use of Tax-payer's Identification Number",
        number: '165A'
      },
      {
        href: '/laws/incometax1984/section/section165AA',
        text: 'Punishment for furnishing fake audit report',
        number: '165AA'
      },
      {
        href: '/laws/incometax1984/section/section165B',
        text: 'Punishment for obstructing an income tax authority',
        number: '165B'
      },
      {
        href: '/laws/incometax1984/section/section165C',
        text: 'Punishment for unauthorised employment',
        number: '165C'
      },
      {
        href: '/laws/incometax1984/section/section166',
        text: 'Punishment for concealment of income, etc.',
        number: '166'
      },
      {
        href: '/laws/incometax1984/section/section166A',
        text: 'Punishment for providing false information, etc.',
        number: '166A'
      },
      {
        href: '/laws/incometax1984/section/section167',
        text: 'Punishment for disposal of property to prevent attachment',
        number: '167'
      },
      {
        href: '/laws/incometax1984/section/section168',
        text: 'Punishment for disclosure of protected information',
        number: '168'
      },
      {
        href: '/laws/incometax1984/section/section169',
        text: 'Sanction for prosecution',
        number: '169'
      },
      {
        href: '/laws/incometax1984/section/section169A',
        text: 'Further enquiry and investigation, etc. for prosecution',
        number: '169A'
      },
      {
        href: '/laws/incometax1984/section/section170',
        text: 'Power to compound offences',
        number: '170'
      },
      {
        href: '/laws/incometax1984/section/section171',
        text: 'Trial by Special Judge',
        number: '171'
      }
    ]
  },
  {
    title: 'Chapter XXII',
    subtitle: 'MISCELLANEOUS',
    sections: [
      {
        href: '/laws/incometax1984/section/section172',
        text: 'Relief when salary, etc., is paid in arrear or advance',
        number: '172',
      },
      {
        href: '/laws/incometax1984/section/section173A',
        text: 'Place of assessment',
        number: '173A',
      },
      {
        href: '/laws/incometax1984/section/section173',
        text: 'Correction of errors',
        number: '173',
      },
      {
        href: '/laws/incometax1984/section/section174',
        text: 'Appearance by authorised representative',
        number: '174',
      },
      {
        href: '/laws/incometax1984/section/section175',
        text: 'Tax to be calculated to nearest taka',
        number: '175',
      },
      {
        href: '/laws/incometax1984/section/section176',
        text: 'Receipts to be given',
        number: '176',
      },
      {
        href: '/laws/incometax1984/section/section177',
        text: 'Computation of the period of limitation',
        number: '177',
      },
      {
        href: '/laws/incometax1984/section/section178',
        text: 'Service of notice',
        number: '178',
      },
      {
        href: '/laws/incometax1984/section/section178A',
        text: 'System generated notice, order, etc.',
        number: '178A',
      },
      {
        href: '/laws/incometax1984/section/section178B',
        text: 'Electronic filing, etc.',
        number: '178B',
      },
      {
        href: '/laws/incometax1984/section/section179',
        text: 'Certain errors not to vitiate assessment, etc.',
        number: '179',
      },
      {
        href: '/laws/incometax1984/section/section180',
        text: 'Proceeding against companies under liquidation',
        number: '180',
      },
      {
        href: '/laws/incometax1984/section/section181',
        text: 'Indemnity',
        number: '181',
      },
      {
        href: '/laws/incometax1984/section/section182',
        text: 'Bar of suits and prosecution, etc.',
        number: '182',
      },
      {
        href: '/laws/incometax1984/section/section183',
        text: 'Ordinance to have effect pending legislative provision for charge of tax',
        number: '183',
      },
      {
        href: '/laws/incometax1984/section/section184A',
        text: 'Proof of submission of return required in certain cases',
        number: '184A',
      },
      {
        href: '/laws/incometax1984/section/section184AA',
        text: 'Twelve-digit Taxpayer\'s Identification Number (TIN) in certain documents',
        number: '184AA',
      },
      {
        href: '/laws/incometax1984/section/section184B',
        text: 'Taxpayer\'s Identification Number',
        number: '184B',
      },
      {
        href: '/laws/incometax1984/section/section184BB',
        text: 'Tax collection account number',
        number: '184BB',
      },
      {
        href: '/laws/incometax1984/section/section184BBBB',
        text: 'Issuance of Temporary Registration Number (TRN)',
        number: '184BBBB',
      },
      {
        href: '/laws/incometax1984/section/section184C',
        text: 'Displaying proof of submission of return',
        number: '184C',
      },
      {
        href: '/laws/incometax1984/section/section184CC',
        text: 'Requirement of mentioning twelve-digit TIN in certain documents',
        number: '184CC',
      },
      {
        href: '/laws/incometax1984/section/section184D',
        text: 'Reward to officers and employees of the Board',
        number: '184D',
      },
      {
        href: '/laws/incometax1984/section/section184E',
        text: 'Assistance to income tax authorities',
        number: '184E',
      },
      {
        href: '/laws/incometax1984/section/section184F',
        text: 'Ordinance to override other laws',
        number: '184F',
      },
      {
        href: '/laws/incometax1984/section/section184G',
        text: 'Power to condone or extend, etc.',
        number: '184G',
      },
    ],
  },
  {
    title: 'Chapter XXIII',
    subtitle: 'RULES AND REPEAL',
    sections: [
      {
        href: '/laws/incometax1984/section/section185',
        text: 'Power to make rules',
        number: '185',
      },
      {
        href: '/laws/incometax1984/section/section185A',
        text: 'Power to issue circular, clarification, etc',
        number: '185A',
      },
      {
        href: '/laws/incometax1984/section/section186',
        text: 'Repeal and savings',
        number: '186',
      },
      {
        href: '/laws/incometax1984/section/section187',
        text: 'Removal of difficulties',
        number: '187',
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
    
    chapters.forEach(chapter => {
      const hasSubsections = chapter.sections && chapter.sections.some(section => section.subsections);
      
      if (hasSubsections) {
        chapter.sections.forEach(section => {
          if (section.subsections) {
            section.subsections.forEach(subsection => {
              sections.push({
                ...subsection,
                chapterTitle: chapter.title || '',
                chapterSubtitle: chapter.subtitle || '',
                sectionSubtitle: section.subtitle || ''
              });
            });
          } else {
            sections.push({
              ...section,
              chapterTitle: chapter.title || '',
              chapterSubtitle: chapter.subtitle || '',
              sectionSubtitle: ''
            });
          }
        });
      } else {
        chapter.sections?.forEach(section => {
          sections.push({
            ...section,
            chapterTitle: chapter.title || '',
            chapterSubtitle: chapter.subtitle || '',
            sectionSubtitle: ''
          });
        });
      }
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
        section.sectionSubtitle?.toLowerCase() || '',
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

  const regularChapters = chapters.filter(ch => 
    ch.title !== 'Schedule'
  );
  
  const specialChapters = chapters.filter(ch => 
    ch.title === 'Schedule'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
        <header className="relative overflow-hidden text-white shadow-lg bg-gradient-to-r from-green-800 to-green-800">
          <div className="container px-6 py-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
              {/* Text Content */}
              <div className="flex-1 lg:pr-8">
                <h1 className="mb-2 text-2xl font-bold md:text-2xl">The Income-tax Ordinance, 1984</h1>
                <p className="text-sm opacity-90">( Ordinance NO. XXXVI OF 1984 )</p>
                
                {/* Search Bar */}
                <div className="relative max-w-2xl mt-6">
                  <div className="relative" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="text"
                      placeholder="Search law... (English or Bangla)"
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
                            Found {filteredSections.length} results
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
                                <span className="font-medium text-blue-700">Section {section.number}</span>
                                <div className="flex items-center space-x-2">
                                  <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded">
                                    {section.chapterTitle}
                                  </span>
                                  {section.priority === 1 && (
                                    <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                                      Exact Match
                                    </span>
                                  )}
                                </div>
                              </div>
                              <p className="mt-1 text-gray-800">{section.text}</p>
                              {section.sectionSubtitle && (
                                <p className="mt-1 text-sm text-gray-600">{section.sectionSubtitle}</p>
                              )}
                              <p className="mt-1 text-xs text-gray-500">{section.chapterSubtitle}</p>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 text-center text-gray-500">
                          No results found. Try with different words.
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
          <h2 className="mb-3 font-semibold text-center text-red-500 text-md">এই অধ্যাদেশ আয়কর আইন, ২০২৩ (২০২৩ সনের ১২ নং আইন) দ্বারা রহিত করা হইয়াছে। </h2>
          
          {/* Added important legal phrases */}
          <div className="p-4 my-4 text-justify border-l-4 rounded-r-lg bg-gray-50">
            <p className="italic text-black text-md">
              <span className='block font-bold text-center text-md'>An Ordinance to consolidate and amend the law relating to Income-tax.</span><br/><br/>
              
              WHEREAS it is expedient to consolidate and amend the law relating to income-tax;<br/><br/>
              NOW, THEREFORE, in pursuance of the Proclamation of the 24th March, 1982, and in exercise of all powers enabling him in this behalf, the President is pleased to make and promulgate the following Ordinance:-<br/><br/>
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
                {chapter.sections[0]?.subtitle ? (
                  <div className="space-y-4">
                    {chapter.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="pb-1 mb-2 font-semibold text-blue-800 border-b border-blue-100 text-md">
                          {section.subtitle}
                        </h3>
                        <ul className="space-y-1">
                          {section.subsections?.map((subsection, subIdx) => (
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
                ) : (
                  <ul className="space-y-2">
                    {chapter.sections?.map((section, idx) => (
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
                )}
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