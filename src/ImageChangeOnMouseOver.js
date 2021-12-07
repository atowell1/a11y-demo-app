import './App.css';
import './index.css';
import ImageToggleOnMouseOver from './ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg={`/blacklab-bw.jpg`}
                              secondaryImg={`/blacklab.jpg`}
                              alt="" />
    </div>
  );
}

export default ImageChangeOnMouseOver;