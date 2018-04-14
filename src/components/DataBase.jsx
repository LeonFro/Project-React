
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

    dataSumm=[{
        id:6565,
        goodsId:11,
        remainder:0,
        storeId:1,
        volumeOfGoods:4
    },  {id:6564,
    goodsId:11,
    remainder:0,
    storeId:1,
    volumeOfGoods:1},
    {id:6563,
        goodsId:13,
        remainder:0,
        storeId:1,
        volumeOfGoods:2}
];

  dataDocuments=[
      {
          id:222,
          storeId:1,
          goodsIs:13,
          quontity:2,       
      },
      {
        id:223,
        storeId:1,
        goodsIs:13,
        quontity:-1,       
    }
  ]

}