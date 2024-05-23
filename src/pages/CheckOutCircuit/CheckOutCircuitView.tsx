import Checkout from './config/CheckOut';
import { useCheckOutViewModel } from './config/useCheckOutViewModel';
export default function CheckOutCircuitView() {
  
  const {numAdults,numChildren,handleAdultsChange,handleChildrenChange,handleDateChange,errors,errors2, handleInputChange, formInputs , paymentType, setPaymentType,cardNumber, setCardNumber,cvv, setCvv, expirationDate, setExpirationDate, cardHolder,setCardHolder, handleNext,handleBack, activeStep} = useCheckOutViewModel()
  return (
    
    <>
      {/* <Header badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge} /> */}
      <Checkout numAdults={numAdults} numChildren={numChildren} handleAdultsChange={handleAdultsChange} handleChildrenChange={handleChildrenChange}  handleDateChange={handleDateChange} errors={errors} errors2={errors2} formInputs={formInputs} handleInputChange={handleInputChange} paymentType={paymentType} setPaymentType={setPaymentType} cardNumber={cardNumber} setCardNumber={setCardNumber} cvv={cvv} setCvv={setCvv} expirationDate={expirationDate} setExpirationDate={setExpirationDate} cardHolder={cardHolder} setCardHolder={setCardHolder} handleNext={handleNext} handleBack={handleBack} activeStep={activeStep}/>
    </>
  )
}
