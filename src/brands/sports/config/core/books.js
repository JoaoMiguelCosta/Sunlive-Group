import { makeBook } from "../../../../shared/config/index.js";

import aeroEdgePdf from "../../assets/books/aero-edge.pdf";
import cyclingAcademyPdf from "../../assets/books/cycling-academy.pdf";
import cyclingPdf from "../../assets/books/cycling.pdf";
import footballAcademyPdf from "../../assets/books/football-academy.pdf";
import highSchoolPdf from "../../assets/books/high-school.pdf";
import middleSchoolPdf from "../../assets/books/middle-school.pdf";
import trainingFromProPdf from "../../assets/books/training-from-pro.pdf";
import universityPdf from "../../assets/books/university.pdf";

export const SPORTS_BOOKS = Object.freeze({
  aeroEdge: makeBook({
    id: "aero-edge",
    label: "Aero Edge",
    href: aeroEdgePdf,
    type: "pdf",
  }),

  cyclingAcademy: makeBook({
    id: "cycling-academy",
    label: "Cycling Academy",
    href: cyclingAcademyPdf,
    type: "pdf",
  }),

  cycling: makeBook({
    id: "cycling",
    label: "Cycling",
    href: cyclingPdf,
    type: "pdf",
  }),

  footballAcademy: makeBook({
    id: "football-academy",
    label: "Football Academy",
    href: footballAcademyPdf,
    type: "pdf",
  }),

  highSchool: makeBook({
    id: "high-school",
    label: "High School",
    href: highSchoolPdf,
    type: "pdf",
  }),

  middleSchool: makeBook({
    id: "middle-school",
    label: "Middle School",
    href: middleSchoolPdf,
    type: "pdf",
  }),

  trainingFromPro: makeBook({
    id: "training-from-pro",
    label: "Training from Pro",
    href: trainingFromProPdf,
    type: "pdf",
  }),

  university: makeBook({
    id: "university",
    label: "University",
    href: universityPdf,
    type: "pdf",
  }),
});

export default SPORTS_BOOKS;
