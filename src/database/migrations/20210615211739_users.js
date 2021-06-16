exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable(); 
      table.string('cpf').notNullable();
      table.string('city').notNullable();
      table.string('uf').notNullable();
      table.string('password').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };



  //exports.up = knex => knex.schema.createTable ('users', table => {

    //table.increments('id')
    //table.text('username').unique().notNullable()
//}


//)
