db = db.getSiblingDB('finalNode')

db.createCollection('users')

db.users.insertMany([
  {
    "_id": ObjectId('674f0caef6bd2bcdda5b5e88'),
    "firstName": "Tường",
    "lastName": "Vi",
    "email": "hoanglongvu233@gmail.com",
    "password": "$2b$10$21PYc3Oe2H.4ogiuhcP5SOgk1JO170lGpq1Th5.z3MzVjE1LUeqzu",
    "image": "1733929352394_avt.jpg",
    "orders": [
      ObjectId('6751d0b39f37acba1a7f80e3'),
      ObjectId('6751d940813a43b29c6f6774'),
      ObjectId('6751dca2ff8b4da161f8d5d1'),
      ObjectId('6751de95d32e702c43708ca3'),
      ObjectId('6751df0f3e98d7748e958d7a'),
      ObjectId('6754e6b22d8398d29d112673'),
      ObjectId('67554e7f9448b615141855dc'),
      ObjectId('6757897adb4a677d151fd335'),
      ObjectId('6757abe4b1256dce73cdb283'),
      ObjectId('6757f4ce2d6bb3979394c86f'),
      ObjectId('67595ebd7f41f62d910370ea'),
      ObjectId('6759a927d52dc6e6d21b4aa6'),
      ObjectId('6759b2c12fe63270843a3e47'),
    ],
    "role": "admin",
    "verified": true,
    "createdAt": new Date('2024-12-03T13:50:38.609Z'),
    "updatedAt": new Date('2024-12-11T15:52:20.588Z'),
    "__v": 45,
    "phone": "0961283692",
    "isBanned": false,
    "purchasedProducts": [],
    "addresses": [
      {
        "province": "Phú Yên",
        "district": "Huyện Đồng Xuân",
        "ward": "Xã Xuân Long",
        "street": "Thôn Xuân Lộc 1, Xã Đắk Sắk, Huyện Đắk Mil",
        "receiverName": "Hoàng Long Vũ",
        "receiverPhone": "0961283692",
        "receiverEmail": "hoanglongvu233@gmail.com",
        "districtId": 3186,
        "_id": ObjectId('67595df594ae91fe34a0c0a2'),
        "createdAt": new Date('2024-12-11T09:40:05.227Z'),
        "updatedAt": new Date('2024-12-11T09:40:05.227Z'),
      },
      {
        "province": "Bình Định",
        "district": "Huyện Phù Mỹ",
        "ward": "Xã Mỹ Hiệp",
        "street": "Thôn Xuân Lộc 1, Xã Đắk Sắk, Huyện Đắk Mil",
        "receiverName": "Hoàng Long Vũ",
        "receiverPhone": "0961283692",
        "districtId": 3254,
        "_id": ObjectId('6759a97cd52dc6e6d21b4ac8'),
        "createdAt": new Date('2024-12-11T15:02:20.281Z'),
        "updatedAt": new Date('2024-12-11T15:02:20.281Z'),
      }
    ]
  },
  
])


db.createCollection('orders')

db.orders.insertMany([
  {
    "_id": ObjectId('67595ebd7f41f62d910370ea'),
    "user": ObjectId('674f0caef6bd2bcdda5b5e88'),
    "items": [
      {
        "product": ObjectId('6757937058c7883355fa449e'),
        "quantity": 3,
        "price": 240000,
        "variant": "M - Green",
        "_id": ObjectId('6759584ba87f5514186e61ef')
      }
    ],
    "total": 288500,
    "shippingAddress": "Thôn Xuân Lộc 1, Xã Đắk Sắk, Huyện Đắk Mil, Xã Xuân Long, Huyện Đồng Xuân, Phú Yên",
    "receiverEmail": "hoanglongvu233@gmail.com",
    "receiverName": "Hoàng Long Vũ",
    "receiverPhone": "0961283692",
    "status": "confirmed",
    "createdAt": new Date('2024-10-11T09:43:25.761Z'),
    "__v": 0
  },
  {
    "_id": ObjectId('67595ebd7f41f62d920370ea'),
    "user": ObjectId('675a775a4c379f8ab7b3ec74'),
    "items": [
      {
        "product": ObjectId('675a6b0de4a8af333f26bf9e'),
        "quantity": 3,
        "price": 240000,
        "variant": "M - Green",
        "_id": ObjectId('6759584ba87f5514186e61ef')
      }
    ],
    "total": 288500,
    "shippingAddress": "Thôn Xuân Lộc 1, Xã Đắk Sắk, Huyện Đắk Mil, Xã Xuân Long, Huyện Đồng Xuân, Phú Yên",
    "receiverEmail": "hoanglongvu233@gmail.com",
    "receiverName": "Hoàng Long Vũ",
    "receiverPhone": "0961283692",
    "status": "confirmed",
    "createdAt": new Date('2024-11-11T09:43:25.761Z'),
    "__v": 0
  },
  {
    "_id": ObjectId('67595ebd7f41f62d920370ea'),
    "user": ObjectId('675a78c54c379f8ab7b3ed1e'),
    "items": [
      {
        "product": ObjectId('675a6e42e4a8af333f26bfdd'),
        "quantity": 3,
        "price": 240000,
        "variant": "M - Green",
        "_id": ObjectId('6759584ba87f5514186e61ef')
      }
    ],
    "total": 288500,
    "shippingAddress": "Thôn Xuân Lộc 1, Xã Đắk Sắk, Huyện Đắk Mil, Xã Xuân Long, Huyện Đồng Xuân, Phú Yên",
    "receiverEmail": "hoanglongvu233@gmail.com",
    "receiverName": "Hoàng Long Vũ",
    "receiverPhone": "0961283692",
    "status": "confirmed",
    "createdAt": new Date('2024-10-11T09:43:25.761Z'),
    "__v": 0
  },  
  {
    "_id": ObjectId('67595ebd7f41f62d920370ea'),
    "user": ObjectId('675a78c54c379f8ab7b3ed1e'),
    "items": [
      {
        "product": ObjectId('675a6e42e4a8af333f26bfdd'),
        "quantity": 3,
        "price": 240000,
        "variant": "M - Green",
        "_id": ObjectId('6759584ba87f5514186e61ef')
      }
    ],
    "total": 288500,
    "shippingAddress": "Thôn Xuân Lộc 1, Xã Đắk Sắk, Huyện Đắk Mil, Xã Xuân Long, Huyện Đồng Xuân, Phú Yên",
    "receiverEmail": "hoanglongvu233@gmail.com",
    "receiverName": "Hoàng Long Vũ",
    "receiverPhone": "0961283692",
    "status": "confirmed",
    "createdAt": new Date('2024-10-11T09:43:25.761Z'),
    "__v": 0
  },  
])

