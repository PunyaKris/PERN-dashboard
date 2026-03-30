import { Subject } from "../types";

const subjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    department: "CS",
    description:
      "Fundamentals of programming using C/C++. Covers variables, control structures, functions, arrays, and basic problem-solving techniques.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "ME201",
    name: "Thermodynamics",
    department: "ME",
    description:
      "Study of energy, heat, and work interactions. Includes laws of thermodynamics, properties of pure substances, and basic thermodynamic cycles.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "CE301",
    name: "Structural Analysis",
    department: "CE",
    description:
      "Analysis of statically determinate and indeterminate structures. Covers beams, trusses, frames, and methods like moment distribution and slope deflection.",
    createdAt: new Date().toISOString(),
  },
];
export default subjects;
