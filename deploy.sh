set -e

npm run generate

cd dist

git init
git add -A
git commit -m 'deploy'
git remote add azure https://jakelee:joyfulWorks@brooklyn.scm.azurewebsites.net/brooklyn.git

# git pull azure
# git push -u azure +master
git push -f azure master

cd -
