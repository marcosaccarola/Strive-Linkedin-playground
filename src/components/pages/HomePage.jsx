import CustomFooter from "../CustomFooter";
import Directory from "../Directory";
import NavbarLinkedin from "../NavbarLinkedin";
import Posts from "../Posts";



const HomePage = () => {
    
    return (
        <div>
        <NavbarLinkedin/>    
        <Posts/>
        <Directory/> 
        <CustomFooter />
        </div>
    )
}
export default HomePage