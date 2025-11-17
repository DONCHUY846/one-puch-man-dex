import {IoMdMale} from 'react-icons/io';
import React from 'react';


const MaleIcon = () => {
    console.log('RENDER: creating instance of MaleIcon');
    return <IoMdMale />;
}

// Use React.memo to prevent unnecessary re-renders
export default React.memo(MaleIcon);