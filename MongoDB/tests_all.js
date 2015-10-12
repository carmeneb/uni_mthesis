db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $limit: 100
    },

    // Stage 2
    {
      $match: {
      	, profileId: 1
      	, tests: { $cond: { if: { "$ifNull": ["$details.ttsexams.tsexam.0", null] }, then: "$details.tsexams.tsexam.skl_name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.skills.skill.skl_name"} } } }
      
      }
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
