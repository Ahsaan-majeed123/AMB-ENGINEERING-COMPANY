import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sitemap = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch and parse sitemap.xml on component mount
  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        // Use Axios to fetch the sitemap.xml file
        const response = await axios.get('/sitemap.xml');  // Adjust path if needed

        // Parse XML using DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "application/xml");

        // Extract all <url> elements from the sitemap
        const urlElements = xmlDoc.getElementsByTagName('url');
        const urls = [];

        for (let i = 0; i < urlElements.length; i++) {
          const loc = urlElements[i].getElementsByTagName('loc')[0].textContent;
          urls.push(loc);
        }

        // Update state with the list of URLs
        setLinks(urls);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError('Error fetching or parsing sitemap.xml');
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  let a = "";
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Sitemap</h1>
      
      <p className="text-lg text-gray-600 mb-6">
        Here is a list of all the pages available on our website:
      </p>
      
      {loading ? (
        <p>Loading sitemap...</p>  // Display loading message
      ) : error ? (
        <p className="text-red-600">{error}</p>  // Display error message if there's an issue
      ) : (
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
          {links.map((link, index) => (
        
            <li key={index}>
              <a 
                href={link} 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:text-blue-700 transition duration-300"
              >
                {link.split('/').filter(Boolean).pop()}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 text-center">
        <p className="text-gray-600">Need help? Please <a href="mailto:farhanbajwa418@gmail.com?subject=From%20Amb%20Engineering&body=Assalam%20-U-%20Alaikum!%0A" className="text-blue-500">contact us</a>.</p>
      </div>
    </div>
  );
};

export default Sitemap;
