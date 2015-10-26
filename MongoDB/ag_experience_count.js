db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      "experiences_listed": true
      
      }
    },

    // Stage 2
    {
      $project: {
      	profileId: 1
          , experiences_count: 1
      
      }
    },

    // Stage 3
    {
      $group: {
      _id: "$experiences_count"
      , profiles: {$addToSet: "$profileId"}
      }
    },

    // Stage 4
    {
      $project: {
      _id: 0
      , experience_number: "$_id"
            	, profiles: 1
            	, count: { $size: "$profiles" }
      }
    },

    // Stage 5
    {
      $project: {
            	experience_number: 1
            	, count: 1
      
      }
    },

    // Stage 6
    {
      $out: "ag_experience_count_all"
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
