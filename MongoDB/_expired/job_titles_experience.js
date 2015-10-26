db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
       "experiences_count": { $gt: 0 } 
      }
    },

    // Stage 2
    {
      $limit: 100
    },

    // Stage 3
    {
      $project: {
      
      profileId: 1
       , job_history: { $cond: { if: { "$ifNull": ["$details.experiences.experience.0", null] }, then: "$details.experiences.experience.exp_title_raw", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.experiences.experience.exp_title_raw"} } } }
       
      }
    },

    // Stage 4
    {
      $unwind: "$job_history"
    },

    // Stage 5
    {
      $project: {
      _id: 0
      , job_history: 1
      }
    },

    // Stage 6
    {
      $out: "job_titles_experience_list"
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
