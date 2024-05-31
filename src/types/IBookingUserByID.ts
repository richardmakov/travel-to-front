type Trip = {
    id: number;
    destination: string;
    price_usd: string;
    price_eur: string;
    description: string;
    image: string;
    visit: string;
    departure_date: string;
    return_date: string;
    images_route: string;
  };
  
  type Flight = {
    id: number;
    flightNumber: string;
    departureAirport: string;
    arrivalAirport: string;
    departureTime: string;
    arrivalTime: string;
  };
  
  type Passenger = {
    id: number;
    name: string;
    passportNumber: string;
  };
  
  type Payment = {
    id: number;
    paymentMethod: string;
    amount: number;
    paymentDate: string;
  };
  
  type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    idCard: string;
    passport: string;
    country: string;
    date: string;
    roles: { id: number; name: string }[];
  };
  
export type IBooking = {
    id: number;
    booking_number: string;
    trip: Trip | null;
    flights: Flight[];
    passengers: Passenger[];
    payment: Payment;
    user: User;
  };