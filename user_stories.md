USER STORY

As the Market research team, I want to see the following:
    a. the number of times participants click on a certain image


As a focus group participant, I want the following:
    a. being able to hear a click or see my the image change border everytime i click on an image.
    b. have  a fresh sets of image after I finish clicking on the image. 
    c. have a short written description or question that asks me to perform the task of clicking on an image. 
    d. have an end. that after a certain amount of click, the exercise is over and something prompts that the exercise is over.

As the developer, I want: 
    a. randomly display pictures.
    b. I want the pictures displayed (3) to appear side by side 
    c.I want to tell the user to do an action such as 'click a picture you like most"
    d. I want to store their choice inside an object. 
    f. I want to creat a variable that stores how many times the user click/how many times they have made a choice
    e. I want to console.log the choice they click
    g. I want to create an if statement, that allows me to return the variable I have create so the user can see it if they have made a choice for 25 or more times. 
    h. percentage of times an item was clicked and was clicked when it was show. ???
    I. I want to style my app with CSS. In particular I want to apply a custom font, color palette with good contrast, layout semantic so all three images are nicely position, floting to the left, an aside display how many times the person clicked after 25 tries. 



Technical Plan. 
1. Since I  I know each image will need to have a name to identify it, and the number of clicks to know how many times it has been clicked, I know these can be properties. Therefore each image needs to be considered as an object with these properties. Since I have multiple images, and I don't want to write an object literal for each one of them, then I will create an object constructor that captures the properties I want for these images.   

2. Since I have many images, I will use my object constuctor and create new instances of these images in the object constructor.

3. Since I have many objects/pictures, I want to creat an array to hold each object that was just instantiated in step 2. 

5. I will store these instances in an array, because I want to be able to access random objects in this array. 

6. Since I want to select random objects/pictures at least 3 times, I know i will want to reuse the script/s that let me select a random pic.Since i want to reuse this scipt I know, that i must put that inside a variable. But if I will have more than one variable, I want to put that inside a function. There are two steps involved: 
    a.  I first need to select a radom number and use that as an index 
    b. once this variable is created, i will use it as an idex to randomly select a picture array, attaching that index, which is randomly selected, to the array

7. So I have now threee images I want to populate, when I put all three images ID inside one function I get a the same three pictures appear on the screen. To get around that, i create 3 different functions, each function with its own picture file path, not all three picture file path in one function. There is a way to reduce this code but I will come back to it after. 

8. Now that I have three images, I want to be able to register an event ( when ever the user those something). That event is when the user choose an image.  I call call that event "click"


      


    
