import React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from './ui/card';

interface LetterEditorProps {
  letterContent: string;
  setLetterContent: (content: string) => void;
}

const LetterEditor = ({ letterContent, setLetterContent }: LetterEditorProps) => {
  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-slate-800">Compose Your Letter</h3>
      <div className="space-y-2">
        <Label htmlFor="letter-content" className="text-slate-700 font-medium">
          Letter Body
        </Label>
        <Textarea
          id="letter-content"
          value={letterContent}
          onChange={(e) => setLetterContent(e.target.value)}
          placeholder="Start writing your letter here..."
          className="min-h-[400px] text-base"
        />
      </div>
    </Card>
  );
};

export default LetterEditor; 