
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import InfoEmail from '../../components/Infos/InfoEmail'
import NavBar from '../../components/AppNavBar/NavBar'

import ContactForm from './components/ContactForm'
import { BadgeInfo } from '../Home/components/interface/badgeInterface'

interface ContactUsProps{
  badges: BadgeInfo[];
  handleBadgeClick: (badge: BadgeInfo) => void;
  selectedBadge: BadgeInfo;
  setSelectedBadge: (badge: BadgeInfo) => void;
}

export default function ContactUsPage({ badges, handleBadgeClick, selectedBadge, setSelectedBadge }: ContactUsProps) {

  return (
    <>
      <Header  badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge} />
      <NavBar />
      <ContactForm />
      <InfoEmail />
      <Footer />
    </>
  )
}
