'use client'

import React, { useState, useEffect } from 'react'
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";

export default function VATCalculator() {
  const [amount, setAmount] = useState('')
  const [vatRate, setVatRate] = useState(15)
  const [vat, setVat] = useState(0)
  const [total, setTotal] = useState(0)
  const [isCalculated, setIsCalculated] = useState(false)

  useEffect(() => {
    if (amount && vatRate) {
      calculateVAT()
    }
  }, [amount, vatRate])

  const calculateVAT = () => {
    const a = parseFloat(amount) || 0
    const v = (a * vatRate) / 100
    setVat(v)
    setTotal(a + v)
    setIsCalculated(true)
  }

  const resetCalculator = () => {
    setAmount('')
    setVatRate(15)
    setVat(0)
    setTotal(0)
    setIsCalculated(false)
  }

  const exportPDF = () => {
    const doc = new jsPDF()

    // Logo যোগ করা
    const logoUrl = "/logo.jpeg"
    doc.addImage(logoUrl, 'JPEG', 10, 10, 30, 30)

    // Company Name
    doc.setFontSize(16)
    doc.text("Tax & Trade Solution", 50, 20)

    // Date
    doc.setFontSize(10)
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 15)

    // Divider line
    doc.setDrawColor(200, 200, 200)
    doc.line(10, 40, 190, 40)

    // VAT Calculation Details
    doc.setFontSize(14)
    doc.text("VAT Calculation", 10, 50)
    
    doc.setFontSize(12)
    doc.text(`Amount: ${parseFloat(amount).toFixed(2)}`, 10, 65)
    doc.text(`VAT Rate: ${vatRate}%`, 10, 75)
    doc.text(`VAT Amount: ${vat.toFixed(2)}`, 10, 85)
    doc.text(`Total: ${total.toFixed(2)}`, 10, 95)

    // Footer
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text("Thank you for using Tax & Trade Solution", 105, 140, { align: "center" })

    doc.save("VAT_Calculation.pdf")
  }

  const exportExcel = () => {
    const ws_data = [
      ["Tax & Trade Solution"],
      [`Date: ${new Date().toLocaleDateString()}`],
      [],
      ["Field", "Value"],
      ["Amount", parseFloat(amount).toFixed(2)],
      [`VAT Rate (%)`, vatRate],
      ["VAT Amount", vat.toFixed(2)],
      ["Total", total.toFixed(2)]
    ];

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "VAT Calculation");

    // Style the header row
    if(ws['A1']) {
      ws['A1'].s = {
        font: { bold: true, sz: 14 },
        alignment: { horizontal: "center" }
      };
    }

    XLSX.writeFile(wb, "VAT_Calculation.xlsx");
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        {/* Header with Logo */}
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/logo.jpeg" 
            alt="Tax & Trade Solution Logo" 
            className="w-10 h-10 rounded-lg mr-3 object-contain"
          />
          <h1 className="text-2xl font-bold text-gray-800">Tax & Trade Solution</h1>
        </div>
        
        <div className="mb-2 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">VAT Calculator</h2>
          <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
        </div>
        
        <div className="space-y-5 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input 
              type="number" 
              placeholder="Enter Amount" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">VAT Rate (%)</label>
            <input 
              type="number" 
              placeholder="VAT Rate (%)" 
              value={vatRate} 
              onChange={(e) => setVatRate(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <button 
              onClick={calculateVAT} 
              className="flex-1 bg-indigo-600 text-white p-3 rounded-lg font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
            >
              Calculate
            </button>
            <button 
              onClick={resetCalculator}
              className="flex-1 bg-gray-200 text-gray-700 p-3 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {isCalculated && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-indigo-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Calculation Results</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Amount:</span>
                <span className="font-medium">{parseFloat(amount).toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">VAT Rate:</span>
                <span className="font-medium">{vatRate}%</span>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-gray-600">VAT Amount:</span>
                <span className="font-medium text-indigo-700">{vat.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-gray-800 font-semibold">Total Amount:</span>
                <span className="font-bold text-lg text-indigo-700">{total.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col gap-3">
              <button 
                onClick={exportPDF} 
                className="bg-red-600 text-white p-3 rounded-lg font-medium hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export PDF
              </button>
              
              <button 
                onClick={exportExcel} 
                className="bg-green-600 text-white p-3 rounded-lg font-medium hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Excel
              </button>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Tax & Trade Solution. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}