import React, { useState} from 'react';
import Title from '../videos/comps/Title';
import UploadForm from '../videos/comps/UploadForm';
import ImageGrid from '../videos/comps/ImageGrid';
import Modal from '../videos/comps/Modal';
import '../videos/header.scss';
import HamburgerNav from '../NavBar/HamburgerNav';


const Header = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="HeaderApp">
      <HamburgerNav/>
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