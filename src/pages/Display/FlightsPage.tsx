import CardFlight from './components/CardFlight'
import NavBar from '../../components/AppNavBar/NavBar'
import InfoEmail from '../../components/Infos/InfoEmail';
import Footer from '../../components/Footer';

export default function FlightsPage() {

  return (
    <>
      <NavBar />
      <CardFlight />
      <InfoEmail />
      <Footer />
    </>
  )
}
