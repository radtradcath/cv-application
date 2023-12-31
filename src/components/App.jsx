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
import EducationTemplate from "./preview/EducationTemplate.jsx";

export default function App() {
  // Handle Inputs
  const [profileState, setProfileState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [copyProfile, setCopyProfile] = useState("");
  const [experienceForms, setExperienceForms] = useState([]);
  const [copyExperience, setCopyExperience] = useState([]);
  const [educationForms, setEducationForms] = useState([]);
  const [copyEducation, setCopyEducation] = useState([]);
  const [isDisabled, setIsDisabled] = useState("");

  function profileInputHandler(e) {
    const value = e.target.value;
    setProfileState({ ...profileState, [e.target.name]: value });
  }

  function experienceInputHandler(e) {
    const parent = e.target.closest(".experience");
    const parentId = parent.id;
    const value = e.target.value;
    const inputKey = e.target.name;

    setExperienceForms(
      experienceForms.map((obj) => {
        return obj.id === parentId ? { ...obj, [inputKey]: value } : obj;
      })
    );
  }

  function educationInputHandler(e) {
    const parent = e.target.closest(".education");
    const parentId = parent.id;
    const value = e.target.value;
    const inputKey = e.target.name;

    setEducationForms(
      educationForms.map((obj) => {
        return obj.id === parentId ? { ...obj, [inputKey]: value } : obj;
      })
    );
    console.log(educationForms);
  }

  function deleteEducationHandler(e) {
    e.preventDefault();

    const parentNodeId = e.target.parentNode.id;

    setEducationForms(
      educationForms.filter((obj) => {
        return obj.id !== parentNodeId;
      })
    );
  }
  console.log(educationForms);

  function deleteExperienceHandler(e) {
    e.preventDefault();

    const parentNodeId = e.target.parentNode.id;

    setExperienceForms(
      experienceForms.filter((obj) => {
        return obj.id !== parentNodeId;
      })
    );
  }

  // Handle "New" buttons

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

  function handleNewEducation(e) {
    e.preventDefault();
    console.log(educationForms);

    return setEducationForms([
      ...educationForms,
      {
        id: crypto.randomUUID(),
        school: "",
        area: "",
        from: "",
        to: "",
      },
    ]);
  }

  // Handle submit and edit

  function handleSubmit(e) {
    e.preventDefault();
    setCopyProfile(profileState);
    setCopyEducation(educationForms);
    setCopyExperience(experienceForms);
    setIsDisabled(true);
    console.log(experienceForms);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsDisabled("");
  }

  return (
    <AppWrapper>
      <FormsWrapper
        handler={handleSubmit}
        disabled={isDisabled}
        handleEdit={handleEdit}
      >
        <FormSection title="Personal Info">
          <ProfileForm
            handler={profileInputHandler}
            nameValue={profileState.name}
            emailValue={profileState.email}
            phoneValue={profileState.phone}
            disabled={isDisabled}
          />
        </FormSection>
        <FormSection
          title="Education"
          newHandler={handleNewEducation}
          disabled={isDisabled}
        >
          {educationForms.map((form) => (
            <Education
              key={form.id}
              id={form.id}
              school={form.school}
              area={form.area}
              from={form.from}
              to={form.to}
              handler={educationInputHandler}
              deleteHandler={deleteEducationHandler}
              disabled={isDisabled}
            />
          ))}
        </FormSection>
        <FormSection
          title="Experience"
          newHandler={handleNewExperience}
          disabled={isDisabled}
        >
          {experienceForms.map((form) => (
            <Experience
              key={form.id}
              id={form.id}
              company={form.company}
              from={form.from}
              to={form.to}
              responsibility={form.responsibility}
              handler={experienceInputHandler}
              deleteHandler={deleteExperienceHandler}
              disabled={isDisabled}
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
        <PreviewSection title="Education" classTitle="education-p">
          {copyEducation.map((obj) => (
            <EducationTemplate
              key={obj.id}
              school={obj.school}
              area={obj.area}
              from={obj.from}
              to={obj.to}
            />
          ))}
        </PreviewSection>
        <PreviewSection
          title="Professional Experience"
          classTitle="experience-p"
        >
          {copyExperience.map((obj) => (
            <ExperienceTemplate
              key={obj.id}
              company={obj.company}
              position={obj.position}
              from={obj.from}
              to={obj.to}
              respons={obj.responsibility}
            />
          ))}
        </PreviewSection>
      </PreviewWrapper>
    </AppWrapper>
  );
}
