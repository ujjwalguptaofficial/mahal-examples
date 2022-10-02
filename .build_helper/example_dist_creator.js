const { copySync } = require('fs-extra');
const { appList } = require('./app_list')
const path = require('path');
const { execSync } = require('child_process');

// console.log(appList);
const rootPath = path.join(__dirname, "../");
function buildApps() {
    appList.forEach(app => {
        const appPath = path.resolve(rootPath, app.name);
        const publicPath = appPath.split('/').slice(-2).join('/');
        // console.log('publicPath', publicPath);
        execSync(`cd ${appPath} && npm ci && PUBLIC_PATH=${publicPath}  npm run deploy`);
        console.log(`build done for ${app.name}`);
        copySync(
            path.join(appPath, 'dist/'),
            path.join(rootPath, `example_dist/${app.name}`)
        );
        console.log(`copy done for ${app.name}`);
    });
}

// build lister

function buildLister() {
    const appName = 'lister'
    const appPath = path.join(__dirname, appName);
    execSync(`cd ${appPath} && npm ci && npm run deploy`);
    console.log(`build done for ${appName}`);
    copySync(path.join(appPath, 'dist'), path.join(rootPath, `example_dist`));
    console.log(`copy done for ${appName}`);
}

buildApps();
buildLister();