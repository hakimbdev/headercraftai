import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import HeaderForm from './HeaderForm';
import TemplateSelector from './TemplateSelector';
import HeaderPreview from './HeaderPreview';
import ExportOptions from './ExportOptions';
import LetterEditor from './LetterEditor';

export interface HeaderData {
  organizationName: string;
  logoUrl: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  addressIcon: string;
  phoneIcon: string;
  emailIcon: string;
  websiteIcon: string;
  documentType: string;
  style: string;
}

const HeaderGenerator = () => {
  const [headerData, setHeaderData] = useState<HeaderData>({
    organizationName: '',
    logoUrl: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    addressIcon: 'MapPin',
    phoneIcon: 'Phone',
    emailIcon: 'Mail',
    websiteIcon: 'Globe',
    documentType: 'business',
    style: 'modern'
  });

  const [letterContent, setLetterContent] = useState(`Dear [Recipient Name],

I am writing to...

Sincerely,
[Your Name]`);
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const headerPreviewRef = useRef(null);

  return (
    <section id="generator" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Design Your Header
        </h2>
        <p className="text-xl text-slate-600">
          Fill in your details and let our AI suggest the perfect design
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="p-6 bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg">
            <HeaderForm 
              headerData={headerData} 
              setHeaderData={setHeaderData} 
            />
          </Card>
          
          <Card className="p-6 bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg">
            <TemplateSelector 
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
              documentType={headerData.documentType}
              style={headerData.style}
            />
          </Card>

          <LetterEditor letterContent={letterContent} setLetterContent={setLetterContent} />

          <Card className="p-6 bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg">
            <ExportOptions 
              headerData={headerData} 
              selectedTemplate={selectedTemplate} 
              headerPreviewRef={headerPreviewRef}
              letterContent={letterContent}
            />
          </Card>
        </div>

        <div className="lg:sticky lg:top-24 lg:h-fit">
          <Card className="p-6 bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg">
            <HeaderPreview 
              ref={headerPreviewRef}
              headerData={headerData}
              selectedTemplate={selectedTemplate}
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeaderGenerator;
