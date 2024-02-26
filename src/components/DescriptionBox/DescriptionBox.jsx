import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return ( 
        <div className="descriptionbox">
            <div className="descriptionbox-navigation">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Facere illum numquam maxime consectetur reprehenderit,
                     distinctio temporibus doloribus repudiandae eos, iste,
                      ipsam laboriosam nisi ad saepe nihil! 
                    Laudantium cumque reprehenderit quis?
                </p>
            </div>
        </div>
     );
}
 
export default DescriptionBox;