import { useEffect, useState } from "react";

const useSanityListener = (client,username) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = `
    *[_type == 'adresses' && name == $username] {
        postsToAdress[]->{
      name , poster{asset{_ref}}
          
        }
          

          
      } `
    ;

    
    const params = { username };
    
    const fetchPosts = async () => {
      try {
        const records = await client.fetch(query,params);
        
        setPosts(records);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const refreshData = () => {
      // Fetch updated data after a 30-second delay
      setTimeout(fetchPosts, 30000); // 30 seconds delay
    };

    // Fetch initial data
    fetchPosts();

    // Subscribe to updates
    const subscription = client.listen(query,params).subscribe((newRecords) => {
      console.log(JSON.stringify(newRecords.result, null, 4));

      // Handle updates here
      refreshData();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [client,username]);

  return { posts, setPosts };
};

export default useSanityListener;
