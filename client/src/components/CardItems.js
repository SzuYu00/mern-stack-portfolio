import React from 'react';
import { Link } from 'react-router-dom';


function CardItems(props) {
    return (
        <>
            <li className='cards-item'>
                <Link className='cards-item-link' to={props.path}>
                    <figure className='cards-item-pic-wrap' thumbnail-tag={props.label}>
                        <img src={props.src} alt='Project' className='cards-item-img' />
                    </figure>
                    <div className='cards-item-info'>
                        <h5 className='cards-item-text'>{props.text}</h5>
                    </div>
                </Link>
            </li>

        </>
    )
}

export default CardItems
