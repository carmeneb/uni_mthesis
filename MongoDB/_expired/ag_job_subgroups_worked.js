db.profiles_phl_working.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      "worked_on_platform": true
      }
    },

    // Stage 2
    {
      $project: {
                      profileId: 1
                      , details: 1
            	, job_subgroups_list: "$details.dev_job_categories_v2.dev_job_categories_v.name"
      }
    },

    // Stage 3
    {
      $project: {
                      profileId: 1
            	, job_subgroups: { $cond: { if: { "$ifNull": ["$job_subgroups_list.0", null] }, then: "$job_subgroups_list", else: { "$map": { "input": ["A"], "as": "el", "in": "$job_subgroups_list"} } } }
      
      }
    },

    // Stage 4
    {
      $unwind: "$job_subgroups"
    },

    // Stage 5
    {
      $group: {
            	_id: "$job_subgroups"
            	, profiles: {$addToSet: "$profileId"}
      
      }
    },

    // Stage 6
    {
      $project: {
            	_id: 1
            	, profiles: 1
            	, count: { $size: "$profiles" }
      
      }
    },

    // Stage 7
    {
      $project: {
            	_id: 1
            	, count: 1
      
      }
    },

    // Stage 8
    {
      $out: "ag_job_subgroups_worked"
      
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
