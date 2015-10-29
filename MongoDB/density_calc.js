db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
         "worked_on_platform": true 
         , length_on_platform:  { $gt: 0 } 
      }
    },

    // Stage 2
    {
      $limit: 100
    },

    // Stage 3
    {
      $project: {
        length_on_platform: 1
        , billed_assignments: 1
        , density: { $divide: [ "$billed_assignments", { $divide: [ "$length_on_platform", 365 ] } ] }
      
      
      }
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
