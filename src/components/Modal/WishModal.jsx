import { useState, useRef } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { likedProductsState } from '../../atom/heartAtom';

function WishModal() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const wishInfor = useRecoilValue(likedProductsState)

  return (
    <>
      <button 
        ref={target}
        style={{backgroundColor: "var(--color-bright)", border: "none"}} 
        onClick={() => setShow(!show)}
      >
        <img src="/heart.png" alt="wishlist" />
      </button>

      <Overlay 
        target={target.current} 
        show={show} 
        placement="bottom"
        rootClose
        onHide={() => setShow(false)}
      >
        {props => (
          <Popover id="popover-contained" {...props}>
            <Popover.Body>
            </Popover.Body>
          </Popover>
        )}
      </Overlay>
    </>
  );
}

export default WishModal;
