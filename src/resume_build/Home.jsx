import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import template1 from '../assets/template/template1.png'
import template2 from '../assets/template/template2.png'
import template3 from '../assets/template/template3.png'

const Home = () => {
    const { setSelectedTemplate } = useResume();

    const templates = [
        { id: 'template1', name: 'Professional',img:template1 },
        { id: 'template2', name: 'Minimal',img:template2 }, 
        { id: 'template3', name: 'Creative',img:template3 }, 
        { id: 'template4', name: 'Modern',img:template1 }, 
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    Build a professional resume in
                    <span className="text-blue-600 block sm:inline"> minutes.</span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-gray-500">
                    Select a template and start building your career story. Real-time updates, PDF export, and verified designs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {templates.map(template => (
                    <div key={template.id} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className={`h-64 ${template.color} flex items-center justify-center`}>
                            <img src={template.img} alt="" className='h-80 content-fit' />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{template.name}</h3>
                            <p className="text-gray-500 mb-4 text-sm">Best for corporate roles and standard applications.</p>
                            <Link
                                to="/builder"
                                onClick={() => setSelectedTemplate(template.id)}
                                className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                Use Template
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home