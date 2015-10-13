db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $match: {
      	$or: [ { "details.dev_billed_assignments": { $gt: 0.0 } }
      	, { "details.dev_total_hours": { $gt: 0.0 } }
      	, { "details.assignments.fp.job": { $exists: true } }
      	, { "details.assignments.hr.job": { $exists: true } } ]

      }
    },

    // Stage 2
    {
      $project: {
      	, profileId: 1
      	, skills: { $cond: { if: { "$ifNull": ["$details.skills.skill.0", null] }, then: "$details.skills.skill.skl_name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.skills.skill.skl_name"} } } }

      }
    },

    // Stage 3
    {
      $unwind: "$skills"
    },

    // Stage 4
    {
      $group: {
            	_id: "$skills"
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
            	, count: 1

      }
    },

    // Stage 7
    {
      $out: "$ag_skills_jobs"
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
