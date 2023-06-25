import React from 'react';
import useFirestore from '../../videos/hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedVideo }) => {
  const { docs } = useFirestore('videos');
  console.log(docs);

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id} value={doc.description} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedVideo(doc.url)}
        >
          <motion.video src={doc.url} alt="uploaded Video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}            
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;