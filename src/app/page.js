import Master from '@/component/master/Master';
import HeroSection from '@/component/HeroSection';
import PopularLaws from '@/component/PopularLaws';
import LatestUpdate from '@/component/LatestUpdate';
import Tool from '@/component/Tool';
import Blogs from '@/component/Blogs';
import Publication from '@/component/publication/Publication';
import Consultancy from '@/component/Consultancy';
import Subscription from '@/component/Subscription';
import About from '@/component/About';
import NewsLetter from '@/component/NewsLetter';
import FlagBackground from '@/component/FlagBackground';

const HOME = () => {
  return (
    <Master>
      <HeroSection/>
      <PopularLaws/>
      <LatestUpdate/>
      
      <FlagBackground>
        <Publication/>
        <Consultancy/>
        <Blogs/>
      </FlagBackground>

      <About/>

      <FlagBackground>
      <NewsLetter/>
      </FlagBackground>

    </Master>
  );
};

export default HOME;