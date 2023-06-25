import React, { useState} from 'react';
import Title from '../videos/comps/Title';
import UploadForm from '../videos/comps/UploadForm';
import ImageGrid from '../videos/comps/ImageGrid';
import Modal from '../videos/comps/Modal';
import '../videos/header.scss';


const Header = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="HeaderApp">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedVideo={setSelectedVideo} />
      { selectedVideo && (
        <Modal selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
      )}
    </div>
  )
}

export default Header;