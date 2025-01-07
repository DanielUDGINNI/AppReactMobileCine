//Daniel Alberto Vazquez Ramirez 218747235 Programacion para Internet
const foods = [
    {
        id: '1',
        name: 'Palomitas Mantequilla',
        ingredientes: 'Mantequilla',
        cantidad: '1',
        precio: '81',
        description: 'Canasta tamaño para llevar con deliciosas Palomitas Cinépolis recién hechas',
        image: require('../assets/palomitas.PNG'),
    },
    {
        id: '2',
        name: 'Refresco',
        ingredientes: 'Coca Cola, Sidral, Sprite, Fanta',
        cantidad: '1',
        precio: '65',
        description: 'Refresco de la familia Coca Cola en presentacion de diferentes sabores',
        image: require('../assets/refrescos.PNG'),
    },
    {
        id: '3',
        name: 'Nachos',
        ingredientes: 'Tostitos Sabritas',
        cantidad: '1',
        precio: '60',
        description: 'Exquisitos Nachos acompañados con Delicioso Queso Cheedar',
        image: require('../assets/nachos.PNG'),
    },
    {
        id: '4',
        name: 'Hotdog',
        ingredientes: 'Pan y salchicha de cerdo',
        cantidad: '1',
        precio: '50',
        description: 'Exquisito Hot Dog Cinépolis',
        image: require('../assets/hotdog.PNG'),
    },
    {
        id: '5',
        name: 'Combo Cuates',
        ingredientes: '1 Palomitas + 2 Refrescos',
        cantidad: '1',
        precio: '176',
        description: 'Palomitas Cinépolis para llevar recién hechas y 2 Refrescos de Familia Coca Cola.',
        image: require('../assets/combo1.PNG'),
    },
    
    {
        id: '6',
        name: 'Combo Nachos Pareja',
        ingredientes: '1 Palomitas + 2 Refrescos + 1 Nachos',
        cantidad: '1',
        precio: '238',
        description: 'Palomitas Cinépolis para llevar recién hechas, 2 Refrescos de Familia Coca Cola más unos Nachos Tradicionales con Queso Cheedar',
        image: require('../assets/combo2.PNG'),
    },
    {
        id: '7',
        name: 'Maxicombo HotDog',
        ingredientes: '1 Palomitas + 2 Refrescos + 2 HotDog',
        cantidad: '1',
        precio: '281',
        description: 'Palomitas Cinépolis para llevar recién hechas, 2 Refrescos de Familia Coca Cola mas dos HotDogs Exquisitos Tradicionales.',
        image: require('../assets/combo3.PNG'),
    },
     {
        id: '8',
        name: 'Palomitas Premium',
        ingredientes: 'Takis, Doritos',
        cantidad: '1',
        precio: '91',
        description: 'Canasta tamaño para llevar con deliciosas Palomitas Cinépolis recién hechas de sabor Takis o Doritos',
        image: require('../assets/PalomitasP.PNG'),
    },

    {
        id: '9',
        name: 'Combo M&Ms',
        ingredientes: '1 Palomitas + 2 Refrescos + 1 M&Ms',
        cantidad: '1',
        precio: '154',
        description: 'Palomitas Cinépolis para llevar recién hechas, 2 Refrescos de Familia Coca Cola mas M&Ms Vip',
        image: require('../assets/combo4.PNG'),
    },
    
    {
        id: '10',
        name: 'Micha Holanda',
        ingredientes: 'Sabor Oreo, Mordisko y M&Ms',
        precio: '70',
        description: 'Delicioso helado Micha Holanda',
        image: require('../assets/micha.PNG'),
    },
    
    {
        id: '11',
        name: 'Extra Queso',
        ingredientes: '3 oz de Queso para Nachos',
        cantidad: '1',
        precio: '15',
        description: '3 oz de Queso para Nachos Cheedar Caliente',
        image: require('../assets/queso.PNG'),
    },
    {
        id: '12',
        name: 'LifeSavers',
        ingredientes: 'Gomitas',
        cantidad: '1',
        precio: '50',
        description: 'Gomitas Life Savers sabor moras salvajes 198 g.',
        image: require('../assets/lifesavers.PNG'),
    },
    
    {
        id: '13',
        name: 'M&Ms Vip Amarillos',
        ingredientes: 'Cacahuate',
        precio: '50',
        description: '124 grs de M&Ms de Cacahuate',
        image: require('../assets/m&msca.PNG'),
    },
    
    {
        id: '14',
        name: 'M&Ms Vip Cafes ',
        ingredientes: 'Chocolate',
        cantidad: '1',
        precio: '50',
        description: '124 grs de M&Ms de Chocolate',
        image: require('../assets/m&msch.PNG'),
    },

];

export default foods;