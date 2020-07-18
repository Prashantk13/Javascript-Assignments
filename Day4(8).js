let ask = (question,yes,no) => {
            if(confirm(question))
            yes();
            else
            no();
        }
        ask(
            "do you agree?",
            () => alert("you agreed."),
            () => alert("you didn't agree")
        );
