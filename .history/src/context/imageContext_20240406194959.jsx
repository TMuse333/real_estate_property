export const ImageProvider = ({ children, numberOfCarousels }) => {
    const [propertyHerobanner, setPropertyHerobanner] = useState(null);
    const [profileImage, setProfileImage] = useState(img);
    const [profileName, setProfileName] = useState(null);
    const [profilePosition, setProfilePosition] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [profileEmail, setProfileEmail] = useState(null);
    const [profilePhoneNumber, setProfilePhoneNumber] = useState(null);
    const [createPageClicked, setCreatePageClicked] = useState(false);

    // Create an array of arrays to store slider images for each carousel
    const initialSliderImages = Array.from({ length: numberOfCarousels }, () => []);
    const [sliderImages, setSliderImages] = useState(initialSliderImages);

    const contextValue = {
        propertyHerobanner,
        setPropertyHerobanner,
        sliderImages,
        setSliderImages,
        profileImage,
        setProfileImage,
        createPageClicked,
        setCreatePageClicked,
        setProfileName,
        profileName,
        profilePosition,
        setProfilePosition,
        companyName,
        setCompanyName,
        profileEmail,
        setProfileEmail,
        profilePhoneNumber,
        setProfilePhoneNumber
    };

    return (
        <ImageContext.Provider value={contextValue}>
            {children}
        </ImageContext.Provider>
    );
};
