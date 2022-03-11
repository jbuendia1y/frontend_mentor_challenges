DIR=$(pwd)

echo Work Directory $DIR

PROJECTS=("/rest-countries-api-vue" "/social-media-dashboard-theme-switcher")

cd $DIR/rest-countries-api-vue
npm run build

cd $DIR/social-media-dashboard-theme-switcher
yarn build

cd $DIR
{
    mkdir github_pages
    echo github_pages folder created !!
} || {
    echo github_pages folder is already exist .
}

{
    for i in ${PROJECTS[@]};do
        mv $DIR$i/dist $i
    done
} || {
    echo 
}

echo Finished works :)