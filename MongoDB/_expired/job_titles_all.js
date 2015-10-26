db.jobs_phl_all.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $group: {
        _id: "$job_title"
              , profiles: {$addToSet: "$profile_id"}
      }
    },

    // Stage 2
    {
      $project: {
       _id: 1
             , count: { $size: "$profiles" }
      }
    },

    // Stage 3
    {
      $out: "job_titles_all"
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
