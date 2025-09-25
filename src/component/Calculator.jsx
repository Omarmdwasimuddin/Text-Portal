import { useState, useEffect } from 'react'

export default function Calculator({ description, primaryField, defaultRate, rateLabel, calcType }) {
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState(defaultRate)
  const [result, setResult] = useState(null)

  // Update rate when defaultRate prop changes
  useEffect(() => {
    setRate(defaultRate)
    setAmount('')
    setResult(null)
  }, [defaultRate])

  const handleCalculate = () => {
    const val = parseFloat(amount) || 0
    const r = parseFloat(rate) || 0
    let calculatedAmount = 0

    if (calcType === 'vat' || calcType === 'income' || calcType === 'customs') {
      calculatedAmount = (val * r) / 100
    }

    setResult({
      amount: val.toFixed(2),
      rate: r.toFixed(2),
      calculatedAmount: calculatedAmount.toFixed(2),
      totalAmount: (val + calculatedAmount).toFixed(2)
    })
  }

  const handleReset = () => {
    setAmount('')
    setRate(defaultRate)
    setResult(null)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {description && <p className="text-gray-700 text-justify text-sm mb-3">{description}</p>}

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">{primaryField}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
          placeholder={`Enter ${primaryField}`}
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">{rateLabel}</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Calculate
        </button>
        <button
          onClick={handleReset}
          className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-md transition"
        >
          Reset
        </button>
      </div>

      {result !== null && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Calculation Results</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Amount:</span>
              <span className="text-sm font-semibold text-gray-800">{result.amount}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                {calcType === 'vat' ? 'VAT Rate:' : calcType === 'income' ? 'Tax Rate:' : 'Duty Rate:'}
              </span>
              <span className="text-sm font-semibold text-gray-800">{result.rate}%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                {calcType === 'vat' ? 'VAT Amount:' : calcType === 'income' ? 'Tax Amount:' : 'Duty Amount:'}
              </span>
              <span className="text-sm font-semibold text-gray-800">{result.calculatedAmount}</span>
            </div>
            
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-sm font-bold text-gray-700">Total Amount:</span>
              <span className="text-sm font-bold text-green-600">{result.totalAmount}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}