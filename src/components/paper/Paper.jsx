import React from 'react';
import PropTypes from "prop-types"; /* sebelumnya install libraries dependencies prop-types terlebih dahulu dan
                                        masukkan dependencies prop-types nya kedalam file package.json */

import styles from './paper.module.css';

{/* membuat variabel Paper */}  
// ({ children}) merupakan prop-types, apabila children tidak dipakai, maka tidak usah mengimport 
//                                     PropTypes

const Paper = ({ children}) => { 
    return (
        <div className={styles.container}>
                <div className={styles.frame}>
                    { children }  {/* untuk menampilkan lanjutan isi dari div claas frame
                                    yang berada di file App.js */}
                </div>
            </div>
    )
}

//apabila menggunakan children, maka kita wajib mendeklarasikannya ke dalam prop-types
Paper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

// export default class Paper extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="frame">

//                 </div>
//             </div>
//         )
//     }
// }

export default Paper;
