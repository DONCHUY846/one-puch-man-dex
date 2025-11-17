import {IoMdFemale} from 'react-icons/io';
import React from 'react';



const FemaleIcon = () => {
    console.log('RENDER: creating instance of FemaleIcon');
    return <IoMdFemale />;
}

// Use React.memo to prevent unnecessary re-renders
export default React.memo(FemaleIcon);
