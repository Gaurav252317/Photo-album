import React, { useState} from 'react';
import Title from '../videos/comps/Title';
import UploadForm from '../videos/comps/UploadForm';
import ImageGrid from '../videos/comps/ImageGrid';
import Modal from '../videos/comps/Modal';
import '../videos/header.scss';


const Header = () => {
    const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="HeaderApp">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  )
}

export default Header;