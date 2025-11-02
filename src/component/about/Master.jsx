import Navbar from '@/component/about/Navbar';
import Footer from '@/component/about/Footer';

const Master = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Master;