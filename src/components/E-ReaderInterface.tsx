import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Rewind,
  FastForward,
  Settings2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import CharacterVoiceMapper from '@/components/CharacterVoiceMapper';

// Mock Data for demonstration
const MOCK_BOOK_TITLE = "The Adventures of Sherlock Holmes";
const MOCK_BOOK_CONTENT = `
To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer—excellent for drawing the veil from men's motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory. I had seen little of Holmes lately. My marriage had drifted us away from each other. My own complete happiness, and the home-centred interests which rise up around the man who first finds himself master of his own establishment, were sufficient to absorb all my attention, while Holmes, who loathed every form of society with his whole Bohemian soul, remained in our lodgings in Baker Street, buried among his old books, and alternating from week to week between cocaine and ambition, the drone of the violin and the dreaminess of the drug. I was still, as ever, deeply attracted by the study of crime, and occupied my mind with it in a passive, receptive way. But I had lost the compelling interest that had once made me his companion and assistant. I was now a married man, and my life was full of other interests. However, one night—it was on the twentieth of March, 1888—I was returning from a journey to a patient (for I had now returned to civil practice), when my way led me through Baker Street. As I passed the well-remembered door, which must always be associated in my mind with my wooing, and with the dark incidents of the Study in Scarlet, I was seized with a keen desire to see Holmes again, and to know how he was employing his extraordinary powers.
`.trim().split(' ');

const WORDS_PER_PAGE = 150;

const EReaderInterface: React.FC = () => {
  console.log('E-ReaderInterface loaded');

  const [pages, setPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const paginatedContent: string[] = [];
    for (let i = 0; i < MOCK_BOOK_CONTENT.length; i += WORDS_PER_PAGE) {
      paginatedContent.push(MOCK_BOOK_CONTENT.slice(i, i + WORDS_PER_PAGE).join(' '));
    }
    setPages(paginatedContent);
  }, []);

  const paginate = (newDirection: number) => {
    const nextPage = currentPage + newDirection;
    if (nextPage >= 0 && nextPage < pages.length) {
      setDirection(newDirection);
      setCurrentPage(nextPage);
    }
  };

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#F1E9DB] text-[#3A2E27] font-serif overflow-hidden">
      <header className="flex items-center justify-between p-4 bg-[#D3C5B5] shadow-md z-20 flex-shrink-0">
        <Link to="/my-library">
          <Button variant="ghost" className="text-[#3A2E27] hover:bg-[#C1B2A1]">
            <ArrowLeft className="h-5 w-5 mr-2" />
            My Library
          </Button>
        </Link>
        <h1 className="text-lg md:text-xl font-bold text-center truncate px-2">{MOCK_BOOK_TITLE}</h1>
        <div className="w-32" /> {/* Spacer */}
      </header>

      <main className="flex-grow flex items-center justify-center relative p-4 md:p-8 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute w-full h-full flex items-center justify-center p-4"
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-12 shadow-2xl rounded-lg max-w-3xl w-full max-h-[95%] overflow-y-auto">
              <p className="text-lg leading-relaxed whitespace-pre-wrap">
                {pages[currentPage] || 'Loading...'}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => paginate(-1)}
          disabled={currentPage === 0}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/10 hover:bg-black/20 text-white rounded-full"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => paginate(1)}
          disabled={!pages.length || currentPage === pages.length - 1}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/10 hover:bg-black/20 text-white rounded-full"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </main>

      <footer className="flex flex-col items-center justify-center p-4 bg-[#D3C5B5] shadow-inner-top z-20 flex-shrink-0">
        <div className="flex items-center gap-4 mb-2">
          <Button variant="ghost" size="icon"><Rewind className="h-6 w-6" /></Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-16 h-16 rounded-full bg-[#C1B2A1] hover:bg-[#b5a697]"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 fill-current" />}
          </Button>
          <Button variant="ghost" size="icon"><FastForward className="h-6 w-6" /></Button>
        </div>

        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-transparent border-[#3A2E27]/50 hover:bg-[#C1B2A1]">
                <Settings2 className="mr-2 h-4 w-4" />
                Customize Voices
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#F1E9DB] border-[#3A2E27]/20">
              <DialogHeader>
                <DialogTitle className="text-[#3A2E27]">Character Voice Mapper</DialogTitle>
                <DialogDescription>
                  {"Assign a unique voice to each character for a personalized audio experience."}
                </DialogDescription>
              </DialogHeader>
              <CharacterVoiceMapper />
            </DialogContent>
          </Dialog>
        </div>
        <div className="text-sm mt-2">
          Page {currentPage + 1} of {pages.length || 1}
        </div>
      </footer>
    </div>
  );
};

export default EReaderInterface;