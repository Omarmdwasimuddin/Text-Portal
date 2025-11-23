'use client'
import React, { useState, useEffect } from 'react';

const FinanceActsPage = () => {
  const [financeActs, setFinanceActs] = useState([]);
  const [filteredActs, setFilteredActs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('desc');
  const [downloadingId, setDownloadingId] = useState(null);
  const itemsPerPage = 10;

  // PDF files mapping - আপনার একচুয়াল PDF files দিয়ে replace করুন
  const pdfFiles = {
    1: '/pdfs/finance-act-2025-amendment.pdf',
    2: '/pdfs/finance-ordinance-2025.pdf',
    3: '/pdfs/finance-act-2024.pdf',
    4: '/pdfs/finance-act-2023.pdf',
    5: '/pdfs/finance-act-2022.pdf',
    6: '/pdfs/finance-act-2021.pdf',
    7: '/pdfs/finance-act-2020.pdf',
    8: '/pdfs/finance-act-2019.pdf',
    9: '/pdfs/finance-act-2018.pdf',
    10: '/pdfs/finance-act-2017.pdf',
    11: '/pdfs/finance-act-2016.pdf',
    12: '/pdfs/finance-act-2015.pdf',
    13: '/pdfs/finance-act-2014.pdf',
    14: '/pdfs/finance-act-2013.pdf',
    15: '/pdfs/finance-act-2012.pdf',
    16: '/pdfs/finance-act-2011.pdf',
    17: '/pdfs/finance-act-2010.pdf',
    18: '/pdfs/finance-act-2009.pdf',
  };

  // Download PDF function
  const downloadPdf = async (actId, actTitle) => {
    try {
      setDownloadingId(actId);
      
      // Get the PDF file path
      const pdfPath = pdfFiles[actId];
      
      if (!pdfPath) {
        throw new Error('PDF file not found');
      }

      // Fetch the PDF file
      const response = await fetch(pdfPath);
      
      if (!response.ok) {
        throw new Error('Failed to fetch PDF');
      }

      // Convert to blob
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Create filename from act title
      const fileName = `${actTitle.replace(/\s+/g, '-').toLowerCase()}.pdf`;
      link.download = fileName;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      // Success notification (you can replace with toast notification)
      console.log(`Downloaded: ${fileName}`);
      
    } catch (error) {
      console.error('Download error:', error);
      alert('Download failed: ' + error.message);
    } finally {
      setDownloadingId(null);
    }
  };

  // Simulate API call
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      const actsData = [
        { id: 1, title: 'Certain Laws Relating to Finance (Amendment) Ordinance-2025', date: '29-06-2025', type: 'Ordinance' },
        { id: 2, title: 'Finance Ordinance-2025', date: '03-06-2025', type: 'Ordinance' },
        { id: 3, title: 'Finance Act-2024', date: '01-07-2024', type: 'Act' },
        { id: 4, title: 'Finance Act-2023', date: '02-07-2023', type: 'Act' },
        { id: 5, title: 'Finance Act-2022', date: '10-06-2022', type: 'Act' },
        { id: 6, title: 'Finance Act-2021', date: '01-07-2021', type: 'Act' },
        { id: 7, title: 'Finance Act-2020', date: '01-07-2020', type: 'Act' },
        { id: 8, title: 'Finance Act-2019', date: '01-07-2019', type: 'Act' },
        { id: 9, title: 'Finance Act-2018', date: '09-07-2018', type: 'Act' },
        { id: 10, title: 'Finance Act-2017', date: '30-06-2017', type: 'Act' },
        { id: 11, title: 'Finance Act-2016', date: '09-08-2016', type: 'Act' },
        { id: 12, title: 'Finance Act-2015', date: '08-04-2016', type: 'Act' },
        { id: 13, title: 'Finance Act-2014', date: '08-04-2016', type: 'Act' },
        { id: 14, title: 'Finance Act-2013', date: '08-04-2016', type: 'Act' },
        { id: 15, title: 'Finance Act-2012', date: '08-04-2016', type: 'Act' },
        { id: 16, title: 'Finance Act-2011', date: '08-04-2016', type: 'Act' },
        { id: 17, title: 'Finance Act-2010', date: '08-04-2016', type: 'Act' },
        { id: 18, title: 'Finance Act-2009', date: '08-04-2016', type: 'Act' },
      ];
      
      setFinanceActs(actsData);
      setFilteredActs(actsData);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter acts based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredActs(financeActs);
    } else {
      const filtered = financeActs.filter(act => 
        act.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        act.date.includes(searchTerm)
      );
      setFilteredActs(filtered);
    }
    setCurrentPage(1);
  }, [searchTerm, financeActs]);

  // Sort acts by date
  const sortActs = () => {
    const sorted = [...filteredActs].sort((a, b) => {
      const dateA = new Date(a.date.split('-').reverse().join('-'));
      const dateB = new Date(b.date.split('-').reverse().join('-'));
      
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
    
    setFilteredActs(sorted);
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentActs = filteredActs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredActs.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', options);
  };

  // Get badge color based on act type
  const getBadgeColor = (type) => {
    return type === 'Ordinance' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
          <div className="p-6 transition-transform duration-300 transform bg-white shadow-md rounded-xl hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 mr-4 text-green-600 bg-green-100 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Documents</p>
                <p className="text-2xl font-bold text-gray-900">{financeActs.length}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 transition-transform duration-300 transform bg-white shadow-md rounded-xl hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 mr-4 text-blue-600 bg-blue-100 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Latest Update</p>
                <p className="text-2xl font-bold text-gray-900">2025</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 transition-transform duration-300 transform bg-white shadow-md rounded-xl hover:scale-105">
            <div className="flex items-center">
              <div className="p-3 mr-4 text-purple-600 bg-purple-100 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Ordinances</p>
                <p className="text-2xl font-bold text-gray-900">{financeActs.filter(act => act.type === 'Ordinance').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="overflow-hidden transition-all duration-300 bg-white shadow-xl rounded-2xl hover:shadow-2xl">
          {/* Card Header with Search and Filters */}
          <div className="px-6 py-5 bg-gradient-to-r from-green-600 to-green-700">
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold text-white">Finance Acts Directory</h2>
                <p className="mt-1 text-green-100">Browse, search and download documents</p>
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search Box */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="block w-full py-2 pl-10 pr-3 text-gray-800 placeholder-gray-500 transition-all duration-200 border border-transparent rounded-lg bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                    placeholder="Search by title or year..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {/* Sort Button */}
                <button
                  onClick={sortActs}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-700 transition-colors duration-200 bg-white border border-transparent rounded-lg hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                  </svg>
                  Sort {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
                </button>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            {isLoading ? (
              // Loading Skeleton
              <div className="p-6 space-y-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex space-x-4 animate-pulse">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="flex-1 py-1 space-y-2">
                      <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                      <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      SI
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Document Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Acts Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentActs.length > 0 ? (
                    currentActs.map((act, index) => (
                      <tr 
                        key={act.id} 
                        className="transition-colors duration-150 hover:bg-gray-50 group"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {indexOfFirstItem + index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor(act.type)}`}>
                            {act.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 transition-colors duration-200 group-hover:text-green-700">
                          {act.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {formatDate(act.date)}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => downloadPdf(act.id, act.title)}
                              disabled={downloadingId === act.id}
                              className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white transition-all duration-200 transform group-hover:scale-105 ${
                                downloadingId === act.id 
                                  ? 'bg-gray-400 cursor-not-allowed' 
                                  : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                              }`}
                            >
                              {downloadingId === act.id ? (
                                <>
                                  <svg className="w-4 h-4 mr-1 -ml-1 text-white animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Downloading...
                                </>
                              ) : (
                                <>
                                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  Download PDF
                                </>
                              )}
                            </button>
                            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                              </svg>
                              Share
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h3 className="text-lg font-medium text-gray-900">No documents found</h3>
                          <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>

          {/* Table Footer with Pagination */}
          {filteredActs.length > 0 && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col items-center justify-between sm:flex-row">
                <p className="mb-4 text-sm text-gray-700 sm:mb-0">
                  Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                  <span className="font-medium">
                    {Math.min(indexOfLastItem, filteredActs.length)}
                  </span> of{' '}
                  <span className="font-medium">{filteredActs.length}</span> results
                </p>
                
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                      currentPage === 1 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {/* Page Numbers */}
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                            currentPage === pageNumber
                              ? 'bg-green-600 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (
                      pageNumber === currentPage - 2 ||
                      pageNumber === currentPage + 2
                    ) {
                      return <span key={pageNumber} className="px-2 text-gray-500">...</span>;
                    }
                    return null;
                  })}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info Section */}
        <div className="p-6 mt-8 bg-white shadow-md rounded-2xl">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">About Finance Acts</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="mb-4 text-gray-600">
                Finance Acts are annual legislation that implement the financial proposals of the government 
                for the following financial year. They contain amendments to various direct and indirect tax laws.
              </p>
              <p className="text-gray-600">
                Finance Ordinances are issued when Parliament is not in session and have the same effect as Acts, 
                but must be approved by Parliament when it reconvenes.
              </p>
            </div>
            <div className="p-4 border border-green-100 rounded-lg bg-green-50">
              <h4 className="mb-2 font-medium text-green-800">Need Help?</h4>
              <p className="mb-3 text-sm text-green-700">
                If you can't find the document you're looking for or need assistance, 
                please contact our support team.
              </p>
              <button className="inline-flex items-center text-sm font-medium text-green-700 transition-colors duration-200 hover:text-green-800">
                Contact Support
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FinanceActsPage;