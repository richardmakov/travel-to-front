
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import InfoEmail from '../../components/Infos/InfoEmail'
import NavBar from '../../components/AppNavBar/NavBar'
import DividerUS from './components/DividerUS';
import MessageUS from './components/MessageUS'
import MeetUS from './components/MeetUS'
import { BadgeInfo } from '../Home/components/interface/badgeInterface'

interface AboutUsProps {
  badges: BadgeInfo[];
  handleBadgeClick: (badge: BadgeInfo) => void;
  selectedBadge: BadgeInfo;
  setSelectedBadge: (badge: BadgeInfo) => void;
}

export default function AboutUsPage({ badges, handleBadgeClick, selectedBadge, setSelectedBadge }: AboutUsProps) {

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
