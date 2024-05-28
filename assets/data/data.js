import { images } from "..";

const { teacher1, teacher2, teacher3, teacher4, school1, school2, school3 } =
  images;
export const welcomeScreenData = {
  title: `Let's find the "A" with us`,
  subtitle: `Please Sign in to view personalized recommendations`,
};

export const categoryscreenData = {
  title: `What defines you the best`,
  subtitle: `Please select either you want to sign up as a Tutor or a Student`,
};
export const gradesData = [
  "UnderGraduate/Bachelors",
  "Graduate/Masters",
  "PHD",
  "PostDoc",
];

export const provincesData = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Gilgit-Baltistan",
  "Azad Kashmir",
];
export const getPakistanCities = (provinceName) => {
  switch (provinceName) {
    case "Punjab":
      return punjabCities;
    case "Sindh":
      return sindhCities;
    case "Khyber Pakhtunkhwa":
      return kpkCities;
    case "Balochistan":
      return balochistanCities;
    case "Gilgit-Baltistan":
      return gilgitBaltistanCities;
    case "Azad Kashmir":
      return ajkCities;
    default:
      return [];
  }
};

export const punjabCities = [
  { label: "Lahore" },
  { label: "Faisalabad" },
  { label: "Rawalpindi" },
  { label: "Multan" },
  { label: "Gujranwala" },
];

export const sindhCities = [
  { label: "Karachi" },
  { label: "Hyderabad" },
  { label: "Sukkur" },
  { label: "Larkana" },
  { label: "Nawabshah" },
];

export const kpkCities = [
  { label: "Peshawar" },
  { label: "Abbottabad" },
  { label: "Mardan" },
  { label: "Swat" },
  { label: "Nowshera" },
];

export const balochistanCities = [
  { label: "Quetta" },
  { label: "Gwadar" },
  { label: "Turbat" },
  { label: "Khuzdar" },
  { label: "Chaman" },
];

export const gilgitBaltistanCities = [
  { label: "Gilgit" },
  { label: "Skardu" },
  { label: "Chilas" },
  { label: "Ghanche" },
  { label: "Astore" },
];

export const ajkCities = [
  { label: "Muzaffarabad" },
  { label: "Mirpur" },
  { label: "Kotli" },
  { label: "Rawalakot" },
  { label: "Bhimber" },
];

export const teacherData = [
  {
    name: "Cassie Valdez",
    subject: "Biology",
    location: "Lahore",
    image: teacher1,
  },
  {
    name: "Paul Simons",
    subject: "Chemistry",
    location: "Faisalabad",
    image: teacher2,
  },
  {
    name: "Simon Patrick",
    subject: "Computer Science",
    location: "Rawalpindi",
    image: teacher4,
  },
  {
    name: "Graham Osbor",
    subject: "Physics",
    location: "Multan",
    image: teacher3,
  },
];

export const institutionData = [
  {
    name: "Victory College",
    field: "Bio Science",
    description:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
    rating: "4.5",
    reviews: "413",
    image: school1,
    location: "Lahore",
  },
  {
    name: "New Montana",
    field: "Bio Science",
    description:
      "Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com",
    rating: "4.1",
    reviews: "354",
    image: school2,
    location: "Faisalabad",
  },
  {
    name: "Susipwan College",
    field: "Bio Science",
    description:
      "This is a private higher education center which conducting classes for GCE AL Students.",
    rating: "3.0",
    reviews: "745",
    image: school3,
    location: "Multan",
  },
  {
    name: `Simon's Rock College`,
    field: "Computer Science",
    description: "Early college for gifted high schoolers",
    rating: "4.1",
    reviews: "354",
    image: school2,
    location: "Rawalpindi",
  },
];

export const areaFilters = ["Lahore", "Faisalabad", "Multan", "Rawalpindi"];

export const subjectFilters = [
  "All Subjects",
  "Biology",
  "Chemistry",
  "Physics",
  "Science for Technology",
];
