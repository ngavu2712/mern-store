const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mern-storedb";
mongoose.connect( MONGODB_URI);

const db=require("../models")

const products=[{
    "id": 1,
    "name": "FBC Men's T-Shirt",
    "price": 2400,
    "category1": "clothing",
    "category2": "men",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349433/Screen_Shot_2020-07-09_at_7.39.29_PM_isdnen.png"

},
{
    "id": 2,
    "name": "FBC Women's T-Shirt",
    "price": 2400,
    "category1": "clothing",
    "category2": "women",
    "description": "Graphic T-Shirt",
    "description2": "Heavyweight cotton is cut in a standard fit featuring a text graphic across the chest and finished with a banded crew neck.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349431/Screen_Shot_2020-07-09_at_7.42.39_PM_wew6k7.png"

},
{
    "id": 3,
    "name": "FBC Coffee Mug",
    "price": 1800,
    "category1": "accessories",
    "category2": "mug",
    "description": "It could be...",
    "description2": "This mug brings beauty to the everyday - from baking holiday cookies to traveling the world - with gifts and home goods you will cherish for years to come.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349431/Screen_Shot_2020-07-09_at_7.42.39_PM_wew6k7.png"

},
{
    "id": 4,
    "name": "FBC Tote",
    "price": 2500,
    "category1": "accessories",
    "category2": "bag",
    "description": "The bag could be filled with...",
    "description2": "This tote is sleek, stylish, and classic.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349430/Screen_Shot_2020-07-09_at_7.44.15_PM_gfmju7.png"

},
{
    "id": 5,
    "name": "FBC Spiral Notebook",
    "price": 900,
    "category1": "accessories",
    "category2": "notebook",
    "description": "Let your dreams run wild",
    "description2": "A notebook to detail everything from your feelings about a particular situation in your social life to your thoughts on a current event in the political world.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349431/Screen_Shot_2020-07-09_at_7.45.28_PM_f4alss.png"

},
{
    "id": 6,
    "name": "FBC Zip Pouch",
    "price": 1400,
    "category1": "accessories",
    "category2": "zip pouch",
    "description": "To hold all your little things",
    "description2": "This zip pouch combines chic French sensibility with no-fuss practicality.",
    "mediaUrl": "https://res.cloudinary.com/lindseytummond/image/upload/v1594349433/Screen_Shot_2020-07-09_at_7.46.08_PM_s5aaor.png"

},
// {
//     "name": "QWC Tot",
//     "price": 18.50,
//     "description": "You totes need this",
//     "mediaUrl": "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/mern/products/1504609/shirt-1592329653-6acd002459c22737c82f1931611813cf.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJpZl8iLCBbeyJ0IjogImV4cHIiLCAidiI6IFsiaGFzX2FscGhhIiwgbnVsbCwgbnVsbF19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy9tZXJuL3Byb2R1Y3RzLzE1MDQ2MDkvc2hpcnQtMTU5MjMyOTY1My02YWNkMDAyNDU5YzIyNzM3YzgyZjE5MzE2MTE4MTNjZi5wbmciLCBbWyJ0cmltIiwgW3RydWUsIGZhbHNlXSwge31dLCBbInJlc2l6ZSIsIFs0NjYuMDcxNDI4NTcxNDI4NTYsIDQ2Ni4wNzE0Mjg1NzE0Mjg1Nl0sIHsibWF4X3NjYWxlIjogMy4wfV0sIFsicGFkIiwgWzc3LjY3ODU3MTQyODU3MTQzLCA3Ny42Nzg1NzE0Mjg1NzE0MywgNzcuNjc4NTcxNDI4NTcxNDMsIDc3LjY3ODU3MTQyODU3MTQzXSwgeyJiYWNrZ3JvdW5kIjogImRhNGE1OSJ9XSwgWyJjYW52YXNfY2VudGVyZWQiLCBbNjIxLjQyODU3MTQyODU3MTQsIDYyMS40Mjg1NzE0Mjg1NzE0XSwgeyJiYWNrZ3JvdW5kIjogImRhNGE1OSJ9XV1dfSwgeyJ0IjogImNvbXAiLCAidiI6IFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvc2hvcHMvbWVybi9wcm9kdWN0cy8xNTA0NjA5L3NoaXJ0LTE1OTIzMjk2NTMtNmFjZDAwMjQ1OWMyMjczN2M4MmYxOTMxNjExODEzY2YucG5nIiwgW1sicmVzaXplIiwgWzYyMS40Mjg1NzE0Mjg1NzE0LCA2MjEuNDI4NTcxNDI4NTcxNF0sIHsibWF4X3NjYWxlIjogMy4wLCAic3R5bGUiOiAiQ1JPUCJ9XSwgWyJjYW52YXNfY2VudGVyZWQiLCBbNjIxLjQyODU3MTQyODU3MTQsIDYyMS40Mjg1NzE0Mjg1NzE0XSwgeyJiYWNrZ3JvdW5kIjogImZmZmZmZiJ9XV1dfV0sIHt9XSwgWyJlbmNvZGUiLCBbIi5wbmciXSwgeyJkcGkiOiAzMDB9XSwgWyJyZXNpemUiLCBbOTY4XSwge31dLCBbIm92ZXJsYXkiLCBbInRocmVhZGxlc3MtbWVkaWEvYXJ0aXN0X3Nob3BzL292ZXJsYXlzLzgxYjVjYmYxMDNlMTcwZGU5MTYwZjM2NGM2OGQ3NDdhL2Zyb250LTE0NzY0NjM0MzEtNmVkZGEzYzMwZDVhMmFmOTFiOTFkYzkwOTM2ODYyZDcucG5nIl0sIHsieSI6IDg1NSwgIngiOiA1MTAsICJiYWNrZ3JvdW5kIjogImRhNGE1OSJ9XSwgWyJyZXNpemUiLCBbMTUwXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFsxNTAsIDE1MCwgIiNmZmZmZmYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ=="
// },
// {

//     "name": "QWC Notebook",
//     "price": 16.20,
//     "description": "For all your great ideas",
//     "mediaUrl": "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/mern/products/1504609/shirt-1592329653-6acd002459c22737c82f1931611813cf.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJpZl8iLCBbeyJ0IjogImV4cHIiLCAidiI6IFsiaGFzX2FscGhhIiwgbnVsbCwgbnVsbF19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy9tZXJuL3Byb2R1Y3RzLzE1MDQ2MDkvc2hpcnQtMTU5MjMyOTY1My02YWNkMDAyNDU5YzIyNzM3YzgyZjE5MzE2MTE4MTNjZi5wbmciLCBbWyJ0cmltIiwgW3RydWUsIGZhbHNlXSwge31dLCBbInJlc2l6ZSIsIFszNjMuNTA4NTcxNDI4NTcxNSwgNTg1LjBdLCB7Im1heF9zY2FsZSI6IDIuMH1dLCBbInBhZCIsIFs4Mi41LCA5Ni4yMjI4NTcxNDI4NTcxNCwgODIuNSwgNjA5LjQxMTQyODU3MTQyODVdLCB7ImJhY2tncm91bmQiOiAiZGE0YTU5In1dLCBbImNhbnZhc19jZW50ZXJlZCIsIFsxMDY5LjE0Mjg1NzE0Mjg1NywgNzUwLjBdLCB7ImJhY2tncm91bmQiOiAiZGE0YTU5In1dXV19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy9tZXJuL3Byb2R1Y3RzLzE1MDQ2MDkvc2hpcnQtMTU5MjMyOTY1My02YWNkMDAyNDU5YzIyNzM3YzgyZjE5MzE2MTE4MTNjZi5wbmciLCBbWyJyZXNpemUiLCBbMTA2OS4xNDI4NTcxNDI4NTcsIDc1MC4wXSwgeyJtYXhfc2NhbGUiOiAyLjAsICJzdHlsZSI6ICJDUk9QIn1dLCBbImNhbnZhc19jZW50ZXJlZCIsIFsxMDY5LjE0Mjg1NzE0Mjg1NywgNzUwLjBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dXV19XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFsyNjkzXSwge31dLCBbImNyb3AiLCBbOTUwLCAwLCB7InQiOiAiZXhwciIsICJ2IjogWyJ3aWR0aCIsICItIiwgOTUwXX0sIHsidCI6ICJleHByIiwgInYiOiBbImhlaWdodCIsICItIiwgMF19XSwge31dLCBbIm92ZXJsYXkiLCBbInRocmVhZGxlc3MtbWVkaWEvYXJ0aXN0X3Nob3BzL292ZXJsYXlzL2Y3MWQ0ZjRjM2UyZDI1M2U0YTU3NDFkOTY1YTlkYzFlL2Zyb250LTE0ODU1Mjk0OTYtNTkzNTlmMWMwMmEzNzI5MDcwM2I1YWFkNDMwYmRjNDEucG5nIl0sIHsieSI6IDUxLCAieCI6IDAsICJiYWNrZ3JvdW5kIjogImRhNGE1OSJ9XSwgWyJyZXNpemUiLCBbMTUwXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFsxNTAsIDE1MCwgIiNmZmZmZmYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ=="
// },
// {
//     "name": "FBC Mug",
//     "price": 15.99,
//     "description": "This could be...",
//     "mediaUrl": "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/mern/products/1534117/shirt-1593579435-2fc3875e49faa24573a3e850412dba53.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJpZl8iLCBbeyJ0IjogImV4cHIiLCAidiI6IFsiaGFzX2FscGhhIiwgbnVsbCwgbnVsbF19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy9tZXJuL3Byb2R1Y3RzLzE1MzQxMTcvc2hpcnQtMTU5MzU3OTQzNS0yZmMzODc1ZTQ5ZmFhMjQ1NzNhM2U4NTA0MTJkYmE1My5wbmciLCBbWyJpZl8iLCBbeyJ0IjogImV4cHIiLCAidiI6IFsiaGFzX2FscGhhIiwgbnVsbCwgbnVsbF19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy9tZXJuL3Byb2R1Y3RzLzE1MzQxMTcvc2hpcnQtMTU5MzU3OTQzNS0yZmMzODc1ZTQ5ZmFhMjQ1NzNhM2U4NTA0MTJkYmE1My5wbmciLCBbWyJ0cmltIiwgW3RydWUsIGZhbHNlXSwge31dLCBbInJlc2l6ZSIsIFsxMDEyLjc5OTk5OTk5OTk5OTcsIDc1NC44XSwgeyJtYXhfc2NhbGUiOiAzLjB9XSwgWyJwYWQiLCBbMTc3LjYsIDEzOTIuNjAwMDAwMDAwMDAwMSwgMTc3LjYsIDEyNi42MDAwMDAwMDAwMDAwMV0sIHsiYmFja2dyb3VuZCI6ICJmZmZmZmYifV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzI1MzIuMCwgMTExMC4wXSwgeyJiYWNrZ3JvdW5kIjogImZmZmZmZiJ9XV1dfSwgeyJ0IjogImNvbXAiLCAidiI6IFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvc2hvcHMvbWVybi9wcm9kdWN0cy8xNTM0MTE3L3NoaXJ0LTE1OTM1Nzk0MzUtMmZjMzg3NWU0OWZhYTI0NTczYTNlODUwNDEyZGJhNTMucG5nIiwgW1sicmVzaXplIiwgWzI1MzIuMCwgMTExMC4wXSwgeyJtYXhfc2NhbGUiOiAzLjAsICJzdHlsZSI6ICJDUk9QIn1dLCBbImNhbnZhc19jZW50ZXJlZCIsIFsyNTMyLjAsIDExMTAuMF0sIHsiYmFja2dyb3VuZCI6ICJmZmZmZmYifV1dXX1dLCB7fV0sIFsiZW5jb2RlIiwgWyIucG5nIl0sIHsiZHBpIjogMzAwfV0sIFsiY3JvcCIsIFswLCAwLCAxMjY2LCAxMTEwLjBdLCB7fV0sIFsiY3lsaW5kZXJpemUiLCBbXSwgeyJyb3RhdGUiOiAxMCwgInJhZGl1cyI6IDQ5MCwgInBpdGNoIjogNX1dLCBbInJlc2l6ZSIsIFsxMjY2LCAxMjMwLjBdLCB7ImFsbG93X3VwIjogdHJ1ZX1dXV19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy9tZXJuL3Byb2R1Y3RzLzE1MzQxMTcvc2hpcnQtMTU5MzU3OTQzNS0yZmMzODc1ZTQ5ZmFhMjQ1NzNhM2U4NTA0MTJkYmE1My5wbmciLCBbWyJpZl8iLCBbeyJ0IjogImV4cHIiLCAidiI6IFsiaGFzX2FscGhhIiwgbnVsbCwgbnVsbF19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy9tZXJuL3Byb2R1Y3RzLzE1MzQxMTcvc2hpcnQtMTU5MzU3OTQzNS0yZmMzODc1ZTQ5ZmFhMjQ1NzNhM2U4NTA0MTJkYmE1My5wbmciLCBbWyJ0cmltIiwgW3RydWUsIGZhbHNlXSwge31dLCBbInJlc2l6ZSIsIFsxMDEyLjc5OTk5OTk5OTk5OTcsIDc1NC44XSwgeyJtYXhfc2NhbGUiOiAzLjB9XSwgWyJwYWQiLCBbMTc3LjYsIDEzOTIuNjAwMDAwMDAwMDAwMSwgMTc3LjYsIDEyNi42MDAwMDAwMDAwMDAwMV0sIHsiYmFja2dyb3VuZCI6ICJmZmZmZmYifV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzI1MzIuMCwgMTExMC4wXSwgeyJiYWNrZ3JvdW5kIjogImZmZmZmZiJ9XV1dfSwgeyJ0IjogImNvbXAiLCAidiI6IFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvc2hvcHMvbWVybi9wcm9kdWN0cy8xNTM0MTE3L3NoaXJ0LTE1OTM1Nzk0MzUtMmZjMzg3NWU0OWZhYTI0NTczYTNlODUwNDEyZGJhNTMucG5nIiwgW1sicmVzaXplIiwgWzI1MzIuMCwgMTExMC4wXSwgeyJtYXhfc2NhbGUiOiAzLjAsICJzdHlsZSI6ICJDUk9QIn1dLCBbImNhbnZhc19jZW50ZXJlZCIsIFsyNTMyLjAsIDExMTAuMF0sIHsiYmFja2dyb3VuZCI6ICJmZmZmZmYifV1dXX1dLCB7fV0sIFsiZW5jb2RlIiwgWyIucG5nIl0sIHsiZHBpIjogMzAwfV0sIFsiY3JvcCIsIFswLCAwLCAxMjY2LCAxMTEwLjBdLCB7fV0sIFsiY3lsaW5kZXJpemUiLCBbXSwgeyJyb3RhdGUiOiAxMCwgInJhZGl1cyI6IDQ5MCwgInBpdGNoIjogNX1dLCBbInJlc2l6ZSIsIFsxMjY2LCAxMjMwLjBdLCB7ImFsbG93X3VwIjogdHJ1ZX1dXV19XSwge31dLCBbIm92ZXJsYXkiLCBbInRocmVhZGxlc3MtbWVkaWEvYXJ0aXN0X3Nob3BzL292ZXJsYXlzLzUzNzA1ZTE4NmNkYjJjZmNmYzRmOWU2Y2FjYmIwN2RhL2Zyb250LTE1MDYxMDYzOTEtNzRmZjk0ZjQ2ODU1ZjAxNjJlN2I4ZTE0MTEyZjE3OTAucG5nIl0sIHsieSI6IDM3NCwgIngiOiA3MTIsICJiYWNrZ3JvdW5kIjogImZmZmZmZiJ9XSwgWyJyZXNpemUiLCBbMTUwXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFsxNTAsIDE1MCwgIiNmZmZmZmYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dfQ=="
// },
// {
  
//     "name": "FBC Spiral Notebook",
//     "price": 18.22,
//     "description": "Lined spiral notebook",
//     "mediaUrl": "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/mern/products/1534117/shirt-1593579435-2fc3875e49faa24573a3e850412dba53.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJpZl8iLCBbeyJ0IjogImV4cHIiLCAidiI6IFsiaGFzX2FscGhhIiwgbnVsbCwgbnVsbF19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy9tZXJuL3Byb2R1Y3RzLzE1MzQxMTcvc2hpcnQtMTU5MzU3OTQzNS0yZmMzODc1ZTQ5ZmFhMjQ1NzNhM2U4NTA0MTJkYmE1My5wbmciLCBbWyJ0cmltIiwgW3RydWUsIGZhbHNlXSwge31dLCBbInJlc2l6ZSIsIFs0MTEuNDA1NzE0Mjg1NzE0MywgNjIzLjc5NDI4NTcxNDI4NTZdLCB7Im1heF9zY2FsZSI6IDIuMH1dLCBbInBhZCIsIFs0Mi41MzE0Mjg1NzE0Mjg1NiwgMzUuMTIsIDQyLjUzMTQyODU3MTQyODU2LCA1NS4xODg1NzE0Mjg1NzE0Ml0sIHsiYmFja2dyb3VuZCI6ICJmZmZmZmYifV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzUwMS43MTQyODU3MTQyODU2NywgNzA4Ljg1NzE0Mjg1NzE0MjhdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dXV19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy9tZXJuL3Byb2R1Y3RzLzE1MzQxMTcvc2hpcnQtMTU5MzU3OTQzNS0yZmMzODc1ZTQ5ZmFhMjQ1NzNhM2U4NTA0MTJkYmE1My5wbmciLCBbWyJyZXNpemUiLCBbNTAxLjcxNDI4NTcxNDI4NTY3LCA3MDguODU3MTQyODU3MTQyOF0sIHsibWF4X3NjYWxlIjogMi4wLCAic3R5bGUiOiAiQ1JPUCJ9XSwgWyJjYW52YXNfY2VudGVyZWQiLCBbNTAxLjcxNDI4NTcxNDI4NTY3LCA3MDguODU3MTQyODU3MTQyOF0sIHsiYmFja2dyb3VuZCI6ICJmZmZmZmYifV1dXX1dLCB7fV0sIFsiZW5jb2RlIiwgWyIucG5nIl0sIHsiZHBpIjogMzAwfV0sIFsicmVzaXplIiwgWzExODVdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvMjdkNzUyYTY4NTMyZDUyZDJhMWQ5Yzk3NGMwZTdhZDMvZnJvbnQtMTQ4NTQ3MzY0OS1iNjlhZjUzMDQ4Y2VhNTllM2NiZWQ2MjQ2MWMxMmQyMC5wbmciXSwgeyJ5IjogMTY3LCAieCI6IDQzNCwgImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFsxNTBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzE1MCwgMTUwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19"
// },
// {
//     "name": "FBC Zip Pouch",
//     "price": 19.99,
//     "description": "For Farley, Bacon or Chicken",
//     "mediaUrl": "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/mern/products/1534117/shirt-1593579435-2fc3875e49faa24573a3e850412dba53.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJpZl8iLCBbeyJ0IjogImV4cHIiLCAidiI6IFsiaGFzX2FscGhhIiwgbnVsbCwgbnVsbF19LCB7InQiOiAiY29tcCIsICJ2IjogWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9zaG9wcy9tZXJuL3Byb2R1Y3RzLzE1MzQxMTcvc2hpcnQtMTU5MzU3OTQzNS0yZmMzODc1ZTQ5ZmFhMjQ1NzNhM2U4NTA0MTJkYmE1My5wbmciLCBbWyJ0cmltIiwgW3RydWUsIGZhbHNlXSwge31dLCBbInJlc2l6ZSIsIFsxMTQwLjAsIDc0MS4wXSwgeyJtYXhfc2NhbGUiOiAzLjB9XSwgWyJwYWQiLCBbMTQ2LjI1LCAxODAuMCwgODcuNzUsIDE4MC4wXSwgeyJiYWNrZ3JvdW5kIjogImZmZmZmZiJ9XSwgWyJjYW52YXNfY2VudGVyZWQiLCBbMTUwMC4wLCA5NzUuMF0sIHsiYmFja2dyb3VuZCI6ICJmZmZmZmYifV1dXX0sIHsidCI6ICJjb21wIiwgInYiOiBbInRocmVhZGxlc3MtbWVkaWEvYXJ0aXN0X3Nob3BzL3Nob3BzL21lcm4vcHJvZHVjdHMvMTUzNDExNy9zaGlydC0xNTkzNTc5NDM1LTJmYzM4NzVlNDlmYWEyNDU3M2EzZTg1MDQxMmRiYTUzLnBuZyIsIFtbInJlc2l6ZSIsIFsxNTAwLjAsIDk3NS4wXSwgeyJtYXhfc2NhbGUiOiAzLjAsICJzdHlsZSI6ICJDUk9QIn1dLCBbImNhbnZhc19jZW50ZXJlZCIsIFsxNTAwLjAsIDk3NS4wXSwgeyJiYWNrZ3JvdW5kIjogImZmZmZmZiJ9XV1dfV0sIHt9XSwgWyJlbmNvZGUiLCBbIi5wbmciXSwgeyJkcGkiOiAzMDB9XSwgWyJyZXNpemUiLCBbMTcxNl0sIHt9XSwgWyJvdmVybGF5IiwgWyJ0aHJlYWRsZXNzLW1lZGlhL2FydGlzdF9zaG9wcy9vdmVybGF5cy9lNGRjOTIyOTVhOWRhZWU0ZDVlMTZmZmExZDJlODEwZi9mcm9udC0xNDc2MzA5NDc0LWRhMDg3OTIzNzdlOGQ3NWNmZjZjNmUzNWNlYjIxODhhLnBuZyJdLCB7InkiOiA0MjgsICJ4IjogMTQyLCAiYmFja2dyb3VuZCI6ICJmZmZmZmYifV0sIFsicmVzaXplIiwgWzE1MF0sIHt9XSwgWyJjYW52YXNfY2VudGVyZWQiLCBbMTUwLCAxNTAsICIjZmZmZmZmIl0sIHt9XSwgWyJlbmNvZGUiLCBbImpwZyIsIDg1XSwge31dXX0="
// }


]

db.Products.create(products)
.then(res=>{
    console.log("meow")
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

