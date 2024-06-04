import { BadgeInfo } from '../Home/components/interface/badgeInterface';
import Checkout from './config/CheckOut';
import { useCheckOutViewModel } from './config/useCheckOutViewModel';

interface CheckOutCircuitViewProps {
  badges: BadgeInfo[];
  handleBadgeClick: (badge: BadgeInfo) => void;
  selectedBadge: BadgeInfo;
  setSelectedBadge: (badge: BadgeInfo) => void;
}

export default function CheckOutCircuitView({ selectedBadge}: CheckOutCircuitViewProps) {
  
  const {numberId,numAdults,numChildren,handleAdultsChange,handleChildrenChange,handleDateChange,errors,errors2, handleInputChange, formInputs , paymentType, setPaymentType,cardNumber, setCardNumber,cvv, setCvv, expirationDate, setExpirationDate, cardHolder,setCardHolder, handleNext,handleBack, activeStep} = useCheckOutViewModel(selectedBadge)
  return (
    
    <>  
      <Checkout selectedBadge={selectedBadge} numberId={numberId} numAdults={numAdults} numChildren={numChildren} handleAdultsChange={handleAdultsChange} handleChildrenChange={handleChildrenChange}  handleDateChange={handleDateChange} errors={errors} errors2={errors2} formInputs={formInputs} handleInputChange={handleInputChange} paymentType={paymentType} setPaymentType={setPaymentType} cardNumber={cardNumber} setCardNumber={setCardNumber} cvv={cvv} setCvv={setCvv} expirationDate={expirationDate} setExpirationDate={setExpirationDate} cardHolder={cardHolder} setCardHolder={setCardHolder} handleNext={handleNext} handleBack={handleBack} activeStep={activeStep}/>
    </>
  )
}
