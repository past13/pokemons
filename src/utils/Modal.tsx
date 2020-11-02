import React from 'react';

export function Modal({ handleClose, show, children }: any) {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    
    return (
        <div className={showHideClassName} onClick={(e: any) => {
          if (e.target.className === "modal display-block") {
            handleClose();
          }
        }}>
        <section className='modal-main' >
              {children}
        </section>
        </div>
    );
}