// ===== Imports individuais =====
import FacebookIcon from "./Facebook.jsx";
import InstagramIcon from "./Instagram.jsx";

import GlobeIcon from "./Globe.jsx";
import PinIcon from "./Pin.jsx";
import CardIcon from "./Card.jsx";
import MailIcon from "./Mail.jsx";
import PhoneIcon from "./Phone.jsx";
import ShieldIcon from "./Shield.jsx";
import UsersIcon from "./Users.jsx";
import BrainIcon from "./Brain.jsx";
import HeartIcon from "./Heart.jsx";
import SunIcon from "./Sun.jsx";
import SpeedIcon from "./Speed.jsx";
import DreamIcon from "./Dream.jsx";
import BoltIcon from "./Bolt.jsx";
import FlagIcon from "./Flag.jsx";
import MonitorIcon from "./Monitor.jsx";
import RecycleIcon from "./Recycle.jsx";
import GraduationCapIcon from "./GraduationCap.jsx";
import CompassIcon from "./Compassion.jsx";
import BrushCleaningIcon from "./BrushCleaning.jsx";
import AthleteBarbellIcon from "./AthleteBarbell.jsx";
import ClockIcon from "./Clock.jsx";
import ChartIcon from "./Chart.jsx";
import EyeIcon from "./Eye.jsx";
import ConsultingExperienceIcon from "./Experience.jsx";
import AppleIcon from "./Apple.jsx";
import VideoIcon from "./Video.jsx";
import SearchIcon from "./Search.jsx";
import BicepsFlexedIcon from  "./BicepsFlexed.jsx";
import PhysicalTherapyIcon from "./PhysicalTherapy.jsx";
import SmileIcon from "./SmileIcon.jsx";
import SoupIcon from "./Soup.jsx";
import BedIcon from "./Bed.jsx";
import ShirtIcon from "./Shirt.jsx";
import LuggageIcon from "./Luggage.jsx";
import TrendUpIcon from "./TrendUp.jsx";
import CogIcon from "./Cog.jsx";
import CircusTentIcon from "./Circus.jsx";
import Building2Icon from "./Building2.jsx";
import GoalIcon from "./Goal.jsx";


// Novos ícones (Travel / Logística)
import PlaneIcon from "./Plane.jsx";
import BusIcon from "./Bus.jsx";
import TourBusIcon from "./TourBus.jsx";
import PackageIcon from "./Package.jsx";

// Parcerias / Confiança
import HandshakeIcon from "./Handshake.jsx";

import StarIcon from "./Star.jsx";

// 🆕 Medalha
import MedalIcon from "./Medal.jsx";

// Vetor personalizado (avião+carro)
import TravelVector from "./TravelVector.jsx";

// >>> NOVO: Chevron do menu
import ChevronDownIcon from "./ChevronDown.jsx";


// ===== Exports nomeados =====
export {
  FacebookIcon,
  InstagramIcon,
  GlobeIcon,
  PinIcon,
  CardIcon,
  MailIcon,
  PhoneIcon,
  ShieldIcon,
  PlaneIcon,
  BusIcon,
  TourBusIcon,
  PackageIcon,
  HandshakeIcon,
  StarIcon,
  MedalIcon,
  TravelVector,
  ChevronDownIcon,
  UsersIcon,
  BrainIcon,
  HeartIcon,
  SpeedIcon,
  SunIcon,
  DreamIcon,
  BoltIcon,
  FlagIcon,
  MonitorIcon,
  RecycleIcon,
  GraduationCapIcon,
  CompassIcon,
  BrushCleaningIcon,
  AthleteBarbellIcon,
  ClockIcon,
  ChartIcon,
  EyeIcon,
  ConsultingExperienceIcon,
  AppleIcon,
  VideoIcon,
  SearchIcon,
  BicepsFlexedIcon,
  PhysicalTherapyIcon,
  SmileIcon,
  SoupIcon,
  BedIcon,
  ShirtIcon,
  LuggageIcon,
  TrendUpIcon,
  CogIcon,
  CircusTentIcon,
  Building2Icon,
  GoalIcon,
};

// ===== Mapa conveniente para usar por chave (iconKey) =====
export const ICONS = {
  // travel / logística
  plane: PlaneIcon,
  bus: BusIcon,
  "tour-bus": TourBusIcon,
  package: PackageIcon,
  pin: PinIcon,
  travel: TravelVector, // <— existente
  "travel-vector": TravelVector, // alias

  // parcerias / confiança
  handshake: HandshakeIcon,

  // rating / destaque
  star: StarIcon,
  "rating-star": StarIcon, // alias opcional

  // 🆕 prémios / distinções
  medal: MedalIcon,
  "award-medal": MedalIcon, // alias

  // utilitários / sociais
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  shield: ShieldIcon,
  card: CardIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  dream: DreamIcon,
  bolt: BoltIcon,
  flag: FlagIcon,
  monitor: MonitorIcon,
  recycle: RecycleIcon,
  graduation: GraduationCapIcon,
  compassion:  CompassIcon,
  brush: BrushCleaningIcon,
  athlete: AthleteBarbellIcon,
  clock: ClockIcon,
  chart: ChartIcon,
  Eye: EyeIcon,
  experience: ConsultingExperienceIcon,
  apple: AppleIcon,
  video: VideoIcon,
  search: SearchIcon,
  bicipe: BicepsFlexedIcon,
  physical: PhysicalTherapyIcon,
  smile: SmileIcon,
  soup: SoupIcon,
  bed: BedIcon,
  shirt: ShirtIcon,
  luggage: LuggageIcon,
  trend: TrendUpIcon,
  cog: CogIcon,
  circus: CircusTentIcon,
  build2: Building2Icon,
  goal: GoalIcon,
  


  "chevron-down": ChevronDownIcon,
};

export function getIconByKey(key) {
  return ICONS[key] || null;
}
