import React, { useState, useRef } from 'react';
import './App.css';
import Navbar from './Navbar';
import Initial from './Initial'
import PersonForm from './PersonForm';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Languages from './Languages';
import Hobby from './Hobby';
import Achievements from './Achievements';
import Finalize from './Finalize';
import axios from 'axios';

function SubmissionPopup({ onClose }) {
  return (
      <div className="popup-overlay">
        <div className="popup-content">
          <p>Your CV has been submitted successfully!</p>
            <div className="button-container">
            <button autoFocus className="button-ok" onClick={onClose}>OK</button>
            </div>
        </div>
      </div>
  );
}

function App() {
  const steps = ['person', 'education', 'experience', 'skills', 'languages', 'hobby', 'achievements', 'finalize'];
  const [currentForm, setCurrentForm] = useState('initial');
  const [furthestStepReached, setFurthestStepReached] = useState(0);
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false);
  // const [formSubmitted, setFormSubmitted] = useState(false);

  const [collectedData, setCollectedData] = useState({
    person: {},
    education: {},
    experience: {},
    skills: {},
    languages: {},
    hobby: {},
    achievements: {},
  });

  const childFormRef = useRef();

  const handleStartClick = () => {
    setCurrentForm('person');
  };

  const closePopup = () => {
    setSubmissionSuccessful(false);
    document.body.classList.remove("no-scroll");
  };

  const handleNextClick = () => {
    if (childFormRef.current && typeof childFormRef.current.validateFields === 'function') {
      const isFormValid = childFormRef.current.validateFields();

      if (!isFormValid) {
        alert("Please fill in all required fields before proceeding.");
        return;
      }

      // Logic to move to the next form
    } else {
      console.error('Validation method not found in the current form');
    }

    // Try/Catch because not all forms may have 'handleData()' method.
    try {
      childFormRef.current.handleData();
    } catch {}

    const currentStepIndex = steps.indexOf(currentForm);
    if (currentStepIndex < steps.length - 1) {
      const nextStepIndex = steps.indexOf(currentForm) + 1;
      setCurrentForm(steps[currentStepIndex + 1]);
      if (nextStepIndex > furthestStepReached) {
        setFurthestStepReached(nextStepIndex);
      }
    }
  };

  const handleBackClick = () => {
    const currentStepIndex = steps.indexOf(currentForm);
    if (currentStepIndex > 0) {
      setCurrentForm(steps[currentStepIndex - 1]);
    }
  };

  const isFinalizePage = currentForm === 'finalize';

  const handleFinalSubmit = async () => {
    try {
      setSubmissionSuccessful(true);
      document.body.classList.add("no-scroll");
      console.log(collectedData);
      localStorage.setItem('submitted', 'true');
      // setFormSubmitted(true);
      await axios.post('https://www.juangroup.top/addPerson', {
        name: collectedData.person.name,
        lastname: collectedData.person.lastname,
        address: collectedData.person.address,
        city: collectedData.person.city,
        nationality: collectedData.person.nationality,
        birthdate: collectedData.person.birthdate,
        sex: collectedData.person.sex,
        civilStatus: collectedData.person.civilStatus,
        hasKids: collectedData.person.hasKids,
        email: collectedData.person.email,
        countryCode: collectedData.person.countryCode,
        phoneNumber: collectedData.person.phoneNumber,

        education: collectedData.education.education,
        citySchool: collectedData.education.citySchool,
        school: collectedData.education.school,
        startDateStudy: collectedData.education.startDateStudy,
        endDateStudy: collectedData.education.endDateStudy,

        titleJob: collectedData.experience.titleJob,
        cityJob: collectedData.experience.cityJob,
        employer: collectedData.experience.employer,
        startDateJob: collectedData.experience.startDateJob,
        endDateJob: collectedData.experience.endDateJob,
        descriptionJob: collectedData.experience.descriptionJob,

        skills: collectedData.skills.skills,
        levelSkills: collectedData.skills.levelSkills,

        language: collectedData.languages.language,
        levelLanguage: collectedData.languages.levelLanguage,

        hobby: collectedData.hobby.hobby,

        achievements: collectedData.achievements.achievements,
      });
      console.log('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data: ' + error);
    }
  };

  // Check and clear local storage when the component mounts
  React.useEffect(() => {
    if (localStorage.getItem('submitted') === 'true') {
      localStorage.clear();
      localStorage.setItem('submitted', 'false'); // Reset the flag
    }
    // other initialization code, if any
  }, []);

  const onDataCollected = (step, data) => {
    setCollectedData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  return (
    <div className="App">
        {submissionSuccessful && <SubmissionPopup onClose={closePopup} />}
        {currentForm === 'initial' && <Initial onStartClick={handleStartClick}/>}
        {currentForm === 'person' && <PersonForm ref={childFormRef} onDataCollected={onDataCollected} data={collectedData.person}/>}
        {currentForm === 'education' && <Education ref={childFormRef} onDataCollected={onDataCollected} data={collectedData.education}/>}
        {currentForm === 'experience' && <Experience ref={childFormRef} onDataCollected={onDataCollected} data={collectedData.experience}/>}
        {currentForm === 'skills' && <Skills ref={childFormRef} onDataCollected={onDataCollected} data={collectedData.skills}/>}
        {currentForm === 'languages' && <Languages ref={childFormRef} onDataCollected={onDataCollected} data={collectedData.languages}/>}
        {currentForm === 'hobby' && <Hobby ref={childFormRef} onDataCollected={onDataCollected} data={collectedData.hobby}/>}
        {currentForm === 'achievements' && <Achievements ref={childFormRef} onDataCollected={onDataCollected} data={collectedData.achievements}/>}
        {currentForm === 'finalize' && <Finalize />}
        <div className="aside-right">
          <div className="container">
            <div className="main-page">
              <div className="space">
                <div className="form">
                  <div className={`button-submit ${currentForm === 'person' ? 'first-page' : ''}`}>
                    {steps.indexOf(currentForm) > steps.indexOf('person') && (
                        <button onClick={handleBackClick} className="button-field button-back" type="button">
                          Back
                        </button>
                    )}
                    {steps.indexOf(currentForm) >= steps.indexOf('person') && (
                      isFinalizePage ? (
                        <button onClick={handleFinalSubmit} className="button-field button-final" type="button">
                          Submit
                        </button>
                      ) : (
                        <button onClick={handleNextClick} className="button-field button-next" type="button">
                          Next page
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <aside className="aside-nav">
        <footer className="footer footer-aside">
          <Navbar currentForm={currentForm} steps={steps} furthestStepReached={furthestStepReached}/>
          {/*<Navbar currentForm={currentForm} steps={steps} furthestStepReached={furthestStepReached} formSubmitted={formSubmitted}/>*/}
        </footer>
      </aside>
    </div>
  );
}

export default App;
