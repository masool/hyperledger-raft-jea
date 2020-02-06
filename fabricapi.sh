cd web-app/server

rm -rf wallet/

npm install

./updateKeystore.sh

node enrollAdmin.js

npm start


