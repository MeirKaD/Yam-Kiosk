// useSanityListener.js

import { useEffect, useState } from "react";

const useSanityListener = (client, username) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const query = `
      *[_type == 'adresses' && name == $username] {
        AnouncmentsToAdress[]-> {
          name
        }
      }
    `;
    
    const params = { username }; // Initialize params with the username
    
    const fetchAnnouncements = async () => {
      try {
        const records = await client.fetch(query, params);
        setAnnouncements(records);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch initial data
    fetchAnnouncements();

    // Subscribe to updates
    const subscription = client
      .listen(query, params)
      .subscribe((newRecords) => {
        console.log(JSON.stringify(newRecords.result, null, 4));

        // Handle updates here
        fetchAnnouncements();
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [client, username]);

  return { announcements, setAnnouncements };
};

export default useSanityListener;
