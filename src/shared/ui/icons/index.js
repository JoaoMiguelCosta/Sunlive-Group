// ===== Imports individuais =====
import FacebookIcon from "./Facebook.jsx";
import InstagramIcon from "./Instagram.jsx";

import GlobeIcon from "./Globe.jsx";
import PinIcon from "./Pin.jsx";
import CardIcon from "./Card.jsx";
import MailIcon from "./Mail.jsx";
import PhoneIcon from "./Phone.jsx";
import ShieldIcon from "./Shield.jsx";

// Novos ícones (Travel / Logística)
import PlaneIcon from "./Plane.jsx";
import BusIcon from "./Bus.jsx";
import TourBusIcon from "./TourBus.jsx";
import PackageIcon from "./Package.jsx";

// Parcerias / Confiança
import HandshakeIcon from "./Handshake.jsx";

import StarIcon from "./Star.jsx";

// Vetor personalizado (avião+carro)
import TravelVector from "./TravelVector.jsx";

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
  TravelVector,
};

// ===== Mapa conveniente para usar por chave (iconKey) =====
export const ICONS = {
  // travel / logística
  plane: PlaneIcon,
  bus: BusIcon,
  "tour-bus": TourBusIcon,
  package: PackageIcon,
  pin: PinIcon,
  travel: TravelVector, // <— novo
  "travel-vector": TravelVector, // alias

  // parcerias / confiança
  handshake: HandshakeIcon,

  // rating / destaque
  star: StarIcon,
  "rating-star": StarIcon, // alias opcional

  // utilitários / sociais
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  shield: ShieldIcon,
  card: CardIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

// Helper opcional
export function getIconByKey(key) {
  return ICONS[key] || null;
}
