import { useState } from 'react';
import { useResume } from '../context/ResumeContext';
import PersonalForm from '../components/forms/PersonalForm';
import EducationForm from '../components/forms/EducationForm';
import ExperienceForm from '../components/forms/ExperienceForm';
import SkillsForm from '../components/forms/SkillsForm';
import Template1 from '../components/templates/Template1';
import Template2 from '../components/templates/Template2';
import Template3 from '../components/templates/Template3';
import Template4 from '../components/templates/Template4';
import { Download, ChevronDown, ChevronUp, Layout } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from '../components/pdf/ResumePDF';

const Builder = () => {
    const { resumeData, selectedTemplate, setSelectedTemplate } = useResume();
    const [openSection, setOpenSection] = useState('personal');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        { id: 'personal', title: 'Personal Details', component: PersonalForm },
        { id: 'experience', title: 'Experience', component: ExperienceForm },
        { id: 'education', title: 'Education', component: EducationForm },
        { id: 'skills', title: 'Skills', component: SkillsForm },
    ];

    const templates = [
        { id: 'template1', name: 'Modern Clean' },
        { id: 'template2', name: 'Minimal' },
        { id: 'template3', name: 'Classic Serif' },
        { id: 'template4', name: 'Sidebar' },
    ];

    return (
        <div className="h-[calc(100vh-64px)] flex bg-gray-100 overflow-hidden">
            {/* Left Panel: Form */}
            <div className="w-full md:w-1/2 lg:w-2/5 overflow-y-auto border-r border-gray-200 bg-white shadow-xl z-10">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Editor</h2>
                        <PDFDownloadLink
                            document={<ResumePDF data={resumeData} selectedTemplate={selectedTemplate} />}
                            fileName={`${resumeData.personal.fullName || 'Resume'}.pdf`}
                            className="bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-sm font-medium"
                        >
                            {({ blob, url, loading, error }) => (
                                <button
                                    disabled={loading}
                                    className="flex items-center gap-2 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Download className="w-4 h-4" />
                                    {loading ? 'Generating...' : 'Download PDF'}
                                </button>
                            )}
                        </PDFDownloadLink>
                    </div>

                    <div className="space-y-4">
                        {sections.map(({ id, title, component: Component }) => (
                            <div key={id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                                <button
                                    className={`w-full flex items-center justify-between p-4 text-left font-semibold ${openSection === id ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                                    onClick={() => toggleSection(id)}
                                >
                                    <span>{title}</span>
                                    {openSection === id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </button>
                                {openSection === id && (
                                    <div className="p-4 border-t border-gray-100 animate-fadeIn">
                                        <Component />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel: Preview */}
            <div className="hidden md:flex flex-1 bg-gray-200 p-8 justify-center overflow-y-auto relative">
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-gray-500 border border-gray-200 shadow-sm">
                    A4 Preview · {templates.find(t => t.id === selectedTemplate)?.name}
                </div>

                <div className="my-auto shadow-2xl transition-transform duration-300">
                    <div id="resume-preview"
                        className="w-[210mm] h-[297mm] bg-white text-left overflow-hidden origin-top scale-[0.6] lg:scale-[0.7] xl:scale-[0.85]"
                        style={{ transformOrigin: 'top center' }}
                    >
                        {selectedTemplate === 'template1' && <Template1 data={resumeData} />}
                        {selectedTemplate === 'template2' && <Template2 data={resumeData} />}
                        {selectedTemplate === 'template3' && <Template3 data={resumeData} />}
                        {selectedTemplate === 'template4' && <Template4 data={resumeData} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;
