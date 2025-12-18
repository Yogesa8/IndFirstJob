import { useState } from "react";
import { Download, Mail, Share2, Pencil, Save, X, ChevronDown, ChevronUp, Plus, MapPin, Briefcase, Calendar } from "lucide-react";

export default function ProfileDashboard() {
    const [editSection, setEditSection] = useState(null);
    const [expandedSections, setExpandedSections] = useState({
        basic: true,
        experience: true,
        education: true,
        achievements: true,
        certification: true,
    });

    // State for form data
    const [formData, setFormData] = useState({
        basic: {
            age: "28 years",
            experience: "6 Years",
            ctc: "12.5 Lac",
            location: "Ahmedabad, Gujarat",
            phone: "+91 98123 55679",
            email: "ananyasharma@gmail.com",
        },
        skills: ["UI Design", "UX", "Adobe XD", "Wireframing"],
        experience: [
            { company: "Infosys", role: "UI/UX Designer", duration: "2020 - Present" },
            { company: "Pixel Studio", role: "UI Designer", duration: "2017 - 2020" },
        ],
        education: [
            {
                degree: "Master of Design",
                specialization: "User Experience Design",
                college: "National Institute of Design",
                year: "2015 - 2017"
            },
            {
                degree: "Bachelor of Fine Arts",
                specialization: "Graphic Design",
                college: "Delhi College of Art",
                year: "2011 - 2015"
            }
        ],
        achievements: [
            {
                title: "Design Excellence Award",
                description: "Awarded for exceptional contribution to the redesign of company's flagship product",
                year: "2022"
            },
            {
                title: "Best UX/UI Designer",
                description: "Recognized by the design community for innovative design solutions",
                year: "2021"
            }
        ],
        certification: [
            {
                name: "Google UX Design Professional Certificate",
                issuedBy: "Google",
                validUntil: "2025"
            },
            {
                name: "Adobe Certified Expert (ACE)",
                issuedBy: "Adobe",
                validUntil: "2024"
            }
        ]
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleInputChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const handleArrayChange = (section, index, field, value) => {
        setFormData(prev => {
            const newArray = [...prev[section]];
            newArray[index] = {
                ...newArray[index],
                [field]: value
            };
            return {
                ...prev,
                [section]: newArray
            };
        });
    };

    const handleSkillsChange = (index, value) => {
        setFormData(prev => {
            const newSkills = [...prev.skills];
            newSkills[index] = value;
            return {
                ...prev,
                skills: newSkills
            };
        });
    };

    const addSkill = () => {
        setFormData(prev => ({
            ...prev,
            skills: [...prev.skills, ""]
        }));
    };

    const removeSkill = (index) => {
        setFormData(prev => {
            const newSkills = [...prev.skills];
            newSkills.splice(index, 1);
            return {
                ...prev,
                skills: newSkills
            };
        });
    };

    const addExperience = () => {
        setFormData(prev => ({
            ...prev,
            experience: [...prev.experience, { company: "", role: "", duration: "" }]
        }));
    };

    const removeExperience = (index) => {
        setFormData(prev => {
            const newExperience = [...prev.experience];
            newExperience.splice(index, 1);
            return {
                ...prev,
                experience: newExperience
            };
        });
    };

    const addEducation = () => {
        setFormData(prev => ({
            ...prev,
            education: [...prev.education, { degree: "", specialization: "", college: "", year: "" }]
        }));
    };

    const removeEducation = (index) => {
        setFormData(prev => {
            const newEducation = [...prev.education];
            newEducation.splice(index, 1);
            return {
                ...prev,
                education: newEducation
            };
        });
    };

    const addAchievement = () => {
        setFormData(prev => ({
            ...prev,
            achievements: [...prev.achievements, { title: "", description: "", year: "" }]
        }));
    };

    const removeAchievement = (index) => {
        setFormData(prev => {
            const newAchievements = [...prev.achievements];
            newAchievements.splice(index, 1);
            return {
                ...prev,
                achievements: newAchievements
            };
        });
    };

    const addCertification = () => {
        setFormData(prev => ({
            ...prev,
            certification: [...prev.certification, { name: "", issuedBy: "", validUntil: "" }]
        }));
    };

    const removeCertification = (index) => {
        setFormData(prev => {
            const newCertification = [...prev.certification];
            newCertification.splice(index, 1);
            return {
                ...prev,
                certification: newCertification
            };
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
            <div className="max-w-6xl w-full bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row">

                {/* LEFT PROFILE CARD */}
                <aside className="md:w-1/3 border-b md:border-b-0 md:border-r p-6">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="profile"
                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
                        />
                        <h2 className="mt-4 text-lg sm:text-xl font-semibold">Ananya Grover</h2>
                        <p className="text-sm text-gray-500">UI/UX Designer</p>

                        <p className="text-sm text-gray-600 mt-4">
                            Full stack product designer with hands-on experience in solving
                            problems across multiple industries.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="mt-6">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">Skills</h3>
                            <EditBtn onClick={() => setEditSection("skills")} />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {formData.skills.map((skill, index) => (
                                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                        <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-2xl font-semibold text-blue-600">6+</p>
                            <p className="text-xs text-gray-500">Years Experience</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-2xl font-semibold text-blue-600">12+</p>
                            <p className="text-xs text-gray-500">Projects Done</p>
                        </div>
                    </div>
                </aside>

                {/* RIGHT CONTENT */}
                <main className="flex-1 p-4 sm:p-6">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center mb-6">
                        <button className="text-sm text-gray-500">← Back</button>
                        <button className="flex items-center gap-2 text-sm text-blue-600">
                            <Share2 size={16} /> Share Profile
                        </button>
                    </div>

                    {/* BASIC INFO */}
                    <EditableSection
                        title="Basic Information"
                        section="basic"
                        editSection={editSection}
                        setEditSection={setEditSection}
                        expanded={expandedSections.basic}
                        toggleSection={toggleSection}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                            <Info label="Age" value={formData.basic.age} />
                            <Info label="Experience" value={formData.basic.experience} />
                            <Info label="CTC" value={formData.basic.ctc} />
                            <Info label="Location" value={formData.basic.location} />
                            <Info label="Phone" value={formData.basic.phone} />
                            <Info label="Email" value={formData.basic.email} />
                        </div>
                    </EditableSection>

                    {/* EXPERIENCE */}
                    <EditableSection
                        title="Experience"
                        section="experience"
                        editSection={editSection}
                        setEditSection={setEditSection}
                        expanded={expandedSections.experience}
                        toggleSection={toggleSection}
                    >
                        {formData.experience.map((exp, index) => (
                            <Experience key={index} company={exp.company} role={exp.role} duration={exp.duration} />
                        ))}
                    </EditableSection>

                    {/* EDUCATION */}
                    <EditableSection
                        title="Education"
                        section="education"
                        editSection={editSection}
                        setEditSection={setEditSection}
                        expanded={expandedSections.education}
                        toggleSection={toggleSection}
                    >
                        {formData.education.map((edu, index) => (
                            <Education key={index} degree={edu.degree} specialization={edu.specialization} college={edu.college} year={edu.year} />
                        ))}
                    </EditableSection>

                    {/* ACCOMPLISHMENTS */}
                    <EditableSection
                        title="Accomplishments"
                        section="achievements"
                        editSection={editSection}
                        setEditSection={setEditSection}
                        expanded={expandedSections.achievements}
                        toggleSection={toggleSection}
                    >
                        {formData.achievements.map((achievement, index) => (
                            <Achievement key={index} title={achievement.title} description={achievement.description} year={achievement.year} />
                        ))}
                    </EditableSection>

                    {/* CERTIFICATION */}
                    <EditableSection
                        title="Certification"
                        section="certification"
                        editSection={editSection}
                        setEditSection={setEditSection}
                        expanded={expandedSections.certification}
                        toggleSection={toggleSection}
                    >
                        {formData.certification.map((cert, index) => (
                            <Certification key={index} name={cert.name} issuedBy={cert.issuedBy} validUntil={cert.validUntil} />
                        ))}
                    </EditableSection>
                </main>
            </div>

            {/* EDIT MODAL */}
            {editSection && (
                <EditModal
                    section={editSection}
                    formData={formData}
                    setEditSection={setEditSection}
                    handleInputChange={handleInputChange}
                    handleArrayChange={handleArrayChange}
                    handleSkillsChange={handleSkillsChange}
                    addSkill={addSkill}
                    removeSkill={removeSkill}
                    addExperience={addExperience}
                    removeExperience={removeExperience}
                    addEducation={addEducation}
                    removeEducation={removeEducation}
                    addAchievement={addAchievement}
                    removeAchievement={removeAchievement}
                    addCertification={addCertification}
                    removeCertification={removeCertification}
                />
            )}
        </div>
    );
}

/* -------- Reusable Components -------- */

function EditBtn({ onClick }) {
    return (
        <button onClick={onClick} className="text-gray-400 hover:text-blue-600">
            <Pencil size={16} />
        </button>
    );
}

function EditableSection({ title, section, editSection, setEditSection, children, expanded, toggleSection }) {
    return (
        <section className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <button
                        onClick={() => toggleSection(section)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>
                <EditBtn onClick={() => setEditSection(section)} />
            </div>

            {expanded && (
                <div className="space-y-3">
                    {children}
                </div>
            )}
        </section>
    );
}

function Info({ label, value }) {
    return (
        <div>
            <p className="text-gray-500 text-xs">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    );
}

function Experience({ company, role, duration }) {
    return (
        <div className="flex gap-3 items-start">
            <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
                {company[0]}
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-medium">{company}</p>
                        <p className="text-sm text-gray-600">{role}</p>
                    </div>
                    <p className="text-xs text-gray-500">{duration}</p>
                </div>
            </div>
        </div>
    );
}

function Education({ degree, specialization, college, year }) {
    return (
        <div className="flex gap-3 items-start">
            <div className="w-9 h-9 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm">
                <Briefcase size={16} />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-medium">{degree}</p>
                        <p className="text-sm text-gray-600">{specialization}</p>
                        <p className="text-sm text-gray-500">{college}</p>
                    </div>
                    <p className="text-xs text-gray-500">{year}</p>
                </div>
            </div>
        </div>
    );
}

function Achievement({ title, description, year }) {
    return (
        <div className="flex gap-3 items-start">
            <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
                <Calendar size={16} />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-medium">{title}</p>
                        <p className="text-sm text-gray-600">{description}</p>
                    </div>
                    <p className="text-xs text-gray-500">{year}</p>
                </div>
            </div>
        </div>
    );
}

function Certification({ name, issuedBy, validUntil }) {
    return (
        <div className="flex gap-3 items-start">
            <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
                <Download size={16} />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-sm text-gray-600">{issuedBy}</p>
                    </div>
                    <p className="text-xs text-gray-500">Valid until {validUntil}</p>
                </div>
            </div>
        </div>
    );
}

function EditModal({
    section,
    formData,
    setEditSection,
    handleInputChange,
    handleArrayChange,
    handleSkillsChange,
    addSkill,
    removeSkill,
    addExperience,
    removeExperience,
    addEducation,
    removeEducation,
    addAchievement,
    removeAchievement,
    addCertification,
    removeCertification
}) {
    const renderEditForm = () => {
        switch (section) {
            case 'basic':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                            <input
                                type="text"
                                value={formData.basic.age}
                                onChange={(e) => handleInputChange('basic', 'age', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                            <input
                                type="text"
                                value={formData.basic.experience}
                                onChange={(e) => handleInputChange('basic', 'experience', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CTC</label>
                            <input
                                type="text"
                                value={formData.basic.ctc}
                                onChange={(e) => handleInputChange('basic', 'ctc', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input
                                type="text"
                                value={formData.basic.location}
                                onChange={(e) => handleInputChange('basic', 'location', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="text"
                                value={formData.basic.phone}
                                onChange={(e) => handleInputChange('basic', 'phone', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="text"
                                value={formData.basic.email}
                                onChange={(e) => handleInputChange('basic', 'email', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                );

            case 'skills':
                return (
                    <div className="space-y-3">
                        {formData.skills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={skill}
                                    onChange={(e) => handleSkillsChange(index, e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    onClick={() => removeSkill(index)}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={addSkill}
                            className="w-full py-2 border border-dashed border-gray-300 text-gray-500 rounded-md hover:border-gray-400 hover:text-gray-600 flex items-center justify-center gap-2"
                        >
                            <Plus size={16} /> Add Skill
                        </button>
                    </div>
                );

            case 'experience':
                return (
                    <div className="space-y-4">
                        {formData.experience.map((exp, index) => (
                            <div key={index} className="border border-gray-200 rounded-md p-3">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-medium">Experience {index + 1}</h4>
                                    {formData.experience.length > 1 && (
                                        <button
                                            onClick={() => removeExperience(index)}
                                            className="p-1 text-red-500 hover:bg-red-50 rounded-md"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                        <input
                                            type="text"
                                            value={exp.company}
                                            onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                        <input
                                            type="text"
                                            value={exp.role}
                                            onChange={(e) => handleArrayChange('experience', index, 'role', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                                        <input
                                            type="text"
                                            value={exp.duration}
                                            onChange={(e) => handleArrayChange('experience', index, 'duration', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={addExperience}
                            className="w-full py-2 border border-dashed border-gray-300 text-gray-500 rounded-md hover:border-gray-400 hover:text-gray-600 flex items-center justify-center gap-2"
                        >
                            <Plus size={16} /> Add Experience
                        </button>
                    </div>
                );

            case 'education':
                return (
                    <div className="space-y-4">
                        {formData.education.map((edu, index) => (
                            <div key={index} className="border border-gray-200 rounded-md p-3">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-medium">Education {index + 1}</h4>
                                    {formData.education.length > 1 && (
                                        <button
                                            onClick={() => removeEducation(index)}
                                            className="p-1 text-red-500 hover:bg-red-50 rounded-md"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                                        <input
                                            type="text"
                                            value={edu.degree}
                                            onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                                        <input
                                            type="text"
                                            value={edu.specialization}
                                            onChange={(e) => handleArrayChange('education', index, 'specialization', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
                                        <input
                                            type="text"
                                            value={edu.college}
                                            onChange={(e) => handleArrayChange('education', index, 'college', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                                        <input
                                            type="text"
                                            value={edu.year}
                                            onChange={(e) => handleArrayChange('education', index, 'year', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={addEducation}
                            className="w-full py-2 border border-dashed border-gray-300 text-gray-500 rounded-md hover:border-gray-400 hover:text-gray-600 flex items-center justify-center gap-2"
                        >
                            <Plus size={16} /> Add Education
                        </button>
                    </div>
                );

            case 'achievements':
                return (
                    <div className="space-y-4">
                        {formData.achievements.map((achievement, index) => (
                            <div key={index} className="border border-gray-200 rounded-md p-3">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-medium">Achievement {index + 1}</h4>
                                    {formData.achievements.length > 1 && (
                                        <button
                                            onClick={() => removeAchievement(index)}
                                            className="p-1 text-red-500 hover:bg-red-50 rounded-md"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                        <input
                                            type="text"
                                            value={achievement.title}
                                            onChange={(e) => handleArrayChange('achievements', index, 'title', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea
                                            value={achievement.description}
                                            onChange={(e) => handleArrayChange('achievements', index, 'description', e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                                        <input
                                            type="text"
                                            value={achievement.year}
                                            onChange={(e) => handleArrayChange('achievements', index, 'year', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={addAchievement}
                            className="w-full py-2 border border-dashed border-gray-300 text-gray-500 rounded-md hover:border-gray-400 hover:text-gray-600 flex items-center justify-center gap-2"
                        >
                            <Plus size={16} /> Add Achievement
                        </button>
                    </div>
                );

            case 'certification':
                return (
                    <div className="space-y-4">
                        {formData.certification.map((cert, index) => (
                            <div key={index} className="border border-gray-200 rounded-md p-3">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-medium">Certification {index + 1}</h4>
                                    {formData.certification.length > 1 && (
                                        <button
                                            onClick={() => removeCertification(index)}
                                            className="p-1 text-red-500 hover:bg-red-50 rounded-md"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            value={cert.name}
                                            onChange={(e) => handleArrayChange('certification', index, 'name', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Issued By</label>
                                        <input
                                            type="text"
                                            value={cert.issuedBy}
                                            onChange={(e) => handleArrayChange('certification', index, 'issuedBy', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Valid Until</label>
                                        <input
                                            type="text"
                                            value={cert.validUntil}
                                            onChange={(e) => handleArrayChange('certification', index, 'validUntil', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={addCertification}
                            className="w-full py-2 border border-dashed border-gray-300 text-gray-500 rounded-md hover:border-gray-400 hover:text-gray-600 flex items-center justify-center gap-2"
                        >
                            <Plus size={16} /> Add Certification
                        </button>
                    </div>
                );

            default:
                return <div>Unknown section</div>;
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                    <h2 className="text-lg font-semibold capitalize">Edit {section}</h2>
                    <button
                        onClick={() => setEditSection(null)}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6">
                    {renderEditForm()}
                </div>

                <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
                    <button
                        onClick={() => setEditSection(null)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => setEditSection(null)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                    >
                        <Save size={16} />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}