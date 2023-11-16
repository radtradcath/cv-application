import { useState } from "react";
import AppWrapper from "./wrappers/AppWrapper.jsx";
import FormsWrapper from "./wrappers/FormsWrapper.jsx";
import PreviewWrapper from "./wrappers/PreviewWrapper.jsx";
import FormSection from "./inputs/FormSection.jsx";
import ProfileForm from "./inputs/Profile.jsx";
import Education from "./inputs/Education.jsx";
import Experience from "./inputs/Experience.jsx";
import PreviewSection from "./preview/PreviewSection.jsx";
import ExperienceTemplate from "./preview/ExperienceTemplate.jsx";
import PreviewProfile from "./preview/PreviewProfile.jsx";

export default function App() {
  // Handle Inputs
  const [profileState, setProfileState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [copyProfile, setCopyProfile] = useState("");

  const [copyEducation, setCopyEducation] = useState("");

  function profileInputHandler(e) {
    const value = e.target.value;
    setProfileState({ ...profileState, [e.target.name]: value });
  }

  function experienceInputHandler(e) {
    const parent = e.target.closest(".experience");
    const parentId = parent.id;
    const value = e.target.value;
    const inputKey = e.target.name;
    console.log(parent)

    setExperienceForms(
      experienceForms.map((obj) => {
        return obj.id === parentId ? { ...obj, [inputKey]: value } : obj;
      })
    );
  }

  // Handle "New" buttons

  const [experienceForms, setExperienceForms] = useState([]);

  function handleNewExperience(e) {
    e.preventDefault();
    return setExperienceForms([
      ...experienceForms,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        from: "",
        to: "",
        responsibility: "",
      },
    ]);
  }

  // Handle submit and edit

  function handleSubmit(e) {
    e.preventDefault();
    setCopyProfile(profileState);
  }

  return (
    <AppWrapper>
      <FormsWrapper handler={handleSubmit}>
        <FormSection title="Personal Info">
          <ProfileForm
            handler={profileInputHandler}
            nameValue={profileState.name}
            emailValue={profileState.email}
            phoneValue={profileState.phone}
          />
        </FormSection>
        <FormSection title="Education"></FormSection>
        <FormSection title="Experience" newHandler={handleNewExperience}>
          {experienceForms.map((form) => (
            <Experience
              key={form.id}
              id={form.id}
              company={form.company}
              from={form.from}
              to={form.to}
              responsibility={form.responsibility}
              handler={experienceInputHandler}
            />
          ))}
        </FormSection>
      </FormsWrapper>

      <PreviewWrapper>
        <PreviewSection title="Who am I" classTitle="profile-p">
          <PreviewProfile
            name={copyProfile.name}
            phone={copyProfile.phone}
            email={copyProfile.email}
          />
        </PreviewSection>
        <PreviewSection
          title="Education"
          classTitle="education-p"
        ></PreviewSection>
        <PreviewSection
          title="Professional Experience"
          classTitle="experience-p"
        ></PreviewSection>
      </PreviewWrapper>
    </AppWrapper>
  );
}
