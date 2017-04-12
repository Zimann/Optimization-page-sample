# Pizzeria Page Optimizations

## Viewing the website
* Online at : https://zimann.github.io/ 
* Locally on your machine by downloading the repository files and double-clicking the **index.html** file

## Tools Used
* Grunt  (**Gruntfile.js** and **package.json** are in the root folder)
* Optimizilla service - for image compression (Link: http://optimizilla.com/)
* Adobe Photoshop (CS3) - for image resizing

##### How to use the _**Grunt**_ tool
* You need to have **GITbash** installed and a **GIT** profile configured (https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
* Right-click on your working folder(root folder) and click **Git Bash Here**
* Install Grunt command line interface and configure Grunt with the help of this link: https://gruntjs.com/getting-started
* Two node package managers have been used for the minification tasks: 
    * **grunt-contrib-uglify**
    Link: https://www.npmjs.com/package/private-grunt-contrib-uglify
    * **grunt-contrib-cssmin**
    Link: https://www.npmjs.com/package/grunt-contrib-cssmin


### Modifications done to score above 90 on Page Speed Insights 

* Resized the pizzeria original image into two separate smaller ones (360px and 720px)
* Compressed all the present images (pizzeria.jpg and pizza.png) from the page pizza.html
* Minified style.css, bootstrap.grid.css, as well as main.js
* Removed the two **link** tags for the css files from the the head
* Inlined the entire minified css from the two files (style.css and bootstrap.grid.css) into a style tag at the bottom of the pizza.html page
* Used the picture element (**line 36** in pizza.html) to serve different picture sizes based on screen dimension and device pixel density
* linked the minified JavaScript file (main.min.js) after the style tag at the bottom of the page

### Modifications done for removing performance bottlenecks to hit 60 fps

* **CSS modifications**
   * Added **_will-change:transform_** and **_transform:translateZ(0)_** properties to the **.randomPizzaContainer** class on line **41** in the style.css file and improved the paint speed with about **20** to **30** ms on scroll
   

* **JavaScript modifications**
    * Modifications have been done in two places in the main.js file and are marked with a capital **Z** at the beginninng of the comment: 
        * The first modifications are at line: **536** and **541** 
        * The second modifications are at line: **476**, **479** and **482**
    

 





