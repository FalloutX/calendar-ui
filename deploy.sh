git checkout deploy
npm install
gulp css
gulp js
git add .
git commit -m "Deployed at fallout.github.io/calendar-ui"
git push origin deploy
git checkout master
