import CustomFooter from "../CustomFooter";
import Directory from "../Directory";
import NavbarLinkedin from "../NavbarLinkedin";
import Profile from "../Profile";

const ProfilePage = () => {
  return (
    <div>
      <NavbarLinkedin />
      <Profile />
    
      <Directory/> 
       <CustomFooter />
    </div>
  );
};
export default ProfilePage;
