import { createContext, useState, useContext } from 'react';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: '',
      role: '',
      email: '',
      phone: '',
      linkedin: '',
      website: '',
      location: '',
      summary: ''
    },
    education: [
      // { id: 1, school: '', degree: '', year: '' }
    ],
    experience: [
      // { id: 1, company: '', role: '', duration: '', description: '' }
    ],
    skills: [] // Strings
  });

  const updatePersonal = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { id: Date.now(), school: '', degree: '', year: '' }]
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu)
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
        ...prev,
        experience: [...prev.experience, { id: Date.now(), company: '', role: '', duration: '', description: '' }]
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addSkill = (skill) => {
    if (!resumeData.skills.includes(skill)) {
        setResumeData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
    }
  };

  const removeSkill = (skill) => {
    setResumeData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
  };

  return (
    <ResumeContext.Provider value={{ 
        resumeData, 
        setResumeData, 
        updatePersonal,
        addEducation,
        updateEducation,
        removeEducation,
        addExperience,
        updateExperience,
        removeExperience,
        addSkill,
        removeSkill,
        selectedTemplate,
        setSelectedTemplate
    }}>
      {children}
    </ResumeContext.Provider>
  );
};
