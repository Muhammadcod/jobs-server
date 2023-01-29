/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.group(() => {
      Route.get('/', () => {
        return [
          {
            title: 'Frontend Developer',
            type: 'Remote',
            created_at: new Date(),
            description: '',
            location: 'Belarus',
            salary: '$50000',
            company: 'Bridge',
            skills: 'React',
          },
        ]
      }).as('index')

      Route.get('/:id', () => 'get a single post').as('show')
      Route.post('/', () => 'creating a post').as('store')
      Route.put('/:id', () => 'updating a post').as('update')
      Route.patch('/:id', () => 'partially updating a post').as('add')
      Route.delete('/:id', () => 'deleting a post').as('destroy')
    })
      .prefix('/post')
      .as('post')
  })
    .prefix('/v1')
    .as('v1')
})
  .prefix('/api')
  .as('api')
