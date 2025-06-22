import React, { forwardRef } from 'react';
import { HeaderData } from './HeaderGenerator';
import Icon from './ui/Icon';

interface HeaderPreviewProps {
  headerData: HeaderData;
  selectedTemplate: string;
}

const HeaderPreview = forwardRef<HTMLDivElement, HeaderPreviewProps>(({ headerData, selectedTemplate }, ref) => {
  const renderTemplate = () => {
    const hasData = headerData.organizationName || headerData.address || headerData.phone || headerData.email;
    
    if (!hasData) {
      return (
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 text-center">
            Fill in your organization details to see the preview
          </p>
        </div>
      );
    }

    switch (selectedTemplate) {
      case 'template1':
        return (
          <div className="bg-white p-8 font-sans">
            <div className="text-center space-y-2">
              {headerData.logoUrl && (
                <div className="mb-4">
                  <img src={headerData.logoUrl} alt="logo" className="w-20 h-20 object-contain rounded-lg mx-auto" />
                </div>
              )}
              <h1 className="text-3xl font-bold text-slate-800 tracking-tight">{headerData.organizationName}</h1>
              {headerData.address && <p className="text-sm text-slate-500 flex items-center justify-center gap-2"><Icon name={headerData.addressIcon} size={14} /> {headerData.address}</p>}
              <div className="flex justify-center items-center space-x-4 text-sm text-slate-500 pt-2">
                {headerData.phone && <span className="flex items-center gap-1.5"><Icon name={headerData.phoneIcon} size={14} /> {headerData.phone}</span>}
                {headerData.phone && headerData.email && <span className="text-slate-300">|</span>}
                {headerData.email && <span className="flex items-center gap-1.5"><Icon name={headerData.emailIcon} size={14} /> {headerData.email}</span>}
              </div>
              {headerData.website && <a href="#" className="text-sm text-blue-600 hover:underline flex items-center justify-center gap-2"><Icon name={headerData.websiteIcon} size={14} /> {headerData.website}</a>}
            </div>
          </div>
        );
        
      case 'template2':
        return (
          <div className="bg-slate-800 text-white p-8 font-sans">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{headerData.organizationName}</h1>
                {headerData.address && <p className="text-slate-300 mt-1 flex items-center gap-2 text-sm"><Icon name={headerData.addressIcon} size={14} /> {headerData.address}</p>}
              </div>
              {headerData.logoUrl && (
                <img src={headerData.logoUrl} alt="logo" className="w-16 h-16 object-contain rounded-lg" />
              )}
            </div>
            <hr className="my-6 border-slate-600" />
            <div className="flex justify-end space-x-6 text-sm text-slate-300">
              {headerData.phone && <span className="flex items-center gap-2"><Icon name={headerData.phoneIcon} size={14} /> {headerData.phone}</span>}
              {headerData.email && <span className="flex items-center gap-2"><Icon name={headerData.emailIcon} size={14} /> {headerData.email}</span>}
              {headerData.website && <span className="flex items-center gap-2"><Icon name={headerData.websiteIcon} size={14} /> {headerData.website}</span>}
            </div>
          </div>
        );
        
      case 'template3':
        return (
          <div className="bg-white p-8 border-l-4 border-blue-600 font-sans">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                {headerData.logoUrl && (
                  <img src={headerData.logoUrl} alt="logo" className="w-16 h-16 object-contain rounded" />
                )}
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">{headerData.organizationName}</h1>
                {headerData.address && <p className="text-sm text-slate-500 flex items-center gap-2"><Icon name={headerData.addressIcon} size={14} /> {headerData.address}</p>}
              </div>
              <div className="text-right space-y-1 text-sm text-slate-500">
                {headerData.phone && <p className="flex items-center justify-end gap-2"><Icon name={headerData.phoneIcon} size={14} /> {headerData.phone}</p>}
                {headerData.email && <p className="flex items-center justify-end gap-2"><Icon name={headerData.emailIcon} size={14} /> {headerData.email}</p>}
                {headerData.website && <p className="flex items-center justify-end gap-2 text-blue-600"><Icon name={headerData.websiteIcon} size={14} /> {headerData.website}</p>}
              </div>
            </div>
          </div>
        );
        
      case 'template4':
        return (
          <div className="bg-slate-50 p-8 font-sans">
            <div className="flex items-center justify-between pb-6 border-b-2 border-slate-200">
                <div>
                  <h1 className="text-2xl font-bold text-slate-800">{headerData.organizationName}</h1>
                  {headerData.address && <p className="text-slate-500 text-sm flex items-center gap-2"><Icon name={headerData.addressIcon} size={14} /> {headerData.address}</p>}
                </div>
                {headerData.logoUrl && (
                  <img src={headerData.logoUrl} alt="logo" className="w-20 h-20 object-contain rounded-lg" />
                )}
            </div>
            <div className="flex justify-between pt-4 text-sm text-slate-500">
                {headerData.phone && <p className="flex items-center gap-2"><Icon name={headerData.phoneIcon} size={14} />{headerData.phone}</p>}
                {headerData.email && <p className="flex items-center gap-2"><Icon name={headerData.emailIcon} size={14} />{headerData.email}</p>}
                {headerData.website && <p className="flex items-center gap-2 text-blue-600"><Icon name={headerData.websiteIcon} size={14} />{headerData.website}</p>}
            </div>
          </div>
        );
        
      default:
        return renderTemplate();
    }
  };

  return (
    <div className="space-y-4" ref={ref}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-800">Live Preview</h3>
        <div className="text-sm text-slate-500">Real-time updates</div>
      </div>
      
      <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 bg-gray-50">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {renderTemplate()}
        </div>
      </div>
      
      <div className="text-xs text-slate-500 text-center">
        This preview shows how your header will appear in documents
      </div>
    </div>
  );
});

export default HeaderPreview;
