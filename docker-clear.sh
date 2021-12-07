rm -rf ./it-firm/node_modules
rm -rf ./it-firm/dist
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -q)
docker rm -f $(docker ps -a -q)