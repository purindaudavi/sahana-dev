import landBg from "../assets/property-hero.png";

import kalla0 from "../assets/kalla0.png";
import kalla from "../assets/propkaluthara.png";
import kalla2 from "../assets/propkaluthara2.png";
import pana from "../assets/proppanadura.png";
import pana2 from "../assets/proppanadura2.png";

import dambu from "../assets/mainpropdambulla.png";
import dambu1 from "../assets/propdambulla1.png";
import dambu2 from "../assets/propdambulla2.png";

import panadu from "../assets/mainproppanadura.png";
import pana0 from "../assets/pana0.png";
import panadu1 from "../assets/proppanadura11.png";
import panadu2 from "../assets/proppanadura22.png";


import plan1 from "../assets/kalutharaplan.png"
import plan2 from "../assets/plan2.png"
import plan3 from "../assets/plan3.png"
import plan4 from "../assets/plan4.png"

export const LAND_PROJECTS = [
  {
    id: 1,
    title: "Sahana Kalutara Residences", // සුදුසු වෘත්තීයමය නමක්
    location: "Kalutara, Western Province", // පිහිටීම
    type: "Residential & Commercial Land", // ඉඩම් වර්ගය
    typeColor: "bg-[#E6008E]", // පෝස්ටරයේ ඇති Magenta/Pink පැහැය
    price: "LKR 450,000", // (සටහන: ඔබේ පෙර ලැයිස්තුවේ මිල හෝ නිවැරදි මිල මෙතැනට යොදන්න)
    perch: "10 - 16 Perches", // ප්ලෑන් එකේ ඇති පරිදි බිම් කොටස්වල ප්‍රමාණයන්
    acres: "Approx. 1.5", // බිම් කොටස් 15ක් ඇති බැවින් ඇස්තමේන්තුගත ප්‍රමාණය
    availablePlots: "15", // ප්ලෑන් එකේ පෙන්වා ඇති මුළු බිම් කොටස් සංඛ්‍යාව
    desc: "A premium land project strategically positioned facing the Galle Main Road in Kalutara. Offering clear freehold deeds (Sinnakkara) with zero risk of landslides or floods, this development features unmatched infrastructure with highly flexible interest-free payment plans up to 24 months, dedicated layouts for public servants, and tailored options for expats.",
    img: kalla0.src,
    images: [kalla.src, kalla2.src, kalla2.src],

    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5118.2074552250215!2d80.37319339999999!3d6.710732099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3bf1ef4fac6c7%3A0x941865e3ccefeaa!2sWathurana%20road!5e1!3m2!1sen!2slk",

    planImage: plan1.src,
    videoImage: kalla.src,

    videoUrl: "/kaluthara.mp4",

    amenities: [
      {
        title: "Three-Phase Electricity",
        description: "Reliable electricity supply to every plot",
        icon: "zap",
      },
      {
        title: "Tap Water Line Connection",
        description: "Piped water supply system",
        icon: "droplets",
      },
      {
        title: "20ft Wide Asphalt Roadways",
        description: "20ft internal carpeted roads",
        icon: "road",
      },
      {
        title: "Clear Freehold Deeds",
        description: "Clear titles with individual deeds",
        icon: "fileCheck",
      },
      {
        title: "Concrete Drainage System",
        description: "Well-planned drainage system",
        icon: "drainage",
      },
      {
        title: "Close to Gampaha Highway Interchange",
        description: "Quick access to major highways",
        icon: "mapPin",
      },
    ],

    landmarks: [
      { name: "Galle Main Road Frontage", distance: "0.0 km" },
      { name: "Katukurunda Junction", distance: "Walking Distance" },
      { name: "Kalutara General Hospital", distance: "1.5 km" },
      { name: "Kalutara Town & Clock Tower", distance: "2.8 km" },
      { name: "Arpico Supercentre & Fuel Station", distance: "Within 1 km" },
      { name: "Leading Schools & Banks", distance: "Within 3 km" }
    ],


  },


  // ---------------------------------


  {
    id: 2,
    title: "Mahawila Terrace II - Panadura", // පෝස්ටරයේ ඇති නිල නම
    location: "Panadura, Western Province", // පිහිටීම
    type: "Premium Residential Land", // ඉඩම් වර්ගය
    typeColor: "bg-[#0D2B4D]", // ඔබේ Primary Deep Blue පැහැය
    price: "LKR 650,000", // (සටහන: ඔබේ පෙර ලැයිස්තුවේ මිල හෝ නිවැරදි මිල මෙතැනට යොදන්න)
    perch: "11.00P - 12.70P", // ප්ලෑන් එකේ ඇති පරිදි බිම් කොටස්වල ප්‍රමාණයන්
    acres: "Approx. 0.3", // පර්චස් 46.7ක මුළු එකතුව අනුව ඇස්තමේන්තුගත ප්‍රමාණය
    availablePlots: "4", // පෝස්ටරයේ පැහැදිලිවම සඳහන් "හොඳම බිම් කොටස් 04යි"
    desc: "An exclusive boutique land development featuring just 4 premium residential plots, strategically located in Panadura (Mahawila) with close proximity to leading national and international schools. Situated just 100 meters from the Horana - Panadura main road, this property offers clear freehold deeds (Sinnakkara) with zero risk of landslides or floods. Complete with flexible payment structures, banking loan support, and special facilities for government servants and expats.",
    images: [pana0.src,
    pana.src, // First image is your default local asset
    pana2.src,

    ],

    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1279.5537835163334!2d79.91374148107853!3d6.710001492096877!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDInMzguMCJOIDc5wrA1NCc1My41IkU!5e1!3m2!1sen!2slk!4v1780988256485!5m2!1sen!2slk",

    planImage: plan2.src,
    videoImage: pana0.src,

    amenities: [
      {
        title: "Three-Phase Electricity",
        description: "Reliable electricity supply to every plot",
        icon: "zap",
      },
      {
        title: "Tap Water Line Connection",
        description: "Piped water supply system",
        icon: "droplets",
      },
      {
        title: "20ft Wide Asphalt Roadways",
        description: "20ft internal carpeted roads",
        icon: "road",
      },
      {
        title: "Clear Freehold Deeds",
        description: "Clear titles with individual deeds",
        icon: "fileCheck",
      },
      {
        title: "Concrete Drainage System",
        description: "Well-planned drainage system",
        icon: "drainage",
      },
      {
        title: "Close to Gampaha Highway Interchange",
        description: "Quick access to major highways",
        icon: "mapPin",
      },

    ],
    landmarks: [
      { name: "Horana - Panadura Main Road", distance: "100 m" },
      { name: "Panadura Town & Railway Station", distance: "Quick Access" },
      { name: "Bandaragama Town", distance: "3.5 km" },
      { name: "Kesbewa Junction (via bypass)", distance: "5.0 km" },
      { name: "Lyceum International School & National Schools", distance: "Within 2 km" },
      { name: "Sri Sumangala College & Local Amenities", distance: "Within 3 km" }
    ],

  },


    {
    id: 3,
    title: "Heritage Dambulla", // පෝස්ටරයේ ඇති නිල සන්නාම නාමය
    location: "Dambulla, Central Province", // පිහිටීම
    type: "Residential & Commercial Land", // ඉඩම් වර්ගය
    typeColor: "bg-[#0D2B4D]", // ඔබේ Primary Deep Blue පැහැය
    price: "LKR 120,000", // පෝස්ටරයේ සඳහන් පරිදි පර්චසය රු. 120,000/- සිට
    perch: "10.00P - 15.00P", // සාමාන්‍ය බිම් කොටස් ප්‍රමාණයන්
    acres: "Approx. 8.5", // බිම් කොටස් 125ක් ඇති බැවින් ඇස්තමේන්තුගත ප්‍රමාණය
    availablePlots: "125", // පෝස්ටරයේ පැහැදිලිවම සඳහන් "සුපිරි බිම් කොටස් 125ක්"
    desc: "An exceptional large-scale land development located within the Dambulla Municipal Council limits, offering an unparalleled investment opportunity. Positioned just 100 meters from the main Nuwara Eliya road and 2km from Dambulla town via the A9 highway, this project is surrounded by world-renowned heritage landmarks including Sigiriya and Kandalama. Featuring 100% clear freehold deeds (Sinnakkara) free from landslide and flood risks, it includes flexible 24-month interest-free payment options and dedicated government and expat financial loan pathways.",
    images: [
      dambu.src, // First image is your default local asset
      dambu1.src,
      dambu2.src
    ],


    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d20420.62909205165!2d80.655754!3d7.855258!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTEnMjIuMiJOIDgwwrAzOScyOC40IkU!5e1!3m2!1sen!2slk!4v1780988953844!5m2!1sen!2slk",

    planImage: plan3.src,
    videoImage: dambu.src,

    videoUrl: "/dambulla.mp4",

    amenities: [
      {
        title: "Tap Water Line Connection",
        description: "Continuous piped clean water supply system directly to each plot",
        icon: "droplets",
      },
      {
        title: "Three-Phase Electricity",
        description: "High-voltage electricity supply infrastructure ready for connection",
        icon: "zap",
      },
      {
        title: "Wide Tarred Access Roads",
        description: "Well-planned internal tarred roads designed for heavy vehicles",
        icon: "road",
      },
      {
        title: "Clear Freehold Deeds",
        description: "100% verified Sinnakkara titles with prompt individual registration",
        icon: "fileCheck",
      },
      {
        title: "Flexible Bank Loan Support",
        description: "Pre-approved corporate real estate banking pathways and long-term installments",
        icon: "landmark",
      },
      {
        title: "Interest-Free Payment Terms",
        description: "Pay 40% within 14 days and the rest in 6 months with zero interest fees",
        icon: "badgePercent",
      }
    ],
    landmarks: [
      { name: "Nuwara Eliya Main Road", distance: "100 m" },
      { name: "Dambulla Town & A9 Highway", distance: "2.0 km" },
      { name: "Dambulla Dedicated Economic Centre", distance: "2.2 km" },
      { name: "Rangiri Dambulla Rajamaha Viharaya & Cricket Stadium", distance: "2.5 km" },
      { name: "Sigiriya Ancient Rock Fortress", distance: "Quick Access" },
      { name: "Heritance Kandalama & Jetwing Hotels", distance: "Short Drive" }
    ],
  },
  // ---------------------




      {
    id: 4,
    title: "Green Gate - Panadura", // පෝස්ටරයේ ඇති නිල සන්නාම නාමය
    location: "Rukgaha, Panadura", // පිහිටීම
    type: "Premium Residential Land", // ඉඩම් වර්ගය
    typeColor: "bg-[#00B474]", // පෝස්ටරයේ ප්‍රධාන කොළ පැහැයට ගැළපෙන සේ
    price: "LKR 235,000", // පෝස්ටරයේ සඳහන් පරිදි පර්චසය රු. 235,000/- සිට
    perch: "10.00P - 12.90P", // ප්ලෑන් එකේ ඇති පරිදි බිම් කොටස්වල ප්‍රමාණයන්
    acres: "Approx. 1.2", // බිම් කොටස් 25ක් ඇති බැවින් ඇස්තමේන්තුගත ප්‍රමාණය
    availablePlots: "25", // මාස්ටර් ප්ලෑන් එකේ පෙන්වා ඇති මුළු බිම් කොටස් සංඛ්‍යාව
    desc: "An exceptional residential land project named Green Gate, strategically located in Panadura (Rukgaha). Positioned in close proximity to the Rukgaha Bus Stand and just 15 minutes away from Panadura Town, this development offers 25 well-planned residential plots. Boasting clear freehold deeds (Sinnakkara) with absolutely zero risk of landslides or floods, the property is fully equipped with internal wide roads and essential utilities, backed by flexible installment structures and bank loan support.",
    images: [
      panadu.src, // First image is your default local asset
      panadu1.src,
      panadu2.src
    ],

    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d10236.174053487211!2d79.944889!3d6.72218!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDMnMTkuOCJOIDc5wrA1Nic1MC45IkU!5e1!3m2!1sen!2slk!4v1780989516088!5m2!1sen!2slk",

    planImage: plan4.src,
    videoImage: panadu.src,

    videoUrl: "/pandura.mp4",

amenities: [
      {
        title: "Tap Water Line Connection",
        description: "Continuous piped clean water supply system directly to each plot",
        icon: "droplets",
      },
      {
        title: "Three-Phase Electricity",
        description: "High-voltage electricity supply infrastructure ready for immediate connection",
        icon: "zap",
      },
      {
        title: "Wide Internal Roadways",
        description: "Fully completed 20ft and 15ft internal access roads for easy transport",
        icon: "road",
      },
      {
        title: "Clear Freehold Deeds",
        description: "100% clear Sinnakkara titles verified for immediate ownership transfer",
        icon: "fileCheck",
      },
      {
        title: "Approved Bank Loans",
        description: "Fully supported financial documentation ready for state and private bank loans",
        icon: "landmark",
      },
      {
        title: "Flexible Payment Options",
        description: "Reserve with LKR 100,000, pay 40% in 14 days, and the rest interest-free over 6 months",
        icon: "badgePercent",
      }
    ],
 landmarks: [
      { name: "Rukgaha Bus Stand", distance: "Walking Distance" },
      { name: "Panadura Town & Railway Station", distance: "15 Minutes" },
      { name: "Bandaragama Town via Horana Road", distance: "Quick Access" },
      { name: "Alubomulla Junction", distance: "Short Drive" },
      { name: "Giriulla Road & Shasthreeya Park", distance: "Within 1 km" },
      { name: "Arukgoda Junction & Kiriberiya Road", distance: "Within 2 km" }
 ],
  },

 

];