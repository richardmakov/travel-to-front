
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import InfoEmail from '../../components/Infos/InfoEmail'
import NavBar from '../../components/AppNavBar/NavBar'
import useBadge from '../../hooks/useBadge'
import ContactForm from './components/ContactForm'

export default function ContactUsPage() {
  const { badges, handleBadgeClick, selectedBadge, setSelectedBadge } = useBadge();
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
