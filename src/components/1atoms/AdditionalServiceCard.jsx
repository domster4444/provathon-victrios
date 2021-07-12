// ??___ 2nd SECTION  of home page
import React from 'react';

export default function AdditionalServiceCard(props) {
  return (
    <>
      <div className="AdditionalserviceCard cursor">
        <h4 className="poppins_regular_400">{props.title}</h4>
        <h2 className="poppins_regular_400">{props.desc}</h2>
      </div>
    </>
  );
}
