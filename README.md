# assignment_okodin
Build a dating app so Viking thunder gods can find love &lt;3
_--------------------------------------------------_
 Install Dependences
_--------------------------------------------------_
Yarn add

_--------------------------------------------------_
 Create Databases, Create and Migrate Models
_--------------------------------------------------_
<!-- //create databases -->
$ createdb demo_exploring_sequelize_development
$ createdb demo_exploring_sequelize_test

<!-- //adding models -->
sequelize model:create --name User --attributes "fname:string lname:string username:string email:string"

<!-- //timestamps modification//in model files -->
createdAt: {
  allowNull: false,
  type: Sequelize.DATE,
  defaultValue: Sequelize.fn('NOW')
},
updatedAt: {
  allowNull: false,
  type: Sequelize.DATE,
  defaultValue: Sequelize.fn('NOW')
}

<!-- //add to down function in models -->
return queryInterface.dropTable('Users');

<!-- migrate models to the db -->
$ sequelize db:migrate

_--------------------------------------------------_
 Seeding Databases
_--------------------------------------------------_
