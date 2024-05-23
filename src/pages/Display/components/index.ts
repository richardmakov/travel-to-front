export interface FlightsRootObject {
  status: boolean;
  message: string;
  timestamp: number;
  data: Data;
}

interface Data {
  session: Session;
  complete: boolean;
  numOfFilters: number;
  totalNumResults: number;
  flights: Flight[];
}

export interface Flight {
  segments: Segment[];
  purchaseLinks: PurchaseLink[];
  itineraryTag?: ItineraryTag;
}

interface ItineraryTag {
  tag: string;
  type: string;
}

interface PurchaseLink {
  purchaseLinkId: string;
  providerId: string;
  partnerSuppliedProvider: PartnerSuppliedProvider;
  commerceName: string;
  currency: string;
  originalCurrency: string;
  seatAvailability: number;
  taxesAndFees: number;
  taxesAndFeesPerPassenger: number;
  totalPrice: number;
  totalPricePerPassenger: number;
  fareBasisCodes: [];
  containedPurchaseLinks: [];
  partnerData: PartnerData;
  isPaid: boolean;
  fareAttributesList: [];
  url: string;
}

interface PartnerData {
}

interface PartnerSuppliedProvider {
  id: string;
  displayName: string;
  logoUrl: string;
}

interface Segment {
  legs: Leg[];
  layovers: Layover[];
}

interface Layover {
  durationType: string;
  hasStationChange: boolean;
  durationInMinutes: number;
}

interface Leg {
  originStationCode: string;
  isDifferentOriginStation: boolean;
  destinationStationCode: string;
  isDifferentDestinationStation: boolean;
  departureDateTime: string;
  arrivalDateTime: string;
  classOfService: string;
  marketingCarrierCode: string;
  operatingCarrierCode: string;
  equipmentId: string;
  amenities: [];
  flightNumber: number;
  seatGuruEquipmentId: number;
  seatGuruAirlineUrl: string;
  numStops: number;
  distanceInKM: number;
  isInternational: boolean;
  selfTransfer: boolean;
  operatingCarrier: OperatingCarrier;
  marketingCarrier: OperatingCarrier;
}

interface OperatingCarrier {
  locationId: number;
  code: string;
  logoUrl: string;
  displayName: string;
}

interface Session {
  searchHash: string;
  pageLoadUid: string;
  searchId: string;
  filterSettings: FilterSettings;
}

interface FilterSettings {
  tt: string;
  aa: string;
  a: string;
  d: string;
  ns: string;
  cos: string;
  al: string;
  fq: string;
  ft: string;
  sid: string;
  oc: string;
  plp: string;
  mc: string;
  pRange: string;
  da: string;
  ca: string;
}