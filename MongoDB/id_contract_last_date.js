db.jobs_phl_filtered.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $project: {
      _id: 1 
      , profile_id: 1
      , cal_finish_date: 1
      }
    },

    // Stage 2
    {
      $group: {
      _id: "$profile_id"
      , finish_date: { $max: "$cal_finish_date" }
      }
    },

    // Stage 3
    {
      $out: "id_contract_last_date"
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
