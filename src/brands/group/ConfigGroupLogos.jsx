import { makeBackLink } from "../../shared/config/BrandDefault.jsx";

/* ===== Committees ===== */
import uec from "./assets/logos/committes/uec.png";
import cob from "./assets/logos/committes/cob.png";
import cop from "./assets/logos/committes/cop.png";
import coa from "./assets/logos/committes/coa.png";

/* ===== Portuguese Federations ===== */
import fpb from "./assets/logos/portugueseFederations/fpb.png";
import fpc from "./assets/logos/portugueseFederations/fdc.png";
import fpg from "./assets/logos/portugueseFederations/fgp.png";
import fpj from "./assets/logos/portugueseFederations/fpj.png";
import fnkp from "./assets/logos/portugueseFederations/fpk.png";
import fpe from "./assets/logos/portugueseFederations/fpe.png";
import fpa from "./assets/logos/portugueseFederations/fap.png";

/* ===== International Federations ===== */
import agn from "./assets/logos/internationalFederations/agn.png";
import bg from "./assets/logos/internationalFederations/bg.png";
import ca from "./assets/logos/internationalFederations/ca.png";
import catar from "./assets/logos/internationalFederations/catar.png";
import cbc from "./assets/logos/internationalFederations/cbc.png";
import cfg from "./assets/logos/internationalFederations/cfg.png";
import ci from "./assets/logos/internationalFederations/ci.png";
import fab from "./assets/logos/internationalFederations/fab.png";
import fag from "./assets/logos/internationalFederations/fag.png";
import fcc from "./assets/logos/internationalFederations/fcc.png";
import fec from "./assets/logos/internationalFederations/fec.png";
import ffc from "./assets/logos/internationalFederations/ffc.png";
import ftgym from "./assets/logos/internationalFederations/ftgym.png";
import icf from "./assets/logos/internationalFederations/icf.png";
import malta from "./assets/logos/internationalFederations/malta.png";
import pc from "./assets/logos/internationalFederations/pc.png";
import pi from "./assets/logos/internationalFederations/pi.png";
import saudi from "./assets/logos/internationalFederations/saudi.png";
import uggf from "./assets/logos/internationalFederations/uggf.png";

/* ===== Teams ===== */
import ads from "./assets/logos/teams/ads.png";
import afc from "./assets/logos/teams/afc.png";
import agc from "./assets/logos/teams/agc.png";
import bette from "./assets/logos/teams/bette.png";
import bmx from "./assets/logos/teams/bmx.png";
import catarTeam from "./assets/logos/teams/catar.png";
import cgp from "./assets/logos/teams/cgp.png";
import eon from "./assets/logos/teams/eon.png";
import experience from "./assets/logos/teams/experience.png";
import flgym from "./assets/logos/teams/flgym.png";
import ga from "./assets/logos/teams/ga.png";
import gca from "./assets/logos/teams/gca.png";
import gcp from "./assets/logos/teams/gcp.png";
import gerpla from "./assets/logos/teams/gerpla.png";
import hunti from "./assets/logos/teams/hunti.png";
import ivanova from "./assets/logos/teams/ivanova.png";
import knwu from "./assets/logos/teams/knwu.png";
import kristiansand from "./assets/logos/teams/kristiansand.png";
import lux from "./assets/logos/teams/lux.png";
import nick from "./assets/logos/teams/nick.png";
import ose from "./assets/logos/teams/ose.png";
import oulun from "./assets/logos/teams/oulun.png";
import pegasus from "./assets/logos/teams/pegasus.png";
import racing from "./assets/logos/teams/racing.png";
import scp from "./assets/logos/teams/scp.png";
import south from "./assets/logos/teams/south.png";
import stars from "./assets/logos/teams/stars.png";
import stt from "./assets/logos/teams/stt.png";
import stv from "./assets/logos/teams/stv.png";
import swansea from "./assets/logos/teams/swansea.png";
import tg from "./assets/logos/teams/tg.png";
import thomas from "./assets/logos/teams/thomas.png";
import tv from "./assets/logos/teams/tv.png";
import utto from "./assets/logos/teams/utto.png";
import woking from "./assets/logos/teams/woking.png";

/* ===== Associations ===== */
import aca from "./assets/logos/associations/aca.png";
import aba from "./assets/logos/associations/abv.png";
import ace from "./assets/logos/associations/ace.png";
import afa from "./assets/logos/associations/afa.png";

const configGroupLogos = {
  // 🔙 Back link agora via helper partilhado
  backLink: makeBackLink(), // { href: "/sunlive-group", label: "Voltar Sunlive Group" }

  committees: {
    title: "COMMITTEES",
    items: [
      {
        key: "uec",
        name: "Union Européenne de Cyclisme (UEC)",
        caption: "União Europeia de Ciclismo (UEC)",
        src: uec,
        href: "https://www.uec.ch/",
      },
      {
        key: "cob",
        name: "Comitê Olímpico do Brasil",
        caption: "Comitê Olímpico do Brasil",
        src: cob,
        href: "https://www.cob.org.br/",
      },
      {
        key: "cop",
        name: "Comité Olímpico de Portugal",
        caption: "Comité Olímpico de Portugal",
        src: cop,
        href: "https://comiteolimpicoportugal.pt/",
      },
      {
        key: "coa",
        name: "Comité Olímpico de Angola",
        caption: "Comité Olímpico de Angola",
        src: coa,
        href: "https://www.olympic.org/angola",
        cropInset: "6% 6% 6% 6%",
      },
    ],
  },

  portugueseFederations: {
    title: "PORTUGUESE FEDERATIONS",
    items: [
      {
        key: "fpb",
        name: "Federação Portuguesa de Basquetebol",
        caption: "Federação Portuguesa de Basquetebol",
        src: fpb,
        href: "https://www.fpb.pt/",
      },
      {
        key: "fpc",
        name: "Federação Portuguesa de Ciclismo",
        caption: "Federação Portuguesa de Ciclismo",
        src: fpc,
        href: "https://www.fpciclismo.pt/",
      },
      {
        key: "fpg",
        name: "Federação de Ginástica de Portugal",
        caption: "Federação de Ginástica de Portugal",
        src: fpg,
        href: "https://www.fpginastica.pt/",
      },
      {
        key: "fpj",
        name: "Federação Portuguesa de Judo",
        caption: "Federação Portuguesa de Judo",
        src: fpj,
        href: "https://www.fpj.pt/",
      },
      {
        key: "fnkp",
        name: "Federação Nacional de Karate - Portugal",
        caption: "Federação Nacional de Karate - Portugal",
        src: fnkp,
        href: "https://www.fnkp.pt/",
      },
      {
        key: "fpe",
        name: "Federação Portuguesa de Esgrima",
        caption: "Federação Portuguesa de Esgrima",
        src: fpe,
        href: "https://www.fpe.pt/",
      },
      {
        key: "fpa",
        name: "Federação de Andebol de Portugal",
        caption: "Federação de Andebol de Portugal",
        src: fpa,
        href: "https://www.fpa.pt/",
      },
    ],
  },

  internationalFederations: {
    title: "INTERNATIONAL FEDERATIONS",
    items: [
      {
        key: "fag",
        name: "Federação Angolana de Ginástica",
        caption: "Federação Angolana de Ginástica",
        src: fag,
      },
      {
        key: "fab",
        name: "Federação Angolana de Basquetebol",
        caption: "Federação Angolana de Basquetebol",
        src: fab,
      },
      {
        key: "cfg",
        name: "Confederação Brasileira de Ginástica",
        caption: "Confederação Brasileira de Ginástica",
        src: cfg,
      },
      {
        key: "qgf",
        name: "Qatar Gymnastics Federation",
        caption: "الاتحاد القطري للجمباز",
        src: catar,
      },
      {
        key: "cbc",
        name: "Confederação Brasileira de Ciclismo",
        caption: "Confederação Brasileira de Ciclismo",
        src: cbc,
      },
      {
        key: "sgf",
        name: "Saudi Gymnastic Federation",
        caption: "الاتحاد السعودي للجمباز",
        src: saudi,
      },
      {
        key: "mgf",
        name: "Malta Gymnastics Federation",
        caption: "Malta Gymnastics Federation",
        src: malta,
      },
      {
        key: "fcc",
        name: "Federación Colombiana de Ciclismo",
        caption: "Federación Colombiana de Ciclismo",
        src: fcc,
      },
      {
        key: "ftgym",
        name: "Fédération Tunisienne de Gymnastique",
        caption: "الجامعة التونسية للجمباز",
        src: ftgym,
      },
      {
        key: "icf",
        name: "Israel Cycling Federation",
        caption: "איגוד האופניים בישראל",
        src: icf,
      },
      {
        key: "ffc",
        name: "Fédération Française de Cyclisme – Normandie",
        caption: "Fédération Française de Cyclisme – Normandie",
        src: ffc,
      },
      {
        key: "ci",
        name: "Cycling Ireland",
        caption: "Rothaíocht Éireann",
        src: ci,
      },
      {
        key: "fec",
        name: "Real Federación Española de Ciclismo",
        caption: "Real Federación Española de Ciclismo",
        src: fec,
      },
      {
        key: "pc",
        name: "Polski Związek Kolarski",
        caption: "Polski Związek Kolarski",
        src: pc,
      },
      {
        key: "uggf",
        name: "United Georgian Gymnastics Federation",
        caption: "United Georgian Gymnastics Federation",
        src: uggf,
      },
      {
        key: "ca",
        name: "Cycling Austria",
        caption: "Radsport Austria",
        src: ca,
      },
      {
        key: "agn",
        name: "Arab Gymnastic Union",
        caption: "الاتحاد العربي للجمباز",
        src: agn,
      },
      {
        key: "pi",
        name: "Paralympics Ireland",
        caption: "Paralympics Ireland",
        src: pi,
      },
      {
        key: "bg",
        name: "British Gymnastics",
        caption: "British Gymnastics",
        src: bg,
      },
    ],
  },

  teams: {
    title: "TEAMS",
    items: [
      { key: "ads", name: "ADS Team", caption: "ADS Team", src: ads },
      { key: "afc", name: "AFC Team", caption: "AFC Team", src: afc },
      { key: "agc", name: "AGC Team", caption: "AGC Team", src: agc },
      { key: "bette", name: "Bette Team", caption: "Bette Team", src: bette },
      { key: "bmx", name: "BMX Team", caption: "BMX Team", src: bmx },
      {
        key: "catarTeam",
        name: "Qatar Team",
        caption: "Qatar Team",
        src: catarTeam,
      },
      { key: "cgp", name: "CGP Team", caption: "CGP Team", src: cgp },
      { key: "eon", name: "EON Team", caption: "EON Team", src: eon },
      {
        key: "experience",
        name: "Experience Team",
        caption: "Experience Team",
        src: experience,
      },
      { key: "flgym", name: "FL Gym Team", caption: "FL Gym Team", src: flgym },
      { key: "ga", name: "GA Team", caption: "GA Team", src: ga },
      { key: "gca", name: "GCA Team", caption: "GCA Team", src: gca },
      { key: "gcp", name: "GCP Team", caption: "GCP Team", src: gcp },
      {
        key: "gerpla",
        name: "Gerpla Team",
        caption: "Gerpla Team",
        src: gerpla,
      },
      { key: "hunti", name: "Hunti Team", caption: "Hunti Team", src: hunti },
      {
        key: "ivanova",
        name: "Ivanova Team",
        caption: "Ivanova Team",
        src: ivanova,
      },
      { key: "knwu", name: "KNWU Team", caption: "KNWU Team", src: knwu },
      {
        key: "kristiansand",
        name: "Kristiansand Team",
        caption: "Kristiansand Team",
        src: kristiansand,
      },
      { key: "lux", name: "LUX Team", caption: "LUX Team", src: lux },
      { key: "nick", name: "Nick Team", caption: "Nick Team", src: nick },
      { key: "ose", name: "OSE Team", caption: "OSE Team", src: ose },
      { key: "oulun", name: "Oulun Team", caption: "Oulun Team", src: oulun },
      {
        key: "pegasus",
        name: "Pegasus Team",
        caption: "Pegasus Team",
        src: pegasus,
      },
      {
        key: "racing",
        name: "Racing Team",
        caption: "Racing Team",
        src: racing,
      },
      { key: "scp", name: "SCP Team", caption: "SCP Team", src: scp },
      { key: "south", name: "South Team", caption: "South Team", src: south },
      { key: "stars", name: "Stars Team", caption: "Stars Team", src: stars },
      { key: "stt", name: "STT Team", caption: "STT Team", src: stt },
      { key: "stv", name: "STV Team", caption: "STV Team", src: stv },
      {
        key: "swansea",
        name: "Swansea Team",
        caption: "Swansea Team",
        src: swansea,
      },
      { key: "tg", name: "TG Team", caption: "TG Team", src: tg },
      {
        key: "thomas",
        name: "Thomas Team",
        caption: "Thomas Team",
        src: thomas,
      },
      { key: "tv", name: "TV Team", caption: "TV Team", src: tv },
      { key: "utto", name: "Utto Team", caption: "Utto Team", src: utto },
      {
        key: "woking",
        name: "Woking Team",
        caption: "Woking Team",
        src: woking,
      },
    ],
  },

  associations: {
    title: "ASSOCIATIONS",
    items: [
      {
        key: "aca",
        name: "ACA – Associação de Ciclismo de Anadia",
        caption: "ACA – Associação de Ciclismo de Anadia",
        src: aca,
      },
      {
        key: "aba",
        name: "ABA – Associação Basquetebol de Anadia",
        caption: "ABA – Associação Basquetebol de Anadia",
        src: aba,
      },
      {
        key: "ace",
        name: "ACE – Athletic Challenge Event",
        caption: "ACE – Athletic Challenge Event",
        src: ace,
      },
      {
        key: "afa",
        name: "AFA – Associação de Futebol de Aveiro",
        caption: "AFA – Associação de Futebol de Aveiro",
        src: afa,
      },
    ],
  },
};

export default configGroupLogos;
