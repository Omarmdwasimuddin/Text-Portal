import Navbar from '@/component/laws/Navbar';
import Footer3 from '@/component/laws/Footer3';


const Master = ({ children }) => {
  return (
    <div>
      
      <Navbar/>
      {children}
      <Footer3/>
    </div>
  );
};

export default Master;
