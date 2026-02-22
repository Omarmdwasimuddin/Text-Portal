import Navbar from '@/component/laws/Navbar';
import Footer4 from '@/component/laws/Footer4';


const Master = ({ children }) => {
  return (
    <div>
      
      <Navbar/>
      {children}
      <Footer4/>
    </div>
  );
};

export default Master;