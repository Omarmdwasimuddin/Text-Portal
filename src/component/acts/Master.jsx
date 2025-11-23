import Navbar from '@/component/master/Navbar';
import Footer from '@/component/master/Footer';

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
