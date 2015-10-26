db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      "experiences_listed": true
      , "worked_on_platform": true 
      }
    },

    // Stage 2
    {
      $project: {
            	profileId: 1
              , experience_length: 1
      
      }
    },

    // Stage 3
    {
      $out: "id_experience_length_worked"
    }
  ],

  // Options
  {
    cursor: {
      batchSize: 50
    }
  }

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
