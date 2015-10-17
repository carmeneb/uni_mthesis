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
            	, job_groups_list: "$details.dev_job_categories_v2.dev_job_categories_v.groups.group.name"
      
      }
    },

    // Stage 3
    {
      $project: {
                profileId: 1
            	, job_groups: { $cond: { if: { "$ifNull": ["$job_groups_list.0", null] }, then: "$job_groups_list", else: { "$map": { "input": ["A"], "as": "el", "in": "$job_groups_list"} } } }
      
      }
    },

    // Stage 4
    {
      $unwind: "$job_groups"
    },

    // Stage 5
    {
      $group: {
            	_id: "$job_groups"
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
      $out: "ag_job_groups_worked"
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
