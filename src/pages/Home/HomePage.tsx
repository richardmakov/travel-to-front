
import Header from '../../components/Header/Header'
import CarrouselImages from '../../components/Carousel/CarrouselImages'
import Footer from '../../components/Footer'
import InfoEmail from '../../components/Infos/InfoEmail'
import AbousUsInfo from '../../components/Infos/AboutUsInfo'
import NewOfertsDisplay from './components/NewOfertsDisplay'
import NavBar from '../../components/AppNavBar/NavBar'
import SearchBar from './components/SearchBar'
import DiscountMessage from '../../components/DiscountMessage'
import { BadgeInfo } from './components/interface/badgeInterface'
interface GalleryPageProps {
  badges: BadgeInfo[];
  handleBadgeClick: (badge: BadgeInfo) => void;
  selectedBadge: BadgeInfo;
  setSelectedBadge: (badge: BadgeInfo) => void;
}

export default function HomePage({ badges, handleBadgeClick, selectedBadge, setSelectedBadge }: GalleryPageProps) {

  return (
    <>
      <Header badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge} />
      <DiscountMessage />
      <CarrouselImages />
      <NavBar />
      <SearchBar selectedBadge={selectedBadge}/>
      <NewOfertsDisplay selectedBadge={selectedBadge}/>
      <AbousUsInfo />
      <InfoEmail />
      <Footer />
    </>
  )
}
