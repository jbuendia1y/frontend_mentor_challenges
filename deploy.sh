bash ./build.sh

DIR=$(pwd)

cd $DIR/publish-gh-pages
yarn
yarn start

rm -r gh-pages