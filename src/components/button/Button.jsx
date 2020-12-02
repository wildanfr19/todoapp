import React from 'react';
import PropTypes from 'prop-types';

/** cara install library dependencies classnames => hapus file package-lock.json, 
  kemudian jalankan perintah "npm install classnames --save"
 */
import cx from 'classnames';

/** import styles untuk file bertipe CSS, from menjelaskan lokasi direktori file */
import styles from './button.module.css'
/** tanda && di dalam react js artinya return, bukan dan di dalam logic (berdasarkan 
  props yang diterima)
*/

const Button = ( {text, onClick, color, align }) => {

    // const classNames = [
    //     'header-btn',
    //     color === 'black' && 'main-black-color',
    //     color === 'red' && 'main-red-color',
    //     align === 'left' && 'align-left',
    //     align === 'right' && 'align-right'
    // ].join(" "); 

    const classNames = cx(styles.headerBtn, {
        /*logicnya sama seperti pada 
        color === 'black' && 'main-black-color' */
        /* sebelumnya harus install library classnames terlebih dahulu "npm install classnames --save" */
        /** logikanya jika props color sama dengan black, maka dia akan mengeksekusi 
          class style mainBlackColor yang terdapat pada file button.module.css*/
        /** pakai const classNames apabila si style nama class memiliki kriteria / logic
         tertentu*/
        [styles.mainBlackColor]: color === 'black', 
        [styles.mainRedColor]: color === 'red',
        [styles.alignLeft]: align === 'left',
        [styles.alignRight]: align === 'right'

    });
    
    /* jangan menggunakan const ClassNames (utk join class), tapi ubah caranya
    dengan menggunakan library dependencies yang bernama "classnames" 
    (npm install classnames --save) */

    /**  className={classNames} masih dalam bentuk string, sedangkan const classNames
     dmasih dalam bentuk array, maka array perlu diberikan string dengan diberikan method
     join(" ") dengan string kosong. 

     className = "header-btn" sudah otomatis terinisiasi pada tag component button
     pada const ClassNames
     */
    return (
        
        <button className={classNames} onClick={onClick}>{text}</button>
    );
};

/* default pada tag button dengan diberikan props Button.defaultProps */
Button.defaultProps = {
    text: "Button",
    color: "black",
    align: "left"
};

/* text: PropTrypes.[nama typenya].[is_required = opsional] */

Button.propTypes = {

    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.oneOf(['black', 'red'])
    
};

export default Button;