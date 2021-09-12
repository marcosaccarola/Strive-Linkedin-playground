import CustomFooter from "../CustomFooter";
import Directory from "../Directory";
import NavbarLinkedin from "../NavbarLinkedin";
import Posts from "../Posts";
import ProfileRightSide from "../ProfileRightSide";

const HomePage = ({profilesData,setId}) => {
    
    return (
        <div>
        <NavbarLinkedin/> 
            <Posts/>
            <ProfileRightSide data={profilesData,setId}/>
            <Directory/> 
        <CustomFooter />
        </div>
    )
}
export default HomePage