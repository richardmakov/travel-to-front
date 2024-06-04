import NavBar from '../../components/AppNavBar/NavBar'
import InfoEmail from '../../components/Infos/InfoEmail';
import Footer from '../../components/Footer';
import CardFlightView from './components/CardFlightView';

export default function FlightsPage() {

  return (
    <>
      <NavBar />
      <CardFlightView/>
      <InfoEmail />
      <Footer />
    </>
  )
}
