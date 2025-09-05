import Navbar from '@/component/master/Navbar';
import Footer from '@/component/master/Footer';
import Banner from '@/component/master/Banner';

const Master = ({ children }) => {
  return (
    <div>
      <Banner/>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default Master;
