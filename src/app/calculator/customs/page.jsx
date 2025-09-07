'use client'

import React, { useState, useEffect } from 'react'
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";

export default function CustomsCalculator() {
  const [value, setValue] = useState('')
  const [dutyRate, setDutyRate] = useState(25)
  const [duty, setDuty] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [isCalculated, setIsCalculated] = useState(false)

  useEffect(() => {
    if (value && dutyRate) {
      calculateDuty()
    }
  }, [value, dutyRate])

  const calculateDuty = () => {
    const val = parseFloat(value) || 0
    const d = (val * dutyRate) / 100
    setDuty(d)
    setTotalCost(val + d)
    setIsCalculated(true)
  }

  const resetCalculator = () => {
    setValue('')
    setDutyRate(25)
    setDuty(0)
    setTotalCost(0)
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

    // Customs Duty Calculation Details
    doc.setFontSize(14)
    doc.text("Customs Duty Calculation", 10, 50)
    
    doc.setFontSize(12)
    doc.text(`Item Value: ${parseFloat(value).toFixed(2)}`, 10, 65)
    doc.text(`Duty Rate: ${dutyRate}%`, 10, 75)
    doc.text(`Duty Amount: ${duty.toFixed(2)}`, 10, 85)
    doc.text(`Total Cost: ${totalCost.toFixed(2)}`, 10, 95)

    // Footer
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text("Thank you for using Tax & Trade Solution", 105, 140, { align: "center" })

    doc.save("CustomsDuty_Calculation.pdf")
  }

  const exportExcel = () => {
    const ws_data = [
      ["Tax & Trade Solution"],
      [`Date: ${new Date().toLocaleDateString()}`],
      [],
      ["Field", "Value"],
      ["Item Value", parseFloat(value).toFixed(2)],
      [`Duty Rate (%)`, dutyRate],
      ["Duty Amount", duty.toFixed(2)],
      ["Total Cost", totalCost.toFixed(2)]
    ];

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Customs Duty Calculation");

    // Style the header row
    if(ws['A1']) {
      ws['A1'].s = {
        font: { bold: true, sz: 14 },
        alignment: { horizontal: "center" }
      };
    }

    XLSX.writeFile(wb, "CustomsDuty_Calculation.xlsx");
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-amber-50 to-orange-100 px-4 py-8">
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
          <h2 className="text-xl font-semibold text-gray-700">Customs Duty Calculator</h2>
          <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
        </div>
        
        <div className="space-y-5 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Item Value</label>
            <input 
              type="number" 
              placeholder="Enter Item Value" 
              value={value} 
              onChange={(e) => setValue(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duty Rate (%)</label>
            <input 
              type="number" 
              placeholder="Duty Rate (%)" 
              value={dutyRate} 
              onChange={(e) => setDutyRate(parseFloat(e.target.value) || 0)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
            />
          </div>
          
          <div className="flex gap-3 pt-2">
            <button 
              onClick={calculateDuty} 
              className="flex-1 bg-amber-600 text-white p-3 rounded-lg font-medium hover:bg-amber-700 transition shadow-md hover:shadow-lg"
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
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-orange-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Calculation Results</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Item Value:</span>
                <span className="font-medium">{parseFloat(value).toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duty Rate:</span>
                <span className="font-medium">{dutyRate}%</span>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                <span className="text-gray-600">Duty Amount:</span>
                <span className="font-medium text-amber-700">{duty.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                <span className="text-gray-800 font-semibold">Total Cost:</span>
                <span className="font-bold text-lg text-amber-700">{totalCost.toFixed(2)}</span>
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