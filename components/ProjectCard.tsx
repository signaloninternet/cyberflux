import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

type Project = {
  id: number;
  image: string;
  year: string;
  agency: string;
  title: string;
};

type ProjectCardProps = {
  project: Project;
  isAnyHovered: boolean;
  onHover: (isHovered: boolean) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isAnyHovered, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
    onHover(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <motion.div 
      className="relative"
      style={{
        originX: 0.5,
        originY: 0.5,
      }}
      animate={{ 
        flex: isHovered ? 1 : isAnyHovered ? 0.8 : 1,
        scale: isHovered ? 1.05 : 1,
        zIndex: isHovered ? 10 : 1
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <div className="relative overflow-hidden">
        <motion.div 
          className="w-full aspect-square bg-cover custom-cursor-target h-64 bg-center relative"
          style={{
            backgroundImage: `url(${project.image})`,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.div 
          className="mt-2 space-y-1"
          animate={{ opacity: isHovered ? 0.8 : 1 }}
        >
          <p className="text-lg font-medium">{project.title}</p>
          <p className="text-sm text-gray-400">{project.agency}</p>
        </motion.div>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute bottom-0 right-0 p-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;