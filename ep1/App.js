
import React from "react";
import { createRoot } from "react-dom/client";

/*
header
    logo
    nav bar
        home
        about us
        contact
        cart
body
    search
    restaurant container
        restuarant card
            image
            name, cuisine, start rating, time
footer
    copyright
    address
    ..
*/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo"
                src= "data:image/png;base64,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"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "542132",
      name: "Domnik Pizza",
      uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
      city: "22",
      area: "Majra    Bansal Home",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
      locality: "Patel Nagar",
      parentId: 22321,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "542132",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "321517",
      name: "FOOD PLANET RESTAURANT",
      uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
      city: "22",
      area: "Majra",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "ykboewqeoxnne8fgrnui",
      cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
      locality: "Patel Nagar",
      parentId: 81850,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "321517",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311806",
      name: "Burger King",
      uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "burger-king-chakrata-road-ballupur",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
      locality: "CHAKRATA ROAD",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311806",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "132460",
      name: "Annapurna Andhra Mess",
      uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
      city: "22",
      area: "Dehradun",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
      cuisines: ["South Indian", "Biryani", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
      locality: "Patel Nagar",
      parentId: 33997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "132460",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "496677",
      name: "Uncle Ji Restaurant",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
      cuisines: ["North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, deliveryTime} =resData?.data;
    return (
        <div>
            <div className="res-card">
                <img className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lltunkievzpxrrcarfmy"/>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{deliveryTime} mins</h4>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div>
            <div className="search">
                search
            </div>
            <div className="res-container">
                {(restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/> 
                    )))}
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const root = createRoot(document.getElementById("root"));

root.render(<App/>);