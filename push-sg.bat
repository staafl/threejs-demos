@call git add --all
@call git commit -m %*
@call git push ssh://trusting@ams7.siteground.eu:18765/home/trusting/public_html/threejs master
@call git push origin master