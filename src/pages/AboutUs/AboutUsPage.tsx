
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import InfoEmail from '../../components/Infos/InfoEmail'
import NavBar from '../../components/AppNavBar/NavBar'
import useBadge from '../../hooks/useBadge'
import DividerUS from './components/DividerUS';
import MessageUS from './components/MessageUS'
import MeetUS from './components/MeetUS'

export default function AboutUsPage() {
  const { badges, handleBadgeClick, selectedBadge, setSelectedBadge } = useBadge();
  return (
    <>
      <Header  badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge} />
      <NavBar />
      <MeetUS />
      <DividerUS />
      <MessageUS />
      <InfoEmail />
      <Footer />
    </>
  )
}
