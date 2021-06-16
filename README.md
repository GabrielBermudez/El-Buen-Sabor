# El-Buen-Sabor

cd backend/
npm install

DEBUG=backend:* npm run devstart

######Api######

####User####

1) Endpoint: Register user

URL: http://localhost:3000/register/create 
Method: POST
BODY: {
	"name": "Juan",
	"lastname": "Perez",
	"dni": "39842421",
	"age": 24,
	"email": "jperez@gmail.com",
	"user": "JuanPerez",
	"password": "asf32msdf712asd821",
	"telephone": 2618340234,
	"mobile": 2618532943,
	"url_image": "url_imagen",
	"condition": "true",
	"address_id": 2
}

Response: {
    "status": 200,
    "error": false,
    "message": "User Created Successfully"
}


2) Endpoint: Login user

URL: http://localhost:3000/login 
Method: POST
BODY: {
	"email": "jperez@gmail.com",
	"password": "asf32msdf712asd821"
}

Response: 
{
    "status": 200,
    "error": false,
    "data": {
        "user": {
            "_id": "60bd695d3c6f711b24543fca",
            "name": "Leandro",
            "dni": 39842421,
            "age": 24,
            "email": "leandromercadosimi@gmail.com",
            "user": "LeandroMercado",
            "password": "$2b$10$S1EH/BuzTYkvCuU8ixBwz.6vq2s10lpC/gM2Fuxx2gHmLFS6uk8k6",
            "mobile": "26167766767",
            "url_image": "url_imagen",
            "condition": true,
            "rol_id": "1",
            "address_id": "2",
            "created_at": "2021-06-07T00:33:32.939Z",
            "updated_at": "2021-06-07T00:33:32.939Z",
            "__v": 0
        }
    }
}
 #or 

{
    "status": 404,
    "error": false,
    "message": "Incorrect password"
}


 #or

{
    "status": 404,
    "error": false,
    "message": "User not found"
}

#####Restaurant#####

1) Endpoint: Create data restaurant

URL: http://localhost:3000/restaurant/create
Method: POST
Body: {
    "name": "El buen sabor",
    "phone": 2613483423,
    "email": "elbuensabor@gmail.com",
    "address_id": 24,
}

Response:{
	"status":200,
	"error":false,
	"message":"restaurant created succesfully"
}

#or 

{
    status:500,
    error: true,
    message: "couldn't create restaurant"
}


2) Endpoint: Restaurant detail

URL: http://localhost:3000/restaurant/detail
Method: POST
Body: 
{
    "id": "60bd5f1d052c01139e9ba6fa"
}

Response:
{
    "status": 200,
    "error": false,
    "data": {
        "restaurant": {
            "_id": "60bd5f1d052c01139e9ba6fa",
            "name": "El buen sabor",
            "phone": 2616767667,
            "email": "elbuensabor@gmail.com",
            "created_at": "2021-06-06T23:49:49.808Z",
            "updated_at": "2021-06-06T23:49:49.808Z",
            "__v": 0
        }
    }
}

 #or

{
    "status": 500,
    "error": true,
    "message": "An error has ocurred"
}

 #or

{
    "status": 404,
    "error": true,
    "message": "restaurant not found"
}