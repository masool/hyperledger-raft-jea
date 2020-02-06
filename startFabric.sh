cd first-network/

./byfn.sh down

docker stop $(docker ps -a -q)  ; docker rm -f $(docker ps -aq) ; docker system prune -a ; docker volume prune ; docker ps -a ; docker images -a ; docker volume ls

cd ../web-app/server

rm -rf wallet/

cd ../../first-network

./byfn.sh generate -o etcdraft

./byfn.sh up -o etcdraft -l node


