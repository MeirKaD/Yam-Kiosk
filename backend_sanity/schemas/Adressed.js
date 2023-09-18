export default {
    name: 'adresses',
    type: 'document',
    title: 'Adresses',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Adress'
      },
      {
        title:'ToAdress',
        name:'postsToAdress',
        type:'array',
        of: [{type: 'reference' , to: [{type: 'Posts'}]}]
        
      },
      {
        title:'ToAdress',
        name:'AnouncmentsToAdress',
        type:'array',
        of: [{type: 'reference' , to: [{type: 'Anouncments'}]}]
        
      }

    ]
  }

// //   //fetch data like this : 
// *[_type == 'adresses' && references('b61165d8-2267-4c5a-b571-c2c26e48c573<- this is _ref from toadress')  ] {
// //   name,
// //   postsToAdress[]-> {
// //     name // Assuming 'name' is a field in your 'Posts' type
// //   }
// // }
