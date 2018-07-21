//creatinng a variable that will have the value of an array to store all the picture objects that I will create from the picture constructor
let pictureArray = [];
console.log(pictureArray)
//finding in htm elements to change its src attibute- giving it the random object.
let elPicture1 = document.getElementById('randomImage1')
let elPicture2 = document.getElementById('randomImage2')
let elPicture3 = document.getElementById('randomImage3')

//declaring variables for the picture index to have global access; they have global scopes that can be used inside and outside of function
let randomImage1;
let randomImage2;
let randomImage3;

//declaring variables outside function to have global access
let randomIndex1;
let randomIndex2;
let randomIndex3;

//declaring variable to put the values of how many times image is shown
let timesShown;




//crate an object constructor to facilitate soring each image as an object with properties i can access
let Pictures = function(name, filePath, alt,shown, click) { 
    this.name = name; 
    this.filePath = filePath;
    this.alt = alt,
    this.shown =shown,
    this.click = click; 
};

//istantiating picture objects for each image using the object constructor above and pushing into my array

let Pic1 = new Pictures ('bag','./Pictures/bag.jpg', 'A picture of a bag',0, 0);
let Pic2 = new Pictures ('banana', './Pictures/banana.jpg', 'A picture of a banana',0,0)
let Pic3 = new Pictures ('bathroom','./Pictures/bathroom.jpg', 'A picture of a bathroom',0,0);
let Pic4 = new Pictures ('boots','./Pictures/boots.jpg', 'A picture of boots',0,0);
let Pic5 = new Pictures ('breakfast','./Pictures/breakfast.jpg', 'A picture of a breakfast',0,0);
let Pic6 = new Pictures ('bubblegum','./Pictures/bubblegum.jpg', 'A picture of bubblegums',0,0);
let Pic7 = new Pictures ('chair','./Pictures/chair.jpg', 'A picture of a chair',0,0);
let Pic8 = new Pictures ('cthulhu','./Pictures/cthulhu.jpg', 'A picture of a cthulhu',0,0);
let Pic9 = new Pictures ('dog-duck','./Pictures/dog-duck.jpg', 'A picture of a dog with a duck muzzle',0,0);
let Pic10 = new Pictures ('dragon','./Pictures/dragon.jpg', 'A picture of a can with so-called dragon meat in it',0,0);
let Pic11 = new Pictures ('pen','./Pictures/pen.jpg', 'A picture of a pens',0,0);
let Pic12 = new Pictures ('pet-sweep','./Pictures/pet-sweep.jpg', 'A picture of a dog with a sweepshape like shoes on',0,0);
let Pic13 = new Pictures ('scissors','./Pictures/scissors.jpg', 'An overly intricate scissor',0,0);
let Pic14 = new Pictures ('shark','./Pictures/shark.jpg', 'A shark-like blanket',0,0);
let Pic15 = new Pictures ('sweep','./Pictures/sweep.png', 'A picture of a baby sweeping',0,0);
let Pic16 = new Pictures ('tauntaun','./Pictures/tauntaun.jpg', 'A picture of a someone in a blanket on the floor',0,0);
let Pic17 = new Pictures ('unicorn','./Pictures/unicorn.jpg', 'A picture of a can with caption unicorn meat',0,0);
let Pic18 = new Pictures ('usb','./Pictures/usb.gif', 'A picture of a USD with the tail of a dragon',0,0);
let Pic19= new Pictures ('water-can','./Pictures/water-can.jpg', 'A picture of a water can',0,0);
let Pic20 = new Pictures ('wine-glass','./Pictures/wine-glass.jpg', 'A picture of a weird wine glass',0,0);

//storing the object recently instantiated inside the picture array
pictureArray.push(Pic1,Pic2,Pic3,Pic4,Pic5,Pic6,Pic7,Pic8,Pic9,Pic10,Pic11,Pic12,Pic13,Pic14,Pic15,Pic16,Pic17,Pic18,Pic19,Pic20);


//creating while loop to have index be different everytime. 
let randomNumber = function() {
    randomIndex1=0;
    randomIndex2=0;
    randomIndex3=0;
//thinking about it again, I am not sure this while loop gives us a number that is not the same- it gives us a random number but the random number may be the same,-- while it run this loop again? I got the same picture twice
    while (randomIndex1===randomIndex2 || randomIndex1===randomImage3 || randomIndex3 === randomIndex2) {
        randomIndex1 = Math.floor(Math.random() * pictureArray.length);
        randomIndex2 = Math.floor(Math.random() * pictureArray.length);
        randomIndex3 = Math.floor(Math.random() * pictureArray.length);
    }
} 

/*let randomNumber =  function() {
    randomIndex1= Math.floor(Math.random() * pictureArray.length);
    randomIndex2= Math.floor(Math.random() * pictureArray.length);
    randomIndex3= Math.floor(Math.random() * pictureArray.length);

 if (randomIndex1===randomIndex2 || randomIndex1===randomImage3 || randomIndex3 === randomIndex2)
    randomIndex1 = pictureArray.length - randomIndex1;
    randomIndex2 = pictureArray.length - randomIndex2;
    randomIndex3 = pictureArray.length - randomIndex2;
}
*/

//function for having the first image appearing
let selectRandomImage1 = function (){
    randomNumber();
    randomImage1 = pictureArray[randomIndex1];
    randomImage1.shown+= 1;
    elPicture1.src=randomImage1.filePath 
};
selectRandomImage1();
    


//function for having the second image appearing
let selectRandomImage2 = function (){
    randomNumber()
    randomImage2 = pictureArray[randomIndex2];
    randomImage2.shown+= 1;
    elPicture2.src=randomImage2.filePath
};
selectRandomImage2();


//function for having the third image appearing
let selectRandomImage3 = function (){
    randomNumber()
    randomImage3 = pictureArray[randomIndex3];
    randomImage3.shown+= 1;
    elPicture3.src=randomImage3.filePath
    };
    selectRandomImage3();

    
//creating a function that will store my bar chart representing the number of times a picture is clicked and the number of times a picutre is shown
let barChart= function (){
    let canvas = document.getElementById("myChart")
    let ctx = canvas.getContext("2d");
    
    let myBarChart = new Chart (ctx,{
        type: 'bar',
        data: { 
            labels:[Pic1.name,Pic2.name,Pic3.name,Pic4.name,Pic5.name,Pic6.name,Pic7.name,Pic8.name,Pic9.name,Pic10.name,Pic11.name,Pic12.name,Pic13.name,Pic14.name,Pic15.name,Pic16.name,Pic17.name,Pic18.name,Pic19.name,Pic20.name,],
            datasets:[{
                label: '# of Clicks',
                backgroundColor: 'rgb(255, 99, 130)',
                    borderColor: 'rgb(255, 99, 130)',
                data: [Pic1.click,Pic2.click,Pic3.click,Pic4.click,Pic5.click,Pic6.click,Pic7.click,Pic8.click,Pic9.click,Pic10.click,Pic11.click,Pic12.click,Pic13.click,Pic14.click,Pic15.click,Pic16.click,Pic17.click,Pic18.click,Pic19.click,Pic20.click,],
            },
               {
                    label: '# of times displayed',
                    backgroundColor:'rgb(122, 23, 23)',
                    borderColor: 'rgb(122, 23, 23)',  
                data: [Pic1.shown,Pic2.shown,Pic3.shown,Pic4.shown,Pic5.shown,Pic6.shown,Pic7.shown,Pic8.shown,Pic9.shown,Pic10.shown,Pic11.shown,Pic12.shown,Pic13.shown,Pic14.shown,Pic15.shown,Pic16.shown,Pic17.shown,Pic18.shown,Pic19.shown,Pic20.shown,],
                } 
            ]
    }
})
};



   // creating a  event handler that calculates how many times the first picture is clicked
    let allImages1 = function(e) {
        randomImage1.click += 1
        selectRandomImage1();
        selectRandomImage2();
        selectRandomImage3();
        barChart();
    }

    let allImages2 = function(e) {
        randomImage2.click += 1
        selectRandomImage1();
        selectRandomImage2();
        selectRandomImage3();
        barChart();
    }

    let allImages3 = function(e) {
        randomImage3.click += 1
        selectRandomImage1();
        selectRandomImage2();
        selectRandomImage3();
        barChart();
    }
    
    //attaching eventlistener to picture tag
    elPicture1.addEventListener('click',allImages1);
    elPicture2.addEventListener('click', allImages2);
    elPicture3.addEventListener('click', allImages3);

//practicing how array works real quick for the next exercise
 xArray=['p','t','u']
for (let i =0; i<xArray.length;i++) {
    console.log(xArray[i])
}

/* start back from here
// checking for 25 clicks
let click = 0

let clickVerification =function () {
for(let i=0;i<pictureArray.length;i++){
     console.log(pictureArray[i].click)
    
}
//this needs to be put inside a function
if (clickVerification >= allClicks) {
    let message = alert('Thank you for your time. The analysis is now complete')
}};
clickVerification()
console.log(pictureArray[i])

*/ 

