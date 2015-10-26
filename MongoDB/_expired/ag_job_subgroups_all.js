db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $project: {
          profileId: 1
          , details: 1
      	, job_subgroups_list: "$details.dev_job_categories_v2.dev_job_categories_v.name"
      
      }
    },

    // Stage 2
    {
      $project: {
          profileId: 1
      	, job_subgroups: { $cond: { if: { "$ifNull": ["$job_subgroups_list.0", null] }, then: "$job_subgroups_list", else: { "$map": { "input": ["A"], "as": "el", "in": "$job_subgroups_list"} } } }
      }
    },

    // Stage 3
    {
      $unwind: "$job_subgroups"
    },

    // Stage 4
    {
      $group: {
      	_id: "$job_subgroups"
      	, profiles: {$addToSet: "$profileId"}
      }
    },

    // Stage 5
    {
      $project: {
      	_id: 1
      	, profiles: 1
      	, count: { $size: "$profiles" }
      }
    },

    // Stage 6
    {
      $project: {
      	_id: 1
      	, count: { $size: "$profiles" }
      
      }
    },

    // Stage 7
    {
      $out: "job_subgroups_all"
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
