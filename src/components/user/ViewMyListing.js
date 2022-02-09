import React from 'react';
import { isAuthenticated } from '../auth';

const ViewMyListing = () => {
    const { user } = isAuthenticated()

    console.log(user)


  return <div>
          

  </div>;
};

export default ViewMyListing;
