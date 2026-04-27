const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const cvData = {
  personal: {
    name: "Lic. en Nutrición",
    title: "Licenciada en Nutrición",
    tagline: "Educación alimentaria con enfoque integral, comunitario y deportivo",
    location: "Buenos Aires, Argentina",
    email: "",
    phone: "",
    linkedin: ""
  },
  profile:
    "Licenciada en Nutrición con formación comunitaria, especializada en la promoción de la educación alimentaria nutricional adaptada a las necesidades, preferencias y contexto socioeconómico de cada persona. Mi enfoque se basa en el acompañamiento integral y en la construcción de hábitos sostenibles, priorizando la prevención y el bienestar. Creo en el trabajo interdisciplinario como herramienta para abordar problemáticas sociales desde una mirada integral. Me caracterizo por la empatía, la responsabilidad y la proactividad, cualidades que me permiten generar vínculos de confianza y aportar soluciones efectivas en equipos de salud.",
  education: [
    {
      degree: "Licenciatura en Nutrición",
      institution: "Universidad Nacional de Lanús (UNLA)",
      period: "2017 – 2024"
    }
  ],
  courses: [
    { name: "Congreso Argentino de Nutrición", org: "Sociedad Argentina de Nutrición (SAN)", year: "2025" },
    { name: "Nutrición y Autismo", org: "", year: "2024" },
    { name: "Suplementos deportivos", org: "APD", year: "2024" },
    { name: "ISAK Nivel 2: Antropometría", org: "CND Nutrición Deportiva", year: "2024" },
    { name: "SIBO y Alimentación en trastornos del eje cerebro-intestino", org: "", year: "2023" },
    { name: "Auditoría en Buenas Prácticas de Manufactura", org: "CAPALIMENTOS", year: "2022" },
    { name: "Manipulación higiénica de los alimentos", org: "INTA", year: "2020" }
  ],
  experience: [
    {
      position: "Nutricionista",
      company: "Pequeño Cottolengo Don Orione",
      location: "Claypole",
      period: "Nov. 2024 – Actualidad",
      description:
        "Gestión de servicio, seguimiento nutricional y EAN en espacio de CET en familias con niños con TDAH y discapacidad. Seguimiento nutricional y EAN en adultos y adultos mayores."
    },
    {
      position: "Nutricionista",
      company: "Metas Espacio Terapéutico",
      location: "Remedios de Escalada",
      period: "May. 2025 – Actualidad",
      description: "Seguimiento nutricional y talleres de educación alimentaria en población infantil."
    },
    {
      position: "Nutricionista",
      company: "Aprendemos Jugando",
      location: "Adrogué",
      period: "Mar. 2025 – Actualidad",
      description:
        "Intervenciones nutricionales en niños con selectividad alimentaria, talleres y consejería familiar."
    },
    {
      position: "Antropometrista",
      company: "Boutique de Entrenamiento Femenino",
      location: "Gimnasio",
      period: "Oct. 2024 – Actualidad",
      description: "Evaluaciones antropométricas y asesoramiento nutricional deportivo."
    },
    {
      position: "Antropometrista y Nutricionista",
      company: "Consultorio Particular",
      location: "",
      period: "Ago. 2022 – Actualidad",
      description: "Mediciones antropométricas y educación alimentaria nutricional personalizada."
    },
    {
      position: "Técnica en Nutrición",
      company: "Residencia de Ancianos «Instituto del Sol»",
      location: "",
      period: "Ago. 2021 – May. 2025",
      description:
        "Gestión de servicio y seguimiento nutricional de adultos mayores en equipo interdisciplinario."
    }
  ],
  technicalSkills: [
    "Evaluación antropométrica (ISAK Nivel 2)",
    "Educación alimentaria nutricional (EAN) en contextos comunitario, clínico y deportivo",
    "Gestión y administración de servicios de alimentación en instituciones de salud",
    "Diseño de planes alimentarios personalizados según patologías, objetivos deportivos y preferencias individuales",
    "Asesoramiento nutricional deportivo: aumento de masa muscular, descenso de peso y rendimiento físico",
    "Auditoría en Buenas Prácticas de Manufactura (BPM) y manipulación higiénica de alimentos",
    "Coordinación de talleres y charlas educativas para familias, niños y adultos mayores"
  ],
  personalSkills: [
    "Empatía y escucha activa",
    "Responsabilidad y compromiso",
    "Proactividad",
    "Trabajo interdisciplinario",
    "Comunicación clara y cercana",
    "Liderazgo y capacitación de equipos"
  ],
  achievements: [
    "Implementación de talleres de educación alimentaria nutricional en instituciones y espacios terapéuticos, con impacto positivo en familias y niños con selectividad alimentaria.",
    "Coordinación de planes alimentarios personalizados en adultos mayores, mejorando la adherencia y el bienestar en la Residencia «Instituto del Sol».",
    "Desarrollo de estrategias nutricionales en el ámbito deportivo, logrando mejoras en composición corporal y rendimiento en mujeres atletas.",
    "Participación activa en equipos interdisciplinarios de salud y educación, fortaleciendo el abordaje integral de problemáticas sociales y clínicas.",
    "Actualización constante en áreas clave de la nutrición (suplementación deportiva, eje cerebro-intestino, antropometría avanzada) aplicada a la práctica profesional."
  ],
  languages: [
    { language: "Español", level: "Nativo", percent: 100 },
    { language: "Inglés", level: "Oral y escrito básico", percent: 40 }
  ],
  computerSkills: [
    "Anthro Plus, Survey Analyser, EPI Info y software estadístico aplicado",
    "Canva y WhatsApp Business",
    "Microsoft Office avanzado (Word, Excel, PowerPoint)",
    "Google Drive, Google Calendar, Outlook",
    "Redes sociales profesionales (Instagram, LinkedIn)"
  ]
};

app.get('/api/cv', (req, res) => {
  res.json(cvData);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'dist')));
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
