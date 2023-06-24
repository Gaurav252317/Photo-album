import React, { useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import '../src/header.scss';


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