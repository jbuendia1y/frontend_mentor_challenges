bash ./build.sh

git add gh-pages && git commit -m "Deploy gh-pages"
git subtree push --prefix gh-pages origin gh-pages

rm -r gh-pages
git add . && git commit -m "Removing gh-pages build"
git push origin main