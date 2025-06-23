import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

// Mock data - in a real app, this would be passed as props
const mockCharacters = [
  "Narrator",
  "Alina Starkov",
  "The Darkling (General Kirigan)",
  "Mal Oretsev",
  "Kaz Brekker",
  "Inej Ghafa",
  "Jesper Fahey",
  "Nikolai Lantsov",
  "Zoya Nazyalensky",
];

const mockVoices = [
  { id: 'onyx', name: 'Onyx', gender: 'Male' },
  { id: 'nova', name: 'Nova', gender: 'Male' },
  { id: 'echo', name: 'Echo', gender: 'Female' },
  { id: 'fable', name: 'Fable', gender: 'Female' },
  { id: 'shimmer', name: 'Shimmer', gender: 'Female' },
  { id: 'alloy', name: 'Alloy', gender: 'Neutral' },
];

interface Voice {
  id: string;
  name: string;
  gender: string;
}

interface CharacterVoiceMapperProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  characters?: string[];
  availableVoices?: Voice[];
  onSave: (mappings: Record<string, string>) => void;
  initialMappings?: Record<string, string>;
}

const CharacterVoiceMapper: React.FC<CharacterVoiceMapperProps> = ({
  isOpen,
  onOpenChange,
  characters = mockCharacters,
  availableVoices = mockVoices,
  onSave,
  initialMappings = {},
}) => {
  const [voiceMappings, setVoiceMappings] = useState<Record<string, string>>(initialMappings);
  const { toast } = useToast();

  useEffect(() => {
    console.log('CharacterVoiceMapper loaded');
  }, []);

  const handleVoiceChange = (character: string, voiceId: string) => {
    setVoiceMappings((prev) => ({
      ...prev,
      [character]: voiceId,
    }));
  };

  const handleSaveChanges = () => {
    onSave(voiceMappings);
    toast({
      title: "Voice Settings Saved",
      description: "Your character voice preferences have been updated.",
    });
    onOpenChange(false);
  };

  const groupedVoices = availableVoices.reduce((acc, voice) => {
    (acc[voice.gender] = acc[voice.gender] || []).push(voice);
    return acc;
  }, {} as Record<string, Voice[]>);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Character Voice Settings</DialogTitle>
          <DialogDescription>
            Assign a unique voice to each character for a personalized audio experience.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[50vh] pr-4">
            <div className="grid gap-6 py-4">
            {characters.map((character) => (
                <div key={character} className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor={`voice-for-${character}`} className="text-right font-semibold truncate" title={character}>
                    {character}
                </Label>
                <Select
                    onValueChange={(value) => handleVoiceChange(character, value)}
                    defaultValue={voiceMappings[character]}
                >
                    <SelectTrigger id={`voice-for-${character}`} className="col-span-2">
                    <SelectValue placeholder="Select a voice" />
                    </SelectTrigger>
                    <SelectContent>
                    {Object.entries(groupedVoices).map(([gender, voices]) => (
                        <SelectGroup key={gender}>
                        <SelectLabel>{gender}</SelectLabel>
                        {voices.map((voice) => (
                            <SelectItem key={voice.id} value={voice.id}>
                            {voice.name}
                            </SelectItem>
                        ))}
                        </SelectGroup>
                    ))}
                    </SelectContent>
                </Select>
                </div>
            ))}
            </div>
        </ScrollArea>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleSaveChanges}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CharacterVoiceMapper;