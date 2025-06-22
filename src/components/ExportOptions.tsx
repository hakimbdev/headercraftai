import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Save, Image } from 'lucide-react';
import { HeaderData } from './HeaderGenerator';
import { useToast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, ImageRun, Header } from 'docx';
import { saveAs } from 'file-saver';

interface ExportOptionsProps {
  headerData: HeaderData;
  selectedTemplate: string;
  headerPreviewRef: React.RefObject<HTMLDivElement>;
  letterContent: string;
}

const ExportOptions = ({ headerData, selectedTemplate, headerPreviewRef, letterContent }: ExportOptionsProps) => {
  const { toast } = useToast();

  const handleExport = async (format: 'pdf' | 'png') => {
    if (!headerPreviewRef.current) {
      toast({
        title: "Error",
        description: "Could not find the preview element to export.",
        variant: "destructive"
      });
      return;
    }

    const canvas = await html2canvas(headerPreviewRef.current, {
      useCORS: true,
      scale: 2,
      backgroundColor: null,
    });
    
    const imageData = canvas.toDataURL('image/png');

    if (format === 'png') {
      const link = document.createElement('a');
      link.href = imageData;
      link.download = `${headerData.organizationName || 'header'}-design.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({
        title: "PNG Exported",
        description: "Your header has been exported as a PNG image.",
      });
    } else if (format === 'pdf') {
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'pt',
        format: 'a4'
      });

      const pageDimensions = {
        width: pdf.internal.pageSize.getWidth(),
        height: pdf.internal.pageSize.getHeight()
      };

      const imageWidth = pageDimensions.width - 80; // 40pt margin each side
      const imageHeight = (canvas.height / canvas.width) * imageWidth;
      
      const x = 40;
      pdf.addImage(imageData, 'PNG', x, 40, imageWidth, imageHeight);
      
      const startY = imageHeight + 80;
      
      pdf.setFontSize(11);
      pdf.setTextColor(40, 40, 40);

      const textLines = pdf.splitTextToSize(letterContent, imageWidth);
      pdf.text(textLines, x, startY);

      pdf.save(`${headerData.organizationName || 'header'}-letter.pdf`);
      toast({
        title: "PDF Exported",
        description: "Your header has been exported as a PDF letter.",
      });
    }
  };

  const handleExportDOCX = async () => {
    if (!headerPreviewRef.current) {
      toast({
        title: "Error",
        description: "Could not find the preview element to export.",
        variant: "destructive"
      });
      return;
    }

    try {
      const canvas = await html2canvas(headerPreviewRef.current, {
        useCORS: true,
        scale: 2,
        backgroundColor: null,
      });

      const imageData = canvas.toDataURL('image/png');

      const contentParagraphs = letterContent.split('\n').map(text => new Paragraph({ text }));

      const doc = new Document({
        sections: [{
          children: [
            new Paragraph({
              children: [
                new ImageRun({
                  data: imageData,
                  transformation: {
                    width: canvas.width / 2,
                    height: canvas.height / 2,
                  },
                }),
              ],
            }),
            new Paragraph(" "),
            ...contentParagraphs,
          ],
        }],
      });

      Packer.toBlob(doc).then(blob => {
        saveAs(blob, `${headerData.organizationName || 'header'}-letter.docx`);
        toast({
          title: "DOCX Exported",
          description: "Your header has been exported as a DOCX document.",
        });
      });

    } catch (error) {
      console.error("Error exporting DOCX:", error);
      toast({
        title: "Export Error",
        description: "Failed to export DOCX. See console for details.",
        variant: "destructive",
      });
    }
  };

  const handleSaveToAccount = () => {
    toast({
      title: "Saved to Account",
      description: "Your header design has been saved! (Demo mode)",
    });
    console.log('Saving to account:', { headerData, selectedTemplate });
  };

  const isDisabled = !headerData.organizationName;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-800">Export & Save</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Button 
          onClick={() => handleExport('pdf')}
          disabled={isDisabled}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Export PDF
        </Button>
        
        <Button 
          onClick={() => handleExport('png')}
          disabled={isDisabled}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Image className="w-4 h-4 mr-2" />
          Export PNG
        </Button>
        
        <Button 
          onClick={handleExportDOCX}
          disabled={isDisabled}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Export DOCX
        </Button>
        
        <Button 
          onClick={handleSaveToAccount}
          disabled={isDisabled}
          variant="outline"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Design
        </Button>
      </div>
      
      {isDisabled && (
        <p className="text-sm text-slate-500 text-center">
          Enter organization name to enable export options
        </p>
      )}
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h4 className="font-medium text-blue-800 mb-2">AI Integration Ready</h4>
        <p className="text-sm text-blue-700">
          Connect Google Vertex AI for enhanced design suggestions and automatic template optimization based on your industry and document type.
        </p>
      </div>
    </div>
  );
};

export default ExportOptions;
