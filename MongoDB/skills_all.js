db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $project: {

          , profileId: 1
          , skills: { $cond: { if: { "$ifNull": ["$details.skills.skill.0", null] }, then: "$details.skills.skill.skl_name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.skills.skill.skl_name"} } } }
      }
    },

    // Stage 2
    {
      $unwind: "$skills"
    },

    // Stage 3
    {
      $group: {
      	_id: "$skills"
      	, profiles: {$addToSet: "$profileId"}
      }
    },

    // Stage 4
    {
      $project: {
      	_id: 1
      	, profiles: 1
      	, count: { $size: "$profiles" }
      
      }
    },

    // Stage 5
    {
      $project: {
      	_id: 1
      	, count: 1
      }
    },

    // Stage 6
    {
      $out: "skills_all"
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
