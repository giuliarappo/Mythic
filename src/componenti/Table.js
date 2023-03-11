import React from 'react';
import '../Table.css'
import THead from './THead';

function Table(props) {
  
  return (
    <table className='centrato'>
      <THead/>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
  
}


export default Table;

