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
            	, profileId: 1
            	, tests_exists: { $cond: { if: "$details.tsexams.tsexam", then: true, else: false } }
            	, tests_listed: { $cond: { if: "$details.tsexams.tsexam", then: "$details.tsexams.tsexam.ts_name_raw", else: null } }
      
      }
    },

    // Stage 3
    {
      $project: {
              	, profileId: 1
            	, tests: { $cond: { if: { "$ifNull": ["$tests_listed.0", null] }, then: "$tests_listed", else: { "$map": { "input": ["A"], "as": "el", "in": "$tests_listed"} } } }
      
      }
    },

    // Stage 4
    {
      $unwind: "$tests"
    },

    // Stage 5
    {
      $group: {
                  	_id: "$tests"
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
      $out: "ag_tests_worked"
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
