
import { BadgeInfo } from '../Home/components/interface/badgeInterface';
import Checkout from './config/CheckOut';
import { useCheckOutViewModel } from './config/useCheckOutViewModel';

interface CheckOutFlighttViewProps {
  badges: BadgeInfo[];
  handleBadgeClick: (badge: BadgeInfo) => void;
  selectedBadge: BadgeInfo;
  setSelectedBadge: (badge: BadgeInfo) => void;
}

export default function CheckOutFlightsView({ selectedBadge}: CheckOutFlighttViewProps) {
  
  const {numberId, validate, validatePaymentFields, handleDateChange,errors,errors2, handleInputChange, formInputs , paymentType, setPaymentType,cardNumber, setCardNumber,cvv, setCvv, expirationDate, setExpirationDate, cardHolder,setCardHolder,handleBack, activeStep, setActiveStep} = useCheckOutViewModel(selectedBadge)

  return (
    
    <>
      <Checkout selectedBadge={selectedBadge} numberId={numberId} validate={validate} setActiveStep={setActiveStep} validatePaymentFields={validatePaymentFields}  handleDateChange={handleDateChange} errors={errors} errors2={errors2} formInputs={formInputs} handleInputChange={handleInputChange} paymentType={paymentType} setPaymentType={setPaymentType} cardNumber={cardNumber} setCardNumber={setCardNumber} cvv={cvv} setCvv={setCvv} expirationDate={expirationDate} setExpirationDate={setExpirationDate} cardHolder={cardHolder} setCardHolder={setCardHolder} handleBack={handleBack} activeStep={activeStep}/>
    </>
  )
}
