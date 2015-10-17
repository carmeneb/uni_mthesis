db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      "assignments_hr_count": { $gt: 0 } 
      }
    },

    // Stage 2
    {
      $project: {
      profileId: 1
      , job_title: { $cond: { if: { "$ifNull": ["$details.assignments.hr.job.0", null] }, then: "$details.assignments.hr.job.as_opening_title", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.assignments.hr.job.as_opening_title"} } } }
      }
    },

    // Stage 3
    {
      $unwind: "$job_title"
    },

    // Stage 4
    {
      $group: {
        _id: "$job_title"
        , profiles: {$addToSet: "$profileId"}
      
      }
        
    },

    // Stage 5
    {
      $project: {
      	_id: 1
          , count: { $size: "$profiles" }
      }
    },

    // Stage 6
    {
      $out: "job_titles_hr_grouped"
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
