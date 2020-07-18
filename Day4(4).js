//Calculator 
 alert("Following are operators:  + - * / % sqrt ")
        let arr = prompt("Enter an expression with two operands and one operator seperated by spaces.Example:5 + 5").trim().split(" ");
        switch(arr[1]){
            case '+':
            console.log(Number(arr[0])+Number(arr[2]));
            break;
            case '-':
            console.log(Number(arr[0])-Number(arr[2]));
            break;
            case '*':
            console.log(Number(arr[0])*Number(arr[2]));
            break;
            case '/':
            console.log(Number(arr[0])/Number(arr[2]));
            break;
            case 'sqrt':
            console.log(Math.sqrt(Number(arr[0]),Number(arr[2])));
            break;
            case '%':
            console.log(Number(arr[0]) / Number(arr[2]) * 100);
            break;
            }
            
