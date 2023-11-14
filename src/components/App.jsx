import FormSection from "./Form-section.jsx";
import PersonalForm from "./Personal.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import PreviewProfile from "./Preview-profile.jsx";
import PreviewEducation from "./Preview-education.jsx";
import PreviewExperience from "./Preview-experience.jsx";
import ExperienceTemplate from "./Experience-template.jsx";

export default function App() {
  return (
    <div className="app">
      <div className="forms-wrapper">
        <FormSection title="Personal Info" id="form-1">
          <PersonalForm />
        </FormSection>
        <FormSection title="Education" id="form-2">
          <Education />
        </FormSection>
        <FormSection title="Experience" id="form-3">
          <Experience />
        </FormSection>
      </div>
      <div className="preview-container">
        <PreviewProfile
          name="renato"
          phone="123456789"
          email="vini@gmail.com"
        />
        <PreviewEducation
          school="Universidade Federal de São Carlos"
          area="Engenharia de Produção"
          initialDate="2021"
          finalDate="2025"
        />
        <PreviewExperience>
          <ExperienceTemplate />
          <ExperienceTemplate />
        </PreviewExperience>
      </div>
    </div>
  );
}
