DIR=$(pwd)
MAIN_PROJECT="/challenges-main-page"

GH_PAGES_FOLDER="$DIR/gh-pages"

if [ -d $GH_PAGES_FOLDER ]; then
    rm -r $GH_PAGES_FOLDER
fi


echo Work Directory $DIR

PROJECTS=("/rest-countries-api-vue" "/social-media-dashboard-theme-switcher")

NPM_PROJECTS=("/rest-countries-api-vue")

for i in ${NPM_PROJECTS[@]};do
    cd $DIR$i
    npm ci
    npm run build  
done

YARN_PROJECTS=("/social-media-dashboard-theme-switcher")

for i in ${YARN_PROJECTS[@]};do
    cd $DIR$i
    yarn
    yarn build
done

cd $DIR$MAIN_PROJECT
yarn
yarn build

cd $DIR/publish-gh-pages
yarn

cd $DIR
mkdir $GH_PAGES_FOLDER

mv -v $DIR$MAIN_PROJECT/dist/* $GH_PAGES_FOLDER/
echo MAIN_PAGE moved !!

{
    for i in ${PROJECTS[@]};do
        mv $DIR$i/dist $GH_PAGES_FOLDER/$i
        echo $i moved
    done
} || {
    echo 
}

echo Finished works !