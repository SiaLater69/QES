import React from 'react';
import Card from './Card';
import './CardGrid.css';

// Import your images
import image1 from '../assets/finance.jpg';
import image2 from '../assets/media2.jpg';
import image3 from '../assets/telecom.jpg';
import image4 from '../assets/insurance.jpg';
import image5 from '../assets/retail.jpg';
import image6 from '../assets/other1.jpg';

const cardData = [
  {
    title: "Financial",
    // description: "This is the description for Card 1",
    imageSrc: image1
  },
  {
    title: "Media",
    // description: "This is the description for Card 2",
    imageSrc: image2
  },
  {
    title: "Telecommunication",
    // description: "This is the description for Card 3",
    imageSrc: image3
  },
  {
    title: "Insurance",
    //description: "This is the description for Card 4",
    imageSrc: image4
  },
  {
    title: "Retail",
    //description: "This is the description for Card 5",
    imageSrc: image5
  },
  {
    title: "Other",
    //description: "This is the description for Card 6",
    imageSrc: image6
  }
];

const CardGrid = () => {
  return (
    <div className="card-grid-container">
      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
