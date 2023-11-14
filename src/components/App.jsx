import { useState } from "react";
import FormSection from "./Form-section.jsx";
import PersonalForm from "./Personal.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import PreviewProfile from "./Preview-profile.jsx";
import PreviewEducation from "./Preview-education.jsx";
import PreviewExperience from "./Preview-experience.jsx";
import ExperienceTemplate from "./Experience-template.jsx";

export default function App() {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    area: "",
    date_initial: "",
    date_final: "",
    company: "",
    position: "",
    date_experience_initial: "",
    date_experience_final: "",
    responsability: "",
  });

  const [personalPreview, setPersonalPreview] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [educationPreview, setEducationPreview] = useState({
    school: "",
    area: "",
    date_initial: "",
    date_final: "",
  });
  const [experiencePreview, setExperiencePreview] = useState({
    company: "",
    position: "",
    date_experience_initial: "",
    date_experience_final: "",
    responsability: "",
  });

  function handleInput(e) {
    const value = e.target.value;
    setInputState({ ...inputState, [e.target.name]: value });
  }

  function handlePersonalSubmission(e) {
    e.preventDefault();

    setPersonalPreview({
      name: inputState.name,
      email: inputState.email,
      phone: inputState.phone,
    });
  }

  function handleEducationSubmission(e) {
    e.preventDefault();    

    setEducationPreview({
      school: inputState.school,
      area: inputState.area,
      date_initial: inputState.date_initial,
      date_final: inputState.date_final
    })
  }

  function handleExperienceSubmission(e) {
    e.preventDefault();

    setExperiencePreview({
      company: inputState.company,
      position: inputState.position,
      date_experience_initial: inputState.date_experience_initial,
      date_experience_final: inputState.date_experience_final,
      responsability: inputState.responsability
    })
  }

  return (
    <div className="app">
      <div className="forms-wrapper">
        <FormSection
          title="Personal Info"
          id="form_1"
          handler={handlePersonalSubmission}
        >
          <PersonalForm
            handler={handleInput}
            nameValue={inputState.name}
            emailValue={inputState.email}
            phoneValue={inputState.phone}
          />
        </FormSection>
        <FormSection title="Education" id="form_2" handler={handleEducationSubmission}>
          <Education 
            schoolValue={inputState.school}
            areaValue={inputState.area}
            fromDateSchool={inputState.date_initial}
            toDateSchool={inputState.date_final}
            handler={handleInput} 
          />
        </FormSection>
        <FormSection title="Experience" id="form_3" handler={handleExperienceSubmission}>
          <Experience 
            companyValue={inputState.company}
            positionValue={inputState.position}
            fromDate={inputState.date_experience_initial}
            toDate={inputState.date_experience_final}
            handler={handleInput}
          />
        </FormSection>
      </div>
      <div className="preview-container">
        <PreviewProfile
          name={personalPreview.name}
          phone={personalPreview.phone}
          email={personalPreview.email}
        />
        <PreviewEducation
          school={educationPreview.school}
          area={educationPreview.area}
          initialDate={educationPreview.date_initial}
          finalDate={educationPreview.date_final}
        />
        <PreviewExperience>
          <ExperienceTemplate 
            company={experiencePreview.company}
            position={experiencePreview.position}
            respons={experiencePreview.responsability}
            initialDate={experiencePreview.date_experience_initial}
            finalDate={experiencePreview.date_experience_final}
          />
        </PreviewExperience>
      </div>
    </div>
  );
}
