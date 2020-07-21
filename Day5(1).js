let num = 0;
        while (num <= 0) {
            num = prompt("Enter a positive number", 0);
            if (num == null) {
                console.log("User Cancelled");
                break;
            }
        }
        if (num > 0) {
            let arr = [];
            for (let i = 0; i < num; i++) {
                arr.push(Math.random() * (10));
            }
            console.log(arr);
            let oddnum = arr.filter(el => el % 2 != 0);
            let result = oddnum.map(el => el ** 3);
            console.log("Odd numbers in the array:");
            console.log(oddnum);
            console.log("Cube of odd numbers in the array:");
            console.log(result);
        }
