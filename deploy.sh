git checkout gh-pages
git rebase master
npm install
gulp css
gulp js
git add .
git commit -m "Deployed at fallout.github.io/calendar-ui"
git push origin gh-pages
git checkout master
