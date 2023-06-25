import React, { useState} from 'react';
import Title from '../hiddenFolder/comps/Title';
import UploadForm from '../hiddenFolder/comps/UploadForm';
import ImageGrid from '../hiddenFolder/comps/ImageGrid';
import Modal from '../hiddenFolder/comps/Modal';
import '../hiddenFolder/header.scss';


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