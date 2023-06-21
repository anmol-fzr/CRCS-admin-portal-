const data = [
  {
    name: 'saharayn universal multipurose society limited',
    address:
      'At & P.O. Railway Colony, Gorakkhpur, District-Gorakhpur Uttar Pradesh	',
    state: 'UTTAR PRADESH',
    district: 'KUSHI NAGAR',
    regDate: '',
    opArea: 'Haryana, UttarPradesh, Himachal, Punjab',
    sector: 'Credit',
  },
  {
    name: 'JMJ Multi State Agro Cooperative Society Ltd.',
    address:
      'TC 48/1442-1, Sreeniva, Parekkati House, Chathankulangara Temple South, Puthurkkara, Ayyanthole, Thrissur 680003 Kerala',
    state: 'KERALA',
    district: 'KUSHI NAGAR',
    regDate: '13/10/2022',
    opArea: 'Bihar, West bengal, Odisha',
    sector: 'Agro',
  },
  {
    name: 'Devbhoomi Agro Multi State Cooperative Society Ltd.',
    address: 'S/o Sateesh Kumar, Tejupur, Haridwar, Uttarakhand 247661',
    state: 'UTTARAKHAND',
    district: '',
    regDate: '04/10/2022',
    opArea: 'Tamil Nadu, karnataks',
    sector: 'Agro',
  },
  {
    name: 'Aarya Multi Specialty Cooperative Hospital and Hospital and Research Center ltd.',
    address: 'Gate No 165, Nimgaon (T), Madha, Solapur, 413210 maharashtra',
    state: 'MAHARASHTRA',
    district: '',
    regDate: '04/10/2022',
    opArea: 'Haryana, Punajb',
    sector: 'Health/Hospital',
  },
  {
    name: 'Agriculture Development Cooperative Federation',
    address: `"A/P 344, Lower Ground Floor, Sector 86, Preet City, SAS Nagar, Mohali, Punjab 160055"`,
    state: 'PUNJAB',
    district: '',
    regDate: '22/09/2022',
    opArea: 'Manipur, Meghalaya',
    sector: 'Federation',
  },
  {
    name: 'Prosperity Multi State Housing Cooperative Society ltd.	Prosperity Multi State Housing Cooperative Society ltd.',
    address:
      '"Jayem Arcade 385 A6, First Floor, Kamarajar Road, Peelamedu, Coimbatore 641004"',
    state: 'TAMIL NADU',
    district: '',
    regDate: '15/09/2022',
    opArea: 'Maharashtra, Gujarat, Rajasthan',
    sector: 'Housing',
  },
  {
    name: 'Greenfield Multi State Agro Allied and Marketing Cooperative Society Ltd. (GMAAMCS)',
    address:
      'Plot No 92, H.No 4-487, New Balaji Nagar Colony, Meerpet, Behind Janapriya Apartments, Hyderabad 500097 Telangana',
    state: 'TELANGANA',
    district: '',
    regDate: '12/09/2022',
    opArea: 'Gujarat, Rajasthan',
    sector: 'Agro',
  },
  {
    name: 'Shri Sharda Agro Multi State Co- operative Society Ltd.',
    address: 'Shri Sharda Agro Multi State Co-operative Society Ltd.',
    state: 'UTTAR PRADESH',
    district: '',
    regDate: '02/09/2022',
    opArea: 'Maharashtra,Goa.Karnataka, Andhra Pradesh',
    sector: 'Agro',
  },
  {
    name: 'Nature Delight Multi State Cooperative Dairy & Agro Products Ltd.',
    address: 'Kalas Gate, No 1189, A/P Kalas, Indapur, Pune 413105 Maharashtra',
    state: 'MAHARASHTRA',
    district: '',
    regDate: '31/08/2022',
    opArea: 'Andhra Pradesh, Telangna',
    sector: 'Agro',
  },
];

export default data;

const sectors = new Set();

data.map(({ sector }) => {
  sectors.add(sector);
});

export { sectors };
