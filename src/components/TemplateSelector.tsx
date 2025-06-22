
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TemplateSelectorProps {
  selectedTemplate: string;
  setSelectedTemplate: (template: string) => void;
  documentType: string;
  style: string;
}

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate, documentType, style }: TemplateSelectorProps) => {
  const templates = [
    {
      id: 'template1',
      name: 'Professional Classic',
      description: 'Clean and traditional layout',
      recommended: ['business', 'government'],
      styles: ['corporate', 'traditional'],
      preview: 'bg-gradient-to-r from-slate-600 to-slate-700'
    },
    {
      id: 'template2',
      name: 'Modern Edge',
      description: 'Contemporary design with accent colors',
      recommended: ['business', 'nonprofit'],
      styles: ['modern', 'creative'],
      preview: 'bg-gradient-to-r from-blue-500 to-indigo-600'
    },
    {
      id: 'template3',
      name: 'Minimalist Clean',
      description: 'Simple and elegant layout',
      recommended: ['academic', 'personal'],
      styles: ['minimalist', 'modern'],
      preview: 'bg-gradient-to-r from-gray-400 to-gray-500'
    },
    {
      id: 'template4',
      name: 'Creative Accent',
      description: 'Bold design with creative elements',
      recommended: ['nonprofit', 'personal'],
      styles: ['creative', 'modern'],
      preview: 'bg-gradient-to-r from-purple-500 to-pink-500'
    }
  ];

  const getAIRecommendation = (template: any) => {
    const isRecommendedType = template.recommended.includes(documentType);
    const isRecommendedStyle = template.styles.includes(style);
    
    if (isRecommendedType && isRecommendedStyle) {
      return 'Perfect Match';
    } else if (isRecommendedType || isRecommendedStyle) {
      return 'Good Match';
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-800">AI Template Suggestions</h3>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          AI Powered
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {templates.map((template) => {
          const recommendation = getAIRecommendation(template);
          const isSelected = selectedTemplate === template.id;
          
          return (
            <Card
              key={template.id}
              className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                isSelected 
                  ? 'ring-2 ring-blue-500 bg-blue-50/50' 
                  : 'hover:bg-gray-50/50'
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <div className="space-y-3">
                <div className={`h-16 w-full rounded-lg ${template.preview} opacity-80`} />
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-slate-800">{template.name}</h4>
                    {recommendation && (
                      <Badge 
                        variant={recommendation === 'Perfect Match' ? 'default' : 'secondary'}
                        className={recommendation === 'Perfect Match' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {recommendation}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-600">{template.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TemplateSelector;
