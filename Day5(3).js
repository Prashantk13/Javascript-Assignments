async function fetchtodos() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${Math.round(Math.random() * (200 - 1 + 1) + 1)}`);
            const data = await response.json();
            console.log(data);
        }
        fetchtodos();
