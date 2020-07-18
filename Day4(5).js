function saleReward(sales){
if(sales<=5000){
reward = sales * 0.02;
}
if(sales>=5001 && sales<=10000){
reward = sales * 0.05;
}
if(sales>=10001 && sales<=20000){
reward = sales * 0.07;
}
if(sales>5000){
reward = sales * 0.10;
}

saleReward(prompt(sales));
