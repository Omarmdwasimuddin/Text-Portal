import Master from '@/component/master/Master';
import HeroSection from '@/component/HeroSection';
import PopularLaws from '@/component/PopularLaws';
import LatestUpdate from '@/component/LatestUpdate';
import Tool from '@/component/Tool';
import Blogs from '@/component/Blogs';
import Publication from '@/component/publication/Publication';

const HOME = () => {
  return (
    <Master>
      <HeroSection/>
      <PopularLaws/>
      <LatestUpdate/>
      <Tool/>
      <Blogs/>
      <Publication/>
    </Master>
  );
};

export default HOME;