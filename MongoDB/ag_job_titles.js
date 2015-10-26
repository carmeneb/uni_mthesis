db.jobs_phl_all.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
       "type": "Fixed" 
      }
    },

    // Stage 2
    {
      $group: {
      _id: "$job_title"
                    , jobs: {$addToSet: "$_id"}
      }
    },

    // Stage 3
    {
      $project: {
      _id: 1
                   , count: { $size: "$jobs" }
      }
    },

    // Stage 4
    {
      $out: "ag_job_titles_fp"
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
