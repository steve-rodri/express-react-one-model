const { Class, Student, Instructor } = require('./models');

async function seed() {
  const students = await Student.bulkCreate([
    {
      name: 'David',
      hometown: 'Arlington',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam arcu nec diam finibus, vel congue leo vulputate. Aliquam id laoreet nunc. Sed nec porttitor diam. Aenean et rutrum lorem. Aliquam ac commodo urna. Donec et turpis molestie, rutrum orci vitae, eleifend nisl. Etiam facilisis pharetra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis risus enim, sit amet eleifend tellus cursus quis.'
    },
    {
      name: 'Sandy',
      hometown: 'Denver',
      bio:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Trevor',
      hometown: 'Los Angeles',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name:'Lisa',
      hometown: 'Seattle',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

  ]);
  process.exit()
}

seed();
