import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceItem(props) {
    return (
        <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              src={props.src}
            />
            </div>
            <button className='btn'>{props.text}</button>
                    
            
        </Link>
      </li>
    </>
    );
    }