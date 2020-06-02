import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "grooming",
      slug: "grooming",
      type: "Cats and Dogs",
      price: 50,
      size: 1,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description: "",
      extras: [],
      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Boarding",
      slug: "boarding",
      type: "All",
      price: 35,
      size: 1,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description: "",
      extras: [],
      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "Puppy Training",
      slug: "puppy-training",
      type: "Dogs",
      price: 15,
      size: 20,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: true,
      description: "",
      extras: [],
      images: [
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "Dog Training",
      slug: "dog-training",
      type: "Dogs",
      price: 15,
      size: 2,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description: "",
      extras: [],
      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "Agility Class",
      slug: "agility-class",
      type: "Dogs",
      price: 20,
      size: 5,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: true,
      description: "",
      extras: [],
      images: [
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "PawPals Meet & Greet",
      slug: "meet-and-greet",
      type: "Dogs",
      price: 10,
      size: 5,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: true,
      description: "",
      extras: [],
      images: [
        {
          fields: {
            file: {
              url: img7,
            },
          },
        },
      ],
    },
  },
];
