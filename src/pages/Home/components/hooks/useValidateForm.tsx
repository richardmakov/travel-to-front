

const useValidateForm= () => {

    const validateOrigin = (value: string) => {
        return value.trim() !== '';
    };

    const validateDestination = (value: string) => {
        return value.trim() !== '';
    };

    const validateDate = (dateString: string) => {
        const date = new Date(dateString);
        const currentDate = new Date();
        const maxDate = new Date();
        maxDate.setFullYear(currentDate.getFullYear() + 1);

        return date >= currentDate && date <= maxDate;
    };

    const validateNumberOfPassengers = (numberAdults: number, numberSenior: number) => {
        return numberAdults > 0 || numberSenior > 0;
    };

    

    return {
        validateOrigin, validateDestination, validateDate, validateNumberOfPassengers
    };
}

export default useValidateForm;