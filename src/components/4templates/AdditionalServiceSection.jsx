import React from 'react';
import AdditionalServiceCard from '../1atoms/AdditionalServiceCard';

export default function AdditionalService() {
  return (
    <section id="AdditionalServiceSection">
      <header className="containerCenter">
        <div className="contentBlock">
          <h1 className="blueText poppins_semibold_500">CORE GOAL</h1>
        </div>
      </header>

      <div className="containerCenter">
        <div className="contentBlock " id="additionalServiceCardContainer">
          <AdditionalServiceCard title="Usage" desc="Quick ‘n’ Easy" />
          <AdditionalServiceCard
            title="User Friendly"
            desc="Easy To Use Platform"
          />
          <AdditionalServiceCard
            title="Fast & Reliable"
            desc="Fastest Update from Reliable Sources"
          />
          <AdditionalServiceCard
            title="Modern Interface"
            desc="Modern Solution"
          />
          <AdditionalServiceCard
            title="All in One Plan"
            desc="Get all the info in  single place"
          />
        </div>
      </div>
    </section>
  );
}
