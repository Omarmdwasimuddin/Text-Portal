import Master from '@/component/master/Master';
import HeroSection from '@/component/HeroSection';
import PopularLaws from '@/component/PopularLaws';
import LatestUpdate from '@/component/LatestUpdate';
import Tool from '@/component/Tool';

const HOME = () => {
  return (
    <Master>
      <HeroSection/>
      <PopularLaws/>
      <LatestUpdate/>
      <Tool/>
    </Master>
  );
};

export default HOME;