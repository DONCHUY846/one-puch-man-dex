import  MaleIcon from "../components/icons/male_icon";
import  FemaleIcon from "../components/icons/female_icon";


// OUR flyweight 
const iconCache = {};

// Factory 
export const IconFactory = {

    getIcon: (iconName) => {
        // Check if the icon is already in the cache
        if (iconCache[iconName]) {
            console.log(`IconFactory: Reusing cached icon for ${iconName}`);
            return iconCache[iconName];
        }
        
        // Create a new icon instance based on the iconName if not cached
        console.log(`IconFactory: Creating new icon for ${iconName}`);
        let iconInstance;
        switch (iconName.toLowerCase()) {
            case 'male':
                iconInstance = <MaleIcon />;
                break;
            case 'female': 
                iconInstance = <FemaleIcon />;
                break;
            default:
                throw new Error(`IconFactory: Unknown icon name ${iconName}`);
        }

        // Store the new icon instance in the cache
        iconCache[iconName] = iconInstance;
        return iconInstance;

    }

   
};

 // function extra to know the current cache status
    export const getIconCacheStatus = () => {
        return Object.keys(iconCache);
    }