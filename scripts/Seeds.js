const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-storedb";
mongoose.connect( MONGODB_URI);

const db=require("../models")

const products=[
{
    "name": "QWC Men's T-Shirt",
    "price": 2400,
    "category1": "clothing",
    "category2": "men",
    "category3": "QWC",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485953/Screen_Shot_2020-07-11_at_9.31.54_AM_qssase.png"

},
{
    "name": "QWC Men's Sweatshirt",
    "price": 4500,
    "category1": "clothing",
    "category2": "men",
    "category3": "QWC",
    "description": "Sweatshirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485960/Screen_Shot_2020-07-11_at_9.34.28_AM_vxknfv.png"

},
{
    "name": "QWC Women's T-Shirt",
    "price": 2400,
    "category1": "clothing",
    "category2": "women",
    "category3": "QWC",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485953/Screen_Shot_2020-07-11_at_9.37.11_AM_wvvvgd.png"
},
{
    "name": "QWC Women's Tank",
    "price": 1800,
    "category1": "clothing",
    "category2": "women",
    "category3": "QWC",
    "description": "Graphic Tank",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485962/Screen_Shot_2020-07-11_at_9.38.49_AM_gn7btv.png"
},
{
    "name": "QWC Coffee Mug",
    "price": 1800,
    "category1": "accessories",
    "category2": "mug",
    "category3": "QWC",
    "description": "It could be...",
    "description2": "This mug brings beauty to the everyday - from baking holiday cookies to traveling the world - with gifts and home goods you will cherish for years to come.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485954/Screen_Shot_2020-07-11_at_9.41.16_AM_uronry.png"

},
{ 
    "name": "QWC Tote",
    "price": 2500,
    "category1": "accessories",
    "category2": "bag",
    "category3": "QWC",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485957/Screen_Shot_2020-07-11_at_9.41.42_AM_fttqpw.png"

},
{
    "name": "QWC Spiral Notebook",
    "price": 900,
    "category1": "accessories",
    "category2": "notebook",
    "category3": "QWC",
    "description": "Let your dreams run wild",
    "description2": "A notebook to detail everything from your feelings about a particular situation in your social life to your thoughts on a current event in the political world.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485957/Screen_Shot_2020-07-11_at_9.42.17_AM_diuuut.png"

},
{
    "name": "QWC Zip Pouch",
    "price": 1400,
    "category1": "accessories",
    "category2": "zip pouch",
    "category3": "QWC",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485961/Screen_Shot_2020-07-11_at_9.42.55_AM_pf2fpt.png"

},
{
    "name": "QWC Sticker",
    "price": 400,
    "category1": "accessories",
    "category2": "sticker",
    "category3": "QWC",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594485960/Screen_Shot_2020-07-11_at_9.39.44_AM_e8m5ay.png"

},

]

db.Products.create(products)
.then(res=>{
    console.log("meow")
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

