function ticketSection(){
    const ticketSectionOverview = document.getElementById('ticket-section');
    ticketSectionOverview.classList.remove('hidden');
}

function SuccessSection(){
    const nextBtn = document.getElementById('success-section');
    nextBtn.classList.remove('hidden');
}




const allTicket = document.getElementsByClassName("ticketBtn");
let count =0;

for (const btn of allTicket){
    btn.addEventListener("click",function(event){

        const seatname = event.target.innerText;
        const sitLeft = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[3].innerText;
        const price = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[5].childNodes[3].childNodes[3].childNodes[1].innerText;
        
        const addDiv = document.getElementById("add-Div");


        const div = document.createElement("div");
        div.classList.add("selected-tickets");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = seatname;
        p2.innerText = ('economic');
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        addDiv.appendChild(div);

        btn.disabled = true;

        updateTotalCost(price);
        updateGrandTotal();

        

        btn.classList.add("bg-green-300")
        btn.classList.add("text-white")
        count++
        if(count===4){
            alert("no more sit");
            btn.add.disabled;
            const CouponDiv = document.getElementById('hidden-coupon');
            CouponDiv.classList.add('hidden');

        }
        document.getElementById("changeSit").innerText = count;
        document.getElementById("deleteSit").innerText = sitLeft - 1;
       
    })

    
}


function updateGrandTotal(status){
    const totalCost = getConvertValue("total-cost");
    if(status == undefined){
        document.getElementById("grand-total").innerText = totalCost;

    }
    else{
        const cuponCode = document.getElementById("cupon-code").value ;
        
        if(cuponCode == "NEW15" ){
            const discount = totalCost * 0.15;
            
            document.getElementById("grand-total").innerText = totalCost - discount;
        }
        else if  (cuponCode == "Couple 20"){
            const discount = totalCost * 0.2;
            document.getElementById("grand-total").innerText = totalCost - discount;
        }
        else {
            alert ("please enter a valid code")
        }

    }
}


function updateTotalCost(price){
    const totalCost = getConvertValue("total-cost");
    const sum = totalCost + parseInt(price);
    
    document.getElementById("total-cost").innerText = sum;
}

function getConvertValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

