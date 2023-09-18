// schemas/pet.js
export default {
    name: 'Posts',
    type: 'document',
    title: 'Posts',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'תוכן ההודעה'
      },{
        title: 'מודעת פרסום',
         name: 'poster',
           type: 'image',
         options: {
            hotspot: true // <-- Defaults to false
               },
      }
      
    ]
    
  }
  // fetch by adress : adress id is inside ref()*[_type == "Posts" && references('f2de3069-6357-498c-9ca6-7772f187b017')]
