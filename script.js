function getMenu()
{
    fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json").then((response)=> response.json()).then((data)=>
    {
        let menulist=document.getElementById("menu-list");

        data.forEach((item)=> {
            let containdiv=document.createElement("div");
            containdiv.style.height="9%";
            containdiv.style.width="30%";
            containdiv.style.backgroundColor="#222222";
            containdiv.style.borderRadius="4px";
            containdiv.style.margin="10px";

            let imgcontain=document.createElement('div');
            imgcontain.style.display="flex";
            imgcontain.style.marginTop="5px";
            imgcontain.style.marginBottom="0px";
            imgcontain.style.justifyContent="center";

            let imgele=document.createElement('img');
            imgele.setAttribute("src","https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
            imgele.setAttribute("alt","default");
            imgele.style.margin="2px";
            imgele.style.height="70%";
            imgele.style.width="90%";

            let divcontain=document.createElement('div');
            divcontain.style.display="flex";
            divcontain.style.flexDirection="column";
            divcontain.style.justifyContent="space-between";
            divcontain.style.flexWrap="wrap";

            let headele=document.createElement('h2');
            headele.style.color="white";
            headele.style.marginTop="4px";
            headele.style.marginBottom="0px";
            headele.style.fontWeight="bold";
            headele.style.marginLeft="20px";

            let headcontent=document.createTextNode(item.name);

            let btnele=document.createElement("button");
            btnele.style.backgroundColor="#333333";
            btnele.style.color="gray";
            btnele.style.marginRight="20px";
            btnele.style.height="40px";
            btnele.style.width="40px";
            btnele.style.borderRadius="5px";

            let btntext=document.createTextNode("Add");
            btnele.appendChild(btntext);


            let priceele=document.createElement('h2');
            priceele.style.color="white";
            priceele.style.marginTop="2px";
            priceele.style.marginLeft="20px";
            priceele.style.fontWeight="normal";

            let pricecontent=document.createTextNode(`$${item.price}/-`);

            let lastdiv=document.createElement('div');
            lastdiv.style.display="flex";
            lastdiv.style.justifyContent="space-between";
            lastdiv.style.marginBottom="5px";
            lastdiv.style.marginTop="5px";
            lastdiv.appendChild(headele);
            lastdiv.appendChild(btnele);

            headele.appendChild(headcontent);
            priceele.appendChild(pricecontent);
            imgcontain.appendChild(imgele);
            containdiv.appendChild(imgcontain);
            divcontain.appendChild(lastdiv);
            divcontain.appendChild(priceele);
            containdiv.appendChild(divcontain);
            menulist.appendChild(containdiv);
        })
    })
}

TakeOrder=()=>{
    return new Promise((resolve)=>
        {
           setTimeout(()=>{
    
            let orderObj={"name": "CheeseBurger", "price": 5.99,"Qty": 3, };
            resolve(orderObj);
           },2500); 
    
        })
}

function orderPrep()
{
    return new Promise((resolve)=>{
        
        setTimeout(()=>{
            resolve("The order is being prepared by the Chef");
        },1500);
    })
}

function payOrder()
{
    return new Promise((resolve)=>{

        setTimeout(()=>{
          resolve(`The payment of $${3*5.99} has been made for three Cheeseburgers`);
        },1000)
    })
}

function thankyouFunc()
{
    return "Thank you for visiting AJ's Restaurant";
}

document.addEventListener("DOMContentLoaded",async ()=>{

  getMenu();

  await TakeOrder().then((orderObj)=> {alert(`${orderObj.Qty} ${orderObj.name} ordered`)});

  await orderPrep().then((msg)=> {alert(msg)});
  
  await payOrder().then((msg)=>{alert(msg)});

  alert(thankyouFunc());
})

