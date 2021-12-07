import './App.css';
import './index.css';
import ImageToggleOnScroll from './ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
  return (
    <div>
      <ImageToggleOnScroll primaryImg={`/src/blacklab-bw.jpg`}
                              secondaryImg={`/src/blacklab.jpg`}
                              alt="" />
    </div>
  );
}

export default ImageChangeOnScroll;