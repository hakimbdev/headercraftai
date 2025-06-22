import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HeaderData } from './HeaderGenerator';

interface HeaderFormProps {
  headerData: HeaderData;
  setHeaderData: (data: HeaderData) => void;
}

const HeaderForm = ({ headerData, setHeaderData }: HeaderFormProps) => {
  const updateField = (field: keyof HeaderData, value: string) => {
    setHeaderData({ ...headerData, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-slate-800">Organization Details</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="orgName" className="text-slate-700 font-medium">Organization Name</Label>
            <Input
              id="orgName"
              value={headerData.organizationName}
              onChange={(e) => updateField('organizationName', e.target.value)}
              placeholder="Enter organization name"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="logoUrl" className="text-slate-700 font-medium">Logo URL (Optional)</Label>
            <Input
              id="logoUrl"
              value={headerData.logoUrl}
              onChange={(e) => updateField('logoUrl', e.target.value)}
              placeholder="https://example.com/logo.png"
              className="mt-1"
            />
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="address" className="text-slate-700 font-medium">Address</Label>
        <Input
          id="address"
          value={headerData.address}
          onChange={(e) => updateField('address', e.target.value)}
          placeholder="Full address including city, state, zip"
          className="mt-1"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="phone" className="text-slate-700 font-medium">Phone</Label>
          <Input
            id="phone"
            value={headerData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="(555) 123-4567"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
          <Input
            id="email"
            value={headerData.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="contact@organization.com"
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="website" className="text-slate-700 font-medium">Website</Label>
          <Input
            id="website"
            value={headerData.website}
            onChange={(e) => updateField('website', e.target.value)}
            placeholder="www.organization.com"
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-slate-800 mt-6">Contact Icons (Optional)</h3>
        <p className="text-sm text-slate-500 mb-4">
          Use any icon name from {' '}
          <a 
            href="https://lucide.dev/icons/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline"
          >
            lucide.dev/icons
          </a>
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="addressIcon" className="text-slate-700 font-medium">Address Icon</Label>
            <Input
              id="addressIcon"
              value={headerData.addressIcon}
              onChange={(e) => updateField('addressIcon', e.target.value)}
              placeholder="e.g., MapPin"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phoneIcon" className="text-slate-700 font-medium">Phone Icon</Label>
            <Input
              id="phoneIcon"
              value={headerData.phoneIcon}
              onChange={(e) => updateField('phoneIcon', e.target.value)}
              placeholder="e.g., Phone"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="emailIcon" className="text-slate-700 font-medium">Email Icon</Label>
            <Input
              id="emailIcon"
              value={headerData.emailIcon}
              onChange={(e) => updateField('emailIcon', e.target.value)}
              placeholder="e.g., Mail"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="websiteIcon" className="text-slate-700 font-medium">Website Icon</Label>
            <Input
              id="websiteIcon"
              value={headerData.websiteIcon}
              onChange={(e) => updateField('websiteIcon', e.target.value)}
              placeholder="e.g., Globe"
              className="mt-1"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label className="text-slate-700 font-medium">Document Type</Label>
          <Select value={headerData.documentType} onValueChange={(value) => updateField('documentType', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="business">Business Letter</SelectItem>
              <SelectItem value="academic">Academic Letter</SelectItem>
              <SelectItem value="government">Government Letter</SelectItem>
              <SelectItem value="nonprofit">Non-Profit Letter</SelectItem>
              <SelectItem value="personal">Personal Letter</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label className="text-slate-700 font-medium">Design Style</Label>
          <Select value={headerData.style} onValueChange={(value) => updateField('style', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="minimalist">Minimalist</SelectItem>
              <SelectItem value="creative">Creative</SelectItem>
              <SelectItem value="traditional">Traditional</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
