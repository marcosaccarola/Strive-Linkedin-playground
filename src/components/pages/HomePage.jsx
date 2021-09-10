import CustomFooter from "../CustomFooter";
import Directory from "../Directory";
import NavbarLinkedin from "../NavbarLinkedin";
import Posts from "../Posts";
import ProfileRightSide from "../ProfileRightSide";


const HomePage = () => {
    
    return (
        <div>
        <NavbarLinkedin/> 
        
        
        <Posts/>
        
         
        <ProfileRightSide />
     
       
        <Directory/> 
        <CustomFooter />
        </div>
    )
}
export default HomePage