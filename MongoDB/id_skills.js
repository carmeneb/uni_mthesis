db.profiles_phl.aggregate(

  // Pipeline
  [
    // Stage 1
    {
      $limit: 100
    },

    // Stage 2
    {
      $project: {
      	_id: 1
      	, worked_on_platform: { $cond: { if: { $or: [ { "$eq": ["$details.assignments.fp.job", true] }
                                , { "$eq": ["$details.assignments.hr.job", true] }, { $gt: [ "$details.dev_billed_assignments", 0.0 ] }, { $gt: [ "$details.dev_total_hours", 0.0 ] } ] }
                                , then: true, else: false } }

      	, billed_assignments: "$details.dev_billed_assignments"
      	, total_hours: "$details.dev_total_hours"

      	, skills_listed: { $cond: { if: "$details.skills.skill", then: true, else: false } }

      	, skills: { $cond: { if: { "$ifNull": ["$details.skills.skill.0", null] }, then: "$details.skills.skill.skl_name", else: { "$map": { "input": ["A"], "as": "el", "in": "$details.skills.skill.skl_name"} } } }

      }
    },

    // Stage 3
    {
      $project: {
      	_id: 1
      	, worked_on_platform: 1

      	, billed_assignments: 1
      	, total_hours: 1

      	, skills: 1
      	, skills_listed: 1

      	, skills_count: { $cond: { if: 	{ "$eq": ["$skills_listed", true] }, then: {$size: "$skills"}, else: 0 } }


      }
    },

    // Stage 4
    {
      $out: "id_skills"
    }

  ]

  // Created with 3T MongoChef, the GUI for MongoDB - http://3t.io/mongochef

);
