import Navbar from '@/component/laws/Navbar';
import Footer from '@/component/laws/Footer';


const Master = ({ children }) => {
  return (
    <div>
      
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default Master;
