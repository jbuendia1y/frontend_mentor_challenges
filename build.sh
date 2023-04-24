DIR=$(pwd)
MAIN_PROJECT="/challenges-main-page"

GH_PAGES_FOLDER="$DIR/gh-pages"

if [ -d "$GH_PAGES_FOLDER" ]; then
    rm -r $GH_PAGES_FOLDER
fi


echo Work Directory $DIR

PROJECTS=("/rest-countries-api-vue" "/social-media-dashboard-theme-switcher" "/faq-accordion-card-master")

for i in ${PROJECTS[@]};do
    cd $DIR$i
    if [ -f "$DIR$i/yarn.lock" ]; then
        yarn
        yarn build
    fi

    if [ -f "$DIR$i/package-lock.json" ]; then
        npm ci
        npm run build  
    fi
done


cd $DIR$MAIN_PROJECT
yarn
yarn build

cd $DIR
mkdir $GH_PAGES_FOLDER

mv -v $DIR$MAIN_PROJECT/dist/* $GH_PAGES_FOLDER/
echo MAIN_PAGE moved !!


for i in ${PROJECTS[@]};do
    if [ -d "$DIR$i/dist" ]
    then
        mv $DIR$i/dist $GH_PAGES_FOLDER/$i
    else
        cp -r $DIR$i $GH_PAGES_FOLDER/$i
    fi
    echo $i moved
done


echo Finished works !