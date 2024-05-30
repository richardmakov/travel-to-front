
import Header from '../../components/Header/Header'
import CarrouselImages from '../../components/Carousel/CarrouselImages'
import Footer from '../../components/Footer'
import InfoEmail from '../../components/Infos/InfoEmail'
import AbousUsInfo from '../../components/Infos/AboutUsInfo'
import NewOfertsDisplay from './components/NewOfertsDisplay'
import NavBar from '../../components/AppNavBar/NavBar'
import useBadge from '../../hooks/useBadge'
import SearchBar from './components/SearchBar'
import DiscountMessage from '../../components/DiscountMessage'

export default function HomePage() {

  const { badges, handleBadgeClick, selectedBadge, setSelectedBadge } = useBadge();

  return (
    <>
      <Header badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge} />
      <DiscountMessage />
      <CarrouselImages />
      <NavBar />
      <SearchBar />
      <NewOfertsDisplay />
      <AbousUsInfo />
      <InfoEmail />
      <Footer />
    </>
  )
}
