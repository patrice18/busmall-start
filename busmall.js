//creatinng an variable that will have the value of an array to store all the picture objects that I will create from the picture constructor
let pictureArray = [];
console.log(pictureArray)
//finding in htm elements to change its src attibute- giving it the random object.
let elPicture1 = document.getElementById('randomImage1')
let elPicture2 = document.getElementById('randomImage2')
let elPicture3 = document.getElementById('randomImage3')

//declaring variables foe the picture index to have global access; they are global scopes that can be used inside and outside of function
let randomImage1;
let randomImage2;
let randomImage3;




//crate an object constructor to facilitate soring each image as an object with properties i can access
let Pictures = function(name, filePath, alt, click) { 
    this.name = name; 
    this.filePath = filePath;
    this.alt = alt,
    this.click = click; 
};

//istantiating picture objects for each image using the object constructor above and pushing into my array

let Pic1 = new Pictures ('bag','./Pictures/bag.jpg', 'A picture of a bag', 0);
let Pic2 = new Pictures ('banana', './Pictures/banana.jpg', 'A picture of a banana',0)
console.log(Pic2)
let Pic3 = new Pictures ('bathroom','./Pictures/bathroom.jpg', 'A picture of a bathroom',0);
let Pic4 = new Pictures ('boots','./Pictures/boots.jpg', 'A picture of boots',0);
let Pic5 = new Pictures ('breakfast','./Pictures/breakfast.jpg', 'A picture of a breakfast',0);
let Pic6 = new Pictures ('bubblegum','./Pictures/bubblegum.jpg', 'A picture of bubblegums',0);
let Pic7 = new Pictures ('chair','./Pictures/chair.jpg', 'A picture of a chair',0);
let Pic8 = new Pictures ('cthulhu','./Pictures/cthulhu.jpg', 'A picture of a cthulhu',0);
let Pic9 = new Pictures ('dog-duck','./Pictures/dog-duck.jpg', 'A picture of a dog with a duck muzzle',0);
let Pic10 = new Pictures ('dragon','./Pictures/dragon.jpg', 'A picture of a can with so-called dragon meat in it',0);
let Pic11 = new Pictures ('pen','./Pictures/pen.jpg', 'A picture of a pens',0);
let Pic12 = new Pictures ('pet-sweep','./Pictures/pet-sweep.jpg', 'A picture of a dog with a sweepshape like shoes on',0);
let Pic13 = new Pictures ('scissors','./Pictures/scissors.jpg', 'An overly intricate scissor',0);
let Pic14 = new Pictures ('shark','./Pictures/shark.jpg', 'A shark-like blanket',0);
let Pic15 = new Pictures ('sweep','./Pictures/sweep.png', 'A picture of a baby sweeping',0);
let Pic16 = new Pictures ('tauntaun','./Pictures/tauntaun.jpg', 'A picture of a someone in a blanket on the floor',0);
let Pic17 = new Pictures ('unicorn','./Pictures/unicorn.jpg', 'A picture of a can with caption unicorn meat',0);
let Pic18 = new Pictures ('usb','./Pictures/usb.gif', 'A picture of a USD with the tail of a dragon',0);
let Pic19= new Pictures ('water-can','./Pictures/water-can.jpg', 'A picture of a water can',0);
let Pic20 = new Pictures ('wine-glass','./Pictures/wine-glass.jpg', 'A picture of a weird wine glass',0);

//storing the object recently instantiated inside the picture array
pictureArray.push(Pic1,Pic2,Pic3,Pic4,Pic5,Pic6,Pic7,Pic8,Pic9,Pic10,Pic11,Pic12,Pic13,Pic14,Pic15,Pic16,Pic17,Pic18,Pic19,Pic20);



//function for having the first image appearing
let selectRandomImage1 = function (){
let randomIndex = Math.floor(Math.random() * pictureArray.length);
console.log (randomIndex)
 randomImage1 = pictureArray[randomIndex];
elPicture1.src=randomImage1.filePath 
console.log(elPicture1.src)
console.log(randomImage1)
};
selectRandomImage1();

let allImages = function() {
//function for having the second image appearing
let selectRandomImage2 = function (){
    let randomIndex = Math.floor(Math.random() * pictureArray.length);
    console.log (randomIndex)
    //adding to the random index so that it is different number for the two other images
    randomImage2 = pictureArray[randomIndex];
    elPicture2.src=randomImage2.filePath
    };
    selectRandomImage2();


//function for having the third image appearing
let selectRandomImage3 = function (){
    let randomIndex = Math.floor(Math.random() * pictureArray.length);
    console.log (randomIndex)
    //adding to the random index so that it is different number for the two other images
    randomImage3 = pictureArray[randomIndex];
    elPicture3.src=randomImage3.filePath
    console.log(elPicture3.src)
    console.log(randomImage3)
    };
    selectRandomImage3();
};
    //creating a variable that concatenate all 3 function expressions
    

   /*// creating a  event handler that calculates how many times the first picture is clicked
    let firstPicCount = function(e) {
        randomImage1.click += 1
        console.log(randomImage1.click)

    }*/

    //attaching eventlistener to picture tag
    elPicture1.addEventListener('click', allImages);
    elPicture2.addEventListener('click', allImages);
    elPicture3.addEventListener('click', allImages);
    