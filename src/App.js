import React, { useState } from "react";
import "./styles.css";

const AdventurePlaces = {
  India: [
    {
      Name: "Gonbo Rangjon",
      Description:
        "Gonbo Rangjon is a stand-alone lofty rocky precipice located in the Lungnak valley, Zanskar, in the Union Territory of Ladakh in India. The peak is at 5,520 m (18,110 ft) and the base of the mountain is about 4,500m (14,800 ft).",

      Image:
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Kargyak_Gonbo_Rangjon_Road_Zanskar_Oct22_A7C_03619.jpg",

      Rating: `⭐⭐⭐⭐⭐`
    },

    {
      Name: "Auli",
      Description:
        "Auli is located in Uttarakhand and is one of the hidden gems of this state. It remains mostly untouched by the general public and due to this, it has retained its natural beauty.It is also blessed with steep winding slopes, clean environment, and monolithic mountain tops. There are incredible trekking routes that take you through the Kuari Pass and Gorson Valley.",
      Image:
        "https://static-blog.treebo.com/wp-content/uploads/2018/07/Auli.jpg",
      Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: " Meghalaya-East",
      Description:
        "Meghalaya has a series of interconnected caves that forms a complicated web structure. You can go exploring these massive cave structures activity that will get your heart thumping. Caving also lets you climb certain parts of the cave, testing your upper body strength.",
      Image:
        "https://static-blog.treebo.com/wp-content/uploads/2018/08/Webp.net-compress-image-10-5.jpg",
      Rating: `⭐⭐⭐⭐⭐`
    }
  ],

  SouthAfrica: [
    {
      Name: "The Cango Caves",
      Description:
        "These spectacular caves are situated at the foot of the Swartberg mountains. You will be climbing through narrow passages and crawling through small crevasses. You will be amazed at the incredible rock formations, stalagmites and stalactites as well as the ancient bushman paintings.",
      Image:
        "https://www.nomadasaurus.com/wp-content/uploads/2017/09/3-cango-caves.jpg",
      Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "Bungee Jump From Bloukrans Bridge",
      Description:
        "Located on the border of the Western and Eastern Cape lies the tranquil and majestic Bloukrans River Valley. ",
      Image:
        "https://www.nomadasaurus.com/wp-content/uploads/2017/09/6-bloukrans-bungee.jpg",
      Rating: `⭐⭐⭐⭐⭐`
    },

    {
      Name: "Skydiving",
      Description:
        "South Africa is known for its warm climate and clear skies making it the perfect destination for jumping.",
      Image:
        "https://www.nomadasaurus.com/wp-content/uploads/2017/09/10-sky-diving.jpg",

      Rating: `⭐⭐⭐⭐⭐`
    }
  ],

  Iceland: [
    {
      Name: "Ice Climbing and Glacier Hiking",
      Description:
        "Ice climbing and glacier hiking take the basics of both activities and bring them to entirely new heights with incredible, creaking glacial landscapes, dark crevasses, towering frozen walls and intricate ice sculptures.",
      Image:
        "https://guidetoiceland.imgix.net/741766/x/0/top-activities-in-iceland-for-adrenaline-junkies-3.jpg?ixlib=php-3.3.0&w=883",
      Rating: `⭐⭐⭐⭐⭐`
    },

    {
      Name: "Hiking and Trekking in Iceland",
      Description:
        "It is extremely popular to go hiking in Iceland thanks to its eclectic, yet ever stunning landscape. It's a real pleasure to trek in the country ",
      Image:
        "https://guidetoiceland.imgix.net/741776/x/0/top-activities-in-iceland-for-adrenaline-junkies-14.jpg?ixlib=php-3.3.0&w=883",
      Rating: `⭐⭐⭐⭐⭐`
    },

    {
      Name: "Mountain biking in Iceland",
      Description:
        "This has allowed cyclists to merge their passion with traditional sightseeing, extending the process over a number of days in order to allow passage from destination to the next.",
      Image:
        "https://guidetoiceland.imgix.net/380544/x/0/top-activities-in-iceland-for-adrenaline-junkies-13?ixlib=php-3.3.0&w=883",
      Rating: `⭐⭐⭐⭐⭐`
    }
  ]
};

const travelPlaces = Object.keys(AdventurePlaces);

export default function App() {
  const [placesList, setPlacesList] = useState("India");

  function travelClickHandler(place) {
    setPlacesList(place);
  }

  function getPlacesPost(places) {
    var name = places.Name;
    var imageUrl = places.Image;
    var desc = places.Description;
    var rating = places.Rating;
    var placesList = (
      <li>
        <img alt="places thumnail" src={imageUrl} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>{name}</h3>
          <p style={{ fontSize: "0.9rem" }}>{desc} </p>
          <p>{rating}</p>
        </div>
      </li>
    );
    return placesList;
  }

  return (
    <div className="App">
      <h1>Adventure Place To Travel</h1>
      <p>
        Checkout my favorite Adventure Places. Select a place to get started
      </p>

      <div>
        {travelPlaces.map((place) => {
          return (
            <button
              key={place}
              className="btn"
              onClick={() => travelClickHandler(place)}
            >
              {place}
            </button>
          );
        })}
      </div>

      <hr />
      <ul>
        {AdventurePlaces[placesList].map((places) => {
          return getPlacesPost(places);
        })}
      </ul>
    </div>
  );
}
