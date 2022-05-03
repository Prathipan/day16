const section = document.createElement("section");
const container = document.createElement("div");
const disp = document.createElement("div");
const buttons = document.createElement("div");
const Cbutton = document.createElement("div");
const BackSlashButton = document.createElement("div");
const MulButton = document.createElement("div");
const ArrButton = document.createElement("div");
const button7 = document.createElement("div");
const button8 =document.createElement("div");
const button9 = document.createElement("div");
const SubButton = document.createElement("div");
const button4 = document.createElement("div");
const button5 =document.createElement("div");
const button6 = document.createElement("div");
const AddButton = document.createElement("div");
const button1 = document.createElement("div");
const button2 =document.createElement("div");
const button3 = document.createElement("div");
const DotButton = document.createElement("div");
const Bracket1 = document.createElement("div");
const button0 = document.createElement("div");
const Bracket2 =document.createElement("div");
const EqualButton = document.createElement("div");


container.setAttribute("class","container");
disp.setAttribute("id","display");
buttons.setAttribute("class","buttons");
Cbutton.setAttribute("class","button");
BackSlashButton.setAttribute("class","button");
MulButton.setAttribute("class","button");
ArrButton.setAttribute("class","button");
button7.setAttribute("class","button");
button8.setAttribute("class","button");
button9.setAttribute("class","button");
SubButton.setAttribute("class","button");
button4.setAttribute("class","button");
button5.setAttribute("class","button");
button6.setAttribute("class","button");
AddButton.setAttribute("class","button");
button1.setAttribute("class","button");
button2.setAttribute("class","button");
button3.setAttribute("class","button");
DotButton.setAttribute("class","button");
Bracket1.setAttribute("class","button");
button0.setAttribute("class","button");
Bracket2.setAttribute("class","button");
EqualButton.setAttribute("class","button");
EqualButton.setAttribute("id","equal");

Cbutton.innerText = "C";
BackSlashButton.innerText ="/";
MulButton.innerText = "*";
ArrButton.innerHTML = "&larr;"
button7.innerText = "7";
button8.innerText = "8";
button9.innerText = "9";
SubButton.innerText = "-";
button4.innerText = "4";
button5.innerText = "5";
button6.innerText = "6";
AddButton.innerText = "+";
button1.innerText = "1";
button2.innerText = "2";
button3.innerText = "3";
DotButton.innerText = ".";
Bracket1.innerText = "(";
button0.innerText ="0";
Bracket2.innerText = ")";
EqualButton.innerText = "=";


section.append(container);
container.append(disp);
container.append(buttons);
buttons.append(Cbutton);
buttons.append(BackSlashButton);
buttons.append(MulButton);
buttons.append(ArrButton);
buttons.append(button7);
buttons.append(button8);
buttons.append(button9);
buttons.append(SubButton);
buttons.append(button4);
buttons.append(button5);
buttons.append(button6);
buttons.append(AddButton);
buttons.append(button1);
buttons.append(button2);
buttons.append(button3);
buttons.append(DotButton);
buttons.append(Bracket1);
buttons.append(button0);
buttons.append(Bracket2);
buttons.append(EqualButton);

document.body.append(section);

let display = document.getElementById("display");

let AllButtons =Array.from(document.getElementsByClassName("button"));
console.log(AllButtons);
AllButtons.map(button => {
    button.addEventListener('click',(e) => {
        console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Invalid";
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})