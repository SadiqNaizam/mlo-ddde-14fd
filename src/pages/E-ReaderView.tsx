import React from 'react';
import EReaderInterface from '@/components/E-ReaderInterface';

/**
 * E-ReaderView serves as the dedicated, distraction-free page for reading a book.
 * It is designed to be an immersive, full-screen experience.
 *
 * This component acts as a host for the EReaderInterface, which contains the
 * complete UI and logic for the reader, including text rendering, page navigation,
 * audio controls, and the dialog for character voice mapping.
 */
const EReaderView = () => {
  console.log('E-ReaderView page loaded');

  return (
    <div className="w-screen h-screen bg-[#F1E9DB]">
      <EReaderInterface />
    </div>
  );
};

export default EReaderView;