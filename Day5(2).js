class User {
            constructor(name, age, email, lucoins, course) {
                this.name = name;
                this.age = age;
                this.email = email;
                this.lucoins = 0;
                this.course = [];
            }

            login() {
                console.log(`Welcome ${this.name}.You just logged in`);
                return this;
            }

            logout() {
                console.log(`Hey ${this.name}.You logged out`);
                return this;
            }
        }

        class Moderator extends User {
            constructor(name, age, email, lucoins, role, course) {
                super(name, age, email, lucoins, course);
                this.role = "Moderator";
            }

            addCoins(user) {
                user.lucoins += 1;
                console.log(`${user.name} has ${user.lucoins} LU Coins`);
                return this;
            }

            removecoins(user) {
                if (user.lucoins > 0) {
                    user.lucoins -= 1;
                    console.log(`${user.name} has ${user.lucoins} LU Coins`);
                    return this;
                }
                else {
                    console.log(`${user.name} has ${user.lucoins} LU Coins`)
                }
            }
        }

        class Admin extends Moderator {
            constructor(name, age, email, lucoins, role, course) {
                super(name, age, email, lucoins, course);
                this.role = "Admin";
            }

            addcourse(user, coursee) {
                user.course.push(coursee);
                console.log(`${user.name} enrolled in ${user.course}`)
                return this;
            }

            deletecourse(user) {
                user.course.pop();
                console.log(`${user.name} enrolled in ${user.course}`)
                return this;
            }
        }

        let user1 = new User('Banner', 20, 'banner@gmail.com')
        let user2 = new User('Barton', 30, 'Bartonarcher@gmail.com')

        let users = [user1, user2];

        console.log(users);

        let mod = new Moderator('captainamerica', 35, 'capam@gmail.com')

        let admn = new Admin('stark', 32, 'stark@gmail.com')

        mod.addCoins(user1).addCoins(user1).removecoins(user1);

        admn.addcourse(user1, 'Course1').addcourse(user1, 'Course2').deletecourse(user1);
