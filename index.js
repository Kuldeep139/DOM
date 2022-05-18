// Question1 : Write the code to access element which is having id as "text".
    
function element1(){
const element = document.getElementById("text");
}

// Question 2 : Write the code to access element which is having tag as "h1"

function element2(){
    const element = document.getElementsByTagName("h1");
}


// Question 3 : Write the code to access element which is having class as "box"

function element3(){
    const element = document.getElementsByClassName("box");
}

// Question 4 : "<h1>Hello </h1> ;;;   Change the heading from ""Hello"" to ""Hello World"" using DOM functions".

function changeText(){
    const changeText = document.getElementsByTagName("h1"); 
    changeText[0].innerText = "Hello World" 

}

// Question 4 : Create three cards on HTML page and arrange them using flex property in row 
            // or horizontal direction and also create button at the bottom named "Change Flex direction". 
            // When user clicks on this button, the cards arrangement should be changed to vertical direction.

           function changeDirection(){
               const element4 = document.getElementsByClassName("flexcontainer");
               element[0].style.flexDirection= "column"; 
           }

// Question 5 : What’s the difference between window vs document?

// ANS: // Document Object: The document object represent a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document or just document.

            // Syntax:

        // document.property_name;

    //         Window Object: The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created. 

        // Syntax:

    // window.property_name;
                        
    // Question 6 : "<h1>Hello </h1>

/* Add one style attribute and give text color as red and 
 id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"*/

//  ANS :  
const element4=document.createElement("h1")
element4.innerText="Hello"
element4.style.color="red";
element4.id="heading";
console.log(element4);

//Question 7 : Create an HTML page having content as Hello world and a button named Replace Text. 
// When user will click on this button page content should be changed to "Welcome to Elevation academy"

function textChange(){
    const element7 = document.getElementsByClassName("textChange");
    element7[0].innerText = "Welcome to Elevation academy";
}

// Question 8 : Write code to implement timer clock using JS -- display HH:MM:SS -- the time 
// should keep updating every second

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

// Question 9 : Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function printValue(){
    const element = document.querySelector("#year");
    const element1 = element.value;
    document.querySelector("#printValue").append(element1);
}

// Question 10 : "Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"

function form(){
    var form = document.createElement("form");
    form.setAttribute("method","get");
    form.setAttribute("action","submit");

var N= document.createElement("input");
var brr = document.createElement("br");
N.setAttribute("type","text");
N.setAttribute("name","Name");
N.setAttribute("placeholder","name");

var E= document.createElement("input");
E.setAttribute("type","email");
E.setAttribute("name","Email");
E.setAttribute("placeholder","email@prepbytes.com");
E.setAttribute("pattern","[a-zA-Z0-9]+@prepbyte.com")

var P= document.createElement("input");
P.setAttribute("type","number");
P.setAttribute("name","Phone no:");
P.setAttribute("placeholder","Phone number");
P.setAttribute("maxlength","12");
P.setAttribute("pattern","[91]{2}[0-9]{10}");

var DB= document.createElement("input");
DB.setAttribute("type","date");
DB.setAttribute("name","DOB");
DB.setAttribute("placeholder","DOB");
DB.setAttribute("min","1995-10-30");

form.appendChild(N);
form.appendChild(E);
form.appendChild(P);
form.appendChild(DB);
form.appendChild(brr);

document.getElementsByClassName("form")[0]
    .appendChild(form);
}
form();

