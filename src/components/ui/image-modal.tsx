import React, { useEffect } from "react";
import Image from "next/image";

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl font-bold bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition">&times;</button>
        <div className="flex items-center justify-center w-full h-[80vh] max-w-[90vw]">
          <button onClick={onPrev} className="text-white text-3xl px-4 hover:text-primary/80">&#8592;</button>
          <Image
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            width={1200}
            height={900}
            className="rounded-xl object-contain max-h-[80vh] max-w-[90vw] bg-white"
          />
          <button onClick={onNext} className="text-white text-3xl px-4 hover:text-primary/80">&#8594;</button>
        </div>
        <div className="mt-4 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 