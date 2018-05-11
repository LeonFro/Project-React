
export default class DataBase {

    dataGoods=[
        {
        id: 2,
        goods: "Paper",
        venderId: 1
    },
    {
        id: 11,
        goods: "Furniture",
        venderId: 44
    },
    {   id:13,
        goods:"Fish",
        venderId:2

    }
];

    dataVender=[
        {
            id: 1,
            vender: "ProBox"
        },
        {
            id: 2,
            vender: "Port#1"
        },
        {
            id:44,
            vender:"IKEA"
        }
    ];

    dataStore=[{
        id: 1,
        store: "Store#1",
        capacity: 10,
        valueGoods:0
            },
        {
            id:45,
         store:"West Store",
         capacity:11,
         valueGoods:0
        }
        ];

    dataSumm=[
];

  dataDocuments=[
     
      {
        id:223,
        storeId:1,
        goodsId:13,
        quantity:1,       
    },
    {
        id:224,
        storeId:45,
        goodsId:11,
        quantity:3,    
    },
    {
        id:225,
        storeId:1,
        goodsId:2,
        quantity:1,       
    },
  ];

  dataTotal=[];

}