
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import InfoEmail from '../../components/Infos/InfoEmail'
import NavBar from '../../components/AppNavBar/NavBar'

import DisplayInfo from './components/DisplayInfo'
import { BadgeInfo } from '../Home/components/interface/badgeInterface'

interface GalleryPageProps {
  badges: BadgeInfo[];
  handleBadgeClick: (badge: BadgeInfo) => void;
  selectedBadge: BadgeInfo;
  setSelectedBadge: (badge: BadgeInfo) => void;
}

export default function GalleryPage({ badges, handleBadgeClick, selectedBadge, setSelectedBadge }: GalleryPageProps) {

  return (
    <>
      <Header badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge} />
      <NavBar />
      <DisplayInfo selectedBadge={selectedBadge}/>
      <InfoEmail />
      <Footer />
    </>
  )
}
