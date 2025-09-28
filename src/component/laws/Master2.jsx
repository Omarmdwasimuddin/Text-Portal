import Navbar from '@/component/laws/Navbar';
import Footer2 from '@/component/laws/Footer2';


const Master = ({ children }) => {
  return (
    <div>
      
      <Navbar/>
      {children}
      <Footer2/>
    </div>
  );
};

export default Master;
